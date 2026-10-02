"use client";

import { useEffect, useRef } from "react";

/**
 * Magnetic pull — the element leans toward the pointer while hovered,
 * then springs back with the editorial easing on leave.
 *
 * Returns a plain ref: attach it to any element. Mutates `transform`
 * directly on the DOM node (no re-renders). inert on touch + reduced motion.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.dataset.magnetic = "";

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const max = 14; // keep the pull restrained — editorial, not elastic
      const tx = Math.max(-max, Math.min(max, dx * strength));
      const ty = Math.max(-max, Math.min(max, dy * strength));
      el.classList.add("is-magnetizing");
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    };

    const onLeave = () => {
      el.classList.remove("is-magnetizing");
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.transform = "";
      delete el.dataset.magnetic;
    };
  }, [strength]);

  return ref;
}
