import { Cursor } from "@/components/site/cursor";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Ticker } from "@/components/site/ticker";
import { Statement, Stats } from "@/components/site/statement";
import { Features } from "@/components/site/features";
import { BeforeAfter } from "@/components/site/before-after";
import { Testimonials } from "@/components/site/testimonials";
import { Comparison } from "@/components/site/comparison";
import { FAQ } from "@/components/site/faq";
import { Changelog } from "@/components/site/changelog";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";
import { Intro } from "@/components/site/intro";
import { StickyCTA } from "@/components/site/sticky-cta";
import { BackToTop } from "@/components/site/back-to-top";
import { Shortcuts } from "@/components/site/shortcuts";
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
  operatingSystem: "Windows, macOS, Linux",
  description:
    "استوديو تسجيل الشاشة وتحرير الفيديو من أوراكس: التقط شاشتك بدقة 4K وستين إطاراً في الثانية، وحرّر بإيقاع خيالك، وشارك تحفتك بلا علامات مائية.",
  softwareVersion: "2.4",
  inLanguage: "ar",
  screenshot: absoluteUrl("/images/app/app-02.jpg"),
  featureList: [
    "4K screen recording at 60fps",
    "Timeline video editor",
    "Camera & microphone capture",
    "Live annotations",
    "Instant export — MP4, GIF, WebM",
    "120+ effects and templates",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1284",
  },
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
          <Ticker />
          <Statement />
          <Stats />
          <Features />
          <BeforeAfter />
          <Testimonials />
          <Comparison />
          <FAQ />
          <Changelog />
          <Newsletter />
        </main>

        <Footer />
        <StickyCTA />
        <BackToTop />
        <Shortcuts />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </div>
    </SiteChromeProvider>
  );
}
