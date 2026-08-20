/**
 * Gold Coast playable level.
 * Starting kit: Coconuts prop factories (Steve / a-better-internet/coconuts).
 * Everything is restyled: timber esplanade, surf club, SLS tower, turquoise water,
 * cascading sunset sky, no Maryland / no terracotta patio as the identity.
 *
 * Spawn: x=0, z=10, yaw=0 (facing ocean −Z).
 */
import * as THREE from "three";
import {
  kit,
  cloneMap,
  mat,
  box,
  canvasTex,
  sandCanvas,
  placeUmbrella,
  placePalm,
  makeGull,
  makeLamppost,
  makeTorch,
  makeLounger,
  makeBeachBall,
  makeSurfboard,
  stringLights,
  signTex,
  metalRoofTex,
} from "./coconutsHelpers.js";
import { pianoPulse, playPianoPluck } from "../audio/shades.js";
import { acquireCtx } from "../audio/tapeDeck.js";
import { ken, babe, poseSit } from "../chars/npcs.js";

export const GC = {
  width: 90,
  depth: 70,
  boardwalkZ: 16,
  wetZ: -10,
  oceanZ: -22,
};

export const BOUNDS = {
  minX: -GC.width / 2 + 1,
  maxX: GC.width / 2 - 1,
  minZ: -GC.depth / 2 + 1,
  maxZ: GC.depth / 2 - 1,
};

/** Canvas y=0 is zenith on SphereGeometry (flipY + uv v = 1−row). */
function skyGradient() {
  const c = document.createElement("canvas");
  c.width = 4;
  c.height = 256;
  const x = c.getContext("2d");
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, "#1a7480");
  g.addColorStop(0.16, "#2a5a8c");
  g.addColorStop(0.3, "#6a3a9a");
  g.addColorStop(0.42, "#d4508c");
  g.addColorStop(0.5, "#ff7a48");
  g.addColorStop(0.62, "#e09060");
  g.addColorStop(1, "#8a5048");
  x.fillStyle = g;
  x.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

function stripAlphaTex() {
  const c = document.createElement("canvas");
  c.width = 8;
  c.height = 64;
  const x = c.getContext("2d");
  const g = x.createLinearGradient(0, 0, 0, 64);
  g.addColorStop(0, "rgba(255,255,255,0)");
  g.addColorStop(0.32, "rgba(255,255,255,1)");
  g.addColorStop(0.68, "rgba(255,255,255,1)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  x.fillStyle = g;
  x.fillRect(0, 0, 8, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

function glowTex() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const x = c.getContext("2d");
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.22, "rgba(255,236,190,0.9)");
  g.addColorStop(0.5, "rgba(255,140,70,0.35)");
  g.addColorStop(1, "rgba(255,60,80,0)");
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

const SUN_POS = new THREE.Vector3(36, 26, -148);

export function setupGoldCoastLights(scene) {
  scene.background = new THREE.Color(0xc45c68);
  scene.fog = new THREE.Fog(0xe89a72, 26, 100);
  const hemi = new THREE.HemisphereLight(0x2e8c94, 0xd4784a, 0.88);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffc080, 2.15);
  sun.position.copy(SUN_POS).setLength(72);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 2;
  sun.shadow.camera.far = 140;
  sun.shadow.camera.left = -50;
  sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50;
  sun.shadow.camera.bottom = -50;
  sun.shadow.bias = -0.0005;
  scene.add(sun);
  return { hemi, sun };
}

const STRIP_COLS = [0xb25cff, 0xff6aa8, 0x4ec4ff, 0x4ee0a0];

function makeStripMat(map, color) {
  return new THREE.MeshBasicMaterial({
    map,
    color,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    fog: false,
    side: THREE.DoubleSide,
  });
}

function buildSunsetSky(scene) {
  const strips = [];
  const clouds = [];
  const glares = [];

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(180, 16, 12),
    new THREE.MeshBasicMaterial({ map: skyGradient(), side: THREE.BackSide, fog: false, depthWrite: false })
  );
  sky.renderOrder = -10;
  scene.add(sky);

  const alpha = stripAlphaTex();
  const stripGeo = new THREE.PlaneGeometry(230, 14);
  for (let i = 0; i < 12; i++) {
    const s = new THREE.Mesh(stripGeo, makeStripMat(alpha, STRIP_COLS[i % STRIP_COLS.length]));
    const overhead = i >= 8;
    s.userData.y0 = overhead ? 108 - (i - 8) * 8 : 122 - i * 7;
    s.userData.dieY = overhead ? 36 : 20 + (i % 3) * 5;
    s.userData.spd = (overhead ? 3.4 : 4.6) + i * 0.18;
    s.userData.peak = overhead ? 0.34 : 0.5;
    s.position.set((i % 2 ? 10 : -10) + (i - 5) * 2, s.userData.y0 - i * 3.2, overhead ? -8 - (i - 8) * 10 : -46 - (i % 5) * 7);
    s.rotation.x = overhead ? 0.72 + (i % 3) * 0.1 : 0.14 + (i % 4) * 0.05;
    s.rotation.y = (i % 2 ? -0.05 : 0.05);
    s.rotation.z = (i % 3) * 0.02 - 0.02;
    s.renderOrder = -1;
    scene.add(s);
    strips.push(s);
  }

  const disc = new THREE.Mesh(
    new THREE.SphereGeometry(7.2, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0xfff4c4, fog: false, depthWrite: false })
  );
  disc.position.copy(SUN_POS);
  disc.renderOrder = 1;
  scene.add(disc);

  const glow = glowTex();
  const flares = [
    [0xfff6d0, 56, 0.95],
    [0xffb060, 92, 0.55],
    [0xff6a88, 140, 0.32],
  ];
  for (const [color, size, op] of flares) {
    const spr = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glow,
        color,
        transparent: true,
        opacity: op,
        depthWrite: false,
        fog: false,
        blending: THREE.AdditiveBlending,
      })
    );
    spr.position.copy(SUN_POS);
    spr.scale.set(size, size, 1);
    spr.userData.baseOp = op;
    spr.renderOrder = 2;
    scene.add(spr);
    glares.push(spr);
  }

  const streak = new THREE.Mesh(
    new THREE.PlaneGeometry(110, 5.5),
    new THREE.MeshBasicMaterial({
      map: glow,
      color: 0xffe8b0,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    })
  );
  streak.position.copy(SUN_POS);
  streak.lookAt(0, 12, 0);
  streak.userData.baseOp = 0.42;
  streak.renderOrder = 2;
  scene.add(streak);
  glares.push(streak);

  const cloudGeo = new THREE.SphereGeometry(1, 8, 6);
  const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffd2c4, roughness: 1, metalness: 0, fog: false });
  const cloudSpots = [
    [18, 38, -88, 11, 2.6, 5.5],
    [52, 34, -96, 9, 2.2, 4.8],
    [-28, 42, -80, 10, 2.4, 5.2],
    [8, 48, -60, 7.5, 2.0, 4.2],
    [-48, 36, -70, 8.5, 2.1, 4.6],
    [40, 30, -54, 6.5, 1.8, 3.6],
    [-12, 44, -110, 12, 2.8, 6.0],
    [64, 40, -40, 7, 1.9, 3.8],
  ];
  for (const [x, y, z, sx, sy, sz] of cloudSpots) {
    const cl = new THREE.Mesh(cloudGeo, cloudMat);
    cl.position.set(x, y, z);
    cl.scale.set(sx, sy, sz);
    cl.userData.spd = 0.18 + Math.abs(x) * 0.002;
    cl.userData.y0 = y;
    cl.userData.ph = x * 0.07;
    scene.add(cl);
    clouds.push(cl);
  }

  return { strips, clouds, glares };
}

/**
 * Where bodies stand. Mirrors spawnBeachCast() in ../chars/npcs.js plus the DJ
 * dancers below; furniture placement is filtered against it so chairs and tables
 * never spawn through a person. Keep in sync when the cast moves.
 */
const PEOPLE = [
  [-8.2, 4.0], [6.2, 2.2], [2.0, 16.5], [11.5, 14.0], [9.8, 6.2], [-4.2, -1.8],
  [-3.5, 15.5], [8.0, 19.6], [-7.2, 22.2], [25.2, 7.4], [-14.0, 3.2], [1.4, -4.6],
  [-22.0, 9.5], [15.5, 9.0], [-10.0, 19.6], [10.2, 4.8],
  [-24.5, 3.9], [-22.3, 4.5], [-21.0, 5.8], [-22.8, 2.7], [-20.6, 3.6],
];

/** True when (x,z) is at least `r` metres from every body. */
function clearOf(x, z, r) {
  const r2 = r * r;
  for (const [px, pz] of PEOPLE) {
    const dx = px - x;
    const dz = pz - z;
    if (dx * dx + dz * dz < r2) return false;
  }
  return true;
}

/**
 * @param {THREE.Scene} scene
 * @param {{ addCollider: Function, COL?: any[] }} colliders
 */
export function buildGoldCoast(scene, colliders) {
  const K = kit();
  const add = colliders.addCollider;
  const palms = [];
  const flames = [];
  const gulls = [];
  const balls = [];
  const waves = [];
  const { strips, clouds, glares } = buildSunsetSky(scene);

  // Sand — Gold Coast blonde, not OC grey-tan
  const sandMap = canvasTex(sandCanvas());
  sandMap.repeat.set(48, 26);
  const sand = new THREE.Mesh(
    new THREE.PlaneGeometry(GC.width + 30, 66),
    new THREE.MeshStandardMaterial({ map: sandMap, roughness: 1, color: 0xf0d9a0 })
  );
  sand.rotation.x = -Math.PI / 2;
  sand.position.z = 15;
  sand.receiveShadow = true;
  scene.add(sand);

  const wet = new THREE.Mesh(
    new THREE.PlaneGeometry(GC.width + 20, 14),
    new THREE.MeshStandardMaterial({ color: 0xc4a070, roughness: 0.42, metalness: 0.08 })
  );
  wet.rotation.x = -Math.PI / 2;
  wet.position.set(0, 0.028, GC.wetZ);
  wet.receiveShadow = true;
  scene.add(wet);

  // Turquoise ocean + swell
  const oceanGeo = new THREE.PlaneGeometry(GC.width + 50, 36, 40, 10);
  const ocean = new THREE.Mesh(
    oceanGeo,
    new THREE.MeshStandardMaterial({ color: 0x17a2b8, roughness: 0.62, metalness: 0.05 })
  );
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.set(0, 0.06, GC.oceanZ - 10);
  scene.add(ocean);
  const oceanBase = Float32Array.from(oceanGeo.attributes.position.array);

  for (let i = 0; i < 7; i++) {
    const w = new THREE.Mesh(
      new THREE.PlaneGeometry(GC.width + 24, 1.9),
      new THREE.MeshBasicMaterial({ color: 0xe8f6f4, transparent: true, opacity: 0, depthWrite: false })
    );
    w.rotation.x = -Math.PI / 2;
    w.userData.spd = 1.8 + i * 0.28;
    w.userData.z0 = GC.wetZ - 16 + i * 1.15;
    w.userData.dieZ = GC.wetZ + 2;
    w.position.set(0, 0.08, w.userData.z0);
    scene.add(w);
    waves.push(w);
  }

  // Timber esplanade (NOT terracotta pavers)
  const wood = cloneMap(K.woodMap, 28, 6);
  const deck = box(GC.width * 0.78, 0.2, 9.2, new THREE.MeshStandardMaterial({ map: wood, roughness: 0.88 }));
  deck.position.set(0, 0.12, GC.boardwalkZ);
  scene.add(deck);

  // Rail
  for (let x = -32; x <= 32; x += 4) {
    const post = box(0.16, 1.15, 0.16, K.postWood);
    post.position.set(x, 0.7, GC.boardwalkZ + 4.2);
    scene.add(post);
    add(x - 0.18, x + 0.18, GC.boardwalkZ + 4.0, GC.boardwalkZ + 4.4);
  }
  const rail = box(GC.width * 0.78, 0.1, 0.12, K.postWood);
  rail.position.set(0, 1.18, GC.boardwalkZ + 4.2);
  scene.add(rail);

  // Surf-club footprint deliberately left EMPTY — x −22.4..−13.6, z 12.2..17.4
  // (centred −18, 14.8). The enterable club in src/world/interiors.js drops in
  // here, so no shell and no collider from this file.

  // SLS tower — yellow/red
  const tower = new THREE.Group();
  const legs = box(2.4, 3.6, 2.4, mat(0xf3e36a, { roughness: 0.85 }));
  legs.position.y = 1.8;
  tower.add(legs);
  const cabin = box(3.0, 1.9, 3.0, mat(0xf7f4ea, { roughness: 0.9 }));
  cabin.position.y = 4.15;
  tower.add(cabin);
  const cap = box(3.3, 0.18, 3.3, mat(0xc8402e, { roughness: 0.55 }));
  cap.position.y = 5.2;
  tower.add(cap);
  const flag = box(0.06, 1.4, 0.9, mat(0xc8402e));
  flag.position.set(0.4, 6.0, 0);
  tower.add(flag);
  const flagY = box(0.06, 1.4, 0.45, mat(0xf3e36a));
  flagY.position.set(0.41, 6.0, -0.22);
  tower.add(flagY);
  tower.position.set(20, 0, GC.boardwalkZ - 2);
  scene.add(tower);
  add(18.4, 21.6, GC.boardwalkZ - 3.6, GC.boardwalkZ - 0.4);

  // SPF kiosk
  const kiosk = new THREE.Group();
  const booth = box(3.4, 2.4, 2.6, K.wall);
  booth.position.y = 1.2;
  kiosk.add(booth);
  const kroofMap = metalRoofTex();
  kroofMap.repeat.set(3, 2);
  const kroof = box(3.8, 0.16, 3.0, new THREE.MeshStandardMaterial({ map: kroofMap, color: 0xd85a44, roughness: 0.55, metalness: 0.15 }));
  kroof.position.y = 2.5;
  kiosk.add(kroof);
  const ksign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.8, 0.7),
    new THREE.MeshBasicMaterial({ map: signTex("ZINC", "FREE SPF"), side: THREE.DoubleSide })
  );
  ksign.position.set(0, 2.05, 1.35);
  kiosk.add(ksign);
  kiosk.position.set(8, 0, GC.boardwalkZ - 1);
  scene.add(kiosk);
  add(6.2, 9.8, GC.boardwalkZ - 2.3, GC.boardwalkZ + 0.3);

  // Ice-cream van
  const van = new THREE.Group();
  const cab = box(2.4, 2.0, 2.2, mat(0xf7f4ea));
  cab.position.set(-2.0, 1.15, 0);
  van.add(cab);
  const body = box(4.2, 2.3, 2.4, mat(0xfff7fb));
  body.position.set(1.1, 1.3, 0);
  van.add(body);
  const stripe = box(4.25, 0.28, 2.42, mat(0xff6b9a));
  stripe.position.set(1.1, 1.55, 0);
  van.add(stripe);
  const win = box(1.4, 0.7, 0.08, mat(0x8ec8e8, { roughness: 0.2, metalness: 0.3 }));
  win.position.set(1.3, 1.85, 1.22);
  van.add(win);
  const hatch = box(1.6, 0.08, 0.7, mat(0xff6b9a));
  hatch.position.set(1.3, 1.42, 1.35);
  van.add(hatch);
  for (const wx of [-2.3, 2.9]) {
    for (const wz of [-0.85, 0.85]) {
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.22, 12), mat(0x1a1a1a));
      tire.rotation.z = Math.PI / 2;
      tire.position.set(wx, 0.38, wz);
      van.add(tire);
    }
  }
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.7, 8), mat(0xf2c12e));
  cone.position.set(1.1, 3.0, 0);
  van.add(cone);
  const scoop = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), mat(0xffb6c8));
  scoop.position.set(1.1, 3.38, 0);
  van.add(scoop);
  const vsign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 0.55),
    new THREE.MeshBasicMaterial({ map: signTex("SOFT SERVE", "GOLD COAST"), side: THREE.DoubleSide })
  );
  vsign.position.set(1.1, 2.35, 1.24);
  van.add(vsign);
  van.position.set(-14.5, 0, GC.boardwalkZ + 6.6);
  van.rotation.y = -0.15;
  scene.add(van);
  add(-17.7, -10.7, GC.boardwalkZ + 4.8, GC.boardwalkZ + 8.4);

  // Spray-tan tent
  const tent = new THREE.Group();
  const canvas = mat(0xff8a3d, { roughness: 0.85, side: THREE.DoubleSide });
  const wallsT = box(2.6, 2.2, 2.4, canvas);
  wallsT.position.y = 1.15;
  tent.add(wallsT);
  const flap = box(1.1, 1.8, 0.06, mat(0xffc07a, { roughness: 0.8 }));
  flap.position.set(0.4, 0.95, 1.24);
  flap.rotation.y = -0.35;
  tent.add(flap);
  const peak = new THREE.Mesh(new THREE.ConeGeometry(1.9, 0.7, 4), mat(0xe85d4c));
  peak.rotation.y = Math.PI / 4;
  peak.position.y = 2.55;
  tent.add(peak);
  const tsign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.0, 0.5),
    new THREE.MeshBasicMaterial({ map: signTex("SPRAY TAN", "$29"), side: THREE.DoubleSide })
  );
  tsign.position.set(0, 2.05, 1.28);
  tent.add(tsign);
  tent.position.set(29.5, 0, 4.5);
  tent.rotation.y = -0.6;
  scene.add(tent);
  add(28.1, 30.9, 3.1, 5.9);

  // Inflatable palm + bins + camcorder tourist stand
  const infl = new THREE.Group();
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 1.8, 8), mat(0x3cb878));
  tube.position.y = 0.95;
  infl.add(tube);
  for (let i = 0; i < 5; i++) {
    const fr = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.22), mat(0x2f9e4a));
    fr.position.set(Math.cos((i / 5) * Math.PI * 2) * 0.35, 1.85, Math.sin((i / 5) * Math.PI * 2) * 0.35);
    fr.rotation.y = (i / 5) * Math.PI * 2;
    infl.add(fr);
  }
  infl.position.set(4.5, 0, 11);
  scene.add(infl);

  // Lifeguard high chair
  const chair = new THREE.Group();
  const seat = box(1.2, 0.12, 1.1, mat(0xf3e36a));
  seat.position.y = 2.1;
  chair.add(seat);
  for (const [lx, lz] of [
    [-0.5, -0.45],
    [0.5, -0.45],
    [-0.5, 0.45],
    [0.5, 0.45],
  ]) {
    const leg = box(0.1, 2.1, 0.1, mat(0xc8402e));
    leg.position.set(lx, 1.05, lz);
    chair.add(leg);
  }
  const back = box(1.2, 0.9, 0.08, mat(0xc8402e));
  back.position.set(0, 2.6, -0.5);
  chair.add(back);
  chair.position.set(22.5, 0, GC.boardwalkZ - 6);
  scene.add(chair);

  // Camcorder tourist kit (tripod + brick camera)
  const cam = new THREE.Group();
  const tri = box(0.08, 1.1, 0.08, mat(0x222));
  tri.position.y = 0.55;
  cam.add(tri);
  const bodyCam = box(0.28, 0.18, 0.42, mat(0x1a1a1a));
  bodyCam.position.set(0, 1.2, 0.05);
  cam.add(bodyCam);
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.16, 10), mat(0x333));
  lens.rotation.x = Math.PI / 2;
  lens.position.set(0, 1.2, 0.32);
  cam.add(lens);
  cam.position.set(-11.5, 0, 8.5);
  scene.add(cam);

  for (const [bx, bz] of [
    [12.5, GC.boardwalkZ + 3.4],
    [-1.5, GC.boardwalkZ + 3.4],
  ]) {
    const bin = box(0.55, 0.85, 0.55, mat(0x2a6b3c));
    bin.position.set(bx, 0.645, bz); // deck top is 0.22, not 0
    scene.add(bin);
    add(bx - 0.32, bx + 0.32, bz - 0.32, bz + 0.32);
  }

  stringLights(scene, -22, GC.boardwalkZ + 3.8, 22, GC.boardwalkZ + 3.8, 3.1, 18);

  // Palms along esplanade + sand
  const palmSpots = [
    [-30, 14, 1.1],
    [-29, 12.5, 0.95],
    [-22, 18, 1.2],
    [-12, 12, 1.0],
    [12, 13, 1.05],
    [24, 10, 1.15],
    [28, 17, 0.9],
    [-8, -4, 0.85],
    [16, -2, 0.9],
    [-28, 0, 1.0],
    [30, 2, 0.95],
    [-15.5, 9.8, 0.8],
  ];
  for (const [x, z, s] of palmSpots) {
    if (clearOf(x, z, 1.6)) placePalm(scene, add, palms, x, z, s);
  }

  // Patio umbrellas + chairs (Coconuts factory). Laid out in the gaps between the
  // cast, then filtered again by clearOf() so nothing spawns through a body.
  const umb = [
    [-11.5, 7.5, true],
    [-5.5, 6.5, true],
    [-1.5, 3.0, true],
    [3.5, 5.5, true],
    [13.0, 3.0, true],
    [-16.5, 1.5, true],
    [-11.0, 0.5, true],
    [17.0, 6.0, true],
    [-1.0, 9.5, true],
    [7.5, 9.0, true],
    [-4.0, -7.0, false],
    [5.0, -2.0, false],
    [12.5, -5.5, false],
    [-16.5, -2.5, false],
    [20.5, 1.0, false],
  ];
  for (const [x, z, chairs] of umb) {
    if (!clearOf(x, z, chairs ? 2.0 : 1.4)) continue;
    placeUmbrella(scene, add, x, z, chairs, Math.random() * 0.4);
  }

  // Loungers toward the water, skipping any row slot a body is standing in
  const loungeCols = [0xf2c12e, 0xf2654e, 0x2f7fd0, 0x1fb6a6, 0xe23b6e];
  for (let i = 0; i < 10; i++) {
    const x = -18 + i * 4.1;
    if (clearOf(x, -6.5, 1.5)) makeLounger(scene, x, -6.5, 0.05, loungeCols[i % loungeCols.length]);
    if (clearOf(x + 1.1, -3.6, 1.5)) makeLounger(scene, x + 1.1, -3.6, -0.08, loungeCols[(i + 2) % loungeCols.length]);
  }

  // Surfboards in a rack near the club
  const boardCols = [0xf2c12e, 0xe23b3b, 0x2f7fc4, 0xffffff, 0x1fb6a6];
  for (let i = 0; i < 6; i++) {
    const b = makeSurfboard(boardCols[i % boardCols.length]);
    b.rotation.set(-0.1, 0.2, Math.PI / 2);
    b.position.set(-12.5 + i * 0.35, 1.1, GC.boardwalkZ + 1.4);
    scene.add(b);
  }

  // Beach balls
  for (const [x, z] of [
    [-2.6, -1.2],
    [8.4, -3.4],
    [0.6, 11.5],
    [-12.5, -6.0],
  ]) {
    if (!clearOf(x, z, 1.1)) continue;
    const ball = makeBeachBall(1);
    ball.position.set(x, 0.35, z);
    scene.add(ball);
    balls.push(ball);
  }

  // Lamps / torches along the deck
  for (const x of [-30, -18, -6, 6, 18, 30]) {
    if (clearOf(x, GC.boardwalkZ + 3.2, 1.2)) makeLamppost(scene, add, x, GC.boardwalkZ + 3.2);
  }
  for (const x of [-26, -8, 4, 18]) {
    if (clearOf(x, GC.boardwalkZ - 4.2, 1.2)) makeTorch(scene, add, flames, x, GC.boardwalkZ - 4.2);
  }

  // Gull flock
  for (let i = 0; i < 8; i++) {
    const g = makeGull();
    g.position.set(-20 + i * 6, 4.5 + (i % 3), -6 + (i % 4) * 3);
    g.userData.phase = i * 0.7;
    scene.add(g);
    gulls.push(g);
  }

  // Piano man — far out in the swell
  const pianoPos = { x: 7, z: -29 };
  const pianoRig = buildPianoMan();
  pianoRig.position.set(pianoPos.x, 0.15, pianoPos.z);
  pianoRig.rotation.y = 1.92; // treble side + open lid toward the beach
  scene.add(pianoRig);

  // DJ booth + stupid big screen + dancers
  const dj = buildDjBooth(scene, add);
  const dancers = spawnDancers(scene);

  return {
    ocean,
    oceanBase,
    waves,
    palms,
    gulls,
    balls,
    flames,
    bounds: BOUNDS,
    piano: pianoPos,
    isWood(x, z) {
      return Math.abs(z - GC.boardwalkZ) < 4.8 && Math.abs(x) < GC.width * 0.4;
    },
    update(t) {
      const pos = ocean.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const ix = i * 3;
        const x = oceanBase[ix];
        const z = -oceanBase[ix + 1]; // local y → world −z once the plane is laid flat
        pos.array[ix + 2] = Math.sin(x * 0.12 + t * 1.35) * 0.16 + Math.sin(z * 0.2 + t * 0.95) * 0.1;
      }
      pos.needsUpdate = true;

      for (const w of waves) {
        w.position.z += w.userData.spd * 0.016;
        const span = w.userData.dieZ - w.userData.z0;
        const u = (w.position.z - w.userData.z0) / Math.max(0.001, span);
        if (u < 0.12) w.material.opacity = u / 0.12;
        else if (u > 0.72) w.material.opacity = Math.max(0, 1 - (u - 0.72) / 0.28);
        else w.material.opacity = 0.55;
        if (w.position.z >= w.userData.dieZ) {
          w.position.z = w.userData.z0;
          w.material.opacity = 0;
        }
      }

      for (const s of strips) {
        s.position.y -= s.userData.spd * 0.016;
        const span = s.userData.y0 - s.userData.dieY;
        const u = (s.userData.y0 - s.position.y) / Math.max(0.001, span);
        const peak = s.userData.peak;
        if (u < 0.12) s.material.opacity = (u / 0.12) * peak;
        else if (u > 0.72) s.material.opacity = Math.max(0, 1 - (u - 0.72) / 0.28) * peak;
        else s.material.opacity = peak;
        if (s.position.y <= s.userData.dieY) {
          s.position.y = s.userData.y0;
          s.material.opacity = 0;
        }
      }

      for (const cl of clouds) {
        cl.position.x += cl.userData.spd * 0.016;
        cl.position.y = cl.userData.y0 + Math.sin(t * 0.22 + cl.userData.ph) * 0.8;
        if (cl.position.x > 80) cl.position.x = -72;
      }
      const pulse = 0.82 + Math.sin(t * 1.35) * 0.18;
      for (const g of glares) g.material.opacity = g.userData.baseOp * pulse;

      for (const g of gulls) {
        const p = g.userData.phase;
        g.position.x += Math.sin(t * 0.4 + p) * 0.02;
        g.position.y = 4.2 + Math.sin(t * 1.1 + p) * 0.6;
        g.rotation.y = Math.sin(t * 0.3 + p) * 0.5;
      }
      for (const f of flames) {
        if (!f.scale) continue;
        const s = 0.85 + Math.sin(t * 9 + (f.userData?.ph || 0)) * 0.12;
        f.scale.setScalar(s);
      }
      pianoRig.userData.tick?.(t);
      dj.tick(t);
      for (const d of dancers) d.tick(t);
    },
  };
}

/** Highest sphere joint below a limb root — the knee on a leg, the elbow on an arm. */
function jointY(limb, fallback) {
  let y = fallback;
  let best = -Infinity;
  for (const c of limb.children) {
    if (!c.isMesh || c.geometry?.type !== "SphereGeometry") continue;
    if (c.position.y >= -0.15 || c.position.y <= best) continue;
    best = c.position.y;
    y = c.position.y;
  }
  return y;
}

/** Reparent meshes below `cutY` onto a hinge so a bend can rotate them. */
function wrapBelow(parent, cutY) {
  const pivot = new THREE.Group();
  pivot.position.y = cutY;
  parent.add(pivot);
  for (const c of [...parent.children]) {
    if (c === pivot) continue;
    if (c.position.y < cutY - 1e-3) {
      c.position.y -= cutY;
      pivot.add(c);
    }
  }
  return pivot;
}

/* ── Piano man ──────────────────────────────────────────────────────────────
   A baby grand lashed to a pontoon, 30 m out in the swell. Every height hangs
   off two anchors: DECK (raft top, where the soles land) and the keybed, which
   is *derived* from where the seated arms actually put his fingertips — so the
   instrument follows the pose instead of the pose guessing at the instrument. */
const PIANO = {
  deck: 0.06, // raft top
  bench: 0.39, // bench top
  lift: 0.137, // hip joint sits this far above the seat (pelvis half-depth)
  manZ: -0.1,
  arm: [-0.33, -1.19, 0.37], // shoulder pitch, elbow bend, wrist lift
};

/**
 * Grand rim outline: straight spine on +x (bass), bent side on −x, front edge at
 * z=0. `k` shrinks it about the case centre — k<1 gives the inset plate.
 */
function grandRimGeo(depth, k = 1) {
  const cx = -0.02;
  const cz = 0.66;
  const p = (x, z) => [cx + (x - cx) * k, cz + (z - cz) * k];
  const s = new THREE.Shape();
  s.moveTo(...p(0.66, 0));
  s.lineTo(...p(0.66, 1.08));
  s.quadraticCurveTo(...p(0.64, 1.3), ...p(0.3, 1.33));
  s.lineTo(...p(0.06, 1.31));
  s.quadraticCurveTo(...p(-0.46, 1.18), ...p(-0.66, 0.56));
  s.quadraticCurveTo(...p(-0.78, 0.2), ...p(-0.7, 0));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: 6 });
  g.rotateX(Math.PI / 2); // shape +y → +z, extrusion → −y, so the top face lands on y=0
  return g;
}

/** Ivory with the 52 key splits painted in — cheaper than 52 meshes, reads the same. */
function keyTex() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 32;
  const x = c.getContext("2d");
  x.fillStyle = "#f8f4ea";
  x.fillRect(0, 0, 512, 32);
  x.fillStyle = "#b0a894";
  for (let i = 1; i < 52; i++) x.fillRect(Math.round((i * 512) / 52) - 1, 0, 2, 32);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** 52 whites as one textured slab; the 36 blacks as one instanced draw. */
function keyboard(w, topY, frontZ, whiteM, blackM) {
  const g = new THREE.Group();
  const n = 52;
  const kw = w / n;
  const white = box(w, 0.045, 0.17, whiteM);
  white.position.set(0, topY - 0.0225, frontZ + 0.085);
  g.add(white);
  const blacks = new THREE.InstancedMesh(new THREE.BoxGeometry(kw * 0.55, 0.022, 0.095), blackM, 36);
  blacks.castShadow = true;
  const m = new THREE.Matrix4();
  let k = 0;
  for (let i = 0; i < n - 1; i++) {
    if (![0, 2, 3, 5, 6].includes(i % 7)) continue; // gaps that carry a sharp, keyboard starting on A
    m.makeTranslation(-w / 2 + (i + 1) * kw, topY + 0.005, frontZ + 0.1225);
    blacks.setMatrixAt(k++, m);
  }
  blacks.count = k;
  blacks.instanceMatrix.needsUpdate = true;
  g.add(blacks);
  return g;
}

function buildPianoMan() {
  const g = new THREE.Group();
  const P = PIANO;
  const K = kit();
  const gloss = mat(0x0e0e12, { roughness: 0.32, metalness: 0.08 });
  const brass = mat(0x9a7a34, { roughness: 0.35, metalness: 0.55 });
  const ivory = mat(0xffffff, { roughness: 0.42, map: keyTex() });
  const ebony = mat(0x141418, { roughness: 0.3 });

  // ── the man ───────────────────────────────────────────────────────────────
  const man = ken({ hair: 0x1a1410, shorts: 0x141418, skin: 0xbb8f66 });
  man.name = "piano-ken";
  man.userData.kind = "ken";
  man.userData.ageBand = "adult";
  man.userData.paintTarget = true;
  man.position.set(0, 0, P.manZ);
  const b = man.userData.body;
  const tux = mat(0x16161c, { roughness: 0.62 });
  const vTop = b.shoulderY - 0.05 * b.scale;
  const vBot = b.hipY - 0.03 * b.scale;
  const vest = box(b.chestW * 1.26, vTop - vBot, b.chestD * 1.22, tux);
  vest.position.set(0, (vTop + vBot) * 0.5, 0);
  man.add(vest);
  const placket = box(0.1, (vTop - vBot) * 0.86, 0.03, mat(0xf2efe6, { roughness: 0.7 }));
  placket.position.set(0, (vTop + vBot) * 0.5 - 0.02, b.chestD * 0.62);
  man.add(placket);
  const bow = box(0.095, 0.04, 0.04, mat(0x8e1f2c, { roughness: 0.6 }));
  bow.position.set(0, vTop + 0.035, b.chestD * 0.58);
  man.add(bow);
  poseSit(man, P.bench, { lift: P.lift, floorY: P.deck, thigh: Math.PI / 2, spread: 0.12 });

  // Arms get a real elbow, so the forearms run level and the hands drop onto the
  // keys instead of spearing the case.
  const [A, B, H] = P.arm;
  const arms = [];
  for (const [arm, side] of [
    [b.armL, -1],
    [b.armR, 1],
  ]) {
    const hinge = wrapBelow(arm, jointY(arm, -0.29));
    const hand = hinge.children.find((c) => c.isGroup);
    arm.rotation.set(A, 0, side * 0.12);
    hinge.rotation.x = B;
    if (hand) hand.rotation.x = H;
    arms.push({ arm, hinge, hand });
  }
  g.add(man);

  // Keybed height/depth read straight off the posed hand: no floating fingers.
  man.updateMatrixWorld(true);
  const hb = new THREE.Box3().setFromObject(arms[1].hand);
  const KY = hb.min.y; // key tops
  const KZ = hb.max.z - 0.065; // key front edge — fingers land on the front third
  const RZ = KZ + 0.21; // rim front
  const rimTop = KY + 0.06;
  const rimBot = rimTop - 0.22;

  // ── raft ──────────────────────────────────────────────────────────────────
  const deck = box(1.86, 0.12, 2.42, new THREE.MeshStandardMaterial({ map: cloneMap(K.woodMap, 4, 5), roughness: 0.9 }));
  deck.position.set(-0.05, 0, 0.79);
  g.add(deck);
  for (const fz of [0.12, 1.5]) {
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.8, 10), mat(0x2c5c6e, { roughness: 0.6 }));
    drum.rotation.z = Math.PI / 2;
    drum.position.set(-0.05, -0.16, fz);
    g.add(drum);
  }

  // ── bench ─────────────────────────────────────────────────────────────────
  const seat = box(0.86, 0.07, 0.34, gloss);
  seat.position.set(0, P.bench - 0.07, P.manZ - 0.04);
  g.add(seat);
  const cushion = box(0.8, 0.035, 0.29, mat(0x7c2230, { roughness: 0.85 }));
  cushion.position.set(0, P.bench - 0.017, P.manZ - 0.04);
  g.add(cushion);
  for (const bx of [-0.36, 0.36]) {
    const legPanel = box(0.05, P.bench - 0.105 - P.deck, 0.26, gloss);
    legPanel.position.set(bx, (P.deck + P.bench - 0.105) / 2, P.manZ - 0.04);
    g.add(legPanel);
  }
  const stretcher = box(0.68, 0.04, 0.05, gloss);
  stretcher.position.set(0, P.deck + 0.09, P.manZ - 0.04);
  g.add(stretcher);

  // ── case ──────────────────────────────────────────────────────────────────
  const rimGeo = grandRimGeo(0.22);
  const rim = new THREE.Mesh(rimGeo, gloss);
  rim.castShadow = true;
  rim.receiveShadow = true;
  rim.position.set(0, rimTop, RZ);
  g.add(rim);

  for (const [lx, lz] of [
    [-0.56, 0.14],
    [0.56, 0.14],
    [0.34, 1.14],
  ]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.065, rimBot - P.deck, 8), gloss);
    leg.castShadow = true;
    leg.position.set(lx, (P.deck + rimBot) / 2, RZ + lz);
    g.add(leg);
  }

  // Keybed: shelf, key slip, cheeks, name board.
  const shelf = box(1.42, 0.04, 0.3, gloss);
  shelf.position.set(0, KY - 0.0625, KZ + 0.1);
  g.add(shelf);
  const slip = box(1.42, 0.075, 0.045, gloss);
  slip.position.set(0, KY - 0.0375, KZ - 0.03);
  g.add(slip);
  for (const cx of [-0.655, 0.655]) {
    const cheek = box(0.11, 0.175, RZ - KZ + 0.06, gloss);
    cheek.position.set(cx, KY - 0.0275, (KZ - 0.05 + RZ) / 2);
    g.add(cheek);
  }
  const nameBoard = box(1.42, 0.09, 0.09, gloss);
  nameBoard.position.set(0, KY + 0.02, KZ + 0.225);
  g.add(nameBoard);
  const badge = new THREE.Mesh(
    new THREE.PlaneGeometry(0.4, 0.05),
    new THREE.MeshBasicMaterial({ map: signTex("AUS101", "GOLD COAST"), transparent: true })
  );
  badge.position.set(0, KY + 0.03, KZ + 0.181);
  badge.rotation.y = Math.PI;
  g.add(badge);

  const keys = keyboard(1.24, KY, KZ, ivory, ebony);
  g.add(keys);

  // Plate + frame bars, so the open lid shows an instrument instead of a black hole.
  const plate = new THREE.Mesh(grandRimGeo(0.03, 0.9), mat(0x6b5426, { roughness: 0.4, metalness: 0.5 }));
  plate.position.set(0, rimTop + 0.004, RZ);
  g.add(plate);
  for (const px of [-0.36, -0.12, 0.12, 0.36]) {
    const bar = box(0.04, 0.012, 0.94, brass);
    bar.position.set(px, rimTop + 0.014, RZ + 0.62);
    g.add(bar);
  }

  // Lid: same outline, thinned, hinged on the spine and propped open.
  const lidPivot = new THREE.Group();
  lidPivot.position.set(0.66, rimTop + 0.012, RZ);
  lidPivot.rotation.z = -0.62;
  const lid = new THREE.Mesh(rimGeo, gloss);
  lid.castShadow = true;
  lid.scale.y = 0.16;
  lid.position.set(-0.66, 0, 0);
  lidPivot.add(lid);
  g.add(lidPivot);
  const prop = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.6, 6), gloss);
  prop.position.set(-0.42, rimTop + 0.3, RZ + 0.5);
  g.add(prop);

  // Music desk + a sheet of something he is plainly not reading.
  const desk = box(0.86, 0.28, 0.02, gloss);
  desk.position.set(0, KY + 0.19, RZ + 0.14);
  desk.rotation.x = 0.32;
  g.add(desk);
  const sheet = box(0.3, 0.22, 0.006, mat(0xf2efe4, { roughness: 0.9 }));
  sheet.position.set(0, KY + 0.2, RZ + 0.118);
  sheet.rotation.x = 0.32;
  g.add(sheet);

  // Pedal lyre, tucked in behind his toes.
  const lyre = box(0.16, rimBot - 0.2 - P.deck, 0.05, gloss);
  lyre.position.set(0, (P.deck + 0.2 + rimBot) / 2, RZ + 0.06);
  g.add(lyre);
  for (const px of [-0.055, 0, 0.055]) {
    const pedal = box(0.045, 0.016, 0.13, brass);
    pedal.position.set(px, P.deck + 0.1, RZ + 0.02);
    g.add(pedal);
  }

  let lastLocal = 0;
  g.userData.tick = (t) => {
    if (man.userData.combatDown || man.visible === false) return;
    const age = pianoPulse.at ? (performance.now() - pianoPulse.at) / 1000 : 99;
    const hit = age < 0.22 ? 1 - age / 0.22 : 0;
    const damp = pianoPulse.mix > 0.08 ? 0.35 : 1;
    const idle = Math.abs(Math.sin(t * 6));
    const pulse = Math.max(hit, idle * damp);
    const alt = Math.max(hit, Math.abs(Math.sin(t * 6 + 0.9)) * damp);
    arms[0].hinge.rotation.x = B + pulse * 0.05;
    arms[1].hinge.rotation.x = B + alt * 0.05;
    if (arms[0].hand) arms[0].hand.rotation.x = H + pulse * 0.14;
    if (arms[1].hand) arms[1].hand.rotation.x = H + alt * 0.14;
    keys.position.y = -pulse * 0.007;
    man.rotation.z = Math.sin(t * 1.6) * 0.02;
    g.position.y = 0.12 + Math.sin(t * 0.7) * 0.06;
    if (pianoPulse.mix > 0.08) return;
    if (idle < 0.92 || t - lastLocal < 0.8) return;
    const player = g.parent?.getObjectByName?.("AUS101");
    if (!player) return;
    const d = Math.hypot(player.position.x - g.position.x, player.position.z - g.position.z);
    if (d > 14) return;
    lastLocal = t;
    const ctx = acquireCtx();
    if (ctx) playPianoPluck(ctx, ctx.destination, ctx.currentTime + 0.02);
  };
  return g;
}

function slideCanvas() {
  const lines = [
    ["THE SUN", "IS A HOSTILE ACTOR"],
    ["COME WITH ME", "IF YOU WANT TO LIVE", "(YOUR MELANOCYTES)"],
    ["THIS UNIT", "HAS BEEN REASSIGNED", "TO PUBLIC HEALTH"],
    ["NOT A NIGHTCLUB", "A MELANOMA BRIEFING"],
    ["AUS101", "DOES NOT TAKE REQUESTS"],
    ["APPLY", "OR BE RECALLED"],
  ];
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 576;
  const x = c.getContext("2d");
  let i = 0;
  const paint = () => {
    const L = lines[i % lines.length];
    x.fillStyle = "#0b1210";
    x.fillRect(0, 0, 1024, 576);
    x.fillStyle = "#ffb040";
    x.fillRect(0, 0, 1024, 8);
    x.fillRect(0, 568, 1024, 8);
    x.fillStyle = "#f4f7fb";
    x.font = "bold 72px Impact, Arial Black, sans-serif";
    x.textAlign = "center";
    x.textBaseline = "middle";
    const y0 = 288 - (L.length - 1) * 44;
    L.forEach((row, n) => {
      x.font = n === 0 ? "bold 86px Impact, Arial Black, sans-serif" : "bold 48px Impact, Arial Black, sans-serif";
      x.fillStyle = n === 0 ? "#f4f7fb" : "#ffb040";
      x.fillText(row, 512, y0 + n * 88);
    });
    i += 1;
  };
  paint();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return { tex, paint, canvas: c };
}

/**
 * Sunset-session rig: riser, booth, PA stacks and a scaffold-hung screen. The
 * screen used to float unsupported and ate half the sky, so it is smaller now
 * and hangs off a truss that reaches the sand.
 */
function buildDjBooth(scene, add) {
  const g = new THREE.Group();
  const K = kit();
  const dark = mat(0x1a1a1e, { roughness: 0.6 });
  const steel = mat(0x8e949c, { roughness: 0.45, metalness: 0.55 });
  const grille = mat(0x101014, { roughness: 0.85 });

  const riser = box(4.6, 0.3, 2.6, new THREE.MeshStandardMaterial({ map: cloneMap(K.woodMap, 6, 3), roughness: 0.9 }));
  riser.position.set(0, 0.15, -0.3);
  g.add(riser);

  const desk = box(3.4, 1.0, 1.15, dark);
  desk.position.set(0, 0.8, 0.35);
  g.add(desk);
  const fascia = new THREE.Mesh(
    new THREE.PlaneGeometry(2.9, 0.62),
    new THREE.MeshBasicMaterial({ map: signTex("AUS101 FM", "SUNSET SESSIONS"), side: THREE.DoubleSide })
  );
  fascia.position.set(0, 0.86, 0.93);
  g.add(fascia);

  const decks = box(3.5, 0.09, 1.22, mat(0x2a2a30, { metalness: 0.4, roughness: 0.4 }));
  decks.position.set(0, 1.34, 0.35);
  g.add(decks);
  for (const sx of [-1.0, 1.0]) {
    const platter = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.05, 16), mat(0x111, { metalness: 0.6, roughness: 0.35 }));
    platter.position.set(sx, 1.41, 0.3);
    g.add(platter);
    const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.08, 6), steel);
    spindle.position.set(sx, 1.45, 0.3);
    g.add(spindle);
    const arm = box(0.05, 0.03, 0.38, steel);
    arm.position.set(sx + 0.3, 1.44, 0.12);
    arm.rotation.y = -0.5;
    g.add(arm);
  }
  const mixer = box(0.62, 0.11, 0.72, mat(0x24242a, { roughness: 0.5 }));
  mixer.position.set(0, 1.44, 0.3);
  g.add(mixer);
  for (let i = 0; i < 4; i++) {
    const fader = box(0.05, 0.03, 0.2, mat(0xd8d2c4));
    fader.position.set(-0.21 + i * 0.14, 1.51, 0.34);
    g.add(fader);
  }
  const lap = box(0.42, 0.025, 0.3, mat(0xb8bcc2, { metalness: 0.4, roughness: 0.4 }));
  lap.position.set(-1.15, 1.4, 0.72);
  g.add(lap);
  const lid = box(0.42, 0.28, 0.02, mat(0x1c1c22, { roughness: 0.4 }));
  lid.position.set(-1.15, 1.53, 0.59);
  lid.rotation.x = -0.35;
  g.add(lid);

  // PA stacks
  for (const sx of [-2.55, 2.55]) {
    const stack = new THREE.Group();
    const sub = box(0.82, 0.8, 0.7, dark);
    sub.position.y = 0.4;
    stack.add(sub);
    const top = box(0.7, 0.9, 0.6, dark);
    top.position.y = 1.28;
    stack.add(top);
    for (const [cy, cr] of [
      [0.4, 0.28],
      [1.12, 0.17],
    ]) {
      const cone = new THREE.Mesh(new THREE.CylinderGeometry(cr, cr, 0.05, 12), grille);
      cone.rotation.x = Math.PI / 2;
      cone.position.set(0, cy, 0.34);
      stack.add(cone);
    }
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.22, 4), grille);
    horn.rotation.x = -Math.PI / 2;
    horn.position.set(0, 1.55, 0.3);
    stack.add(horn);
    stack.position.set(sx, 0, 0.1);
    stack.rotation.y = sx < 0 ? 0.25 : -0.25;
    g.add(stack);
  }

  // Scaffold + screen
  const slides = slideCanvas();
  const screenY = 3.15;
  for (const sx of [-2.7, 2.7]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, screenY + 1.6, 8), steel);
    post.castShadow = true;
    post.position.set(sx, (screenY + 1.6) / 2, -1.5);
    g.add(post);
    const foot = box(0.5, 0.12, 0.5, steel);
    foot.position.set(sx, 0.06, -1.5);
    g.add(foot);
    for (const by of [1.3, 2.9]) {
      const brace = box(0.05, 0.05, 1.5, steel);
      brace.position.set(sx * 0.72, by, -0.9);
      brace.rotation.y = sx < 0 ? -0.55 : 0.55;
      g.add(brace);
    }
  }
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 5.4, 8), steel);
  beam.rotation.z = Math.PI / 2;
  beam.position.set(0, screenY + 1.55, -1.5);
  g.add(beam);
  const frame = box(5.1, 2.94, 0.1, dark);
  frame.position.set(0, screenY, -1.48);
  g.add(frame);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(4.9, 2.76), new THREE.MeshBasicMaterial({ map: slides.tex }));
  screen.position.set(0, screenY, -1.42);
  g.add(screen);

  const djKen = ken({ hair: 0x1a1a12, shorts: 0x1a1a22, skin: 0xc68642 });
  djKen.name = "dj-ken";
  djKen.position.set(0, 0.3, -0.38);
  djKen.userData.kind = "ken";
  djKen.userData.ageBand = "adult";
  djKen.userData.paintTarget = true;
  const db = djKen.userData.body;
  // Elbows, so his hands land on the platters instead of hovering over them.
  const djArms = [];
  for (const [arm, side] of [
    [db.armL, -1],
    [db.armR, 1],
  ]) {
    const hinge = wrapBelow(arm, jointY(arm, -0.29));
    const hand = hinge.children.find((c) => c.isGroup);
    arm.rotation.set(-0.3, side * -0.22, side * 0.24);
    hinge.rotation.x = -1.0;
    if (hand) hand.rotation.x = 0.49;
    djArms.push({ arm, hinge });
  }
  const phones = box(0.32, 0.06, 0.1, mat(0x111));
  phones.position.set(0, db.headY + 0.06, 0);
  djKen.add(phones);
  for (const s of [-1, 1]) {
    const cup = box(0.05, 0.1, 0.1, mat(0x111));
    cup.position.set(s * 0.135, db.headY - 0.005, 0);
    djKen.add(cup);
  }
  g.add(djKen);

  g.position.set(-24, 0, 7);
  g.rotation.y = Math.PI - 0.45; // faces the open sand, screen backing onto the esplanade
  scene.add(g);
  add(-26.9, -21.4, 5.1, 9.4);

  let last = 0;
  return {
    tick(t) {
      if (!djKen.userData.combatDown && djKen.visible !== false && !djKen.userData.flee) {
        djKen.position.y = 0.3 + Math.abs(Math.sin(t * 4)) * 0.035;
        djArms[0].arm.rotation.x = -0.3 + Math.sin(t * 4) * 0.08;
        djArms[1].arm.rotation.x = -0.3 + Math.sin(t * 4 + 1.2) * 0.08;
      }
      if (t - last > 4.2) {
        last = t;
        slides.paint();
        slides.tex.needsUpdate = true;
      }
    },
  };
}

function spawnDancers(scene) {
  const out = [];
  // Fanned out in front of the rig, clear of the booth collider, the goth at
  // (−22, 9.5) and the palm at (−26, 8).
  const spots = [
    [-24.5, 3.9],
    [-22.3, 4.5],
    [-21.0, 5.8],
    [-22.8, 2.7],
    [-20.6, 3.6],
  ];
  const looks = [
    { fn: babe, hair: 0xc9a227, bikini: 0xe23d7a, skin: 0xe0b08a },
    { fn: ken, hair: 0x3a2218, shorts: 0x1f6f78, skin: 0xd4a06a },
    { fn: babe, hair: 0xf2c12e, bikini: 0xf2c12e, skin: 0xe8b898 },
    { fn: ken, hair: 0x5ec8ff, shorts: 0x2f7fd0, skin: 0xd4924a },
    { fn: babe, hair: 0x1a1210, bikini: 0x141414, skin: 0xc98a62 },
  ];
  spots.forEach(([x, z], i) => {
    const look = looks[i % looks.length];
    const d = look.fn(look);
    d.name = look.fn === babe ? `dj-babe-${i}` : `dj-ken-${i}`;
    d.userData.kind = look.fn === babe ? "babe" : "ken";
    d.userData.ageBand = "adult";
    d.userData.paintTarget = true;
    d.position.set(x, 0, z);
    d.rotation.y = Math.atan2(-24 - x, 7 - z);
    scene.add(d);
    const b = d.userData.body;
    const ph = i * 0.9;
    const yaw0 = d.rotation.y;
    out.push({
      tick(t) {
        if (d.userData.combatDown || d.visible === false || d.userData.flee) return;
        const hop = Math.abs(Math.sin(t * 5 + ph));
        d.position.y = hop * 0.16;
        d.rotation.y = yaw0 + Math.sin(t * 2 + ph) * 0.35;
        d.rotation.z = Math.sin(t * 5 + ph) * 0.1;
        if (!b) return;
        b.armL.rotation.set(-0.35 + hop * 0.55, -0.08, -0.35 - hop * 0.85);
        b.armR.rotation.set(-0.35 + (1 - hop) * 0.55, 0.08, 0.35 + hop * 0.85);
        b.legL.rotation.x = hop * 0.34;
        b.legR.rotation.x = (1 - hop) * 0.26;
      },
    });
  });
  return out;
}
