/**
 * Lotion mix: ketchup-tube squeeze on press, then oily rub + skin slap.
 * Not water. Spatialised at the body being painted.
 */
import { playRubVo } from "./rubVo.js";

function brown(n) {
  const d = new Float32Array(n);
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += (Math.random() * 2 - 1) * 0.08;
    acc *= 0.96;
    d[i] = acc;
  }
  return d;
}

function noiseBuf(ctx, dur) {
  const n = Math.max(32, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  buf.getChannelData(0).set(brown(n));
  return buf;
}

function connect3d(ctx, dest, listener, pos) {
  const pan = ctx.createPanner();
  pan.panningModel = "equalpower";
  pan.distanceModel = "inverse";
  pan.refDistance = 1.2;
  pan.maxDistance = 12;
  pan.rolloffFactor = 1.05;
  const x = pos?.x ?? listener?.x ?? 0;
  const y = (pos?.y ?? 1.2) + 0.2;
  const z = pos?.z ?? listener?.z ?? 0;
  if (pan.positionX) {
    pan.positionX.value = x;
    pan.positionY.value = y;
    pan.positionZ.value = z;
  } else pan.setPosition(x, y, z);
  if (listener && ctx.listener.positionX) {
    const L = ctx.listener;
    const lx = listener.x ?? 0;
    const ly = (listener.y ?? 0) + 1.6;
    const lz = listener.z ?? 0;
    const yaw = listener.yaw ?? 0;
    L.positionX.value = lx;
    L.positionY.value = ly;
    L.positionZ.value = lz;
    L.forwardX.value = -Math.sin(yaw);
    L.forwardY.value = 0;
    L.forwardZ.value = -Math.cos(yaw);
  }
  pan.connect(dest);
  return pan;
}

/**
 * @param {import("./sfx.js").SfxBank} sfx
 */
export function installLotionFoley(sfx) {
  let bed = null;
  let lastSlap = 0;
  let lastVo = 0;
  let voKind = "";

  function ctx() {
    return sfx.ctx;
  }

  function dest() {
    return sfx.master || sfx.ctx?.destination;
  }

  /** Tube of SPF — ketchup-bottle thpp, no sparkle. */
  async function ketchup(pos, listener) {
    await sfx.unlock();
    const c = ctx();
    const t = c.currentTime;
    const pan = connect3d(c, dest(), listener, pos);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 420;
    lp.Q.value = 0.7;
    const src = c.createBufferSource();
    src.buffer = noiseBuf(c, 0.55);
    src.playbackRate.value = 0.72;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.28, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.16, t + 0.16);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.48);
    src.connect(lp);
    lp.connect(g);
    g.connect(pan);
    src.start(t);
    src.stop(t + 0.52);

    const o = c.createOscillator();
    o.type = "triangle";
    o.frequency.setValueAtTime(210, t);
    o.frequency.exponentialRampToValueAtTime(68, t + 0.28);
    const og = c.createGain();
    og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(0.11, t + 0.03);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
    o.connect(og);
    og.connect(pan);
    o.start(t);
    o.stop(t + 0.36);
  }

  /** Palm on oiled skin — thud, not a puddle. */
  async function skinSlap(pos, listener) {
    await sfx.unlock();
    const c = ctx();
    const t = c.currentTime;
    const pan = connect3d(c, dest(), listener, pos);
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(92 + Math.random() * 28, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.09);
    const og = c.createGain();
    og.gain.setValueAtTime(0.2, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
    o.connect(og);
    og.connect(pan);
    o.start(t);
    o.stop(t + 0.13);

    const src = c.createBufferSource();
    src.buffer = noiseBuf(c, 0.12);
    src.playbackRate.value = 1.1 + Math.random() * 0.25;
    const bp = c.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 620 + Math.random() * 180;
    bp.Q.value = 1.4;
    const g = c.createGain();
    g.gain.setValueAtTime(0.16, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    src.connect(bp);
    bp.connect(g);
    g.connect(pan);
    src.start(t);
    src.stop(t + 0.1);
  }

  function startBed(pos, listener) {
    const c = ctx();
    if (!c || bed) return;
    const pan = connect3d(c, dest(), listener, pos);
    const src = c.createBufferSource();
    src.buffer = noiseBuf(c, 1.2);
    src.loop = true;
    src.playbackRate.value = 0.55;
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 340;
    lp.Q.value = 0.65;
    const g = c.createGain();
    g.gain.value = 0.0001;
    src.connect(lp);
    lp.connect(g);
    g.connect(pan);
    src.start();
    bed = { src, g, lp, pan, t0: c.currentTime };
  }

  function stopBed() {
    if (!bed) return;
    const c = ctx();
    const t = c ? c.currentTime : 0;
    try {
      bed.g.gain.cancelScheduledValues(t);
      bed.g.gain.setTargetAtTime(0.0001, t, 0.08);
      bed.src.stop(t + 0.25);
    } catch {
      /* already stopped */
    }
    bed = null;
  }

  function tickBed(applying, pos, listener) {
    if (!bed) return;
    const c = ctx();
    const t = c.currentTime;
    const want = applying ? 0.09 : 0.035;
    bed.g.gain.setTargetAtTime(want, t, 0.12);
    const wob = 280 + Math.sin(t * 6.2) * 40;
    bed.lp.frequency.setTargetAtTime(wob, t, 0.05);
    if (bed.pan.positionX && pos) {
      bed.pan.positionX.setTargetAtTime(pos.x, t, 0.08);
      bed.pan.positionZ.setTargetAtTime(pos.z, t, 0.08);
    }
    if (listener && c.listener.positionX) {
      c.listener.positionX.setTargetAtTime(listener.x, t, 0.05);
      c.listener.positionZ.setTargetAtTime(listener.z, t, 0.05);
    }
  }

  return {
    tick(now, opts = {}) {
      const squeezing = !!opts.squeezing;
      const applying = !!opts.applying;
      const pos = opts.target || opts.listener;
      const listener = opts.listener;
      if (squeezing && !this._held) {
        this._held = true;
        ketchup(pos, listener).catch(() => {});
        lastSlap = now + 140;
      }
      if (!squeezing && this._held) {
        this._held = false;
        stopBed();
        return;
      }
      if (!squeezing) return;

      if (applying || now - lastSlap > 90) startBed(pos, listener);
      tickBed(applying, pos, listener);

      if (applying && now >= lastSlap) {
        lastSlap = now + 260 + Math.random() * 220;
        skinSlap(pos, listener).catch(() => {});
      }

      if (applying && opts.voice && opts.npc && now - lastVo > 2800) {
        const k = opts.npc.kind || opts.npc.mesh?.userData?.kind || "";
        if (k !== voKind || now - lastVo > 2200) {
          lastVo = now;
          voKind = k;
          const h = playRubVo(opts.voice, opts.npc);
          if (h && pos) {
            /* playRubVo already spatial if pos passed — patch below */
          }
        }
      }
    },
  };
}
