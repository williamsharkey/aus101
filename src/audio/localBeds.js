/**
 * Local oscillator beds (boombox, guitar Ken, DJ booth). Original sequences.
 * iPhone-safe: OscillatorNode + short generated noise, no files / worklets.
 */

import { midiBus } from "./midiBus.js";

const hz = (m) => 440 * 2 ** ((m - 69) / 12);

function osc(ctx, type, f) {
  const o = ctx.createOscillator(); o.type = type; o.frequency.value = f; return o;
}
function gn(ctx, v) {
  const g = ctx.createGain(); g.gain.value = v; return g;
}
function bq(ctx, type, f, q) {
  const n = ctx.createBiquadFilter(); n.type = type; n.frequency.value = f;
  if (q != null) n.Q.value = q; return n;
}
function ramp(p, v, s, t) {
  p.cancelScheduledValues(t); p.setValueAtTime(p.value, t); p.linearRampToValueAtTime(v, t + s);
}

function noiseBuf(ctx, sec) {
  const n = Math.max(1, (ctx.sampleRate * sec) | 0);
  const b = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

function envGain(ctx, t, peak, atk, rel) {
  const g = gn(ctx, 0.0001);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + atk);
  g.gain.exponentialRampToValueAtTime(0.0001, t + rel);
  return g;
}

function bedShell(ctx, dest, peak) {
  const out = gn(ctx, 0);
  out.connect(dest || ctx.destination);
  let running = false, timer = 0, nextT = 0, stepI = 0, mix = 0;

  return {
    out,
    get running() { return running; },
    start(clock) {
      if (ctx.state === "suspended") ctx.resume();
      if (running) return;
      running = true;
      stepI = 0;
      nextT = ctx.currentTime + 0.06;
      ramp(out.gain, peak * mix, 0.08, ctx.currentTime);
      clock();
    },
    setMix(v, s = 0.6) {
      mix = Math.max(0, Math.min(1, v));
      ramp(out.gain, peak * mix, s, ctx.currentTime);
    },
    stop() {
      running = false;
      clearTimeout(timer);
      ramp(out.gain, 0, 0.08, ctx.currentTime);
    },
    get mix() { return mix; },
    clock(ahead, step, pulse) {
      if (!running) return;
      const hor = ctx.currentTime + ahead;
      while (nextT < hor) {
        pulse(nextT, stepI++);
        nextT += step;
      }
      timer = setTimeout(() => this.clock(ahead, step, pulse), 35);
    },
  };
}

function kick(ctx, dest, t, f0 = 148, f1 = 41, peak = 0.72, rel = 0.22) {
  const o = osc(ctx, "sine", f0);
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(f1, t + 0.11);
  const g = envGain(ctx, t, peak, 0.004, rel);
  o.connect(g).connect(dest);
  o.start(t); o.stop(t + rel + 0.02);
}

function hat(ctx, dest, buf, t, peak, rel, bpHz) {
  const s = ctx.createBufferSource();
  s.buffer = buf;
  const bp = bq(ctx, "highpass", bpHz, 0.7);
  const g = envGain(ctx, t, peak, 0.002, rel);
  s.connect(bp).connect(g).connect(dest);
  s.start(t); s.stop(t + rel + 0.02);
}

/** Four-on-the-floor kick + noisy hat, ~118 bpm, tropical. */
export function createBoomBed(ctx, dest) {
  const BPM = 118, PEAK = 0.48;
  const shell = bedShell(ctx, dest, PEAK);
  const kickBus = gn(ctx, 1), hatBus = gn(ctx, 0.7), bassBus = gn(ctx, 0.45), panBus = gn(ctx, 0.28);
  kickBus.connect(shell.out); hatBus.connect(shell.out);
  bassBus.connect(shell.out); panBus.connect(shell.out);
  const nbuf = noiseBuf(ctx, 0.06);
  const bass = osc(ctx, "triangle", hz(36));
  const bassLp = bq(ctx, "lowpass", 280, 1.1);
  const bassV = gn(ctx, 0.0001);
  bass.connect(bassV).connect(bassLp).connect(bassBus);
  let booted = false;

  function steel(t, midi) {
    const o = osc(ctx, "sine", hz(midi));
    const o2 = osc(ctx, "sine", hz(midi + 7));
    o2.detune.value = 4;
    const g = envGain(ctx, t, 0.16, 0.01, 0.28);
    o.connect(g); o2.connect(g); g.connect(panBus);
    o.start(t); o.stop(t + 0.3);
    o2.start(t); o2.stop(t + 0.3);
    if (shell.mix > 0.08) midiBus.emit({ midi, vel: 0.45, src: "tape", dur: 0.28 });
  }

  function pulse(t, i) {
    const e = i & 15;
    if ((e & 3) === 0) kick(ctx, kickBus, t, 142, 40, 0.78, 0.2);
    hat(ctx, hatBus, nbuf, t, e & 1 ? 0.05 : 0.14, e & 1 ? 0.035 : 0.048, 7200);
    if (e === 6 || e === 14) hat(ctx, hatBus, nbuf, t, 0.18, 0.16, 4800);
    const roots = [36, 36, 39, 43];
    const f = hz(roots[(e >> 2) & 3]);
    bass.frequency.setValueAtTime(f, t);
    bassV.gain.cancelScheduledValues(t);
    bassV.gain.setValueAtTime(0.0001, t);
    if ((e & 3) === 0) {
      bassV.gain.exponentialRampToValueAtTime(0.55, t + 0.012);
      bassV.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      if (shell.mix > 0.08) midiBus.emit({ midi: roots[(e >> 2) & 3], vel: 0.55, src: "tape", dur: 0.18 });
    }
    if (e === 4 || e === 12) steel(t, e === 4 ? 79 : 76);
    if (e === 10) steel(t, 72);
  }

  return {
    start() {
      if (!booted) { bass.start(); booted = true; }
      shell.start(() => shell.clock(0.12, 15 / BPM, pulse));
    },
    setMix: (v, s) => shell.setMix(v, s),
    stop: () => shell.stop(),
  };
}

export const guitarPulse = { at: 0, midi: 52, onVowel: null };

/** Pentatonic plucked sines, slow. */
export function createGuitarBed(ctx, dest) {
  const PEAK = 0.42;
  const SEQ = [52, 59, 55, 62, 47, 55, 64, 59, 52, 50, 55, 62];
  const shell = bedShell(ctx, dest, PEAK);
  const body = gn(ctx, 0.85);
  const lp = bq(ctx, "lowpass", 2400, 0.6);
  const delay = ctx.createDelay(0.45);
  delay.delayTime.value = 0.28;
  const fb = gn(ctx, 0.28);
  body.connect(lp).connect(shell.out);
  lp.connect(delay).connect(fb).connect(delay);
  delay.connect(shell.out);
  const drone = osc(ctx, "sine", hz(40));
  const droneG = gn(ctx, 0.05);
  drone.connect(droneG).connect(lp);
  let booted = false;

  function pluck(t, midi) {
    const o = osc(ctx, "sine", hz(midi));
    const o2 = osc(ctx, "triangle", hz(midi));
    o2.detune.value = 6;
    const g = envGain(ctx, t, 0.22, 0.012, 1.8);
    o.connect(g); o2.connect(g); g.connect(body);
    o.start(t); o.stop(t + 1.9);
    o2.start(t); o2.stop(t + 1.9);
    guitarPulse.at = performance.now();
    guitarPulse.midi = midi;
    try {
      guitarPulse.onVowel?.(midi);
    } catch {
      /* */
    }
    if (shell.mix > 0.08) midiBus.emit({ midi, vel: 0.7, src: "guitar", dur: 1.8 });
    if (midi >= 55 && (midi & 1)) {
      const fifth = osc(ctx, "sine", hz(midi + 7));
      const g5 = envGain(ctx, t, 0.08, 0.02, 1.4);
      fifth.connect(g5).connect(body);
      fifth.start(t); fifth.stop(t + 1.5);
    }
  }

  function pulse(t, i) {
    pluck(t, SEQ[i % SEQ.length]);
  }

  return {
    start() {
      if (!booted) { drone.start(); booted = true; }
      shell.start(() => shell.clock(0.2, 0.92, pulse));
    },
    setMix: (v, s) => shell.setMix(v, s),
    stop: () => shell.stop(),
  };
}

/** Slightly faster pulse than Carpenter, extra hat. */
export function createDjBed(ctx, dest) {
  const BPM = 124, PEAK = 0.44;
  const shell = bedShell(ctx, dest, PEAK);
  const bassBus = gn(ctx, 0.7), hatBus = gn(ctx, 0.55), clickBus = gn(ctx, 0.35);
  bassBus.connect(shell.out); hatBus.connect(shell.out); clickBus.connect(shell.out);
  const nbuf = noiseBuf(ctx, 0.04);
  const bass = osc(ctx, "sawtooth", hz(28));
  const bassSq = osc(ctx, "square", hz(28));
  bass.detune.value = 3;
  bassSq.detune.value = -5;
  const sqMix = gn(ctx, 0.32), bassV = gn(ctx, 0.0001);
  const bassLp = bq(ctx, "lowpass", 520, 1.8);
  bass.connect(bassV);
  bassSq.connect(sqMix).connect(bassV);
  bassV.connect(bassLp).connect(bassBus);
  let booted = false;

  function pulse(t, i) {
    const bar = (i >> 3) & 7, e = i & 7;
    const midi = bar >= 4 ? 31 : 28;
    const f = hz(midi);
    if (shell.mix > 0.08) midiBus.emit({ midi, vel: (e & 1) ? 0.22 : 0.7, src: "tape", dur: (e & 1) ? 0.06 : 0.12 });
    bass.frequency.setValueAtTime(f, t);
    bassSq.frequency.setValueAtTime(f * 0.997, t);
    const ghost = e & 1;
    bassV.gain.cancelScheduledValues(t);
    bassV.gain.setValueAtTime(0.0001, t);
    bassV.gain.exponentialRampToValueAtTime(ghost ? 0.12 : 0.5, t + 0.01);
    bassV.gain.exponentialRampToValueAtTime(0.0001, t + (ghost ? 0.06 : 0.12));
    if (!ghost) {
      bassLp.frequency.setValueAtTime(720, t);
      bassLp.frequency.setTargetAtTime(480, t + 0.02, 0.05);
    }
    hat(ctx, hatBus, nbuf, t, ghost ? 0.07 : 0.12, ghost ? 0.03 : 0.045, 8000);
    hat(ctx, hatBus, nbuf, t + 15 / BPM, 0.045, 0.025, 9000);
    if (e === 2 || e === 6) kick(ctx, clickBus, t, 210, 90, 0.18, 0.06);
  }

  return {
    start() {
      if (!booted) { bass.start(); bassSq.start(); booted = true; }
      shell.start(() => shell.clock(0.12, 30 / BPM, pulse));
    },
    setMix: (v, s) => shell.setMix(v, s),
    stop: () => shell.stop(),
  };
}
