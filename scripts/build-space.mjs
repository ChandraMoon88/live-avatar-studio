import { cp, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const visionPackage = path.dirname(require.resolve('@mediapipe/tasks-vision'));
const visionVersion = require(path.join(visionPackage, 'package.json')).version;
const spaceDist = path.join(root, 'space-dist');

process.env.VITE_DEFAULT_POSE_TIER = 'device';
await build({
  root,
  base: '/studio/',
  publicDir: false,
  build: { outDir: spaceDist, emptyOutDir: true },
});
await mkdir(spaceDist, { recursive: true });
await cp(path.join(root, 'public', 'pose.worker.js'), path.join(spaceDist, 'pose.worker.js'));
await writeFile(path.join(spaceDist, 'vision-version.txt'), `${visionVersion}\n`);
console.log(`Built the Space web app with MediaPipe Tasks Vision ${visionVersion}.`);
