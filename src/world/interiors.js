/**
 * Enterable buildings for the Gold Coast — surf club, beach bar, change rooms.
 *
 * Pattern credit: Steve / a-better-internet/coconuts (bar-builder: `box` +
 * canvas texture + AABB `addCollider`). Coconuts' bar is open-air; these are
 * closed shells with a real gap in the collider ring, so the player walks in.
 *
 * Collision contract (see `createColliders` / `fixedUpdate` in src/input/player.js):
 * colliders are XZ AABBs, inflated by `player.radius` (0.34) on every side at
 * test time. A doorway of width W therefore leaves W − 0.68 m of walkable slot,
 * so every door here is >= 1.5 m wide. Walls are emitted as SEGMENTS either side
 * of each opening — never one box across the whole face.
 *
 * Mobile budget: geometries memoised by size, one shared material set, one
 * (culled) point light per building, no extra shadow casters.
 */
import * as THREE from "three";
import {
  kit,
  brickTex,
  cvs,
  canvasTex,
  cloneMap,
  mat,
  hipRoof,
  awningTex,
  metalRoofTex,
  makeSignPlane,
} from "./coconutsHelpers.js";
import { buildWisdomHouse } from "./wisdomHouse.js";
import { buildLibrary } from "./library.js";
import { buildVoidCave } from "./voidCave.js";

/** Player radius from `createPlayer`. Doors are sized against this. */
const PLAYER_R = 0.34;
/**
 * Camera probe radius used by `adjustCamera`. Kept below the player radius:
 * `blocked()` guarantees the player centre is never within PLAYER_R of a wall
 * box, so a camera this close to the chest is always in open air, which is what
 * lets the pull-in have a hard minimum instead of clipping in a corner.
 */
const CAM_R = 0.2;
/** Hard minimum chest→camera distance when a wall is right behind the player. */
const CAM_MIN = 0.12;
/** Boom length used while the player is inside a building. */
const INDOOR_BOOM = 2.5;
/** Wall thickness. */
const T = 0.24;
/** Door head height — lintel sits above this. */
const DOOR_H = 2.15;

/* ------------------------------------------------------------------ *\
   shared geometry / material pools
\* ------------------------------------------------------------------ */

const _geo = new Map();
function bgeo(w, h, d) {
  const k = `${w.toFixed(3)}|${h.toFixed(3)}|${d.toFixed(3)}`;
  let g = _geo.get(k);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    _geo.set(k, g);
  }
  return g;
}

function cgeo(rt, rb, h, seg) {
  const k = `c${rt}|${rb}|${h}|${seg}`;
  let g = _geo.get(k);
  if (!g) {
    g = new THREE.CylinderGeometry(rt, rb, h, seg);
    _geo.set(k, g);
  }
  return g;
}

function pgeo(w, h) {
  const k = `p${w.toFixed(3)}|${h.toFixed(3)}`;
  let g = _geo.get(k);
  if (!g) {
    g = new THREE.PlaneGeometry(w, h);
    _geo.set(k, g);
  }
  return g;
}

function bx(w, h, d, m) {
  const me = new THREE.Mesh(bgeo(w, h, d), m);
  me.castShadow = true;
  me.receiveShadow = true;
  return me;
}

/** Non-shadow-casting box — interior fittings, keeps the shadow pass cheap. */
function fx(w, h, d, m) {
  const me = new THREE.Mesh(bgeo(w, h, d), m);
  me.receiveShadow = true;
  return me;
}

let MATS = null;
function mats() {
  if (MATS) return MATS;
  const K = kit();
  MATS = {
    // Exterior render walls — cream fibro, same family as the SLS tower.
    wallOut: mat(0xdfd2b6, { roughness: 0.95 }),
    // Interior face: slightly emissive so a shadowed room never goes to black.
    wallIn: mat(0xe7ddc8, { roughness: 0.96, emissive: 0x2a1f14, emissiveIntensity: 1 }),
    ceiling: mat(0xd8cdb6, { roughness: 0.98, emissive: 0x241a12, emissiveIntensity: 1 }),
    // Floor tile is deliberately darker than the walls — a white room on a
    // white floor reads as a void under this sunset key.
    tile: new THREE.MeshStandardMaterial({
      map: cloneMap(brickTex("#879d98", "#5d736e"), 9, 7),
      roughness: 0.6,
      emissive: 0x0e1414,
    }),
    tileWall: new THREE.MeshStandardMaterial({
      map: cloneMap(brickTex("#dfeae6", "#a9bfb9"), 3, 5),
      roughness: 0.45,
      emissive: 0x0e1212,
    }),
    floorWood: new THREE.MeshStandardMaterial({
      map: cloneMap(K.woodMap, 8, 5),
      roughness: 0.85,
      emissive: 0x1a120a,
    }),
    roof: new THREE.MeshStandardMaterial({
      map: cloneMap(metalRoofTex(), 5, 4),
      roughness: 0.55,
      metalness: 0.18,
    }),
    counterTop: new THREE.MeshStandardMaterial({ map: cloneMap(K.woodMap, 5, 1), roughness: 0.5 }),
    counterFront: new THREE.MeshStandardMaterial({ map: cloneMap(K.barMap, 5, 1), roughness: 0.7 }),
    timber: mat(0x6b4326, { roughness: 0.9 }),
    trim: mat(0xc8402e, { roughness: 0.7 }),
    bandRed: mat(0x9e3325, { roughness: 0.8 }),
    bandTeal: mat(0x2c6f6a, { roughness: 0.85 }),
    trimY: mat(0xf3e36a, { roughness: 0.8 }),
    steel: mat(0xc4c9cd, { metalness: 0.6, roughness: 0.4 }),
    dark: mat(0x2b2f33, { roughness: 0.6 }),
    vinyl: mat(0x1d4a30, { roughness: 0.75 }),
    porcelain: mat(0xe9eeec, { roughness: 0.35, emissive: 0x0b0d0d }),
    mirror: mat(0x5f8b99, { roughness: 0.1, metalness: 0.75, emissive: 0x0a1418 }),
    bulb: new THREE.MeshBasicMaterial({ color: 0xffe9b8, fog: false }),
    fluoro: new THREE.MeshBasicMaterial({ color: 0xeaf6ff, fog: false }),
    bottleGlass: mat(0xffffff, { roughness: 0.35 }),
  };
  return MATS;
}

/* ------------------------------------------------------------------ *\
   shell builder
\* ------------------------------------------------------------------ */

/**
 * Emit one wall face as segments, leaving a gap at each door.
 * @param {'n'|'s'|'e'|'w'} side
 * @param {number} a  span start (x for n/s, z for e/w)
 * @param {number} b  span end
 * @param {{at:number,w:number}[]} doors
 * @returns {[number,number][]} solid runs
 */
function runs(a, b, doors) {
  const out = [];
  let cur = a;
  const sorted = doors.slice().sort((p, q) => p.at - q.at);
  for (const d of sorted) {
    const g0 = d.at - d.w / 2;
    const g1 = d.at + d.w / 2;
    if (g0 > cur) out.push([cur, g0]);
    cur = Math.max(cur, g1);
  }
  if (cur < b) out.push([cur, b]);
  return out;
}

/**
 * Painted skirt + fascia proud of one wall run. Two small boxes turn a flat
 * cream field into something that reads as a building from 20 m away.
 */
function bands(g, w, d, cx, cz, B, band) {
  const sh = B.skirtH || 0.5;
  const skirt = fx(w + 0.06, sh, d + 0.06, band);
  skirt.position.set(cx, B.floorY + sh / 2, cz);
  g.add(skirt);
  const fascia = fx(w + 0.06, 0.2, d + 0.06, band);
  fascia.position.set(cx, B.floorY + B.h - 0.1, cz);
  g.add(fascia);
}

/**
 * Closed shell with walk-through openings.
 * @param {object} B
 * @param {number} B.x0 inner west face
 * @param {number} B.x1 inner east face
 * @param {number} B.z0 inner south face
 * @param {number} B.z1 inner north face
 * @param {number} B.h  wall height
 * @param {number} B.floorY top of the floor slab
 * @param {{side:'n'|'s'|'e'|'w', at:number, w:number}[]} B.doors
 */
function shell(g, reg, B) {
  const M = mats();
  const { x0, x1, z0, z1, h, doors } = B;
  const hy = B.floorY + h / 2;
  const band = B.band === "teal" ? M.bandTeal : M.bandRed;

  const put = (mesh, minX, maxX, minZ, maxZ) => {
    g.add(mesh);
    reg(minX, maxX, minZ, maxZ, B.floorY, B.floorY + h);
  };

  /**
   * Inner skin — a hair inside the shell, so the room reads warmer than the
   * sunset-lit render outside and back-faces never show. Emitted per solid run
   * so it does NOT paper over the openings.
   */
  const skin = (a, b, px, pz, ry) => {
    if (b - a < 0.02) return;
    const p = new THREE.Mesh(pgeo(b - a, h), M.wallIn);
    p.position.set(px, B.floorY + h / 2, pz);
    p.rotation.y = ry;
    p.receiveShadow = true;
    g.add(p);
  };

  // North (+Z) and south (−Z) faces span the inner x range; corners are closed
  // by the east/west faces, which run the full outer z extent.
  for (const [side, zA, zB, ry] of [
    ["n", z1, z1 + T, Math.PI],
    ["s", z0 - T, z0, 0],
  ]) {
    const ds = doors.filter((d) => d.side === side);
    const inner = side === "n" ? z1 - 0.012 : z0 + 0.012;
    for (const [a, b] of runs(x0, x1, ds)) {
      const m = bx(b - a, h, T, M.wallOut);
      m.position.set((a + b) / 2, hy, (zA + zB) / 2);
      put(m, a, b, zA, zB);
      skin(a, b, (a + b) / 2, inner, ry);
      bands(g, b - a, T, (a + b) / 2, (zA + zB) / 2, B, band);
    }
    for (const d of ds) lintel(g, d.at, (zA + zB) / 2, d.w, h, B.floorY, "x");
  }

  for (const [side, xA, xB, ry] of [
    ["e", x1, x1 + T, -Math.PI / 2],
    ["w", x0 - T, x0, Math.PI / 2],
  ]) {
    const ds = doors.filter((d) => d.side === side);
    const inner = side === "e" ? x1 - 0.012 : x0 + 0.012;
    for (const [a, b] of runs(z0 - T, z1 + T, ds)) {
      const m = bx(T, h, b - a, M.wallOut);
      m.position.set((xA + xB) / 2, hy, (a + b) / 2);
      put(m, xA, xB, a, b);
      bands(g, T, b - a, (xA + xB) / 2, (a + b) / 2, B, band);
      const ca = Math.max(a, z0);
      const cb = Math.min(b, z1);
      if (cb > ca) skin(ca, cb, inner, (ca + cb) / 2, ry);
    }
    for (const d of ds) lintel(g, (xA + xB) / 2, d.at, d.w, h, B.floorY, "z");
  }

  const iw = x1 - x0;
  const id = z1 - z0;

  // Floor + ceiling
  const floor = fx(iw + T * 2, 0.12, id + T * 2, B.tileFloor ? M.tile : M.floorWood);
  floor.position.set((x0 + x1) / 2, B.floorY - 0.06, (z0 + z1) / 2);
  g.add(floor);

  const ceil = fx(iw + T * 2, 0.1, id + T * 2, M.ceiling);
  ceil.position.set((x0 + x1) / 2, B.floorY + h - 0.05, (z0 + z1) / 2);
  g.add(ceil);

  // Rafters under the ceiling — cheap depth cue indoors.
  for (let z = z0 + 0.7; z < z1 - 0.3; z += 1.3) {
    const r = fx(iw, 0.12, 0.14, M.timber);
    r.position.set((x0 + x1) / 2, B.floorY + h - 0.18, z);
    g.add(r);
  }

  return { ceilingY: B.floorY + h - 0.1 };
}

/** Door head + jambs. Visual only — no collider, that is the whole point. */
function lintel(g, cx, cz, w, h, floorY, axis) {
  const M = mats();
  const hh = h - DOOR_H;
  if (hh > 0.05) {
    const head =
      axis === "x" ? bx(w + 0.24, hh, T, M.wallOut) : bx(T, hh, w + 0.24, M.wallOut);
    head.position.set(cx, floorY + DOOR_H + hh / 2, cz);
    g.add(head);
  }
  const wood = M.timber.clone();
  wood.polygonOffset = true;
  wood.polygonOffsetFactor = -2;
  wood.polygonOffsetUnits = -2;
  for (const s of [-1, 1]) {
    // Sit IN the opening wrapping the cut, proud of both wall faces — not on
    // the white wall plane (that z-fought at SLOP IT ON / surf-club door).
    const jamb =
      axis === "x"
        ? fx(0.1, DOOR_H, T + 0.1, wood)
        : fx(T + 0.1, DOOR_H, 0.1, wood);
    jamb.position.set(
      axis === "x" ? cx + s * (w / 2 - 0.05) : cx,
      floorY + DOOR_H / 2,
      axis === "x" ? cz : cz + s * (w / 2 - 0.05)
    );
    g.add(jamb);
  }
}

/** Hip roof + eaves. Sits on the shell, never blocks the doorway. */
function roofOver(g, B, rise, over) {
  const M = mats();
  const w = B.x1 - B.x0 + T * 2;
  const d = B.z1 - B.z0 + T * 2;
  const eave = fx(w + over * 2, 0.16, d + over * 2, M.roof);
  eave.position.set((B.x0 + B.x1) / 2, B.floorY + B.h + 0.08, (B.z0 + B.z1) / 2);
  eave.castShadow = true;
  g.add(eave);
  const r = hipRoof(w + over * 1.4, d + over * 1.4, rise, M.roof);
  r.position.set((B.x0 + B.x1) / 2, B.floorY + B.h + 0.16 + rise / 2, (B.z0 + B.z1) / 2);
  g.add(r);
  return eave;
}

/**
 * Painted board sized to the plane it goes on.
 *
 * `signTex()` in coconutsHelpers is a fixed 256x128 canvas with a fixed 36 px
 * face, so anything longer than about nine characters is clipped and anything
 * on a wide plane is stretched. This keeps that helper's palette and frame but
 * matches the canvas to the board's aspect and shrinks the face to fit.
 */
function board(title, sub, w, h, bg = "#1a120c", fg = "#ffd99a") {
  const cw = 512;
  const ch = Math.max(96, Math.min(384, Math.round((cw * h) / w)));
  const c = cvs(cw, ch);
  const x = c.getContext("2d");
  x.fillStyle = bg;
  x.fillRect(0, 0, cw, ch);
  x.strokeStyle = "#5a3d22";
  x.lineWidth = Math.max(8, ch * 0.07);
  x.strokeRect(x.lineWidth / 2, x.lineWidth / 2, cw - x.lineWidth, ch - x.lineWidth);
  x.textAlign = "center";
  x.textBaseline = "middle";
  const inner = cw - 56;
  const fit = (text, start, family) => {
    let px = start;
    x.font = `bold ${px}px ${family}`;
    while (px > 9 && x.measureText(text).width > inner) {
      px -= 2;
      x.font = `bold ${px}px ${family}`;
    }
    return px;
  };
  x.fillStyle = fg;
  fit(title, Math.round(ch * (sub ? 0.42 : 0.5)), "Georgia, serif");
  x.fillText(title, cw / 2, sub ? ch * 0.38 : ch * 0.5);
  if (sub) {
    x.fillStyle = "#b89a6c";
    fit(sub, Math.round(ch * 0.19), "ui-sans-serif, system-ui, sans-serif");
    x.fillText(sub, cw / 2, ch * 0.72);
  }
  return canvasTex(c, false);
}

/** Wall-mounted sign plane, pushed just off the surface. */
function sign(g, tex, w, h, x, y, z, ry) {
  const p = makeSignPlane(tex, w, h);
  p.position.set(x, y, z);
  p.rotation.y = ry;
  g.add(p);
  return p;
}

/** One warm ceiling lamp per building. Culled by distance in `tick`. */
function ceilingLamp(g, x, y, z, color, intensity, dist) {
  const M = mats();
  const light = new THREE.PointLight(color, intensity, dist, 2);
  light.position.set(x, y, z);
  light.castShadow = false;
  g.add(light);
  const shade = fx(0.42, 0.1, 0.42, M.dark);
  shade.position.set(x, y + 0.16, z);
  g.add(shade);
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), M.bulb);
  b.position.set(x, y, z);
  g.add(b);
  return light;
}

/**
 * Shelf of bottles / zinc tubes along +X, collected as instances.
 *
 * These are the only high-count objects in the module (~150 across the two
 * bars), so they go through a single InstancedMesh per building rather than a
 * mesh and a geometry each.
 */
function bottleRow(out, y, x0, x1, z) {
  const span = x1 - x0;
  let p = 0;
  let i = out.length;
  while (p < span - 0.1) {
    const hgt = 0.22 + ((i * 37) % 17) / 100;
    const r = 0.035 + ((i * 13) % 11) / 700;
    out.push([x0 + p, y + hgt / 2, z, r, hgt, i]);
    p += r * 2.2 + 0.05;
    i++;
  }
}

const BOTTLE_COLS = [0x6fae3a, 0xc23a1f, 0xe6c133, 0x3a86b0, 0x8a4fb0, 0xe8862a, 0x2f9aa8];

/** Build the single InstancedMesh for one building's bottle shelves. */
function flushBottles(g, out) {
  if (!out.length) return;
  const M = mats();
  const im = new THREE.InstancedMesh(cgeo(0.7, 1, 1, 6), M.bottleGlass, out.length);
  const m4 = new THREE.Matrix4();
  const col = new THREE.Color();
  for (let k = 0; k < out.length; k++) {
    const [x, y, z, r, h, i] = out[k];
    m4.makeScale(r, h, r);
    m4.setPosition(x, y, z);
    im.setMatrixAt(k, m4);
    im.setColorAt(k, col.setHex(BOTTLE_COLS[i % BOTTLE_COLS.length]));
  }
  im.instanceMatrix.needsUpdate = true;
  if (im.instanceColor) im.instanceColor.needsUpdate = true;
  im.castShadow = false;
  im.receiveShadow = true;
  g.add(im);
}

/* ------------------------------------------------------------------ *\
   the three buildings
\* ------------------------------------------------------------------ */

/**
 * Surf club — fills the footprint the old solid club shell occupied on the
 * boardwalk (old collider: x −22.4..−13.6, z 12.2..17.4).
 */
function buildSurfClub(reg) {
  const M = mats();
  const g = new THREE.Group();
  g.name = "interiorSurfClub";
  const B = {
    x0: -22.3,
    x1: -13.7,
    z0: 11.2,
    z1: 16.7,
    h: 3.15,
    floorY: 0.05,
    band: "teal",
    // Door is deliberately OFF-CENTRE and wide. Two props from files this
    // module does not own sit on the club's midline: a lamppost at (−18, 19.2)
    // (goldCoast.js) and a PSA kiosk at (−20, 16) (psa.js). A 2.6 m opening at
    // the east end clears both, and stays walkable even if either one moves.
    doors: [{ side: "n", at: -15.9, w: 2.6 }],
  };
  const dx = B.doors[0].at;
  const cx = (B.x0 + B.x1) / 2;
  const cz = (B.z0 + B.z1) / 2;
  const info = shell(g, reg, B);

  roofOver(g, B, 1.5, 0.62);

  // --- verandah on the boardwalk face -------------------------------
  const vz = B.z1 + T + 0.9;
  const deck = fx(B.x1 - B.x0 + 1.2, 0.12, 1.9, M.floorWood);
  deck.position.set(cx, B.floorY - 0.06, vz);
  g.add(deck);
  // Post spacing dodges both the doorway and the lamppost at x = −18.
  for (const px of [B.x0 + 0.15, -19.3, B.x1 - 0.15]) {
    const post = fx(0.16, 2.9, 0.16, M.timber);
    post.position.set(px, B.floorY + 1.45, vz + 0.8);
    g.add(post);
    reg(px - 0.09, px + 0.09, vz + 0.71, vz + 0.89, B.floorY, B.floorY + 2.9);
  }
  const beam = fx(B.x1 - B.x0 + 1.3, 0.2, 0.18, M.timber);
  beam.position.set(cx, B.floorY + 2.98, vz + 0.8);
  g.add(beam);
  const awn = fx(B.x1 - B.x0 + 1.3, 0.1, 2.0, M.trim);
  awn.position.set(cx, B.floorY + 3.06, vz + 0.05);
  g.add(awn);

  // --- exterior signage ---------------------------------------------
  // All signage lives on the long blank run west of the door.
  const fz = B.z1 + T + 0.03;
  sign(g, board("SURF CLUB", "MEMBERS · VISITORS · THE UNZINCED", 4.4, 0.9), 4.4, 0.9, -19.75, B.floorY + 2.72, fz, 0);
  sign(g, awningTex("ENTRY", "MIND THE GLARE"), 1.9, 0.5, dx, B.floorY + 2.5, fz, 0);
  sign(g, awningTex("NO HAT", "NO PLAY"), 1.3, 0.44, -21.4, B.floorY + 1.5, fz, 0);
  sign(g, awningTex("ZINC UP", "OR ZIP IT"), 1.3, 0.44, -19.75, B.floorY + 1.5, fz, 0);
  sign(g, board("PATROL 0600", "UV 14 BY 0900 · SEEK SHADE", 1.7, 0.85), 1.7, 0.85, -18.15, B.floorY + 1.62, fz, 0);
  const roofSign = makeSignPlane(board("SPF 50+", "SINCE THE OZONE WENT", 3.4, 0.85), 3.4, 0.85);
  roofSign.position.set(cx, B.floorY + B.h + 0.95, B.z1 + T + 0.35);
  roofSign.rotation.x = -0.16;
  g.add(roofSign);

  // --- interior: servery counter along the back (south) wall ---------
  const c0 = -21.6;
  const c1 = -15.4;
  const cLen = c1 - c0;
  const cz0 = B.z0 + 0.2;
  const counter = new THREE.Mesh(bgeo(cLen, 1.1, 0.9), [
    M.counterFront,
    M.counterFront,
    M.counterTop,
    M.counterTop,
    M.counterFront,
    M.counterFront,
  ]);
  counter.position.set((c0 + c1) / 2, B.floorY + 0.55, cz0 + 0.45);
  counter.receiveShadow = true;
  g.add(counter);
  reg(c0, c1, cz0, cz0 + 0.9, B.floorY, B.floorY + 1.1, true);

  // back shelving + zinc stock
  const bottles = [];
  for (const sy of [1.15, 1.75]) {
    const sh = fx(cLen - 0.4, 0.06, 0.3, M.timber);
    sh.position.set((c0 + c1) / 2, B.floorY + sy, B.z0 + 0.18);
    g.add(sh);
    bottleRow(bottles, B.floorY + sy + 0.03, c0 + 0.35, c1 - 0.35, B.z0 + 0.18);
  }
  flushBottles(g, bottles);
  sign(g, board("HONOUR BOARD", "MOST BURNT · 1987–2026", 2.1, 1.05), 2.1, 1.05, c0 + 1.1, B.floorY + 2.5, B.z0 + 0.03, 0);
  sign(g, board("SLOP IT ON", "THEN SLOP IT ON AGAIN", 2.2, 0.7), 2.2, 0.7, c1 - 1.0, B.floorY + 2.45, B.z0 + 0.03, 0);

  // stools at the counter
  for (let i = 0; i < 5; i++) {
    const sx = c0 + 0.8 + i * ((cLen - 1.6) / 4);
    const seat = new THREE.Mesh(cgeo(0.22, 0.22, 0.08, 10), M.dark);
    seat.position.set(sx, B.floorY + 0.78, cz0 + 1.42);
    g.add(seat);
    const leg = new THREE.Mesh(cgeo(0.04, 0.05, 0.78, 6), M.steel);
    leg.position.set(sx, B.floorY + 0.39, cz0 + 1.42);
    g.add(leg);
  }

  // lockers down the west wall
  for (let i = 0; i < 4; i++) {
    const lz = 13.5 + i * 0.72;
    const lk = fx(0.6, 1.9, 0.66, M.trimY);
    lk.position.set(B.x0 + 0.3, B.floorY + 0.95, lz);
    g.add(lk);
    const vent = fx(0.02, 0.28, 0.4, M.dark);
    vent.position.set(B.x0 + 0.61, B.floorY + 1.5, lz);
    g.add(vent);
  }
  reg(B.x0, B.x0 + 0.66, 13.14, 16.3, B.floorY, B.floorY + 1.9, true);

  // bench + gear rail down the east wall
  const bench = fx(0.62, 0.1, 2.5, M.timber);
  bench.position.set(B.x1 - 0.34, B.floorY + 0.45, 13.95);
  g.add(bench);
  for (const bz of [12.9, 15.0]) {
    const lg = fx(0.5, 0.45, 0.12, M.timber);
    lg.position.set(B.x1 - 0.34, B.floorY + 0.22, bz);
    g.add(lg);
  }
  reg(B.x1 - 0.7, B.x1, 12.7, 15.2, B.floorY, B.floorY + 0.55, true);
  for (let i = 0; i < 4; i++) {
    const hook = fx(0.1, 0.08, 0.08, M.steel);
    hook.position.set(B.x1 - 0.1, B.floorY + 1.7, 12.9 + i * 0.6);
    g.add(hook);
  }
  sign(g, board("RASHIE HIRE", "$4 · HONESTY BOX", 1.5, 0.75), 1.5, 0.75, B.x1 - 0.02, B.floorY + 2.35, 13.95, -Math.PI / 2);

  // first-aid / zinc station by the door
  const cab = fx(0.5, 0.6, 0.24, M.porcelain);
  cab.position.set(B.x0 + 1.6, B.floorY + 1.9, B.z1 - 0.14);
  g.add(cab);
  const cross = fx(0.3, 0.08, 0.02, M.trim);
  cross.position.set(B.x0 + 1.6, B.floorY + 1.9, B.z1 - 0.26);
  g.add(cross);
  const crossV = fx(0.08, 0.3, 0.02, M.trim);
  crossV.position.set(B.x0 + 1.6, B.floorY + 1.9, B.z1 - 0.26);
  g.add(crossV);

  // ceiling fan (spun in tick) + the one lamp
  const fan = new THREE.Group();
  const hub = new THREE.Mesh(cgeo(0.1, 0.12, 0.14, 8), M.steel);
  fan.add(hub);
  for (let i = 0; i < 4; i++) {
    const bl = fx(1.1, 0.03, 0.2, M.timber);
    bl.position.set(Math.cos((i / 4) * Math.PI * 2) * 0.6, 0, Math.sin((i / 4) * Math.PI * 2) * 0.6);
    bl.rotation.y = -(i / 4) * Math.PI * 2;
    fan.add(bl);
  }
  fan.position.set(cx + 1.8, info.ceilingY - 0.34, cz - 0.3);
  g.add(fan);

  const lamp = ceilingLamp(g, cx - 1.2, info.ceilingY - 0.42, cz, 0xffdca8, 16, 13);

  return {
    id: "surfClub",
    label: "SURF CLUB",
    group: g,
    B,
    center: { x: cx, z: cz },
    ceilingY: info.ceilingY,
    lamp,
    lampBase: 16,
    fan,
    fluoro: null,
    door: { x: dx, z: B.z1 + T / 2 },
  };
}

/** Beach bar behind the esplanade rail — the rail has gaps between posts. */
function buildShadeShack(reg) {
  const M = mats();
  const g = new THREE.Group();
  g.name = "interiorShadeShack";
  const B = {
    x0: 8.6,
    x1: 17.4,
    z0: 22.2,
    z1: 27.6,
    h: 3.0,
    floorY: 0.05,
    band: "red",
    doors: [{ side: "s", at: 13.0, w: 2.2 }],
  };
  const cx = (B.x0 + B.x1) / 2;
  const cz = (B.z0 + B.z1) / 2;
  const info = shell(g, reg, B);
  roofOver(g, B, 1.35, 0.7);

  // --- awning + posts on the beach-facing side ----------------------
  const az = B.z0 - T - 1.0;
  const awn = fx(B.x1 - B.x0 + 1.4, 0.1, 2.2, M.trim);
  awn.position.set(cx, B.floorY + 2.98, az + 0.1);
  awn.rotation.x = 0.05;
  g.add(awn);
  for (const px of [B.x0 + 0.1, cx - 2.4, cx + 2.4, B.x1 - 0.1]) {
    const post = fx(0.16, 3.0, 0.16, M.timber);
    post.position.set(px, B.floorY + 1.5, az - 0.8);
    g.add(post);
    reg(px - 0.09, px + 0.09, az - 0.89, az - 0.71, B.floorY, B.floorY + 3.0);
  }
  // strung bulbs under the awning
  for (let i = 0; i < 7; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), M.bulb);
    b.position.set(B.x0 + 0.7 + i * ((B.x1 - B.x0 - 1.4) / 6), B.floorY + 2.74, az - 0.6);
    g.add(b);
  }

  sign(g, board("THE SHADE SHACK", "OPEN TILL THE UV DROPS", 4.0, 0.7), 4.0, 0.7, cx, B.floorY + 2.62, B.z0 - T - 0.03, Math.PI);
  sign(g, awningTex("SPF 50+", "ON TAP"), 1.7, 0.55, B.x0 + 1.4, B.floorY + 1.75, B.z0 - T - 0.03, Math.PI);
  sign(g, awningTex("NO SHIRT", "NO SHADE"), 1.7, 0.55, B.x1 - 1.4, B.floorY + 1.75, B.z0 - T - 0.03, Math.PI);

  // --- interior bar -------------------------------------------------
  // Counter stops 1.9 m short of the east wall: that gap is the barman's flap,
  // and it is what keeps the strip behind the bar reachable instead of sealed.
  const c0 = B.x0 + 0.5;
  const c1 = B.x1 - 1.9;
  const cLen = c1 - c0;
  const ccx = (c0 + c1) / 2;
  const barZ = 25.5;
  const bar = new THREE.Mesh(bgeo(cLen, 1.12, 0.85), [
    M.counterFront,
    M.counterFront,
    M.counterTop,
    M.counterTop,
    M.counterFront,
    M.counterFront,
  ]);
  bar.position.set(ccx, B.floorY + 0.56, barZ);
  bar.receiveShadow = true;
  g.add(bar);
  reg(c0, c1, barZ - 0.43, barZ + 0.43, B.floorY, B.floorY + 1.12, true);

  // back bar: shelves + bottles + a zinc keg
  const bottles = [];
  for (const sy of [1.2, 1.8]) {
    const sh = fx(cLen - 0.6, 0.06, 0.32, M.timber);
    sh.position.set(ccx, B.floorY + sy, B.z1 - 0.2);
    g.add(sh);
    bottleRow(bottles, B.floorY + sy + 0.03, c0 + 0.5, c1 - 0.5, B.z1 - 0.2);
  }
  flushBottles(g, bottles);
  const keg = new THREE.Mesh(cgeo(0.28, 0.28, 0.8, 12), M.steel);
  keg.position.set(B.x1 - 1.1, B.floorY + 0.4, B.z1 - 0.6);
  g.add(keg);
  const fridge = fx(0.8, 1.6, 0.6, M.steel);
  fridge.position.set(B.x0 + 0.5, B.floorY + 0.8, B.z1 - 0.42);
  g.add(fridge);
  reg(B.x0, B.x0 + 0.95, B.z1 - 0.75, B.z1, B.floorY, B.floorY + 1.6, true);

  sign(g, board("TODAY'S SPECIAL", "ZINC COLADA · $9", 1.9, 0.95), 1.9, 0.95, cx + 2.4, B.floorY + 2.42, B.z1 - 0.02, Math.PI);
  sign(g, board("UV 14", "THAT'S NOT A DRINK", 1.9, 0.7), 1.9, 0.7, cx - 2.4, B.floorY + 2.42, B.z1 - 0.02, Math.PI);

  // stools facing the bar
  for (let i = 0; i < 6; i++) {
    const sx = c0 + 0.7 + i * ((cLen - 1.4) / 5);
    const seat = new THREE.Mesh(cgeo(0.21, 0.21, 0.08, 10), M.vinyl);
    seat.position.set(sx, B.floorY + 0.76, barZ - 1.05);
    g.add(seat);
    const leg = new THREE.Mesh(cgeo(0.04, 0.05, 0.76, 6), M.steel);
    leg.position.set(sx, B.floorY + 0.38, barZ - 1.05);
    g.add(leg);
  }

  // First-aid gurney west of the door; 13.2, 25.4 sits in the bar.
  const bedX = 12.05;
  const bedZ = 23.6;
  const sheet = new THREE.MeshStandardMaterial({ color: 0xf4f6f8, roughness: 0.8, metalness: 0.02 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xc5ced4, roughness: 0.22, metalness: 0.82 });
  const gurney = new THREE.Group();
  gurney.name = "firstAidGurney";
  gurney.position.set(bedX, B.floorY, bedZ);
  const frame = fx(0.64, 0.05, 1.18, chrome);
  frame.position.y = 0.46;
  gurney.add(frame);
  const mattress = fx(0.58, 0.08, 1.12, sheet);
  mattress.position.y = 0.525;
  gurney.add(mattress);
  for (const sx of [-0.26, 0.26]) {
    for (const sz of [-0.48, 0.48]) {
      const leg = new THREE.Mesh(cgeo(0.02, 0.026, 0.46, 8), chrome);
      leg.position.set(sx, 0.23, sz);
      gurney.add(leg);
      const wheel = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), chrome);
      wheel.position.set(sx, 0.035, sz);
      gurney.add(wheel);
    }
  }
  for (const sx of [-0.33, 0.33]) {
    const rail = new THREE.Mesh(cgeo(0.014, 0.014, 1.02, 8), chrome);
    rail.rotation.x = Math.PI / 2;
    rail.position.set(sx, 0.68, 0);
    gurney.add(rail);
    for (const sz of [-0.4, 0.4]) {
      const post = new THREE.Mesh(cgeo(0.01, 0.01, 0.2, 6), chrome);
      post.position.set(sx, 0.58, sz);
      gurney.add(post);
    }
  }
  const pole = new THREE.Mesh(cgeo(0.014, 0.014, 1.52, 8), chrome);
  pole.position.set(-0.26, 0.78, 0.52);
  gurney.add(pole);
  const arm = fx(0.2, 0.014, 0.014, chrome);
  arm.position.set(-0.16, 1.52, 0.52);
  gurney.add(arm);
  const bag = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), M.bottleGlass);
  bag.position.set(-0.08, 1.42, 0.52);
  gurney.add(bag);
  g.add(gurney);
  reg(bedX - 0.36, bedX + 0.36, bedZ - 0.64, bedZ + 0.64, B.floorY, B.floorY + 0.62, true);
  sign(
    g,
    board("FIRST AID", "", 0.78, 0.26, "#8a1c22", "#f7efe6"),
    0.78,
    0.26,
    bedX,
    B.floorY + 1.12,
    bedZ - 0.66,
    Math.PI
  );

  // corner tape deck + crate
  const deck = fx(0.7, 0.34, 0.42, M.dark);
  deck.position.set(B.x1 - 0.6, B.floorY + 0.62, B.z0 + 0.5);
  g.add(deck);
  const crate = fx(0.7, 0.45, 0.45, M.timber);
  crate.position.set(B.x1 - 0.6, B.floorY + 0.22, B.z0 + 0.5);
  g.add(crate);
  reg(B.x1 - 1.0, B.x1, B.z0, B.z0 + 0.78, B.floorY, B.floorY + 0.9, true);

  const lamp = ceilingLamp(g, cx, info.ceilingY - 0.4, cz + 0.4, 0xffce92, 15, 12);

  return {
    id: "shadeShack",
    label: "THE SHADE SHACK",
    group: g,
    B,
    center: { x: cx, z: cz },
    ceilingY: info.ceilingY,
    lamp,
    lampBase: 15,
    fan: null,
    fluoro: null,
    door: { x: 13.0, z: B.z0 - T / 2 },
  };
}

/** Three dunny stalls on the sheilas east wall. Last one is a fake wall into the void. */
function addDunnyStalls(g, reg, B, M) {
  const n = 3;
  const depth = 1.08;
  const wide = 0.84;
  const gap = 0.04;
  const h = 1.92;
  const thick = 0.05;
  const x1 = B.x1;
  const xDoor = x1 - depth;
  const z0 = B.z0 + 0.3;
  let secret = null;

  for (let i = 0; i < n; i++) {
    const za = z0 + i * (wide + gap);
    const zb = za + wide;
    const zc = (za + zb) * 0.5;
    const last = i === n - 1;
    const stall = new THREE.Group();
    stall.name = last ? "voidStall" : `dunny-${i}`;
    g.add(stall);

    const south = fx(depth, h, thick, M.tileWall);
    south.position.set(x1 - depth / 2, B.floorY + h / 2, za);
    stall.add(south);
    reg(xDoor, x1, za - thick / 2, za + thick / 2, B.floorY, B.floorY + h);

    const north = fx(depth, h, thick, M.tileWall);
    north.position.set(x1 - depth / 2, B.floorY + h / 2, zb);
    stall.add(north);
    reg(xDoor, x1, zb - thick / 2, zb + thick / 2, B.floorY, B.floorY + h);

    const doorW = last ? 0.64 : 0.5;
    const wing = Math.max(0.08, (wide - doorW) / 2);
    for (const s of [-1, 1]) {
      const w = fx(0.05, h, wing, M.tileWall);
      w.position.set(xDoor, B.floorY + h / 2, zc + s * (doorW / 2 + wing / 2));
      stall.add(w);
      if (!last) {
        const zA = s < 0 ? za : zc + doorW / 2;
        const zB = s < 0 ? zc - doorW / 2 : zb;
        if (zB > zA + 0.04) reg(xDoor - 0.04, xDoor + 0.04, zA, zB, B.floorY, B.floorY + h);
      }
    }
    const leafW = doorW * (last ? 0.7 : 0.92);
    const leaf = fx(0.04, h - 0.22, leafW, M.timber);
    if (last) {
      leaf.position.set(xDoor - 0.03, B.floorY + (h - 0.22) / 2 + 0.05, zc - doorW * 0.1);
      leaf.rotation.y = 0.62;
    } else {
      leaf.position.set(xDoor + 0.02, B.floorY + (h - 0.22) / 2 + 0.05, zc);
    }
    stall.add(leaf);
    const head = fx(0.05, 0.16, wide, M.tileWall);
    head.position.set(xDoor, B.floorY + h - 0.08, zc);
    stall.add(head);

    if (last) {
      stall.userData.portal = "void";
      stall.userData.kind = "stall";
      const fake = fx(0.06, h - 0.38, wide - 0.14, M.dark);
      fake.position.set(x1 - 0.18, B.floorY + (h - 0.38) / 2 + 0.04, zc - 0.06);
      stall.add(fake);
      const hole = fx(
        0.05,
        h - 0.55,
        0.4,
        new THREE.MeshBasicMaterial({ color: 0x050308, fog: false })
      );
      hole.position.set(x1 - 0.12, B.floorY + 0.98, zc + 0.14);
      stall.add(hole);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), M.bulb);
      bulb.position.set(x1 - 0.24, B.floorY + 1.52, zc + 0.16);
      stall.add(bulb);
      const lamp = new THREE.PointLight(0xffb060, 2.35, 3.5, 2);
      lamp.position.copy(bulb.position);
      lamp.castShadow = false;
      stall.add(lamp);
      const tag = new THREE.Mesh(
        pgeo(0.38, 0.2),
        new THREE.MeshBasicMaterial({
          map: board("OUT OF ORDER", "SINCE '94", 0.38, 0.2),
          transparent: true,
        })
      );
      tag.position.set(xDoor - 0.05, B.floorY + 1.28, zc - 0.12);
      tag.rotation.y = -Math.PI / 2;
      stall.add(tag);
      secret = {
        x: xDoor + 0.38,
        y: 0,
        z: zc,
        radius: 1.22,
        portal: "void",
        lamp,
        exit: { x: xDoor - 0.5, y: 0, z: zc },
        mesh: stall,
      };
    } else {
      const pan = new THREE.Mesh(cgeo(0.16, 0.14, 0.18, 10), M.porcelain);
      pan.position.set(x1 - 0.28, B.floorY + 0.2, zc);
      stall.add(pan);
      const tank = fx(0.16, 0.32, 0.38, M.porcelain);
      tank.position.set(x1 - 0.18, B.floorY + 0.72, zc);
      stall.add(tank);
    }
  }
  return secret;
}

/** Public change rooms / dunny block — two doors, central partition. */
function buildChangeRooms(reg) {
  const M = mats();
  const g = new THREE.Group();
  g.name = "interiorChangeRooms";
  // West end of the esplanade, behind the rail — clear of the club so both
  // read as separate shopfronts from the boardwalk.
  const B = {
    x0: -30.0,
    x1: -23.0,
    z0: 22.4,
    z1: 27.0,
    h: 2.85,
    floorY: 0.05,
    tileFloor: true,
    band: "teal",
    skirtH: 1.15,
    doors: [
      { side: "s", at: -28.2, w: 1.6 },
      { side: "s", at: -24.8, w: 1.6 },
    ],
  };
  const cx = (B.x0 + B.x1) / 2;
  const cz = (B.z0 + B.z1) / 2;
  const dBlokes = B.doors[0].at;
  const dSheilas = B.doors[1].at;
  const info = shell(g, reg, B);
  roofOver(g, B, 1.1, 0.5);

  // --- central partition, stops short of the south wall -------------
  const px = cx;
  const pz0 = 24.2;
  const part = fx(0.2, B.h, B.z1 + T - pz0, M.wallOut);
  part.position.set(px, B.floorY + B.h / 2, (pz0 + B.z1 + T) / 2);
  g.add(part);
  reg(px - 0.1, px + 0.1, pz0, B.z1 + T, B.floorY, B.floorY + B.h);

  // --- signage -------------------------------------------------------
  const sz = B.z0 - T - 0.03;
  sign(g, board("CHANGE ROOMS", "RINSE · ZINC · REPEAT", 3.2, 0.5), 3.2, 0.5, cx, B.floorY + 2.62, sz, Math.PI);
  sign(g, awningTex("BLOKES", ""), 1.1, 0.3, dBlokes, B.floorY + 2.2, sz, Math.PI);
  sign(g, awningTex("SHEILAS", ""), 1.1, 0.3, dSheilas, B.floorY + 2.2, sz, Math.PI);
  // Interior notices go on the partition faces — the back wall is all shower
  // recess and basin bench.
  sign(g, board("SHOWER FIRST", "SAND IS NOT SUNSCREEN", 1.7, 0.6), 1.7, 0.6, cx - 0.11, B.floorY + 1.85, 25.2, -Math.PI / 2);
  sign(g, board("DUNNY", "OUT OF ORDER SINCE '94", 1.7, 0.6), 1.7, 0.6, cx + 0.11, B.floorY + 1.85, 25.2, Math.PI / 2);

  // --- fittings ------------------------------------------------------
  // West bench stays. East wall is the dunny row (last stall is the void door).
  {
    const wx = B.x0 + 0.3;
    const bench = fx(0.56, 0.09, 2.3, M.timber);
    bench.position.set(wx, B.floorY + 0.44, 24.5);
    g.add(bench);
    for (const bz of [23.5, 25.5]) {
      const lg = fx(0.44, 0.44, 0.1, M.timber);
      lg.position.set(wx, B.floorY + 0.22, bz);
      g.add(lg);
    }
    // Bench stops at z 25.7 — past that the walkway must stay clear so the
    // rear of each half (showers / basins) is reachable around the basin bench.
    reg(B.x0, B.x0 + 0.62, 23.3, 25.7, B.floorY, B.floorY + 0.55, true);
    for (let i = 0; i < 4; i++) {
      const hook = fx(0.09, 0.07, 0.07, M.steel);
      hook.position.set(B.x0 + 0.08, B.floorY + 1.55, 23.5 + i * 0.7);
      g.add(hook);
    }
  }

  const voidStall = addDunnyStalls(g, reg, B, M);

  // basin benches either side of the partition, with mirrors
  for (const s of [-1, 1]) {
    const bxp = px + s * 0.75;
    const basin = fx(1.1, 0.14, 0.5, M.porcelain);
    basin.position.set(bxp, B.floorY + 0.86, B.z1 - 0.36);
    g.add(basin);
    for (const o of [-0.26, 0.26]) {
      const bowl = new THREE.Mesh(cgeo(0.15, 0.11, 0.13, 10), M.porcelain);
      bowl.position.set(bxp + o, B.floorY + 0.9, B.z1 - 0.36);
      g.add(bowl);
      const tap = new THREE.Mesh(cgeo(0.02, 0.02, 0.18, 6), M.steel);
      tap.position.set(bxp + o, B.floorY + 1.02, B.z1 - 0.2);
      g.add(tap);
    }
    const mir = new THREE.Mesh(pgeo(1.15, 0.7), M.mirror);
    mir.position.set(bxp, B.floorY + 1.6, B.z1 - 0.02);
    mir.rotation.y = Math.PI;
    g.add(mir);
    reg(bxp - 0.6, bxp + 0.6, B.z1 - 0.62, B.z1, B.floorY, B.floorY + 1.0, true);

    // shower head + tiled recess on the outer side
    const sx = px + s * 2.5;
    const rec = fx(1.1, 2.2, 0.06, M.tileWall);
    rec.position.set(sx, B.floorY + 1.1, B.z1 - 0.05);
    g.add(rec);
    const arm = new THREE.Mesh(cgeo(0.025, 0.025, 0.34, 6), M.steel);
    arm.rotation.x = Math.PI / 2;
    arm.position.set(sx, B.floorY + 2.05, B.z1 - 0.22);
    g.add(arm);
    const head = new THREE.Mesh(cgeo(0.11, 0.05, 0.08, 10), M.steel);
    head.position.set(sx, B.floorY + 1.98, B.z1 - 0.38);
    g.add(head);
    // zinc dispenser by the door
    const disp = fx(0.22, 0.34, 0.14, M.trimY);
    disp.position.set(px + s * 1.7, B.floorY + 1.35, B.z0 + 0.09);
    g.add(disp);
  }

  // floor drain
  const drain = new THREE.Mesh(cgeo(0.16, 0.16, 0.02, 10), M.steel);
  drain.position.set(cx, B.floorY + 0.01, cz + 0.4);
  g.add(drain);

  // fluoro batten (flickers in tick) + the one lamp
  const tube = new THREE.Mesh(bgeo(3.0, 0.09, 0.13), M.fluoro.clone());
  tube.position.set(cx, info.ceilingY - 0.16, cz);
  g.add(tube);
  const lamp = ceilingLamp(g, cx, info.ceilingY - 0.3, cz, 0xcfe6f2, 9, 11);

  return {
    id: "changeRooms",
    label: "CHANGE ROOMS",
    group: g,
    B,
    center: { x: cx, z: cz },
    ceilingY: info.ceilingY,
    lamp,
    lampBase: 9,
    fan: null,
    fluoro: tube,
    door: { x: dBlokes, z: B.z0 - T / 2 },
    voidStall,
    voidLamp: voidStall?.lamp || null,
  };
}

/* ------------------------------------------------------------------ *\
   public API
\* ------------------------------------------------------------------ */

/**
 * Spawn the enterable buildings and register their colliders.
 *
 * @param {THREE.Scene} scene
 * @param {{ addCollider?: Function, add?: Function, COL?: any[] }} colliders
 *        Same shape `createColliders()` returns (`src/input/player.js`).
 * @returns {{
 *   buildings: any[],
 *   tick(t: number, playerPos?: {x:number,y?:number,z:number}): void,
 *   isIndoors(pos: {x:number,z:number}): any,
 *   adjustCamera(camera: THREE.Camera, player: {pos:THREE.Vector3}): void,
 *   blockers: any[],
 * }}
 */
export function spawnInteriors(scene, colliders) {
  const addCollider =
    (colliders && (colliders.addCollider || colliders.add)) ||
    ((minX, maxX, minZ, maxZ) => {
      colliders?.COL?.push({ minX, maxX, minZ, maxZ });
    });

  /** Camera-occluding boxes: walls and tall fittings, with a height band. */
  const blockers = [];
  const reg = (minX, maxX, minZ, maxZ, y0, y1, softCam) => {
    addCollider(minX, maxX, minZ, maxZ);
    if (!softCam) blockers.push({ minX, maxX, minZ, maxZ, y0: y0 ?? 0, y1: y1 ?? 3.2 });
  };

  const buildings = [
    buildSurfClub(reg),
    buildShadeShack(reg),
    buildChangeRooms(reg),
    buildWisdomHouse(reg),
    buildLibrary(reg),
    buildVoidCave(reg),
  ];
  for (const b of buildings) scene.add(b.group);

  // Roofs occlude the camera from above too — one flat blocker per building.
  for (const b of buildings) {
    blockers.push({
      minX: b.B.x0 - T,
      maxX: b.B.x1 + T,
      minZ: b.B.z0 - T,
      maxZ: b.B.z1 + T,
      y0: b.ceilingY,
      y1: b.ceilingY + 2.4,
      roof: true,
    });
  }

  const _v = new THREE.Vector3();
  const _chest = new THREE.Vector3();

  /** Shell box grown by the player radius, so a body in a doorway counts. */
  function inside(b, x, z) {
    if (typeof b.contains === "function") return b.contains(x, z);
    return (
      x > b.B.x0 - PLAYER_R &&
      x < b.B.x1 + PLAYER_R &&
      z > b.B.z0 - PLAYER_R &&
      z < b.B.z1 + PLAYER_R
    );
  }

  function isIndoors(pos) {
    if (!pos) return null;
    for (const b of buildings) if (inside(b, pos.x, pos.z)) return b;
    return null;
  }

  /**
   * Slab-method ray/AABB: first t in (0,1] at which the segment enters a
   * blocker expanded by the camera probe radius. Returns 1 when nothing is hit.
   */
  function firstHit(ox, oy, oz, dx, dy, dz) {
    let best = 1;
    for (let i = 0; i < blockers.length; i++) {
      const c = blockers[i];
      let t0 = 0;
      let t1 = best;
      // x slab
      const minX = c.minX - CAM_R;
      const maxX = c.maxX + CAM_R;
      if (Math.abs(dx) < 1e-9) {
        if (ox < minX || ox > maxX) continue;
      } else {
        const inv = 1 / dx;
        let a = (minX - ox) * inv;
        let b = (maxX - ox) * inv;
        if (a > b) {
          const t = a;
          a = b;
          b = t;
        }
        if (a > t0) t0 = a;
        if (b < t1) t1 = b;
        if (t0 > t1) continue;
      }
      // z slab
      const minZ = c.minZ - CAM_R;
      const maxZ = c.maxZ + CAM_R;
      if (Math.abs(dz) < 1e-9) {
        if (oz < minZ || oz > maxZ) continue;
      } else {
        const inv = 1 / dz;
        let a = (minZ - oz) * inv;
        let b = (maxZ - oz) * inv;
        if (a > b) {
          const t = a;
          a = b;
          b = t;
        }
        if (a > t0) t0 = a;
        if (b < t1) t1 = b;
        if (t0 > t1) continue;
      }
      // y slab
      const minY = c.y0 - 0.06;
      const maxY = c.y1 + 0.06;
      if (Math.abs(dy) < 1e-9) {
        if (oy < minY || oy > maxY) continue;
      } else {
        const inv = 1 / dy;
        let a = (minY - oy) * inv;
        let b = (maxY - oy) * inv;
        if (a > b) {
          const t = a;
          a = b;
          b = t;
        }
        if (a > t0) t0 = a;
        if (b < t1) t1 = b;
        if (t0 > t1) continue;
      }
      if (t1 < 0) continue;
      const enter = Math.max(0, t0);
      if (enter < best) best = enter;
    }
    return best;
  }

  /**
   * Post-process the follow camera so it never sits through a wall or on the
   * roof. Call AFTER `updateFollowCam(camera, player, dt)` each frame.
   */
  function adjustCamera(camera, player) {
    const p = player.pos;
    _chest.set(p.x, p.y + 1.35, p.z);
    _v.copy(camera.position).sub(_chest);
    const dist = _v.length();
    if (dist < 1e-4) return;

    const here = isIndoors(p);
    if (!here) {
      // Cheap reject: nothing within a camera boom of the player.
      let near = false;
      for (const b of buildings) {
        const dx = Math.max(b.B.x0 - 6 - p.x, 0, p.x - (b.B.x1 + 6));
        const dz = Math.max(b.B.z0 - 6 - p.z, 0, p.z - (b.B.z1 + 6));
        if (dx === 0 && dz === 0) {
          near = true;
          break;
        }
      }
      if (!near) return;
    }

    // Indoors, shorten the boom before testing: a 4.2 m third-person boom is
    // longer than most of these rooms, so without this the occlusion pull-in
    // would be doing all the work every frame and snapping hard.
    if (here && dist > INDOOR_BOOM) {
      _v.multiplyScalar(INDOOR_BOOM / dist);
      camera.position.copy(_chest).add(_v);
    }
    const d2 = _v.length();
    const hit = firstHit(_chest.x, _chest.y, _chest.z, _v.x, _v.y, _v.z);
    if (hit < 1) {
      const tMin = Math.min(1, CAM_MIN / d2);
      const t = Math.max(tMin, hit - 0.02 / d2);
      camera.position.set(_chest.x + _v.x * t, _chest.y + _v.y * t, _chest.z + _v.z * t);
    }
    if (here && !(here.pit && player.pos.y < -0.4) && player.pos.y > -2) {
      const capY = here.ceilingY - 0.28;
      if (camera.position.y > capY) camera.position.y = capY;
      const fl = here.B.floorY + 0.55;
      if (camera.position.y < fl) camera.position.y = fl;
    }
  }

  let occupied = null;

  function tick(t, playerPos) {
    for (const b of buildings) {
      if (b.fan) b.fan.rotation.y = t * 2.6;
      b.tick?.(t, playerPos, 1 / 60);
    }
    if (!playerPos) return;
    occupied = isIndoors(playerPos);
    for (const b of buildings) {
      const dx = playerPos.x - b.center.x;
      const dz = playerPos.z - b.center.z;
      const d2 = dx * dx + dz * dz;
      // Cull the lamp well outside its own falloff — saves the light loop on iOS.
      const on = d2 < 26 * 26;
      if (b.lamp.visible !== on) b.lamp.visible = on;
      if (b.voidLamp && b.voidLamp.visible !== on) b.voidLamp.visible = on;
      if (!on) continue;
      let k = 1;
      if (b.fluoro) {
        // tired fluoro: mostly on, occasional stutter
        const n = Math.sin(t * 27.3) * Math.sin(t * 8.1 + 1.7);
        k = n > 0.86 ? 0.35 : 1;
        b.fluoro.material.color.setHex(k > 0.6 ? 0xeaf6ff : 0x59666e);
      }
      b.lamp.intensity = b.lampBase * k;
    }
  }

  return {
    buildings,
    blockers,
    tick,
    isIndoors,
    adjustCamera,
    /** Building the player is standing in, as of the last `tick`. */
    get occupied() {
      return occupied;
    },
  };
}

export default spawnInteriors;
