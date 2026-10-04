"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DownloadCTA } from "./download-cta";
import { useI18n } from "./i18n-provider";
import { asset } from "@/lib/asset";

/**
 * Sticky mobile download bar — slides in once the visitor scrolls past the
 * hero, slides out again when the footer's download section takes over.
 * Mobile only (md:hidden). Respects reduced motion via the CSS transition.
 */
export function StickyCTA() {
  const { t, monoLabel } = useI18n();
  const [pastHero, setPastHero] = useState(false);
  const [downloadVisible, setDownloadVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.querySelector("#download");
    if (!target) return;
    const io = new IntersectionObserver(
      (entries) => setDownloadVisible(entries[0].isIntersecting),
      { threshold: 0.08 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const visible = pastHero && !downloadVisible;

  return (
    <div
      className={`sticky-cta md:hidden ${visible ? "is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-4 border-t border-ink/10 bg-paper/95 px-5 py-3 shadow-[0_-8px_30px_rgba(10,10,10,0.10)] backdrop-blur-sm">
        <span className="flex min-w-0 items-center gap-3">
          <Image
            src={asset("/brand/logo-icon.png")}
            alt=""
            width={192}
            height={124}
            className="h-9 w-auto shrink-0"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium">
              {t.sticky.title}
            </span>
            <span className={monoLabel + " block truncate !text-[11px] text-mink-50"}>
              {t.sticky.sub}
            </span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <DownloadCTA variant="compact" />
        </span>
      </div>
    </div>
  );
}
