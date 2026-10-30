"use client";

import { useReducedMotion } from "framer-motion";
import * as m from "framer-motion/m";
import { useState } from "react";
import { DarkKineticCanvas } from "@/components/AmbientBackground";
import { StatCounter } from "@/components/StatCounter";
import { stats } from "@/content/profile";

// Context shown in the cursor's detail card. All from data/profile.json.
const context: Record<string, { title: string; lines: string[]; href: string }> = {
  "~$4M": {
    title: "Epsilon, Walmart account",
    lines: ["Associate Data Scientist, Aug 2023 - Jun 2025", "Helped recover ~3.5pp category share and avoid a $1.2M loss"],
    href: "#experience",
  },
  "Rs.9.19Cr": {
    title: "Shree Gajanan Industries",
    lines: ["Supply Chain Intern, Apr - May 2026, Grade A+", "Byproduct offset model on 87,448 quintals"],
    href: "#experience",
  },
  "99.87": {
    title: "XAT 2025",
    lines: ["99.87 percentile", "PGDM-BM at XLRI Jamshedpur, 2025 - 2027"],
    href: "#education",
  },
  "1st Runner-Up": {
    title: "TENET 2026, sponsored by Zerodha",
    lines: ["National 1st Runner-Up", "452 registrations"],
    href: "/competitions/tenet-2026",
  },
};

// Dark statement band: full-canvas continuous kinetic wave & constellation background,
// interactive phrase highlights, ONE single hand-drawn animated line, and interactive proof cards.
export function Statement() {
  const reduce = useReducedMotion();
  const [drawCycle, setDrawCycle] = useState(0);

  return (
    <section
      id="statement"
      aria-labelledby="statement-title"
      data-dark
      className="relative overflow-hidden bg-night py-8 sm:py-14 text-on-night md:py-20"
    >
      {/* Full-canvas continuous animated background (waves, constellation nodes, central/mid orbital rings, cursor spotlight) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="night-grid-pan night-grid absolute -inset-16 opacity-80" />
        <span className="night-orb o1 -left-[8%] top-[8%] h-[42vw] w-[42vw]" />
        <span className="night-orb o2 -right-[8%] bottom-[4%] h-[38vw] w-[38vw] [--orb:rgb(255_217_46/0.12)]" />
        <span className="night-orb o3 left-[32%] top-[22%] h-[34vw] w-[34vw] [--orb:rgb(31_77_58/0.22)]" />
        <DarkKineticCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] 2xl:max-w-[1520px] px-4 sm:px-5 md:px-10">
        <m.h2
          id="statement-title"
          data-cursor="Redraw"
          onClick={() => setDrawCycle((c) => c + 1)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mx-auto max-w-[18ch] cursor-pointer select-none text-center font-display text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] font-semibold tracking-[-0.025em] md:text-[68px] md:leading-[74px]"
        >
          <span className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-amber/90">
            Two years turning
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:-translate-y-1 hover:text-amber">
            Walmart media data
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:-translate-y-1 hover:text-amber">
            into decisions.
          </span>{" "}
          <span className="inline-block transition-transform duration-300 hover:-translate-y-1">
            Now
          </span>{" "}
          <span className="inline-block text-amber transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
            pricing, markets and growth.
          </span>
        </m.h2>

        {/* ONE single hand-drawn animated line */}
        <svg
          aria-hidden="true"
          viewBox="0 0 900 96"
          className="mx-auto mt-2 h-10 sm:h-16 w-full max-w-3xl text-amber md:mt-5 md:h-24"
          fill="none"
        >
          <m.path
            key={drawCycle}
            d="M 28 58 C 145 18, 235 78, 368 42 C 462 16, 495 74, 456 64 C 422 55, 488 18, 618 48 C 724 72, 802 26, 874 38"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0, opacity: 0.9 }}
            animate={
              reduce
                ? { pathLength: 1 }
                : {
                    pathLength: [0, 1, 1, 0.96, 1],
                    opacity: [0.4, 1, 1, 0.9, 1],
                  }
            }
            transition={
              reduce
                ? undefined
                : {
                    duration: 5.5,
                    times: [0, 0.38, 0.7, 0.85, 1],
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: "easeInOut",
                  }
            }
          />
        </svg>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 md:mt-14 md:grid-cols-4 md:gap-6">
          {stats.map((s, idx) => {
            const info = context[s.value];
            return (
              <m.a
                key={s.label}
                href={info?.href ?? "#experience"}
                data-cursor="Explore"
                data-magnetic
                data-peek={JSON.stringify({ title: info.title, lines: info.lines })}
                whileHover={{ y: -8, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="glass-card-dark group relative flex flex-col-reverse justify-between gap-2 sm:gap-3 overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6"
              >
                {/* Live motion sparkline bar at the top of each dark stat card */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 overflow-hidden bg-white/5">
                  <m.div
                    initial={{ x: "-100%" }}
                    animate={reduce ? undefined : { x: ["100%", "-100%"] }}
                    transition={{
                      duration: 4.5 + idx * 0.7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-full w-1/2 bg-gradient-to-r from-transparent via-amber to-transparent opacity-60 group-hover:opacity-100"
                  />
                </div>

                <span className="block text-[12px] sm:text-[14px] leading-tight sm:leading-5 text-on-night/80 transition-colors group-hover:text-on-night">
                  {s.label}
                </span>
                <span
                  className={`block font-display font-bold tracking-[-0.03em] transition-colors group-hover:text-amber ${
                    s.countTo === undefined
                      ? "text-[20px] leading-tight sm:text-[28px] sm:leading-8 md:text-[34px] md:leading-10"
                      : "text-[26px] leading-none sm:text-[40px] md:text-[52px]"
                  }`}
                >
                  <StatCounter stat={s} />
                </span>
              </m.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
