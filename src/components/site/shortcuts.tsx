"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useI18n } from "./i18n-provider";

function Kbd({ children }: { children: string }) {
  return (
    <kbd
      dir="ltr"
      className="mono grid min-w-9 place-items-center rounded-lg border border-ink/15 bg-paper px-2 py-1.5 text-mink-70 shadow-[0_1px_0_rgba(10,10,10,0.18)]"
    >
      {children}
    </kbd>
  );
}

/**
 * Keyboard first — a power-user layer that fits a pro tool's site.
 * "?" summons this panel; M / D / P / T drive the page from the home row.
 * All hotkeys stand down while typing in a field, while a modifier is held,
 * or while another overlay (menu / dialog) owns the keyboard.
 */
export function Shortcuts() {
  const { t, monoLabel } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onCall = () => setOpen(true);
    window.addEventListener("orax:shortcuts", onCall);
    return () => window.removeEventListener("orax:shortcuts", onCall);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return;
      // Another overlay (menu or dialog) owns the keyboard right now
      if (document.body.style.overflow === "hidden") return;

      const k = e.key.toLowerCase();
      if (k === "d") {
        e.preventDefault();
        window.dispatchEvent(new Event("orax:download"));
      } else if (k === "p") {
        e.preventDefault();
        window.dispatchEvent(new Event("orax:demo"));
      } else if (k === "t") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        });
      } else if (e.key === "?" || e.key === "؟" || e.key === "/") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="rounded-3xl border-black/10 p-8 sm:max-w-md">
        <DialogHeader>
          <p className="mono text-mink-50" dir="ltr">
            ORAXRECORDLY — KEYBOARD FIRST
          </p>
          <DialogTitle className="mt-2 text-start font-display text-3xl font-medium">
            {t.shortcuts.title}
          </DialogTitle>
          <DialogDescription className="mt-2 text-start leading-relaxed">
            {t.shortcuts.desc}
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-6">
          {t.shortcuts.items.map((s) => (
            <li
              key={s.keys[0]}
              className="flex items-center justify-between gap-6 border-b border-ink/10 py-4 last:border-b-0"
            >
              <span className="text-start leading-relaxed text-ink-soft">
                {s.text}
              </span>
              <span className="flex shrink-0 items-center gap-1.5">
                {s.keys.map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>

        <p className={monoLabel + " mt-6 text-center text-mink-35"}>
          {t.shortcuts.footnote}
        </p>
      </DialogContent>
    </Dialog>
  );
}
