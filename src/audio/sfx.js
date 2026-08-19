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
