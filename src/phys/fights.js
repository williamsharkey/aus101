/**
 * Spontaneous Ken-on-Ken sand fights. Standing uses ken(); KO hides the mesh
 * and drops 6 Verlet boxes (no cannon-es). After ~4s they stand back up.
 */
import * as THREE from "three";
import { ken } from "../chars/npcs.js";

const G = 16;
const BOUNCE = 0.18;
const GROUND_Y = 0;
const RAGDOLL_S = 4.2;
const PUNCH_MIN = 0.55;
const PUNCH_MAX = 1.15;
const GAP = 1.85;
const RANGE_IN = 1.55;
const RANGE_OUT = 2.15;
const STEP = 1 / 60;
const DAMP = 0.978;
const HIT_HP = 1;
const START_HP = 9;
const CONSTRAINT_ITERS = 6;
const STUN = 0.28;

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
    p.px = p.x - vx * 0.45;
    p.pz = p.z - vz * 0.45;
    p.rx *= 0.86;
    p.rz *= 0.86;
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
  poseBox(f, jab, 0);
}

function poseBox(f, jab = 0, hook = 0) {
  const b = f.mesh.userData.body;
  if (!b) return;
  const lead = f.lead || 1;
  const g = 0.55 + (f.guard || 0.5) * 0.45;
  const bounce = Math.sin((f.phase || 0) * 7.2) * 0.04;
  b.legL.rotation.set((lead < 0 ? 0.22 : 0.06) + bounce * 0.15, lead * 0.04, 0.08);
  b.legR.rotation.set((lead > 0 ? 0.22 : 0.06) - bounce * 0.15, -lead * 0.04, -0.08);
  const jabL = lead < 0 ? jab : jab * 0.2;
  const jabR = lead > 0 ? jab : jab * 0.2;
  b.armL.rotation.set(-1.05 * g - jabL * 1.15 - hook * 0.2, 0.18 + hook * 0.5, 0.42 + hook * 0.35);
  b.armR.rotation.set(-1.05 * g - jabR * 1.15 - hook * 0.55, -0.18 - hook * 0.4, -0.42 - hook * 0.2);
  if (b.head) b.head.rotation.set(0.06 + (f.stun ? 0.12 : 0), 0, 0);
}

function resetFighter(f) {
  if (f.mesh.userData.combatDown) return;
  f.x = f.home.x;
  f.z = f.home.z;
  f.vx = 0;
  f.vz = 0;
  f.hp = START_HP + ((Math.random() * 3) | 0);
  f.cool = rand(PUNCH_MIN, PUNCH_MAX);
  f.punch = 0;
  f.punchSpec = null;
  f.stun = 0;
  f.guard = 0.8;
  f.acc = 0;
  f.mesh.position.set(f.home.x, 0, f.home.z);
  f.mesh.rotation.set(0, f.home.yaw, 0);
  poseStand(f, 0);
  setMode(f, "stand");
}

function drop(f, nx, nz, power) {
  const launch = 1.4 + power * 1.6;
  placeParts(f, nx * launch, 1.8 + power * 1.1, nz * launch);
  const torso = f.doll.parts[0];
  const head = f.doll.parts[1];
  torso.px -= nx * 0.14 * power;
  torso.pz -= nz * 0.14 * power;
  torso.py -= 0.05 * power;
  if (head) {
    head.px -= nx * 0.18 * power;
    head.pz -= nz * 0.18 * power;
    head.py -= 0.08 * power;
  }
  setMode(f, "ragdoll");
}

function pickPunch() {
  const r = Math.random();
  if (r < 0.55) return { kind: "jab", dur: 0.22, dmg: HIT_HP, power: 0.7, reach: 0.18 };
  if (r < 0.82) return { kind: "cross", dur: 0.34, dmg: HIT_HP * 1.5, power: 1.05, reach: 0.28 };
  return { kind: "hook", dur: 0.4, dmg: HIT_HP * 1.7, power: 1.2, reach: 0.32 };
}

function landHit(self, opp, spec) {
  const dx = opp.x - self.x;
  const dz = opp.z - self.z;
  const len = Math.hypot(dx, dz) || 1;
  const nx = dx / len;
  const nz = dz / len;
  self.vx -= nx * 0.6 * spec.power;
  self.vz -= nz * 0.6 * spec.power;
  if (opp.state !== "stand") {
    const t = opp.doll.parts[0];
    t.px -= nx * 0.12 * spec.power;
    t.pz -= nz * 0.12 * spec.power;
    t.py -= 0.04 * spec.power;
    return;
  }
  opp.vx += nx * 2.1 * spec.power;
  opp.vz += nz * 2.1 * spec.power;
  opp.stun = STUN + spec.power * 0.12;
  opp.hp -= spec.dmg;
  opp.guard = Math.max(0, (opp.guard || 0) - 0.35);
  if (opp.hp <= 0) drop(opp, nx, nz, spec.power);
}

function tickStand(f, opp, dt) {
  if (f.mesh.userData.combatDown || f.mesh.visible === false) return;
  f.phase = (f.phase || 0) + dt;
  f.stun = Math.max(0, (f.stun || 0) - dt);
  f.cool -= dt;
  f.guard = Math.min(1, (f.guard || 0.7) + dt * 0.25);

  const dx = opp.x - f.x;
  const dz = opp.z - f.z;
  const dist = Math.hypot(dx, dz) || 1;
  const nx = dx / dist;
  const nz = dz / dist;
  const tx = f.home.x + (opp.home.x - f.home.x) * 0.12;
  const tz = f.home.z + (opp.home.z - f.home.z) * 0.12;
  let wantX = 0;
  let wantZ = 0;
  if (dist > RANGE_OUT) {
    wantX = nx;
    wantZ = nz;
  } else if (dist < RANGE_IN) {
    wantX = -nx;
    wantZ = -nz;
  } else {
    wantX = -nz * (f.lead || 1) * 0.55;
    wantZ = nx * (f.lead || 1) * 0.55;
  }
  wantX += (tx - f.x) * 0.35;
  wantZ += (tz - f.z) * 0.35;
  const wl = Math.hypot(wantX, wantZ) || 1;
  const spd = f.stun > 0 ? 0.4 : 1.55;
  f.vx += (wantX / wl) * spd * 8 * dt;
  f.vz += (wantZ / wl) * spd * 8 * dt;
  f.vx *= Math.max(0, 1 - 7 * dt);
  f.vz *= Math.max(0, 1 - 7 * dt);
  const step = Math.hypot(f.vx, f.vz);
  if (step > 2.4) {
    f.vx *= 2.4 / step;
    f.vz *= 2.4 / step;
  }
  f.x += f.vx * dt;
  f.z += f.vz * dt;

  f.mesh.rotation.y = faceYaw(f, opp);

  if (f.stun <= 0 && f.cool <= 0 && dist < RANGE_OUT + 0.15 && dist > RANGE_IN - 0.25) {
    f.punchSpec = pickPunch();
    f.punch = f.punchSpec.dur;
    f.cool = rand(PUNCH_MIN, PUNCH_MAX) + f.punchSpec.dur;
    f.landed = false;
  }

  let jab = 0;
  let hook = 0;
  if (f.punch > 0 && f.punchSpec) {
    const dur = f.punchSpec.dur;
    f.punch = Math.max(0, f.punch - dt);
    const u = 1 - f.punch / dur;
    jab = Math.sin(u * Math.PI);
    if (f.punchSpec.kind === "hook") hook = Math.sin(u * Math.PI);
    if (!f.landed && u > 0.42 && u < 0.72 && dist < RANGE_OUT + 0.1) {
      f.landed = true;
      landHit(f, opp, f.punchSpec);
    }
  }

  const bounce = Math.abs(Math.sin(f.phase * 7.2)) * 0.018;
  f.mesh.position.set(f.x, bounce, f.z);
  f.mesh.rotation.x = f.stun > 0 ? -0.12 : 0;
  f.mesh.rotation.z = f.stun > 0 ? 0.08 * (f.lead || 1) : 0;
  poseBox(f, jab, hook);
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

function makeFighter(scene, x, z, yaw, look, name) {
  const mesh = ken(look);
  mesh.name = name;
  mesh.position.set(x, 0, z);
  mesh.rotation.y = yaw;
  mesh.userData.fight = true;
  mesh.userData.kind = "ken";
  mesh.userData.ageBand = "adult";
  mesh.userData.paintTarget = true;
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
    punchSpec: null,
    landed: false,
    stun: 0,
    guard: 0.8,
    phase: Math.random() * 6,
    acc: 0,
    lead: Math.random() < 0.5 ? -1 : 1,
    state: "stand",
  };
  poseStand(f, 0);
  return f;
}

function makePair(scene, site, lookA, lookB, i) {
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
    a: makeFighter(scene, ax, az, ay, lookA, `ken-fight-${i * 2}`),
    b: makeFighter(scene, bx, bz, by, lookB, `ken-fight-${i * 2 + 1}`),
    down: 0,
  };
}

/**
 * Two Ken pairs on the sand. Call `tick(dt)` from the frame loop.
 * @param {THREE.Scene} scene
 * @returns {{ tick: (dt: number) => void, meshes: THREE.Group[] }}
 */
export function spawnFights(scene) {
  const pairs = SITES.map((site, i) => makePair(scene, site, LOOKS[i * 2], LOOKS[i * 2 + 1], i));

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

  return {
    tick,
    meshes: pairs.flatMap((p) => [p.a.mesh, p.b.mesh]),
  };
}
