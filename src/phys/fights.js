/**
 * Spontaneous Ken-on-Ken sand fights. Standing uses ken(); KO hides the mesh
 * and drops 6 Verlet boxes (no cannon-es). After ~4s they stand back up.
 */
import * as THREE from "three";
import { ken } from "../chars/npcs.js";

const G = 16;
const BOUNCE = 0.15;
const GROUND_Y = 0;
const RAGDOLL_S = 4;
const PUNCH_MIN = 0.4;
const PUNCH_MAX = 0.8;
const GAP = 2.2;
const STEP = 1 / 60;
const DAMP = 0.984;
const HIT_HP = 1;
const START_HP = 5;
const CONSTRAINT_ITERS = 4;

const GEO = {
  torso: new THREE.BoxGeometry(0.34, 0.5, 0.18),
  head: new THREE.BoxGeometry(0.22, 0.22, 0.22),
  arm: new THREE.BoxGeometry(0.09, 0.5, 0.09),
  leg: new THREE.BoxGeometry(0.11, 0.7, 0.11),
};

/** Local rest centres. Ken origin is at the feet. */
const REST = [
  { id: "torso", geo: "torso", ox: 0, oy: 1.16, oz: 0, half: 0.25, inv: 0.35, mat: "skin" },
  { id: "head", geo: "head", ox: 0, oy: 1.62, oz: 0, half: 0.11, inv: 0.85, mat: "skin" },
  { id: "armL", geo: "arm", ox: -0.28, oy: 1.2, oz: 0, half: 0.25, inv: 1, mat: "skin" },
  { id: "armR", geo: "arm", ox: 0.28, oy: 1.2, oz: 0, half: 0.25, inv: 1, mat: "skin" },
  { id: "legL", geo: "leg", ox: -0.09, oy: 0.36, oz: 0, half: 0.35, inv: 1, mat: "shorts" },
  { id: "legR", geo: "leg", ox: 0.09, oy: 0.36, oz: 0, half: 0.35, inv: 1, mat: "shorts" },
];

const LINKS = REST.slice(1).map((p) => ({
  a: 0,
  b: REST.indexOf(p),
  rest: Math.hypot(p.ox - REST[0].ox, p.oy - REST[0].oy, p.oz - REST[0].oz),
}));

const LOOKS = [
  { hair: 0xf4c431, shorts: 0x1f6f78, skin: 0xd4a06a },
  { hair: 0xff6b9a, shorts: 0x1a4d8c, skin: 0xcc8f5a },
  { hair: 0xf4e27a, shorts: 0xe23b3b, skin: 0xe0a060 },
  { hair: 0x5ec8ff, shorts: 0xf2c12e, skin: 0xd4924a },
];

const SITES = [
  { x: 16, z: 2, axis: "x" },
  { x: -10, z: -3, axis: "z" },
];

function rand(a, b) {
  return a + Math.random() * (b - a);
}

function std(color) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04 });
}

function rotY(x, z, yaw) {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return { x: x * c - z * s, z: x * s + z * c };
}

function faceYaw(from, to) {
  return Math.atan2(to.x - from.x, to.z - from.z);
}

function makeDoll(scene, look) {
  const skinM = std(look.skin);
  const shortsM = std(look.shorts);
  const root = new THREE.Group();
  root.name = "ken-ragdoll";
  root.visible = false;
  const parts = REST.map((spec) => {
    const mat = spec.mat === "shorts" ? shortsM : skinM;
    const mesh = new THREE.Mesh(GEO[spec.geo], mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    return {
      mesh,
      x: 0,
      y: spec.oy,
      z: 0,
      px: 0,
      py: spec.oy,
      pz: 0,
      half: spec.half,
      inv: spec.inv,
      rx: 0,
      rz: 0,
      ox: spec.ox,
      oy: spec.oy,
      oz: spec.oz,
    };
  });
  scene.add(root);
  return { root, parts };
}

function placeParts(f, vx, vy, vz) {
  const yaw = f.mesh.rotation.y;
  const ox = f.x;
  const oz = f.z;
  for (const p of f.doll.parts) {
    const w = rotY(p.ox, p.oz, yaw);
    p.x = ox + w.x;
    p.y = p.oy;
    p.z = oz + w.z;
    const jx = vx + rand(-1.4, 1.4);
    const jy = vy + rand(0.4, 2.2);
    const jz = vz + rand(-1.4, 1.4);
    p.px = p.x - jx * STEP;
    p.py = p.y - jy * STEP;
    p.pz = p.z - jz * STEP;
    p.rx = 0;
    p.rz = 0;
    p.mesh.position.set(p.x, p.y, p.z);
    p.mesh.rotation.set(0, yaw, 0);
  }
}

function integrate(parts, dt) {
  const g = -G * dt * dt;
  for (const p of parts) {
    const vx = (p.x - p.px) * DAMP;
    const vy = (p.y - p.py) * DAMP;
    const vz = (p.z - p.pz) * DAMP;
    p.px = p.x;
    p.py = p.y;
    p.pz = p.z;
    p.x += vx;
    p.y += vy + g;
    p.z += vz;
    p.rx += vz * 10;
    p.rz -= vx * 10;
  }
}

function constrain(parts) {
  for (const link of LINKS) {
    const a = parts[link.a];
    const b = parts[link.b];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;
    const d = Math.hypot(dx, dy, dz) || 1e-6;
    const w = a.inv + b.inv;
    const corr = ((d - link.rest) / d) * (1 / w);
    a.x += dx * corr * a.inv;
    a.y += dy * corr * a.inv;
    a.z += dz * corr * a.inv;
    b.x -= dx * corr * b.inv;
    b.y -= dy * corr * b.inv;
    b.z -= dz * corr * b.inv;
  }
}

function ground(parts) {
  for (const p of parts) {
    const floor = GROUND_Y + p.half;
    if (p.y >= floor) continue;
    const vx = p.x - p.px;
    const vy = p.y - p.py;
    const vz = p.z - p.pz;
    p.y = floor;
    p.py = vy < 0 ? p.y + vy * BOUNCE : p.y;
    p.px = p.x - vx * 0.7;
    p.pz = p.z - vz * 0.7;
  }
}

function syncDoll(f) {
  for (const p of f.doll.parts) {
    p.mesh.position.set(p.x, p.y, p.z);
    p.mesh.rotation.set(p.rx, f.mesh.rotation.y, p.rz);
  }
}

function setMode(f, mode) {
  f.state = mode;
  const rag = mode === "ragdoll";
  f.mesh.visible = !rag;
  f.doll.root.visible = rag;
}

/** Guard / jab on the planted ken. Feet stay level on the sand. */
function poseStand(f, jab = 0) {
  const b = f.mesh.userData.body;
  if (!b) return;
  const lead = f.lead || 1;
  b.armL.rotation.set(-1.22 + (lead < 0 ? -jab * 0.5 : jab * 0.1), 0.1, 0.48);
  b.armR.rotation.set(-1.22 + (lead > 0 ? -jab * 0.5 : jab * 0.1), -0.1, -0.48);
  b.legL.rotation.set(0.1, 0, 0.05);
  b.legR.rotation.set(0.06, 0, -0.05);
}

function resetFighter(f) {
  f.x = f.home.x;
  f.z = f.home.z;
  f.vx = 0;
  f.vz = 0;
  f.hp = START_HP + ((Math.random() * 3) | 0);
  f.cool = rand(PUNCH_MIN, PUNCH_MAX);
  f.punch = 0;
  f.acc = 0;
  f.mesh.position.set(f.home.x, 0, f.home.z);
  f.mesh.rotation.set(0, f.home.yaw, 0);
  poseStand(f, 0);
  setMode(f, "stand");
}

function drop(f, nx, nz, power) {
  const launch = 3.2 + power * 2.4;
  placeParts(f, nx * launch, 3.4 + power * 2, nz * launch);
  setMode(f, "ragdoll");
}

function punchToward(self, opp) {
  const dx = opp.x - self.x;
  const dz = opp.z - self.z;
  const len = Math.hypot(dx, dz) || 1;
  const nx = dx / len;
  const nz = dz / len;
  const hay = Math.random() < 0.14;
  const power = hay ? 1.35 : rand(0.7, 1.05);
  self.vx += nx * 1.6 * power;
  self.vz += nz * 1.6 * power;
  self.punch = 0.16;
  if (opp.state === "stand") {
    opp.vx += nx * 2.8 * power;
    opp.vz += nz * 2.8 * power;
    opp.hp -= hay ? HIT_HP * 2 : HIT_HP;
    if (opp.hp <= 0) drop(opp, nx, nz, power);
  } else {
    const t = opp.doll.parts[0];
    t.px -= nx * 0.1 * power;
    t.pz -= nz * 0.1 * power;
    t.py -= 0.03 * power;
  }
}

function tickStand(f, opp, dt) {
  f.cool -= dt;
  if (f.cool <= 0) {
    f.cool = rand(PUNCH_MIN, PUNCH_MAX);
    punchToward(f, opp);
  }
  f.vx += (f.home.x - f.x) * 6 * dt;
  f.vz += (f.home.z - f.z) * 6 * dt;
  f.vx *= Math.max(0, 1 - 5.5 * dt);
  f.vz *= Math.max(0, 1 - 5.5 * dt);
  f.x += f.vx * dt;
  f.z += f.vz * dt;

  f.mesh.rotation.y = faceYaw(f, opp);
  let px = f.x;
  let pz = f.z;
  let jab = 0;
  if (f.punch > 0) {
    f.punch = Math.max(0, f.punch - dt);
    jab = Math.sin((1 - f.punch / 0.16) * Math.PI);
    const fx = Math.sin(f.mesh.rotation.y);
    const fz = Math.cos(f.mesh.rotation.y);
    px += fx * jab * 0.22;
    pz += fz * jab * 0.22;
  }
  f.mesh.position.set(px, 0, pz);
  f.mesh.rotation.x = 0;
  poseStand(f, jab);
}

function tickRagdoll(f, dt) {
  f.acc += Math.min(dt, 0.05);
  while (f.acc >= STEP) {
    f.acc -= STEP;
    integrate(f.doll.parts, STEP);
    for (let i = 0; i < CONSTRAINT_ITERS; i++) constrain(f.doll.parts);
    ground(f.doll.parts);
  }
  syncDoll(f);
  const t = f.doll.parts[0];
  f.x = t.x;
  f.z = t.z;
}

function makeFighter(scene, x, z, yaw, look) {
  const mesh = ken(look);
  mesh.position.set(x, 0, z);
  mesh.rotation.y = yaw;
  mesh.userData.fight = true;
  mesh.userData.paintTarget = false;
  scene.add(mesh);
  const f = {
    mesh,
    doll: makeDoll(scene, look),
    home: { x, z, yaw },
    x,
    z,
    vx: 0,
    vz: 0,
    hp: START_HP,
    cool: rand(PUNCH_MIN, PUNCH_MAX),
    punch: 0,
    acc: 0,
    lead: Math.random() < 0.5 ? -1 : 1,
    state: "stand",
  };
  poseStand(f, 0);
  return f;
}

function makePair(scene, site, lookA, lookB) {
  const half = GAP * 0.5;
  let ax = site.x;
  let az = site.z;
  let bx = site.x;
  let bz = site.z;
  let ay = 0;
  let by = Math.PI;
  if (site.axis === "x") {
    ax -= half;
    bx += half;
    ay = Math.PI * 0.5;
    by = -Math.PI * 0.5;
  } else {
    az -= half;
    bz += half;
    ay = 0;
    by = Math.PI;
  }
  return {
    a: makeFighter(scene, ax, az, ay, lookA),
    b: makeFighter(scene, bx, bz, by, lookB),
    down: 0,
  };
}

/**
 * Two Ken pairs on the sand. Call `tick(dt)` from the frame loop.
 * @param {THREE.Scene} scene
 * @returns {{ tick: (dt: number) => void }}
 */
export function spawnFights(scene) {
  const pairs = SITES.map((site, i) => makePair(scene, site, LOOKS[i * 2], LOOKS[i * 2 + 1]));

  function tick(dt) {
    if (!(dt > 0)) return;
    const h = Math.min(dt, 0.05);
    for (const pair of pairs) {
      if (pair.a.state === "stand") tickStand(pair.a, pair.b, h);
      if (pair.b.state === "stand") tickStand(pair.b, pair.a, h);
      if (pair.a.state === "ragdoll") tickRagdoll(pair.a, h);
      if (pair.b.state === "ragdoll") tickRagdoll(pair.b, h);
      if (pair.a.state === "ragdoll" || pair.b.state === "ragdoll") {
        pair.down += h;
        if (pair.down >= RAGDOLL_S) {
          resetFighter(pair.a);
          resetFighter(pair.b);
          pair.down = 0;
        }
      }
    }
  }

  return { tick };
}
