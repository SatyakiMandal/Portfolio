"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";
import * as m from "framer-motion/m";
import type { Chart as ChartData } from "@/content/projects";
import { SourceNote } from "@/components/ui";
import { GrowBar } from "./GrowBar";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function CliffVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const rawMax = Math.max(...chart.bars.map((b) => b.value));
  const rawMin = Math.min(...chart.bars.map((b) => b.value));
  // Use actual range with margin to prevent compressing or flatlining
  const minVal = Math.min(0, rawMin);
  const maxVal = rawMax > minVal ? rawMax * 1.25 : 10;
  const valRange = maxVal - minVal || 1;

  const w = 340;
  const h = 135;
  const padX = 35;
  const innerW = w - padX * 2;

  const pts = chart.bars.map((b, i) => {
    const x = chart.bars.length === 1 ? w / 2 : padX + (i / (chart.bars.length - 1)) * innerW;
    const y = h - 25 - ((b.value - minVal) / valRange) * (h - 45);
    return { x, y, b };
  });

  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${pts[pts.length - 1].x.toFixed(1)} ${h - 10} L ${pts[0].x.toFixed(1)} ${h - 10} Z`;

  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-4">
        <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full overflow-visible">
          <defs>
            <linearGradient id={`cliff-grad-${chart.title.length}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="var(--amber)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {[25, 65, 105].map((y) => (
            <line key={y} x1="16" y1={y} x2={w - 16} y2={y} stroke="var(--line)" strokeDasharray="3 3" strokeWidth="1" />
          ))}

          <m.path
            d={areaPath}
            fill={`url(#cliff-grad-${chart.title.length})`}
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <m.path
            d={linePath}
            fill="none"
            stroke="var(--ink)"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {pts.map((p, i) => {
            const isHighlight = i === pts.length - 1 || (chart.bars.length > 2 && i === 2);
            // Alternate label heights so adjacent numbers never collide
            const labelOffsetY = i % 2 === 0 ? -14 : -28;
            return (
              <g key={p.b.label} className="cursor-pointer transition-transform duration-200 hover:scale-110">
                <line x1={p.x} y1={p.y} x2={p.x} y2={h - 10} stroke="var(--ink)" strokeOpacity="0.2" strokeDasharray="2 2" />
                <m.circle
                  cx={p.x}
                  cy={p.y}
                  r={isHighlight ? 6 : 5}
                  fill={isHighlight ? "var(--amber)" : "var(--surface)"}
                  stroke="var(--ink)"
                  strokeWidth="2.2"
                  initial={reduce ? { scale: 1 } : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 + i * 0.1 }}
                />

                {/* Score badge with high contrast background */}
                <g transform={`translate(${p.x}, ${p.y + labelOffsetY})`}>
                  <rect
                    x="-24"
                    y="-9"
                    width="48"
                    height="18"
                    rx="9"
                    fill="var(--night)"
                    stroke="var(--ink)"
                    strokeWidth="1"
                    className="shadow-xs"
                  />
                  <text
                    x="0"
                    y="3.5"
                    textAnchor="middle"
                    fill="#FFD92E"
                    className="font-display text-[10px] font-bold tabular select-none"
                  >
                    {p.b.display}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* Interactive hover legend cards */}
        <div className={`mt-3 grid gap-2 border-t border-line/60 pt-3 ${chart.bars.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
          {chart.bars.map((b) => (
            <m.div
              key={b.label}
              whileHover={{ scale: 1.02, y: -1 }}
              className="rounded-lg border border-line/50 bg-surface/90 p-2.5 transition-colors hover:border-amber hover:bg-paper"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-[11px] font-semibold text-ink leading-tight">{b.label}</p>
                <span className="font-mono text-[11px] font-bold text-amber-dark tabular shrink-0">{b.display}</span>
              </div>
              {!compact && b.note && <p className="mt-1 text-[11px] leading-snug text-muted">{b.note}</p>}
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LadderVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const max = Math.max(...chart.bars.map((b) => b.value));
  return (
    <div aria-hidden="true" className={compact ? "mt-4 space-y-2.5" : "mt-6 space-y-3"}>
      {chart.bars.map((b, i) => {
        const isTop = i === chart.bars.length - 1 && chart.unit === "Rs." ? true : i === 0 && chart.unit !== "Rs.";
        const pct = Math.max(18, (b.value / max) * 100);
        return (
          <m.div
            key={b.label}
            whileHover={{ scale: 1.015, x: 2 }}
            initial={reduce ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`relative overflow-hidden rounded-xl border p-3.5 transition-colors duration-200 ${
              isTop ? "border-ink bg-night text-on-night hover:border-amber" : "border-line/80 bg-paper/70 text-ink hover:border-ink hover:bg-paper"
            }`}
          >
            <m.span
              className={`pointer-events-none absolute inset-y-0 left-0 ${isTop ? "bg-amber/20" : "bg-sage/80"}`}
              initial={reduce ? { width: `${pct}%` } : { width: "0%" }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.12 }}
            />
            <div className="relative flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] font-bold ${isTop ? "bg-amber text-[#161616]" : "bg-ink/10 text-ink"}`}>
                    {i + 1}
                  </span>
                  <span className="text-[13px] font-semibold leading-snug">{b.label}</span>
                </div>
                {!compact && b.note && (
                  <p className={`mt-1 pl-7 text-[12px] leading-relaxed ${isTop ? "text-on-night/70" : "text-muted"}`}>{b.note}</p>
                )}
              </div>
              <span className={`font-display font-bold tabular ${compact ? "text-[17px]" : "text-[22px]"} ${isTop ? "text-amber" : ""}`}>
                {b.display}
              </span>
            </div>
          </m.div>
        );
      })}
    </div>
  );
}

function FunnelVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className={compact ? "mt-4 space-y-3" : "mt-6 space-y-3.5"}>
      {chart.bars.map((b, i) => {
        const widths = ["100%", "72%", "48%"];
        const targetW = widths[i] ?? "50%";
        const highlight = i === chart.bars.length - 1;
        return (
          <div key={b.label} className="flex flex-col items-center">
            <m.div
              whileHover={{ scale: 1.02 }}
              initial={reduce ? { width: targetW, opacity: 1 } : { width: "30%", opacity: 0 }}
              whileInView={{ width: targetW, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.16 }}
              className={`w-full rounded-xl border px-4 py-3 text-center transition-all duration-200 ${
                highlight ? "border-ink bg-amber text-[#161616] shadow-sm hover:brightness-105" : "border-line bg-paper text-ink hover:border-ink"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-left text-[13px] font-semibold leading-snug">{b.label}</span>
                <span className="font-display text-[20px] font-bold leading-none tabular">{b.display}</span>
              </div>
              {!compact && b.note && (
                <p className={`mt-1 text-left font-mono text-[11px] leading-relaxed ${highlight ? "text-[#161616]/75" : "text-muted"}`}>{b.note}</p>
              )}
            </m.div>
          </div>
        );
      })}
    </div>
  );
}

function MatrixVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-4">
        <div className="relative h-56 w-full rounded-lg border border-line/60 bg-surface/80 p-3">
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 border-t border-dashed border-line" />
          <div className="absolute inset-y-3 left-1/2 -translate-x-1/2 border-l border-dashed border-line" />

          <span className="absolute left-3 top-2 font-mono text-[10px] uppercase tracking-wider text-muted font-bold">Premium &uarr;</span>
          <span className="absolute left-3 bottom-2 font-mono text-[10px] uppercase tracking-wider text-muted font-bold">&darr; Value / Mass</span>
          <span className="absolute right-3 top-2 text-right font-mono text-[10px] uppercase tracking-wider text-amber font-bold">Moat / Shield &rarr;</span>

          <div className="relative h-full w-full">
            {chart.bars.map((b, i) => {
              const isHighlight = i === 0;
              const xPos = Math.min(84, Math.max(16, b.value));
              const yPos = isHighlight ? 24 : 34 + ((i * 22) % 48);
              return (
                <m.div
                  key={b.label}
                  whileHover={{ scale: 1.08 }}
                  initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 350, damping: 20, delay: i * 0.1 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${xPos}%`, top: `${yPos}%` }}
                >
                  <div
                    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 shadow-sm transition-colors ${
                      isHighlight
                        ? "border-amber bg-night text-amber font-semibold hover:border-amber-400"
                        : "border-line bg-surface text-ink text-[11px] hover:border-ink"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${isHighlight ? "bg-amber" : "bg-ink/40"}`} />
                    <span className="font-display font-medium leading-tight">{b.label}</span>
                    <span className="font-mono text-[10px] font-bold tabular ml-1">{b.display}</span>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-line/60 pt-2.5">
          {chart.bars.map((b) => (
            <m.div
              key={b.label}
              whileHover={{ scale: 1.015 }}
              className="rounded-lg bg-surface/90 p-2 border border-line/40 text-[11px] leading-relaxed text-muted transition-colors hover:border-ink/30"
            >
              <span className="font-semibold text-ink">{b.label}:</span> {b.note || b.display}
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GaugeVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const primary = chart.bars[0] ?? { label: "Score", value: 75, display: "75%" };
  const targetPct = Math.min(100, Math.max(0, primary.value));
  const circumference = 251.3;
  const strokeDashoffset = circumference - (targetPct / 100) * circumference;

  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative flex flex-col items-center overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-5">
        <svg viewBox="0 0 240 130" className="h-32 w-56 overflow-visible">
          <path
            d="M 30 115 A 80 80 0 0 1 210 115"
            fill="none"
            stroke="var(--line)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <m.path
            d="M 30 115 A 80 80 0 0 1 210 115"
            fill="none"
            stroke="var(--amber)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={reduce ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </svg>

        <div className="relative -mt-16 text-center">
          <span className="font-display text-[34px] font-extrabold tracking-tight text-ink tabular">
            {primary.display}
          </span>
          <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
            {primary.label}
          </p>
        </div>

        {chart.bars.length > 1 && (
          <div className="mt-4 grid w-full grid-cols-2 gap-2 border-t border-line/60 pt-3">
            {chart.bars.slice(1).map((b) => (
              <m.div
                key={b.label}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg bg-surface/90 p-2 text-center border border-line/40 transition-colors hover:border-ink/30"
              >
                <p className="font-mono text-[10px] uppercase text-muted">{b.label}</p>
                <p className="font-display text-[15px] font-bold text-ink">{b.display}</p>
              </m.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function computeWaterfallSteps(rawBars: ChartData["bars"]) {
  let running = 0;
  return rawBars.map((b, i) => {
    const isFirst = i === 0;
    const isLast = i === rawBars.length - 1;
    const val = b.value;
    let base = 0;

    if (isFirst || isLast) {
      base = 0;
      if (isFirst) running = val;
    } else {
      if (val >= 0) {
        base = running;
        running += val;
      } else {
        running += val;
        base = Math.max(0, running);
      }
    }
    return {
      label: b.label,
      display: b.display,
      value: val,
      base,
      height: Math.abs(val),
      isTotal: isLast,
      isNegative: val < 0,
      note: b.note,
    };
  });
}

function WaterfallVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const steps = computeWaterfallSteps(chart.bars);

  const maxVal = Math.max(...steps.map((s) => s.base + s.height), 1);
  const bottomY = 135;

  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-4">
        {/* SVG Waterfall Diagram */}
        <div className="relative h-44 w-full">
          <svg viewBox="0 0 400 150" className="h-full w-full overflow-visible">
            {[25, 75, 125].map((y) => (
              <line key={y} x1="10" y1={y} x2="390" y2={y} stroke="var(--line)" strokeDasharray="3 3" strokeWidth="1" />
            ))}

            {steps.map((s, i) => {
              const colW = Math.min(52, 330 / steps.length);
              const gap = (370 - colW * steps.length) / Math.max(1, steps.length - 1);
              const x = 15 + i * (colW + gap);

              const barH = Math.max(10, (s.height / maxVal) * 110);
              const barY = s.isTotal ? bottomY - barH : bottomY - ((s.base + s.height) / maxVal) * 110;

              const nextStep = steps[i + 1];
              const nextY = s.isNegative ? barY + barH : barY;

              return (
                <g key={s.label} className="cursor-pointer transition-transform duration-200 hover:scale-105" style={{ transformOrigin: `${x + colW / 2}px ${barY}px` }}>
                  {i < steps.length - 1 && nextStep && (
                    <line
                      x1={x + colW}
                      y1={nextY}
                      x2={x + colW + gap}
                      y2={nextY}
                      stroke="var(--ink)"
                      strokeOpacity="0.4"
                      strokeDasharray="2 2"
                      strokeWidth="1.2"
                    />
                  )}
                  <m.rect
                    x={x}
                    y={barY}
                    width={colW}
                    height={barH}
                    rx="4"
                    fill={
                      s.isTotal
                        ? "var(--amber)"
                        : s.isNegative
                        ? "var(--ink)"
                        : "var(--sage)"
                    }
                    fillOpacity={s.isTotal ? 1 : s.isNegative ? 0.75 : 0.9}
                    stroke="var(--ink)"
                    strokeWidth="1.4"
                    initial={reduce ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: `50% ${bottomY}px` }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  />
                  {/* Step label pill directly on the bar */}
                  <text
                    x={x + colW / 2}
                    y={Math.max(14, barY - 6)}
                    textAnchor="middle"
                    className="fill-ink font-display text-[10px] md:text-[11px] font-bold tabular"
                  >
                    {s.display}
                  </text>
                  <text
                    x={x + colW / 2}
                    y={bottomY + 12}
                    textAnchor="middle"
                    className="fill-muted font-mono text-[9px] uppercase font-bold"
                  >
                    {s.isTotal ? "Floor" : `S${i + 1}`}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Clean, Full-Width Readable Itemized Ledger with Zero Truncation */}
        <div className="mt-4 divide-y divide-line/60 rounded-xl border border-line/70 bg-surface/90 overflow-hidden">
          {steps.map((s, i) => (
            <m.div
              key={s.label}
              whileHover={{ x: 4, backgroundColor: "rgba(255, 217, 46, 0.08)" }}
              transition={{ duration: 0.15 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3.5 transition-colors text-left"
            >
              <div className="flex items-start gap-3">
                <span className={`inline-flex shrink-0 h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-bold ${
                  s.isTotal ? "bg-amber text-[#161616]" : s.isNegative ? "bg-ink text-paper" : "bg-night text-amber"
                }`}>
                  {s.isTotal ? "★" : String(i + 1)}
                </span>
                <div>
                  <p className="font-display text-[13px] font-bold text-ink leading-snug">
                    {s.label}
                  </p>
                  {s.note && <p className="mt-0.5 text-[12px] leading-relaxed text-muted">{s.note}</p>}
                </div>
              </div>
              <div className="self-end sm:self-center shrink-0">
                <span className={`inline-block font-mono text-[12px] font-bold tabular px-3 py-1 rounded-md ${
                  s.isTotal ? "bg-amber text-[#161616] shadow-xs" : "bg-paper text-ink border border-line"
                }`}>
                  {s.display}
                </span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpiderVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const bars = chart.bars;
  const maxVal = Math.max(...bars.map((b) => b.value), 100);
  const cx = 150;
  const cy = 95;
  const r = 68;

  const points = bars.map((b, i) => {
    const angle = (i / bars.length) * 2 * Math.PI - Math.PI / 2;
    const dist = Math.min(r, Math.max(14, (b.value / maxVal) * r));
    return {
      x: cx + dist * Math.cos(angle),
      y: cy + dist * Math.sin(angle),
      angle,
      b,
    };
  });

  const polygonPath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + " Z";

  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-4">
        <div className="relative h-60 w-full">
          <svg viewBox="0 0 300 205" className="h-full w-full overflow-visible">
            {[0.25, 0.5, 0.75, 1].map((scale) => {
              const ringPts = bars.map((_, i) => {
                const angle = (i / bars.length) * 2 * Math.PI - Math.PI / 2;
                return `${(cx + r * scale * Math.cos(angle)).toFixed(1)},${(cy + r * scale * Math.sin(angle)).toFixed(1)}`;
              }).join(" ");
              return (
                <polygon
                  key={scale}
                  points={ringPts}
                  fill="none"
                  stroke="var(--line)"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                />
              );
            })}

            {bars.map((_, i) => {
              const angle = (i / bars.length) * 2 * Math.PI - Math.PI / 2;
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={cx + r * Math.cos(angle)}
                  y2={cy + r * Math.sin(angle)}
                  stroke="var(--line)"
                  strokeWidth="1"
                />
              );
            })}

            <m.polygon
              points={polygonPath}
              fill="var(--amber)"
              fillOpacity="0.25"
              stroke="var(--amber)"
              strokeWidth="2.5"
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {points.map((p) => {
              const labelDist = r + 24;
              const lx = cx + labelDist * Math.cos(p.angle);
              const ly = cy + labelDist * Math.sin(p.angle);
              const isRight = Math.cos(p.angle) > 0.2;
              const isLeft = Math.cos(p.angle) < -0.2;
              const textAnchor = isRight ? "start" : isLeft ? "end" : "middle";

              return (
                <g key={p.b.label} className="cursor-pointer transition-transform duration-200 hover:scale-105">
                  <circle cx={p.x} cy={p.y} r="4.5" fill="var(--amber)" stroke="var(--ink)" strokeWidth="2" />
                  <text
                    x={lx}
                    y={ly}
                    textAnchor={textAnchor}
                    className="fill-ink font-mono text-[9px] md:text-[10px] font-bold"
                  >
                    {p.b.label}
                  </text>
                  {/* High contrast dark pill for the score so yellow is 100% legible */}
                  <g transform={`translate(${textAnchor === "start" ? lx + 20 : textAnchor === "end" ? lx - 20 : lx}, ${ly + 13})`}>
                    <rect
                      x="-22"
                      y="-8"
                      width="44"
                      height="16"
                      rx="8"
                      fill="#161616"
                      stroke="#D97706"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="3.5"
                      textAnchor="middle"
                      fill="#FFD92E"
                      className="font-display text-[9.5px] font-bold tabular select-none"
                    >
                      {p.b.display}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Clean full-width readable legend cards without truncation */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 border-t border-line/60 pt-3">
          {bars.map((b) => (
            <m.div
              key={b.label}
              whileHover={{ scale: 1.02, y: -1 }}
              className="rounded-lg bg-surface/90 p-2.5 border border-line/50 transition-colors hover:border-amber hover:bg-paper"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-bold text-ink leading-tight">{b.label}</span>
                <span className="font-mono text-[11px] font-extrabold text-amber-dark tabular shrink-0">{b.display}</span>
              </div>
              {b.note && <p className="mt-1 text-[11px] leading-relaxed text-muted">{b.note}</p>}
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function computeDonutSlices(bars: ChartData["bars"], total: number, circ: number) {
  const colors = [
    "#F59E0B", // Vibrant amber
    "#10B981", // Emerald
    "#161616", // Deep night
    "#3B82F6", // Blue
    "#8B5CF6", // Purple
  ];

  let accumulated = 0;
  return bars.map((b, i) => {
    const frac = Math.abs(b.value) / total;
    const strokeDash = frac * circ;
    const rotation = (accumulated / total) * 360 - 90;
    accumulated += Math.abs(b.value);
    return {
      b,
      strokeDash,
      rotation,
      color: colors[i % colors.length],
    };
  });
}

function DonutVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const bars = chart.bars;
  const total = bars.reduce((acc, b) => acc + Math.abs(b.value), 0) || 1;
  const r = 68;
  const circ = 2 * Math.PI * r;
  const slices = computeDonutSlices(bars, total, circ);

  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-around gap-6">
          <div className="relative h-48 w-48 shrink-0">
            <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90 overflow-visible">
              <circle cx="90" cy="90" r={r} fill="none" stroke="var(--line)" strokeWidth="22" />
              {slices.map((s, i) => (
                <m.circle
                  key={s.b.label}
                  cx="90"
                  cy="90"
                  r={r}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="22"
                  strokeDasharray={`${s.strokeDash} ${circ}`}
                  strokeDashoffset={0}
                  transform={`rotate(${s.rotation + 90} 90 90)`}
                  initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              ))}
            </svg>
            {/* Center readout sized to fit comfortably inside the hole with zero overlapping */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none">
              <span className="font-display text-[16px] font-extrabold text-ink tabular tracking-tight">
                {chart.callout?.value || chart.bars[0]?.display}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-bold mt-0.5">
                {chart.unit || "GM Total"}
              </span>
            </div>
          </div>

          {/* Legend items with full readable titles and hover scaling */}
          <div className="w-full space-y-2.5">
            {slices.map((s) => (
              <m.div
                key={s.b.label}
                whileHover={{ scale: 1.015, x: 2 }}
                className="rounded-xl bg-surface/90 p-3 border border-line/60 transition-colors hover:border-amber hover:bg-paper"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <span className="h-3 w-3 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: s.color }} />
                    <span className="font-display text-[12.5px] font-bold text-ink leading-snug">{s.b.label}</span>
                  </div>
                  <span className="font-mono text-[12px] font-extrabold text-ink tabular shrink-0">{s.b.display}</span>
                </div>
                {s.b.note && <p className="mt-1 pl-5 text-[11px] leading-relaxed text-muted">{s.b.note}</p>}
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TreemapVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const bars = chart.bars;
  const total = bars.reduce((acc, b) => acc + Math.abs(b.value), 0) || 1;

  const bgStyles = [
    "bg-night text-on-night border-ink",
    "bg-amber text-[#161616] border-ink",
    "bg-sage text-ink border-line",
    "bg-paper text-ink border-line",
  ];

  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-4">
        <div className="grid h-52 w-full grid-cols-12 gap-2">
          {bars.map((b, i) => {
            const frac = Math.abs(b.value) / total;
            const span = Math.max(3, Math.round(frac * 12));
            const colClass = span >= 6 ? "col-span-12 sm:col-span-6" : "col-span-6 sm:col-span-3";
            const style = bgStyles[i % bgStyles.length];

            return (
              <m.div
                key={b.label}
                whileHover={{ scale: 1.02 }}
                initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col justify-between rounded-xl border p-3.5 shadow-xs transition-transform ${colClass} ${style}`}
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider opacity-75">
                    {((Math.abs(b.value) / total) * 100).toFixed(0)}% Share
                  </span>
                  <p className="mt-1 font-display text-[13px] font-bold leading-tight" title={b.label}>
                    {b.label}
                  </p>
                </div>
                <div className="mt-2 flex items-baseline justify-between border-t border-current/15 pt-2 gap-2">
                  <span className="font-display text-[17px] font-extrabold tabular whitespace-nowrap">{b.display}</span>
                  {b.note && <span className="text-[10px] opacity-75 whitespace-normal break-words text-right">{b.note}</span>}
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StackedVisual({ chart, compact }: { chart: ChartData; compact: boolean }) {
  const reduce = useReducedMotion();
  const bars = chart.bars;
  const total = bars.reduce((acc, b) => acc + Math.abs(b.value), 0) || 1;

  const colors = [
    "bg-amber text-[#161616]",
    "bg-sage text-ink",
    "bg-night text-on-night",
    "bg-line text-ink",
  ];

  return (
    <div aria-hidden="true" className={compact ? "mt-4" : "mt-6"}>
      <div className="relative overflow-hidden rounded-xl border border-line/70 bg-paper/60 p-4">
        <div className="flex h-10 w-full overflow-hidden rounded-xl border border-line/80 shadow-xs">
          {bars.map((b, i) => {
            const pct = Math.max(8, (Math.abs(b.value) / total) * 100);
            return (
              <m.div
                key={b.label}
                whileHover={{ opacity: 0.9 }}
                initial={reduce ? { width: `${pct}%` } : { width: "0%" }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className={`flex items-center justify-center border-r border-line/40 px-2 font-display text-[11px] font-bold tabular transition-opacity ${colors[i % colors.length]}`}
                title={`${b.label}: ${b.display}`}
              >
                <span className="whitespace-nowrap">{b.display}</span>
              </m.div>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 border-t border-line/60 pt-3">
          {bars.map((b, i) => (
            <m.div
              key={b.label}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg bg-surface/90 p-2.5 border border-line/50 transition-colors hover:border-amber"
            >
              <div className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${colors[i % colors.length]}`} />
                <span className="font-mono text-[10px] uppercase text-muted font-semibold">{b.label}</span>
              </div>
              <p className="mt-1 font-display text-[14px] font-bold text-ink">{b.display}</p>
              {b.note && <p className="mt-0.5 text-[11px] leading-tight text-muted">{b.note}</p>}
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Exhibit-style consulting chart: supports waterfall, cliff, ladder, funnel, matrix, gauge, and bar variants,
// plus an accessible screen-reader data table.
export function Chart({
  chart,
  id,
  source,
  exhibit,
  compact = false,
}: {
  chart: ChartData;
  id: string;
  source?: string;
  exhibit?: string;
  compact?: boolean;
}) {
  const [inspecting, setInspecting] = useState(false);
  const mounted = useMounted();
  const max = Math.max(...chart.bars.map((b) => b.value));
  const variant = chart.variant ?? "bars";

  useEffect(() => {
    if (!inspecting) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInspecting(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [inspecting]);

  return (
    <figure className={compact ? "" : "group/chart flex flex-col justify-between w-full rounded-2xl glass-card p-6 md:p-7"}>
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {exhibit && (
              <span className="inline-flex items-center rounded-full bg-sage px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ink">
                {exhibit}
              </span>
            )}
            {!compact && (
              <button
                type="button"
                onClick={() => setInspecting(true)}
                className="inline-flex items-center gap-1 rounded-full border border-line bg-paper/60 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-muted transition-colors hover:border-amber hover:bg-amber/15 hover:text-ink active:scale-95"
                title="Inspect high-resolution exhibit and data table"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Inspect</span>
              </button>
            )}
          </div>
          {chart.unit && (
            <span className="font-mono text-[11px] text-muted">Unit: {chart.unit}</span>
          )}
        </div>
        <figcaption className={`font-display font-semibold tracking-[-0.015em] ${compact ? "mt-1 text-[17px] leading-6" : "mt-2.5 text-[20px] leading-7"}`}>
          {chart.title}
        </figcaption>
        {!compact && <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{chart.description}</p>}

        {variant === "cliff" ? (
          <CliffVisual chart={chart} compact={compact} />
        ) : variant === "ladder" ? (
          <LadderVisual chart={chart} compact={compact} />
        ) : variant === "funnel" ? (
          <FunnelVisual chart={chart} compact={compact} />
        ) : variant === "matrix" ? (
          <MatrixVisual chart={chart} compact={compact} />
        ) : variant === "gauge" ? (
          <GaugeVisual chart={chart} compact={compact} />
        ) : variant === "waterfall" ? (
          <WaterfallVisual chart={chart} compact={compact} />
        ) : variant === "spider" ? (
          <SpiderVisual chart={chart} compact={compact} />
        ) : variant === "donut" ? (
          <DonutVisual chart={chart} compact={compact} />
        ) : variant === "treemap" ? (
          <TreemapVisual chart={chart} compact={compact} />
        ) : variant === "stacked" ? (
          <StackedVisual chart={chart} compact={compact} />
        ) : (
          <div aria-hidden="true" className={compact ? "mt-4 space-y-3" : "mt-6 space-y-3.5"}>
            {chart.bars.map((b, i) => {
              const isHighlight = i === 0;
              const barWidth = Math.min(100, Math.max(6, (b.value / max) * 100));
              return (
                <m.div
                  key={b.label}
                  whileHover={{ scale: 1.015, y: -1 }}
                  transition={{ duration: 0.15 }}
                  className="group/item rounded-xl bg-paper/60 p-3.5 border border-line/50 transition-all duration-200 hover:border-amber hover:bg-paper/95 hover:shadow-sm"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13px] font-bold leading-snug text-ink">{b.label}</span>
                    <span className={`font-display font-bold tabular ${compact ? "text-[16px]" : "text-[20px]"} ${isHighlight ? "text-amber-dark font-extrabold" : "text-ink"}`}>
                      {b.display}
                    </span>
                  </div>
                  <div className="mt-2.5">
                    <GrowBar
                      width={barWidth}
                      index={i}
                      highlight={isHighlight}
                      className={compact ? "h-2.5 w-full" : "h-3.5 w-full"}
                    />
                  </div>
                  {!compact && b.note && <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-muted">{b.note}</p>}
                </m.div>
              );
            })}
          </div>
        )}
      </div>

      <div>
        {!compact && chart.callout && (
          <m.div
            whileHover={{ scale: 1.01 }}
            className="mt-5 flex items-center justify-between gap-4 rounded-xl bg-night px-4 py-3 text-on-night shadow-sm transition-all"
          >
            <span className="text-[12px] leading-snug text-on-night/80">{chart.callout.label}</span>
            <span className="shrink-0 font-display text-[20px] font-bold tracking-[-0.02em] text-amber tabular">
              {chart.callout.value}
            </span>
          </m.div>
        )}

        {source && !compact && <SourceNote>{source}</SourceNote>}
      </div>

      <div className="sr-only" aria-hidden="true" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)" }}>
        <table id={id} style={{ width: "1px", maxWidth: "1px", overflow: "hidden" }}>
          <caption>{chart.title}</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {chart.bars.map((b) => (
              <tr key={b.label}>
                <th scope="row">{b.label}</th>
                <td>{b.display}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* High-Resolution Interactive Exhibit Inspector Modal */}
      {inspecting && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto no-print"
          onClick={() => setInspecting(false)}
        >
          <div
            className="relative z-[100000] w-full max-w-[960px] rounded-3xl bg-surface text-ink shadow-[0_25px_80px_rgba(0,0,0,0.6)] ring-1 ring-ink/15 p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line/70 pb-4">
              <div className="flex items-center gap-2">
                {exhibit && (
                  <span className="rounded-full bg-sage px-3 py-1 font-mono text-[11px] font-bold text-ink">
                    {exhibit}
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  High-Resolution Analytical Exhibit
                </span>
              </div>
              <button
                type="button"
                onClick={() => setInspecting(false)}
                className="rounded-lg border border-line px-3.5 py-1.5 font-mono text-[12px] font-medium text-muted hover:border-ink hover:text-ink active:scale-95"
              >
                Close (Esc)
              </button>
            </div>

            <h3 className="mt-4 font-display text-[24px] font-bold tracking-tight text-ink">
              {chart.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
              {chart.description}
            </p>

            <div className="mt-6 rounded-2xl border border-line/60 bg-paper/60 p-6">
              {variant === "cliff" ? (
                <CliffVisual chart={chart} compact={false} />
              ) : variant === "ladder" ? (
                <LadderVisual chart={chart} compact={false} />
              ) : variant === "funnel" ? (
                <FunnelVisual chart={chart} compact={false} />
              ) : variant === "matrix" ? (
                <MatrixVisual chart={chart} compact={false} />
              ) : variant === "gauge" ? (
                <GaugeVisual chart={chart} compact={false} />
              ) : variant === "waterfall" ? (
                <WaterfallVisual chart={chart} compact={false} />
              ) : variant === "spider" ? (
                <SpiderVisual chart={chart} compact={false} />
              ) : variant === "donut" ? (
                <DonutVisual chart={chart} compact={false} />
              ) : variant === "treemap" ? (
                <TreemapVisual chart={chart} compact={false} />
              ) : variant === "stacked" ? (
                <StackedVisual chart={chart} compact={false} />
              ) : (
                <div className="space-y-4">
                  {chart.bars.map((b, i) => {
                    const isHighlight = i === 0;
                    const barWidth = Math.min(100, Math.max(6, (b.value / max) * 100));
                    return (
                      <div key={b.label} className="rounded-xl bg-surface p-4 border border-line/60">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[14px] font-bold text-ink">{b.label}</span>
                          <span className={`font-display text-[22px] font-bold tabular ${isHighlight ? "text-amber" : "text-ink"}`}>
                            {b.display}
                          </span>
                        </div>
                        <div className="mt-2">
                          <GrowBar width={barWidth} index={i} highlight={isHighlight} className="h-4 w-full" />
                        </div>
                        {b.note && <p className="mt-2 font-mono text-[12px] text-muted">{b.note}</p>}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Structured Analytical Data Table */}
            <div className="mt-6 overflow-hidden rounded-xl border border-line/70">
              <table className="w-full text-left font-sans text-[13px]">
                <thead className="bg-paper font-mono text-[11px] uppercase tracking-wider text-muted border-b border-line/70">
                  <tr>
                    <th className="p-3 pl-4">Metric / Category</th>
                    <th className="p-3">Quantitative Value</th>
                    <th className="p-3 pr-4">Analytical Note &amp; Strategic Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/50 bg-surface">
                  {chart.bars.map((b) => (
                    <tr key={b.label} className="hover:bg-paper/40">
                      <td className="p-3 pl-4 font-medium text-ink">{b.label}</td>
                      <td className="p-3 font-display font-bold text-amber-dark tabular">{b.display}</td>
                      <td className="p-3 pr-4 font-mono text-[12px] text-muted">{b.note || "Primary empirical observation"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {chart.callout && (
              <div className="mt-6 flex items-center justify-between rounded-xl bg-night px-5 py-4 text-on-night">
                <span className="text-[13px] text-on-night/85">{chart.callout.label}</span>
                <span className="font-display text-[24px] font-bold text-amber tabular">
                  {chart.callout.value}
                </span>
              </div>
            )}

            {source && (
              <p className="mt-4 font-mono text-[11px] text-muted text-right">
                Source: {source}
              </p>
            )}
          </div>
        </div>,
        document.body
      )}
    </figure>
  );
}
