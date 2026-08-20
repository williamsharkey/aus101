/**
 * Live arrest: cops drag AUS101 into the surf club, jack him into a terminal,
 * reprogram (reset). Camera stays in follow — no cutscene, no freeze-cam.
 */
import * as THREE from "three";

const DRAG = 3.4;
const JAIL = { x: -18.2, z: 15.2 };
const JACK = { x: -18.2, y: 0, z: 14.4 };

export function createArrest({ player, onReprogram, play, sfx }) {
  let phase = "idle"; // idle | grab | drag | jack | done
  let t = 0;
  const start = new THREE.Vector3();

  function begin() {
    if (phase !== "idle") return;
    phase = "grab";
    t = 0;
    start.copy(player.pos);
    try {
      play?.("panic_01");
      sfx?.radioChatter?.();
      sfx?.copWhoop?.();
    } catch {
      /* optional */
    }
  }

  function tick(dt) {
    if (phase === "idle" || !(dt > 0)) return;
    t += dt;
    if (phase === "grab") {
      if (t > 1.1) {
        phase = "drag";
        t = 0;
        start.copy(player.pos);
        sfx?.radioChatter?.();
      }
      return;
    }
    if (phase === "drag") {
      const u = Math.min(1, t / 4.2);
      const e = u * u * (3 - 2 * u);
      player.pos.x = start.x + (JAIL.x - start.x) * e;
      player.pos.z = start.z + (JAIL.z - start.z) * e;
      player.vel.set(0, 0, 0);
      player.yaw = Math.atan2(JAIL.x - player.pos.x, JAIL.z - player.pos.z);
      if (u >= 1) {
        phase = "jack";
        t = 0;
        play?.("factory_recall_01");
        sfx?.radioChatter?.();
      }
      return;
    }
    if (phase === "jack") {
      player.pos.x = JACK.x;
      player.pos.z = JACK.z;
      player.vel.set(0, 0, 0);
      if (t > 2.8) {
        phase = "idle";
        t = 0;
        player.pos.set(0, 0, 10);
        player.yaw = 0;
        player.vel.set(0, 0, 0);
        onReprogram?.();
      }
    }
  }

  return {
    begin,
    tick,
    get active() {
      return phase !== "idle";
    },
    get phase() {
      return phase;
    },
  };
}
