"use client";

import { useEffect, useRef, useState } from "react";
import { usePausedMotion } from "@/lib/motion";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  accent: boolean;
  baseVx: number;
  baseVy: number;
};

type Pointer = { x: number; y: number; nx: number; ny: number; active: boolean };

type Renderer = {
  resize: (w: number, h: number) => void;
  frame: (ctx: CanvasRenderingContext2D, w: number, h: number, pointer: Pointer) => void;
  move?: (x: number, y: number, dx: number, dy: number) => void;
};

function spawn(
  count: number,
  w: number,
  h: number,
  speed: number,
  accentEvery: number,
  rBase: number,
  rVar: number,
  aBase: number,
  aVar: number
): Particle[] {
  const out: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = (0.4 + Math.random() * 0.8) * speed;
    const vx = Math.cos(angle) * spd;
    const vy = Math.sin(angle) * spd;
    out.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx,
      vy,
      baseVx: vx,
      baseVy: vy,
      r: rBase + Math.random() * rVar,
      alpha: aBase + Math.random() * aVar,
      accent: i % accentEvery === 0,
    });
  }
  return out;
}

function stepParticle(
  p: Particle,
  w: number,
  h: number,
  pointer: Pointer,
  range: number,
  strength: number,
  minSpeed: number
) {
  if (pointer.active) {
    const dx = pointer.x - p.x;
    const dy = pointer.y - p.y;
    const d = Math.hypot(dx, dy);
    if (d < range && d > 12) {
      const pull = ((range - d) / range) * strength;
      p.vx += (dx / d) * pull;
      p.vy += (dy / d) * pull;
    }
  }

  // Gentle dampening towards baseline speed
  p.vx = p.vx * 0.98 + p.baseVx * 0.02;
  p.vy = p.vy * 0.98 + p.baseVy * 0.02;

  // Ensure particle is always moving
  const currentSpeed = Math.hypot(p.vx, p.vy);
  if (currentSpeed < minSpeed) {
    p.vx += (Math.random() - 0.5) * 0.2;
    p.vy += (Math.random() - 0.5) * 0.2;
  }

  p.x += p.vx;
  p.y += p.vy;

  // Wrap around boundaries smoothly
  if (p.x < -20) p.x = w + 20;
  if (p.x > w + 20) p.x = -20;
  if (p.y < -20) p.y = h + 20;
  if (p.y > h + 20) p.y = -20;
}

function linkParticles(
  ctx: CanvasRenderingContext2D,
  nodes: Particle[],
  i: number,
  maxD: number,
  rgb: string,
  maxAlpha: number,
  lw: number
) {
  const p = nodes[i];
  const max2 = maxD * maxD;
  for (let j = i + 1; j < nodes.length; j++) {
    const q = nodes[j];
    const dx = p.x - q.x;
    const dy = p.y - q.y;
    const d2 = dx * dx + dy * dy;
    if (d2 < max2) {
      const dist = Math.sqrt(d2);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(q.x, q.y);
      ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / maxD) * maxAlpha})`;
      ctx.lineWidth = lw;
      ctx.stroke();
    }
  }
}

function linkPointer(
  ctx: CanvasRenderingContext2D,
  p: Particle,
  pointer: Pointer,
  maxD: number,
  rgb: string,
  maxAlpha: number,
  lw: number
) {
  if (!pointer.active) return;
  const dx = p.x - pointer.x;
  const dy = p.y - pointer.y;
  const d2 = dx * dx + dy * dy;
  if (d2 < maxD * maxD) {
    const dist = Math.sqrt(d2);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(pointer.x, pointer.y);
    ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / maxD) * maxAlpha})`;
    ctx.lineWidth = lw;
    ctx.stroke();
  }
}

/**
 * Shared canvas loop: maintains steady 60fps rAF loop without unnecessary teardowns.
 * Supports both element-local canvases and viewport-fixed global backdrops.
 */
function useCanvasLoop(createFn: () => Renderer, fixed = false) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paused = usePausedMotion();
  const createRef = useRef(createFn);

  useEffect(() => {
    createRef.current = createFn;
  }, [createFn]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderer = createRef.current();
    const pointer: Pointer = { x: -9999, y: -9999, nx: 0, ny: 0, active: false };
    let width = 0;
    let height = 0;
    let rect = canvas.getBoundingClientRect();
    let rectDirty = true;
    let raf = 0;
    let intersecting = true;
    let visible = document.visibilityState === "visible";

    const tick = () => {
      if (width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);
        renderer.frame(ctx, width, height, pointer);
      }
      raf = requestAnimationFrame(tick);
    };

    const sync = () => {
      const run = intersecting && visible && !paused;
      if (run && !raf) {
        raf = requestAnimationFrame(tick);
      } else if (!run && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      if (paused && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);
      }
    };

    const updateDimensions = (w: number, h: number) => {
      if (w < 1 || h < 1) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = w;
      height = h;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rect = canvas.getBoundingClientRect();
      rectDirty = false;
      renderer.resize(width, height);
      sync();
    };

    let ro: ResizeObserver | null = null;
    let io: IntersectionObserver | null = null;

    const handleWindowResize = () => {
      updateDimensions(window.innerWidth, window.innerHeight);
    };

    if (fixed) {
      window.addEventListener("resize", handleWindowResize);
      updateDimensions(window.innerWidth, window.innerHeight);
    } else {
      ro = new ResizeObserver((entries) => {
        const box = entries[0].contentRect;
        updateDimensions(box.width, box.height);
      });
      ro.observe(canvas);

      io = new IntersectionObserver((entries) => {
        intersecting = entries[entries.length - 1].isIntersecting;
        if (intersecting) {
          rect = canvas.getBoundingClientRect();
          rectDirty = false;
        } else {
          pointer.active = false;
        }
        sync();
      });
      io.observe(canvas);
    }

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onScroll = () => {
      rectDirty = true;
    };

    const onMove = (e: PointerEvent) => {
      if (!intersecting) return;
      let x = e.clientX;
      let y = e.clientY;

      if (!fixed) {
        if (rectDirty) {
          rect = canvas.getBoundingClientRect();
          rectDirty = false;
        }
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          pointer.active = false;
          return;
        }
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }

      const dx = x - pointer.x;
      const dy = y - pointer.y;
      pointer.x = x;
      pointer.y = y;
      pointer.nx = x / Math.max(1, width) - 0.5;
      pointer.ny = y / Math.max(1, height) - 0.5;
      pointer.active = true;
      renderer.move?.(x, y, dx, dy);
    };

    const onLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    // Start immediately
    sync();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      if (io) io.disconnect();
      if (fixed) window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [paused, fixed]);

  return { canvasRef };
}

type Trail = { x: number; y: number; vx: number; vy: number; life: number; r: number; color: string };

const PILLARS = ["STRATEGY", "PRICING", "GO-TO-MARKET", "MEDIA MIX", "VALUATION", "PRODUCT"];

function createHero(): Renderer {
  let nodes: Particle[] = [];
  const trails: Trail[] = [];
  let prevW = 0;
  let t = 0;
  let smoothX = 0;
  let smoothY = 0;

  return {
    resize(w, h) {
      if (nodes.length === 0 || Math.abs(prevW - w) > 150) {
        prevW = w;
        const count = Math.min(65, Math.max(30, Math.floor((w * h) / 18000)));
        nodes = spawn(count, w, h, 0.75, 4, 1.8, 2.6, 0.35, 0.45);
      }
    },
    move(x, y, dx, dy) {
      if (Math.hypot(dx, dy) <= 1.5) return;
      for (let i = 0; i < 2; i++) {
        trails.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
          vy: (Math.random() - 0.5) * 1.5 - dy * 0.05,
          life: 1,
          r: 2.2 + Math.random() * 3.5,
          color: i % 2 === 0 ? "#FFD92E" : "#161616",
        });
      }
      if (trails.length > 50) trails.splice(0, trails.length - 50);
    },
    frame(ctx, width, height, pointer) {
      t += 0.01;
      smoothX += (pointer.nx - smoothX) * 0.06;
      smoothY += (pointer.ny - smoothY) * 0.06;

      const cx = width * 0.5 + smoothX * 40;
      const cy = height * 0.44 + smoothY * 30;
      const baseR = Math.min(width, height) * 0.36;

      // Flowing field waves
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const waveY = height * (0.24 + w * 0.24);
        const amp = 26 + w * 12;
        const freq = 0.003 + w * 0.0008;
        for (let x = 0; x <= width; x += 20) {
          const y = waveY + Math.sin(x * freq + t * (1.3 + w * 0.35) + w) * amp + Math.cos(x * freq * 0.5 - t * 0.8) * (amp * 0.35);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = w === 1 ? "rgba(22, 22, 22, 0.11)" : "rgba(22, 22, 22, 0.075)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Circular concentric orbital rings (strictly circular, zero eccentricity)
      const rings = [
        { r: baseR * 0.95, rot: t * 0.25, dash: [8, 8], alpha: 0.14 },
        { r: baseR * 0.75, rot: -t * 0.18, dash: [] as number[], alpha: 0.12 },
        { r: baseR * 0.55, rot: -t * 0.35, dash: [4, 6], alpha: 0.16 },
      ];
      for (const ring of rings) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ring.rot + smoothX * 0.2);
        ctx.setLineDash(ring.dash);
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(22, 22, 22, ${ring.alpha})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
        ctx.restore();
      }

      // Orbiting pillar nodes with spokes (strictly circular orbit)
      const orbitRadius = baseR * 0.82;
      ctx.font = "600 10px monospace";
      PILLARS.forEach((label, i) => {
        const angle = t * 0.35 + (i * Math.PI * 2) / PILLARS.length;
        const px = cx + Math.cos(angle) * orbitRadius;
        const py = cy + Math.sin(angle) * orbitRadius;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = "rgba(22, 22, 22, 0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, i % 2 === 0 ? 4.2 : 3.4, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? "#FFD92E" : "#161616";
        ctx.fill();
        ctx.strokeStyle = "rgba(22, 22, 22, 0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = "rgba(22, 22, 22, 0.55)";
        ctx.fillText(label, px + 8, py + 3.5);
      });
      ctx.setLineDash([]);

      // Particle network
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        stepParticle(p, width, height, pointer, 260, 0.065, 0.4);
        linkParticles(ctx, nodes, i, 140, "22, 22, 22", 0.22, 1.0);
        linkPointer(ctx, p, pointer, 220, "22, 22, 22", 0.45, 1.2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? "rgba(255, 217, 46, 0.95)" : `rgba(22, 22, 22, ${p.alpha})`;
        ctx.fill();
        if (p.accent) {
          ctx.strokeStyle = "rgba(22, 22, 22, 0.6)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Cursor trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const tr = trails[i];
        tr.x += tr.vx;
        tr.y += tr.vy;
        tr.life -= 0.03;
        if (tr.life <= 0) {
          trails.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(tr.x, tr.y, tr.r * tr.life, 0, Math.PI * 2);
        ctx.fillStyle = tr.color;
        ctx.globalAlpha = tr.life * 0.7;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    },
  };
}

function createDark(): Renderer {
  let nodes: Particle[] = [];
  const trails: Trail[] = [];
  let prevW = 0;
  let t = 0;

  return {
    resize(w, h) {
      if (nodes.length === 0 || Math.abs(prevW - w) > 150) {
        prevW = w;
        const count = Math.min(50, Math.max(24, Math.floor((w * h) / 20000)));
        nodes = spawn(count, w, h, 0.8, 3, 1.8, 2.8, 0.35, 0.6);
      }
    },
    move(x, y, dx, dy) {
      if (Math.hypot(dx, dy) <= 1.5) return;
      for (let i = 0; i < 2; i++) {
        trails.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
          vy: (Math.random() - 0.5) * 1.5 - dy * 0.05,
          life: 1,
          r: 2.2 + Math.random() * 3.5,
          color: i % 2 === 0 ? "#FFD92E" : "#F5F1E8",
        });
      }
      if (trails.length > 50) trails.splice(0, trails.length - 50);
    },
    frame(ctx, width, height, pointer) {
      t += 0.012;

      if (pointer.active) {
        const grad = ctx.createRadialGradient(pointer.x, pointer.y, 10, pointer.x, pointer.y, 280);
        grad.addColorStop(0, "rgba(255, 217, 46, 0.18)");
        grad.addColorStop(0.5, "rgba(255, 217, 46, 0.06)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // Wave ribbons
      for (let w = 0; w < 4; w++) {
        ctx.beginPath();
        const baseY = height * (0.15 + w * 0.23);
        const amp = 30 + (w % 2) * 20;
        const freq = 0.0028 + w * 0.00045;
        for (let x = 0; x <= width; x += 22) {
          const y = baseY + Math.sin(x * freq + t * (1.1 + w * 0.25) + w * 1.3) * amp + Math.cos(x * freq * 1.6 - t * 0.8) * (amp * 0.35);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = w % 2 === 0 ? "rgba(255, 217, 46, 0.18)" : "rgba(245, 241, 232, 0.12)";
        ctx.lineWidth = w === 2 ? 1.8 : 1.2;
        ctx.stroke();
      }

      // Rotating orbital hubs
      const hubs = [
        { x: width * 0.5, y: height * 0.42, r: Math.min(width, height) * 0.34, speed: 0.25 },
        { x: width * 0.22, y: height * 0.52, r: Math.min(width, height) * 0.22, speed: -0.35 },
        { x: width * 0.78, y: height * 0.48, r: Math.min(width, height) * 0.22, speed: 0.32 },
      ];
      hubs.forEach((hub, idx) => {
        ctx.save();
        ctx.translate(hub.x, hub.y);
        ctx.rotate(t * hub.speed);
        ctx.setLineDash([6, 10]);
        ctx.beginPath();
        ctx.arc(0, 0, hub.r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 0 ? "rgba(255, 217, 46, 0.22)" : "rgba(245, 241, 232, 0.14)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(hub.r, 0, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFD92E";
        ctx.fill();
        ctx.restore();
      });

      // Constellation nodes
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        stepParticle(p, width, height, pointer, 280, 0.075, 0.35);
        linkParticles(ctx, nodes, i, 150, "255, 217, 46", 0.28, 1.0);
        linkPointer(ctx, p, pointer, 230, "255, 217, 46", 0.55, 1.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? `rgba(255, 217, 46, ${Math.max(0.6, p.alpha)})` : `rgba(245, 241, 232, ${p.alpha * 0.85})`;
        ctx.fill();
      }

      // Cursor trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const tr = trails[i];
        tr.x += tr.vx;
        tr.y += tr.vy;
        tr.life -= 0.03;
        if (tr.life <= 0) {
          trails.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(tr.x, tr.y, tr.r * tr.life, 0, Math.PI * 2);
        ctx.fillStyle = tr.color;
        ctx.globalAlpha = tr.life * 0.8;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    },
  };
}

function createLight(): Renderer {
  let nodes: Particle[] = [];
  const trails: Trail[] = [];
  let prevW = 0;
  let t = 0;
  let smoothX = 0;
  let smoothY = 0;

  return {
    resize(w, h) {
      if (nodes.length === 0 || Math.abs(prevW - w) > 150) {
        prevW = w;
        const count = Math.min(160, Math.max(50, Math.floor((w * h) / 12000)));
        nodes = spawn(count, w, h, 0.78, 3.5, 2.2, 3.4, 0.45, 0.70);
      }
    },
    move(x, y, dx, dy) {
      if (Math.hypot(dx, dy) <= 1.5) return;
      for (let i = 0; i < 2; i++) {
        trails.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
          vy: (Math.random() - 0.5) * 1.5 - dy * 0.05,
          life: 1,
          r: 2.4 + Math.random() * 3.5,
          color: i % 2 === 0 ? "#FFD92E" : "#161616",
        });
      }
      if (trails.length > 50) trails.splice(0, trails.length - 50);
    },
    frame(ctx, width, height, pointer) {
      t += 0.01;
      smoothX += (pointer.nx - smoothX) * 0.06;
      smoothY += (pointer.ny - smoothY) * 0.06;

      const cx = width * 0.5 + smoothX * 40;
      const baseR = Math.min(width, 900) * 0.34;

      // Flowing field waves distributed vertically
      const waveCount = Math.max(3, Math.min(8, Math.floor(height / 450)));
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const waveY = (height / (waveCount + 1)) * (w + 1);
        const amp = 24 + (w % 3) * 10;
        const freq = 0.0026 + (w % 3) * 0.0006;
        for (let x = 0; x <= width; x += 22) {
          const y = waveY + Math.sin(x * freq + t * (1.2 + (w % 3) * 0.3)) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = w % 2 === 1 ? "rgba(22, 22, 22, 0.09)" : "rgba(22, 22, 22, 0.06)";
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }

      // Concentric circular rings distributed down the page (strictly circular)
      for (let ryPos = Math.min(420, height * 0.4); ryPos < height; ryPos += 950) {
        const rings = [
          { r: baseR * 0.9, rot: t * 0.22, dash: [6, 8], alpha: 0.12 },
          { r: baseR * 0.7, rot: -t * 0.15, dash: [] as number[], alpha: 0.09 },
        ];
        for (const ring of rings) {
          ctx.save();
          ctx.translate(cx, ryPos);
          ctx.rotate(ring.rot + smoothX * 0.18);
          ctx.setLineDash(ring.dash);
          ctx.beginPath();
          ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(22, 22, 22, ${ring.alpha})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
          ctx.restore();
        }
      }
      ctx.setLineDash([]);

      // Constellation network
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        stepParticle(p, width, height, pointer, 260, 0.065, 0.4);
        linkParticles(ctx, nodes, i, 160, "22, 22, 22", 0.25, 1.1);
        linkPointer(ctx, p, pointer, 240, "22, 22, 22", 0.55, 1.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? "rgba(255, 217, 46, 0.95)" : `rgba(22, 22, 22, ${p.alpha})`;
        ctx.fill();
        ctx.strokeStyle = p.accent ? "rgba(22, 22, 22, 0.6)" : "rgba(22, 22, 22, 0.25)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Cursor trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const tr = trails[i];
        tr.x += tr.vx;
        tr.y += tr.vy;
        tr.life -= 0.03;
        if (tr.life <= 0) {
          trails.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(tr.x, tr.y, tr.r * tr.life, 0, Math.PI * 2);
        ctx.fillStyle = tr.color;
        ctx.globalAlpha = tr.life * 0.7;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    },
  };
}

function Canvas({
  create,
  fixed = false,
  opacity = 0.9,
}: {
  create: () => Renderer;
  fixed?: boolean;
  opacity?: number;
}) {
  const { canvasRef } = useCanvasLoop(create, fixed);
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ opacity }}
      className={`pointer-events-none ${fixed ? "fixed inset-0 h-full w-full z-0" : "absolute inset-0 h-full w-full"} transition-opacity duration-700 ease-out`}
    />
  );
}

// Global living ambient backdrop: fixed viewport particle canvas, continuous technical paper grid, and drifting orbs
export function GlobalLivingBackdrop() {
  const [isTopSection, setIsTopSection] = useState(true);

  useEffect(() => {
    const checkTop = () => {
      const topEl =
        document.querySelector("[data-top-section]") ||
        document.getElementById("hero") ||
        document.getElementById("hero-title") ||
        document.querySelector("header");

      if (topEl) {
        const rect = topEl.getBoundingClientRect();
        // Top section is active while its bottom hasn't scrolled past the upper viewport threshold
        setIsTopSection(rect.bottom > 140);
      } else {
        setIsTopSection(window.scrollY < 400);
      }
    };

    checkTop();
    window.addEventListener("scroll", checkTop, { passive: true });
    window.addEventListener("resize", checkTop, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkTop);
      window.removeEventListener("resize", checkTop);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Continuous Technical Blueprint Paper Grid running seamlessly down the entire site */}
      <div
        className="paper-grid absolute inset-0 transition-opacity duration-700 ease-out"
        style={{ opacity: isTopSection ? 0.55 : 0.18 }}
      />

      {/* Drifting Atmospheric Mesh Gradients */}
      <div
        className="ambient-orb o1 absolute left-[-8%] top-[10%] h-[42vw] w-[42vw] rounded-full bg-ink/[0.035] blur-3xl will-change-transform transition-opacity duration-700 ease-out"
        style={{ opacity: isTopSection ? 1 : 0.25 }}
      />
      <div
        className="ambient-orb o2 absolute right-[-6%] top-[38%] h-[45vw] w-[45vw] rounded-full bg-amber/[0.13] blur-3xl will-change-transform transition-opacity duration-700 ease-out"
        style={{ opacity: isTopSection ? 1 : 0.25 }}
      />
      <div
        className="ambient-orb o3 absolute left-[28%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full bg-sage/[0.30] blur-3xl will-change-transform transition-opacity duration-700 ease-out"
        style={{ opacity: isTopSection ? 1 : 0.25 }}
      />

      {/* Viewport-fixed constant particle canvas: 50% on the top section of each page, reduced to 20% across all other sections */}
      <Canvas create={createLight} fixed opacity={isTopSection ? 0.50 : 0.20} />
    </div>
  );
}

// Hero: flywheel, particles, spokes, and cursor trails
export function HeroCanvas() {
  return <Canvas create={createHero} opacity={0.50} />;
}

// Dark sections: wave ribbons, orbital rings, and glowing constellation
export function DarkKineticCanvas() {
  return <Canvas create={createDark} opacity={1.0} />;
}

// Light sections: active constellation network and flowing waves
export function LightKineticCanvas({ fixed = false }: { fixed?: boolean }) {
  return <Canvas create={createLight} fixed={fixed} />;
}

// Living ambient backdrop: subtle flowing waves, no rogue particles or distorted elliptical elements
export function SectionAmbient({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = "waves",
}: {
  variant?: "waves" | "grid" | "orbits";
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden w-full max-w-full [contain:paint]">
      {/* Flowing SVG Vector Linework */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full max-w-full overflow-hidden text-ink" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <path
          className="dash-ambient-1"
          d="M -60 220 C 280 110, 560 330, 880 190 C 1140 80, 1320 290, 1500 180"
          stroke="currentColor"
          strokeOpacity="0.06"
          strokeWidth="1.2"
          strokeDasharray="8 10"
        />
        <path
          className="dash-ambient-2"
          d="M -60 480 C 260 600, 620 350, 940 510 C 1180 620, 1340 410, 1500 490"
          stroke="#161616"
          strokeOpacity="0.06"
          strokeWidth="1.2"
          strokeDasharray="10 12"
        />
        <path
          className="dash-ambient-3"
          d="M -60 730 C 320 630, 680 820, 1020 680 C 1220 590, 1360 770, 1500 700"
          stroke="currentColor"
          strokeOpacity="0.05"
          strokeWidth="1.1"
          strokeDasharray="5 9"
        />
      </svg>
    </div>
  );
}
