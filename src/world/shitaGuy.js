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
const LAD = [
  "shita_lad_01",
  "shita_lad_02",
  "shita_lad_03",
  "shita_void_01",
  "shita_void_02",
  "shita_void_03",
  "shita_void_04",
  "shita_void_05",
  "shita_void_06",
];

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

function nearestCanvas(w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const x = c.getContext("2d");
  x.imageSmoothingEnabled = false;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  return { canvas: c, ctx: x, tex };
}

/** Keen-EGA Shitasynth 3 panel: deep blue, cyan/magenta/yellow bezel. */
function paintUi(x, w, h, title) {
  x.fillStyle = "#1e1e8c";
  x.fillRect(0, 0, w, h);
  x.fillStyle = "#000";
  for (let y = 0; y < h; y += 8) x.fillRect(0, y, w, 1);
  x.fillStyle = "#00ffff";
  x.fillRect(0, 0, w, 3);
  x.fillRect(0, h - 3, w, 3);
  x.fillStyle = "#ff00ff";
  x.fillRect(0, 0, 3, h);
  x.fillRect(w - 3, 0, 3, h);
  x.fillStyle = "#ffff00";
  x.font = "bold 11px monospace";
  x.fillText("SHITASYNTH 3", 8, 16);
  x.fillStyle = "#00ffff";
  x.font = "9px monospace";
  x.fillText("ABSOLUTE ROT", 8, 28);
  const names = ["CARD", "XP", "CLAR", "808", "FART", "MWAVE", "DIAL", "VHS"];
  for (let i = 0; i < 8; i++) {
    const col = i % 2;
    const row = (i / 2) | 0;
    const px = 8 + col * 58;
    const py = 36 + row * 16;
    x.fillStyle = i === 7 ? "#ff0000" : "#00ffff";
    x.fillRect(px, py, 54, 13);
    x.fillStyle = "#000";
    x.font = "8px monospace";
    x.fillText(names[i], px + 4, py + 10);
  }
  x.fillStyle = "#3c3c9c";
  x.fillRect(8, 104, w - 16, 18);
  x.fillStyle = "#ffff00";
  x.fillRect(10, 108, Math.max(8, Math.min(w - 28, ((title || "").length / 14) * (w - 28))), 10);
}

function makeJacketTex() {
  const { canvas, ctx, tex } = nearestCanvas(256, 256);
  paintUi(ctx, 256, 256, "wetCardboard");
  ctx.fillStyle = "#00ff00";
  ctx.fillRect(12, 230, 10, 10);
  ctx.fillStyle = "#ffff00";
  ctx.font = "10px monospace";
  ctx.fillText("WTF KNOB", 28, 240);
  tex.needsUpdate = true;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function makeScreen() {
  return nearestCanvas(128, 64);
}

function paintScreen(scr, title, cut, step) {
  const x = scr.ctx;
  const w = scr.canvas.width;
  const h = scr.canvas.height;
  x.fillStyle = "#001100";
  x.fillRect(0, 0, w, h);
  x.strokeStyle = "#88bbff";
  x.lineWidth = 2;
  x.beginPath();
  for (let i = 0; i < w; i++) {
    const y = h * 0.5 + Math.sin(i * 0.22 + (cut || 0) * 0.001) * (10 + (i % 17) * 0.4);
    if (i === 0) x.moveTo(i, y);
    else x.lineTo(i, y);
  }
  x.stroke();
  x.fillStyle = "#00ffff";
  x.font = "bold 10px monospace";
  x.fillText("SHITA 3", 4, 12);
  x.fillStyle = "#ffff00";
  x.font = "9px monospace";
  x.fillText(String(title || "ROT").slice(0, 14).toUpperCase(), 4, 24);
  x.fillStyle = "#ff00ff";
  x.fillRect(4, 30, Math.max(4, Math.min(w - 8, (Number(cut) / 12000) * (w - 8))), 6);
  if (step != null) {
    for (let i = 0; i < 16; i++) {
      x.fillStyle = i === (step & 15) ? "#ffff00" : i % 4 === 0 ? "#ff00ff" : "#003322";
      x.fillRect(4 + i * 7.5, 42, 6, 14);
    }
  }
  scr.tex.needsUpdate = true;
}

/** Miniature of the HTML cart: Keen bezel, preset pads, knobs, 16-step seq. */
function makeSynth() {
  const g = new THREE.Group();
  g.name = "shita-slab";
  const panel = std(0x1e1e8c, { roughness: 0.55, metalness: 0.08 });
  const cyan = std(0x00ffff, { roughness: 0.35, metalness: 0.2, emissive: 0x003333, emissiveIntensity: 0.25 });
  const mag = std(0xff00ff, { roughness: 0.4, metalness: 0.15, emissive: 0x4a0030, emissiveIntensity: 0.45 });
  const yel = std(0xffff00, { roughness: 0.4, metalness: 0.15, emissive: 0x332200, emissiveIntensity: 0.35 });
  const chrome = std(0xe8e000, { roughness: 0.28, metalness: 0.55 });

  const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.24), panel));
  g.add(body);
  const bezel = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.392, 0.016, 0.252), cyan));
  bezel.position.y = 0.028;
  g.add(bezel);

  const scr = makeScreen();
  paintScreen(scr, "wetCardboard", 620, 0);
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.16, 0.07),
    new THREE.MeshBasicMaterial({ map: scr.tex })
  );
  screen.position.set(-0.08, 0.028, 0.04);
  screen.rotation.x = -Math.PI / 2;
  g.add(screen);

  const pads = [];
  const padCols = [0x00ffff, 0x00ffff, 0x00ffff, 0x00ffff, 0xff00ff, 0xffff00, 0xff0000, 0xff00ff];
  for (let i = 0; i < 8; i++) {
    const m = std(padCols[i], { roughness: 0.4, emissive: padCols[i], emissiveIntensity: 0.15 });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.008, 0.022), m);
    pad.position.set(0.04 + (i % 4) * 0.038, 0.03, 0.07 - ((i / 4) | 0) * 0.03);
    g.add(pad);
    pads.push({ mesh: pad, mat: m });
  }

  const knobs = [];
  const knobGeo = new THREE.CylinderGeometry(0.01, 0.012, 0.014, 8);
  for (let i = 0; i < 6; i++) {
    const k = new THREE.Mesh(knobGeo, chrome);
    k.position.set(-0.14 + (i % 3) * 0.04, 0.032, -0.04 - ((i / 3) | 0) * 0.035);
    g.add(k);
    knobs.push(k);
  }

  const steps = [];
  for (let i = 0; i < 16; i++) {
    const sm = std(0x001100, { emissive: 0xffff00, emissiveIntensity: 0 });
    const st = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.006, 0.02), sm);
    st.position.set(-0.15 + i * 0.0195, 0.028, -0.1);
    g.add(st);
    steps.push({ mesh: st, mat: sm });
  }

  const led = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.012), mag);
  led.position.set(0.16, 0.034, 0.1);
  g.add(led);
  const pwr = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.012), yel);
  pwr.position.set(0.16, 0.034, 0.08);
  g.add(pwr);

  g.userData.knobs = knobs;
  g.userData.pads = pads;
  g.userData.steps = steps;
  g.userData.led = led;
  g.userData.ledMat = mag;
  g.userData.screen = scr;
  g.userData.preset = "wetCardboard";
  g.userData.step = 0;
  return g;
}

function dressJp(mesh) {
  const b = mesh.userData.body;
  const s = b.scale;
  const wrap = new THREE.MeshStandardMaterial({
    map: makeJacketTex(),
    roughness: 0.62,
    metalness: 0.08,
  });
  const piping = std(0x00ffff, { roughness: 0.4, metalness: 0.18, emissive: 0x003838, emissiveIntensity: 0.2 });
  const cargo = std(0x1e1e8c, { roughness: 0.78 });
  const shoe = std(0xffff00, { roughness: 0.45 });
  const sole = std(0xff00ff, { roughness: 0.7 });
  const hairM = b.hairM;

  const jacket = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.42 * s, 0.44 * s, 0.28 * s), wrap));
  jacket.position.set(0, b.hipY + 0.28 * s, 0);
  mesh.add(jacket);
  const zip = new THREE.Mesh(new THREE.BoxGeometry(0.012 * s, 0.36 * s, 0.01 * s), piping);
  zip.position.set(0, b.hipY + 0.3 * s, 0.145 * s);
  mesh.add(zip);

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
    const step = (t * 8) & 15;
    slab.userData.step = step;
    const steps = slab.userData.steps || [];
    for (let i = 0; i < steps.length; i++) {
      steps[i].mat.emissiveIntensity = i === step ? 1.2 : i % 4 === 0 ? 0.15 : 0.02;
    }
    const pads = slab.userData.pads || [];
    const pi = Math.max(0, PRESET_NAMES.indexOf(presetName));
    for (let i = 0; i < pads.length; i++) {
      pads[i].mat.emissiveIntensity = i === pi ? 0.85 : 0.12;
    }
    paintScreen(slab.userData.screen, presetName, p.cut, step);
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
      play(id, { gain: gain ?? 0.9, pos: mesh.position });
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
    if (r < 0.38) {
      e.note(110 * Math.pow(2, ((Math.random() * 24) | 0) / 12), 0.12 + Math.random() * 0.4, 0.65 + Math.random() * 0.3);
    } else if (r < 0.72) {
      presetName = pick(PRESET_NAMES);
      e.applyPreset(presetName);
      e.note(220, 0.28, 0.8);
    } else if (r < 0.9) {
      e.nudgeFilter();
    } else if (r < 0.95) {
      e.drone();
    } else {
      e.wtf();
      presetName = "WTF";
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
