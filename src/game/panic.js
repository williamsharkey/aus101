/**
 * After punch/laser: civilians scream, run, and cops close in.
 */
import * as THREE from "three";

const FLEE = 6.2;
const COP_SPEED = 7.4;

function away(from, pos, out) {
  out.set(pos.x - from.x, 0, pos.z - from.z);
  if (out.lengthSq() < 0.01) out.set(Math.random() - 0.5, 0, Math.random() - 0.5);
  out.normalize();
  return out;
}

function makeCop() {
  const g = new THREE.Group();
  const blue = new THREE.MeshStandardMaterial({ color: 0x1e3a6e, roughness: 0.7 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xc9a07a, roughness: 0.65 });
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.5, 0.18), blue);
  torso.position.y = 1.1;
  g.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), skin);
  head.position.y = 1.48;
  g.add(head);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.14, 0.08, 10), blue);
  cap.position.y = 1.6;
  g.add(cap);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 0.08), new THREE.MeshStandardMaterial({ color: 0x111 }));
  visor.position.set(0, 1.56, 0.1);
  g.add(visor);
  for (const s of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.1), blue);
    leg.position.set(s * 0.08, 0.35, 0);
    g.add(leg);
  }
  g.userData.kind = "cop";
  return g;
}

export function createPanic({ scene, cast, play }) {
  let on = false;
  const _d = new THREE.Vector3();
  const cops = [];
  let screamed = false;

  function trigger(from) {
    if (on) return;
    on = true;
    if (!screamed) {
      screamed = true;
      try {
        play?.("panic_01");
        setTimeout(() => play?.("panic_02"), 400);
        setTimeout(() => play?.("chase_01"), 900);
      } catch {
        /* vo optional */
      }
    }
    for (const npc of cast) {
      const m = npc.mesh;
      if (!m || npc.kind === "gull") continue;
      away(from, m.position, _d);
      m.userData.flee = { x: _d.x, z: _d.z, spd: FLEE * (0.85 + Math.random() * 0.35) };
    }
    for (let i = 0; i < 4; i++) {
      const c = makeCop();
      const a = (i / 4) * Math.PI * 2 + 0.4;
      c.position.set(from.x + Math.cos(a) * 16, 0, from.z + Math.sin(a) * 16);
      scene.add(c);
      cops.push(c);
    }
  }

  function tick(dt, playerPos) {
    if (!on || !(dt > 0)) return;
    for (const npc of cast) {
      const m = npc.mesh;
      const f = m?.userData?.flee;
      if (!f) continue;
      m.position.x += f.x * f.spd * dt;
      m.position.z += f.z * f.spd * dt;
      m.rotation.y = Math.atan2(f.x, f.z);
      m.position.y = Math.abs(Math.sin(performance.now() * 0.02 + m.id)) * 0.08;
    }
    for (const c of cops) {
      const dx = playerPos.x - c.position.x;
      const dz = playerPos.z - c.position.z;
      const d = Math.hypot(dx, dz) || 1;
      c.position.x += (dx / d) * COP_SPEED * dt;
      c.position.z += (dz / d) * COP_SPEED * dt;
      c.rotation.y = Math.atan2(dx, dz);
      c.position.y = Math.abs(Math.sin(performance.now() * 0.018 + c.id)) * 0.07;
    }
  }

  return { trigger, tick, get active() { return on; } };
}
