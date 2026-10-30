"use client";

import { AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import * as m from "framer-motion/m";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Burst = { id: number; x: number; y: number };

const DARK_SELECTOR =
  ".bg-night, .bg-block, .bg-ink, .glass-dark, [data-dark], [data-dark-bg], .bg-black, [class*='bg-[#161616]'], [class*='bg-[#1e1e1e]'], [class*='bg-black']";

export function Cursor() {
  const pathname = usePathname();
  const [fine, setFine] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);

  // High-fidelity spring physics: silky smooth, responsive, zero jitter
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 65, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 65, mass: 0.1 });
  const ringX = useSpring(mouseX, { stiffness: 480, damping: 36, mass: 0.22 });
  const ringY = useSpring(mouseY, { stiffness: 480, damping: 36, mass: 0.22 });

  // Clear state on route transitions so nothing can ever freeze
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInteractive(false);
    setPressed(false);
    setBursts([]);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    const sync = () => {
      // Custom cursor is enabled on any device with a mouse/trackpad pointer.
      // Large screens, laptops, and tablets (>= 768px) with a fine pointer receive the cursor.
      // On touch-only smartphones, native touch interaction is preserved with zero interference.
      const isFineDesktop = mq.matches && window.innerWidth >= 768;
      setFine(isFineDesktop);
      if (isFineDesktop) {
        document.documentElement.classList.add("has-cursor");
      } else {
        document.documentElement.classList.remove("has-cursor");
      }
    };
    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    if (!fine) return;
    let burstId = 0;

    const move = (e: PointerEvent) => {
      const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      const actualX = e.clientX / zoom;
      const actualY = e.clientY / zoom;
      mouseX.set(actualX);
      mouseY.set(actualY);
      if (!visible) setVisible(true);

      const target = e.target as Element | null;
      if (!target) return;

      setOnDark(Boolean(target.closest(DARK_SELECTOR)));

      const isClickable = Boolean(
        target.closest(
          "a, button, summary, [role='button'], input, textarea, select, [data-interactive], [data-cursor], tr"
        )
      );
      setInteractive(isClickable);
    };

    const down = (e: PointerEvent) => {
      const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      const actualX = e.clientX / zoom;
      const actualY = e.clientY / zoom;
      setPressed(true);
      const id = ++burstId;
      setBursts((prev) => [...prev.slice(-3), { id, x: actualX, y: actualY }]);
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 400);
    };

    const up = () => {
      setPressed(false);
    };

    const leave = () => {
      setVisible(false);
      setInteractive(false);
      setPressed(false);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", leave);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", leave);
      document.removeEventListener("mouseleave", leave);
    };
  }, [fine, mouseX, mouseY, visible]);

  if (!fine) return null;

  // Visual tokens
  const dotColor = onDark ? "#FFD92E" : "#161616";
  const ringBorder = onDark ? "rgba(255, 217, 46, 0.75)" : "rgba(22, 22, 22, 0.65)";
  const ringBg = interactive
    ? onDark
      ? "rgba(255, 217, 46, 0.12)"
      : "rgba(31, 77, 58, 0.08)"
    : onDark
      ? "rgba(255, 217, 46, 0)"
      : "rgba(31, 77, 58, 0)";

  const ringSize = interactive ? (pressed ? 30 : 36) : 0;
  const dotSize = pressed ? 5 : interactive ? 7 : 6;

  return (
    <>
      {/* Click ripple micro-burst */}
      <AnimatePresence>
        {bursts.map((b) => (
          <m.span
            key={b.id}
            aria-hidden="true"
            initial={{ opacity: 0.65, scale: 0.3 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              left: b.x,
              top: b.y,
              borderColor: onDark ? "#FFD92E" : "#1F4D3A",
              zIndex: 9999999,
            }}
            className="pointer-events-none fixed z-[9999999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          />
        ))}
      </AnimatePresence>

      {/* Trailing expansion ring on hover */}
      <m.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          willChange: "transform",
          zIndex: 9999999,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999999] -translate-x-1/2 -translate-y-1/2 transform-gpu"
      >
        <m.div
          animate={{
            width: ringSize,
            height: ringSize,
            opacity: visible && interactive ? 1 : 0,
            borderColor: ringBorder,
            backgroundColor: ringBg,
          }}
          transition={{ type: "spring", stiffness: 480, damping: 32, mass: 0.18 }}
          className="rounded-full border-[1.5px] shadow-[0_0_12px_rgba(0,0,0,0.06)]"
        />
      </m.div>

      {/* Center pinpoint cursor dot */}
      <m.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          willChange: "transform",
          zIndex: 9999999,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999999] -translate-x-1/2 -translate-y-1/2 transform-gpu"
      >
        <m.div
          animate={{
            width: dotSize,
            height: dotSize,
            opacity: visible ? 1 : 0,
            backgroundColor: dotColor,
            scale: pressed ? 0.85 : 1,
          }}
          transition={{ duration: 0.12 }}
          className="rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
        />
      </m.div>
    </>
  );
}
