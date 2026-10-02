"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Animated number — eases from `from` to `to` when it scrolls into view.
 * rAF + easeOutCubic, snaps instantly under reduced motion.
 */
export function CountUp({
  from = 0,
  to,
  duration = 1600,
  delay = 0,
  className,
}: {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);
  const started = useRef(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        // Reduced motion — snap straight to the final value
        if (reducedMotion.current) {
          setValue(to);
          return;
        }

        const t0 = performance.now() + delay;
        const tick = (now: number) => {
          const p = Math.min(1, Math.max(0, (now - t0) / duration));
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(from + (to - from) * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration, delay]);

  return (
    <span ref={ref} className={cn(className)} dir="ltr">
      {value}
    </span>
  );
}
