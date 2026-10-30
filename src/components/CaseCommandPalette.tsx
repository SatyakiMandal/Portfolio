"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { BrandBadge, SLUG_TO_BRAND, type BrandKey } from "@/components/BrandLogo";
import { competitions } from "@/content/competitions";
import { projects } from "@/content/projects";

type PaletteItem = {
  id: string;
  group:
    | "Work Experience & Analytics"
    | "Research & Academic Publications"
    | "Live & Research Projects"
    | "Case Competitions"
    | "Portfolio Sections";
  title: string;
  subtitle: string;
  metric: string;
  href: string;
  brand?: BrandKey;
};

const additionalCompetitions: PaletteItem[] = [
  {
    id: "comp-hero-s10",
    group: "Case Competitions",
    title: "Hero Campus Challenge Season 10",
    subtitle: "National Semi-Finalist · 1 of 60 teams from 206,673 participants",
    metric: "1 of 60",
    href: "/#recognition",
    brand: "hero",
  },
  {
    id: "comp-tvs-epic-8",
    group: "Case Competitions",
    title: "TVS Credit E.P.I.C 8.0",
    subtitle: "National Semi-Finalist · 1 of 319 teams from 36,900 participants",
    metric: "1 of 319",
    href: "/#recognition",
    brand: "tvs-credit",
  },
  {
    id: "comp-the-ken-2026",
    group: "Case Competitions",
    title: "The Ken's Case Competition 2026",
    subtitle: "National Semi-Finalist · Top 7% of 6,000 teams across 300 colleges",
    metric: "Top 7%",
    href: "/#recognition",
    brand: "the-ken",
  },
  {
    id: "comp-iic-nitd-2025",
    group: "Case Competitions",
    title: "IIC B-Plan Pitch Competition 2025, NIT Durgapur",
    subtitle: "National Finalist · 627 teams",
    metric: "Finalist",
    href: "/#recognition",
    brand: "nitd",
  },
  {
    id: "comp-ophzeus-iims-2023",
    group: "Case Competitions",
    title: "Ophzeus 5.0, Sierra'23, IIM Sirmaur",
    subtitle: "National Finalist · 493 teams",
    metric: "Finalist",
    href: "/#recognition",
    brand: "iims",
  },
];

const ALL_ITEMS: PaletteItem[] = [
  {
    id: "exp-epsilon",
    group: "Work Experience & Analytics",
    title: "Epsilon (Walmart Account)",
    subtitle: "Associate Data Scientist · 22% ROI lift across 50+ networks · ~$4M reallocated · $5M+ Super Bowl revenue",
    metric: "22% ROI Lift",
    href: "/#experience",
    brand: "epsilon",
  },
  {
    id: "exp-gajanan",
    group: "Work Experience & Analytics",
    title: "Shree Gajanan Industries (Rice Mill)",
    subtitle: "Supply Chain Intern (SIP, Grade A+) · Rs.9.19Cr byproduct offset · 37.5% throughput velocity lift",
    metric: "Rs.9.19Cr Saved",
    href: "/#experience",
    brand: "shree-gajanan",
  },
  {
    id: "res-springer",
    group: "Research & Academic Publications",
    title: "Lyrics Generation Using LSTM and RNN",
    subtitle: "Springer ICBCC 2022 · 4-layer Bidirectional CuDNNLSTM · 15x GPU speedup · <0.06 loss · DOI published",
    metric: "400+ Accesses",
    href: "/#research",
    brand: "springer",
  },
  {
    id: "res-lung-cancer",
    group: "Research & Academic Publications",
    title: "Lung Cancer Histopathology AI Prediction System",
    subtitle: "BioMedical AI · VIT Chennai Summer Internship · 18 CNNs benchmarked · 99.97% test accuracy (0.9997 F1)",
    metric: "99.97% Accuracy",
    href: "/#research",
    brand: "vit",
  },
  {
    id: "res-skin-cancer",
    group: "Research & Academic Publications",
    title: "Skin Cancer Detection from Dermoscopic Images",
    subtitle: "BioMedical AI · B.Tech Capstone Thesis · ISIC 2017 · Dull Razor & Chan-Vese · 95.37% AUC-ROC",
    metric: "95.37% AUC-ROC",
    href: "/#research",
    brand: "vit",
  },
  {
    id: "res-ricemill",
    group: "Research & Academic Publications",
    title: "Rice-Mill Supply Chain Operational Teaching Case",
    subtitle: "Management Teaching Case in Peer Review · XLRI Jamshedpur · Rs.2.3Cr margin recovery · 142 pages",
    metric: "Rs.2.3Cr Margin",
    href: "/#research",
    brand: "xlri",
  },
  ...projects.map((p): PaletteItem => ({
    id: `proj-${p.slug}`,
    group: "Live & Research Projects",
    title: p.title,
    subtitle: `${p.tag} · ${p.question}`,
    metric: p.cardNumber.value,
    href: `/work/${p.slug}`,
    brand: SLUG_TO_BRAND[p.slug],
  })),
  ...competitions.map((c): PaletteItem => ({
    id: `comp-${c.slug}`,
    group: "Case Competitions",
    title: `${c.short} (${c.sponsor})`,
    subtitle: `${c.result} · ${c.scale} · ${c.challenge}`,
    metric: c.result.replace("National ", ""),
    href: `/competitions/${c.slug}`,
    brand: c.brandKey,
  })),
  ...additionalCompetitions,
  {
    id: "sec-work",
    group: "Portfolio Sections",
    title: "All Case Work & Competitions",
    subtitle: "Jump to the interactive project & competition index",
    metric: "02 / Work",
    href: "/#work",
  },
  {
    id: "sec-capabilities",
    group: "Portfolio Sections",
    title: "Practice Areas & Evidence Workbench",
    subtitle: "Pricing, Market Sizing, Brand Strategy, Valuation & Quant Builds",
    metric: "03 / Practice",
    href: "/#capabilities",
  },
  {
    id: "sec-experience",
    group: "Portfolio Sections",
    title: "Work Experience (Epsilon · Walmart & Shree Gajanan)",
    subtitle: "~$4M media spend reallocated · Rs.9.19Cr milling optimization",
    metric: "04 / Career",
    href: "/#experience",
  },
  {
    id: "sec-recognition",
    group: "Portfolio Sections",
    title: "National Case Competition Finishes",
    subtitle: "All 10 national podiums, finalist & semi-finalist placements",
    metric: "05 / Honours",
    href: "/#recognition",
  },
  {
    id: "sec-contact",
    group: "Portfolio Sections",
    title: "Contact & Download CV",
    subtitle: "XLRI Jamshedpur · Strategy, Pricing & Go-to-Market",
    metric: "Contact",
    href: "/#contact",
  },
];

export function CaseCommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_ITEMS;
    return ALL_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.metric.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => {
          const next = !prev;
          if (next) {
            setQuery("");
            setSelectedIndex(0);
          }
          return next;
        });
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
      }
    };

    const onCustomOpen = () => {
      setQuery("");
      setSelectedIndex(0);
      setOpen(true);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-case-palette", onCustomOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-case-palette", onCustomOpen);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(id);
  }, [open]);

  const activeIndex = filtered.length ? Math.min(selectedIndex, filtered.length - 1) : 0;

  const selectItem = (item: PaletteItem) => {
    setOpen(false);
    setQuery("");
    router.push(item.href);
  };

  const groups: PaletteItem["group"][] = [
    "Live & Research Projects",
    "Case Competitions",
    "Portfolio Sections",
  ];

  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          role="dialog"
          aria-modal="true"
          aria-label="Quick Case Switcher"
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/60 px-4 pt-16 pb-8 backdrop-blur-sm md:pt-24"
          onClick={() => setOpen(false)}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-line bg-paper text-ink shadow-[0_32px_90px_-20px_rgb(22_22_22/0.65)]"
            onClick={(e) => e.stopPropagation()}
          >
        <div className="flex items-center gap-3 border-b border-line bg-surface px-5 py-4">
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0 text-muted"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                if (filtered.length) {
                  setSelectedIndex((i) => (i + 1) % filtered.length);
                }
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (filtered.length) {
                  setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
                }
              } else if (e.key === "Enter" && filtered[activeIndex]) {
                e.preventDefault();
                selectItem(filtered[activeIndex]);
              }
            }}
            placeholder="Jump to any project, competition case, brand, or metric"
            className="w-full bg-transparent text-[15px] text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-ink hover:text-ink"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[64vh] overflow-y-auto p-3">
          {filtered.length === 0 ? (
            <p className="py-10 text-center font-mono text-[13px] text-muted">
              No matching case study or competition found.
            </p>
          ) : (
            groups.map((grp) => {
              const items = filtered.filter((i) => i.group === grp);
              if (!items.length) return null;
              return (
                <div key={grp} className="mb-4 last:mb-0">
                  <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                    {grp} ({items.length})
                  </p>
                  <ul className="space-y-1">
                    {items.map((item) => {
                      const flatIdx = filtered.indexOf(item);
                      const isSelected = flatIdx === activeIndex;
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onMouseEnter={() => setSelectedIndex(flatIdx)}
                            onClick={() => selectItem(item)}
                            className={`flex w-full items-center justify-between gap-4 rounded-2xl px-3.5 py-3 text-left transition-colors ${
                              isSelected
                                ? "bg-night text-on-night"
                                : "text-ink hover:bg-surface"
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                {item.brand && (
                                  <BrandBadge
                                    brand={item.brand}
                                    tone={isSelected ? "dark" : "light"}
                                    interactive={false}
                                  />
                                )}
                                <span className="font-display text-[16px] font-semibold tracking-[-0.01em] whitespace-normal break-words">
                                  {item.title}
                                </span>
                              </div>
                              <p
                                className={`mt-1 text-[12px] leading-relaxed whitespace-normal break-words ${
                                  isSelected ? "text-on-night/75" : "text-muted"
                                }`}
                              >
                                {item.subtitle}
                              </p>
                            </div>
                            <span
                              className={`shrink-0 rounded-full px-3 py-1 font-mono text-[11px] font-semibold tabular ${
                                isSelected
                                  ? "bg-amber text-[#161616]"
                                  : "bg-sage text-ink"
                              }`}
                            >
                              {item.metric}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-line bg-surface px-5 py-2.5 font-mono text-[11px] text-muted">
          <span>8 Live & Research Projects · 10 National Competitions</span>
          <span className="hidden sm:inline">↑↓ to navigate · ↵ to open · ESC to close</span>
        </div>
      </m.div>
    </m.div>
  )}
</AnimatePresence>
  );
}
