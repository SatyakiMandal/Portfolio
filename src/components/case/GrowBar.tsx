"use client";

import { useReducedMotion } from "framer-motion";
import * as m from "framer-motion/m";

// Animated consulting bar with solid high-contrast track and interactive hover
export function GrowBar({
  width,
  index,
  className,
  highlight,
  accent = false,
}: {
  width: number;
  index: number;
  className: string;
  highlight: boolean;
  accent?: boolean;
}) {
  const reduce = useReducedMotion();
  const boundedWidth = Math.min(100, Math.max(5, width));

  return (
    <div className={`group/bar relative overflow-hidden rounded-full bg-ink/10 ${className}`}>
      <m.div
        initial={reduce ? { width: `${boundedWidth}%` } : { width: "0%" }}
        whileInView={{ width: `${boundedWidth}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 + index * 0.1 }}
        className={`h-full rounded-full transition-all duration-300 group-hover/bar:brightness-110 ${
          accent
            ? "bg-amber shadow-xs"
            : highlight
            ? "bg-gradient-to-r from-amber to-amber-500 shadow-xs"
            : "bg-ink/85 group-hover/bar:bg-amber"
        }`}
      />
    </div>
  );
}
