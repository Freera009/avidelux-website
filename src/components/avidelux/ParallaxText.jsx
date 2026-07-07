import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxText({ text = "AVIDELUX", className = "" }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      style={{ y }}
      className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden ${className}`}
    >
      <span className="font-heading text-[12vw] font-bold text-cacao/[0.03] whitespace-nowrap">
        {text}
      </span>
    </motion.div>
  );
}