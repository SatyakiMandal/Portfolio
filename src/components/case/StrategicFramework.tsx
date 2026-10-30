"use client";

import { SectionAnchor } from "./SectionAnchor";
import { StrategicPipelineDiagram } from "./StrategicPipelineDiagram";
import {
  IconLayers,
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

export type StrategicPrinciple = {
  name: string;
  detail: string;
};

export type StrategicFrameworkData = {
  title: string;
  takeaway: string;
  thoughtProcess?: string;
  pipeline?: StrategicPipelineStep[];
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

        {/* 03: Core Strategic Principles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-line/40 pb-2">
            <div className="flex items-center gap-2">
              <IconLayers size={14} className="text-primary" />
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                03 / Transferable Strategic Toolkit Principles
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

        {/* 04: How to apply universally */}
        <div className="rounded-2xl bg-amber/10 border border-amber/30 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-[#161616]/80">
            <IconSparkle size={13} className="text-amber" />
            <p className="font-mono text-[11px] font-bold uppercase tracking-wider">
              04 / How This Toolkit Solves Universal Enterprise Problems
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
