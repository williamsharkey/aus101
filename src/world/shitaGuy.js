/**
 * shita-lad — JP X/Twitter noise guy walking the sand with a 3D Shita slab.
 * Real shitasynth engine. Babes and ken-jocks flee; goths and SIGMA_07 stay.
 */
import * as THREE from "three";
import { ken } from "../chars/npcs.js";
import { armIK } from "./gadgets.js";
import { acquireCtx } from "../audio/tapeDeck.js";
import { createShita, PRESET_NAMES } from "../audio/shitaEngine.js";

const FLEE_R = 8;
const COOL_R = 7;
const FLEE_STOP = 12;
const WALK = 1.12;
const MIX_NEAR = 2;
const MIX_FAR = 20;
const HECKLE = [
  "shita_heckle_01",
  "shita_heckle_02",
  "shita_heckle_03",
  "shita_heckle_04",
  "shita_heckle_05",
  "shita_heckle_06",
  "shita_heckle_07",
  "shita_heckle_08",
];
const COOL = [
  "shita_cool_01",
  "shita_cool_02",
  "shita_cool_03",
  "shita_cool_04",
  "shita_cool_05",
  "shita_cool_06",
  "shita_cool_07",
  "shita_cool_08",
];
const LAD = ["shita_lad_01", "shita_lad_02", "shita_lad_03"];

const SAND = { minX: -58, maxX: 58, minZ: -16, maxZ: 46 };
const SPAWN = { x: 20.5, z: -3.2, yaw: -1.1 };

const UP = new THREE.Vector3(0, 1, 0);
const _hand = new THREE.Vector3();
const _away = new THREE.Vector3();

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

function distXZ(a, b) {
  if (!a || !b) return Infinity;
  return Math.hypot((a.x ?? 0) - (b.x ?? 0), (a.z ?? 0) - (b.z ?? 0));
}

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

function sandClamp(x, z) {
  return {
    x: clamp(x, SAND.minX, SAND.maxX),
    z: clamp(z, SAND.minZ, SAND.maxZ),
  };
}

function makeScreen() {
  const c = document.createElement("canvas");
  c.width = 96;
  c.height = 48;
  const x = c.getContext("2d");
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  return { canvas: c, ctx: x, tex };
}

function paintScreen(scr, title, cut) {
  const x = scr.ctx;
  x.fillStyle = "#001128";
  x.fillRect(0, 0, 96, 48);
  x.fillStyle = "#00ffff";
  x.font = "bold 9px monospace";
  x.fillText("SHITA 3", 6, 12);
  x.fillStyle = "#ffff00";
  x.font = "8px monospace";
  x.fillText(String(title || "ROT").slice(0, 14).toUpperCase(), 6, 26);
  x.fillStyle = "#ff00ff";
  x.fillRect(6, 34, Math.max(4, Math.min(84, (Number(cut) / 12000) * 84)), 8);
  scr.tex.needsUpdate = true;
}

/** Chunky cassette/synth slab: box, knobs, tiny CRT, cyan bezel. */
function makeSynth() {
  const g = new THREE.Group();
  g.name = "shita-slab";
  const shell = std(0x14182a, { roughness: 0.38, metalness: 0.28 });
  const bezel = std(0x00c8d4, { roughness: 0.35, metalness: 0.45 });
  const chrome = std(0xb0b8c4, { roughness: 0.28, metalness: 0.7 });
  const mag = std(0xff00aa, { roughness: 0.4, metalness: 0.2, emissive: 0x4a0030, emissiveIntensity: 0.4 });

  const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.058, 0.18), shell));
  g.add(body);
  const cheekL = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.07, 0.188), bezel));
  cheekL.position.x = -0.155;
  const cheekR = cheekL.clone();
  cheekR.position.x = 0.155;
  g.add(cheekL, cheekR);

  const scr = makeScreen();
  paintScreen(scr, "wetCardboard", 620);
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.11, 0.055),
    new THREE.MeshBasicMaterial({ map: scr.tex })
  );
  screen.position.set(-0.07, 0.032, 0.02);
  screen.rotation.x = -Math.PI / 2;
  g.add(screen);

  const knobGeo = new THREE.CylinderGeometry(0.012, 0.014, 0.016, 8);
  const knobs = [];
  for (let i = 0; i < 6; i++) {
    const k = new THREE.Mesh(knobGeo, chrome);
    k.position.set(0.02 + (i % 3) * 0.04, 0.036, (i < 3 ? 0.04 : -0.02));
    k.rotation.y = i * 0.7;
    g.add(k);
    knobs.push(k);
  }

  const led = new THREE.Mesh(new THREE.SphereGeometry(0.007, 8, 6), mag);
  led.position.set(0.14, 0.034, 0.07);
  g.add(led);

  const keyGeo = new THREE.BoxGeometry(0.018, 0.006, 0.034);
  const cream = std(0xe8e0d0, { roughness: 0.5 });
  for (let i = 0; i < 8; i++) {
    const key = new THREE.Mesh(keyGeo, i % 3 === 1 ? std(0x111118) : cream);
    key.position.set(-0.13 + i * 0.022, 0.032, -0.055);
    g.add(key);
  }

  g.userData.knobs = knobs;
  g.userData.led = led;
  g.userData.ledMat = mag;
  g.userData.screen = scr;
  g.userData.preset = "wetCardboard";
  return g;
}

function dressJp(mesh) {
  const b = mesh.userData.body;
  const s = b.scale;
  const nylon = std(0x12141a, { roughness: 0.62, metalness: 0.12 });
  const piping = std(0x00c8d4, { roughness: 0.4, metalness: 0.2 });
  const cargo = std(0x1a1c22, { roughness: 0.78 });
  const shoe = std(0xe8e4dc, { roughness: 0.55 });
  const sole = std(0x1a1a1c, { roughness: 0.7 });
  const hairM = b.hairM;

  const jacket = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.4 * s, 0.42 * s, 0.26 * s), nylon));
  jacket.position.set(0, b.hipY + 0.28 * s, 0);
  mesh.add(jacket);
  const zip = new THREE.Mesh(new THREE.BoxGeometry(0.012 * s, 0.36 * s, 0.01 * s), piping);
  zip.position.set(0, b.hipY + 0.3 * s, 0.13 * s);
  mesh.add(zip);
  const graphic = new THREE.Mesh(new THREE.BoxGeometry(0.12 * s, 0.1 * s, 0.012 * s), std(0xff00aa, { roughness: 0.45, emissive: 0x2a0018, emissiveIntensity: 0.25 }));
  graphic.position.set(0, b.shoulderY - 0.22 * s, 0.132 * s);
  mesh.add(graphic);

  for (const side of [-1, 1]) {
    const pocket = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.09 * s, 0.1 * s, 0.05 * s), cargo));
    pocket.position.set(side * 0.12 * s, b.hipY - 0.08 * s, 0.08 * s);
    mesh.add(pocket);
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.02 * s, 0.38 * s, 0.012 * s), piping);
    strap.position.set(side * 0.1 * s, b.shoulderY - 0.16 * s, 0.12 * s);
    strap.rotation.z = side * -0.18;
    mesh.add(strap);
  }

  const bangs = shadow(new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), hairM));
  bangs.scale.set(b.headR * 0.82, b.headR * 0.32, b.headR * 0.4);
  bangs.position.set(0, b.headR * 0.28, b.headR * 0.7);
  bangs.rotation.x = -0.4;
  b.head.add(bangs);
  const shades = new THREE.Mesh(new THREE.BoxGeometry(0.09 * s, 0.018 * s, 0.012 * s), std(0x0a0c10, { roughness: 0.25, metalness: 0.4 }));
  shades.position.set(0, 0.01 * s, b.headR * 0.86);
  b.head.add(shades);

  for (const foot of [b.footL, b.footR]) {
    if (!foot) continue;
    const sn = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.1 * s, 0.055 * s, 0.22 * s), shoe));
    sn.position.set(0, -b.footH + 0.04 * s, 0.055 * s);
    foot.add(sn);
    const so = new THREE.Mesh(new THREE.BoxGeometry(0.1 * s, 0.016 * s, 0.23 * s), sole);
    so.position.set(0, -b.footH + 0.01 * s, 0.058 * s);
    foot.add(so);
  }
}

function poseWalk(mesh, phase, amp) {
  const b = mesh?.userData?.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.x = -swing * 0.55 * amp;
  b.legR.rotation.x = swing * 0.55 * amp;
}

function poseFlee(mesh, phase, amp) {
  const b = mesh?.userData?.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.x = -swing * 0.72 * amp;
  b.legR.rotation.x = swing * 0.72 * amp;
  if (b.armL) b.armL.rotation.x = swing * 0.85 * amp;
  if (b.armR) b.armR.rotation.x = -swing * 0.85 * amp;
}

function kindOf(npc) {
  return npc?.kind || npc?.mesh?.userData?.kind || "";
}

function isJock(npc) {
  const k = kindOf(npc);
  const name = npc?.mesh?.name || "";
  if (k === "shita" || name === "shita-lad") return false;
  return k === "babe" || k === "ken";
}

function isCool(npc) {
  const k = kindOf(npc);
  return k === "goth" || k === "sigma_07";
}

function awayFrom(from, at) {
  _away.set((at.x ?? 0) - (from.x ?? 0), 0, (at.z ?? 0) - (from.z ?? 0));
  const l = Math.hypot(_away.x, _away.z) || 1;
  _away.x /= l;
  _away.z /= l;
  return _away;
}

/**
 * @param {import("three").Scene} scene
 * @returns {{ tick: Function, mesh: import("three").Group, engine: object|null }}
 */
export function spawnShitaGuy(scene) {
  const mesh = ken({ hair: 0x121014, shorts: 0x1a1c22, skin: 0xc9a07a });
  mesh.name = "shita-lad";
  mesh.userData.kind = "shita";
  mesh.userData.ageBand = "adult";
  mesh.userData.paintTarget = true;
  mesh.userData.hasGadget = true;
  dressJp(mesh);

  const slab = makeSynth();
  slab.position.set(0, 1.08, 0.2);
  slab.rotation.x = -0.38;
  mesh.add(slab);

  const strap = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.012, 0.42), std(0x1a1c22, { roughness: 0.85 }));
  strap.position.set(0, 1.32, 0.02);
  strap.rotation.x = 0.55;
  mesh.add(strap);

  mesh.position.set(SPAWN.x, 0, SPAWN.z);
  mesh.rotation.y = SPAWN.yaw;
  scene.add(mesh);

  let engine = null;
  let lastT = null;
  let nextAct = 0.5;
  let nextLad = 8;
  let waypoint = { x: SPAWN.x - 3, z: SPAWN.z + 2 };
  let walkPhase = 0;
  let presetName = "wetCardboard";
  const lastVo = new WeakMap();
  const inBand = new WeakSet();

  function ensureEngine() {
    if (engine) return engine;
    const ctx = acquireCtx();
    if (!ctx) return null;
    engine = createShita(ctx);
    if (engine) {
      engine.applyPreset("wetCardboard");
      engine.start();
      engine.setMix(0, 0.01);
    }
    return engine;
  }

  function syncKnobs(t) {
    const p = engine?.params;
    const knobs = slab.userData.knobs;
    if (!p || !knobs) return;
    const vals = [p.mix, p.cut / 12000, p.res / 30, p.drv, p.dly, p.detune];
    for (let i = 0; i < knobs.length; i++) {
      knobs[i].rotation.y = vals[i] * Math.PI * 1.6 + t * 0.05;
    }
    const led = slab.userData.ledMat;
    if (led) led.emissiveIntensity = 0.35 + Math.abs(Math.sin(t * 9)) * 0.9;
    if (slab.userData.preset !== presetName) {
      slab.userData.preset = presetName;
      paintScreen(slab.userData.screen, presetName, p.cut);
    }
  }

  function holdSlab() {
    for (const side of [-1, 1]) {
      _hand.set(side * 0.13, 1.05, 0.16);
      armIK(mesh, side, _hand, side * 0.55);
    }
    const b = mesh.userData.body;
    if (b?.head) {
      b.head.rotation.x = 0.38 + Math.sin(walkPhase * 0.5) * 0.04;
      b.head.rotation.z = Math.sin(walkPhase * 0.35) * 0.05;
    }
  }

  function pickWaypoint() {
    waypoint = sandClamp(
      mesh.position.x + (Math.random() * 2 - 1) * 14,
      mesh.position.z + (Math.random() * 2 - 1) * 10
    );
    // Stay off the DJ booth ring and the crate synth.
    if (Math.hypot(waypoint.x + 24, waypoint.z - 7) < 6) waypoint.x += 10;
    if (Math.hypot(waypoint.x - 15.6, waypoint.z - 4.2) < 3.2) waypoint.z -= 4;
  }

  function wander(dt) {
    const dx = waypoint.x - mesh.position.x;
    const dz = waypoint.z - mesh.position.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.45) {
      pickWaypoint();
      poseWalk(mesh, walkPhase, 0.12);
      return 0;
    }
    const step = WALK * dt;
    mesh.position.x += (dx / d) * step;
    mesh.position.z += (dz / d) * step;
    const c = sandClamp(mesh.position.x, mesh.position.z);
    mesh.position.x = c.x;
    mesh.position.z = c.z;
    mesh.position.y = 0;
    mesh.rotation.y = Math.atan2(dx, dz);
    walkPhase += dt * 7.2;
    poseWalk(mesh, walkPhase, 1);
    return 1;
  }

  function playLine(play, id, gain) {
    if (typeof play !== "function" || !id) return;
    try {
      play(id, { gain: gain ?? 0.9 });
    } catch {
      /* vo optional */
    }
  }

  function react(cast, play, now) {
    const here = mesh.position;
    for (const npc of cast || []) {
      const m = npc?.mesh;
      if (!m || m === mesh || !m.position) continue;
      if (m.userData.combatDown || m.visible === false) continue;
      const d = distXZ(here, m.position);
      const jock = isJock(npc);
      const cool = isCool(npc);

      if (jock && d < FLEE_R) {
        const a = awayFrom(here, m.position);
        m.userData.flee = { x: a.x, z: a.z, spd: 4.4 * (0.85 + Math.random() * 0.35) };
        m.userData.shitaFlee = true;
        if (m.userData.fleePhase == null) m.userData.fleePhase = Math.random() * Math.PI * 2;
        if (!inBand.has(m) || now - (lastVo.get(m) || 0) > 9) {
          inBand.add(m);
          lastVo.set(m, now);
          playLine(play, pick(HECKLE), clamp(1.1 - d / FLEE_R, 0.35, 1));
        }
      } else if (m.userData.shitaFlee && d > FLEE_STOP) {
        delete m.userData.flee;
        delete m.userData.shitaFlee;
        inBand.delete(m);
      }

      if (cool && d < COOL_R) {
        if (!inBand.has(m) || now - (lastVo.get(m) || 0) > 11) {
          inBand.add(m);
          lastVo.set(m, now);
          playLine(play, pick(COOL), clamp(1.05 - d / COOL_R, 0.35, 1));
        }
      } else if (cool && d > COOL_R + 1.5) {
        inBand.delete(m);
      }
    }
  }

  function driveFlee(cast, dt) {
    for (const npc of cast || []) {
      const m = npc?.mesh;
      if (!m?.userData?.shitaFlee) continue;
      const f = m.userData.flee;
      if (!f) continue;
      m.position.x += f.x * f.spd * dt;
      m.position.z += f.z * f.spd * dt;
      const c = sandClamp(m.position.x, m.position.z);
      m.position.x = c.x;
      m.position.z = c.z;
      m.rotation.y = Math.atan2(f.x, f.z);
      m.userData.fleePhase = (m.userData.fleePhase || 0) + dt * (5.2 + f.spd * 0.9);
      m.position.y = Math.abs(Math.sin(m.userData.fleePhase)) * 0.055;
      poseFlee(m, m.userData.fleePhase, 1);
    }
  }

  function act() {
    const e = ensureEngine();
    if (!e) return;
    const r = Math.random();
    if (r < 0.44) {
      e.note(110 * Math.pow(2, ((Math.random() * 24) | 0) / 12), 0.12 + Math.random() * 0.4, 0.65 + Math.random() * 0.3);
    } else if (r < 0.66) {
      presetName = pick(PRESET_NAMES);
      e.applyPreset(presetName);
      e.note(220, 0.28, 0.8);
    } else if (r < 0.88) {
      e.nudgeFilter();
      paintScreen(slab.userData.screen, presetName, e.params.cut);
    } else if (r < 0.94) {
      e.drone();
    } else {
      e.wtf();
      presetName = "WTF";
      paintScreen(slab.userData.screen, "WTF", e.params.cut);
    }
  }

  pickWaypoint();

  return {
    mesh,
    get engine() {
      return engine;
    },
    tick(t, playerPos, cast, play) {
      const dt = lastT == null ? 0 : clamp(t - lastT, 0, 0.05);
      lastT = t;
      if (mesh.userData.combatDown || mesh.visible === false) {
        engine?.setMix(0, 0.08);
        return;
      }

      const panicking = !!mesh.userData.flee && !mesh.userData.shitaFlee;
      if (!panicking) wander(dt);
      holdSlab();
      syncKnobs(t);

      if (dt > 0) {
        react(cast, play, t);
        driveFlee(cast, dt);
      }

      const e = ensureEngine();
      if (e) {
        const d = distXZ(playerPos, mesh.position);
        const spat = d <= MIX_NEAR ? 0.62 : d >= MIX_FAR ? 0 : 0.62 * (1 - (d - MIX_NEAR) / (MIX_FAR - MIX_NEAR));
        e.setMix(spat, 0.2);
        e.setPosition(mesh.position.x, 1.1, mesh.position.z);
        e.tick();
        if (t >= nextAct) {
          act();
          nextAct = t + 0.4 + Math.random() * 1.6;
        }
        if (t >= nextLad && d < 10) {
          playLine(play, pick(LAD), clamp(1 - d / 10, 0.35, 0.95));
          nextLad = t + 16 + Math.random() * 12;
        }
      }
    },
  };
}
