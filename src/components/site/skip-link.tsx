"use client";

import { useI18n } from "./i18n-provider";

/** Skip link — keyboard users reach the content in one hop. */
export function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[10001] focus:rounded-full focus:bg-orax-blue focus:px-6 focus:py-3 focus:text-white"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
