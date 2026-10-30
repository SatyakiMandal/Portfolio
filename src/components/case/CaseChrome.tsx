"use client";

import { useEffect, useRef, useState } from "react";

export type CaseSectionLink = {
  id: string;
  num: string;
  label: string;
};

export function CaseChrome({
  title,
  badge,
  sections,
  darkHero = false,
}: {
  title: string;
  badge: string;
  sections: CaseSectionLink[];
  darkHero?: boolean;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    let raf = 0;
    let lastPast = false;
    const bar = barRef.current;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      if (bar) bar.style.width = `${pct}%`;
      const past = scrollTop > 360;
      if (past !== lastPast) {
        lastPast = past;
        setScrolledPastHero(past);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-22% 0px -62% 0px" },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-case-palette"));
  };

  const activeObj = sections.find((s) => s.id === activeSection) ?? sections[0];

  return (
    <>
      {/* Fixed Reading Progress Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-ink/10"
      >
        <div
          ref={barRef}
          className={`h-full ${darkHero && !scrolledPastHero ? "bg-amber" : "bg-ink"}`}
          style={{ width: "0%" }}
        />
      </div>

      {/* Sticky Section Jump Bar */}
      <div
        className={`fixed inset-x-0 top-3 z-40 flex justify-center px-3 sm:px-4 transition-all duration-300 ${
          scrolledPastHero
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        inert={!scrolledPastHero}
      >
        <div className="flex max-w-full items-center gap-1.5 overflow-x-auto rounded-full border border-line/90 bg-paper/92 px-2.5 sm:px-3 py-1.5 text-ink shadow-[0_14px_34px_-14px_rgb(22_22_22/0.28)] backdrop-blur-md">
          {/* Desktop Brand / Title Stamp */}
          <span className="hidden items-center gap-2 border-r border-line pr-3 pl-1.5 lg:inline-flex">
            <span className="rounded-full bg-amber px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#161616]">
              {badge}
            </span>
            <span className="whitespace-nowrap font-display text-[13px] font-bold tracking-tight text-ink">
              {title}
            </span>
          </span>

          {/* Mobile Reading Progress Breadcrumb (Strategic Suggestion C1) */}
          <div className="flex items-center gap-1.5 md:hidden px-1">
            <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] font-bold text-amber tabular">
              {activeObj?.num ?? "01"}
            </span>
            <span className="whitespace-nowrap font-mono text-[11px] font-medium text-ink">
              {activeObj?.label ?? "Reading"}
            </span>
          </div>

          {/* Desktop Section Links */}
          <nav aria-label="Case study sections" className="hidden md:flex items-center gap-1">
            {sections.map((s) => {
              const active = activeSection === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] whitespace-nowrap transition-colors ${
                    active
                      ? "bg-ink font-semibold text-paper"
                      : "text-muted hover:bg-sage/70 hover:text-ink"
                  }`}
                >
                  <span className={active ? "text-amber" : "text-muted"}>{s.num}</span>
                  <span>{s.label}</span>
                </a>
              );
            })}
          </nav>

          {/* 1-Page Executive Brief Modal & PDF Print Button */}
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-executive-brief"));
            }}
            aria-label="Open 1-Page Executive Brief"
            title="Open 1-Page Executive Brief & Print PDF"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink hover:bg-amber hover:text-[#161616]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
          </button>

          {/* Command Palette Button */}
          <button
            type="button"
            onClick={openPalette}
            className="ml-1 inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] font-medium text-ink transition-colors hover:border-ink hover:bg-amber hover:text-[#161616]"
          >
            All Cases
          </button>
        </div>
      </div>
    </>
  );
}
