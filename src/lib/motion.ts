"use client";

import { useEffect, useState } from "react";

// One site-wide switch for decorative motion (WCAG 2.2.2: moving content needs a pause control).
// The visitor's choice is kept in localStorage and mirrored as `html.motion-paused`, which
// globals.css uses to pause CSS animations. JS loops call usePausedMotion() or isMotionPaused().
const KEY = "sm-motion-paused";
const EVENT = "sm-motion-change";

export function isMotionPaused() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("motion-paused");
}

export function setMotionPaused(paused: boolean) {
  document.documentElement.classList.toggle("motion-paused", paused);
  try {
    localStorage.setItem(KEY, paused ? "1" : "0");
  } catch {
    // Storage can be blocked; the class still applies for this visit.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: paused }));
}

export function restoreMotionPreference() {
  try {
    if (localStorage.getItem(KEY) === "1") document.documentElement.classList.add("motion-paused");
  } catch {
    // ignore
  }
}

export function usePausedMotion() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPaused(isMotionPaused() || mq.matches);
    update();
    window.addEventListener(EVENT, update);
    mq.addEventListener("change", update);
    return () => {
      window.removeEventListener(EVENT, update);
      mq.removeEventListener("change", update);
    };
  }, []);
  return paused;
}
