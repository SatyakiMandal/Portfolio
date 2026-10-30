"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import * as m from "framer-motion/m";
import { useEffect, useId, useRef, useState } from "react";
import { ChartPieSlice, Coins, Database, RocketLaunch, Strategy, Tag, X, type Icon } from "@phosphor-icons/react";
import { SectionAmbient } from "@/components/AmbientBackground";

type Proof = { value: string; text: string; href: string };
type Skill = { id: string; name: string; icon: Icon; line: string; proofs: Proof[]; pos: string; depth: number; drift: [number, number]; dur: number };

// Each proof is a figure from data/case_studies.md or data/profile.json, linked to its case.
const skills: Skill[] = [
  {
    id: "pricing", name: "Pricing", icon: Tag, line: "Setting prices that buyers accept and that pay back the cost behind them.",
    proofs: [
      { value: "$30.5/ton", text: "Tata Steel green premium across 3 segments, modelled", href: "/work/tata-steel" },
      { value: "Rs.20", text: "Optimal Red Label sachet price; below Rs.12 buyers doubt quality", href: "/work/hul-red-label" },
    ],
    pos: "left-[2%] top-[14%] sm:left-[6%] sm:top-[18%] md:left-[12%] md:top-[16%]", depth: 26, drift: [14, -18], dur: 9,
  },
  {
    id: "market", name: "Market sizing", icon: ChartPieSlice, line: "Sizing the prize before choosing where to play.",
    proofs: [
      { value: "Rs.27,800Cr", text: "10% branded share of a Rs.2.78L Cr staples market (derived), Tata Consumer", href: "/work/tata-consumer-products" },
      { value: "$20.67Bn to $47.53Bn", text: "Footwear market reconciled across analyst sources, Campus Activewear", href: "/work/campus-activewear" },
    ],
    pos: "left-[1%] top-[56%] sm:left-[4%] sm:top-[58%] md:left-[18%] md:top-[54%]", depth: 18, drift: [-12, 16], dur: 11,
  },
  {
    id: "strategy", name: "Strategy", icon: Strategy, line: "Diagnosing why growth stalls, then building the plan to restart it.",
    proofs: [
      { value: "11% vs 21%", text: "Campus growth against its category, the start of a 5-year roadmap", href: "/work/campus-activewear" },
      { value: "Rs.50Cr", text: "XLRI alumni fund redesigned after tracing 5 governance failures to 1 root cause", href: "/work/xlri-alumni-policy" },
    ],
    pos: "left-[8%] top-[84%] sm:left-[22%] sm:top-[84%] md:left-[30%] md:top-[80%]", depth: 32, drift: [18, -10], dur: 13,
  },
  {
    id: "gtm", name: "Go-to-market", icon: RocketLaunch, line: "Picking the channel and the message that move the first buyers.",
    proofs: [
      { value: "56.1%", text: "Vending channel used for tiered sampling, Hindustan Unilever Red Label", href: "/work/hul-red-label" },
      { value: "18.2M", text: "Target urban households behind a >60% e-commerce and modern trade mix", href: "/work/tata-consumer-products" },
    ],
    pos: "right-[2%] top-[12%] sm:right-[6%] sm:top-[14%] md:right-[13%] md:top-[18%]", depth: 22, drift: [-16, 12], dur: 10,
  },
  {
    id: "finance", name: "Corporate finance", icon: Coins, line: "Finding where value is created or lost, and what would reverse it.",
    proofs: [
      { value: "24.47%", text: "Ajooni Biotech WACC behind a 20+ pp ROIC-WACC gap", href: "/work/ajooni-biotech" },
      { value: "24.5% vs 7.9%", text: "Core ROCE against group ROCE, Tata Consumer valuation audit", href: "/work/tata-consumer-products" },
    ],
    pos: "right-[1%] top-[50%] sm:right-[4%] sm:top-[52%] md:right-[17%] md:top-[50%]", depth: 30, drift: [12, 18], dur: 12,
  },
  {
    id: "data", name: "Data and product", icon: Database, line: "Turning data into dashboards, models and products people use.",
    proofs: [
      { value: "~$4M", text: "Media spend reallocation on the Walmart account at Epsilon", href: "/#experience" },
      { value: "2,592", text: "Companies covered by Arthdex, the research platform I built", href: "/work/arthdex" },
    ],
    pos: "right-[8%] top-[82%] sm:right-[20%] sm:top-[82%] md:right-[29%] md:top-[78%]", depth: 20, drift: [-14, -14], dur: 14,
  },
];

function FloatingIcon({ s, open, onOpen, mx, my }: { s: Skill; open: boolean; onOpen: (el: HTMLElement) => void; mx: ReturnType<typeof useSpring>; my: ReturnType<typeof useSpring> }) {
  const reduce = useReducedMotion();
  const px = useTransform(mx, (v) => -v * s.depth);
  const py = useTransform(my, (v) => -v * s.depth);
  const Icon = s.icon;
  return (
    <m.div className={`absolute ${s.pos} z-20`} style={{ x: px, y: py }}>
      <m.div
        animate={reduce ? undefined : { x: [0, s.drift[0], 0, -s.drift[0], 0], y: [0, s.drift[1], 0, -s.drift[1], 0], rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut" }}
      >
        <m.button
          type="button"
          onClick={(e) => onOpen(e.currentTarget)}
          aria-expanded={open}
          aria-controls="skill-panel"
          data-cursor="Details"
          whileHover={{ scale: 1.22, rotate: 10 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 360, damping: 18 }}
          className={`group relative flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full ${open ? "bg-amber text-[#161616] ring-2 ring-ink" : "bg-ink text-paper shadow-[0_14px_30px_-12px_rgb(22_22_22/0.6)]"}`}
        >
          <span aria-hidden="true" className="absolute inset-0 rounded-full ring-2 ring-amber/0 transition-[box-shadow,transform] duration-500 group-hover:scale-150 group-hover:ring-amber/60" />
          <Icon size={22} className="md:hidden" weight="duotone" aria-hidden="true" />
          <Icon size={30} className="hidden md:inline-block" weight="duotone" aria-hidden="true" />
          <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-[12px] font-medium text-paper opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            {s.name}
          </span>
          <span className="sr-only">{s.name}: show details</span>
        </m.button>
      </m.div>
    </m.div>
  );
}

export function PortraitReveal() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [anchor, setAnchor] = useState<{ left: number; top: number; side: "left" | "right" } | null>(null);
  const openFor = (id: string, el: HTMLElement) => {
    if (active === id) {
      setActive(null);
      return;
    }
    const box = stage.current?.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    if (box) {
      const panelW = 380;
      const panelH = 440;
      const side = r.left + r.width / 2 - box.left < box.width / 2 ? "right" : "left";
      const left = side === "right" ? r.right - box.left + 16 : r.left - box.left - panelW - 16;
      const top = Math.min(Math.max(r.top - box.top - 40, 12), box.height - panelH - 12);
      setAnchor({ left: Math.max(12, Math.min(left, box.width - panelW - 12)), top, side });
    }
    setActive(id);
  };
  const [inside, setInside] = useState(false);
  const titleId = useId();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blockY = useTransform(scrollYProgress, [0, 0.45], ["18%", "0%"]);
  const photoY = useTransform(scrollYProgress, [0, 0.5], ["12%", "0%"]);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 140, damping: 22 });
  const my = useSpring(rawY, { stiffness: 140, damping: 22 });
  const skill = skills.find((s) => s.id === active) ?? null;

  useEffect(() => {
    if (!active) return;
    const t = window.setTimeout(() => document.getElementById("skill-panel")?.scrollIntoView({ block: "nearest", behavior: "smooth" }), 350);
    return () => window.clearTimeout(t);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section
      ref={ref}
      aria-labelledby={titleId}
      className="relative -mt-8 overflow-hidden pt-8"
      onPointerEnter={() => setInside(true)}
      onPointerLeave={() => {
        setInside(false);
        rawX.set(0);
        rawY.set(0);
      }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        rawX.set((e.clientX - r.left) / r.width - 0.5);
        rawY.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <SectionAmbient variant="orbits" />
      <h2
        id={titleId}
        data-grow
        data-cursor="Pillars"
        className="relative z-10 mx-auto w-fit max-w-[1280px] rounded-2xl px-4 sm:px-5 py-1 font-display text-[22px] leading-tight sm:text-[28px] sm:leading-8 font-semibold tracking-[-0.02em] transition-transform duration-300 hover:translate-x-1 md:px-10 md:text-[40px] md:leading-[44px]"
      >
        Six things I work on. <span className="text-muted">Click one for the proof.</span>
      </h2>
      <div ref={stage} className="relative z-10 mx-auto mt-4 sm:mt-6 h-[min(125vw,540px)] sm:h-[min(150vw,700px)] max-w-[1440px] md:h-[720px]">
        <m.div style={{ y: blockY }} className="stepped absolute inset-x-[4%] bottom-0 top-[22%] bg-amber md:inset-x-[14%]" />
        <m.div style={{ y: photoY }} className="absolute inset-x-0 bottom-0 mx-auto h-[86%] w-[min(78vw,470px)]">
          <Image
            src="/images/profile-snow.webp"
            alt="Satyaki in a blue jacket in falling snow, face turned to the sky, smiling"
            fill
            sizes="(min-width: 768px) 470px, 78vw"
            className={`object-contain object-bottom transition-[filter,transform] duration-700 ${inside || active ? "scale-[1.015] grayscale-0" : "grayscale"}`}
          />
        </m.div>

        {skills.map((s) => (
          <FloatingIcon key={s.id} s={s} open={active === s.id} onOpen={(el) => openFor(s.id, el)} mx={mx} my={my} />
        ))}

        <AnimatePresence>
          {skill && (
            <m.div
              id="skill-panel"
              role="region"
              aria-live="polite"
              aria-label={`${skill.name} details`}
              key={skill.id}
              style={anchor ? ({ "--pl": `${anchor.left}px`, "--pt": `${anchor.top}px`, transformOrigin: anchor.side === "right" ? "left center" : "right center" } as React.CSSProperties) : undefined}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="glass-strong absolute inset-x-4 bottom-4 z-40 rounded-2xl p-5 text-[#161616] md:inset-x-auto md:bottom-auto md:left-[var(--pl)] md:top-[var(--pt)] md:w-[380px] md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#161616]/65">Capability</p>
                  <p className="mt-1 font-display text-[24px] leading-7 font-semibold tracking-[-0.02em]">{skill.name}</p>
                </div>
                <button type="button" onClick={() => setActive(null)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#161616]/8 hover:bg-[#161616]/15">
                  <X size={18} aria-hidden="true" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <p className="mt-3 text-[15px] leading-6 text-[#161616]/80">{skill.line}</p>
              <ul className="mt-4 space-y-3">
                {skill.proofs.map((p) => (
                  <li key={p.text}>
                    <Link href={p.href} data-cursor="Open" className="group block rounded-xl bg-white/70 p-3 ring-1 ring-[#161616]/5 transition-all hover:-translate-y-0.5 hover:bg-white">
                      <span className="block font-display text-[22px] leading-7 font-bold tracking-[-0.02em]">{p.value}</span>
                      <span className="block text-[13px] leading-[18px] text-[#161616]/75">{p.text}</span>
                      <span className="mt-1 block text-[12px] font-medium">Read the case &rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
