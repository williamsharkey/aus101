/**
 * AUS101 entry — BUILD0/POSTER0 + W0/W1 beach locomotion.
 * Controls ported from Coconuts (Steve / a-better-internet).
 */
import * as THREE from "three";
import { applyDocumentShell, createSafeAreaProbe, sizeRenderer, installEdgeSwipeGuard } from "./shell/viewport.js";
import { PosterOverlay } from "./poster/PosterOverlay.js";
import { VoiceBank } from "./audio/voice.js";
import { SfxBank, installLotionFoley } from "./audio/sfx.js";
import {
  createPlayer,
  createColliders,
  installInput,
  fixedUpdate,
  applyCamera,
  TICK,
} from "./input/player.js";
import { buildBeach, setupLights, BOUNDS } from "./world/beach.js";

const BG = 0x0b1210;

applyDocumentShell();
installEdgeSwipeGuard();
createSafeAreaProbe();

const canvas = document.getElementById("game");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.setClearColor(BG, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(BG);
scene.fog = new THREE.FogExp2(0xb8d4e0, 0.008);

const camera = new THREE.PerspectiveCamera(70, 1, 0.05, 400);
setupLights(scene);

const colliders = createColliders();
const beach = buildBeach(scene, colliders);
const player = createPlayer({ x: 0, y: 0, z: 10 });

const voice = new VoiceBank();
voice.loadManifest().catch((e) => console.warn("VO manifest", e));
const sfx = new SfxBank();
const lotionFoley = installLotionFoley(sfx, null);

let playing = false;
let paused = false;
let acc = 0;
const clock = new THREE.Clock(false);

const input = installInput({
  dom: canvas,
  isPlaying: () => playing && !paused,
  onEscapePause: () => {
    if (playing && !paused) {
      paused = true;
      poster.showAsPause();
      if (document.pointerLockElement) document.exitPointerLock();
    }
  },
});
input.bindPlayer(player);

function resize() {
  const { w, h } = sizeRenderer(renderer, canvas);
  camera.aspect = w / Math.max(1, h);
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener("resize", resize);
window.addEventListener("orientationchange", () => setTimeout(resize, 300));

const hud = document.createElement("div");
hud.id = "hud";
Object.assign(hud.style, {
  position: "fixed",
  left: "14px",
  bottom: "max(14px, env(safe-area-inset-bottom))",
  zIndex: "5",
  color: "#fbf6ea",
  font: "12.5px ui-sans-serif, system-ui, sans-serif",
  textShadow: "0 1px 3px rgba(0,0,0,.55)",
  pointerEvents: "none",
  opacity: "0",
  transition: "opacity .3s",
});
hud.innerHTML =
  "<b style='color:#ffd76a'>WASD</b> move · <b style='color:#ffd76a'>Mouse</b> look · <b style='color:#ffd76a'>Shift</b> jog · <b style='color:#ffd76a'>Space</b> squeeze/rub · <b style='color:#ffd76a'>Esc</b> pause · <b style='color:#ffd76a'>M</b> mute";
document.body.appendChild(hud);

let audioOn = true;
window.addEventListener("keydown", (e) => {
  if (e.code === "KeyM" && playing) {
    audioOn = !audioOn;
    if (voice.gain) voice.gain.gain.value = audioOn ? 1 : 0;
  }
});

const poster = new PosterOverlay({
  onStart: async () => {
    playing = true;
    paused = false;
    clock.start();
    hud.style.opacity = "0.92";
    input.tryLock();
    try {
      await voice.unlock();
      await sfx.unlock();
      if (audioOn) await voice.play("dj_open_01");
    } catch (e) {
      console.warn("VO play", e);
    }
  },
});

function frame() {
  requestAnimationFrame(frame);
  const raw = paused || !playing ? 0 : Math.min(0.05, clock.getDelta());
  acc += raw;
  while (acc >= TICK) {
    if (playing && !paused) fixedUpdate(player, input.keys, colliders.COL, BOUNDS, TICK);
    acc -= TICK;
  }
  if (playing && !paused) {
    beach.update(performance.now() * 0.001);
    applyCamera(camera, player);
    const moving = Math.hypot(player.vel.x, player.vel.z) > 0.4;
    lotionFoley.tick(performance.now(), moving);
  } else if (!playing) {
    camera.position.set(0, 2.2, 14);
    camera.lookAt(0, 1.0, 0);
  }
  renderer.render(scene, camera);
}
frame();

console.info("AUS101 W0/W1 beach + Coconuts-style controls ready");
