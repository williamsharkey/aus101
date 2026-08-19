/**
 * Original ocean-ambient bed in the spirit of washed-out 2000s analog pads
 * (Digital Shades–like: hiss, slow fifths, sparse bell). Not M83, not a cover.
 */
const hz = (m) => 440 * 2 ** ((m - 69) / 12);

function osc(ctx, type, f) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = f;
  return o;
}
function gn(ctx, v) {
  const g = ctx.createGain();
  g.gain.value = v;
  return g;
}

function ir(ctx) {
  const n = (ctx.sampleRate * 2.4) | 0;
  const b = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2.1);
  }
  return b;
}

export function createShadesBed(ctx, dest) {
  const out = gn(ctx, 0);
  out.connect(dest || ctx.destination);

  const hissBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const hd = hissBuf.getChannelData(0);
  for (let i = 0; i < hd.length; i++) hd[i] = (Math.random() * 2 - 1) * 0.08;
  const hiss = ctx.createBufferSource();
  hiss.buffer = hissBuf;
  hiss.loop = true;
  const hissG = gn(ctx, 0.04);
  hiss.connect(hissG).connect(out);

  const p1 = osc(ctx, "sine", hz(50));
  const p2 = osc(ctx, "triangle", hz(57));
  p1.detune.value = 6;
  p2.detune.value = -8;
  const pad = gn(ctx, 0.11);
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 520;
  p1.connect(pad);
  p2.connect(pad);
  pad.connect(lp);
  const conv = ctx.createConvolver();
  conv.buffer = ir(ctx);
  lp.connect(conv).connect(out);

  const lfo = osc(ctx, "sine", 0.07);
  const lfoG = gn(ctx, 80);
  lfo.connect(lfoG).connect(lp.frequency);

  let booted = false;
  let running = false;
  let timer = 0;

  function pluck(t) {
    const notes = [62, 64, 69, 57, 50];
    const f = hz(notes[(Math.random() * notes.length) | 0]);
    const o = osc(ctx, "sine", f);
    const g = gn(ctx, 0.0001);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
    o.connect(g).connect(conv);
    o.start(t);
    o.stop(t + 2.6);
  }

  function clock() {
    if (!running) return;
    pluck(ctx.currentTime + 0.05);
    timer = setTimeout(clock, 2800 + Math.random() * 2200);
  }

  return {
    start() {
      if (ctx.state === "suspended") ctx.resume();
      if (!booted) {
        hiss.start();
        p1.start();
        p2.start();
        lfo.start();
        booted = true;
      }
      running = true;
      clock();
    },
    setMix(v, s = 1.2) {
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.setValueAtTime(out.gain.value, t);
      out.gain.linearRampToValueAtTime(Math.max(0, Math.min(1, v)) * 0.55, t + s);
    },
    stop() {
      running = false;
      clearTimeout(timer);
      this.setMix(0, 0.6);
    },
  };
}
