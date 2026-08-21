/**
 * Live arrest: slap/propaganda starts only after cops shove AUS101 into the
 * re-ed chair (JACK). No grab, no path lerp. Camera stays in follow.
 */
import { HIDES } from "../world/laserGun.js";
import { PATROL_HOME } from "../world/patrolHouse.js";

const JAIL = { x: -18.2, z: 15.2 };
const JACK = { x: -18.2, y: 0, z: 14.4 };
const NEAR_JACK = 1.6;

const MANTRAS = ["mantra_01", "mantra_02", "mantra_03", "mantra_04", "mantra_05", "mantra_06"];
const BROTHA = ["cop_brotha_01", "cop_brotha_02", "cop_brotha_03"];
const SENSEI = ["cop_sensei_01", "cop_sensei_02", "cop_sensei_03"];
const SILENCE = 1.65;
const GAP = 0.22;
const RING = 1.4;
const STEP_IN = 0.78;
const SLAP_DUR = 0.48;
const SLAP_HIT = 0.5;
const BEATS_MAX = 6;

function listCops(cops) {
  if (!cops) return [];
  if (Array.isArray(cops)) return cops;
  if (Array.isArray(cops.list)) return cops.list;
  return [];
}

function atJack(pos) {
  if (!pos) return false;
  return Math.hypot((pos.x ?? 0) - JACK.x, (pos.z ?? 0) - JACK.z) <= NEAR_JACK;
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
  let phase = "idle"; // idle | jack
  let t = 0;
  let mantraI = 0;
  let brothaI = 0;
  let senseiI = 0;
  let mantraWait = 0;
  let mantraBusy = false;
  let roster = [];
  let beatI = 0;
  let beatPhase = "idle"; // idle | form | stepin | slap | talk | legacy
  let beatT = 0;
  let slapped = false;

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

  function placeCop(c, r) {
    const list = squad();
    const i = Math.max(0, list.indexOf(c));
    const n = Math.max(1, list.length);
    const ang = (i / n) * Math.PI * 2 + 0.4;
    c.offX = Math.cos(ang) * r;
    c.offZ = Math.sin(ang) * r;
    c.tx = JACK.x + c.offX;
    c.tz = JACK.z + c.offZ;
  }

  function voiceSet(c) {
    return c.voiceSet || c.root?.userData?.voiceSet || "default";
  }

  function pickLine(c) {
    const set = voiceSet(c);
    if (set === "brotha") {
      const id = BROTHA[brothaI % BROTHA.length];
      brothaI += 1;
      return id;
    }
    if (set === "sensei") {
      const id = SENSEI[senseiI % SENSEI.length];
      senseiI += 1;
      return id;
    }
    const id = MANTRAS[mantraI % MANTRAS.length];
    mantraI += 1;
    return id;
  }

  function ringReady() {
    for (const c of roster) {
      const d = Math.hypot((c.tx ?? 0) - c.x, (c.tz ?? 0) - c.z);
      if (d > 0.55) return false;
    }
    return true;
  }

  function resetBeats() {
    mantraI = 0;
    brothaI = 0;
    senseiI = 0;
    mantraWait = 0;
    mantraBusy = false;
    roster = [];
    beatI = 0;
    beatPhase = "idle";
    beatT = 0;
    slapped = false;
  }

  function beginJack() {
    if (phase !== "idle") return;
    phase = "jack";
    t = 0;
    resetBeats();
    player.pos.x = JACK.x;
    player.pos.z = JACK.z;
    player.yaw = 0;
    player.vel.set(0, 0, 0);
    setDuty("hold", { tx: JACK.x, tz: JACK.z, offR: RING });
    startJackBeats();
    try {
      sfx?.radioChatter?.();
    } catch {
      /* optional */
    }
  }

  function begin() {
    if (phase !== "idle") return;
    if (!atJack(player?.pos)) return;
    beginJack();
  }

  function copsDelivering() {
    for (const c of squad()) {
      const d = c.duty;
      if (d === "chase" || d === "escort" || d === "shove") return true;
    }
    return false;
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
    for (const c of list) c.slapT = 0;
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

    phase = "idle";
    t = 0;
  }

  function speakLine(id) {
    if (mantraBusy) return;
    mantraBusy = true;
    let handle = null;
    try {
      handle = play?.(id);
    } catch {
      handle = null;
    }
    const settle = (secs) => {
      mantraWait = secs;
      mantraBusy = false;
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

  function kickMantra() {
    if (mantraI >= MANTRAS.length) {
      finishClean();
      return;
    }
    const id = MANTRAS[mantraI];
    mantraI += 1;
    speakLine(id);
  }

  function startJackBeats() {
    roster = squad()
      .filter((c) => c.duty !== "stash")
      .slice(0, BEATS_MAX);
    beatI = 0;
    beatT = 0;
    slapped = false;
    mantraBusy = false;
    mantraWait = 0;
    mantraI = 0;
    brothaI = 0;
    senseiI = 0;
    if (roster.length === 0) {
      beatPhase = "legacy";
      return;
    }
    beatPhase = "form";
  }

  function kickBeat() {
    if (beatI >= roster.length) {
      finishClean();
      return;
    }
    const cop = roster[beatI];
    placeCop(cop, STEP_IN);
    cop.slapT = 0;
    slapped = false;
    beatPhase = "stepin";
    beatT = 0;
  }

  function tick(dt) {
    if (!(dt > 0)) return;
    if (phase === "idle") {
      if (atJack(player?.pos) && copsDelivering()) beginJack();
      return;
    }
    if (phase !== "jack") return;
    t += dt;
    player.pos.x = JACK.x;
    player.pos.z = JACK.z;
    player.vel.set(0, 0, 0);
    player.pitch += (-0.05 - player.pitch) * Math.min(1, dt * 2.6);

    if (beatPhase === "legacy") {
      mantraWait -= dt;
      if (mantraWait <= 0 && !mantraBusy) kickMantra();
      return;
    }
    if (beatPhase === "form") {
      beatT += dt;
      if ((ringReady() && beatT > 0.18) || beatT > 1.6) kickBeat();
      return;
    }
    if (beatPhase === "stepin") {
      beatT += dt;
      const cop = roster[beatI];
      const d = Math.hypot((cop.tx ?? 0) - cop.x, (cop.tz ?? 0) - cop.z);
      if (d < 0.28 || beatT > 1.1) {
        beatPhase = "slap";
        beatT = 0;
        slapped = false;
      }
      return;
    }
    if (beatPhase === "slap") {
      beatT += dt;
      const cop = roster[beatI];
      const u = Math.min(1, beatT / SLAP_DUR);
      cop.slapT = u;
      if (!slapped && u >= SLAP_HIT) {
        slapped = true;
        try {
          sfx?.slapFace?.();
        } catch {
          /* optional */
        }
        player.pitch = Math.min(0.55, player.pitch + 0.26);
      }
      if (u >= 1) {
        cop.slapT = 0;
        placeCop(cop, RING);
        beatPhase = "talk";
        mantraWait = 0;
        speakLine(pickLine(cop));
      }
      return;
    }
    if (beatPhase === "talk") {
      mantraWait -= dt;
      if (mantraWait <= 0 && !mantraBusy) {
        beatI += 1;
        beatPhase = "form";
        beatT = 0.08;
      }
    }
  }

  return {
    begin,
    beginJack,
    tick,
    get active() {
      return phase === "jack";
    },
    get phase() {
      return phase;
    },
    get stepSpeed() {
      return 0;
    },
  };
}

export { JAIL, JACK };
