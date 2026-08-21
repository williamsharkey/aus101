/**
 * Tripod influencers — one babe, one Ken. Plant a phone, talk at it, recast
 * every ~2 min. Phone screen is a live RenderTarget selfie of the talent.
 */
import * as THREE from "three";
import { ken, babe } from "../chars/npcs.js";
import { armIK } from "./gadgets.js";

const SAND = { minX: -20, maxX: 22, minZ: -6, maxZ: 12 };
const MOVE_S = 120;
const NEAR_RT = 22;
const FIGHT_R = 10;
const VOICE_R = 11;
const WALK = 1.18;
const STAND_MIN = 1.2;
const STAND_MAX = 1.6;
const RT_W = 256;
const RT_H = 448;
const PACK_S = 1.45;
const SETUP_S = 1.7;

/** Surf club plus planted props that sit in this sand band. */
const BLOCKS = [
  { x0: -22.6, x1: -13.3, z0: 10.5, z1: 17.4 },
  { x0: 14.4, x1: 16.9, z0: 3.0, z1: 5.4 },
  { x0: 10.4, x1: 13.9, z0: 6.4, z1: 9.6 },
  { x0: 3.3, x1: 5.7, z0: 9.6, z1: 12.2 },
  { x0: -7.4, x1: -4.6, z0: 3.7, z1: 6.3 },
  { x0: 3.7, x1: 6.4, z0: 1.7, z1: 4.4 },
];

const HOME = [
  { x: 18.6, z: 0.8, yaw: -0.55, stand: 1.42 },
  { x: -16.4, z: 3.6, yaw: 1.05, stand: 1.38 },
];

export const INF_LINES = {
  babe: [
    "inf_f_01",
    "inf_f_02",
    "inf_f_03",
    "inf_f_04",
    "inf_f_05",
    "inf_f_06",
    "inf_f_07",
    "inf_f_08",
    "inf_f_09",
    "inf_f_10",
  ],
  ken: [
    "inf_m_01",
    "inf_m_02",
    "inf_m_03",
    "inf_m_04",
    "inf_m_05",
    "inf_m_06",
    "inf_m_07",
    "inf_m_08",
    "inf_m_09",
    "inf_m_10",
  ],
  babeFight: ["inf_f_fight_01", "inf_f_fight_02", "inf_f_fight_03"],
  kenFight: ["inf_m_fight_01", "inf_m_fight_02", "inf_m_fight_03"],
};

const _head = new THREE.Vector3();
const _hand = new THREE.Vector3();
const _clear = new THREE.Color();

function rand(a, b) {
  return a + Math.random() * (b - a);
}

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

function distXZ(a, b) {
  if (!a || !b) return Infinity;
  return Math.hypot((a.x ?? 0) - (b.x ?? 0), (a.z ?? 0) - (b.z ?? 0));
}

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function blocked(x, z) {
  if (x < SAND.minX || x > SAND.maxX || z < SAND.minZ || z > SAND.maxZ) return true;
  for (const b of BLOCKS) {
    if (x >= b.x0 && x <= b.x1 && z >= b.z0 && z <= b.z1) return true;
  }
  return false;
}

function pickSpot(other, from) {
  for (let i = 0; i < 28; i++) {
    const x = rand(SAND.minX + 0.8, SAND.maxX - 0.8);
    const z = rand(SAND.minZ + 0.8, SAND.maxZ - 0.8);
    if (blocked(x, z)) continue;
    if (other && distXZ({ x, z }, other) < 7.2) continue;
    const yaw = rand(-Math.PI, Math.PI);
    const stand = rand(STAND_MIN, STAND_MAX);
    const at = talentAt({ x, z, yaw, stand });
    if (blocked(at.x, at.z)) continue;
    if (from) {
      const d = distXZ({ x, z }, from);
      if (d < 7.5 || d > 22) continue;
    }
    return { x, z, yaw, stand };
  }
  const h = HOME[from && from.x > 0 ? 1 : 0];
  return { x: h.x, z: h.z, yaw: h.yaw, stand: h.stand };
}

function talentAt(spot) {
  return {
    x: spot.x + Math.sin(spot.yaw) * spot.stand,
    z: spot.z + Math.cos(spot.yaw) * spot.stand,
  };
}

function makeRT() {
  const rt = new THREE.WebGLRenderTarget(RT_W, RT_H, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: true,
    stencilBuffer: false,
    generateMipmaps: false,
  });
  rt.texture.colorSpace = THREE.SRGBColorSpace;
  return rt;
}

function makePhone(rt) {
  const g = new THREE.Group();
  g.name = "inf-phone";
  const w = 0.072;
  const h = 0.148;
  const d = 0.008;
  const shell = std(0x16161a, { roughness: 0.4, metalness: 0.32 });
  const rail = std(0x9aa2ac, { roughness: 0.24, metalness: 0.86 });
  g.add(shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), shell)));
  const rim = shadow(new THREE.Mesh(new THREE.BoxGeometry(w + 0.004, h + 0.004, d * 0.55), rail));
  rim.position.z = -0.001;
  g.add(rim);

  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(w - 0.008, h - 0.014),
    new THREE.MeshBasicMaterial({ map: rt.texture, toneMapped: false })
  );
  screen.name = "inf-screen";
  screen.position.z = d * 0.5 + 0.0009;
  screen.scale.x = -1;
  g.add(screen);

  const led = new THREE.Mesh(
    new THREE.SphereGeometry(0.0036, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0x3a0808, toneMapped: false })
  );
  led.position.set(w * 0.3, h * 0.41, d * 0.5 + 0.002);
  g.add(led);

  const cam = new THREE.PerspectiveCamera(52, RT_W / RT_H, 0.1, 16);
  cam.name = "inf-cam";
  cam.position.set(0, 0.012, 0.055);
  cam.rotation.y = Math.PI;
  g.add(cam);

  g.userData.cam = cam;
  g.userData.screen = screen;
  g.userData.led = led;
  return g;
}

function setSplay(tripod, splay) {
  const pivots = tripod.userData.legPivots;
  if (!pivots) return;
  for (const p of pivots) p.rotation.z = splay;
}

function makeTripod(rt) {
  const g = new THREE.Group();
  g.name = "inf-tripod";
  const black = std(0x1c1c22, { roughness: 0.36, metalness: 0.58 });
  const rubber = std(0x101014, { roughness: 0.92 });
  const chrome = std(0xb0b6bc, { roughness: 0.28, metalness: 0.78 });

  const col = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 1.18, 8), black));
  col.position.y = 0.7;
  g.add(col);

  const pivots = [];
  for (let i = 0; i < 3; i++) {
    const pivot = new THREE.Group();
    pivot.position.y = 1.26;
    pivot.rotation.y = (i * Math.PI * 2) / 3;
    pivot.rotation.z = 0.34;
    const leg = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.015, 1.34, 6), black));
    leg.position.y = -0.67;
    const foot = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), rubber));
    foot.position.y = -1.33;
    pivot.add(leg, foot);
    g.add(pivot);
    pivots.push(pivot);
  }

  const head = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.068, 0.036, 0.05), chrome));
  head.position.y = 1.34;
  g.add(head);
  const shoe = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.028), black));
  shoe.position.set(0, 1.38, 0.01);
  g.add(shoe);

  const phone = makePhone(rt);
  phone.position.set(0, 1.47, 0.012);
  phone.rotation.x = -0.1;
  g.add(phone);

  g.userData.legPivots = pivots;
  g.userData.phone = phone;
  g.userData.cam = phone.userData.cam;
  g.userData.led = phone.userData.led;
  return g;
}

function poseWalk(mesh, phase, amp) {
  const b = mesh?.userData?.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.x = -swing * 0.55 * amp;
  b.legR.rotation.x = swing * 0.55 * amp;
}

function poseTalk(mesh, t, kind) {
  const b = mesh?.userData?.body;
  if (!b) return;
  if (b.legL) b.legL.rotation.x = 0;
  if (b.legR) b.legR.rotation.x = 0;
  const w = t * 3.1;
  const jab = Math.sin(w) * 0.07;
  const lift = 0.5 + (kind === "babe" ? 0.08 : 0);
  _hand.set(0.2 + Math.sin(w * 0.7) * 0.05, 1.22 + lift * 0.08 + jab, 0.28 + Math.abs(Math.sin(w)) * 0.06);
  armIK(mesh, 1, _hand, 0.55);
  _hand.set(-0.16 + Math.cos(w * 0.55) * 0.04, 1.12 + Math.sin(w * 1.3) * 0.05, 0.22);
  armIK(mesh, -1, _hand, -0.4);
  if (b.head) {
    b.head.rotation.x = 0.08 + Math.sin(t * 2.4) * 0.04;
    b.head.rotation.y = Math.sin(t * 1.1) * 0.08;
    b.head.rotation.z = Math.sin(t * 1.7) * 0.05;
  }
  mesh.rotation.z = Math.sin(t * 1.4) * 0.03;
}

function poseCarry(mesh, phase) {
  poseWalk(mesh, phase, 1);
  _hand.set(0.2, 0.92, 0.16);
  armIK(mesh, 1, _hand, 0.85);
  _hand.set(-0.12, 1.05, 0.08);
  armIK(mesh, -1, _hand, -0.25);
  const b = mesh.userData.body;
  if (b?.head) {
    b.head.rotation.x = 0.12;
    b.head.rotation.y = 0;
    b.head.rotation.z = Math.sin(phase * 0.4) * 0.04;
  }
  mesh.rotation.z = 0;
}

function posePack(mesh, u) {
  const b = mesh?.userData?.body;
  if (!b) return;
  const bend = (1 - Math.abs(u * 2 - 1)) * 0.38;
  if (b.legL) b.legL.rotation.x = -bend * 0.35;
  if (b.legR) b.legR.rotation.x = -bend * 0.28;
  _hand.set(0.16, 0.55 + (1 - u) * 0.5, 0.22);
  armIK(mesh, 1, _hand, 0.7);
  _hand.set(-0.14, 0.7 + u * 0.2, 0.18);
  armIK(mesh, -1, _hand, -0.35);
  if (b.head) b.head.rotation.x = 0.28 * (1 - Math.abs(u * 2 - 1));
  mesh.rotation.z = 0;
}

function plant(inf, scene, spot) {
  inf.spot = spot;
  if (inf.tripod.parent !== scene) scene.attach(inf.tripod);
  inf.tripod.scale.set(1, 1, 1);
  inf.tripod.position.set(spot.x, 0, spot.z);
  inf.tripod.rotation.set(0, spot.yaw, 0);
  setSplay(inf.tripod, 0.34);
  const at = talentAt(spot);
  inf.talent.position.set(at.x, 0, at.z);
  inf.talent.rotation.y = spot.yaw + Math.PI;
  inf.talent.rotation.z = 0;
}

function packOnto(inf) {
  inf.talent.attach(inf.tripod);
  inf.tripod.position.set(0.18, 0.78, 0.14);
  inf.tripod.rotation.set(-1.05, 0.35, 0.18);
  inf.tripod.scale.set(0.78, 0.78, 0.78);
  setSplay(inf.tripod, 0.06);
}

function fightMeshes(scene, extra) {
  const src = extra?.fights?.meshes || (Array.isArray(extra?.meshes) && extra.tick ? extra.meshes : null);
  if (src) return src;
  const out = [];
  for (let i = 0; i < 4; i++) {
    const m = scene.getObjectByName(`ken-fight-${i}`);
    if (m) out.push(m);
  }
  return out;
}

function fightsNear(inf, scene, extra) {
  const here = inf.talent.position;
  let n = 0;
  for (const m of fightMeshes(scene, extra)) {
    if (!m || m.visible === false || m.userData?.combatDown) continue;
    if (distXZ(here, m.position) <= FIGHT_R) n += 1;
  }
  return n >= 2;
}

function playFn(extra) {
  if (typeof extra?.play === "function") return extra.play;
  if (typeof extra?.voice?.play === "function") return extra.voice.play.bind(extra.voice);
  return null;
}

function nextLine(inf, fighting) {
  const fightIds = inf.kind === "babe" ? INF_LINES.babeFight : INF_LINES.kenFight;
  const vanity = inf.kind === "babe" ? INF_LINES.babe : INF_LINES.ken;
  const pool = fighting && Math.random() < 0.72 ? fightIds : vanity;
  let id = pick(pool);
  if (pool.length > 1 && id === inf.lastId) id = pick(pool);
  inf.lastId = id;
  return id;
}

function falloff(d) {
  return 1 / (1 + Math.pow(d / 1.25, 2.6));
}

function stopVo(inf) {
  try {
    inf.handle?.fadeOut?.(0.08);
  } catch {
    /* already stopped */
  }
  inf.handle = null;
}

function speak(inf, t, playerPos, extra, scene) {
  const play = playFn(extra);
  if (!play) {
    inf.gapUntil = t + 4;
    return;
  }
  const d = distXZ(playerPos, inf.talent.position);
  if (d > VOICE_R) {
    inf.gapUntil = t + 0.8;
    return;
  }
  const id = nextLine(inf, fightsNear(inf, scene, extra));
  const handle = play(id, { gain: Math.min(1, falloff(d) * 1.05), pos: inf.talent.position });
  inf.handle = handle;
  inf.gapUntil = t + 16;
  handle?.ready?.then?.((ok) => {
    const now = inf.lastT ?? t;
    if (!ok) {
      inf.gapUntil = now + 3;
      return;
    }
    const dur = (handle.duration || 8000) / 1000;
    inf.gapUntil = now + dur + rand(1.4, 2.6);
  });
}

function lookCam(inf) {
  const cam = inf.tripod.userData.cam;
  const body = inf.talent.userData.body;
  inf.talent.getWorldPosition(_head);
  _head.y += (body?.headY ?? 1.55) - 0.04;
  cam.lookAt(_head);
}

function renderSelfie(inf, renderer, scene) {
  const phone = inf.tripod.userData.phone;
  const cam = inf.tripod.userData.cam;
  if (!renderer || !cam) return;
  phone.updateWorldMatrix(true, true);
  lookCam(inf);
  const prevRT = renderer.getRenderTarget();
  const prevAuto = renderer.autoClear;
  const prevShadow = renderer.shadowMap.enabled;
  const prevAlpha = renderer.getClearAlpha();
  renderer.getClearColor(_clear);
  phone.visible = false;
  renderer.autoClear = true;
  renderer.shadowMap.enabled = false;
  renderer.setRenderTarget(inf.rt);
  renderer.render(scene, cam);
  phone.visible = true;
  renderer.shadowMap.enabled = prevShadow;
  renderer.autoClear = prevAuto;
  renderer.setClearColor(_clear, prevAlpha);
  renderer.setRenderTarget(prevRT);
}

function pulseLed(inf, t, on) {
  const led = inf.tripod.userData.led;
  if (!led?.material) return;
  if (!on) {
    led.material.color.setHex(0x3a0808);
    return;
  }
  const blink = Math.sin(t * 8) > 0.15;
  led.material.color.setHex(blink ? 0xff2a2a : 0x4a0a0a);
}

function makeOne(scene, kind, look, name, home, voDelay, stay0) {
  const rt = makeRT();
  const talent = kind === "babe" ? babe(look) : ken(look);
  talent.name = name;
  talent.userData.kind = kind;
  talent.userData.ageBand = "adult";
  talent.userData.paintTarget = true;
  talent.userData.hasGadget = true;
  talent.userData.influencer = true;
  const tripod = makeTripod(rt);
  tripod.name = `inf-tripod-${kind}`;
  scene.add(talent, tripod);
  const inf = {
    kind,
    talent,
    tripod,
    rt,
    spot: home,
    state: "talk",
    phaseT: 0,
    stay: stay0,
    walkPhase: 0,
    dest: home,
    lastId: "",
    handle: null,
    gapUntil: voDelay,
    lastT: null,
  };
  plant(inf, scene, home);
  return inf;
}

function tickOne(inf, other, renderer, scene, t, playerPos, extra, dt) {
  const mesh = inf.talent;
  if (mesh.userData.combatDown || mesh.visible === false) {
    if (inf.tripod.parent === mesh) scene.attach(inf.tripod);
    stopVo(inf);
    pulseLed(inf, t, false);
    return;
  }
  if (mesh.userData.flee) {
    pulseLed(inf, t, inf.state === "talk");
    return;
  }

  inf.stay += dt;
  inf.phaseT += dt;

  if (inf.state === "talk" && inf.stay >= MOVE_S) {
    stopVo(inf);
    inf.state = "pack";
    inf.phaseT = 0;
    inf.dest = pickSpot(other.talent.position, inf.spot);
  }

  if (inf.state === "pack") {
    const u = clamp(inf.phaseT / PACK_S, 0, 1);
    posePack(mesh, u);
    setSplay(inf.tripod, 0.34 - u * 0.28);
    if (u >= 1) {
      packOnto(inf);
      inf.state = "walk";
      inf.phaseT = 0;
    }
  } else if (inf.state === "walk") {
    const dest = talentAt(inf.dest);
    const dx = dest.x - mesh.position.x;
    const dz = dest.z - mesh.position.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.28) {
      inf.state = "setup";
      inf.phaseT = 0;
      plant(inf, scene, inf.dest);
    } else {
      const step = WALK * dt;
      mesh.position.x += (dx / d) * step;
      mesh.position.z += (dz / d) * step;
      mesh.position.x = clamp(mesh.position.x, SAND.minX, SAND.maxX);
      mesh.position.z = clamp(mesh.position.z, SAND.minZ, SAND.maxZ);
      mesh.position.y = 0;
      mesh.rotation.y = Math.atan2(dx, dz);
      inf.walkPhase += dt * 7.2;
      poseCarry(mesh, inf.walkPhase);
    }
  } else if (inf.state === "setup") {
    const u = clamp(inf.phaseT / SETUP_S, 0, 1);
    setSplay(inf.tripod, 0.06 + u * 0.28);
    posePack(mesh, 1 - u);
    mesh.rotation.y = inf.spot.yaw + Math.PI;
    if (u >= 1) {
      plant(inf, scene, inf.spot);
      inf.state = "talk";
      inf.stay = 0;
      inf.phaseT = 0;
      inf.gapUntil = t + 0.45;
    }
  } else {
    poseTalk(mesh, t, inf.kind);
    mesh.position.y = Math.abs(Math.sin(t * 2.2)) * 0.01;
    mesh.rotation.y = inf.spot.yaw + Math.PI;
    if (t >= inf.gapUntil) speak(inf, t, playerPos, extra, scene);
  }

  pulseLed(inf, t, inf.state === "talk");
}

/**
 * @param {THREE.Scene} scene
 * @param {THREE.WebGLRenderer} [renderer]
 * @returns {{ tick: Function, meshes: THREE.Group[] }}
 */
export function spawnInfluencers(scene, renderer) {
  const gal = makeOne(
    scene,
    "babe",
    { hair: 0xf4ead0, bikini: 0xff4da6, skin: 0xe8c4a0 },
    "inf-babe",
    HOME[0],
    8.5,
    0
  );
  const lad = makeOne(
    scene,
    "ken",
    { hair: 0xffef9a, shorts: 0x6b32e8, skin: 0xd4a06a },
    "inf-ken",
    HOME[1],
    14,
    52
  );
  const pair = [gal, lad];
  let flip = 0;

  return {
    meshes: [gal.talent, lad.talent],
    tick(rend, scn, t, playerPos, extra) {
      const scene3 = scn || scene;
      const r = rend || renderer;
      for (const inf of pair) {
        const dt = inf.lastT == null ? 0 : clamp(t - inf.lastT, 0, 0.05);
        inf.lastT = t;
        const other = inf === gal ? lad : gal;
        tickOne(inf, other, r, scene3, t, playerPos, extra, dt);
      }
      if (!r || !playerPos) return;
      flip += 1;
      if (flip % 4 !== 0) return;
      const live = [];
      for (const inf of pair) {
        if (inf.state !== "talk" && inf.state !== "setup") continue;
        if (inf.talent.userData.combatDown || inf.talent.visible === false) continue;
        if (distXZ(playerPos, inf.talent.position) > 12) continue;
        live.push(inf);
      }
      if (!live.length) return;
      renderSelfie(live[(flip / 4) & 1] || live[0], r, scene3);
    },
  };
}
