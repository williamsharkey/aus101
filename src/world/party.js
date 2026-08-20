/**
 * Gold Coast extras — two guitar Kens, a sand boombox + dancers, music-spot radii.
 * Boardwalk is Z=16; all party props stay on sand well seaward of the deck.
 *
 * Hands are placed with the shared two-bone solver in gadgets.js against the
 * real `userData.body.{armL,armR,legL,legR}` joints, so a strumming hand stays
 * on the soundhole and a dancer's feet stay in the sand.
 */
import * as THREE from "three";
import { ken, babe } from "../chars/npcs.js";
import { armIK, limbHinge } from "./gadgets.js";

const WOOD_TOP = 0xd8a860;
const WOOD_SIDE = 0x7a4420;
const WOOD_NECK = 0xc4a06a;
const WOOD_DARK = 0x2c1810;

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/* Shared across both guitars (iPhone: one geometry, two meshes). */
const GTR = {
  lower: new THREE.CylinderGeometry(0.165, 0.165, 0.1, 16, 1),
  upper: new THREE.CylinderGeometry(0.126, 0.126, 0.1, 14, 1),
  waist: new THREE.CylinderGeometry(0.104, 0.104, 0.099, 12, 1),
  hole: new THREE.CylinderGeometry(0.043, 0.043, 0.012, 14),
  rosette: new THREE.TorusGeometry(0.05, 0.005, 4, 16),
  neck: new THREE.BoxGeometry(0.05, 0.46, 0.036),
  board: new THREE.BoxGeometry(0.052, 0.44, 0.01),
  fret: new THREE.BoxGeometry(0.052, 0.0035, 0.003),
  head: new THREE.BoxGeometry(0.066, 0.115, 0.024),
  peg: new THREE.CylinderGeometry(0.006, 0.006, 0.026, 6),
  bridge: new THREE.BoxGeometry(0.096, 0.026, 0.014),
  saddle: new THREE.BoxGeometry(0.086, 0.006, 0.005),
  string: new THREE.BoxGeometry(0.0022, 0.79, 0.0022),
  strap: new THREE.BoxGeometry(0.038, 0.008, 1),
};

const GTR_MAT = {
  top: std(WOOD_TOP, { roughness: 0.44, metalness: 0.06 }),
  side: std(WOOD_SIDE, { roughness: 0.5, metalness: 0.06 }),
  neck: std(WOOD_NECK, { roughness: 0.52 }),
  dark: std(WOOD_DARK, { roughness: 0.45 }),
  wire: std(0xd8d8d0, { roughness: 0.3, metalness: 0.8 }),
  chrome: std(0xb0b6bc, { roughness: 0.3, metalness: 0.7 }),
  strap: std(0x2a4a6a, { roughness: 0.9 }),
};

/**
 * Dreadnought in a local frame a hand can be aimed at: origin at the soundhole,
 * +Y up the neck, +Z out of the soundboard. Body = three stacked cylinders, so
 * the front reads as a flat spruce top with dark sides instead of a squashed ball.
 */
function makeGuitar() {
  const g = new THREE.Group();
  const skin = [GTR_MAT.side, GTR_MAT.top, GTR_MAT.side];

  for (const [geo, y] of [
    [GTR.lower, -0.1],
    [GTR.waist, 0.02],
    [GTR.upper, 0.13],
  ]) {
    const part = shadow(new THREE.Mesh(geo, skin));
    part.rotation.x = Math.PI / 2;
    part.position.y = y;
    g.add(part);
  }

  const hole = new THREE.Mesh(GTR.hole, GTR_MAT.dark);
  hole.rotation.x = Math.PI / 2;
  hole.position.set(0, 0.045, 0.046);
  g.add(hole);
  const rosette = new THREE.Mesh(GTR.rosette, GTR_MAT.dark);
  rosette.position.set(0, 0.045, 0.05);
  g.add(rosette);

  const bridge = shadow(new THREE.Mesh(GTR.bridge, GTR_MAT.dark));
  bridge.position.set(0, -0.13, 0.052);
  g.add(bridge);
  const saddle = new THREE.Mesh(GTR.saddle, GTR_MAT.wire);
  saddle.position.set(0, -0.118, 0.058);
  g.add(saddle);

  // Neck sits proud of the soundboard so the strings clear both.
  const neck = shadow(new THREE.Mesh(GTR.neck, GTR_MAT.neck));
  neck.position.set(0, 0.44, 0.03);
  g.add(neck);
  const board = new THREE.Mesh(GTR.board, GTR_MAT.dark);
  board.position.set(0, 0.45, 0.052);
  g.add(board);
  for (let i = 0; i < 7; i++) {
    const fret = new THREE.Mesh(GTR.fret, GTR_MAT.chrome);
    fret.position.set(0, 0.27 + i * 0.062, 0.0575);
    g.add(fret);
  }

  const head = shadow(new THREE.Mesh(GTR.head, GTR_MAT.dark));
  head.position.set(0, 0.72, 0.028);
  head.rotation.x = -0.12;
  g.add(head);
  for (let i = 0; i < 6; i++) {
    const peg = new THREE.Mesh(GTR.peg, GTR_MAT.chrome);
    peg.rotation.z = Math.PI / 2;
    peg.position.set((i < 3 ? -1 : 1) * 0.04, 0.75 - (i % 3) * 0.032, 0.03);
    g.add(peg);
  }

  for (let i = 0; i < 6; i++) {
    const str = new THREE.Mesh(GTR.string, GTR_MAT.wire);
    str.position.set((i - 2.5) * 0.0085, 0.27, 0.061);
    g.add(str);
  }

  return g;
}

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();

/** Unit-Z bar stretched between two points — straps, patch leads, guy wires. */
function strut(from, to, geo, mat) {
  const m = shadow(new THREE.Mesh(geo, mat));
  m.position.copy(from).lerp(to, 0.5);
  m.lookAt(to);
  m.scale.z = from.distanceTo(to);
  return m;
}

/* ------------------------------------------------------------------ boombox */

const BOOM = {
  shell: std(0x24242a, { roughness: 0.4, metalness: 0.42 }),
  trim: std(0xb8bec6, { roughness: 0.26, metalness: 0.72 }),
  cone: std(0x14141a, { roughness: 0.6, metalness: 0.3 }),
  dust: std(0x50565e, { roughness: 0.45, metalness: 0.4 }),
  deck: std(0x0e0e12, { roughness: 0.32, metalness: 0.25 }),
  btn: std(0xcfd4da, { roughness: 0.45, metalness: 0.3 }),
  vu: new THREE.MeshStandardMaterial({ color: 0x1a2a10, emissive: 0x6cff4a, emissiveIntensity: 0.4, roughness: 0.4 }),
};

/**
 * Ghetto blaster facing the dancers: two ported drivers, a cassette door, a row
 * of piano keys and a live VU strip, so it is not a black brick from any angle.
 */
function makeBoombox() {
  const g = new THREE.Group();

  const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.94, 0.44, 0.3), BOOM.shell));
  body.position.y = 0.24;
  g.add(body);
  const faceGeo = new THREE.BoxGeometry(0.9, 0.4, 0.02);
  const face = shadow(new THREE.Mesh(faceGeo, BOOM.deck));
  face.position.set(0, 0.24, 0.152);
  g.add(face);

  const rimGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.035, 16);
  const dustGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.03, 10);
  const coneGeo = new THREE.CylinderGeometry(0.075, 0.135, 0.032, 16);
  for (const sx of [-0.29, 0.29]) {
    const rim = shadow(new THREE.Mesh(rimGeo, BOOM.trim));
    rim.rotation.x = Math.PI / 2;
    rim.position.set(sx, 0.24, 0.158);
    const cone = new THREE.Mesh(coneGeo, BOOM.cone);
    cone.rotation.x = -Math.PI / 2;
    cone.position.set(sx, 0.24, 0.168);
    const dust = new THREE.Mesh(dustGeo, BOOM.dust);
    dust.rotation.x = Math.PI / 2;
    dust.position.set(sx, 0.24, 0.182);
    g.add(rim, cone, dust);
  }

  const deck = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.15, 0.03), BOOM.trim));
  deck.position.set(0, 0.3, 0.162);
  const window = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.1, 0.012), BOOM.cone);
  window.position.set(0, 0.31, 0.178);
  g.add(deck, window);

  const keyGeo = new THREE.BoxGeometry(0.032, 0.03, 0.026);
  for (let i = 0; i < 5; i++) {
    const key = new THREE.Mesh(keyGeo, BOOM.btn);
    key.position.set(-0.09 + i * 0.045, 0.15, 0.166);
    g.add(key);
  }
  const vu = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.022, 0.012), BOOM.vu);
  vu.position.set(0, 0.2, 0.172);
  g.add(vu);

  const knobGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.02, 8);
  for (const sx of [-0.44, 0.44]) {
    const knob = new THREE.Mesh(knobGeo, BOOM.trim);
    knob.rotation.x = Math.PI / 2;
    knob.position.set(sx, 0.36, 0.152);
    g.add(knob);
  }

  const handle = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.017, 6, 14, Math.PI), BOOM.trim));
  handle.position.set(0, 0.46, 0);
  g.add(handle);

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.004, 0.5, 6), BOOM.trim);
  antenna.position.set(0.4, 0.68, -0.06);
  antenna.rotation.z = -0.34;
  g.add(antenna);

  const footGeo = new THREE.BoxGeometry(0.1, 0.045, 0.22);
  for (const sx of [-0.32, 0.32]) {
    const foot = shadow(new THREE.Mesh(footGeo, BOOM.deck));
    foot.position.set(sx, 0.022, 0);
    g.add(foot);
  }

  g.userData.vu = vu.material;
  return g;
}

/* ------------------------------------------------------------- guitar Kens */

const _hand = new THREE.Vector3();

function tagAdult(mesh, kind) {
  mesh.userData.kind = kind;
  mesh.userData.ageBand = "adult";
  mesh.userData.paintTarget = true;
  return mesh;
}

function placeGuitarKen(opts, x, y, z, yaw) {
  const mesh = tagAdult(ken(opts), "ken");
  mesh.position.set(x, y, z);
  mesh.rotation.y = yaw;

  const guitar = makeGuitar();
  // Held against the ribs, neck up across the body, back of the guitar on the chest.
  const b = mesh.userData.body;
  guitar.position.set(0.05, b.hipY + 0.2, b.chestD * 0.5 + 0.08);
  guitar.rotation.set(0.16, -0.3, 1.0);
  guitar.updateMatrix();
  mesh.add(guitar);

  // Strap from the upper horn across the chest to the far shoulder.
  _a.set(0.13, 0.17, -0.045).applyMatrix4(guitar.matrix);
  _b.set(-b.chestW * 0.42, b.shoulderY + 0.02, -0.02);
  mesh.add(strut(_a, _b, GTR.strap, GTR_MAT.strap));

  return { mesh, guitar, yaw, body: b };
}

/** Wrist targets, in guitar space, converted to character space for the solver. */
function poseGuitarist(k, t, i) {
  if (k.mesh.userData.combatDown || k.mesh.visible === false || k.mesh.userData.flee) return;
  const swing = Math.sin(t * 8.2 + i * 1.7);
  k.guitar.rotation.z = 1.0 + swing * 0.02;
  k.guitar.updateMatrix();

  // Wrists sit back along the forearm by a hand's length, so the hand itself
  // lands on the strings / wraps the neck instead of the wrist doing it.
  _hand.set(0.03, 0.06 + swing * 0.07, 0.15).applyMatrix4(k.guitar.matrix);
  armIK(k.mesh, 1, _hand, 1.25);
  _hand.set(-0.03, 0.25 + Math.sin(t * 1.7 + i) * 0.05, -0.03).applyMatrix4(k.guitar.matrix);
  armIK(k.mesh, -1, _hand, -0.55);

  if (k.body.head) {
    k.body.head.rotation.x = 0.16;
    k.body.head.rotation.z = Math.sin(t * 2.1 + i) * 0.07;
  }
  k.mesh.rotation.y = k.yaw + Math.sin(t * 1.1 + i) * 0.04;
}

/* ----------------------------------------------------------------- dancers */

const _reach = new THREE.Vector3();

function placeDancer(opts, x, z, yaw) {
  const mesh = tagAdult(babe(opts), "babe");
  mesh.position.set(x, 0, z);
  mesh.rotation.y = yaw;
  const b = mesh.userData.body;
  const legs = [
    { leg: b.legL, hinge: limbHinge(b.legL, -b.thighH, "kneeHinge", "knee"), foot: b.footL, side: -1 },
    { leg: b.legR, hinge: limbHinge(b.legR, -b.thighH, "kneeHinge", "knee"), foot: b.footR, side: 1 },
  ];
  return { mesh, yaw, body: b, legs, phase: x * 0.7 + z * 0.4 };
}

/**
 * Drive the joints, not the whole group: knees dip on the beat, the pelvis drops
 * by exactly what the bend takes out of the leg so the soles stay in the sand,
 * arms swing overhead and the head nods.
 */
function poseDancer(d, t) {
  if (d.mesh.userData.combatDown || d.mesh.visible === false || d.mesh.userData.flee) return;
  const b = d.body;
  const beat = t * 4.6 + d.phase;
  const s = Math.sin(beat);
  const sway = Math.sin(beat * 0.5);

  // Symmetric knee bounce with a small differential, so the pelvis can drop by
  // exactly what the bend takes out of the standing leg and no sole leaves the sand.
  let stand = 0;
  const dipBase = 0.12 + 0.34 * (0.5 + 0.5 * s);
  for (const L of d.legs) {
    const dip = dipBase + L.side * sway * 0.06;
    L.leg.rotation.set(-dip, L.side * sway * 0.1, L.side * (0.06 + sway * 0.05));
    L.hinge.rotation.x = dip;
    if (L.foot) L.foot.rotation.x = 0;
    stand = Math.max(stand, Math.cos(dip));
  }
  d.mesh.position.y = -b.thighH * (1 - stand);

  // Hands pump in opposition, elbows out.
  const reach = 0.25;
  for (const side of [-1, 1]) {
    const ph = beat + (side > 0 ? Math.PI : 0);
    _reach.set(
      side * (reach + Math.cos(ph) * 0.05),
      b.shoulderY + 0.16 + Math.sin(ph) * 0.2,
      0.13 + Math.cos(ph) * 0.07
    );
    armIK(d.mesh, side, _reach, -side * 0.5);
  }

  if (b.head) {
    b.head.rotation.x = 0.06 + s * 0.07;
    b.head.rotation.z = sway * 0.14;
  }
  d.mesh.rotation.y = d.yaw + sway * 0.22;
  d.mesh.rotation.z = 0;
}

/**
 * @param {THREE.Scene} scene
 * @returns {{ tick: (tSeconds: number) => void, musicSpots: { id: string, position: THREE.Vector3, radius: number }[] }}
 */
export function spawnParty(scene) {
  const guitarAPos = new THREE.Vector3(-6, 0, 5);
  const guitarBPos = new THREE.Vector3(5, 0, 3);
  const boomPos = new THREE.Vector3(12, 0, 8);

  const kenA = placeGuitarKen({ hair: 0xffe08a, shorts: 0x0e4a52, skin: 0xd8a56e }, guitarAPos.x, 0, guitarAPos.z, 0.35);
  const kenB = placeGuitarKen({ hair: 0xf0d48a, shorts: 0xc8402e, skin: 0xce8f58 }, guitarBPos.x, 0, guitarBPos.z, -0.4);
  kenA.mesh.name = "ken-guitar-a";
  kenB.mesh.name = "ken-guitar-b";
  scene.add(kenA.mesh, kenB.mesh);

  const boombox = makeBoombox();
  boombox.position.copy(boomPos);
  // Speakers point back down the sand at the dancers, not out to sea.
  boombox.rotation.y = Math.PI - 0.35;
  boombox.name = "boombox";
  scene.add(boombox);

  const dancerA = placeDancer({ hair: 0x1a1210, bikini: 0xff6b9a, skin: 0xe8b898 }, 10.85, 7.15, 0.55);
  const dancerB = placeDancer({ hair: 0xf2c12e, bikini: 0x2f7fd0, skin: 0xd9a078 }, 13.2, 8.7, -0.7);
  dancerA.mesh.name = "babe-boom-a";
  dancerB.mesh.name = "babe-boom-b";
  scene.add(dancerA.mesh, dancerB.mesh);

  const kens = [kenA, kenB];
  const dancers = [dancerA, dancerB];
  const vu = boombox.userData.vu;

  return {
    tick(tSeconds) {
      for (let i = 0; i < kens.length; i++) poseGuitarist(kens[i], tSeconds, i);
      for (const d of dancers) poseDancer(d, tSeconds);
      if (vu) vu.emissiveIntensity = 0.35 + Math.abs(Math.sin(tSeconds * 4.6)) * 0.9;
    },
    musicSpots: [
      { id: "guitar-a", position: kenA.mesh.position, radius: 7 },
      { id: "guitar-b", position: kenB.mesh.position, radius: 7 },
      { id: "boombox", position: boombox.position, radius: 8 },
      { id: "dj", position: new THREE.Vector3(-24, 0, 7), radius: 10 },
    ],
    people: [kenA.mesh, kenB.mesh, dancerA.mesh, dancerB.mesh],
  };
}
