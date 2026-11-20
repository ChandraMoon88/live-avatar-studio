---
title: Live Avatar Studio
emoji: 🎥
colorFrom: purple
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
---

# Form — Live Avatar Studio

React, Three.js, and MediaPipe pose and hand tracking for a live webcam avatar. The stage loads a rigged, skinned glTF humanoid instead of a placeholder; on-device CPU tracking is the local default, and this repository can also run the FastAPI inference server as a Hugging Face Docker Space.

## Hugging Face Space

The Docker image serves the web app and CPU inference from one Space, defaults to server inference, and does not intentionally save frames. Webcam images are sent to the Space while tracking is active; keep the Space private unless you intend to let others use it. Hugging Face currently lists CPU Basic as 2 vCPUs and 16 GB RAM with $0 hardware usage, but compute-based Spaces require a PRO plan for personal accounts. CPU Basic Spaces sleep after 48 hours of inactivity. See [Spaces pricing](https://huggingface.co/pricing#spaces) and the [hardware requirements](https://huggingface.co/docs/hub/spaces-overview#hardware-resources).

## Run the web app

```powershell
npm install
npm run dev
```

Open [http://localhost:5188](http://localhost:5188) and allow camera access. The first run downloads MediaPipe Lite, Full, and Heavy pose models, the hand-landmark model, the WASM runtime, and a rigged glTF character into `public/`; a working internet connection is needed once. Choose Lite for the fastest CPU tracking, Full for a quality/speed balance, or Heavy for higher quality at lower frame rates. Select one to four people to track; one person is the faster default. The CPU worker also runs separate hand inference for up to two hands, so finger articulation and multi-person tracking use more CPU than pose-only single-person tracking. After the initial download, models are served locally. The on-device tracker uses the CPU and sends no webcam frames to a server. Vite serves the assets with the COOP/COEP headers required for WebAssembly.

## Optional local Python pose server

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r backend\requirements.txt
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000
```

Choose **Local server** before starting the camera. The Python server downloads the pose and hand models on first launch and accepts JPEG frames at `ws://localhost:8000/ws/pose`. This mode sends live camera frames to the local Python process; it does not connect to a hosted service.

Use `npm run build` to create a production build.

The rigged human avatar is the CC0 `mpfb.glb` character from [TalkingHead / MPFB](https://github.com/met4citizen/TalkingHead/blob/1563de184c19b310de4b636664d5835e2c74dbba/README.md#L369-L371). The model is loaded locally after setup; webcam inference only changes its rig and does not recreate a photoreal digital twin of the camera user. Body-part motion is retargeted independently, with hand and finger joints driven by the separate hand tracker. Occlusion, fast motion, camera motion, and body/mesh contact can still cause errors; the 29 research scenarios require the corresponding test clips for evaluation and are not guarantees of accuracy.
