"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import { LQIP } from "@/lib/lqip";
import { asset } from "@/lib/asset";
import { useI18n } from "./i18n-provider";

const DURATION = 84; // 01:24 — the demo's editorial runtime

/**
 * The three beats of the reel, using real captures of the shipped app:
 * picking the region to record, editing the take, then the capture settings.
 */
const SCENES = [
  { img: "/images/app/app-04.jpg", meta: "SCENE 01 — RECORD", start: 0 },
  { img: "/images/app/app-02.jpg", meta: "SCENE 02 — EDIT", start: DURATION / 3 },
  { img: "/images/app/app-06.jpg", meta: "SCENE 03 — EXPORT", start: (DURATION / 3) * 2 },
];

function fmt(t: number) {
  const s = Math.floor(t % 60);
  const m = Math.floor(t / 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/**
 * Live demo player — an interactive mock of the OraxRecordly workflow:
 * the reel plays through RECORD → EDIT → EXPORT, crossfading between
 * scenes while the scrub bar, clock and scene chips respond. Click the
 * bar to seek; the reel loops forever like a good showreel should.
 */
export function DemoDialog({ listen = false }: { listen?: boolean }) {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [t2, setT2] = useState(0);
  const raf = useRef(0);
  const last = useRef(0);

  // Global summons — the "P" hotkey calls the reel from anywhere
  useEffect(() => {
    if (!listen) return;
    const onCall = () => setOpen(true);
    window.addEventListener("orax:demo", onCall);
    return () => window.removeEventListener("orax:demo", onCall);
  }, [listen]);

  // Playback clock — advances while playing, loops at the end
  useEffect(() => {
    if (!open || !playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    last.current = performance.now();
    const tick = (now: number) => {
      const dt = (now - last.current) / 1000;
      last.current = now;
      setT2((prev) => (prev + dt) % DURATION);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [open, playing]);

  // Reset the reel when the dialog closes (event-driven, not effect-driven)
  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setPlaying(false);
      setT2(0);
    }
  };

  const sceneIdx = t2 < DURATION / 3 ? 0 : t2 < (DURATION / 3) * 2 ? 1 : 2;
  const magnetic = useMagnetic<HTMLButtonElement>(0.2);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // The bar itself is a timeline — always read left-to-right
    const p = (e.clientX - rect.left) / rect.width;
    setT2(Math.min(DURATION - 0.01, Math.max(0, p * DURATION)));
  };

  const playFlip = lang === "ar" ? "-scale-x-100" : "";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          ref={magnetic}
          type="button"
          data-cursor
          data-cursor-label={lang === "ar" ? "شغّل" : "Play"}
          className="group inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-3 transition-colors duration-500 ease-editorial hover:border-orax-blue hover:text-orax-blue"
        >
          <span className="grid size-8 place-items-center rounded-full bg-ink text-paper transition-colors duration-500 ease-editorial group-hover:bg-orax-blue">
            <Play className={cn("size-3.5 fill-current", playFlip)} />
          </span>
          <span className="mono" dir="ltr">
            WATCH THE DEMO — 01:24
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="gap-0 overflow-hidden rounded-3xl border-black/10 bg-[#0A0A0A] p-0 text-white sm:max-w-3xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{t.demo.title}</DialogTitle>
          <DialogDescription>{t.demo.desc}</DialogDescription>
        </DialogHeader>

        {/* Screen */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {SCENES.map((scene, i) => (
            <Image
              key={scene.img}
              src={asset(scene.img)}
              alt={t.demo.scenes[i]}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              placeholder="blur"
              blurDataURL={LQIP[scene.img]}
              className={cn(
                "object-cover transition-opacity duration-700 ease-editorial",
                i === sceneIdx ? "opacity-100" : "opacity-0"
              )}
            />
          ))}

          {/* Scene chip */}
          <div
            className="mono absolute start-4 top-4 flex items-center gap-3 rounded-full bg-black/55 px-4 py-2 text-white/85 backdrop-blur-sm"
            dir="ltr"
          >
            <span className={cn("rec-dot", !playing && "opacity-30")} />
            {SCENES[sceneIdx].meta}
          </div>

          {/* Center play / pause */}
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? t.demo.pause : t.demo.play}
            data-cursor-label={playing ? (lang === "ar" ? "أوقف" : "Pause") : lang === "ar" ? "شغّل" : "Play"}
            className="absolute inset-0 grid place-items-center"
          >
            <span
              className={cn(
                "grid size-20 place-items-center rounded-full border border-white/30 bg-black/45 backdrop-blur-sm transition-all duration-500 ease-editorial",
                playing
                  ? "scale-75 opacity-0"
                  : "scale-100 opacity-100 hover:scale-110 hover:bg-orax-blue"
              )}
            >
              {playing ? (
                <Pause className="size-7 fill-current" />
              ) : (
                <Play className={cn("size-7 fill-current", playFlip)} />
              )}
            </span>
          </button>
        </div>

        {/* Control bar */}
        <div className="flex items-center gap-4 px-5 py-4">
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? t.demo.pause : t.demo.play}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 transition-colors duration-500 ease-editorial hover:border-orax-blue-bright hover:text-orax-blue-bright"
          >
            {playing ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className={cn("size-4 fill-current", playFlip)} />
            )}
          </button>

          {/* Timeline */}
          <div
            role="slider"
            tabIndex={0}
            aria-label={t.demo.timeline}
            aria-valuemin={0}
            aria-valuemax={DURATION}
            aria-valuenow={Math.floor(t2)}
            onClick={seek}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setT2((v) => Math.min(DURATION - 0.01, v + 2));
              if (e.key === "ArrowLeft") setT2((v) => Math.max(0, v - 2));
            }}
            dir="ltr"
            className="group relative h-6 flex-1 cursor-pointer"
          >
            <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-white/15" />
            <div
              className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-l from-orax-blue to-orax-blue-bright"
              style={{ width: `${(t2 / DURATION) * 100}%` }}
            />
            <div
              className="absolute top-1/2 size-3 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow transition-transform duration-200 group-hover:scale-125"
              style={{ left: `${(t2 / DURATION) * 100}%` }}
            />
          </div>

          <span className="mono shrink-0 text-mink-d60" dir="ltr">
            {fmt(t2)} / {fmt(DURATION)}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
