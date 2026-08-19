/**
 * 12-slot reticule bay. CSS overlay for tracked adult paint targets.
 * Chrome frame, red SUBJECT / TELOMERE readout. No WASD labels.
 */
import { coveragePercent } from "../game/coverage.js";

const MAX = 12;
const DOSE_RATE = 0.02;
const FREEZE_AT = 0.85;
const CSS_ID = "aus101-reticule-css";

function meshOf(npc) {
  if (!npc) return null;
  return npc.mesh || npc;
}

function kindOf(npc) {
  if (!npc) return null;
  return npc.kind || npc.mesh?.userData?.kind || npc.userData?.kind || null;
}

function isAdultPaintTarget(npc) {
  const mesh = meshOf(npc);
  if (!mesh) return false;
  const ud = mesh.userData || {};
  const age = npc.ageBand ?? ud.ageBand;
  const kind = kindOf(npc);
  if (age !== "adult") return false;
  if (ud.paintTarget === false) return false;
  if (kind === "sigma_07" || kind === "goth" || kind === "kid" || kind === "gull") return false;
  return true;
}

function readCoverage(npc) {
  const n = coveragePercent(npc);
  if (Number.isFinite(n)) return Math.min(1, Math.max(0, n));
  const mesh = meshOf(npc);
  const c = mesh?.userData?.coverage;
  return Number.isFinite(c) ? Math.min(1, Math.max(0, c)) : 0;
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function installCss() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CSS_ID)) return;
  const style = document.createElement("style");
  style.id = CSS_ID;
  style.textContent = `
#aus101-reticule{
  position:fixed;
  z-index:12;
  pointer-events:none;
  left:max(8px, env(safe-area-inset-left, 0px));
  top:max(8px, env(safe-area-inset-top, 0px));
  display:grid;
  grid-template-columns:repeat(6, minmax(86px, 1fr));
  gap:4px;
  max-width:min(920px, calc(100vw - 16px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)));
  font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
  -webkit-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color:transparent;
}
@media (orientation:landscape){
  #aus101-reticule{top:max(20px, env(safe-area-inset-top, 0px));}
}
@media (max-width:699px){
  #aus101-reticule{grid-template-columns:minmax(112px, 44vw);}
}
.aus101-ret-slot{
  pointer-events:none;
  box-sizing:border-box;
  min-height:22px;
  padding:3px 6px;
  border:1px solid rgba(196,160,80,0.42);
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 1px rgba(255,180,80,0.1);
  background:linear-gradient(180deg, rgba(42,30,16,0.72), rgba(10,12,10,0.78));
  color:#ff1818;
  font-size:9px;
  line-height:1.25;
  letter-spacing:0.07em;
  text-transform:uppercase;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  cursor:pointer;
}
.aus101-ret-slot.is-empty{
  pointer-events:none;
  opacity:0.22;
  color:rgba(255,40,40,0.55);
}
.aus101-ret-slot.is-live{pointer-events:auto;}
.aus101-ret-slot.is-applying{
  border-color:#e0b040;
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 2px #e0b040;
}
.aus101-ret-slot.is-locked{
  border-color:rgba(70,180,90,0.7);
  color:#7dff8a;
}
.aus101-ret-slot.is-sel{
  border-color:#f2c12e;
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 2px #f2c12e;
}
.aus101-ret-slot.is-burn{
  color:#ff3a3a;
  animation:aus101-ret-flash 0.42s steps(2, end) infinite;
}
@keyframes aus101-ret-flash{
  0%,49%{background:rgba(110,8,8,0.88);color:#ff4444;}
  50%,100%{background:rgba(18,6,6,0.8);color:#ffd0d0;}
}
`.trim();
  document.head.appendChild(style);
}

function el(tag, className, parent) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (parent) parent.appendChild(n);
  return n;
}

/**
 * @param {{ onSelect?: (slot: object) => void }} [opts]
 */
export function createReticuleBay(opts = {}) {
  installCss();

  const root = el("div");
  root.id = "aus101-reticule";
  root.setAttribute("aria-label", "Reticule bay");

  /** @type {{ id:number, kind:string|null, mesh:object|null, coverage:number, dose:number, burn:boolean, applying:boolean, _seq:number, _prevCov:number }[]} */
  const slots = [];
  const cells = [];
  let seq = 0;
  let selected = -1;

  for (let i = 0; i < MAX; i++) {
    slots.push({
      id: i,
      kind: null,
      mesh: null,
      coverage: 0,
      dose: 0,
      burn: false,
      applying: false,
      _seq: 0,
      _prevCov: 0,
    });
    const cell = el("div", "aus101-ret-slot is-empty", root);
    cell.dataset.slot = String(i);
    cell.addEventListener("pointerdown", (e) => {
      const slot = slots[i];
      if (!slot.mesh) return;
      e.preventDefault();
      e.stopPropagation();
      selected = i;
      opts.onSelect?.(slot);
      root.dispatchEvent(new CustomEvent("aus101-reticule-select", { detail: slot }));
      paintAll();
    });
    cells.push(cell);
  }

  function label(slot) {
    const n = pad2(slot.id + 1);
    if (!slot.mesh) return `SUBJECT ${n} // ——`;
    if (slot.burn || slot.dose > 1) return `SUBJECT ${n} // BURN`;
    const telo = Math.max(0, Math.round((1 - slot.dose) * 100));
    return `SUBJECT ${n} // TELOMERE ${telo}%`;
  }

  function paintSlot(i) {
    const slot = slots[i];
    const cell = cells[i];
    cell.textContent = label(slot);
    const live = !!slot.mesh;
    cell.className = "aus101-ret-slot";
    if (!live) cell.classList.add("is-empty");
    else cell.classList.add("is-live");
    if (live && (slot.burn || slot.dose > 1)) cell.classList.add("is-burn");
    else if (live && slot.coverage >= FREEZE_AT) cell.classList.add("is-locked");
    if (live && slot.applying) cell.classList.add("is-applying");
    if (live && selected === i) cell.classList.add("is-sel");
  }

  function paintAll() {
    for (let i = 0; i < MAX; i++) paintSlot(i);
  }

  function occupy(slot, npc) {
    const mesh = meshOf(npc);
    const ud = mesh.userData || (mesh.userData = {});
    slot.kind = kindOf(npc);
    slot.mesh = mesh;
    slot.coverage = readCoverage(npc);
    slot.dose = Number.isFinite(ud.dose) ? ud.dose : 0;
    slot.burn = slot.dose > 1 || !!ud.burn;
    slot.applying = false;
    slot._seq = ++seq;
    slot._prevCov = slot.coverage;
    ud.dose = slot.dose;
    if (slot.burn) ud.burn = true;
    paintSlot(slot.id);
  }

  function clearSlot(slot) {
    slot.kind = null;
    slot.mesh = null;
    slot.coverage = 0;
    slot.dose = 0;
    slot.burn = false;
    slot.applying = false;
    slot._seq = 0;
    slot._prevCov = 0;
    if (selected === slot.id) selected = -1;
    paintSlot(slot.id);
  }

  /**
   * Add an adult paint target. No-op if already tracked. Evicts oldest past 12.
   * @param {{ mesh?: object, kind?: string, ageBand?: string } | object} npc
   */
  function track(npc) {
    if (!isAdultPaintTarget(npc)) return null;
    const mesh = meshOf(npc);
    const existing = slots.find((s) => s.mesh === mesh);
    if (existing) return existing;
    let slot = slots.find((s) => !s.mesh);
    if (!slot) {
      slot = slots.reduce((a, b) => (a._seq <= b._seq ? a : b));
      clearSlot(slot);
    }
    occupy(slot, npc);
    return slot;
  }

  /**
   * Accrue UV on tracked subjects who are not being painted this frame.
   * coverage >= 0.85 freezes dose. dose > 1 marks BURN and flashes.
   * @param {number} dt seconds
   * @param {{ mesh?: object } | object | null} [painted]
   */
  function tick(dt, painted) {
    const paintedMesh = meshOf(painted);
    const step = Number.isFinite(dt) ? Math.max(0, dt) : 0;
    for (const slot of slots) {
      if (!slot.mesh) continue;
      const cov = readCoverage(slot.mesh);
      slot.coverage = cov;
      const rose = cov > slot._prevCov + 1e-5;
      const painting = paintedMesh === slot.mesh || rose;
      slot.applying = painting;
      slot._prevCov = cov;
      if (cov < FREEZE_AT && !painting) {
        slot.dose += (1 - cov) * step * DOSE_RATE;
      }
      if (slot.dose > 1) slot.burn = true;
      const ud = slot.mesh.userData || (slot.mesh.userData = {});
      ud.coverage = cov;
      ud.dose = slot.dose;
      if (slot.burn) ud.burn = true;
      paintSlot(slot.id);
    }
  }

  paintAll();

  return { track, tick, html: root, slots };
}
