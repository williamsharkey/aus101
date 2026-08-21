/**
 * Baywatch-Halloween medic: red one-piece babe who drags KO Kens to the shack gurney.
 */
import * as THREE from "three";
import { babe } from "./npcs.js";

const TAU = Math.PI * 2;
const SUIT = 0xe23b2e;
const HAIR = 0xf4d27a;
const SKIN = 0xe0b08a;
const RUN = 1.7;
const DRAG = 1.15;
const REACH_VICTIM = 0.95;
const REACH_BED = 0.72;
const SIP_S = 4;
const REVIVE_S = 2;
const DONE_S = 0.35;

/** Floor gurney west of the door; 13.2, 25.4 sits in the bar. Long axis +Z. */
export const NURSE_BED = { x: 12.05, z: 23.6, yaw: 0 };

const POST = { x: 12.4, z: 20.6, yaw: Math.PI };

export const NURSE_GIGGLE = ["nurse_giggle_01", "nurse_giggle_02", "nurse_giggle_03"];
export const NURSE_SIP = ["nurse_sip_01", "nurse_sip_02"];
export const NURSE_FLIRT = ["nurse_flirt_01", "nurse_flirt_02", "nurse_flirt_03"];
export const NURSE_RUN = ["nurse_run_01"];
export const KEN_THANKS = ["ken_thanks_01", "ken_thanks_02"];
export const KEN_REMATCH = ["ken_rematch_01", "ken_rematch_02"];

const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(1, 12, 10),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
};

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function part(geo, mat, sx, sy = sx, sz = sx) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  m.scale.set(sx, sy, sz);
  return m;
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

function faceToward(mesh, tx, tz, dt) {
  const want = yawTo(mesh.position.x, mesh.position.z, tx, tz);
  mesh.rotation.y += wrapPi(want - mesh.rotation.y) * Math.min(1, dt * 6);
}

function pick(arr, last) {
  if (!arr.length) return "";
  if (arr.length === 1) return arr[0];
  let id = arr[(Math.random() * arr.length) | 0];
  if (id === last) id = arr[(Math.random() * arr.length) | 0];
  return id;
}

function tryPlay(play, id, gain) {
  if (typeof play !== "function" || !id) return;
  try {
    play(id, { gain: gain ?? 0.95 });
  } catch {
    /* vo optional until bake */
  }
}

function moveXZ(mesh, tx, tz, speed, dt) {
  const dx = tx - mesh.position.x;
  const dz = tz - mesh.position.z;
  const dist = Math.hypot(dx, dz);
  if (dist < 1e-4) return 0;
  const step = Math.min(dist, speed * dt);
  mesh.position.x += (dx / dist) * step;
  mesh.position.z += (dz / dist) * step;
  mesh.rotation.y = Math.atan2(dx, dz);
  return dist - step;
}

function poseHip(mesh, t) {
  const b = mesh.userData.body;
  if (!b?.legL) return;
  const sway = Math.sin(t * 1.6) * 0.045;
  mesh.position.y = 0;
  mesh.rotation.x = -0.04;
  mesh.rotation.z = 0.2 + sway;
  b.legL.rotation.set(0.08, 0, -0.08);
  b.legR.rotation.set(0.02, 0, 0.14);
  if (b.armL) b.armL.rotation.set(0.28, 0.18, -1.18);
  if (b.armR) b.armR.rotation.set(-0.45, -0.12, 0.38);
  if (b.head) b.head.rotation.set(-0.05 + Math.sin(t * 0.8) * 0.03, Math.sin(t * 0.55) * 0.1, 0);
  const chest = b.chest;
  if (chest) chest.scale.setScalar(1 + Math.sin(t * 2.2) * 0.018);
}

function poseBounceRun(mesh, phase) {
  const b = mesh.userData.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.set(-swing * 0.85, 0, -0.05);
  b.legR.rotation.set(swing * 0.85, 0, 0.05);
  if (b.armL) b.armL.rotation.set(swing * 0.95, 0, -0.12);
  if (b.armR) b.armR.rotation.set(-swing * 0.95, 0, 0.12);
  if (b.head) b.head.rotation.set(0.08, 0, Math.sin(phase * 0.5) * 0.05);
  mesh.position.y = Math.abs(Math.sin(phase)) * 0.09;
  mesh.rotation.x = 0.06;
  mesh.rotation.z = Math.sin(phase) * 0.05;
  const chest = b.chest;
  if (chest) chest.scale.setScalar(1 + Math.abs(Math.sin(phase)) * 0.04);
}

function poseDrag(mesh, phase) {
  const b = mesh.userData.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.set(-swing * 0.45, 0, -0.06);
  b.legR.rotation.set(swing * 0.45, 0, 0.06);
  if (b.armL) b.armL.rotation.set(-0.85, 0.25, -0.35);
  if (b.armR) b.armR.rotation.set(-1.05, -0.2, 0.45);
  if (b.head) b.head.rotation.set(0.22, 0, 0);
  mesh.position.y = Math.abs(Math.sin(phase)) * 0.03;
  mesh.rotation.x = 0.18;
  mesh.rotation.z = 0;
}

function poseSip(mesh, t) {
  const b = mesh.userData.body;
  if (!b?.legL) return;
  mesh.position.y = 0;
  mesh.rotation.x = 0.22;
  mesh.rotation.z = 0.08;
  b.legL.rotation.set(0.12, 0, -0.1);
  b.legR.rotation.set(-0.04, 0, 0.12);
  if (b.armL) b.armL.rotation.set(-0.95, 0.35, -0.25);
  if (b.armR) b.armR.rotation.set(-1.25 + Math.sin(t * 4.2) * 0.12, -0.2, 0.3);
  if (b.head) b.head.rotation.set(0.28, 0.08, 0);
}

function flopVictim(victim, x, z, yaw) {
  victim.position.x = x;
  victim.position.z = z;
  victim.position.y = 0.08;
  victim.rotation.x = 1.2;
  victim.rotation.y = yaw;
  victim.rotation.z = 0;
}

function dressNurse(g) {
  const b = g.userData.body;
  const s = b.scale;
  const { head, headR, hipY, shoulderY, chestD, chestW } = b;
  const suitM = std(SUIT, { roughness: 0.58 });
  const white = std(0xf6f4ee, { roughness: 0.55 });
  const crossM = std(0xc41c1c, { roughness: 0.5 });
  const chrome = std(0xc8d0d6, { roughness: 0.28, metalness: 0.7 });
  const cordM = std(0x1a1a1a, { roughness: 0.55 });

  const torsoH = Math.max(0.28 * s, shoulderY - hipY);
  const suit = part(GEO.box, suitM, chestW * 1.14, torsoH * 0.9, chestD * 1.2);
  suit.position.y = hipY + torsoH * 0.42;
  g.add(suit);

  const high = part(GEO.box, suitM, 0.22 * s, 0.12 * s, chestD * 1.08);
  high.position.set(0, hipY + 0.04 * s, 0.004 * s);
  g.add(high);

  for (const side of [-1, 1]) {
    const strap = part(GEO.box, suitM, 0.034 * s, 0.16 * s, 0.028 * s);
    strap.position.set(side * 0.09 * s, shoulderY + 0.02 * s, 0.01 * s);
    strap.rotation.z = side * -0.35;
    g.add(strap);
  }

  const chest = new THREE.Group();
  chest.name = "chest";
  chest.position.set(0, shoulderY - 0.155 * s, chestD * 0.28);
  for (const side of [-1, 1]) {
    const bust = part(GEO.sphere, suitM, 0.112 * s, 0.1 * s, 0.102 * s);
    bust.position.set(side * 0.078 * s, 0.01 * s, 0.042 * s);
    chest.add(bust);
  }
  g.add(chest);
  b.chest = chest;

  const cord = part(GEO.cyl, cordM, 0.006 * s, 0.22 * s, 0.006 * s);
  cord.position.set(0, shoulderY - 0.12 * s, chestD * 0.55);
  cord.rotation.x = 0.35;
  g.add(cord);
  const whistle = part(GEO.box, suitM, 0.018 * s, 0.014 * s, 0.042 * s);
  whistle.position.set(0, shoulderY - 0.22 * s, chestD * 0.62);
  g.add(whistle);
  const mouth = part(GEO.cyl, chrome, 0.006 * s, 0.016 * s, 0.006 * s);
  mouth.rotation.x = Math.PI / 2;
  mouth.position.set(0, shoulderY - 0.22 * s, chestD * 0.64);
  g.add(mouth);

  const cap = new THREE.Group();
  cap.name = "nurseCap";
  cap.position.set(0, headR * 0.82, headR * 0.12);
  const brim = part(GEO.box, white, 0.15 * s, 0.018 * s, 0.09 * s);
  cap.add(brim);
  const wall = part(GEO.box, white, 0.132 * s, 0.07 * s, 0.018 * s);
  wall.position.set(0, 0.04 * s, 0.036 * s);
  cap.add(wall);
  const cx = part(GEO.box, crossM, 0.046 * s, 0.012 * s, 0.01 * s);
  cx.position.set(0, 0.042 * s, 0.048 * s);
  cap.add(cx);
  const cy = part(GEO.box, crossM, 0.012 * s, 0.046 * s, 0.01 * s);
  cy.position.set(0, 0.042 * s, 0.048 * s);
  cap.add(cy);
  head.add(cap);

  const kit = new THREE.Group();
  kit.name = "medKit";
  kit.position.set(-0.16 * s, hipY + 0.02 * s, 0.02 * s);
  const box = part(GEO.box, white, 0.09 * s, 0.06 * s, 0.04 * s);
  kit.add(box);
  const kx = part(GEO.box, crossM, 0.04 * s, 0.01 * s, 0.008 * s);
  kx.position.z = 0.022 * s;
  kit.add(kx);
  const ky = part(GEO.box, crossM, 0.01 * s, 0.04 * s, 0.008 * s);
  ky.position.z = 0.022 * s;
  kit.add(ky);
  g.add(kit);
}

export function buildBaywatchNurse() {
  const g = babe({ hair: HAIR, bikini: SUIT, skin: SKIN });
  dressNurse(g);
  g.name = "baywatch-nurse";
  g.userData.kind = "babe";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = true;
  g.userData.job = "medic";
  return g;
}

let live = null;

/**
 * One medic. Second call returns the live instance.
 * @param {THREE.Scene} scene
 * @returns {{
 *   mesh: THREE.Group,
 *   bed: { x: number, z: number, yaw: number },
 *   tick(dt: number): void,
 *   dispatch(victimMesh: THREE.Object3D, opts?: { play?: Function }): void,
 *   readonly busy: boolean,
 *   readonly phase: string,
 * }}
 */
export function spawnBaywatchNurse(scene) {
  if (live?.mesh && (live.mesh.parent === scene || (!scene && live.mesh.parent))) {
    return live;
  }

  const mesh = buildBaywatchNurse();
  mesh.position.set(POST.x, 0, POST.z);
  mesh.rotation.y = POST.yaw;
  scene?.add(mesh);

  const bed = { x: NURSE_BED.x, z: NURSE_BED.z, yaw: NURSE_BED.yaw };
  let phase = "idle";
  let victim = null;
  let play = null;
  let gait = Math.random() * TAU;
  let hold = 0;
  let lastId = "";
  let flirtAt = 0;

  function setPhase(next) {
    phase = next;
    mesh.userData.nursePhase = next;
  }

  function clearVictim() {
    if (victim?.userData) delete victim.userData.dragBy;
    victim = null;
  }

  function dispatch(victimMesh, opts = {}) {
    if (phase !== "idle") return;
    if (!victimMesh) return;
    if (opts.play) {
      play = opts.play;
      mesh.userData.play = opts.play;
    }
    victim = victimMesh;
    victim.userData = victim.userData || {};
    setPhase("run");
    hold = 0;
    lastId = pick(NURSE_GIGGLE, lastId);
    tryPlay(play || mesh.userData.play, lastId, 1);
  }

  function tick(dt) {
    if (!play && mesh.userData.play) play = mesh.userData.play;
    const h = Math.min(Math.max(dt || 0, 0), 0.05);
    const now = performance.now();
    const t = now * 0.001;

    if (phase === "idle") {
      poseHip(mesh, t);
      return;
    }

    if (!victim || !victim.position) {
      clearVictim();
      setPhase("idle");
      poseHip(mesh, t);
      return;
    }

    if (phase === "run") {
      gait += h * 10.5;
      const left = moveXZ(mesh, victim.position.x, victim.position.z, RUN, h);
      poseBounceRun(mesh, gait);
      if (left < REACH_VICTIM) {
        victim.userData.dragBy = mesh;
        if (victim.visible === false) victim.visible = true;
        flopVictim(victim, victim.position.x, victim.position.z, mesh.rotation.y);
        setPhase("drag");
      }
      return;
    }

    if (phase === "drag") {
      gait += h * 7.2;
      const left = moveXZ(mesh, bed.x, bed.z, DRAG, h);
      faceToward(mesh, bed.x, bed.z, h);
      poseDrag(mesh, gait);
      const yaw = mesh.rotation.y;
      flopVictim(
        victim,
        mesh.position.x - Math.sin(yaw) * 0.55,
        mesh.position.z - Math.cos(yaw) * 0.55,
        yaw
      );
      if (left < REACH_BED) {
        flopVictim(victim, bed.x, bed.z, bed.yaw);
        mesh.position.set(bed.x + 0.55, 0, bed.z);
        mesh.rotation.y = -Math.PI / 2;
        setPhase("sip");
        hold = SIP_S;
        flirtAt = now + 1800;
        lastId = pick(NURSE_SIP, lastId);
        tryPlay(play, lastId, 1);
      }
      return;
    }

    if (phase === "sip") {
      poseSip(mesh, t);
      flopVictim(victim, bed.x, bed.z, bed.yaw);
      if (flirtAt && now >= flirtAt) {
        flirtAt = 0;
        lastId = pick(NURSE_FLIRT, lastId);
        tryPlay(play, lastId, 1);
      }
      hold -= h;
      if (hold <= 0) {
        setPhase("revive");
        hold = REVIVE_S;
        lastId = pick(KEN_THANKS, lastId);
        tryPlay(play, lastId, 0.95);
      }
      return;
    }

    if (phase === "revive") {
      poseSip(mesh, t);
      hold -= h;
      if (hold <= 0) {
        setPhase("done");
        hold = DONE_S;
      }
      return;
    }

    if (phase === "done") {
      poseHip(mesh, t);
      hold -= h;
      if (hold <= 0) {
        clearVictim();
        setPhase("idle");
      }
    }
  }

  mesh.userData.tick = tick;
  mesh.userData.dispatch = dispatch;

  live = {
    mesh,
    bed,
    tick,
    dispatch,
    get busy() {
      return phase !== "idle";
    },
    get phase() {
      return phase;
    },
  };
  return live;
}
