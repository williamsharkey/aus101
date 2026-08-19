/** Opening skit: still sequence after the poster tap. Tap skips. */

const STILLS = [
  { src: "assets/media/cutscene/s1_bunker_bay.jpg", hold: 2200 },
  { src: "assets/media/cutscene/s2_captured_units.jpg", hold: 2400 },
  { src: "assets/media/cutscene/s3_what_now.jpg", hold: 2200 },
  { src: "assets/media/cutscene/s4_i_can_use_them.jpg", hold: 2600 },
  { src: "assets/media/cutscene/s5_psa_apply.jpg", hold: 2400 },
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
    this.root.addEventListener("pointerdown", () => this.finish());
  }

  start() {
    this._i = 0;
    this.root.style.display = "flex";
    this.show();
  }

  show() {
    const shot = STILLS[this._i];
    if (!shot) {
      this.finish();
      return;
    }
    this.img.src = shot.src;
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this._i += 1;
      this.show();
    }, shot.hold);
  }

  finish() {
    clearTimeout(this._timer);
    this.root.style.display = "none";
    this.onDone();
  }
}
