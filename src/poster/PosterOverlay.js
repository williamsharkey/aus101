/**
 * POSTER0 — first paint is movie-poster cover art (Option B og.webp).
 * Tap / giant PLAY unlocks audio and fades into gameplay.
 * Live Three tableau (POSTER1) comes after CHAR0.
 */

const BG = "#0b1210";

export class PosterOverlay {
  /**
   * @param {{ onStart: () => void }} opts
   */
  constructor(opts) {
    this.onStart = opts.onStart;
    this.root = document.createElement("div");
    this.root.id = "poster-root";
    this.root.setAttribute("role", "button");
    this.root.setAttribute("aria-label", "Play AUS101");
    this.root.tabIndex = 0;
    Object.assign(this.root.style, {
      position: "fixed",
      inset: "0",
      zIndex: "20",
      background: BG,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      opacity: "1",
      transition: "opacity 400ms ease",
      touchAction: "none",
      userSelect: "none",
      webkitUserSelect: "none",
    });

    // Full-bleed poster image — LCP / OG surface
    this.img = document.createElement("img");
    this.img.src = "assets/poster/og.webp";
    this.img.alt = "AUS101";
    this.img.decoding = "async";
    this.img.fetchPriority = "high";
    Object.assign(this.img.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      background: BG,
      pointerEvents: "none",
    });

    // Giant translucent PLAY triangle (lower third)
    this.play = document.createElement("div");
    this.play.setAttribute("aria-hidden", "true");
    Object.assign(this.play.style, {
      position: "absolute",
      left: "50%",
      top: "72%",
      width: "0",
      height: "0",
      transform: "translate(-30%, -50%)",
      borderStyle: "solid",
      borderWidth: "clamp(28px, 8vw, 56px) 0 clamp(28px, 8vw, 56px) clamp(48px, 14vw, 96px)",
      borderColor: "transparent transparent transparent rgba(255,255,255,0.45)",
      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.45))",
      pointerEvents: "none",
      zIndex: "3",
    });

    this.root.append(this.img, this.play);
    document.body.appendChild(this.root);

    this._started = false;
    this._onPointer = (e) => {
      e.preventDefault();
      this.start();
    };
    this._onKey = (e) => {
      if (e.code === "Enter" || e.code === "Space") {
        e.preventDefault();
        this.start();
      }
    };
    this.root.addEventListener("pointerdown", this._onPointer, { passive: false });
    this.root.addEventListener("keydown", this._onKey);
  }

  get visible() {
    return this.root.style.display !== "none" && this.root.style.opacity !== "0";
  }

  start() {
    if (this._started) return;
    this._started = true;
    this.root.style.opacity = "0";
    this.root.style.pointerEvents = "none";
    window.setTimeout(() => {
      this.root.style.display = "none";
    }, 420);
    this.onStart();
  }

  /** Esc / pause — show poster again without tearing DOM. */
  showAsPause() {
    this._started = false;
    this.root.style.display = "flex";
    requestAnimationFrame(() => {
      this.root.style.opacity = "1";
      this.root.style.pointerEvents = "auto";
    });
  }
}
