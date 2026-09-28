"use client";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
export default function Shell({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (<MotionConfig reducedMotion="user">
    <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-primary" />
    {children}</MotionConfig>);
}
