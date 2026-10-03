# OraxRecordly — Landing Page

The public landing page for **OraxRecordly**, the open-source, Arabic-first screen
recorder and editor.

This repository is only the website. The desktop app it advertises lives at
[Mohammedorax/OraxRecordly](https://github.com/Mohammedorax/OraxRecordly); the
download buttons on the page point at
[that repository's releases](https://github.com/Mohammedorax/OraxRecordly/releases).

The site is Arabic-first (RTL) with a full English (LTR) translation and light/dark
themes. It is a static site: Next.js 16 (App Router), React 19, Tailwind CSS 4 and
shadcn/ui, exported to plain files by `next build` (`output: "export"`).

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build the static export

```bash
npm run build        # writes the site to out/
npm start            # serves out/ on http://localhost:3000
```

### Base path

GitHub Pages serves this site from a repository subpath, so the build has to be told
about it. `next.config.ts` reads two environment variables:

| Variable | Example | Purpose |
| --- | --- | --- |
| `SITE_BASE_PATH` | `/OraxRecordly_WEB` | Subpath the site is served from. Leave unset or empty for a root / custom-domain deploy. |
| `SITE_URL` | `https://mohammedorax.github.io` | Absolute origin used for canonical URLs, OG tags and JSON-LD. |

```bash
# bash
SITE_BASE_PATH=/OraxRecordly_WEB npm run build
```

```powershell
# PowerShell
$env:SITE_BASE_PATH = "/OraxRecordly_WEB"; npm run build
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml),
which builds the export with `SITE_BASE_PATH=/OraxRecordly_WEB` and publishes it to
GitHub Pages:

**https://mohammedorax.github.io/OraxRecordly_WEB/**
