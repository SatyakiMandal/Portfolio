"use client";

import { useState } from "react";

export function SectionAnchor({
  id,
  label,
  className = "",
}: {
  id: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      data-cursor="Copy link"
      className={`group/anchor inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[11px] font-medium text-muted transition-colors hover:bg-amber/15 hover:text-ink active:scale-95 ${className}`}
      title={label ? `Copy link to ${label}` : "Copy link to section"}
      aria-label={label ? `Copy direct link to ${label}` : "Copy link to section"}
    >
      {copied ? (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber-dark">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="font-bold text-amber-dark">Copied!</span>
        </>
      ) : (
        <>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-60 transition-transform group-hover/anchor:scale-110 group-hover/anchor:opacity-100"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <span className="opacity-0 transition-opacity group-hover/anchor:opacity-100">
            Share
          </span>
        </>
      )}
    </button>
  );
}
