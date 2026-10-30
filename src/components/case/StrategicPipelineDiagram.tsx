"use client";

import {
  IconCheckCircle,
  IconCpu,
  IconLayers,
  IconLock,
  IconTarget,
  IconWorkflow,
} from "@/components/Icons";
import type { StrategicPipelineStep } from "./StrategicFramework";

const stepIcons = [IconTarget, IconCpu, IconLayers, IconWorkflow];

export function StrategicPipelineDiagram({
  pipeline,
}: {
  pipeline: StrategicPipelineStep[];
  title?: string;
}) {
  if (!pipeline || pipeline.length === 0) return null;

  return (
    <div className="my-6 overflow-hidden rounded-2xl glass-card p-5 sm:p-7">
      {/* Executive Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 rounded-full bg-amber ring-4 ring-amber/20" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
            Strategic Execution Pipeline
          </span>
          <span className="text-muted/40">|</span>
          <span className="font-mono text-[11px] text-muted">
            Sequential Decision Gates ({pipeline.length} Horizons)
          </span>
        </div>
        <div className="font-mono text-[10.5px] text-muted hidden sm:inline-block">
          Boardroom Strategy Deliverable · Executive Synthesis
        </div>
      </div>

      {/* Sequential Horizontal Flow Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4 relative">
        {pipeline.map((step, idx) => {
          const StepIcon = stepIcons[idx % stepIcons.length];
          const isFirst = idx === 0;

          // Clean up phase label (e.g. "Phase 01: Audit" -> badge "01", category "Audit")
          const phaseParts = step.phase.split(":");
          const category = phaseParts[1]?.trim() || step.phase.replace(/phase\s*\d+/i, "").trim() || `Phase 0${idx + 1}`;

          return (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isFirst
                  ? "border-amber/60 bg-amber/[0.04] ring-1 ring-amber/30"
                  : "border-line/80 bg-white/90"
              }`}
            >
              {/* Top Phase Header */}
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-line/40 pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase ${
                        isFirst
                          ? "bg-amber text-[#161616]"
                          : "bg-night text-on-night"
                      }`}
                    >
                      Phase 0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                      {category}
                    </span>
                  </div>
                  <StepIcon size={14} className={isFirst ? "text-amber-dark" : "text-muted"} />
                </div>

                {/* Phase Name & Core Method */}
                <h3 className="mt-3.5 font-display text-[16px] sm:text-[17px] font-bold text-ink leading-snug tracking-tight">
                  {step.name}
                </h3>
                <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/80">
                  {step.detail}
                </p>
              </div>

              {/* Decision Gate Callout */}
              <div className="mt-4 rounded-lg border border-amber/40 bg-amber/[0.08] p-3 text-ink transition-colors group-hover:bg-amber/[0.13]">
                <div className="flex items-center gap-1.5 text-[#92400e]">
                  <IconLock size={11} className="shrink-0" />
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider">
                    Decision Gate 0{idx + 1}
                  </span>
                </div>
                <p className="mt-1 text-[11.5px] leading-snug font-medium text-[#78350f]">
                  {step.decisionGate}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sequential Progression Legend */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line/50 pt-3 text-[11px] font-mono text-muted">
        <div className="flex items-center gap-2">
          <IconCheckCircle size={12} className="text-forest shrink-0" />
          <span>Strict sequential hurdle criteria: Each decision gate must clear prior to downstream capital commitment.</span>
        </div>
        <span className="hidden md:inline text-muted/70">Stage-Gate Governance Model</span>
      </div>
    </div>
  );
}
