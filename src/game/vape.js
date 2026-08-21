/**
 * 34% of beach adults vape. ~10% of their time is walk / buy / return.
 * Smoke puffs while they hit the cart.
 */
import * as THREE from "three";
import { FLAVORS, CLERK_LINES } from "../world/vapeShop.js";

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

function dist(a, b) {
  return Math.hypot((a.x ?? a.position?.x) - (b.x ?? 0), (a.z ?? a.position?.z) - (b.z ?? 0));
}

function makePuff() {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 6, 5),
    new THREE.MeshBasicMaterial({ color: 0xd8e8e8, transparent: true, opacity: 0.35, depthWrite: false })
  );
  m.visible = false;
  return m;
}

export function createVapeSim({ shop, cast, play, scene }) {
  const counter = shop?.counter || { x: 8, z: 16 };
  const vapers = [];
  const puffs = [];
  for (let i = 0; i < 24; i++) {
    const p = makePuff();
    scene?.add(p);
    puffs.push({ mesh: p, age: 99, vx: 0, vy: 0, vz: 0 });
  }
  let puffI = 0;
  let clerkAt = 0;

  const adults = (cast || []).filter((n) => {
    const k = n.kind || n.mesh?.userData?.kind;
    const age = n.ageBand || n.mesh?.userData?.ageBand;
    if (age === "child" || k === "gull" || k === "kid") return false;
    if (k === "cop" || k === "t101") return false;
    return !!n.mesh;
  });
  for (const n of adults) {
    if (Math.random() > 0.34) continue;
    const mesh = n.mesh;
    if (!mesh.userData.home) {
      mesh.userData.home = { x: mesh.position.x, z: mesh.position.z, yaw: mesh.rotation.y };
    }
    vapers.push({
      mesh,
      flavor: pick(FLAVORS),
      cart: 0.4 + Math.random() * 0.6,
      state: "hang",
      t: Math.random() * 20,
      next: 8 + Math.random() * 22,
    });
  }

  function emit(x, y, z) {
    const p = puffs[puffI++ % puffs.length];
    p.mesh.position.set(x, y, z);
    p.mesh.scale.setScalar(0.6);
    p.mesh.visible = true;
    p.mesh.material.opacity = 0.4;
    p.age = 0;
    p.vx = (Math.random() - 0.5) * 0.15;
    p.vy = 0.45 + Math.random() * 0.25;
    p.vz = (Math.random() - 0.5) * 0.15;
  }

  function walkToward(mesh, tx, tz, dt, spd = 1.35) {
    const dx = tx - mesh.position.x;
    const dz = tz - mesh.position.z;
    const d = Math.hypot(dx, dz) || 1;
    if (d < 0.45) return true;
    mesh.position.x += (dx / d) * spd * dt;
    mesh.position.z += (dz / d) * spd * dt;
    mesh.rotation.y = Math.atan2(dx, dz);
    return false;
  }

  return {
    tick(dt, t, playerPos) {
      const h = Math.min(dt, 0.05);
      for (const p of puffs) {
        if (p.age > 1.6) {
          p.mesh.visible = false;
          continue;
        }
        p.age += h;
        p.mesh.position.x += p.vx * h;
        p.mesh.position.y += p.vy * h;
        p.mesh.position.z += p.vz * h;
        p.mesh.scale.multiplyScalar(1 + h * 1.2);
        p.mesh.material.opacity = Math.max(0, 0.4 * (1 - p.age / 1.6));
      }

      const clerk = shop?.clerk;
      if (clerk && playerPos && dist(playerPos, shop.shop) < 4.2 && t > clerkAt) {
        clerkAt = t + 7 + Math.random() * 6;
        play?.(pick(CLERK_LINES), { gain: 0.85, pos: shop.shop });
      }

      for (const v of vapers) {
        const m = v.mesh;
        if (m.userData.combatDown || m.userData.flee) continue;
        v.t += h;
        const home = m.userData.home;

        if (v.state === "hang") {
          if (v.cart > 0.08 && Math.random() < 0.012) {
            v.cart -= 0.04;
            const hgt = 1.45;
            emit(m.position.x, hgt, m.position.z);
          }
          if (v.cart <= 0.08 && v.t > v.next) {
            v.state = "toShop";
            v.t = 0;
          }
        } else if (v.state === "toShop") {
          if (walkToward(m, counter.x, counter.z, h, 1.4)) {
            v.state = "buy";
            v.t = 0;
            v.flavor = pick(FLAVORS);
          }
        } else if (v.state === "buy") {
          if (v.t > 2.4) {
            v.cart = 1;
            v.state = "toHang";
            v.t = 0;
          }
        } else if (v.state === "toHang") {
          if (home && walkToward(m, home.x, home.z, h, 1.4)) {
            m.rotation.y = home.yaw || 0;
            v.state = "hang";
            v.t = 0;
            v.next = 18 + Math.random() * 28;
          }
        }
      }
    },
  };
}
