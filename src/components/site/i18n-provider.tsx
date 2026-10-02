"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { DICTS, type Dict, type Lang } from "@/lib/i18n";

type I18n = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Dict;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  /** Label class helper — Arabic labels must never letter-space */
  monoLabel: string;
};

const I18nContext = createContext<I18n | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

/** useLayoutEffect without the SSR warning (this file is server-rendered too). */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function readStoredLang(): Lang | null {
  try {
    const m = document.cookie.match(/(?:^|; )orax-lang=(\w+)/);
    if (m) return m[1] === "en" ? "en" : "ar";
    const v = localStorage.getItem("orax-lang");
    if (v === "en" || v === "ar") return v;
  } catch {
    /* private mode / cookies disabled — the default language stands */
  }
  return null;
}

/**
 * The language spine. The static export always ships the Arabic RTL default,
 * so the pre-paint script in layout.tsx has already set <html lang dir>, the
 * document title and the `lang-pending` guard. This provider then adopts the
 * visitor's stored choice *before the first paint* (layout effect + a
 * synchronous re-render) and drops the guard, so an English visitor never
 * sees Arabic. The toggle flips the DOM attributes, the document title, the
 * cookie (for the next visit) and localStorage (a mirror for good measure).
 */
export function I18nProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Adopt the stored language pre-paint, then release the visibility guard.
  useIsoLayoutEffect(() => {
    const stored = readStoredLang();
    if (stored && stored !== initialLang) setLangState(stored);
    document.documentElement.classList.remove("lang-pending");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = DICTS[lang].meta.title;
    try {
      localStorage.setItem("orax-lang", lang);
      document.cookie = `orax-lang=${lang}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      /* private mode — the toggle still works for this visit */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((v) => (v === "ar" ? "en" : "ar")),
    []
  );

  const value: I18n = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: DICTS[lang],
    setLang,
    toggleLang,
    monoLabel: lang === "ar" ? "mono mono-ar" : "mono",
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
