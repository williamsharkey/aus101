/**
 * Beach UV clock. Coverage freezes dose at 85%. Unprotected adults take
 * several minutes to burn so the lotion loop has time to exist.
 */
import {
  applyCoverageToMats,
  applyTan,
  coveragePercent,
  ensureCoverageMap,
  isPaintable,
  isPaintableUV,
} from "./coverage.js";

export const DOSE_RATE = 0.012;
export const FREEZE_AT = 0.85;
export const WARN_AT = 0.7;
export const BURN_AT = 1;
/** 90% of paintables spawn already filmed. */
export const SPF_RATE = 0.9;

function meshOf(npc) {
  return npc?.mesh || npc || null;
}

function hash01(s) {
  let h = 2166136261;
  const str = String(s);
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return ((h >>> 0) % 10000) / 10000;
}

/**
 * Paint every skin texel to `amount` (0..1). Cloth / hair / shoes stay dry.
 * @param {object} npc
 * @param {number} amount
 * @returns {number} coverage 0..1
 */
export function coatCoverage(npc, amount) {
  const map = ensureCoverageMap(npc);
  if (!map) return 0;
  const a = amount < 0 ? 0 : amount > 1 ? 1 : amount;
  const stored = (a * 255 + 0.5) | 0;
  const size = map.size;
  const data = map.data;
  const thick = map.thick;
  const inv = 1 / size;
  let sum = 0;
  let coated = 0;
  const FILM = 6;
  for (let y = 0; y < size; y++) {
    const v = (y + 0.5) * inv;
    const row = y * size;
    for (let x = 0; x < size; x++) {
      const u = (x + 0.5) * inv;
      if (!isPaintableUV(npc, u, v)) continue;
      const i = row + x;
      data[i] = stored;
      thick[i] = a;
      sum += stored;
      if (stored >= FILM) coated++;
    }
  }
  map.sum = sum;
  map.coated = coated;
  if (map.tex) map.tex.needsUpdate = true;
  const t = coveragePercent(npc);
  const mesh = meshOf(npc);
  if (mesh) mesh.userData.coverage = t;
  applyCoverageToMats(npc);
  return t;
}

/**
 * 90% start with a random SPF film (0.58–0.98); the rest stay mostly bare.
 * Skip gull / t101 / cop. Dose drives tan (0 pale … 1 bronze), not redness.
 */
export function seedSpf(npc) {
  if (!isPaintable(npc)) return;
  const mesh = meshOf(npc);
  if (!mesh) return;
  const ud = mesh.userData || (mesh.userData = {});
  if (ud.spfSeeded) return;
  ud.spfSeeded = true;
  const kind = npc.kind || ud.kind || "";
  if (kind === "gull" || kind === "t101" || kind === "cop") {
    ud.dose = 0;
    return;
  }
  const key = `${mesh.id}|${mesh.position?.x}|${mesh.position?.z}|${kind}`;
  const h = hash01(key);
  if (h < SPF_RATE) {
    const film = 0.58 + (h / SPF_RATE) * 0.4;
    coatCoverage(npc, film);
    ud.dose = 0.02 + (1 - h) * 0.16;
  } else {
    ud.dose = 0.12 + (h - SPF_RATE) * 2.2;
  }
  applyTan(npc);
}

/**
 * Accrue UV on every paintable. Nearby HUD slots only *display* this.
 * @param {object[]} cast
 * @param {number} dt
 * @param {object|null} [painted]
 */
export function tickSun(cast, dt, painted) {
  if (!cast) return;
  const step = Number.isFinite(dt) ? Math.max(0, dt) : 0;
  const paintedMesh = painted?.mesh || painted || null;
  for (const npc of cast) {
    if (!isPaintable(npc)) continue;
    const mesh = meshOf(npc);
    if (!mesh || mesh.visible === false) continue;
    const ud = mesh.userData || (mesh.userData = {});
    if (ud.paintTarget === false) continue;
    seedSpf(npc);
    const kind = npc.kind || ud.kind || "";
    if (kind === "t101" || kind === "cop") {
      ud.dose = 0;
      continue;
    }
    const cov = coveragePercent(npc);
    ud.coverage = cov;
    if (!step || cov >= FREEZE_AT) continue;
    const painting = paintedMesh === mesh;
    const sun = painting ? 0.22 : 1;
    ud.dose = (Number.isFinite(ud.dose) ? ud.dose : 0) + Math.max(0.15, 1 - cov) * step * DOSE_RATE * sun;
    applyTan(npc);
  }
}

export function isAboutToBurn(npc) {
  const mesh = meshOf(npc);
  const ud = mesh?.userData;
  if (!ud) return false;
  if (ud.burn) return false;
  const dose = Number.isFinite(ud.dose) ? ud.dose : 0;
  const cov = coveragePercent(npc);
  if (cov >= FREEZE_AT) return false;
  return dose >= WARN_AT;
}
