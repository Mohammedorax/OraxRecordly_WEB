"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ArrowUpLeft, ArrowUpRight, Download, Moon, Plus, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import { useSiteChrome } from "./site-chrome";
import { useI18n } from "./i18n-provider";
import { useMagnetic } from "@/hooks/use-magnetic";
import { Scramble } from "./scramble";

/** Live REC clock — ticks from page mount, editorial nod to the product. */
function RecClock() {
  const [t, setT] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setT((v) => v + 1), 1000);
    return () => window.clearInterval(id);
  }, []);

  const p = (n: number) => String(n).padStart(2, "0");
  return (
    <span className="mono hidden text-white md:block" dir="ltr">
      REC — {p(Math.floor(t / 3600))}:{p(Math.floor(t / 60) % 60)}:
      {p(t % 60)}
    </span>
  );
}

/** Day / night dial — moon on paper, sun in the ink night. */
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();

  // Hydration-safe mounted flag — false during SSR *and* the client's
  // hydration render (React uses getServerSnapshot for both), true after.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Gate EVERY theme-derived value behind `mounted`. next-themes resolves
  // localStorage synchronously before hydration, so an ungated read would
  // make the client's first render disagree with the server HTML.
  const dark = mounted && resolvedTheme === "dark";
  const label = dark ? t.header.toLight : t.header.toDark;

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={label}
      title={label}
      data-cursor-label={dark ? t.header.lightCursor : t.header.darkCursor}
      className="grid size-10 place-items-center text-white transition-transform duration-500 ease-editorial hover:scale-110"
    >
      {mounted ? (
        dark ? (
          <Sun className="size-5" strokeWidth={1.5} />
        ) : (
          <Moon className="size-5" strokeWidth={1.5} />
        )
      ) : (
        <span className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}

/** ع ⇄ EN — one press and the whole page changes its tongue and direction. */
function LangToggle() {
  const { lang, toggleLang, t } = useI18n();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "ar" ? t.header.toEnglish : t.header.toArabic}
      title={lang === "ar" ? t.header.toEnglish : t.header.toArabic}
      data-cursor-label={lang === "ar" ? t.header.langCursorEn : t.header.langCursorAr}
      className={cn(
        "grid h-10 min-w-10 place-items-center rounded-full px-3 text-white",
        "transition-transform duration-500 ease-editorial hover:scale-110"
      )}
    >
      <span className={lang === "ar" ? "mono" : "mono mono-ar"} dir="ltr">
        {lang === "ar" ? "EN" : "عربي"}
      </span>
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { activeId } = useSiteChrome();
  const { t, lang } = useI18n();
  const navRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const magnetic = useMagnetic<HTMLButtonElement>(0.3);
  const DirArrow = lang === "ar" ? ArrowUpLeft : ArrowUpRight;

  // Smart header — ducks when the reader dives, returns when they climb.
  // Never hides while the menu overlay is open.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY + 8) {
        setHidden(true);
      } else if (y < lastY - 8) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barsHidden = hidden && !open;

  // Lock body scroll while the menu is open + close on Escape + M key
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      // "M" toggles the menu — unless typing in a field or a dialog is open
      if (e.key.toLowerCase() === "m" || e.code === "KeyM") {
        const target = e.target as HTMLElement | null;
        const typing =
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable);
        const dialogOpen = Boolean(document.querySelector("[role='dialog']"));
        if (!typing && !dialogOpen) {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Focus the first link on open, and keep Tab trapped inside the overlay
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
    else return;
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = navRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onTab);
    return () => window.removeEventListener("keydown", onTab);
  }, [open]);

  return (
    <>
      {/*
        Two sibling fixed bars:
        - the logo keeps its true brand colors (outside any blend mode),
          protected by a white editorial chip so it reads over any section;
        - the controls keep the classic difference blend (white-on-invert).
        Both duck out of the way on the way down, and return on the way up.
      */}
      <header>
        <div
          className={cn(
            "header-bar pointer-events-none fixed start-0 top-0 z-50 px-6 py-5 md:px-24",
            barsHidden && "is-hidden"
          )}
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            aria-label={t.header.home}
            className="pointer-events-auto inline-flex items-center rounded-full border border-black/10 bg-white py-1.5 pe-4 ps-4 shadow-[0_1px_14px_rgba(10,10,10,0.08)] transition-shadow duration-500 ease-editorial hover:shadow-[0_2px_22px_rgba(19,108,200,0.22)]"
          >
            <Image
              src={asset("/brand/logo-horizontal.png")}
              alt={t.header.logoAlt}
              width={400}
              height={123}
              className="h-7 w-auto md:h-8"
              priority
            />
          </a>
        </div>

        <div
          className={cn(
            "header-bar pointer-events-none fixed end-0 top-0 z-50 mix-blend-difference",
            barsHidden && "is-hidden"
          )}
        >
          <div className="pointer-events-auto flex items-center gap-4 px-6 py-6 md:gap-6 md:px-24">
            <RecClock />
            <ThemeToggle />
            <LangToggle />
            {/* One-click download — desktop only (mobile has the sticky bar) */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("orax:download"))}
              aria-label={t.header.download}
              aria-keyshortcuts="D"
              data-cursor-label={t.header.downloadCursor}
              className="hidden size-10 place-items-center text-white transition-transform duration-500 ease-editorial hover:scale-110 md:grid"
            >
              <Download className="size-5" strokeWidth={1.5} />
            </button>
            <button
              ref={magnetic}
              type="button"
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={open}
              aria-keyshortcuts="M"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center text-white"
            >
              <Plus
                className={cn(
                  "size-6 transition-transform duration-500 ease-editorial",
                  open && "rotate-45"
                )}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu overlay (sits under the fixed bars) */}
      <nav
        ref={navRef}
        aria-label={t.header.menuLabel}
        aria-hidden={!open}
        className={cn(
          "menu-overlay fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-paper px-6 pb-8 pt-32 md:px-24",
          open && "open"
        )}
      >
        <ul className="flex flex-col">
          {t.nav.map((link, i) => {
            const active = activeId === link.href.slice(1);
            return (
              <li key={link.href} className="border-b border-ink/10">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "true" : undefined}
                  data-cursor-label={lang === "ar" ? "اذهب" : "Go"}
                  className="menu-overlay__item group flex items-baseline justify-between py-4 md:py-5"
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                  tabIndex={open ? 0 : -1}
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className={cn(
                        "mono transition-colors duration-500 ease-editorial",
                        active ? "text-orax-blue" : "text-orax-red/70"
                      )}
                      dir="ltr"
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={cn(
                        "font-display text-3xl font-medium leading-tight transition-all duration-500 ease-editorial group-hover:translate-x-0 group-hover:rtl:-translate-x-3 group-hover:ltr:translate-x-3 md:text-6xl",
                        active
                          ? "text-orax-blue"
                          : "text-ink group-hover:text-orax-blue"
                      )}
                    >
                      {link.label}
                    </span>
                    {active && (
                      <span className="rec-dot" aria-hidden="true" />
                    )}
                  </span>
                  <DirArrow
                    className="size-6 text-orax-blue opacity-0 transition-all duration-500 ease-editorial group-hover:translate-x-0 group-hover:opacity-100 ltr:translate-x-2 rtl:-translate-x-2"
                    strokeWidth={1.5}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className="menu-overlay__item mt-10 flex flex-wrap items-center justify-between gap-4"
          style={{ transitionDelay: open ? "700ms" : "0ms" }}
        >
          <p className="mono flex items-center gap-3 text-mink-50">
            <span className="rec-dot" aria-hidden="true" />
            <Scramble text="ORAXRECORDLY — REC / EDIT / SHARE" />
          </p>
          <p className="mono text-mink-50" dir="ltr">
            v1.5.1 — 2026
          </p>
        </div>
      </nav>
    </>
  );
}
