/**
 * AUS101 — Gold Coast. Coconuts factories as kit, restyled.
 * Third-person copper/gold T-101, Carpenter bed, footsteps, unlabeled mobile pad.
 */
import * as THREE from "three";
import { applyDocumentShell, createSafeAreaProbe, sizeRenderer, installEdgeSwipeGuard } from "./shell/viewport.js";
import { PosterOverlay } from "./poster/PosterOverlay.js";
import { CutsceneReel } from "./poster/CutsceneReel.js";
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
import { installTouchControls, getLookStick } from "./input/touchControls.js";
import { createShadesBed } from "./audio/shades.js";
import { buildGoldCoast, setupGoldCoastLights, BOUNDS, GC } from "./world/goldCoast.js";
import { createAus101, poseAus101 } from "./chars/aus101.js";
import { spawnBeachCast } from "./chars/npcs.js";
import { createWalkbyDirector } from "./audio/walkby.js";
import { tickApply } from "./game/apply.js";

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
let shades = null;

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
    if (voice.gain) voice.gain.gain.value = audioOn ? 0.5 : 0;
    if (sfx.master) sfx.master.gain.value = audioOn ? 0.85 : 0;
  }
});

async function beginPlay() {
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
      shades = createShadesBed(ctx);
      shades.start();
      shades.setMix(0, 0.05);
    }
    carpenter?.setState("boardwalk");
    carpenter?.start();
    oceanBed?.start();
    if (audioOn) {
      await voice.preload([
        "dj_open_01",
        "gold_coast_lad_01",
        "walkby_flirt_01",
        "walkby_heckle_01",
        "ken_gossip_steaks_beach",
        "babe_gossip_botox_map",
        "interject_oi_01",
        "gull_01",
        "goth_01",
      ]);
      await voice.play("dj_open_01").ready;
    }
  } catch (e) {
    console.warn("audio", e);
  }
}

const reel = new CutsceneReel({ onDone: () => beginPlay() });
const poster = new PosterOverlay({
  onStart: async () => {
    try {
      await voice.unlock();
      if (audioOn) await voice.play("factory_recall_01").ready;
    } catch {
      /* ignore */
    }
    reel.start();
  },
});

const billboardTex = new THREE.TextureLoader().load("assets/media/ads/billboard_terminate_uv.png", (tex) => {
  tex.colorSpace = THREE.SRGBColorSpace;
});
const board = new THREE.Mesh(
  new THREE.PlaneGeometry(9.2, 5.2),
  new THREE.MeshBasicMaterial({ map: billboardTex })
);
board.position.set(0, 6.4, GC.boardwalkZ - 5.5);
board.rotation.y = Math.PI;
scene.add(board);

function frame() {
  requestAnimationFrame(frame);
  const raw = paused || !playing ? 0 : Math.min(0.05, clock.getDelta());
  acc += raw;
  while (acc >= TICK) {
    if (playing && !paused) {
      const lk = getLookStick();
      if (lk.mag > 0.04) {
        player.yaw -= lk.x * 2.35 * TICK;
        player.pitch -= lk.y * 1.55 * TICK;
        player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch));
      }
      fixedUpdate(player, input.keys, colliders.COL, BOUNDS, TICK);
    }
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
    const squeezing = !!input.keys.Space;
    if (squeezing) carpenter?.setState("apply");
    else carpenter?.setState("boardwalk");
    const painted = tickApply(cast, player.pos, squeezing, raw || TICK);
    if (painted && audioOn && !walkby.isTalking(performance.now()) && Math.random() < 0.012) {
      voice.play("rub_pleasure_01", { gain: 1.2 });
    }
    if (audioOn) walkby.tick(performance.now(), player.pos);
    if (level.piano && shades) {
      const dx = player.pos.x - level.piano.x;
      const dz = player.pos.z - level.piano.z;
      const pd = Math.hypot(dx, dz);
      const wet = pd < 14 ? Math.max(0, 1 - pd / 14) ** 1.4 : 0;
      shades.setMix(audioOn ? wet : 0, 0.35);
      if (wet > 0.35) carpenter?.setState("menu");
    }
  } else if (!playing) {
    camera.position.set(8, 6.5, 22);
    camera.lookAt(0, 1.2, 4);
  }
  renderer.render(scene, camera);
}
frame();
