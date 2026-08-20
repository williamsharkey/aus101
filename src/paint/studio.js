import { rgbToLin, linToRgb255, mixPigment, mixMany, deltaE } from "./color.js";

/** Infinite tubes. Names are painter-shop, not brands. */
export const TUBES = [
  { id: "white", name: "titanium white", rgb: [245, 244, 238] },
  { id: "yellow", name: "cad yellow", rgb: [242, 196, 42] },
  { id: "red", name: "cad red", rgb: [196, 48, 36] },
  { id: "ultra", name: "ultramarine", rgb: [36, 62, 158] },
  { id: "cerulean", name: "cerulean", rgb: [62, 148, 186] },
  { id: "green", name: "phthalo green", rgb: [18, 122, 88] },
  { id: "sienna", name: "burnt sienna", rgb: [138, 72, 36] },
  { id: "black", name: "ivory black", rgb: [28, 26, 24] },
].map((t) => ({ ...t, lin: rgbToLin(t.rgb[0], t.rgb[1], t.rgb[2]) }));

export const WELL_CAP = 20;
export const WELL_COUNT = 10;
export const BRUSH_MAX = 6;

export const BRUSHES = {
  fat: { id: "fat", width: 1 / 12, use: 2, clean: 1.2 },
  thin: { id: "thin", width: 1 / 20, use: 0.45, clean: 0.55 },
};

function emptyWell() {
  return { lin: [0.9, 0.88, 0.82], vol: 0, dirty: false };
}

export function createStudio() {
  const wells = Array.from({ length: WELL_COUNT }, emptyWell);
  const brushes = {
    fat: { id: "fat", lin: null, load: 0, dirty: 0 },
    thin: { id: "thin", lin: null, load: 0, dirty: 0 },
  };
  let active = "thin";
  const log = [];
  let t = 0;

  const stats = {
    strokes: 0,
    mixes: 0,
    squeezes: 0,
    cleans: 0,
    switches: 0,
    loads: 0,
    knife: 0,
    time: 0,
    wasted: 0,
  };

  function rgbOf(lin) {
    return linToRgb255(lin);
  }

  function squeeze(tubeId, wellI, amount = WELL_CAP) {
    const tube = TUBES.find((x) => x.id === tubeId);
    if (!tube) return false;
    const w = wells[wellI];
    const add = Math.min(amount, WELL_CAP - w.vol);
    if (add <= 0) return false;
    w.lin = w.vol <= 0 ? tube.lin.slice() : mixPigment(w.lin, w.vol, tube.lin, add);
    w.vol += add;
    w.dirty = true;
    stats.squeezes += 1;
    stats.time += 1.1;
    t += 1.1;
    log.push({ op: "squeeze", tube: tubeId, well: wellI, add });
    return true;
  }

  function knife(srcI, dstI, amount) {
    const s = wells[srcI];
    const d = wells[dstI];
    const take = Math.min(amount, s.vol, WELL_CAP - d.vol);
    if (take <= 0) return false;
    d.lin = d.vol <= 0 ? s.lin.slice() : mixPigment(d.lin, d.vol, s.lin, take);
    d.vol += take;
    s.vol -= take;
    if (s.vol < 0.05) {
      s.vol = 0;
      s.dirty = false;
    }
    d.dirty = true;
    stats.knife += 1;
    stats.time += 1.6;
    t += 1.6;
    log.push({ op: "knife", src: srcI, dst: dstI, take });
    return true;
  }

  function switchBrush(id) {
    if (id === active) return;
    if (!BRUSHES[id]) return;
    active = id;
    stats.switches += 1;
    stats.time += 0.55;
    t += 0.55;
    log.push({ op: "switch", id });
  }

  function clean() {
    const b = brushes[active];
    stats.wasted += b.load;
    b.load = 0;
    b.lin = null;
    b.dirty = 0;
    stats.cleans += 1;
    stats.time += BRUSHES[active].clean;
    t += BRUSHES[active].clean;
    log.push({ op: "clean", id: active });
  }

  function load(wellI, n) {
    const w = wells[wellI];
    const b = brushes[active];
    const want = Math.max(1, Math.min(BRUSH_MAX, n));
    const take = Math.min(want, w.vol);
    if (take < 0.4) return false;
    if (b.load > 0.2 && b.lin) {
      // leftover mixes into the new load (dirty brush)
      b.lin = mixPigment(b.lin, b.load * 0.25, w.lin, take);
      stats.wasted += b.load * 0.15;
    } else {
      b.lin = w.lin.slice();
    }
    b.load = Math.min(BRUSH_MAX, take);
    b.dirty += 1;
    w.vol -= take;
    if (w.vol < 0.05) {
      w.vol = 0;
      w.dirty = false;
    }
    stats.loads += 1;
    stats.time += 0.45;
    t += 0.45;
    log.push({ op: "load", well: wellI, take, brush: active });
    return true;
  }

  /** Spend paint for one mark. Returns false if dry. */
  function spend() {
    const spec = BRUSHES[active];
    const b = brushes[active];
    if (!b.lin || b.load < spec.use * 0.35) return false;
    b.load -= spec.use;
    if (b.load < 0) b.load = 0;
    stats.strokes += 1;
    stats.time += 0.18;
    t += 0.18;
    return true;
  }

  function emptyWellIndex() {
    return wells.findIndex((w) => w.vol < 0.2);
  }

  return {
    TUBES,
    wells,
    brushes,
    get active() {
      return active;
    },
    get brush() {
      return brushes[active];
    },
    get spec() {
      return BRUSHES[active];
    },
    stats,
    log,
    rgbOf,
    squeeze,
    knife,
    switchBrush,
    clean,
    load,
    spend,
    emptyWellIndex,
    rgbOfWell(i) {
      return rgbOf(wells[i].lin);
    },
    rgbOfBrush() {
      const b = brushes[active];
      return b.lin ? rgbOf(b.lin) : null;
    },
  };
}

/** Best 1–3 tube mix toward a linear target. Greedy + white. */
export function solveTubes(targetLin) {
  const tgt = linToRgb255(targetLin);
  let best = { parts: [{ id: "white", v: 8 }], dE: 1e9 };
  for (const a of TUBES) {
    for (const b of TUBES) {
      for (const wa of [8, 12, 16]) {
        for (const wb of [0, 4, 8, 12]) {
          const mixed =
            wb <= 0 ? a.lin.slice() : mixPigment(a.lin, wa, b.lin, wb);
          const rgb = linToRgb255(mixed);
          const d = deltaE(rgb.r, rgb.g, rgb.b, tgt.r, tgt.g, tgt.b);
          if (d < best.dE) best = { parts: [{ id: a.id, v: wa }, { id: b.id, v: wb }].filter((p) => p.v > 0), dE: d, lin: mixed };
        }
      }
    }
  }
  return best;
}
