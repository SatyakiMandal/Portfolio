"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { person } from "@/content/profile";
import { isMotionPaused, restoreMotionPreference, setMotionPaused } from "@/lib/motion";
import { OpenAuditButton } from "@/components/RecruiterAuditMatrix";
import { IconDownload, IconZap } from "@/components/Icons";

const links = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#recognition", id: "recognition", label: "Recognition" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

// Top corners carry the name, 60s audit and CV; navigation lives in one pill fixed at the bottom centre.
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [motionOff, setMotionOff] = useState(false);

  // Pause control for all decorative motion (WCAG 2.2.2). The choice is remembered.
  useEffect(() => {
    restoreMotionPreference();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMotionOff(isMotionPaused());
  }, []);
  const toggleMotion = () => {
    const next = !motionOff;
    setMotionPaused(next);
    setMotionOff(next);
  };

  const openCasePalette = () => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("open-case-palette"));
  };

  const openAuditMatrix = () => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("open-recruiter-audit"));
  };

  useEffect(() => {
    if (pathname !== "/") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(pathname.startsWith("/work") ? "work" : pathname.startsWith("/competitions") ? "recognition" : "");
      return;
    }
    const ids = ["work", "experience", "recognition", "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const items = panelRef.current?.querySelectorAll<HTMLElement>("a, button");
    items?.[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !items?.length) return;
      const first = items[0];
      const last = toggleRef.current ?? items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-5 md:px-10">
          <Link href="/" data-magnetic className="wide text-[12px] sm:text-[13px] font-bold tracking-[0.02em] whitespace-nowrap transition-transform hover:scale-105 active:scale-95 shrink-0">
            Satyaki Mandal
          </Link>
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <OpenAuditButton className="inline-flex min-h-9 sm:min-h-11 items-center gap-1.5 rounded-full border border-amber/40 bg-amber/15 px-3 sm:px-4 text-[11.5px] sm:text-[13px] font-semibold text-[#161616] transition-all hover:bg-amber hover:-translate-y-0.5 active:scale-95 shadow-xs">
              <IconZap size={14} className="text-[#161616] shrink-0" />
              <span className="hidden sm:inline">60-Sec Recruiter&nbsp;</span>Audit
            </OpenAuditButton>
            <a
              href={person.cvPath}
              download
              data-magnetic
              className="inline-flex min-h-9 sm:min-h-11 items-center gap-1.5 rounded-full border border-ink/20 bg-paper/90 px-3.5 sm:px-5 text-[11.5px] sm:text-[14px] font-medium whitespace-nowrap transition-all hover:border-ink hover:bg-amber hover:text-[#161616] active:scale-95"
            >
              <IconDownload size={14} className="text-ink shrink-0" />
              <span className="hidden sm:inline">Download&nbsp;</span>CV
            </a>
          </div>
        </div>
      </header>

      <nav aria-label="Main" data-dark className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4">
        <div className="pointer-events-auto relative">
          {open && (
            <div
              id="menu-panel"
              ref={panelRef}
              className="absolute bottom-[calc(100%+10px)] left-1/2 w-[min(88vw,320px)] -translate-x-1/2 rounded-3xl bg-ink p-3 text-paper ring-1 ring-paper/15 shadow-[0_20px_50px_-20px_rgb(22_22_22/0.6)] md:hidden"
            >
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-2xl px-4 text-lg hover:bg-paper/10">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-1 border-t border-paper/15 pt-1 space-y-1">
                  <button
                    type="button"
                    onClick={openAuditMatrix}
                    className="flex min-h-12 w-full items-center justify-between rounded-2xl px-4 text-left text-base font-semibold text-amber hover:bg-paper/10"
                  >
                    <span>60s Recruiter Audit</span>
                    <span className="font-mono text-xs">⚡</span>
                  </button>
                  <button
                    type="button"
                    onClick={openCasePalette}
                    className="flex min-h-12 w-full items-center rounded-2xl px-4 text-left text-base font-medium text-paper/80 hover:bg-paper/10"
                  >
                    All Cases
                  </button>
                </li>
              </ul>
            </div>
          )}
          <div className="flex items-center gap-1 rounded-full bg-ink p-1.5 text-paper ring-1 ring-paper/15 shadow-[0_18px_44px_-14px_rgb(22_22_22/0.65)]">
            <ul className="hidden items-center md:flex">
              {links.map((l) => {
                const isActive = activeId === l.id;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      data-magnetic
                      className={`inline-flex min-h-10 items-center rounded-full px-4 text-[14px] font-medium transition-all hover:-translate-y-0.5 active:scale-95 ${
                        isActive ? "bg-amber text-[#161616]" : "text-paper/85 hover:bg-paper/12 hover:text-paper"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="ml-1 border-l border-paper/15 pl-1 flex items-center gap-1">
                <button
                  type="button"
                  onClick={openAuditMatrix}
                  data-magnetic
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold text-amber transition-all hover:-translate-y-0.5 hover:bg-paper/12 active:scale-95"
                  title="Open 60-Second Recruiter Audit Matrix"
                >
                  <IconZap size={13} className="text-amber shrink-0" />
                  <span>60s Audit</span>
                </button>
                <button
                  type="button"
                  onClick={openCasePalette}
                  data-magnetic
                  className="inline-flex min-h-10 items-center rounded-full px-3 text-[14px] font-medium text-paper/85 transition-all hover:-translate-y-0.5 hover:bg-paper/12 hover:text-amber active:scale-95"
                >
                  All Cases
                </button>
              </li>
            </ul>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="menu-panel"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex min-h-11 items-center gap-3 rounded-full bg-amber px-5 text-[14px] font-semibold text-[#101a13] md:hidden"
            >
              {open ? "Close" : "Menu"}
              <svg aria-hidden="true" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.6">
                {open ? <path d="M2 1l10 8M12 1L2 9" /> : <path d="M0 2h14M0 8h14" />}
              </svg>
            </button>
            <button
              type="button"
              onClick={toggleMotion}
              aria-pressed={motionOff}
              data-cursor={motionOff ? "Play" : "Pause"}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-paper/85 transition-colors hover:bg-paper/12 hover:text-amber md:min-h-10 md:min-w-10"
            >
              <span className="sr-only">{motionOff ? "Play animations" : "Pause animations"}</span>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                {motionOff ? <path d="M3 1.5v11l9-5.5z" /> : <path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
