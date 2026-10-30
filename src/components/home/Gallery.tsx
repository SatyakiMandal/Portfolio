"use client";

import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { useEffect, useId, useState } from "react";
import { SectionAmbient } from "@/components/AmbientBackground";
import {
  cameraRollCategories,
  cameraRollItems,
  type CameraRollItem,
} from "@/content/cameraRoll";

// Mechanical 35mm Film Spool Reel Component (Rotates when motorized reel is active)
function MechanicalFilmSpool({ spinning = false, size = 24 }: { spinning?: boolean; size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      style={{ width: size, height: size }}
      className={`text-amber transition-transform duration-500 ease-out ${spinning ? "animate-spin-slow" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      {/* Outer Flange */}
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="3 3" />
      {/* Inner Hub */}
      <circle cx="16" cy="16" r="6" fill="#161616" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
      {/* 4 Precision Spool Spokes */}
      <circle cx="16" cy="6.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16" cy="25.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="16" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="25.5" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 35mm Film Roll Sprocket Ribbon Generator with realistic, high-contrast analog perforations
function FilmSprockets({ count = 40 }: { count?: number }) {
  return (
    <div
      aria-hidden="true"
      className="flex w-full items-center justify-between overflow-hidden border-y border-white/15 bg-[#070b09] px-3 py-2 select-none"
    >
      <div className="flex w-full items-center justify-between gap-3 overflow-hidden">
        {Array.from({ length: count }).map((_, i) => {
          const frameNum = String(Math.floor(i / 2) + 1).padStart(2, "0");
          return (
            <div key={i} className="flex items-center gap-2.5 shrink-0">
              {/* Authentic punched-out rectangular sprocket hole with depth & cream illumination */}
              <span className="h-3.5 w-5.5 rounded-[2.5px] bg-[#FAF8F5] border border-stone-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.7),0_1px_2px_rgba(255,255,255,0.2)]" />
              
              {/* Bold Golden Latent Edge Numbering & Film Typography */}
              {i % 2 === 0 ? (
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#FFD700] select-none drop-shadow-[0_0_6px_rgba(255,215,0,0.65)]">
                  ▲ {frameNum}A
                </span>
              ) : i % 4 === 1 ? (
                <span className="hidden sm:inline font-mono text-[9px] font-bold tracking-widest text-[#FFD700]/90 select-none">
                  KODAK 400TX
                </span>
              ) : (
                <span className="hidden sm:inline font-mono text-[9px] font-semibold tracking-widest text-white/70 select-none">
                  SAFETY FILM
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const INITIAL_BATCH_COUNT = 12;

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof cameraRollCategories)[number]
  >("All");
  const [activeItem, setActiveItem] = useState<CameraRollItem | null>(null);
  const [viewMode, setViewMode] = useState<"reel" | "sheet">("reel");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        typeof navigator !== "undefined" &&
        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const idPrefix = useId();

  const filteredItems =
    selectedCategory === "All"
      ? cameraRollItems
      : cameraRollItems.filter((item) => item.category === selectedCategory);

  // Curated initial batch or full collection on "See More"
  const displayItems = expanded
    ? filteredItems
    : filteredItems.slice(0, Math.min(INITIAL_BATCH_COUNT, filteredItems.length));

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!activeItem) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        const curIdx = filteredItems.findIndex((it) => it.id === activeItem.id);
        if (curIdx !== -1) {
          setActiveItem(filteredItems[(curIdx + 1) % filteredItems.length]);
          setIsZoomed(false);
        }
      } else if (e.key === "ArrowLeft") {
        const curIdx = filteredItems.findIndex((it) => it.id === activeItem.id);
        if (curIdx !== -1) {
          setActiveItem(
            filteredItems[
              (curIdx - 1 + filteredItems.length) % filteredItems.length
            ]
          );
          setIsZoomed(false);
        }
      } else if (e.key === " " || e.key === "z") {
        e.preventDefault();
        setIsZoomed((z) => !z);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeItem, filteredItems]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative overflow-hidden py-10 md:py-16"
    >
      <SectionAmbient variant="waves" />

      <div className="relative z-10 mx-auto max-w-[1360px] 2xl:max-w-[1560px] px-5 md:px-10">
        {/* Header Block: Editorial Presentation */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[12px] uppercase tracking-wider text-muted">
              Camera Roll
            </span>
            <h2
              id="gallery-title"
              data-grow
              data-cursor="Camera Roll"
              className="mt-2 max-w-[20ch] font-display text-[34px] leading-[38px] font-semibold tracking-[-0.025em] md:text-[54px] md:leading-[58px]"
            >
              Away from the spreadsheets. Behind the 35mm viewfinder.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="max-w-[42ch] text-[15px] leading-relaxed text-muted md:text-right">
              Street documentary, Himalayan high-passes, temple rituals, and hand-drawn graphite studies.
            </p>

            {/* View Mode Toggle: Film Reel vs Contact Sheet */}
            <div className="flex items-center gap-1.5 rounded-full border border-line/80 bg-paper/90 p-1 shadow-xs backdrop-blur-md">
              <button
                type="button"
                onClick={() => setViewMode("reel")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11.5px] transition-all ${
                  viewMode === "reel"
                    ? "bg-[#161616] font-semibold text-white shadow-xs"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span>🎞 35mm Motor Reel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("sheet")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11.5px] transition-all ${
                  viewMode === "sheet"
                    ? "bg-[#161616] font-semibold text-white shadow-xs"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span>⊞ Contact Sheet ({filteredItems.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills & Deck Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-y border-line/60 py-3.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {cameraRollCategories.map((cat) => {
              const active = selectedCategory === cat;
              const count =
                cat === "All"
                  ? cameraRollItems.length
                  : cameraRollItems.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setExpanded(false);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] transition-all ${
                    active
                      ? "bg-amber font-semibold text-[#161616] shadow-xs ring-1 ring-ink/20"
                      : "border border-line/70 bg-surface/50 text-muted hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  <span>{cat}</span>
                  <span className="tabular opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* High-Contrast Tactile Spool Transport Controls */}
          {viewMode === "reel" && (
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Frame Indicator Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[#FAF9F5] px-3 py-1.5 font-mono text-[11px] shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                <span className="text-muted">SHOWING</span>
                <span className="font-bold text-ink tabular">
                  {displayItems.length} / {filteredItems.length}
                </span>
              </div>

              {/* Play / Pause Tactile Push Button (High Contrast, Bold, Tactile Depth) */}
              <button
                type="button"
                onClick={() => setIsPlaying((prev) => !prev)}
                className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] font-bold tracking-wide transition-all duration-150 active:translate-y-[2px] active:shadow-[0_1px_0_#000] shadow-[0_3px_0_rgba(0,0,0,0.3)] ${
                  isPlaying
                    ? "border-stone-800 bg-[#161616] text-white hover:bg-black"
                    : "border-stone-400 bg-white text-ink hover:border-ink shadow-[0_3px_0_#ccc]"
                }`}
                title={isPlaying ? "Pause motorized film reel" : "Play motorized film reel"}
              >
                <MechanicalFilmSpool spinning={isPlaying} size={16} />
                <span>{isPlaying ? "PAUSE REEL" : "PLAY REEL"}</span>
              </button>
            </div>
          )}
        </div>

        {/* VIEW MODE 1: Hardware-Accelerated 35mm Motorized Film Roll Reel */}
        {viewMode === "reel" && (
          <div className="group/reel relative mt-8 overflow-hidden rounded-3xl border border-stone-800 bg-[#0c100e] text-on-night shadow-2xl">
            {/* Top Film Stock Ribbon Header with Dual Turning Spools */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/70 px-5 py-2.5 font-mono text-[10px] tracking-widest text-amber uppercase">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <MechanicalFilmSpool spinning={isPlaying} size={18} />
                  <span className="font-bold text-amber">KODAK 400TX &middot; 35MM MOTOR DRIVE</span>
                </div>
                <span className="hidden sm:inline text-white/45">
                  &middot; EMULSION NO. 4021 &middot; ISO 400 &middot; DX ENCODED
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/50">ARCHIVAL ROLL</span>
                <span className="rounded bg-amber/20 px-2 py-0.5 font-bold text-amber tabular">
                  {displayItems.length} EXPOSURES
                </span>
                <MechanicalFilmSpool spinning={isPlaying} size={18} />
              </div>
            </div>

            {/* Top Sprocket Ribbon */}
            <FilmSprockets count={32} />

            {/* Continuous Motorized Marquee Reel Track (Hardware Accelerated) */}
            <div className="relative overflow-hidden py-3">
              <div
                className="film-roll-track group-hover/reel:[animation-play-state:paused] active:[animation-play-state:paused]"
                style={{
                  animationPlayState: isPlaying ? "running" : "paused",
                  animationDuration: isMobile
                    ? `${Math.max(180, displayItems.length * 15)}s`
                    : `${Math.max(90, displayItems.length * 7.5)}s`,
                }}
              >
                {/* Double set of items for seamless infinite loop */}
                {[0, 1].map((setIndex) => (
                  <div key={setIndex} className="flex gap-6 pr-6 shrink-0">
                    {displayItems.map((item, idx) => (
                      <div
                        key={`${setIndex}-${item.id}`}
                        className="group relative w-[240px] sm:w-[285px] md:w-[315px] shrink-0 cursor-pointer select-none"
                        onClick={() => {
                          setActiveItem(item);
                          setIsZoomed(false);
                        }}
                      >
                        <div className="relative h-[320px] sm:h-[380px] md:h-[420px] w-full overflow-hidden rounded-xl border border-white/15 bg-black transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:border-amber/80 group-hover:shadow-[0_16px_36px_-12px_rgba(255,217,46,0.35)]">
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            unoptimized
                            sizes="(min-width: 768px) 315px, 240px"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                            loading={idx < 6 ? "eager" : "lazy"}
                          />

                          {/* Analog Contact Print Frame Tag Overlay */}
                          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3 font-mono text-[11px] z-10">
                            <span className="rounded-md border border-[#FFD700]/60 bg-black/85 px-2 py-0.5 font-bold text-[#FFD700] shadow-[0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_0_4px_rgba(255,215,0,0.4)]">
                              FRAME {item.frameNumber}
                            </span>
                            <span className="rounded-md border border-white/20 bg-black/80 px-2 py-0.5 text-[10px] font-semibold text-white/90">
                              {item.year}
                            </span>
                          </div>

                          {/* Bottom Metadata Reveal on Hover */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-4 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="font-mono text-[10px] font-bold text-[#FFD700] tracking-wide">{item.filmStock}</p>
                            <h3 className="line-clamp-1 font-display text-[15px] font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="line-clamp-1 font-mono text-[10px] text-white/80">
                              {item.camera} &middot; {item.exif.split("·")[0]}
                            </p>
                            <p className="mt-1 line-clamp-1 text-[11px] text-white/70">
                              📍 {item.location}
                            </p>
                          </div>
                        </div>

                        {/* Frame Edge Index below each negative: High-Contrast Gold Monospace */}
                        <div className="mt-2.5 flex items-center justify-between px-2 font-mono text-[11px] font-bold">
                          <span className="flex items-center gap-1.5 text-[#FFD700] drop-shadow-[0_0_5px_rgba(255,215,0,0.65)]">
                            <span className="text-[#FFD700]">▲</span> FRAME {item.frameNumber}
                          </span>
                          <span className="rounded-full bg-[#FFD700]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#FFD700] border border-[#FFD700]/40 transition-all duration-200 group-hover:bg-[#FFD700] group-hover:text-[#161616] group-hover:shadow-[0_0_10px_rgba(255,215,0,0.4)]">
                            DARKROOM ↗
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Sprocket Ribbon */}
            <FilmSprockets count={40} />

            {/* Bottom Edge Code Bar */}
            <div className="flex items-center justify-between border-t border-white/10 bg-black/60 px-5 py-2 font-mono text-[9px] tracking-widest text-white/40 uppercase">
              <span>EASTMAN KODAK CO. &middot; LATENT KEYCODE &middot; {displayItems.length} ACTIVE EXPOSURES</span>
              <span className="text-amber/80">HOVER TO PAUSE &middot; CLICK ANY FRAME FOR DARKROOM ENLARGEMENT</span>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: Contact Sheet Bento Grid */}
        {viewMode === "sheet" && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setIsZoomed(false);
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-300 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber hover:shadow-xl"
              >
                {/* 35mm Slide Frame Header */}
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-muted">
                  <span className="font-bold text-amber">FRAME {item.frameNumber}</span>
                  <span>{item.year}</span>
                </div>

                {/* Photo Aspect Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 border border-white/15 opacity-70 group-hover:border-amber/60" />
                </div>

                {/* Metadata Footnote */}
                <div className="mt-3">
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">{item.category}</span>
                  <h3 className="line-clamp-1 font-display text-[15px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 line-clamp-1 font-mono text-[11px] text-muted">
                    {item.camera} &middot; {item.exif.split("·")[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEE MORE / EXPAND TOGGLE BUTTON */}
        {filteredItems.length > INITIAL_BATCH_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white px-6 py-2.5 font-mono text-[12px] font-bold tracking-wide text-ink shadow-[0_3px_0_#d8d2c4] transition-all hover:border-ink hover:bg-[#FAF9F5] active:translate-y-[2px] active:shadow-[0_1px_0_#d8d2c4]"
            >
              <span>
                {expanded
                  ? `SHOW CURATED SELECTION (${INITIAL_BATCH_COUNT} FRAMES)`
                  : `SEE MORE PHOTOS (+${filteredItems.length - INITIAL_BATCH_COUNT} ARCHIVAL FRAMES)`}
              </span>
              <span className="text-amber text-base font-bold transition-transform duration-300 group-hover:scale-125">
                {expanded ? "▲" : "▼"}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* FULL-SCREEN DARKROOM ENLARGEMENT LIGHTBOX */}
      <AnimatePresence>
        {activeItem && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-5 md:p-8"
            onClick={() => {
              setActiveItem(null);
              setIsZoomed(false);
            }}
          >
            <m.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#0d120f] text-on-night shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)]"
            >
              {/* Top Film Carrier Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-3 font-mono text-[11px]">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-amber px-2 py-0.5 font-bold text-[#161616]">
                    FRAME {activeItem.frameNumber}
                  </span>
                  <span className="font-semibold text-amber">{activeItem.filmStock}</span>
                  <span className="hidden sm:inline text-white/40">&middot; {activeItem.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Zoom Loupe Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setIsZoomed((z) => !z)}
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 font-mono text-[11px] text-white/90 transition-colors hover:border-amber hover:text-amber"
                    title="Toggle zoom loupe (Spacebar / Z)"
                  >
                    <span>{isZoomed ? "🔍 1x Fit" : "🔍 1.8x Loupe"}</span>
                  </button>

                  {/* Prev Button */}
                  <button
                    type="button"
                    onClick={() => {
                      const curIdx = filteredItems.findIndex((it) => it.id === activeItem.id);
                      if (curIdx !== -1) {
                        setActiveItem(
                          filteredItems[
                            (curIdx - 1 + filteredItems.length) % filteredItems.length
                          ]
                        );
                        setIsZoomed(false);
                      }
                    }}
                    className="inline-flex h-8 items-center rounded-full border border-white/20 px-3 font-mono text-[11px] transition-colors hover:border-amber hover:text-amber"
                  >
                    &larr; Prev
                  </button>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => {
                      const curIdx = filteredItems.findIndex((it) => it.id === activeItem.id);
                      if (curIdx !== -1) {
                        setActiveItem(filteredItems[(curIdx + 1) % filteredItems.length]);
                        setIsZoomed(false);
                      }
                    }}
                    className="inline-flex h-8 items-center rounded-full border border-white/20 px-3 font-mono text-[11px] transition-colors hover:border-amber hover:text-amber"
                  >
                    Next &rarr;
                  </button>

                  {/* Close Lightbox Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveItem(null);
                      setIsZoomed(false);
                    }}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber hover:text-[#161616]"
                    aria-label="Close darkroom view"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Main Photo Stage: Guaranteed Responsive Non-Zero Height Stage */}
              <div className="relative flex h-[54vh] sm:h-[62vh] md:h-[68vh] min-h-[360px] w-full items-center justify-center overflow-hidden bg-black/95 p-3 sm:p-5">
                <div
                  className={`relative h-full w-full max-w-4xl flex items-center justify-center transition-transform duration-300 ease-out ${
                    isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed((z) => !z)}
                >
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                    priority
                  />
                </div>
              </div>

              {/* Film Negative Thumbnail Strip for Instant Jump across all exposures */}
              <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-black/90 px-4 py-2 scrollbar-none [scrollbar-width:none]">
                {filteredItems.map((thumb) => {
                  const isCurrent = thumb.id === activeItem.id;
                  return (
                    <button
                      key={thumb.id}
                      type="button"
                      onClick={() => {
                        setActiveItem(thumb);
                        setIsZoomed(false);
                      }}
                      className={`relative h-11 w-16 shrink-0 overflow-hidden rounded-md border transition-all ${
                        isCurrent
                          ? "border-amber ring-2 ring-amber/60 scale-105"
                          : "border-white/20 opacity-45 hover:opacity-100 hover:border-white/50"
                      }`}
                      title={`${thumb.frameNumber}: ${thumb.title}`}
                    >
                      <Image
                        src={thumb.src}
                        alt={thumb.title}
                        fill
                        unoptimized
                        sizes="64px"
                        className="object-cover"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-black/80 text-center font-mono text-[8px] text-amber font-semibold">
                        {thumb.frameNumber}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Museum-Style Metadata Placard */}
              <div className="flex flex-col justify-between gap-4 border-t border-white/10 bg-black/85 px-6 py-3.5 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-amber">
                    <span>📍 {activeItem.location}</span>
                    <span>&middot;</span>
                    <span>{activeItem.year}</span>
                  </div>
                  <h3
                    id={`${idPrefix}-lightbox-title`}
                    className="mt-0.5 font-display text-[18px] font-semibold text-white md:text-[21px]"
                  >
                    {activeItem.title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-white/75">
                    {activeItem.caption}
                  </p>
                </div>

                {/* Technical EXIF Telemetry Chip */}
                <div className="flex flex-col gap-1 rounded-xl border border-white/15 bg-white/5 p-2.5 font-mono text-[10.5px] md:min-w-[250px]">
                  <div className="flex items-center justify-between text-white/90">
                    <span className="font-semibold text-amber">{activeItem.camera}</span>
                    <span className="text-[9.5px] text-white/50">35MM ARCHIVE</span>
                  </div>
                  <div className="text-[10px] text-white/70">{activeItem.lens}</div>
                  <div className="border-t border-white/10 pt-1 text-[9.5px] text-white/60">
                    {activeItem.exif}
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
