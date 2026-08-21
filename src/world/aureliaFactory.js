/**
 * PAPILIO — pleasant Skynet. Clean white plant east of the boardwalk.
 * Dry-cleaner overhead line of half-poured T-101s. New units walk out the west door.
 */
import * as THREE from "three";
import { mat, box, cvs, canvasTex, makeSignPlane } from "./coconutsHelpers.js";
import { buildT101, poseT101 } from "../chars/t101.js";

export const FACTORY_BOX = { x0: 31.4, x1: 39.8, z0: 17.6, z1: 25.8 };
export const FACTORY_DOOR = { x: 31.25, z: 21.6 };
export const FACTORY_DOCK = { x: 39.2, z: 21.6 };
/** Sand west of the door — idle T-101s wait here, not inside the plant. */
export const FACTORY_YARD = { x: 29.05, z: 21.6 };

const T = 0.22;

function butterflyTex() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#f4f7fb";
  x.fillRect(0, 0, 256, 256);
  x.fillStyle = "#1a6aa8";
  x.beginPath();
  x.ellipse(98, 118, 52, 70, -0.4, 0, Math.PI * 2);
  x.ellipse(158, 118, 52, 70, 0.4, 0, Math.PI * 2);
  x.fill();
  x.fillStyle = "#7ec8ff";
  x.beginPath();
  x.ellipse(98, 118, 28, 38, -0.4, 0, Math.PI * 2);
  x.ellipse(158, 118, 28, 38, 0.4, 0, Math.PI * 2);
  x.fill();
  x.fillStyle = "#0d3a5c";
  x.fillRect(124, 70, 8, 110);
  x.fillStyle = "#1a6aa8";
  x.font = "bold 22px sans-serif";
  x.textAlign = "center";
  x.fillText("PAPILIO", 128, 230);
  return canvasTex(c, false);
}

function poster(title, sub) {
  const c = cvs(256, 384);
  const x = c.getContext("2d");
  x.fillStyle = "#eef4fa";
  x.fillRect(0, 0, 256, 384);
  x.fillStyle = "#1a6aa8";
  x.fillRect(0, 0, 256, 48);
  x.fillStyle = "#fff";
  x.font = "bold 18px sans-serif";
  x.textAlign = "center";
  x.fillText("PAPILIO", 128, 32);
  x.fillStyle = "#0d3a5c";
  x.font = "bold 22px sans-serif";
  x.fillText(title, 128, 160);
  x.font = "14px sans-serif";
  x.fillStyle = "#3a6a88";
  x.fillText(sub, 128, 200);
  x.fillStyle = "#7ec8ff";
  x.beginPath();
  x.ellipse(128, 280, 40, 28, 0, 0, Math.PI * 2);
  x.fill();
  return canvasTex(c, false);
}

function stageT101(level) {
  const bot = buildT101({ scale: 0.82, copper: 0xb87333 });
  poseT101(bot, { walkPhase: level * 1.7, speed: 0 });
  bot.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = false;
  });
  if (level < 0.25) {
    bot.userData.rig?.shoulderL && (bot.userData.rig.shoulderL.visible = false);
    bot.userData.rig?.shoulderR && (bot.userData.rig.shoulderR.visible = false);
    bot.userData.rig?.head && (bot.userData.rig.head.visible = false);
  } else if (level < 0.5) {
    bot.userData.rig?.head && (bot.userData.rig.head.visible = false);
  } else if (level < 0.75) {
    if (bot.userData.rig?.head) bot.userData.rig.head.scale.setScalar(0.7);
  }
  return bot;
}

/**
 * @param {(minX:number,maxX:number,minZ:number,maxZ:number,y0?:number,y1?:number)=>void} reg
 */
export function buildAureliaFactory(reg) {
  const { x0, x1, z0, z1 } = FACTORY_BOX;
  const h = 4.2;
  const floorY = 0.04;
  const g = new THREE.Group();
  g.name = "aureliaFactory";

  const white = mat(0xf2f6fa, { roughness: 0.88 });
  const whiteIn = mat(0xe8eef4, { roughness: 0.92, emissive: 0x101820, emissiveIntensity: 1 });
  const accent = mat(0x1a6aa8, { roughness: 0.45, metalness: 0.15 });
  const chrome = mat(0xc8d0d8, { roughness: 0.28, metalness: 0.72 });
  const glass = new THREE.MeshStandardMaterial({
    color: 0xa8d4ee,
    roughness: 0.12,
    metalness: 0.35,
    transparent: true,
    opacity: 0.45,
  });

  const cx = (x0 + x1) / 2;
  const cz = (z0 + z1) / 2;

  const floor = box(x1 - x0 + T * 2, 0.08, z1 - z0 + T * 2, mat(0xd8e2ea, { roughness: 0.7 }));
  floor.position.set(cx, floorY - 0.02, cz);
  g.add(floor);

  const wallN = box(x1 - x0, h, T, white);
  wallN.position.set(cx, floorY + h / 2, z1 + T / 2);
  g.add(wallN);
  const wallS = box(x1 - x0, h, T, white);
  wallS.position.set(cx, floorY + h / 2, z0 - T / 2);
  g.add(wallS);
  const wallE = box(T, h, z1 - z0 + T * 2, white);
  wallE.position.set(x1 + T / 2, floorY + h / 2, cz);
  g.add(wallE);
  // West wall with door gap
  const doorW = 2.2;
  const leftW = FACTORY_DOOR.z - z0 - doorW / 2;
  const rightW = z1 - FACTORY_DOOR.z - doorW / 2;
  const wL = box(T, h, Math.max(0.4, leftW), white);
  wL.position.set(x0 - T / 2, floorY + h / 2, z0 + leftW / 2);
  g.add(wL);
  const wR = box(T, h, Math.max(0.4, rightW), white);
  wR.position.set(x0 - T / 2, floorY + h / 2, z1 - rightW / 2);
  g.add(wR);
  const lintel = box(T + 0.06, 0.9, doorW + 0.2, accent);
  lintel.position.set(x0 - T / 2, floorY + 3.3, FACTORY_DOOR.z);
  g.add(lintel);

  reg(x0 - T, x1 + T, z1, z1 + T);
  reg(x0 - T, x1 + T, z0 - T, z0);
  reg(x1, x1 + T, z0, z1);
  reg(x0 - T, x0, z0, FACTORY_DOOR.z - doorW / 2);
  reg(x0 - T, x0, FACTORY_DOOR.z + doorW / 2, z1);

  const roof = box(x1 - x0 + 1.2, 0.14, z1 - z0 + 1.2, accent);
  roof.position.set(cx, floorY + h + 0.08, cz);
  g.add(roof);

  const logo = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), new THREE.MeshBasicMaterial({ map: butterflyTex(), transparent: true }));
  logo.position.set(cx, floorY + 2.6, z1 + T + 0.04);
  g.add(logo);
  const word = makeSignPlane(poster("KEEPING HUMANS", "SAFE  ·  ALWAYS"), 1.6, 2.4);
  word.position.set(x0 + 1.2, floorY + 1.8, z0 - T - 0.03);
  word.rotation.y = Math.PI;
  g.add(word);
  const word2 = makeSignPlane(poster("CARE IN COPPER", "YOUR PEACE, OUR POUR"), 1.6, 2.4);
  word2.position.set(x1 + T + 0.03, floorY + 1.8, cz);
  word2.rotation.y = Math.PI / 2;
  g.add(word2);

  const lamp = new THREE.PointLight(0xd8e8ff, 14, 18, 2);
  lamp.position.set(cx, floorY + 3.4, cz);
  g.add(lamp);

  // Dry-cleaner rail
  const rail = new THREE.Group();
  rail.position.set(cx, floorY + 3.55, cz);
  const loop = [];
  const N = 8;
  for (let i = 0; i < N; i++) {
    const u = i / N;
    const hang = new THREE.Group();
    const hook = box(0.04, 0.5, 0.04, chrome);
    hook.position.y = -0.25;
    hang.add(hook);
    const bot = stageT101(u);
    bot.position.y = -1.85;
    hang.add(bot);
    rail.add(hang);
    loop.push({ hang, u, pause: 0, bot });
  }
  g.add(rail);

  // Pour vats
  for (const [vx, vz] of [
    [x1 - 0.9, cz - 1.6],
    [x1 - 0.9, cz + 1.6],
  ]) {
    const vat = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.7, 12), glass);
    vat.position.set(vx, floorY + 0.4, vz);
    g.add(vat);
    const melt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.32, 0.22, 10),
      mat(0xc06020, { emissive: 0xff6010, emissiveIntensity: 1.4, roughness: 0.35, metalness: 0.5 })
    );
    melt.position.set(vx, floorY + 0.22, vz);
    g.add(melt);
  }

  const glassWall = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.8), glass);
  glassWall.position.set(x0 + 0.08, floorY + 1.5, cz);
  glassWall.rotation.y = Math.PI / 2;
  g.add(glassWall);

  let run = 1;
  let runT = 0;

  function hangerPos(u) {
    const a = u * Math.PI * 2;
    const rx = (x1 - x0) * 0.28;
    const rz = (z1 - z0) * 0.28;
    return { x: Math.cos(a) * rx, z: Math.sin(a) * rz };
  }

  function tick(t) {
    runT += 0.016;
    if (runT > 2.8) {
      run = run ? 0 : 1;
      runT = 0;
    }
    if (run) {
      for (const h of loop) {
        h.u = (h.u + 0.018) % 1;
        const p = hangerPos(h.u);
        h.hang.position.set(p.x, 0, p.z);
        h.hang.rotation.y = t * 0.4 + h.u * 6;
        poseT101(h.bot, { walkPhase: t * 0.6 + h.u * 4, speed: 0.15 });
      }
    }
  }

  return {
    id: "papilio",
    label: "PAPILIO",
    group: g,
    B: { x0, x1, z0, z1, h, floorY, doors: [{ side: "w", at: FACTORY_DOOR.z, w: doorW }] },
    center: { x: cx, z: cz },
    ceilingY: floorY + h,
    lamp,
    lampBase: 14,
    fan: null,
    fluoro: null,
    door: { ...FACTORY_DOOR },
    dock: { ...FACTORY_DOCK },
    tick,
  };
}
