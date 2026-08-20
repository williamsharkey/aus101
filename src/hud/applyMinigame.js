/**
 * Apply-mode 2D body map. Front silhouette; tap/drag stamps zinc.
 * Hidden unless show(npc). No WASD copy. Safe-area inset.
 */
import * as coverage from "../game/coverage.js";

const CSS_ID = "aus101-apply-mg-css";
const ZINC = { r: 243, g: 239, b: 228 };
const BARE = { r: 58, g: 36, b: 24 };
const STAMP_R = 0.22;
const TAP_AMT = 0.45;
const HOLD_AMT_S = 3.6;
const LOOK_SENS = 1.15;

/** stampCoverage UV: head 0.5,0.15 / torso 0.5,0.4 / arms 0.2|0.8 / legs 0.35|0.65. */
const UV = {
  head: { u: 0.5, v: 0.15 },
  torso: { u: 0.5, v: 0.4 },
  armL: { u: 0.2, v: 0.38 },
  armR: { u: 0.8, v: 0.38 },
  legL: { u: 0.35, v: 0.65 },
  legR: { u: 0.65, v: 0.65 },
};

const HIT_ORDER = ["head", "armL", "armR", "torso", "legL", "legR"];

function meshOf(npc) {
  if (!npc) return null;
  return npc.mesh || npc;
}

function clamp01(n) {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}

function lerpChan(a, b, t) {
  return (a + (b - a) * t + 0.5) | 0;
}

function cssRgb(t) {
  const k = clamp01(t);
  return `rgb(${lerpChan(BARE.r, ZINC.r, k)},${lerpChan(BARE.g, ZINC.g, k)},${lerpChan(BARE.b, ZINC.b, k)})`;
}

function stampFn() {
  return typeof coverage.stampCoverage === "function" ? coverage.stampCoverage : null;
}

function readCoverage(npc) {
  if (typeof coverage.coveragePercent === "function") {
    const n = coverage.coveragePercent(npc);
    if (Number.isFinite(n)) return clamp01(n);
  }
  const c = meshOf(npc)?.userData?.coverage;
  return Number.isFinite(c) ? clamp01(c) : 0;
}

function sampleMap(map, u, v, radius) {
  const size = map.size;
  const data = map.data;
  if (!size || !data) return 0;
  const rPx = Math.max(1, radius * size);
  const cx = (((u % 1) + 1) % 1) * size;
  const cy = Math.min(1, Math.max(0, v)) * size;
  const r2 = rPx * rPx;
  const x0 = Math.floor(cx - rPx);
  const x1 = Math.ceil(cx + rPx);
  const y0 = Math.max(0, Math.floor(cy - rPx));
  const y1 = Math.min(size - 1, Math.ceil(cy + rPx));
  let sum = 0;
  let n = 0;
  for (let y = y0; y <= y1; y++) {
    const dy = y + 0.5 - cy;
    for (let x = x0; x <= x1; x++) {
      const dx = x + 0.5 - cx;
      if (dx * dx + dy * dy > r2) continue;
      const xu = ((x % size) + size) % size;
      sum += data[y * size + xu];
      n++;
    }
  }
  return n ? sum / (n * 255) : 0;
}

function regionCoverage(npc, id) {
  const uv = UV[id];
  const map = meshOf(npc)?.userData?.coverageMap;
  if (map && uv) return clamp01(sampleMap(map, uv.u, uv.v, 0.1));
  return readCoverage(npc);
}

function addCapsule(path, x1, y1, x2, y2, r) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * r;
  const ny = (dx / len) * r;
  const a0 = Math.atan2(ny, nx);
  const a1 = a0 + Math.PI;
  path.moveTo(x1 + nx, y1 + ny);
  path.lineTo(x2 + nx, y2 + ny);
  path.arc(x2, y2, r, a0, a1);
  path.lineTo(x1 - nx, y1 - ny);
  path.arc(x1, y1, r, a1, a0);
  path.closePath();
}

/** Front silhouette in 200×360 design space, scaled to the canvas. */
function makeParts(w, h) {
  const sx = w / 200;
  const sy = h / 360;
  const X = (n) => n * sx;
  const Y = (n) => n * sy;
  const R = (n) => n * Math.min(sx, sy);

  const head = new Path2D();
  head.ellipse(X(100), Y(48), X(26), Y(30), 0, 0, Math.PI * 2);

  const torso = new Path2D();
  torso.moveTo(X(88), Y(76));
  torso.bezierCurveTo(X(78), Y(78), X(66), Y(84), X(58), Y(96));
  torso.lineTo(X(62), Y(198));
  torso.quadraticCurveTo(X(64), Y(216), X(78), Y(222));
  torso.lineTo(X(122), Y(222));
  torso.quadraticCurveTo(X(136), Y(216), X(138), Y(198));
  torso.lineTo(X(142), Y(96));
  torso.bezierCurveTo(X(134), Y(84), X(122), Y(78), X(112), Y(76));
  torso.closePath();

  const armL = new Path2D();
  addCapsule(armL, X(56), Y(100), X(40), Y(168), R(9));
  addCapsule(armL, X(40), Y(168), X(34), Y(230), R(7.5));
  armL.ellipse(X(32), Y(242), R(8), R(9), 0, 0, Math.PI * 2);

  const armR = new Path2D();
  addCapsule(armR, X(144), Y(100), X(160), Y(168), R(9));
  addCapsule(armR, X(160), Y(168), X(166), Y(230), R(7.5));
  armR.ellipse(X(168), Y(242), R(8), R(9), 0, 0, Math.PI * 2);

  const legL = new Path2D();
  addCapsule(legL, X(84), Y(222), X(78), Y(282), R(12));
  addCapsule(legL, X(78), Y(282), X(76), Y(336), R(10));
  legL.ellipse(X(70), Y(344), X(16), Y(7), 0, 0, Math.PI * 2);

  const legR = new Path2D();
  addCapsule(legR, X(116), Y(222), X(122), Y(282), R(12));
  addCapsule(legR, X(122), Y(282), X(124), Y(336), R(10));
  legR.ellipse(X(130), Y(344), X(16), Y(7), 0, 0, Math.PI * 2);

  return { head, torso, armL, armR, legL, legR };
}

function installCss() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CSS_ID)) return;
  const style = document.createElement("style");
  style.id = CSS_ID;
  style.textContent = `
#aus101-apply-mg{
  position:fixed;
  inset:0;
  z-index:16;
  display:none;
  pointer-events:none;
  box-sizing:border-box;
  padding-top:max(8px, env(safe-area-inset-top, 0px));
  padding-right:max(8px, env(safe-area-inset-right, 0px));
  padding-bottom:max(8px, env(safe-area-inset-bottom, 0px));
  padding-left:max(8px, env(safe-area-inset-left, 0px));
  -webkit-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color:transparent;
}
#aus101-apply-mg.is-on{display:block;}
#aus101-apply-mg .aus101-apply-card{
  position:absolute;
  left:8px;
  top:8px;
  width:min(300px, 42vw);
  height:min(540px, calc(100% - 88px));
  pointer-events:auto;
  touch-action:none;
  box-sizing:border-box;
  display:flex;
  flex-direction:row;
  gap:8px;
  padding:8px 8px 8px 6px;
  background:linear-gradient(180deg, rgba(42,30,16,0.92), rgba(10,12,10,0.94));
  border:1px solid rgba(224,184,88,0.7);
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 1px rgba(255,180,80,0.18), 0 16px 36px rgba(0,0,0,0.45);
  border-radius:8px;
}
@media (orientation:portrait){
  #aus101-apply-mg .aus101-apply-card{
    left:50%;
    top:auto;
    bottom:8px;
    transform:translateX(-50%);
    width:min(260px, 72vw);
    height:min(460px, 62vh);
  }
}
#aus101-apply-mg canvas{
  display:block;
  flex:1 1 auto;
  width:auto;
  height:100%;
  min-width:0;
  cursor:crosshair;
  touch-action:none;
}
#aus101-apply-mg .aus101-apply-tube{
  flex:0 0 22px;
  width:22px;
  height:100%;
  border:1px solid rgba(251,246,234,0.45);
  border-radius:11px;
  background:rgba(8,10,8,0.55);
  position:relative;
  overflow:hidden;
  box-shadow:inset 0 0 0 1px rgba(0,0,0,0.4);
}
#aus101-apply-mg .aus101-apply-tube-fill{
  position:absolute;
  left:2px;
  right:2px;
  bottom:2px;
  height:0%;
  border-radius:9px;
  background:linear-gradient(180deg, #fffef6, #e8e0cc);
  box-shadow:0 0 8px rgba(255,255,240,0.35);
}
`.trim();
  document.head.appendChild(style);
}

/**
 * @param {{ onStamp?: (info: { npc: object, u: number, v: number, radius: number, amount: number, region: string }) => void }} [opts]
 * @returns {{ show: (npc: object) => void, hide: () => void, tick: () => void, el: HTMLElement }}
 */
export function createApplyMinigame({ onStamp } = {}) {
  installCss();

  const root = document.createElement("div");
  root.id = "aus101-apply-mg";
  root.setAttribute("aria-hidden", "true");
  root.setAttribute("aria-label", "Coverage map");

  const card = document.createElement("div");
  card.className = "aus101-apply-card";
  root.appendChild(card);

  const canvas = document.createElement("canvas");
  card.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const tube = document.createElement("div");
  tube.className = "aus101-apply-tube";
  const tubeFill = document.createElement("div");
  tubeFill.className = "aus101-apply-tube-fill";
  tube.appendChild(tubeFill);
  card.appendChild(tube);

  let npc = null;
  let visible = false;
  let parts = null;
  let bodyPath = null;
  let bufW = 0;
  let bufH = 0;
  let hover = null;
  const pointer = { down: false, id: -1, region: null, lastT: 0, lx: 0, ly: 0 };
  const brush = { x: 0, y: 0, on: false };
  const GOAL = 0.95;

  function sizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = Math.max(1, canvas.clientWidth || card.clientWidth || 260);
    const cssH = Math.max(1, canvas.clientHeight || card.clientHeight || 480);
    const w = Math.max(1, Math.round(cssW * dpr));
    const h = Math.max(1, Math.round(cssH * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      parts = null;
    }
    if (!parts || bufW !== w || bufH !== h) {
      const ox = bufW || w;
      const oy = bufH || h;
      parts = makeParts(w, h);
      bodyPath = new Path2D();
      for (const id of HIT_ORDER) bodyPath.addPath(parts[id]);
      if (brush.on && ox && oy) {
        brush.x = (brush.x / ox) * w;
        brush.y = (brush.y / oy) * h;
      } else {
        brush.x = w * 0.5;
        brush.y = h * 0.4;
      }
      bufW = w;
      bufH = h;
    }
    return { w, h };
  }

  function hitRegion(x, y) {
    if (!parts || !ctx) return null;
    for (const id of HIT_ORDER) {
      if (ctx.isPointInPath(parts[id], x, y)) return id;
    }
    return null;
  }

  function localXY(e) {
    const r = canvas.getBoundingClientRect();
    const rw = r.width || 1;
    const rh = r.height || 1;
    return {
      x: ((e.clientX - r.left) / rw) * bufW,
      y: ((e.clientY - r.top) / rh) * bufH,
    };
  }

  function inBody(x, y) {
    return !!(parts && ctx && bodyPath && ctx.isPointInPath(bodyPath, x, y));
  }

  function xyToUV(x, y) {
    const u = bufW ? x / bufW : 0.5;
    const v = bufH ? (y / bufH) * 0.84 + 0.08 : 0.4;
    return { u: Math.min(1, Math.max(0, u)), v: Math.min(1, Math.max(0, v)) };
  }

  function updateTube() {
    const cov = npc ? readCoverage(npc) : 0;
    const t = Math.min(1, cov / GOAL);
    tubeFill.style.height = `${(t * 100).toFixed(1)}%`;
  }

  function paint() {
    if (!ctx || !visible) return;
    const { w, h } = sizeCanvas();
    ctx.clearRect(0, 0, w, h);

    const ids = ["legL", "legR", "armL", "armR", "torso", "head"];
    for (const id of ids) {
      const t = npc ? regionCoverage(npc, id) : 0;
      ctx.fillStyle = t > 0.12 ? `rgb(${lerpChan(BARE.r, ZINC.r, t)},${lerpChan(BARE.g, ZINC.g, t)},${lerpChan(BARE.b, ZINC.b, t)})` : cssRgb(0.06);
      ctx.fill(parts[id]);
    }

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(251,246,234,0.85)";
    ctx.lineWidth = Math.max(1.5, w / 90);
    for (const id of ids) ctx.stroke(parts[id]);

    if (brush.on) {
      const r = Math.max(8, w * 0.055);
      ctx.beginPath();
      ctx.arc(brush.x, brush.y, r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,248,0.92)";
      ctx.fill();
    }
    updateTube();
  }

  function applyStamp(region, amount) {
    if (!npc || !region || !(amount > 0)) return;
    const uv = UV[region];
    if (!uv) return;
    const stamp = stampFn();
    if (stamp) {
      stamp(npc, uv.u, uv.v, STAMP_R, amount);
      if (typeof coverage.applyCoverageToMats === "function") {
        coverage.applyCoverageToMats(npc);
      }
    }
    onStamp?.({ npc, u: uv.u, v: uv.v, radius: STAMP_R, amount, region });
  }

  function stampXY(x, y, amount) {
    if (!inBody(x, y)) return null;
    const region = hitRegion(x, y);
    pointer.region = region;
    hover = region;
    const uv = xyToUV(x, y);
    const stamp = stampFn();
    if (stamp && npc) {
      stamp(npc, uv.u, uv.v, 0.09, amount);
      if (typeof coverage.applyCoverageToMats === "function") coverage.applyCoverageToMats(npc);
    }
    if (region) onStamp?.({ npc, u: uv.u, v: uv.v, radius: 0.09, amount, region });
    return region;
  }

  function scribbleTo(x, y, amount) {
    const lx = pointer.lx;
    const ly = pointer.ly;
    pointer.lx = x;
    pointer.ly = y;
    const dist = Math.hypot(x - lx, y - ly);
    const steps = Math.max(1, Math.ceil(dist / Math.max(3, bufW * 0.03)));
    let hit = null;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      hit = stampXY(lx + (x - lx) * t, ly + (y - ly) * t, amount / steps) || hit;
    }
    return hit;
  }

  function stampAt(x, y, amount) {
    pointer.lx = x;
    pointer.ly = y;
    return stampXY(x, y, amount);
  }

  function stampAtEvent(e, amount) {
    const p = localXY(e);
    stampAt(p.x, p.y, amount);
    paint();
  }

  function holdStamp() {
    if (!pointer.down && !brush.on) return;
    const now = performance.now();
    const prev = pointer.lastT || now;
    const dt = Math.min(0.05, Math.max(0, (now - prev) / 1000));
    pointer.lastT = now;
    if (dt > 0 && brush.on) stampXY(brush.x, brush.y, HOLD_AMT_S * dt * 0.6);
  }

  function onDown(e) {
    if (!visible) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    pointer.down = true;
    pointer.id = e.pointerId;
    pointer.lastT = performance.now();
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    stampAtEvent(e, TAP_AMT);
  }

  function onMove(e) {
    if (!visible) return;
    const p = localXY(e);
    const region = hitRegion(p.x, p.y);
    if (pointer.down && (pointer.id === -1 || e.pointerId === pointer.id)) {
      e.preventDefault();
      e.stopPropagation();
      const prev = pointer.region;
      pointer.region = region;
      hover = region;
      brush.x = p.x;
      brush.y = p.y;
      brush.on = true;
      scribbleTo(p.x, p.y, TAP_AMT * 0.85);
      paint();
      return;
    }
    if (hover !== region) {
      hover = region;
      paint();
    }
  }

  function onUp(e) {
    if (pointer.id !== -1 && e.pointerId !== pointer.id) return;
    pointer.down = false;
    pointer.id = -1;
    pointer.region = null;
    pointer.lastT = 0;
    if (visible) {
      const p = localXY(e);
      hover = hitRegion(p.x, p.y);
      paint();
    }
  }

  function onLookMove(e) {
    if (!visible || !npc) return;
    if (typeof document === "undefined" || !document.pointerLockElement) return;
    if (!bufW || !bufH) sizeCanvas();
    brush.x = Math.max(0, Math.min(bufW, brush.x + e.movementX * LOOK_SENS));
    brush.y = Math.max(0, Math.min(bufH, brush.y + e.movementY * LOOK_SENS));
    brush.on = true;
    const prev = pointer.region;
    const region = hitRegion(brush.x, brush.y);
    pointer.region = region;
    hover = region;
    if (!pointer.lastT) pointer.lastT = performance.now();
    scribbleTo(brush.x, brush.y, TAP_AMT * 0.5);
    paint();
  }

  function stopCardMouse(e) {
    e.stopPropagation();
  }

  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  canvas.addEventListener("lostpointercapture", onUp);
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());
  card.addEventListener("mousedown", stopCardMouse);
  card.addEventListener("pointerdown", stopCardMouse);
  window.addEventListener("pointermove", (e) => {
    if (pointer.down) onMove(e);
  });
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);
  document.addEventListener("mousemove", onLookMove);
  window.addEventListener("resize", () => {
    if (visible) paint();
  });

  function show(next) {
    if (!next) {
      hide();
      return;
    }
    npc = next;
    visible = true;
    root.classList.add("is-on");
    root.setAttribute("aria-hidden", "false");
    sizeCanvas();
    if (!brush.on) {
      brush.x = bufW * 0.5;
      brush.y = bufH * 0.4;
    }
    brush.on = true;
    pointer.region = hitRegion(brush.x, brush.y);
    hover = pointer.region;
    if (!pointer.lastT) pointer.lastT = performance.now();
    paint();
    requestAnimationFrame(paint);
  }

  function hide() {
    npc = null;
    visible = false;
    hover = null;
    brush.on = false;
    pointer.down = false;
    pointer.id = -1;
    pointer.region = null;
    pointer.lastT = 0;
    root.classList.remove("is-on");
    root.setAttribute("aria-hidden", "true");
  }

  function tick() {
    if (!visible) return;
    holdStamp();
    paint();
  }

  document.body.appendChild(root);

  return { show, hide, tick, el: root };
}
