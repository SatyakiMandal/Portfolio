"use client";

import { useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { m } from "framer-motion";

export function Tilt({
  children,
  className = "",
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 300, damping: 26, mass: 0.3 });
  const sy = useSpring(py, { stiffness: 300, damping: 26, mass: 0.3 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glow = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(420px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgb(255 255 255 / 0.22), transparent 60%)`
  );

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`relative [perspective:900px] ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      <m.div
        className="relative h-full overflow-hidden rounded-2xl [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, willChange: "transform" }}
      >
        {children}
        <m.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glow }}
        />
      </m.div>
    </div>
  );
}
