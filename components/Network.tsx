"use client";
import { useEffect, useRef } from "react";
export default function Network() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, x = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, mx = -999, my = -999;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const N = Array.from({ length: 48 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .0002, vy: (Math.random() - .5) * .0002 }));
    const resize = () => { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const mv = (e: PointerEvent) => { const r = c.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
    resize(); addEventListener("resize", resize); addEventListener("pointermove", mv);
    const draw = (t: number) => {
      x.clearRect(0, 0, w, h);
      if (!reduce) for (const n of N) { n.x += n.vx * 16; n.y += n.vy * 16; if (n.x < 0 || n.x > 1) n.vx *= -1; if (n.y < 0 || n.y > 1) n.vy *= -1; }
      for (let i = 0; i < N.length; i++) {
        const a = N[i], ax = a.x * w, ay = a.y * h;
        for (let j = i + 1; j < N.length; j++) {
          const b = N[j], bx = b.x * w, by = b.y * h, d = Math.hypot(ax - bx, ay - by);
          if (d > 170) continue;
          x.strokeStyle = `rgba(140,165,255,${(1 - d / 170) * .28})`; x.beginPath(); x.moveTo(ax, ay); x.lineTo(bx, by); x.stroke();
          if (!reduce && (i + j) % 5 === 0) { const p = (t / 2400 + i * .13 + j * .07) % 1; x.fillStyle = "#FFB86B"; x.beginPath(); x.arc(ax + (bx - ax) * p, ay + (by - ay) * p, 2, 0, 7); x.fill(); }
        }
        const near = Math.hypot(ax - mx, ay - my) < 140;
        x.fillStyle = near ? "#FFB86B" : "#8CA5FF"; x.beginPath(); x.arc(ax, ay, near ? 3.5 : 2.2, 0, 7); x.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("pointermove", mv); };
  }, []);
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 size-full opacity-60" aria-hidden />;
}
