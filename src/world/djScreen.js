/**
 * DJ booth TV: ~10% of the time the uploaded clips, otherwise a Winamp-style
 * spectrum/oscilloscope on the tracker/DJ bed pulse.
 */
import * as THREE from "three";

const DJ_CLIPS = ["assets/media/dj/dj1.mp4", "assets/media/dj/dj2.mp4"];
const VIDEO_CHANCE = 0.1;
const SWITCH_S = 9;

function makeVideo(url) {
  const v = document.createElement("video");
  v.src = url;
  v.loop = true;
  v.muted = true;
  v.playsInline = true;
  v.preload = "metadata";
  v.setAttribute("playsinline", "");
  v.setAttribute("muted", "");
  v.crossOrigin = "anonymous";
  const tex = new THREE.VideoTexture(v);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  return { v, tex, url };
}

export function createDjScreen() {
  const c = document.createElement("canvas");
  c.width = 640;
  c.height = 360;
  const x = c.getContext("2d");
  const vizTex = new THREE.CanvasTexture(c);
  vizTex.colorSpace = THREE.SRGBColorSpace;
  vizTex.minFilter = THREE.LinearFilter;
  vizTex.magFilter = THREE.LinearFilter;

  const mat = new THREE.MeshBasicMaterial({ map: vizTex });
  const clips = DJ_CLIPS.map(makeVideo);
  let mode = "viz";
  let clipI = 0;
  let nextSwitch = 4;
  let lastPaint = 0;
  const bars = new Float32Array(32);
  const peaks = new Float32Array(32);

  function paintViz(t) {
    const w = c.width;
    const h = c.height;
    x.fillStyle = "#04060c";
    x.fillRect(0, 0, w, h);
    const beat = 0.5 + 0.5 * Math.sin(t * (124 / 60) * Math.PI * 2);
    x.fillStyle = `rgba(${20 + beat * 40}, ${10 + beat * 20}, ${40 + beat * 80}, 0.35)`;
    x.fillRect(0, 0, w, h);

    const n = 32;
    const gap = 3;
    const bw = (w - 40 - gap * n) / n;
    for (let i = 0; i < n; i++) {
      const drive =
        0.25 +
        0.55 * Math.abs(Math.sin(t * (2.2 + i * 0.17) + i)) *
          (0.45 + 0.55 * Math.abs(Math.sin(t * 6.5 + i * 0.4)));
      bars[i] += (drive - bars[i]) * 0.28;
      if (bars[i] > peaks[i]) peaks[i] = bars[i];
      else peaks[i] *= 0.975;
      const bh = bars[i] * (h * 0.62);
      const px = 20 + i * (bw + gap);
      const gy = x.createLinearGradient(0, h - 28 - bh, 0, h - 28);
      gy.addColorStop(0, "#ffef7a");
      gy.addColorStop(0.45, "#3dff8a");
      gy.addColorStop(1, "#1a6aff");
      x.fillStyle = gy;
      x.fillRect(px, h - 28 - bh, bw, bh);
      x.fillStyle = "#ff4040";
      x.fillRect(px, h - 28 - peaks[i] * (h * 0.62) - 3, bw, 3);
    }

    x.strokeStyle = "#7dffc4";
    x.lineWidth = 2;
    x.beginPath();
    for (let i = 0; i < w; i++) {
      const y =
        78 +
        Math.sin(i * 0.035 + t * 8.2) * 18 * beat +
        Math.sin(i * 0.09 - t * 5.1) * 8;
      if (i === 0) x.moveTo(i, y);
      else x.lineTo(i, y);
    }
    x.stroke();

    x.fillStyle = "#c8d0d8";
    x.font = "bold 13px Tahoma, sans-serif";
    x.textAlign = "left";
    x.fillText("AUS101  ·  MILKDROP LITE", 16, 22);
    x.fillStyle = "#ffb040";
    x.font = "11px Tahoma, sans-serif";
    x.fillText("SUNSET SESSIONS  ·  124 BPM", 16, 40);
    vizTex.needsUpdate = true;
  }

  function showViz() {
    mode = "viz";
    mat.map = vizTex;
    mat.needsUpdate = true;
    for (const c of clips) {
      try {
        c.v.pause();
      } catch {
        /* */
      }
    }
  }

  function showClip(i) {
    const clip = clips[i % clips.length];
    if (!clip) {
      showViz();
      return;
    }
    mode = "video";
    clipI = i % clips.length;
    mat.map = clip.tex;
    mat.needsUpdate = true;
    try {
      clip.v.currentTime = 0;
      clip.v.play().catch(() => showViz());
    } catch {
      showViz();
    }
  }

  paintViz(0);

  return {
    mat,
    tick(t) {
      if (t >= nextSwitch) {
        nextSwitch = t + SWITCH_S + Math.random() * 6;
        if (mode === "viz" && Math.random() < VIDEO_CHANCE) showClip((clipI + 1) % Math.max(1, clips.length));
        else if (mode === "video") showViz();
      }
      if (mode === "viz" && t - lastPaint > 0.05) {
        lastPaint = t;
        paintViz(t);
      }
    },
  };
}
