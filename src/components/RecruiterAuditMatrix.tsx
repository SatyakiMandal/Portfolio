"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { projects } from "@/content/projects";
import { competitions } from "@/content/competitions";
import { BrandGlyph, type BrandKey } from "@/components/BrandLogo";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export type AuditItem = {
  id: string;
  kind: "project" | "competition" | "experience" | "research";
  title: string;
  sponsorOrOrg: string;
  brandKey: BrandKey;
  year: string;
  badge: string;
  topMetric: { value: string; label: string };
  questionOrChallenge: string;
  outcomeOrSolution: string;
  scopeChips: string[];
  href: string;
};

export function RecruiterAuditMatrix() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "projects" | "competitions" | "experience" | "research">("all");
  const [search, setSearch] = useState("");
  const mounted = useMounted();
  const titleId = useId();

  // Combine and format all 21 portfolio records across projects, competitions, experience, and research
  const allItems: AuditItem[] = [
    {
      id: "exp-epsilon",
      kind: "experience" as const,
      title: "Epsilon (Walmart Account)",
      sponsorOrOrg: "Epsilon & Walmart",
      brandKey: "epsilon",
      year: "2023 - 2025",
      badge: "Associate Data Scientist",
      topMetric: { value: "22%", label: "ROI lift from 6 dashboards across 50+ networks" },
      questionOrChallenge: "Optimized 120M+ monthly impressions across TV/OTT and ~$18M Super Bowl budget for Walmart, engineering PySpark LAL models and automating Databricks feeds.",
      outcomeOrSolution: "Delivered ~$4M media spend reallocation, $5M+ Super Bowl revenue, 22% ROI lift, and 15-18% conversion lift via look-alike models.",
      scopeChips: ["Media Analytics", "PySpark", "Databricks", "Tableau", "Look-Alike Models"],
      href: "/#experience",
    },
    {
      id: "exp-gajanan",
      kind: "experience" as const,
      title: "Shree Gajanan Industries (Rice Mill)",
      sponsorOrOrg: "Shree Gajanan Industries",
      brandKey: "shree-gajanan",
      year: "2026",
      badge: "Supply Chain Intern (SIP, Grade A+)",
      topMetric: { value: "37.5%", label: "higher milling throughput velocity (80 to 110 qtl/hr)" },
      questionOrChallenge: "End-to-end supply chain yield optimization, inventory variance audit, and operational takt-time standardization at a commercial rice processing facility processing 555 inbound vehicles.",
      outcomeOrSolution: "Optimized costs by Rs.9.19Cr via dynamic byproduct offset model, captured Rs.2.3Cr annual margin via moisture deduction algorithm, and achieved 0.00 quintal audit variance on 74,962 quintals.",
      scopeChips: ["Supply Chain", "SQL", "Zoho Analytics", "Operations", "SCADA"],
      href: "/#experience",
    },
    ...projects.map((p) => ({
      id: `p-${p.slug}`,
      kind: "project" as const,
      title: p.title,
      sponsorOrOrg: p.title.replace("Tata Consumer Products", "Tata Consumer").replace("Hindustan Unilever Red Label", "HUL Red Label"),
      brandKey: p.brandKey,
      year: p.year,
      badge: p.modelled ? "Modelled Project" : p.tag,
      topMetric: p.cardNumber || p.keyNumbers[0],
      questionOrChallenge: p.question,
      outcomeOrSolution: p.findings[0] || "",
      scopeChips: [...p.chips],
      href: `/work/${p.slug}`,
    })),
    ...competitions.map((c) => ({
      id: `c-${c.slug}`,
      kind: "competition" as const,
      title: c.name,
      sponsorOrOrg: c.sponsor,
      brandKey: c.brandKey,
      year: c.year,
      badge: c.result,
      topMetric: c.keyNumbers[0],
      questionOrChallenge: c.challenge,
      outcomeOrSolution: c.proposed[0] || c.findings[0] || "",
      scopeChips: [...c.chips],
      href: `/competitions/${c.slug}`,
    })),
    {
      id: "res-lyrics",
      kind: "research" as const,
      title: "Lyrics Generation Using LSTM and RNN",
      sponsorOrOrg: "Springer LNEE (Vol 1021)",
      brandKey: "springer",
      year: "2022 - 2023",
      badge: "Peer-Reviewed Publication",
      topMetric: { value: "400+", label: "accesses & 2 citations (Springer ICBCC 2022)" },
      questionOrChallenge: "Automated multi-genre lyrical composition using recurrent neural architectures while mitigating exposure bias and catastrophic forgetting on 40,000+ song lyrics.",
      outcomeOrSolution: "Architected 4-layer Bidirectional CuDNNLSTM yielding 15x GPU acceleration, <0.06 loss, and proven dropout regularization generating poetic repetition rated >80% by peer evaluators.",
      scopeChips: ["Deep Learning", "Bidirectional LSTM", "NLP", "CuDNN", "PyTorch"],
      href: "/#research",
    },
    {
      id: "res-lung-cancer",
      kind: "research" as const,
      title: "Lung Cancer Histopathology AI Prediction System",
      sponsorOrOrg: "VIT Chennai Summer Research Internship",
      brandKey: "vit",
      year: "2022",
      badge: "BioMedical AI Research",
      topMetric: { value: "99.97%", label: "test accuracy & 0.9997 F1 on 15,000 biopsy images" },
      questionOrChallenge: "Automated differential classification of histopathological lung biopsy slides into benign tissue, adenocarcinoma, and squamous cell carcinoma across high-dimensional cellular morphology.",
      outcomeOrSolution: "Benchmarked 18 CNN architectures; engineered stacked ensemble of top 5 CNNs with L1-regularized Logistic Regression meta-learner and custom 4-layer Conv2D with GSC filtering (97.73% subtype accuracy).",
      scopeChips: ["BioMedical AI", "EfficientNet B7", "ResNet", "Stacked Ensemble", "Histopathology"],
      href: "/#research",
    },
    {
      id: "res-skin-cancer",
      kind: "research" as const,
      title: "Skin Cancer Detection from Dermoscopic Images",
      sponsorOrOrg: "VIT Chennai B.Tech Capstone Thesis",
      brandKey: "vit",
      year: "2023",
      badge: "Capstone Thesis (BioMedical AI)",
      topMetric: { value: "95.37%", label: "AUC-ROC (88.48% accuracy, 0.875 F1 score)" },
      questionOrChallenge: "Early-stage automated melanoma and nevus lesion detection from ISIC 2017 dermoscopy, resolving high noise from hair follicles and uneven cutaneous illumination.",
      outcomeOrSolution: "Preprocessed with Dull Razor and Chan-Vese contour segmentation, reduced 23 ABCD clinical features to 9 markers via RFECV and Feature RNN, and built top 6 CNN stacked ensemble with KNN meta-learner.",
      scopeChips: ["ISIC 2017", "Dermoscopy", "Chan-Vese", "Stacked Ensemble", "Multimodal AI"],
      href: "/#research",
    },
    {
      id: "res-ricemill-case",
      kind: "research" as const,
      title: "Rice-Mill Supply Chain Operational Teaching Case",
      sponsorOrOrg: "XLRI Jamshedpur (In Peer Review)",
      brandKey: "xlri",
      year: "2026",
      badge: "Management Teaching Case",
      topMetric: { value: "Rs.2.3Cr", label: "annual margin recovery modelled in peer review" },
      questionOrChallenge: "142-page comprehensive operational teaching case examining grain procurement yield loss, seasonal moisture variance, and shift-level bottleneck economics.",
      outcomeOrSolution: "Detailed real-world byproduct recovery offset models, multi-factor moisture deduction algorithm, 0.00 quintal dual-master audit methodology, and 15,000-spare QR preventive maintenance BOM.",
      scopeChips: ["Teaching Case", "Supply Chain", "Procurement Governance", "Yield Optimization"],
      href: "/#research",
    },
  ];

  const filteredItems = allItems.filter((item) => {
    if (filter === "projects" && item.kind !== "project") return false;
    if (filter === "competitions" && item.kind !== "competition") return false;
    if (filter === "experience" && item.kind !== "experience") return false;
    if (filter === "research" && item.kind !== "research") return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const match =
        item.title.toLowerCase().includes(q) ||
        item.sponsorOrOrg.toLowerCase().includes(q) ||
        item.questionOrChallenge.toLowerCase().includes(q) ||
        item.topMetric.value.toLowerCase().includes(q) ||
        item.topMetric.label.toLowerCase().includes(q) ||
        item.scopeChips.some((c) => c.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

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

  // Global custom event listener so any button can open the audit matrix
  useEffect(() => {
    const handleOpenAudit = () => setOpen(true);
    window.addEventListener("open-recruiter-audit", handleOpenAudit);
    return () => window.removeEventListener("open-recruiter-audit", handleOpenAudit);
  }, []);

  return (
    <>
      {/* Screen Modal Preview rendered into document.body */}
      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <m.div
              data-dark
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 overflow-y-auto no-print"
              onClick={() => setOpen(false)}
            >
              <m.div
                data-dark
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-[100000] w-full max-w-[1240px] rounded-2xl sm:rounded-3xl bg-[#161616] text-[#F4F1EC] shadow-[0_30px_90px_rgba(0,0,0,0.8)] ring-1 ring-white/15 p-3.5 sm:p-6 md:p-8 max-h-[94vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
            {/* Modal Controls Header */}
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 sm:pb-5">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/20 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-[11px] font-bold text-amber">
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-amber animate-pulse" />
                    60-Sec Executive Audit
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#A2AFA6]">
                    {allItems.length} Strategy &amp; Analytics Cases
                  </span>
                </div>
                <h2 id={titleId} className="mt-1 font-display text-[17px] sm:text-[22px] md:text-[26px] font-bold text-white tracking-tight leading-snug">
                  Recruiter &amp; Partner Strategy Portfolio Matrix
                </h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  data-cursor="Print"
                  onClick={() => window.print()}
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] font-medium text-white transition hover:bg-white/10 active:scale-95"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  <span>Print</span>
                </button>
                <button
                  type="button"
                  data-cursor="Close"
                  onClick={() => setOpen(false)}
                  aria-label="Close modal"
                  className="rounded-xl border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-[11px] sm:text-[12px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white active:scale-95"
                >
                  Close <span className="hidden sm:inline">(Esc)</span>
                </button>
              </div>
            </div>

            {/* Filters & Search Row */}
            <div className="mt-3 sm:mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-3 sm:pb-4">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none whitespace-nowrap -mx-1 px-1">
                <button
                  type="button"
                  data-cursor="Filter"
                  onClick={() => setFilter("all")}
                  className={`shrink-0 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-[12px] font-medium transition ${
                    filter === "all"
                      ? "bg-amber text-[#161616] font-bold shadow-xs"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  All ({allItems.length})
                </button>
                <button
                  type="button"
                  data-cursor="Filter"
                  onClick={() => setFilter("projects")}
                  className={`shrink-0 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-[12px] font-medium transition ${
                    filter === "projects"
                      ? "bg-amber text-[#161616] font-bold shadow-xs"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Projects (8)
                </button>
                <button
                  type="button"
                  data-cursor="Filter"
                  onClick={() => setFilter("competitions")}
                  className={`shrink-0 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-[12px] font-medium transition ${
                    filter === "competitions"
                      ? "bg-amber text-[#161616] font-bold shadow-xs"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Competitions (7)
                </button>
                <button
                  type="button"
                  data-cursor="Filter"
                  onClick={() => setFilter("experience")}
                  className={`shrink-0 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-[12px] font-medium transition ${
                    filter === "experience"
                      ? "bg-amber text-[#161616] font-bold shadow-xs"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Experience (2)
                </button>
                <button
                  type="button"
                  data-cursor="Filter"
                  onClick={() => setFilter("research")}
                  className={`shrink-0 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-[12px] font-medium transition ${
                    filter === "research"
                      ? "bg-amber text-[#161616] font-bold shadow-xs"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Research (4)
                </button>
              </div>

              <div className="relative w-full sm:w-60 md:w-64 shrink-0">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search metric, client, topic..."
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-1 sm:py-1.5 font-mono text-[11px] sm:text-[12px] text-white placeholder-white/40 focus:border-amber focus:outline-none"
                />
                {search && (
                  <button
                    type="button"
                    data-cursor="Clear"
                    onClick={() => setSearch("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white font-mono text-[11px]"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Matrix Table & Mobile Cards */}
            <div className="mt-3 sm:mt-4 flex-1 overflow-y-auto rounded-xl sm:rounded-2xl border border-white/10 bg-black/40">
              {/* Desktop / Tablet Table View (md and up) */}
              <div className="hidden md:block">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 bg-[#1e1e1e] text-[#A2AFA6] font-mono text-[11px] uppercase tracking-wider border-b border-white/15 z-10">
                    <tr>
                      <th scope="col" className="p-3.5 pl-4 min-w-[210px]">Company &amp; Engagement</th>
                      <th scope="col" className="p-3.5 min-w-[150px]">Headline Impact Metric</th>
                      <th scope="col" className="p-3.5">Strategic Challenge &amp; Solution</th>
                      <th scope="col" className="p-3.5 min-w-[140px]">Domain</th>
                      <th scope="col" className="p-3.5 pr-4 text-right">Case Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-sans text-[13px]">
                    {filteredItems.map((item) => (
                      <tr
                        key={item.id}
                        data-cursor="Review"
                        className="group transition-colors hover:bg-white/[0.04]"
                      >
                        {/* Organization / Company */}
                        <td className="p-3.5 pl-4 align-top">
                          <div className="flex items-start gap-2.5">
                            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 p-1">
                              <BrandGlyph brand={item.brandKey} className="h-4 w-4 object-contain" />
                            </span>
                            <div>
                              <span className="font-display text-[14.5px] font-bold text-white group-hover:text-amber transition-colors">
                                {item.sponsorOrOrg}
                              </span>
                              <div className="mt-0.5 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] text-white/60">
                                <span className="whitespace-nowrap">{item.year}</span>
                                <span>·</span>
                                <span className="text-amber/90">{item.badge}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Top Metric */}
                        <td className="p-3.5 align-top">
                          <div className="min-w-[130px]">
                            <span className="font-display text-[18px] sm:text-[20px] font-extrabold text-amber tabular leading-none">
                              {item.topMetric.value}
                            </span>
                            <p className="mt-1 font-mono text-[10.5px] text-white/70 leading-snug whitespace-normal break-words">
                              {item.topMetric.label}
                            </p>
                          </div>
                        </td>

                        {/* Strategic Challenge & Solution */}
                        <td className="p-3.5 align-top max-w-[420px]">
                          <p className="font-medium text-white/90 leading-relaxed whitespace-normal break-words">
                            {item.questionOrChallenge}
                          </p>
                          <p className="mt-1.5 text-[12px] text-white/75 italic whitespace-normal break-words">
                            &rarr; {item.outcomeOrSolution}
                          </p>
                        </td>

                        {/* Domain Chips */}
                        <td className="p-3.5 align-top">
                          <div className="flex flex-wrap gap-1">
                            {item.scopeChips.map((c, i) => (
                              <span
                                key={i}
                                className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/80"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Action Link */}
                        <td className="p-3.5 pr-4 align-top text-right whitespace-nowrap">
                          <Link
                            href={item.href}
                            data-cursor="Review"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 font-mono text-[11px] font-semibold text-white transition hover:bg-amber hover:text-[#161616]"
                          >
                            <span>Review</span>
                            <span>&rarr;</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Responsive Card Feed (< md) */}
              <div className="md:hidden divide-y divide-white/10">
                {filteredItems.map((item) => (
                  <div key={item.id} className="p-3.5 flex flex-col gap-2.5 hover:bg-white/[0.03] transition-colors">
                    {/* Card Top: Org, Year & Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 p-1">
                          <BrandGlyph brand={item.brandKey} className="h-4 w-4 object-contain" />
                        </span>
                        <div className="min-w-0">
                          <span className="font-display text-[14px] font-bold text-white leading-tight block">
                            {item.sponsorOrOrg}
                          </span>
                          <span className="font-mono text-[10px] text-white/55">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[9.5px] font-semibold text-amber">
                        {item.badge}
                      </span>
                    </div>

                    {/* Metric Callout Tile */}
                    <div className="rounded-lg bg-white/[0.04] p-2.5 border border-white/5 flex items-baseline gap-2">
                      <span className="font-display text-[19px] font-black text-amber tabular leading-none shrink-0">
                        {item.topMetric.value}
                      </span>
                      <span className="font-mono text-[10.5px] text-white/70 leading-snug">
                        {item.topMetric.label}
                      </span>
                    </div>

                    {/* Strategic Context */}
                    <p className="text-[12px] text-white/85 leading-relaxed">
                      {item.questionOrChallenge}
                    </p>
                    {item.outcomeOrSolution && (
                      <p className="text-[11.5px] text-white/70 italic leading-snug">
                        &rarr; {item.outcomeOrSolution}
                      </p>
                    )}

                    {/* Bottom Bar: Chips + Direct Link */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="flex flex-wrap gap-1 min-w-0 flex-1">
                        {item.scopeChips.slice(0, 3).map((c, i) => (
                          <span
                            key={i}
                            className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[9px] text-white/75 truncate"
                          >
                            {c}
                          </span>
                        ))}
                        {item.scopeChips.length > 3 && (
                          <span className="font-mono text-[9px] text-white/40 self-center">
                            +{item.scopeChips.length - 3}
                          </span>
                        )}
                      </div>
                      <Link
                        href={item.href}
                        data-cursor="Review"
                        onClick={() => setOpen(false)}
                        className="shrink-0 inline-flex items-center gap-1 rounded-md bg-amber px-2.5 py-1 font-mono text-[10.5px] font-bold text-[#161616] shadow-xs active:scale-95 transition"
                      >
                        <span>Review</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Summary Bar */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-white/60 pt-2 border-t border-white/10">
              <div>
                Showing <span className="text-amber font-bold">{filteredItems.length}</span> of {allItems.length}
              </div>
              <button
                type="button"
                data-cursor="Close"
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white underline sm:no-underline"
              >
                <span className="sm:hidden">Close window</span>
                <span className="hidden sm:inline">Press <kbd className="rounded bg-white/15 px-1.5 py-0.5 text-white">Esc</kbd> to return</span>
              </button>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  )}
    </>
  );
}

// Global button to trigger the Recruiter Audit Matrix from anywhere
export function OpenAuditButton({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-recruiter-audit"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      data-cursor="Audit"
      className={className}
      title="Open 60-Second Recruiter Audit Matrix"
    >
      {children || (
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
          <span>60-Sec Recruiter Audit</span>
        </span>
      )}
    </button>
  );
}
