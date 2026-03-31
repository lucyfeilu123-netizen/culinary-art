"use client";

import { useEffect } from "react";

export function NoiseOverlay() {
  useEffect(() => {
    const c = document.createElement("canvas");
    c.width = 200;
    c.height = 200;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const d = ctx.createImageData(200, 200);
    for (let i = 0; i < d.data.length; i += 4) {
      const v = Math.random() * 255;
      d.data[i] = v;
      d.data[i + 1] = v;
      d.data[i + 2] = v;
      d.data[i + 3] = 18;
    }
    ctx.putImageData(d, 0, 0);
    document.body.style.setProperty("--noise-bg", `url(${c.toDataURL()})`);
    const style = document.createElement("style");
    style.textContent = "body::after { background-image: var(--noise-bg); }";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
}
