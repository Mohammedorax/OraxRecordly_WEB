import { Cursor } from "@/components/site/cursor";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Statement, Stats } from "@/components/site/statement";
import { Features } from "@/components/site/features";
import { BeforeAfter } from "@/components/site/before-after";
import { Comparison } from "@/components/site/comparison";
import { FAQ } from "@/components/site/faq";
import { Changelog } from "@/components/site/changelog";
import { Footer } from "@/components/site/footer";
import { Intro } from "@/components/site/intro";
import { DeferredOverlays } from "@/components/site/deferred-overlays";
import { SkipLink } from "@/components/site/skip-link";
import {
  SiteChromeProvider,
  ScrollProgressBar,
} from "@/components/site/site-chrome";
import { absoluteUrl } from "@/lib/asset";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OraxRecordly",
  applicationCategory: "MultimediaApplication",
  // The published release ships a Windows installer only — see
  // https://github.com/Mohammedorax/OraxRecordly/releases
  operatingSystem: "Windows 10, Windows 11, macOS, Linux",
  description:
    "استوديو تسجيل الشاشة وتحرير الفيديو من أوراكس: التقط شاشتك بدقة 4K وستين إطاراً في الثانية، وحرّر بإيقاع خيالك، وشارك تحفتك بلا علامات مائية.",
  softwareVersion: "1.13.5",
  inLanguage: "ar",
  isAccessibleForFree: true,
  screenshot: absoluteUrl("/images/app/app-02.webp"),
  featureList: [
    "Screen recording up to 4K at 60fps",
    "Timeline video editor — trim, split, speed",
    "Auto-zoom and cursor effects",
    "System audio and microphone capture",
    "Screenshots with a built-in image editor",
    "MP4 and GIF export",
    "Opt-in on-screen keystroke overlay (Windows and Linux)",
    "Arabic-first interface with full RTL layout",
  ],
};

export default function Home() {
  return (
    <SiteChromeProvider>
      <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
        <SkipLink />

        <Intro />
        <Cursor />
        <ScrollProgressBar />
        <div className="paper-grain" aria-hidden="true" />
        <Header />

        <main id="main" className="flex-1">
          <Hero />
          <Marquee />
          <Statement />
          <Stats />
          <Features />
          <BeforeAfter />
          <Comparison />
          <FAQ />
          <Changelog />
        </main>

        <Footer />
        <DeferredOverlays />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </div>
    </SiteChromeProvider>
  );
}
