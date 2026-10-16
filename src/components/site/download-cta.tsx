"use client";

import { useEffect, useState } from "react";
import { ArrowUpLeft, ArrowUpRight, Check, Download, Laptop, Monitor, Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useI18n } from "./i18n-provider";
import { useToast } from "@/hooks/use-toast";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

/**
 * The Windows installer published by the desktop release pipeline. GitHub
 * redirects `…/releases/latest/download/<asset>` to the asset of the most
 * recent release and serves it as an attachment — a real, direct download.
 */
const WINDOWS_INSTALLER =
  "https://github.com/Mohammedorax/OraxRecordly/releases/latest/download/OraxRecordly-windows-x64.exe";

/**
 * The three Linux packages the release pipeline publishes, each a real direct
 * download of the newest release:
 *
 *   AppImage  runs on any distribution without installing anything
 *   deb       Debian, Ubuntu, Mint, Pop!_OS, Kali
 *   rpm       Fedora, RHEL, openSUSE
 */
const LINUX_ASSET_BASE =
  "https://github.com/Mohammedorax/OraxRecordly/releases/latest/download";
const LINUX_VARIANTS = [
  { name: "AppImage", asset: "OraxRecordly-linux-x64.AppImage" },
  { name: "deb", asset: "OraxRecordly-linux-x64.deb" },
  { name: "rpm", asset: "OraxRecordly-linux-x64.rpm" },
] as const;

/**
 * The macOS disk images are published unsigned (no Apple Developer account), so
 * the note next to each one says so and the release ships the Gatekeeper steps.
 */
const MAC_VARIANTS = [
  { name: "arm64", asset: "OraxRecordly-macos-arm64-unsigned.dmg" },
  { name: "x64", asset: "OraxRecordly-macos-x64-unsigned.dmg" },
] as const;

/** Secondary destination: every release, every platform. */
const ALL_RELEASES = "https://github.com/Mohammedorax/OraxRecordly/releases";

/**
 * What the release pipeline actually publishes today: the Windows installer and
 * the three Linux packages. macOS is listed so those visitors land on the
 * releases page — never a download we cannot serve.
 *
 * The size is the real Content-Length the release asset serves, in the same
 * decimal MB the vendor pages use.
 */
const PLATFORMS = [
  {
    name: "Windows",
    icon: Monitor,
    meta: "161.4 MB",
    href: WINDOWS_INSTALLER,
    direct: true,
  },
  { name: "macOS", icon: Laptop, meta: "dmg", href: ALL_RELEASES, direct: false },
  // Linux has builds now, so it must not read as "no build yet"; the three
  // formats are offered as their own links below the row.
  { name: "Linux", icon: Terminal, meta: "AppImage · deb · rpm", href: ALL_RELEASES, direct: false },
];

type Variant = "button" | "compact" | "link";

/**
 * The download island.
 *
 * The primary controls are REAL download links to the Windows installer — no
 * intermediate hop, no toast-only fake. The platform dialog is still here as
 * the "something else / older build" surface: `listen` opts ONE canonical
 * instance into the global triggers (the "D" hotkey and the header's download
 * button dispatch `orax:download`), and the dialog carries the secondary
 * "all releases" link.
 */
export function DownloadCTA({
  variant = "button",
  listen = false,
  showReleases = false,
}: {
  variant?: Variant;
  listen?: boolean;
  /** Render the secondary "all releases" link under the control. */
  showReleases?: boolean;
}) {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const magnetic = useMagnetic<HTMLAnchorElement>(0.22);
  const DirArrow = lang === "ar" ? ArrowUpLeft : ArrowUpRight;
  const cursorLabel = lang === "ar" ? "حمّل" : "Get";

  useEffect(() => {
    if (!listen) return;
    const onCall = () => setOpen(true);
    window.addEventListener("orax:download", onCall);
    return () => window.removeEventListener("orax:download", onCall);
  }, [listen]);

  const announce = (platform: string) => {
    toast({
      title: t.download.toastTitle,
      description: t.download.toastDesc.replace("{platform}", platform),
    });
  };

  return (
    <>
      {variant === "button" && (
        <a
          ref={magnetic}
          href={WINDOWS_INSTALLER}
          download
          data-cursor
          data-cursor-label={cursorLabel}
          onClick={() => announce("Windows")}
          className="group inline-flex items-center gap-3 rounded-full bg-orax-blue px-8 py-4 text-lg font-medium text-white transition-colors duration-500 ease-editorial hover:bg-[#0F55A0]"
        >
          <Download className="size-5" strokeWidth={1.5} />
          {t.download.button}
        </a>
      )}

      {variant === "compact" && (
        <a
          href={WINDOWS_INSTALLER}
          download
          data-cursor
          data-cursor-label={cursorLabel}
          onClick={() => announce("Windows")}
          className="inline-flex items-center gap-2 rounded-full bg-orax-blue px-5 py-2.5 text-sm font-medium text-white transition-colors duration-500 ease-editorial hover:bg-[#0F55A0]"
        >
          <Download className="size-4" strokeWidth={1.5} />
          {t.download.compact}
        </a>
      )}

      {variant === "link" && (
        <a
          href={WINDOWS_INSTALLER}
          download
          data-cursor
          data-cursor-label={cursorLabel}
          onClick={() => announce("Windows")}
          className="mono group inline-flex items-center gap-2 border-b border-orax-blue pb-1 text-orax-blue transition-colors duration-500 ease-editorial hover:text-[#0F55A0]"
        >
          <Download className="size-4" strokeWidth={1.5} />
          {t.download.button}
        </a>
      )}

      {/* Secondary, always visible next to the primary CTA: every release,
          every platform. Opt-in so it never crowds the mobile sticky bar. */}
      {showReleases && (
        <div className="mt-4">
          <a
            href={ALL_RELEASES}
            className="mono inline-flex items-center gap-2 text-sm text-mink-50 underline decoration-mink-35 underline-offset-4 transition-colors duration-500 ease-editorial hover:text-orax-blue hover:decoration-orax-blue"
          >
            {t.download.allReleases}
          </a>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-3xl border-black/10 p-8 sm:max-w-md">
          <DialogHeader>
            <p className="mono text-mink-50" dir="ltr">
              DOWNLOAD — v1.13.2
            </p>
            <DialogTitle className="mt-2 text-start font-display text-3xl font-medium">
              {t.download.title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-start leading-relaxed">
              {t.download.desc}
            </DialogDescription>
          </DialogHeader>

          <ul className="mt-6 space-y-3">
            {PLATFORMS.map((p, i) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  {...(p.direct ? { download: true } : { target: "_blank", rel: "noreferrer" })}
                  onClick={() => {
                    // Only a real installer download may announce itself.
                    if (p.direct) announce(p.name);
                    setOpen(false);
                  }}
                  className="group flex w-full items-center justify-between rounded-2xl border border-ink/10 px-5 py-4 transition-colors duration-500 ease-editorial hover:border-orax-blue hover:bg-orax-blue hover:text-white"
                >
                  <span className="flex items-center gap-4">
                    <p.icon className="size-6" strokeWidth={1.5} />
                    <span className="text-start">
                      <span className="block text-lg font-medium" dir="ltr">
                        {p.name}
                      </span>
                      <span className="block text-sm text-ink-soft group-hover:text-white/60">
                        {t.download.platforms[i].note}
                      </span>
                    </span>
                  </span>
                  <span className="flex shrink-0 flex-col items-end gap-1">
                    <span
                      className="mono whitespace-nowrap text-mink-50 group-hover:text-white/60"
                      dir={p.meta ? "ltr" : undefined}
                    >
                      {p.meta || t.labels.noBuildYet}
                    </span>
                    <DirArrow
                      className="size-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </span>
                </a>

                {/*
                  * Linux ships three packages rather than one, so each format gets
                  * its own real download link instead of hiding behind a releases
                  * page the visitor then has to search. macOS does the same for its
                  * two architectures, and says plainly that it is unsigned.
                  */}
                {p.name === "Linux" ? (
                  <div className="mt-2 flex flex-wrap gap-2 ps-2">
                    {LINUX_VARIANTS.map((variant) => (
                      <a
                        key={variant.name}
                        href={`${LINUX_ASSET_BASE}/${variant.asset}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mono rounded-full border border-ink/15 px-3 py-1 text-xs text-ink-soft transition-colors duration-500 ease-editorial hover:border-orax-blue hover:text-orax-blue"
                      >
                        {variant.name}
                        <span className="text-mink-40">
                          {" "}
                          {t.download.linuxFormats[variant.name]}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : null}

                {p.name === "macOS" ? (
                  <div className="mt-2 flex flex-wrap gap-2 ps-2">
                    {MAC_VARIANTS.map((variant) => (
                      <a
                        key={variant.name}
                        href={`${LINUX_ASSET_BASE}/${variant.asset}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mono rounded-full border border-ink/15 px-3 py-1 text-xs text-ink-soft transition-colors duration-500 ease-editorial hover:border-orax-blue hover:text-orax-blue"
                      >
                        {variant.name}
                        <span className="text-mink-40"> {t.download.macFormats[variant.name]}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <p className={cn("mt-6 flex items-center justify-center gap-2 text-sm text-ink-soft")}>
            <Check className="size-4 text-orax-blue" strokeWidth={1.5} />
            {t.download.licenseNote}
          </p>

          <p className="mt-4 text-center">
            <a
              href={ALL_RELEASES}
              className="mono text-sm text-mink-50 underline decoration-mink-35 underline-offset-4 transition-colors duration-500 ease-editorial hover:text-orax-blue hover:decoration-orax-blue"
            >
              {t.download.allReleases}
            </a>
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
