/**
 * CPU CoverageMap for paintable adults. 128² R8 DataTexture + Uint8Array.
 * ClothMask is conceptual: only skinMats receive zinc; cloth UV is skipped.
 * No extra renderer. No 512 maps.
 */
import * as THREE from "three";

export const MAP_SIZE = 128;
/** Texel counts as filmed once thickness crosses this (design step 0.02). */
const FILM = 6;
const ZINC = new THREE.Color(0xf3efe4);

const SKIP_KIND = new Set(["gull"]);

function meshOf(npc) {
  if (!npc) return null;
  return npc.mesh || npc;
}

function kindOf(npc) {
  const mesh = meshOf(npc);
  return npc?.kind || mesh?.userData?.kind || null;
}

/**
 * Gulls and anything with paintTarget===false stay dry. Everyone else with
 * a mesh can take zinc — kids keep ageBand "child" but still lather.
 */
export function isPaintable(npc) {
  const mesh = meshOf(npc);
  if (!mesh) return false;
  if (mesh.visible === false) return false;
  const ud = mesh.userData || {};
  const age = npc.ageBand ?? ud.ageBand;
  const kind = kindOf(npc);
  if (ud.paintTarget === false) return false;
  if (SKIP_KIND.has(kind) || age === "gull") return false;
  return true;
}

function hasClothGroup(mesh) {
  const skins = mesh.userData?.skinMats;
  if (!skins || !skins.length) return false;
  if (typeof mesh.traverse !== "function") {
    const k = mesh.userData?.kind;
    return k === "ken" || k === "babe";
  }
  let extra = false;
  mesh.traverse((o) => {
    if (extra || !o.isMesh) return;
    const m = o.material;
    if (m && skins.indexOf(m) < 0) extra = true;
  });
  return extra;
}

/** Bikini / shorts on the fake body atlas (v=0 feet, v=1 head). */
function isClothUV(kind, hasCloth, v) {
  if (!hasCloth) return false;
  if (kind === "babe") {
    if (v >= 0.18 && v <= 0.34) return true;
    if (v >= 0.5 && v <= 0.6) return true;
    return false;
  }
  if (kind === "ken") return v >= 0.2 && v <= 0.36;
  return v >= 0.18 && v <= 0.34;
}

/** Skin texels only. Hair / shoes stay out of the mean. */
function isSkinUV(kind, hasCloth, v) {
  if (v < 0.08 || v > 0.86) return false;
  return !isClothUV(kind, hasCloth, v);
}

function countSkin(kind, hasCloth, size) {
  let n = 0;
  const inv = 1 / size;
  for (let y = 0; y < size; y++) {
    if (!isSkinUV(kind, hasCloth, (y + 0.5) * inv)) continue;
    n += size;
  }
  return n || size * size;
}

/**
 * Lazy 128² CoverageMap on a paintable adult. Returns null if unpaintable.
 * @param {{ mesh?: object } | object} npc
 */
export function ensureCoverageMap(npc) {
  if (!isPaintable(npc)) return null;
  const mesh = meshOf(npc);
  const ud = mesh.userData;
  // A caller can hand us a bare position stand-in; refuse rather than throw.
  if (!ud) return null;
  if (ud.coverageMap) return ud.coverageMap;
  const size = MAP_SIZE;
  const data = new Uint8Array(size * size);
  const thick = new Float32Array(size * size);
  const tex = new THREE.DataTexture(data, size, size, THREE.RedFormat, THREE.UnsignedByteType);
  tex.name = "CoverageMap";
  tex.needsUpdate = false;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.flipY = false;
  tex.colorSpace = THREE.NoColorSpace;
  const kind = kindOf(npc);
  const hasCloth = hasClothGroup(mesh);
  const map = {
    size,
    data,
    thick,
    tex,
    kind,
    hasCloth,
    sum: 0,
    coated: 0,
    skinCount: countSkin(kind, hasCloth, size),
  };
  ud.coverageMap = map;
  ud.coverageTex = tex;
  if (!Number.isFinite(ud.coverage)) ud.coverage = 0;
  return map;
}

/**
 * Falloff disk `pow(1 - r, 1.6)`. U wraps (body cylinder). Cloth texels skipped.
 * @returns {number} coverage 0..1
 */
export function stampCoverage(npc, u, v, radius, amount) {
  const map = ensureCoverageMap(npc);
  if (!map || !(amount > 0) || !(radius > 0)) return coveragePercent(npc);
  const size = map.size;
  const data = map.data;
  const thick = map.thick;
  const rPx = Math.max(0.5, radius * size);
  const cx = (((u % 1) + 1) % 1) * size;
  const cy = Math.min(1, Math.max(0, v)) * size;
  const r2 = rPx * rPx;
  const x0 = Math.floor(cx - rPx);
  const x1 = Math.ceil(cx + rPx);
  const y0 = Math.max(0, Math.floor(cy - rPx));
  const y1 = Math.min(size - 1, Math.ceil(cy + rPx));
  const invR = 1 / rPx;
  const invS = 1 / size;
  let sum = map.sum;
  let coated = map.coated;
  for (let y = y0; y <= y1; y++) {
    const dy = y + 0.5 - cy;
    const vv = (y + 0.5) * invS;
    if (!isSkinUV(map.kind, map.hasCloth, vv)) continue;
    for (let x = x0; x <= x1; x++) {
      const dx = x + 0.5 - cx;
      const d2 = dx * dx + dy * dy;
      if (d2 > r2) continue;
      const xu = ((x % size) + size) % size;
      const d = Math.sqrt(d2) * invR;
      const fall = Math.pow(1 - d, 1.6);
      const i = y * size + xu;
      const prev = data[i];
      const t = thick[i] + amount * fall;
      thick[i] = t > 1 ? 1 : t;
      const stored = (thick[i] * 255 + 0.5) | 0;
      sum += stored - prev;
      if (prev < FILM && stored >= FILM) coated++;
      data[i] = stored;
    }
  }
  map.sum = sum;
  map.coated = coated;
  map.tex.needsUpdate = true;
  const t = coveragePercent(npc);
  const mesh = meshOf(npc);
  if (mesh) mesh.userData.coverage = t;
  return t;
}

/** Fraction of skin texels with film. Safe for a reticule HUD. */
export function coveragePercent(npc) {
  const mesh = meshOf(npc);
  if (!mesh) return 0;
  const map = mesh.userData?.coverageMap;
  if (!map || !map.skinCount) {
    const c = mesh.userData?.coverage;
    return Number.isFinite(c) ? Math.min(1, Math.max(0, c)) : 0;
  }
  return Math.min(1, Math.max(0, map.coated / map.skinCount));
}

/** True if this fake-UV sample is swimwear / a non-paint group. */
export function hitsCloth(npc, u, v) {
  const mesh = meshOf(npc);
  if (!mesh) return true;
  if (mesh.userData.paintTarget === false) return true;
  const map = mesh.userData.coverageMap;
  const kind = map?.kind ?? kindOf(npc);
  const hasCloth = map ? map.hasCloth : hasClothGroup(mesh);
  return isClothUV(kind, hasCloth, v);
}

/** Skin (not hair, shoes, or cloth) on the fake body atlas. */
export function isPaintableUV(npc, u, v) {
  const mesh = meshOf(npc);
  if (!mesh) return false;
  if (mesh.userData.paintTarget === false) return false;
  const map = mesh.userData.coverageMap;
  const kind = map?.kind ?? kindOf(npc);
  const hasCloth = map ? map.hasCloth : hasClothGroup(mesh);
  return isSkinUV(kind, hasCloth, v);
}

/** Mean film 0..1 in a small disk. Missing map → 0. */
export function sampleThickness(npc, u, v, radius = 0.08) {
  const mesh = meshOf(npc);
  const map = mesh?.userData?.coverageMap;
  if (!map?.data || !map.size) return 0;
  const size = map.size;
  const data = map.data;
  const rPx = Math.max(1, radius * size);
  const cx = (((u % 1) + 1) % 1) * size;
  const cy = Math.min(1, Math.max(0, v)) * size;
  const r2 = rPx * rPx;
  const x0 = Math.floor(cx - rPx);
  const x1 = Math.ceil(cx + rPx);
  const y0 = Math.max(0, Math.floor(cy - rPx));
  const y1 = Math.min(size - 1, Math.ceil(cy + rPx));
  let sum = 0;
  let n = 0;
  for (let y = y0; y <= y1; y++) {
    const dy = y + 0.5 - cy;
    for (let x = x0; x <= x1; x++) {
      const dx = x + 0.5 - cx;
      if (dx * dx + dy * dy > r2) continue;
      const xu = ((x % size) + size) % size;
      sum += data[y * size + xu];
      n++;
    }
  }
  return n ? sum / (n * 255) : 0;
}

/** Belly / shoulder / cheek / shin plus a few wrap-around lobes. v=0 feet. */
const BARE_SITES = [
  [0.5, 0.48],
  [0.22, 0.7],
  [0.78, 0.7],
  [0.42, 0.8],
  [0.58, 0.8],
  [0.42, 0.16],
  [0.58, 0.16],
  [0.0, 0.5],
  [0.0, 0.74],
  [0.28, 0.46],
  [0.72, 0.46],
  [0.5, 0.64],
  [0.5, 0.28],
  [0.0, 0.28],
  [0.18, 0.56],
  [0.82, 0.56],
];

function wrapDistU(a, b) {
  let d = a - b;
  d -= Math.round(d);
  return Math.abs(d);
}

/**
 * Least-covered skin UV on the fake atlas. Landmarks first, then a coarse
 * scan, then a dart among the barest few so the hand does not freeze.
 * @param {{ mesh?: object } | object} npc
 * @param {{ salt?: number, avoidU?: number, avoidV?: number, faceU?: number }} [opts]
 * @returns {{ u: number, v: number, thick: number } | null}
 */
export function findUnpaintedSample(npc, opts = {}) {
  const map = ensureCoverageMap(npc);
  if (!map) return null;
  const salt = opts.salt | 0;
  const avoidU = opts.avoidU;
  const avoidV = opts.avoidV;
  const faceU = opts.faceU;
  const hits = [];

  const consider = (u, v) => {
    if (!isPaintableUV(npc, u, v)) return;
    const thick = sampleThickness(npc, u, v, 0.07);
    let score = thick;
    if (faceU != null) score += wrapDistU(u, faceU) * 0.18 * (1 - thick);
    if (avoidU != null) {
      const du = wrapDistU(u, avoidU);
      const dv = Math.abs(v - (avoidV || 0));
      if (du + dv < 0.08) score += 0.35;
    }
    hits.push({ u, v, thick, score });
  };

  for (let i = 0; i < BARE_SITES.length; i++) consider(BARE_SITES[i][0], BARE_SITES[i][1]);

  const size = map.size;
  const stride = 8;
  const inv = 1 / size;
  for (let y = stride >> 1; y < size; y += stride) {
    const v = (y + 0.5) * inv;
    if (!isSkinUV(map.kind, map.hasCloth, v)) continue;
    for (let x = stride >> 1; x < size; x += stride) {
      consider((x + 0.5) * inv, v);
    }
  }
  if (!hits.length) return { u: 0.5, v: 0.4, thick: 0 };

  hits.sort((a, b) => a.score - b.score || a.thick - b.thick);
  const floor = hits[0].score;
  const pool = [];
  for (let i = 0; i < hits.length && pool.length < 5; i++) {
    if (hits[i].score <= floor + 0.12) pool.push(hits[i]);
  }
  const pick = pool[(salt >>> 0) % pool.length] || hits[0];
  return { u: pick.u, v: pick.v, thick: pick.thick };
}

/**
 * Lerp skinMats toward zinc from map average.
 * Only skinMats — cloth groups keep their own materials.
 */
export function applyCoverageToMats(npc) {
  const mesh = meshOf(npc);
  if (!mesh) return;
  const mats = mesh.userData.skinMats;
  const bare = mesh.userData.bareColor;
  if (!mats || !bare) return;
  const t = coveragePercent(npc);
  mesh.userData.coverage = t;
  for (const m of mats) {
    m.color.copy(bare).lerp(ZINC, t * 0.72);
    m.roughness = 0.68 * (1 - t) + 0.26 * t;
    m.metalness = 0.04 + t * 0.08;
  }
}
