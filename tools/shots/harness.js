/**
 * Model-audit harness. Builds the real Gold Coast scene (same factories as the
 * game, no poster/VO/input) and exposes a camera API so a headless browser can
 * frame any prop or character for review screenshots.
 *
 * Not shipped: `scripts/shots.mjs` bundles this to a throwaway dir.
 */
import * as THREE from "three";
import { setupGoldCoastLights, buildGoldCoast } from "../../src/world/goldCoast.js";
import { createColliders } from "../../src/input/player.js";
import { createAus101, poseAus101 } from "../../src/chars/aus101.js";
import { spawnBeachCast } from "../../src/chars/npcs.js";
import { spawnParty } from "../../src/world/party.js";
import { spawnFights } from "../../src/phys/fights.js";
import { spawnPsaKiosks } from "../../src/world/psa.js";
import { createArtist } from "../../src/chars/artist.js";
import { spawnSynthRig } from "../../src/world/synthRig.js";
import { attachGadgets } from "../../src/world/gadgets.js";
import { spawnInteriors } from "../../src/world/interiors.js";

const canvas = document.getElementById("game");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(1);
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setClearColor(0x0b1210, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
setupGoldCoastLights(scene);

const colliders = createColliders();
const level = buildGoldCoast(scene, colliders);
const cast = spawnBeachCast(scene);
const party = spawnParty(scene);
const fights = spawnFights(scene);
const psa = spawnPsaKiosks(scene);
const artist = createArtist(scene, { x: 4.5, z: -6.2, yaw: -2.6 });
const synth = spawnSynthRig(scene);
const gadgets = attachGadgets(cast, scene);
const interiors = spawnInteriors(scene, colliders);

const aus101 = createAus101();
aus101.position.set(0, 0, 8);
scene.add(aus101);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.05, 260);

/** Studio rig: flat neutral backdrop so silhouettes read without beach clutter. */
const studio = new THREE.Group();
studio.visible = false;
{
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(14, 48),
    new THREE.MeshStandardMaterial({ color: 0x6f7a80, roughness: 0.95 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.002;
  floor.receiveShadow = true;
  const key = new THREE.DirectionalLight(0xfff2e0, 2.1);
  key.position.set(4, 7, 6);
  const fill = new THREE.DirectionalLight(0xbcd8ff, 0.8);
  fill.position.set(-6, 4, -4);
  studio.add(floor, key, fill, new THREE.AmbientLight(0xffffff, 0.55));
}
scene.add(studio);

let simT = 0;
function step(t) {
  simT = t;
  level.update(t);
  party.tick(t);
  fights.tick(1 / 60);
  psa.tick(aus101.position, false);
  gadgets.tick(t, aus101.position);
  interiors.tick(t, aus101.position);
  synth.tick(t);
  poseAus101(aus101, { walkPhase: t * 6, speed: 0 });
  artist.tick(renderer, scene, t * 1000);
  window.__runExtras?.(t);
}

function draw() {
  renderer.render(scene, camera);
}

/** Advance the sim to `t` seconds, frame the camera, render one frame. */
window.__shot = ({ pos, target, t = 4, fov = 48, studio: useStudio = false, hide = [] }) => {
  studio.visible = !!useStudio;
  const hidden = [];
  for (const name of hide) {
    const o = scene.getObjectByName(name);
    if (o) {
      hidden.push([o, o.visible]);
      o.visible = false;
    }
  }
  const frames = Math.max(1, Math.round((t - simT) * 60));
  for (let i = 0; i < Math.min(frames, 600); i++) step(simT + 1 / 60);
  step(t);
  camera.fov = fov;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.position.set(pos[0], pos[1], pos[2]);
  camera.lookAt(target[0], target[1], target[2]);
  draw();
  for (const [o, v] of hidden) o.visible = v;
  return true;
};

/** Orbit a point at `radius`/`height` — `deg` 0 = looking from +Z. */
window.__orbit = ({ at, radius = 3, height = 1.6, deg = 0, t = 4, fov = 40, studio: s = false }) => {
  const a = (deg * Math.PI) / 180;
  return window.__shot({
    pos: [at[0] + Math.sin(a) * radius, height, at[2] + Math.cos(a) * radius],
    target: at,
    t,
    fov,
    studio: s,
  });
};

/** World-space bounding box of a named object — catches floating/sunken rigs. */
window.__bbox = (name) => {
  const o = scene.getObjectByName(name);
  if (!o) return null;
  const b = new THREE.Box3().setFromObject(o);
  return {
    min: b.min.toArray().map((v) => +v.toFixed(3)),
    max: b.max.toArray().map((v) => +v.toFixed(3)),
    pos: o.position.toArray().map((v) => +v.toFixed(3)),
  };
};

window.__names = () => scene.children.map((c) => c.name || c.type).filter(Boolean);

/**
 * Extension point for shot-only content (props, rigs, interiors that the world
 * does not spawn yet). Drop a module in `tools/shots/extras/` — it is imported
 * before the first render and gets this API.
 */
const extraTicks = [];
window.__api = {
  THREE,
  scene,
  renderer,
  camera,
  get player() {
    return aus101;
  },
  /** @param {(t:number)=>void} fn */
  onTick(fn) {
    extraTicks.push(fn);
  },
};
window.__runExtras = (t) => {
  for (const fn of extraTicks) fn(t);
};
window.__ready = true;
step(0);
draw();
