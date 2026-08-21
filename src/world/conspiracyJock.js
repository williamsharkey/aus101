/**
 * Conspiracy Ken — shirtless Gold Coast lad in wrap shades.
 * Wanders sand/boardwalk, faces the copper unit at 6 m, dumps a long rant.
 */
import * as THREE from "three";
import { ken } from "../chars/npcs.js";

const TAU = Math.PI * 2;
const NAME = "ken-conspiracy";
const KIND = "ken";
const TALK_R = 6;
const WALK = 0.58;
const REACH = 0.5;
const GAP_MS = 1400;

/** Open sand + boardwalk lip, off the DJ ring and crate synth. */
export const CONSPIRACY_LOOP = [
  [-16.4, 8.8],
  [-18.2, 13.6],
  [-11.0, 15.9],
  [-3.4, 12.4],
  [4.8, 15.2],
  [11.6, 10.6],
  [9.4, 3.2],
  [2.2, -2.4],
  [-6.8, 1.0],
  [-14.6, 4.2],
];
export const CONSPIRACY_SPAWN = {
  x: CONSPIRACY_LOOP[0][0],
  y: 0,
  z: CONSPIRACY_LOOP[0][1],
};

export const CONSPIRACY_IDS = [
  "conspiracy_01",
  "conspiracy_02",
  "conspiracy_03",
  "conspiracy_04",
  "conspiracy_05",
  "conspiracy_06",
  "conspiracy_07",
  "conspiracy_08",
  "conspiracy_09",
  "conspiracy_10",
  "conspiracy_11",
  "conspiracy_12",
  "conspiracy_13",
  "conspiracy_14",
  "conspiracy_15",
  "conspiracy_16",
];

/** Hold pose until bake reports a real duration. ~55 ms/char of the pending copy. */
const LINE_MS = {
  conspiracy_01: 15000,
  conspiracy_02: 14500,
  conspiracy_03: 14000,
  conspiracy_04: 15500,
  conspiracy_05: 13500,
  conspiracy_06: 13000,
  conspiracy_07: 14500,
  conspiracy_08: 14000,
  conspiracy_09: 13500,
  conspiracy_10: 15000,
  conspiracy_11: 12500,
  conspiracy_12: 14000,
  conspiracy_13: 13500,
  conspiracy_14: 14500,
  conspiracy_15: 13000,
  conspiracy_16: 16000,
};

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function wrapPi(a) {
  let x = a;
  while (x > Math.PI) x -= TAU;
  while (x < -Math.PI) x += TAU;
  return x;
}

function yawTo(fromX, fromZ, toX, toZ) {
  return Math.atan2(toX - fromX, toZ - fromZ);
}

function distXZ(a, b) {
  if (!a || !b) return Infinity;
  return Math.hypot((a.x ?? 0) - (b.x ?? 0), (a.z ?? 0) - (b.z ?? 0));
}

function addOakleys(head, s, headR) {
  const g = new THREE.Group();
  g.name = "oakleys";
  const lensM = std(0x08140e, { roughness: 0.12, metalness: 0.72 });
  const frameM = std(0x161814, { roughness: 0.3, metalness: 0.45 });

  for (const side of [-1, 1]) {
    const lens = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.052 * s, 0.03 * s, 0.014 * s), lensM));
    lens.position.set(side * 0.034 * s, 0.01 * s, headR * 0.84);
    lens.rotation.y = side * -0.42;
    g.add(lens);
    const arm = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.007 * s, 0.007 * s, 0.1 * s), frameM));
    arm.position.set(side * headR * 0.92, 0.01 * s, headR * 0.28);
    arm.rotation.y = side * 0.18;
    g.add(arm);
  }
  const bridge = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.024 * s, 0.008 * s, 0.012 * s), frameM));
  bridge.position.set(0, 0.016 * s, headR * 0.9);
  g.add(bridge);
  const brow = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.1 * s, 0.006 * s, 0.012 * s), frameM));
  brow.position.set(0, 0.026 * s, headR * 0.82);
  g.add(brow);
  head.add(g);
  return g;
}

function dressConspiracy(mesh) {
  const b = mesh.userData.body;
  const s = b.scale;
  addOakleys(b.head, s, b.headR);

  const pale = std(0xd4a07a, { roughness: 0.55 });
  pale.userData.skinRegion = "torso";
  const band = shadow(new THREE.Mesh(new THREE.BoxGeometry(b.chestW * 0.9, 0.15 * s, 0.028 * s), pale));
  band.position.set(0, b.shoulderY - 0.21 * s, b.chestD * 0.5 - 0.006 * s);
  mesh.add(band);
  mesh.userData.skinMats = [...(mesh.userData.skinMats || []), pale];

  const stripeM = std(0xffe14a, { roughness: 0.55 });
  for (const side of [-1, 1]) {
    const stripe = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.018 * s, 0.16 * s, 0.12 * s), stripeM));
    stripe.position.set(side * 0.132 * s, b.hipY - 0.02 * s, 0.01 * s);
    mesh.add(stripe);
  }
}

function poseWalk(mesh, phase, amp) {
  const b = mesh.userData.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.set(-swing * 0.55 * amp, 0, -0.04);
  b.legR.rotation.set(swing * 0.55 * amp, 0, 0.04);
  if (b.armL) b.armL.rotation.set(swing * 0.45 * amp, 0, -0.08);
  if (b.armR) b.armR.rotation.set(-swing * 0.45 * amp, 0, 0.08);
  if (b.head) b.head.rotation.set(0.04, 0, 0);
  mesh.position.y = Math.abs(Math.sin(phase)) * 0.028 * amp;
}

function poseTalk(mesh, t) {
  const b = mesh.userData.body;
  if (!b?.legL) return;
  mesh.position.y = 0;
  b.legL.rotation.set(0.05, 0, -0.06);
  b.legR.rotation.set(-0.02, 0, 0.1);
  if (b.armL) b.armL.rotation.set(0.28, 0.12, -0.95);
  if (b.armR) b.armR.rotation.set(-1.05 + Math.sin(t * 5.4) * 0.28, -0.22, 0.38);
  if (b.head) b.head.rotation.set(0.05 + Math.sin(t * 7.2) * 0.035, Math.sin(t * 2.1) * 0.14, 0);
}

function downed(mesh) {
  return !mesh || mesh.visible === false || mesh.userData.combatDown;
}

function pickLine(recent) {
  const blocked = new Set(recent.slice(-3));
  const pool = CONSPIRACY_IDS.filter((id) => !blocked.has(id));
  const src = pool.length ? pool : CONSPIRACY_IDS;
  return src[(Math.random() * src.length) | 0];
}

function faceToward(mesh, tx, tz, dt) {
  const want = yawTo(mesh.position.x, mesh.position.z, tx, tz);
  mesh.rotation.y += wrapPi(want - mesh.rotation.y) * Math.min(1, dt * 4.2);
}

function tryPlay(st, play, id, gain) {
  const fn = play || st.play || st.mesh.userData.play;
  const hold = LINE_MS[id] || 12000;
  st.recent.push(id);
  if (st.recent.length > 3) st.recent.shift();
  st.lastId = id;
  st.talking = true;
  st.talkUntil = performance.now() + hold;
  if (typeof fn !== "function") return;
  try {
    const handle = fn(id, { gain: gain ?? 0.95 });
    handle?.ready?.then?.((ok) => {
      if (ok && handle.duration) st.talkUntil = performance.now() + handle.duration + 250;
    });
  } catch {
    /* vo optional until bake */
  }
}

let live = null;

/**
 * One conspiracy Ken. Second call returns the live instance.
 * @param {THREE.Scene} scene
 * @returns {{ mesh: THREE.Group, tick: Function }}
 */
export function spawnConspiracyJock(scene) {
  if (live?.mesh && (live.mesh.parent === scene || (!scene && live.mesh.parent))) {
    return live;
  }

  const mesh = ken({ hair: 0xffe566, shorts: 0xff3d00, skin: 0xb56e3a });
  dressConspiracy(mesh);
  mesh.name = NAME;
  mesh.userData.kind = KIND;
  mesh.userData.ageBand = "adult";
  mesh.userData.paintTarget = true;
  mesh.userData.job = "conspiracy";

  const a = CONSPIRACY_LOOP[0];
  const b = CONSPIRACY_LOOP[1];
  mesh.position.set(a[0], 0, a[1]);
  mesh.rotation.y = yawTo(a[0], a[1], b[0], b[1]);
  scene?.add(mesh);

  const st = {
    mesh,
    play: null,
    i: 1,
    phase: Math.random() * TAU,
    recent: [],
    lastId: "",
    talking: false,
    talkUntil: 0,
    nextSpeak: performance.now() + 900,
  };

  function tick(dt, playerPos, play) {
    if (play) {
      st.play = play;
      mesh.userData.play = play;
    }
    if (downed(mesh)) return;
    if (mesh.userData.flee) return;

    const h = Math.min(Math.max(dt || 0, 0), 0.05);
    const now = performance.now();
    if (st.talking && now >= st.talkUntil) {
      st.talking = false;
      st.nextSpeak = now + GAP_MS;
    }

    const near = distXZ(playerPos, mesh.position) <= TALK_R;
    if (st.talking) {
      if (playerPos) faceToward(mesh, playerPos.x, playerPos.z, h);
      poseTalk(mesh, now * 0.001);
      return;
    }

    if (near && playerPos) {
      faceToward(mesh, playerPos.x, playerPos.z, h);
      poseTalk(mesh, now * 0.001);
      if (now >= st.nextSpeak) {
        const d = distXZ(playerPos, mesh.position);
        const gain = Math.max(0.4, Math.min(1, 1.08 - d / TALK_R));
        tryPlay(st, play, pickLine(st.recent), gain);
      }
      return;
    }

    const loop = CONSPIRACY_LOOP;
    const [tx, tz] = loop[st.i % loop.length];
    const dx = tx - mesh.position.x;
    const dz = tz - mesh.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist < REACH) {
      st.i = (st.i + 1) % loop.length;
      poseWalk(mesh, st.phase, 0.12);
    } else {
      const step = Math.min(dist, WALK * h);
      mesh.position.x += (dx / dist) * step;
      mesh.position.z += (dz / dist) * step;
      faceToward(mesh, tx, tz, h);
      st.phase += h * 4.4;
      poseWalk(mesh, st.phase, 1);
    }
  }

  mesh.userData.tick = tick;
  live = {
    mesh,
    tick,
    kind: KIND,
    ageBand: "adult",
    spawn: CONSPIRACY_SPAWN,
    setPlay(fn) {
      st.play = fn;
      mesh.userData.play = fn;
    },
  };
  return live;
}

export function tickConspiracyJock(dt, playerPos, play) {
  if (!live) return;
  live.tick(dt, playerPos, play);
}
