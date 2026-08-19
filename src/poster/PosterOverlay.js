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

    // Crisp CSS wordmark over image (thumbnail-safe, center 80%)
    this.logo = document.createElement("div");
    this.logo.textContent = "AUS101";
    Object.assign(this.logo.style, {
      position: "absolute",
      top: "max(4%, env(safe-area-inset-top, 0px))",
      left: "10%",
      right: "10%",
      textAlign: "center",
      fontFamily: 'Impact, "Arial Black", Haettenschweiler, sans-serif',
      fontSize: "clamp(48px, 18vw, 140px)",
      lineHeight: "0.95",
      letterSpacing: "0.04em",
      color: "#f4f7fb",
      textShadow: "0 2px 0 #0b1210, 0 0 24px rgba(0,0,0,0.55)",
      pointerEvents: "none",
      zIndex: "2",
    });

    this.tag = document.createElement("div");
    this.tag.textContent = "TERMINATE UV";
    Object.assign(this.tag.style, {
      position: "absolute",
      top: "calc(max(4%, env(safe-area-inset-top, 0px)) + clamp(52px, 19vw, 150px))",
      left: "10%",
      right: "10%",
      textAlign: "center",
      fontFamily: 'Impact, "Arial Black", Haettenschweiler, sans-serif',
      fontSize: "clamp(16px, 4.5vw, 36px)",
      letterSpacing: "0.18em",
      color: "#ffb040",
      textShadow: "0 1px 0 #0b1210",
      pointerEvents: "none",
      zIndex: "2",
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

    this.root.append(this.img, this.logo, this.tag, this.play);
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
