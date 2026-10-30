"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";

// The first page of a visit shows no wipe, so the first paint is never covered.
let navigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [wipe, setWipe] = useState(() => navigated);
  const play = wipe && !reduce;

  useEffect(() => {
    navigated = true;
  }, []);

  return (
    <>
      {play && (
        <m.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70] bg-amber"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => setWipe(false)}
        >
          <m.span
            className="wide absolute inset-0 flex items-center justify-center text-[clamp(40px,8vw,120px)] font-extrabold text-[#161616]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Satyaki
          </m.span>
        </m.div>
      )}
      <m.div
        initial={play ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: play ? 0.15 : 0 }}
      >
        {children}
      </m.div>
    </>
  );
}
