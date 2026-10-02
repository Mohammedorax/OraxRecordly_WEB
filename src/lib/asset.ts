/**
 * Base-path aware asset URLs.
 *
 * `output: "export"` on GitHub Pages serves the whole site from a subpath
 * (/OraxRecordly_WEB/), but the same build must also work at the domain root.
 * `next/link` and `/_next/*` are handled by Next itself via `basePath`; every
 * *hand-written* URL into `public/` (images, brand marks, the favicon) is not,
 * so it goes through `asset()`.
 *
 * NEXT_PUBLIC_BASE_PATH is injected at build time by next.config.ts, which
 * means this works identically in server components, client components and
 * route metadata.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohammedorax.github.io";

/** Prefix a root-absolute public asset path with the deploy base path. */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path; // already absolute or data:
  return BASE_PATH ? `${BASE_PATH}${path}` : path;
}

/** The same path as an absolute URL — for OG tags, JSON-LD and sitemaps. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${asset(path)}`;
}
