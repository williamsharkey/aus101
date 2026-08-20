/**
 * Foley bank — lotion squeeze / slap / lather / spread.
 * Files live in assets/sfx/foley/. Decode-on-demand, no runtime network beyond same-origin.
 */

const FOL = "assets/sfx/foley";

export const LOTION = {
  squeeze: [`${FOL}/lotion_squeeze.mp3`, `${FOL}/lotion_squeeze_02.mp3`],
  cap: [`${FOL}/lotion_cap.mp3`],
  slap: [`${FOL}/lotion_slap.mp3`, `${FOL}/lotion_slap_02.mp3`],
  lather: [`${FOL}/lotion_lather.mp3`, `${FOL}/lotion_lather_02.mp3`],
  spread: [`${FOL}/lotion_spread.mp3`, `${FOL}/lotion_spread_02.mp3`],
  wet: [`${FOL}/lotion_wet.mp3`],
};

export class SfxBank {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.cache = new Map();
    this._i = 0;
    this._whoopAt = 0;
    this._chatAt = 0;
  }

  async unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.85;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
    return this.ctx;
  }

  async decode(url) {
    if (this.cache.has(url)) return this.cache.get(url);
    const res = await fetch(url);
    const arr = await res.arrayBuffer();
    const buf = await this.ctx.decodeAudioData(arr.slice(0));
    this.cache.set(url, buf);
    return buf;
  }

  pick(urls) {
    this._i = (this._i + 1) % 997;
    return urls[this._i % urls.length];
  }

  async play(urls, { gain = 1, rate = 1, when = 0 } = {}) {
    await this.unlock();
    const url = Array.isArray(urls) ? this.pick(urls) : urls;
    const buf = await this.decode(url);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    const g = this.ctx.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(this.master);
    src.start(this.ctx.currentTime + when);
    return src;
  }

  /** Space: squeeze emulsion. Slightly pitch-up so it reads as a tube, not a crushed bottle. */
  squeeze() {
    return this.play(LOTION.squeeze, { gain: 0.7, rate: 1.18 });
  }

  /** First wet palm-to-skin contact. */
  slap() {
    return this.play(LOTION.slap, { gain: 0.9, rate: 0.95 + Math.random() * 0.12 });
  }

  /** Thick lather between hands / first smear. */
  lather() {
    return this.play(LOTION.lather, { gain: 0.75, rate: 0.9 + Math.random() * 0.2 });
  }

  /** Spreading film along a stroke. */
  spread() {
    return this.play(LOTION.spread, { gain: 0.65, rate: 0.85 + Math.random() * 0.3 });
  }

  wet() {
    return this.play(LOTION.wet, { gain: 0.35, rate: 1.1 });
  }

  async _beep({ freq = 880, dur = 0.12, type = "sawtooth", gain = 0.12, slide = 0 }) {
    await this.unlock();
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  laser() {
    this._beep({ freq: 1400, dur: 0.22, type: "sawtooth", gain: 0.16, slide: -900 });
    this._beep({ freq: 420, dur: 0.18, type: "square", gain: 0.08, slide: -200 });
  }

  async _noiseBurst({ dur = 0.1, gain = 0.04, freq = 800, type = "bandpass", Q = 2.4, rate = 1 } = {}) {
    await this.unlock();
    const t = this.ctx.currentTime;
    const n = Math.max(32, Math.floor(this.ctx.sampleRate * dur));
    const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 1.7);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    const filt = this.ctx.createBiquadFilter();
    filt.type = type;
    filt.frequency.setValueAtTime(freq, t);
    filt.Q.value = Q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(Math.max(0.0001, gain), t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filt);
    filt.connect(g);
    g.connect(this.master);
    src.start(t);
  }

  async _thump() {
    await this.unlock();
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(170 + Math.random() * 50, t);
    o.frequency.exponentialRampToValueAtTime(62, t + 0.09);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + 0.14);
  }

  /** Short radio squelch — randomized, never a held tone. */
  radioChatter() {
    const now = typeof performance !== "undefined" ? performance.now() : 0;
    if (now && now - this._chatAt < 420) return;
    this._chatAt = now;
    const hiss = 1600 + Math.random() * 1100;
    const click = 420 + Math.random() * 260;
    this._noiseBurst({
      dur: 0.045 + Math.random() * 0.03,
      gain: 0.032,
      freq: hiss,
      type: "highpass",
      Q: 0.65,
      rate: 0.9 + Math.random() * 0.3,
    });
    setTimeout(() => {
      this._noiseBurst({
        dur: 0.06 + Math.random() * 0.04,
        gain: 0.024,
        freq: click,
        type: "bandpass",
        Q: 2.8 + Math.random(),
      });
    }, 30 + Math.random() * 55);
  }

  /** Filtered-noise whoop. One chirp pair, then silence. */
  copWhoop() {
    const now = typeof performance !== "undefined" ? performance.now() : 0;
    if (now && now - this._whoopAt < 480) return;
    this._whoopAt = now;
    const base = 480 + Math.random() * 220;
    const rate = 0.85 + Math.random() * 0.35;
    this._noiseBurst({
      dur: 0.16,
      gain: 0.038,
      freq: base,
      type: "bandpass",
      Q: 3.6,
      rate,
    });
    setTimeout(() => {
      this._noiseBurst({
        dur: 0.12,
        gain: 0.028,
        freq: base * (1.2 + Math.random() * 0.25),
        type: "bandpass",
        Q: 3.1,
        rate: rate * 1.05,
      });
    }, 140 + Math.random() * 80);
  }

  /** Palm-to-face. Lotion slap mp3s, quieter, pitched; osc thump if the file misses. */
  slapFace() {
    const rate = 0.82 + Math.random() * 0.38;
    return this.play(LOTION.slap, { gain: 0.42, rate }).catch(() => this._thump());
  }
}

/**
 * Drive lotion SFX from hold-Space + motion (W1 stand-in until Apply Mode).
 */
export function installLotionFoley(sfx, keys) {
  let squeezing = false;
  let slapped = false;
  let lastSpread = 0;
  let lastLather = 0;

  addEventListener("keydown", (e) => {
    if (e.code !== "Space") return;
    if (squeezing) return;
    squeezing = true;
    slapped = false;
    sfx.squeeze().catch(() => {});
    // first slappy wet hit shortly after the tube
    setTimeout(() => {
      if (!squeezing) return;
      slapped = true;
      sfx.slap().catch(() => {});
      sfx.lather().catch(() => {});
    }, 180);
  });
  addEventListener("keyup", (e) => {
    if (e.code === "Space") squeezing = false;
  });

  return {
    tick(now, moving) {
      if (!squeezing || !slapped) return;
      if (now - lastLather > 420) {
        lastLather = now;
        sfx.lather().catch(() => {});
      }
      if (moving && now - lastSpread > 160) {
        lastSpread = now;
        sfx.spread().catch(() => {});
      }
    },
  };
}
