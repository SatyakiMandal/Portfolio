"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { BrandGlyph } from "@/components/BrandLogo";
import type { BrandKey } from "@/components/BrandLogo";
import type { KeyNumber } from "@/content/projects";
import type { StrategicFrameworkData } from "./StrategicFramework";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export type ExecutiveBriefProps = {
  title: string;
  sponsorOrOrg: string;
  brandKey: BrandKey;
  badge: string;
  year: string;
  scopeChips: string[];
  context: string;
  keyNumbers: KeyNumber[];
  approach: string[];
  findings: string[];
  solution?: string[];
  framework?: StrategicFrameworkData;
  credit?: string;
  className?: string;
};

export function ExecutiveBrief({
  title,
  sponsorOrOrg,
  brandKey,
  badge,
  year,
  scopeChips,
  context,
  keyNumbers,
  approach,
  findings,
  solution,
  framework,
  credit,
  className = "",
}: ExecutiveBriefProps) {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const titleId = useId();

  // Listen to open events from CaseChrome sticky bar or elsewhere
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-executive-brief", handleOpen);
    return () => window.removeEventListener("open-executive-brief", handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="Brief"
        className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-current/25 bg-current/5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 font-mono text-[11px] sm:text-[12px] font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-current/15 active:scale-95 ${className}`}
        title="View 1-Page Executive Summary Brief & Print PDF"
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
          className="shrink-0"
        >
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        <span><span className="hidden sm:inline">1-Page </span>Executive Brief</span>
      </button>

      {/* Screen Modal Preview rendered into document.body as standalone window */}
      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-[99999] isolate flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto no-print"
              onClick={() => setOpen(false)}
            >
              <m.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-[100000] w-full max-w-[880px] rounded-2xl bg-white text-[#161616] shadow-[0_30px_90px_rgba(0,0,0,0.8)] ring-1 ring-black/10 p-5 sm:p-8 max-h-[92vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Controls Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e5e5] pb-4">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#d97706]">
                      Executive Memorandum · 1-Page Summary
                    </span>
                    <p id={titleId} className="text-[13px] text-[#666666]">
                      Optimized for single-page A4 print and leadership briefing.
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#161616] px-4 py-2 font-mono text-[12px] font-bold text-white shadow-sm transition hover:bg-black active:scale-95"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 6 2 18 2 18 9" />
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                        <rect x="6" y="14" width="12" height="8" />
                      </svg>
                      <span>Print / Save as PDF (1 Page)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-lg border border-[#e5e5e5] px-3 py-2 font-mono text-[12px] font-semibold text-[#666666] transition hover:bg-[#f5f5f5] active:scale-95"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Memo Sheet View */}
                <div className="mt-5 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-6 shadow-inner">
                  <MemoContent
                    title={title}
                    sponsorOrOrg={sponsorOrOrg}
                    brandKey={brandKey}
                    badge={badge}
                    year={year}
                    scopeChips={scopeChips}
                    context={context}
                    keyNumbers={keyNumbers}
                    approach={approach}
                    findings={findings}
                    solution={solution}
                    framework={framework}
                    credit={credit}
                  />
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Standalone print container rendered directly into document.body so no ancestor elements can hide it */}
      {mounted && createPortal(
        <div id="executive-brief-print-container" className="print-only-brief" aria-hidden="true">
          <MemoContent
            title={title}
            sponsorOrOrg={sponsorOrOrg}
            brandKey={brandKey}
            badge={badge}
            year={year}
            scopeChips={scopeChips}
            context={context}
            keyNumbers={keyNumbers}
            approach={approach}
            findings={findings}
            solution={solution}
            framework={framework}
            credit={credit}
          />
        </div>,
        document.body
      )}
    </>
  );
}

function MemoContent({
  title,
  sponsorOrOrg,
  brandKey,
  badge,
  year,
  scopeChips,
  context,
  keyNumbers,
  approach,
  findings,
  solution,
  framework,
  credit,
}: Omit<ExecutiveBriefProps, "className">) {
  return (
    <div className="executive-memo text-[#111111] font-sans antialiased leading-snug">
      {/* Institutional Top Bar */}
      <div className="flex items-center justify-between border-b-2 border-[#161616] pb-2 text-[10px] uppercase tracking-wider font-mono text-[#555555]">
        <div>
          <span className="font-bold text-[#161616]">Satyaki Mandal</span>
          <span className="mx-2">|</span>
          <span>XLRI Jamshedpur (PGDM-BM)</span>
          <span className="mx-2">|</span>
          <span>Ex-Epsilon Data Scientist</span>
        </div>
        <div>
          <span>Briefing Ref: {year}</span>
          <span className="mx-2">·</span>
          <span className="font-bold text-[#161616]">Confidential</span>
        </div>
      </div>

      {/* Memo Header */}
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-md bg-[#f3f4f6] px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#161616] border border-[#d1d5db]">
            {badge} · {sponsorOrOrg}
          </span>
          <h1 className="mt-1 font-display text-[22px] font-black leading-tight tracking-tight text-[#161616]">
            {title}
          </h1>
          <p className="mt-1 font-mono text-[10px] text-[#555555]">
            Scope: {scopeChips.join(" · ")} {credit ? `| ${credit}` : ""}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white p-1 shadow-xs">
            <BrandGlyph brand={brandKey} className="h-6 w-6 object-contain" />
          </div>
        </div>
      </div>

      {/* KPI Anchor Grid - Responsive on screen, 4 Columns on desktop & print */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-2 border-y border-[#e5e5e5] py-2.5 bg-white rounded-md px-2">
        {keyNumbers.slice(0, 4).map((k, idx) => (
          <div key={idx} className="border-r last:border-r-0 border-[#eeeeee] pr-2">
            <div className="font-mono text-[8.5px] uppercase tracking-wider text-[#666666] leading-tight" title={k.label}>
              {k.label}
            </div>
            <div className="font-display text-[15px] sm:text-[17px] font-extrabold text-[#161616] tracking-tight leading-none mt-1">
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* 2-Column Core Evidence Architecture - Stacks on mobile, 2 columns on desktop & print */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-3.5">
        {/* Left Column: Context & Approach */}
        <div className="md:col-span-6 print:col-span-6 space-y-2.5">
          <section className="rounded-lg border border-[#e5e5e5] bg-white p-2.5">
            <h2 className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#0284c7]">
              01 / Executive Challenge &amp; Problem Framing
            </h2>
            <p className="mt-1 text-[11px] leading-relaxed text-[#262626]">
              {context}
            </p>
          </section>

          <section className="rounded-lg border border-[#e5e5e5] bg-white p-2.5">
            <h2 className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#0284c7]">
              02 / Analytical Methodology Sequence
            </h2>
            <div className="mt-1 space-y-1.5">
              {approach.map((step, idx) => (
                <div key={idx} className="flex flex-row items-start gap-1.5 text-[10.5px] leading-tight text-[#262626]">
                  <span className="font-mono text-[9px] font-bold text-[#d97706] shrink-0">0{idx + 1}.</span>
                  <span className="flex-1">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {solution && solution.length > 0 && (
            <section className="rounded-lg border border-[#e5e5e5] bg-white p-2.5">
              <h2 className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#0284c7]">
                03 / Strategic Intervention
              </h2>
              <div className="mt-1 space-y-1 text-[10.5px] leading-tight text-[#262626]">
                {solution.slice(0, 3).map((sol, idx) => (
                  <div key={idx} className="flex flex-row items-start gap-1.5">
                    <span className="font-mono text-[9px] font-bold text-[#161616] shrink-0">&bull;</span>
                    <span className="flex-1">{sol}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Empirical Findings & How We Tackled the Problem */}
        <div className="md:col-span-6 print:col-span-6 space-y-2.5">
          <section className="rounded-lg border border-[#e5e5e5] bg-white p-2.5">
            <h2 className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#059669]">
              {solution && solution.length > 0 ? "04" : "03"} / Empirical Findings &amp; Quantitative Proof
            </h2>
            <div className="mt-1 space-y-1.5">
              {findings.map((f, idx) => (
                <div key={idx} className="flex flex-row items-start gap-1.5 text-[10.5px] leading-tight text-[#262626]">
                  <span className="font-mono text-[9px] font-bold text-[#059669] shrink-0">[{idx + 1}]</span>
                  <span className="flex-1">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {framework && (
            <section className="rounded-lg border border-[#f59e0b]/40 bg-[#fffbeb] p-2.5">
              <div className="border-b border-[#fde68a] pb-1.5">
                <h2 className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#b45309]">
                  {solution && solution.length > 0 ? "05" : "04"} / How We Tackled the Problem: Transferable Strategic Toolkit
                </h2>
                <p className="mt-0.5 font-display text-[12px] font-bold text-[#92400e]">
                  {framework.title}
                </p>
              </div>
              <p className="mt-1.5 text-[10.5px] font-medium leading-tight text-[#78350f]">
                {framework.takeaway}
              </p>
              <div className="mt-2 space-y-1.5">
                {framework.principles.map((pr, idx) => {
                  const name = typeof pr === "string" ? pr : pr.name;
                  const detail = typeof pr === "string" ? null : pr.detail;
                  return (
                    <div
                      key={idx}
                      className="flex flex-row items-start gap-2 rounded bg-white/90 p-1.5 border border-[#fde68a] text-[9.5px] leading-tight text-[#451a03]"
                    >
                      <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#b45309] font-mono text-[8px] font-bold text-white mt-0.5">
                        0{idx + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold">{name}</span>
                        {detail && <span className="block mt-0.5 text-[#78350f] text-[8.5px] leading-tight">{detail}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Part 2: Phased Execution Pipeline & Decision Gates */}
      {framework?.pipeline && framework.pipeline.length > 0 && (
        <section className="mt-3 rounded-lg border border-[#e5e5e5] bg-white p-2.5">
          <div className="flex items-center justify-between border-b border-[#eeeeee] pb-1.5">
            <h2 className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#0284c7]">
              Phased Analytical Pipeline &amp; Decision Gates ({framework.pipeline.length} Phases)
            </h2>
            <span className="font-mono text-[8.5px] text-[#666666]">
              Sequential Governance Architecture
            </span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {framework.pipeline.map((step, idx) => (
              <div key={idx} className="rounded-md bg-[#f9fafb] p-2 border border-[#f3f4f6]">
                <div className="flex flex-row items-start gap-2">
                  <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#161616] font-mono text-[8px] font-bold text-[#ffd92e] mt-0.5">
                    0{idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[8px] uppercase tracking-wider text-[#666666]">
                      {step.phase}
                    </div>
                    <div className="font-sans text-[10.5px] font-bold text-[#161616] leading-snug mt-0.5">
                      {step.name}
                    </div>
                    <p className="mt-1 text-[9px] leading-relaxed text-[#374151]">
                      {step.detail}
                    </p>
                    <div className="mt-1.5 text-[8.5px] font-mono text-[#b45309] bg-[#fffbeb] px-1.5 py-0.5 rounded border border-[#fef3c7]">
                      <span className="font-bold">Decision Gate:</span> {step.decisionGate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Part 3: Universal Enterprise Application */}
      {framework?.application && (
        <div className="mt-3 rounded-lg border border-[#d1d5db] bg-[#f9fafb] p-2 text-[9.5px] leading-relaxed text-[#374151]">
          <span className="font-mono font-bold uppercase tracking-wider text-[#161616] block mb-0.5">
            Universal Enterprise Application &amp; Playbook:
          </span>
          {framework.application}
        </div>
      )}

      {/* Institutional Sign-off Footer */}
      <div className="mt-3 flex items-center justify-between border-t border-[#e5e5e5] pt-2 text-[9px] font-mono text-[#737373]">
        <span>Verified against primary filings, company models, and research dossiers.</span>
        <span>satyakimandal.com · Satyaki Mandal Portfolio</span>
      </div>
    </div>
  );
}
