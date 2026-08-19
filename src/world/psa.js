/**
 * Gold Coast PSA kiosks — CRT box on a pole.
 * Stills play (emissive + texture cycle) when the player is within 5.5 m.
 */
import * as THREE from "three";
import { mat, box } from "./coconutsHelpers.js";

const RADIUS = 5.5;
const CYCLE_MS = 2200;
const LOOK = { x: 0, z: 10 };

const SITES = [
  [-20, 16],
  [0, 12],
  [18, 8],
  [8, -2],
  [-12, 8],
];

const ASSET_URLS = [
  "assets/media/cutscene/s4_i_can_use_them.jpg",
  "assets/media/ads/billboard_terminate_uv.png",
  "assets/media/ads/tv_surfclub.jpg",
  "assets/media/ads/dj_slide_apply.jpg",
  "assets/media/cutscene/aus101_ref.jpg",
];

const FALLBACK_COPY = [
  ["I CAN USE THEM", "PUBLIC HEALTH REASSIGNMENT"],
  ["TERMINATE UV", "THE SUN IS A HOSTILE ACTOR"],
  ["SURF CLUB NOTICE", "ZINC ON · SHIRT OPTIONAL"],
  ["APPLY", "OR BE RECALLED"],
  ["AUS101", "DOES NOT TAKE REQUESTS"],
];

function wellnessStill(headline, sub) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 384;
  const x = c.getContext("2d");
  x.fillStyle = "#0b1210";
  x.fillRect(0, 0, 512, 384);
  x.fillStyle = "#1a3a28";
  x.fillRect(0, 0, 512, 58);
  x.fillStyle = "#c8a44a";
  x.fillRect(0, 58, 512, 4);
  x.fillRect(0, 380, 512, 4);
  x.fillStyle = "#e8d48a";
  x.font = "bold 18px Arial, sans-serif";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText("DEPARTMENT OF WELLNESS", 256, 28);
  x.font = "12px Arial, sans-serif";
  x.fillStyle = "#9aaa88";
  x.fillText("GOLD COAST UNIT  ·  PSA", 256, 46);
  x.fillStyle = "#f4f7fb";
  x.font = "bold 42px Impact, Arial Black, sans-serif";
  x.fillText(headline, 256, 188);
  x.fillStyle = "#ffb040";
  x.font = "bold 22px Arial, sans-serif";
  x.fillText(sub, 256, 248);
  x.globalAlpha = 0.12;
  x.fillStyle = "#000";
  for (let y = 0; y < 384; y += 3) x.fillRect(0, y, 512, 1);
  x.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

function loadSlides(onReady) {
  const slides = FALLBACK_COPY.map(([h, s]) => wellnessStill(h, s));
  const loader = new THREE.TextureLoader();
  let left = ASSET_URLS.length;
  const done = () => {
    left -= 1;
    if (left <= 0) onReady();
  };
  ASSET_URLS.forEach((url, i) => {
    loader.load(
      url,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.needsUpdate = true;
        slides[i] = tex;
        done();
      },
      undefined,
      done
    );
  });
  return slides;
}

function makeKiosk(x, z, seed, slides) {
  const g = new THREE.Group();
  const iron = mat(0x3a3e42, { metalness: 0.55, roughness: 0.42 });
  const housing = mat(0x16181a, { roughness: 0.62, metalness: 0.18 });
  const bezel = mat(0x0c0c0e, { roughness: 0.5, metalness: 0.12 });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.1, 10), iron);
  base.position.y = 0.05;
  base.castShadow = true;
  g.add(base);

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.062, 1.52, 8), iron);
  pole.position.y = 0.86;
  pole.castShadow = true;
  g.add(pole);

  const collar = box(0.16, 0.08, 0.16, iron);
  collar.position.y = 1.58;
  g.add(collar);

  const body = box(0.78, 0.6, 0.26, housing);
  body.position.y = 1.78;
  g.add(body);

  const lip = box(0.74, 0.52, 0.04, bezel);
  lip.position.set(0, 1.78, 0.14);
  g.add(lip);

  const hood = box(0.82, 0.07, 0.22, housing);
  hood.position.set(0, 2.12, 0.06);
  g.add(hood);

  const plate = box(0.5, 0.08, 0.02, mat(0x2a2414, { roughness: 0.7 }));
  plate.position.set(0, 1.42, 0.14);
  g.add(plate);

  const led = new THREE.Mesh(
    new THREE.SphereGeometry(0.018, 8, 6),
    new THREE.MeshStandardMaterial({
      color: 0x331800,
      emissive: 0xff8800,
      emissiveIntensity: 0.12,
      roughness: 0.4,
    })
  );
  led.position.set(0.3, 1.52, 0.15);
  g.add(led);

  const screenMat = new THREE.MeshStandardMaterial({
    map: slides[seed % slides.length],
    emissive: 0xffffff,
    emissiveMap: slides[seed % slides.length],
    emissiveIntensity: 0.12,
    color: 0x4a4a4a,
    roughness: 0.38,
    metalness: 0.05,
  });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.44), screenMat);
  screen.position.set(0, 1.78, 0.162);
  g.add(screen);

  g.position.set(x, 0, z);
  g.rotation.y = Math.atan2(LOOK.x - x, LOOK.z - z);

  return { group: g, screenMat, ledMat: led.material, frame: seed % slides.length };
}

/**
 * @param {THREE.Scene} scene
 * @returns {{ tick: (playerPos: THREE.Vector3) => void, spots: { position: THREE.Vector3, radius: number }[] }}
 */
export function spawnPsaKiosks(scene) {
  const kiosks = [];
  const spots = [];

  const slides = loadSlides(() => {
    for (const k of kiosks) {
      const tex = slides[k.frame];
      k.screenMat.map = tex;
      k.screenMat.emissiveMap = tex;
    }
  });

  SITES.forEach(([x, z], i) => {
    const k = makeKiosk(x, z, i, slides);
    scene.add(k.group);
    kiosks.push(k);
    spots.push({ position: new THREE.Vector3(x, 0, z), radius: RADIUS });
  });

  const idleColor = new THREE.Color(0x3a3a3a);
  const liveColor = new THREE.Color(0xffffff);

  return {
    spots,
    tick(playerPos) {
      const now = performance.now();
      for (let i = 0; i < kiosks.length; i++) {
        const k = kiosks[i];
        const p = spots[i].position;
        const dx = playerPos.x - p.x;
        const dz = playerPos.z - p.z;
        const near = dx * dx + dz * dz < RADIUS * RADIUS;
        const screen = k.screenMat;
        const target = near ? 0.92 : 0.1;
        screen.emissiveIntensity += (target - screen.emissiveIntensity) * 0.12;
        screen.color.lerp(near ? liveColor : idleColor, 0.12);
        k.ledMat.emissiveIntensity += ((near ? 1.4 : 0.1) - k.ledMat.emissiveIntensity) * 0.14;
        if (near) {
          const frame = (Math.floor(now / CYCLE_MS) + i) % slides.length;
          if (frame !== k.frame) {
            k.frame = frame;
            const tex = slides[frame];
            screen.map = tex;
            screen.emissiveMap = tex;
          }
        }
      }
    },
  };
}
