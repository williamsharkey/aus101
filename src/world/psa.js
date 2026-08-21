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

const VIDEO_URLS = [
  "assets/media/psa/psa1.mp4",
  "assets/media/psa/psa2.mp4",
  "assets/media/psa/psa3.mp4",
  "assets/media/psa/psa4.mp4",
  "assets/media/psa/psa5.mp4",
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

/** Header board art, painted once and shared by every kiosk. */
function headerTex() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 96;
  const x = c.getContext("2d");
  x.fillStyle = "#1b3326";
  x.fillRect(0, 0, 512, 96);
  x.fillStyle = "#c8a44a";
  x.fillRect(0, 0, 512, 5);
  x.fillRect(0, 91, 512, 5);
  x.fillStyle = "#e8d48a";
  x.font = "bold 34px Impact, Arial Black, sans-serif";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText("DEPARTMENT OF WELLNESS", 256, 40);
  x.font = "600 15px Arial, sans-serif";
  x.fillStyle = "#8fae94";
  x.fillText("PUBLIC INFORMATION UNIT  ·  DO NOT OBSTRUCT", 256, 72);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

const KG = {
  base: new THREE.CylinderGeometry(0.2, 0.26, 0.11, 12),
  pole: new THREE.CylinderGeometry(0.052, 0.066, 1.42, 10),
  bolt: new THREE.CylinderGeometry(0.018, 0.018, 0.03, 6),
  led: new THREE.SphereGeometry(0.019, 8, 6),
  knob: new THREE.CylinderGeometry(0.022, 0.022, 0.026, 8),
};

const SCREEN_W = 0.58;
const SCREEN_H = 0.435;

/**
 * Painted government CRT: green cabinet, cream bezel returns around a 4:3 tube,
 * a titled header board, a hood that actually shades the glass, speaker slots
 * and a rating plate. Cabinet geometry is per-kiosk (five of them), the header
 * texture is shared.
 */
function makeKiosk(x, z, seed, slides, header) {
  const g = new THREE.Group();
  const iron = mat(0x3a3e42, { metalness: 0.55, roughness: 0.42 });
  const paint = mat(0x2f4a3a, { roughness: 0.72, metalness: 0.08 });
  const trim = mat(0xd8cfae, { roughness: 0.64 });
  const bezel = mat(0x14151a, { roughness: 0.52, metalness: 0.12 });

  const base = new THREE.Mesh(KG.base, iron);
  base.position.y = 0.055;
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(base);
  for (let i = 0; i < 3; i++) {
    const bolt = new THREE.Mesh(KG.bolt, trim);
    const a = (i / 3) * Math.PI * 2;
    bolt.position.set(Math.sin(a) * 0.17, 0.115, Math.cos(a) * 0.17);
    g.add(bolt);
  }

  const pole = new THREE.Mesh(KG.pole, iron);
  pole.position.y = 0.82;
  pole.castShadow = true;
  g.add(pole);

  const collar = box(0.2, 0.09, 0.2, iron);
  collar.position.y = 1.55;
  g.add(collar);

  const cabW = 0.86;
  const cabY = 1.86;
  const body = box(cabW, 0.66, 0.3, paint);
  body.position.y = cabY;
  g.add(body);
  const back = box(cabW - 0.06, 0.6, 0.06, iron);
  back.position.set(0, cabY, -0.16);
  g.add(back);

  // Cream bezel returns: four bars around the tube opening.
  const fz = 0.152;
  const sideW = (cabW - SCREEN_W) * 0.5;
  for (const sx of [-1, 1]) {
    const bar = box(sideW, 0.66, 0.035, trim);
    bar.position.set(sx * (cabW - sideW) * 0.5, cabY, fz);
    g.add(bar);
  }
  for (const [sy, h] of [
    [1, (0.66 - SCREEN_H) * 0.5],
    [-1, (0.66 - SCREEN_H) * 0.5],
  ]) {
    const bar = box(SCREEN_W, h, 0.035, trim);
    bar.position.set(0, cabY + sy * (0.66 - h) * 0.5, fz);
    g.add(bar);
  }
  const lip = box(SCREEN_W + 0.02, SCREEN_H + 0.02, 0.02, bezel);
  lip.position.set(0, cabY + 0.01, fz - 0.005);
  g.add(lip);

  const hood = box(cabW + 0.06, 0.05, 0.26, paint);
  hood.position.set(0, cabY + 0.36, 0.09);
  hood.rotation.x = 0.22;
  g.add(hood);

  const headBoard = box(cabW + 0.02, 0.19, 0.05, bezel);
  headBoard.position.set(0, cabY + 0.47, 0.02);
  g.add(headBoard);
  const headFace = new THREE.Mesh(
    new THREE.PlaneGeometry(cabW - 0.02, 0.155),
    new THREE.MeshStandardMaterial({ map: header, emissive: 0xffffff, emissiveMap: header, emissiveIntensity: 0.22, roughness: 0.7 })
  );
  headFace.position.set(0, cabY + 0.47, 0.047);
  g.add(headFace);

  // Speaker slots + controls on the chin.
  const chin = box(cabW - 0.1, 0.16, 0.06, paint);
  chin.position.set(0, cabY - 0.4, 0.12);
  g.add(chin);
  const slotGeo = new THREE.BoxGeometry(0.2, 0.012, 0.012);
  for (let i = 0; i < 4; i++) {
    const slot = new THREE.Mesh(slotGeo, bezel);
    slot.position.set(-0.2, cabY - 0.36 - i * 0.026, 0.152);
    g.add(slot);
  }
  for (let i = 0; i < 2; i++) {
    const knob = new THREE.Mesh(KG.knob, trim);
    knob.rotation.x = Math.PI / 2;
    knob.position.set(0.12 + i * 0.08, cabY - 0.4, 0.15);
    g.add(knob);
  }
  const plate = box(0.34, 0.07, 0.02, mat(0x2a2414, { roughness: 0.7 }));
  plate.position.set(-0.22, cabY - 0.47, 0.15);
  g.add(plate);

  const led = new THREE.Mesh(
    KG.led,
    new THREE.MeshStandardMaterial({ color: 0x331800, emissive: 0xff8800, emissiveIntensity: 0.12, roughness: 0.4 })
  );
  led.position.set(0.35, cabY - 0.4, 0.15);
  g.add(led);

  const screenMat = new THREE.MeshStandardMaterial({
    map: slides[seed % slides.length],
    emissive: 0xffffff,
    emissiveMap: slides[seed % slides.length],
    emissiveIntensity: 0.3,
    color: 0x9a9a9a,
    roughness: 0.3,
    metalness: 0.05,
  });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(SCREEN_W, SCREEN_H), screenMat);
  screen.position.set(0, cabY + 0.01, fz + 0.008);
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

  const header = headerTex();
  SITES.forEach(([x, z], i) => {
    const k = makeKiosk(x, z, i, slides, header);
    const vid = document.createElement("video");
    vid.src = VIDEO_URLS[i % VIDEO_URLS.length];
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.preload = "metadata";
    vid.setAttribute("playsinline", "");
    const vtex = new THREE.VideoTexture(vid);
    vtex.colorSpace = THREE.SRGBColorSpace;
    k.video = vid;
    k.videoTex = vtex;
    k.stillTex = slides[i % slides.length];
    scene.add(k.group);
    kiosks.push(k);
    spots.push({ position: new THREE.Vector3(x, 0, z), radius: RADIUS });
  });

  const idleColor = new THREE.Color(0x8a8a8a);
  const liveColor = new THREE.Color(0xffffff);

  return {
    spots,
    tick(playerPos, audioOn = true) {
      const now = performance.now();
      let closest = -1;
      let closestD = RADIUS * RADIUS;
      for (let i = 0; i < kiosks.length; i++) {
        const p = spots[i].position;
        const d = (playerPos.x - p.x) ** 2 + (playerPos.z - p.z) ** 2;
        if (d < closestD) {
          closestD = d;
          closest = i;
        }
      }
      for (let i = 0; i < kiosks.length; i++) {
        const k = kiosks[i];
        const p = spots[i].position;
        const dx = playerPos.x - p.x;
        const dz = playerPos.z - p.z;
        const near = dx * dx + dz * dz < RADIUS * RADIUS;
        const screen = k.screenMat;
        const target = near ? 0.95 : 0.3;
        screen.emissiveIntensity += (target - screen.emissiveIntensity) * 0.12;
        screen.color.lerp(near ? liveColor : idleColor, 0.12);
        k.ledMat.emissiveIntensity += ((near ? 1.4 : 0.1) - k.ledMat.emissiveIntensity) * 0.14;
        if (near) {
          if (k.videoTex && screen.map !== k.videoTex) {
            screen.map = k.videoTex;
            screen.emissiveMap = k.videoTex;
          }
          if (i === closest && k.video && k.video.paused) k.video.play().catch(() => {});
          if (k.video) {
            k.video.muted = !audioOn || i !== closest;
            k.video.volume = i === closest ? 0.28 : 0;
          }
        } else if (k.video && !k.video.paused) {
          k.video.pause();
          k.video.muted = true;
          if (k.stillTex) {
            screen.map = k.stillTex;
            screen.emissiveMap = k.stillTex;
          }
        }
      }
    },
  };
}
