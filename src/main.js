/**
 * AUS101 — Gold Coast. Coconuts factories as kit, restyled.
 * Third-person copper/gold T-101, Carpenter bed, footsteps, unlabeled mobile pad.
 */
import * as THREE from "three";
import { applyDocumentShell, createSafeAreaProbe, sizeRenderer, installEdgeSwipeGuard } from "./shell/viewport.js";

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
import { createArrest } from "./game/arrest.js";
import { spawnLaserGun } from "./world/laserGun.js";
import { createCombat } from "./game/combat.js";
import { createPropPhysics } from "./phys/props.js";
import { createReticuleBay } from "./hud/reticule.js";
import { createRadioHud } from "./hud/radio.js";
import { createApplyMinigame } from "./hud/applyMinigame.js";

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

// Canonical spawn is x=0, z=10 facing the ocean (−Z). ~10 ft (3 m) forward
// plus a handful of open-sand seats so the follow cam is not in a prop.
const SPAWNS = [
  { x: 0, z: 7, yaw: 0 },
  { x: 4.5, z: 6, yaw: -0.22 },
  { x: -5.2, z: 8, yaw: 0.18 },
  { x: 9, z: 4.2, yaw: 0.32 },
  { x: -8.5, z: 5, yaw: -0.18 },
  { x: 2.2, z: -1.4, yaw: 0.05 },
  { x: -3.4, z: 3.2, yaw: 0.12 },
  { x: 7.2, z: 9, yaw: 0.2 },
];
const spawn0 = SPAWNS[(Math.random() * SPAWNS.length) | 0];
const player = createPlayer({ x: spawn0.x, y: 0, z: spawn0.z });
player.yaw = spawn0.yaw;

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

function enroll(mesh, kind, ageBand) {
  if (!mesh || !mesh.isObject3D) return;
  const k = kind || mesh.userData.kind || "ken";
  const a = ageBand || mesh.userData.ageBand || "adult";
  mesh.userData.kind = k;
  mesh.userData.ageBand = a;
  if (k !== "gull" && a !== "gull") mesh.userData.paintTarget = true;
  if (cast.some((c) => c.mesh === mesh)) return;
  cast.push({ mesh, kind: k, ageBand: a });
}

for (const mesh of party.people || []) enroll(mesh);
for (const mesh of fights.meshes || []) enroll(mesh, "ken", "adult");
if (artist.painter) enroll(artist.painter, "artist", "adult");
if (synth.lad) enroll(synth.lad, "ken", "adult");
for (const name of [
  "ken-guitar-a",
  "ken-guitar-b",
  "babe-boom-a",
  "babe-boom-b",
  "piano-ken",
  "dj-ken",
  "synth-lad",
  "artist-painter",
]) {
  enroll(scene.getObjectByName(name));
}
for (let i = 0; i < 5; i++) {
  enroll(scene.getObjectByName(`dj-babe-${i}`));
  enroll(scene.getObjectByName(`dj-ken-${i}`));
}
for (let i = 0; i < 4; i++) enroll(scene.getObjectByName(`ken-fight-${i}`), "ken", "adult");

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
  colliders,
});
for (const bot of panic.house?.robots || []) enroll(bot, "t101", "adult");
const recall = createRecall({
  scene,
  play: (id) => voice.play(id),
  onGameOver: () => {},
});
const gun = spawnLaserGun(scene);
const arrest = createArrest({
  player,
  play: (id) => voice.play(id),
  sfx,
  cops: panic.cops,
  onReprogram: () => {
    lotion.tick({ squeezeHeld: false, applying: false, dt: 0 });
    panic.standDown();
  },
  onTakeGun: () => {
    combat.hasLaser = false;
    gun.conceal();
  },
  hideGun: (pos) => gun.hide(pos),
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
    if (arrest.active) return;
    panic.onHarm(info);
    sfx.copWhoop();
    sfx.radioChatter();
    arrest.begin();
  },
});

window.addEventListener("keydown", (e) => {
  if (!playing || arrest.active || e.repeat) return;
  if (e.code === "KeyF") {
    e.preventDefault();
    if (combat.hasLaser) sfx.laser();
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
let acc = 0;
const clock = new THREE.Clock(false);

const input = installInput({
  dom: canvas,
  isPlaying: () => playing && !arrest.active,
  blockLock: () => synth.isOpen?.() === true,
});
input.bindPlayer(player);
installTouchControls({
  keys: input.keys,
  isPlaying: () => playing && !arrest.active,
  onPunch: () => combat.punch(player.pos, player.yaw, player.pitch),
  onLaser: () => {
    if (combat.hasLaser) sfx.laser();
    combat.laser(player.pos, player.yaw, player.pitch);
  },
});

function resize() {
  const { w, h } = sizeRenderer(renderer, canvas);
  camera.aspect = w / Math.max(1, h);
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener("resize", resize);
window.addEventListener("orientationchange", () => setTimeout(resize, 300));

let audioOn = true;
const hint = document.createElement("div");
hint.textContent = "WASD move · mouse look · Space lotion · G punch · F laser (if found) · E sequencer · Esc free mouse";
Object.assign(hint.style, {
  position: "fixed",
  left: "50%",
  bottom: "max(8px, env(safe-area-inset-bottom))",
  transform: "translateX(-50%)",
  zIndex: "8",
  pointerEvents: "none",
  font: "11px ui-sans-serif, system-ui, sans-serif",
  color: "rgba(251,246,234,0.52)",
  textShadow: "0 1px 3px #000",
  display: "none",
  whiteSpace: "nowrap",
});
document.body.appendChild(hint);

canvas.addEventListener("mousedown", (e) => {
  if (!playing || arrest.active) return;
  if (synth.isOpen?.()) return;
  voice.unlock().catch(() => {});
  sfx.unlock().catch(() => {});
  if (e.button === 0) combat.punch(player.pos, player.yaw, player.pitch);
  if (e.button === 2 && combat.hasLaser) {
    sfx.laser();
    combat.laser(player.pos, player.yaw, player.pitch);
  }
});
canvas.addEventListener("contextmenu", (e) => e.preventDefault());

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyM" && playing) {
    audioOn = !audioOn;
    if (voice.gain) voice.gain.gain.value = audioOn ? 0.5 : 0;
    if (sfx.master) sfx.master.gain.value = audioOn ? 0.85 : 0;
  }
});

let booted = false;
async function beginPlay() {
  playing = true;
  if (!booted) {
    recall.reset();
    booted = true;
  }
  clock.start();
  follow.snap();
  if (typeof matchMedia !== "function" || !matchMedia("(pointer: coarse)").matches) {
    hint.style.display = "block";
  }
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
        "mantra_01",
        "mantra_02",
        "mantra_03",
        "mantra_04",
        "mantra_05",
        "mantra_06",
      ]).catch(() => {});
    }
  } catch (e) {
    console.warn("audio", e);
  }
}

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
  const raw = !playing ? 0 : Math.min(0.05, clock.getDelta());
  acc += raw;
  while (acc >= TICK) {
    if (playing && !arrest.active) {
      const lk = getLookStick();
      if (lk.mag > 0.04) {
        player.yaw -= lk.x * 2.35 * TICK;
        player.pitch -= lk.y * 1.55 * TICK;
        player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch));
      }
      fixedUpdate(player, input.keys, colliders.COL, BOUNDS, TICK);
    }
    if (playing) arrest.tick(TICK);
    acc -= TICK;
  }

  if (playing) {
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
      speed: arrest.active ? 2.8 : speed,
      onWood: level.isWood(player.pos.x, player.pos.z),
      dt: raw || TICK,
    });
    if (!arrest.active) {
      gun.tick(player.pos, () => {
        combat.hasLaser = true;
        sfx.radioChatter();
      });
    }
    for (const npc of cast) {
      const f = npc.mesh?.userData?.flee;
      if (f) steps.tickOne(npc.mesh.id || npc.kind, f.spd || 5, false, raw || TICK);
    }
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
  }
  renderer.render(scene, camera);
}
beginPlay();
frame();
