/**
 * Beach synth lad — physical synth + drum machine, 16-step overlay.
 * E or the unlabeled pad opens the grid. SAVE writes a tape clip.
 */
import * as THREE from "three";
import { ken } from "../chars/npcs.js";
import {
  TRACKS,
  starterPattern,
  clonePattern,
  acquireCtx,
  createPatternBed,
} from "../audio/tapeDeck.js";

const RANGE = 2.6;
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

function armPivot(npc, side) {
  const parts = [];
  for (const c of [...npc.children]) {
    if (side * c.position.x > 0.15 && c.position.y > 0.85) parts.push(c);
  }
  const pivot = new THREE.Group();
  if (!parts.length) return pivot;
  const shoulder = parts.reduce((a, b) => (a.position.y >= b.position.y ? a : b));
  pivot.position.copy(shoulder.position);
  npc.add(pivot);
  for (const p of parts) {
    p.position.sub(pivot.position);
    pivot.add(p);
  }
  return pivot;
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

function makeGear() {
  const g = new THREE.Group();
  const shell = std(0x1a1a20, { roughness: 0.4, metalness: 0.38 });
  const cream = std(0xc8b89a, { roughness: 0.55 });
  const chrome = std(0x9aa0a8, { roughness: 0.28, metalness: 0.62 });
  const crateM = std(0x6a4428, { roughness: 0.82 });

  const crate = box(0.92, 0.42, 0.58, crateM);
  crate.position.set(0, 0.21, 0.62);
  g.add(crate);

  const synth = box(0.62, 0.07, 0.24, shell);
  synth.position.set(-0.12, 0.46, 0.58);
  g.add(synth);

  const panel = box(0.58, 0.008, 0.1, std(0x111118, { roughness: 0.35, metalness: 0.2 }));
  panel.position.set(-0.12, 0.5, 0.52);
  g.add(panel);

  const keys = [];
  for (let i = 0; i < 12; i++) {
    const black = i % 7 === 1 || i % 7 === 3 || i % 7 === 6;
    const k = box(0.038, 0.012, black ? 0.07 : 0.1, black ? std(0x111) : cream);
    k.position.set(-0.34 + i * 0.042, 0.505, 0.64);
    g.add(k);
    keys.push(k);
  }

  const drums = box(0.28, 0.06, 0.22, shell);
  drums.position.set(0.28, 0.455, 0.6);
  g.add(drums);

  const pads = [];
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
      const m = std(0x2a2a32, { roughness: 0.45, emissive: 0x000000, emissiveIntensity: 1 });
      const p = box(0.05, 0.012, 0.04, m);
      p.position.set(0.175 + c * 0.068, 0.492, 0.545 + r * 0.07);
      g.add(p);
      pads.push({ mesh: p, mat: m });
    }
  }

  const knob = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.018, 8), chrome));
  knob.position.set(0.12, 0.51, 0.5);
  g.add(knob);

  const cans = new THREE.Group();
  const band = box(0.2, 0.018, 0.16, std(0x111));
  band.position.y = 0.02;
  cans.add(band);
  for (const s of [-1, 1]) {
    const cup = box(0.03, 0.06, 0.06, std(0x1a1a1a, { metalness: 0.3 }));
    cup.position.set(s * 0.11, -0.02, 0);
    cans.add(cup);
  }
  g.userData.cans = cans;
  g.userData.keys = keys;
  g.userData.pads = pads;
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
  const { headY, headR } = lad.userData.body;
  cans.position.set(0, headY + headR * 0.15, 0);
  lad.add(cans);

  const L = armPivot(lad, -1);
  const R = armPivot(lad, 1);
  L.rotation.set(-0.92, -0.04, 0.55);
  R.rotation.set(-0.88, 0.06, -0.62);

  const bodyM = std(0x16161a, { roughness: 0.45, metalness: 0.2 });
  const labelM = std(0xe07030, { roughness: 0.55 });
  for (let i = 0; i < 3; i++) {
    const c = makeCassette(bodyM, labelM);
    c.position.set(0.38 - i * 0.02, 0.455 + i * 0.015, 0.42);
    c.rotation.y = 0.2 + i * 0.08;
    gear.add(c);
  }
  const loose = makeCassette(bodyM, std(0xffd76a, { roughness: 0.5 }));
  loose.position.set(-0.34, 0.455, 0.44);
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
    if (!preview) {
      preview = createPatternBed(ctx, ctx.destination, pattern, { peak: 0.3 });
    }
    preview.start();
    preview.setMix(0.85, 0.06);
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
      R.rotation.x = -0.88 + s * 0.1;
      L.rotation.z = 0.55 + Math.sin(t * 2.1) * 0.04;
      lad.rotation.y = Math.sin(t * 0.7) * 0.05;
      if (lad.userData.body?.head) {
        lad.userData.body.head.position.y = headY + Math.sin(t * 1.4) * 0.012;
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
