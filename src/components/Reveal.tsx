"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { prefersReducedMotion, useInViewOnce } from "@/lib/useInViewOnce";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(ref);
  const [armed, setArmed] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (prefersReducedMotion() || !el || el.getBoundingClientRect().top < window.innerHeight) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    setArmed(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!armed || !inView || !el) return;
    animate(
      el,
      { opacity: 1, transform: "translateY(0px)" },
      { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    ).then(() => {
      el.style.opacity = "";
      el.style.transform = "";
    });
  }, [armed, inView]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
