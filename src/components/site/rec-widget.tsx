"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";
import { useToast } from "@/hooks/use-toast";

const pad = (n: number) => String(n).padStart(2, "0");

function fmt(total: number) {
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor(total / 60) % 60)}:${pad(
    total % 60
  )}`;
}

/**
 * The red button, rehearsed. A pocket simulation of OraxRecordly's core
 * gesture: press REC, watch the pulse quicken and the clock run, press
 * again — and the "clip" lands in your library with a toast. Playful,
 * honest about being a demo, and true to the product's soul.
 */
export function RecWidget() {
  const { t, lang, monoLabel } = useI18n();
  const { toast } = useToast();
  const [rec, setRec] = useState(false);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (!rec) return;
    const id = window.setInterval(() => setSec((v) => v + 1), 1000);
    return () => window.clearInterval(id);
  }, [rec]);

  const toggle = () => {
    if (rec) {
      toast({
        title: t.hero.recToastTitle,
        description:
          lang === "ar"
            ? `${fmt(sec)} من الإبداعِ الخام — جاهزٌ للتحرير في التطبيق.`
            : `${fmt(sec)} of raw brilliance — ready for the edit in the app.`,
      });
      setSec(0);
    }
    setRec((v) => !v);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={toggle}
        aria-label={t.hero.recAria}
        aria-pressed={rec}
        data-cursor-label={rec ? t.hero.recStop : t.hero.recStart}
        className={cn(
          "mono group inline-flex items-center gap-3 rounded-full border px-6 py-3 transition-colors duration-500 ease-editorial",
          rec
            ? "border-orax-red/50 text-ink"
            : "border-ink/15 text-ink hover:border-orax-red/50"
        )}
      >
        <span
          className={cn("rec-dot", !rec && "opacity-40", rec && "is-rec")}
          aria-hidden="true"
        />
        <span dir="ltr" className="tabular-nums">
          REC — {fmt(sec)}
        </span>
      </button>
      <p className={monoLabel + " text-mink-35"}>{t.hero.recCaption}</p>
    </div>
  );
}
