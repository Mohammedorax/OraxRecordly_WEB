"use client";

import Image from "next/image";
import { Check, Minus, X } from "lucide-react";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";
import { asset } from "@/lib/asset";

type CellKind = "yes" | "no" | "limited" | "partial";
/** A cell is either a capability kind or a free-text (price) note */
type Cell = string | { text: string; orax?: boolean };

const COMPETITORS = ["OBS Studio", "Camtasia", "Loom"] as const;

function CellContent({ cell, isOrax }: { cell: Cell; isOrax: boolean }) {
  const { t, lang, monoLabel } = useI18n();

  // Free-text cell (the price row)
  if (typeof cell !== "string") {
    return (
      <span
        className={cn("mono", isOrax ? "text-orax-blue" : "text-mink-50")}
        dir={isOrax && lang === "ar" ? "rtl" : "ltr"}
      >
        {cell.text}
      </span>
    );
  }

  // Capability cell — the dict guarantees one of the four kinds
  const kind = cell as CellKind;
  const labels = t.comparison.cellLabels;
  const label = labels[kind];

  if (kind === "no") {
    return (
      <span className="inline-flex flex-col items-center gap-1" title={label} aria-label={label}>
        <X className="size-5 text-orax-red/60" strokeWidth={2} />
      </span>
    );
  }

  const Icon = kind === "yes" ? Check : Minus;
  return (
    <span className="inline-flex flex-col items-center gap-1" title={label} aria-label={label}>
      <Icon
        className={cn(
          "size-5",
          kind === "yes" && (isOrax ? "text-orax-blue" : "text-mink-35"),
          (kind === "limited" || kind === "partial") && "text-mink-30"
        )}
        strokeWidth={2}
      />
      {(kind === "limited" || kind === "partial") && (
        <span className={cn(monoLabel, "!text-[10px] text-mink-35")}>{label}</span>
      )}
    </span>
  );
}

/**
 * The Balance — an editorial comparison table. Orax in one pan, everything
 * else in the other: capabilities, not promises; prices, not fog.
 */
export function Comparison() {
  const { t, lang, monoLabel } = useI18n();

  return (
    <section
      id="compare"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-24 md:px-24 md:py-32"
    >
      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal className="mono text-mink-50">
            <Scramble text="( 05 — THE BALANCE )" />
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Reveal delay={100}>{t.comparison.heading1}</Reveal>
            <Reveal delay={220} className="text-mink-35">
              {t.comparison.heading2}
            </Reveal>
          </h2>
        </div>
        <Reveal delay={300}>
          <p className="max-w-xs leading-loose text-ink-soft">
            {t.comparison.side}
          </p>
        </Reveal>
      </div>

      {/* The table */}
      <Reveal delay={150} className="mt-14 md:mt-20">
        <p className={cn(monoLabel, "mb-4 text-mink-35 md:hidden")}>
          {t.comparison.mobileHint}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <caption className="sr-only">{t.comparison.caption}</caption>
            <thead>
              <tr className="border-b-2 border-ink">
                <th
                  scope="col"
                  className={cn(monoLabel, "pb-6 text-start text-mink-50")}
                >
                  {t.comparison.criterion}
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-orax-blue pb-6 text-center"
                >
                  <span className="inline-flex flex-col items-center gap-2">
                    <Image
                      src={asset("/brand/logo-icon.png")}
                      alt=""
                      width={192}
                      height={124}
                      className="h-7 w-auto"
                    />
                    <span className={monoLabel + " text-orax-blue"}>
                      {t.comparison.oraxCol}
                    </span>
                  </span>
                </th>
                {COMPETITORS.map((name) => (
                  <th
                    key={name}
                    scope="col"
                    className="mono pb-6 text-center text-mink-50"
                  >
                    <span dir="ltr">{name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-ink/10 transition-colors duration-500 ease-editorial hover:bg-ink/[0.03]"
                >
                  <th
                    scope="row"
                    className="py-5 text-start text-base font-medium leading-relaxed md:text-lg"
                  >
                    {row.label}
                  </th>
                  <td className="bg-orax-blue/[0.045] py-5 text-center">
                    <CellContent cell={row.cells[0]} isOrax />
                  </td>
                  {row.cells.slice(1).map((cell, i) => (
                    <td key={i} className="py-5 text-center">
                      <CellContent cell={cell} isOrax={false} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Footnote */}
      <Reveal delay={250}>
        <p className={monoLabel + " mt-8 text-mink-35"}>
          {t.comparison.footnote}
        </p>
      </Reveal>
    </section>
  );
}
