---
title: Live Avatar Studio
emoji: 🎥
colorFrom: purple
colorTo: indigo
sdk: gradio
sdk_version: 5.42.0
app_file: app.py
pinned: false
---

# Form — Live Avatar Studio

React, Three.js, and MediaPipe pose and hand tracking for a live webcam avatar. The Space hosts the web app and its model assets; pose and hand inference run in each visitor's browser. Camera frames are not sent to the Space, and ZeroGPU is not used for inference.

## Hugging Face Space deployment

This repository is configured for the Gradio SDK and can be connected to the Space at `https://huggingface.co/spaces/chandrashekar8/liveavatar`. The build output in `space-dist/` contains the browser application; the Space downloads its WASM files, pose and hand models, and rigged avatar when it starts. Visitors open the Space URL over HTTPS, grant that browser camera permission, and select **Start camera**. Choose **Lite · fastest** and **People: 1** for the best performance on lower-powered devices.

Inference is on-device. Each visitor's browser performs its own tracking, so users do not share an inference queue or send camera footage to the Space. Selecting ZeroGPU does not accelerate this version; it is only the hosting hardware setting. The optional Python backend below is for a server running on the same local computer, not the hosted Space.

To update the existing Space, upload `app.py`, `requirements.txt`, this `README.md`, and the contents of `space-dist/` to its **Files and versions** tab, preserving the `space-dist/assets/` subfolder structure, then commit the upload. The Space does not automatically sync from this GitHub repository.

## Run the web app

```powershell
npm install
npm run dev
```

Open [http://localhost:5188](http://localhost:5188) and allow camera access. The first run downloads MediaPipe Lite, Full, and Heavy pose models, the hand-landmark model, the WASM runtime, and a rigged glTF character into `public/`; a working internet connection is needed once. Choose Lite for the fastest tracking, Full for a quality/speed balance, or Heavy for higher quality at lower frame rates. Select one to four people to track; one person is the faster default. The browser worker also runs separate hand inference for up to two hands, so finger articulation and multi-person tracking use more CPU than pose-only single-person tracking. On-device tracking sends no webcam frames to a server. Vite serves the assets with the COOP/COEP headers required for WebAssembly.

Build the static frontend for the Space with:

```powershell
npm run build:space
```

Commit the updated `space-dist/` output along with `app.py`, `requirements.txt`, and this README when updating the Space.

## Optional local Python pose server

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r backend\requirements.txt
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000
```

Choose **Local server** before starting the camera. The Python server downloads the pose and hand models on first launch and accepts JPEG frames at `ws://localhost:8000/ws/pose`. This mode sends live camera frames to the local Python process; it does not connect to the hosted Space. The hosted app hides this option and always uses on-device inference.

Use `npm run build` to create a production build.

The rigged human avatar is the CC0 `mpfb.glb` character from [TalkingHead / MPFB](https://github.com/met4citizen/TalkingHead/blob/1563de184c19b310de4b636664d5835e2c74dbba/README.md#L369-L371). The model is downloaded and served by the Space but rendered in the visitor's browser; it does not recreate a photoreal digital twin of the camera user. Body-part motion is retargeted independently, with hand and finger joints driven by the separate hand tracker. Occlusion, fast motion, camera motion, and body/mesh contact can still cause errors; the 29 research scenarios require the corresponding test clips for evaluation and are not guarantees of accuracy.
