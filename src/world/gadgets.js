/**
 * Handhelds + sand internet-cafe laptops.
 * VideoTexture when assets/media/psa/*.mp4 or ads/loop_*.mp4 exist;
 * otherwise canvas "websites" cycled every 3s.
 */
import * as THREE from "three";

const CYCLE_S = 3;
const FACE_R = 4.8;
const FACE_BLEND = 0.62;
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

const phoneBodyGeo = new THREE.BoxGeometry(0.058, 0.112, 0.009);
const phoneScreenGeo = new THREE.PlaneGeometry(0.05, 0.098);
const tabletBodyGeo = new THREE.BoxGeometry(0.112, 0.154, 0.009);
const tabletScreenGeo = new THREE.PlaneGeometry(0.1, 0.138);
const phoneShell = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.45, metalness: 0.38 });
const tabletShell = new THREE.MeshStandardMaterial({ color: 0x222228, roughness: 0.4, metalness: 0.28 });
const laptopShell = new THREE.MeshStandardMaterial({ color: 0x3a3c42, roughness: 0.38, metalness: 0.48 });
const laptopDark = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.5, metalness: 0.22 });

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

function paintSite(site, w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const x = c.getContext("2d");
  x.fillStyle = site.bg;
  x.fillRect(0, 0, w, h);

  x.fillStyle = site.bar;
  x.fillRect(0, 0, w, h * 0.055);
  x.fillStyle = site.dim;
  x.font = `600 ${Math.round(h * 0.022)}px Arial, sans-serif`;
  x.textAlign = "left";
  x.textBaseline = "middle";
  x.fillText("9:41", w * 0.05, h * 0.028);
  x.textAlign = "right";
  x.fillText("LTE   74%", w * 0.95, h * 0.028);

  x.fillStyle = "#00000066";
  const chipY = h * 0.07;
  const chipH = h * 0.048;
  x.fillRect(w * 0.08, chipY, w * 0.84, chipH);
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

  x.globalAlpha = 0.1;
  x.fillStyle = "#000";
  for (let i = 0; i < h; i += 3) x.fillRect(0, i, w, 1);
  x.globalAlpha = 1;

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
    portrait: SITES.map((s) => paintSite(s, 384, 640)),
    landscape: SITES.map((s) => paintSite(s, 640, 400)),
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

function findArm(mesh, side) {
  const name = side < 0 ? "armL" : "armR";
  const body = mesh.userData?.body;
  if (body) {
    if (name === "armR" && body.armR) return body.armR;
    if (name === "armL" && body.armL) return body.armL;
    if (Array.isArray(body.arms)) {
      const hit = body.arms.find((a) => a?.name === name);
      if (hit) return hit;
    }
  }
  return mesh.getObjectByName?.(name) || null;
}

function findHand(arm) {
  if (!arm?.children?.length) return null;
  const named = arm.getObjectByName?.("hand") || arm.children.find((c) => /hand/i.test(c.name || ""));
  if (named) return named;
  for (let i = arm.children.length - 1; i >= 0; i--) {
    const c = arm.children[i];
    if (!c?.children?.length) continue;
    const palm = c.children.some((ch) => /palm/i.test(ch.name || "") || ch.isMesh);
    if (palm) return c;
  }
  return null;
}

function makeHandset(kind, tex) {
  const g = new THREE.Group();
  const tablet = kind === "tablet";
  const body = shadow(new THREE.Mesh(tablet ? tabletBodyGeo : phoneBodyGeo, tablet ? tabletShell : phoneShell));
  const screen = new THREE.Mesh(tablet ? tabletScreenGeo : phoneScreenGeo, screenMat(tex));
  screen.position.z = tablet ? 0.0052 : 0.005;
  g.add(body, screen);
  return { group: g, screen, mat: screen.material };
}

function attachHandset(npc, kind, tex, side) {
  const mesh = npc.mesh;
  const { group, mat } = makeHandset(kind, tex);
  const arm = findArm(mesh, side);
  const hand = findHand(arm);
  if (arm && hand) {
    arm.rotation.x = -0.95;
    const tablet = kind === "tablet";
    group.position.set(0, tablet ? -0.08 : -0.07, tablet ? 0.03 : 0.026);
    group.rotation.set(0, 0, 0);
    hand.add(group);
  } else {
    const h = mesh.userData?.body?.shoulderY || 1.36;
    group.position.set(side * 0.16, h - 0.16, 0.2);
    group.rotation.set(-0.95, side * 0.22, side * 0.08);
    mesh.add(group);
  }
  mesh.userData.hasGadget = true;
  return { yawNode: group, mat, restQuat: group.quaternion.clone() };
}

function makeCafe(spot, tex) {
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
  const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.014, 0.24), laptopShell));
  base.position.y = 0.01;
  laptop.add(base);
  const keys = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.004, 0.16), laptopDark);
  keys.position.set(0, 0.018, 0.02);
  laptop.add(keys);

  const lid = new THREE.Group();
  lid.position.set(0, 0.016, -0.112);
  lid.rotation.x = -0.42;
  const lidMesh = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.22, 0.01), laptopShell));
  lidMesh.position.set(0, 0.11, 0);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.184), screenMat(tex));
  screen.position.set(0, 0.11, 0.0065);
  lid.add(lidMesh, screen);
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
  const holders = [];
  let siteTick = -1;

  const adults = (cast || []).filter(canHold);
  adults.forEach((npc, i) => {
    const kind = i % 3 === 1 ? "tablet" : "phone";
    const side = i % 2 === 0 ? 1 : -1;
    const tex = sites.portrait[i % sites.portrait.length];
    const { yawNode, mat, restQuat } = attachHandset(npc, kind, tex, side);
    holders.push({
      kind,
      yawNode,
      mat,
      restQuat,
      mesh: npc.mesh,
      offset: i,
      usesVideo: false,
      video: null,
      phase: i * 0.73,
      landscape: false,
    });
  });

  CAFE_SPOTS.forEach((spot, i) => {
    const tex = sites.landscape[i % sites.landscape.length];
    const cafe = makeCafe(spot, tex);
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
        faceScreen(h.yawNode, h.restQuat, playerPos, amt);
        if (h.kind !== "laptop") {
          h.yawNode.rotateX(Math.sin(t * 1.6 + h.phase) * 0.018);
        }
        const live = 0.42 + amt * 0.7;
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
