import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { publicToilet, livingUnit, afterHours, stepByStep, trees, MAT } from './models.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * One fixed WebGL canvas: four architectural maquettes on a single table.
 * The camera flies between "stations" based on where each section sits in the viewport.
 */
export function createScene(canvas, { hero, projects, outro }) {
  const isMobile = () => window.innerWidth < 820 || (window.innerWidth <= 1100 && window.innerHeight > window.innerWidth);
  const lowPower = window.matchMedia('(pointer: coarse)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowPower, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.5 : 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const bg = new THREE.Color(0xeeeae2);
  scene.background = bg;
  scene.fog = new THREE.Fog(bg, 90, 230);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.5, 600);

  /* ---------- lights ---------- */
  scene.add(new THREE.HemisphereLight(0xfffaf0, 0xb9ab98, 1.35));
  const sun = new THREE.DirectionalLight(0xfff1dc, 2.4);
  sun.position.set(-40, 70, 45);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lowPower ? 1024 : 2048, lowPower ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -60, right: 60, top: 45, bottom: -45, near: 10, far: 200 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.04;
  sun.shadow.radius = 4;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xe9dccf, 0.55);
  fill.position.set(50, 25, -30);
  scene.add(fill);

  /* ---------- the table ---------- */
  const groundTex = (() => {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 512;
    const c = cv.getContext('2d');
    c.fillStyle = '#efebe3';
    c.fillRect(0, 0, 512, 512);
    c.strokeStyle = 'rgba(60,45,35,0.07)';
    c.lineWidth = 2;
    for (let i = 0; i <= 512; i += 64) {
      c.beginPath(); c.moveTo(i, 0); c.lineTo(i, 512); c.stroke();
      c.beginPath(); c.moveTo(0, i); c.lineTo(512, i); c.stroke();
    }
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(40, 40);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  })();
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 400),
    new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // topographic contour rings drawn on the table
  const contourMat = new THREE.LineBasicMaterial({ color: 0x8a6a55, transparent: true, opacity: 0.16 });
  for (let i = 1; i < 9; i++) {
    const pts = [];
    for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.05) {
      const rr = i * 9 + Math.sin(a * 3 + i) * 3 + Math.cos(a * 5 - i) * 1.6;
      pts.push(new THREE.Vector3(Math.cos(a) * rr * 1.5, 0.02, Math.sin(a) * rr));
    }
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), contourMat));
  }

  /* ---------- maquettes ---------- */
  const defs = [
    { build: publicToilet, pos: [-30, 0, 8], scale: 0.85, plinth: [11, 10] },
    { build: livingUnit, pos: [-11, 0, -5], scale: 0.62, plinth: [12.5, 10.5] },
    { build: afterHours, pos: [10, 0, 7], scale: 0.32, plinth: [18, 9.5] },
    { build: stepByStep, pos: [31, 0, -6], scale: 0.3, plinth: [17, 15] },
  ];
  const models = defs.map((d) => {
    const holder = new THREE.Group();
    holder.position.set(...d.pos);
    const base = new THREE.Mesh(new THREE.BoxGeometry(d.plinth[0], 0.6, d.plinth[1]), MAT.card);
    base.position.y = 0.3;
    base.castShadow = base.receiveShadow = true;
    base.add(new THREE.LineSegments(new THREE.EdgesGeometry(base.geometry),
      new THREE.LineBasicMaterial({ color: 0x2a2420, transparent: true, opacity: 0.25 })));
    holder.add(base);
    const m = d.build();
    m.scale.setScalar(d.scale);
    m.position.y = 0.6;
    holder.add(m);
    scene.add(holder);
    return { holder, model: m };
  });

  // scattered trees on the table between the plinths
  const tp = [];
  const r = (() => { let s = 99; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); })();
  while (tp.length < 46) {
    const x = (r() - 0.5) * 150, z = (r() - 0.5) * 90;
    const clear = defs.every((d) => Math.abs(x - d.pos[0]) > d.plinth[0] / 2 + 3 || Math.abs(z - d.pos[2]) > d.plinth[1] / 2 + 3);
    if (clear) tp.push({ x, z, s: 0.6 + r() * 0.8 });
  }
  scene.add(trees(tp, 5));

  /* ---------- camera stations ---------- */
  const v = (x, y, z) => new THREE.Vector3(x, y, z);
  const centers = defs.map((d) => v(d.pos[0], 0, d.pos[2]));
  const stations = [
    { look: v(0, 2.4, 0).add(centers[0]), r: 18, h: [6, 3.2], a: [0.65, -0.85] },
    { look: v(0, 3, 0).add(centers[1]), r: 25, h: [10, 4.5], a: [0.85, -0.6] },
    { look: v(0, 3, 0).add(centers[2]), r: 26, h: [10, 4], a: [-0.45, 0.75] },
    { look: v(0, 8.5, 0).add(centers[3]), r: 44, h: [5, 20], a: [1.05, -0.1] },
  ];

  const pose = (s, t) => {
    const aspect = window.innerWidth / window.innerHeight;
    const m = aspect >= 1.3 ? 1 : Math.min(2.4, 1.3 / aspect + (isMobile() ? 0.25 : 0));
    const a = THREE.MathUtils.lerp(s.a[0], s.a[1], t);
    const rr = s.r * m * (1 - 0.12 * Math.sin(t * Math.PI));
    const h = THREE.MathUtils.lerp(s.h[0], s.h[1], t) * (isMobile() ? 1.15 : 1);
    return {
      pos: s.look.clone().add(v(Math.sin(a) * rr, h, Math.cos(a) * rr)),
      look: s.look.clone(),
    };
  };
  const heroPose = (time) => {
    const portrait = isMobile() && window.innerHeight > window.innerWidth;
    const m = portrait ? 1.25 : isMobile() ? 1.3 : 1;
    const a = (portrait ? 1.05 : 0.22) + Math.sin(time * 0.06) * 0.14;
    return { pos: v(4 + Math.sin(a) * 100 * m, 56 * m, Math.cos(a) * 100 * m), look: v(4, 0, 0) };
  };
  const outroPose = (time) => {
    const a = -0.4 + time * 0.02;
    const m = isMobile() ? 1.5 : 1;
    return { pos: v(Math.sin(a) * 75 * m, 70 * m, Math.cos(a) * 75 * m), look: v(0, 0, 0) };
  };
  const lerpPose = (a, b, t) => ({ pos: a.pos.clone().lerp(b.pos, t), look: a.look.clone().lerp(b.look, t) });

  /* ---------- explore mode ---------- */
  const controls = new OrbitControls(camera, canvas);
  controls.enabled = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.minPolarAngle = 0.15;
  controls.maxPolarAngle = Math.PI / 2.08;
  controls.enablePan = false;
  let exploring = -1;

  const cur = { pos: v(80, 60, 80), look: v(0, 0, 0) };
  let offX = 0, offY = 0;

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  /** Compute the desired pose from section positions. */
  function target(time) {
    const vh = window.innerHeight;
    let p = heroPose(time);
    let shift = 0.12;
    projects.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const enter = clamp(1 - rect.top / vh);
      if (enter <= 0) return;
      const inner = clamp(-rect.top / (rect.height - vh));
      const prev = i === 0 ? heroPose(time) : pose(stations[i - 1], 1);
      p = enter < 1 ? lerpPose(prev, pose(stations[i], 0), ease(enter)) : pose(stations[i], inner);
      shift = i === 0 ? THREE.MathUtils.lerp(0.12, 0.17, enter) : 0.17;
    });
    if (outro) {
      const rect = outro.getBoundingClientRect();
      const enter = clamp(1 - rect.top / vh);
      if (enter > 0) {
        p = lerpPose(p, outroPose(time), ease(enter));
        shift = THREE.MathUtils.lerp(0.17, 0, enter);
      }
    }
    return { p, shift };
  }

  function isVisible() {
    const vh = window.innerHeight;
    return [hero, ...projects, outro].some((el) => {
      if (!el) return false;
      const r2 = el.getBoundingClientRect();
      return r2.bottom > 0 && r2.top < vh;
    });
  }

  const clock = new THREE.Clock();
  let first = true;
  function frame(dtOverride) {
    const dt = dtOverride ?? Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    if (!isVisible() && exploring < 0) return;

    if (exploring >= 0) {
      controls.update();
      offX += (0 - offX) * 0.08;
      offY += (0 - offY) * 0.08;
    } else {
      const { p, shift } = target(time);
      const k = first ? 1 : 1 - Math.exp(-dt * 5.5);
      first = false;
      cur.pos.lerp(p.pos, k);
      cur.look.lerp(p.look, k);
      camera.position.copy(cur.pos);
      camera.lookAt(cur.look);
      const mob = isMobile();
      offX += ((mob ? 0 : -shift) - offX) * k;
      offY += ((mob ? 0.15 * shift / 0.17 : 0) - offY) * k;
    }
    const w = window.innerWidth, h = window.innerHeight;
    camera.setViewOffset(w, h, offX * w, offY * h, w, h);
    renderer.render(scene, camera);
  }

  function enterExplore(i) {
    exploring = i;
    const s = stations[i];
    controls.target.copy(s.look);
    controls.minDistance = s.r * 0.45;
    controls.maxDistance = s.r * 2.2;
    controls.enabled = true;
    controls.autoRotate = false;
    canvas.classList.add('is-exploring');
  }
  function exitExplore() {
    exploring = -1;
    controls.enabled = false;
    canvas.classList.remove('is-exploring');
    cur.pos.copy(camera.position);
    cur.look.copy(controls.target);
  }

  return { frame, enterExplore, exitExplore, resize };
}
