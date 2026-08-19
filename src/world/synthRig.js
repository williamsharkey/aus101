/**
 * Beach synth lad — physical synth + drum machine, 16-step overlay.
 * KeyE (or the unlabeled pad) opens the sequencer; preview bed plays while
 * open (createPatternBed start + setMix 0.4) and mutes when closed.
 * SAVE writes a tape clip.
 */
import * as THREE from "three";
import { ken } from "../chars/npcs.js";
import { armIK } from "./gadgets.js";
import {
  TRACKS,
  starterPattern,
  clonePattern,
  acquireCtx,
  createPatternBed,
} from "../audio/tapeDeck.js";

const RANGE = 2.6;
const _key = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const PAD_COLS = ["#e07040", "#fbf6ea", "#ffd76a", "#2ec4c8", "#7ad0ff", "#9be07a", "#ff7ab0"];
const NOTES_GLOW = [0x2ec4c8, 0x7ad0ff, 0x9be07a, 0xff7ab0];

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function box(w, h, d, mat) {
  return shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat));
}

function distXZ(a, b) {
  if (!a || !b) return Infinity;
  return Math.hypot((a.x ?? 0) - (b.x ?? 0), (a.z ?? 0) - (b.z ?? 0));
}

function makeCassette(matBody, matLabel) {
  const g = new THREE.Group();
  const body = box(0.086, 0.014, 0.054, matBody);
  g.add(body);
  const label = box(0.07, 0.002, 0.028, matLabel);
  label.position.y = 0.008;
  g.add(label);
  return g;
}

/** Sagging patch lead between two points. */
function cable(from, to, sag, mat) {
  const mid = from.clone().lerp(to, 0.5);
  mid.y -= sag;
  const curve = new THREE.QuadraticBezierCurve3(from.clone(), mid, to.clone());
  return new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.007, 5, false), mat);
}

const UNIT = new THREE.BoxGeometry(1, 1, 1);

/** Slatted crate — battens on four faces and a lid, hollow enough to read as a crate. */
function makeCrate(w, h, d, mat) {
  const g = new THREE.Group();
  const t = 0.018;
  const add = (sx, sy, sz, x, y, z) => {
    const m = shadow(new THREE.Mesh(UNIT, mat));
    m.scale.set(sx, sy, sz);
    m.position.set(x, y, z);
    g.add(m);
  };
  for (const dz of [(d - t) * 0.5, -(d - t) * 0.5]) {
    for (let i = 0; i < 4; i++) add(0.05, h, t, -w * 0.5 + 0.045 + i * ((w - 0.09) / 3), h * 0.5, dz);
    for (const y of [t, h - t]) add(w, t * 1.6, t, 0, y, dz);
  }
  for (const sx of [-(w - t) * 0.5, (w - t) * 0.5]) add(t, h, d * 0.92, sx, h * 0.5, 0);
  add(w, t * 1.4, d * 0.94, 0, h - t * 0.7, 0);
  return g;
}

/**
 * The rig: two scavenged crates as a stand, a 25-key synth with real black-key
 * spacing, a drum box, patch leads and headphones. Keys land at 1.14 m so the
 * lad's elbows keep a bend instead of hanging straight.
 */
function makeGear() {
  const g = new THREE.Group();
  const shell = std(0x1a1a20, { roughness: 0.4, metalness: 0.38 });
  const cheek = std(0x6a4a2c, { roughness: 0.6 });
  const cream = std(0xe8e0d0, { roughness: 0.45 });
  const chrome = std(0x9aa0a8, { roughness: 0.28, metalness: 0.62 });
  const crateM = std(0x7a5230, { roughness: 0.84 });
  const rubber = std(0x121216, { roughness: 0.85 });

  const STAND_Z = 0.44;
  const lower = makeCrate(0.94, 0.56, 0.3, crateM);
  lower.position.set(0, 0, STAND_Z);
  const upper = makeCrate(0.86, 0.52, 0.28, crateM);
  upper.position.set(0, 0.56, STAND_Z);
  g.add(lower, upper);

  const deckY = 1.08;
  const synth = box(0.72, 0.075, 0.28, shell);
  synth.position.set(-0.06, deckY + 0.038, STAND_Z);
  g.add(synth);
  for (const sx of [-0.44, 0.32]) {
    const end = box(0.045, 0.09, 0.29, cheek);
    end.position.set(sx, deckY + 0.045, STAND_Z);
    g.add(end);
  }
  const panel = box(0.66, 0.012, 0.1, std(0x111118, { roughness: 0.34, metalness: 0.2 }));
  panel.position.set(-0.06, deckY + 0.082, STAND_Z - 0.085);
  g.add(panel);

  // One octave and a half, proper piano layout.
  const keys = [];
  const WHITE = [0, 2, 4, 5, 7, 9, 11];
  const whiteGeo = new THREE.BoxGeometry(0.027, 0.014, 0.1);
  const blackGeo = new THREE.BoxGeometry(0.015, 0.02, 0.062);
  const keyY = deckY + 0.083;
  const keyZ = STAND_Z + 0.035;
  const x0 = -0.4;
  for (let w = 0; w < 15; w++) {
    const k = new THREE.Mesh(whiteGeo, cream);
    k.castShadow = true;
    k.position.set(x0 + w * 0.029, keyY, keyZ);
    g.add(k);
    keys.push(k);
    const pc = WHITE[w % 7];
    if (pc !== 4 && pc !== 11 && w < 14) {
      const b = new THREE.Mesh(blackGeo, std(0x0d0d10, { roughness: 0.35 }));
      b.position.set(x0 + w * 0.029 + 0.0145, keyY + 0.014, keyZ - 0.02);
      g.add(b);
    }
  }

  const knobGeo = new THREE.CylinderGeometry(0.011, 0.013, 0.016, 8);
  for (let i = 0; i < 5; i++) {
    const knob = new THREE.Mesh(knobGeo, chrome);
    knob.position.set(-0.3 + i * 0.055, deckY + 0.096, STAND_Z - 0.085);
    knob.rotation.y = i * 0.7;
    g.add(knob);
  }
  const sliderGeo = new THREE.BoxGeometry(0.012, 0.01, 0.05);
  for (let i = 0; i < 3; i++) {
    const sl = new THREE.Mesh(sliderGeo, cream);
    sl.position.set(0.02 + i * 0.03, deckY + 0.093, STAND_Z - 0.085);
    g.add(sl);
  }
  const wheelGeo = new THREE.CylinderGeometry(0.024, 0.024, 0.014, 10);
  for (const sx of [-0.44, -0.4]) {
    const wheel = new THREE.Mesh(wheelGeo, rubber);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(sx, deckY + 0.1, STAND_Z - 0.06);
    g.add(wheel);
  }

  const drums = box(0.3, 0.06, 0.24, shell);
  drums.position.set(0.44, deckY + 0.03, STAND_Z - 0.02);
  drums.rotation.y = -0.35;
  g.add(drums);
  const readout = box(0.14, 0.006, 0.045, std(0x0a2a1a, { emissive: 0x2ec4c8, emissiveIntensity: 0.5 }));
  readout.position.set(0.005, 0.036, -0.08);
  drums.add(readout);

  const pads = [];
  const padGeo = new THREE.BoxGeometry(0.05, 0.014, 0.042);
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
      const m = std(0x2a2a32, { roughness: 0.45, emissive: 0x000000, emissiveIntensity: 1 });
      const p = new THREE.Mesh(padGeo, m);
      p.castShadow = true;
      p.position.set(-0.09 + c * 0.06, 0.036, 0.02 + r * 0.055);
      drums.add(p);
      pads.push({ mesh: p, mat: m });
    }
  }

  // Amp on the sand, patched to the synth.
  const amp = box(0.34, 0.28, 0.2, shell);
  amp.position.set(-0.62, 0.14, STAND_Z + 0.06);
  amp.rotation.y = 0.5;
  g.add(amp);
  const grille = box(0.24, 0.18, 0.02, std(0x2c2c34, { roughness: 0.9 }));
  grille.position.set(0, 0.01, 0.105);
  amp.add(grille);
  const ampCone = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.085, 0.03, 12), rubber);
  ampCone.rotation.x = Math.PI / 2;
  ampCone.position.set(0, 0.01, 0.115);
  amp.add(ampCone);

  const lead = std(0x14141a, { roughness: 0.7 });
  g.add(cable(new THREE.Vector3(-0.42, deckY + 0.05, STAND_Z - 0.12), new THREE.Vector3(-0.6, 0.24, STAND_Z + 0.02), 0.22, lead));
  g.add(cable(new THREE.Vector3(0.3, deckY + 0.05, STAND_Z - 0.12), new THREE.Vector3(0.42, deckY + 0.03, STAND_Z - 0.12), 0.14, lead));

  // Headphones: band over the crown, cups on the ears, lead down to the deck.
  const cans = new THREE.Group();
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.115, 0.012, 5, 14, Math.PI), std(0x16161a));
  band.rotation.y = Math.PI / 2;
  cans.add(band);
  for (const sd of [-1, 1]) {
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.046, 0.028, 12), std(0x1a1a1e, { metalness: 0.3 }));
    cup.rotation.z = Math.PI / 2;
    cup.position.set(sd * 0.118, -0.02, 0);
    cans.add(cup);
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.016, 10), rubber);
    pad.rotation.z = Math.PI / 2;
    pad.position.set(sd * 0.104, -0.02, 0);
    cans.add(pad);
  }
  g.userData.cans = cans;
  g.userData.keys = keys;
  g.userData.pads = pads;
  g.userData.keyY = keyY;
  g.userData.deck = { x: -0.06, y: keyY, z: keyZ, standZ: STAND_Z };
  g.userData.cableMat = lead;
  return g;
}

function el(tag, style, parent) {
  const n = document.createElement(tag);
  if (style) Object.assign(n.style, style);
  if (parent) parent.appendChild(n);
  return n;
}

function installCss() {
  if (typeof document === "undefined") return;
  if (document.getElementById("aus101-seq-css")) return;
  const css = document.createElement("style");
  css.id = "aus101-seq-css";
  css.textContent =
    "#aus101-seq,#aus101-seq *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}" +
    "#aus101-seq{position:fixed;z-index:16;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom,0px) + 8px));" +
    "transform:translateX(-50%);display:none;pointer-events:auto;padding:8px 8px 7px;" +
    "background:rgba(11,18,16,.78);border:1px solid rgba(251,246,234,.22);border-radius:10px;" +
    "box-shadow:0 8px 28px rgba(0,0,0,.35);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}" +
    "#aus101-seq .grid{display:grid;grid-template-columns:10px repeat(16,14px);gap:3px;align-items:center}" +
    "#aus101-seq .sw{width:8px;height:8px;border-radius:2px}" +
    "#aus101-seq button.st{width:14px;height:14px;padding:0;margin:0;border:0;border-radius:2px;" +
    "background:rgba(251,246,234,.12);cursor:pointer}" +
    "#aus101-seq button.st[data-on='1']{background:var(--c,#ffd76a)}" +
    "#aus101-seq button.st[data-now='1']{box-shadow:inset 0 0 0 1px #fff}" +
    "#aus101-seq .row{display:flex;gap:6px;justify-content:flex-end;margin-top:6px}" +
    "#aus101-seq .act{min-width:44px;height:22px;border:1px solid rgba(251,246,234,.28);border-radius:11px;" +
    "background:rgba(12,18,16,.5);color:#fbf6ea;font:600 10px/1 system-ui,sans-serif;letter-spacing:.04em;" +
    "padding:0 8px;cursor:pointer}" +
    "#aus101-seq-pad{position:fixed;z-index:15;left:50%;bottom:max(20px,calc(env(safe-area-inset-bottom,0px) + 10px));" +
    "transform:translateX(-50%);width:68px;height:68px;border-radius:50%;display:none;pointer-events:auto;" +
    "background:rgba(12,18,16,.4);border:1px solid rgba(251,246,234,.28);" +
    "box-shadow:0 4px 18px rgba(0,0,0,.28);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}" +
    "#aus101-seq-pad:active{background:rgba(255,215,106,.28)}";
  document.head.appendChild(css);
}

function mountUi(onToggle, onSave, onTake, onOpen) {
  installCss();
  let root = document.getElementById("aus101-seq");
  let pad = document.getElementById("aus101-seq-pad");
  if (root && pad) return { root, pad, cells: root._cells };
  root = el("div", null, document.body);
  root.id = "aus101-seq";
  const grid = el("div", null, root);
  grid.className = "grid";
  const cells = {};
  TRACKS.forEach((tr, ti) => {
    const sw = el("div", { background: PAD_COLS[ti] }, grid);
    sw.className = "sw";
    const row = [];
    for (let s = 0; s < 16; s++) {
      const b = el("button", null, grid);
      b.className = "st";
      b.type = "button";
      b.style.setProperty("--c", PAD_COLS[ti]);
      b.dataset.tr = tr;
      b.dataset.s = String(s);
      row.push(b);
    }
    cells[tr] = row;
  });
  root._cells = cells;
  const row = el("div", null, root);
  row.className = "row";
  const save = el("button", null, row);
  save.className = "act";
  save.type = "button";
  save.textContent = "SAVE";
  const take = el("button", null, row);
  take.className = "act";
  take.type = "button";
  take.textContent = "TAKE";
  save.addEventListener("pointerup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSave();
  });
  take.addEventListener("pointerup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    onTake();
  });
  grid.addEventListener("pointerup", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement) || !t.classList.contains("st")) return;
    e.preventDefault();
    e.stopPropagation();
    onToggle(t.dataset.tr, parseInt(t.dataset.s, 10));
  });

  pad = el("div", null, document.body);
  pad.id = "aus101-seq-pad";
  pad.title = "KeyE — open sequencer";
  pad.setAttribute("aria-label", "KeyE — open sequencer");
  pad.addEventListener("pointerup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    onOpen();
  });
  return { root, pad, cells };
}

/**
 * @param {import("three").Scene} scene
 * @returns {{ tick: (t:number) => void, position: import("three").Vector3, tryInteract: Function, pattern: object }}
 */
export function spawnSynthRig(scene) {
  const root = new THREE.Group();
  root.name = "synth-rig";
  root.position.set(15.6, 0, 4.2);
  root.rotation.y = 0.35;

  const lad = ken({ hair: 0x3a2218, shorts: 0x1a1a22, skin: 0xc68642 });
  lad.name = "synth-lad";
  lad.userData.kind = "ken";
  root.add(lad);

  const gear = makeGear();
  root.add(gear);
  const cans = gear.userData.cans;
  const body = lad.userData.body;
  const { headY, headR } = body;
  cans.position.set(0, headY + headR * 0.62, 0);
  lad.add(cans);
  // Headphone lead: cup to the deck, so the cans are plugged into something.
  const deck = gear.userData.deck;
  lad.add(
    cable(
      new THREE.Vector3(-headR * 1.05, headY + headR * 0.4, 0),
      new THREE.Vector3(deck.x - 0.3, deck.y - 0.02, deck.standZ - 0.12),
      0.12,
      gear.userData.cableMat
    )
  );

  const bodyM = std(0x16161a, { roughness: 0.45, metalness: 0.2 });
  const labelM = std(0xe07030, { roughness: 0.55 });
  for (let i = 0; i < 3; i++) {
    const c = makeCassette(bodyM, labelM);
    c.position.set(0.3 - i * 0.02, deck.y + 0.03 + i * 0.015, deck.standZ - 0.16);
    c.rotation.y = 0.2 + i * 0.08;
    gear.add(c);
  }
  const loose = makeCassette(bodyM, std(0xffd76a, { roughness: 0.5 }));
  loose.position.set(-0.34, deck.y + 0.03, deck.standZ - 0.17);
  loose.visible = false;
  gear.add(loose);

  scene.add(root);

  const pattern = starterPattern();
  let open = false;
  let pending = null;
  let prevE = false;
  let prevEnter = false;
  let prevT = false;
  let preview = null;

  function paintGrid() {
    if (!ui) return;
    for (const tr of TRACKS) {
      const row = ui.cells[tr];
      const data = pattern[tr];
      for (let s = 0; s < 16; s++) row[s].dataset.on = data[s] ? "1" : "0";
    }
  }

  function paintPlayhead(step) {
    if (!ui || !open) return;
    for (const tr of TRACKS) {
      const row = ui.cells[tr];
      for (let s = 0; s < 16; s++) row[s].dataset.now = s === step ? "1" : "0";
    }
  }

  function ensurePreview() {
    const ctx = acquireCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();
    if (!preview) {
      preview = createPatternBed(ctx, ctx.destination, pattern, { peak: 0.48 });
    }
    preview.setMix(0.4, 0.06);
    preview.start();
  }

  function stopPreview() {
    preview?.setMix(0, 0.08);
    preview?.stop();
  }

  function setOpen(v) {
    if (v === open) return;
    open = v;
    if (ui) {
      ui.root.style.display = open ? "block" : "none";
      ui.pad.style.display = "none";
    }
    if (open) {
      document.exitPointerLock?.();
      paintGrid();
      ensurePreview();
    } else {
      stopPreview();
    }
  }

  function showPad(on) {
    if (!ui) return;
    ui.pad.style.display = on && !open ? "block" : "none";
  }

  const ui =
    typeof document !== "undefined"
      ? mountUi(
          (tr, s) => {
            if (!pattern[tr]) return;
            pattern[tr][s] = pattern[tr][s] ? 0 : 1;
            paintGrid();
          },
          () => {
            pending = "save";
            loose.visible = true;
          },
          () => {
            pending = "take";
            loose.visible = false;
          },
          () => {
            pending = "open";
            setOpen(true);
          }
        )
      : null;

  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      if (e.code === "KeyE") acquireCtx();
    });
  }

  function tryInteract(playerPos, keys) {
    const inRange = distXZ(playerPos, root.position) <= RANGE;
    const eDown = !!keys?.KeyE;
    const enterDown = !!(keys?.Enter || keys?.NumpadEnter);
    const tDown = !!keys?.KeyT;
    const eEdge = eDown && !prevE;
    const enterEdge = enterDown && !prevEnter;
    const tEdge = tDown && !prevT;
    prevE = eDown;
    prevEnter = enterDown;
    prevT = tDown;

    if (!inRange) {
      if (open) setOpen(false);
      showPad(false);
      pending = null;
      return null;
    }

    showPad(!open);
    let act = null;
    if (pending) {
      act = pending;
      pending = null;
    }

    if (eEdge) {
      if (!open) {
        setOpen(true);
        return "open";
      }
      setOpen(false);
      return null;
    }
    if (open && enterEdge) {
      loose.visible = true;
      return "save";
    }
    if (open && tEdge) {
      loose.visible = false;
      return "take";
    }
    if (act === "open") {
      setOpen(true);
      return "open";
    }
    if (act === "save" || act === "take") return act;
    return null;
  }

  return {
    tick(t) {
      const s = Math.sin(t * 7.2);
      lad.rotation.y = Math.sin(t * 0.7) * 0.05;
      // Hands ride the keys: wrists just above and behind the key tops, walking
      // the keyboard in opposition. Solved every frame off the real arm joints.
      for (const side of [-1, 1]) {
        const ph = t * 3.6 + (side > 0 ? 1.7 : 0);
        _key.set(
          deck.x + side * (0.16 + Math.sin(ph) * 0.07),
          deck.y + 0.1 + Math.abs(Math.sin(ph * 2)) * 0.02,
          deck.z - 0.05
        );
        // gear sits under root; the lad sways, so pull the target into his space.
        _key.applyAxisAngle(UP, -lad.rotation.y);
        armIK(lad, side, _key, side * 0.85);
      }
      if (body.head) {
        body.head.rotation.x = 0.22 + Math.sin(t * 1.4) * 0.05;
        body.head.rotation.z = Math.sin(t * 0.9) * 0.06;
      }
      const step = preview?.running ? preview.step : (t * 3.1) & 15;
      const pads = gear.userData.pads;
      for (let i = 0; i < pads.length; i++) {
        const on = open && (step & 7) === i;
        pads[i].mat.emissive.setHex(on ? NOTES_GLOW[i % 4] : 0x000000);
      }
      const keys = gear.userData.keys;
      for (let i = 0; i < keys.length; i++) {
        keys[i].position.y = 0.505 + (open && (step % 12) === i ? 0.006 : 0);
      }
      if (open) paintPlayhead(preview?.step ?? 0);
    },
    position: root.position,
    tryInteract,
    get pattern() {
      return pattern;
    },
    snapshot() {
      return clonePattern(pattern);
    },
    get open() {
      return open;
    },
  };
}
