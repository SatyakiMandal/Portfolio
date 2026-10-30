"use client";

import React from "react";

export type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

const baseProps = (size = 16, strokeWidth = 1.75, className = "") => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: `inline-block shrink-0 ${className}`,
  "aria-hidden": true as const,
});

// 1. Navigation & Actions
export function IconDownload({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function IconZap({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function IconArrowRight({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IconArrowLeft({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export function IconExternalLink({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// 2. Analytical & Consulting Framework Icons
export function IconTarget({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconCompass({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export function IconLayers({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

export function IconWorkflow({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6a3 3 0 0 1 3 3v6" />
      <circle cx="9" cy="18" r="3" />
      <path d="M12 18h3" />
    </svg>
  );
}

export function IconCheckCircle({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function IconShieldCheck({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function IconLock({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function IconTrendingUp({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function IconBarChart({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function IconCpu({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

// 3. Domain & Evidence Icons
export function IconTrophy({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export function IconMedal({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <circle cx="12" cy="14" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      <path d="M7 6 4 2h16l-3 4" />
      <path d="M12 6V2" />
    </svg>
  );
}

export function IconBookOpen({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export function IconMicroscope({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

export function IconDna({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m17 6-2.5-2.5" />
      <path d="m14 8-1-1" />
      <path d="m7 18 2.5 2.5" />
      <path d="m3.5 14.5.5.5" />
      <path d="m20 9.5.5.5" />
      <path d="m6.5 12.5 1 1" />
      <path d="m16.5 10.5 1 1" />
      <path d="m10 16 1 1" />
      <path d="m13 13 1 1" />
    </svg>
  );
}

export function IconScale({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

export function IconFactory({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

export function IconDatabase({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function IconSparkle({ size = 16, strokeWidth = 1.75, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth, className)}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
