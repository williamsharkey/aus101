/** iPhone Safari shell: 100vh, safe-area probes, DPR cap, never recreate GL. */

const BG = "#0b1210";

export function applyDocumentShell() {
  document.documentElement.style.height = "100vh";
  document.body.style.height = "100vh";
  document.documentElement.style.background = BG;
  document.body.style.background = BG;
  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  document.body.style.touchAction = "none";
  document.body.style.userSelect = "none";
  document.body.style.webkitUserSelect = "none";
}

export function createSafeAreaProbe() {
  const el = document.createElement("div");
  el.setAttribute("aria-hidden", "true");
  el.style.cssText =
    "position:fixed;pointer-events:none;visibility:hidden;top:0;left:0;right:0;bottom:0;" +
    "padding-top:env(safe-area-inset-top);" +
    "padding-right:env(safe-area-inset-right);" +
    "padding-bottom:env(safe-area-inset-bottom);" +
    "padding-left:env(safe-area-inset-left);";
  document.body.appendChild(el);
  const read = () => {
    const cs = getComputedStyle(el);
    return {
      top: parseFloat(cs.paddingTop) || 0,
      right: parseFloat(cs.paddingRight) || 0,
      bottom: parseFloat(cs.paddingBottom) || 0,
      left: parseFloat(cs.paddingLeft) || 0,
    };
  };
  const schedule = () => {
    read();
    setTimeout(read, 100);
    setTimeout(read, 500);
    setTimeout(read, 1000);
  };
  schedule();
  window.addEventListener("resize", schedule);
  window.addEventListener("orientationchange", () => setTimeout(schedule, 300));
  return { read, el };
}

export function sizeRenderer(renderer, canvas) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.max(1, window.innerWidth);
  const h = Math.max(1, window.innerHeight);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h, false);
  return { w, h, dpr };
}

/** Block Safari edge-swipe back on a single-page game. */
export function installEdgeSwipeGuard() {
  const EDGE = 24;
  const onStart = (e) => {
    if (e.touches.length !== 1) return;
    const x = e.touches[0].clientX;
    if (x < EDGE || x > window.innerWidth - EDGE) {
      e.preventDefault();
    }
  };
  document.addEventListener("touchstart", onStart, { passive: false });
}
