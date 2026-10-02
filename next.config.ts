import type { NextConfig } from "next";

/**
 * GitHub Pages serves this site from https://mohammedorax.github.io/OraxRecordly_WEB/
 * while a root / custom-domain deploy has no prefix at all.
 *
 * Both are handled by ONE environment variable: set SITE_BASE_PATH to the
 * subpath (e.g. "/OraxRecordly_WEB") for Pages, or leave it unset for a root
 * deploy — then basePath/assetPrefix are simply not emitted.
 */
const base = process.env.SITE_BASE_PATH ?? "";

/**
 * Absolute origin used by metadataBase / JSON-LD / OG tags. It is a separate
 * knob from the base path so a custom domain can be swapped in without
 * touching the routing prefix.
 */
const siteUrl =
  process.env.SITE_URL ?? "https://mohammedorax.github.io";

const nextConfig: NextConfig = {
  /**
   * This project lives inside a larger repository that has its own lockfile,
   * so Turbopack would otherwise infer the parent as the workspace root.
   * Pin it to this project.
   */
  turbopack: { root: process.cwd() },

  /**
   * Static HTML export. The landing page is 100% client-side (no database,
   * no API routes), so it can be emitted as plain files that GitHub Pages
   * serves directly.
   */
  output: "export",

  /** The image optimizer needs a server — export the raw files instead. */
  images: { unoptimized: true },

  /**
   * `/about/` instead of `/about`: static hosts resolve directory indexes
   * without needing a rewrite rule.
   */
  trailingSlash: true,

  /** Only emitted for a subpath deploy, so root deploys stay untouched. */
  ...(base ? { basePath: base, assetPrefix: base } : {}),

  /**
   * Inlined into both server and client bundles so `src/lib/asset.ts` can
   * prefix every hand-written asset URL with the same value Next uses for
   * `/_next/*` and for `next/link`.
   */
  env: { NEXT_PUBLIC_BASE_PATH: base, NEXT_PUBLIC_SITE_URL: siteUrl },

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
