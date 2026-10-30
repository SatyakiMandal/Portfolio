"use client";

import { useState } from "react";

export function InteractiveWord({
  word,
  offset,
  className = "",
}: {
  word: string;
  offset: number;
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pulseKey, setPulseKey] = useState(0);

  return (
    <span
      aria-hidden="true"
      onPointerLeave={() => setHovered(null)}
      onClick={() => setPulseKey((k) => k + 1)}
      className={`inline-flex select-none items-center justify-center ${className}`}
    >
      {word.split("").map((ch, i) => {
        const dist = hovered === null ? 99 : Math.abs(hovered - i);
        const isDirect = dist === 0;
        const isNear = dist === 1;
        const isOuter = dist === 2;
        const translateY = isDirect ? -13 : isNear ? -6 : isOuter ? -2.5 : 0;
        const scale = isDirect ? 1.13 : isNear ? 1.055 : isOuter ? 1.02 : 1;
        const rotate = hovered === null ? 0 : isDirect ? (i % 2 === 0 ? -3.5 : 3.5) : isNear ? (hovered < i ? 2 : -2) : 0;

        return (
          <span
            key={`${i}-${pulseKey}`}
            className="rise inline-block"
            style={{
              animationDelay: pulseKey === 0 ? `${offset + i * 45}ms` : "0ms",
            }}
          >
            <span
              onPointerEnter={() => setHovered(i)}
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                transition: "transform 340ms cubic-bezier(0.22, 1, 0.36, 1), color 220ms ease, text-shadow 220ms ease",
                color: isDirect ? "#FFD92E" : isNear ? "#161616" : undefined,
                WebkitTextStroke: isDirect ? "2px #161616" : undefined,
                textShadow: isDirect
                  ? "0 10px 22px rgba(22, 22, 22, 0.22)"
                  : isNear
                    ? "0 6px 14px rgba(22, 22, 22, 0.16)"
                    : "none",
              }}
              className="relative inline-block cursor-pointer px-[0.008em] will-change-transform"
            >
              {ch}
              <span
                style={{
                  transform: `translateX(-50%) scale(${isDirect ? 1 : 0})`,
                  opacity: isDirect ? 1 : 0,
                  transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease",
                }}
                className="pointer-events-none absolute -bottom-1 left-1/2 h-1.5 w-1.5 rounded-full bg-ink"
              />
            </span>
          </span>
        );
      })}
    </span>
  );
}
