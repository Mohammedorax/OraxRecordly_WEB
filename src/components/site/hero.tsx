"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Reveal, WordsReveal } from "./reveal";
import { DownloadCTA } from "./download-cta";
import { DemoDialog } from "./demo-dialog";
import { RecWidget } from "./rec-widget";
import { useI18n } from "./i18n-provider";
import { asset } from "@/lib/asset";

export function Hero() {
  const { t, monoLabel } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pb-36 pt-32 text-center md:px-24"
    >
      {/* Top metadata */}
      <Reveal className="mono text-mink-60" delay={100}>
        <span dir="ltr">ORAXRECORDLY — EST. 2026</span>
      </Reveal>

      {/* Brand lockup — the logo, in its true colors */}
      <Reveal delay={250} className="mt-10">
        <Image
          src={asset("/brand/logo-full.png")}
          alt={t.hero.logoAlt}
          width={771}
          height={729}
          className="h-20 w-auto md:h-24"
          priority
        />
      </Reveal>

      {/* Display headline — masked word reveal */}
      <h1 className="mt-10 font-display text-[clamp(3.6rem,11vw,10.5rem)] font-medium leading-[1.15]">
        <span className="block">
          <WordsReveal parts={[{ text: t.hero.line1 }]} base={450} stagger={120} />
        </span>
        <span className="block text-mink-35">
          <WordsReveal
            parts={[{ text: t.hero.line2 }]}
            base={800}
            stagger={120}
          />
        </span>
      </h1>

      {/* Sub-headline */}
      <Reveal delay={1200} className="mt-10 max-w-2xl">
        <p className="text-xl leading-relaxed text-ink-soft md:text-2xl">
          {t.hero.sub}
        </p>
      </Reveal>

      {/* Action row — download + live demo */}
      <Reveal delay={1350} className="mt-10 flex flex-wrap items-center justify-center gap-6">
        <DownloadCTA variant="link" />
        <span className="mono text-mink-25" aria-hidden="true">
          {"//"}
        </span>
        <DemoDialog listen />
      </Reveal>

      {/* The red button, rehearsed — a pocket recording simulation */}
      <Reveal delay={1500} className="mt-12">
        <RecWidget />
      </Reveal>

      {/* Bottom metadata row */}
      <div className="absolute inset-x-6 bottom-8 flex items-center justify-between md:inset-x-24">
        <Reveal delay={1600}>
          <span className="mono text-mink-60" dir="ltr">
            4K / 60FPS / NO WATERMARK
          </span>
        </Reveal>
        <Reveal delay={1600} className="flex items-center gap-2">
          <span className={monoLabel + " flex items-center gap-3 text-mink-60"}>
            <span className="rec-dot" aria-hidden="true" />
            {t.hero.scrollHint}
          </span>
          <ArrowDown
            className="size-4 animate-bounce text-mink-60"
            strokeWidth={1.5}
          />
        </Reveal>
      </div>
    </section>
  );
}
