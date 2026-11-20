import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Camera, Check, ChevronDown, CircleHelp, Cpu, Expand, Gauge, Move3d, RotateCcw, ScanFace, Settings2, SlidersHorizontal, Sparkles, UserRound, X } from 'lucide-react';
import { createAvatarManager } from './avatar.js';

const CONNECTIONS = [
  [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19],
  [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20],
  [11, 23], [12, 24], [23, 24], [23, 25], [25, 27], [27, 29], [29, 31],
  [27, 31], [24, 26], [26, 28], [28, 30], [30, 32], [28, 32],
  [0, 11], [0, 12],
];
const HAND_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15],
  [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17],
];

function Stage({ stageRef, renderFps }) {
  return <div className="stage" ref={stageRef}>
    <div className="stage-vignette" />
    <div className="stage-caption"><span className="status-dot" /> LIVE STAGE <span className="caption-divider">/</span> 01</div>
    <div className="stage-bottom"><span>FRONT VIEW</span><span className="stage-bottom-center">FORM <i>STUDIO</i></span><span>3D VIEWPORT <b>·</b> {renderFps || '--'} FPS</span></div>
  </div>;
}

function Preview({ videoRef, canvasRef, fps, latency, engine, status, poseDetected, cameraDevices, cameraDeviceId, onCameraChange }) {
  return <section className="preview-card">
    <div className="preview-media">
      <video ref={videoRef} autoPlay muted playsInline />
      <canvas ref={canvasRef} />
      {status !== 'active' && <div className="preview-empty"><div className="preview-empty-icon"><Camera size={19} /></div><span>Camera preview</span><small>{status === 'loading' ? 'Allow camera access to continue' : 'Waiting for camera'}</small></div>}
      <div className="preview-label"><span className="recording-dot" /> LIVE PREVIEW</div>
      <div className="preview-stats"><span><Gauge size={12} /> {fps} <small>FPS</small></span><i /><span>{latency ? `${Math.round(latency)} ms` : '-- ms'}</span><i /><span><Cpu size={12} /> {engine}</span></div>
      <button className="expand-button" aria-label="Expand preview"><Expand size={14} /></button>
    </div>
    <div className="preview-footer"><span><ScanFace size={14} /> Pose tracking</span><span className={`tracking-state ${status === 'active' && !poseDetected ? 'searching' : ''}`}>{status !== 'active' ? 'Ready' : poseDetected ? 'Person found' : 'Finding person'} <span /></span></div>
    {cameraDevices.length > 1 && <div className="preview-device-row"><label htmlFor="camera-device">CAMERA INPUT</label><select id="camera-device" aria-label="Camera input" value={cameraDeviceId} onChange={(event) => onCameraChange(event.target.value)}>{cameraDevices.map((device, index) => <option key={device.deviceId} value={device.deviceId}>{device.label || `Camera ${index + 1}`}</option>)}</select></div>}
  </section>;
}

function getCameraError(cause) {
  if (cause?.name === 'NotAllowedError' || cause?.name === 'SecurityError') {
    return 'Camera access is blocked. Use the site controls beside the address bar to allow camera access for this site, then reload and try again. Also check your device privacy settings.';
  }
  if (cause?.name === 'NotFoundError' || cause?.name === 'DevicesNotFoundError') {
    return 'No camera was found. Connect or enable a webcam, then try again.';
  }
  if (cause?.name === 'NotReadableError' || cause?.name === 'TrackStartError') {
    return 'The camera is already in use or unavailable. Close other camera apps and try again.';
  }
  if (cause?.name === 'TimeoutError') {
    return 'Camera permission is still pending. Allow camera access in the browser prompt or site controls, then try again.';
  }
  return cause instanceof Error ? cause.message : 'Camera could not be started.';
}

function App() {
  const isLocalHost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
  const serverLabel = 'Local server';
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const workerRef = useRef(null);
  const streamRef = useRef(null);
  const frameBusy = useRef(false);
  const serverFrameBusy = useRef(false);
  const startAttemptRef = useRef(0);
  const cancelCameraRequestRef = useRef(null);
  const userSelectedCameraRef = useRef(false);
  const avatarRef = useRef(null);
  const filterRef = useRef({ landmarks: null, last: 0 });
  const serverFrameTime = useRef(0);
  const [tier, setTier] = useState(import.meta.env.VITE_DEFAULT_POSE_TIER === 'server' && isLocalHost ? 'server' : 'device');
  const [poseModel, setPoseModel] = useState('lite');
  const [maxPeople, setMaxPeople] = useState(1);
  const [status, setStatus] = useState('idle');
  const [engine, setEngine] = useState('CPU');
  const [fps, setFps] = useState(0);
  const [renderFps, setRenderFps] = useState(0);
  const [latency, setLatency] = useState(0);
  const [poseDetected, setPoseDetected] = useState(false);
  const [error, setError] = useState('');
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [settings, setSettings] = useState({ height: 100, weight: 50, skinTone: '#c88c68', clothing: '#7c79ff' });
  const [serverState, setServerState] = useState('disconnected');
  const [cameraDevices, setCameraDevices] = useState([]);
  const [cameraDeviceId, setCameraDeviceId] = useState('');

  useEffect(() => {
    const container = stageRef.current;
    if (!container) return undefined;
    let renderer;
    let observer;
    try {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#101219');
      scene.fog = new THREE.Fog('#101219', 7, 17);
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
      camera.position.set(0, 1.35, 7.5);
      camera.lookAt(0, 0.45, 0);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;
      container.prepend(renderer.domElement);

      scene.add(new THREE.HemisphereLight('#d9e3ff', '#25222b', 2.1));
      const key = new THREE.DirectionalLight('#fff0df', 3.2);
      key.position.set(-3.5, 5, 4);
      key.castShadow = true;
      key.shadow.mapSize.set(1024, 1024);
      scene.add(key);
      const fill = new THREE.DirectionalLight('#8c92ff', 1.7);
      fill.position.set(4, 2, 2);
      scene.add(fill);
      const rim = new THREE.PointLight('#d677a0', 9, 8);
      rim.position.set(0, 3.5, -2.4);
      scene.add(rim);

      const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 30),
        new THREE.MeshStandardMaterial({ color: '#171a22', roughness: 0.82, metalness: 0.08 }),
      );
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -1.7;
      floor.receiveShadow = true;
      scene.add(floor);
      const grid = new THREE.GridHelper(16, 32, '#44445a', '#282b35');
      grid.position.y = -1.685;
      grid.material.transparent = true;
      grid.material.opacity = 0.38;
      scene.add(grid);
      const avatar = createAvatarManager(scene);
      avatarRef.current = avatar;
      avatar.configure(settings);
      avatar.ready.catch((cause) => {
        setError(`Could not load the rigged 3D avatar: ${cause instanceof Error ? cause.message : String(cause)}`);
      });

      const resize = () => {
        const width = container.clientWidth || 1;
        const height = container.clientHeight || 1;
        camera.aspect = width / height;
        camera.position.z = width < 700 ? 8.6 : 7.5;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      observer = new ResizeObserver(resize);
      observer.observe(container);
      resize();
      let frame;
      let fpsStarted = performance.now();
      let renderedFrames = 0;
      const animate = () => {
        frame = requestAnimationFrame(animate);
        renderer.render(scene, camera);
        renderedFrames += 1;
        const now = performance.now();
        if (now - fpsStarted >= 500) {
          setRenderFps(Math.round(renderedFrames * 1000 / (now - fpsStarted)));
          fpsStarted = now;
          renderedFrames = 0;
        }
      };
      animate();
      return () => {
        cancelAnimationFrame(frame);
        observer?.disconnect();
        renderer.dispose();
        container.removeChild(renderer.domElement);
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => material.dispose());
        });
      };
    } catch (cause) {
      setError(`Could not create the 3D stage: ${cause instanceof Error ? cause.message : String(cause)}`);
      return undefined;
    }
  }, []);

  useEffect(() => {
    avatarRef.current?.configure(settings);
  }, [settings]);

  const paintLandmarks = useCallback((landmarks, hands = null) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const width = video.videoWidth || 640;
    const height = video.videoHeight || 480;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (!landmarks) return;
    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'rgba(147, 133, 255, .86)';
    context.lineWidth = Math.max(2, canvas.width / 280);
    CONNECTIONS.forEach(([a, b]) => {
      const first = landmarks[a];
      const second = landmarks[b];
      if (!first || !second || first.visibility < 0.25 || second.visibility < 0.25) return;
      context.beginPath();
      context.moveTo(first.x * canvas.width, first.y * canvas.height);
      context.lineTo(second.x * canvas.width, second.y * canvas.height);
      context.stroke();
    });
    landmarks.forEach((point) => {
      if (point.visibility < 0.35) return;
      context.beginPath();
      context.fillStyle = '#d9d4ff';
      context.arc(point.x * canvas.width, point.y * canvas.height, Math.max(2.2, canvas.width / 230), 0, Math.PI * 2);
      context.fill();
    });
    [hands?.left, hands?.right].filter(Boolean).forEach((hand) => {
      context.strokeStyle = 'rgba(255, 202, 135, .92)';
      context.lineWidth = Math.max(1.5, canvas.width / 360);
      HAND_CONNECTIONS.forEach(([a, b]) => {
        const first = hand[a];
        const second = hand[b];
        if (!first || !second) return;
        context.beginPath();
        context.moveTo(first.x * canvas.width, first.y * canvas.height);
        context.lineTo(second.x * canvas.width, second.y * canvas.height);
        context.stroke();
      });
      hand.forEach((point) => {
        context.beginPath();
        context.fillStyle = '#ffe5c4';
        context.arc(point.x * canvas.width, point.y * canvas.height, Math.max(1.5, canvas.width / 340), 0, Math.PI * 2);
        context.fill();
      });
    });
    context.restore();
  }, []);

  useEffect(() => {
    if (status !== 'active') return undefined;
    let frame;
    const drawPreview = () => {
      paintLandmarks(filterRef.current.landmarks, filterRef.current.hands);
      frame = requestAnimationFrame(drawPreview);
    };
    frame = requestAnimationFrame(drawPreview);
    return () => cancelAnimationFrame(frame);
  }, [paintLandmarks, status]);

  const stopCamera = useCallback(() => {
    startAttemptRef.current += 1;
    cancelCameraRequestRef.current?.();
    cancelCameraRequestRef.current = null;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
    frameBusy.current = false;
    serverFrameBusy.current = false;
    filterRef.current.landmarks = null;
    filterRef.current.hands = null;
    setPoseDetected(false);
    avatarRef.current?.reset();
    paintLandmarks(null);
    setStatus('idle');
    setServerState('disconnected');
  }, [paintLandmarks]);

  const startCamera = useCallback(async () => {
    setError('');
    setStatus('loading');
    const attempt = ++startAttemptRef.current;
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('Camera access requires HTTPS or localhost.');
      const availableCameras = (await navigator.mediaDevices.enumerateDevices())
        .filter((device) => device.kind === 'videoinput' && device.deviceId);
      if (attempt !== startAttemptRef.current) return;
      setCameraDevices(availableCameras);
      const preferredCamera = userSelectedCameraRef.current
        ? availableCameras.find((device) => device.deviceId === cameraDeviceId)
        : availableCameras.find((device) => !/(virtual|obs|snap camera|manycam|droidcam|iriun)/i.test(device.label))
          ?? availableCameras[0];
      const requestedDeviceId = preferredCamera?.deviceId;
      let timeoutId;
      let cancelRequest;
      const cancelledRequest = new Promise((_, reject) => {
        cancelRequest = () => reject(new Error('Camera startup was cancelled.'));
      });
      cancelCameraRequestRef.current = cancelRequest;
      const requestTimeout = new Promise((_, reject) => {
        timeoutId = window.setTimeout(() => {
          const error = new Error('Camera permission request timed out.');
          error.name = 'TimeoutError';
          reject(error);
        }, 20000);
      });
      let stream;
      try {
        const cameraRequest = navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            ...(requestedDeviceId ? { deviceId: { exact: requestedDeviceId } } : { facingMode: 'user' }),
            width: { ideal: 640 },
            height: { ideal: 480 },
            frameRate: { ideal: 30, max: 30 },
          },
        }).then((capture) => {
          if (attempt !== startAttemptRef.current) {
            capture.getTracks().forEach((track) => track.stop());
            return null;
          }
          return capture;
        });
        stream = await Promise.race([cameraRequest, requestTimeout, cancelledRequest]);
      } finally {
        window.clearTimeout(timeoutId);
        if (cancelCameraRequestRef.current === cancelRequest) cancelCameraRequestRef.current = null;
      }
      if (attempt !== startAttemptRef.current || !stream) {
        stream?.getTracks().forEach((track) => track.stop());
        return;
      }
      streamRef.current = stream;
      const video = videoRef.current;
      if (!video) throw new Error('Camera preview is unavailable.');
      video.srcObject = stream;
      await video.play();
      if (attempt !== startAttemptRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      const activeDeviceId = stream.getVideoTracks()[0]?.getSettings().deviceId;
      const permittedCameras = (await navigator.mediaDevices.enumerateDevices())
        .filter((device) => device.kind === 'videoinput' && device.deviceId);
      if (attempt !== startAttemptRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      setCameraDevices(permittedCameras);
      if (activeDeviceId) setCameraDeviceId(activeDeviceId);

      if (tier === 'device') {
        const worker = new Worker(`${import.meta.env.BASE_URL}pose.worker.js`);
        workerRef.current = worker;
        const sendFrame = async () => {
          if (!streamRef.current || !videoRef.current || workerRef.current !== worker) return;
          if (!frameBusy.current && videoRef.current.readyState >= 2) {
            frameBusy.current = true;
            try {
              const bitmap = await createImageBitmap(videoRef.current, {
                resizeWidth: 480,
                resizeHeight: Math.round(480 * videoRef.current.videoHeight / videoRef.current.videoWidth) || 360,
                resizeQuality: 'low',
              });
              worker.postMessage({ type: 'frame', bitmap, timestamp: performance.now() }, [bitmap]);
            } catch (cause) {
              frameBusy.current = false;
              setError(`Could not process camera frame: ${cause instanceof Error ? cause.message : String(cause)}`);
            }
          }
          if (streamRef.current && workerRef.current === worker) requestAnimationFrame(sendFrame);
        };
        worker.onmessage = ({ data }) => {
          if (data.type === 'ready') {
            setEngine(`${data.engine} · ${data.model}`);
            setStatus('active');
            requestAnimationFrame(sendFrame);
          } else if (data.type === 'pose') {
            frameBusy.current = false;
            setLatency(data.latency);
            const now = performance.now();
            if (filterRef.current.last) setFps(Math.round(1000 / (now - filterRef.current.last)));
            filterRef.current.last = now;
            filterRef.current.landmarks = data.landmarks;
            filterRef.current.hands = data.hands;
            setPoseDetected(Boolean(data.landmarks));
            avatarRef.current?.update(data.poses ?? (data.landmarks ? [data.landmarks] : []), data.handsByPose ?? [data.hands]);
            paintLandmarks(data.landmarks, data.hands);
          } else if (data.type === 'error') {
            frameBusy.current = false;
            setError(`Pose tracking failed: ${data.message}`);
            stopCamera();
          }
        };
        worker.onerror = (event) => {
          setError(`Pose worker failed: ${event.message}`);
          stopCamera();
        };
        worker.postMessage({ type: 'init', model: poseModel, people: maxPeople });
        setStatus('loading');
      } else {
        await connectServer();
      }
    } catch (cause) {
      if (attempt !== startAttemptRef.current) return;
      stopCamera();
      setStatus('idle');
      setError(getCameraError(cause));
    }
  }, [cameraDeviceId, maxPeople, paintLandmarks, poseModel, stopCamera, tier]);

  const changeCamera = useCallback((deviceId) => {
    userSelectedCameraRef.current = true;
    if (status !== 'idle') stopCamera();
    setCameraDeviceId(deviceId);
    setError('Camera input changed. Start the camera to use the selected device.');
  }, [status, stopCamera]);

  async function connectServer() {
    const video = videoRef.current;
    if (!video) throw new Error('Camera preview is unavailable.');
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const serverOrigin = isLocalHost ? `${protocol}//${window.location.hostname}:8000` : `${protocol}//${window.location.host}`;
    const endpoint = `${serverOrigin}/ws/pose?model=${encodeURIComponent(poseModel)}&people=${maxPeople}`;
    const socket = new WebSocket(endpoint);
    setServerState('connecting');
    await new Promise((resolve, reject) => {
      socket.onopen = resolve;
      socket.onerror = () => reject(new Error(isLocalHost
        ? 'Could not connect to the local pose server at ws://localhost:8000. Start the Python server and try again.'
        : 'Could not connect to the Hugging Face Space pose server. Check that the Space is awake, then try again.'));
    });
    setServerState('connected');
    setStatus('active');
    socket.onmessage = (event) => {
      const result = JSON.parse(event.data);
      serverFrameBusy.current = false;
      if (result.error) {
        setError(`Local pose tracking failed: ${result.error}`);
        return;
      }
      setLatency(result.latency_ms || 0);
      setEngine(`${result.engine || 'CPU'} · ${result.model || poseModel}`);
      const now = performance.now();
      if (serverFrameTime.current) setFps(Math.round(1000 / (now - serverFrameTime.current)));
      serverFrameTime.current = now;
      filterRef.current.landmarks = result.landmarks;
      filterRef.current.hands = result.hands;
      setPoseDetected(Boolean(result.landmarks));
      avatarRef.current?.update(result.poses ?? (result.landmarks ? [result.landmarks] : []), result.hands_by_pose ?? [result.hands]);
      paintLandmarks(result.landmarks, result.hands);
    };
    socket.onclose = () => {
      if (streamRef.current) {
        setServerState('disconnected');
        setError('The local pose server disconnected.');
      }
    };
    workerRef.current = { terminate: () => socket.close() };
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let lastSent = 0;
    const sendFrame = () => {
      if (!streamRef.current || socket.readyState !== WebSocket.OPEN) return;
      const now = performance.now();
      if (!serverFrameBusy.current && now - lastSent > 15 && video.readyState >= 2) {
        lastSent = now;
        serverFrameBusy.current = true;
        canvas.width = 480;
        canvas.height = Math.round(480 * video.videoHeight / video.videoWidth) || 360;
        context?.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(async (blob) => {
          if (!blob || socket.readyState !== WebSocket.OPEN) {
            serverFrameBusy.current = false;
            return;
          }
          const bytes = await blob.arrayBuffer();
          if (socket.readyState === WebSocket.OPEN) socket.send(bytes);
          else serverFrameBusy.current = false;
        }, 'image/jpeg', 0.72);
      }
      requestAnimationFrame(sendFrame);
    };
    requestAnimationFrame(sendFrame);
  }

  useEffect(() => () => stopCamera(), [stopCamera]);

  const updateSetting = (key, value) => setSettings((current) => ({ ...current, [key]: value }));

  return <main className="app-shell">
    <header className="topbar">
      <a className="brand" href="#" aria-label="Form home"><span className="brand-mark"><span /><span /><span /><span /></span><span className="brand-name">form<span>.</span></span><span className="brand-divider" /><span className="brand-product">LIVE AVATAR STUDIO</span></a>
      <div className="header-controls">
        <div className="privacy-toggle" role="group" aria-label="Pose processing mode">
          <button className={tier === 'device' ? 'selected' : ''} onClick={() => { if (status === 'idle') setTier('device'); }}><span className="privacy-dot device" />On-device</button>
          {isLocalHost && <button className={tier === 'server' ? 'selected' : ''} onClick={() => { if (status === 'idle') setTier('server'); }}><span className="privacy-dot server" />{serverLabel}</button>}
        </div>
        <label className="model-picker"><span>POSE</span><select value={poseModel} onChange={(event) => setPoseModel(event.target.value)} disabled={status !== 'idle'} aria-label="Pose model"><option value="lite">Lite · fastest</option><option value="full">Full · balanced</option><option value="heavy">Heavy · quality</option></select></label>
        <label className="model-picker people-picker"><span>PEOPLE</span><select value={maxPeople} onChange={(event) => setMaxPeople(Number(event.target.value))} disabled={status !== 'idle'} aria-label="People to track"><option value={1}>1 · fastest</option><option value={2}>2 people</option><option value={3}>3 people</option><option value={4}>4 people</option></select></label>
        <button className="body-button" onClick={() => setCustomizeOpen(!customizeOpen)}><UserRound size={15} /> Body shape <ChevronDown size={13} className={customizeOpen ? 'rotate-icon' : ''} /></button>
        <button className={`camera-button ${status === 'active' ? 'is-live' : ''}`} onClick={status === 'active' || status === 'loading' ? stopCamera : startCamera}>{status === 'active' ? <><span className="button-record-dot" />Stop camera</> : status === 'loading' ? <><span className="spinner" />Cancel</> : <><Camera size={15} />Start camera</>}</button>
      </div>
    </header>

    <div className="workspace">
      <aside className="sidebar">
        <div className="side-label">YOUR WORKSPACE</div>
        <button className="side-item active"><span className="side-item-icon"><Move3d size={16} /></span><span>Live stage</span><span className="side-count">01</span></button>
        <button className="side-item" onClick={() => setCustomizeOpen(!customizeOpen)}><span className="side-item-icon"><SlidersHorizontal size={16} /></span><span>Appearance</span></button>
        <div className="side-separator" />
        <div className="side-label setup-label">QUICK SETUP</div>
        <div className="setup-card"><div className="setup-icon"><Sparkles size={16} /></div><div className="setup-title">{status === 'active' ? 'You’re all set' : 'Ready when you are'}</div><p>{status === 'active' ? 'Your avatar is following your movement.' : 'Start your camera to bring your avatar to life.'}</p><div className="setup-progress"><span className={status === 'active' ? 'completed' : ''} /><span /><span /></div><div className="setup-steps"><span>Camera</span><span>Pose</span><span>Move</span></div></div>
        <div className="sidebar-bottom"><button className="help-button"><CircleHelp size={15} /> Help & shortcuts <span>?</span></button>        <div className="privacy-note"><span className="lock-icon">✳</span><span><b>Your movement stays yours.</b><br />{tier === 'device' ? 'Pose inference runs locally on CPU.' : isLocalHost ? 'Frames are sent only to localhost.' : 'Live frames are sent to this private Space for inference.'}</span></div></div>
      </aside>

      <section className="main-stage">
        <Stage stageRef={stageRef} renderFps={renderFps} />
        <div className="stage-toolbar"><button aria-label="Reset view" title="Reset view"><RotateCcw size={14} /></button><span /><button aria-label="Stage settings" title="Stage settings"><Settings2 size={15} /></button></div>
        <div className="stage-status"><span className={status === 'active' ? poseDetected ? 'connected' : 'searching-dot' : ''} />{status === 'active' ? poseDetected ? 'PERSON DETECTED · TRACKING LIVE' : 'CAMERA LIVE · CENTER YOUR FULL BODY' : status === 'loading' ? 'REQUESTING CAMERA PERMISSION' : 'AWAITING CAMERA'}</div>
        <Preview videoRef={videoRef} canvasRef={canvasRef} fps={fps} latency={latency} engine={engine} status={status} poseDetected={poseDetected} cameraDevices={cameraDevices} cameraDeviceId={cameraDeviceId} onCameraChange={changeCamera} />
        {error && <div className="error-toast" role="alert"><span>{error}</span><button onClick={() => setError('')} aria-label="Dismiss error"><X size={15} /></button></div>}
        {customizeOpen && <Customization settings={settings} updateSetting={updateSetting} close={() => setCustomizeOpen(false)} />}
      </section>
    </div>
    <footer className="app-footer"><span>FORM STUDIO <b>v1.0</b></span><span><span className="footer-dot" /> {tier === 'device' ? 'PRIVATE BY DESIGN · CPU' : serverState === 'connected' ? `${isLocalHost ? 'LOCAL' : 'SPACE'} SERVER CONNECTED` : `${isLocalHost ? 'LOCAL' : 'SPACE'} SERVER MODE`} <i>·</i> NO RECORDING</span><span>MADE FOR MOVEMENT <span className="footer-spark">✳</span></span></footer>
  </main>;
}

function Customization({ settings, updateSetting, close }) {
  const tones = ['#e7b997', '#c88c68', '#995f45', '#704636', '#e3c5a1', '#a87659'];
  const colors = ['#7c79ff', '#e27d91', '#69b9a2', '#e8a34c', '#5686c9', '#d2d3dc'];
  return <div className="custom-card">
    <div className="card-title"><span><SlidersHorizontal size={14} /> Appearance</span><button onClick={close} aria-label="Close customization"><X size={15} /></button></div>
    <p className="card-subtitle">Make your avatar feel like you.</p>
    <label className="range-label"><span>Height</span><b>{settings.height}<small>%</small></b></label><input type="range" min="70" max="130" value={settings.height} onChange={(event) => updateSetting('height', Number(event.target.value))} />
    <label className="range-label weight-label"><span>Body build</span><b>{settings.weight}<small>%</small></b></label><input type="range" min="10" max="100" value={settings.weight} onChange={(event) => updateSetting('weight', Number(event.target.value))} />
    <div className="swatch-group"><span>Skin tone</span><div>{tones.map((tone) => <button key={tone} aria-label={`Skin tone ${tone}`} className={settings.skinTone === tone ? 'active' : ''} style={{ background: tone }} onClick={() => updateSetting('skinTone', tone)}>{settings.skinTone === tone && <Check size={12} />}</button>)}</div></div>
    <div className="swatch-group clothing-group"><span>Top color</span><div>{colors.map((color) => <button key={color} aria-label={`Top color ${color}`} className={settings.clothing === color ? 'active' : ''} style={{ background: color }} onClick={() => updateSetting('clothing', color)}>{settings.clothing === color && <Check size={12} />}</button>)}</div></div>
    <button className="reset-button" onClick={() => { updateSetting('height', 100); updateSetting('weight', 50); updateSetting('skinTone', '#c88c68'); updateSetting('clothing', '#7c79ff'); }}><RotateCcw size={12} /> Reset appearance</button>
  </div>;
}

export default App;
