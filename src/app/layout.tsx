import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";
import { I18nProvider } from "@/components/site/i18n-provider";
import { DICTS } from "@/lib/i18n";
import { asset, SITE_URL } from "@/lib/asset";

/**
 * SA Hazm — THE single typeface of the whole site.
 * Covers Arabic + Latin + both digit systems + full diacritics, so every
 * text — display, body, labels, numerals — renders in one unified voice.
 *
 * All four shipped weights are registered so the design's existing scale
 * maps onto real cuts instead of synthetic bolding:
 * Regular → 400, Medium → 500, SemiBold → 600, Bold → 700.
 *
 * `next/font/local` fingerprints and rewrites the files into /_next/static,
 * which Next serves under basePath automatically — so the fonts follow the
 * GitHub Pages subpath with no extra work.
 */
const saHazm = localFont({
  src: [
    // WOFF2, subset to the characters the site can render: the four TTF sources
    // were 156 KB of uncompressed font on every first paint, these are 60 KB.
    // Regenerate with `python scripts/subset-fonts.py` after adding new text.
    { path: "../fonts/SAHazm-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/SAHazm-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/SAHazm-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/SAHazm-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sa-hazm",
  display: "swap",
  preload: true,
});

/**
 * Static export: there is no server to read the `orax-lang` cookie, so the
 * exported HTML is always the Arabic RTL default. A pre-paint script in
 * <head> restores the visitor's stored language before first paint, and the
 * I18nProvider takes over on hydration (see i18n-provider.tsx).
 *
 * `title` is deliberately NOT set here: the I18nProvider renders the <title>
 * from the active dictionary, so the tab title follows the language instead of
 * snapping back to the static Arabic one on hydration. The exported HTML still
 * carries the Arabic title, server-rendered by that same component.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  description: DICTS.ar.meta.description,
  keywords: [
    "OraxRecordly",
    "تسجيل الشاشة",
    "تحرير الفيديو",
    "مسجل شاشة",
    "مونتاج",
    "screen recorder",
    "video editor",
  ],
  authors: [{ name: "OraxRecordly" }],
  openGraph: {
    title: DICTS.ar.meta.ogTitle,
    description: DICTS.ar.meta.ogDescription,
    siteName: "OraxRecordly",
    type: "website",
    locale: "ar",
    images: [asset("/images/og.jpg")],
  },
  twitter: {
    card: "summary_large_image",
    title: DICTS.ar.meta.title,
    description: DICTS.ar.meta.description,
    images: [asset("/images/og.jpg")],
  },
  alternates: { canonical: asset("/") },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#10141B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');
try{
  var l=null,c=document.cookie.match(/(?:^|; )orax-lang=(\\w+)/);
  if(c){l=c[1];}else{try{l=localStorage.getItem('orax-lang');}catch(e){}}
  if(l==='en'){
    document.documentElement.lang='en';
    document.documentElement.dir='ltr';
    document.title=${JSON.stringify(DICTS.en.meta.title)};
    document.documentElement.classList.add('lang-pending');
  }
}catch(e){}
try{
  if(sessionStorage.getItem('orax-intro')){document.documentElement.classList.add('intro-skip');}
  else{document.documentElement.classList.add('intro-hold');}
}catch(e){document.documentElement.classList.add('intro-hold');}`,
          }}
        />
        {/*
          * Repeat visits: GitHub Pages cannot mark the content-hashed files under
          * /_next/static as immutable, so the browser revalidates them every time.
          * The worker in /sw.js serves those from cache instead and refreshes images
          * in the background. It is only registered by a production build, and only
          * after the load event, so it can never delay the first paint.
          */}
        {process.env.NODE_ENV === "production" ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.addEventListener('load',function(){try{if(!('serviceWorker' in navigator))return;navigator.serviceWorker.register(${JSON.stringify(
                (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/sw.js",
              )}).catch(function(){});}catch(e){}});`,
            }}
          />
        ) : null}
        <noscript>
          <style>{`.intro-curtain{display:none!important}`}</style>
        </noscript>
      </head>
      <body className={`${saHazm.variable} antialiased bg-paper text-ink`}>
        <ThemeProvider>
          <I18nProvider initialLang="ar">{children}</I18nProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
