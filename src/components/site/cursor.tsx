"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive difference cursor — 32px circle that follows the mouse with
 * lerp interpolation, blends via `mix-blend-mode: difference` and scales 2.5x
 * on hover of interactive elements (a / button / [data-cursor]).
 *
 * Smart label mode: any element with `data-cursor-label="نص"` replaces the
 * dot with a pill that speaks the label — the cursor becomes a dialogue.
 * Disabled automatically on touch / coarse-pointer devices.
 */
export function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outerRef.current;
    const label = labelRef.current;
    if (!el) return;

    // Skip custom cursor on touch devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        el.classList.add("is-live");
        // Snap to the pointer on first appearance to avoid flying across
        x = targetX;
        y = targetY;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      // 1) Label mode — the closest [data-cursor-label] wins
      const labelled = target?.closest<HTMLElement>("[data-cursor-label]");
      if (labelled && label) {
        const text = labelled.dataset.cursorLabel ?? "";
        if (label.textContent !== text) label.textContent = text;
        el.classList.add("is-label");
        document.documentElement.style.setProperty("--cursor-scale", "1");
        return;
      }
      el.classList.remove("is-label");

      // 2) Classic scale for generic interactive elements
      const interactive = target?.closest(
        "a, button, [role='button'], [data-cursor]"
      );
      document.documentElement.style.setProperty(
        "--cursor-scale",
        interactive ? "2.5" : "1"
      );
    };

    const onLeave = () => {
      visible = false;
      el.classList.remove("is-live");
    };

    const loop = () => {
      // Lerp for the smooth "lagging" follow
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      el.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.style.removeProperty("--cursor-scale");
    };
  }, []);

  return (
    <div ref={outerRef} className="cursor-dot" aria-hidden="true">
      <div className="cursor-dot__inner" />
      <div ref={labelRef} className="cursor-dot__label" />
    </div>
  );
}
