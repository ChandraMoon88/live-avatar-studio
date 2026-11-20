import mimetypes
import os
import shutil
import threading
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import gradio as gr
import spaces
from fastapi import HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware import Middleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request


mimetypes.add_type("application/wasm", ".wasm")
mimetypes.add_type("model/gltf-binary", ".glb")
mimetypes.add_type("application/octet-stream", ".task")

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "space-dist"
VISION_VERSION = (DIST / "vision-version.txt").read_text(encoding="utf-8").strip()
POSE_MODELS = {
    "pose_landmarker_lite.task": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
    "pose_landmarker_full.task": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
    "pose_landmarker_heavy.task": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task",
    "hand_landmarker.task": "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
}
MODEL_LOCKS = {name: threading.Lock() for name in POSE_MODELS}
AVATAR_URL = "https://raw.githubusercontent.com/met4citizen/TalkingHead/1563de184c19b310de4b636664d5835e2c74dbba/avatars/mpfb.glb"
WASM_FILES = (
    "vision_wasm_internal.js",
    "vision_wasm_internal.wasm",
    "vision_wasm_module_internal.js",
    "vision_wasm_module_internal.wasm",
    "vision_wasm_nosimd_internal.js",
    "vision_wasm_nosimd_internal.wasm",
)


def download_asset(url: str, destination: Path) -> None:
    if destination.is_file() and destination.stat().st_size:
        return

    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = destination.with_name(f"{destination.name}.download")
    request = urllib.request.Request(url, headers={"User-Agent": "LiveAvatarStudio/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=180) as response, temporary.open("wb") as output:
            if response.status != 200:
                raise RuntimeError(f"Asset download failed with HTTP {response.status}: {url}")
            shutil.copyfileobj(response, output)
        if not temporary.stat().st_size:
            raise RuntimeError(f"Asset download returned an empty file: {url}")
        temporary.replace(destination)
    except Exception:
        temporary.unlink(missing_ok=True)
        raise


def prepare_assets() -> None:
    assets = [
        (POSE_MODELS["pose_landmarker_lite.task"], DIST / "models" / "pose_landmarker_lite.task"),
        (POSE_MODELS["hand_landmarker.task"], DIST / "models" / "hand_landmarker.task"),
    ]
    assets.append((AVATAR_URL, DIST / "models" / "mpfb.glb"))
    wasm_root = f"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@{VISION_VERSION}/wasm"
    assets.extend((f"{wasm_root}/{name}", DIST / "mediapipe" / "wasm" / name) for name in WASM_FILES)

    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(download_asset, url, destination) for url, destination in assets]
        for future in futures:
            future.result()


prepare_assets()

@spaces.GPU
def zero_gpu_ready():
    return True


with gr.Blocks(css="""
html, body, .gradio-container { margin: 0 !important; padding: 0 !important; width: 100% !important; max-width: none !important; min-height: 100% !important; }
""") as demo:
    gr.HTML("""
<iframe
  src="/studio/"
  title="Live Avatar Studio"
  allow="camera; autoplay; fullscreen"
  style="position:fixed;inset:0;width:100vw;height:100vh;border:0;z-index:99999;background:#0c0e13">
</iframe>
""")


class IsolationHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers["Cross-Origin-Opener-Policy"] = "same-origin"
        response.headers["Cross-Origin-Embedder-Policy"] = "require-corp"
        return response


async def health():
    return {"status": "ok"}


def get_model(filename: str):
    if filename not in {*POSE_MODELS, "mpfb.glb"}:
        raise HTTPException(status_code=404, detail="Model not found")
    model_path = DIST / "models" / filename
    if filename in POSE_MODELS:
        with MODEL_LOCKS[filename]:
            download_asset(POSE_MODELS[filename], model_path)
    elif not model_path.is_file():
        download_asset(AVATAR_URL, model_path)
    return FileResponse(model_path)


def configure_app(app):
    app.add_api_route("/health", health, methods=["GET"])
    app.add_api_route("/studio/models/{filename}", get_model, methods=["GET"])
    app.mount("/studio", StaticFiles(directory=DIST, html=True), name="web")

if __name__ == "__main__":
    demo.launch(
        server_name="0.0.0.0",
        server_port=int(os.environ.get("GRADIO_SERVER_PORT", "7860")),
        prevent_thread_lock=True,
        app_kwargs={"middleware": [Middleware(IsolationHeadersMiddleware)]},
    )
    configure_app(demo.app)
    threading.Event().wait()
