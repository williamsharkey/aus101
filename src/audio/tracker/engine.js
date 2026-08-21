/**
 * Tiny radio tracker: order/pattern/row, 4–6 channels.
 * Voices: SID (Galway), 2-op FM (FM7/DX), chip pulse, noise.
 */
import { midiBus } from "../midiBus.js";

export const hz = (m) => 440 * 2 ** ((m - 69) / 12);

function gn(ctx, v) {
  const g = ctx.createGain();
  g.gain.value = v;
  return g;
}
function osc(ctx, type, f) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = f || 220;
  return o;
}
function bq(ctx, type, f, q) {
  const n = ctx.createBiquadFilter();
  n.type = type;
  n.frequency.value = f;
  if (q != null) n.Q.value = q;
  return n;
}

function noiseBuf(ctx) {
  const n = ctx.sampleRate * 0.35;
  const b = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

function env(g, t, a, d, s, peak = 0.4) {
  g.cancelScheduledValues(t);
  g.setValueAtTime(0.0001, t);
  g.exponentialRampToValueAtTime(peak, t + Math.max(0.004, a));
  g.exponentialRampToValueAtTime(Math.max(0.0002, peak * s), t + a + Math.max(0.02, d));
}

/** One channel. Recreate oscillators per note (iPhone-ok at 6 ch). */
function trigger(ctx, dest, noise, t, note, inst, vel = 0.7) {
  const f = hz(note);
  const kind = inst.kind || "chip";
  const peak = (inst.vol ?? 0.35) * vel;
  const g = gn(ctx, 0.0001);
  const lp = bq(ctx, "lowpass", inst.cut || 2400, inst.q || 1.1);
  g.connect(lp);
  lp.connect(dest);
  env(g.gain, t, inst.atk ?? 0.01, inst.dec ?? 0.12, inst.sus ?? 0.35, peak);
  const live = [];

  if (kind === "sid" || kind === "galway") {
    const wave = inst.wave === "tri" ? "triangle" : inst.wave === "saw" ? "sawtooth" : "square";
    const o = osc(ctx, wave, f);
    o.start(t);
    o.connect(g);
    live.push(o);
    if (inst.pw != null && wave === "square") {
      const o2 = osc(ctx, "square", f);
      o2.detune.value = 6;
      o2.start(t);
      const mix = gn(ctx, 0.35);
      o2.connect(mix).connect(g);
      live.push(o2);
    }
    if (inst.cutSweep) {
      lp.frequency.setValueAtTime(inst.cutSweep[0], t);
      lp.frequency.exponentialRampToValueAtTime(inst.cutSweep[1], t + (inst.cutT || 0.18));
    }
  } else if (kind === "arp" || kind === "sid-arp") {
    const steps = inst.arp || [0, 4, 7];
    const rate = inst.arpHz || 12;
    const o = osc(ctx, inst.wave === "tri" ? "triangle" : "square", f);
    o.start(t);
    o.connect(g);
    live.push(o);
    const dur = inst.hold || 0.42;
    for (let i = 0; i < 18; i++) {
      const tt = t + i / rate;
      if (tt > t + dur) break;
      const nn = note + steps[i % steps.length];
      o.frequency.setValueAtTime(hz(nn), tt);
    }
  } else if (kind === "fm2" || kind === "fm7") {
    const car = osc(ctx, "sine", f);
    const mod = osc(ctx, "sine", f * (inst.ratio || 2));
    const idx = gn(ctx, inst.idx || 420);
    idx.gain.setValueAtTime(inst.idx || 420, t);
    idx.gain.exponentialRampToValueAtTime(40, t + (inst.idxDec || 0.35));
    mod.connect(idx);
    idx.connect(car.frequency);
    car.start(t);
    mod.start(t);
    car.connect(g);
    live.push(car, mod);
  } else if (kind === "dx") {
    const car = osc(ctx, "sine", f);
    const mod = osc(ctx, "sine", f * (inst.ratio || 14));
    const idx = gn(ctx, inst.idx || 900);
    idx.gain.setValueAtTime(inst.idx || 900, t);
    idx.gain.exponentialRampToValueAtTime(12, t + 0.22);
    mod.connect(idx);
    idx.connect(car.frequency);
    car.start(t);
    mod.start(t);
    car.connect(g);
    live.push(car, mod);
    lp.frequency.value = inst.cut || 3200;
  } else if (kind === "noise" || kind === "hat") {
    const s = ctx.createBufferSource();
    s.buffer = noise;
    s.loop = true;
    const bp = bq(ctx, "bandpass", inst.cut || 4200, inst.q || 4);
    s.connect(bp).connect(g);
    s.start(t);
    live.push(s);
    lp.frequency.value = 8000;
  } else {
    const o = osc(ctx, "square", f);
    o.start(t);
    o.connect(g);
    live.push(o);
  }

  const hold = inst.hold || 0.22;
  const rel = inst.rel ?? 0.08;
  g.gain.setTargetAtTime(0.0001, t + hold, rel);
  const stopAt = t + hold + rel * 6 + 0.05;
  for (const n of live) {
    try {
      n.stop(stopAt);
    } catch {
      /* */
    }
  }
  if (note) midiBus.emit({ midi: note, vel, src: "tracker", dur: hold });
}

/**
 * @param {AudioContext} ctx
 * @param {AudioNode} [dest]
 */
export function createTracker(ctx, dest) {
  const out = gn(ctx, 0);
  out.connect(dest || ctx.destination);
  const noise = noiseBuf(ctx);
  let running = false;
  let timer = 0;
  let nextT = 0;
  let row = 0;
  let ordI = 0;
  let song = null;
  let mix = 1;

  function cellsAt() {
    const patI = song.order[ordI % song.order.length];
    const pat = song.patterns[patI];
    return pat[row % pat.length] || [];
  }

  function step(t) {
    if (!song) return;
    const insts = song.inst;
    const cells = cellsAt();
    for (let ch = 0; ch < cells.length; ch++) {
      const c = cells[ch];
      if (!c || c.note == null) continue;
      const inst = insts[c.inst || 0] || insts[0];
      trigger(ctx, out, noise, t, c.note, inst, c.vel ?? 0.7);
    }
    row += 1;
    const pat = song.patterns[song.order[ordI % song.order.length]];
    if (row >= pat.length) {
      row = 0;
      ordI += 1;
    }
  }

  function clock() {
    if (!running || !song) return;
    const hor = ctx.currentTime + 0.14;
    const rowSec = (60 / (song.bpm || 128)) * ((song.speed || 4) / 4);
    while (nextT < hor) {
      step(nextT);
      nextT += rowSec;
    }
    timer = setTimeout(clock, 30);
  }

  return {
    output: out,
    get running() {
      return running;
    },
    get song() {
      return song;
    },
    play(s) {
      if (!s) return;
      song = s;
      row = 0;
      ordI = 0;
      if (ctx.state === "suspended") ctx.resume();
      const t = ctx.currentTime;
      nextT = t + 0.05;
      running = true;
      out.gain.cancelScheduledValues(t);
      out.gain.setValueAtTime(Math.max(0.0001, out.gain.value), t);
      out.gain.linearRampToValueAtTime(0.42 * mix, t + 0.12);
      clearTimeout(timer);
      clock();
    },
    stop() {
      running = false;
      clearTimeout(timer);
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.linearRampToValueAtTime(0, t + 0.1);
    },
    setMix(v, s = 0.4) {
      mix = Math.max(0, Math.min(1, v));
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.linearRampToValueAtTime(running ? 0.42 * mix : 0, t + s);
    },
  };
}
