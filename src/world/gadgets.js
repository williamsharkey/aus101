/**
 * Handhelds + sand internet-cafe laptops.
 * VideoTexture when assets/media/psa/*.mp4 or ads/loop_*.mp4 exist;
 * otherwise canvas "websites" cycled every 3s.
 *
 * Also home to the shared arm rig (`elbowHinge` / `armIK`) that party.js and
 * synthRig.js use to put hands on props: the biped from chars/npcs.js exposes
 * `userData.body.{armL,armR}` as real joints, so anything held is parented to
 * the hand at the end of that chain instead of floated in the character's
 * root space.
 */
import * as THREE from "three";

const CYCLE_S = 3;
const FACE_R = 4.8;
/** How far the screen is allowed to swing out of its grip toward the player. */
const FACE_BLEND = 0.26;
const VIDEO_NEAR = 8;
const PSA_DIR = "assets/media/psa/";
const ADS_DIR = "assets/media/ads/";

const KNOWN_VIDEOS = [
  `${PSA_DIR}psa1.mp4`,
  `${PSA_DIR}psa2.mp4`,
  `${PSA_DIR}psa3.mp4`,
  `${PSA_DIR}psa4.mp4`,
  `${PSA_DIR}psa5.mp4`,
  `${ADS_DIR}loop_apply.mp4`,
  `${ADS_DIR}loop_billboard.mp4`,
  `${ADS_DIR}loop_bunker.mp4`,
  `${ADS_DIR}loop_crt.mp4`,
];

const SITES = [
  {
    brand: "BBL.TIPS",
    title: "Brazilian Butt Lift Tips",
    url: "bbl.tips/stairs",
    bg: "#1a0c12",
    bar: "#2a121c",
    accent: "#ff5a9a",
    ink: "#ffe6f0",
    dim: "#c898a8",
    rows: ["3 flights or it didn't happen", "Sit on a donut, not your career", "Surgeon's IG vs your hallway"],
  },
  {
    brand: "CHEMTRAILS WEEKLY",
    title: "They lengthened the lines",
    url: "chemtrails.week/issue-408",
    bg: "#0b1520",
    bar: "#102030",
    accent: "#7ec8ff",
    ink: "#e8f4ff",
    dim: "#8aa8c0",
    rows: ["Grid over the Gold Coast", "Barium taste in the slushie", "Unsubscribe is a psyop"],
  },
  {
    brand: "CLOUD//MART",
    title: "Vape Juice 40% Off",
    url: "cloudmart.au/juice",
    bg: "#120818",
    bar: "#1c1028",
    accent: "#c8ff3a",
    ink: "#f4ffe8",
    dim: "#a0b878",
    rows: ["Mango-menthol 50mg", "Free lung with 3 bottles", "Not a cigarette, a lifestyle"],
  },
  {
    brand: "UNAPPROVED ZINC",
    title: "Unapproved Zinc Forum",
    url: "zinc.forum/unapproved",
    bg: "#14180e",
    bar: "#1c2212",
    accent: "#d4c070",
    ink: "#f2edd4",
    dim: "#9a9870",
    rows: ["Is 50+ a psyop? (342)", "White nose = class traitor", "Sticky: council banned my tin"],
  },
  {
    brand: "CUBE KITCHEN",
    title: "Cockroach Cube Recipes",
    url: "cubekitchen.au/roast",
    bg: "#181208",
    bar: "#241c10",
    accent: "#e89030",
    ink: "#fff0d8",
    dim: "#c0a070",
    rows: ["12-min roast, no questions", "Stock from the tray water", "Guest: crunch is the point"],
  },
];

const CAFE_SPOTS = [
  { x: -17.4, z: 10.7, yaw: 0.28, stripe: 0xe05a4f },
  { x: -16.15, z: 11.15, yaw: -0.18, stripe: 0x3f93c4 },
];

const _wp = new THREE.Vector3();
const _look = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _qWorld = new THREE.Quaternion();
const _qParent = new THREE.Quaternion();
const _qLocal = new THREE.Quaternion();
const _qFlip = new THREE.Quaternion().setFromAxisAngle(_up, Math.PI);
const _m = new THREE.Matrix4();

/* ------------------------------------------------------------------ arm rig */

const _aim = new THREE.Vector3();
const _rest = new THREE.Vector3();
const _qAim = new THREE.Quaternion();
const _qRoll = new THREE.Quaternion();

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

/**
 * Segment lengths read off the rig itself, so nothing here hard-codes the
 * proportions in chars/npcs.js: the upper arm is the only child whose top edge
 * sits at the shoulder (centre = -len/2, height = len), and the hand group
 * hangs at -(upper + forearm).
 */
function segLens(arm) {
  if (arm.userData.segLens) return arm.userData.segLens;
  const hand = arm.getObjectByName("hand") || arm.children.find((c) => c.isGroup) || null;
  const wrist = hand ? -hand.position.y : 0.54;
  let upper = wrist * 0.52;
  for (const c of arm.children) {
    if (!c.isMesh) continue;
    const len = c.scale.y;
    if (len > wrist * 0.3 && Math.abs(c.position.y + len * 0.5) < 1e-3) {
      upper = len;
      break;
    }
  }
  const out = { upper, fore: Math.max(wrist - upper, 0.02), wrist, hand };
  arm.userData.segLens = out;
  return out;
}

/**
 * Reparent everything below `cutY` onto a hinge so the far segment can fold.
 * Same trick chars/npcs.js uses for the knee; cached under `key` so repeat
 * calls (and poseSit) share one hinge per joint.
 *
 * @param {THREE.Object3D} joint  limb root group (armL/armR/legL/legR)
 * @param {number} cutY           local Y of the hinge
 * @param {string} key            userData cache key
 * @param {string} name           object name for the pivot
 */
export function limbHinge(joint, cutY, key, name) {
  if (!joint) return null;
  if (joint.userData[key]) return joint.userData[key];
  const pivot = new THREE.Group();
  pivot.name = name;
  pivot.position.y = cutY;
  joint.add(pivot);
  for (const c of [...joint.children]) {
    if (c === pivot || c.position.y > cutY - 1e-3) continue;
    c.position.y -= cutY;
    pivot.add(c);
  }
  joint.userData[key] = pivot;
  return pivot;
}

/**
 * Elbow hinge for an arm from chars/npcs.js.
 * @param {THREE.Object3D} arm  `userData.body.armL` / `armR`
 */
export function elbowHinge(arm) {
  if (!arm) return null;
  if (arm.userData.elbowHinge) return arm.userData.elbowHinge;
  return limbHinge(arm, -segLens(arm).upper, "elbowHinge", "elbow");
}

/** @returns {THREE.Object3D|null} the hand group at the end of an arm chain. */
export function handOf(npc, side) {
  const arm = side < 0 ? npc?.userData?.body?.armL : npc?.userData?.body?.armR;
  if (!arm) return null;
  elbowHinge(arm);
  return segLens(arm).hand;
}

/**
 * Two-bone IK: swing the shoulder and fold the elbow so the wrist lands on
 * `target`. Everything is in the character's own space (the arm group's parent),
 * which is also where props parented to the character live.
 *
 * @param {THREE.Object3D} npc     biped group from chars/npcs.js
 * @param {-1|1} side              -1 = armL, 1 = armR
 * @param {THREE.Vector3} target   wrist position in character space
 * @param {number} [roll]          spin the elbow around the shoulder→wrist axis
 * @returns {{hand: THREE.Object3D, hinge: THREE.Object3D, arm: THREE.Object3D}|null}
 */
export function armIK(npc, side, target, roll = 0) {
  const body = npc?.userData?.body;
  const arm = side < 0 ? body?.armL : body?.armR;
  if (!arm) return null;
  const hinge = elbowHinge(arm);
  const { upper: u, fore: f, hand } = segLens(arm);

  _aim.copy(target).sub(arm.position);
  let d = _aim.length();
  if (d < 1e-4) return null;
  d = clamp(d, Math.abs(u - f) + 0.03, (u + f) * 0.995);
  const cosI = clamp((u * u + f * f - d * d) / (2 * u * f), -1, 1);
  // Negative elbow angle folds the forearm forward (+Z), the way a human elbow goes.
  const phi = -(Math.PI - Math.acos(cosI));
  _rest.set(0, -(u + f * Math.cos(phi)), -f * Math.sin(phi)).normalize();
  _aim.normalize();
  _qAim.setFromUnitVectors(_rest, _aim);
  if (roll) {
    _qRoll.setFromAxisAngle(_aim, roll);
    arm.quaternion.copy(_qRoll).multiply(_qAim);
  } else {
    arm.quaternion.copy(_qAim);
  }
  hinge.rotation.set(phi, 0, 0);
  return { hand, hinge, arm };
}

/* ------------------------------------------------------------- shared parts */

const phoneW = 0.071;
const phoneH = 0.146;
const tabletW = 0.152;
const tabletH = 0.212;

const GEO = {
  phoneBack: new THREE.BoxGeometry(phoneW, phoneH, 0.0072),
  phoneRail: new THREE.BoxGeometry(phoneW + 0.0035, phoneH + 0.0035, 0.0044),
  phoneScreen: new THREE.PlaneGeometry(phoneW - 0.007, phoneH - 0.011),
  phoneBump: new THREE.BoxGeometry(0.024, 0.024, 0.0022),
  tabletBack: new THREE.BoxGeometry(tabletW, tabletH, 0.0068),
  tabletRail: new THREE.BoxGeometry(tabletW + 0.004, tabletH + 0.004, 0.0042),
  tabletScreen: new THREE.PlaneGeometry(tabletW - 0.017, tabletH - 0.022),
  lens: new THREE.CylinderGeometry(0.0055, 0.0055, 0.0026, 8),
  fingerTip: new THREE.BoxGeometry(0.017, 0.013, 0.019),
  thumbPad: new THREE.BoxGeometry(0.019, 0.03, 0.017),
};

const phoneShell = new THREE.MeshStandardMaterial({ color: 0x16161a, roughness: 0.42, metalness: 0.3 });
const railMetal = new THREE.MeshStandardMaterial({ color: 0x9aa2ac, roughness: 0.24, metalness: 0.88 });
const glassBlack = new THREE.MeshStandardMaterial({ color: 0x05050a, roughness: 0.18, metalness: 0.1 });
const tabletShell = new THREE.MeshStandardMaterial({ color: 0x24242a, roughness: 0.38, metalness: 0.26 });
const laptopShell = new THREE.MeshStandardMaterial({ color: 0x3a3c42, roughness: 0.38, metalness: 0.48 });
const laptopDark = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.5, metalness: 0.22 });
const defaultSkin = new THREE.MeshStandardMaterial({ color: 0xd4a06a, roughness: 0.72, metalness: 0.04 });

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function screenMat(tex) {
  return new THREE.MeshStandardMaterial({
    map: tex,
    emissive: 0xffffff,
    emissiveMap: tex,
    emissiveIntensity: 0.48,
    color: 0xffffff,
    roughness: 0.32,
    metalness: 0.04,
  });
}

function setScreenTex(mat, tex) {
  mat.map = tex;
  mat.emissiveMap = tex;
  mat.needsUpdate = true;
}

function roundRect(x, rx, ry, w, h, r) {
  x.beginPath();
  x.moveTo(rx + r, ry);
  x.arcTo(rx + w, ry, rx + w, ry + h, r);
  x.arcTo(rx + w, ry + h, rx, ry + h, r);
  x.arcTo(rx, ry + h, rx, ry, r);
  x.arcTo(rx, ry, rx + w, ry, r);
  x.closePath();
}

function paintSite(site, w, h, chrome = "phone") {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const x = c.getContext("2d");
  // Black surround + rounded clip: the panel reads as glass, not a printed card.
  x.fillStyle = "#05050a";
  x.fillRect(0, 0, w, h);
  x.save();
  roundRect(x, 0, 0, w, h, Math.min(w, h) * 0.07);
  x.clip();

  x.fillStyle = site.bg;
  x.fillRect(0, 0, w, h);

  x.fillStyle = site.bar;
  x.fillRect(0, 0, w, h * 0.055);
  x.fillStyle = site.dim;
  x.font = `600 ${Math.round(h * 0.022)}px Arial, sans-serif`;
  x.textAlign = "left";
  x.textBaseline = "middle";
  x.fillText("9:41", w * 0.06, h * 0.028);
  x.textAlign = "right";
  x.fillText("LTE   74%", w * 0.94, h * 0.028);
  if (chrome === "phone") {
    x.fillStyle = "#05050a";
    roundRect(x, w * 0.34, h * 0.006, w * 0.32, h * 0.034, h * 0.017);
    x.fill();
  }

  x.fillStyle = "#00000066";
  const chipY = h * 0.07;
  const chipH = h * 0.048;
  roundRect(x, w * 0.08, chipY, w * 0.84, chipH, chipH * 0.4);
  x.fill();
  x.fillStyle = site.dim;
  x.font = `${Math.round(h * 0.02)}px Arial, sans-serif`;
  x.textAlign = "center";
  x.fillText(site.url, w * 0.5, chipY + chipH * 0.55);

  const heroY = h * 0.14;
  const heroH = h * 0.22;
  x.fillStyle = site.accent;
  x.fillRect(0, heroY, w, heroH);
  x.fillStyle = site.bar;
  x.globalAlpha = 0.18;
  x.fillRect(0, heroY + heroH * 0.62, w, heroH * 0.38);
  x.globalAlpha = 1;
  x.fillStyle = site.bar;
  x.textAlign = "left";
  x.font = `800 ${Math.round(h * 0.032)}px Impact, Arial Black, sans-serif`;
  x.fillText(site.brand, w * 0.06, heroY + h * 0.055);
  x.fillStyle = site.ink;
  x.font = `700 ${Math.round(h * 0.042)}px Arial, sans-serif`;
  x.fillText(site.title, w * 0.06, heroY + h * 0.125);

  let y = h * 0.4;
  for (const row of site.rows) {
    x.fillStyle = "#ffffff12";
    x.fillRect(w * 0.05, y, w * 0.9, h * 0.09);
    x.fillStyle = site.accent;
    x.fillRect(w * 0.05, y, 6, h * 0.09);
    x.fillStyle = site.ink;
    x.font = `600 ${Math.round(h * 0.026)}px Arial, sans-serif`;
    x.fillText(row, w * 0.1, y + h * 0.052);
    y += h * 0.105;
  }

  if (chrome === "phone") {
    x.fillStyle = "#ffffff66";
    roundRect(x, w * 0.32, h * 0.968, w * 0.36, h * 0.008, h * 0.004);
    x.fill();
  }

  // Glass sheen + scanlines.
  const gl = x.createLinearGradient(0, 0, w, h);
  gl.addColorStop(0, "rgba(255,255,255,0.10)");
  gl.addColorStop(0.35, "rgba(255,255,255,0.02)");
  gl.addColorStop(1, "rgba(255,255,255,0.06)");
  x.fillStyle = gl;
  x.fillRect(0, 0, w, h);
  x.globalAlpha = 0.1;
  x.fillStyle = "#000";
  for (let i = 0; i < h; i += 3) x.fillRect(0, i, w, 1);
  x.globalAlpha = 1;
  x.restore();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

function keyboardTex() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 128;
  const x = c.getContext("2d");
  x.fillStyle = "#1a1a1e";
  x.fillRect(0, 0, 256, 128);
  x.fillStyle = "#2e2e34";
  for (let r = 0; r < 5; r++) {
    for (let k = 0; k < 15; k++) {
      const w = r === 4 && k > 3 && k < 9 ? 60 : 13;
      if (r === 4 && k > 4 && k < 9) continue;
      roundRect(x, 6 + k * 16.5, 6 + r * 24, w, 18, 3);
      x.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function towelTex(hex) {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 256;
  const x = c.getContext("2d");
  const r = (hex >> 16) & 255;
  const g = (hex >> 8) & 255;
  const b = hex & 255;
  x.fillStyle = `rgb(${r},${g},${b})`;
  x.fillRect(0, 0, 128, 256);
  x.fillStyle = "rgba(255,255,255,0.22)";
  for (let i = 0; i < 10; i++) x.fillRect(0, i * 26, 128, 10);
  x.fillStyle = "rgba(0,0,0,0.12)";
  x.fillRect(0, 0, 128, 8);
  x.fillRect(0, 248, 128, 8);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function makeScreens() {
  return {
    portrait: SITES.map((s) => paintSite(s, 384, 640, "phone")),
    landscape: SITES.map((s) => paintSite(s, 640, 400, "flat")),
  };
}

async function listDirMp4(dir, pred = () => true) {
  try {
    const r = await fetch(dir);
    if (!r.ok) return [];
    const html = await r.text();
    const out = [];
    const re = /href=["']([^"']+\.mp4)["']/gi;
    let m;
    while ((m = re.exec(html))) {
      const name = m[1].split("/").pop();
      if (pred(name)) out.push(dir + name);
    }
    return out;
  } catch {
    return [];
  }
}

function loadVideo(url) {
  return new Promise((resolve) => {
    const v = document.createElement("video");
    v.src = url;
    v.loop = true;
    v.muted = true;
    v.playsInline = true;
    v.preload = "auto";
    v.setAttribute("playsinline", "");
    v.setAttribute("muted", "");
    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      resolve(ok ? v : null);
    };
    v.addEventListener("loadeddata", () => finish(true), { once: true });
    v.addEventListener("error", () => finish(false), { once: true });
    setTimeout(() => finish(v.readyState >= 1), 2200);
  });
}

async function collectVideos() {
  const listed = [
    ...(await listDirMp4(PSA_DIR)),
    ...(await listDirMp4(ADS_DIR, (n) => /^loop_.*\.mp4$/i.test(n))),
  ];
  const urls = [...new Set([...listed, ...KNOWN_VIDEOS])];
  const loaded = await Promise.all(urls.map(loadVideo));
  const vids = loaded.filter(Boolean);
  const textures = [];
  for (const v of vids) {
    const tex = new THREE.VideoTexture(v);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    textures.push({ video: v, tex });
  }
  return textures;
}

function canHold(npc) {
  const m = npc?.mesh;
  if (!m || typeof m.add !== "function" || !m.children?.length) return false;
  if (m.userData?.hasGadget) return false;
  if (npc.ageBand === "child" || npc.ageBand === "gull") return false;
  if (npc.kind === "gull" || npc.kind === "kid") return false;
  if (m.name && /guitar/i.test(m.name)) return false;
  return npc.ageBand === "adult" || npc.kind === "ken" || npc.kind === "babe" || npc.kind === "sigma_07" || npc.kind === "goth";
}

/**
 * A handset whose origin is the grip point — bottom edge for a phone, side edge
 * for a tablet — with +Y up the device and +Z out of the SCREEN (normal toward
 * the viewer's eyes). Grip is at the origin; the slab stands out of the fist.
 */
function makeHandset(kind, tex, skinM, side) {
  const g = new THREE.Group();
  const tablet = kind === "tablet";
  const w = tablet ? tabletW : phoneW;
  const h = tablet ? tabletH : phoneH;
  // Phone: held at the bottom edge. Tablet: held at the side edge, two-handed.
  const cx = tablet ? -side * w * 0.5 : 0;
  const cy = tablet ? 0 : h * 0.5;

  const back = shadow(new THREE.Mesh(tablet ? GEO.tabletBack : GEO.phoneBack, tablet ? tabletShell : phoneShell));
  back.position.set(cx, cy, 0);
  const rail = shadow(new THREE.Mesh(tablet ? GEO.tabletRail : GEO.phoneRail, railMetal));
  rail.position.set(cx, cy, 0);
  const glass = new THREE.Mesh(tablet ? GEO.tabletBack : GEO.phoneBack, glassBlack);
  glass.position.set(cx, cy, 0.0022);
  glass.scale.set(0.985, 0.99, 0.5);
  const screen = new THREE.Mesh(tablet ? GEO.tabletScreen : GEO.phoneScreen, screenMat(tex));
  screen.position.set(cx, cy, 0.0052);
  g.add(back, rail, glass, screen);

  const camX = cx - w * 0.3;
  const camY = cy + h * 0.38;
  const bump = new THREE.Mesh(GEO.phoneBump, phoneShell);
  bump.position.set(camX, camY, -0.0048);
  bump.scale.set(tablet ? 0.8 : 1, tablet ? 0.8 : 1, 1);
  g.add(bump);
  for (const dy of tablet ? [0] : [0.006, -0.006]) {
    const lens = new THREE.Mesh(GEO.lens, glassBlack);
    lens.rotation.x = Math.PI / 2;
    lens.position.set(camX, camY + dy, -0.0058);
    g.add(lens);
  }

  // Fingertips curled over the far face and a thumb on the glass: the read is
  // "gripped", not "stuck to the palm".
  const skin = skinM || defaultSkin;
  const grip = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const f = shadow(new THREE.Mesh(GEO.fingerTip, skin));
    if (tablet) {
      f.position.set(0.004, (i - 1) * 0.026, 0.008);
      f.rotation.z = Math.PI / 2;
    } else {
      f.position.set(-side * (w * 0.5 - 0.003), 0.016 + i * 0.019, 0.006);
      f.rotation.z = -side * 0.12;
    }
    grip.add(f);
  }
  const thumb = shadow(new THREE.Mesh(GEO.thumbPad, skin));
  if (tablet) thumb.position.set(-side * 0.014, 0.03, 0.009);
  else thumb.position.set(side * (w * 0.36), 0.036, 0.009);
  thumb.rotation.z = side * 0.45;
  grip.add(thumb);
  g.add(grip);

  return { group: g, screen, mat: screen.material, grip, width: w };
}

/**
 * Where the gripping wrist goes, in character space, and how the device should
 * sit in the world once it is there. Keeping the device's attitude in character
 * space (rather than baking it into the hand) is what stops a phone from
 * reading as a slab glued to a forearm.
 */
const POSES = {
  // flip π puts +Z (screen) toward the holder. tilt is then a slight look-down.
  scroll: { hand: [0.09, -0.18, 0.19], tilt: 0.52, yaw: 0.18, flip: Math.PI, roll: 0.48, head: 0.4 },
  photo: { hand: [0.09, -0.05, 0.23], tilt: 0.22, yaw: 0.04, flip: Math.PI, roll: 0.55, head: 0.06 },
  tablet: { hand: [0.1, -0.16, 0.2], tilt: 0.62, yaw: 0.12, flip: Math.PI, roll: 0.42, head: 0.36 },
};

function handTarget(body, side, pose, out) {
  const s = body.scale || 1;
  const p = POSES[pose] || POSES.scroll;
  return out.set(side * p.hand[0] * s, body.shoulderY + p.hand[1] * s, (body.chestD || 0.18) * 0.5 + p.hand[2] * s);
}

const _target = new THREE.Vector3();
const _steady = new THREE.Vector3();
const _edge = new THREE.Vector3();
const _qWant = new THREE.Quaternion();
const _eWant = new THREE.Euler();
const _qChain = new THREE.Quaternion();

function attachHandset(npc, kind, tex, side, pose) {
  const mesh = npc.mesh;
  const body = mesh.userData?.body;
  const { group, mat, grip, width } = makeHandset(kind, tex, body?.skinM, side);
  const hand = handOf(mesh, side);

  if (hand && body) {
    const s = body.scale || 1;
    group.position.set(side * 0.006 * s, -0.05 * s, 0.014 * s);
    hand.add(group);
    npc.gadgetPose = { side, pose, body, mesh, width, lean: 0 };
  } else {
    const h = body?.shoulderY || 1.36;
    group.position.set(side * 0.16, h - 0.16, 0.2);
    group.rotation.set(-0.95, side * 0.22, side * 0.08);
    mesh.add(group);
  }
  mesh.userData.hasGadget = true;
  return { yawNode: group, mat, grip, restQuat: group.quaternion.clone() };
}

/**
 * Re-solve a holder's arms and re-seat the device every frame, so idle
 * animation elsewhere can never strand the prop in mid-air.
 */
function poseHolder(h, t) {
  const p = h.pose;
  if (!p) return;
  const { body, mesh, side } = p;
  const s = body.scale || 1;
  const spec = POSES[p.pose] || POSES.scroll;
  handTarget(body, side, p.pose, _target);
  _target.y += Math.sin(t * 1.1 + h.phase) * 0.006;
  if (p.pose === "photo") _target.z += Math.sin(t * 0.8 + h.phase) * 0.008;

  const rig = armIK(mesh, side, _target, side * spec.roll);
  if (!rig) return;

  // Device attitude, expressed in character space then pulled back through the
  // shoulder + elbow so the grip transform lands it exactly there.
  _eWant.set(spec.tilt + p.lean, (spec.flip || 0) - side * spec.yaw, 0);
  _qWant.setFromEuler(_eWant);
  _qChain.copy(rig.arm.quaternion).multiply(rig.hinge.quaternion).invert().multiply(_qWant);
  h.restQuat.copy(_qChain);
  // Apply straight away: posing must not depend on faceScreen running afterwards.
  h.yawNode.quaternion.copy(_qChain);

  if (p.pose === "tablet") {
    // Second hand at the far edge — a tablet is a two-handed object.
    _edge.set(-side * p.width, 0, 0).applyQuaternion(_qWant);
    _steady.copy(_target).add(_edge);
    armIK(mesh, -side, _steady, -side * 0.3);
  } else if (p.pose === "photo") {
    _steady.copy(_target);
    _steady.x = -side * 0.13 * s;
    _steady.y -= 0.03;
    _steady.z -= 0.04;
    armIK(mesh, -side, _steady, -side * 0.75);
  }
  if (body.head) body.head.rotation.x = spec.head;
}

function makeCafe(spot, tex, keyTex) {
  const g = new THREE.Group();
  const towel = new THREE.Mesh(
    new THREE.PlaneGeometry(1.12, 2.15),
    new THREE.MeshStandardMaterial({ map: towelTex(spot.stripe), roughness: 0.98, metalness: 0 })
  );
  towel.rotation.x = -Math.PI / 2;
  towel.position.y = 0.018;
  towel.receiveShadow = true;
  g.add(towel);

  const laptop = new THREE.Group();
  const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.016, 0.245), laptopShell));
  base.position.y = 0.012;
  laptop.add(base);
  const deck = new THREE.Mesh(
    new THREE.PlaneGeometry(0.29, 0.145),
    new THREE.MeshStandardMaterial({ map: keyTex, roughness: 0.7, metalness: 0.1 })
  );
  deck.rotation.x = -Math.PI / 2;
  deck.position.set(0, 0.0205, -0.03);
  laptop.add(deck);
  const trackpad = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.058), laptopDark);
  trackpad.rotation.x = -Math.PI / 2;
  trackpad.position.set(0, 0.0205, 0.078);
  laptop.add(trackpad);
  const hinge = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.3, 8), laptopDark));
  hinge.rotation.z = Math.PI / 2;
  hinge.position.set(0, 0.018, -0.115);
  laptop.add(hinge);

  const lid = new THREE.Group();
  lid.position.set(0, 0.018, -0.115);
  lid.rotation.x = -0.38;
  const lidMesh = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.225, 0.011), laptopShell));
  lidMesh.position.set(0, 0.112, 0);
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.322, 0.208, 0.004), glassBlack);
  bezel.position.set(0, 0.112, 0.0068);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.296, 0.183), screenMat(tex));
  screen.position.set(0, 0.114, 0.0093);
  lid.add(lidMesh, bezel, screen);
  laptop.add(lid);

  laptop.position.set(0, 0.028, -0.38);
  g.add(laptop);
  g.position.set(spot.x, 0, spot.z);
  g.rotation.y = spot.yaw;
  return { group: g, laptop, mat: screen.material, restQuat: laptop.quaternion.clone() };
}

function faceScreen(node, restQuat, playerPos, amt) {
  if (amt < 0.02) {
    node.quaternion.copy(restQuat);
    return;
  }
  node.getWorldPosition(_wp);
  _look.set(playerPos.x, _wp.y + 0.15, playerPos.z);
  _m.lookAt(_wp, _look, _up);
  _qWorld.setFromRotationMatrix(_m);
  _qWorld.multiply(_qFlip);
  node.parent.getWorldQuaternion(_qParent);
  _qLocal.copy(_qParent).invert().multiply(_qWorld);
  node.quaternion.copy(restQuat).slerp(_qLocal, amt);
}

function nearAmt(ax, az, playerPos, radius) {
  const dx = playerPos.x - ax;
  const dz = playerPos.z - az;
  const d2 = dx * dx + dz * dz;
  const r2 = radius * radius;
  if (d2 >= r2) return { amt: 0, d2 };
  const d = Math.sqrt(d2);
  return { amt: (1 - d / radius) * FACE_BLEND, d2 };
}

/**
 * @param {{ mesh: object, kind?: string, ageBand?: string }[]} cast
 * @param {THREE.Scene} scene
 * @returns {{ tick(t: number, playerPos: { x: number, y?: number, z: number }): void }}
 */
export function attachGadgets(cast, scene) {
  const sites = makeScreens();
  const keyTex = keyboardTex();
  const holders = [];
  let siteTick = -1;

  const adults = (cast || []).filter(canHold);
  adults.forEach((npc, i) => {
    const kind = i % 3 === 1 ? "tablet" : "phone";
    const side = i % 2 === 0 ? 1 : -1;
    const pose = kind === "tablet" ? "tablet" : i % 4 === 2 ? "photo" : "scroll";
    const tex = sites.portrait[i % sites.portrait.length];
    const holder = {
      kind,
      mesh: npc.mesh,
      offset: i,
      usesVideo: false,
      video: null,
      phase: i * 0.73,
      landscape: false,
      pose: null,
    };
    const { yawNode, mat, restQuat } = attachHandset(npc, kind, tex, side, pose);
    holder.yawNode = yawNode;
    holder.mat = mat;
    holder.restQuat = restQuat;
    holder.pose = npc.gadgetPose || null;
    if (holder.pose) holder.pose.lean = ((i * 37) % 11) * 0.018 - 0.09;
    holders.push(holder);
    poseHolder(holder, 0);
  });

  CAFE_SPOTS.forEach((spot, i) => {
    const tex = sites.landscape[i % sites.landscape.length];
    const cafe = makeCafe(spot, tex, keyTex);
    scene.add(cafe.group);
    holders.push({
      kind: "laptop",
      yawNode: cafe.laptop,
      mat: cafe.mat,
      restQuat: cafe.restQuat,
      mesh: cafe.group,
      offset: adults.length + i,
      usesVideo: false,
      video: null,
      phase: 2.1 + i,
      landscape: true,
      pose: null,
    });
  });

  const videos = [];
  collectVideos().then((found) => {
    if (!found.length) return;
    videos.push(...found);
    holders.forEach((h, i) => {
      const pick = found[i % found.length];
      setScreenTex(h.mat, pick.tex);
      h.usesVideo = true;
      h.video = pick.video;
    });
  });

  return {
    tick(t, playerPos) {
      if (!playerPos) return;
      const frame = Math.floor(t / CYCLE_S);
      if (frame !== siteTick) {
        siteTick = frame;
        for (const h of holders) {
          if (h.usesVideo) continue;
          const pack = h.landscape ? sites.landscape : sites.portrait;
          setScreenTex(h.mat, pack[Math.floor(t / CYCLE_S + h.offset) % pack.length]);
        }
      }

      const videoNear = new Set();
      for (const h of holders) {
        const ax = h.mesh.position.x;
        const az = h.mesh.position.z;
        const { amt, d2 } = nearAmt(ax, az, playerPos, FACE_R);
        if (h.mesh?.userData?.posing) continue;
        poseHolder(h, t);
        if (h.kind === "laptop") faceScreen(h.yawNode, h.restQuat, playerPos, amt);
        if (h.kind !== "laptop") {
          h.yawNode.rotateX(Math.sin(t * 1.6 + h.phase) * 0.014);
        }
        const live = 0.42 + amt * 1.4;
        h.mat.emissiveIntensity += (live - h.mat.emissiveIntensity) * 0.12;
        if (h.video && d2 < VIDEO_NEAR * VIDEO_NEAR) videoNear.add(h.video);
      }
      for (const v of videos) {
        const want = videoNear.has(v.video);
        if (want && v.video.paused) v.video.play().catch(() => {});
        else if (!want && !v.video.paused) v.video.pause();
      }
    },
  };
}
