"use client";

import {
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import * as m from "framer-motion/m";
import { useEffect, useRef, useState } from "react";
import { experience, type Experience as Exp } from "@/content/profile";
import { BrandBadge, type BrandKey } from "@/components/BrandLogo";
import { IconDatabase, IconFactory, IconTrendingUp, IconWorkflow } from "@/components/Icons";

const brandEmblems: Record<string, { key: BrandKey; label: string }[]> = {
  Epsilon: [
    { key: "epsilon", label: "Epsilon" },
    { key: "walmart", label: "Walmart Account" },
  ],
  "Shree Gajanan Industries (rice mill, Nizamabad)": [
    { key: "gajanan", label: "Shree Gajanan Industries" },
  ],
};

const tones = ["glass-card-dark text-on-night", "glass-card-amber text-[#161616]"];
const years = ["2023 - 2025", "2026"];

function Role({ e, i }: { e: Exp; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [all, setAll] = useState(false);
  const [view, setView] = useState<"bullets" | "tracks">("bullets");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll-driven signature card effect: dynamic tilt, alternating slide-in, and spine node illumination
  // Completes quickly into upright alignment so cards never stay stuck at an angle when scrolling pauses
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "start 68%"],
  });

  const maxOffset = isMobile ? 18 : 65;
  const maxRotate = isMobile ? 2 : 3;
  const x = useTransform(scrollYProgress, [0, 1], [i % 2 ? -maxOffset : maxOffset, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [i % 2 ? -maxRotate : maxRotate, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.4, 1]);
  const node = useTransform(scrollYProgress, [0.65, 1], [0, 1]);

  const smoothX = useSpring(x, { stiffness: 150, damping: 24, mass: 0.6 });
  const smoothRotate = useSpring(rotate, { stiffness: 150, damping: 24, mass: 0.6 });
  const smoothOpacity = useSpring(opacity, { stiffness: 150, damping: 24 });

  const shown = all ? e.bullets : e.bullets.slice(0, 4);
  const listId = `exp-${e.company.split(" ")[0].toLowerCase()}`;
  const brands = brandEmblems[e.company] ?? [];
  const dark = i % 2 === 0;
  const leadValue = e.headlineMetric?.value ?? (dark ? "22%" : "37.5%");
  const leadLabel = e.headlineMetric?.label ?? (dark ? "ROI lift from 6 dashboards" : "higher milling throughput");
  const chips = e.chips ?? [];

  return (
    <div
      ref={ref}
      className="relative grid gap-3 pl-6 sm:pl-10 md:grid-cols-[180px_1fr] md:gap-10 md:pl-14"
    >
      {/* Node on the spine fills with vibrant amber as the panel arrives */}
      <span
        aria-hidden="true"
        className="absolute left-[6px] top-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink bg-paper md:left-[11px]"
      >
        <m.span
          className="h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_8px_rgba(255,215,0,0.8)]"
          style={{ scale: node }}
        />
      </span>
      <p className="wide text-[20px] sm:text-[26px] leading-8 font-extrabold text-ink/85 md:sticky md:top-28 md:self-start md:text-[30px]">
        {years[i]}
      </p>

      <m.article
        data-dark={dark ? "" : undefined}
        style={{ x: smoothX, rotate: smoothRotate, opacity: smoothOpacity }}
        className={`rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-10 transition-shadow duration-300 shadow-lg hover:shadow-2xl ${tones[i % tones.length]}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {brands.map((b) => (
                <BrandBadge
                  key={b.label}
                  brand={b.key}
                  label={b.label}
                  tone={dark ? "dark" : "amber"}
                  size="md"
                />
              ))}
              <span
                className={`font-mono text-[11px] sm:text-[13px] tabular ${dark ? "text-on-night/70" : "text-[#161616]/70"}`}
              >
                {e.dates}
              </span>
            </div>
            {e.scope && (
              <div
                className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[9.5px] sm:text-[11px] font-medium ${
                  dark
                    ? "border border-white/10 bg-white/[0.07] text-amber/90"
                    : "border border-[#161616]/10 bg-[#161616]/[0.08] text-[#161616]/85"
                }`}
              >
                {dark ? <IconDatabase size={11} className="text-amber shrink-0" /> : <IconFactory size={11} className="text-[#161616] shrink-0" />}
                <span>{e.scope}</span>
              </div>
            )}
            <h3 className="mt-2 font-display text-[20px] leading-tight font-semibold tracking-[-0.025em] sm:text-[28px] sm:leading-8 md:text-[34px] md:leading-10">
              {e.company}
            </h3>
            <p className={`text-[13px] sm:text-[16px] ${dark ? "text-on-night/75" : "text-[#161616]/75"}`}>
              {e.role}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span
              className={`block font-display text-[32px] leading-none font-bold tracking-[-0.04em] tabular sm:text-[56px] md:text-[72px] ${
                dark ? "text-amber" : "text-[#161616]"
              }`}
            >
              {leadValue}
            </span>
            <span
              className={`mt-1 block max-w-[24ch] text-[11px] sm:text-[13px] leading-[15px] sm:leading-[17px] ${
                dark ? "text-on-night/70" : "text-[#161616]/70"
              }`}
            >
              {leadLabel}
            </span>
          </div>
        </div>

        {chips.length > 0 && (
          <dl className="mt-4 sm:mt-6 grid grid-cols-2 gap-1.5 sm:gap-3 lg:grid-cols-4">
            {chips.map((c) => (
              <m.div
                key={c.k}
                data-cursor="Metric"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 340, damping: 20 }}
                className={`rounded-lg sm:rounded-2xl p-2 sm:p-4 transition-colors ${
                  dark
                    ? "bg-white/[0.05] ring-1 ring-white/10 hover:ring-amber/60"
                    : "bg-[#161616]/[0.06] ring-1 ring-[#161616]/10 hover:bg-[#161616]/12"
                }`}
              >
                <dt className={`font-mono text-[9.5px] sm:text-[11px] ${dark ? "text-on-night/65" : "text-[#161616]/65"}`}>
                  {c.k}
                </dt>
                <dd
                  className={`mt-0.5 font-display text-[15px] sm:text-[20px] font-bold leading-5 sm:leading-6 tabular md:text-[24px] ${
                    dark ? "text-amber" : "text-[#161616]"
                  }`}
                >
                  {c.v}
                </dd>
              </m.div>
            ))}
          </dl>
        )}

        {/* Interactive View Toggle */}
        <div
          className={`mt-5 sm:mt-8 flex flex-wrap items-center justify-between gap-2 border-t pt-4 sm:pt-6 ${
            dark ? "border-white/10" : "border-[#161616]/10"
          }`}
        >
          <div
            className={`flex items-center gap-1 rounded-full p-0.5 sm:p-1 ${
              dark ? "bg-white/[0.06]" : "bg-[#161616]/[0.07]"
            }`}
          >
            <button
              type="button"
              onClick={() => setView("bullets")}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-[12px] font-mono font-semibold transition-all cursor-pointer ${
                view === "bullets"
                  ? dark
                    ? "bg-amber text-[#161616] shadow-xs"
                    : "bg-[#161616] text-paper shadow-xs"
                  : dark
                    ? "text-on-night/70 hover:text-on-night"
                    : "text-[#161616]/70 hover:text-[#161616]"
              }`}
            >
              <IconTrendingUp size={12} className="shrink-0" />
              <span>Core Impact ({e.bullets.length})</span>
            </button>
            {e.tracks && e.tracks.length > 0 && (
              <button
                type="button"
                onClick={() => setView("tracks")}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-[12px] font-mono font-semibold transition-all cursor-pointer ${
                  view === "tracks"
                    ? dark
                      ? "bg-amber text-[#161616] shadow-xs"
                      : "bg-[#161616] text-paper shadow-xs"
                    : dark
                      ? "text-on-night/70 hover:text-on-night"
                      : "text-[#161616]/70 hover:text-[#161616]"
                }`}
              >
                <IconWorkflow size={12} className="shrink-0" />
                <span>Workstreams ({e.tracks.length})</span>
              </button>
            )}
          </div>
          <span className={`font-mono text-[10px] sm:text-[11px] ${dark ? "text-on-night/60" : "text-[#161616]/60"}`}>
            {view === "bullets" ? "Quantified business results" : "Operational workstreams"}
          </span>
        </div>

        {/* View Mode: Bullets */}
        {view === "bullets" && (
          <>
            <ul id={listId} className="mt-4 sm:mt-6 grid gap-2 sm:gap-x-6 sm:gap-y-3.5 md:grid-cols-2">
              {shown.map((b, k) => (
                <m.li
                  key={b}
                  data-cursor={`Impact 0${k + 1}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25 }}
                  className={`grid grid-cols-[22px_1fr] sm:grid-cols-[28px_1fr] items-start gap-2 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-[12.5px] sm:text-[15px] leading-snug sm:leading-6 transition-colors ${
                    dark
                      ? "bg-white/[0.06] ring-1 ring-white/5 hover:bg-white/[0.11] hover:ring-amber/40"
                      : "bg-[#161616]/[0.06] ring-1 ring-[#161616]/5 hover:bg-[#161616]/[0.12]"
                  }`}
                >
                  <span
                    className={`mt-0.5 font-mono text-[10px] sm:text-[11px] font-bold tabular ${
                      dark ? "text-amber" : "text-[#161616]/70"
                    }`}
                  >
                    0{k + 1}
                  </span>
                  <span>{b}</span>
                </m.li>
              ))}
            </ul>
            {e.bullets.length > 4 && (
              <m.button
                type="button"
                aria-expanded={all}
                aria-controls={listId}
                onClick={() => setAll((a) => !a)}
                data-magnetic
                data-cursor={all ? "Less" : "More"}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`mt-4 sm:mt-6 inline-flex min-h-9 sm:min-h-11 items-center rounded-full px-4 sm:px-5 text-[12px] sm:text-[14px] font-semibold cursor-pointer ${
                  dark ? "bg-amber text-[#161616]" : "bg-[#161616] text-paper"
                }`}
              >
                {all ? "Show fewer" : `Show all ${e.bullets.length}`}
              </m.button>
            )}
          </>
        )}

        {/* View Mode: Workstream Tracks */}
        {view === "tracks" && e.tracks && (
          <div className="mt-4 sm:mt-6 grid gap-2.5 sm:gap-4 md:grid-cols-2">
            {e.tracks.map((track, idx) => (
              <m.div
                key={track.title}
                data-cursor={`Track 0${idx + 1}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                className={`flex flex-col justify-between rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-colors ${
                  dark
                    ? "bg-white/[0.06] ring-1 ring-white/5 hover:bg-white/[0.10] hover:ring-amber/40"
                    : "bg-[#161616]/[0.06] ring-1 ring-[#161616]/5 hover:bg-[#161616]/[0.10]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[10px] sm:text-[11px] font-bold tabular ${
                        dark ? "text-amber" : "text-[#161616]/75"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <h4
                      className={`font-display text-[14px] sm:text-[16px] font-semibold tracking-tight ${
                        dark ? "text-white" : "text-[#161616]"
                      }`}
                    >
                      {track.title}
                    </h4>
                  </div>
                  <p
                    className={`mt-1.5 sm:mt-2.5 text-[12px] sm:text-[14px] leading-snug sm:leading-6 ${
                      dark ? "text-on-night/85" : "text-[#161616]/85"
                    }`}
                  >
                    {track.detail}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        )}

        {/* Tech Stack Ribbon */}
        {e.skills && e.skills.length > 0 && (
          <div
            className={`mt-5 sm:mt-8 flex flex-wrap items-center gap-1.5 sm:gap-2 border-t pt-3 sm:pt-5 ${
              dark ? "border-white/10" : "border-[#161616]/10"
            }`}
          >
            <span
              className={`font-mono text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase ${
                dark ? "text-on-night/60" : "text-[#161616]/60"
              }`}
            >
              Tech & Tools:
            </span>
            {e.skills.map((skill) => (
              <span
                key={skill}
                className={`rounded-lg px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[9.5px] sm:text-[11px] font-semibold transition-colors ${
                  dark
                    ? "border border-white/10 bg-white/[0.08] text-on-night/90 hover:bg-white/[0.14] hover:text-amber"
                    : "border border-[#161616]/10 bg-[#161616]/[0.08] text-[#161616]/90 hover:bg-[#161616]/[0.14]"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </m.article>
    </div>
  );
}

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <div ref={ref} className="relative space-y-10 sm:space-y-16 md:space-y-24">
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[15px] top-3 w-[2.5px] rounded-full bg-line md:left-[19px]"
      />
      <m.span
        aria-hidden="true"
        className="absolute bottom-0 left-[15px] top-3 w-[2.5px] origin-top rounded-full bg-amber md:left-[19px]"
        style={{ scaleY: fill }}
      />
      {experience.map((e, i) => (
        <Role key={e.company} e={e} i={i} />
      ))}
    </div>
  );
}
