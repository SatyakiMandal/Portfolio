"use client";

import { useRef, useState, type ReactNode } from "react";

type IridescentFoilProps = {
  children: ReactNode;
  className?: string;
  glowColor?: string;
};

export function IridescentFoil({
  children,
  className = "",
  glowColor = "rgba(255, 217, 46, 0.22)",
}: IridescentFoilProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50, active: false });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y, active: true });
  };

  const onPointerLeave = () => {
    setCoords((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Base card content */}
      {children}

      {/* Holographic Iridescent Shimmer Foil Overlay (Pointer-responsive) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out z-20"
        style={{
          opacity: coords.active ? 1 : 0,
          background: `
            radial-gradient(
              circle at ${coords.x}% ${coords.y}%,
              ${glowColor} 0%,
              rgba(255, 255, 255, 0.08) 25%,
              transparent 65%
            ),
            linear-gradient(
              ${(coords.x - 50) * 1.8 + 125}deg,
              rgba(255, 217, 46, 0.12) 0%,
              rgba(110, 231, 183, 0.08) 30%,
              rgba(147, 197, 253, 0.08) 60%,
              rgba(244, 114, 182, 0.10) 90%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Specular Glare Sheen Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-full transition-opacity duration-500 z-20"
        style={{
          opacity: coords.active ? 0.45 : 0,
          background: `radial-gradient(ellipse at ${coords.x}% ${coords.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
