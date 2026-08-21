/**
 * Reticule FM 101.7 — icon-only Prev / Pause / Next + volume.
 * Safe-area, z-index 12. Programs drive carpenter.setState.
 */

import { midiBus } from "../audio/midiBus.js";

const PROGRAMS = [
  { id: "carpenter", title: "JUNO 106", song: "dj_song_01" },
  { id: "galway", title: "WIZBALL SHORE", song: "dj_song_02" },
  { id: "fm7", title: "FM7 DUSK", song: "dj_song_03" },
  { id: "dx", title: "DX ZINC", song: "dj_song_01" },
  { id: "chip", title: "CHIP PATROL", song: "dj_song_02" },
];
const SONGS = ["dj_song_01", "dj_song_02", "dj_song_03"];
const QUIP_N = 49;
const BTN = 26;
const GAP = 8;
const VOL_STEP = 0.06;

function pad2(n) {
  return n < 10 ? `0${n}` : String(n);
}

function isTouchUi() {
  const mm = (q) => (typeof matchMedia === "function" ? matchMedia(q).matches : false);
  if (typeof matchMedia !== "function") return "ontouchstart" in window;
  if (mm("(pointer: coarse)") || mm("(any-pointer: coarse)")) return true;
  if ("ontouchstart" in window && mm("(hover: none)")) return true;
  return false;
}

function isLandscape() {
  if (typeof matchMedia === "function" && matchMedia("(orientation: landscape)").matches) return true;
  return window.innerWidth > window.innerHeight;
}

function el(tag, style, parent) {
  const n = document.createElement(tag);
  if (style) Object.assign(n.style, style);
  if (parent) parent.appendChild(n);
  return n;
}

function shuffle(arr, seed) {
  let s = (seed >>> 0) || 1;
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

function typingTarget(t) {
  if (!t || t === document.body || t === document.documentElement) return false;
  const tag = (t.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return true;
  return !!t.isContentEditable;
}

function iconPrev() {
  const w = el("span", { display: "flex", alignItems: "center", gap: "1px" });
  el("span", { width: "2px", height: "10px", background: "currentColor", borderRadius: "1px" }, w);
  el(
    "span",
    {
      width: "0",
      height: "0",
      borderStyle: "solid",
      borderWidth: "5px 8px 5px 0",
      borderColor: "transparent currentColor transparent transparent",
    },
    w
  );
  return w;
}

function iconNext() {
  const w = el("span", { display: "flex", alignItems: "center", gap: "1px" });
  el(
    "span",
    {
      width: "0",
      height: "0",
      borderStyle: "solid",
      borderWidth: "5px 0 5px 8px",
      borderColor: "transparent transparent transparent currentColor",
    },
    w
  );
  el("span", { width: "2px", height: "10px", background: "currentColor", borderRadius: "1px" }, w);
  return w;
}

function iconPause() {
  const w = el("span", { display: "flex", alignItems: "center", gap: "3px" });
  const bar = () =>
    el("span", { width: "3px", height: "10px", background: "currentColor", borderRadius: "1px" }, w);
  bar();
  bar();
  return w;
}

function iconPlay() {
  return el("span", {
    width: "0",
    height: "0",
    marginLeft: "2px",
    borderStyle: "solid",
    borderWidth: "6px 0 6px 9px",
    borderColor: "transparent transparent transparent currentColor",
  });
}

function makeButton(icon, label) {
  const btn = el("button", {
    width: `${BTN}px`,
    height: `${BTN}px`,
    borderRadius: "50%",
    padding: "0",
    margin: "0",
    border: "1px solid rgba(251,246,234,0.28)",
    background: "rgba(12,18,16,0.42)",
    color: "rgba(251,246,234,0.92)",
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18), 0 3px 12px rgba(0,0,0,0.28)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "auto",
    touchAction: "none",
    cursor: "pointer",
    appearance: "none",
    webkitAppearance: "none",
    outline: "none",
    backdropFilter: "blur(8px)",
    webkitBackdropFilter: "blur(8px)",
    userSelect: "none",
    webkitUserSelect: "none",
  });
  btn.type = "button";
  btn.tabIndex = -1;
  btn.setAttribute("aria-label", label);
  btn.appendChild(icon);
  return btn;
}

function fillQuips() {
  const ids = [];
  for (let i = 1; i <= QUIP_N; i++) ids.push(`dj_quip_${pad2(i)}`);
  return shuffle(ids, (performance.now() * 997) | 0);
}

/**
 * @param {{ carpenter?: { setState?: Function, start?: Function, stop?: Function, setMix?: Function, state?: string, running?: boolean }, voice?: { play?: Function, busy?: boolean }, isTalking?: (now: number) => boolean }} opts
 * @returns {{ el: HTMLElement, tick: () => void, dispose: () => void }}
 */
export function createRadioHud({ carpenter, tracker, scores, voice, isTalking } = {}) {
  let idx = 0;
  let paused = carpenter ? carpenter.running === false : false;
  let vol = 1;
  let pending = false;
  let quipBag = [];
  let disposed = false;
  let drag = null;

  if (!document.getElementById("aus101-radio-css")) {
    const css = document.createElement("style");
    css.id = "aus101-radio-css";
    css.textContent =
      "#aus101-radio,#aus101-radio *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}" +
      "#aus101-radio button:active{background:rgba(255,215,106,0.28)!important;}" +
      "#aus101-radio .radio-vol{-webkit-appearance:none;appearance:none;width:56px;height:18px;background:transparent;padding:0;margin:0 2px 0 0;cursor:pointer;}" +
      "#aus101-radio .radio-vol::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:rgba(251,246,234,0.28);}" +
      "#aus101-radio .radio-vol::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:10px;border-radius:50%;background:#ffd76a;margin-top:-3.5px;border:0;}" +
      "#aus101-radio .radio-vol::-moz-range-track{height:3px;border-radius:2px;background:rgba(251,246,234,0.28);}" +
      "#aus101-radio .radio-vol::-moz-range-thumb{width:10px;height:10px;border-radius:50%;background:#ffd76a;border:0;}" +
      "#aus101-radio[data-touch='1'] .radio-vol{display:none;}";
    document.head.appendChild(css);
  }

  const root = el("div", {
    position: "fixed",
    zIndex: "12",
    pointerEvents: "none",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "none",
  });
  root.id = "aus101-radio";
  root.setAttribute("role", "group");
  root.setAttribute("aria-label", "Reticule FM 101.7");

  const cluster = el(
    "div",
    {
      display: "flex",
      alignItems: "center",
      gap: `${GAP}px`,
      pointerEvents: "auto",
      touchAction: "none",
    },
    root
  );

  const slider = document.createElement("input");
  slider.type = "range";
  slider.className = "radio-vol";
  slider.min = "0";
  slider.max = "1";
  slider.step = "0.01";
  slider.value = "1";
  slider.tabIndex = -1;
  slider.setAttribute("aria-label", "Volume");
  cluster.appendChild(slider);

  const prevBtn = makeButton(iconPrev(), "Previous");
  const pauseBtn = makeButton(iconPause(), "Pause");
  const nextBtn = makeButton(iconNext(), "Next");
  const pip = el("span", {
    position: "absolute",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    right: "3px",
    top: "3px",
    background: "#ffd76a",
    boxShadow: "0 0 6px rgba(255,215,106,0.7)",
    pointerEvents: "none",
  });
  pauseBtn.style.position = "relative";
  pauseBtn.appendChild(pip);
  cluster.append(prevBtn, pauseBtn, nextBtn);
  const tag = el(
    "span",
    {
      font: "9px ui-sans-serif, system-ui, sans-serif",
      letterSpacing: "0.12em",
      color: "rgba(255,215,106,0.88)",
      textShadow: "0 1px 3px #000",
      pointerEvents: "none",
      maxWidth: "92px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    cluster
  );

  function talkingNow() {
    if (voice?.busy) return true;
    if (typeof isTalking === "function") {
      try {
        if (isTalking(performance.now())) return true;
      } catch {
        /* ignore */
      }
    }
    return false;
  }

  function nextQuip() {
    if (!quipBag.length) quipBag = fillQuips();
    return quipBag.pop();
  }

  function announce() {
    if (typeof voice?.play !== "function") {
      pending = false;
      return;
    }
    if (talkingNow()) {
      pending = true;
      return;
    }
    pending = false;
    const song = PROGRAMS[idx]?.song || SONGS[idx % SONGS.length] || "dj_song_01";
    const handle = voice.play(song);
    handle.ready?.then((ok) => {
      if (!ok) {
        pending = true;
        return;
      }
      const prev = handle.onended;
      handle.onended = () => {
        if (typeof prev === "function") prev();
        if (talkingNow()) return;
        const q = nextQuip();
        if (q) voice.play(q);
      };
    });
  }

  function setVolume(v) {
    vol = Math.max(0, Math.min(1, v));
    if (slider.value !== String(vol)) slider.value = String(vol);
    carpenter?.setMix?.(PROGRAMS[idx]?.id === "carpenter" ? vol : 0);
    tracker?.setMix?.(PROGRAMS[idx]?.id === "carpenter" ? 0 : vol);
  }

  function paintPause() {
    pauseBtn.replaceChildren(paused ? iconPlay() : iconPause(), pip);
    pauseBtn.setAttribute("aria-label", paused ? "Play" : "Pause");
    pauseBtn.setAttribute("aria-pressed", paused ? "true" : "false");
  }

  function paintProgram() {
    const colors = ["#ffd76a", "#7ec8ff", "#ff8ad4", "#9dffb0", "#ffb347"];
    pip.style.background = colors[idx] || colors[0];
    pip.style.boxShadow = `0 0 6px ${colors[idx] || colors[0]}`;
    if (tag) tag.textContent = PROGRAMS[idx]?.title || "";
  }

  function applyProgram(announceIt) {
    const p = PROGRAMS[idx] || PROGRAMS[0];
    midiBus.emit({ type: "program", id: p.id, src: "radio" });
    if (p.id === "carpenter") {
      tracker?.stop?.();
      carpenter?.setState?.("boardwalk");
      if (!paused) {
        carpenter?.start?.();
        carpenter?.setMix?.(vol);
      }
    } else {
      carpenter?.setMix?.(0);
      const song = scores?.[p.id];
      if (song && !paused) {
        tracker?.play?.(song);
        tracker?.setMix?.(vol);
      }
    }
    paintProgram();
    if (announceIt) announce();
  }

  function step(dir) {
    idx = (idx + dir + PROGRAMS.length) % PROGRAMS.length;
    applyProgram(true);
  }

  function togglePause() {
    paused = !paused;
    if (paused) {
      carpenter?.stop?.();
      tracker?.stop?.();
    } else applyProgram(false);
    paintPause();
  }

  function layout() {
    const land = isLandscape();
    const top = land
      ? "max(20px, calc(env(safe-area-inset-top, 0px) + 4px))"
      : "max(12px, calc(env(safe-area-inset-top, 0px) + 6px))";
    root.style.top = top;
    root.style.right = "max(10px, env(safe-area-inset-right, 0px))";
    root.dataset.touch = isTouchUi() ? "1" : "0";
  }

  const onKey = (e) => {
    if (disposed) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (typingTarget(e.target)) return;
    const c = e.code;
    const k = e.key;
    if (c === "Minus" || c === "NumpadSubtract" || k === "-" || k === "_") {
      setVolume(vol - VOL_STEP);
      e.preventDefault();
      return;
    }
    if (c === "Equal" || c === "NumpadAdd" || k === "=" || k === "+") {
      setVolume(vol + VOL_STEP);
      e.preventDefault();
      return;
    }
    if (e.repeat) return;
    if (c === "BracketLeft" || k === "[" || c === "Comma" || k === ",") {
      step(-1);
      e.preventDefault();
      return;
    }
    if (c === "BracketRight" || k === "]" || c === "Period" || k === ".") {
      step(1);
      e.preventDefault();
      return;
    }
    if (c === "KeyP" || k === "p" || k === "P") {
      togglePause();
      e.preventDefault();
    }
  };

  const onSlider = () => setVolume(parseFloat(slider.value));

  const onClusterDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (e.target === slider) return;
    drag = { id: e.pointerId, y: e.clientY, vol, moved: false };
    try {
      cluster.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };
  const onClusterMove = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dy = drag.y - e.clientY;
    if (Math.abs(dy) > 7) drag.moved = true;
    if (drag.moved) setVolume(drag.vol + dy / 140);
  };
  const onClusterUp = (e) => {
    if (!drag || (e.pointerId != null && e.pointerId !== drag.id)) return;
    const moved = drag.moved;
    drag = null;
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  function bindTap(btn, fn) {
    btn.addEventListener("pointerup", (e) => {
      if (drag?.moved) return;
      e.preventDefault();
      e.stopPropagation();
      fn();
    });
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  bindTap(prevBtn, () => step(-1));
  bindTap(pauseBtn, () => togglePause());
  bindTap(nextBtn, () => step(1));

  slider.addEventListener("input", onSlider);
  slider.addEventListener("change", onSlider);
  cluster.addEventListener("pointerdown", onClusterDown);
  cluster.addEventListener("pointermove", onClusterMove);
  cluster.addEventListener("pointerup", onClusterUp);
  cluster.addEventListener("pointercancel", onClusterUp);
  window.addEventListener("keydown", onKey);
  window.addEventListener("resize", layout);
  window.addEventListener("orientationchange", layout);

  layout();
  paintPause();
  paintProgram();
  document.body.appendChild(root);

  return {
    el: root,
    tick() {
      if (disposed) return;
      layout();
      if (pending && !talkingNow()) announce();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      pending = false;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", layout);
      window.removeEventListener("orientationchange", layout);
      slider.removeEventListener("input", onSlider);
      slider.removeEventListener("change", onSlider);
      cluster.removeEventListener("pointerdown", onClusterDown);
      cluster.removeEventListener("pointermove", onClusterMove);
      cluster.removeEventListener("pointerup", onClusterUp);
      cluster.removeEventListener("pointercancel", onClusterUp);
      root.remove();
    },
  };
}
