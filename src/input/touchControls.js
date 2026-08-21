/**
 * Mobile pad: left stick, look stick, lotion / punch / laser / run icons.
 * Shown only on coarse pointer / touch. Maps into the same `keys` object as WASD.
 */

const DEAD = 0.3;
const STICK_PX = 132;
const LOOK_PX = 96;
const KNOB_PX = 58;
const LOOK_KNOB = 42;
const BTN = 56;

const stick = { x: 0, y: 0, mag: 0 };
const look = { x: 0, y: 0, mag: 0 };
const owned = { w: false, a: false, s: false, d: false, space: false, shift: false };

let installed = false;
let root = null;

function isTouchUi() {
  const mm = (q) => (typeof matchMedia === "function" ? matchMedia(q).matches : false);
  if (typeof matchMedia !== "function") return "ontouchstart" in window;
  if (mm("(pointer: coarse)") || mm("(any-pointer: coarse)")) return true;
  if ("ontouchstart" in window && mm("(hover: none)")) return true;
  return false;
}

function setStick(x, y, mag) {
  stick.x = x;
  stick.y = y;
  stick.mag = mag;
}

function writeAnalog(keys) {
  keys.analogX = stick.x;
  keys.analogY = stick.y;
  keys.analogMag = stick.mag;
}

function setOwned(keys, code, flag, on) {
  if (on) {
    keys[code] = true;
    owned[flag] = true;
  } else if (owned[flag]) {
    keys[code] = false;
    owned[flag] = false;
  }
}

function writeDigital(keys) {
  const on = stick.mag > DEAD;
  setOwned(keys, "KeyW", "w", on && stick.y > DEAD);
  setOwned(keys, "KeyS", "s", on && stick.y < -DEAD);
  setOwned(keys, "KeyA", "a", on && stick.x < -DEAD);
  setOwned(keys, "KeyD", "d", on && stick.x > DEAD);
  writeAnalog(keys);
}

function clearMove(keys) {
  setStick(0, 0, 0);
  setOwned(keys, "KeyW", "w", false);
  setOwned(keys, "KeyS", "s", false);
  setOwned(keys, "KeyA", "a", false);
  setOwned(keys, "KeyD", "d", false);
  writeAnalog(keys);
}

function el(tag, style, parent) {
  const n = document.createElement(tag);
  Object.assign(n.style, style);
  if (parent) parent.appendChild(n);
  return n;
}

function holdButton(parent, size, icon, onHold) {
  const btn = el(
    "div",
    {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: "rgba(12,18,16,0.38)",
      border: "1px solid rgba(251,246,234,0.28)",
      boxShadow: "0 4px 18px rgba(0,0,0,0.28)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "auto",
      touchAction: "none",
      webkitUserSelect: "none",
      userSelect: "none",
      backdropFilter: "blur(8px)",
      webkitBackdropFilter: "blur(8px)",
    },
    parent
  );
  btn.appendChild(icon);
  let pid = null;
  const release = () => {
    if (pid == null) return;
    pid = null;
    btn.style.background = "rgba(12,18,16,0.38)";
    onHold(false);
  };
  const down = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (pid != null) release();
    pid = e.pointerId;
    try {
      btn.setPointerCapture?.(e.pointerId);
    } catch {
      /* iOS */
    }
    btn.style.background = "rgba(255,215,106,0.28)";
    onHold(true);
    e.preventDefault();
    e.stopPropagation();
  };
  const up = (e) => {
    if (pid == null) return;
    if (e.pointerId != null && e.pointerId !== pid) return;
    release();
    e.preventDefault();
    e.stopPropagation();
  };
  btn.addEventListener("pointerdown", down);
  btn.addEventListener("pointerup", up);
  btn.addEventListener("pointercancel", up);
  window.addEventListener("pointerup", up);
  window.addEventListener("pointercancel", up);
  window.addEventListener("blur", release);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) release();
  });
  return { btn, release };
}

function droplet() {
  return el("div", {
    width: "15px",
    height: "15px",
    background: "rgba(251,246,234,0.88)",
    borderRadius: "0 70% 70% 70%",
    transform: "rotate(45deg)",
    marginTop: "-2px",
  });
}

function dot() {
  return el("div", {
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    background: "rgba(255,215,106,0.9)",
  });
}

function bindStick(pad, base, knob, radius, onMove, onEnd) {
  let joyId = null;
  const fromEvent = (e) => {
    const r = base.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX ?? e.touches?.[0]?.clientX ?? cx) - cx;
    const dy = (e.clientY ?? e.touches?.[0]?.clientY ?? cy) - cy;
    const raw = Math.hypot(dx, dy);
    const mag = Math.min(1, raw / radius);
    const x = raw > 0 ? (dx / raw) * mag : 0;
    const y = raw > 0 ? (-dy / raw) * mag : 0;
    onMove(x, y, mag);
    knob.style.transform = `translate(${x * radius}px, ${-y * radius}px)`;
  };
  const end = (e) => {
    if (joyId == null) return;
    if (e && e.pointerId != null && e.pointerId !== joyId) return;
    joyId = null;
    onEnd();
    knob.style.transform = "translate(0px, 0px)";
    if (e) {
      e.preventDefault?.();
      e.stopPropagation?.();
    }
  };
  pad.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (joyId != null) end(e);
    joyId = e.pointerId;
    try {
      pad.setPointerCapture?.(e.pointerId);
    } catch {
      /* iOS often no-ops capture */
    }
    fromEvent(e);
    e.preventDefault();
    e.stopPropagation();
  });
  const move = (e) => {
    if (joyId == null) return;
    if (e.pointerId != null && e.pointerId !== joyId) return;
    fromEvent(e);
    e.preventDefault();
    e.stopPropagation();
  };
  pad.addEventListener("pointermove", move);
  window.addEventListener("pointermove", move, { passive: false });
  pad.addEventListener("pointerup", end);
  pad.addEventListener("pointercancel", end);
  window.addEventListener("pointerup", end);
  window.addEventListener("pointercancel", end);
  window.addEventListener("blur", () => end());
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) end();
  });
  window.addEventListener("pagehide", () => end());
  pad.addEventListener(
    "touchend",
    (e) => {
      if (e.touches.length === 0) end();
    },
    { passive: false }
  );
  pad.addEventListener("touchcancel", () => end(), { passive: false });
  return { end };
}

function svgIcon(inner, label) {
  const wrap = el("div", { width: "28px", height: "28px", position: "relative" });
  wrap.innerHTML = `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">${inner}</svg>`;
  wrap.title = label;
  wrap.setAttribute("aria-label", label);
  return wrap;
}

function lotionIcon() {
  return svgIcon(
    `<rect x="11" y="2" width="10" height="6" rx="1" fill="#f4e8c4"/>
     <rect x="13" y="0.5" width="6" height="3" rx="1" fill="#d4c090"/>
     <path d="M10 8 h12 l2 20 h-16 z" fill="#fbf6ea" stroke="#c9a45a" stroke-width="1"/>
     <ellipse cx="16" cy="28" rx="5" ry="2.2" fill="#fff6d0" opacity="0.95"/>`,
    "lotion"
  );
}

function fistIcon() {
  return svgIcon(
    `<ellipse cx="16" cy="20" rx="9" ry="8" fill="#e8c4a0"/>
     <rect x="8" y="10" width="4.2" height="10" rx="2" fill="#e8c4a0"/>
     <rect x="13" y="8" width="4.2" height="11" rx="2" fill="#f0d0b0"/>
     <rect x="18" y="9" width="4.2" height="10" rx="2" fill="#e8c4a0"/>
     <rect x="22.5" y="12" width="3.6" height="8" rx="1.6" fill="#d4a06a"/>`,
    "punch"
  );
}

function laserIcon() {
  return svgIcon(
    `<rect x="6" y="14" width="14" height="6" rx="1" fill="#b87333"/>
     <rect x="18" y="12" width="8" height="10" rx="1" fill="#8a4a20"/>
     <circle cx="10" cy="12" r="2.2" fill="#ff2020"/>
     <circle cx="16" cy="12" r="2.2" fill="#ff2020"/>
     <rect x="24" y="16" width="7" height="2" fill="#ff4040"/>
     <rect x="2" y="16" width="5" height="2" fill="#ff6060" opacity="0.7"/>`,
    "laser"
  );
}

function runIcon() {
  return svgIcon(
    `<circle cx="20" cy="6" r="3.2" fill="#fbf6ea"/>
     <path d="M18 10 L12 16 L8 14" stroke="#fbf6ea" stroke-width="2.2" fill="none" stroke-linecap="round"/>
     <path d="M18 10 L16 18 L22 22 L26 18" stroke="#fbf6ea" stroke-width="2.2" fill="none" stroke-linecap="round"/>
     <path d="M16 18 L10 26" stroke="#ffd76a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
     <path d="M22 22 L24 29" stroke="#ffd76a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    "run"
  );
}

function mountPad(keys, isPlaying, onPunch, onLaser) {
  if (root) return root;

  const style = document.createElement("style");
  style.id = "aus101-touch-css";
  style.textContent =
    "#aus101-touch,#aus101-touch *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}";
  document.head.appendChild(style);

  root = el("div", {
    position: "fixed",
    inset: "0",
    zIndex: "15",
    pointerEvents: "none",
    touchAction: "none",
    userSelect: "none",
    webkitUserSelect: "none",
  });
  root.id = "aus101-touch";
  root.setAttribute("aria-hidden", "true");

  const padL = el(
    "div",
    {
      position: "absolute",
      left: "max(18px, env(safe-area-inset-left))",
      bottom: "max(18px, env(safe-area-inset-bottom))",
      width: `${STICK_PX}px`,
      height: `${STICK_PX}px`,
      pointerEvents: "auto",
    },
    root
  );

  const base = el(
    "div",
    {
      position: "absolute",
      inset: "0",
      borderRadius: "50%",
      background: "rgba(12,18,16,0.34)",
      border: "1px solid rgba(251,246,234,0.22)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18), 0 6px 22px rgba(0,0,0,0.25)",
      backdropFilter: "blur(8px)",
      webkitBackdropFilter: "blur(8px)",
    },
    padL
  );

  const knob = el(
    "div",
    {
      position: "absolute",
      width: `${KNOB_PX}px`,
      height: `${KNOB_PX}px`,
      left: "50%",
      top: "50%",
      marginLeft: `${-KNOB_PX / 2}px`,
      marginTop: `${-KNOB_PX / 2}px`,
      borderRadius: "50%",
      background: "rgba(251,246,234,0.34)",
      border: "1px solid rgba(251,246,234,0.4)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      pointerEvents: "none",
    },
    padL
  );

  const radius = (STICK_PX - KNOB_PX) * 0.5;
  const stickCtl = bindStick(
    padL,
    base,
    knob,
    radius,
    (x, y, mag) => {
      setStick(x, y, mag);
      writeDigital(keys);
    },
    () => clearMove(keys)
  );

  // Smaller look / steer stick (mouse-look)
  const padR = el(
    "div",
    {
      position: "absolute",
      right: "max(16px, env(safe-area-inset-right))",
      bottom: "max(16px, env(safe-area-inset-bottom))",
      width: `${LOOK_PX}px`,
      height: `${LOOK_PX}px`,
      pointerEvents: "auto",
    },
    root
  );
  const lookBase = el(
    "div",
    {
      position: "absolute",
      inset: "0",
      borderRadius: "50%",
      background: "rgba(12,18,16,0.30)",
      border: "1px solid rgba(251,246,234,0.18)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.22)",
      backdropFilter: "blur(8px)",
      webkitBackdropFilter: "blur(8px)",
    },
    padR
  );
  const lookKnob = el(
    "div",
    {
      position: "absolute",
      width: `${LOOK_KNOB}px`,
      height: `${LOOK_KNOB}px`,
      left: "50%",
      top: "50%",
      marginLeft: `${-LOOK_KNOB / 2}px`,
      marginTop: `${-LOOK_KNOB / 2}px`,
      borderRadius: "50%",
      background: "rgba(255,215,106,0.28)",
      border: "1px solid rgba(255,215,106,0.45)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.28)",
      pointerEvents: "none",
    },
    padR
  );
  const lookR = (LOOK_PX - LOOK_KNOB) * 0.5;
  const lookCtl = bindStick(
    padR,
    lookBase,
    lookKnob,
    lookR,
    (x, y, mag) => {
      look.x = x;
      look.y = y;
      look.mag = mag;
    },
    () => {
      look.x = 0;
      look.y = 0;
      look.mag = 0;
    }
  );

  const col = el(
    "div",
    {
      position: "absolute",
      right: "max(16px, env(safe-area-inset-right))",
      bottom: `max(${18 + LOOK_PX + 12}px, calc(env(safe-area-inset-bottom) + ${LOOK_PX + 12}px))`,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      pointerEvents: "none",
    },
    root
  );

  const releases = [];
  const addHold = (icon, fn) => {
    const h = holdButton(col, BTN, icon, fn);
    releases.push(h.release);
  };
  addHold(laserIcon(), (down) => {
    if (down && isPlaying()) onLaser?.();
  });
  addHold(fistIcon(), (down) => {
    if (down && isPlaying()) onPunch?.();
  });
  addHold(runIcon(), (down) => {
    setOwned(keys, "ShiftLeft", "shift", down);
  });
  addHold(lotionIcon(), (down) => {
    setOwned(keys, "Space", "space", down);
  });

  document.body.appendChild(root);

  const syncVis = () => {
    const show = isTouchUi() && isPlaying();
    root.style.display = show ? "block" : "none";
    if (!show) {
      clearMove(keys);
      setOwned(keys, "Space", "space", false);
      setOwned(keys, "ShiftLeft", "shift", false);
      look.x = look.y = look.mag = 0;
      for (const r of releases) r();
      stickCtl.end();
      lookCtl.end();
    }
  };
  const loop = () => {
    if (!root) return;
    syncVis();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  if (typeof matchMedia === "function") {
    const mq = matchMedia("(pointer: coarse)");
    mq.addEventListener?.("change", syncVis);
  }

  return root;
}

/**
 * @param {{ keys: Record<string, any>, isPlaying: () => boolean }} opts
 */
export function installTouchControls({ keys, isPlaying, onPunch, onLaser }) {
  if (!keys || typeof isPlaying !== "function") return { getStick };
  writeAnalog(keys);
  if (!isTouchUi()) {
    if (root) root.style.display = "none";
    installed = true;
    return { getStick, root };
  }
  if (installed && root) return { getStick, root };
  installed = true;
  mountPad(keys, isPlaying, onPunch, onLaser);
  return { getStick, root };
}

/** @returns {{x:number,y:number,mag:number}} */
export function getStick() {
  return { x: stick.x, y: stick.y, mag: stick.mag };
}

/** Look/steer analog (right stick). x = yaw, y = pitch. */
export function getLookStick() {
  return { x: look.x, y: look.y, mag: look.mag };
}
