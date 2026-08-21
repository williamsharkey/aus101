/**
 * Shitasynth 3 audio graph as a callable engine (no DOM, no QWERTY).
 * Port of a-better-internet/shitasynth (laserbarf cart): square+saw voice,
 * osc mix, biquad cut/res, drive shaper, delay, mini reverb, detune, corrupt
 * noise, hardware rot, cursed presets. No WAV, ads, IRQ, scope, or pixel crunch.
 */

export const PRESETS = {
  wetCardboard: { mix: 0.15, cut: 620, res: 5.0, rev: 0.55, dly: 0.08, drv: 0.05, detune: 0.12, gain: 0.38, att: 0.005, dec: 0.35, sus: 0.2, rel: 0.5, sag: 0, tape: 0.1, cable: 0, feedback: 0, corrupt: 0.05, cdSkip: 0 },
  xpScream: { mix: 0.8, cut: 4800, res: 0.8, rev: 0.1, dly: 0.22, drv: 0.75, detune: 0.6, gain: 0.45, att: 0.001, dec: 0.05, sus: 0.9, rel: 0.8, sag: 0, tape: 0, cable: 0.1, feedback: 0.2, corrupt: 0.2, cdSkip: 0 },
  moldyClarinet: { mix: 0.35, cut: 1800, res: 2.2, rev: 0.7, dly: 0.05, drv: 0.1, detune: 0.18, gain: 0.42, att: 0.02, dec: 0.4, sus: 0.5, rel: 1.2, sag: 0.2, tape: 0.6, cable: 0, feedback: 0, corrupt: 0.12, cdSkip: 0 },
  drunk808: { mix: 0.75, cut: 120, res: 1.1, rev: 0.05, dly: 0.05, drv: 0.35, detune: 0.35, gain: 0.48, att: 0.001, dec: 0.5, sus: 0.01, rel: 0.2, sag: 0.5, tape: 0.2, cable: 0, feedback: 0, corrupt: 0.08, cdSkip: 0.1 },
  fartCloud: { mix: 0.5, cut: 320, res: 0.6, rev: 1.0, dly: 0.15, drv: 0.25, detune: 0.09, gain: 0.44, att: 0.01, dec: 0.35, sus: 0.2, rel: 0.7, sag: 0.1, tape: 0.1, cable: 0, feedback: 0.1, corrupt: 0.18, cdSkip: 0 },
  microwave: { mix: 0.1, cut: 9200, res: 0.3, rev: 0.05, dly: 0.01, drv: 0.2, detune: 0.72, gain: 0.5, att: 0.001, dec: 0.15, sus: 0.6, rel: 0.2, sag: 0.8, tape: 0, cable: 0, feedback: 0, corrupt: 0.25, cdSkip: 0 },
  dialupDeath: { mix: 0.9, cut: 11000, res: 12.5, rev: 0.1, dly: 0.4, drv: 0.9, detune: 0.8, gain: 0.5, att: 0.01, dec: 0.1, sus: 0.1, rel: 0.1, sag: 0, tape: 0.8, cable: 0.5, feedback: 0.6, corrupt: 0.55, cdSkip: 0.4 },
  vhsTracking: { mix: 0.4, cut: 1200, res: 0.5, rev: 0.3, dly: 0.1, drv: 0.1, detune: 0.4, gain: 0.6, att: 0.1, dec: 0.2, sus: 0.8, rel: 0.4, sag: 0.3, tape: 1.0, cable: 0.2, feedback: 0.1, corrupt: 0.22, cdSkip: 0.2 },
};

export const PRESET_NAMES = Object.keys(PRESETS);

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

function makeDriveCurve(amount) {
  const k = amount * 100;
  const n = 2048;
  const curve = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = (i / n) * 2 - 1;
    curve[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
  }
  return curve;
}

function makeMiniReverb(ctx) {
  const input = ctx.createGain();
  const output = ctx.createGain();
  const wet = ctx.createGain();
  wet.gain.value = 0.2;
  const combT = [0.0297, 0.0371, 0.0411, 0.0437];
  const combG = [0.805, 0.827, 0.783, 0.764].map((v) => v * 0.98);
  const combOut = ctx.createGain();
  combOut.gain.value = 0.7;

  combT.forEach((t, i) => {
    const d = ctx.createDelay(1.0);
    d.delayTime.value = t;
    const g = ctx.createGain();
    g.gain.value = combG[i];
    input.connect(d);
    d.connect(g);
    g.connect(d);
    g.connect(combOut);
  });

  function allpass(time, gain) {
    const apIn = ctx.createGain();
    const d = ctx.createDelay(1.0);
    d.delayTime.value = time;
    const g = ctx.createGain();
    g.gain.value = gain;
    apIn.connect(d);
    d.connect(g);
    const sum = ctx.createGain();
    d.connect(sum);
    apIn.connect(sum);
    g.connect(apIn);
    return { input: apIn, output: sum };
  }
  const ap1 = allpass(0.005, 0.7);
  const ap2 = allpass(0.0017, 0.7);
  combOut.connect(ap1.input);
  ap1.output.connect(ap2.input);
  ap2.output.connect(wet);
  wet.connect(output);
  return { input, output, wet };
}

function noiseBuffer(ctx) {
  const n = Math.max(1, ctx.sampleRate | 0);
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * 0.6;
  return buf;
}

function whiteNoiseNode(ctx, buf) {
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  return src;
}

/**
 * @param {AudioContext} ctx
 * @param {AudioNode} [dest]
 * @returns {{
 *   start: Function, stop: Function, setMix: Function,
 *   note: Function, drone: Function, applyPreset: Function,
 *   randomize: Function, wtf: Function, tick: Function,
 *   createVoice: Function, nudgeFilter: Function, setPosition: Function,
 *   params: object, presets: typeof PRESETS, started: boolean,
 *   output: GainNode
 * }}
 */
export function createShita(ctx, dest) {
  if (!ctx) return null;

  const params = {
    mix: 0.5,
    cut: 2000,
    res: 1.0,
    rev: 0.2,
    dly: 0.15,
    drv: 0.2,
    gain: 0.5,
    detune: 0.3,
    corrupt: 0.0,
    att: 0.01,
    dec: 0.2,
    sus: 0.6,
    rel: 0.3,
    sag: 0,
    tape: 0,
    cable: 0,
    feedback: 0,
    cdSkip: 0,
    backwards: true,
  };

  const nbuf = noiseBuffer(ctx);
  const master = ctx.createGain();
  master.gain.value = 0.0;

  const clipGuard = ctx.createDynamicsCompressor();
  clipGuard.threshold.value = -3;
  clipGuard.knee.value = 5;
  clipGuard.ratio.value = 12;
  clipGuard.attack.value = 0.005;
  clipGuard.release.value = 0.15;

  const shaper = ctx.createWaveShaper();
  shaper.curve = makeDriveCurve(0.2);
  shaper.oversample = "2x";

  const biq = ctx.createBiquadFilter();
  biq.type = "lowpass";
  biq.frequency.value = 2000;
  biq.Q.value = 1;

  const delay = ctx.createDelay(1.2);
  delay.delayTime.value = 0.25;
  const dlyGain = ctx.createGain();
  dlyGain.gain.value = 0.15;
  const dlyFB = ctx.createGain();
  dlyFB.gain.value = 0.35;
  delay.connect(dlyFB).connect(delay);

  const reverb = makeMiniReverb(ctx);

  const tapeDelayNode = ctx.createDelay(1.0);
  tapeDelayNode.delayTime.value = 0.05;
  const tapeLFO = ctx.createOscillator();
  tapeLFO.frequency.value = 1.2;
  const tapeGainNode = ctx.createGain();
  tapeGainNode.gain.value = 0;
  tapeLFO.connect(tapeGainNode).connect(tapeDelayNode.delayTime);
  tapeLFO.start();

  const tapeHissNode = whiteNoiseNode(ctx, nbuf);
  const hissFilter = ctx.createBiquadFilter();
  hissFilter.type = "bandpass";
  hissFilter.frequency.value = 6000;
  const tapeHissGain = ctx.createGain();
  tapeHissGain.gain.value = 0;
  tapeHissNode.connect(hissFilter).connect(tapeHissGain).connect(master);
  tapeHissNode.start();

  const stutterDelay = ctx.createDelay(1.0);
  stutterDelay.delayTime.value = 0.05;
  const stutterFB = ctx.createGain();
  stutterFB.gain.value = 0.0;
  stutterDelay.connect(stutterFB).connect(stutterDelay);

  const cablePan = ctx.createStereoPanner ? ctx.createStereoPanner() : ctx.createPanner();

  const feedbackDelay = ctx.createDelay(0.5);
  feedbackDelay.delayTime.value = 0.03;
  const feedbackGain = ctx.createGain();
  feedbackGain.gain.value = 0;
  const feedbackFilter = ctx.createBiquadFilter();
  feedbackFilter.type = "highpass";
  feedbackFilter.frequency.value = 3000;
  feedbackFilter.Q.value = 10;
  master.connect(feedbackFilter).connect(feedbackDelay).connect(feedbackGain).connect(master);

  const mixBus = ctx.createGain();
  mixBus.gain.value = 1;
  const dryBus = ctx.createGain();
  dryBus.gain.value = 1;
  const voices = ctx.createGain();
  voices.gain.value = 1;

  voices.connect(shaper);
  shaper.connect(biq);
  biq.connect(dryBus);
  biq.connect(delay);
  delay.connect(dlyGain).connect(mixBus);
  biq.connect(reverb.input);
  reverb.output.connect(mixBus);

  const mainMix = ctx.createGain();
  dryBus.connect(mainMix);
  mixBus.connect(mainMix);

  mainMix.connect(tapeDelayNode);
  tapeDelayNode.connect(stutterDelay);
  stutterDelay.connect(cablePan);
  cablePan.connect(master);

  const spatial = ctx.createPanner();
  spatial.panningModel = "equalpower";
  spatial.distanceModel = "linear";
  spatial.refDistance = 2;
  spatial.maxDistance = 24;
  spatial.rolloffFactor = 0;
  spatial.positionX.value = 0;
  spatial.positionY.value = 1.1;
  spatial.positionZ.value = 0;

  const outGain = ctx.createGain();
  outGain.gain.value = 0;

  master.connect(clipGuard);
  clipGuard.connect(spatial);
  spatial.connect(outGain);
  outGain.connect(dest || ctx.destination);
  // Pre-mix tap so a looper can record the synth even when live mix is ducked.
  const recTap = ctx.createGain();
  recTap.gain.value = 1;
  clipGuard.connect(recTap);

  let started = false;
  let droneOn = false;
  let mix = 0;
  let currentSagDuck = 1.0;
  let currentSagPitch = 1.0;
  let rotAt = 0;
  let driftAt = 0;
  const masterOut = { voices, shaper, biq, delay, dlyGain, dlyFB, reverb, dryBus, mixBus, mainMix };

  function updateStaticGain() {
    const f = Number(params.gain);
    const chaos = Number(params.corrupt);
    const sCurve = (x) => 1 / (1 + Math.exp(-10 * (x - 0.5)));
    const dome = 1 - Math.pow((f - 0.5) * 2, 2);
    let mapped = 0.15 + 0.9 * (0.5 * sCurve(f) + 0.5 * dome * (0.65 + 0.35 * chaos));
    mapped = Math.min(0.9, mapped) * currentSagDuck;
    if (started) master.gain.setTargetAtTime(mapped, ctx.currentTime, 0.05);
  }

  function updateHardwareEngine() {
    const t = Number(params.tape);
    tapeGainNode.gain.setTargetAtTime(t * 0.015, ctx.currentTime, 0.1);
    tapeHissGain.gain.setTargetAtTime(t * 0.08, ctx.currentTime, 0.1);
    tapeLFO.frequency.setTargetAtTime(1.0 + Math.random() * t * 3, ctx.currentTime, 0.2);
    const f = Number(params.feedback);
    feedbackGain.gain.setTargetAtTime(f * 1.15, ctx.currentTime, 0.5);
    if (f > 0.1) {
      feedbackFilter.frequency.setTargetAtTime(2000 + Math.random() * 5000, ctx.currentTime, 1.0);
    }
  }

  function updateEngine() {
    masterOut.biq.frequency.setTargetAtTime(Number(params.cut), ctx.currentTime, 0.01);
    masterOut.biq.Q.setTargetAtTime(Number(params.res), ctx.currentTime, 0.01);
    masterOut.shaper.curve = makeDriveCurve(Number(params.drv));
    masterOut.reverb.wet.gain.setTargetAtTime(Number(params.rev), ctx.currentTime, 0.02);
    masterOut.dlyGain.gain.setTargetAtTime(Number(params.dly), ctx.currentTime, 0.02);
    updateHardwareEngine();
  }

  function hardwareRot() {
    const s = Number(params.sag);
    if (s > 0) {
      if (Math.random() < s * 0.15) {
        currentSagDuck = 0.6 + Math.random() * 0.3;
        currentSagPitch = 1.0 - Math.random() * s * 0.05;
      } else {
        currentSagDuck = 1.0 - Math.random() * s * 0.1;
        currentSagPitch = 1.0 - Math.random() * s * 0.01;
      }
    } else {
      currentSagDuck = 1.0;
      currentSagPitch = 1.0;
    }

    const c = Number(params.cable);
    if (c > 0 && Math.random() < c * 0.2) {
      const targetPan = (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.4);
      if (cablePan.pan) cablePan.pan.setTargetAtTime(targetPan, ctx.currentTime, 0.05);
      tapeHissGain.gain.setTargetAtTime(0.4 + Math.random() * 0.4, ctx.currentTime, 0.01);
    } else {
      if (cablePan.pan) cablePan.pan.setTargetAtTime(0, ctx.currentTime, 0.1);
      tapeHissGain.gain.setTargetAtTime(Number(params.tape) * 0.08, ctx.currentTime, 0.05);
    }

    const cd = Number(params.cdSkip);
    if (cd > 0 && Math.random() < cd * 0.25) {
      const sTime = 0.015 + Math.random() * 0.06;
      stutterDelay.delayTime.setTargetAtTime(sTime, ctx.currentTime, 0.005);
      stutterFB.gain.setTargetAtTime(0.98, ctx.currentTime, 0.005);
    } else {
      stutterFB.gain.setTargetAtTime(0, ctx.currentTime, 0.05);
    }
    updateStaticGain();
  }

  function drift() {
    const t = Number(params.detune);
    const wob = 1 + (Math.random() * 2 - 1) * t * 0.08;
    masterOut.biq.detune.setTargetAtTime(1200 * Math.log2(wob), ctx.currentTime, 0.2);
  }

  function createVoice(freq, dur = 0.3, vel = 1, when = ctx.currentTime) {
    if (!started) start();
    const vGain = ctx.createGain();
    vGain.gain.value = 0;
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    o1.type = "square";
    o2.type = "sawtooth";

    const finalFreq = freq * currentSagPitch;
    o1.frequency.value = finalFreq;
    o2.frequency.value = finalFreq * (1.001 + params.detune * 0.1);

    const o1g = ctx.createGain();
    o1g.gain.value = 1 - Number(params.mix);
    const o2g = ctx.createGain();
    o2g.gain.value = Number(params.mix);

    const noise = whiteNoiseNode(ctx, nbuf);
    const ng = ctx.createGain();
    ng.gain.value = Math.random() * Number(params.corrupt) * 0.5;

    o1.connect(o1g).connect(vGain);
    o2.connect(o2g).connect(vGain);
    noise.connect(ng).connect(vGain);
    vGain.connect(masterOut.voices);

    o1.start(when);
    o2.start(when);
    noise.start(when);

    const A = Number(params.att);
    const D = Number(params.dec);
    const S = Number(params.sus);
    const R = Number(params.rel);
    const backwards = params.backwards && Math.random() < 0.2;
    const peak = 0.75 * vel;
    const now = when;

    vGain.gain.cancelScheduledValues(now);
    if (!backwards) {
      vGain.gain.setValueAtTime(0.0001, now);
      vGain.gain.linearRampToValueAtTime(peak, now + A);
      vGain.gain.linearRampToValueAtTime(peak * S, now + A + D);
      vGain.gain.setTargetAtTime(0.0001, now + A + D + dur, R * 0.7 + 0.05);
    } else {
      vGain.gain.setValueAtTime(peak, now);
      vGain.gain.linearRampToValueAtTime(peak * S, now + D);
      vGain.gain.linearRampToValueAtTime(0.0001, now + D + R);
      vGain.gain.linearRampToValueAtTime(peak * 0.5, now + D + R + A);
      vGain.gain.setTargetAtTime(0.0001, now + D + R + A + dur, 0.25);
    }

    const stopAt = now + A + D + dur + R + 1.5;
    o1.stop(stopAt);
    o2.stop(stopAt);
    noise.stop(stopAt);
  }

  function start() {
    if (ctx.state === "suspended") ctx.resume();
    if (started) return;
    started = true;
    updateEngine();
    updateStaticGain();
    outGain.gain.setTargetAtTime(mix, ctx.currentTime, 0.08);
  }

  function stop() {
    started = false;
    droneOn = false;
    outGain.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
  }

  function setMix(v, s = 0.35) {
    mix = clamp(v, 0, 1);
    if (started) outGain.gain.setTargetAtTime(mix, ctx.currentTime, s);
  }

  function note(freq, dur = 0.3, vel = 1) {
    const f = freq > 0 ? freq : 110 * Math.pow(2, ((Math.random() * 24) | 0) / 12);
    createVoice(f, dur, vel);
  }

  function drone() {
    droneOn = !droneOn;
    if (droneOn) {
      for (let i = 0; i < 6; i++) {
        createVoice(55 * Math.pow(2, i / 12), 6.0, 0.5, ctx.currentTime + i * 0.15);
      }
    }
    return droneOn;
  }

  function applyPreset(name) {
    const p = typeof name === "string" ? PRESETS[name] : name;
    if (!p) return false;
    Object.assign(params, p);
    updateEngine();
    updateStaticGain();
    return true;
  }

  function randomize() {
    const rand = (a, b) => a + Math.random() * (b - a);
    params.gain = rand(0, 1);
    params.detune = rand(0, 1);
    params.corrupt = rand(0, 1);
    params.mix = rand(0, 1);
    params.rev = rand(0, 1);
    params.dly = rand(0, 1);
    params.drv = rand(0, 1);
    params.sus = rand(0, 1);
    params.sag = rand(0, 1);
    params.tape = rand(0, 1);
    params.cable = rand(0, 1);
    params.feedback = rand(0, 0.7);
    params.cdSkip = rand(0, 1);
    params.cut = 80 + Math.random() * (12000 - 80);
    params.res = rand(0.1, 30);
    params.att = rand(0, 2);
    params.dec = rand(0, 2);
    params.rel = rand(0, 3);
    updateEngine();
    updateStaticGain();
  }

  function wtf() {
    randomize();
    for (let i = 0; i < 4; i++) {
      createVoice(110 * Math.pow(2, ((Math.random() * 24) | 0) / 12), 0.3);
    }
  }

  function nudgeFilter() {
    params.cut = clamp(params.cut * (0.65 + Math.random() * 0.9), 80, 12000);
    params.res = clamp(params.res + (Math.random() - 0.5) * 6, 0.1, 30);
    params.drv = clamp(params.drv + (Math.random() - 0.5) * 0.18, 0, 1);
    params.dly = clamp(params.dly + (Math.random() - 0.5) * 0.12, 0, 1);
    updateEngine();
  }

  function setPosition(x, y, z) {
    const t = ctx.currentTime;
    if (spatial.positionX) {
      spatial.positionX.setTargetAtTime(x, t, 0.05);
      spatial.positionY.setTargetAtTime(y, t, 0.05);
      spatial.positionZ.setTargetAtTime(z, t, 0.05);
    } else {
      spatial.setPosition(x, y, z);
    }
  }

  function tick() {
    if (!started) return;
    const now = ctx.currentTime;
    if (now - rotAt > 0.15) {
      rotAt = now;
      hardwareRot();
    }
    if (now - driftAt > 0.28 + Math.random() * 0.42) {
      driftAt = now;
      drift();
    }
  }

  return {
    start,
    stop,
    setMix,
    note,
    drone,
    applyPreset,
    randomize,
    wtf,
    tick,
    createVoice,
    nudgeFilter,
    setPosition,
    params,
    presets: PRESETS,
    output: recTap,
    get started() {
      return started;
    },
    get presetNames() {
      return PRESET_NAMES;
    },
  };
}
