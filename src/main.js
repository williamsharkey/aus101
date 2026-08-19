/**
 * AUS101 — Gold Coast. Coconuts factories as kit, restyled.
 * Third-person copper/gold T-101, Carpenter bed, footsteps, unlabeled mobile pad.
 */
import * as THREE from "three";
import { applyDocumentShell, createSafeAreaProbe, sizeRenderer, installEdgeSwipeGuard } from "./shell/viewport.js";
import { PosterOverlay } from "./poster/PosterOverlay.js";
import { VoiceBank } from "./audio/voice.js";
import { SfxBank, installLotionFoley } from "./audio/sfx.js";
import { createCarpenterBed } from "./audio/carpenter.js";
import { initOcean } from "./audio/ocean.js";
import { createFootstepPlayer } from "./audio/footsteps.js";
import {
  createPlayer,
  createColliders,
  installInput,
  fixedUpdate,
  TICK,
} from "./input/player.js";
import { createFollowCam, updateFollowCam } from "./input/thirdPerson.js";
import { installTouchControls } from "./input/touchControls.js";
import { buildGoldCoast, setupGoldCoastLights, BOUNDS } from "./world/goldCoast.js";
import { createAus101, poseAus101 } from "./chars/aus101.js";
import { spawnBeachCast } from "./chars/npcs.js";
import { createWalkbyDirector } from "./audio/walkby.js";

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
setupGoldCoastLights(scene);

const camera = new THREE.PerspectiveCamera(62, 1, 0.08, 220);
const follow = createFollowCam();

const colliders = createColliders();
const level = buildGoldCoast(scene, colliders);
const player = createPlayer({ x: 0, y: 0, z: 10 });
player.yaw = 0;

const aus101 = createAus101();
scene.add(aus101);
const cast = spawnBeachCast(scene);

const voice = new VoiceBank();
voice.loadManifest().catch(() => {});
const sfx = new SfxBank();
const lotionFoley = installLotionFoley(sfx, null);
const steps = createFootstepPlayer(sfx);
const walkby = createWalkbyDirector(voice, cast);

let carpenter = null;
let oceanBed = null;

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
      carpenter?.setState("menu");
      if (document.pointerLockElement) document.exitPointerLock();
    }
  },
});
input.bindPlayer(player);
installTouchControls({ keys: input.keys, isPlaying: () => playing && !paused });

function resize() {
  const { w, h } = sizeRenderer(renderer, canvas);
  camera.aspect = w / Math.max(1, h);
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener("resize", resize);
window.addEventListener("orientationchange", () => setTimeout(resize, 300));

let audioOn = true;
window.addEventListener("keydown", (e) => {
  if (e.code === "KeyM" && playing) {
    audioOn = !audioOn;
    if (voice.gain) voice.gain.gain.value = audioOn ? 1 : 0;
    if (sfx.master) sfx.master.gain.value = audioOn ? 0.85 : 0;
  }
});

const poster = new PosterOverlay({
  onStart: async () => {
    playing = true;
    paused = false;
    clock.start();
    follow.snap();
    input.tryLock();
    try {
      await voice.unlock();
      await sfx.unlock();
      const ctx = voice.ctx || sfx.ctx;
      if (ctx && !carpenter) {
        carpenter = createCarpenterBed(ctx);
        oceanBed = initOcean(ctx);
      }
      carpenter?.setState("boardwalk");
      carpenter?.start();
      oceanBed?.start();
      if (audioOn) await voice.play("dj_open_01").catch(() => {});
    } catch (e) {
      console.warn("audio", e);
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
    const t = performance.now() * 0.001;
    level.update(t);
    const speed = Math.hypot(player.vel.x, player.vel.z);
    aus101.position.set(player.pos.x, player.pos.y, player.pos.z);
    // Rig face is +Z; locomotion forward is −Z at yaw=0 (Coconuts convention).
    aus101.rotation.y = player.yaw + Math.PI;
    poseAus101(aus101, { walkPhase: player.step, speed });
    updateFollowCam(camera, player, raw || 0.016);
    lotionFoley.tick(performance.now(), speed > 0.4);
    steps.tick({
      speed,
      onWood: level.isWood(player.pos.x, player.pos.z),
      dt: raw || TICK,
    });
    if (input.keys.Space) carpenter?.setState("apply");
    else carpenter?.setState("boardwalk");
    if (audioOn) walkby.tick(performance.now(), player.pos, speed);
  } else if (!playing) {
    camera.position.set(8, 6.5, 22);
    camera.lookAt(0, 1.2, 4);
  }
  renderer.render(scene, camera);
}
frame();
