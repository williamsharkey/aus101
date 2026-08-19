/**
 * Unlabeled mobile pad: left stick + two hold buttons (jog / squeeze).
 * Shown only on coarse pointer / touch. Maps into the same `keys` object as WASD.
 */

const DEAD = 0.3;
const STICK_PX = 132;
const KNOB_PX = 58;
const BTN = 64;

const stick = { x: 0, y: 0, mag: 0 };
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

function mountPad(keys, isPlaying) {
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
  let joyId = null;

  const placeKnob = (nx, ny) => {
    knob.style.transform = `translate(${nx * radius}px, ${-ny * radius}px)`;
  };

  const joyFromEvent = (e) => {
    const r = base.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const raw = Math.hypot(dx, dy);
    const mag = Math.min(1, raw / radius);
    const x = raw > 0 ? (dx / raw) * mag : 0;
    const y = raw > 0 ? (-dy / raw) * mag : 0;
    setStick(x, y, mag);
    writeDigital(keys);
    placeKnob(x, y);
  };

  padL.addEventListener("pointerdown", (e) => {
    if (joyId != null) return;
    if (!isPlaying()) return;
    joyId = e.pointerId;
    padL.setPointerCapture?.(e.pointerId);
    joyFromEvent(e);
    e.preventDefault();
    e.stopPropagation();
  });
  padL.addEventListener("pointermove", (e) => {
    if (e.pointerId !== joyId) return;
    joyFromEvent(e);
    e.preventDefault();
    e.stopPropagation();
  });
  const joyEnd = (e) => {
    if (joyId == null || (e.pointerId != null && e.pointerId !== joyId)) return;
    joyId = null;
    clearMove(keys);
    placeKnob(0, 0);
    e.preventDefault();
    e.stopPropagation();
  };
  padL.addEventListener("pointerup", joyEnd);
  padL.addEventListener("pointercancel", joyEnd);
  padL.addEventListener("lostpointercapture", joyEnd);

  const col = el(
    "div",
    {
      position: "absolute",
      right: "max(18px, env(safe-area-inset-right))",
      bottom: "max(18px, env(safe-area-inset-bottom))",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      pointerEvents: "none",
    },
    root
  );

  holdButton(col, BTN, dot(), (down) => {
    setOwned(keys, "ShiftLeft", "shift", down);
  });
  holdButton(col, BTN + 8, droplet(), (down) => {
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
      placeKnob(0, 0);
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
export function installTouchControls({ keys, isPlaying }) {
  if (!keys || typeof isPlaying !== "function") return { getStick };
  writeAnalog(keys);
  if (!isTouchUi()) {
    if (root) root.style.display = "none";
    installed = true;
    return { getStick, root };
  }
  if (installed && root) return { getStick, root };
  installed = true;
  mountPad(keys, isPlaying);
  return { getStick, root };
}

/** @returns {{x:number,y:number,mag:number}} */
export function getStick() {
  return { x: stick.x, y: stick.y, mag: stick.mag };
}
