"use client";

import dynamic from "next/dynamic";

/**
 * The page's overlays, split out of the first download.
 *
 * The sticky call-to-action, the back-to-top button and the keyboard-shortcuts
 * sheet are invisible until the visitor scrolls or presses a key, so their code is
 * fetched after the page has already painted instead of holding up first render.
 * They live in a client component because `ssr: false` is only allowed there — the
 * page itself is a server component.
 */
const StickyCTA = dynamic(
  () => import("@/components/site/sticky-cta").then((module) => module.StickyCTA),
  { ssr: false },
);
const BackToTop = dynamic(
  () => import("@/components/site/back-to-top").then((module) => module.BackToTop),
  { ssr: false },
);
const Shortcuts = dynamic(
  () => import("@/components/site/shortcuts").then((module) => module.Shortcuts),
  { ssr: false },
);

export function DeferredOverlays() {
  return (
    <>
      <StickyCTA />
      <BackToTop />
      <Shortcuts />
    </>
  );
}
