"use client";

import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";

type ChangeKind = "new" | "improve" | "fix";

const KIND_CLASS: Record<ChangeKind, string> = {
  new: "border-orax-blue/30 bg-orax-blue/10 text-orax-blue",
  improve: "border-ink/15 bg-ink/5 text-mink-60",
  fix: "border-orax-red/30 bg-orax-red/10 text-orax-red",
};

export function Changelog() {
  const { t, monoLabel } = useI18n();

  return (
    <section
      id="changelog"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-24 md:px-24 md:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        {/* Sticky header column */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal className="mono text-mink-50">
            <Scramble text="( 06 — CHANGELOG )" />
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Reveal delay={100}>{t.changelog.heading1}</Reveal>
            <Reveal delay={220} className="text-mink-35">
              {t.changelog.heading2}
            </Reveal>
          </h2>
          <Reveal delay={300}>
            <p className="mt-8 max-w-sm leading-loose text-ink-soft">
              {t.changelog.para}
            </p>
          </Reveal>
          <Reveal delay={380}>
            <p className="mono mt-8 flex items-center gap-3 text-mink-40">
              <span className="rec-dot" aria-hidden="true" />
              <span dir="ltr">SHIPPED CONTINUOUSLY — SINCE 2026</span>
            </p>
          </Reveal>
        </div>

        {/* Timeline column */}
        <div className="relative border-s border-ink/10 ps-8 md:ps-12">
          {t.changelog.releases.map((release, i) => (
            <Reveal key={release.version} delay={i * 90} className="relative pb-14 last:pb-0">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute start-0 top-1.5 size-3 -translate-x-1/2 rtl:translate-x-1/2 rounded-full border-2",
                  i === 0
                    ? "border-orax-blue bg-orax-blue"
                    : "border-ink/25 bg-paper"
                )}
                style={{ insetInlineStart: "calc(-1 * (0.75rem + 2px))" }}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3
                  className={cn(
                    "font-display text-3xl font-medium md:text-4xl",
                    i === 0 && "text-orax-blue"
                  )}
                  dir="ltr"
                >
                  {release.version}
                </h3>
                <span className="mono text-mink-40" dir="ltr">
                  {release.date}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {release.changes.map((change, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[15px] leading-relaxed"
                  >
                    <span
                      className={cn(
                        monoLabel,
                        "mt-0.5 shrink-0 rounded-full border px-2.5 py-0.5 !text-[11px]",
                        KIND_CLASS[change.kind as ChangeKind]
                      )}
                    >
                      {t.changelog.kinds[change.kind as ChangeKind]}
                    </span>
                    <span className="text-ink-soft">{change.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
