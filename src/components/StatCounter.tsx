"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { prefersReducedMotion, useInViewOnce } from "@/lib/useInViewOnce";
import type { Stat } from "@/content/profile";

export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInViewOnce(ref, "0px 0px -15% 0px");
  const [text, setText] = useState(stat.value);

  useEffect(() => {
    if (!inView || prefersReducedMotion() || stat.countTo === undefined) return;
    const { countTo, prefix = "", suffix = "", decimals = 0 } = stat;
    const controls = animate(0, countTo, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => setText(`${prefix}${v.toFixed(decimals)}${suffix}`),
      onComplete: () => setText(stat.value),
    });
    return () => controls.stop();
  }, [inView, stat]);

  return (
    <span ref={ref} className="tabular">
      <span aria-hidden="true">{text}</span>
      <span className="sr-only">{stat.value}</span>
    </span>
  );
}
