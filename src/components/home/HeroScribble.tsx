"use client";

import * as m from "framer-motion/m";
import { useCallback, useEffect, useRef, useState } from "react";

type Mark = { key: string; d: string; delay: number; width: number };

// Hand-drawn annotations, like a consultant marking up a slide: a generous loop around the left label
// and an arrow from the right label to the call to action.
// Measured from the live layout, drawn in sequence, held, then erased and looped.
// Hovering the name, left label, or button restarts the sequence.

function ellipse(r: DOMRect, cycle = 0) {
  // Deterministic organic variation based on cycle number
  const seed = (cycle * 1337) % 100;
  const padX = 20 + ((seed % 9) - 4); // 16 to 24
  const padY = 14 + (((seed * 3) % 7) - 3); // 11 to 17
  const rx = r.width * 0.5 + padX;
  const ry = r.height * 0.5 + padY;
  const cx = r.x + r.width * 0.5 + (((seed * 7) % 5) - 2);
  const cy = r.y + r.height * 0.5 + (((seed * 11) % 5) - 2);
  const kx = rx * 0.55228;
  const ky = ry * 0.55228;

  // Additional flourish length variation
  const flourishDip = 0.95 + ((seed % 10) * 0.015);
  const flourishExtend = 0.45 + ((seed % 7) * 0.02);

  // Fully continuous, unbroken 360-degree closed loop with consultant-style organic overlap at the top
  return [
    `M ${cx} ${cy - ry}`,
    `C ${cx + kx} ${cy - ry}, ${cx + rx} ${cy - ky}, ${cx + rx} ${cy}`,
    `C ${cx + rx} ${cy + ky}, ${cx + kx} ${cy + ry}, ${cx} ${cy + ry}`,
    `C ${cx - kx} ${cy + ry}, ${cx - rx} ${cy + ky}, ${cx - rx} ${cy}`,
    `C ${cx - rx} ${cy - ky}, ${cx - kx} ${cy - ry}, ${cx} ${cy - ry}`,
    `C ${cx + kx * 0.5} ${cy - ry * 1.04}, ${cx + rx * flourishExtend} ${cy - ry * flourishDip}, ${cx + rx * (flourishExtend + 0.1)} ${cy - ry * 0.72}`,
  ].join(" ");
}

function arrow(from: DOMRect, to: DOMRect, cycle = 0) {
  const seed = (cycle * 7919) % 100;
  // Start directly below the pedigree text block with slight cycle variation
  const sx = from.x + from.width * 0.5 + (((seed * 3) % 9) - 4);
  const sy = from.bottom + 8 + ((seed % 5) - 2);
  
  // Arrive cleanly at the right edge of the button
  const ex = to.right + 12;
  const ey = to.y + to.height * 0.5 + (((seed * 5) % 7) - 3);

  // Control points creating an elegant swooping curve
  const c1x = sx - 22 + (((seed * 2) % 11) - 5);
  const c1y = sy + (ey - sy) * (0.68 + ((seed % 8) * 0.01));
  const c2x = ex + 75 + (((seed * 4) % 15) - 7);
  const c2y = ey + 14 + (((seed * 6) % 9) - 4);

  // Mathematically computed tangent angle at the arrival point (ex, ey)
  // guaranteeing the arrowhead is always razor-sharp and symmetrical
  const dx = ex - c2x;
  const dy = ey - c2y;
  const angle = Math.atan2(dy, dx);
  const wingAngle = Math.PI / (7.2 + ((seed % 5) * 0.2)); // 23 to 26 degrees
  const wingLen = 13.5 + ((seed % 6) * 0.5); // 13.5 to 16.5px

  const w1x = ex + wingLen * Math.cos(angle + Math.PI - wingAngle);
  const w1y = ey + wingLen * Math.sin(angle + Math.PI - wingAngle);
  const w2x = ex + wingLen * Math.cos(angle + Math.PI + wingAngle);
  const w2y = ey + wingLen * Math.sin(angle + Math.PI + wingAngle);

  const body = `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`;
  const head = `M ${w1x.toFixed(1)} ${w1y.toFixed(1)} L ${ex} ${ey} L ${w2x.toFixed(1)} ${w2y.toFixed(1)}`;

  return [body, head];
}

export function HeroScribble() {
  // The layer sits inside the hero container and measures its parent.
  const layer = useRef<HTMLDivElement>(null);
  const [marks, setMarks] = useState<Mark[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [cycle, setCycle] = useState(0);
  const lastRestart = useRef(0);

  const measure = useCallback(() => {
    const box = layer.current?.parentElement;
    if (!box) return;

    // Support both 100% standard view and 67% desktop zoom without coordinate distortion
    const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
    const base = box.getBoundingClientRect();
    const rel = (el: Element | null) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      if (!r.width) return null;
      return new DOMRect(
        (r.x - base.x) / zoom,
        (r.y - base.y) / zoom,
        r.width / zoom,
        r.height / zoom
      );
    };

    const left = rel(box.querySelector("[data-scribble='circle']"));
    const right = rel(box.querySelector("[data-scribble='from']"));
    const cta = rel(box.querySelector("[data-scribble='to']"));
    const next: Mark[] = [];

    // Subtle width variation between 2.1px and 2.5px across cycles
    const circleWidth = 2.1 + ((cycle % 5) * 0.08);
    const arrowWidth = 2.1 + (((cycle + 2) % 5) * 0.08);

    if (left)
      next.push({ key: "circle", d: ellipse(left, cycle), delay: 0.1, width: circleWidth });
    if (right && cta) {
      const [body, head] = arrow(right, cta, cycle);
      next.push(
        { key: "arrow", d: body, delay: 0.9, width: arrowWidth },
        { key: "head", d: head, delay: 1.75, width: arrowWidth },
      );
    }

    const unzoomedW = box.clientWidth || Math.round(base.width / zoom);
    const unzoomedH = box.clientHeight || Math.round(base.height / zoom);
    setSize({ w: unzoomedW, h: unzoomedH });
    setMarks(next);
  }, [cycle]);

  useEffect(() => {
    const box = layer.current?.parentElement;
    if (!box) return;
    // Fonts change the layout once they load, so measure after they are ready and on every resize.
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(box);

    const restart = () => {
      const now = performance.now();
      if (now - lastRestart.current < 2000) return;
      lastRestart.current = now;
      setCycle((c) => c + 1);
    };

    // Auto-loop cycle: periodically redraws fresh annotations every 6.5 seconds
    const interval = setInterval(() => {
      setCycle((c) => c + 1);
    }, 6500);

    const triggers = box.querySelectorAll(
      "#hero-title, [data-scribble='circle'], [data-scribble='from'], [data-scribble='to']",
    );
    triggers.forEach((t) => t.addEventListener("pointerenter", restart));
    return () => {
      ro.disconnect();
      clearInterval(interval);
      triggers.forEach((t) => t.removeEventListener("pointerenter", restart));
    };
  }, [measure]);

  return (
    <div
      ref={layer}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10"
    >
      {size.w > 0 && (
        <svg
          className="absolute inset-0 h-full w-full overflow-visible text-ink"
          viewBox={`0 0 ${size.w} ${size.h}`}
          fill="none"
        >
          {marks.map((mk) => (
            <m.path
              key={`${mk.key}-${cycle}`}
              d={mk.d}
              stroke="currentColor"
              strokeWidth={mk.width}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.8 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.35,
                delay: mk.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </svg>
      )}
    </div>
  );
}
