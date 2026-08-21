/**
 * Original ocean-ambient bed in the spirit of washed-out 2000s analog pads
 * (Digital Shades–like: hiss, slow fifths, sparse bell). Not M83, not a cover.
 * Near the Gold Coast piano (~14m), musicDirector fades this up; plucks get
 * louder and more frequent. playPianoPluck is the shared sine/triangle strike.
 */
import { midiBus } from "./midiBus.js";

const hz = (m) => 440 * 2 ** ((m - 69) / 12);

const NOTES = [62, 64, 69, 57, 50];
const PLUCK_PEAK = 0.35;

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

/** Last strike + mix, for goldCoast key animation / proximity fallback. */
export const pianoPulse = { at: 0, midi: NOTES[0], mix: 0, onVowel: null };

/**
 * One sine+triangle piano strike. Peak 0.35. Caller owns mix/destination.
 * @param {AudioContext} ctx
 * @param {AudioNode} dest
 * @param {number} [when]
 * @param {number} [midi]
 * @param {number} [peak]
 */
export function playPianoPluck(ctx, dest, when, midi, peak = PLUCK_PEAK) {
  if (!ctx || !dest) return null;
  const t = when ?? ctx.currentTime + 0.02;
  const note = midi ?? NOTES[(Math.random() * NOTES.length) | 0];
  const f = hz(note);
  const o = osc(ctx, "sine", f);
  const o2 = osc(ctx, "triangle", f);
  o2.detune.value = 7;
  const g = gn(ctx, 0.0001);
  const pk = Math.max(0.0001, peak);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(pk, t + 0.018);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 1.85);
  o.connect(g);
  o2.connect(g);
  g.connect(dest);
  o.start(t);
  o2.start(t);
  o.stop(t + 2.05);
  o2.stop(t + 2.05);
  pianoPulse.at = performance.now();
  pianoPulse.midi = note;
  try {
    pianoPulse.onVowel?.(note);
  } catch {
    /* vo optional */
  }
  midiBus.emit({ midi: note, vel: Math.min(1, pk / PLUCK_PEAK), src: "piano", dur: 1.85 });
  return { o, o2, g, midi: note };
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
  const hissG = gn(ctx, 0.05);
  hiss.connect(hissG).connect(out);

  const p1 = osc(ctx, "sine", hz(50));
  const p2 = osc(ctx, "triangle", hz(57));
  p1.detune.value = 6;
  p2.detune.value = -8;
  const pad = gn(ctx, 0.14);
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

  const dry = gn(ctx, 1);
  dry.connect(out);
  dry.connect(conv);

  let booted = false;
  let running = false;
  let timer = 0;
  let mix = 0;

  function kickOsc(node) {
    try {
      node.start();
    } catch {
      /* already started */
    }
  }

  function pluck(t) {
    const loud = PLUCK_PEAK * (0.35 + 0.65 * mix);
    playPianoPluck(ctx, dry, t, undefined, loud);
  }

  function gapMs() {
    if (mix < 0.08) return 1800 + Math.random() * 900;
    return 800 + Math.random() * 600;
  }

  function clock() {
    if (!running) return;
    if (mix > 0.04) pluck(ctx.currentTime + 0.04);
    timer = setTimeout(clock, gapMs());
  }

  return {
    start() {
      if (ctx.state === "suspended") ctx.resume();
      if (!booted) {
        kickOsc(hiss);
        kickOsc(p1);
        kickOsc(p2);
        kickOsc(lfo);
        booted = true;
      }
      running = true;
      clearTimeout(timer);
      clock();
    },
    setMix(v, s = 1.2) {
      const next = Math.max(0, Math.min(1, v));
      const rose = mix < 0.1 && next >= 0.1;
      mix = next;
      pianoPulse.mix = mix;
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.setValueAtTime(out.gain.value, t);
      out.gain.linearRampToValueAtTime(mix * 0.85, t + s);
      if (running && rose) {
        clearTimeout(timer);
        clock();
      }
    },
    stop() {
      running = false;
      clearTimeout(timer);
      this.setMix(0, 0.6);
    },
    pluckNow() {
      if (!running || mix < 0.04) return;
      pluck(ctx.currentTime + 0.02);
    },
  };
}
