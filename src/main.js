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
import { createLotion } from "./game/lotion.js";
import { runApplyFrame } from "./game/applyFlow.js";
import { bindBottle, tickBottle } from "./view/bottle.js";
import { createRecall } from "./game/recall.js";
import { createPanic } from "./game/panic.js";
import { createCombat } from "./game/combat.js";
import { createPropPhysics } from "./phys/props.js";
import { createReticuleBay } from "./hud/reticule.js";
import { createRadioHud } from "./hud/radio.js";
import { createApplyMinigame } from "./hud/applyMinigame.js";
import { createEncounterDirector } from "./game/encounters.js";
import { createArtist } from "./chars/artist.js";
import { spawnParty } from "./world/party.js";
import { spawnFights } from "./phys/fights.js";
import { spawnPsaKiosks } from "./world/psa.js";
import { createMusicDirector } from "./audio/musicDirector.js";
import { createBoomBed, createGuitarBed, createDjBed } from "./audio/localBeds.js";
import { attachGadgets } from "./world/gadgets.js";
import { spawnSynthRig } from "./world/synthRig.js";
import { spawnInteriors } from "./world/interiors.js";
import { createTapeSystem } from "./audio/tapeDeck.js";

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
// Enterable buildings register their own wall AABBs, with a gap at each doorway.
const interiors = spawnInteriors(scene, colliders);

const props = createPropPhysics({
  scene,
  bounds: BOUNDS,
  colliders,
  isWood: (x, z) => level.isWood(x, z),
});
for (const ball of level.balls) props.add(ball);

const player = createPlayer({ x: 0, y: 0, z: 10 });
player.yaw = 0;

const aus101 = createAus101();
scene.add(aus101);
const cast = spawnBeachCast(scene);
const party = spawnParty(scene);
const fights = spawnFights(scene);
const psa = spawnPsaKiosks(scene);
const artist = createArtist(scene);
const gadgets = attachGadgets(cast, scene);
const synth = spawnSynthRig(scene);
const tapes = createTapeSystem({
  getBoomPos: () => party.musicSpots.find((s) => s.id === "boombox")?.position || { x: 12, z: 8 },
  getDjPos: () => ({ x: -24, z: 7 }),
});
// The guitar Kens are real bodies in the scene, so register the meshes themselves.
// Pushing `{ mesh: { position } }` stand-ins here used to crash `ensureCoverageMap`,
// which reads `mesh.userData` after `isPaintable` waves the stand-in through.
for (const name of ["ken-guitar-a", "ken-guitar-b"]) {
  const mesh = scene.getObjectByName(name);
  if (mesh) cast.push({ mesh, kind: "ken", ageBand: "adult" });
}

const voice = new VoiceBank();
voice.loadManifest().catch(() => {});
const sfx = new SfxBank();
const lotionFoley = installLotionFoley(sfx, null);
const steps = createFootstepPlayer(sfx);
const walkby = createWalkbyDirector(voice, cast);
const lotion = createLotion();
bindBottle(aus101);
const bay = createReticuleBay();
document.body.appendChild(bay.html);
const applyUx = createApplyMinigame();

const panic = createPanic({
  scene,
  cast,
  play: (id) => voice.play(id),
});
const recall = createRecall({
  scene,
  play: (id) => voice.play(id),
  onGameOver: () => {
    playing = false;
    carpenter?.setState("menu");
  },
});
let radio = null;

// Violence is a physical act, not a keypress: `combat` swings and raycasts, and
// only reports through onHarm when someone is actually struck. A whiff summons
// nothing.
const combat = createCombat({
  scene,
  cast,
  play: (id) => voice.play(id),
  onHarm: (info) => {
    panic.onHarm(info);
    recall.onHarm(info);
  },
});

window.addEventListener("keydown", (e) => {
  if (!playing || paused || e.repeat) return;
  if (e.code === "KeyF") {
    e.preventDefault();
    combat.laser(player.pos, player.yaw, player.pitch);
  }
  if (e.code === "KeyG") {
    e.preventDefault();
    combat.punch(player.pos, player.yaw, player.pitch);
  }
});

let carpenter = null;
let oceanBed = null;
let shades = null;
let music = null;
let boomBed = null;
let guitarBed = null;
let djBed = null;

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
  // Clear any wanted state left over from a previous run's game over.
  recall.reset();
  panic.dispose();
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
      boomBed = createBoomBed(ctx);
      guitarBed = createGuitarBed(ctx);
      djBed = createDjBed(ctx);
      boomBed.start();
      guitarBed.start();
      djBed.start();
      boomBed.setMix(0, 0.05);
      guitarBed.setMix(0, 0.05);
      djBed.setMix(0, 0.05);
      const spots = party.musicSpots;
      const find = (id) => spots.find((s) => s.id === id);
      radio = createRadioHud({
        carpenter,
        voice,
        isTalking: (now) => walkby.isTalking(now ?? performance.now()),
      });
      music = createMusicDirector({
        carpenter,
        shades,
        locals: [
          { id: "piano", getPos: () => level.piano, radius: 12, bed: shades },
          { id: "dj", getPos: () => find("dj")?.position || { x: -24, z: 7 }, radius: 10, bed: djBed },
          { id: "boombox", getPos: () => find("boombox")?.position, radius: 8, bed: boomBed },
          { id: "guitar-a", getPos: () => find("guitar-a")?.position, radius: 7, bed: guitarBed },
          { id: "guitar-b", getPos: () => find("guitar-b")?.position, radius: 7, bed: guitarBed },
          {
            id: "tape",
            getPos: () =>
              tapes.currentBed.inserted === "dj" ? { x: -24, z: 7 } : { x: 12, z: 8 },
            radius: 9,
            bed: tapes.currentBed,
          },
        ],
      });
    }
    carpenter?.setState("boardwalk");
    carpenter?.start();
    oceanBed?.start();
    if (audioOn) {
      voice.play("dj_open_01");
      voice.preload([
        "gold_coast_lad_01",
        "walkby_flirt_01",
        "interject_oi_01",
        "gull_01",
      ]).catch(() => {});
    }
  } catch (e) {
    console.warn("audio", e);
  }
}

const reel = new CutsceneReel({ onDone: () => beginPlay() });
const pickCast = (kind) => cast.find((c) => c.kind === kind)?.mesh?.position;
const encounters = createEncounterDirector({
  reel,
  getPlayerPos: () => player.pos,
  isPlaying: () => playing && !paused && !reel.playing,
  spots: [
    { id: "piano", getPos: () => level.piano, radius: 8 },
    { id: "painter", getPos: () => artist.root?.position, radius: 6 },
    { id: "incel", getPos: () => pickCast("sigma_07"), radius: 5.5 },
    { id: "kid", getPos: () => pickCast("kid"), radius: 5.2 },
    { id: "babe", getPos: () => pickCast("babe"), radius: 5.5 },
    { id: "fight", getPos: () => ({ x: 16, z: 2 }), radius: 7 },
  ],
  onStart: () => {
    paused = true;
    if (document.pointerLockElement) document.exitPointerLock();
  },
  onEnd: () => {
    paused = false;
    input.tryLock();
  },
});
const poster = new PosterOverlay({
  onStart: () => {
    // Never await VO before the reel — iOS decode hangs and the intro never plays.
    voice.unlock().then(() => {
      if (audioOn) voice.play("factory_recall_01");
    }).catch(() => {});
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
    interiors.tick(t, player.pos);
    party.tick(t);
    fights.tick(raw || TICK);
    psa.tick(player.pos, audioOn);
    gadgets.tick(t, player.pos);
    synth.tick(t);
    {
      const act = synth.tryInteract(player.pos, input.keys);
      if (act === "save" || act === "take") tapes.saveFromSynth(synth.snapshot());
    }
    tapes.tick(player.pos);
    radio?.tick?.();
    recall.tick(raw || TICK, player.pos);
    panic.tick(raw || TICK, player.pos);
    // After recall/panic: recall.onHarm reads the lastPos its own tick stores.
    combat.tick(raw || TICK, player.pos);
    props.tick(raw || TICK, player.pos, player.vel);
    const speed = Math.hypot(player.vel.x, player.vel.z);
    aus101.position.set(player.pos.x, player.pos.y, player.pos.z);
    // Rig face is +Z; locomotion forward is −Z at yaw=0 (Coconuts convention).
    aus101.rotation.y = player.yaw + Math.PI;
    poseAus101(aus101, {
      walkPhase: player.step,
      speed,
      punchT: combat.punchT,
      laserT: combat.laserT,
    });
    updateFollowCam(camera, player, raw || 0.016);
    // Pull the boom in and off the walls once the player is inside a building.
    interiors.adjustCamera(camera, player);
    lotionFoley.tick(performance.now(), speed > 0.4);
    steps.tick({
      speed,
      onWood: level.isWood(player.pos.x, player.pos.z),
      dt: raw || TICK,
    });
    const squeezing = !!input.keys.Space;
    if (squeezing) carpenter?.setState("apply");
    else carpenter?.setState("boardwalk");
    const painted = runApplyFrame({
      lotion,
      cast,
      playerPos: player.pos,
      playerYaw: player.yaw,
      squeezing,
      dt: raw || TICK,
      applyUx,
      bay,
    });
    tickBottle(aus101, lotion, raw || TICK);
    if (painted && audioOn && !walkby.isTalking(performance.now()) && Math.random() < 0.012) {
      voice.play("rub_pleasure_01", { gain: 1.2 });
    }
    if (audioOn) walkby.tick(performance.now(), player.pos);
    music?.tick(player.pos, audioOn);
    artist.tick(renderer, scene, performance.now());
    encounters.tick();
  } else if (!playing) {
    camera.position.set(8, 6.5, 22);
    camera.lookAt(0, 1.2, 4);
  }
  renderer.render(scene, camera);
}
frame();
