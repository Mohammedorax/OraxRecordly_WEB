"use client";

import { useI18n } from "./i18n-provider";

/**
 * Editorial phrase ticker — a black ribbon of display-type phrases that
 * drifts endlessly between sections. Brand-red dots and blue diamonds as
 * separators. Pauses on hover, inert under reduced motion.
 */

function TickerSet({ phrases, hidden }: { phrases: string[]; hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pl-10 md:gap-16 md:pl-16"
      dir="ltr"
      aria-hidden={hidden}
    >
      {phrases.map((phrase, i) => (
        <span key={i} className="flex shrink-0 items-center gap-10 md:gap-16">
          <span className="whitespace-nowrap font-display text-3xl font-medium text-white md:text-5xl">
            {phrase}
          </span>
          <span
            className={
              i % 2 === 0
                ? "size-2.5 shrink-0 rounded-full bg-orax-red"
                : "size-2.5 shrink-0 rotate-45 bg-orax-blue"
            }
          />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  const { t } = useI18n();
  return (
    <section
      aria-label={t.ticker.aria}
      className="overflow-hidden bg-[#0A0A0A] py-10 md:py-14"
    >
      {/* Same rule as the showcase marquee: the scroller must be LTR for the
          -50% keyframe to loop seamlessly in RTL locales. */}
      <div className="ticker" dir="ltr">
        <div className="ticker__track">
          <TickerSet phrases={t.ticker.phrases} />
          <TickerSet phrases={t.ticker.phrases} hidden />
        </div>
      </div>
    </section>
  );
}
