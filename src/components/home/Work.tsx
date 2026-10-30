"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { useState } from "react";
import { filters, projects, type Filter, type KeyNumber } from "@/content/projects";
import { BrandBadge, type BrandKey } from "@/components/BrandLogo";
import { ScrambleText } from "@/components/ScrambleText";

const tones = [
  "glass-card-amber text-[#161616]",
  "glass-card text-ink",
  "glass-card-dark text-on-night",
  "glass-card text-ink",
];

const projectBrandMap: Record<string, { key: BrandKey; label: string }> = {
  "tata-steel": { key: "tata-steel", label: "Tata Steel" },
  "tata-consumer-products": { key: "tata-consumer-products", label: "Tata Sampann" },
  "campus-activewear": { key: "campus-activewear", label: "Campus" },
  "hul-red-label": { key: "hul-red-label", label: "Brooke Bond Red Label" },
  "xlri-alumni-policy": { key: "xlri", label: "XLRI Jamshedpur" },
  "1001-stories": { key: "1001-stories", label: "1001 Stories" },
  "ajooni-biotech": { key: "ajooni-biotech", label: "Ajooni Biotech" },
  arthdex: { key: "arthdex", label: "Arthdex" },
};

type Card = {
  href: string;
  slug: string;
  title: string;
  meta: string;
  figure: string;
  figureLabel: string;
  line: string;
  badge?: string;
  brand?: { key: BrandKey; label: string };
  chips?: [string, string];
  filters?: Filter[];
  keyNumbers: KeyNumber[];
  takeaway: string;
};

const projectCards: Card[] = projects.map((p) => ({
  href: `/work/${p.slug}`,
  slug: p.slug,
  title: p.title,
  meta: `${p.tag}, ${p.year}`,
  figure: p.cardNumber.value,
  figureLabel: p.cardNumber.label,
  line: p.question,
  badge: p.modelled ? "Modelled" : undefined,
  brand: projectBrandMap[p.slug],
  chips: p.chips,
  filters: p.filters,
  keyNumbers: p.keyNumbers,
  takeaway: p.findings[0] ?? "",
}));

function getCardSpan(index: number, total: number) {
  const rem3 = total % 3;
  const is2xlSpan3 = rem3 === 2 && index >= total - 2;
  const is2xlSpan6 = rem3 === 1 && index === total - 1;

  const rem2 = total % 2;
  const isMdSpan6 = rem2 === 1 && index === total - 1;

  const mdClass = isMdSpan6 ? "md:col-span-6" : "md:col-span-3";
  const xlClass = is2xlSpan6 ? "2xl:col-span-6" : is2xlSpan3 ? "2xl:col-span-3" : "2xl:col-span-2";

  return `col-span-1 ${mdClass} ${xlClass}`;
}

export function WorkGrid() {
  const [domain, setDomain] = useState<"All" | Filter>("All");

  const visibleProjects = domain === "All" ? projectCards : projectCards.filter((c) => c.filters?.includes(domain));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.1em] text-muted">
          Filter by practice area ({visibleProjects.length} of {projectCards.length} live projects)
        </p>

        <div role="group" aria-label="Filter projects by domain" className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          {(["All", ...filters] as const).map((f) => {
            const active = domain === f;
            const count = f === "All" ? projectCards.length : projectCards.filter((c) => c.filters?.includes(f)).length;
            return (
              <m.button
                key={f}
                type="button"
                aria-pressed={active}
                data-cursor="Filter"
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setDomain(f)}
                className={`inline-flex min-h-7 sm:min-h-9 items-center gap-1 sm:gap-1.5 rounded-full px-2.5 sm:px-3.5 font-mono text-[11px] sm:text-[12px] transition-colors duration-200 cursor-pointer ${
                  active
                    ? "bg-amber font-semibold text-[#161616] shadow-xs ring-1 ring-ink/20"
                    : "border border-line bg-surface/60 text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                <span>{f}</span>
                <span className="tabular opacity-60">{count}</span>
              </m.button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 sm:mt-10">
        <AnimatePresence mode="wait">
          <m.div
            key={domain}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="grid gap-6 md:grid-cols-6 lg:gap-8">
              {visibleProjects.map((c, i) => {
                const tone = tones[i % tones.length];
                const isNight =
                  tone.includes("glass-card-dark") ||
                  tone.includes("bg-night") ||
                  tone.includes("text-on-night");
                const isAmber =
                  tone.includes("glass-card-amber") ||
                  tone.includes("bg-amber");
                return (
                  <li key={c.href} className={getCardSpan(i, visibleProjects.length)}>
                    <m.div
                      whileHover={{ y: -6 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ type: "spring", stiffness: 380, damping: 26, mass: 0.25 }}
                      className="h-full"
                    >
                      <Link
                        href={c.href}
                        data-cursor="Open"
                        data-grow
                        data-dark={isNight ? "" : undefined}
                        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                      >
                        <article
                          className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-2xl ${tone}`}
                        >
                          {/* Corner ambient glow */}
                          <div
                            aria-hidden="true"
                            className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 ${
                              isNight
                                ? "bg-amber/8 group-hover:bg-amber/16"
                                : isAmber
                                ? "bg-white/20 group-hover:bg-white/35"
                                : "bg-amber/15 group-hover:bg-amber/25"
                            }`}
                          />

                          <div className="relative z-10 flex flex-1 flex-col justify-between">
                            {/* Top Meta Bar */}
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-current/10 pb-2.5 sm:pb-4">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                                  {c.brand && (
                                    <BrandBadge
                                      brand={c.brand.key}
                                      label={c.brand.label}
                                      tone={isNight ? "dark" : isAmber ? "amber" : "light"}
                                      interactive={false}
                                    />
                                  )}
                                  <span className="font-mono text-[11px] sm:text-[12px] opacity-75">{c.meta}</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                                  {c.chips?.map((ch) => (
                                    <span
                                      key={ch}
                                      className={`rounded-full px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] leading-5 ${
                                        isNight
                                          ? "border border-white/20 bg-white/10 text-on-night"
                                          : isAmber
                                          ? "border border-[#161616]/20 bg-[#161616]/10 text-[#161616]"
                                          : "border border-ink/10 bg-ink/5 text-ink/90"
                                      }`}
                                    >
                                      {ch}
                                    </span>
                                  ))}
                                  {c.badge && (
                                    <span
                                      className={`rounded-full px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold leading-5 ${
                                        isAmber ? "bg-[#161616] text-amber" : "bg-amber text-[#161616]"
                                      }`}
                                    >
                                      {c.badge}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Title & Core Question */}
                              <div className="mt-3.5 sm:mt-5">
                                <h3 className="font-display text-[19px] sm:text-[25px] font-bold leading-tight tracking-[-0.02em] group-hover:underline decoration-amber decoration-2 underline-offset-4">
                                  {c.title}
                                </h3>
                                <p className="mt-1.5 text-[12.5px] sm:text-[14px] leading-snug sm:leading-relaxed opacity-85 whitespace-normal break-words">
                                  {c.line}
                                </p>
                              </div>
                            </div>

                            {/* Anchor Metric & Supporting Key Numbers Strip */}
                            <div
                              className={`my-3 sm:my-5 rounded-xl sm:rounded-2xl p-3 sm:p-5 ring-1 ${
                                isNight
                                  ? "bg-white/[0.06] ring-white/15"
                                  : "bg-current/5 ring-current/10"
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2 border-b border-current/10 pb-2 sm:pb-3">
                                <div>
                                  <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 font-medium">
                                    Anchor Metric
                                  </span>
                                  <span className="font-display text-[clamp(24px,5.5vw,46px)] font-extrabold leading-none tracking-tight tabular">
                                    <ScrambleText triggerKey={domain}>{c.figure}</ScrambleText>
                                  </span>
                                </div>
                                <span className="font-mono text-[10.5px] sm:text-[12px] leading-tight opacity-75 sm:text-right max-w-[28ch]">
                                  {c.figureLabel}
                                </span>
                              </div>

                              {/* Supporting Data Grid: 3 verified figures from the case */}
                              <div className="mt-2 sm:mt-3 grid grid-cols-3 gap-1 sm:gap-2">
                                {c.keyNumbers.slice(1, 4).map((kn, idx) => (
                                  <div
                                    key={idx}
                                    className={`rounded-md sm:rounded-xl p-1.5 sm:p-2.5 ${
                                      isNight
                                        ? "bg-white/[0.08] border border-white/10"
                                        : "bg-current/5"
                                    }`}
                                  >
                                    <span className="block font-display text-[12.5px] sm:text-[16px] font-bold leading-tight tabular">
                                      {kn.value}
                                    </span>
                                    <span className="mt-0.5 block font-mono text-[9px] sm:text-[10px] leading-tight opacity-75 whitespace-normal break-words" title={kn.label}>
                                      {kn.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Verified Key Takeaway */}
                            {c.takeaway && (
                              <div
                                className={`mb-2.5 sm:mb-4 border-l-2 pl-2 sm:pl-3 ${
                                  isNight ? "border-amber" : isAmber ? "border-[#161616]" : "border-amber-dark"
                                }`}
                              >
                                <p
                                  className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-wider font-bold ${
                                    isNight ? "text-amber" : isAmber ? "text-[#161616]" : "text-amber-dark"
                                  }`}
                                >
                                  Key Finding
                                </p>
                                <p className="mt-0.5 text-[11.5px] sm:text-[13px] leading-snug opacity-95 whitespace-normal break-words">
                                  {c.takeaway}
                                </p>
                              </div>
                            )}

                            {/* Footer Link */}
                            <div className="flex items-center justify-between border-t border-current/10 pt-2.5 sm:pt-4">
                              <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] sm:text-[12px] font-semibold tracking-wide">
                                Read full case & model
                              </span>
                              <span
                                aria-hidden="true"
                                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/25 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:border-current"
                              >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M3 11L11 3M5 3h6v6" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </m.div>
                  </li>
                );
              })}
            </ul>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
