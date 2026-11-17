import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Materials — "architectural maquette" palette taken from the PDF    */
/* ------------------------------------------------------------------ */
const std = (color, roughness = 0.85, extra = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness: 0, ...extra });

export const MAT = {
  card: std(0xf6f2ea, 0.92),
  concrete: std(0xd2ccc1, 0.95),
  concreteDark: std(0xa9a297, 0.95),
  timber: std(0x7a4b2e, 0.7),
  timberLight: std(0xb07f55, 0.75),
  timberDark: std(0x3d2c24, 0.7),
  charcoal: std(0x2f2b29, 0.8),
  glass: std(0x2d3b3e, 0.12, { metalness: 0.35, transparent: true, opacity: 0.62 }),
  glassWarm: std(0x5b4636, 0.2, { metalness: 0.2, transparent: true, opacity: 0.7, emissive: 0x3a2412, emissiveIntensity: 0.25 }),
  green: std(0x6c7a47, 0.95, { flatShading: true }),
  greenLight: std(0x8f9c62, 0.95, { flatShading: true }),
  terracotta: std(0x9a3c1a, 0.85),
  rose: std(0x8d4a55, 0.8),
  roseLight: std(0xc79a9c, 0.85),
  water: std(0x9fb0ad, 0.2, { metalness: 0.1 }),
  white: std(0xffffff, 0.9),
};

const lineMat = new THREE.LineBasicMaterial({ color: 0x2a2420, transparent: true, opacity: 0.18 });

function edges(mesh, threshold = 25) {
  const l = new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry, threshold), lineMat);
  mesh.add(l);
  return mesh;
}

function box(w, h, d, mat, x = 0, y = 0, z = 0, withEdges = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  if (withEdges) edges(m);
  return m;
}

function shadowAll(obj) {
  obj.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return obj;
}

function stripeTexture(c1, c2, stripes = 40, vertical = false) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = c2;
  const s = 256 / stripes;
  for (let i = 0; i < stripes; i++) {
    if (vertical) ctx.fillRect(i * s, 0, s * 0.28, 256);
    else ctx.fillRect(0, i * s, 256, s * 0.28);
  }
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}

/* deterministic random so the scene looks identical on every load */
function rng(seed = 1) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */
export function plinth(w, d, h = 0.5) {
  const g = new THREE.Group();
  const top = box(w, h, d, MAT.card, 0, h / 2, 0);
  g.add(top);
  return g;
}

/** Instanced maquette trees: thin trunk + faceted canopy. */
export function trees(points, seed = 7) {
  const r = rng(seed);
  const g = new THREE.Group();
  const trunkGeo = new THREE.CylinderGeometry(0.05, 0.07, 1, 5);
  const canopyGeo = new THREE.IcosahedronGeometry(1, 0);
  const trunks = new THREE.InstancedMesh(trunkGeo, MAT.timberDark, points.length);
  const canopies = new THREE.InstancedMesh(canopyGeo, MAT.green, points.length);
  const d = new THREE.Object3D();
  const c = new THREE.Color();
  points.forEach((p, i) => {
    const s = p.s ?? 0.7 + r() * 0.6;
    d.position.set(p.x, (p.y ?? 0) + 0.6 * s, p.z);
    d.rotation.set(0, 0, 0);
    d.scale.set(s, 1.2 * s, s);
    d.updateMatrix();
    trunks.setMatrixAt(i, d.matrix);
    d.position.y = (p.y ?? 0) + 1.55 * s;
    d.rotation.set(r() * 3, r() * 3, r() * 3);
    d.scale.set(0.75 * s, 0.85 * s, 0.75 * s);
    d.updateMatrix();
    canopies.setMatrixAt(i, d.matrix);
    c.setHSL(0.2 + r() * 0.06, 0.18 + r() * 0.12, 0.6 + r() * 0.16);
    canopies.setColorAt(i, c);
  });
  trunks.castShadow = canopies.castShadow = true;
  canopies.receiveShadow = true;
  g.add(trunks, canopies);
  return g;
}

/* ------------------------------------------------------------------ */
/*  01 — Public Toilet (Studio Design)                                 */
/* ------------------------------------------------------------------ */
export function publicToilet() {
  const g = new THREE.Group();

  // circular base
  const base = new THREE.Mesh(new THREE.CylinderGeometry(3.9, 4.0, 0.35, 72), MAT.concrete);
  base.position.y = 0.175;
  g.add(base);

  // slatted timber drum (horizontal "5x5" timber facade)
  const tex = stripeTexture('#b9946b', '#7c5a3c', 46);
  tex.repeat.set(6, 1);
  const drumMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 });
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 3.3, 72), drumMat);
  drum.position.y = 0.35 + 1.65;
  g.add(drum);

  // dark wood-powder panels wrapping parts of the drum
  [[0.35, 1.0], [2.2, 0.9], [3.7, 0.8]].forEach(([s, l]) => {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(2.56, 2.56, 3.3, 24, 1, true, s, l), MAT.timberDark);
    w.material.side = THREE.DoubleSide;
    w.position.y = 2.0;
    g.add(w);
  });

  // glass doors
  [-0.55, -0.05].forEach((a) => {
    const door = box(1.0, 2.3, 0.08, MAT.glass, Math.sin(a) * 2.58, 0.35 + 1.15, Math.cos(a) * 2.58, false);
    door.rotation.y = a;
    const frame = box(1.08, 2.38, 0.04, MAT.white, 0, 0, -0.03, false);
    door.add(frame);
    g.add(door);
  });

  // vertical timber fins on the east side
  for (let a = 0.5; a < 1.75; a += 0.11) {
    const fin = box(0.07, 3.7, 0.45, MAT.timberDark, Math.sin(a) * 2.95, 0.35 + 1.85, Math.cos(a) * 2.95, false);
    fin.rotation.y = a;
    g.add(fin);
  }

  // wavy roof — box with displaced vertices keeps its thickness
  const roofGeo = new THREE.BoxGeometry(9.6, 0.2, 7.6, 60, 1, 44);
  const pos = roofGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    pos.setY(i, pos.getY(i) + 0.55 * Math.sin(x * 0.55 + 0.6) + 0.22 * Math.cos(z * 0.6));
  }
  roofGeo.computeVertexNormals();
  const roof = new THREE.Mesh(roofGeo, MAT.timberDark);
  roof.position.set(0.3, 4.15, 0);
  g.add(roof);

  // slim steel posts holding the roof edge
  [[-3.6, 2.2], [3.9, -2.0], [3.6, 2.6], [-3.2, -2.6]].forEach(([x, z]) => {
    const h = 4.15 + 0.55 * Math.sin((x - 0.3) * 0.55 + 0.6) + 0.22 * Math.cos(z * 0.6) - 0.35;
    g.add(box(0.1, h, 0.1, MAT.charcoal, x, 0.35 + h / 2, z, false));
  });

  // benches & a playful log
  g.add(box(1.6, 0.4, 0.5, MAT.timberLight, -3.0, 0.55, 2.0));
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.6, 10), MAT.timber);
  log.rotation.z = Math.PI / 2;
  log.position.set(2.6, 0.57, 3.1);
  g.add(log);

  g.add(trees([
    { x: -4.6, z: -3.6, s: 1.3 }, { x: 4.8, z: -3.4, s: 1.1 }, { x: -5.2, z: 1.5, s: 0.9 },
    { x: 5.4, z: 1.2, s: 1.2 }, { x: 0.5, z: -4.8, s: 1.0 },
  ], 11));

  return shadowAll(g);
}

/* ------------------------------------------------------------------ */
/*  02 — The Living Unit, "Bumi Basamo" (Integrated Design Studio)      */
/* ------------------------------------------------------------------ */
export function livingUnit() {
  const g = new THREE.Group();
  const r = rng(23);

  // ground floor & upper floor masses (precast concrete)
  g.add(box(13, 3.4, 9, MAT.card, 0, 1.7, 0));
  g.add(box(10, 3.2, 7.6, MAT.card, -1.4, 3.4 + 1.6, -0.6));

  // stepped parapet rising along the roof (the "stair" silhouette)
  for (let i = 0; i < 6; i++) {
    const h = 0.7 + i * 0.55;
    g.add(box(0.95, h, 0.4, MAT.card, -5.8 + i * 1.0, 6.6 + h / 2, -4.2));
  }

  // dark timber portal frame
  g.add(box(8.2, 0.65, 0.8, MAT.timberDark, -2.2, 6.95, 3.4));
  g.add(box(0.7, 6.9, 0.8, MAT.timberDark, -6.6, 3.45, 3.4));
  g.add(box(0.7, 3.6, 0.8, MAT.timberDark, 1.9, 5.2, 3.4));

  // pixel-pattern perforated screen
  const cols = 9, rows = 7, s = 0.42;
  const px = new THREE.InstancedMesh(new THREE.BoxGeometry(s * 0.92, s * 0.92, 0.12), MAT.white, cols * rows);
  const d = new THREE.Object3D();
  const c = new THREE.Color();
  const tones = [0x2b2522, 0xf3eee6, 0x7a4b2e, 0x2b2522, 0xdcd4c8];
  let k = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      d.position.set(-1.3 + i * s, 3.75 + j * s, 3.27);
      d.updateMatrix();
      px.setMatrixAt(k, d.matrix);
      px.setColorAt(k++, c.set(tones[Math.floor(r() * tones.length)]));
    }
  }
  g.add(px);

  // glazing
  g.add(box(4.6, 2.3, 0.08, MAT.glassWarm, -3.6, 1.55, 4.52, false));
  g.add(box(2.8, 2.0, 0.08, MAT.glassWarm, -4.4, 5.0, 3.22, false));
  g.add(box(1.2, 2.5, 0.1, MAT.timber, 0.4, 1.25, 4.52, false));

  // radiating sun-shade fins (the fan pergola)
  const fan = new THREE.Group();
  fan.position.set(2.4, 3.5, 5.0);
  for (let i = 0; i < 12; i++) {
    const a = THREE.MathUtils.degToRad(6 + i * 7);
    const slat = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.2, 0.5), MAT.timberDark);
    slat.geometry.translate(2.8, 0, 0);
    slat.rotation.z = a;
    slat.position.z = (i % 2) * 0.12;
    fan.add(slat);
  }
  g.add(fan);

  // decorative round ornament on the side wall (night render)
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.12, 40), MAT.timber);
  disc.rotation.x = Math.PI / 2;
  disc.position.set(-1.6, 1.9, 4.56);
  g.add(disc);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.06, 8, 40), MAT.charcoal);
  ring.position.set(-1.6, 1.9, 4.64);
  g.add(ring);

  // horizontal slatted fence along the street
  for (let i = 0; i < 5; i++) g.add(box(15.5, 0.24, 0.12, MAT.charcoal, 0.5, 0.45 + i * 0.42, 6.6, false));
  [-7.2, -2, 3.5, 8.2].forEach((x) => g.add(box(0.14, 2.4, 0.14, MAT.charcoal, x, 1.2, 6.6, false)));

  // garden beds
  g.add(box(4.2, 0.35, 1.2, MAT.greenLight, -3.8, 0.17, 5.7, false));
  g.add(trees([
    { x: -8.6, z: 4.8, s: 1.4 }, { x: -9.2, z: -2.4, s: 1.6 }, { x: 8.4, z: -3.6, s: 1.3 },
    { x: 7.6, z: 4.8, s: 0.9 },
  ], 31));

  return shadowAll(g);
}

/* ------------------------------------------------------------------ */
/*  03 — After Hours, Creative Hub & Jazz Center (ADS 1)               */
/* ------------------------------------------------------------------ */
export function afterHours() {
  const g = new THREE.Group();
  const r = rng(77);
  const roofY = (x) => 10.4 + 2.4 * Math.sin(((x + 23) / 46) * Math.PI * 1.15 - 0.35);
  const skinY = (x) => 5.6 + 2.5 * Math.sin(((x + 23) / 46) * Math.PI * 1.6 + 2.2);

  // stone podium & landscape
  g.add(box(50, 1.2, 24, MAT.concrete, 0, 0.6, 0));
  g.add(box(40, 4.2, 15, MAT.glassWarm, 0, 1.2 + 2.1, 0, false));
  // ground floor mullions
  const mull = new THREE.InstancedMesh(new THREE.BoxGeometry(0.14, 4.2, 0.14), MAT.charcoal, 42);
  const d = new THREE.Object3D();
  for (let i = 0; i < 21; i++) {
    d.position.set(-20 + i * 2, 3.3, 7.55);
    d.updateMatrix();
    mull.setMatrixAt(i, d.matrix);
    d.position.z = -7.55;
    d.updateMatrix();
    mull.setMatrixAt(21 + i, d.matrix);
  }
  g.add(mull);

  // sloped concrete wing wall (left)
  const wing = box(14, 3.2, 1, MAT.concreteDark, -17, 2.2, 8.4);
  wing.rotation.z = 0.08;
  g.add(wing);

  // first-floor slab + upper glazing
  g.add(box(43, 0.5, 17.5, MAT.card, 0, 5.65, 0));
  g.add(box(38, 3.6, 14, MAT.glass, 0, 5.9 + 1.8, -0.3, false));

  // undulating GLULAM roof — shaped like a guitar pick in plan
  const roofGeo = new THREE.BoxGeometry(50, 0.5, 23, 90, 1, 20);
  const p = roofGeo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const z = p.getZ(i);
    p.setY(i, p.getY(i) + roofY(x) - 10.4 - 0.0035 * z * z);
    // taper the plan (pick shape)
    p.setZ(i, z * (0.82 + 0.18 * Math.cos((x / 50) * Math.PI)));
  }
  roofGeo.computeVertexNormals();
  const roof = new THREE.Mesh(roofGeo, std(0xb59878, 0.8));
  roof.position.y = 10.4;
  g.add(roof);

  // roof ribs (glulam beams)
  const ribs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.28, 0.7, 19), MAT.timber, 30);
  for (let i = 0; i < 30; i++) {
    const x = -22 + i * 1.52;
    d.position.set(x, roofY(x) - 0.55, 0);
    d.rotation.set(0, 0, 0);
    d.updateMatrix();
    ribs.setMatrixAt(i, d.matrix);
  }
  g.add(ribs);

  // secondary skin: bengkirai fins following a sweeping lower edge
  const finCount = 88;
  const fins = new THREE.InstancedMesh(new THREE.BoxGeometry(0.16, 1, 0.75), MAT.timber, finCount);
  const vineGeo = new THREE.IcosahedronGeometry(0.42, 0);
  const vineTotal = finCount * 5 + 60;
  const vines = new THREE.InstancedMesh(vineGeo, MAT.green, vineTotal);
  const col = new THREE.Color();
  let v = 0;
  for (let i = 0; i < finCount; i++) {
    const x = -22 + i * 0.505;
    const top = roofY(x) - 0.25;
    const bot = skinY(x);
    const h = top - bot;
    d.position.set(x, bot + h / 2, 9.0);
    d.rotation.set(0, 0, 0);
    d.scale.set(1, h, 1);
    d.updateMatrix();
    fins.setMatrixAt(i, d.matrix);
    // hanging vines
    const n = 2 + Math.floor(r() * 4);
    for (let k = 0; k < n && v < vineTotal; k++) {
      d.position.set(x + (r() - 0.5) * 0.4, top - 0.2 - k * 0.55 - r() * 0.3, 9.35 + r() * 0.2);
      d.rotation.set(r() * 3, r() * 3, r() * 3);
      const s = 0.7 + r() * 0.6 - k * 0.08;
      d.scale.set(s, s * 1.2, s);
      d.updateMatrix();
      vines.setMatrixAt(v, d.matrix);
      vines.setColorAt(v++, col.setHSL(0.21 + r() * 0.05, 0.25 + r() * 0.15, 0.32 + r() * 0.16));
    }
  }
  // planters along the roof edge
  for (let i = 0; i < 60 && v < vineTotal; i++) {
    const x = -23 + i * 0.78;
    d.position.set(x, roofY(x) + 0.35, 8.6 + r() * 0.6);
    d.rotation.set(r() * 3, r() * 3, r() * 3);
    const s = 0.9 + r() * 0.5;
    d.scale.set(s, s * 0.8, s);
    d.updateMatrix();
    vines.setMatrixAt(v, d.matrix);
    vines.setColorAt(v++, col.setHSL(0.22 + r() * 0.05, 0.3, 0.36 + r() * 0.14));
  }
  vines.count = v;
  g.add(fins, vines);

  // curved timber band tracing the bottom of the skin
  const pts = [];
  for (let x = -22.2; x <= 22.2; x += 1) pts.push(new THREE.Vector3(x, skinY(x), 9.0));
  const band = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 120, 0.2, 6), MAT.timberDark);
  g.add(band);

  // café umbrellas & people-scale details on the plaza
  for (let i = 0; i < 5; i++) {
    const x = -14 + i * 3.4;
    g.add(box(0.08, 2.4, 0.08, MAT.charcoal, x, 2.4, 10.8, false));
    const um = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.55, 8), MAT.card);
    um.position.set(x, 3.75, 10.8);
    g.add(um);
  }
  g.add(trees([
    { x: -23, z: 10.5, s: 2.3, y: 1.2 }, { x: 22.5, z: 10.2, s: 2.0, y: 1.2 }, { x: 8, z: 11, s: 1.6, y: 1.2 },
    { x: -22, z: -9.5, s: 2.2, y: 1.2 }, { x: 21, z: -9.8, s: 2.4, y: 1.2 }, { x: 0, z: -10.5, s: 1.8, y: 1.2 },
  ], 41));

  return shadowAll(g);
}

/* ------------------------------------------------------------------ */
/*  04 — Step by Step, Vertical Housing in Nairobi (ADS 2)             */
/* ------------------------------------------------------------------ */
function arcSlab(rIn, rOut, a0, a1, th, mat) {
  const s = new THREE.Shape();
  s.absarc(0, 0, rOut, a0, a1, false);
  s.absarc(0, 0, rIn, a1, a0, true);
  const geo = new THREE.ExtrudeGeometry(s, { depth: th, bevelEnabled: false, curveSegments: 48 });
  geo.rotateX(-Math.PI / 2);
  return edges(new THREE.Mesh(geo, mat), 30);
}

export function stepByStep() {
  const g = new THREE.Group();
  const floors = 15;
  const fh = 3.2;
  const radius = (f) => 7.6 + 2.8 * Math.sin((Math.PI * f) / floors);
  const twist = (f) => f * 0.12;

  // reflecting pool & base
  const pool = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.12, 64), MAT.water);
  pool.scale.set(16, 1, 7);
  pool.position.set(-6, 0.06, 20);
  g.add(pool);

  // core
  const core = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, floors * fh + 2, 24), MAT.concrete);
  core.position.y = (floors * fh + 2) / 2;
  g.add(core);

  const podsPer = 11;
  const total = floors * podsPer;
  const pod = new THREE.CylinderGeometry(1.25, 1.25, 2.7, 3);
  pod.rotateX(Math.PI / 2);
  pod.rotateZ(Math.PI);
  const pods = new THREE.InstancedMesh(pod, MAT.white, total);
  const d = new THREE.Object3D();
  const col = new THREE.Color();
  const tones = [0x8d4a55, 0xc79a9c, 0xefe7e2, 0x6e3a44];
  let k = 0;
  for (let f = 0; f < floors; f++) {
    const y = 1.5 + f * fh;
    const rr = radius(f + 0.5);
    const tw = twist(f);
    const slab = new THREE.Mesh(new THREE.CylinderGeometry(rr + 0.3, rr + 0.3, 0.32, 9), MAT.card);
    slab.position.y = y;
    slab.rotation.y = tw;
    g.add(slab);
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(rr - 0.9, rr - 0.9, fh - 0.32, 9, 1, true), MAT.glass);
    glass.position.y = y + fh / 2;
    glass.rotation.y = tw;
    g.add(glass);
    if (f === 6) continue; // refuge floor stays open
    for (let i = 0; i < podsPer; i++) {
      const a = tw + (i / podsPer) * Math.PI * 2 + (f % 2) * (Math.PI / podsPer);
      const rad = rr + 0.6;
      d.position.set(Math.sin(a) * rad, y + 1.45, Math.cos(a) * rad);
      d.rotation.set(0, a, 0);
      const sc = 0.78 + ((f * 7 + i * 13) % 10) / 22;
      d.scale.set(sc, sc, 0.8 + sc * 0.3);
      d.updateMatrix();
      pods.setMatrixAt(k, d.matrix);
      pods.setColorAt(k++, col.set(tones[(f * 3 + i) % tones.length]));
    }
  }
  pods.count = k;
  g.add(pods);

  // rooftop farm
  const topY = 1.5 + floors * fh;
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(radius(floors) + 0.3, radius(floors) + 0.3, 0.4, 9), MAT.card);
  roof.position.y = topY;
  roof.rotation.y = twist(floors);
  g.add(roof);
  const farm = new THREE.Mesh(new THREE.CylinderGeometry(radius(floors) - 0.8, radius(floors) - 0.8, 0.3, 9), MAT.greenLight);
  farm.position.y = topY + 0.3;
  farm.rotation.y = twist(floors);
  g.add(farm);
  g.add(trees([
    { x: 2, z: 2, y: topY + 0.4, s: 1.1 }, { x: -2.5, z: 1, y: topY + 0.4, s: 0.9 },
    { x: 0.5, z: -3, y: topY + 0.4, s: 1.2 }, { x: -3, z: -2.4, y: topY + 0.4, s: 0.8 },
  ], 61));

  // curved podium: three stacked bands on V-shaped pilotis with a canted canopy
  const a0 = 0.45, a1 = 2.85; // behind the tower, opening towards the pool
  [1.6, 4.8, 8.0].forEach((y, i) => {
    const sl = arcSlab(15 + i * 0.6, 23 - i * 0.4, a0 + i * 0.08, a1 - i * 0.05, 0.45, MAT.card);
    sl.position.y = y;
    g.add(sl);
    if (i < 2) {
      const R = 22.2 - i * 0.6;
      const wall = new THREE.Mesh(
        new THREE.CylinderGeometry(R, R, 2.75, 64, 1, true, a0 + Math.PI / 2 + i * 0.08, a1 - a0 - i * 0.13),
        MAT.glass,
      );
      wall.position.y = y + 0.45 + 1.38;
      g.add(wall);
    }
  });
  const canopy = arcSlab(13.8, 24.5, a0 - 0.05, a1 + 0.05, 0.35, MAT.timberDark);
  canopy.position.y = 10.9;
  g.add(canopy);
  // V columns
  for (let a = a0 + 0.1; a < a1; a += 0.22) {
    const R = 20;
    const x = Math.cos(a) * R, z = -Math.sin(a) * R;
    [-0.35, 0.35].forEach((tilt) => {
      const c = box(0.22, 1.9, 0.22, MAT.charcoal, x, 0.75, z, false);
      c.rotation.set(0, -a, tilt);
      g.add(c);
    });
  }

  g.add(trees([
    { x: -24, z: 10, s: 2.4 }, { x: 18, z: 22, s: 2.2 }, { x: 26, z: 4, s: 2.6 }, { x: -26, z: -6, s: 2.4 },
    { x: 8, z: -16, s: 2.8 }, { x: -12, z: -16, s: 2.2 }, { x: 4, z: 26, s: 2.0 },
  ], 71));

  return shadowAll(g);
}
