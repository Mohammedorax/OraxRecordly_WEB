"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fires once when the element enters the viewport. */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let io: IntersectionObserver | undefined;
    let fallback = 0;

    const start = () => {
      const el = ref.current;
      if (!el) return;
      if (typeof IntersectionObserver === "undefined") {
        // Fallback for very old browsers: reveal after mount, asynchronously
        const t = window.setTimeout(() => setInView(true), 0);
        return () => window.clearTimeout(t);
      }
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setInView(true);
            io?.disconnect();
          }
        },
        { threshold, rootMargin: "0px 0px -32px 0px" }
      );
      io.observe(el);
    };

    // While the intro curtain is up (first visit), hold every reveal back
    // so nothing plays behind the curtain. A hard 3s fallback guarantees
    // content can never stay hidden even if the curtain fails.
    if (document.documentElement.classList.contains("intro-hold")) {
      window.addEventListener("orax:go", start, { once: true });
      fallback = window.setTimeout(start, 3000);
      return () => {
        window.removeEventListener("orax:go", start);
        window.clearTimeout(fallback);
        io?.disconnect();
      };
    }

    start();
    return () => io?.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Generic fade-up reveal wrapper. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("fade-item", inView && "rv-on", className)}
    >
      {children}
    </div>
  );
}

export type RevealPart = {
  text: string;
  className?: string;
};

/**
 * Masked word-by-word reveal — each word slides up from translateY(115%)
 * inside an overflow-hidden mask, staggered, with the editorial easing.
 * Splits on spaces so it stays safe for connected Arabic script.
 */
export function WordsReveal({
  parts,
  className,
  stagger = 80,
  base = 0,
}: {
  parts: RevealPart[];
  className?: string;
  stagger?: number;
  base?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.1);
  let wordIndex = 0;

  return (
    <span ref={ref} className={cn(inView && "rv-on", className)}>
      <span className="sr-only">{parts.map((p) => p.text).join(" ")}</span>
      <span aria-hidden="true">
        {parts.map((part, partIdx) =>
          part.text
            .split(" ")
            .filter(Boolean)
            .map((word, i, arr) => {
              const delay = base + wordIndex++ * stagger;
              return (
                <span key={`${partIdx}-${i}`} className="rv-mask">
                  <span
                    className={cn("rv-inner", part.className)}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    {word}
                    {i < arr.length - 1 ? "\u00A0" : null}
                  </span>
                </span>
              );
            })
        )}
      </span>
    </span>
  );
}
