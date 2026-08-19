/**
 * AUS101 entry — BUILD0 shell + POSTER0 first frame.
 * Gameplay world lands in later PRs; poster tap unlocks audio and shows a stub beach clear.
 */
import * as THREE from "three";
import { applyDocumentShell, createSafeAreaProbe, sizeRenderer, installEdgeSwipeGuard } from "./shell/viewport.js";
import { PosterOverlay } from "./poster/PosterOverlay.js";
import { VoiceBank } from "./audio/voice.js";

const BG = 0x0b1210;

applyDocumentShell();
installEdgeSwipeGuard();
createSafeAreaProbe();

const canvas = document.getElementById("game");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
renderer.setClearColor(BG, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(BG);
scene.fog = new THREE.FogExp2(0x0b1210, 0.012);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
camera.position.set(0, 1.65, 6);
camera.lookAt(0, 1.2, 0);

// Stub beach so post-poster is not a void (full world = later PRs)
const hemi = new THREE.HemisphereLight(0x7ec8ff, 0xc4a574, 0.85);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffe2b0, 1.85);
sun.position.set(18, 42, -8);
scene.add(sun);

const sand = new THREE.Mesh(
  new THREE.PlaneGeometry(80, 50),
  new THREE.MeshStandardMaterial({ color: 0xc4a574, roughness: 0.95 })
);
sand.rotation.x = -Math.PI / 2;
scene.add(sand);

const ocean = new THREE.Mesh(
  new THREE.PlaneGeometry(80, 18),
  new THREE.MeshStandardMaterial({ color: 0x0a3a48, roughness: 0.35, metalness: 0.1 })
);
ocean.rotation.x = -Math.PI / 2;
ocean.position.set(0, 0.02, -22);
scene.add(ocean);

const voice = new VoiceBank();
voice.loadManifest().catch((e) => console.warn("VO manifest", e));

let playing = false;
let paused = false;
const clock = new THREE.Clock();

function resize() {
  const { w, h } = sizeRenderer(renderer, canvas);
  camera.aspect = w / Math.max(1, h);
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener("resize", resize);
window.addEventListener("orientationchange", () => setTimeout(resize, 300));

const poster = new PosterOverlay({
  onStart: async () => {
    playing = true;
    paused = false;
    clock.start();
    try {
      await voice.unlock();
      await voice.play("dj_open_01");
    } catch (e) {
      console.warn("VO play", e);
    }
  },
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    e.preventDefault();
    if (playing && !paused) {
      paused = true;
      poster.showAsPause();
    }
  }
});

function frame() {
  requestAnimationFrame(frame);
  const dt = paused || !playing ? 0 : Math.min(0.05, clock.getDelta());
  if (dt > 0) {
    ocean.position.x = Math.sin(performance.now() * 0.0003) * 0.4;
  }
  renderer.render(scene, camera);
}
frame();

// Never recreate renderer — only setSize on resize (already wired).
console.info("AUS101 BUILD0/POSTER0 ready");
