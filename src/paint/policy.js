import { deltaE, linToRgb255, rgbToLin } from "./color.js";
import { BRUSHES, WELL_CAP, solveTubes } from "./studio.js";

/** Weights: a working plein-air painter, not a color-matching robot. */
export const WEIGHTS = {
  time: 1.0,
  error: 0.045,
  mix: 6.5,
  clean: 3.2,
  switchB: 2.2,
  squeeze: 2.8,
  waste: 0.8,
  /** If current load is "close enough", keep painting. */
  goodEnough: 32,
  /** Remix only if mean dE of the next cluster is worse than this. */
  remix: 48,
  cluster: 6,
  /** Fat blocking-in for the first ~72 marks; the rest of a ~360 sitting is thin detail. */
  blockIn: 72,
};

function meanTarget(patches) {
  let r = 0,
    g = 0,
    b = 0;
  for (const p of patches) {
    r += p.r;
    g += p.g;
    b += p.b;
  }
  const n = patches.length || 1;
  return { r: (r / n) | 0, g: (g / n) | 0, b: (b / n) | 0 };
}

function dEcol(rgb, t) {
  if (!rgb) return 99;
  return deltaE(rgb.r, rgb.g, rgb.b, t.r, t.g, t.b);
}

function regionSize(patches) {
  if (patches.length < 2) return 0;
  let minX = 1,
    maxX = 0,
    minY = 1,
    maxY = 0;
  for (const p of patches) {
    if (p.u < minX) minX = p.u;
    if (p.u > maxX) maxX = p.u;
    if (p.v < minY) minY = p.v;
    if (p.v > maxY) maxY = p.v;
  }
  return Math.hypot(maxX - minX, maxY - minY);
}

function clusterMeanErr(patches) {
  let s = 0;
  for (const p of patches) s += p.err;
  return s / (patches.length || 1);
}

/**
 * Pick the next action. Returns { type, ... }.
 * types: paint | load | squeeze | knife | clean | switch
 * `paints` is marks on the current sitting (not lifetime studio.stats.strokes).
 */
export function chooseAction(studio, patches, paints = studio.stats.strokes) {
  const next = patches.slice(0, WEIGHTS.cluster);
  if (!next.length) return { type: "idle" };
  const mean = meanTarget(next);
  const span = regionSize(next);
  const meanErr = clusterMeanErr(next);
  // Blocking-in: first ~72 marks, or until mean error drops. Then a long thin-dot phase.
  const blocking = paints < WEIGHTS.blockIn && meanErr > 28;
  const wantFat = blocking
    ? span > 0.08 || next[0].err > 22
    : span > 0.28 && next[0].err > 50 && paints < 140;
  const wantId = blocking ? "fat" : "thin";
  const kind = blocking || wantFat ? "dash" : "dot";
  const brush = studio.brush;
  const brushRgb = studio.rgbOfBrush();
  const curE = dEcol(brushRgb, mean);

  if (studio.active !== wantId && brush.load < 0.5) {
    return { type: "switch", id: wantId, why: blocking ? "block in" : "detail" };
  }

  if (brush.load >= studio.spec.use * 0.5 && curE < WEIGHTS.goodEnough) {
    return {
      type: "paint",
      patch: next[0],
      kind,
      why: `use load dE=${curE.toFixed(1)}`,
    };
  }

  if (brush.load >= studio.spec.use * 0.5 && curE < WEIGHTS.remix) {
    return { type: "paint", patch: next[0], kind, why: `keep going dE=${curE.toFixed(1)}` };
  }

  if (brush.load > 0.4 && curE > 55) {
    return { type: "clean", why: "load way off, rinse" };
  }

  let bestWell = -1;
  let bestE = 1e9;
  for (let i = 0; i < studio.wells.length; i++) {
    const w = studio.wells[i];
    if (w.vol < 0.5) continue;
    const rgb = studio.rgbOfWell(i);
    const d = dEcol(rgb, mean);
    if (d < bestE) {
      bestE = d;
      bestWell = i;
    }
  }
  if (bestWell >= 0 && bestE < 34 && studio.wells[bestWell].vol >= 1) {
    const n = Math.min(6, Math.max(1, Math.ceil(studio.wells[bestWell].vol > 6 ? 6 : studio.wells[bestWell].vol)));
    return { type: "load", well: bestWell, n, why: `dip well ${bestWell} dE=${bestE.toFixed(1)}` };
  }

  // Mix: squeeze two tubes into an empty (or least) well, then knife if needed.
  const empty = studio.emptyWellIndex();
  const dest = empty >= 0 ? empty : studio.wells.reduce((a, _, i, arr) => (arr[i].vol < arr[a].vol ? i : a), 0);
  const recipe = solveTubes(rgbToLin(mean.r, mean.g, mean.b));
  if (recipe.parts.length && dest >= 0) {
    return {
      type: "squeeze",
      tube: recipe.parts[0].id,
      well: dest,
      amount: Math.min(WELL_CAP, recipe.parts[0].v),
      follow: recipe.parts[1]
        ? { type: "knifeOrSqueeze", tube: recipe.parts[1].id, well: dest, amount: recipe.parts[1].v }
        : null,
      why: `mix toward cluster dE~${recipe.dE.toFixed(1)}`,
    };
  }

  return { type: "paint", patch: next[0], kind: "dot", why: "fallback dab" };
}

function patchAt(view, paint, w, h, x, y) {
  const i = (y * w + x) * 4;
  const dr = view[i] - paint[i];
  const dg = view[i + 1] - paint[i + 1];
  const db = view[i + 2] - paint[i + 2];
  const err = Math.sqrt(dr * dr + dg * dg + db * db);
  const linen =
    Math.abs(paint[i] - 244) + Math.abs(paint[i + 1] - 239) + Math.abs(paint[i + 2] - 228);
  return {
    u: (x + 0.5) / w,
    v: (y + 0.5) / h,
    r: view[i],
    g: view[i + 1],
    b: view[i + 2],
    err,
    linen,
  };
}

/** Greedy max-error pixels. Sky vs linen always wins, so sand can starve. */
export function collectPatchesGreedy(view, paint, w, h, stride = 3) {
  const out = [];
  for (let y = 1; y < h - 1; y += stride) {
    for (let x = 1; x < w - 1; x += stride) {
      const p = patchAt(view, paint, w, h, x, y);
      if (p.err < 12) continue;
      out.push(p);
    }
  }
  out.sort((a, b) => b.err - a.err);
  return out;
}

/**
 * One candidate per tile, scored by view-error plus leftover linen so the
 * bottom half (sand ≈ linen) still gets blocking-in strokes.
 */
export function collectPatchesTiled(view, paint, w, h, stride = 2, tiles = 4) {
  const out = [];
  const tw = Math.max(1, (w / tiles) | 0);
  const th = Math.max(1, (h / tiles) | 0);
  for (let ty = 0; ty < tiles; ty++) {
    for (let tx = 0; tx < tiles; tx++) {
      const x0 = tx * tw;
      const y0 = ty * th;
      const x1 = tx === tiles - 1 ? w - 1 : Math.min(w - 1, x0 + tw);
      const y1 = ty === tiles - 1 ? h - 1 : Math.min(h - 1, y0 + th);
      let best = null;
      let linenN = 0;
      let n = 0;
      for (let y = Math.max(0, y0); y < y1; y += stride) {
        for (let x = Math.max(0, x0); x < x1; x += stride) {
          const p = patchAt(view, paint, w, h, x, y);
          n += 1;
          if (p.linen > 18) linenN += 1;
          const score = p.err + (p.linen > 18 ? 36 : 0);
          if (!best || score > best.score) best = { ...p, score };
        }
      }
      if (!best) continue;
      const linenFrac = n ? linenN / n : 0;
      best.score = best.err + linenFrac * 48;
      if (best.err < 8 && linenFrac < 0.12) continue;
      out.push(best);
    }
  }
  out.sort((a, b) => b.score - a.score);
  return out;
}

/** Coverage-boosted greedy: leftover linen is treated as work still to do. */
export function collectPatchesCoverage(view, paint, w, h, stride = 2) {
  const out = collectPatchesGreedy(view, paint, w, h, stride);
  for (const p of out) p.score = p.err + (p.linen > 18 ? 40 : 0);
  out.sort((a, b) => b.score - a.score);
  return out;
}

/** Default: greedy max-error. Lab: MAE 17.8 vs tiled 64 / coverage 31. */
export function collectPatches(view, paint, w, h, stride = 2) {
  return collectPatchesGreedy(view, paint, w, h, stride);
}
