/**
 * Unlabeled mobile pad: left stick + two hold buttons (jog / squeeze).
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
  const down = (e) => {
    if (pid != null) return;
    pid = e.pointerId;
    btn.setPointerCapture?.(e.pointerId);
    btn.style.background = "rgba(255,215,106,0.28)";
    onHold(true);
    e.preventDefault();
    e.stopPropagation();
  };
  const up = (e) => {
    if (pid == null || (e.pointerId != null && e.pointerId !== pid)) return;
    pid = null;
    btn.style.background = "rgba(12,18,16,0.38)";
    onHold(false);
    e.preventDefault();
    e.stopPropagation();
  };
  btn.addEventListener("pointerdown", down);
  btn.addEventListener("pointerup", up);
  btn.addEventListener("pointercancel", up);
  btn.addEventListener("lostpointercapture", up);
  return btn;
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
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const raw = Math.hypot(dx, dy);
    const mag = Math.min(1, raw / radius);
    const x = raw > 0 ? (dx / raw) * mag : 0;
    const y = raw > 0 ? (-dy / raw) * mag : 0;
    onMove(x, y, mag);
    knob.style.transform = `translate(${x * radius}px, ${-y * radius}px)`;
  };
  pad.addEventListener("pointerdown", (e) => {
    if (joyId != null) return;
    joyId = e.pointerId;
    pad.setPointerCapture?.(e.pointerId);
    fromEvent(e);
    e.preventDefault();
    e.stopPropagation();
  });
  pad.addEventListener("pointermove", (e) => {
    if (e.pointerId !== joyId) return;
    fromEvent(e);
    e.preventDefault();
    e.stopPropagation();
  });
  const end = (e) => {
    if (joyId == null || (e.pointerId != null && e.pointerId !== joyId)) return;
    joyId = null;
    onEnd();
    knob.style.transform = "translate(0px, 0px)";
    e.preventDefault();
    e.stopPropagation();
  };
  pad.addEventListener("pointerup", end);
  pad.addEventListener("pointercancel", end);
  pad.addEventListener("lostpointercapture", end);
}

function tapButton(parent, size, icon, onTap) {
  const btn = holdButton(parent, size, icon, () => {});
  let fired = false;
  btn.addEventListener(
    "pointerdown",
    (e) => {
      if (!fired) {
        fired = true;
        onTap();
      }
      e.preventDefault();
      e.stopPropagation();
    },
    true
  );
  const reset = () => {
    fired = false;
  };
  btn.addEventListener("pointerup", reset);
  btn.addEventListener("pointercancel", reset);
  return btn;
}

function beamIcon() {
  const g = el("div", {
    width: "18px",
    height: "18px",
    position: "relative",
  });
  for (const x of [3, 11]) {
    const d = el("div", {
      position: "absolute",
      left: `${x}px`,
      top: "4px",
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: "#ff3030",
      boxShadow: "0 0 6px #ff1010",
    });
    g.appendChild(d);
  }
  const bar = el("div", {
    position: "absolute",
    left: "4px",
    top: "11px",
    width: "12px",
    height: "2px",
    background: "rgba(255,40,40,0.85)",
  });
  g.appendChild(bar);
  return g;
}

function fistIcon() {
  return el("div", {
    width: "14px",
    height: "14px",
    borderRadius: "3px",
    background: "rgba(251,246,234,0.9)",
    boxShadow: "2px 2px 0 rgba(0,0,0,0.35)",
  });
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
  bindStick(
    padL,
    base,
    knob,
    radius,
    (x, y, mag) => {
      if (!isPlaying()) return;
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
  bindStick(
    padR,
    lookBase,
    lookKnob,
    lookR,
    (x, y, mag) => {
      if (!isPlaying()) return;
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

  holdButton(col, BTN, beamIcon(), (down) => {
    if (down && isPlaying()) onLaser?.();
  });
  holdButton(col, BTN, fistIcon(), (down) => {
    if (down && isPlaying()) onPunch?.();
  });
  holdButton(col, BTN, dot(), (down) => {
    setOwned(keys, "ShiftLeft", "shift", down);
  });
  holdButton(col, BTN + 4, droplet(), (down) => {
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
