/**
 * Finished plein-air canvases sat on the sand beside the easel.
 * Click/tap via `artist.tryPickup(raycaster)` (or the canvas listener in artist.js).
 */
import * as THREE from "three";

const CANVAS_W = 0.82;
const CANVAS_H = 0.6;

export function clonePaintCanvas(src) {
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  const ctx = c.getContext("2d");
  ctx.drawImage(src, 0, 0);
  return c;
}

export function makeFramedPainting(sourceCanvas) {
  const canvas = clonePaintCanvas(sourceCanvas);
  const g = new THREE.Group();
  g.name = "finished-painting";
  g.userData.kind = "finished-painting";
  g.userData.canvas = canvas;
  g.userData.paintTarget = false;

  const wood = new THREE.MeshStandardMaterial({ color: 0x5a3a22, roughness: 0.84 });
  const stakeM = new THREE.MeshStandardMaterial({ color: 0x4a3218, roughness: 0.9 });
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.flipY = true;
  tex.needsUpdate = true;

  const frame = new THREE.Mesh(new THREE.BoxGeometry(CANVAS_W + 0.08, CANVAS_H + 0.08, 0.032), wood);
  frame.castShadow = true;
  frame.receiveShadow = true;
  const linen = new THREE.Mesh(
    new THREE.PlaneGeometry(CANVAS_W, CANVAS_H),
    new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
  );
  linen.position.z = 0.02;
  const stake = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.55, 0.03), stakeM);
  stake.position.y = -0.52;
  stake.castShadow = true;
  g.add(frame, linen, stake);
  g.position.y = 0.7;
  g.rotation.x = -0.16;

  for (const m of [g, frame, linen, stake]) {
    m.userData.kind = "finished-painting";
    m.userData.canvas = canvas;
    m.userData.paintTarget = false;
  }
  g.userData.tex = tex;
  g.userData.linen = linen;
  return { group: g, canvas, tex, linen, frame, stake };
}

export function downloadPainting(canvas, filename = "painting-aus101.png") {
  if (!canvas || typeof document === "undefined") return;
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function disposeFramedPainting(item) {
  if (!item) return;
  item.group.removeFromParent();
  item.tex?.dispose();
  item.linen?.material?.dispose();
  item.frame?.material?.dispose();
  item.stake?.material?.dispose();
  item.linen?.geometry?.dispose();
  item.frame?.geometry?.dispose();
  item.stake?.geometry?.dispose();
}
