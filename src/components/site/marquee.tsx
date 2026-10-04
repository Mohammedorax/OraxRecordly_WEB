"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";
import { LQIP } from "@/lib/lqip";
import { asset } from "@/lib/asset";

/** Asymmetrical radius patterns — Card A / B / C per the editorial spec */
const RADIUS_PATTERNS = [
  "rounded-tl-[100px]",
  "rounded-tr-[100px] rounded-bl-[40px]",
  "rounded-[40px]",
];

/** Same six real captures, portrait cover-crops (see scripts/make-app-images.py) */
const SRC = [
  "/images/app/app-01-p.jpg",
  "/images/app/app-02-p.jpg",
  "/images/app/app-03-p.jpg",
  "/images/app/app-04-p.jpg",
  "/images/app/app-05-p.jpg",
  "/images/app/app-06-p.jpg",
];

function MarqueeSet({ alts }: { alts: string[] }) {
  return (
    <div className="flex shrink-0 gap-4 pl-4 md:gap-6 md:pl-6" dir="ltr">
      {SRC.map((src, i) => (
        <figure
          key={i}
          className={cn(
            "group relative aspect-[5/7] w-52 shrink-0 overflow-hidden bg-ink/5 md:w-72",
            RADIUS_PATTERNS[i % 3]
          )}
        >
          <Image
            src={asset(src)}
            alt={alts[i] ?? ""}
            fill
            sizes="(max-width: 768px) 208px, 288px"
            loading="lazy"
            placeholder="blur"
            blurDataURL={LQIP[src]}
            draggable={false}
            className="object-cover grayscale transition-all duration-700 ease-editorial group-hover:scale-105 group-hover:grayscale-0"
          />
        </figure>
      ))}
    </div>
  );
}

export function Marquee() {
  const { t, monoLabel } = useI18n();

  return (
    <section id="showcase" className="scroll-mt-24 border-t border-ink/10 py-14 md:py-20">
      {/* Section label */}
      <Reveal className="mb-10 flex items-center justify-between px-6 md:px-24">
        <h2 className={monoLabel + " flex items-center gap-3 text-mink-60"}>
          <span className="rec-dot" aria-hidden="true" />
          {t.marquee.label}
        </h2>
        <span className="mono text-mink-60" dir="ltr">
          <Scramble text="SHOWCASE" />
        </span>
      </Reveal>

      {/* Infinite marquee.
          `dir="ltr"` on the scroller is what makes the -50% keyframe work:
          in an RTL document the max-content track is anchored to the right
          edge and the whole strip slides off to the left, leaving the band
          empty for most of the cycle. Forcing LTR here (as in the sets)
          keeps the two copies butted together in every locale. */}
      <div className="marquee" dir="ltr">
        <div className="marquee__track">
          <MarqueeSet alts={t.marquee.alts} />
          <MarqueeSet alts={t.marquee.alts} />
        </div>
      </div>
    </section>
  );
}
