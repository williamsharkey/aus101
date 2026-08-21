/**
 * FPS crosshair for Doom view. Burn compass and world markers stay off —
 * tan on skin is the UV read, not a BURN pointer.
 */
import * as THREE from "three";
import { WARN_AT } from "../game/sun.js";

const POOL = 16;
const CSS_ID = "aus101-burn-css";

function installCss() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CSS_ID)) return;
  const style = document.createElement("style");
  style.id = CSS_ID;
  style.textContent = `
#aus101-burn-compass{
  position:fixed;
  z-index:13;
  pointer-events:none;
  left:50%;
  top:max(10px, env(safe-area-inset-top, 0px));
  transform:translateX(-50%);
  width:72px;
  height:72px;
  display:none;
}
#aus101-burn-compass.is-on{display:block;}
#aus101-burn-compass .ring{
  position:absolute;inset:0;
  border:2px solid rgba(255,40,40,0.35);
  border-radius:50%;
  box-shadow:0 0 12px rgba(255,30,30,0.25);
}
#aus101-burn-compass .needle{
  position:absolute;left:50%;top:4px;
  width:0;height:0;
  margin-left:-7px;
  border-left:7px solid transparent;
  border-right:7px solid transparent;
  border-bottom:16px solid #ff2a2a;
  transform-origin:7px 32px;
  filter:drop-shadow(0 0 4px #ff3030);
}
#aus101-burn-compass .lab{
  position:absolute;left:0;right:0;bottom:8px;
  text-align:center;
  font:700 9px ui-monospace,Menlo,Consolas,monospace;
  letter-spacing:0.12em;
  color:#ff3a3a;
  text-shadow:0 0 6px #800;
}
#aus101-fps-cross{
  position:fixed;inset:0;z-index:14;pointer-events:none;display:none;
}
#aus101-fps-cross.is-on{display:block;}
#aus101-fps-cross .h,#aus101-fps-cross .v{
  position:absolute;left:50%;top:50%;background:#ffd76a;
  box-shadow:0 0 6px #ff9a1a;
}
#aus101-fps-cross .h{width:14px;height:2px;margin:-1px 0 0 -7px;}
#aus101-fps-cross .v{width:2px;height:14px;margin:-7px 0 0 -1px;}
#aus101-fps-cross .dot{position:absolute;left:50%;top:50%;width:3px;height:3px;margin:-1.5px 0 0 -1.5px;background:#fff;border-radius:50%;}
`.trim();
  document.head.appendChild(style);
}

function el(tag, className, parent) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (parent) parent.appendChild(n);
  return n;
}

function makeMarker() {
  const g = new THREE.Group();
  g.name = "burn-mark";
  const mat = new THREE.MeshBasicMaterial({
    color: 0xff1a1a,
    toneMapped: false,
    transparent: true,
    opacity: 0.92,
    depthTest: true,
  });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.018, 6, 16), mat);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);
  const spike = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.22, 5), mat);
  spike.position.y = 0.16;
  g.add(spike);
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.02), mat);
  bar.position.y = 0.02;
  g.add(bar);
  g.visible = false;
  g.userData.noRay = true;
  g.traverse((o) => {
    if (o.isMesh) o.raycast = () => {};
  });
  return g;
}

export function createBurnWarn(scene) {
  installCss();
  const group = new THREE.Group();
  group.name = "burn-warns";
  scene.add(group);
  const pool = [];
  for (let i = 0; i < POOL; i++) {
    const m = makeMarker();
    group.add(m);
    pool.push(m);
  }

  const compass = el("div");
  compass.id = "aus101-burn-compass";
  el("div", "ring", compass);
  el("div", "needle", compass);
  const lab = el("div", "lab", compass);
  lab.textContent = "BURN";
  document.body.appendChild(compass);

  const cross = el("div");
  cross.id = "aus101-fps-cross";
  el("div", "h", cross);
  el("div", "v", cross);
  el("div", "dot", cross);
  document.body.appendChild(cross);

  function tick(_dt, _cast, _player, fpsOn) {
    for (let i = 0; i < POOL; i++) pool[i].visible = false;
    compass.classList.remove("is-on");
    cross.classList.toggle("is-on", !!fpsOn);
  }

  return { tick, html: compass, cross, WARN_AT };
}
