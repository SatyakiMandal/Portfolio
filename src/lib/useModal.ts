"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function useModal(
  open: boolean,
  dialogRef: RefObject<HTMLElement | null>,
  {
    onClose,
    initialFocusRef,
  }: {
    onClose: () => void;
    initialFocusRef?: RefObject<HTMLElement | null>;
  }
) {
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const opener = document.activeElement as HTMLElement | null;

    // Inert every sibling along the path from the dialog up to body.
    const inerted: HTMLElement[] = [];
    let node: HTMLElement | null = dialog;
    while (node && node !== document.body) {
      const parent: HTMLElement | null = node.parentElement;
      if (!parent) break;
      for (const sib of Array.from(parent.children)) {
        if (sib === node || !(sib instanceof HTMLElement)) continue;
        if (sib.tagName === "SCRIPT" || sib.tagName === "STYLE" || sib.inert) continue;
        sib.inert = true;
        inerted.push(sib);
      }
      node = parent;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement
      );

    const target = initialFocusRef?.current ?? focusables()[0] ?? dialog;
    if (target === dialog && !dialog.hasAttribute("tabindex")) dialog.tabIndex = -1;
    target.focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab") return;

      const items = focusables();
      if (!items.length) {
        e.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !dialog.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      for (const el of inerted) el.inert = false;
      if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
    };
  }, [open, dialogRef, initialFocusRef]);
}
