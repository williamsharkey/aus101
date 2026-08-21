/**
 * 4x4 clip grid overlay for the Shita cave. Same chrome as #aus101-seq:
 * pointer-events auto, high z-index, Rec / Stop / Clear / Save.
 * Open only while the player is in the void cave.
 */
import * as THREE from "three";
import { createVoidLooper, PAD_N } from "../audio/voidLooper.js";

const CSS_ID = "aus101-void-css";

function el(tag, style, parent) {
  const n = document.createElement(tag);
  if (style) Object.assign(n.style, style);
  if (parent) parent.appendChild(n);
  return n;
}

function bindPress(node, fn) {
  let last = 0;
  const go = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    if (now - last < 50) return;
    last = now;
    fn(e);
  };
  node.addEventListener("pointerdown", go);
  node.addEventListener("click", go);
}

function installCss() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CSS_ID)) return;
  const css = document.createElement("style");
  css.id = CSS_ID;
  css.textContent =
    "#aus101-void,#aus101-void *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;touch-action:manipulation}" +
    "#aus101-void{position:fixed;z-index:26;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom,0px) + 8px));" +
    "transform:translateX(-50%);display:none;pointer-events:auto;padding:8px 8px 7px;" +
    "background:rgba(11,18,16,.82);border:1px solid rgba(251,246,234,.22);border-radius:10px;" +
    "box-shadow:0 8px 28px rgba(0,0,0,.35);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}" +
    "#aus101-void .pads{display:grid;grid-template-columns:repeat(4,36px);gap:5px}" +
    "#aus101-void button.pad{width:36px;height:36px;padding:0;margin:0;border:0;border-radius:4px;" +
    "background:rgba(251,246,234,.12);cursor:pointer;pointer-events:auto;touch-action:manipulation}" +
    "#aus101-void button.pad[data-clip='1']{background:var(--c,#ffd76a)}" +
    "#aus101-void button.pad[data-on='1']{box-shadow:inset 0 0 0 2px #fff}" +
    "#aus101-void button.pad[data-sel='1']{box-shadow:inset 0 0 0 2px #ffd76a}" +
    "#aus101-void button.pad[data-armed='1']{background:#c42a2a;box-shadow:inset 0 0 0 2px #fff}" +
    "#aus101-void .row{display:flex;gap:6px;justify-content:flex-end;margin-top:6px}" +
    "#aus101-void .act{min-width:44px;height:22px;border:1px solid rgba(251,246,234,.28);border-radius:11px;" +
    "background:rgba(12,18,16,.5);color:#fbf6ea;font:600 10px/1 system-ui,sans-serif;letter-spacing:.04em;" +
    "padding:0 8px;cursor:pointer;pointer-events:auto;touch-action:manipulation}" +
    "#aus101-void .act.rec{background:#c42a2a;border-color:#e44;color:#fff}";
  document.head.appendChild(css);
}

function makeMixerDesk() {
  const g = new THREE.Group();
  g.name = "void-mixer";
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.64, 0.06, 0.64),
    new THREE.MeshStandardMaterial({ color: 0x16161c, roughness: 0.45, metalness: 0.22 })
  );
  g.add(body);
  const pads3d = [];
  const geo = new THREE.BoxGeometry(0.12, 0.018, 0.12);
  for (let i = 0; i < PAD_N; i++) {
    const r = (i / 4) | 0;
    const c = i % 4;
    const mat = new THREE.MeshStandardMaterial({
      color: 0x2a2a32,
      emissive: 0x000000,
      emissiveIntensity: 0.2,
      roughness: 0.5,
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.set((c - 1.5) * 0.14, 0.04, (r - 1.5) * 0.14);
    g.add(m);
    pads3d.push(m);
  }
  return { group: g, pads3d };
}

function hexColor(css) {
  const s = (css || "#888").replace("#", "");
  return parseInt(s.length === 3 ? s[0] + s[0] + s[1] + s[1] + s[2] + s[2] : s, 16) || 0x888888;
}

/**
 * @param {{
 *   looper?: object,
 *   scene?: import("three").Scene,
 *   isOpen?: () => boolean,
 *   inCave?: () => boolean,
 * }} [opts]
 */
export function createVoidDeck(opts = {}) {
  const looper = opts.looper || createVoidLooper(opts);
  let open = false;
  let desk = null;

  installCss();
  let root = typeof document !== "undefined" ? document.getElementById("aus101-void") : null;
  if (!root && typeof document !== "undefined") {
    root = el("div", null, document.body);
    root.id = "aus101-void";
    const grid = el("div", null, root);
    grid.className = "pads";
    const cells = [];
    for (let i = 0; i < PAD_N; i++) {
      const b = el("button", null, grid);
      b.className = "pad";
      b.type = "button";
      b.dataset.i = String(i);
      bindPress(b, () => looper.togglePad(i));
      cells.push(b);
    }
    root._cells = cells;
    const row = el("div", null, root);
    row.className = "row";
    const rec = el("button", null, row);
    rec.className = "act rec";
    rec.type = "button";
    rec.textContent = "REC";
    const stop = el("button", null, row);
    stop.className = "act";
    stop.type = "button";
    stop.textContent = "STOP";
    const clr = el("button", null, row);
    clr.className = "act";
    clr.type = "button";
    clr.textContent = "CLEAR";
    const save = el("button", null, row);
    save.className = "act";
    save.type = "button";
    save.textContent = "SAVE";
    bindPress(rec, () => {
      looper.record();
    });
    bindPress(stop, () => looper.stop());
    bindPress(clr, () => looper.clear());
    bindPress(save, () => {
      looper.save().catch(() => {});
    });
  }

  function paint() {
    if (!root?._cells) return;
    const cells = root._cells;
    const sel = looper.selected;
    for (let i = 0; i < PAD_N; i++) {
      const p = looper.pads[i];
      const b = cells[i];
      if (!p || !b) continue;
      b.style.setProperty("--c", p.color);
      b.dataset.clip = p.buffer ? "1" : "0";
      b.dataset.on = p.playing ? "1" : "0";
      b.dataset.sel = sel === i && !p.playing ? "1" : "0";
      b.dataset.armed = p.armed ? "1" : "0";
    }
    const recBtn = root.querySelector?.(".act.rec");
    if (recBtn) recBtn.textContent = looper.recording ? "…" : "REC";
  }

  function paintDesk() {
    if (!desk) return;
    for (let i = 0; i < desk.pads3d.length; i++) {
      const p = looper.pads[i];
      const m = desk.pads3d[i];
      if (!p || !m) continue;
      const col = hexColor(p.color);
      if (p.armed) {
        m.material.emissive.setHex(0xc42a2a);
        m.material.emissiveIntensity = 1.1;
      } else if (p.playing) {
        m.material.emissive.setHex(col);
        m.material.emissiveIntensity = 0.9;
      } else if (p.buffer) {
        m.material.emissive.setHex(col);
        m.material.emissiveIntensity = 0.28;
      } else {
        m.material.emissive.setHex(0x000000);
        m.material.emissiveIntensity = 0.05;
      }
    }
  }

  function ensureDesk() {
    if (desk) return desk;
    const scene = opts.scene;
    if (!scene) return null;
    const host = scene.getObjectByName("void-deck");
    if (!host) return null;
    desk = makeMixerDesk();
    host.add(desk.group);
    return desk;
  }

  function setOpen(v) {
    const next = !!v;
    if (next === open) return;
    open = next;
    looper.setInCave(open);
    if (root) root.style.display = open ? "block" : "none";
    if (open) {
      document.exitPointerLock?.();
      ensureDesk();
      paint();
    }
  }

  function caveNow() {
    if (typeof opts.isOpen === "function") return !!opts.isOpen();
    if (typeof opts.inCave === "function") return !!opts.inCave();
    return open;
  }

  looper.onChange(paint);

  return {
    looper,
    el: root,
    isOpen: () => open,
    setOpen,
    tick() {
      setOpen(caveNow());
      looper.tick();
      ensureDesk();
      paint();
      paintDesk();
    },
  };
}
