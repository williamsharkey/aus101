/** AUS101 Carpenter/Juno bed. Original D-minor pulse, no WASM/scores.
 *  iPhone after gesture: bed = createCarpenterBed(ctx); bed.start(); */

const BPM = 112, MIX = 0.4, FADE = 0.45;
// bass, pad, rim, out, cut
const ST = {
  menu: [0.22, 0.16, 0, 0.3, 380],
  boardwalk: [0.55, 0.2, 0.32, 0.42, 640],
  apply: [0.28, 0.12, 0.16, 0.36, 980],
};
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

/** 2× DelayNode chorus, 0.6Hz, 8–12ms, opposite phase, mix 0.4. */
function bbd(ctx, src, dest) {
  const dry = gn(ctx, 1 - MIX);
  src.connect(dry);
  dry.connect(dest);
  const lfo = osc(ctx, "sine", 0.6);
  const amt = gn(ctx, 0.002);
  lfo.connect(amt);
  const merge = ctx.createChannelMerger(2);
  for (let i = 0; i < 2; i++) {
    const d = ctx.createDelay(0.03);
    d.delayTime.value = 0.01;
    const wet = gn(ctx, MIX);
    const ph = gn(ctx, i ? -1 : 1);
    src.connect(d);
    d.connect(wet);
    wet.connect(merge, 0, i);
    amt.connect(ph);
    ph.connect(d.delayTime);
  }
  merge.connect(dest); return lfo;
}

export function createCarpenterBed(ctx, dest) {
  const out = gn(ctx, 0);
  out.connect(dest || ctx.destination);
  const bassBus = gn(ctx, ST.menu[0]), padBus = gn(ctx, ST.menu[1]);
  const rimBus = gn(ctx, 0), applyG = gn(ctx, 0);
  bassBus.connect(out); padBus.connect(out); rimBus.connect(out); applyG.connect(out);

  const bassSaw = osc(ctx, "sawtooth", hz(26));
  const bassSq = osc(ctx, "square", hz(26));
  bassSaw.detune.value = 3;
  bassSq.detune.value = -4;
  const sqMix = gn(ctx, 0.4), bassVca = gn(ctx, 0.0001);
  const bassLp = bq(ctx, "lowpass", ST.menu[4], 2.2);
  bassSaw.connect(bassVca);
  bassSq.connect(sqMix).connect(bassVca);
  bassVca.connect(bassLp).connect(bassBus);
  const padD = osc(ctx, "sawtooth", hz(50));
  const padA = osc(ctx, "sawtooth", hz(57));
  padD.detune.value = 3;
  padA.detune.value = -3;
  const padPre = gn(ctx, 0.32), padLp = bq(ctx, "lowpass", 880, 0.7);
  padD.connect(padPre);
  padA.connect(padPre);
  padPre.connect(padLp);
  const lfo = bbd(ctx, padLp, padBus);
  const apD = osc(ctx, "sawtooth", hz(74));
  const apA = osc(ctx, "sawtooth", hz(81));
  apD.detune.value = 5;
  const apHp = bq(ctx, "highpass", 400, 0.5);
  apD.connect(apHp);
  apA.connect(apHp).connect(applyG);
  const n = (ctx.sampleRate * 0.05) | 0;
  const clickBuf = ctx.createBuffer(1, n, ctx.sampleRate);
  const nd = clickBuf.getChannelData(0);
  for (let i = 0; i < n; i++) nd[i] = Math.random() * 2 - 1;
  let state = "menu", running = false, booted = false, timer = 0, nextT = 0, eighth = 0;
  const live = [bassSaw, bassSq, padD, padA, lfo, apD, apA];

  function click(t, tom) {
    const s = ctx.createBufferSource();
    s.buffer = clickBuf;
    const bp = bq(ctx, "bandpass", tom ? 130 : 2350, tom ? 3.5 : 9);
    const g = gn(ctx, 0.0001);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(tom ? 0.4 : 0.26, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (tom ? 0.16 : 0.04));
    s.connect(bp).connect(g).connect(rimBus); s.start(t); s.stop(t + 0.2);
  }
  function armApply(on) {
    const t = ctx.currentTime;
    applyG.gain.cancelScheduledValues(t);
    if (on) {
      applyG.gain.setValueAtTime(0.0001, t);
      applyG.gain.linearRampToValueAtTime(0.2, t + 0.9);
    } else applyG.gain.setValueAtTime(0, t);
  }

  function pulse(t, i) {
    const bar = (i >> 3) & 15, e = i & 7, f = hz(bar >= 8 ? 38 : 26);
    bassSaw.frequency.setValueAtTime(f, t);
    bassSq.frequency.setValueAtTime(f * 0.9977, t);
    const ghost = e & 1;
    bassVca.gain.cancelScheduledValues(t);
    bassVca.gain.setValueAtTime(0.0001, t);
    bassVca.gain.exponentialRampToValueAtTime(ghost ? 0.14 : 0.55, t + 0.012);
    bassVca.gain.exponentialRampToValueAtTime(0.0001, t + (ghost ? 0.07 : 0.13));
    if (!ghost) {
      const cut = ST[state][4];
      bassLp.frequency.setValueAtTime(cut + 180, t);
      bassLp.frequency.setTargetAtTime(cut, t + 0.02, 0.06);
    }
    if (e === 2 || e === 6) click(t, 0);
    if (bar === 14 && e >= 4) click(t, 1);
  }

  function clock() {
    if (!running) return;
    const hor = ctx.currentTime + 0.12, step = 30 / BPM;
    while (nextT < hor) {
      pulse(nextT, eighth++);
      nextT += step;
    }
    timer = setTimeout(clock, 35);
  }

  function applyLevels(s) {
    const row = ST[state], t = ctx.currentTime;
    ramp(bassBus.gain, row[0], s, t);
    ramp(padBus.gain, row[1], s, t);
    ramp(rimBus.gain, row[2], s, t);
    ramp(out.gain, running ? row[3] : 0, s, t);
    ramp(bassLp.frequency, row[4], s, t);
    ramp(padLp.frequency, state === "apply" ? 1400 : 880, s * 1.2, t);
  }

  return {
    output: out,
    start() {
      if (ctx.state === "suspended") ctx.resume();
      const t = ctx.currentTime;
      if (!booted) {
        for (const o of live) o.start(t);
        booted = true;
      }
      if (running) return;
      running = true;
      eighth = 0;
      nextT = t + 0.06;
      applyLevels(0.08);
      if (state === "apply") armApply(true);
      clock();
    },
    stop() {
      running = false;
      clearTimeout(timer);
      ramp(out.gain, 0, 0.08, ctx.currentTime);
    },
    setState(name) {
      if (!ST[name]) return;
      const prev = state;
      state = name;
      applyLevels(FADE);
      if (name === "apply" && prev !== "apply") armApply(true);
      else if (name !== "apply" && prev === "apply") armApply(false);
    },
    get state() { return state; },
    get running() { return running; },
  };
}
