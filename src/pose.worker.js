import { FilesetResolver, HandLandmarker, PoseLandmarker } from '@mediapipe/tasks-vision';

let landmarker;
let handLandmarker;
let busy = false;

async function createLandmarker() {
  const model = ['lite', 'full', 'heavy'].includes(self.selectedModel) ? self.selectedModel : 'lite';
  const people = [1, 2, 3, 4].includes(self.maxPeople) ? self.maxPeople : 1;
  const files = await FilesetResolver.forVisionTasks(
    `${self.location.origin}/mediapipe/wasm`,
    false,
  );
  const pose = await PoseLandmarker.createFromOptions(files, {
    baseOptions: {
      modelAssetPath: `/models/pose_landmarker_${model}.task`,
      delegate: 'CPU',
    },
    runningMode: 'VIDEO',
    numPoses: people,
    minPoseDetectionConfidence: 0.55,
    minTrackingConfidence: 0.55,
  });
  const hands = await HandLandmarker.createFromOptions(files, {
    baseOptions: {
      modelAssetPath: '/models/hand_landmarker.task',
      delegate: 'CPU',
    },
    runningMode: 'VIDEO',
    numHands: 2,
    minHandDetectionConfidence: 0.5,
    minHandPresenceConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });
  return { pose, hands, people };
}

self.onmessage = async ({ data }) => {
  if (data.type === 'init') {
    self.selectedModel = data.model;
    self.maxPeople = data.people;
    try {
      const trackers = await createLandmarker();
      landmarker = trackers.pose;
      handLandmarker = trackers.hands;
      self.postMessage({ type: 'ready', engine: 'CPU', model: self.selectedModel, people: trackers.people });
    } catch (error) {
      self.postMessage({ type: 'error', message: error instanceof Error ? error.message : String(error) });
    }
    return;
  }

  if (data.type !== 'frame' || !landmarker || busy) return;
  busy = true;
  const started = performance.now();
  try {
    const result = landmarker.detectForVideo(data.bitmap, data.timestamp);
    const hands = handLandmarker.detectForVideo(data.bitmap, data.timestamp);
    const poses = result.landmarks ?? [];
    const handsByPose = poses.map((pose) => associateHands(hands.landmarks ?? [], pose));
    const latency = performance.now() - started;
    self.postMessage({
      type: 'pose',
      landmarks: poses[0] ?? null,
      poses,
      hands: handsByPose[0] ?? { left: null, right: null },
      handsByPose,
      latency,
      timestamp: data.timestamp,
    });
  } catch (error) {
    self.postMessage({ type: 'error', message: error instanceof Error ? error.message : String(error) });
  } finally {
    data.bitmap.close();
    busy = false;
  }
};

function associateHands(hands, pose) {
  if (!pose || hands.length === 0) return { left: null, right: null };
  const wrists = [
    { side: 'left', point: pose[15] },
    { side: 'right', point: pose[16] },
  ].filter(({ point }) => point && point.visibility >= 0.2);
  const assignments = { left: null, right: null };
  const candidates = hands.flatMap((landmarks) => {
    const wrist = landmarks[0];
    if (!wrist || landmarks.length < 21) return [];
    return wrists.map(({ side, point }) => ({
      side,
      landmarks,
      distance: Math.hypot(wrist.x - point.x, wrist.y - point.y),
    }));
  }).sort((a, b) => a.distance - b.distance);
  const usedHands = new Set();
  const usedSides = new Set();
  candidates.forEach(({ side, landmarks, distance }) => {
    if (distance > 0.16 || usedHands.has(landmarks) || usedSides.has(side)) return;
    assignments[side] = landmarks;
    usedHands.add(landmarks);
    usedSides.add(side);
  });
  return assignments;
}
