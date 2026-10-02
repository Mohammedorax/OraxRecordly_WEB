"use client";

import { Check } from "lucide-react";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";

export function Pricing() {
  const { t, monoLabel } = useI18n();

  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-24 md:px-24 md:py-32"
    >
      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal className="mono text-mink-50">
            <Scramble text="( 05 — PRICING )" />
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Reveal delay={100}>{t.pricing.heading1}</Reveal>
            <Reveal delay={220} className="text-mink-35">
              {t.pricing.heading2}
            </Reveal>
          </h2>
        </div>
        <Reveal delay={300}>
          <p className="max-w-xs leading-loose text-ink-soft">
            {t.pricing.side}
          </p>
        </Reveal>
      </div>

      {/* Plans */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 lg:grid-cols-3">
        {t.pricing.plans.map((plan, i) => {
          const featured = i === 1;
          return (
            <Reveal key={plan.tag} delay={i * 130} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border bg-paper p-8 transition-all duration-500 ease-editorial md:p-10",
                  featured
                    ? "border-2 border-orax-blue shadow-[0_18px_60px_rgba(19,108,200,0.16)]"
                    : "border-ink/10 hover:border-ink/25"
                )}
              >
                {featured && (
                  <span
                    className={cn(
                      monoLabel,
                      "absolute -top-3.5 start-8 rounded-full bg-orax-blue px-4 py-1.5 text-white"
                    )}
                  >
                    {t.pricing.badge}
                  </span>
                )}

                <p className="mono text-mink-50" dir="ltr">
                  {plan.tag}
                </p>
                <h3 className="mt-4 font-display text-3xl font-medium">
                  {plan.name}
                </h3>

                <p className="mt-5 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-display text-6xl font-medium tracking-tight",
                      featured && "text-orax-blue"
                    )}
                    dir="ltr"
                  >
                    ${plan.price}
                  </span>
                  <span className="text-sm text-ink-soft">{plan.period}</span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {plan.blurb}
                </p>

                <ul className="mt-8 flex-1 space-y-3.5 border-t border-ink/10 pt-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-orax-blue"
                        strokeWidth={2}
                      />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  data-cursor-label={plan.cursor}
                  className={cn(
                    "mt-10 w-full rounded-full py-4 text-lg font-medium transition-colors duration-500 ease-editorial",
                    featured
                      ? "bg-orax-blue text-white hover:bg-[#0F55A0]"
                      : "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper"
                  )}
                >
                  {plan.cta}
                </button>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Footnote */}
      <Reveal delay={200}>
        <p className={monoLabel + " mt-10 text-center text-mink-40"}>
          {t.pricing.footnote}
        </p>
      </Reveal>
    </section>
  );
}
