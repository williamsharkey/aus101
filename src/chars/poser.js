/**
 * Narcissistic plein-air poser: a babe (or rare Ken) walks in front of the
 * easel, strikes camera poses, and heckles the painter until the sitting ends.
 */
import * as THREE from "three";
import { babe } from "./npcs.js";

const REACH = 18;
const STAND_Z = 1.2;
const WALK = 1.45;
const BABE_LINES = [
  "pose_babe_01",
  "pose_babe_02",
  "pose_babe_03",
  "pose_babe_04",
  "pose_babe_05",
  "pose_babe_06",
  "pose_babe_07",
];
const KEN_LINES = ["pose_ken_01"];

const _ndc = new THREE.Vector3();
const _mark = new THREE.Vector3();
const _face = new THREE.Vector3();

function kindOf(mesh, entry) {
  return mesh?.userData?.kind || entry?.kind || "";
}

function blocked(mesh) {
  if (!mesh || mesh.visible === false) return true;
  if (mesh.userData.combatDown || mesh.userData.flee) return true;
  return false;
}

function skipRecruit(mesh, entry) {
  if (blocked(mesh)) return true;
  if (mesh.userData.posing) return true;
  const k = kindOf(mesh, entry);
  if (k === "gull" || k === "kid" || k === "artist" || k === "cop" || k === "t101") return true;
  const n = mesh.name || "";
  if (/guitar|dj-|boom|piano|synth|fight|cop/i.test(n)) return true;
  return false;
}

function inPainterView(cam, mesh) {
  if (!cam || !mesh) return false;
  _ndc.set(mesh.position.x, mesh.position.y + 1.1, mesh.position.z).project(cam);
  if (_ndc.z < -1 || _ndc.z > 1) return false;
  if (Math.abs(_ndc.x) > 0.92 || Math.abs(_ndc.y) > 0.92) return false;
  const dx = mesh.position.x - cam.position.x;
  const dy = mesh.position.y + 1.1 - cam.position.y;
  const dz = mesh.position.z - cam.position.z;
  const d = Math.hypot(dx, dy, dz);
  return d > 0.45 && d < REACH;
}

function captureRest(mesh) {
  const b = mesh.userData.body || {};
  return {
    x: mesh.position.x,
    z: mesh.position.z,
    yaw: mesh.rotation.y,
    rx: mesh.rotation.x,
    rz: mesh.rotation.z,
    armL: b.armL?.rotation.clone(),
    armR: b.armR?.rotation.clone(),
    legL: b.legL?.rotation.clone(),
    legR: b.legR?.rotation.clone(),
    head: b.head?.rotation.clone(),
  };
}

function restoreRest(mesh, rest) {
  if (!mesh || !rest) return;
  mesh.rotation.x = rest.rx;
  mesh.rotation.z = rest.rz;
  const b = mesh.userData.body || {};
  if (b.armL && rest.armL) b.armL.rotation.copy(rest.armL);
  if (b.armR && rest.armR) b.armR.rotation.copy(rest.armR);
  if (b.legL && rest.legL) b.legL.rotation.copy(rest.legL);
  if (b.legR && rest.legR) b.legR.rotation.copy(rest.legR);
  if (b.head && rest.head) b.head.rotation.copy(rest.head);
}

function poseWalk(mesh, phase, amp) {
  const b = mesh.userData.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.set(-swing * 0.7 * amp, 0, -0.04);
  b.legR.rotation.set(swing * 0.7 * amp, 0, 0.04);
  if (b.armL) b.armL.rotation.set(swing * 0.8 * amp, 0, -0.08);
  if (b.armR) b.armR.rotation.set(-swing * 0.8 * amp, 0, 0.08);
  mesh.position.y = Math.abs(Math.sin(phase)) * 0.04 * amp;
  mesh.rotation.x = 0;
  mesh.rotation.z = 0;
}

/** Hip pop / hand-on-hip / chest out / look at the easel-camera. */
function poseNarcissist(mesh, nowMs, kind) {
  const b = mesh.userData.body;
  if (!b) return;
  const t = nowMs * 0.001;
  const slot = ((nowMs / 3800) | 0) % 4;
  const sway = Math.sin(t * 1.4) * 0.04;
  mesh.position.y = 0;
  mesh.rotation.x = slot === 2 ? -0.12 : -0.03;
  mesh.rotation.z = slot === 0 ? 0.2 + sway : sway * 0.5;
  if (b.legL) b.legL.rotation.set(slot === 0 ? 0.06 : 0.02, 0, -0.06);
  if (b.legR) b.legR.rotation.set(slot === 3 ? 0.08 : 0.02, 0, 0.12);
  if (b.head) b.head.rotation.set(-0.06 + Math.sin(t * 0.7) * 0.03, Math.sin(t * 0.5) * 0.08, 0);
  const babe = kind === "babe" || kind === "goth";
  if (slot === 0) {
    // hip pop, one hand on hip
    if (b.armL) b.armL.rotation.set(0.25, 0.15, -1.15);
    if (b.armR) b.armR.rotation.set(-0.55, -0.1, 0.35);
  } else if (slot === 1) {
    // both hands on hips, chest out
    if (b.armL) b.armL.rotation.set(0.2, 0.1, -1.05);
    if (b.armR) b.armR.rotation.set(0.2, -0.1, 1.05);
  } else if (slot === 2) {
    // chest out, arms back, look at camera
    if (b.armL) b.armL.rotation.set(0.45, 0.05, -0.55);
    if (b.armR) b.armR.rotation.set(0.45, -0.05, 0.55);
    if (b.head) b.head.rotation.set(-0.12, 0.05, 0);
  } else {
    // hair / present, hip cocked
    if (b.armL) b.armL.rotation.set(babe ? -2.05 : -0.4, 0.25, -0.55);
    if (b.armR) b.armR.rotation.set(0.3, -0.2, 1.12);
  }
}

function pickLine(kind, last) {
  const pool = kind === "ken" ? KEN_LINES : BABE_LINES;
  if (pool.length === 1) return pool[0];
  let id = pool[(Math.random() * pool.length) | 0];
  if (id === last) id = pool[(Math.random() * pool.length) | 0];
  return id;
}

function spawnTempBabe(scene, mark, cast) {
  const m = babe();
  const side = Math.random() < 0.5 ? 1 : -1;
  m.position.set(mark.x + side * 7, 0, mark.z + 5);
  m.rotation.y = Math.atan2(mark.x - m.position.x, mark.z - m.position.z);
  m.userData.kind = "babe";
  m.userData.ageBand = "adult";
  m.userData.paintTarget = true;
  m.userData.tempPoser = true;
  m.name = "pose-babe";
  scene.add(m);
  if (cast && !cast.some((c) => c.mesh === m)) {
    cast.push({ mesh: m, kind: "babe", ageBand: "adult" });
  }
  return m;
}

function walkToward(mesh, tx, tz, dt, nowMs) {
  const dx = tx - mesh.position.x;
  const dz = tz - mesh.position.z;
  const dist = Math.hypot(dx, dz);
  if (dist < 0.09) return 0;
  const step = Math.min(dist, WALK * dt);
  mesh.position.x += (dx / dist) * step;
  mesh.position.z += (dz / dist) * step;
  mesh.rotation.y = Math.atan2(dx, dz);
  poseWalk(mesh, nowMs * 0.009, 1);
  return dist - step;
}

/**
 * @param {{
 *   scene: THREE.Scene,
 *   cast?: { mesh: THREE.Object3D, kind?: string }[],
 *   play?: (id: string, opts?: object) => unknown,
 * }} opts
 */
export function createPoser({ scene, cast = [], play } = {}) {
  let mesh = null;
  let rest = null;
  let temp = false;
  let phase = "idle"; // idle | walkIn | pose | leave
  let lastLine = "";
  let nextLineAt = 0;
  let leaveX = 0;
  let leaveZ = 0;

  function drop() {
    if (!mesh) return;
    restoreRest(mesh, rest);
    mesh.position.y = 0;
    mesh.userData.posing = false;
    if (temp) {
      scene.remove(mesh);
      const i = cast.findIndex((c) => c.mesh === mesh);
      if (i >= 0) cast.splice(i, 1);
    } else if (rest) {
      mesh.position.x = rest.x;
      mesh.position.z = rest.z;
      mesh.rotation.y = rest.yaw;
    }
    mesh = null;
    rest = null;
    temp = false;
    phase = "idle";
  }

  function recruit(viewCam, mark) {
    if (!mark) return;
    const people = [];
    for (const entry of cast) {
      const m = entry.mesh;
      if (skipRecruit(m, entry)) continue;
      const k = kindOf(m, entry);
      if (k !== "babe" && k !== "ken" && k !== "goth") continue;
      const seen = inPainterView(viewCam, m);
      const dx = m.position.x - mark.x;
      const dz = m.position.z - mark.z;
      const d = Math.hypot(dx, dz);
      people.push({ mesh: m, kind: k, seen, d });
    }
    const inShot = people.filter((p) => p.seen);
    if (!inShot.length) return;

    const babesShot = inShot.filter((p) => p.kind === "babe");
    const babesNear = people.filter((p) => p.kind === "babe" && p.d < REACH);
    let pick = null;
    if (babesShot.length) pick = babesShot.sort((a, b) => a.d - b.d)[0];
    else if (babesNear.length) pick = babesNear.sort((a, b) => a.d - b.d)[0];
    else if (Math.random() < 0.22) {
      const kens = inShot.filter((p) => p.kind === "ken");
      pick = kens.sort((a, b) => a.d - b.d)[0] || inShot[0];
    }

    if (pick) {
      mesh = pick.mesh;
      temp = false;
    } else {
      mesh = spawnTempBabe(scene, mark, cast);
      temp = true;
    }
    rest = captureRest(mesh);
    mesh.userData.posing = true;
    phase = "walkIn";
    nextLineAt = 0;
  }

  function say(nowMs) {
    if (!play || !mesh) return;
    const k = mesh.userData.kind === "ken" ? "ken" : "babe";
    const id = pickLine(k, lastLine);
    lastLine = id;
    play(id, { gain: 1.15 });
    nextLineAt = nowMs + 9000 + Math.random() * 5000;
  }

  return {
    get mesh() {
      return mesh;
    },
    /**
     * Stand ~1.2 m on the subject side of the canvas (easel local −Z / look dir).
     * @param {THREE.Object3D} root
     */
    markFrom(root) {
      _mark.set(0, 0, 0.11 - STAND_Z);
      root.localToWorld(_mark);
      _face.set(0.38, 0, 0.72);
      root.localToWorld(_face);
      const yaw = Math.atan2(_face.x - _mark.x, _face.z - _mark.z);
      return { x: _mark.x, z: _mark.z, yaw };
    },
    /** Sitting finished: wander off. Next sitting can recruit again. */
    dismiss(nowMs) {
      if (!mesh || phase === "idle") return;
      restoreRest(mesh, rest);
      const a = Math.random() * Math.PI * 2;
      leaveX = mesh.position.x + Math.cos(a) * (8 + Math.random() * 5);
      leaveZ = mesh.position.z + Math.sin(a) * (8 + Math.random() * 5);
      if (rest && !temp) {
        leaveX = rest.x;
        leaveZ = rest.z;
      }
      phase = "leave";
      nextLineAt = nowMs + 999999;
    },
    tick(dt, nowMs, { active, viewCam, root } = {}) {
      if (mesh && (blocked(mesh) || mesh.userData.flee)) {
        drop();
        return;
      }
      if (phase === "idle") {
        if (!active || !viewCam || !root) return;
        recruit(viewCam, this.markFrom(root));
        return;
      }
      const mark = root ? this.markFrom(root) : null;
      if (phase === "walkIn") {
        if (!mark) return;
        const left = walkToward(mesh, mark.x, mark.z, dt, nowMs);
        if (left < 0.1) {
          mesh.position.x = mark.x;
          mesh.position.z = mark.z;
          mesh.position.y = 0;
          mesh.rotation.y = mark.yaw;
          phase = "pose";
          say(nowMs);
        }
        return;
      }
      if (phase === "pose") {
        if (mark) {
          mesh.position.x += (mark.x - mesh.position.x) * 0.08;
          mesh.position.z += (mark.z - mesh.position.z) * 0.08;
          mesh.rotation.y = mark.yaw;
        }
        poseNarcissist(mesh, nowMs, mesh.userData.kind);
        if (nowMs >= nextLineAt) say(nowMs);
        return;
      }
      if (phase === "leave") {
        const left = walkToward(mesh, leaveX, leaveZ, dt, nowMs);
        if (left < 0.12) drop();
      }
    },
  };
}
