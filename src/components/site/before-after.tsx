"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { Reveal } from "./reveal";
import { useI18n } from "./i18n-provider";
import { LQIP } from "@/lib/lqip";
import { asset } from "@/lib/asset";

/** The formats and frame rates the studio ships out of the box. */
const EXPORT_CHIPS = ["MP4", "GIF", "PNG", "JPEG", "4K", "60FPS"];

/**
 * Raw versus remarkable — a draggable curtain over the same frame:
 * the left face is the untouched capture (grayscale, flat contrast),
 * the right face is the Orax edit. Pointer, touch and keyboard all
 * drive the divider; the handle sits on a hairline with a speaking grip.
 */
export function BeforeAfter() {
  const { t, lang, monoLabel } = useI18n();
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  };

  return (
    <section
      id="contrast"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-24 md:px-24 md:py-32"
    >
      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal className="mono text-mink-50">
            <span dir="ltr">( 03 — RAW TO REMARKABLE )</span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Reveal delay={100}>{t.beforeAfter.heading1}</Reveal>
            <Reveal delay={220} className="text-mink-35">
              {t.beforeAfter.heading2}
            </Reveal>
          </h2>
        </div>
        <Reveal delay={300}>
          <p className="max-w-xs leading-loose text-ink-soft">
            {t.beforeAfter.side}
          </p>
        </Reveal>
      </div>

      {/* The comparison stage — timelines read left-to-right in every language */}
      <Reveal delay={150} className="mt-14 md:mt-20">
        <div dir="ltr">
          <div
            ref={trackRef}
            role="slider"
            tabIndex={0}
            aria-label={t.beforeAfter.sliderLabel}
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            data-cursor-label={lang === "ar" ? "اسحب" : "Drag"}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft")
                setPos((v) => Math.max(4, v - 4));
              if (e.key === "ArrowRight")
                setPos((v) => Math.min(96, v + 4));
            }}
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              setFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) setFromClientX(e.clientX);
            }}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            className="relative aspect-[16/10] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl bg-ink/5 outline-offset-4 focus-visible:outline-1 focus-visible:outline-orax-blue"
          >
            {/* AFTER — the Orax edit (base layer) */}
            <Image
              src={asset("/images/app/app-02.jpg")}
              alt={t.features.items[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              placeholder="blur"
              blurDataURL={LQIP["/images/app/app-02.jpg"]}
              className="object-cover"
              draggable={false}
            />

            {/* BEFORE — the raw capture, clipped up to the divider */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              aria-hidden="true"
            >
              <Image
                src={asset("/images/app/app-02.jpg")}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                placeholder="blur"
                blurDataURL={LQIP["/images/app/app-02.jpg"]}
                className="object-cover grayscale contrast-75 brightness-90"
                draggable={false}
              />
              {/* a whisper of sensor flatness over the raw side */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Corner chips */}
            <span className="mono absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-white/90 backdrop-blur-sm">
              {t.beforeAfter.rawChip}
            </span>
            <span className="mono absolute right-4 top-4 rounded-full bg-orax-blue px-4 py-2 text-white shadow-[0_4px_18px_rgba(19,108,200,0.35)]">
              {t.beforeAfter.editChip}
            </span>

            {/* The divider + grip */}
            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_12px_rgba(0,0,0,0.45)]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white text-black shadow-[0_6px_24px_rgba(10,10,10,0.30)]">
                <ChevronsLeftRight className="size-5" strokeWidth={1.5} />
              </span>
            </div>
          </div>

          {/* Drag hint */}
          <p className="mono mt-4 text-center text-mink-35">
            {t.beforeAfter.dragHint}
          </p>
        </div>
      </Reveal>

      {/* Export capability chips */}
      <Reveal delay={250} className="mt-10">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {EXPORT_CHIPS.map((chip) => (
            <span
              key={chip}
              dir="ltr"
              className="mono rounded-full border border-ink/15 px-4 py-1.5 text-mink-60 transition-colors duration-500 ease-editorial hover:border-orax-blue hover:text-orax-blue"
            >
              {chip}
            </span>
          ))}
        </div>
        <p className={monoLabel + " mt-4 text-center text-mink-35"}>
          {t.beforeAfter.exportsCaption}
        </p>
      </Reveal>
    </section>
  );
}
