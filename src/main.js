/**
 * AUS101 — Gold Coast. Coconuts factories as kit, restyled.
 * Third-person copper/gold T-101, Carpenter bed, footsteps, unlabeled mobile pad.
 */
import * as THREE from "three";
import { applyDocumentShell, createSafeAreaProbe, sizeRenderer, installEdgeSwipeGuard } from "./shell/viewport.js";

import { VoiceBank } from "./audio/voice.js";
import { playRubVo } from "./audio/rubVo.js";
import { SfxBank, installLotionFoley } from "./audio/sfx.js";
import { createCarpenterBed } from "./audio/carpenter.js";
import { createTracker, SCORES } from "./audio/tracker/index.js";
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
import { createShadesBed, pianoPulse } from "./audio/shades.js";
import { guitarPulse } from "./audio/localBeds.js";
import { buildGoldCoast, setupGoldCoastLights, BOUNDS, GC } from "./world/goldCoast.js";
import { createAus101, poseAus101 } from "./chars/aus101.js";
import { spawnBeachCast, spawnRoachIncel } from "./chars/npcs.js";
import { createWalkbyDirector } from "./audio/walkby.js";
import { createLotion } from "./game/lotion.js";
import { runApplyFrame } from "./game/applyFlow.js";
import { bindBottle, tickBottle } from "./view/bottle.js";
import { createRecall } from "./game/recall.js";
import { createPanic } from "./game/panic.js";
import { createArrest } from "./game/arrest.js";
import { spawnLaserGun } from "./world/laserGun.js";
import { spawnDropships } from "./world/dropships.js";
import { createCombat } from "./game/combat.js";
import { createPropPhysics } from "./phys/props.js";
import { createReticuleBay } from "./hud/reticule.js";
import { createRadioHud } from "./hud/radio.js";
import { createActionPrompt, ACTION_DESCEND, ACTION_SURFACE } from "./hud/actionPrompt.js";
import { VOID_STAIRS, VOID_EXITS } from "./world/voidCave.js";

import { createArtist, pickArtistPose } from "./chars/artist.js";
import { spawnParty } from "./world/party.js";
import { spawnFights } from "./phys/fights.js";
import { spawnPsaKiosks } from "./world/psa.js";
import { createMusicDirector } from "./audio/musicDirector.js";
import { createBoomBed, createGuitarBed, createDjBed } from "./audio/localBeds.js";
import { attachGadgets } from "./world/gadgets.js";
import { spawnSynthRig } from "./world/synthRig.js";
import { spawnShitaGuy } from "./world/shitaGuy.js";
import { spawnConspiracyJock } from "./world/conspiracyJock.js";
import { createVapeSim } from "./game/vape.js";
import { spawnInfluencers } from "./world/influencers.js";
import { spawnInteriors } from "./world/interiors.js";
import { createTapeSystem, acquireCtx } from "./audio/tapeDeck.js";
import { midiBus } from "./audio/midiBus.js";
import { createVoidLooper } from "./audio/voidLooper.js";
import { createVoidDeck } from "./hud/voidDeck.js";

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

const camera = new THREE.PerspectiveCamera(62, 1, 0.08, 280);
const follow = createFollowCam();

const colliders = createColliders();
const level = buildGoldCoast(scene, colliders);
// Enterable buildings register their own wall AABBs, with a gap at each doorway.
const interiors = spawnInteriors(scene, colliders);
const wisdom = interiors.buildings.find((b) => b.id === "wisdom") || null;
const library = interiors.buildings.find((b) => b.id === "library") || null;
const voidCave = interiors.buildings.find((b) => b.id === "void") || null;
const changeRooms = interiors.buildings.find((b) => b.id === "changeRooms") || null;

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
const voice = new VoiceBank();
voice.loadManifest().catch(() => {});
level.setCrowdPlay?.((id, o) => voice.play(id, o));
const artist = createArtist(scene, pickArtistPose(), {
  play: (id, o) => voice.play(id, o),
  cast,
});
const gadgets = attachGadgets(cast, scene);
const tapes = createTapeSystem({
  getBoomPos: () => party.musicSpots.find((s) => s.id === "boombox")?.position || { x: 12, z: 8 },
  getDjPos: () => ({ x: -24, z: 7 }),
});
const synth = spawnSynthRig(scene, {
  onSave: (p) => tapes.saveFromSynth(p),
});
const shita = spawnShitaGuy(scene);
const voidLooper = createVoidLooper({
  getEngine: () => shita?.engine || null,
  getPiano: () => pianoPulse,
  getVoice: () => voice,
});
const _voidBox = new THREE.Box3();
function playerInVoid() {
  if (inCave(player.pos)) return true;
  const named = scene.getObjectByName("void-cave");
  if (!named || !player.pos) return false;
  _voidBox.setFromObject(named);
  if (_voidBox.isEmpty()) return false;
  const x = player.pos.x;
  const z = player.pos.z;
  return x >= _voidBox.min.x && x <= _voidBox.max.x && z >= _voidBox.min.z && z <= _voidBox.max.z;
}
const voidDeck = createVoidDeck({
  looper: voidLooper,
  scene,
  inCave: playerInVoid,
});
const conspiracy = spawnConspiracyJock(scene);
const influencers = spawnInfluencers(scene, renderer);
const roach = spawnRoachIncel(scene, {
  play: (id, o) => voice.play(id, o),
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
if (shita.mesh) enroll(shita.mesh, "shita", "adult");
if (conspiracy.mesh) enroll(conspiracy.mesh, "ken", "adult");
for (const mesh of influencers?.meshes || []) enroll(mesh);
for (const name of [
  "ken-guitar-a",
  "ken-guitar-b",
  "babe-boom-a",
  "babe-boom-b",
  "piano-ken",
  "dj-ken",
  "synth-lad",
  "shita-lad",
  "ken-conspiracy",
  "artist-painter",
]) {
  enroll(scene.getObjectByName(name));
}
for (let i = 0; i < 5; i++) {
  enroll(scene.getObjectByName(`dj-babe-${i}`));
  enroll(scene.getObjectByName(`dj-ken-${i}`));
}
for (let i = 0; i < 4; i++) enroll(scene.getObjectByName(`ken-fight-${i}`), "ken", "adult");
if (level.vape?.clerk) enroll(level.vape.clerk, "goth", "adult");
const vapeSim = createVapeSim({
  shop: level.vape,
  cast,
  play: (id, o) => voice.play(id, o),
  scene,
});

const sfx = new SfxBank();
const fightPlay = (id, o) => voice.play(id, o);
Object.defineProperty(fightPlay, "busy", { get: () => voice.busy });
fights.setPlay(fightPlay);
fights.setSfx(sfx);
const lotionFoley = installLotionFoley(sfx, null);
const steps = createFootstepPlayer(sfx);
const walkby = createWalkbyDirector(voice, cast);
const lotion = createLotion();
bindBottle(aus101);
const bay = createReticuleBay();
document.body.appendChild(bay.html);

const panic = createPanic({
  scene,
  cast,
  play: (id) => voice.play(id),
  colliders,
  sfx,
  onSpawn: (mesh, kind) => enroll(mesh, kind || mesh.userData.kind || "cop", "adult"),
});
for (const bot of panic.house?.robots || []) enroll(bot, "t101", "adult");
const ships = spawnDropships(scene);
ships.panic = panic;
ships.sfx = sfx;
panic.onNeedDropships = (w) => ships.deliver(w);
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
panic.onDelivered = () => arrest.beginJack();
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
let trackerBed = null;
let oceanBed = null;
let shades = null;
let music = null;
let boomBed = null;
let guitarBed = null;
let djBed = null;

let playing = false;
let acc = 0;
let lotionAim = null;
let applyT = 0;
const clock = new THREE.Clock(false);

const input = installInput({
  dom: canvas,
  isPlaying: () => playing && !arrest.active,
  blockLock: () => synth.isOpen?.() === true || voidDeck.isOpen?.() === true,
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

const actionPrompt = createActionPrompt();
const SEQ_RANGE = 2.6;
const LOUNGE_R = 1.55;
const PUNCH_REACH = 1.55;
const PUNCH_COS = Math.cos(0.95);
const CAVE_Y = -9;
const CAVE_FALLBACK = { x: 7, y: -10.4, z: -29 };
const PIANO_SURFACE = { x: 7, y: 0, z: -27.5 };
const CAVE_EXIT_R = 1.85;
const loungers = [];
scene.traverse((o) => {
  if (o.userData?.kind === "lounger" && o.userData.seat) loungers.push(o);
});

/** @type {{ group: object, seat: { x: number, z: number, yaw: number } } | null} */
let loungeSit = null;
let currentAction = null;
let prevAct = false;
let actionClick = false;
const _npcWp = new THREE.Vector3();

function distXZ(ax, az, bx, bz) {
  return Math.hypot((ax ?? 0) - (bx ?? 0), (az ?? 0) - (bz ?? 0));
}

function personInPunchArc(pos, yaw) {
  if (!pos || loungeSit || wisdom?.strapped) return false;
  const fx = -Math.sin(yaw);
  const fz = -Math.cos(yaw);
  for (const npc of cast) {
    const m = npc.mesh;
    if (!m || m.visible === false || npc.down || m.userData?.combatDown) continue;
    if (typeof m.getWorldPosition === "function") m.getWorldPosition(_npcWp);
    else _npcWp.set(m.position.x, 0, m.position.z);
    const dx = _npcWp.x - pos.x;
    const dz = _npcWp.z - pos.z;
    const d = Math.hypot(dx, dz);
    if (d > PUNCH_REACH || d < 1e-4) continue;
    if ((dx / d) * fx + (dz / d) * fz >= PUNCH_COS) return true;
  }
  return false;
}

function actHeld() {
  const k = input.keys;
  if (k.KeyE || k.Enter || k.NumpadEnter) return true;
  if (k.KeyF && !combat.hasLaser) return true;
  return false;
}

function caveLanding() {
  const s = VOID_STAIRS;
  if (s?.stairsTop && Number.isFinite(s.stairsTop.x)) return s.stairsTop;
  if (s?.nest && Number.isFinite(s.nest.x)) return s.nest;
  if (s && Number.isFinite(s.x) && Number.isFinite(s.z)) {
    return { x: s.x, y: s.y ?? CAVE_FALLBACK.y, z: s.z };
  }
  return CAVE_FALLBACK;
}

function inCave(pos) {
  if (!pos) return false;
  if (pos.y < CAVE_Y) return true;
  return interiors.isIndoors(pos)?.id === "void";
}

function caveExits() {
  const src = VOID_EXITS && (VOID_EXITS.piano || VOID_EXITS.stall) ? VOID_EXITS : null;
  const land = caveLanding();
  return {
    piano: src?.piano || { x: land.x, y: land.y, z: land.z, radius: CAVE_EXIT_R },
    stall: src?.stall || { x: land.x - 1.65, y: land.y, z: land.z + 1.45, radius: CAVE_EXIT_R },
  };
}

function stallPortal() {
  return changeRooms?.voidStall || null;
}

function worldExit(id) {
  if (id === "stall") {
    const s = stallPortal();
    const ex = s?.exit || s;
    return { x: ex?.x ?? -24.6, y: 0, z: ex?.z ?? 24.7 };
  }
  return PIANO_SURFACE;
}

function teleportPlayer(dest) {
  if (!dest || !Number.isFinite(dest.x) || !Number.isFinite(dest.z)) return;
  player.pos.set(dest.x, dest.y ?? 0, dest.z);
  player.vel.y = 0;
  player.vel.x = 0;
  player.vel.z = 0;
  follow.snap();
}

function pollAction(pos) {
  if (!pos || arrest.active) return null;
  if (wisdom?.strapped) {
    return { id: "chair-leave", label: "leave chair · any action", dist: 0 };
  }
  if (loungeSit) {
    return { id: "lounge-leave", label: "get up · any action", dist: 0 };
  }
  let best = null;
  const consider = (id, label, dist, target) => {
    if (!best || dist < best.dist) best = { id, label, dist, target };
  };
  if (inCave(pos)) {
    const exits = caveExits();
    for (const id of ["piano", "stall"]) {
      const p = exits[id];
      if (!p || !Number.isFinite(p.x)) continue;
      const d = distXZ(pos.x, pos.z, p.x, p.z);
      const r = p.radius || CAVE_EXIT_R;
      if (d <= r) consider("void-surface", ACTION_SURFACE, d, id);
    }
    return best;
  }
  const hatch = level.hatch;
  if (hatch) {
    const d = distXZ(pos.x, pos.z, hatch.x, hatch.z);
    if (d <= (hatch.radius || 1.45)) consider("void-descend", ACTION_DESCEND, d, "piano");
  }
  const stall = stallPortal();
  if (stall) {
    const d = distXZ(pos.x, pos.z, stall.x, stall.z);
    if (d <= (stall.radius || 1.22)) consider("void-descend", ACTION_DESCEND, d, "stall");
  }
  if (wisdom?.inChairRange?.(pos) && wisdom.center) {
    consider("chair-sit", "sit · any action", distXZ(pos.x, pos.z, wisdom.center.x, wisdom.center.z));
  }
  for (const g of loungers) {
    const seat = g.userData.seat;
    if (!seat) continue;
    const d = distXZ(pos.x, pos.z, seat.x, seat.z);
    if (d <= LOUNGE_R) consider("lounge-sit", "lie down · any action", d, g);
  }
  const hung = artist.nearestHung?.(pos);
  if (hung) consider("painting", "save painting · any action", hung.dist, hung.item);
  if (synth?.position) {
    const d = distXZ(pos.x, pos.z, synth.position.x, synth.position.z);
    if (d <= (synth.range || SEQ_RANGE)) {
      const open = synth.isOpen?.() === true;
      consider(
        open ? "seq-save" : "seq-open",
        open ? "save tape · any action" : "open sequencer · any action",
        d
      );
    }
  }
  return best;
}

function sitLounger(g) {
  const seat = g?.userData?.seat;
  if (!seat) return;
  loungeSit = { group: g, seat };
  player.loungeSit = true;
  player.pos.x = seat.x;
  player.pos.z = seat.z;
  player.pos.y = 0;
  player.vel.set(0, 0, 0);
  player.yaw = seat.yaw;
  player.pitch = -0.12;
  follow.snap();
}

function leaveLounger() {
  if (!loungeSit) return;
  const g = loungeSit.group;
  const yaw = g?.rotation?.y || 0;
  player.pos.x = (g?.position?.x ?? player.pos.x) + Math.cos(yaw) * 0.9;
  player.pos.z = (g?.position?.z ?? player.pos.z) - Math.sin(yaw) * 0.9;
  player.pos.y = 0;
  player.pitch = -0.05;
  player.vel.set(0, 0, 0);
  player.loungeSit = false;
  loungeSit = null;
  follow.snap();
}

function applyLoungeCam(cam, p) {
  const sy = Math.sin(p.yaw);
  const cy = Math.cos(p.yaw);
  cam.position.set(p.pos.x + 2.4 * sy, p.pos.y + 1.08, p.pos.z + 2.4 * cy);
  cam.lookAt(p.pos.x - 3.5 * sy, 0.35, p.pos.z - 3.5 * cy);
}

function activate(a) {
  if (!a || arrest.active) return;
  switch (a.id) {
    case "chair-sit":
    case "chair-leave":
      wisdom?.toggle?.(player, camera, follow);
      break;
    case "lounge-sit":
      sitLounger(a.target);
      break;
    case "lounge-leave":
      leaveLounger();
      break;
    case "painting":
      artist.pickupNearest?.(player.pos);
      break;
    case "void-descend":
      teleportPlayer(caveLanding());
      break;
    case "void-surface":
      teleportPlayer(worldExit(a.target));
      break;
    default:
      break;
  }
}

// midi-playalong (no HUD — keys still work near a bed)
const PLAY_WIN = 800;
const PLAY_MAJOR = [0, 2, 4, 5, 7, 9, 11, 12];
const PLAY_MINOR = [0, 2, 3, 5, 7, 8, 10, 12];
const PLAY_ZROW = ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"];
const PLAY_QROW = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI"];

function playAlongSlot(code) {
  if (code.startsWith("Digit")) {
    const n = code.charCodeAt(5) - 49;
    if (n >= 0 && n <= 7) return n;
  }
  if (code.startsWith("Numpad")) {
    const n = +code.slice(6) - 1;
    if (n >= 0 && n <= 7) return n;
  }
  const z = PLAY_ZROW.indexOf(code);
  if (z >= 0) return z;
  const q = PLAY_QROW.indexOf(code);
  if (q >= 0 && code !== "KeyW" && code !== "KeyE") return q;
  return -1;
}

function nearMusicSpot() {
  const pos = player.pos;
  if (!pos) return null;
  const spots = party.musicSpots || [];
  for (const s of spots) {
    const p = s.position;
    if (!p) continue;
    if (Math.hypot(pos.x - p.x, pos.z - p.z) < (s.radius || 8)) return s;
  }
  const piano = level.piano;
  if (piano && Math.hypot(pos.x - piano.x, pos.z - piano.z) < 14) {
    return { id: "piano", position: piano, radius: 14 };
  }
  return null;
}

function playAlongNotes() {
  return midiBus.recent(PLAY_WIN).filter((e) => e.midi != null && e.type !== "program");
}

function playAlongScale(midi) {
  const pc = ((midi % 12) + 12) % 12;
  if (pc === 0 || pc === 2 || pc === 4 || pc === 5 || pc === 9 || pc === 10) return PLAY_MINOR;
  return PLAY_MAJOR;
}

function playAlongTone(ctx, midi, vel, dur) {
  if (!ctx || midi == null) return;
  const t = ctx.currentTime + 0.01;
  const f = 440 * 2 ** ((midi - 69) / 12);
  const o = ctx.createOscillator();
  o.type = "sine";
  o.frequency.value = f;
  const o2 = ctx.createOscillator();
  o2.type = "triangle";
  o2.frequency.value = f;
  o2.detune.value = 6;
  const g = ctx.createGain();
  const pk = Math.max(0.0001, vel);
  const rel = Math.max(0.12, dur || 0.28);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(pk, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + rel);
  o.connect(g);
  o2.connect(g);
  g.connect(ctx.destination);
  o.start(t);
  o2.start(t);
  o.stop(t + rel + 0.05);
  o2.stop(t + rel + 0.05);
}

window.addEventListener("keydown", (e) => {
  if (!playing || arrest.active || e.repeat) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (synth.isOpen?.() || voidDeck.isOpen?.()) return;
  if (currentAction) return;
  const slot = playAlongSlot(e.code);
  if (slot < 0) return;
  if (!nearMusicSpot()) return;
  const rec = playAlongNotes();
  if (!rec.length) return;
  const lastN = rec[rec.length - 1];
  const want = lastN.midi | 0;
  const scale = playAlongScale(want);
  const midi = want + scale[slot % scale.length];
  const pc = (m) => ((m % 12) + 12) % 12;
  const hit = pc(midi) === pc(want);
  const ctx = voice.ctx || sfx.ctx;
  if (!ctx) return;
  playAlongTone(ctx, midi, hit ? 0.42 : 0.12, lastN.dur || 0.3);
  e.preventDefault();
  e.stopImmediatePropagation();
});
// midi-playalong

canvas.addEventListener("mousedown", (e) => {
  if (!playing || arrest.active) return;
  voice.unlock().catch(() => {});
  sfx.unlock().catch(() => {});
  if (e.button === 2 && combat.hasLaser) {
    if (synth.isOpen?.() || voidDeck.isOpen?.()) return;
    sfx.laser();
    combat.laser(player.pos, player.yaw, player.pitch);
    return;
  }
  if (e.button !== 0) return;
  if (currentAction && !combat.swinging && !personInPunchArc(player.pos, player.yaw)) {
    actionClick = true;
    return;
  }
  if (synth.isOpen?.() || voidDeck.isOpen?.()) return;
  combat.punch(player.pos, player.yaw, player.pitch);
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
    if (ctx) acquireCtx(ctx);
    if (ctx && !carpenter) {
      carpenter = createCarpenterBed(ctx);
      pianoPulse.onVowel = (midi) => {
        const band = midi < 58 ? "low" : midi < 70 ? "mid" : "hi";
        const kind = ["la", "ooh", "aah"][(Math.random() * 3) | 0];
        voice.play(`piano_${kind}_${band}`, { gain: 0.55, pos: level.piano });
      };
      guitarPulse.onVowel = (midi) => {
        const band = midi < 54 ? "low" : midi < 60 ? "mid" : "hi";
        const kind = ["ooh", "aah", "yoyo"][(Math.random() * 3) | 0];
        const spots = level.party?.musicSpots;
        const gspot = spots?.find((s) => s.id === "guitar") || { x: 12, z: 8 };
        voice.play(`guitar_${kind}_${band}`, { gain: 0.62, pos: gspot });
      };
      trackerBed = createTracker(ctx);
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
        tracker: trackerBed,
        scores: SCORES,
        voice,
        isTalking: (now) => walkby.isTalking(now ?? performance.now()),
      });
      music = createMusicDirector({
        carpenter,
        tracker: trackerBed,
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
        "pose_babe_01",
        "pose_babe_02",
        "pose_babe_03",
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
      if (wisdom?.strapped) {
        wisdom.tickChair(TICK, player);
      } else if (loungeSit) {
        player.pos.x = loungeSit.seat.x;
        player.pos.z = loungeSit.seat.z;
        player.vel.set(0, 0, 0);
        const lk = getLookStick();
        if (lk.mag > 0.04) {
          player.yaw -= lk.x * 2.35 * TICK;
          player.pitch -= lk.y * 1.55 * TICK;
          player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch));
        }
      } else {
        const lk = getLookStick();
        if (lk.mag > 0.04) {
          player.yaw -= lk.x * 2.35 * TICK;
          player.pitch -= lk.y * 1.55 * TICK;
          player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch));
        }
        fixedUpdate(player, input.keys, colliders.COL, BOUNDS, TICK);
        panic.shove(player, TICK);
        library?.tickPlayer?.(player, TICK);
        voidCave?.tickPlayer?.(player, TICK);
      }
    }
    if (playing) arrest.tick(TICK);
    acc -= TICK;
  }

  if (playing) {
    const t = performance.now() * 0.001;
    if (arrest.active && wisdom?.strapped) wisdom.toggle(player, camera, follow);
    if (arrest.active && loungeSit) leaveLounger();
    level.update(t);
    interiors.tick(t, player.pos);
    wisdom?.tick?.(t, player.pos, audioOn && !arrest.active);
    const nearest = pollAction(player.pos);
    currentAction = nearest;
    actionPrompt.set(nearest && playing ? nearest.label : "");
    const held = actHeld();
    const wantAct = ((held && !prevAct) || actionClick) && !!nearest && !arrest.active;
    prevAct = held;
    actionClick = false;
    let seqForce = false;
    if (wantAct) {
      if (nearest.id === "seq-open" || nearest.id === "seq-save") seqForce = true;
      else activate(nearest);
    }
    party.tick(t);
    fights.tick(raw || TICK);
    psa.tick(player.pos, audioOn && !arrest.active);
    gadgets.tick(t, player.pos);
    synth.tick(t);
    shita.tick(t, player.pos, cast, (id, o) => voice.play(id, o));
    voidDeck.tick();
    influencers?.tick?.(renderer, scene, t, player.pos, {
      play: (id, o) => voice.play(id, o),
      fights,
    });
    conspiracy?.tick?.(raw || TICK, player.pos, (id, o) => voice.play(id, o));
    roach?.tick?.(raw || TICK, performance.now());
    vapeSim?.tick?.(raw || TICK, t, player.pos);
    {
      const force = seqForce ? true : wantAct ? "skip" : false;
      const act = synth.tryInteract(player.pos, input.keys, force);
      if (act === "save" || act === "take") tapes.saveFromSynth(synth.snapshot());
    }
    tapes.tick(player.pos);
    radio?.tick?.();
    voice.tick?.(player.pos, player.yaw);
    recall.tick(raw || TICK, player.pos);
    panic.tick(raw || TICK, player.pos);
    // After recall/panic: recall.onHarm reads the lastPos its own tick stores.
    combat.tick(raw || TICK, player.pos);
    ships.tick(raw || TICK, player.pos);
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
      lotionAim,
      applyT,
    });
    if (wisdom?.strapped) {
      aus101.visible = false;
      wisdom.applyCamera(camera);
    } else if (loungeSit) {
      if (!aus101.visible) aus101.visible = true;
      applyLoungeCam(camera, player);
    } else {
      if (!aus101.visible) aus101.visible = true;
      updateFollowCam(camera, player, raw || 0.016);
      // Pull the boom in and off the walls once the player is inside a building.
      if (!inCave(player.pos)) interiors.adjustCamera(camera, player);
    }
    steps.tick({
      speed: arrest.active ? 0 : speed,
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
      bay,
      player,
      keys: input.keys,
      col: colliders.COL,
      bounds: BOUNDS,
    });
    const dtFrame = raw || TICK;
    if (painted?.aim) {
      lotionAim = painted.aim;
      applyT += dtFrame;
    } else {
      applyT = Math.max(0, applyT - dtFrame * 4);
      if (applyT <= 0) lotionAim = null;
    }
    tickBottle(aus101, lotion, raw || TICK);
    lotionFoley.tick(performance.now(), {
      squeezing,
      applying: !!painted,
      moving: speed > 0.2,
      listener: { x: player.pos.x, y: player.pos.y, z: player.pos.z, yaw: player.yaw },
      target: painted?.npc?.mesh?.position || player.pos,
      npc: painted?.npc,
      voice,
    });
    if (audioOn) walkby.tick(performance.now(), player.pos);
    music?.tick(player.pos, audioOn);
    artist.tick(renderer, scene, performance.now());
  }
  renderer.render(scene, camera);
}
beginPlay();
frame();
