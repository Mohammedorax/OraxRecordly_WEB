"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";

/**
 * Back to top — a quiet editorial dial that appears once the visitor has
 * left the hero, and returns them to the headline in one tap (or with "T").
 * Desktop only: the mobile sticky bar already owns the bottom edge.
 */
export function BackToTop() {
  const { t } = useI18n();
  const [past, setPast] = useState(false);
  const magnetic = useMagnetic<HTMLButtonElement>(0.25);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 1.15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      ref={magnetic}
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      aria-label={t.backTop.aria}
      aria-keyshortcuts="T"
      data-cursor-label={t.backTop.cursor}
      className={cn(
        "fixed bottom-8 end-8 z-50 hidden size-12 place-items-center rounded-full border border-ink/15 bg-paper/90 text-ink shadow-[0_2px_18px_rgba(10,10,10,0.08)] backdrop-blur-sm",
        "transition-all duration-500 ease-editorial hover:border-orax-blue hover:text-orax-blue hover:shadow-[0_4px_24px_rgba(19,108,200,0.18)]",
        "md:grid",
        past
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
      tabIndex={past ? 0 : -1}
    >
      <ArrowUp className="size-5" strokeWidth={1.5} />
    </button>
  );
}
