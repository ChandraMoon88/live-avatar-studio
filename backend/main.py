import asyncio
import time
import urllib.request
from pathlib import Path

import cv2
import mediapipe as mp
import numpy as np
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from mediapipe.tasks import python
from mediapipe.tasks.python import vision


MODEL_URLS = {
    "lite": (
        "https://storage.googleapis.com/mediapipe-models/pose_landmarker/"
        "pose_landmarker_lite/float16/1/pose_landmarker_lite.task"
    ),
    "full": (
        "https://storage.googleapis.com/mediapipe-models/pose_landmarker/"
        "pose_landmarker_full/float16/1/pose_landmarker_full.task"
    ),
    "heavy": (
        "https://storage.googleapis.com/mediapipe-models/pose_landmarker/"
        "pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task"
    ),
}
MODEL_DIRECTORY = Path(__file__).parent

app = FastAPI(title="Form Live Pose Server")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5188", "http://127.0.0.1:5188"],
    allow_methods=["*"],
    allow_headers=["*"],
)
APP_DIRECTORY = Path(__file__).resolve().parent.parent / "dist"


@app.middleware("http")
async def set_isolation_headers(request, call_next):
    response = await call_next(request)
    response.headers["Cross-Origin-Opener-Policy"] = "same-origin"
    response.headers["Cross-Origin-Embedder-Policy"] = "require-corp"
    return response

landmarker = None
hand_landmarker = None
loaded_model = None
loaded_people = 1
inference_lock = asyncio.Lock()
last_timestamp = 0


def create_landmarkers(model_name: str, people: int):
    model_path = MODEL_DIRECTORY / f"pose_landmarker_{model_name}.task"
    if not model_path.exists():
        temporary_path = model_path.with_suffix(".task.download")
        try:
            urllib.request.urlretrieve(MODEL_URLS[model_name], temporary_path)
            temporary_path.replace(model_path)
        except Exception:
            temporary_path.unlink(missing_ok=True)
            raise
    pose_options = vision.PoseLandmarkerOptions(
        base_options=python.BaseOptions(model_asset_path=str(model_path), delegate=python.BaseOptions.Delegate.CPU),
        running_mode=vision.RunningMode.VIDEO,
        num_poses=people,
        min_pose_detection_confidence=0.55,
        min_tracking_confidence=0.55,
    )
    hand_path = MODEL_DIRECTORY / "hand_landmarker.task"
    if not hand_path.exists():
        temporary_path = hand_path.with_suffix(".task.download")
        try:
            urllib.request.urlretrieve(
                "https://storage.googleapis.com/mediapipe-models/hand_landmarker/"
                "hand_landmarker/float16/1/hand_landmarker.task",
                temporary_path,
            )
            temporary_path.replace(hand_path)
        except Exception:
            temporary_path.unlink(missing_ok=True)
            raise
    hand_options = vision.HandLandmarkerOptions(
        base_options=python.BaseOptions(model_asset_path=str(hand_path), delegate=python.BaseOptions.Delegate.CPU),
        running_mode=vision.RunningMode.VIDEO,
        num_hands=2,
        min_hand_detection_confidence=0.5,
        min_hand_presence_confidence=0.5,
        min_tracking_confidence=0.5,
    )
    return (
        vision.PoseLandmarker.create_from_options(pose_options),
        vision.HandLandmarker.create_from_options(hand_options),
    )


@app.on_event("shutdown")
async def shutdown():
    global landmarker, hand_landmarker, loaded_model
    if landmarker is not None:
        landmarker.close()
    if hand_landmarker is not None:
        hand_landmarker.close()
    landmarker = None
    hand_landmarker = None
    loaded_model = None


async def select_landmarker(model_name: str, people: int = 1):
    global landmarker, hand_landmarker, loaded_model, loaded_people
    if loaded_model == model_name and loaded_people == people and landmarker is not None:
        return
    if landmarker is not None:
        landmarker.close()
    if hand_landmarker is not None:
        hand_landmarker.close()
    landmarker, hand_landmarker = await asyncio.to_thread(create_landmarkers, model_name, people)
    loaded_model = model_name
    loaded_people = people


@app.get("/health")
async def health():
    return {
        "status": "ok",
        "engine": "CPU",
        "model_ready": landmarker is not None,
        "model": loaded_model,
        "people": loaded_people,
    }


def infer_pose(frame_bytes: bytes, timestamp_ms: int):
    global last_timestamp
    started = time.perf_counter()
    encoded = np.frombuffer(frame_bytes, dtype=np.uint8)
    bgr_frame = cv2.imdecode(encoded, cv2.IMREAD_COLOR)
    if bgr_frame is None:
        raise ValueError("The WebSocket frame was not a valid image.")
    rgb_frame = cv2.cvtColor(bgr_frame, cv2.COLOR_BGR2RGB)
    image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb_frame)
    last_timestamp = max(timestamp_ms, last_timestamp + 1)
    result = landmarker.detect_for_video(image, last_timestamp)
    hand_result = hand_landmarker.detect_for_video(image, last_timestamp)
    poses = result.pose_landmarks or []
    all_landmarks = [
        [{"x": point.x, "y": point.y, "z": point.z, "visibility": point.visibility} for point in pose]
        for pose in poses
    ]
    hands_by_pose = [associate_hands(hand_result.hand_landmarks, pose) for pose in poses]
    landmarks = all_landmarks[0] if all_landmarks else None
    hands = hands_by_pose[0] if hands_by_pose else {"left": None, "right": None}
    joint_quaternions = {}
    if poses:
        pose = poses[0]
        segments = {
            "left_upper_arm": (11, 13), "left_forearm": (13, 15),
            "right_upper_arm": (12, 14), "right_forearm": (14, 16),
            "left_upper_leg": (23, 25), "left_lower_leg": (25, 27),
            "right_upper_leg": (24, 26), "right_lower_leg": (26, 28),
        }
        for name, (start, end) in segments.items():
            joint_quaternions[name] = segment_quaternion(pose[start], pose[end])
    return {
        "landmarks": landmarks,
        "poses": all_landmarks,
        "hands": hands,
        "hands_by_pose": hands_by_pose,
        "joint_quaternions": joint_quaternions,
        "latency_ms": (time.perf_counter() - started) * 1000,
        "engine": "CPU",
        "model": loaded_model,
        "people": loaded_people,
    }


def associate_hands(hand_landmarks, pose):
    wrists = []
    for side, index in (("left", 15), ("right", 16)):
        point = pose[index]
        if point.visibility >= 0.2:
            wrists.append((side, point))
    candidates = []
    for hand in hand_landmarks:
        if len(hand) < 21:
            continue
        wrist = hand[0]
        for side, pose_wrist in wrists:
            distance = ((wrist.x - pose_wrist.x) ** 2 + (wrist.y - pose_wrist.y) ** 2) ** 0.5
            candidates.append((distance, side, hand))
    assignments = {"left": None, "right": None}
    used_hands = set()
    used_sides = set()
    for distance, side, hand in sorted(candidates, key=lambda candidate: candidate[0]):
        identity = id(hand)
        if distance > 0.16 or identity in used_hands or side in used_sides:
            continue
        assignments[side] = [
            {"x": point.x, "y": point.y, "z": point.z}
            for point in hand
        ]
        used_hands.add(identity)
        used_sides.add(side)
    return assignments


def segment_quaternion(start, end):
    direction = np.array([start.x - end.x, start.y - end.y, start.z - end.z], dtype=np.float64)
    length = np.linalg.norm(direction)
    if length < 1e-8:
        return [0.0, 0.0, 0.0, 1.0]
    direction /= length
    up = np.array([0.0, 1.0, 0.0])
    dot = float(np.clip(np.dot(up, direction), -1.0, 1.0))
    if dot < -0.999999:
        return [1.0, 0.0, 0.0, 0.0]
    xyz = np.cross(up, direction)
    quaternion = np.append(xyz, 1.0 + dot)
    quaternion /= np.linalg.norm(quaternion)
    return quaternion.tolist()


@app.websocket("/ws/pose")
async def pose_socket(websocket: WebSocket):
    global last_timestamp
    model_name = websocket.query_params.get("model", "lite")
    try:
        people = int(websocket.query_params.get("people", "1"))
    except ValueError:
        people = 0
    if model_name not in MODEL_URLS or people not in (1, 2, 3, 4):
        await websocket.close(code=1008, reason="model must be lite, full, or heavy and people must be 1-4")
        return
    await websocket.accept()
    last_timestamp = 0
    try:
        async with inference_lock:
            await select_landmarker(model_name, people)
        while True:
            frame = await websocket.receive_bytes()
            timestamp_ms = int(time.monotonic() * 1000)
            async with inference_lock:
                result = await asyncio.to_thread(infer_pose, frame, timestamp_ms)
            await websocket.send_json(result)
    except WebSocketDisconnect:
        pass
    except (ValueError, cv2.error) as error:
        await websocket.send_json({"error": str(error)})
        await websocket.close(code=1003, reason="Invalid video frame")


if APP_DIRECTORY.is_dir():
    app.mount("/", StaticFiles(directory=str(APP_DIRECTORY), html=True), name="web")
