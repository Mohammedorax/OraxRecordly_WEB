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
 * feature it actually shows:
 *   screen recording  -> the region-selection overlay
 *   timeline editor   -> the editor with a genuine recording loaded
 *   camera & sound    -> the floating recording HUD (cam + mic controls)
 *   annotations       -> the image editor's pen/arrow/text/blur toolset
 *   instant export    -> the capture-settings inspector (format, filename)
 *   effects/templates -> the screenshots library / gallery
 */
const FEATURE_MEDIA = [
  { image: "/images/app/app-04.jpg", version: "26.1" },
  { image: "/images/app/app-02.jpg", version: "26.2" },
  { image: "/images/app/app-01.jpg", version: "26.0" },
  { image: "/images/app/app-05.jpg", version: "25.4" },
  { image: "/images/app/app-06.jpg", version: "26.3" },
  { image: "/images/app/app-03.jpg", version: "25.9" },
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

              {/* Metadata row */}
              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/10 pt-4">
                <h3 className="shrink-0 font-display text-2xl font-medium">
                  {feature.title}
                </h3>
                <p className="truncate text-sm text-ink-soft">
                  {feature.category}
                </p>
                <span className="mono shrink-0 text-orax-blue/70" dir="ltr">
                  {FEATURE_MEDIA[i].version}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
