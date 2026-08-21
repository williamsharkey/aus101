/**
 * T2-intro hunter-killer transports. After a cop wave is wiped they fly in
 * from the ocean and the flanks, hover, and drop officers + cops onto the sand.
 *
 * Shared GEO/MAT only — no texture atlases. Hull is ~8 m, dull metal, red chin.
 */
import * as THREE from "three";

/** Inbound yaw (rad). 0 = from ocean (−Z); π = from behind the boardwalk. */
export const APPROACH_HEADINGS = [0, 0.7, -0.7, 1.4, -1.4, Math.PI];

const APPROACH_R = 68;
const HOVER_R = 12;
const CRUISE_Y0 = 14;
const CRUISE_Y1 = 22;
const HOVER_Y = 5.8;
const CRUISE = 42;
const STAGGER = 0.4;
const HOVER_SETTLE = 0.85;
const POD_GAP = 0.22;
const POD_G = 15;
const LINGER_S = 6.4;
const SPAWN_WAIT = 0.28;
const LIVE_MAX = 8;

const GEO = {
  body: new THREE.BoxGeometry(1.48, 0.58, 5.4),
  spine: new THREE.BoxGeometry(0.52, 0.78, 4.6),
  nose: new THREE.BoxGeometry(1.02, 0.4, 2.05),
  blade: new THREE.BoxGeometry(0.72, 0.22, 1.55),
  chin: new THREE.BoxGeometry(0.48, 0.24, 1.35),
  tail: new THREE.BoxGeometry(1.18, 0.34, 1.7),
  wing: new THREE.BoxGeometry(6.6, 0.1, 2.7),
  wingIn: new THREE.BoxGeometry(3.4, 0.16, 3.2),
  tip: new THREE.BoxGeometry(0.85, 0.07, 1.55),
  fin: new THREE.BoxGeometry(0.07, 0.62, 1.05),
  keel: new THREE.BoxGeometry(0.22, 0.2, 3.8),
  nacelle: new THREE.CylinderGeometry(0.3, 0.36, 2.35, 8),
  intake: new THREE.CylinderGeometry(0.26, 0.32, 0.32, 8),
  exhaust: new THREE.CylinderGeometry(0.2, 0.16, 0.3, 8),
  canopy: new THREE.BoxGeometry(0.68, 0.2, 1.12),
  sensor: new THREE.SphereGeometry(0.1, 8, 6),
  ring: new THREE.CylinderGeometry(0.15, 0.15, 0.05, 8),
  bay: new THREE.BoxGeometry(0.95, 0.07, 2.15),
  hatch: new THREE.BoxGeometry(0.46, 0.045, 1.9),
  strut: new THREE.BoxGeometry(0.1, 0.26, 0.1),
  gun: new THREE.BoxGeometry(0.12, 0.1, 0.55),
  pod: new THREE.CapsuleGeometry(0.22, 0.7, 3, 6),
  pip: new THREE.SphereGeometry(0.05, 6, 4),
  dust: new THREE.RingGeometry(0.4, 1.15, 16),
  shadow: new THREE.CircleGeometry(1, 24),
  wash: new THREE.RingGeometry(0.9, 3.2, 20),
  beam: new THREE.CylinderGeometry(0.06, 0.42, 1, 8, 1, true),
};

const MAT = {
  hull: new THREE.MeshStandardMaterial({
    color: 0x2a2c31,
    metalness: 0.58,
    roughness: 0.52,
  }),
  dark: new THREE.MeshStandardMaterial({
    color: 0x14161a,
    metalness: 0.42,
    roughness: 0.62,
  }),
  panel: new THREE.MeshStandardMaterial({
    color: 0x3a3d43,
    metalness: 0.48,
    roughness: 0.48,
  }),
  nacelle: new THREE.MeshStandardMaterial({
    color: 0x1a1c20,
    metalness: 0.64,
    roughness: 0.38,
  }),
  canopy: new THREE.MeshStandardMaterial({
    color: 0x0a0c10,
    metalness: 0.82,
    roughness: 0.14,
  }),
  sensor: new THREE.MeshStandardMaterial({
    color: 0x3a0808,
    emissive: 0x6a1010,
    emissiveIntensity: 0.55,
    metalness: 0.25,
    roughness: 0.4,
  }),
  glow: new THREE.MeshBasicMaterial({ color: 0x7a1810 }),
  pip: new THREE.MeshBasicMaterial({ color: 0x9a2020 }),
  pod: new THREE.MeshStandardMaterial({
    color: 0x1c1e22,
    metalness: 0.5,
    roughness: 0.55,
  }),
  dust: new THREE.MeshBasicMaterial({
    color: 0xe8d8b4,
    transparent: true,
    opacity: 0.42,
    side: THREE.DoubleSide,
    depthWrite: false,
  }),
  shadow: new THREE.MeshBasicMaterial({
    color: 0x0c0806,
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
  }),
  wash: new THREE.MeshBasicMaterial({
    color: 0xd8c4a0,
    transparent: true,
    opacity: 0.22,
    side: THREE.DoubleSide,
    depthWrite: false,
  }),
  beam: new THREE.MeshBasicMaterial({
    color: 0x9a2018,
    transparent: true,
    opacity: 0.32,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  }),
};

function noRay() {}

const _dir = new THREE.Vector3();
const _look = new THREE.Vector3();
const _around = { x: 0, z: 0 };

function shadow(mesh, cast = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

function add(parent, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, cast = true) {
  const m = shadow(new THREE.Mesh(geo, mat), cast);
  m.position.set(x, y, z);
  if (rx || ry || rz) m.rotation.set(rx, ry, rz);
  parent.add(m);
  return m;
}

/**
 * Elongated flying-wing HK. Nose is +Z, ~8.2 m long, twin nacelles, chin sensor.
 * @returns {THREE.Group}
 */
export function makeHunterKiller() {
  const g = new THREE.Group();
  g.name = "dropship-hk";

  add(g, GEO.body, MAT.hull, 0, 0.12, 0.15);
  add(g, GEO.spine, MAT.panel, 0, 0.42, -0.1);
  add(g, GEO.nose, MAT.hull, 0, 0.08, 3.35);
  add(g, GEO.blade, MAT.dark, 0, 0.02, 4.15);
  add(g, GEO.chin, MAT.dark, 0, -0.28, 2.85);
  add(g, GEO.tail, MAT.hull, 0, 0.18, -3.35);
  add(g, GEO.keel, MAT.dark, 0, -0.28, 0.2);
  add(g, GEO.wingIn, MAT.hull, 0, 0.02, -0.35);
  add(g, GEO.wing, MAT.dark, 0, 0.05, -0.85);
  add(g, GEO.tip, MAT.panel, 3.55, 0.08, -1.55, 0, 0.42, 0.08);
  add(g, GEO.tip, MAT.panel, -3.55, 0.08, -1.55, 0, -0.42, -0.08);
  add(g, GEO.fin, MAT.dark, 0, 0.58, -3.85);
  add(g, GEO.canopy, MAT.canopy, 0, 0.62, 1.55);
  add(g, GEO.gun, MAT.dark, 0, -0.42, 3.15);

  const sensor = add(g, GEO.sensor, MAT.sensor, 0, -0.4, 3.45);
  add(g, GEO.ring, MAT.dark, 0, -0.4, 3.52, Math.PI / 2, 0, 0);

  const exhausts = [];
  for (const side of [-1, 1]) {
    const x = side * 1.38;
    add(g, GEO.nacelle, MAT.nacelle, x, -0.12, -0.55, Math.PI / 2, 0, 0);
    add(g, GEO.intake, MAT.dark, x, -0.12, 0.72, Math.PI / 2, 0, 0);
    add(g, GEO.strut, MAT.dark, x * 0.55, -0.02, -0.2);
    const ex = add(g, GEO.exhaust, MAT.glow, x, -0.12, -1.78, Math.PI / 2, 0, 0, false);
    exhausts.push(ex);
  }

  add(g, GEO.bay, MAT.dark, 0, -0.36, 0.15);
  const hatchL = add(g, GEO.hatch, MAT.panel, -0.28, -0.4, 0.15);
  const hatchR = add(g, GEO.hatch, MAT.panel, 0.28, -0.4, 0.15);

  g.userData.sensor = sensor;
  g.userData.exhausts = exhausts;
  g.userData.hatches = [hatchL, hatchR];
  const bayGlow = new THREE.Mesh(GEO.beam, MAT.beam.clone());
  bayGlow.position.set(0, -1.15, 0.15);
  bayGlow.visible = false;
  bayGlow.raycast = noRay;
  g.add(bayGlow);
  g.userData.bayGlow = bayGlow;
  g.scale.setScalar(1.05);
  return g;
}

function makePod() {
  const g = new THREE.Group();
  g.name = "drop-pod";
  const body = shadow(new THREE.Mesh(GEO.pod, MAT.pod));
  body.position.y = 0.48;
  const pip = new THREE.Mesh(GEO.pip, MAT.pip);
  pip.position.set(0, 0.82, 0.18);
  pip.castShadow = false;
  g.add(body, pip);
  g.scale.setScalar(1.2);
  return g;
}

function makeDust() {
  const m = new THREE.Mesh(GEO.dust, MAT.dust.clone());
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.03;
  m.visible = false;
  m.raycast = noRay;
  return m;
}

function makeGroundShadow() {
  const m = new THREE.Mesh(GEO.shadow, MAT.shadow.clone());
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.04;
  m.visible = false;
  m.raycast = noRay;
  m.renderOrder = 1;
  return m;
}

function makeWash() {
  const m = new THREE.Mesh(GEO.wash, MAT.wash.clone());
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.05;
  m.visible = false;
  m.raycast = noRay;
  m.renderOrder = 2;
  return m;
}

/**
 * Wave 1 wipe → 1 ship / 16; then 2 / 24; then 3 / 32; ships cap at 6 headings.
 * @param {number} wave
 * @param {{x?:number,z?:number}|THREE.Vector3} [around]
 */
export function payloadForWave(wave, around) {
  const w = Math.max(1, wave | 0);
  return {
    wave: w,
    ships: Math.min(APPROACH_HEADINGS.length, w),
    count: 8 * (w + 1),
    around,
  };
}

function xzOf(p) {
  if (!p) return _around;
  _around.x = p.x || 0;
  _around.z = p.z || 0;
  return _around;
}

/**
 * @param {THREE.Scene} scene
 * @param {{ panic?: object, sfx?: object }} [opts]
 */
export function spawnDropships(scene, opts = {}) {
  let panicRef = opts.panic || null;
  let sfxRef = opts.sfx || null;
  const craft = [];
  const pods = [];
  /** @type {{ x:number, z:number, kind:string, wave?:number, heading?:number }[]} */
  const ready = [];
  const lastPlayer = new THREE.Vector3();
  let waveN = 0;
  let sawCops = false;
  let pulseT = 0;
  let rumbleAt = 0;

  function rumble(heavy) {
    const s = sfxRef;
    if (!s || typeof s._beep !== "function") return;
    const now = typeof performance !== "undefined" ? performance.now() : 0;
    if (now && now - rumbleAt < 400) return;
    rumbleAt = now;
    try {
      s._beep({
        freq: heavy ? 48 : 70,
        dur: heavy ? 1.55 : 0.65,
        type: "sawtooth",
        gain: heavy ? 0.09 : 0.04,
        slide: -14,
      });
      if (heavy) {
        s._beep({ freq: 88, dur: 0.85, type: "sine", gain: 0.035, slide: -22 });
      }
    } catch {
      /* sfx optional */
    }
  }

  function hatchPose(c, open) {
    const hatches = c.root.userData.hatches;
    if (!hatches) return;
    const a = open * 1.45;
    hatches[0].rotation.z = a;
    hatches[1].rotation.z = -a;
    hatches[0].position.y = -0.4 - open * 0.08;
    hatches[1].position.y = -0.4 - open * 0.08;
    hatches[0].position.x = -0.28 - open * 0.12;
    hatches[1].position.x = 0.28 + open * 0.12;
  }

  function launchOne(heading, idx, nShips, toDrop, around, wave) {
    const ax = around.x;
    const az = around.z;
    const fx = Math.sin(heading);
    const fz = Math.cos(heading);
    const hoverX = ax + fx * HOVER_R;
    const hoverZ = az + fz * HOVER_R;
    const cruiseY = CRUISE_Y0 + ((idx * 1.7) % (CRUISE_Y1 - CRUISE_Y0));
    const sx = hoverX - fx * APPROACH_R;
    const sz = hoverZ - fz * APPROACH_R;
    const root = makeHunterKiller();
    root.position.set(sx, cruiseY, sz);
    root.visible = false;
    scene.add(root);
    const blob = makeGroundShadow();
    scene.add(blob);
    const wash = makeWash();
    scene.add(wash);
    const c = {
      root,
      blob,
      wash,
      pos: new THREE.Vector3(sx, cruiseY, sz),
      vel: new THREE.Vector3(fx * CRUISE, 0, fz * CRUISE),
      hoverX,
      hoverZ,
      heading,
      mode: "wait",
      wait: idx * STAGGER,
      bank: heading * 0.08,
      pitch: -0.14,
      hatch: 0,
      toDrop,
      dropped: 0,
      dropWait: HOVER_SETTLE,
      linger: idx % 2 === 0 && nShips > 1 ? LINGER_S : 0,
      idx,
      wave,
      cruiseY,
    };
    craft.push(c);
    return c;
  }

  /**
   * Spawn `ships` craft. Each drops about count/ships units.
   * `spec` may be a wave index or `{ count, ships, around, wave }`.
   * @param {number | { count?: number, ships?: number, around?: {x?:number,z?:number}, wave?: number }} spec
   */
  function deliver(spec = {}) {
    if (typeof spec === "number") spec = payloadForWave(spec, lastPlayer);
    const around = xzOf(spec.around || lastPlayer);
    const wave = Math.max(1, spec.wave | 0 || waveN || 1);
    const nShips = Math.max(
      1,
      Math.min(APPROACH_HEADINGS.length, spec.ships | 0 || wave)
    );
    const count = Math.max(1, spec.count | 0 || 8 * (wave + 1));
    let live = 0;
    for (const c of craft) if (c.mode !== "gone") live++;
    const room = Math.max(0, LIVE_MAX - live);
    const n = Math.min(nShips, room);
    if (n <= 0) return;
    const per = Math.floor(count / nShips);
    const rem = count - per * nShips;
    rumble(true);
    for (let i = 0; i < n; i++) {
      const heading = APPROACH_HEADINGS[i % APPROACH_HEADINGS.length];
      const share = per + (i < rem ? 1 : 0);
      launchOne(heading, i, nShips, share, around, wave);
    }
  }

  function releasePod(c) {
    const root = makePod();
    const wx = Math.cos(c.heading);
    const wz = -Math.sin(c.heading);
    const t = c.toDrop <= 1 ? 0 : c.dropped / Math.max(1, c.toDrop - 1) - 0.5;
    const x = c.pos.x + wx * t * 3.4 + (Math.random() - 0.5) * 0.5;
    const z = c.pos.z + wz * t * 3.4 + (Math.random() - 0.5) * 0.5;
    root.position.set(x, c.pos.y - 0.85, z);
    scene.add(root);
    const dust = makeDust();
    dust.position.set(x, 0.03, z);
    scene.add(dust);
    const kind = c.dropped % 3 === 0 ? "officer" : "cop";
    const beam = new THREE.Mesh(GEO.beam, MAT.beam.clone());
    beam.raycast = noRay;
    beam.position.set(x, c.pos.y - 0.85, z);
    scene.add(beam);
    rumble(false);
    pods.push({
      root,
      dust,
      beam,
      x,
      z,
      y: c.pos.y - 0.85,
      fromY: c.pos.y - 0.7,
      vy: -0.6,
      landed: false,
      wait: SPAWN_WAIT,
      kind,
      wave: c.wave,
      heading: c.heading,
      spawned: false,
      dustT: 0,
    });
    c.dropped += 1;
  }

  function queueSpawn(p) {
    if (p.spawned) return;
    p.spawned = true;
    ready.push({
      x: p.x,
      z: p.z,
      kind: p.kind,
      wave: p.wave,
      heading: p.heading,
    });
  }

  function shipKey(wave, heading) {
    return `${wave}|${heading}`;
  }

  function droppingKeys() {
    const hold = new Set();
    for (const c of craft) {
      if (c.mode === "gone" || c.mode === "peel" || c.mode === "linger") continue;
      if (c.dropped < c.toDrop) hold.add(shipKey(c.wave, c.heading));
    }
    for (const p of pods) {
      if (!p.spawned) hold.add(shipKey(p.wave, p.heading));
    }
    return hold;
  }

  function tryFlush() {
    if (!ready.length) return;
    const p = panicRef;
    if (p && typeof p.spawnUnit === "function") {
      while (ready.length) {
        const s = ready[0];
        try {
          p.spawnUnit(s);
          ready.shift();
        } catch {
          break;
        }
      }
      return;
    }
    if (p && typeof p.spawnWave === "function") {
      const hold = droppingKeys();
      const take = [];
      const keep = [];
      for (const s of ready) (hold.has(shipKey(s.wave, s.heading)) ? keep : take).push(s);
      ready.length = 0;
      ready.push(...keep);
      if (!take.length) return;
      try {
        p.spawnWave({
          count: take.length,
          points: take,
          around: { x: take[0].x, z: take[0].z },
          wave: take[0].wave,
        });
      } catch {
        ready.push(...take);
      }
    }
  }

  /** Drain queued drop points. Empty if spawnWave/spawnUnit already consumed them. */
  function takeSpawns() {
    return ready.splice(0);
  }

  function poseShip(c) {
    const root = c.root;
    root.position.copy(c.pos);
    _look.set(c.pos.x + Math.sin(c.heading), c.pos.y, c.pos.z + Math.cos(c.heading));
    if (c.mode === "inbound") _look.set(c.hoverX, c.pos.y, c.hoverZ);
    else if (c.mode === "peel") {
      const sp = c.vel.length();
      if (sp > 0.4) _look.copy(c.pos).addScaledVector(c.vel, 1);
    }
    root.lookAt(_look);
    root.rotateX(c.pitch);
    root.rotateZ(c.bank);
    hatchPose(c, c.hatch);

    const alt = Math.max(2, c.pos.y);
    const shown = c.root.visible && c.mode !== "gone";
    if (c.blob) {
      c.blob.visible = shown;
      c.blob.position.set(c.pos.x, 0.04, c.pos.z);
      c.blob.scale.setScalar(3.4 + alt * 0.28);
      c.blob.material.opacity = Math.max(0.1, 0.52 - alt * 0.016);
    }
    const washOn = shown && (c.mode === "hover" || c.mode === "linger");
    if (c.wash) {
      c.wash.visible = washOn;
      if (washOn) {
        const u = 0.85 + Math.sin(pulseT * 9 + c.idx) * 0.18;
        c.wash.position.set(c.pos.x, 0.05, c.pos.z);
        c.wash.scale.setScalar(u * (1.1 + c.hatch * 0.45));
        c.wash.material.opacity = 0.12 + c.hatch * 0.18;
        c.wash.rotation.z = pulseT * 0.7;
      }
    }
    const glow = c.root.userData.bayGlow;
    if (glow) {
      const on = c.hatch > 0.05 && (c.mode === "hover" || c.mode === "linger");
      glow.visible = on;
      if (on) {
        const len = Math.max(1.2, c.pos.y - 0.2);
        glow.scale.set(0.9 + c.hatch, len, 0.9 + c.hatch);
        glow.position.set(0, -0.5 - len * 0.5, 0.15);
        glow.material.opacity = 0.16 + c.hatch * 0.28;
      }
    }
  }

  function fly(c, dt) {
    if (c.mode === "wait") {
      c.wait -= dt;
      if (c.wait > 0) return;
      c.mode = "inbound";
      c.root.visible = true;
      rumble(c.idx === 0);
    }

    if (c.mode === "inbound") {
      const dx = c.hoverX - c.pos.x;
      const dz = c.hoverZ - c.pos.z;
      const dist = Math.hypot(dx, dz) || 1;
      const u = Math.max(0, Math.min(1, 1 - dist / APPROACH_R));
      const v = 9 + CRUISE * (1 - u) * (1 - u);
      c.vel.set((dx / dist) * v, 0, (dz / dist) * v);
      c.pos.x += c.vel.x * dt;
      c.pos.z += c.vel.z * dt;
      const wantY = c.cruiseY + (HOVER_Y - c.cruiseY) * u * u;
      c.pos.y += (wantY - c.pos.y) * Math.min(1, dt * 1.6);
      c.bank +=
        ((u > 0.55 ? Math.sin(pulseT * 1.1 + c.idx) * 0.08 : Math.sign(c.heading || 0.4) * (0.48 - u * 0.32)) - c.bank) *
        Math.min(1, dt * 2.2);
      c.pitch += (-0.2 * (1 - u) - c.pitch) * Math.min(1, dt * 2);
      c.heading = Math.atan2(dx, dz);
      if (dist < 2.4) {
        c.mode = "hover";
        c.dropWait = HOVER_SETTLE;
        rumble(true);
      }
    } else if (c.mode === "hover") {
      c.pos.x += (c.hoverX - c.pos.x) * Math.min(1, dt * 2.4);
      c.pos.z += (c.hoverZ - c.pos.z) * Math.min(1, dt * 2.4);
      c.pos.y += (HOVER_Y + Math.sin(pulseT * 1.7 + c.idx) * 0.28 - c.pos.y) * Math.min(1, dt * 1.8);
      c.bank += (Math.sin(pulseT * 1.25 + c.idx) * 0.14 - c.bank) * Math.min(1, dt * 2.1);
      c.pitch += (0.04 + Math.sin(pulseT * 0.9 + c.idx) * 0.03 - c.pitch) * Math.min(1, dt * 2);
      c.hatch = Math.min(1, c.hatch + dt * 2.2);
      c.dropWait -= dt;
      if (c.dropWait <= 0 && c.dropped < c.toDrop) {
        releasePod(c);
        c.dropWait = POD_GAP;
      }
      if (c.dropped >= c.toDrop && c.dropWait <= 0) {
        c.mode = c.linger > 0 ? "linger" : "peel";
      }
    } else if (c.mode === "linger") {
      c.linger -= dt;
      c.heading += dt * 0.18;
      c.hoverX += Math.sin(c.heading) * 0.4 * dt;
      c.hoverZ += Math.cos(c.heading) * 0.4 * dt;
      c.pos.x += (c.hoverX - c.pos.x) * Math.min(1, dt * 1.4);
      c.pos.z += (c.hoverZ - c.pos.z) * Math.min(1, dt * 1.4);
      c.pos.y += (HOVER_Y + Math.sin(pulseT * 1.5 + c.idx) * 0.28 - c.pos.y) * Math.min(1, dt * 1.5);
      c.bank += (0.18 * Math.sin(c.heading * 2) - c.bank) * Math.min(1, dt * 1.6);
      if (c.linger <= 0) c.mode = "peel";
    } else if (c.mode === "peel") {
      c.hatch = Math.max(0, c.hatch - dt * 1.8);
      const turn = c.idx % 2 === 0 ? 1.05 : -1.05;
      c.heading += turn * dt * 0.55;
      const v = Math.min(52, 14 + (1 - c.hatch) * 38);
      c.vel.set(Math.sin(c.heading) * v, 7.5, Math.cos(c.heading) * v);
      c.pos.addScaledVector(c.vel, dt);
      c.bank += ((c.idx % 2 === 0 ? 0.55 : -0.55) - c.bank) * Math.min(1, dt * 1.8);
      c.pitch += (-0.28 - c.pitch) * Math.min(1, dt * 1.6);
      const gone =
        c.pos.y > 26 ||
        Math.hypot(c.pos.x - lastPlayer.x, c.pos.z - lastPlayer.z) > 95;
      if (gone) {
        scene.remove(c.root);
        if (c.blob) scene.remove(c.blob);
        if (c.wash) scene.remove(c.wash);
        c.mode = "gone";
      }
    }

    if (c.mode !== "gone") poseShip(c);
  }

  function tickPods(dt) {
    for (let i = pods.length - 1; i >= 0; i--) {
      const p = pods[i];
      if (!p.landed) {
        p.vy -= POD_G * dt;
        p.y += p.vy * dt;
        if (p.y <= 0.02) {
          p.y = 0.02;
          p.vy = 0;
          p.landed = true;
          p.dust.visible = true;
          p.dustT = 0.42;
          rumble(false);
        }
        p.root.position.set(p.x, p.y, p.z);
        p.root.rotation.x = Math.min(0.42, -p.vy * 0.025);
        if (p.beam) {
          const top = p.fromY ?? p.y + 4;
          const len = Math.max(0.25, top - p.y);
          p.beam.position.set(p.x, p.y + len * 0.5, p.z);
          p.beam.scale.set(1, len, 1);
          p.beam.visible = true;
          p.beam.material.opacity = 0.22 + Math.min(0.25, (-p.vy) * 0.02);
        }
      } else {
        p.wait -= dt;
        p.root.position.y = 0.02;
        if (p.beam) p.beam.visible = false;
        if (p.wait <= 0) queueSpawn(p);
        p.root.scale.setScalar(Math.max(0.01, 1.2 * (1 - Math.max(0, -p.wait) * 3.5)));
        if (p.spawned && p.root.scale.x < 0.05) {
          scene.remove(p.root);
          scene.remove(p.dust);
          if (p.beam) scene.remove(p.beam);
          pods.splice(i, 1);
          continue;
        }
      }
      if (p.dustT > 0) {
        p.dustT -= dt;
        p.dust.scale.setScalar(1 + (0.42 - p.dustT) * 3.4);
        p.dust.material.opacity = Math.max(0, p.dustT * 1.1);
        if (p.dustT <= 0) p.dust.visible = false;
      }
    }
  }

  function watchWipe() {
    const p = panicRef;
    const cops = p?.cops;
    if (!cops) return;
    let live = 0;
    for (const c of cops) {
      const m = c.root;
      if (m && m.visible !== false && !m.userData?.combatDown) live++;
    }
    if (live > 0) sawCops = true;
    if (!sawCops || live > 0) return;
    if (busy()) return;
    sawCops = false;
    waveN += 1;
    const payload = payloadForWave(waveN, lastPlayer);
    if (typeof p.onNeedDropships === "function") p.onNeedDropships(payload);
    else deliver(payload);
  }

  function busy() {
    for (const c of craft) {
      if (c.mode === "wait" || c.mode === "inbound" || c.mode === "hover") return true;
    }
    return false;
  }

  function pruneCraft() {
    for (let i = craft.length - 1; i >= 0; i--) {
      if (craft[i].mode === "gone") craft.splice(i, 1);
    }
  }

  /**
   * @param {number} dt
   * @param {{x?:number,y?:number,z?:number}|THREE.Vector3} playerPos
   */
  function tick(dt, playerPos) {
    if (!(dt > 0)) return;
    const h = Math.min(dt, 0.05);
    if (playerPos) lastPlayer.set(playerPos.x || 0, playerPos.y || 0, playerPos.z || 0);
    pulseT += h;
    const pulse = 0.45 + Math.sin(pulseT * 6.2) * 0.2;
    MAT.sensor.emissiveIntensity = 0.4 + pulse;
    for (const c of craft) {
      if (c.mode === "gone") continue;
      fly(c, h);
      const ex = c.root.userData.exhausts;
      if (ex) {
        const s = c.mode === "peel" ? 1.45 : c.mode === "inbound" ? 1.2 : 0.95;
        for (const m of ex) m.scale.set(s, s * (0.75 + pulse * 1.15), s);
      }
    }
    tickPods(h);
    tryFlush();
    watchWipe();
    pruneCraft();
  }

  function dispose() {
    for (const c of craft) {
      scene?.remove(c.root);
      if (c.blob) scene?.remove(c.blob);
      if (c.wash) scene?.remove(c.wash);
    }
    craft.length = 0;
    for (const p of pods) {
      scene?.remove(p.root);
      scene?.remove(p.dust);
      if (p.beam) scene?.remove(p.beam);
    }
    pods.length = 0;
    ready.length = 0;
    sawCops = false;
  }

  const api = {
    deliver,
    tick,
    takeSpawns,
    dispose,
    payloadForWave,
    headings: APPROACH_HEADINGS,
    get busy() {
      return busy();
    },
    get wave() {
      return waveN;
    },
    set panic(p) {
      panicRef = p || null;
    },
    get panic() {
      return panicRef;
    },
    set sfx(s) {
      sfxRef = s || null;
    },
    get sfx() {
      return sfxRef;
    },
  };
  return api;
}
