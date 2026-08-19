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
import { ken, babe } from "../chars/npcs.js";

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
  sandMap.repeat.set(48, 36);
  const sand = new THREE.Mesh(
    new THREE.PlaneGeometry(GC.width + 30, GC.depth + 24),
    new THREE.MeshStandardMaterial({ map: sandMap, roughness: 1, color: 0xf0d9a0 })
  );
  sand.rotation.x = -Math.PI / 2;
  sand.receiveShadow = true;
  scene.add(sand);

  const wet = new THREE.Mesh(
    new THREE.PlaneGeometry(GC.width + 20, 14),
    new THREE.MeshStandardMaterial({ color: 0xc4a070, roughness: 0.42, metalness: 0.08 })
  );
  wet.rotation.x = -Math.PI / 2;
  wet.position.set(0, 0.03, GC.wetZ);
  wet.receiveShadow = true;
  scene.add(wet);

  // Turquoise ocean + swell
  const oceanGeo = new THREE.PlaneGeometry(GC.width + 50, 36, 40, 10);
  const ocean = new THREE.Mesh(
    oceanGeo,
    new THREE.MeshStandardMaterial({ color: 0x2ec4d4, roughness: 0.28, metalness: 0.12 })
  );
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.set(0, 0.02, GC.oceanZ - 10);
  scene.add(ocean);
  const oceanBase = Float32Array.from(oceanGeo.attributes.position.array);

  for (let i = 0; i < 7; i++) {
    const w = new THREE.Mesh(
      new THREE.PlaneGeometry(GC.width + 24, 2.4),
      new THREE.MeshBasicMaterial({ color: 0xe8f6f4, transparent: true, opacity: 0, depthWrite: false })
    );
    w.rotation.x = -Math.PI / 2;
    w.userData.spd = 1.8 + i * 0.28;
    w.userData.z0 = GC.oceanZ - 6 - i * 2.6;
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

  // Surf club (was Coconuts bar) — cream walls, red corrugated roof, "SPF CLUB" / "SURFERS"
  const club = new THREE.Group();
  const walls = box(8.4, 3.2, 5.2, K.wall);
  walls.position.y = 1.7;
  club.add(walls);
  const roofMap = metalRoofTex();
  roofMap.repeat.set(6, 4);
  const roof = box(9.2, 0.22, 6.0, new THREE.MeshStandardMaterial({ map: roofMap, roughness: 0.55, metalness: 0.15 }));
  roof.position.y = 3.45;
  club.add(roof);
  const awning = box(8.6, 0.12, 2.2, mat(0xc8402e, { roughness: 0.7 }));
  awning.position.set(0, 2.55, 3.2);
  club.add(awning);
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(4.6, 1.1),
    new THREE.MeshBasicMaterial({ map: signTex("SURF CLUB", "SPF 50 · GOLD COAST"), side: THREE.DoubleSide })
  );
  sign.position.set(0, 2.85, 2.72);
  club.add(sign);
  club.position.set(-18, 0, GC.boardwalkZ - 1.2);
  scene.add(club);
  add(-22.4, -13.6, GC.boardwalkZ - 3.8, GC.boardwalkZ + 1.4);

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
  const kroof = box(3.8, 0.16, 3.0, mat(0xc8402e));
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
  van.position.set(-6, 0, GC.boardwalkZ + 6.6);
  van.rotation.y = -0.15;
  scene.add(van);
  add(-9.2, -2.2, GC.boardwalkZ + 4.8, GC.boardwalkZ + 8.4);

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
  tent.position.set(26, 0, 8);
  tent.rotation.y = -0.6;
  scene.add(tent);
  add(24.6, 27.4, 6.6, 9.4);

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
    bin.position.set(bx, 0.42, bz);
    scene.add(bin);
    add(bx - 0.32, bx + 0.32, bz - 0.32, bz + 0.32);
  }

  stringLights(scene, -22, GC.boardwalkZ + 3.8, 22, GC.boardwalkZ + 3.8, 3.1, 18);

  // Palms along esplanade + sand
  const palmSpots = [
    [-30, 14, 1.1],
    [-26, 8, 0.95],
    [-22, 18, 1.2],
    [-12, 12, 1.0],
    [12, 13, 1.05],
    [24, 10, 1.15],
    [28, 17, 0.9],
    [-8, -4, 0.85],
    [16, -2, 0.9],
    [-28, 0, 1.0],
    [30, 2, 0.95],
    [-18, 6, 0.8],
  ];
  for (const [x, z, s] of palmSpots) placePalm(scene, add, palms, x, z, s);

  // Patio umbrellas + chairs (Coconuts factory, denser)
  const umb = [
    [-10, 6, true],
    [-6, 3, true],
    [-2, 5, true],
    [2, 2, true],
    [6, 5, true],
    [10, 3, true],
    [-14, 1, true],
    [14, 1, true],
    [-8, -1, false],
    [4, -3, false],
    [12, -5, false],
    [-16, -3, false],
    [0, 8, true],
    [-20, 4, true],
    [18, 4, true],
  ];
  for (const [x, z, chairs] of umb) placeUmbrella(scene, add, x, z, chairs, Math.random() * 0.4);

  // Loungers toward the water
  const loungeCols = [0xf2c12e, 0xf2654e, 0x2f7fd0, 0x1fb6a6, 0xe23b6e];
  for (let i = 0; i < 10; i++) {
    const x = -18 + i * 4.1;
    makeLounger(scene, x, -2.5, 0.05, loungeCols[i % loungeCols.length]);
    makeLounger(scene, x + 0.9, 0.4, -0.08, loungeCols[(i + 2) % loungeCols.length]);
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
    [-5, 1],
    [7, -1],
    [3, 7],
    [-11, -4],
  ]) {
    const ball = makeBeachBall(1);
    ball.position.set(x, 0.35, z);
    scene.add(ball);
    balls.push(ball);
  }

  // Lamps / torches along the deck
  for (const x of [-28, -16, -4, 8, 20, 30]) {
    makeLamppost(scene, add, x, GC.boardwalkZ + 3.2);
  }
  for (const x of [-24, -8, 4, 16]) makeTorch(scene, add, flames, x, GC.boardwalkZ - 4.2);

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
        const z = oceanBase[ix + 2];
        pos.array[ix + 1] = Math.sin(x * 0.12 + t * 1.35) * 0.16 + Math.sin(z * 0.2 + t * 0.95) * 0.1;
      }
      pos.needsUpdate = true;

      for (const w of waves) {
        w.position.z += w.userData.spd * 0.016;
        const span = w.userData.dieZ - w.userData.z0;
        const u = (w.position.z - w.userData.z0) / Math.max(0.001, span);
        if (u < 0.12) w.material.opacity = u / 0.12;
        else if (u > 0.72) w.material.opacity = Math.max(0, 1 - (u - 0.72) / 0.28);
        else w.material.opacity = 0.6;
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

/** Knee sphere sits between hip and ankle; shin/foot live below it. */
function kneeY(leg) {
  let y = -0.46;
  let best = -Infinity;
  for (const c of leg.children) {
    if (!c.isMesh || c.geometry?.type !== "SphereGeometry") continue;
    if (c.position.y >= -0.15) continue;
    if (c.position.y > best) {
      best = c.position.y;
      y = c.position.y;
    }
  }
  return y;
}

/** Reparent meshes below `cutY` onto a hinge so a sit/bend can rotate them. */
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

/** Fold a planted biped onto a bench. Origin stays at the soles. */
function sitBiped(npc, seatY, { thigh = 1.18, shin = -1.32 } = {}) {
  const b = npc.userData.body;
  if (!b) return;
  for (const [leg, side] of [
    [b.legL, -1],
    [b.legR, 1],
  ]) {
    if (!leg) continue;
    const hinge = wrapBelow(leg, kneeY(leg));
    hinge.rotation.x = shin;
    for (const c of hinge.children) {
      if (c.isGroup) c.rotation.x = -(thigh + shin);
    }
    leg.rotation.x = thigh;
    leg.rotation.z = side * 0.05;
  }
  npc.position.y = seatY - b.hipY;
}

function buildPianoMan() {
  const g = new THREE.Group();
  const black = mat(0x141414);
  const benchY = 0.66;
  const man = ken({ hair: 0x1a1410, shorts: 0x141418, skin: 0xc9b09a });
  man.name = "piano-ken";
  man.userData.paintTarget = false;
  sitBiped(man, benchY);
  man.position.x = 0;
  man.position.z = -0.02;
  const { armL, armR } = man.userData.body;
  armL.rotation.set(-1.12, 0.08, 0.38);
  armR.rotation.set(-1.16, -0.06, -0.34);
  g.add(man);

  const piano = box(1.35, 0.18, 0.55, black);
  piano.position.set(0.15, 0.78, 0.42);
  g.add(piano);
  const keys = box(1.2, 0.04, 0.22, mat(0xf4f0e6));
  keys.position.set(0.15, 0.89, 0.52);
  g.add(keys);
  const lid = box(1.3, 0.04, 0.5, black);
  lid.position.set(0.15, 1.05, 0.28);
  lid.rotation.x = -0.7;
  g.add(lid);
  const bench = box(0.5, 0.08, 0.22, black);
  bench.position.set(0, 0.62, 0);
  g.add(bench);
  let lastLocal = 0;
  g.userData.tick = (t) => {
    const age = pianoPulse.at ? (performance.now() - pianoPulse.at) / 1000 : 99;
    const hit = age < 0.22 ? 1 - age / 0.22 : 0;
    const idle = Math.abs(Math.sin(t * 6));
    const pulse = Math.max(hit, idle * (pianoPulse.mix > 0.08 ? 0.35 : 1));
    armL.rotation.x = -1.12 + pulse * 0.05;
    armR.rotation.x = -1.16 + Math.max(hit, Math.abs(Math.sin(t * 6 + 0.8)) * 0.45) * 0.05;
    keys.position.y = 0.89 + pulse * 0.012;
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

function buildDjBooth(scene, add) {
  const g = new THREE.Group();
  const desk = box(3.4, 1.1, 1.4, mat(0x1a1a1e));
  desk.position.y = 0.55;
  g.add(desk);
  const decks = box(2.6, 0.08, 0.9, mat(0x2a2a30, { metalness: 0.4, roughness: 0.4 }));
  decks.position.y = 1.14;
  g.add(decks);
  for (const sx of [-0.7, 0.7]) {
    const platter = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.04, 16), mat(0x111, { metalness: 0.6 }));
    platter.position.set(sx, 1.2, 0.05);
    g.add(platter);
  }
  const djKen = ken({ hair: 0x1a1a12, shorts: 0x1a1a22, skin: 0xc68642 });
  djKen.name = "dj-ken";
  djKen.position.set(0, 0, -0.32);
  djKen.userData.paintTarget = false;
  const db = djKen.userData.body;
  db.armL.rotation.set(-1.18, 0.06, 0.42);
  db.armR.rotation.set(-1.14, -0.06, -0.4);
  const phones = box(0.32, 0.06, 0.1, mat(0x111));
  phones.position.set(0, db.headY + 0.02, 0);
  djKen.add(phones);
  for (const s of [-1, 1]) {
    const cup = box(0.04, 0.08, 0.08, mat(0x111));
    cup.position.set(s * 0.13, db.headY - 0.01, 0);
    djKen.add(cup);
  }
  g.add(djKen);

  const slides = slideCanvas();
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(8.4, 4.7),
    new THREE.MeshBasicMaterial({ map: slides.tex })
  );
  screen.position.set(0, 4.4, -1.35);
  g.add(screen);
  const frame = box(8.7, 5.0, 0.12, mat(0x111));
  frame.position.set(0, 4.4, -1.42);
  g.add(frame);

  g.position.set(-24, 0, 7);
  g.rotation.y = 0.55;
  scene.add(g);
  add(-26.5, -21.5, 5.2, 8.8);

  let last = 0;
  return {
    tick(t) {
      djKen.position.y = Math.abs(Math.sin(t * 4)) * 0.03;
      db.armL.rotation.x = -1.18 + Math.sin(t * 4) * 0.06;
      db.armR.rotation.x = -1.14 + Math.sin(t * 4 + 1.2) * 0.06;
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
  const spots = [
    [-22.2, 5.4],
    [-21.0, 8.6],
    [-25.5, 6.8],
    [-23.6, 9.2],
    [-20.4, 6.2],
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
    d.userData.paintTarget = false;
    d.position.set(x, 0, z);
    scene.add(d);
    const b = d.userData.body;
    const ph = i * 0.9;
    out.push({
      tick(t) {
        const hop = Math.abs(Math.sin(t * 5 + ph));
        d.position.y = hop * 0.18;
        d.rotation.y = Math.sin(t * 2 + ph) * 0.4;
        d.rotation.z = Math.sin(t * 5 + ph) * 0.12;
        if (!b) return;
        b.armL.rotation.set(-0.35 + hop * 0.55, 0.08, 0.35 + hop * 0.85);
        b.armR.rotation.set(-0.35 + (1 - hop) * 0.55, -0.08, -0.35 - hop * 0.85);
        b.legL.rotation.x = hop * 0.38;
        b.legR.rotation.x = (1 - hop) * 0.28;
      },
    });
  });
  return out;
}
