/** iPhone Safari shell: 100vh, safe-area probes, DPR cap, never recreate GL. */

const BG = "#0b1210";

const ARCADE_CSS = `
html, body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background: ${BG};
  touch-action: none;
  overscroll-behavior: none;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
html, body, #game, #poster-root, #aus101-touch, canvas,
html *, body * {
  -webkit-user-select: none !important;
  user-select: none !important;
  -webkit-touch-callout: none !important;
  -webkit-tap-highlight-color: transparent !important;
  -webkit-user-drag: none !important;
}
input, textarea, [contenteditable] {
  -webkit-user-select: auto;
  user-select: auto;
  font-size: 16px;
}
#game, canvas {
  touch-action: none;
  outline: none;
}
`;

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
  document.body.style.webkitTouchCallout = "none";
  document.documentElement.style.webkitTouchCallout = "none";
  document.documentElement.style.webkitUserSelect = "none";
  if (!document.getElementById("aus101-arcade-css")) {
    const s = document.createElement("style");
    s.id = "aus101-arcade-css";
    s.textContent = ARCADE_CSS;
    document.head.appendChild(s);
  }
  document.documentElement.setAttribute("translate", "no");
}

/** Kill Safari document-browser chrome: loupe, callout, pinch/double-tap zoom, long-press, back-swipe. */
export function installArcadeLock() {
  const block = (e) => {
    e.preventDefault();
  };
  document.addEventListener("gesturestart", block, { passive: false });
  document.addEventListener("gesturechange", block, { passive: false });
  document.addEventListener("gestureend", block, { passive: false });
  document.addEventListener("selectstart", block, { passive: false });
  document.addEventListener("contextmenu", block, { passive: false });
  document.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length > 1) block(e);
    },
    { passive: false, capture: true }
  );
  let lastTap = 0;
  document.addEventListener(
    "touchend",
    (e) => {
      const now = performance.now();
      if (now - lastTap < 320) block(e);
      lastTap = now;
    },
    { passive: false, capture: true }
  );
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
  installArcadeLock();
}
