"use client";

import Image from "next/image";
import Link from "next/link";
import * as m from "framer-motion/m";
import { DarkKineticCanvas } from "@/components/AmbientBackground";
import { BrandBadge, type BrandKey } from "@/components/BrandLogo";
import { Tilt } from "@/components/Tilt";
import { IridescentFoil } from "@/components/IridescentFoil";
import {
  IconBookOpen,
  IconCheckCircle,
  IconDna,
  IconExternalLink,
  IconFactory,
  IconMedal,
  IconMicroscope,
  IconScale,
  IconTrophy,
} from "@/components/Icons";
import { getCompetition } from "@/content/competitions";
import {
  earlierCreativeWork,
  education,
  featuredRecognition,
  leadership,
  recognition,
  research,
} from "@/content/profile";

const recognitionBrands: Record<string, { key: BrandKey; label: string }> = {
  "Mochaverse at Venix 2026, IIM Bangalore": { key: "mochatrade", label: "Mochatrade · IIM Bangalore" },
  "Hero Campus Challenge Season 10": { key: "hero", label: "Hero MotoCorp" },
  "TVS Credit E.P.I.C 8.0": { key: "tvs-credit", label: "TVS Credit" },
  "GRAD 3.0 by Galderma": { key: "galderma", label: "Galderma" },
  "Maruti Suzuki XCELerate 2026 B-Track": { key: "maruti-suzuki", label: "Maruti Suzuki" },
  "The Ken's Case Competition 2026, The Great Rewiring": { key: "the-ken", label: "The Ken" },
  "Market Makers by Mochatrade (YC P26)": { key: "mochatrade", label: "Mochatrade · YC P26" },
  "IIC B-Plan Pitch Competition 2025, NIT Durgapur": { key: "nitd", label: "NIT Durgapur" },
  "Ophzeus 5.0, Sierra'23, IIM Sirmaur": { key: "iims", label: "IIM Sirmaur" },
};

export function Recognition() {
  const f = featuredRecognition;
  const featuredCase = f.slug ? getCompetition(f.slug) : undefined;

  return (
    <div className="relative">
      <m.div
        whileHover={{ y: -4, scale: 1.005 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <IridescentFoil className="rounded-2xl">
          <Link
            href={`/competitions/${f.slug}`}
            data-dark
            data-cursor="Read"
            className="group relative block overflow-hidden rounded-2xl bg-night p-5 sm:p-8 text-on-night md:p-14"
          >
            <span
              aria-hidden="true"
              className="blueprint pointer-events-none absolute inset-0 opacity-35"
            />
            <DarkKineticCanvas />
            <span className="relative z-10 grid gap-6 sm:gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
            <span>
              <span className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[11.5px] sm:text-[13px] text-on-night/75">
                <BrandBadge brand="zerodha" label="Zerodha" tone="dark" size="md" interactive={false} />
                <span>{f.event}</span>
              </span>
              <span className="wide mt-3 sm:mt-5 flex items-center gap-2 sm:gap-3 text-[clamp(28px,7vw,92px)] leading-[0.92] font-extrabold transition-colors group-hover:text-amber">
                <IconTrophy size={48} className="text-amber shrink-0 hidden sm:inline-block" />
                <span>1st Runner-Up</span>
              </span>
              {featuredCase && (
                <span className="mt-2.5 sm:mt-4 block max-w-[52ch] text-[13.5px] sm:text-[17px] leading-snug sm:leading-7 text-on-night/85">
                  {featuredCase.challenge}
                </span>
              )}
            </span>
            <span className="md:text-right">
              <span className="block font-display text-[36px] sm:text-[56px] leading-none font-bold tracking-[-0.04em] text-amber tabular md:text-[72px]">
                452
              </span>
              <span className="mt-1 sm:mt-2 block text-[12px] sm:text-base text-on-night/75">
                registrations, national competition
              </span>
              <span className="mt-4 sm:mt-6 inline-block rounded-full bg-amber px-3.5 sm:px-4 py-1 sm:py-1.5 font-mono text-[11.5px] sm:text-[13px] font-semibold text-[#161616] transition-transform group-hover:-translate-y-0.5">
                Read the competition case &rarr;
              </span>
            </span>
          </span>
        </Link>
        </IridescentFoil>
      </m.div>

      <ul className="mt-3.5 sm:mt-4 grid auto-rows-fr gap-2.5 sm:gap-3 md:grid-cols-3">
        {recognition.map((r) => {
          const brand = recognitionBrands[r.event];
          const compCase = r.slug ? getCompetition(r.slug) : undefined;
          const isWinner = r.result.toLowerCase().includes("winner");
          const body = (
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="flex flex-wrap items-center justify-between gap-1.5 font-mono text-[11px] sm:text-[12px] text-muted">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 sm:px-2.5 py-0.5 font-semibold text-[10px] sm:text-[11.5px] ${isWinner ? "bg-amber text-[#161616]" : "bg-sage text-ink"}`}>
                    {isWinner ? <IconTrophy size={11} className="shrink-0" /> : <IconMedal size={11} className="shrink-0" />}
                    <span>{r.result.replace("National ", "")}</span>
                  </span>
                  {brand && <BrandBadge brand={brand.key} label={brand.label} interactive={false} />}
                </span>
                <span className="mt-2.5 sm:mt-3.5 block font-display text-[16px] sm:text-[19px] leading-snug sm:leading-6 font-semibold tracking-[-0.01em] transition-colors group-hover:text-forest">
                  {r.event}
                </span>
                {compCase && (
                  <span className="mt-1.5 sm:mt-2 block text-[12.5px] sm:text-[14px] leading-snug sm:leading-relaxed text-muted">
                    {compCase.challenge}
                  </span>
                )}
              </div>
              <div className="mt-3.5 sm:mt-5 border-t border-line/60 pt-2.5 sm:pt-3.5">
                <span className="block font-mono text-[11px] sm:text-[12px] leading-snug sm:leading-5 text-muted tabular">
                  {r.scale}
                </span>
                {r.slug && (
                  <span className="mt-1.5 sm:mt-2 inline-flex items-center gap-1 font-mono text-[11px] sm:text-[12px] font-semibold text-primary">
                    Read full case study &rarr;
                  </span>
                )}
              </div>
            </div>
          );
          return (
            <m.li
              key={r.event}
              whileHover={{ y: -5, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
              data-peek={JSON.stringify({
                title: r.event,
                lines: compCase ? [r.result, r.scale, compCase.challenge] : [r.result, r.scale],
              })}
              className="h-full overflow-hidden rounded-xl sm:rounded-2xl glass-card transition-colors hover:border-ink"
            >
              {r.slug ? (
                <Link
                  href={`/competitions/${r.slug}`}
                  data-cursor="Read"
                  className="group block h-full p-4 sm:p-6 transition-colors hover:bg-amber/15"
                >
                  {body}
                </Link>
              ) : (
                <div
                  data-cursor="Verified"
                  className="group h-full p-4 sm:p-6 transition-colors hover:bg-sage/60"
                >
                  {body}
                </div>
              )}
            </m.li>
          );
        })}
      </ul>
    </div>
  );
}

export function Research() {
  const [lyrics, lungCancer, skinCancer, ricemill] = research;
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {/* 1. Springer ICBCC Paper */}
      <Tilt className="h-full">
        <article
          data-cursor="Paper"
          className="flex h-full flex-col justify-between rounded-xl sm:rounded-2xl glass-card p-4 sm:p-7 md:p-9 transition-transform duration-300 hover:-translate-y-1.5"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] text-muted">
                <IconBookOpen size={13} className="text-forest" />
                <span>{lyrics.kind}</span>
              </span>
              <BrandBadge brand="springer" interactive={false} />
            </div>
            <h3 className="mt-2.5 sm:mt-3.5 font-display text-[18px] sm:text-[24px] md:text-[26px] leading-snug sm:leading-8 font-semibold tracking-[-0.025em] text-ink">
              {lyrics.title}
            </h3>
            <div className="mt-3.5 sm:mt-5 flex flex-wrap items-baseline gap-2 sm:gap-3">
              <p className="font-display text-[32px] sm:text-[52px] md:text-[60px] leading-none font-bold tracking-[-0.04em] text-figure tabular">
                {lyrics.metric?.value ?? "400+"}
              </p>
              <span className="font-mono text-[10.5px] sm:text-[12px] text-muted">{lyrics.metric?.label ?? "accesses & 2 citations"}</span>
            </div>
            <ul className="mt-3.5 sm:mt-5 space-y-1.5 sm:space-y-2.5 text-[12.5px] sm:text-[15px] leading-snug sm:leading-relaxed text-ink/90">
              {lyrics.bullets.map((b) => (
                <li
                  key={b}
                  data-cursor="Finding"
                  className="rounded-lg sm:rounded-xl bg-paper/75 p-2 sm:p-3 transition-all duration-200 hover:translate-x-1 hover:bg-paper hover:shadow-xs"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {lyrics.link && (
            <div className="mt-4 sm:mt-5 border-t border-line/60 pt-2.5 sm:pt-3.5">
              <a
                href={lyrics.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] font-semibold text-primary transition-colors hover:underline break-words"
              >
                <span>Read Springer Publication</span>
                <IconExternalLink size={13} className="shrink-0" />
              </a>
            </div>
          )}
        </article>
      </Tilt>

      {/* 2. Lung Cancer AI Research */}
      <Tilt className="h-full">
        <article
          data-cursor="Medical AI"
          className="flex h-full flex-col justify-between rounded-xl sm:rounded-2xl glass-card p-4 sm:p-7 md:p-9 transition-transform duration-300 hover:-translate-y-1.5"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] text-muted">
                <IconMicroscope size={13} className="text-forest" />
                <span>{lungCancer.kind}</span>
              </span>
              <BrandBadge brand="vit" label="VIT Chennai" interactive={false} />
            </div>
            <h3 className="mt-2.5 sm:mt-3.5 font-display text-[18px] sm:text-[24px] md:text-[26px] leading-snug sm:leading-8 font-semibold tracking-[-0.025em] text-ink">
              {lungCancer.title}
            </h3>
            <div className="mt-3.5 sm:mt-5 flex flex-wrap items-baseline gap-2 sm:gap-3">
              <p className="font-display text-[32px] sm:text-[52px] md:text-[60px] leading-none font-bold tracking-[-0.04em] text-primary tabular">
                {lungCancer.metric?.value ?? "99.97%"}
              </p>
              <span className="font-mono text-[10.5px] sm:text-[12px] text-muted">{lungCancer.metric?.label ?? "test accuracy"}</span>
            </div>
            <ul className="mt-3.5 sm:mt-5 space-y-1.5 sm:space-y-2.5 text-[12.5px] sm:text-[15px] leading-snug sm:leading-relaxed text-muted">
              {lungCancer.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-lg sm:rounded-xl bg-paper/60 p-2 sm:p-3 transition-all duration-200 hover:translate-x-1 hover:bg-paper hover:text-ink"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-t border-line/60 pt-2.5 sm:pt-3.5 font-mono text-[10px] sm:text-[11px] text-muted">
            <span className="inline-flex items-center gap-1">
              <IconCheckCircle size={11} className="text-forest" />
              <span>Ensemble: Top 5 CNNs + L1 Meta-Learner</span>
            </span>
            <span>15,000 Biopsy Images</span>
          </div>
        </article>
      </Tilt>

      {/* 3. Skin Cancer Detection AI */}
      <Tilt className="h-full">
        <article
          data-cursor="Capstone AI"
          className="flex h-full flex-col justify-between rounded-xl sm:rounded-2xl glass-card p-4 sm:p-7 md:p-9 transition-transform duration-300 hover:-translate-y-1.5"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] text-muted">
                <IconDna size={13} className="text-forest" />
                <span>{skinCancer.kind}</span>
              </span>
              <BrandBadge brand="vit" label="VIT Chennai · ISIC" interactive={false} />
            </div>
            <h3 className="mt-2.5 sm:mt-3.5 font-display text-[18px] sm:text-[24px] md:text-[26px] leading-snug sm:leading-8 font-semibold tracking-[-0.025em] text-ink">
              {skinCancer.title}
            </h3>
            <div className="mt-3.5 sm:mt-5 flex flex-wrap items-baseline gap-2 sm:gap-3">
              <p className="font-display text-[32px] sm:text-[52px] md:text-[60px] leading-none font-bold tracking-[-0.04em] text-primary tabular">
                {skinCancer.metric?.value ?? "95.37%"}
              </p>
              <span className="font-mono text-[10.5px] sm:text-[12px] text-muted">{skinCancer.metric?.label ?? "AUC-ROC"}</span>
            </div>
            <ul className="mt-3.5 sm:mt-5 space-y-1.5 sm:space-y-2.5 text-[12.5px] sm:text-[15px] leading-snug sm:leading-relaxed text-muted">
              {skinCancer.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-lg sm:rounded-xl bg-paper/60 p-2 sm:p-3 transition-all duration-200 hover:translate-x-1 hover:bg-paper hover:text-ink"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-t border-line/60 pt-2.5 sm:pt-3.5 font-mono text-[10px] sm:text-[11px] text-muted">
            <span>ISIC 2017 · Dull Razor &amp; Chan-Vese</span>
            <span>Top 6 CNNs + KNN Meta-Learner</span>
          </div>
        </article>
      </Tilt>

      {/* 4. Rice-Mill Teaching Case */}
      <Tilt className="h-full">
        <article
          data-dark
          data-cursor="Case"
          className="flex h-full flex-col justify-between rounded-xl sm:rounded-2xl glass-card-dark p-4 sm:p-7 md:p-9 text-on-block transition-transform duration-300 hover:-translate-y-1.5"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] text-on-block/70">
                <IconFactory size={13} className="text-amber" />
                <span>{ricemill.kind}</span>
              </span>
              <BrandBadge brand="xlri" tone="dark" interactive={false} />
            </div>
            <h3 className="mt-2.5 sm:mt-3.5 font-display text-[18px] sm:text-[24px] md:text-[26px] leading-snug sm:leading-8 font-semibold tracking-[-0.02em] text-on-block">
              {ricemill.title}
            </h3>
            <div className="mt-3.5 sm:mt-5 flex flex-wrap items-baseline gap-2 sm:gap-3">
              <p className="font-display text-[32px] sm:text-[52px] md:text-[60px] leading-none font-bold tracking-[-0.04em] text-amber tabular">
                {ricemill.metric?.value ?? "Rs.2.3Cr"}
              </p>
              <span className="font-mono text-[10.5px] sm:text-[12px] text-on-block/70">{ricemill.metric?.label ?? "annual margin recovery"}</span>
            </div>
            <ul className="mt-3.5 sm:mt-5 space-y-1.5 sm:space-y-2.5 text-[12.5px] sm:text-[15px] leading-snug sm:leading-relaxed text-on-block/85">
              {ricemill.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-lg sm:rounded-xl bg-white/[0.06] p-2 sm:p-3 transition-all duration-200 hover:translate-x-1 hover:bg-white/[0.10]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-t border-white/10 pt-2.5 sm:pt-3.5 font-mono text-[10px] sm:text-[11px] text-on-block/70">
            <span className="inline-flex items-center gap-1">
              <IconScale size={11} className="text-amber" />
              <span>In Peer Review · Operational Audit</span>
            </span>
            <span>+37.5% Throughput Velocity</span>
          </div>
        </article>
      </Tilt>
    </div>
  );
}

// 7 roles, 7 cells: one feature tile spanning 2x2, four singles, two wide tiles.
export function Leadership() {
  const [lead, ...rest] = leadership;
  return (
    <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li
        data-peek={JSON.stringify({
          title: `${lead.role}, ${lead.org}`,
          lines: lead.bullets,
        })}
        className="sm:col-span-2 lg:row-span-2"
      >
        <Tilt className="h-full" max={5}>
          <div
            data-dark
            data-cursor="piXL"
            className="group relative flex h-full min-h-[300px] sm:min-h-[420px] flex-col justify-end overflow-hidden rounded-xl sm:rounded-2xl bg-night p-5 sm:p-8 text-white transition-transform duration-300 hover:-translate-y-1.5"
          >
            <Image
              src="/images/road-camera.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-105"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/70 to-[#161616]/10"
            />
            <div className="relative">
              <div className="mb-2 sm:mb-3">
                <BrandBadge brand="xlri" tone="dark" interactive={false} />
              </div>
              <p className="font-display text-[44px] sm:text-[80px] leading-none font-bold tracking-[-0.04em] text-amber tabular">
                {lead.figure}
              </p>
              <p className="mt-1 sm:mt-2 text-[13px] sm:text-base text-white/85">{lead.figureLabel}</p>
              <h3 className="mt-4 sm:mt-8 font-display text-[18px] sm:text-[24px] leading-snug sm:leading-8 font-semibold">
                {lead.role}
              </h3>
              <p className="text-[12.5px] sm:text-base text-white/85">
                {lead.org}, {lead.year}
              </p>
              <p className="mt-2.5 sm:mt-4 max-w-[48ch] text-[12.5px] sm:text-[15px] leading-snug sm:leading-6 text-white/85">
                {lead.bullets[0]}
              </p>
            </div>
          </div>
        </Tilt>
      </li>
      {rest.map((r, i) => (
        <li
          key={r.org}
          data-peek={JSON.stringify({
            title: `${r.role}, ${r.org}`,
            lines: r.bullets,
          })}
          className={i >= 4 ? "lg:col-span-2" : ""}
        >
          <Tilt className="h-full">
            <div
              data-cursor="Role"
              className="h-full rounded-xl sm:rounded-2xl glass-card p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-display text-[26px] sm:text-[36px] leading-none font-bold tracking-[-0.03em] text-figure tabular">
                  {r.figure}
                </p>
                <BrandBadge brand="xlri" interactive={false} />
              </div>
              <p className="mt-1.5 sm:mt-2 text-[12px] sm:text-[14px] leading-tight sm:leading-5 text-muted">
                {r.figureLabel}
              </p>
              <h3 className="mt-3.5 sm:mt-6 font-medium text-[14px] sm:text-base">{r.role}</h3>
              <p className="text-[12px] sm:text-[14px] leading-tight sm:leading-5 text-muted">
                {r.org}, {r.year}
              </p>
            </div>
          </Tilt>
        </li>
      ))}
    </ul>
  );
}

export function EarlierWork() {
  return (
    <details
      className="group mt-3.5 sm:mt-4 rounded-xl sm:rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:border-ink"
    >
      <summary
        data-cursor="Expand"
        className="flex min-h-12 sm:min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-4 sm:px-6 font-medium md:px-8 text-[13.5px] sm:text-base"
      >
        Earlier design and marketing work, 2020 to 2022
        <span
          aria-hidden="true"
          className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-sage font-mono text-lg sm:text-xl transition-transform duration-300 group-open:rotate-45 group-open:bg-amber"
        >
          +
        </span>
      </summary>
      <div className="grid gap-x-12 gap-y-4 sm:gap-y-6 px-4 sm:px-6 pb-5 sm:pb-8 md:grid-cols-2 md:px-8">
        {earlierCreativeWork.map((w) => (
          <m.div
            key={w.title}
            whileHover={{ x: 4, y: -2 }}
            data-cursor="Archive"
            className="rounded-lg sm:rounded-xl bg-paper/60 p-3 sm:p-4 transition-colors hover:bg-paper"
          >
            <p className="font-medium text-[13.5px] sm:text-base">{w.title}</p>
            <p className="mt-0.5 sm:mt-1 text-[12.5px] sm:text-[15px] leading-snug sm:leading-6 text-muted">{w.detail}</p>
          </m.div>
        ))}
      </div>
    </details>
  );
}

const eduBrands: Record<string, { key: BrandKey; label: string }> = {
  "XLRI Jamshedpur": { key: "xlri", label: "XLRI Jamshedpur" },
  "VIT Chennai": { key: "vit", label: "VIT Chennai" },
};

export function Education() {
  return (
    <table className="w-full text-left">
      <caption className="sr-only">Education, most recent first</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Institution</th>
          <th scope="col">Programme</th>
        </tr>
      </thead>
      <tbody className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {education.map((e, i) => {
          const brand = eduBrands[e.school];
          return (
            <m.tr
              key={e.school}
              data-dark={i === 0 ? "" : undefined}
              data-cursor={e.school.split(" ")[0]}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className={`grid content-start rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 ${
                i === 0
                  ? "glass-card-dark text-on-night"
                  : "glass-card text-ink hover:border-ink"
              }`}
            >
              <td
                className={`order-1 flex items-center justify-between gap-2 font-mono text-[11px] sm:text-[12px] tabular ${
                  i === 0 ? "text-amber" : "text-muted"
                }`}
              >
                <span>{e.years}</span>
                {brand && (
                  <BrandBadge
                    brand={brand.key}
                    label={brand.label}
                    tone={i === 0 ? "dark" : "light"}
                    interactive={false}
                  />
                )}
              </td>
              <th
                scope="row"
                className={`order-2 mt-2 sm:mt-3 font-display font-semibold tracking-[-0.02em] ${
                  i === 0
                    ? "text-[22px] leading-7 sm:text-[28px] sm:leading-8 md:text-[32px] md:leading-9"
                    : "text-[18px] leading-6 sm:text-[22px] sm:leading-7"
                }`}
              >
                {e.school}
              </th>
              <td
                className={`order-3 mt-1 sm:mt-1.5 text-[13px] sm:text-[15px] leading-snug sm:leading-6 ${
                  i === 0 ? "text-on-night/80" : "text-muted"
                }`}
              >
                {e.degree}
                {e.chips.length > 0 && (
                  <span className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {e.chips.map((c, idx) => (
                      <span
                        key={c}
                        data-cursor={c}
                        className={`rounded-full px-2.5 sm:px-3.5 py-0.5 font-mono text-[10.5px] sm:text-[12px] leading-5 sm:leading-6 tabular transition-transform duration-200 hover:-translate-y-0.5 ${
                          i === 0 && idx === 0
                            ? "bg-amber font-semibold text-[#161616]"
                            : i === 0
                              ? "bg-white/10 text-on-night hover:bg-white/20"
                              : "bg-sage text-ink hover:bg-amber"
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </span>
                )}
              </td>
            </m.tr>
          );
        })}
      </tbody>
    </table>
  );
}
