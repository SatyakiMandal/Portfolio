"use client";

export function PrintBriefButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-cursor="Print"
      className={`inline-flex items-center gap-2 rounded-full border border-current/25 bg-current/5 px-3.5 py-1.5 font-mono text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-current/15 active:scale-95 ${className}`}
      title="Print or Save as PDF 1-Page Executive Summary"
    >
      <svg
        width="14"
        height="14"
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
      <span>Executive Brief (Print / PDF)</span>
    </button>
  );
}
