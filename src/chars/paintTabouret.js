/**
 * Physical paint kit next to the easel: 8 tubes, 10 dimples, knife, water, spare brush.
 */
import * as THREE from "three";
import { TUBES } from "../paint/studio.js";

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.08, ...extra });
}

export function makePaintTabouret() {
  const g = new THREE.Group();
  g.name = "paint-tabouret";

  const board = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.028, 0.28), std(0x6a4a28, { roughness: 0.88 }));
  board.position.y = 0.82;
  g.add(board);
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.82, 8), std(0x4a3218, { roughness: 0.9 }));
  leg.position.y = 0.41;
  g.add(leg);

  const wells = [];
  for (let i = 0; i < 10; i++) {
    const col = i < 5 ? i : i - 5;
    const row = i < 5 ? 0 : 1;
    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.02, 0.012, 10),
      std(0xe8e0d0, { roughness: 0.55 })
    );
    cup.position.set(-0.16 + col * 0.08, 0.842, -0.06 + row * 0.08);
    g.add(cup);
    const blob = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xf4efe4, roughness: 0.45, metalness: 0.05 })
    );
    blob.position.copy(cup.position);
    blob.position.y += 0.01;
    blob.scale.setScalar(0.2);
    g.add(blob);
    wells.push({ cup, blob });
  }

  const tubes = [];
  TUBES.forEach((t, i) => {
    const tube = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.014, 0.09, 8),
      std(t.rgb[0] * 65536 + t.rgb[1] * 256 + t.rgb[2], { roughness: 0.5 })
    );
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.018, 8), std(0x222));
    cap.position.y = 0.052;
    tube.add(body, cap);
    tube.position.set(-0.16 + (i % 8) * 0.046, 0.9, 0.1);
    tube.rotation.z = 0.4;
    g.add(tube);
    tubes.push(tube);
  });
  // tube colors as proper hex
  TUBES.forEach((t, i) => {
    const m = tubes[i].children[0].material;
    m.color.setRGB(t.rgb[0] / 255, t.rgb[1] / 255, t.rgb[2] / 255);
  });

  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.07, 12), std(0xc8d0d4, { metalness: 0.4, roughness: 0.35 }));
  cup.position.set(0.16, 0.87, 0.08);
  g.add(cup);
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(0.032, 0.032, 0.02, 12),
    new THREE.MeshStandardMaterial({ color: 0x7ec8c8, transparent: true, opacity: 0.45, roughness: 0.2 })
  );
  water.position.set(0.16, 0.88, 0.08);
  g.add(water);

  const knife = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.07), std(0x3a2a18));
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.002, 0.08), std(0xc0c4c8, { metalness: 0.7, roughness: 0.25 }));
  blade.position.z = 0.07;
  knife.add(handle, blade);
  knife.position.set(0.12, 0.84, -0.08);
  knife.rotation.y = 0.4;
  g.add(knife);

  const spare = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.012, 0.16, 8), std(0x5a3a1a));
  spare.rotation.x = Math.PI / 2;
  spare.position.set(-0.18, 0.84, -0.12);
  g.add(spare);

  g.position.set(0.62, 0, 0.15);
  return { group: g, wells, tubes, cup, knife, spare };
}

export function syncWells(tab, studio) {
  for (let i = 0; i < tab.wells.length; i++) {
    const w = studio.wells[i];
    const blob = tab.wells[i].blob;
    if (w.vol < 0.15) {
      blob.scale.setScalar(0.15);
      blob.material.color.setHex(0xf4efe4);
    } else {
      const rgb = studio.rgbOfWell(i);
      blob.material.color.setRGB(rgb.r / 255, rgb.g / 255, rgb.b / 255);
      const s = 0.45 + (w.vol / 20) * 1.1;
      blob.scale.setScalar(s);
    }
  }
}
