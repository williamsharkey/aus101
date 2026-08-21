/**
 * 12-slot reticule bay. track()/tick() stay as silent data sync for apply-flow.
 * The SUBJECT / TELOMERE overlay is suppressed — sun.js owns dose.
 */
import { coveragePercent } from "../game/coverage.js";

const MAX = 12;
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
  if (kind === "kid" || kind === "gull") return false;
  return true;
}

function readCoverage(npc) {
  const n = coveragePercent(npc);
  if (Number.isFinite(n)) return Math.min(1, Math.max(0, n));
  const mesh = meshOf(npc);
  const c = mesh?.userData?.coverage;
  return Number.isFinite(c) ? Math.min(1, Math.max(0, c)) : 0;
}

function installCss() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CSS_ID)) return;
  const style = document.createElement("style");
  style.id = CSS_ID;
  style.textContent = `
#aus101-reticule, #aus101-reticule.is-on{
  display:none !important;
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
export function createReticuleBay(_opts = {}) {
  installCss();

  const root = el("div");
  root.id = "aus101-reticule";
  root.setAttribute("aria-hidden", "true");
  root.style.display = "none";

  /** @type {{ id:number, kind:string|null, mesh:object|null, coverage:number, dose:number, burn:boolean, applying:boolean, _seq:number, _prevCov:number }[]} */
  const slots = [];
  let seq = 0;

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
   * Copy coverage / dose from the mesh. Does not accrue UV — parent calls tickSun.
   * @param {number} _dt unused
   * @param {{ mesh?: object } | object | null} [painted]
   */
  function tick(_dt, painted) {
    const paintedMesh = meshOf(painted);
    for (const slot of slots) {
      if (!slot.mesh) continue;
      const cov = readCoverage(slot.mesh);
      slot.coverage = cov;
      slot.applying = paintedMesh === slot.mesh || cov > slot._prevCov + 1e-5;
      slot._prevCov = cov;
      const ud = slot.mesh.userData || (slot.mesh.userData = {});
      slot.dose = Number.isFinite(ud.dose) ? ud.dose : 0;
      slot.burn = slot.dose > 1 || !!ud.burn;
      ud.coverage = cov;
    }
  }

  return { track, tick, html: root, slots, FREEZE_AT };
}
