/**
 * House of Wisdom — cream fibro cottage outside, CRT chapel inside.
 *
 * Closed shell with a south door onto the boardwalk gap. Five PSA videos are
 * reused across floor / wall / ceiling screens. A dentist chair in the centre
 * straps the player into a first-person spin.
 */
import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import {
  mat,
  cvs,
  canvasTex,
  cloneMap,
  hipRoof,
  metalRoofTex,
  makeSignPlane,
} from "./coconutsHelpers.js";

const T = 0.24;
const DOOR_H = 2.15;
const CHAIR_R = 1.4;
const RATES = [0.5, 0.68, 0.82, 1.0, 1.18];
const PSA = [
  "assets/media/psa/psa1.mp4",
  "assets/media/psa/psa2.mp4",
  "assets/media/psa/psa3.mp4",
  "assets/media/psa/psa4.mp4",
  "assets/media/psa/psa5.mp4",
];
/** Unmute these three while inside; volumes stay in 0.04–0.12. */
const LIVE = [
  [0, 0.07],
  [2, 0.12],
  [3, 0.04],
];
const TINTS = [
  new THREE.Vector3(0.62, 1.18, 1.28),
  new THREE.Vector3(1.28, 0.62, 1.16),
  new THREE.Vector3(0.68, 1.28, 0.7),
  new THREE.Vector3(1.32, 0.58, 0.55),
  new THREE.Vector3(0.6, 0.78, 1.32),
];

const _geo = new Map();
function bgeo(w, h, d) {
  const k = `${w.toFixed(3)}|${h.toFixed(3)}|${d.toFixed(3)}`;
  let g = _geo.get(k);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    _geo.set(k, g);
  }
  return g;
}
function cgeo(rt, rb, h, seg) {
  const k = `c${rt}|${rb}|${h}|${seg}`;
  let g = _geo.get(k);
  if (!g) {
    g = new THREE.CylinderGeometry(rt, rb, h, seg);
    _geo.set(k, g);
  }
  return g;
}
function pgeo(w, h) {
  const k = `p${w.toFixed(3)}|${h.toFixed(3)}`;
  let g = _geo.get(k);
  if (!g) {
    g = new THREE.PlaneGeometry(w, h);
    _geo.set(k, g);
  }
  return g;
}
function bx(w, h, d, m) {
  const me = new THREE.Mesh(bgeo(w, h, d), m);
  me.castShadow = true;
  me.receiveShadow = true;
  return me;
}
function fx(w, h, d, m) {
  const me = new THREE.Mesh(bgeo(w, h, d), m);
  me.receiveShadow = true;
  return me;
}

function runs(a, b, doors) {
  const out = [];
  let cur = a;
  const sorted = doors.slice().sort((p, q) => p.at - q.at);
  for (const d of sorted) {
    const g0 = d.at - d.w / 2;
    const g1 = d.at + d.w / 2;
    if (g0 > cur) out.push([cur, g0]);
    cur = Math.max(cur, g1);
  }
  if (cur < b) out.push([cur, b]);
  return out;
}

function hash01(i, salt) {
  const n = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function board(title, sub, w, h, bg = "#3a2a22", fg = "#f2d9a8") {
  const cw = 512;
  const ch = Math.max(96, Math.min(384, Math.round((cw * h) / w)));
  const c = cvs(cw, ch);
  const x = c.getContext("2d");
  x.fillStyle = bg;
  x.fillRect(0, 0, cw, ch);
  x.strokeStyle = "#6a4a30";
  x.lineWidth = Math.max(8, ch * 0.07);
  x.strokeRect(x.lineWidth / 2, x.lineWidth / 2, cw - x.lineWidth, ch - x.lineWidth);
  x.textAlign = "center";
  x.textBaseline = "middle";
  const inner = cw - 56;
  const fit = (text, start, family) => {
    let px = start;
    x.font = `bold ${px}px ${family}`;
    while (px > 9 && x.measureText(text).width > inner) {
      px -= 2;
      x.font = `bold ${px}px ${family}`;
    }
    return px;
  };
  x.fillStyle = fg;
  fit(title, Math.round(ch * (sub ? 0.42 : 0.5)), "Georgia, serif");
  x.fillText(title, cw / 2, sub ? ch * 0.38 : ch * 0.5);
  if (sub) {
    x.fillStyle = "#c4a070";
    fit(sub, Math.round(ch * 0.19), "ui-sans-serif, system-ui, sans-serif");
    x.fillText(sub, cw / 2, ch * 0.72);
  }
  return canvasTex(c, false);
}

function lintel(g, cx, cz, w, h, floorY, axis, wallMat, timber) {
  const hh = h - DOOR_H;
  if (hh > 0.05) {
    const head = axis === "x" ? bx(w + 0.24, hh, T, wallMat) : bx(T, hh, w + 0.24, wallMat);
    head.position.set(cx, floorY + DOOR_H + hh / 2, cz);
    g.add(head);
  }
  for (const s of [-1, 1]) {
    const jamb =
      axis === "x" ? fx(0.12, DOOR_H, T + 0.04, timber) : fx(T + 0.04, DOOR_H, 0.12, timber);
    jamb.position.set(
      axis === "x" ? cx + s * (w / 2 + 0.06) : cx,
      floorY + DOOR_H / 2,
      axis === "x" ? cz : cz + s * (w / 2 + 0.06)
    );
    g.add(jamb);
  }
}

function bands(g, w, d, cx, cz, B, band) {
  const sh = 0.48;
  const skirt = fx(w + 0.06, sh, d + 0.06, band);
  skirt.position.set(cx, B.floorY + sh / 2, cz);
  g.add(skirt);
  const fascia = fx(w + 0.06, 0.18, d + 0.06, band);
  fascia.position.set(cx, B.floorY + B.h - 0.1, cz);
  g.add(fascia);
}

/**
 * Closed cottage shell. Same segment-wall / door-gap contract as interiors.js.
 */
function shell(g, reg, B, M) {
  const { x0, x1, z0, z1, h, doors } = B;
  const hy = B.floorY + h / 2;

  const put = (mesh, minX, maxX, minZ, maxZ) => {
    g.add(mesh);
    reg(minX, maxX, minZ, maxZ, B.floorY, B.floorY + h);
  };

  const skin = (a, b, px, pz, ry) => {
    if (b - a < 0.02) return;
    const p = new THREE.Mesh(pgeo(b - a, h), M.wallIn);
    p.position.set(px, B.floorY + h / 2, pz);
    p.rotation.y = ry;
    p.receiveShadow = true;
    g.add(p);
  };

  for (const [side, zA, zB, ry] of [
    ["n", z1, z1 + T, Math.PI],
    ["s", z0 - T, z0, 0],
  ]) {
    const ds = doors.filter((d) => d.side === side);
    const inner = side === "n" ? z1 - 0.012 : z0 + 0.012;
    for (const [a, b] of runs(x0, x1, ds)) {
      const m = bx(b - a, h, T, M.wallOut);
      m.position.set((a + b) / 2, hy, (zA + zB) / 2);
      put(m, a, b, zA, zB);
      skin(a, b, (a + b) / 2, inner, ry);
      bands(g, b - a, T, (a + b) / 2, (zA + zB) / 2, B, M.band);
    }
    for (const d of ds) lintel(g, d.at, (zA + zB) / 2, d.w, h, B.floorY, "x", M.wallOut, M.timber);
  }

  for (const [side, xA, xB, ry] of [
    ["e", x1, x1 + T, -Math.PI / 2],
    ["w", x0 - T, x0, Math.PI / 2],
  ]) {
    const ds = doors.filter((d) => d.side === side);
    const inner = side === "e" ? x1 - 0.012 : x0 + 0.012;
    for (const [a, b] of runs(z0 - T, z1 + T, ds)) {
      const m = bx(T, h, b - a, M.wallOut);
      m.position.set((xA + xB) / 2, hy, (a + b) / 2);
      put(m, xA, xB, a, b);
      bands(g, T, b - a, (xA + xB) / 2, (a + b) / 2, B, M.band);
      const ca = Math.max(a, z0);
      const cb = Math.min(b, z1);
      if (cb > ca) skin(ca, cb, inner, (ca + cb) / 2, ry);
    }
    for (const d of ds) lintel(g, (xA + xB) / 2, d.at, d.w, h, B.floorY, "z", M.wallOut, M.timber);
  }

  const iw = x1 - x0;
  const id = z1 - z0;
  const floor = fx(iw + T * 2, 0.12, id + T * 2, M.floor);
  floor.position.set((x0 + x1) / 2, B.floorY - 0.06, (z0 + z1) / 2);
  g.add(floor);

  const ceil = fx(iw + T * 2, 0.1, id + T * 2, M.ceiling);
  ceil.position.set((x0 + x1) / 2, B.floorY + h - 0.05, (z0 + z1) / 2);
  g.add(ceil);

  return { ceilingY: B.floorY + h - 0.1 };
}

const CRT_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const CRT_FRAG = /* glsl */ `
uniform sampler2D map;
uniform float time;
uniform float bulge;
uniform vec2 scanline;
uniform float amber;
uniform float hue;
uniform float sat;
uniform vec3 tint;
uniform float staticAmt;
uniform float contrast;
varying vec2 vUv;

vec2 barrel(vec2 uv, float k) {
  vec2 c = uv * 2.0 - 1.0;
  float r2 = dot(c, c);
  c *= 1.0 + k * r2;
  return c * 0.5 + 0.5;
}

vec3 hueShift(vec3 col, float a) {
  float cosA = cos(a);
  float sinA = sin(a);
  const vec3 k = vec3(0.57735027);
  return col * cosA + cross(k, col) * sinA + k * dot(k, col) * (1.0 - cosA);
}

void main() {
  vec2 uv = barrel(vUv, bulge);
  float edge = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
  if (edge < 0.0) {
    gl_FragColor = vec4(0.015, 0.012, 0.02, 1.0);
    return;
  }
  vec4 tex = texture2D(map, uv);
  vec3 col = tex.rgb;
  col *= col;
  float sl = sin(uv.y * scanline.y * 3.14159 + time * 6.0) * 0.5 + 0.5;
  col *= 1.0 - scanline.x * sl * 0.85;
  float n = fract(sin(dot(uv + fract(time * 0.17), vec2(12.9898, 78.233))) * 43758.5453);
  col += (n - 0.5) * staticAmt;
  col = (col - 0.5) * contrast + 0.5;
  float g = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(g), col, sat);
  col = hueShift(col, hue);
  col = mix(col, vec3(1.0, 0.7, 0.18) * g, amber);
  col *= tint;
  float bezel = smoothstep(0.0, 0.035, edge);
  col *= bezel;
  col += vec3(0.07, 0.08, 0.1) * (1.0 - bezel);
  gl_FragColor = vec4(col, 1.0);
}
`;

function makeVideos() {
  const vids = [];
  const texs = [];
  for (let i = 0; i < 5; i++) {
    const v = document.createElement("video");
    v.src = PSA[i];
    v.loop = true;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.preload = "auto";
    v.setAttribute("playsinline", "");
    v.setAttribute("muted", "");
    v.playbackRate = RATES[i];
    v.volume = 0;
    v.crossOrigin = "anonymous";
    const tex = new THREE.VideoTexture(v);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    vids.push(v);
    texs.push(tex);
  }
  return { vids, texs };
}

function makeCrtMat(map, i, uTime) {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: map },
      time: uTime,
      bulge: { value: 0.02 + hash01(i, 1) * 0.16 },
      scanline: { value: new THREE.Vector2(0.18 + hash01(i, 2) * 0.4, 160 + hash01(i, 3) * 280) },
      amber: { value: hash01(i, 4) * 0.85 },
      hue: { value: (hash01(i, 5) - 0.5) * 0.9 },
      sat: { value: 0.4 + hash01(i, 6) * 1.2 },
      tint: { value: TINTS[i % TINTS.length].clone() },
      staticAmt: { value: 0.025 + hash01(i, 7) * 0.16 },
      contrast: { value: 0.88 + hash01(i, 8) * 0.5 },
    },
    vertexShader: CRT_VERT,
    fragmentShader: CRT_FRAG,
    toneMapped: false,
    fog: false,
  });
  return m;
}

function makeChair(M, floorY) {
  const root = new THREE.Group();
  root.name = "wisdomChair";
  const yawG = new THREE.Group();
  const rockG = new THREE.Group();
  root.add(yawG);
  yawG.add(rockG);

  const base = new THREE.Mesh(cgeo(0.34, 0.38, 0.14, 12), M.chrome);
  base.position.y = floorY + 0.08;
  base.castShadow = true;
  root.add(base);
  const col = new THREE.Mesh(cgeo(0.07, 0.09, 0.52, 8), M.chrome);
  col.position.y = floorY + 0.38;
  root.add(col);
  const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), M.chrome);
  pivot.position.y = floorY + 0.66;
  yawG.add(pivot);

  const vinyl = M.vinyl;
  const seatG = new THREE.Group();
  seatG.position.set(0, floorY + 0.78, 0.02);
  seatG.rotation.x = -0.16;
  rockG.add(seatG);
  const SEAT_L = 0.56;
  const seat = fx(0.52, 0.08, SEAT_L, vinyl);
  seat.position.set(0, 0, SEAT_L * 0.5 - 0.02);
  seatG.add(seat);
  const backHinge = new THREE.Group();
  backHinge.position.set(0, 0.04, -0.02);
  backHinge.rotation.x = 1.12;
  seatG.add(backHinge);
  const BACK_L = 0.76;
  const back = fx(0.52, 0.08, BACK_L, vinyl);
  back.position.set(0, 0, -BACK_L * 0.5);
  backHinge.add(back);
  const head = fx(0.3, 0.07, 0.18, vinyl);
  head.position.set(0, 0.05, -BACK_L + 0.02);
  backHinge.add(head);
  const foot = fx(0.38, 0.06, 0.24, vinyl);
  foot.position.set(0, 0, SEAT_L - 0.08);
  seatG.add(foot);
  for (const s of [-1, 1]) {
    const arm = fx(0.08, 0.06, 0.42, vinyl);
    arm.position.set(s * 0.3, 0.16, 0.08);
    seatG.add(arm);
    const post = fx(0.05, 0.28, 0.05, M.chrome);
    post.position.set(s * 0.3, 0.06, 0.16);
    seatG.add(post);
    const strap = fx(0.07, 0.03, 0.22, M.strap);
    strap.position.set(s * 0.3, 0.2, 0.08);
    seatG.add(strap);
  }
  const lap = fx(0.44, 0.025, 0.07, M.strap);
  lap.position.set(0, 0.08, 0.12);
  seatG.add(lap);

  // Eyes off the vinyl near the headrest. rx 0.96 + hinge 1.12 + seat -0.16 = world 1.92 (ceiling TVs).
  const camMount = new THREE.Object3D();
  camMount.position.set(0, 0.16, -0.62);
  camMount.rotation.set(0.96, 0, 0);
  backHinge.add(camMount);

  return { root, yawG, rockG, camMount };
}

function windowBox(g, M, x, y, z, ry) {
  const box = fx(0.72, 0.16, 0.28, M.timber);
  box.position.set(x, y, z);
  box.rotation.y = ry;
  g.add(box);
  const dirt = fx(0.62, 0.05, 0.2, M.dark);
  dirt.position.set(x, y + 0.09, z);
  dirt.rotation.y = ry;
  g.add(dirt);
  for (let i = 0; i < 4; i++) {
    const leaf = new THREE.Mesh(cgeo(0.05, 0.07, 0.16, 6), M.leaf);
    const o = (i - 1.5) * 0.14;
    const fx_ = Math.cos(ry) * 0.02;
    const fz = Math.sin(ry) * 0.02;
    leaf.position.set(x + Math.cos(ry) * o + fx_, y + 0.18, z + Math.sin(ry) * o + fz);
    g.add(leaf);
  }
}

function pane(g, M, w, h, x, y, z, ry) {
  const glass = new THREE.Mesh(pgeo(w, h), M.glass);
  glass.position.set(x, y, z);
  glass.rotation.y = ry;
  g.add(glass);
  const frame = fx(w + 0.08, 0.05, 0.05, M.timber);
  frame.position.set(x, y + h / 2 + 0.02, z);
  frame.rotation.y = ry;
  g.add(frame);
  const sill = fx(w + 0.12, 0.05, 0.08, M.timber);
  sill.position.set(x, y - h / 2 - 0.02, z);
  sill.rotation.y = ry;
  g.add(sill);
}

/**
 * @param {(minX:number,maxX:number,minZ:number,maxZ:number,y0?:number,y1?:number,softCam?:boolean)=>void} reg
 */
export function buildWisdomHouse(reg) {
  const M = {
    wallOut: mat(0xdfd2b6, { roughness: 0.95 }),
    wallIn: mat(0x1a1416, { roughness: 0.96, emissive: 0x1a0c14, emissiveIntensity: 1 }),
    ceiling: mat(0x141018, { roughness: 0.98, emissive: 0x12080e, emissiveIntensity: 1 }),
    floor: mat(0x121214, { roughness: 0.9, emissive: 0x08080c, emissiveIntensity: 1 }),
    band: mat(0xd9896a, { roughness: 0.82 }),
    timber: mat(0x6b4326, { roughness: 0.9 }),
    dark: mat(0x2b2f33, { roughness: 0.6 }),
    chrome: mat(0xc4c9cd, { metalness: 0.82, roughness: 0.28 }),
    vinyl: mat(0xc5d4c6, { roughness: 0.55, emissive: 0x0a100c }),
    strap: mat(0x6a3030, { roughness: 0.7 }),
    leaf: mat(0x3a6a3a, { roughness: 0.85 }),
    glass: mat(0x4a6570, { roughness: 0.18, metalness: 0.35, emissive: 0x0a1216 }),
    bulb: new THREE.MeshBasicMaterial({ color: 0xffe0a8, fog: false }),
    cab: mat(0x26282c, { roughness: 0.72, metalness: 0.18, emissive: 0x08080a }),
    chromeMir: new THREE.MeshStandardMaterial({
      color: 0x8899aa,
      metalness: 0.95,
      roughness: 0.05,
      envMapIntensity: 1,
    }),
  };
  const roofMap = cloneMap(metalRoofTex(), 4, 3);
  M.roof = new THREE.MeshStandardMaterial({ map: roofMap, roughness: 0.55, metalness: 0.18 });

  const g = new THREE.Group();
  g.name = "interiorWisdom";
  const B = {
    x0: 22.6,
    x1: 27.6,
    z0: 20.8,
    z1: 25.6,
    h: 2.7,
    floorY: 0.05,
    doors: [{ side: "s", at: 25.1, w: 1.8 }],
  };
  const dx = B.doors[0].at;
  const cx = (B.x0 + B.x1) / 2;
  const cz = (B.z0 + B.z1) / 2;
  const info = shell(g, reg, B, M);

  const eave = fx(B.x1 - B.x0 + T * 2 + 0.9, 0.14, B.z1 - B.z0 + T * 2 + 0.9, M.roof);
  eave.position.set(cx, B.floorY + B.h + 0.08, cz);
  eave.castShadow = true;
  g.add(eave);
  const roof = hipRoof(B.x1 - B.x0 + T * 2 + 0.7, B.z1 - B.z0 + T * 2 + 0.7, 1.12, M.roof);
  roof.position.set(cx, B.floorY + B.h + 0.16 + 0.56, cz);
  g.add(roof);

  // small verandah on the south (boardwalk) face, posts clear of the door slot
  const vz = B.z0 - T - 0.55;
  const deck = fx(3.4, 0.1, 1.15, M.timber);
  deck.position.set(cx, B.floorY - 0.02, vz);
  g.add(deck);
  for (const px of [cx - 1.45, cx + 1.45]) {
    const post = fx(0.12, 2.35, 0.12, M.timber);
    post.position.set(px, B.floorY + 1.15, vz - 0.42);
    g.add(post);
    reg(px - 0.08, px + 0.08, vz - 0.5, vz - 0.34, B.floorY, B.floorY + 2.35);
  }
  const beam = fx(3.5, 0.12, 0.12, M.timber);
  beam.position.set(cx, B.floorY + 2.34, vz - 0.42);
  g.add(beam);
  const awn = fx(3.5, 0.08, 1.2, M.band);
  awn.position.set(cx, B.floorY + 2.42, vz - 0.05);
  g.add(awn);

  const sz = B.z0 - T - 0.03;
  const signP = makeSignPlane(board("HOUSE OF WISDOM", "VISITORS WELCOME", 2.2, 0.62), 2.2, 0.62);
  signP.position.set(cx, B.floorY + 2.38, sz);
  signP.rotation.y = Math.PI;
  g.add(signP);

  pane(g, M, 0.7, 0.72, cx - 1.55, B.floorY + 1.45, sz, Math.PI);
  pane(g, M, 0.7, 0.72, cx + 1.55, B.floorY + 1.45, sz, Math.PI);
  windowBox(g, M, cx - 1.55, B.floorY + 0.95, sz - 0.12, Math.PI);
  windowBox(g, M, cx + 1.55, B.floorY + 0.95, sz - 0.12, Math.PI);
  pane(g, M, 0.62, 0.7, B.x1 + T + 0.02, B.floorY + 1.5, cz - 0.9, Math.PI / 2);
  pane(g, M, 0.62, 0.7, B.x0 - T - 0.02, B.floorY + 1.5, cz + 0.6, -Math.PI / 2);
  windowBox(g, M, B.x1 + T + 0.14, B.floorY + 1.02, cz - 0.9, Math.PI / 2);

  const porch = new THREE.Mesh(cgeo(0.035, 0.04, 1.7, 6), M.dark);
  porch.position.set(dx - 1.15, B.floorY + 0.85, sz - 0.08);
  g.add(porch);
  const shade = fx(0.22, 0.06, 0.22, M.dark);
  shade.position.set(dx - 1.15, B.floorY + 1.72, sz - 0.08);
  g.add(shade);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), M.bulb);
  bulb.position.set(dx - 1.15, B.floorY + 1.64, sz - 0.08);
  g.add(bulb);
  const porchLight = new THREE.PointLight(0xffc090, 1.6, 5, 2);
  porchLight.position.set(dx - 1.15, B.floorY + 1.64, sz - 0.08);
  porchLight.castShadow = false;
  g.add(porchLight);

  const lamp = new THREE.PointLight(0xc8886a, 4, 8, 2);
  lamp.position.set(cx, info.ceilingY - 0.35, cz);
  lamp.castShadow = false;
  g.add(lamp);
  const lamp2 = new THREE.PointLight(0x8844aa, 1.4, 6, 2);
  lamp2.position.set(cx - 1.1, B.floorY + 0.4, cz + 0.8);
  lamp2.castShadow = false;
  g.add(lamp2);

  const { vids, texs } = makeVideos();
  const uTime = { value: 0 };
  const cabData = [];
  const dummy = new THREE.Object3D();
  const euler = new THREE.Euler();
  const nrm = new THREE.Vector3();
  const planeGeo = pgeo(1, 1);
  let tvN = 0;

  function addTv(x, y, z, w, h, rx, ry, rz) {
    const matl = makeCrtMat(texs[tvN % 5], tvN, uTime);
    const screen = new THREE.Mesh(planeGeo, matl);
    screen.scale.set(w, h, 1);
    screen.position.set(x, y, z);
    screen.rotation.set(rx, ry, rz);
    screen.castShadow = false;
    screen.receiveShadow = false;
    g.add(screen);
    cabData.push({ x, y, z, w, h, rx, ry, rz });
    tvN += 1;
  }

  // Floor tiles face up. Ring around the chair stays walkable (visual gap).
  {
    const tw = 0.72;
    const th = 0.54;
    const gx = 0.08;
    const gz = 0.08;
    const xA = B.x0 + 0.28;
    const xB = B.x1 - 0.28;
    const zA = B.z0 + 0.28;
    const zB = B.z1 - 0.28;
    const y = B.floorY + 0.02;
    for (let x = xA + tw / 2; x < xB - tw / 2 + 0.01; x += tw + gx) {
      for (let z = zA + th / 2; z < zB - th / 2 + 0.01; z += th + gz) {
        const dx_ = x - cx;
        const dz_ = z - cz;
        if (dx_ * dx_ + dz_ * dz_ < 1.22 * 1.22) continue;
        addTv(x, y, z, tw, th, -Math.PI / 2, 0, 0);
      }
    }
  }

  // Ceiling face-down
  {
    const tw = 1.12;
    const th = 0.88;
    const y = info.ceilingY - 0.04;
    for (let x = B.x0 + 0.7; x < B.x1 - 0.5; x += tw + 0.12) {
      for (let z = B.z0 + 0.65; z < B.z1 - 0.5; z += th + 0.12) {
        addTv(x, y, z, tw, th, Math.PI / 2, 0, 0);
      }
    }
  }

  const inset = 0.045;
  const twW = 0.66;
  const thW = 0.58;
  const gapX = 0.08;
  const gapY = 0.16;
  const y0 = B.floorY + 0.42;
  const y1 = B.floorY + B.h - 0.32;

  function wallGrid(x0, x1, z0, z1, rx, ry, skip) {
    const alongX = Math.abs(x1 - x0) >= Math.abs(z1 - z0);
    const a0 = alongX ? x0 : z0;
    const a1 = alongX ? x1 : z1;
    const px = alongX ? 0 : (x0 + x1) / 2;
    const pz = alongX ? (z0 + z1) / 2 : 0;
    for (let a = a0 + twW / 2; a < a1 - twW / 2 + 0.01; a += twW + gapX) {
      for (let y = y0 + thW / 2; y < y1 - thW / 2 + 0.01; y += thW + gapY) {
        const x = alongX ? a : px;
        const z = alongX ? pz : a;
        if (skip && skip(x, y, z)) continue;
        addTv(x, y, z, twW, thW, rx, ry, 0);
      }
    }
  }

  // Mirror gaps: east/west centres, two on the north wall.
  const mirE = { z0: cz - 0.55, z1: cz + 0.55, y0: 0.7, y1: 2.15 };
  const mirW = { z0: cz - 0.2, z1: cz + 0.9, y0: 0.65, y1: 2.2 };
  const mirN0 = { x0: cx - 1.55, x1: cx - 0.7, y0: 0.8, y1: 2.1 };
  const mirN1 = { x0: cx + 0.7, x1: cx + 1.55, y0: 0.8, y1: 2.1 };

  wallGrid(B.x0 + 0.2, B.x1 - 0.2, B.z1 - inset, B.z1 - inset, 0, Math.PI, (x, y) => {
    if (y > mirN0.y0 && y < mirN0.y1 && x > mirN0.x0 && x < mirN0.x1) return true;
    if (y > mirN1.y0 && y < mirN1.y1 && x > mirN1.x0 && x < mirN1.x1) return true;
    return false;
  });
  wallGrid(B.x1 - inset, B.x1 - inset, B.z0 + 0.2, B.z1 - 0.2, 0, -Math.PI / 2, (_x, y, z) => {
    return y > mirE.y0 && y < mirE.y1 && z > mirE.z0 && z < mirE.z1;
  });
  wallGrid(B.x0 + inset, B.x0 + inset, B.z0 + 0.2, B.z1 - 0.2, 0, Math.PI / 2, (_x, y, z) => {
    return y > mirW.y0 && y < mirW.y1 && z > mirW.z0 && z < mirW.z1;
  });
  // South wall: solid runs + a row above the door.
  for (const [a, b] of runs(B.x0, B.x1, B.doors)) {
    wallGrid(a + 0.08, b - 0.08, B.z0 + inset, B.z0 + inset, 0, 0, null);
  }
  {
    const yDoor = B.floorY + DOOR_H + 0.28;
    addTv(dx - 0.38, yDoor, B.z0 + inset, 0.58, 0.36, 0, 0, 0);
    addTv(dx + 0.38, yDoor, B.z0 + inset, 0.58, 0.36, 0, 0, 0);
  }

  if (cabData.length) {
    const im = new THREE.InstancedMesh(bgeo(1, 1, 1), M.cab, cabData.length);
    im.castShadow = false;
    im.receiveShadow = true;
    for (let i = 0; i < cabData.length; i++) {
      const d = cabData[i];
      euler.set(d.rx, d.ry, d.rz);
      nrm.set(0, 0, 1).applyEuler(euler);
      dummy.position.set(d.x - nrm.x * 0.028, d.y - nrm.y * 0.028, d.z - nrm.z * 0.028);
      dummy.rotation.copy(euler);
      dummy.scale.set(d.w * 1.12, d.h * 1.16, 0.05);
      dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
    }
    im.instanceMatrix.needsUpdate = true;
    g.add(im);
  }

  function chromeMirror(w, h, x, y, z, ry, tiltX, tiltZ) {
    const m = new THREE.Mesh(pgeo(w, h), M.chromeMir);
    m.position.set(x, y, z);
    m.rotation.set(tiltX, ry, tiltZ);
    m.castShadow = false;
    g.add(m);
    const frame = fx(w + 0.06, h + 0.06, 0.03, M.dark);
    frame.position.set(x - Math.sin(ry) * 0.02, y, z - Math.cos(ry) * 0.02);
    frame.rotation.set(tiltX * 0.5, ry, tiltZ * 0.5);
    g.add(frame);
  }

  function realMirror(w, h, x, y, z, ry, tiltX) {
    const geo = new THREE.PlaneGeometry(w, h);
    const r = new Reflector(geo, {
      clipBias: 0.003,
      textureWidth: 128,
      textureHeight: 128,
      color: 0x8899aa,
      multisample: 0,
    });
    r.position.set(x, y, z);
    r.rotation.set(tiltX, ry, 0);
    r.castShadow = false;
    g.add(r);
  }

  realMirror(0.9, 1.45, B.x1 - 0.03, 1.32, cz, -Math.PI / 2, 0.08);
  realMirror(0.85, 1.4, B.x0 + 0.03, 1.28, cz + 0.35, Math.PI / 2, -0.06);
  chromeMirror(0.72, 1.15, cx - 1.12, 1.4, B.z1 - 0.03, Math.PI, 0.05, 0.04);
  chromeMirror(0.72, 1.15, cx + 1.12, 1.38, B.z1 - 0.03, Math.PI, -0.04, -0.05);
  chromeMirror(0.55, 0.95, B.x0 + 0.9, 1.5, B.z0 + 0.03, 0, 0.07, 0.03);
  chromeMirror(0.5, 0.8, B.x1 - 0.7, 1.15, B.z1 - 0.03, Math.PI, 0.1, -0.06);

  const chair = makeChair(M, B.floorY);
  chair.root.position.set(cx, 0, cz);
  g.add(chair.root);
  reg(cx - 0.36, cx + 0.36, cz - 0.48, cz + 0.5, B.floorY, B.floorY + 1.15, true);

  const _camPos = new THREE.Vector3();
  const _camQuat = new THREE.Quaternion();
  const _camScl = new THREE.Vector3();
  let strapped = false;
  let prevE = false;
  let yawSpeed = 0.8;
  let flipT = 3;
  let spinT = 0;
  let pitchAmp = 0.1;
  let rollAmp = 0.08;
  let pitchFreq = 1.1;
  let rollFreq = 0.85;
  let phase = 0;
  let savedFov = 62;
  let started = false;
  let lastInside = false;

  function inside(pos) {
    if (!pos) return false;
    return pos.x > B.x0 && pos.x < B.x1 && pos.z > B.z0 && pos.z < B.z1;
  }

  function inChairRange(pos) {
    if (!pos) return false;
    const dx_ = pos.x - cx;
    const dz_ = pos.z - cz;
    return dx_ * dx_ + dz_ * dz_ <= CHAIR_R * CHAIR_R;
  }

  function pickSpin() {
    const mag = 0.4 + Math.random() * 1.2;
    yawSpeed = (Math.random() < 0.5 ? -1 : 1) * mag;
    flipT = 1.8 + Math.random() * 4.5;
    pitchAmp = 0.07 + Math.random() * 0.15;
    rollAmp = 0.05 + Math.random() * 0.14;
    pitchFreq = 0.55 + Math.random() * 1.7;
    rollFreq = 0.45 + Math.random() * 2.1;
    phase = Math.random() * Math.PI * 2;
    spinT = 0;
  }

  function sit(player, camera) {
    strapped = true;
    pickSpin();
    if (player?.pos) {
      player.pos.x = cx;
      player.pos.z = cz;
      player.vel?.set?.(0, 0, 0);
    }
    if (camera) {
      savedFov = camera.fov || 62;
      camera.fov = 70;
      camera.updateProjectionMatrix();
    }
  }

  function leave(player, camera, follow) {
    strapped = false;
    chair.yawG.rotation.y = 0;
    chair.rockG.rotation.x = 0;
    chair.rockG.rotation.z = 0;
    if (player?.pos) {
      player.pos.x = cx + 0.5;
      player.pos.z = cz - 1.15;
      player.yaw = 0;
      player.pitch = -0.05;
      player.vel?.set?.(0, 0, 0);
    }
    if (camera) {
      camera.fov = savedFov || 62;
      camera.updateProjectionMatrix();
    }
    follow?.snap?.();
  }

  function toggle(player, camera, follow) {
    if (strapped) leave(player, camera, follow);
    else if (player && inChairRange(player.pos)) sit(player, camera);
  }

  function tryChair(player, keys, camera, follow, clicked) {
    const eDown = !!(keys?.KeyE || keys?.Enter || keys?.NumpadEnter);
    const eEdge = eDown && !prevE;
    prevE = eDown;
    const want = !!clicked || eEdge;
    if (!want) return false;
    if (strapped) {
      leave(player, camera, follow);
      return true;
    }
    if (inChairRange(player?.pos)) {
      sit(player, camera);
      return true;
    }
    return false;
  }

  function tickChair(dt, player) {
    if (!strapped) return;
    const t = dt > 0 ? dt : 0;
    spinT += t;
    flipT -= t;
    if (flipT <= 0) {
      yawSpeed *= -1;
      if (Math.random() < 0.35) yawSpeed = Math.sign(yawSpeed || 1) * (0.4 + Math.random() * 1.2);
      flipT = 1.6 + Math.random() * 5;
    }
    chair.yawG.rotation.y += yawSpeed * t;
    chair.rockG.rotation.x = pitchAmp * Math.sin(spinT * pitchFreq + phase);
    chair.rockG.rotation.z = rollAmp * Math.sin(spinT * rollFreq + phase * 1.7);
    if (player?.pos) {
      player.pos.x = cx;
      player.pos.z = cz;
      player.vel?.set?.(0, 0, 0);
    }
  }

  function applyCamera(camera) {
    if (!camera || !strapped) return;
    chair.camMount.updateWorldMatrix(true, false);
    chair.camMount.matrixWorld.decompose(_camPos, _camQuat, _camScl);
    camera.position.copy(_camPos);
    camera.quaternion.copy(_camQuat);
    if (camera.fov !== 70) {
      camera.fov = 70;
      camera.updateProjectionMatrix();
    }
  }

  function tick(t, playerPos, audioOn) {
    uTime.value = t;
    const here = inside(playerPos) || strapped;
    if (here && !started) {
      started = true;
      vids[0]?.play?.().catch(() => {});
    }
    if (here) {
      const i = Math.min(vids.length - 1, (t * 0.35) | 0);
      if (vids[i] && vids[i].paused) vids[i].play().catch(() => {});
      for (let i = 0; i < vids.length; i++) {
        vids[i].muted = true;
        vids[i].volume = 0;
      }
      if (audioOn) {
        for (const [i, vol] of LIVE) {
          vids[i].muted = false;
          vids[i].volume = vol;
        }
      }
    } else if (lastInside || started) {
      for (const v of vids) {
        v.muted = true;
        v.volume = 0;
      }
      const dx_ = playerPos ? playerPos.x - cx : 99;
      const dz_ = playerPos ? playerPos.z - cz : 99;
      if (dx_ * dx_ + dz_ * dz_ > 22 * 22) {
        for (const v of vids) {
          if (!v.paused) v.pause();
        }
        started = false;
      }
    }
    lastInside = here;
  }

  return {
    id: "wisdom",
    label: "HOUSE OF WISDOM",
    group: g,
    B,
    center: { x: cx, z: cz },
    ceilingY: info.ceilingY,
    lamp,
    lampBase: 4,
    fan: null,
    fluoro: null,
    door: { x: dx, z: B.z0 - T / 2 },
    tick,
    tryChair,
    get strapped() {
      return strapped;
    },
    toggle,
    applyCamera,
    tickChair,
    inChairRange,
    screenCount: tvN,
  };
}

export default buildWisdomHouse;
