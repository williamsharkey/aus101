/**
 * VOID NEST — Shita's underground bedroom. Hatch beside the ocean piano,
 * spiral stairs several storeys down, Howl-bedroom clutter in a rock pocket.
 *
 * Global colliders are XZ-only, so cave walls are NOT registered: they would
 * fence the swell. Gravity, treads and the rock shell live in tickPlayer.
 */
import * as THREE from "three";
import { mat, cvs, canvasTex } from "./coconutsHelpers.js";

const CX = 7;
const CZ = -30;
const RX = 5.8;
const RZ = 6.4;
const FLOOR_Y = -11.2;
const CEILING_Y = -7.5;
const G = 22;
const PLAYER_R = 0.34;

const SP_CX = 10.05;
const SP_CZ = -27.55;
const SP_INNER = 0.36;
const SP_OUTER = 1.58;
const SP_STEPS = 42;
const SP_TURNS = 3.2;
const SP_DA = (SP_TURNS * Math.PI * 2) / SP_STEPS;
const SP_RISE = (0 - FLOOR_Y) / SP_STEPS;
const SP_A0 = 0.22;

const HX = SP_CX;
const HZ = SP_CZ;

const NEST_X = 3.15;
const NEST_Z = -33.05;
const TABLE_X = 4.55;
const TABLE_Z = -26.35;

const _dummy = new THREE.Object3D();

function rnd(i, salt) {
  const s = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function rockTex() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#24141c";
  x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) {
    const gx = rnd(i, 1) * 256;
    const gy = rnd(i, 2) * 256;
    const r = 3 + rnd(i, 3) * 16;
    x.fillStyle = rnd(i, 4) < 0.5 ? "rgba(62,34,52,0.55)" : "rgba(38,24,32,0.5)";
    x.beginPath();
    x.ellipse(gx, gy, r, r * (0.55 + rnd(i, 5) * 0.5), rnd(i, 6) * 3, 0, Math.PI * 2);
    x.fill();
  }
  x.strokeStyle = "rgba(90,48,78,0.28)";
  x.lineWidth = 1.4;
  for (let i = 0; i < 18; i++) {
    x.beginPath();
    x.moveTo(rnd(i, 7) * 256, rnd(i, 8) * 256);
    x.lineTo(rnd(i, 9) * 256, rnd(i, 10) * 256);
    x.stroke();
  }
  const t = canvasTex(c);
  t.repeat.set(3, 2);
  return t;
}

function woodTex() {
  const c = cvs(128, 64);
  const x = c.getContext("2d");
  x.fillStyle = "#6a4024";
  x.fillRect(0, 0, 128, 64);
  for (let r = 0; r < 4; r++) {
    x.fillStyle = r % 2 ? "#7a4c2c" : "#5c361c";
    x.fillRect(0, r * 16, 128, 15);
    x.strokeStyle = "rgba(30,16,8,0.35)";
    x.strokeRect(0, r * 16, 128, 16);
  }
  return canvasTex(c);
}

function stainedTex() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#1a0c08";
  x.fillRect(0, 0, 256, 256);
  const cols = ["#c45a3a", "#e8c45a", "#3a8a6a", "#4a6ab4", "#d478b0", "#e8a05a"];
  const cells = [
    [28, 20, 70, 90],
    [110, 16, 50, 70],
    [172, 22, 60, 86],
    [40, 120, 80, 100],
    [130, 100, 90, 70],
    [28, 230, 200, 18],
    [90, 180, 70, 50],
    [175, 175, 55, 60],
  ];
  for (let i = 0; i < cells.length; i++) {
    const [sx, sy, w, h] = cells[i];
    x.fillStyle = cols[i % cols.length];
    x.beginPath();
    x.moveTo(sx, sy);
    x.lineTo(sx + w, sy + 4);
    x.lineTo(sx + w - 6, sy + h);
    x.lineTo(sx + 8, sy + h - 6);
    x.closePath();
    x.fill();
  }
  x.strokeStyle = "#c9a45a";
  x.lineWidth = 5;
  x.strokeRect(8, 8, 240, 240);
  x.beginPath();
  x.moveTo(128, 8);
  x.lineTo(128, 248);
  x.moveTo(8, 128);
  x.lineTo(248, 128);
  x.stroke();
  const t = canvasTex(c, false);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function cosmosTex() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  const g = x.createRadialGradient(140, 110, 8, 128, 128, 160);
  g.addColorStop(0, "#3a2060");
  g.addColorStop(0.35, "#140c28");
  g.addColorStop(1, "#07060e");
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 256);
  x.fillStyle = "#8a6ab8";
  x.beginPath();
  x.ellipse(150, 118, 42, 14, -0.5, 0, Math.PI * 2);
  x.fill();
  x.fillStyle = "#c4a0e8";
  x.beginPath();
  x.arc(148, 116, 7, 0, Math.PI * 2);
  x.fill();
  for (let i = 0; i < 90; i++) {
    const px = rnd(i, 21) * 256;
    const py = rnd(i, 22) * 256;
    const r = rnd(i, 23) < 0.12 ? 1.6 : 0.7;
    x.fillStyle = rnd(i, 24) < 0.2 ? "#ffe8b0" : "#e8e0ff";
    x.fillRect(px, py, r, r);
  }
  return canvasTex(c, false);
}

function inEllipse(x, z, pad = 0) {
  const nx = (x - CX) / (RX - pad);
  const nz = (z - CZ) / (RZ - pad);
  return nx * nx + nz * nz < 1;
}

function ellipsePush(x, z, pad) {
  const nx = (x - CX) / (RX - pad);
  const nz = (z - CZ) / (RZ - pad);
  const e = Math.hypot(nx, nz);
  if (e <= 1 || e < 1e-6) return null;
  return { x: CX + (nx / e) * (RX - pad), z: CZ + (nz / e) * (RZ - pad) };
}

function polar(x, z, ox, oz) {
  const dx = x - ox;
  const dz = z - oz;
  return { d: Math.hypot(dx, dz), a: Math.atan2(dx, dz), dx, dz };
}

function overSpiral(x, z, slack = 0.12) {
  const { d } = polar(x, z, SP_CX, SP_CZ);
  return d >= SP_INNER - slack && d <= SP_OUTER + slack;
}

function overHatch(x, z) {
  return polar(x, z, SP_CX, SP_CZ).d < SP_OUTER + 0.55;
}

function wrapPi(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

/** Deck at y=0 covering the well except the entrance wedge (first ~3 treads). */
function onTopLanding(x, z) {
  const { d, a } = polar(x, z, SP_CX, SP_CZ);
  if (d < SP_INNER + 0.04 || d > SP_OUTER + 0.55) return false;
  return Math.abs(wrapPi(a - SP_A0)) > SP_DA * 2.2;
}

function hatchY(i) {
  return -i * SP_RISE;
}

function standYAt(x, z, y) {
  let stand = -Infinity;
  if (inEllipse(x, z, 0.05)) stand = FLOOR_Y;
  const { d } = polar(x, z, SP_CX, SP_CZ);
  if (d < SP_OUTER + 0.7 && d > SP_OUTER - 0.02 && y > -0.55) stand = Math.max(stand, 0);
  if (onTopLanding(x, z) && y > -0.55) stand = Math.max(stand, 0);
  if (overSpiral(x, z, 0.16)) {
    let ang = polar(x, z, SP_CX, SP_CZ).a;
    if (ang < 0) ang += Math.PI * 2;
    for (let k = 0; k <= SP_TURNS + 1; k++) {
      const un = ang + k * Math.PI * 2;
      const i = Math.round((un - SP_A0) / SP_DA);
      if (i < 0 || i >= SP_STEPS) continue;
      const ty = hatchY(i);
      if (ty <= y + 0.48 && ty >= y - 0.75) stand = Math.max(stand, ty);
    }
  }
  return stand === -Infinity ? null : stand;
}

function inVolume(x, z, y) {
  if (overHatch(x, z) || overSpiral(x, z, 0.2)) return true;
  if (y < -0.18 && inEllipse(x, z, -0.25)) return true;
  return false;
}

function contains(x, z, y) {
  if (y === undefined || y === null) {
    // interiors.js is XZ-only. A true here would clamp the follow-cam to
    // ceilingY (−7.5) while walking the swell, so unknown-Y is a miss.
    return false;
  }
  return inVolume(x, z, y);
}

function put(mesh, x, y, z, sx, sy, sz, rx, ry, rz) {
  mesh.position.set(x, y, z);
  if (sx != null) mesh.scale.set(sx, sy, sz);
  if (rx) mesh.rotation.x = rx;
  if (ry) mesh.rotation.y = ry;
  if (rz) mesh.rotation.z = rz;
  return mesh;
}

/**
 * @param {(minX:number,maxX:number,minZ:number,maxZ:number,y0?:number,y1?:number,soft?:boolean)=>void} _reg
 */
export function buildVoidCave(_reg) {
  const g = new THREE.Group();
  g.name = "interiorVoid";

  const BOX = new THREE.BoxGeometry(1, 1, 1);
  const SPH = new THREE.SphereGeometry(1, 8, 6);
  const CYL = new THREE.CylinderGeometry(1, 1, 1, 8);
  const ICO = new THREE.IcosahedronGeometry(1, 0);
  const PLN = new THREE.PlaneGeometry(1, 1);

  const rockMap = rockTex();
  const woodMap = woodTex();
  const rockM = new THREE.MeshStandardMaterial({
    map: rockMap,
    color: 0x6a4a58,
    roughness: 0.96,
    emissive: 0x10080c,
  });
  const rockDeep = new THREE.MeshStandardMaterial({
    map: rockMap,
    color: 0x3a2832,
    roughness: 0.98,
    side: THREE.BackSide,
    emissive: 0x08060a,
  });
  const timber = new THREE.MeshStandardMaterial({ map: woodMap, roughness: 0.88, color: 0xc4a078 });
  const linen = mat(0xc8b49a, { roughness: 0.9, emissive: 0x1a120c, side: THREE.DoubleSide });
  const cloth = mat(0x6a3048, { roughness: 0.85, emissive: 0x12060c, side: THREE.DoubleSide });
  const clothB = mat(0x2a4a48, { roughness: 0.86, emissive: 0x081010, side: THREE.DoubleSide });
  const brass = mat(0xb08a3a, { roughness: 0.4, metalness: 0.55 });
  const dark = mat(0x1a1614, { roughness: 0.7 });
  const greenG = mat(0x2a6b44, { roughness: 0.22, metalness: 0.12, emissive: 0x0a2014, emissiveIntensity: 0.35 });
  const leaf = mat(0x3a7a38, { roughness: 0.8, emissive: 0x0c1a0a });
  const wax = mat(0xe8dcc0, { roughness: 0.55 });
  const rugM = mat(0x5a2030, { roughness: 0.92, emissive: 0x120308 });
  const fairyM = new THREE.MeshStandardMaterial({
    color: 0xffe2a8,
    emissive: 0xffc878,
    emissiveIntensity: 1.6,
    roughness: 0.4,
  });
  const flameM = new THREE.MeshStandardMaterial({
    color: 0xffcc66,
    emissive: 0xff9933,
    emissiveIntensity: 2.2,
    roughness: 0.5,
  });
  const glassM = new THREE.MeshStandardMaterial({
    map: stainedTex(),
    roughness: 0.35,
    metalness: 0.05,
    emissive: 0x402010,
    emissiveIntensity: 0.85,
    side: THREE.DoubleSide,
  });
  const cosmosM = new THREE.MeshStandardMaterial({
    map: cosmosTex(),
    roughness: 0.7,
    emissive: 0x1a1028,
    emissiveIntensity: 0.7,
    side: THREE.DoubleSide,
  });
  const cableM = new THREE.LineBasicMaterial({ color: 0x3a2a20 });
  const bulbLit = new THREE.MeshBasicMaterial({ color: 0xffe4b0, fog: false });

  const mesh = (geo, m) => {
    const o = new THREE.Mesh(geo, m);
    o.castShadow = false;
    o.receiveShadow = true;
    return o;
  };

  // --- shell ---
  const wallH = CEILING_Y - FLOOR_Y + 0.35;
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.04, wallH, 22, 1, true),
    rockDeep
  );
  wall.position.set(CX, (FLOOR_Y + CEILING_Y) * 0.5, CZ);
  wall.scale.set(RX + 0.12, 1, RZ + 0.12);
  const wp = wall.geometry.attributes.position;
  for (let i = 0; i < wp.count; i++) {
    const x = wp.getX(i);
    const z = wp.getZ(i);
    const n = 0.045 * Math.sin(x * 9 + z * 7) + 0.03 * Math.cos(x * 14 - z * 11);
    const r = Math.hypot(x, z) || 1;
    wp.setX(i, x + (x / r) * n);
    wp.setZ(i, z + (z / r) * n);
  }
  wp.needsUpdate = true;
  wall.geometry.computeVertexNormals();
  g.add(wall);

  const floor = new THREE.Mesh(new THREE.CircleGeometry(1, 24), rockM);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(CX, FLOOR_Y, CZ);
  floor.scale.set(RX + 0.2, RZ + 0.2, 1);
  floor.receiveShadow = true;
  g.add(floor);

  const ceilShape = new THREE.Shape();
  const segs = 24;
  for (let i = 0; i <= segs; i++) {
    const a = (i / segs) * Math.PI * 2;
    const px = Math.sin(a) * (RX + 0.18);
    const pz = Math.cos(a) * (RZ + 0.18);
    if (i === 0) ceilShape.moveTo(px, -pz);
    else ceilShape.lineTo(px, -pz);
  }
  const hole = new THREE.Path();
  const hr = SP_OUTER + 0.22;
  const hox = SP_CX - CX;
  const hoz = SP_CZ - CZ;
  for (let i = 16; i >= 0; i--) {
    const a = (i / 16) * Math.PI * 2;
    const px = hox + Math.sin(a) * hr;
    const pz = hoz + Math.cos(a) * hr;
    if (i === 16) hole.moveTo(px, -pz);
    else hole.lineTo(px, -pz);
  }
  ceilShape.holes.push(hole);
  const ceilGeo = new THREE.ShapeGeometry(ceilShape, 8);
  ceilGeo.rotateX(-Math.PI / 2);
  const ceil = new THREE.Mesh(ceilGeo, rockM);
  ceil.position.set(CX, CEILING_Y, CZ);
  g.add(ceil);

  const rocks = new THREE.InstancedMesh(ICO, rockM, 28);
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2 + rnd(i, 30) * 0.2;
    const rr = 0.92 + rnd(i, 31) * 0.08;
    _dummy.position.set(CX + Math.sin(a) * RX * rr, FLOOR_Y + 0.35 + rnd(i, 32) * 2.2, CZ + Math.cos(a) * RZ * rr);
    _dummy.rotation.set(rnd(i, 33) * 2, rnd(i, 34) * 6, rnd(i, 35) * 2);
    const s = 0.28 + rnd(i, 36) * 0.55;
    _dummy.scale.set(s, s * (0.6 + rnd(i, 37) * 0.7), s);
    _dummy.updateMatrix();
    rocks.setMatrixAt(i, _dummy.matrix);
  }
  g.add(rocks);

  // --- shaft + hatch ---
  const shaftH = 0.2 - CEILING_Y;
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(SP_OUTER + 0.1, SP_OUTER + 0.14, shaftH, 16, 1, true), rockDeep);
  shaft.position.set(SP_CX, (0.2 + CEILING_Y) * 0.5, SP_CZ);
  g.add(shaft);

  const wellDark = new THREE.Mesh(new THREE.CircleGeometry(SP_OUTER + 0.08, 16), dark);
  wellDark.rotation.x = -Math.PI / 2;
  wellDark.position.set(SP_CX, 0.01, SP_CZ);
  g.add(wellDark);

  const rimIM = new THREE.InstancedMesh(BOX, timber, 12);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    _dummy.position.set(
      SP_CX + Math.sin(a) * (SP_OUTER + 0.18),
      0.14,
      SP_CZ + Math.cos(a) * (SP_OUTER + 0.18)
    );
    _dummy.rotation.set(0, a, 0);
    _dummy.scale.set(0.55, 0.12, 0.22);
    _dummy.updateMatrix();
    rimIM.setMatrixAt(i, _dummy.matrix);
  }
  g.add(rimIM);

  const landIM = new THREE.InstancedMesh(BOX, timber, 12);
  let landN = 0;
  const landR = (SP_INNER + SP_OUTER) * 0.5;
  const landW = SP_OUTER - SP_INNER;
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    if (Math.abs(wrapPi(a - SP_A0)) < SP_DA * 2.2) continue;
    _dummy.position.set(SP_CX + Math.sin(a) * landR, 0.05, SP_CZ + Math.cos(a) * landR);
    _dummy.rotation.set(0, a, 0);
    _dummy.scale.set(landW, 0.07, Math.max(0.22, landR * (Math.PI * 2) / 16));
    _dummy.updateMatrix();
    landIM.setMatrixAt(landN, _dummy.matrix);
    landN++;
    if (landN >= 12) break;
  }
  landIM.count = landN;
  g.add(landIM);

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.4;
    const post = mesh(BOX, timber);
    put(post, SP_CX + Math.sin(a) * (SP_OUTER + 0.32), 0.7, SP_CZ + Math.cos(a) * (SP_OUTER + 0.32), 0.12, 1.2, 0.12);
    g.add(post);
  }
  const lintel = mesh(BOX, timber);
  put(lintel, SP_CX, 1.28, SP_CZ, (SP_OUTER + 0.4) * 2, 0.1, 0.16);
  g.add(lintel);
  const lid = mesh(BOX, timber);
  put(lid, SP_CX + 1.35, 0.85, SP_CZ + 0.15, 1.7, 0.06, 1.5, 0, 0.3, 1.05);
  g.add(lid);

  const sc = cvs(256, 64);
  const sx = sc.getContext("2d");
  sx.fillStyle = "#1a120c";
  sx.fillRect(0, 0, 256, 64);
  sx.fillStyle = "#e8c56a";
  sx.font = "bold 28px Georgia, serif";
  sx.textAlign = "center";
  sx.fillText("VOID NEST", 128, 42);
  const sign = mesh(PLN, new THREE.MeshStandardMaterial({ map: canvasTex(sc, false), roughness: 0.7 }));
  put(sign, SP_CX, 1.52, SP_CZ + SP_OUTER + 0.42, 1.4, 0.34, 1);
  g.add(sign);

  // --- spiral stairs ---
  const treads = new THREE.InstancedMesh(BOX, timber, SP_STEPS);
  const pole = mesh(CYL, timber);
  put(pole, SP_CX, (FLOOR_Y + 0.1) * 0.5, SP_CZ, 0.12, -FLOOR_Y + 0.3, 0.12);
  g.add(pole);
  const midR = (SP_INNER + SP_OUTER) * 0.5;
  const treadW = SP_OUTER - SP_INNER;
  for (let i = 0; i < SP_STEPS; i++) {
    const a = SP_A0 + i * SP_DA;
    const y = hatchY(i);
    const px = SP_CX + Math.sin(a) * midR;
    const pz = SP_CZ + Math.cos(a) * midR;
    const arc = midR * SP_DA * 1.15;
    _dummy.position.set(px, y + 0.04, pz);
    _dummy.rotation.set(0, a, 0);
    _dummy.scale.set(treadW, 0.08, Math.max(0.22, arc));
    _dummy.updateMatrix();
    treads.setMatrixAt(i, _dummy.matrix);
  }
  g.add(treads);

  const railN = 16;
  const rails = new THREE.InstancedMesh(BOX, timber, railN);
  for (let i = 0; i < railN; i++) {
    const t = i / (railN - 1);
    const a = SP_A0 + t * SP_TURNS * Math.PI * 2;
    const yy = -t * (0 - FLOOR_Y);
    _dummy.position.set(SP_CX + Math.sin(a) * (SP_OUTER + 0.06), yy + 0.42, SP_CZ + Math.cos(a) * (SP_OUTER + 0.06));
    _dummy.rotation.set(0, a, 0.12);
    _dummy.scale.set(0.05, 0.84, 0.05);
    _dummy.updateMatrix();
    rails.setMatrixAt(i, _dummy.matrix);
  }
  g.add(rails);

  // --- lights: 4 dim points + emissive fairy spheres ---
  const lamp = new THREE.PointLight(0xffc888, 2.6, 12, 2);
  lamp.position.set(CX + 0.4, FLOOR_Y + 2.55, CZ + 0.2);
  lamp.castShadow = false;
  g.add(lamp);
  const extraLights = [];
  const mkL = (color, intensity, dist, x, y, z) => {
    const L = new THREE.PointLight(color, intensity, dist, 2);
    L.position.set(x, y, z);
    L.castShadow = false;
    g.add(L);
    extraLights.push(L);
    return L;
  };
  mkL(0xff9944, 1.15, 6.5, NEST_X, FLOOR_Y + 1.35, NEST_Z);
  mkL(0xffddaa, 0.95, 5.5, TABLE_X, FLOOR_Y + 1.4, TABLE_Z);
  mkL(0xffc090, 0.85, 7.5, SP_CX, FLOOR_Y + 5.5, SP_CZ);

  const lampGlow = mesh(SPH, fairyM);
  put(lampGlow, CX + 0.4, FLOOR_Y + 2.55, CZ + 0.2, 0.09, 0.09, 0.09);
  g.add(lampGlow);

  // --- nest ---
  const nest = new THREE.Group();
  nest.name = "shita-nest";
  nest.position.set(NEST_X, FLOOR_Y, NEST_Z);
  nest.rotation.y = 0.55;
  g.add(nest);
  const mattress = mesh(BOX, linen);
  put(mattress, 0, 0.16, 0, 2.35, 0.28, 1.72);
  nest.add(mattress);
  for (const [px, pz] of [
    [-1.05, -0.72],
    [1.05, -0.72],
    [-1.05, 0.72],
    [1.05, 0.72],
  ]) {
    const post = mesh(CYL, timber);
    put(post, px, 1.15, pz, 0.05, 2.2, 0.05);
    nest.add(post);
  }
  const beamA = mesh(BOX, timber);
  put(beamA, 0, 2.22, -0.72, 2.2, 0.07, 0.07);
  nest.add(beamA);
  const beamB = mesh(BOX, timber);
  put(beamB, 0, 2.22, 0.72, 2.2, 0.07, 0.07);
  nest.add(beamB);
  const canopy = mesh(PLN, cloth);
  put(canopy, 0, 2.16, 0, 2.3, 1.6, 1, -Math.PI / 2);
  nest.add(canopy);
  const drapeL = mesh(PLN, cloth);
  put(drapeL, -1.08, 1.2, 0, 1.55, 1.9, 1, 0, Math.PI / 2, 0.12);
  nest.add(drapeL);
  const drapeR = mesh(PLN, clothB);
  put(drapeR, 1.1, 1.05, 0.1, 1.4, 1.7, 1, 0, -Math.PI / 2, -0.18);
  nest.add(drapeR);
  const blanket = mesh(BOX, cloth);
  put(blanket, 0.15, 0.34, 0.08, 1.7, 0.08, 1.2, 0.08, 0.2, 0.05);
  nest.add(blanket);
  for (const [px, pz, s] of [
    [-0.55, -0.45, 0.22],
    [-0.15, -0.55, 0.18],
    [0.45, -0.4, 0.2],
  ]) {
    const p = mesh(SPH, linen);
    put(p, px, 0.42, pz, s * 1.4, s, s * 1.1);
    nest.add(p);
  }

  // --- table + void-deck (looper HUD parents here) ---
  const table = mesh(BOX, timber);
  put(table, TABLE_X, FLOOR_Y + 0.72, TABLE_Z, 1.35, 0.07, 0.85);
  g.add(table);
  for (const [dx, dz] of [
    [-0.52, -0.3],
    [0.52, -0.3],
    [-0.52, 0.3],
    [0.52, 0.3],
  ]) {
    const leg = mesh(BOX, timber);
    put(leg, TABLE_X + dx, FLOOR_Y + 0.36, TABLE_Z + dz, 0.07, 0.72, 0.07);
    g.add(leg);
  }
  const deck = new THREE.Group();
  deck.name = "void-deck";
  deck.position.set(TABLE_X, FLOOR_Y + 0.76, TABLE_Z);
  g.add(deck);

  const rug = mesh(PLN, rugM);
  put(rug, (NEST_X + TABLE_X) * 0.5, FLOOR_Y + 0.015, (NEST_Z + CZ) * 0.5, 3.4, 2.4, 1, -Math.PI / 2, 0.4);
  g.add(rug);

  // --- gramophone ---
  const gram = new THREE.Group();
  gram.position.set(NEST_X + 1.55, FLOOR_Y, NEST_Z + 1.35);
  gram.rotation.y = -0.7;
  g.add(gram);
  const gbox = mesh(BOX, timber);
  put(gbox, 0, 0.28, 0, 0.48, 0.22, 0.42);
  gram.add(gbox);
  const disc = mesh(CYL, dark);
  put(disc, 0.02, 0.42, 0.02, 0.18, 0.02, 0.18);
  gram.add(disc);
  const horn = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.03, 0.55, 10, 1, true), brass);
  horn.position.set(-0.05, 0.72, -0.12);
  horn.rotation.z = 0.85;
  horn.rotation.y = 0.4;
  gram.add(horn);
  const arm = mesh(BOX, brass);
  put(arm, 0.12, 0.48, 0.05, 0.22, 0.03, 0.03, 0, 0, -0.4);
  gram.add(arm);

  // --- books (instanced) ---
  const N_BOOKS = 64;
  const bookM = new THREE.MeshStandardMaterial({ roughness: 0.72, color: 0xffffff });
  const bookIM = new THREE.InstancedMesh(BOX, bookM, N_BOOKS);
  const bookHex = [0x6b2d2d, 0x2d4a6b, 0x3d5a32, 0x6b5a2d, 0x4a2d5a, 0x5a3a28, 0x2d3a3a, 0x8a4a28];
  const col = new THREE.Color();
  let bi = 0;
  const stack = (ox, oz, n, yaw) => {
    let y = FLOOR_Y + 0.05;
    for (let i = 0; i < n && bi < N_BOOKS; i++) {
      const w = 0.16 + rnd(bi, 40) * 0.08;
      const h = 0.04 + rnd(bi, 41) * 0.03;
      const d = 0.22 + rnd(bi, 42) * 0.08;
      _dummy.position.set(ox + (rnd(bi, 43) - 0.5) * 0.04, y + h * 0.5, oz + (rnd(bi, 44) - 0.5) * 0.04);
      _dummy.rotation.set(0, yaw + (rnd(bi, 45) - 0.5) * 0.25, (rnd(bi, 46) - 0.5) * 0.08);
      _dummy.scale.set(w, h, d);
      _dummy.updateMatrix();
      bookIM.setMatrixAt(bi, _dummy.matrix);
      bookIM.setColorAt(bi, col.setHex(bookHex[bi % bookHex.length]));
      y += h;
      bi++;
    }
  };
  stack(5.4, -33.6, 9, 0.4);
  stack(5.7, -33.2, 7, 0.1);
  stack(2.2, -31.4, 8, 1.1);
  stack(6.2, -26.9, 6, -0.3);
  stack(3.9, -27.1, 5, 0.6);
  stack(8.2, -33.8, 8, 0.2);
  stack(4.9, -31.8, 11, 0.15);
  stack(NEST_X - 0.2, NEST_Z + 1.55, 6, 0.9);
  while (bi < N_BOOKS) {
    const a = rnd(bi, 50) * Math.PI * 2;
    const rr = 2.2 + rnd(bi, 51) * 3.2;
    stack(CX + Math.sin(a) * rr, CZ + Math.cos(a) * rr, 1, a);
  }
  bookIM.instanceMatrix.needsUpdate = true;
  if (bookIM.instanceColor) bookIM.instanceColor.needsUpdate = true;
  g.add(bookIM);

  // --- bottles ---
  const N_BOT = 36;
  const botIM = new THREE.InstancedMesh(CYL, greenG, N_BOT);
  const botHex = [0x2a6b44, 0x1a5a3a, 0x3a7a40, 0x245848, 0x4a6a28, 0x1e4a38];
  for (let i = 0; i < N_BOT; i++) {
    const hang = i < 14;
    let x, y, z;
    if (hang) {
      const a = (i / 14) * Math.PI * 2;
      x = CX + Math.sin(a) * 2.8 + (rnd(i, 60) - 0.5) * 1.4;
      z = CZ + Math.cos(a) * 2.4 + (rnd(i, 61) - 0.5) * 1.2;
      y = CEILING_Y - 0.45 - rnd(i, 62) * 0.7;
    } else {
      x = 5.1 + rnd(i, 63) * 2.4;
      z = -33.8 + rnd(i, 64) * 1.4;
      y = FLOOR_Y + 0.22 + (i % 3) * 0.18;
    }
    const h = 0.22 + rnd(i, 65) * 0.16;
    const r = 0.035 + rnd(i, 66) * 0.025;
    _dummy.position.set(x, y, z);
    _dummy.rotation.set(hang ? 0.15 + rnd(i, 67) * 0.2 : 0, rnd(i, 68) * 6, hang ? 0.08 : 0);
    _dummy.scale.set(r, h, r);
    _dummy.updateMatrix();
    botIM.setMatrixAt(i, _dummy.matrix);
    botIM.setColorAt(i, col.setHex(botHex[i % botHex.length]));
  }
  botIM.instanceMatrix.needsUpdate = true;
  if (botIM.instanceColor) botIM.instanceColor.needsUpdate = true;
  g.add(botIM);

  // hanging lines for bottles
  const hangPts = [];
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const x = CX + Math.sin(a) * 2.8 + (rnd(i, 60) - 0.5) * 1.4;
    const z = CZ + Math.cos(a) * 2.4 + (rnd(i, 61) - 0.5) * 1.2;
    const y = CEILING_Y - 0.45 - rnd(i, 62) * 0.7;
    hangPts.push(new THREE.Vector3(x, CEILING_Y - 0.02, z), new THREE.Vector3(x, y + 0.12, z));
  }

  // --- clothes line ---
  const c1 = new THREE.Vector3(2.4, CEILING_Y - 0.15, -31.2);
  const c2 = new THREE.Vector3(5.8, CEILING_Y - 0.35, -34.4);
  hangPts.push(c1, c2);
  const garments = [
    [0.22, cloth],
    [0.45, clothB],
    [0.68, linen],
    [0.85, cloth],
  ];
  for (const [t, m] of garments) {
    const p = c1.clone().lerp(c2, t);
    const shirt = mesh(BOX, m);
    put(shirt, p.x, p.y - 0.45, p.z, 0.32, 0.7, 0.06, 0.08, t * 2, 0.1);
    g.add(shirt);
  }

  // --- plants ---
  const potM = mat(0x8a4a32, { roughness: 0.8 });
  for (const [px, pz, s] of [
    [2.35, -28.4, 0.85],
    [8.6, -33.6, 0.7],
    [5.9, -25.2, 0.6],
    [2.6, -34.4, 0.5],
  ]) {
    const pot = mesh(CYL, potM);
    put(pot, px, FLOOR_Y + 0.16, pz, 0.12 * s, 0.28 * s, 0.12 * s);
    g.add(pot);
    const bush = mesh(SPH, leaf);
    put(bush, px, FLOOR_Y + 0.42 * s + 0.22, pz, 0.28 * s, 0.24 * s, 0.28 * s);
    g.add(bush);
    const bush2 = mesh(SPH, leaf);
    put(bush2, px + 0.1, FLOOR_Y + 0.5 * s + 0.22, pz - 0.08, 0.2 * s, 0.18 * s, 0.2 * s);
    g.add(bush2);
  }

  // --- candles (emissive tips, no extra point lights) ---
  const N_CAND = 14;
  const cand = new THREE.InstancedMesh(CYL, wax, N_CAND);
  const flames = new THREE.InstancedMesh(SPH, flameM, N_CAND);
  const candPos = [
    [NEST_X + 0.9, FLOOR_Y + 0.55, NEST_Z + 0.9],
    [NEST_X - 0.8, FLOOR_Y + 0.5, NEST_Z + 1.1],
    [TABLE_X + 0.5, FLOOR_Y + 0.88, TABLE_Z - 0.28],
    [5.4, FLOOR_Y + 0.48, -33.4],
    [5.55, FLOOR_Y + 0.42, -33.55],
    [2.3, FLOOR_Y + 0.45, -31.2],
    [8.1, FLOOR_Y + 0.5, -33.5],
    [6.3, FLOOR_Y + 0.4, -26.8],
    [4.2, FLOOR_Y + 0.38, -31.6],
    [3.6, FLOOR_Y + 0.55, -27.4],
    [7.4, FLOOR_Y + 0.42, -32.2],
    [2.8, FLOOR_Y + 0.4, -32.6],
    [TABLE_X - 0.48, FLOOR_Y + 0.88, TABLE_Z + 0.22],
    [NEST_X + 1.2, FLOOR_Y + 0.52, NEST_Z - 0.4],
  ];
  for (let i = 0; i < N_CAND; i++) {
    const [x, y, z] = candPos[i];
    const h = 0.1 + rnd(i, 70) * 0.08;
    _dummy.position.set(x, y, z);
    _dummy.rotation.set(0, 0, 0);
    _dummy.scale.set(0.018, h, 0.018);
    _dummy.updateMatrix();
    cand.setMatrixAt(i, _dummy.matrix);
    _dummy.position.set(x, y + h * 0.5 + 0.03, z);
    _dummy.scale.set(0.02, 0.035, 0.02);
    _dummy.updateMatrix();
    flames.setMatrixAt(i, _dummy.matrix);
  }
  g.add(cand);
  g.add(flames);

  // --- cosmos mural + mobile ---
  const mural = mesh(PLN, cosmosM);
  put(mural, CX - 0.4, FLOOR_Y + 1.85, CZ - RZ + 0.28, 4.6, 2.6, 1, 0, 0);
  g.add(mural);
  const frame = mesh(BOX, timber);
  put(frame, CX - 0.4, FLOOR_Y + 1.85, CZ - RZ + 0.22, 4.8, 2.8, 0.06);
  g.add(frame);

  const mobile = new THREE.Group();
  mobile.position.set(CX - 1.1, CEILING_Y - 0.15, CZ - 2.4);
  g.add(mobile);
  const hub = mesh(SPH, brass);
  put(hub, 0, 0, 0, 0.04, 0.04, 0.04);
  mobile.add(hub);
  const starHex = [0xffe8a0, 0xc8d8ff, 0xffc0e0, 0xa0ffe8, 0xffd0a0];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const arm = mesh(BOX, brass);
    put(arm, Math.sin(a) * 0.28, -0.08, Math.cos(a) * 0.28, 0.55, 0.015, 0.015, 0, -a);
    mobile.add(arm);
    const st = mesh(SPH, new THREE.MeshStandardMaterial({
      color: starHex[i],
      emissive: starHex[i],
      emissiveIntensity: 0.9,
      roughness: 0.4,
    }));
    put(st, Math.sin(a) * 0.55, -0.22 - (i % 3) * 0.12, Math.cos(a) * 0.55, 0.05, 0.05, 0.05);
    mobile.add(st);
  }
  hangPts.push(new THREE.Vector3(CX - 1.1, CEILING_Y, CZ - 2.4), mobile.position.clone().setY(CEILING_Y - 0.12));

  // --- stained glass ---
  const sg1 = mesh(PLN, glassM);
  put(sg1, CX - RX + 0.22, FLOOR_Y + 1.9, CZ + 1.2, 1.6, 1.8, 1, 0, Math.PI / 2);
  g.add(sg1);
  const sg2 = mesh(PLN, glassM);
  put(sg2, CX + 1.8, FLOOR_Y + 1.75, CZ + RZ - 0.32, 1.4, 1.5, 1, 0, Math.PI);
  g.add(sg2);

  // --- fairy strings ---
  const N_FAIRY = 48;
  const fairy = new THREE.InstancedMesh(SPH, fairyM, N_FAIRY);
  const chains = [];
  const stringEnds = [
    [CX - 3.2, CZ - 2.2, CX + 3.4, CZ + 1.8],
    [CX - 2.4, CZ + 3.2, CX + 2.8, CZ - 3.6],
    [CX + 0.6, CZ - 4.2, NEST_X + 1.2, NEST_Z + 0.4],
    [TABLE_X, TABLE_Z, CX + 3.2, CZ + 2.4],
    [SP_CX - 1.6, SP_CZ - 0.4, CX - 2.8, CZ - 1.2],
  ];
  let fi = 0;
  for (const [x1, z1, x2, z2] of stringEnds) {
    const n = 10;
    const chain = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const sag = Math.sin(t * Math.PI) * 0.42;
      const x = x1 + (x2 - x1) * t;
      const z = z1 + (z2 - z1) * t;
      const y = CEILING_Y - 0.12 - sag;
      chain.push(new THREE.Vector3(x, y, z));
      if (i < n && fi < N_FAIRY) {
        _dummy.position.set(x, y - 0.05, z);
        _dummy.rotation.set(0, 0, 0);
        _dummy.scale.set(0.035, 0.045, 0.035);
        _dummy.updateMatrix();
        fairy.setMatrixAt(fi, _dummy.matrix);
        fi++;
      }
    }
    chains.push(chain);
  }
  while (fi < N_FAIRY) {
    const a = rnd(fi, 80) * Math.PI * 2;
    _dummy.position.set(CX + Math.sin(a) * 3.4, CEILING_Y - 0.2 - rnd(fi, 81) * 0.4, CZ + Math.cos(a) * 3.6);
    _dummy.rotation.set(0, 0, 0);
    _dummy.scale.set(0.03, 0.04, 0.03);
    _dummy.updateMatrix();
    fairy.setMatrixAt(fi, _dummy.matrix);
    fi++;
  }
  g.add(fairy);

  for (const ch of chains) {
    for (let i = 0; i < ch.length - 1; i++) hangPts.push(ch[i], ch[i + 1]);
  }
  const cable = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(hangPts), cableM);
  cable.frustumCulled = false;
  g.add(cable);

  // a few extra warm bulbs as MeshBasic (no extra lights)
  const extraBulbs = new THREE.InstancedMesh(SPH, bulbLit, 8);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    _dummy.position.set(CX + Math.sin(a) * 4.2, FLOOR_Y + 2.1, CZ + Math.cos(a) * 4.6);
    _dummy.scale.set(0.04, 0.05, 0.04);
    _dummy.updateMatrix();
    extraBulbs.setMatrixAt(i, _dummy.matrix);
  }
  g.add(extraBulbs);

  const B = {
    x0: CX - RX,
    x1: CX + RX,
    z0: CZ - RZ,
    z1: CZ + RZ,
    floorY: FLOOR_Y,
    h: CEILING_Y - FLOOR_Y,
    doors: [{ side: "n", at: HX, w: 2.2 }],
  };

  function tickPlayer(player, dt) {
    if (!player?.pos) return false;
    const h = dt > 0 ? dt : 0;
    const x = player.pos.x;
    const z = player.pos.z;
    const y = player.pos.y;
    if (!inVolume(x, z, y)) {
      return false;
    }
    if (y >= -0.05 && !overHatch(x, z) && !overSpiral(x, z, 0.08)) {
      player.pos.y = 0;
      player.vel.y = 0;
      return false;
    }

    player.vel.y = (player.vel.y || 0) - G * h;
    player.pos.y += player.vel.y * h;

    const { d } = polar(player.pos.x, player.pos.z, SP_CX, SP_CZ);
    if (d < SP_INNER - 0.02 && player.pos.y > FLOOR_Y + 0.4) {
      // open well around the pole — keep falling, bounce off the post
      const n = d < 1e-4 ? 1 : d;
      if (d < 0.2) {
        player.pos.x = SP_CX + (player.pos.x - SP_CX) / n * 0.2;
        player.pos.z = SP_CZ + (player.pos.z - SP_CZ) / n * 0.2;
      }
    }

    const stand = standYAt(player.pos.x, player.pos.z, player.pos.y);
    if (stand != null && player.pos.y < stand) {
      player.pos.y = stand;
      player.vel.y = 0;
    }
    if (player.pos.y < FLOOR_Y) {
      player.pos.y = FLOOR_Y;
      player.vel.y = 0;
    }

    if (player.pos.y < -0.25) {
      const hit = ellipsePush(player.pos.x, player.pos.z, PLAYER_R + 0.12);
      if (hit) {
        player.pos.x = hit.x;
        player.pos.z = hit.z;
      }
    }
    return true;
  }

  function tick(t, playerPos) {
    mobile.rotation.y = t * 0.18;
    fairyM.emissiveIntensity = 1.45 + Math.sin(t * 2.3) * 0.4;
    flameM.emissiveIntensity = 2.0 + Math.sin(t * 9.5) * 0.45;
    disc.rotation.y = t * 0.65;
    const near = !!(playerPos && Math.hypot(playerPos.x - CX, playerPos.z - CZ) < 26);
    for (const L of extraLights) L.visible = near;
  }

  return {
    id: "void",
    label: "VOID NEST",
    group: g,
    B,
    center: { x: CX, z: CZ },
    ceilingY: CEILING_Y,
    lamp,
    lampBase: 2.6,
    fan: null,
    fluoro: null,
    pit: true,
    contains,
    tick,
    tickPlayer,
    nest: { x: NEST_X, y: FLOOR_Y + 0.32, z: NEST_Z },
    deck,
    stairsTop: { x: HX, z: HZ, y: 0 },
  };
}

export const VOID_CX = CX;
export const VOID_CZ = CZ;
export const VOID_FLOOR_Y = FLOOR_Y;
export const VOID_HATCH = { x: HX, z: HZ, y: 0 };
export const VOID_STAIRS = {
  stairsTop: { x: HX, z: HZ, y: 0 },
  nest: { x: NEST_X, y: FLOOR_Y + 0.32, z: NEST_Z },
  x: HX,
  y: 0,
  z: HZ,
};
export const VOID_EXITS = [
  { id: "piano", x: HX, z: HZ, y: 0 },
  { id: "stall", x: -26.2, z: 24.6, y: 0 },
];
export { contains as voidContains };
