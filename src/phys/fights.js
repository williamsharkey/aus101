/**
 * Spontaneous Ken-on-Ken sand fights. Standing uses ken(); KO keeps the mesh
 * visible and floppy. A Baywatch nurse drags the victim to the shade-shack bed.
 */
import * as THREE from "three";
import { ken } from "../chars/npcs.js";
import { spawnBaywatchNurse } from "../chars/baywatchNurse.js";

const G = 16;
const BOUNCE = 0.18;
const GROUND_Y = 0;
const KO_WAIT = 0.5;
const STAND_S = 1.2;
const PUNCH_MIN = 0.28;
const PUNCH_MAX = 0.45;
const GAP = 1.85;
const RANGE_IN = 1.55;
const RANGE_OUT = 2.15;
const STEP = 1 / 60;
const DAMP = 0.978;
const HIT_HP = 1;
const START_HP = 9;
const CONSTRAINT_ITERS = 6;
const STUN = 0.28;
const DODGE_CHANCE = 0.25;
const DODGE_T = 0.32;

const YELLS = ["fight_yell_01", "fight_yell_02", "fight_yell_03", "fight_yell_04"];
const BARBS = [
  "fight_barb_01",
  "fight_barb_02",
  "fight_barb_03",
  "fight_barb_04",
  "fight_barb_05",
  "fight_barb_06",
  "fight_barb_07",
  "fight_barb_08",
  "fight_barb_09",
  "fight_barb_10",
  "fight_barb_11",
  "fight_barb_12",
  "fight_barb_13",
  "fight_barb_14",
  "fight_barb_15",
  "fight_barb_16",
];
const DODGE_VO = "fight_dodge_01";
const THANKS_VO = "ken_thanks_01";
const REMATCH_VO = "ken_rematch_01";
const NURSE_HOME = { x: 14.6, z: 20.7 };

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

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
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

function isKick(kind) {
  return kind === "roundhouse" || kind === "frontKick";
}

let playFn = null;
let sfxRef = null;
const liveMeshes = [];

export function setPlay(fn) {
  playFn = fn || null;
  for (const m of liveMeshes) m.userData.play = playFn;
}

export function setSfx(s) {
  sfxRef = s || null;
}

function fx(name) {
  const s = sfxRef;
  const fn = s?.[name];
  if (typeof fn !== "function") return;
  try {
    fn.call(s);
  } catch {
    /* audio locked */
  }
}

function voBusy() {
  return !!(playFn && playFn.busy);
}

function tryVo(id, mesh) {
  const fn = playFn || mesh?.userData?.play;
  if (!fn || voBusy()) return null;
  try {
    return fn(id, { gain: 1 });
  } catch {
    return null;
  }
}

function effortVo(mesh) {
  fx("fightYell");
  if (Math.random() < 0.22) tryVo(pick(YELLS), mesh);
}

function barbVo(pair, mesh) {
  if (voBusy()) return;
  tryVo(pick(BARBS), mesh);
  pair.hits = 0;
  pair.nextBarb = 2 + ((Math.random() * 3) | 0);
}

/** Wrap distal arm children onto an elbow hinge so a jab is not a stick. */
function ensureForearm(arm) {
  if (!arm) return null;
  if (arm.userData.forearmG !== undefined) return arm.userData.forearmG;
  const named = arm.getObjectByName("forearmG") || arm.getObjectByName("forearm");
  if (named && named.isGroup && named !== arm) {
    arm.userData.forearmG = named;
    return named;
  }
  const hand = arm.getObjectByName("hand");
  if (!hand || hand.parent !== arm) {
    arm.userData.forearmG = null;
    return null;
  }
  const hingeY = hand.position.y * (0.28 / 0.54);
  const hinge = new THREE.Group();
  hinge.name = "forearmG";
  hinge.position.y = hingeY;
  const kids = arm.children.slice();
  for (const c of kids) {
    if (c.position.y > hingeY + 0.01) continue;
    arm.remove(c);
    c.position.y -= hingeY;
    hinge.add(c);
  }
  arm.add(hinge);
  arm.userData.forearmG = hinge;
  return hinge;
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
  f.mesh.visible = true;
  f.doll.root.visible = false;
}

function dodgeEnv(f) {
  if (!(f.dodge > 0) || !f.dodgeDur) return 0;
  const u = 1 - f.dodge / f.dodgeDur;
  return Math.sin(Math.min(1, u) * Math.PI);
}

/** Guard / jab on the planted ken. Feet stay level on the sand. */
function poseStand(f, amt = 0, kind = "jab") {
  poseBox(f, amt, kind);
}

function poseBox(f, amt = 0, kind = "jab") {
  const b = f.mesh.userData.body;
  if (!b) return;
  if (kind === "limp") {
    const wiggle = Math.sin((f.phase || 0) * 2.2);
    if (b.legL) b.legL.rotation.set(-0.18 + wiggle * 0.06, 0.12, 0.72);
    if (b.legR) b.legR.rotation.set(0.42, -0.1, -0.88);
    const foreL = ensureForearm(b.armL);
    const foreR = ensureForearm(b.armR);
    if (b.armL) b.armL.rotation.set(-0.55, 0.22, 1.32);
    if (b.armR) b.armR.rotation.set(0.22 + wiggle * 0.1, -0.18, -1.42);
    if (foreL) foreL.rotation.set(-0.55, 0, 0.18);
    if (foreR) foreR.rotation.set(-0.32, 0, -0.22);
    if (b.head) b.head.rotation.set(0.42, 0.22, 0.16);
    return;
  }
  const lead = f.lead || 1;
  const g = 0.55 + (f.guard || 0.5) * 0.45;
  const bounce = Math.sin((f.phase || 0) * 7.2) * 0.04;
  const leftLead = lead < 0;
  const rh = kind === "roundhouse" ? amt : 0;
  const fk = kind === "frontKick" ? amt : 0;
  const duck = f.dodgeKind === "duck" ? dodgeEnv(f) : 0;
  const lean = f.dodgeKind === "lean" ? dodgeEnv(f) : 0;

  let legLx = (leftLead ? 0.22 : 0.06) + bounce * 0.15;
  let legRx = (leftLead ? 0.06 : 0.22) - bounce * 0.15;
  let legLy = lead * 0.04;
  let legRy = -lead * 0.04;
  let legLz = 0.08;
  let legRz = -0.08;

  if (rh) {
    if (leftLead) {
      legRx = -1.4 * rh;
      legRy = -0.85 * rh;
      legRz = -0.32 * rh;
      legLx = 0.18;
    } else {
      legLx = -1.4 * rh;
      legLy = 0.85 * rh;
      legLz = 0.32 * rh;
      legRx = 0.18;
    }
  } else if (fk) {
    if (leftLead) {
      legLx = -1.25 * fk;
      legLy = lead * 0.02;
      legRx = 0.22;
    } else {
      legRx = -1.25 * fk;
      legRy = -lead * 0.02;
      legLx = 0.22;
    }
  }

  if (b.legL) b.legL.rotation.set(legLx, legLy, legLz);
  if (b.legR) b.legR.rotation.set(legRx, legRy, legRz);

  const foreL = ensureForearm(b.armL);
  const foreR = ensureForearm(b.armR);
  const hasFore = !!(foreL && foreR);

  let armLx = -0.85 * g;
  let armLy = 0.22;
  let armLz = 0.55;
  let armRx = -0.85 * g;
  let armRy = -0.22;
  let armRz = -0.55;
  let fL = hasFore ? -1.45 * g : 0;
  let fR = hasFore ? -1.45 * g : 0;

  if (!hasFore) {
    armLx = -1.05 * g;
    armRx = -1.05 * g;
    armLz = 0.42;
    armRz = -0.42;
  }

  function extend(side, a, extraX, extraY, extraZ, unbend) {
    if (side < 0) {
      armLx += extraX * a;
      armLy += extraY * a;
      armLz += extraZ * a;
      fL += unbend * a;
    } else {
      armRx += extraX * a;
      armRy -= extraY * a;
      armRz -= extraZ * a;
      fR += unbend * a;
    }
  }

  if (kind === "jab") {
    extend(lead, amt, -0.85, 0.05, -0.28, 1.2);
  } else if (kind === "cross") {
    extend(-lead, amt, -1.05, 0.12, -0.38, 1.25);
  } else if (kind === "hook") {
    extend(lead, amt, -0.35, 1.05, 0.55, 0.35);
  } else if (kind === "slap") {
    extend(lead, amt, -0.7, 0.95, 0.85, 1.05);
  } else if (kind === "elbow") {
    extend(lead, amt, -0.55, 0.4, 0.45, -0.55);
  } else if (rh || fk) {
    armLx = -0.35;
    armRx = -0.35;
    armLz = rh ? 0.95 : 0.5;
    armRz = rh ? -0.95 : -0.5;
    armLy = rh ? 0.35 : 0.1;
    armRy = rh ? -0.35 : -0.1;
    fL = hasFore ? -0.7 : 0;
    fR = hasFore ? -0.7 : 0;
  }

  if (!hasFore) {
    if (kind === "jab" || kind === "cross") {
      const rear = kind === "cross";
      const side = rear ? -lead : lead;
      if (side < 0) {
        armLx -= amt * 0.55;
        armLz += amt * 0.2;
      } else {
        armRx -= amt * 0.55;
        armRz -= amt * 0.2;
      }
    }
  }

  if (b.armL) b.armL.rotation.set(armLx, armLy, armLz);
  if (b.armR) b.armR.rotation.set(armRx, armRy, armRz);
  if (foreL) foreL.rotation.set(fL, 0, lead < 0 ? 0.08 : 0);
  if (foreR) foreR.rotation.set(fR, 0, lead > 0 ? -0.08 : 0);

  const slap = f.slapHit || 0;
  const slapDir = f.slapDir || 1;
  const stunH = f.stun > 0 ? 0.12 : 0;
  if (b.head) {
    b.head.rotation.set(0.06 + stunH + duck * 0.25, slap * 0.95 * slapDir, slap * 0.5 * slapDir + lean * 0.15 * (f.dodgeSide || 1));
  }
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
  f.dodge = 0;
  f.dodgeDur = 0;
  f.dodgeKind = null;
  f.slapHit = 0;
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

function pickPunch(dist) {
  if (dist < RANGE_IN + 0.22 && Math.random() < 0.3) {
    return { kind: "elbow", dur: 0.2, dmg: HIT_HP * 1.35, power: 1.05, reach: 0.1 };
  }
  const r = Math.random();
  if (r < 0.24) return { kind: "jab", dur: 0.18, dmg: HIT_HP, power: 0.7, reach: 0.18 };
  if (r < 0.42) return { kind: "cross", dur: 0.26, dmg: HIT_HP * 1.5, power: 1.05, reach: 0.28 };
  if (r < 0.56) return { kind: "hook", dur: 0.3, dmg: HIT_HP * 1.6, power: 1.15, reach: 0.3 };
  if (r < 0.76) return { kind: "slap", dur: 0.24, dmg: HIT_HP * 1.15, power: 0.85, reach: 0.26 };
  if (r < 0.88) return { kind: "roundhouse", dur: 0.38, dmg: HIT_HP * 1.85, power: 1.35, reach: 0.5 };
  return { kind: "frontKick", dur: 0.32, dmg: HIT_HP * 1.5, power: 1.2, reach: 0.42 };
}

function startDodge(f) {
  f.dodge = DODGE_T;
  f.dodgeDur = DODGE_T;
  f.dodgeKind = Math.random() < 0.5 ? "duck" : "lean";
  f.dodgeSide = Math.random() < 0.5 ? -1 : 1;
  f.stun = 0;
  fx("fightWhoosh");
  tryVo(DODGE_VO, f.mesh);
}

function landHit(self, opp, spec, pair) {
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
  if (spec.kind === "slap") {
    opp.slapHit = 1;
    opp.slapDir = (self.lead || 1) > 0 ? 1 : -1;
    fx("fightSlap");
  } else {
    fx("fightOof");
  }
  if (pair) {
    pair.hits = (pair.hits || 0) + 1;
    if (pair.hits >= (pair.nextBarb || 3)) barbVo(pair, self.mesh);
  }
  if (opp.hp <= 0) {
    if (pair && pair.phase !== "fight") return;
    drop(opp, nx, nz, spec.power);
    if (pair) {
      pair.victim = opp;
      pair.winner = self;
      pair.phase = "down";
      pair.down = 0;
      pair.standT = 0;
      pair.thanks = false;
    }
  }
}

function tickStand(f, opp, dt, pair) {
  if (f.mesh.userData.combatDown || f.mesh.visible === false) return;
  f.phase = (f.phase || 0) + dt;
  f.stun = Math.max(0, (f.stun || 0) - dt);
  f.cool -= dt;
  f.guard = Math.min(1, (f.guard || 0.7) + dt * 0.25);
  f.dodge = Math.max(0, (f.dodge || 0) - dt);
  f.slapHit = Math.max(0, (f.slapHit || 0) - dt * 3.2);

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
  const spd = f.stun > 0 || f.dodge > 0 ? 0.4 : 1.55;
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

  if (opp.state === "stand" && f.stun <= 0 && f.dodge <= 0 && f.cool <= 0 && dist < RANGE_OUT + 0.4 && dist > RANGE_IN - 0.35) {
    f.punchSpec = pickPunch(dist);
    f.punch = f.punchSpec.dur;
    f.cool = rand(PUNCH_MIN, PUNCH_MAX) + f.punchSpec.dur;
    f.landed = false;
    fx("fightWhoosh");
    effortVo(f.mesh);
  }

  let amt = 0;
  let kind = "jab";
  if (f.punch > 0 && f.punchSpec) {
    const dur = f.punchSpec.dur;
    kind = f.punchSpec.kind;
    f.punch = Math.max(0, f.punch - dt);
    const u = 1 - f.punch / dur;
    amt = Math.sin(u * Math.PI);
    const kick = isKick(kind);
    const u0 = kick ? 0.48 : 0.38;
    const u1 = kick ? 0.8 : 0.7;
    const reach = RANGE_OUT + (f.punchSpec.reach || 0);
    if (!f.landed && u > u0 && u < u1 && dist < reach) {
      f.landed = true;
      const canDodge = opp.state === "stand" && opp.stun <= 0 && !(opp.dodge > 0);
      if (canDodge && Math.random() < DODGE_CHANCE) {
        startDodge(opp);
      } else if (opp.dodge > 0) {
        fx("fightWhoosh");
      } else {
        landHit(f, opp, f.punchSpec, pair);
      }
    }
  }

  const kickYaw = kind === "roundhouse" ? amt * 0.45 * (f.lead || 1) : 0;
  f.mesh.rotation.y = faceYaw(f, opp) + kickYaw;

  const denv = dodgeEnv(f);
  const bounce = Math.abs(Math.sin(f.phase * 7.2)) * 0.018;
  let y = bounce + (isKick(kind) ? 0.08 * amt : 0);
  let rx = f.stun > 0 ? -0.12 : amt * (kind === "elbow" ? -0.18 : -0.08);
  let rz = f.stun > 0 ? 0.08 * (f.lead || 1) : 0;
  if (f.dodgeKind === "duck" && denv) {
    y -= 0.28 * denv;
    rx = 0.55 * denv;
  } else if (f.dodgeKind === "lean" && denv) {
    rz = 0.5 * denv * (f.dodgeSide || 1);
    y -= 0.05 * denv;
    rx = 0.08 * denv;
  }
  f.mesh.position.set(f.x, y, f.z);
  f.mesh.rotation.x = rx;
  f.mesh.rotation.z = rz;
  poseBox(f, amt, kind);
}

function applyLimp(f, dt, followDoll) {
  f.phase = (f.phase || 0) + dt;
  const flop = 1.15 + Math.sin(f.phase * 2.4) * 0.08;
  if (followDoll) {
    const t = f.doll.parts[0];
    f.x = t.x;
    f.z = t.z;
    f.mesh.position.set(t.x, 0.1, t.z);
  } else {
    f.x = f.mesh.position.x;
    f.z = f.mesh.position.z;
  }
  f.mesh.rotation.x = flop;
  f.mesh.rotation.z = Math.sin(f.phase * 1.7) * 0.12;
  poseBox(f, 1, "limp");
}

function tickRagdoll(f, dt) {
  f.acc += Math.min(dt, 0.05);
  while (f.acc >= STEP) {
    f.acc -= STEP;
    integrate(f.doll.parts, STEP);
    for (let i = 0; i < CONSTRAINT_ITERS; i++) constrain(f.doll.parts);
    ground(f.doll.parts);
  }
  applyLimp(f, dt, true);
}

function tickIdle(f, opp, dt, pair) {
  if (f.mesh.userData.combatDown) return;
  f.phase = (f.phase || 0) + dt;
  f.punch = 0;
  f.punchSpec = null;
  f.stun = Math.max(0, (f.stun || 0) - dt);
  f.dodge = 0;
  f.vx *= Math.max(0, 1 - 8 * dt);
  f.vz *= Math.max(0, 1 - 8 * dt);
  f.x += f.vx * dt;
  f.z += f.vz * dt;
  f.cool -= dt;
  f.guard = Math.min(1, (f.guard || 0.7) + dt * 0.2);
  f.slapHit = Math.max(0, (f.slapHit || 0) - dt * 3.2);
  const bounce = Math.abs(Math.sin(f.phase * 7.2)) * 0.022;
  f.mesh.position.set(f.x, bounce, f.z);
  f.mesh.rotation.set(0, faceYaw(f, opp), 0);
  poseBox(f, 0, "jab");
  if (f.cool <= 0) {
    if (Math.random() < 0.4) barbVo(pair, f.mesh);
    f.cool = rand(2.4, 4.8);
  }
}

function tickStandUp(pair, f, dt) {
  if (!pair.thanks) {
    pair.thanks = true;
    pair.standT = 0;
    pair.standFromX = f.mesh.rotation.x;
    pair.standFromZ = f.mesh.rotation.z;
    pair.standFromY = f.mesh.position.y;
    tryVo(THANKS_VO, f.mesh);
  }
  pair.standT += dt;
  const u = Math.min(1, pair.standT / STAND_S);
  f.mesh.rotation.x = (pair.standFromX || 0) * (1 - u);
  f.mesh.rotation.z = (pair.standFromZ || 0) * (1 - u);
  f.mesh.position.y = (pair.standFromY ?? 0.1) * (1 - u);
  f.x = f.mesh.position.x;
  f.z = f.mesh.position.z;
  if (u < 0.55) poseBox(f, 1, "limp");
  else poseStand(f, 0);
  if (u >= 1) {
    f.mesh.rotation.x = 0;
    f.mesh.rotation.z = 0;
    setMode(f, "stand");
    pair.phase = "walkback";
  }
}

function tickWalkHome(f, opp, dt) {
  f.phase = (f.phase || 0) + dt;
  const dx = f.home.x - f.x;
  const dz = f.home.z - f.z;
  const dist = Math.hypot(dx, dz);
  f.mesh.rotation.x = 0;
  f.mesh.rotation.z = 0;
  if (dist < 0.16) {
    f.x = f.home.x;
    f.z = f.home.z;
    f.mesh.position.set(f.home.x, 0, f.home.z);
    f.mesh.rotation.y = faceYaw(f, opp);
    poseStand(f, 0);
    return true;
  }
  const spd = 2.4;
  f.x += (dx / dist) * spd * dt;
  f.z += (dz / dist) * spd * dt;
  f.mesh.position.set(f.x, Math.abs(Math.sin(f.phase * 9)) * 0.04, f.z);
  f.mesh.rotation.y = Math.atan2(dx, dz);
  const swing = Math.sin(f.phase * 9);
  const b = f.mesh.userData.body;
  if (b?.legL) b.legL.rotation.set(-swing * 0.55, 0, 0.08);
  if (b?.legR) b.legR.rotation.set(swing * 0.55, 0, -0.08);
  if (b?.armL) b.armL.rotation.set(swing * 0.4, 0.1, 0.35);
  if (b?.armR) b.armR.rotation.set(-swing * 0.4, -0.1, -0.35);
  return false;
}

function nurseReady(n) {
  if (!n) return false;
  if (typeof n.busy === "boolean") return !n.busy;
  return !n.phase || n.phase === "idle";
}

function stubNurse(scene) {
  const mesh = new THREE.Group();
  mesh.name = "baywatch-nurse";
  mesh.userData.kind = "babe";
  mesh.userData.ageBand = "adult";
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.88, 4, 8), std(0xe23b3b));
  body.position.y = 0.86;
  body.castShadow = true;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), std(0xe0b08a));
  head.position.y = 1.5;
  head.castShadow = true;
  mesh.add(body, head);
  mesh.position.set(NURSE_HOME.x, 0, NURSE_HOME.z);
  scene.add(mesh);
  return {
    mesh,
    phase: "idle",
    t: 0,
    dispatch() {
      if (this.phase !== "idle") return;
      this.phase = "run";
      this.t = 0;
    },
    tick(dt) {
      if (this.phase === "idle") return;
      this.t += dt;
      if (this.t >= 5) this.phase = "idle";
      else if (this.t >= 3.5) this.phase = "done";
      else if (this.t >= 2.2) this.phase = "revive";
    },
  };
}

function makeNurse(scene) {
  if (typeof spawnBaywatchNurse === "function") {
    try {
      const n = spawnBaywatchNurse(scene);
      if (n && n.mesh && typeof n.tick === "function" && typeof n.dispatch === "function") return n;
    } catch {
      /* module missing or threw */
    }
  }
  return stubNurse(scene);
}

function finishRematch(pair) {
  const victim = pair.victim;
  const winner = pair.winner;
  if (victim) {
    tryVo(REMATCH_VO, victim.mesh);
    resetFighter(victim);
  }
  if (winner) {
    if (winner.state === "ragdoll") {
      winner.mesh.rotation.set(0, winner.home.yaw, 0);
      poseStand(winner, 0);
      setMode(winner, "stand");
    }
    winner.hp = START_HP + ((Math.random() * 3) | 0);
    winner.punch = 0;
    winner.punchSpec = null;
    winner.stun = 0;
    winner.cool = rand(PUNCH_MIN, PUNCH_MAX);
  }
  pair.phase = "fight";
  pair.victim = null;
  pair.winner = null;
  pair.down = 0;
  pair.standT = 0;
  pair.thanks = false;
  pair.hits = 0;
  pair.nextBarb = 2 + ((Math.random() * 3) | 0);
}

function tickWinner(winner, victim, dt, pair) {
  if (winner.state === "ragdoll") tickRagdoll(winner, dt);
  else tickIdle(winner, victim, dt, pair);
}

function tickPair(pair, dt, nurse) {
  if (pair.phase === "fight") {
    if (pair.a.state === "stand") tickStand(pair.a, pair.b, dt, pair);
    if (pair.b.state === "stand") tickStand(pair.b, pair.a, dt, pair);
    if (pair.phase === "fight") return;
  }
  const victim = pair.victim;
  const winner = pair.winner;
  if (!victim || !winner) {
    pair.phase = "fight";
    return;
  }

  if (pair.phase === "down") {
    tickRagdoll(victim, dt);
    tickWinner(winner, victim, dt, pair);
    pair.down += dt;
    if (pair.down >= KO_WAIT && nurse && nurseReady(nurse)) {
      nurse.dispatch(victim.mesh, { play: playFn });
      if (nurse.phase && nurse.phase !== "idle") pair.phase = "rescue";
    }
    return;
  }
  if (pair.phase === "rescue") {
    const np = nurse?.phase;
    if (pair.thanks || np === "revive" || np === "done") tickStandUp(pair, victim, dt);
    else applyLimp(victim, dt, false);
    tickWinner(winner, victim, dt, pair);
    return;
  }
  if (pair.phase === "walkback") {
    tickWinner(winner, victim, dt, pair);
    if (tickWalkHome(victim, winner, dt)) finishRematch(pair);
  }
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
  mesh.userData.play = playFn;
  scene.add(mesh);
  liveMeshes.push(mesh);
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
    dodge: 0,
    dodgeDur: 0,
    dodgeKind: null,
    dodgeSide: 1,
    slapHit: 0,
    slapDir: 1,
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
    phase: "fight",
    victim: null,
    winner: null,
    down: 0,
    standT: 0,
    thanks: false,
    hits: 0,
    nextBarb: 2 + ((Math.random() * 3) | 0),
  };
}

/**
 * Two Ken pairs on the sand. Call `tick(dt)` from the frame loop.
 * @param {THREE.Scene} scene
 * @param {{ play?: Function, sfx?: object }} [opts]
 * @returns {{ tick: (dt: number) => void, meshes: THREE.Group[], setPlay: Function, setSfx: Function }}
 */
export function spawnFights(scene, opts = {}) {
  if (typeof opts.play === "function") setPlay(opts.play);
  if (opts.sfx) setSfx(opts.sfx);

  const pairs = SITES.map((site, i) => makePair(scene, site, LOOKS[i * 2], LOOKS[i * 2 + 1], i));
  const nurse = makeNurse(scene);

  function tick(dt) {
    if (!(dt > 0)) return;
    const h = Math.min(dt, 0.05);
    nurse?.tick?.(h);
    for (const pair of pairs) tickPair(pair, h, nurse);
  }

  const meshes = pairs.flatMap((p) => [p.a.mesh, p.b.mesh]);
  if (nurse?.mesh) {
    meshes.push(nurse.mesh);
    liveMeshes.push(nurse.mesh);
    nurse.mesh.userData.play = playFn;
  }

  return {
    tick,
    meshes,
    setPlay,
    setSfx,
  };
}
