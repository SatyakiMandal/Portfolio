"use client";

import { SectionAnchor } from "./SectionAnchor";
import { StrategicPipelineDiagram } from "./StrategicPipelineDiagram";
import {
  IconLayers,
  IconScale,
  IconShieldCheck,
  IconSparkle,
  IconTarget,
  IconWorkflow,
} from "@/components/Icons";

export type StrategicPipelineStep = {
  phase: string;
  name: string;
  detail: string;
  decisionGate: string;
};

export type StrategicTradeoff = {
  dilemma: string;
  chosen: {
    name: string;
    detail: string;
  };
  rejected: {
    name: string;
    detail: string;
  };
  rationale: string;
  hurdleOrMetric?: string;
};

export type StrategicPrinciple = {
  name: string;
  detail: string;
};

export type StrategicFrameworkData = {
  title: string;
  takeaway: string;
  thoughtProcess?: string;
  pipeline?: StrategicPipelineStep[];
  tradeoffs?: StrategicTradeoff[];
  principles: (StrategicPrinciple | string)[];
  application: string;
};

export function StrategicFramework({
  framework,
  caseTitle,
}: {
  framework: StrategicFrameworkData;
  caseTitle: string;
}) {
  return (
    <section
      id="framework"
      className="scroll-mt-24 rounded-3xl glass-card p-6 sm:p-8 md:p-10"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/60 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <IconTarget size={14} className="text-amber-dark" />
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-amber-dark">
              How we tackled the Problem: Strategic Framework &amp; Transferable Toolkit
            </p>
            <SectionAnchor id="framework" label="Strategic Framework" />
          </div>
          <h2 className="mt-1 font-display text-[22px] sm:text-[28px] font-bold tracking-tight text-ink">
            {framework.title}
          </h2>
        </div>
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-amber/20 px-3.5 py-1 font-mono text-[11px] font-bold text-[#161616]"
          title={`Method applied in ${caseTitle}`}
        >
          <IconShieldCheck size={12} className="text-[#161616]" />
          <span>Applied in {caseTitle} · Generalizable Method</span>
        </span>
      </div>

      <div className="mt-7 space-y-8">
        {/* Leadership Strategic Takeaway */}
        <div className="rounded-2xl border border-line/60 bg-paper/60 p-5 md:p-6">
          <div className="flex items-center gap-2 text-muted">
            <IconTarget size={13} />
            <p className="font-mono text-[11px] font-bold uppercase tracking-wider">
              Executive Summary for Business Leadership
            </p>
          </div>
          <p className="mt-2 text-[15.5px] sm:text-[17px] leading-relaxed text-ink/95 font-medium">
            {framework.takeaway}
          </p>
        </div>

        {/* 01: Cognitive Framing & Analytical Thought Process */}
        {framework.thoughtProcess && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                01 / Cognitive Framing &amp; First-Principles Thought Process
              </span>
            </div>
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-ink/90 bg-white/70 rounded-2xl border border-line/50 p-5 md:p-6 shadow-xs">
              {framework.thoughtProcess}
            </p>
          </div>
        )}

        {/* 02: Sequential Phased Execution Pipeline & Decision Gates */}
        {framework.pipeline && framework.pipeline.length > 0 && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/40 pb-2">
              <div className="flex items-center gap-2">
                <IconWorkflow size={14} className="text-primary" />
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                  02 / Phased Execution Pipeline &amp; Decision Gates
                </p>
              </div>
              <span className="font-mono text-[11px] text-muted">
                {framework.pipeline.length} Sequential Analytical Phases
              </span>
            </div>

            {/* Boardroom-grade Sequential Pipeline Architecture */}
            <StrategicPipelineDiagram pipeline={framework.pipeline} title={framework.title} />
          </div>
        )}

        {/* 03: Strategic Trade-offs & Evaluated Alternatives */}
        {framework.tradeoffs && framework.tradeoffs.length > 0 && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/40 pb-2">
              <div className="flex items-center gap-2">
                <IconScale size={14} className="text-primary" />
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                  03 / Strategic Trade-offs &amp; Evaluated Alternatives
                </p>
              </div>
              <span className="font-mono text-[11px] text-muted">
                Critical Strategic Choices &amp; Paths Rejected
              </span>
            </div>

            <div className="space-y-4">
              {framework.tradeoffs.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line/60 bg-paper/60 p-5 md:p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-night font-mono text-[11px] font-bold text-amber mt-0.5 shadow-xs">
                      T{idx + 1}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-bold block">
                        The Strategic Dilemma
                      </span>
                      <h4 className="font-display text-[16px] sm:text-[18px] font-bold text-ink leading-snug">
                        {t.dilemma}
                      </h4>
                    </div>
                  </div>

                  {/* 2-Column Chosen vs Rejected Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {/* Chosen Path */}
                    <div className="rounded-xl border border-emerald-600/30 bg-emerald-500/[0.07] p-4 space-y-1.5 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                          ✓
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                          Selected Path
                        </span>
                      </div>
                      <p className="font-display text-[14px] font-bold text-ink leading-snug">
                        {t.chosen.name}
                      </p>
                      <p className="text-[12.5px] leading-relaxed text-ink/85">
                        {t.chosen.detail}
                      </p>
                    </div>

                    {/* Rejected Path */}
                    <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.04] p-4 space-y-1.5 opacity-90 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-600/80 text-white text-[10px] font-bold">
                          ✗
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-800">
                          Evaluated &amp; Rejected
                        </span>
                      </div>
                      <p className="font-display text-[14px] font-semibold text-ink/80 leading-snug line-through decoration-rose-500/50">
                        {t.rejected.name}
                      </p>
                      <p className="text-[12.5px] leading-relaxed text-ink/75">
                        {t.rejected.detail}
                      </p>
                    </div>
                  </div>

                  {/* Strategic Rationale & Hurdle */}
                  <div className="rounded-xl border border-line/50 bg-white/70 p-3.5 text-[12.5px] sm:text-[13px] leading-relaxed text-ink/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex-1">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b45309] mr-1.5">
                        Decision Rationale:
                      </span>
                      <span>{t.rationale}</span>
                    </div>
                    {t.hurdleOrMetric && (
                      <div className="shrink-0 rounded-lg bg-amber/20 border border-amber/40 px-2.5 py-1 font-mono text-[10.5px] font-bold text-[#161616]">
                        {t.hurdleOrMetric}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 04: Core Strategic Principles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line/40 pb-2">
            <div className="flex items-center gap-2">
              <IconLayers size={14} className="text-primary" />
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                04 / Transferable Strategic Toolkit Principles
              </p>
            </div>
            <span className="font-mono text-[11px] text-muted">Core Actionable Heuristics</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {framework.principles.map((p, idx) => {
              const name = typeof p === "string" ? p : p.name;
              const detail = typeof p === "string" ? null : p.detail;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-line/60 bg-paper/60 p-4 transition-all duration-200 hover:bg-paper hover:border-amber/80 hover:-translate-y-0.5 flex flex-row items-start gap-3"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-night font-mono text-[11px] font-bold text-amber shadow-xs mt-0.5">
                    0{idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-[14px] font-bold text-ink leading-snug">
                      {name}
                    </p>
                    {detail && (
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/80">
                        {detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 05: How to apply universally */}
        <div className="rounded-2xl bg-amber/10 border border-amber/30 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-[#161616]/80">
            <IconSparkle size={13} className="text-amber" />
            <p className="font-mono text-[11px] font-bold uppercase tracking-wider">
              05 / How This Toolkit Solves Universal Enterprise Problems
            </p>
          </div>
          <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#161616]/95">
            {framework.application}
          </p>
        </div>
      </div>
    </section>
  );
}
