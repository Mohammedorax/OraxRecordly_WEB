"use client";

import { Reveal, WordsReveal } from "./reveal";
import { Scramble } from "./scramble";
import { CountUp } from "./count-up";
import { useI18n } from "./i18n-provider";

export function Statement() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 py-24 text-center md:px-24 md:py-36"
    >
      <Reveal className="mono mb-10 text-mink-50">
        <Scramble text="( 01 — ABOUT ORAXRECORDLY )" />
      </Reveal>

      <h2 className="mx-auto max-w-4xl font-display text-3xl font-medium leading-[1.55] md:text-[2.75rem] md:leading-[1.5]">
        <WordsReveal
          stagger={45}
          parts={t.statement.parts.map((p) => ({
            text: p.text,
            className: p.highlight ? "bg-orax-blue px-3 text-white" : undefined,
          }))}
        />
      </h2>

      <Reveal delay={200} className="mx-auto mt-12 max-w-xl">
        <p className="leading-loose text-ink-soft">{t.statement.para}</p>
      </Reveal>
    </section>
  );
}

/**
 * Every number here stands for something the shipped app actually does:
 * 4K·60 capture, the two export formats (MP4 + GIF), the eleven cursor
 * styles in Settings → Effects, and the watermark count.
 */
const STATS = [
  { prefix: "4K·", to: 60, from: 0, suffix: "" },
  { prefix: "", to: 2, from: 0, suffix: "" },
  { prefix: "", to: 11, from: 0, suffix: "" },
  { prefix: "", to: 0, from: 9, suffix: "" },
];

const STAT_METAS = [
  "ULTRA HD CAPTURE",
  "EXPORT FORMATS",
  "CURSOR STYLES",
  "NO WATERMARKS",
];

export function Stats() {
  const { t } = useI18n();

  return (
    <section aria-label={t.stats.aria}>
      <div className="grid grid-cols-2 gap-px border-y border-ink/10 bg-ink/10 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={STAT_METAS[i]}
            delay={i * 100}
            className="bg-paper px-6 py-10 text-center md:py-14"
          >
            <p className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              {stat.prefix}
              <CountUp
                from={stat.from}
                to={stat.to}
                duration={i === 3 ? 1200 : 1600}
                delay={i * 150}
              />
              {stat.suffix}
            </p>
            <p className="mt-3 text-lg font-medium">{t.stats.labels[i]}</p>
            <p className="mono mt-2 text-mink-40">
              <Scramble text={STAT_METAS[i]} />
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
