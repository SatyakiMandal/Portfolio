"use client";

import { useState } from "react";
import { HeroCanvas } from "@/components/AmbientBackground";
import { HeroCarousel } from "./HeroCarousel";
import { HeroScribble } from "./HeroScribble";

// Opening frame: Steven.com-inspired interactive 3D-projected ecosystem flywheel + mouse-reactive
// particle network across the entire canvas, tightly stacked & centered interactive display typography,
// hand-drawn annotations, and an endless ribbon of clickable highlights.

function InteractiveWord({
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
        const rotate =
          hovered === null
            ? 0
            : isDirect
              ? i % 2 === 0
                ? -3.5
                : 3.5
              : isNear
                ? hovered < i
                  ? 2
                  : -2
                : 0;

        return (
          <span
            key={`${i}-${pulseKey}`}
            className="rise inline-block"
            style={{ animationDelay: pulseKey === 0 ? `${offset + i * 45}ms` : "0ms" }}
          >
            <span
              data-cursor={word}
              onPointerEnter={() => setHovered(i)}
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                transition:
                  "transform 340ms cubic-bezier(0.22, 1, 0.36, 1), color 220ms ease, text-shadow 220ms ease",
                color: isDirect ? "#FFD92E" : isNear ? "#1F4D3A" : undefined,
                WebkitTextStroke: isDirect ? "2px #161616" : undefined,
                textShadow: isDirect
                  ? "0 10px 22px rgba(22, 22, 22, 0.22)"
                  : isNear
                    ? "0 6px 14px rgba(31, 77, 58, 0.16)"
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

export function Hero() {
  return (
    <section
      id="hero"
      data-top-section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
    >
      <div aria-hidden="true" className="hero-bg">
        <div className="grid-pan paper-grid" />
        <span className="blob b1 left-[-10%] top-[8%] h-[44vw] w-[44vw]" />
        <span className="blob b2 right-[-8%] top-[30%] h-[40vw] w-[40vw] [--blob:#cfc7ba]" />
        <span className="blob b3 bottom-[-12%] left-[30%] h-[36vw] w-[48vw]" />
        <HeroCanvas />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-5 border-l border-line md:left-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-5 border-r border-line md:right-10"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-5 pt-24 md:px-10">
        <HeroScribble />

        <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <p
            data-scribble="circle"
            data-cursor="Focus"
            className="fade-up hidden justify-self-start rounded-xl px-2 py-1 text-left font-mono text-[14px] leading-6 text-ink/85 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink lg:block"
            style={{ animationDelay: "500ms" }}
          >
            Strategy, pricing
            <br />
            and go-to-market
          </p>

          <h1
            id="hero-title"
            className="wide mx-auto flex flex-col items-center justify-center text-center text-[clamp(48px,9.6vw,148px)] leading-[0.82] font-extrabold tracking-[-0.03em] text-ink"
          >
            <span className="sr-only">Satyaki Mandal</span>
            <InteractiveWord word="Satyaki" offset={80} />
            <InteractiveWord word="Mandal" offset={240} className="-mt-[0.04em]" />
          </h1>

          <p
            data-scribble="from"
            data-cursor="Pedigree"
            className="fade-up hidden justify-self-end rounded-xl px-2 py-1 text-right font-mono text-[14px] leading-6 text-ink/85 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink lg:block"
            style={{ animationDelay: "500ms" }}
          >
            PGDM, XLRI Jamshedpur
            <br />
            Ex-Epsilon
          </p>
        </div>

        <p
          data-cursor="Summary"
          className="fade-up mt-6 max-w-[34ch] text-center text-lg leading-8 text-muted transition-colors duration-300 hover:text-ink lg:hidden"
          style={{ animationDelay: "500ms" }}
        >
          Strategy, pricing and go-to-market. PGDM at XLRI Jamshedpur, ex-Epsilon.
        </p>

        <a
          href="#work"
          data-scribble="to"
          data-magnetic
          data-cursor="Scroll"
          className="fade-up mt-9 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-all duration-200 hover:scale-[1.04] hover:bg-amber hover:text-[#161616] active:scale-[0.98]"
          style={{ animationDelay: "650ms" }}
        >
          See the work
        </a>
      </div>

      <div className="fade-up relative pb-20 pt-4" style={{ animationDelay: "800ms" }}>
        <HeroCarousel />
      </div>
    </section>
  );
}
