"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Milestone {
  id: string;
  num: string;
  label: string;
}

const homeMilestones: Milestone[] = [
  { id: "work", num: "01", label: "Selected Work" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "recognition", num: "03", label: "Honours" },
  { id: "research", num: "04", label: "Research" },
  { id: "leadership", num: "05", label: "Leadership" },
  { id: "gallery", num: "06", label: "Camera Roll" },
  { id: "education", num: "07", label: "Education" },
  { id: "contact", num: "08", label: "Contact" },
];

const workMilestoneTemplates: Milestone[] = [
  { id: "situation", num: "01", label: "Situation" },
  { id: "method", num: "02", label: "Method" },
  { id: "framework", num: "03", label: "Framework" },
  { id: "evidence", num: "04", label: "Evidence" },
  { id: "exhibits", num: "05", label: "Exhibits" },
];

const compMilestoneTemplates: Milestone[] = [
  { id: "situation", num: "01", label: "Situation" },
  { id: "method", num: "02", label: "Method" },
  { id: "proposal", num: "03", label: "Proposal" },
  { id: "framework", num: "04", label: "Framework" },
  { id: "evidence", num: "05", label: "Evidence" },
  { id: "exhibits", num: "06", label: "Exhibits" },
];

function isElementDark(el: Element | null | undefined): boolean {
  if (!el) return false;

  // 1. Semantic dark identifiers
  const darkAncestor = el.closest(
    '[data-dark="true"], [data-dark], .bg-night, header[data-dark], [data-tone="night"]'
  );
  if (darkAncestor) return true;

  // 2. Computed background color sampling up the DOM hierarchy
  let cur: Element | null = el;
  while (cur && cur !== document.documentElement) {
    const style = window.getComputedStyle(cur);
    const bg = style.backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        return lum < 115;
      }
    }
    cur = cur.parentElement;
  }
  return false;
}

function getMilestonesForPath(pathname: string | null): Milestone[] {
  if (!pathname || pathname === "/") return homeMilestones;
  if (pathname.startsWith("/work/")) return workMilestoneTemplates;
  if (pathname.startsWith("/competitions/")) return compMilestoneTemplates;
  return homeMilestones;
}

export function VerticalTimelineNav() {
  const pathname = usePathname();
  const currentMilestones = getMilestonesForPath(pathname);
  const [activeId, setActiveId] = useState<string>(currentMilestones[0]?.id || "work");
  const [isVisible, setIsVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [darkMap, setDarkMap] = useState<Record<string, boolean>>({});

  const isSupportedPage =
    !pathname ||
    pathname === "/" ||
    pathname.startsWith("/work/") ||
    pathname.startsWith("/competitions/");

  useEffect(() => {
    if (!isSupportedPage) return;

    let rafId: number | null = null;

    const sampleMilestones = () => {
      const navEl = document.querySelector('nav[aria-label="Vertical story navigation"]');
      if (!navEl) return;

      const buttons = navEl.querySelectorAll('button[data-milestone-id]');
      const nextMap: Record<string, boolean> = {};

      buttons.forEach((btn) => {
        const id = btn.getAttribute("data-milestone-id");
        if (!id) return;
        const rect = btn.getBoundingClientRect();
        const y = rect.top + rect.height / 2;
        // Sample safely in the left viewport margin directly behind the timeline rail
        const x = 24;

        const elements = document.elementsFromPoint(x, y);
        const underlying = elements.find(
          (el) => !el.closest('nav[aria-label="Vertical story navigation"]')
        );
        nextMap[id] = isElementDark(underlying);
      });

      setDarkMap((prev) => {
        let changed = false;
        for (const k in nextMap) {
          if (prev[k] !== nextMap[k]) {
            changed = true;
            break;
          }
        }
        return changed ? nextMap : prev;
      });
    };

    const updatePositionAndTheme = () => {
      const scrollY = window.scrollY;

      // Visibility threshold: Hero landing page requires scrolling past >420px;
      // Individual case pages fade in earlier (>220px) past the header
      const threshold = pathname === "/" ? 420 : 220;
      setIsVisible(scrollY > threshold);

      // Determine active milestone based on viewport position
      if (currentMilestones.length > 0) {
        let matched = false;
        for (let i = currentMilestones.length - 1; i >= 0; i--) {
          const el = document.getElementById(currentMilestones[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.45) {
              setActiveId(currentMilestones[i].id);
              setActiveIdx(i);
              matched = true;
              break;
            }
          }
        }
        if (!matched) {
          setActiveId(currentMilestones[0].id);
          setActiveIdx(0);
        }
      }

      // Sample dark state per milestone
      sampleMilestones();
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updatePositionAndTheme();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updatePositionAndTheme();
    const timer = setTimeout(updatePositionAndTheme, 200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname, currentMilestones, isSupportedPage]);

  if (!isSupportedPage) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const lineProgress =
    currentMilestones.length > 1
      ? (activeIdx / (currentMilestones.length - 1)) * 100
      : 0;

  const darkCount = Object.values(darkMap).filter(Boolean).length;
  const isLineDark = darkCount > currentMilestones.length / 2;

  return (
    <nav
      aria-label="Vertical story navigation"
      className={`fixed left-6 xl:left-8 2xl:left-12 top-1/2 -translate-y-1/2 z-30 hidden 2xl:block select-none transition-all duration-500 ease-out pointer-events-auto ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col py-1">
        {/* Continuous Background Vertical Line (Theme-Adaptive) */}
        <div
          aria-hidden="true"
          className={`absolute left-[3.5px] top-2.5 bottom-2.5 w-[1.5px] transition-colors duration-200 ${
            isLineDark ? "bg-white/30" : "bg-stone-300/80"
          }`}
        />

        {/* Continuous Active Amber Line Fill */}
        <div
          aria-hidden="true"
          className="absolute left-[3.5px] top-2.5 w-[1.5px] bg-amber shadow-[0_0_8px_rgba(255,215,0,0.6)] transition-all duration-300 ease-out"
          style={{ height: `${lineProgress}%` }}
        />

        {/* Milestone Nodes & Dynamic Labels */}
        <div className="space-y-4">
          {currentMilestones.map((m) => {
            const active = activeId === m.id;
            const isItemDark = Boolean(darkMap[m.id]);

            return (
              <button
                key={m.id}
                data-milestone-id={m.id}
                type="button"
                onClick={() => scrollTo(m.id)}
                className="group flex items-center text-left focus:outline-none cursor-pointer"
              >
                {/* Node Tick along the vertical line */}
                <span
                  className={`relative z-10 flex h-2 w-2 items-center justify-center rounded-full border transition-all duration-200 ${
                    active
                      ? "border-amber bg-amber shadow-[0_0_10px_rgba(255,215,0,0.9)] scale-125"
                      : isItemDark
                      ? "border-white/50 bg-[#0e120f] group-hover:border-white group-hover:scale-110"
                      : "border-stone-400/80 bg-paper group-hover:border-ink group-hover:scale-110"
                  }`}
                />

                {/* Milestone Number & Name (Per-Item Theme Inversion) */}
                <span
                  className={`ml-3.5 flex items-baseline gap-2 transition-all duration-200 ${
                    active
                      ? "translate-x-1 font-semibold"
                      : "group-hover:translate-x-0.5"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-wider tabular transition-colors duration-200 ${
                      active
                        ? "font-bold text-amber"
                        : isItemDark
                        ? "text-white/60 group-hover:text-white"
                        : "text-muted/65 group-hover:text-ink"
                    }`}
                  >
                    {m.num}
                  </span>
                  <span
                    className={`text-[12.5px] tracking-tight transition-colors duration-200 ${
                      active
                        ? isItemDark
                          ? "font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                          : "font-bold text-ink drop-shadow-xs"
                        : isItemDark
                        ? "font-medium text-white/80 group-hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                        : "font-normal text-muted/70 group-hover:text-ink"
                    }`}
                  >
                    {m.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
