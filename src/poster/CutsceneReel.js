/** Opening skit: still sequence after the poster tap. Tap skips. */

export const INTRO_STILLS = [
  { src: "assets/media/cutscene/intro_divas_strut.jpg", hold: 3200 },
  { src: "assets/media/cutscene/intro_divas_brief.jpg", hold: 3000 },
  { src: "assets/media/cutscene/intro_divas_catwalk.jpg", hold: 3000 },
  { src: "assets/media/cutscene/s1_bunker_bay.jpg", hold: 2000 },
  { src: "assets/media/cutscene/s4_i_can_use_them.jpg", hold: 2400 },
  { src: "assets/media/cutscene/s5_psa_apply.jpg", hold: 2200 },
];

export class CutsceneReel {
  constructor({ onDone }) {
    this.onDone = onDone;
    this.root = document.createElement("div");
    Object.assign(this.root.style, {
      position: "fixed",
      inset: "0",
      zIndex: "25",
      background: "#0b1210",
      display: "none",
      alignItems: "center",
      justifyContent: "center",
    });
    this.img = document.createElement("img");
    Object.assign(this.img.style, {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    });
    this.root.appendChild(this.img);
    document.body.appendChild(this.root);
    this._i = 0;
    this._timer = 0;
    this._stills = INTRO_STILLS;
    this._done = false;
    this._armed = 0;
    this.root.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      // Same tap that dismissed the poster must not skip the reel.
      if (performance.now() < this._armed) return;
      this._i += 1;
      this.show();
    });
  }

  get playing() {
    return this.root.style.display === "flex";
  }

  /** @param {{src:string,hold?:number}[]} [stills] */
  start(stills) {
    this._stills = stills && stills.length ? stills : INTRO_STILLS;
    this._i = 0;
    this._done = false;
    this._armed = performance.now() + 450;
    this.root.style.display = "flex";
    this.show();
  }

  show() {
    const shot = this._stills[this._i];
    if (!shot) {
      this.finish();
      return;
    }
    this.img.onerror = () => {
      this._i += 1;
      this.show();
    };
    this.img.src = shot.src;
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this._i += 1;
      this.show();
    }, shot.hold);
  }

  finish() {
    if (this._done) return;
    this._done = true;
    clearTimeout(this._timer);
    this.root.style.display = "none";
    this.onDone?.();
  }
}
