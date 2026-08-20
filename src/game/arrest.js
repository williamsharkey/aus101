/**
 * Live arrest: cops grab AUS101, drag him into the surf club jail, play
 * re-education mantras, take the laser, and stash it. Camera stays in follow
 * — no cutscene, no freeze-cam, no teleport.
 */
import { HIDES } from "../world/laserGun.js";
import { PATROL_HOME } from "../world/patrolHouse.js";

const JAIL = { x: -18.2, z: 15.2 };
const JACK = { x: -18.2, y: 0, z: 14.4 };
const DOOR = { x: -15.9, z: 17.6 };
const INSIDE = { x: -15.9, z: 15.5 };

const MANTRAS = ["mantra_01", "mantra_02", "mantra_03", "mantra_04", "mantra_05", "mantra_06"];
const SILENCE = 1.65;
const GAP = 0.22;

function listCops(cops) {
  if (!cops) return [];
  if (Array.isArray(cops)) return cops;
  if (Array.isArray(cops.list)) return cops.list;
  return [];
}

function smooth(u) {
  const x = Math.min(1, Math.max(0, u));
  return x * x * (3 - 2 * x);
}

function buildPath(from) {
  return [
    { x: from.x, z: from.z },
    { x: DOOR.x, z: DOOR.z },
    { x: INSIDE.x, z: INSIDE.z },
    { x: JAIL.x, z: JAIL.z },
    { x: JACK.x, z: JACK.z },
  ];
}

function polyLen(pts) {
  let s = 0;
  for (let i = 1; i < pts.length; i++) {
    s += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z);
  }
  return s;
}

function along(pts, dist) {
  let left = dist;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i - 1].x;
    const dz = pts[i].z - pts[i - 1].z;
    const L = Math.hypot(dx, dz) || 1e-6;
    if (left <= L) {
      const u = left / L;
      return { x: pts[i - 1].x + dx * u, z: pts[i - 1].z + dz * u };
    }
    left -= L;
  }
  const last = pts[pts.length - 1];
  return { x: last.x, z: last.z };
}

/**
 * @param {{
 *   player: any,
 *   play?: (id: string) => { ready?: Promise<boolean>, duration?: number },
 *   sfx?: any,
 *   onReprogram?: () => void,
 *   onTakeGun?: () => void,
 *   hideGun?: (pos?: {x:number,y?:number,z:number}) => void,
 *   cops?: any[] | { list?: any[] },
 * }} opts
 */
export function createArrest({ player, play, sfx, onReprogram, onTakeGun, hideGun, cops } = {}) {
  let phase = "idle"; // idle | grab | drag | jack | done
  let t = 0;
  let path = null;
  let pathLen = 1;
  let mantraI = 0;
  let mantraWait = 0;
  let mantraBusy = false;

  function squad() {
    return listCops(cops);
  }

  function setDuty(duty, extra = {}) {
    const list = squad();
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (c.duty === "stash") continue;
      c.duty = duty;
      const ang = (i / Math.max(1, list.length)) * Math.PI * 2 + 0.4;
      c.offX = extra.offR ? Math.cos(ang) * extra.offR : 0;
      c.offZ = extra.offR ? Math.sin(ang) * extra.offR : 0;
      if (extra.tx != null) c.tx = extra.tx + c.offX;
      if (extra.tz != null) c.tz = extra.tz + c.offZ;
      if (duty !== "stash") c.onArrive = null;
    }
  }

  function begin() {
    if (phase !== "idle" && phase !== "done") return;
    phase = "grab";
    t = 0;
    mantraI = 0;
    mantraWait = 0;
    mantraBusy = false;
    path = null;
    setDuty("escort", { offR: 0.9 });
    try {
      play?.("panic_01");
      sfx?.radioChatter?.();
      sfx?.copWhoop?.();
    } catch {
      /* optional */
    }
  }

  function finishClean() {
    player.pos.x = JACK.x;
    player.pos.z = JACK.z;
    player.yaw = 0;
    player.vel.set(0, 0, 0);

    try {
      onReprogram?.();
    } catch {
      /* optional */
    }
    try {
      onTakeGun?.();
    } catch {
      /* optional */
    }

    const list = squad();
    const hide = HIDES[(Math.random() * HIDES.length) | 0];
    const carrier = list[0] || null;
    if (carrier) {
      carrier.duty = "stash";
      carrier.tx = hide.x;
      carrier.tz = hide.z;
      carrier.reach = 0;
      carrier.onArrive = () => {
        try {
          hideGun?.(hide);
        } catch {
          /* optional */
        }
        carrier.duty = "home";
        carrier.tx = PATROL_HOME.x;
        carrier.tz = PATROL_HOME.z;
        carrier.onArrive = null;
      };
    } else {
      try {
        hideGun?.(hide);
      } catch {
        /* optional */
      }
    }
    for (const c of list) {
      if (c === carrier) continue;
      c.duty = "home";
      c.reach = 0;
      c.onArrive = null;
      if (!Number.isFinite(c.tx) || !Number.isFinite(c.tz)) {
        c.tx = PATROL_HOME.x;
        c.tz = PATROL_HOME.z;
      }
    }

    phase = "done";
    t = 0;
  }

  function kickMantra() {
    if (mantraI >= MANTRAS.length) {
      finishClean();
      return;
    }
    if (mantraBusy) return;
    mantraBusy = true;
    const id = MANTRAS[mantraI];
    let handle = null;
    try {
      handle = play?.(id);
    } catch {
      handle = null;
    }
    const settle = (secs) => {
      mantraWait = secs;
      mantraBusy = false;
      mantraI += 1;
    };
    if (!handle?.ready) {
      settle(SILENCE);
      return;
    }
    handle.ready
      .then((ok) => {
        const d = handle.duration > 0 ? handle.duration / 1000 + GAP : SILENCE;
        settle(ok ? d : SILENCE);
      })
      .catch(() => settle(SILENCE));
  }

  function tick(dt) {
    if (phase === "idle" || phase === "done" || !(dt > 0)) return;
    t += dt;
    if (phase === "grab") {
      player.vel.set(0, 0, 0);
      if (t > 1.1) {
        phase = "drag";
        t = 0;
        path = buildPath(player.pos);
        pathLen = Math.max(1, polyLen(path));
        sfx?.radioChatter?.();
      }
      return;
    }
    if (phase === "drag") {
      const dur = Math.min(7.5, Math.max(3.6, pathLen / 6.2));
      const u = smooth(Math.min(1, t / dur));
      const p = along(path, u * pathLen);
      player.pos.x = p.x;
      player.pos.z = p.z;
      player.vel.set(0, 0, 0);
      const look = along(path, Math.min(pathLen, u * pathLen + 0.8));
      player.yaw = Math.atan2(look.x - player.pos.x, look.z - player.pos.z);
      if (u >= 1) {
        phase = "jack";
        t = 0;
        mantraI = 0;
        mantraWait = 0;
        mantraBusy = false;
        player.pos.x = JACK.x;
        player.pos.z = JACK.z;
        player.yaw = 0;
        setDuty("hold", { tx: JACK.x, tz: JACK.z, offR: 1.35 });
        sfx?.radioChatter?.();
      }
      return;
    }
    if (phase === "jack") {
      player.pos.x = JACK.x;
      player.pos.z = JACK.z;
      player.vel.set(0, 0, 0);
      mantraWait -= dt;
      if (mantraWait <= 0 && !mantraBusy) kickMantra();
    }
  }

  return {
    begin,
    tick,
    get active() {
      return phase !== "idle" && phase !== "done";
    },
    get phase() {
      return phase;
    },
  };
}

export { JAIL, JACK };
