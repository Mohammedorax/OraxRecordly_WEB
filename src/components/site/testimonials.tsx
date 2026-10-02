"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";

export function Testimonials() {
  const { t, lang } = useI18n();
  const items = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<0 | ReturnType<typeof setInterval>>(0);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => go(1), 6500);
    return () => clearInterval(timer.current);
  }, [paused, go]);

  // Both tongues carry the same number of voices, so the stage index
  // stays valid across a language switch — no reset needed.
  const item = items[index];
  // RTL: previous points right, next points left — mirrored in English
  const PrevIcon = lang === "ar" ? ArrowRight : ArrowLeft;
  const NextIcon = lang === "ar" ? ArrowLeft : ArrowRight;
  const open = lang === "ar" ? "«" : "“";
  const close = lang === "ar" ? "»" : "”";

  return (
    <section
      id="voices"
      className="scroll-mt-24 px-6 py-24 md:px-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal className="mono text-mink-50">
            <Scramble text="( 04 — VOICES )" />
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Reveal delay={100}>{t.testimonials.heading1}</Reveal>
            <Reveal delay={220} className="text-mink-35">
              {t.testimonials.heading2}
            </Reveal>
          </h2>
        </div>
        <Reveal delay={300}>
          <p className="max-w-xs leading-loose text-ink-soft">
            {t.testimonials.side}
          </p>
        </Reveal>
      </div>

      {/* Quote stage */}
      <Reveal delay={150} className="mt-14 md:mt-20">
        <figure
          className="relative border-t border-ink/10 pt-10 md:pt-14"
          aria-live="polite"
        >
          <div key={index} className="quote-in">
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="font-display text-2xl font-medium leading-[1.7] md:text-[2.1rem] md:leading-[1.65]">
                <span className="text-orax-blue">{open}</span>
                {item.quote}
                <span className="text-orax-blue">{close}</span>
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-4">
              <span
                className={cn(
                  "grid size-14 shrink-0 place-items-center rounded-full border border-ink/10 bg-paper",
                  "font-display text-xl font-medium text-orax-blue"
                )}
                aria-hidden="true"
              >
                {item.initials}
              </span>
              <span className="text-start">
                <span className="block text-lg font-medium">{item.name}</span>
                <span className="block text-sm text-ink-soft">{item.role}</span>
              </span>
            </figcaption>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t.testimonials.prev}
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-500 ease-editorial hover:border-orax-blue hover:bg-orax-blue hover:text-white"
            >
              <PrevIcon className="size-4" strokeWidth={1.5} />
            </button>
            <span className="mono text-mink-50" dir="ltr">
              {String(index + 1).padStart(2, "0")} — {String(items.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t.testimonials.next}
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-500 ease-editorial hover:border-orax-blue hover:bg-orax-blue hover:text-white"
            >
              <NextIcon className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </figure>
      </Reveal>
    </section>
  );
}
