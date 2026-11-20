import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';

const BONE_SEGMENTS = {
  spine: ['Spine', 'Spine1'],
  neck: ['Neck', 'Head'],
  head: ['Head', 'Jaw'],
  leftUpperArm: ['LeftArm', 'LeftForeArm'],
  leftForearm: ['LeftForeArm', 'LeftHand'],
  leftHand: ['LeftHand', 'LeftHandMiddle1'],
  rightUpperArm: ['RightArm', 'RightForeArm'],
  rightForearm: ['RightForeArm', 'RightHand'],
  rightHand: ['RightHand', 'RightHandMiddle1'],
  leftUpperLeg: ['LeftUpLeg', 'LeftLeg'],
  leftLowerLeg: ['LeftLeg', 'LeftFoot'],
  rightUpperLeg: ['RightUpLeg', 'RightLeg'],
  rightLowerLeg: ['RightLeg', 'RightFoot'],
  leftIndex: ['LeftHandIndex1', 'LeftHandIndex2'],
  leftIndexTip: ['LeftHandIndex2', 'LeftHandIndex3'],
  leftMiddle: ['LeftHandMiddle1', 'LeftHandMiddle2'],
  leftMiddleTip: ['LeftHandMiddle2', 'LeftHandMiddle3'],
  leftRing: ['LeftHandRing1', 'LeftHandRing2'],
  leftRingTip: ['LeftHandRing2', 'LeftHandRing3'],
  leftPinky: ['LeftHandPinky1', 'LeftHandPinky2'],
  leftPinkyTip: ['LeftHandPinky2', 'LeftHandPinky3'],
  leftThumb: ['LeftHandThumb1', 'LeftHandThumb2'],
  leftThumbTip: ['LeftHandThumb2', 'LeftHandThumb3'],
  rightIndex: ['RightHandIndex1', 'RightHandIndex2'],
  rightIndexTip: ['RightHandIndex2', 'RightHandIndex3'],
  rightMiddle: ['RightHandMiddle1', 'RightHandMiddle2'],
  rightMiddleTip: ['RightHandMiddle2', 'RightHandMiddle3'],
  rightRing: ['RightHandRing1', 'RightHandRing2'],
  rightRingTip: ['RightHandRing2', 'RightHandRing3'],
  rightPinky: ['RightHandPinky1', 'RightHandPinky2'],
  rightPinkyTip: ['RightHandPinky2', 'RightHandPinky3'],
  rightThumb: ['RightHandThumb1', 'RightHandThumb2'],
  rightThumbTip: ['RightHandThumb2', 'RightHandThumb3'],
};

const vec = (x, y, z = 0) => new THREE.Vector3(x, y, z);
let avatarAssetPromise;

function loadAvatarAsset() {
  if (!avatarAssetPromise) {
    avatarAssetPromise = new Promise((resolve, reject) => {
      new GLTFLoader().load('/models/mpfb.glb', (gltf) => resolve(gltf.scene), undefined, reject);
    }).catch((error) => {
      avatarAssetPromise = null;
      throw error;
    });
  }
  return avatarAssetPromise;
}

function filterRotation(filter, target, time) {
  if (!filter.value) {
    filter.value = target.clone();
    filter.time = time;
    filter.derivative = 0;
    return filter.value;
  }
  const dt = Math.max((time - filter.time) / 1000, 1 / 120);
  const speed = filter.value.angleTo(target) / dt;
  const derivativeAlpha = 1 - Math.exp(-2 * Math.PI * 1.0 * dt);
  filter.derivative += derivativeAlpha * (speed - filter.derivative);
  const cutoff = 1.2 + 0.035 * filter.derivative;
  filter.value.slerp(target, 1 - Math.exp(-2 * Math.PI * cutoff * dt));
  filter.time = time;
  return filter.value;
}

function filterPosition(filter, target, time) {
  if (!filter.value) {
    filter.value = target.clone();
    filter.time = time;
    filter.derivative = 0;
    return filter.value;
  }
  const dt = Math.max((time - filter.time) / 1000, 1 / 120);
  const speed = filter.value.distanceTo(target) / dt;
  const derivativeAlpha = 1 - Math.exp(-2 * Math.PI * 1.0 * dt);
  filter.derivative += derivativeAlpha * (speed - filter.derivative);
  const cutoff = 1.2 + 0.035 * filter.derivative;
  filter.value.lerp(target, 1 - Math.exp(-2 * Math.PI * cutoff * dt));
  filter.time = time;
  return filter.value;
}

export function createAvatar(scene) {
  const root = new THREE.Group();
  scene.add(root);
  const modelRoot = new THREE.Group();
  root.add(modelRoot);
  const joints = new Map();
  const filters = new Map();
  const positionFilter = {};
  const posePoints = new Map();
  let latestLandmarks = null;
  let latestHands = null;
  let bodyScale = { height: 100, weight: 50, skinTone: '#c88c68', clothing: '#7c79ff' };

  const ready = loadAvatarAsset().then((source) => {
      const character = cloneSkeleton(source);
      modelRoot.add(character);
      character.traverse((object) => {
        if (!object.isMesh) return;
        object.castShadow = true;
        object.receiveShadow = true;
        if (object.material) {
          object.material = Array.isArray(object.material)
            ? object.material.map((material) => material.clone())
            : object.material.clone();
        }
      });

      const bounds = new THREE.Box3().setFromObject(character);
      const size = bounds.getSize(new THREE.Vector3());
      const fitScale = 3.25 / Math.max(size.y, 0.001);
      character.scale.multiplyScalar(fitScale);
      character.position.y = -bounds.min.y * fitScale - 1.68;
      character.position.x = -(bounds.min.x + bounds.max.x) * 0.5 * fitScale;
      character.position.z = -(bounds.min.z + bounds.max.z) * 0.5 * fitScale;
      character.updateMatrixWorld(true);

      const bonesByName = new Map();
      character.traverse((object) => {
        if (object.name) bonesByName.set(object.name, object);
      });
      for (const [key, [boneName, childName]] of Object.entries(BONE_SEGMENTS)) {
        const bone = bonesByName.get(boneName);
        const child = bonesByName.get(childName);
        if (!bone || !child) {
          throw new Error(`Rig bone is missing: ${boneName} or ${childName}`);
        }
        bone.updateWorldMatrix(true, false);
        child.updateWorldMatrix(true, false);
        const origin = bone.getWorldPosition(new THREE.Vector3());
        const end = child.getWorldPosition(new THREE.Vector3());
        const restDirection = end.sub(origin).normalize();
        joints.set(key, {
          bone,
          restDirection,
          restWorldQuaternion: bone.getWorldQuaternion(new THREE.Quaternion()),
        });
      }

      configure(bodyScale);
      update(latestLandmarks, latestHands);
      return character;
  });

  function landmarkPoint(landmarks, index, fallback) {
    const point = landmarks?.[index];
    if (!point || (point.visibility ?? 1) < 0.2) return fallback;
    return vec((point.x - 0.5) * 3.1, (0.56 - point.y) * 3.35, THREE.MathUtils.clamp(-point.z * 1.4, -0.65, 0.65));
  }

  function trackedPoint(landmarks, name, index, fallback) {
    const point = landmarks?.[index];
    if (point && (point.visibility ?? 1) >= 0.2) {
      const position = landmarkPoint(landmarks, index, fallback);
      posePoints.set(name, position);
      return position;
    }
    return posePoints.get(name) ?? fallback;
  }

  function applyDirection(key, start, end, now) {
    const joint = joints.get(key);
    if (!joint) return;
    const targetDirection = end.clone().sub(start).normalize();
    if (targetDirection.lengthSq() < 0.01) return;

    const delta = new THREE.Quaternion().setFromUnitVectors(joint.restDirection, targetDirection);
    const desiredWorld = delta.multiply(joint.restWorldQuaternion);
    joint.bone.parent.updateWorldMatrix(true, false);
    const parentWorld = joint.bone.parent.getWorldQuaternion(new THREE.Quaternion());
    const desiredLocal = parentWorld.invert().multiply(desiredWorld);
    const filter = filters.get(key) ?? {};
    filters.set(key, filter);
    joint.bone.quaternion.copy(filterRotation(filter, desiredLocal, now));
    joint.bone.updateWorldMatrix(false, true);
  }

  function update(landmarks, hands = null) {
    latestLandmarks = landmarks;
    latestHands = hands;
    if (!joints.size) return;

    const fallback = {
      leftShoulder: vec(0.39, 0.98), rightShoulder: vec(-0.39, 0.98),
      leftElbow: vec(0.55, 0.68), rightElbow: vec(-0.55, 0.68),
      leftWrist: vec(0.6, 0.36), rightWrist: vec(-0.6, 0.36),
      leftHip: vec(0.2, 0.0), rightHip: vec(-0.2, 0.0),
      leftKnee: vec(0.21, -0.76), rightKnee: vec(-0.21, -0.76),
      leftAnkle: vec(0.21, -1.5), rightAnkle: vec(-0.21, -1.5),
      leftEar: vec(0.08, 1.48), rightEar: vec(-0.08, 1.48),
      leftEye: vec(0.04, 1.53), rightEye: vec(-0.04, 1.53),
      leftMouth: vec(0.02, 1.43), rightMouth: vec(-0.02, 1.43),
    };
    const p = (name, index) => trackedPoint(landmarks, name, index, fallback[name]);
    const leftShoulder = p('leftShoulder', 11);
    const rightShoulder = p('rightShoulder', 12);
    const leftElbow = p('leftElbow', 13);
    const rightElbow = p('rightElbow', 14);
    const leftWrist = p('leftWrist', 15);
    const rightWrist = p('rightWrist', 16);
    const leftEar = p('leftEar', 7);
    const rightEar = p('rightEar', 8);
    const leftEye = p('leftEye', 2);
    const rightEye = p('rightEye', 5);
    const leftMouth = p('leftMouth', 9);
    const rightMouth = p('rightMouth', 10);
    const leftHip = p('leftHip', 23);
    const rightHip = p('rightHip', 24);
    const leftKnee = p('leftKnee', 25);
    const rightKnee = p('rightKnee', 26);
    const leftAnkle = p('leftAnkle', 27);
    const rightAnkle = p('rightAnkle', 28);
    const shoulders = leftShoulder.clone().add(rightShoulder).multiplyScalar(0.5);
    const hips = leftHip.clone().add(rightHip).multiplyScalar(0.5);

    const targetRootPosition = vec(
      THREE.MathUtils.clamp(hips.x, -1.4, 1.4),
      THREE.MathUtils.clamp(hips.y, -0.35, 0.55),
      THREE.MathUtils.clamp(hips.z, -0.5, 0.5),
    );

    const now = performance.now();
    root.position.copy(filterPosition(positionFilter, targetRootPosition, now));
    const directions = [
      ['spine', hips, shoulders],
      ['neck', shoulders, leftEar.clone().add(rightEar).multiplyScalar(0.5)],
      ['head', leftEye.clone().add(rightEye).multiplyScalar(0.5), leftMouth.clone().add(rightMouth).multiplyScalar(0.5)],
      ['leftUpperArm', leftShoulder, leftElbow],
      ['leftForearm', leftElbow, leftWrist],
      ['rightUpperArm', rightShoulder, rightElbow],
      ['rightForearm', rightElbow, rightWrist],
      ['leftUpperLeg', leftHip, leftKnee],
      ['leftLowerLeg', leftKnee, leftAnkle],
      ['rightUpperLeg', rightHip, rightKnee],
      ['rightLowerLeg', rightKnee, rightAnkle],
    ];
    directions.forEach(([key, start, end]) => applyDirection(key, start, end, now));
    applyHand('left', hands?.left, now);
    applyHand('right', hands?.right, now);
  }

  function applyHand(side, handLandmarks, now) {
    if (!handLandmarks || handLandmarks.length < 21) return;
    const points = handLandmarks.map((point) => (
      vec(
        (point.x - 0.5) * 3.1,
        (0.56 - point.y) * 3.35,
        THREE.MathUtils.clamp(-point.z * 1.4, -0.65, 0.65),
      )
    ));
    applyDirection(`${side}Hand`, points[0], points[9], now);
    const fingers = [
      ['Index', 5], ['Middle', 9], ['Ring', 13], ['Pinky', 17], ['Thumb', 1],
    ];
    fingers.forEach(([name, base]) => {
      const joint = `${side}${name}`;
      applyDirection(joint, points[base], points[base + 1], now);
      applyDirection(`${joint}Tip`, points[base + 1], points[base + 2], now);
    });
  }

  function configure(settings) {
    bodyScale = { ...bodyScale, ...settings };
    const heightScale = bodyScale.height / 100;
    const widthScale = 0.82 + (bodyScale.weight / 100) * 0.36;
    modelRoot.scale.set(widthScale, heightScale, widthScale);
    modelRoot.position.y = 1.68 * (heightScale - 1);
    for (const object of modelRoot.children) {
      object.traverse?.((mesh) => {
        if (!mesh.isMesh || !mesh.material) return;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((material) => {
          if (material.name === 'Human.body' && material.color) material.color.set(bodyScale.skinTone);
          if (material.name === 'Human.female_casualsuit01' && material.color) material.color.set(bodyScale.clothing);
        });
      });
    }
    if (joints.size) update(latestLandmarks, latestHands);
  }

  function reset() {
    latestLandmarks = null;
    latestHands = null;
    posePoints.clear();
    filters.clear();
    positionFilter.value = null;
    root.position.set(0, 0, 0);
    update(null, null);
  }

  return { root, ready, update, configure, reset };
}

export function createAvatarManager(scene) {
  const maxAvatars = 4;
  const tracks = new Map();
  let nextId = 0;
  const primary = createAvatar(scene);
  tracks.set(nextId++, {
    avatar: primary,
    center: null,
    velocity: { x: 0, y: 0 },
    lastSeen: performance.now(),
    misses: 0,
  });

  function centerOf(landmarks) {
    const hips = [landmarks?.[23], landmarks?.[24]].filter((point) => point && point.visibility >= 0.2);
    const shoulders = [landmarks?.[11], landmarks?.[12]].filter((point) => point && point.visibility >= 0.2);
    const points = hips.length ? hips : shoulders;
    if (!points.length) return null;
    return {
      x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
      y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
    };
  }

  function update(poses, handsByPose = []) {
    const detections = (Array.isArray(poses) ? poses : poses ? [poses] : [])
      .map((landmarks, index) => ({ landmarks, index, center: centerOf(landmarks) }))
      .filter((detection) => detection.center);
    const now = performance.now();
    const candidates = [];
    tracks.forEach((track, id) => {
      if (!track.center) return;
      const elapsed = Math.max((now - track.lastSeen) / 1000, 1 / 120);
      const predicted = {
        x: track.center.x + track.velocity.x * elapsed,
        y: track.center.y + track.velocity.y * elapsed,
      };
      detections.forEach((detection, detectionIndex) => {
        candidates.push({
          id,
          detectionIndex,
          distance: Math.hypot(detection.center.x - predicted.x, detection.center.y - predicted.y),
        });
      });
    });
    candidates.sort((a, b) => a.distance - b.distance);
    const assignments = new Map();
    const usedDetections = new Set();
    candidates.forEach(({ id, detectionIndex, distance }) => {
      if (distance > 0.4 || assignments.has(id) || usedDetections.has(detectionIndex)) return;
      assignments.set(id, detectionIndex);
      usedDetections.add(detectionIndex);
    });
    tracks.forEach((track, id) => {
      if (track.center || detections.length === 0 || usedDetections.size >= detections.length) return;
      const detectionIndex = detections.findIndex((_, index) => !usedDetections.has(index));
      if (detectionIndex < 0) return;
      assignments.set(id, detectionIndex);
      usedDetections.add(detectionIndex);
    });
    detections.forEach((detection, detectionIndex) => {
      if (usedDetections.has(detectionIndex) || tracks.size >= maxAvatars) return;
      const avatar = createAvatar(scene);
      const id = nextId++;
      tracks.set(id, {
        avatar,
        center: null,
        velocity: { x: 0, y: 0 },
        lastSeen: now,
        misses: 0,
      });
      assignments.set(id, detectionIndex);
      usedDetections.add(detectionIndex);
    });
    tracks.forEach((track, id) => {
      const detectionIndex = assignments.get(id);
      if (detectionIndex === undefined) {
        track.misses += 1;
        if (id !== 0 && now - track.lastSeen > 1500) {
          scene.remove(track.avatar.root);
          tracks.delete(id);
        }
        return;
      }
      const detection = detections[detectionIndex];
      const elapsed = Math.max((now - track.lastSeen) / 1000, 1 / 120);
      if (track.center) {
        const vx = (detection.center.x - track.center.x) / elapsed;
        const vy = (detection.center.y - track.center.y) / elapsed;
        track.velocity.x = THREE.MathUtils.clamp(vx, -2, 2);
        track.velocity.y = THREE.MathUtils.clamp(vy, -2, 2);
      }
      track.center = detection.center;
      track.lastSeen = now;
      track.misses = 0;
      track.avatar.update(detection.landmarks, handsByPose[detection.index] ?? null);
    });
  }

  function configure(settings) {
    tracks.forEach((track) => track.avatar.configure(settings));
  }

  function reset() {
    tracks.forEach((track, id) => {
      if (id !== 0) {
        scene.remove(track.avatar.root);
        tracks.delete(id);
        return;
      }
      track.avatar.reset();
      track.center = null;
      track.velocity = { x: 0, y: 0 };
      track.lastSeen = performance.now();
      track.misses = 0;
    });
  }

  return {
    root: primary.root,
    ready: primary.ready,
    update,
    configure,
    reset,
  };
}
