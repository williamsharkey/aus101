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

/**
 * Pick the next action. Returns { type, ... }.
 * types: paint | load | squeeze | knife | clean | switch
 */
export function chooseAction(studio, patches) {
  const next = patches.slice(0, WEIGHTS.cluster);
  if (!next.length) return { type: "idle" };
  const mean = meanTarget(next);
  const span = regionSize(next);
  const wantFat = span > 0.22 && next[0].err > 40;
  const wantId = wantFat ? "fat" : "thin";
  const brush = studio.brush;
  const brushRgb = studio.rgbOfBrush();
  const curE = dEcol(brushRgb, mean);

  if (studio.active !== wantId && brush.load < 0.5) {
    return { type: "switch", id: wantId, why: "region scale" };
  }

  if (brush.load >= studio.spec.use * 0.5 && curE < WEIGHTS.goodEnough) {
    return {
      type: "paint",
      patch: next[0],
      kind: next[0].err > 90 && !wantFat ? "dot" : "dash",
      why: `use load dE=${curE.toFixed(1)}`,
    };
  }

  if (brush.load >= studio.spec.use * 0.5 && curE < WEIGHTS.remix) {
    return { type: "paint", patch: next[0], kind: "dash", why: `keep going dE=${curE.toFixed(1)}` };
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

export function collectPatches(view, paint, w, h, stride = 3) {
  const out = [];
  for (let y = 1; y < h - 1; y += stride) {
    for (let x = 1; x < w - 1; x += stride) {
      const i = (y * w + x) * 4;
      const dr = view[i] - paint[i];
      const dg = view[i + 1] - paint[i + 1];
      const db = view[i + 2] - paint[i + 2];
      const err = Math.sqrt(dr * dr + dg * dg + db * db);
      if (err < 12) continue;
      out.push({
        u: (x + 0.5) / w,
        v: (y + 0.5) / h,
        r: view[i],
        g: view[i + 1],
        b: view[i + 2],
        err,
      });
    }
  }
  out.sort((a, b) => b.err - a.err);
  return out;
}
