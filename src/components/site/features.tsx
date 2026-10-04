"use client";

import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { DemoDialog } from "./demo-dialog";
import { useI18n } from "./i18n-provider";
import { LQIP } from "@/lib/lqip";
import { asset } from "@/lib/asset";

/**
 * Real captures of the shipped app (public/images/app/*), each matched to the
 * capability its card describes. Every entry is a genuine capture — nothing
 * here is drawn or generated:
 *   screen recording           -> the floating recording HUD (app-01)
 *   timeline editor            -> the editor: preview, timeline, appearance (app-02)
 *   screenshots                -> the screenshot library on the dashboard (app-03)
 *   image editor               -> the image editor with its tool palette (app-05)
 *   settings & Arabic          -> the editor settings panel (app-06)
 *   region capture             -> the drag-to-select overlay (app-04)
 *   shortcuts on screen        -> the editor settings panel again (app-06):
 *                                 the key-cap badge is opt-in, lives in
 *                                 Settings -> Cursor, and no capture of the
 *                                 badge itself exists in this project. The card
 *                                 therefore shows the panel that hosts the
 *                                 setting, and its alt text says so, rather
 *                                 than illustrating a badge that was never
 *                                 photographed. (app-02 and app-06 are two
 *                                 distinct captures of the same entry state;
 *                                 app-02 is the editor+appearance view, app-06
 *                                 the general settings tab.)
 */
const FEATURE_MEDIA = [
  { image: "/images/app/app-01.jpg", index: "01" },
  { image: "/images/app/app-02.jpg", index: "02" },
  { image: "/images/app/app-03.jpg", index: "03" },
  { image: "/images/app/app-05.jpg", index: "04" },
  { image: "/images/app/app-06.jpg", index: "05" },
  { image: "/images/app/app-04.jpg", index: "06" },
  { image: "/images/app/app-06.jpg", index: "07" },
];

export function Features() {
  const { t, lang } = useI18n();
  const DirArrow = lang === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="features"
      className="scroll-mt-24 px-6 py-24 md:px-24 md:py-32"
    >
      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal className="mono text-mink-50">
            <span dir="ltr">( 02 — FEATURES )</span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Reveal delay={100}>{t.features.heading1}</Reveal>
            <Reveal delay={220} className="text-mink-35">
              {t.features.heading2}
            </Reveal>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-6 md:items-end">
          <Reveal delay={300}>
            <p className="max-w-xs leading-loose text-ink-soft md:text-end">
              {t.features.side}
            </p>
          </Reveal>
          <Reveal delay={380}>
            <DemoDialog />
          </Reveal>
        </div>
      </div>

      {/* Two-column project grid */}
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2 md:gap-y-20">
        {t.features.items.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 2) * 120}>
            <a
              href="#download"
              data-cursor-label={lang === "ar" ? "شاهد" : "View"}
              className="group block"
              aria-label={`${feature.title} — ${feature.category}`}
            >
              {/* 4:3 image container with slight rounding */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5">
                <Image
                  src={asset(FEATURE_MEDIA[i].image)}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={LQIP[FEATURE_MEDIA[i].image]}
                  className="object-cover grayscale transition-all duration-700 ease-editorial group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* Hover overlay — black at 10% */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100" />
                {/* Arrow badge on hover — brand blue, on the far corner */}
                <span className="absolute end-4 top-4 grid size-11 place-items-center rounded-full bg-orax-blue text-white opacity-0 transition-all duration-500 ease-editorial group-hover:opacity-100">
                  <DirArrow className="size-5" strokeWidth={1.5} />
                </span>
              </div>

              {/* Metadata row — one line on desktop (category truncates),
                  two tidy lines on mobile so the category never chops off */}
              <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-ink/10 pt-4">
                <h3 className="order-1 font-display text-2xl font-medium">
                  {feature.title}
                </h3>
                <span
                  className="mono order-2 ms-auto shrink-0 self-center text-orax-blue/70 md:order-3 md:self-auto"
                  dir="ltr"
                >
                  {FEATURE_MEDIA[i].index}
                </span>
                <p className="order-3 w-full text-sm leading-relaxed text-ink-soft md:order-2 md:w-auto md:min-w-0 md:flex-1 md:truncate md:text-end">
                  {feature.category}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
