"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const r = useRef<HTMLSpanElement>(null), seen = useInView(r, { once: true });
  useEffect(() => {
    if (!seen) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: x => { if (r.current) r.current.textContent = Math.round(x) + suffix; } });
    return () => c.stop();
  }, [seen, to, suffix]);
  return <span ref={r}>0{suffix}</span>;
}
