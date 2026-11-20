import { cp, mkdir, access } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { request } from 'node:https';
import { createWriteStream } from 'node:fs';
import { rename, rm } from 'node:fs/promises';
import { build } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const visionPackage = path.dirname(require.resolve('@mediapipe/tasks-vision'));
const wasmSource = path.join(visionPackage, 'wasm');
const wasmTarget = path.join(root, 'public', 'mediapipe', 'wasm');
const modelPath = path.join(root, 'public', 'models', 'pose_landmarker_lite.task');
const avatarPath = path.join(root, 'public', 'models', 'mpfb.glb');
const avatarUrl = 'https://raw.githubusercontent.com/met4citizen/TalkingHead/1563de184c19b310de4b636664d5835e2c74dbba/avatars/mpfb.glb';
const workerPath = path.join(root, 'public', 'pose.worker.js');
const poseModels = {
  lite: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',
  full: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task',
  heavy: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task',
};
const handModel = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

await mkdir(wasmTarget, { recursive: true });
await mkdir(path.dirname(modelPath), { recursive: true });
await cp(wasmSource, wasmTarget, { recursive: true, force: true });
await Promise.all(Object.entries(poseModels).map(([name, url]) => (
  ensureDownload(path.join(path.dirname(modelPath), `pose_landmarker_${name}.task`), url)
)));
await ensureDownload(path.join(path.dirname(modelPath), 'hand_landmarker.task'), handModel);
await ensureDownload(avatarPath, avatarUrl);
await build({
  entryPoints: [path.join(root, 'src', 'pose.worker.js')],
  outfile: workerPath,
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2022',
});
console.log('MediaPipe WASM, pose and hand models, human rigged avatar, and classic CPU worker are ready in public/.');

async function ensureDownload(filePath, url) {
  try {
    await access(filePath);
  } catch {
    await download(url, filePath);
  }
}

function download(url, destination) {
  return new Promise((resolve, reject) => {
    const temporaryPath = `${destination}.download`;
    const fetch = (address) => {
      const requestHandle = request(address, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          response.resume();
          fetch(new URL(response.headers.location, address));
          return;
        }
        if (response.statusCode !== 200) {
          response.resume();
          fail(new Error(`Asset download failed with HTTP ${response.statusCode}: ${address}`));
          return;
        }
        const output = createWriteStream(temporaryPath);
        response.pipe(output);
        output.on('error', fail);
        output.on('finish', async () => {
          output.close();
          try {
            await rename(temporaryPath, destination);
            resolve();
          } catch (error) {
            fail(error);
          }
        });
      });
      requestHandle.setTimeout(300000, () => requestHandle.destroy(new Error(`Asset download timed out: ${address}`)));
      requestHandle.on('error', fail);
      requestHandle.end();
    };
    const fail = async (error) => {
      await rm(temporaryPath, { force: true });
      reject(error);
    };
    fetch(url);
  });
}
