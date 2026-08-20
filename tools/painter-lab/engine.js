import { createStudio } from "../../src/paint/studio.js";
import { chooseAction, collectPatches } from "../../src/paint/policy.js";
import { linToRgb255 } from "../../src/paint/color.js";

function blank(w, h, r = 244, g = 239, b = 228) {
  const d = new Uint8ClampedArray(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    d[i * 4] = r;
    d[i * 4 + 1] = g;
    d[i * 4 + 2] = b;
    d[i * 4 + 3] = 255;
  }
  return d;
}

function sample(src, sw, sh, u, v) {
  const x = Math.min(sw - 1, Math.max(0, (u * sw) | 0));
  const y = Math.min(sh - 1, Math.max(0, (v * sh) | 0));
  const i = (y * sw + x) * 4;
  return [src[i], src[i + 1], src[i + 2]];
}

function stamp(dst, w, h, u, v, rgb, radius, kind) {
  const cx = u * w;
  const cy = v * h;
  const rx = kind === "dash" ? radius * 1.8 : radius;
  const ry = kind === "dash" ? radius * 0.55 : radius;
  const x0 = Math.max(0, (cx - rx) | 0);
  const x1 = Math.min(w - 1, (cx + rx) | 0);
  const y0 = Math.max(0, (cy - ry) | 0);
  const y1 = Math.min(h - 1, (cy + ry) | 0);
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const dx = (x + 0.5 - cx) / rx;
      const dy = (y + 0.5 - cy) / ry;
      const d2 = dx * dx + dy * dy;
      if (d2 > 1) continue;
      const a = (1 - d2) * 0.72;
      const i = (y * w + x) * 4;
      dst[i] = dst[i] * (1 - a) + rgb.r * a;
      dst[i + 1] = dst[i + 1] * (1 - a) + rgb.g * a;
      dst[i + 2] = dst[i + 2] * (1 - a) + rgb.b * a;
    }
  }
}

function mae(view, paint) {
  let s = 0;
  const n = view.length / 4;
  for (let i = 0; i < view.length; i += 4) {
    s += Math.abs(view[i] - paint[i]) + Math.abs(view[i + 1] - paint[i + 1]) + Math.abs(view[i + 2] - paint[i + 2]);
  }
  return s / (n * 3);
}

export function runSession(view, vw, vh, { maxSteps = 900, size = 160, collect = collectPatches } = {}) {
  // Downsample view into size×size
  const V = new Uint8ClampedArray(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const [r, g, b] = sample(view, vw, vh, (x + 0.5) / size, (y + 0.5) / size);
      const i = (y * size + x) * 4;
      V[i] = r;
      V[i + 1] = g;
      V[i + 2] = b;
      V[i + 3] = 255;
    }
  }
  const P = blank(size, size);
  const studio = createStudio();
  let steps = 0;
  let paints = 0;
  while (steps < maxSteps) {
    steps += 1;
    const patches = collect(V, P, size, size, 2);
    if (!patches.length) break;
    const act = chooseAction(studio, patches);
    if (act.type === "idle") break;
    if (act.type === "switch") studio.switchBrush(act.id);
    else if (act.type === "clean") studio.clean();
    else if (act.type === "load") studio.load(act.well, act.n);
    else if (act.type === "squeeze") {
      studio.squeeze(act.tube, act.well, act.amount);
      if (act.follow) studio.squeeze(act.follow.tube, act.follow.well, act.follow.amount);
      studio.load(act.well, 6);
    } else if (act.type === "knife") studio.knife(act.src, act.dst, act.amount);
    else if (act.type === "paint") {
      if (!studio.spend()) {
        studio.clean();
        continue;
      }
      const rgb = studio.rgbOfBrush();
      if (!rgb) continue;
      const rad = studio.spec.width * size;
      stamp(P, size, size, act.patch.u, act.patch.v, rgb, rad, act.kind);
      paints += 1;
    }
  }
  return {
    mae: mae(V, P),
    paints,
    steps,
    stats: studio.stats,
    paint: P,
    view: V,
    size,
    studio,
  };
}
