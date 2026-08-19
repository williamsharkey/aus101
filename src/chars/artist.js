/**
 * Beach painter: locks a viewpoint, maps that view onto a blank canvas
 * (view UV == canvas UV), then forever stamps a stroke at the largest
 * view-vs-canvas RGB error.
 */
import * as THREE from "three";

const VIEW = 64;
const PAINT = 256;
const STROKE_MS = 170;
const BRUSH_UV = 0.08;
const LAYER_PAINT = 1;
const CANVAS_W = 0.82;
const CANVAS_H = 0.6;
const LINEN = 0xf4efe4;
const SKY = 0x87c8ef;

const QUAD_VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const ERR_FRAG = `
uniform sampler2D viewMap;
uniform sampler2D paintMap;
varying vec2 vUv;
void main() {
  vec3 v = texture2D(viewMap, vUv).rgb;
  vec3 p = texture2D(paintMap, vUv).rgb;
  gl_FragColor = vec4(abs(v - p), 1.0);
}
`;

const STAMP_FRAG = `
uniform sampler2D viewMap;
uniform vec2 center;
uniform float radius;
uniform float amount;
varying vec2 vUv;
void main() {
  vec2 d = vUv - center;
  d.x *= 1.15;
  float dist = length(d);
  float mask = smoothstep(radius, radius * 0.28, dist);
  mask *= 0.82 + 0.18 * sin((vUv.x * 71.0 + vUv.y * 53.0) + center.x * 9.0);
  if (mask < 0.012) discard;
  vec3 src = texture2D(viewMap, vUv).rgb;
  gl_FragColor = vec4(src, mask * amount);
}
`;

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function box(w, h, d, mat) {
  return shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat));
}

function sphere(r, mat, wSeg = 10, hSeg = 8) {
  return shadow(new THREE.Mesh(new THREE.SphereGeometry(r, wSeg, hSeg), mat));
}

function cyl(rTop, rBot, h, mat, segs = 8) {
  return shadow(new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, segs), mat));
}

function makeRT(w, h, { depth = false, colorSpace = THREE.NoColorSpace } = {}) {
  const rt = new THREE.WebGLRenderTarget(w, h, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: depth,
    stencilBuffer: false,
    generateMipmaps: false,
  });
  rt.texture.colorSpace = colorSpace;
  rt.texture.flipY = false;
  return rt;
}

function makeEasel() {
  const g = new THREE.Group();
  const wood = std(0x7a4e2a, { roughness: 0.9 });
  const dark = std(0x4a2e16, { roughness: 0.88 });
  const linen = std(LINEN, { roughness: 0.96 });

  for (const [x, z, lean] of [
    [-0.3, 0.14, 0.08],
    [0.3, 0.14, -0.08],
    [0, -0.2, 0],
  ]) {
    const leg = box(0.048, 1.52, 0.048, wood);
    leg.position.set(x, 0.76, z);
    leg.rotation.z = lean;
    g.add(leg);
  }

  const tray = box(0.72, 0.04, 0.16, dark);
  tray.position.set(0, 0.52, 0.1);
  g.add(tray);

  const bar = box(0.7, 0.04, 0.04, wood);
  bar.position.set(0, 1.46, 0.08);
  g.add(bar);

  const board = box(CANVAS_W + 0.04, CANVAS_H + 0.04, 0.028, linen);
  board.position.set(0, 1.16, 0.11);
  board.rotation.x = -0.1;
  g.add(board);

  const pegL = box(0.03, 0.08, 0.03, dark);
  pegL.position.set(-0.34, 0.84, 0.12);
  const pegR = box(0.03, 0.08, 0.03, dark);
  pegR.position.set(0.34, 0.84, 0.12);
  g.add(pegL, pegR);

  return { group: g, board };
}

function makePainter() {
  const g = new THREE.Group();
  const skin = std(0xc9a07a, { roughness: 0.62 });
  const shirt = std(0xd8cbb0, { roughness: 0.86 });
  const pants = std(0x6b5a3a, { roughness: 0.82 });
  const straw = std(0xe8d9a0, { roughness: 0.92 });
  const hair = std(0x6a5040, { roughness: 0.88 });

  const torso = box(0.3, 0.48, 0.17, shirt);
  torso.position.y = 1.12;
  g.add(torso);

  const hips = box(0.26, 0.14, 0.16, pants);
  hips.position.y = 0.84;
  g.add(hips);

  const head = sphere(0.115, skin, 12, 10);
  head.position.y = 1.5;
  g.add(head);

  const hairCap = sphere(0.12, hair, 10, 8);
  hairCap.position.set(0, 1.53, -0.01);
  hairCap.scale.set(1.02, 0.72, 1.04);
  g.add(hairCap);

  const brim = cyl(0.18, 0.18, 0.02, straw, 14);
  brim.position.y = 1.6;
  const crown = cyl(0.11, 0.12, 0.08, straw, 12);
  crown.position.y = 1.65;
  g.add(brim, crown);

  // Left arm + palette (static)
  const lUpper = cyl(0.036, 0.04, 0.26, shirt);
  lUpper.position.set(-0.2, 1.2, 0.02);
  lUpper.rotation.z = 0.35;
  const lFore = cyl(0.03, 0.034, 0.22, skin);
  lFore.position.set(-0.28, 1.0, 0.08);
  lFore.rotation.z = 0.55;
  lFore.rotation.x = -0.4;
  const lHand = sphere(0.03, skin, 8, 6);
  lHand.position.set(-0.32, 0.9, 0.16);
  g.add(lUpper, lFore, lHand);

  const palette = shadow(new THREE.Mesh(new THREE.CircleGeometry(0.08, 10), std(0xcbb896, { roughness: 0.7 })));
  palette.position.set(-0.3, 0.88, 0.2);
  palette.rotation.x = -1.15;
  palette.rotation.z = 0.4;
  g.add(palette);
  for (const [ox, oy, col] of [
    [-0.025, 0.02, 0xc8402e],
    [0.02, 0.025, 0x2f6f9a],
    [0.015, -0.02, 0xd4a017],
    [-0.02, -0.018, 0x3a7a3a],
  ]) {
    const dab = new THREE.Mesh(new THREE.CircleGeometry(0.016, 6), std(col, { roughness: 0.55 }));
    dab.position.set(-0.3 + ox, 0.882, 0.2 + oy);
    dab.rotation.copy(palette.rotation);
    g.add(dab);
  }

  // Right arm aims along +Z after lookAt
  const arm = new THREE.Group();
  arm.position.set(0.18, 1.34, 0.04);
  const rShoulder = sphere(0.042, shirt, 8, 6);
  arm.add(rShoulder);
  const rUpper = cyl(0.034, 0.038, 0.28, shirt);
  rUpper.rotation.x = Math.PI / 2;
  rUpper.position.z = 0.14;
  arm.add(rUpper);
  const rFore = cyl(0.028, 0.032, 0.24, skin);
  rFore.rotation.x = Math.PI / 2;
  rFore.position.z = 0.38;
  arm.add(rFore);
  const rHand = sphere(0.03, skin, 8, 6);
  rHand.position.z = 0.52;
  arm.add(rHand);

  const brush = new THREE.Group();
  const stick = cyl(0.009, 0.011, 0.26, std(0x5a3a1a, { roughness: 0.7 }), 6);
  stick.rotation.x = Math.PI / 2;
  stick.position.z = 0.13;
  const ferrule = cyl(0.012, 0.012, 0.03, std(0xb0a070, { metalness: 0.45, roughness: 0.4 }), 6);
  ferrule.rotation.x = Math.PI / 2;
  ferrule.position.z = 0.26;
  const bristle = shadow(
    new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.055, 6), std(0x3a2a18, { roughness: 0.9 }))
  );
  bristle.rotation.x = Math.PI / 2;
  bristle.position.z = 0.3;
  brush.add(stick, ferrule, bristle);
  brush.position.z = 0.5;
  arm.add(brush);
  g.add(arm);

  for (const side of [-1, 1]) {
    const thigh = cyl(0.048, 0.052, 0.28, pants);
    thigh.position.set(side * 0.08, 0.64, 0);
    const shin = cyl(0.038, 0.046, 0.3, pants);
    shin.position.set(side * 0.08, 0.36, 0);
    const foot = box(0.07, 0.04, 0.13, std(0x3a3028));
    foot.position.set(side * 0.08, 0.02, 0.03);
    g.add(thigh, shin, foot);
  }

  g.userData.arm = arm;
  g.userData.brush = brush;
  g.userData.paintTarget = false;
  g.userData.kind = "artist";
  g.userData.ageBand = "adult";
  return g;
}

function maxErrorUV(pix) {
  let best = -1;
  let bx = VIEW >> 1;
  let by = VIEW >> 1;
  const n = VIEW * VIEW;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const e = pix[o] * pix[o] + pix[o + 1] * pix[o + 1] + pix[o + 2] * pix[o + 2];
    if (e > best) {
      best = e;
      bx = i % VIEW;
      by = (i / VIEW) | 0;
    }
  }
  return { u: (bx + 0.5) / VIEW, v: (by + 0.5) / VIEW, err: best };
}

/**
 * @param {THREE.Scene} scene
 * @param {{x:number,z:number,yaw:number}} [pose]
 */
export function createArtist(scene, pose = { x: 4.5, z: -6.2, yaw: -2.6 }) {
  const root = new THREE.Group();
  root.name = "artist";
  root.position.set(pose.x, 0, pose.z);
  // Canvas faces opposite the locked view so boardwalk traffic sees the work.
  root.rotation.y = pose.yaw + Math.PI;
  root.userData.kind = "artist";
  root.userData.ageBand = "adult";
  root.userData.paintTarget = false;

  const { group: easel, board } = makeEasel();
  const painter = makePainter();
  painter.position.set(-0.4, 0, 0.34);
  painter.rotation.y = Math.PI + 0.32;
  root.add(easel, painter);
  scene.add(root);
  root.updateMatrixWorld(true);

  const viewRT = makeRT(VIEW, VIEW, { depth: true, colorSpace: THREE.SRGBColorSpace });
  const paintRT = makeRT(PAINT, PAINT, { depth: false, colorSpace: THREE.SRGBColorSpace });
  const errRT = makeRT(VIEW, VIEW, { depth: false, colorSpace: THREE.NoColorSpace });

  const paintMat = new THREE.MeshBasicMaterial({
    map: paintRT.texture,
    toneMapped: false,
  });
  const canvasMesh = new THREE.Mesh(new THREE.PlaneGeometry(CANVAS_W, CANVAS_H), paintMat);
  canvasMesh.position.copy(board.position);
  canvasMesh.position.z += 0.018;
  canvasMesh.rotation.copy(board.rotation);
  canvasMesh.layers.set(LAYER_PAINT);
  canvasMesh.layers.enable(0);
  board.layers.set(LAYER_PAINT);
  board.layers.enable(0);
  easel.add(canvasMesh);

  const lookX = pose.x + Math.sin(pose.yaw) * 14;
  const lookZ = pose.z + Math.cos(pose.yaw) * 14;
  const eye = new THREE.PerspectiveCamera(42, CANVAS_W / CANVAS_H, 0.28, 90);
  const head = new THREE.Vector3(0, 1.54, 0.08);
  painter.localToWorld(head);
  eye.position.set(
    head.x + Math.sin(pose.yaw) * 0.14,
    head.y,
    head.z + Math.cos(pose.yaw) * 0.14
  );
  eye.lookAt(lookX, 1.15, lookZ);
  eye.layers.set(0);
  eye.updateProjectionMatrix();

  const blitCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const errMat = new THREE.ShaderMaterial({
    uniforms: {
      viewMap: { value: viewRT.texture },
      paintMap: { value: paintRT.texture },
    },
    vertexShader: QUAD_VERT,
    fragmentShader: ERR_FRAG,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const errScene = new THREE.Scene();
  errScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), errMat));

  const stampMat = new THREE.ShaderMaterial({
    uniforms: {
      viewMap: { value: viewRT.texture },
      center: { value: new THREE.Vector2(0.5, 0.5) },
      radius: { value: BRUSH_UV },
      amount: { value: 0.7 },
    },
    vertexShader: QUAD_VERT,
    fragmentShader: STAMP_FRAG,
    transparent: true,
    blending: THREE.NormalBlending,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const stampScene = new THREE.Scene();
  stampScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), stampMat));

  const errPix = new Uint8Array(VIEW * VIEW * 4);
  const linen = new THREE.Color(LINEN);
  const sky = new THREE.Color(SKY);
  const prevClear = new THREE.Color();
  const targetUV = new THREE.Vector2(0.5, 0.5);
  const strokeLocal = new THREE.Vector3();
  const strokeWorld = new THREE.Vector3();
  const prevQuat = new THREE.Quaternion();
  const aimQuat = new THREE.Quaternion();
  const arm = painter.userData.arm;
  const brush = painter.userData.brush;
  let inited = false;
  let lastStroke = 0;
  let reach = 0.5;

  function restore(renderer, prevRT, prevAuto, prevAlpha, prevShadow) {
    renderer.shadowMap.enabled = prevShadow;
    renderer.autoClear = prevAuto;
    renderer.setClearColor(prevClear, prevAlpha);
    renderer.setRenderTarget(prevRT);
  }

  function stroke(renderer, scene3) {
    const prevRT = renderer.getRenderTarget();
    const prevAuto = renderer.autoClear;
    const prevAlpha = renderer.getClearAlpha();
    const prevShadow = renderer.shadowMap.enabled;
    renderer.getClearColor(prevClear);

    renderer.autoClear = true;
    renderer.shadowMap.enabled = false;

    if (!inited) {
      renderer.setRenderTarget(paintRT);
      renderer.setClearColor(linen, 1);
      renderer.clear();
      inited = true;
    }

    canvasMesh.visible = false;
    board.visible = false;
    renderer.setRenderTarget(viewRT);
    renderer.setClearColor(sky, 1);
    renderer.render(scene3, eye);
    canvasMesh.visible = true;
    board.visible = true;

    renderer.setRenderTarget(errRT);
    renderer.setClearColor(0x000000, 1);
    renderer.render(errScene, blitCam);
    renderer.readRenderTargetPixels(errRT, 0, 0, VIEW, VIEW, errPix);

    const hit = maxErrorUV(errPix);
    targetUV.set(hit.u, hit.v);
    reach = 0.62;

    stampMat.uniforms.center.value.set(hit.u, hit.v);
    stampMat.uniforms.radius.value = BRUSH_UV * (0.72 + Math.random() * 0.5);
    stampMat.uniforms.amount.value = 0.58 + Math.min(0.36, hit.err / 90000);

    renderer.autoClear = false;
    renderer.setRenderTarget(paintRT);
    renderer.render(stampScene, blitCam);

    restore(renderer, prevRT, prevAuto, prevAlpha, prevShadow);
  }

  function aimBrush() {
    strokeLocal.set((targetUV.x - 0.5) * CANVAS_W, (targetUV.y - 0.5) * CANVAS_H, 0.02);
    canvasMesh.localToWorld(strokeWorld.copy(strokeLocal));
    prevQuat.copy(arm.quaternion);
    arm.lookAt(strokeWorld);
    aimQuat.copy(arm.quaternion);
    arm.quaternion.copy(prevQuat).slerp(aimQuat, 0.2);
    reach += (0.5 - reach) * 0.16;
    brush.position.z = reach;
  }

  return {
    root,
    pose,
    tick(renderer, scene3, nowMs) {
      if (nowMs - lastStroke >= STROKE_MS) {
        stroke(renderer, scene3);
        lastStroke = nowMs;
      }
      aimBrush();
    },
  };
}
