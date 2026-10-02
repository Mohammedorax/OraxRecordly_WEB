"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#*+—/<>[]";

/**
 * Decode / scramble — Latin mono text resolves out of signal noise,
 * once when it scrolls into view and again on every hover.
 * A quiet nod to recording tech. Inert under reduced motion.
 */
export function Scramble({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);
  const frame = useRef(0);
  const running = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const step = () => {
      const el2 = ref.current;
      if (!el2) return;
      frame.current += 1;
      const total = 24;
      const revealed = Math.floor((frame.current / total) * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        out +=
          i < revealed || ch === " " || ch === "—" || ch === "(" || ch === ")"
            ? ch
            : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el2.textContent = out;
      if (frame.current < total) {
        raf.current = requestAnimationFrame(step);
      } else {
        el2.textContent = text;
        running.current = false;
      }
    };

    const run = () => {
      if (running.current || reduced) return;
      running.current = true;
      frame.current = 0;
      raf.current = requestAnimationFrame(step);
    };

    // Auto-decode when scrolled into view (once)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    el.addEventListener("mouseenter", run);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf.current);
      el.removeEventListener("mouseenter", run);
    };
  }, [text]);

  return (
    <span ref={ref} className={cn("inline-block", className)} dir="ltr">
      {text}
    </span>
  );
}
