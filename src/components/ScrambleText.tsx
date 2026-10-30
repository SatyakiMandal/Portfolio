"use client";

import { useEffect, useRef, useState } from "react";

type ScrambleTextProps = {
  children: string;
  className?: string;
  intervalMs?: number;
  triggerKey?: string | number;
};

const ENCRYPTED_CHARS = "0123456789%#$@&~*+=-/\\";
const MAX_STEPS = 28;

function getRandomChar() {
  return ENCRYPTED_CHARS[Math.floor(Math.random() * ENCRYPTED_CHARS.length)];
}

export function ScrambleText({
  children,
  className = "",
  intervalMs = 28,
  triggerKey,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const prevTextRef = useRef(children);

  useEffect(() => {
    prevTextRef.current = children;

    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const chars = Array.from(children);
    const total = chars.length;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const revealedCount = Math.floor((step / MAX_STEPS) * total);

      const scrambled = chars
        .map((char, idx) => {
          if (char === " " || char === "\n" || char === "\t") return char;
          if (idx < revealedCount) return char;
          return getRandomChar();
        })
        .join("");

      setDisplayText(scrambled);

      if (revealedCount >= total) {
        setDisplayText(children);
        clearInterval(timer);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [children, intervalMs, triggerKey]);

  return <span className={className}>{displayText}</span>;
}
