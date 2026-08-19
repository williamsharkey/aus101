/**
 * Far-ocean bed — brown-noise loop through a lowpass (Coconuts pattern).
 * No ScriptProcessor. Call initOcean(ctx) after a user gesture.
 *
 *   const sea = initOcean(ctx);
 *   sea.start();
 */

function brown(ctx, sec) {
  const n = (ctx.sampleRate * sec) | 0;
  const b = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = b.getChannelData(0);
  let last = 0;
  for (let i = 0; i < n; i++) {
    last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
    d[i] = last * 3.2;
  }
  return b;
}

/**
 * @param {AudioContext} ctx
 * @param {AudioNode} [dest]
 */
export function initOcean(ctx, dest) {
  const src = ctx.createBufferSource();
  src.buffer = brown(ctx, 3);
  src.loop = true;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 420;
  lp.Q.value = 0.7;
  const swell = ctx.createOscillator();
  swell.type = "sine";
  swell.frequency.value = 0.07;
  const swellG = ctx.createGain();
  swellG.gain.value = 90;
  swell.connect(swellG);
  swellG.connect(lp.frequency);
  const out = ctx.createGain();
  out.gain.value = 0;
  src.connect(lp);
  lp.connect(out);
  out.connect(dest || ctx.destination);
  let on = false;

  function ramp(v, s) {
    const t = ctx.currentTime;
    out.gain.cancelScheduledValues(t);
    out.gain.setValueAtTime(out.gain.value, t);
    out.gain.linearRampToValueAtTime(v, t + s);
  }

  return {
    output: out,
    start() {
      if (ctx.state === "suspended") ctx.resume();
      if (!on) {
        src.start();
        swell.start();
        on = true;
      }
      ramp(0.158, 0.6);
    },
    stop() {
      ramp(0, 0.4);
    },
    setGain(v, s = 0.08) {
      ramp(v, s);
    },
  };
}
