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
 * Every download below is a real asset of the newest release. GitHub redirects
 * `…/releases/latest/download/<asset>` to that file and serves it as an
 * attachment, so each link is one click away from the bytes - there is no
 * intermediate page to search.
 */
const ASSET_BASE = "https://github.com/Mohammedorax/OraxRecordly/releases/latest/download";

/** The installer the auto-updater works with: the recommended Windows package. */
const WINDOWS_INSTALLER = `${ASSET_BASE}/OraxRecordly-windows-x64.exe`;

/** Secondary destination: every release, every platform. */
const ALL_RELEASES = "https://github.com/Mohammedorax/OraxRecordly/releases";

type PlatformKey = "Windows" | "macOS" | "Linux";
type PackageNoteKey =
  | "windowsInstaller"
  | "windowsPortable"
  | "macArm64Dmg"
  | "macX64Dmg"
  | "macArm64Zip"
  | "macX64Zip"
  | "linuxAppImage"
  | "linuxDeb"
  | "linuxRpm";

interface PackageOption {
  /** Shown on the row in mono: the file you are about to get. */
  label: string;
  /** The real asset name, appended to the release download base. */
  asset: string;
  /** Real Content-Length, in the decimal megabytes users see elsewhere. */
  size: string;
  noteKey: PackageNoteKey;
}

interface PlatformOption {
  key: PlatformKey;
  icon: typeof Monitor;
  noteIndex: number;
  packages: PackageOption[];
}

/**
 * What the release pipeline publishes today, per platform. Windows and macOS
 * lead with the package most people want; Linux leads with the AppImage, which
 * needs no installation and no root, followed by the two packages that give a
 * Linux desktop real system integration.
 */
const PLATFORM_OPTIONS: PlatformOption[] = [
  {
    key: "Windows",
    icon: Monitor,
    noteIndex: 0,
    packages: [
      {
        label: "exe",
        asset: "OraxRecordly-windows-x64.exe",
        size: "161.4 MB",
        noteKey: "windowsInstaller",
      },
      {
        label: "zip",
        asset: "OraxRecordly-windows-x64.zip",
        size: "209.6 MB",
        noteKey: "windowsPortable",
      },
    ],
  },
  {
    key: "macOS",
    icon: Laptop,
    noteIndex: 1,
    packages: [
      {
        label: "arm64 dmg",
        asset: "OraxRecordly-macos-arm64-unsigned.dmg",
        size: "159.8 MB",
        noteKey: "macArm64Dmg",
      },
      {
        label: "x64 dmg",
        asset: "OraxRecordly-macos-x64-unsigned.dmg",
        size: "163.2 MB",
        noteKey: "macX64Dmg",
      },
      {
        label: "arm64 zip",
        asset: "OraxRecordly-macos-arm64-unsigned.zip",
        size: "154.9 MB",
        noteKey: "macArm64Zip",
      },
      {
        label: "x64 zip",
        asset: "OraxRecordly-macos-x64-unsigned.zip",
        size: "158.4 MB",
        noteKey: "macX64Zip",
      },
    ],
  },
  {
    key: "Linux",
    icon: Terminal,
    noteIndex: 2,
    packages: [
      {
        label: "AppImage",
        asset: "OraxRecordly-linux-x64.AppImage",
        size: "177.5 MB",
        noteKey: "linuxAppImage",
      },
      {
        label: "deb",
        asset: "OraxRecordly-linux-x64.deb",
        size: "144.2 MB",
        noteKey: "linuxDeb",
      },
      {
        label: "rpm",
        asset: "OraxRecordly-linux-x64.rpm",
        size: "131.1 MB",
        noteKey: "linuxRpm",
      },
    ],
  },
];

type Variant = "button" | "compact" | "link";

/**
 * The download island.
 *
 * The controls open the chooser rather than assuming the visitor is on Windows:
 * the chooser lists one row per real package - installer or portable on Windows,
 * both architectures as disk image or zip on macOS, and the three distribution
 * packages on Linux - and each row is a direct link to the file. `listen` opts
 * ONE canonical instance into the global triggers (the "D" hotkey and the
 * header's download button dispatch `orax:download`).
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
  const [platform, setPlatform] = useState<PlatformKey>("Windows");
  const { toast } = useToast();
  const magnetic = useMagnetic<HTMLButtonElement>(0.22);
  const DirArrow = lang === "ar" ? ArrowUpLeft : ArrowUpRight;
  const cursorLabel = lang === "ar" ? "حمّل" : "Get";

  useEffect(() => {
    if (!listen) return;
    const onCall = () => setOpen(true);
    window.addEventListener("orax:download", onCall);
    return () => window.removeEventListener("orax:download", onCall);
  }, [listen]);

  const announce = (name: string) => {
    toast({
      title: t.download.toastTitle,
      description: t.download.toastDesc.replace("{platform}", name),
    });
  };

  const openChooser = () => setOpen(true);
  const selected =
    PLATFORM_OPTIONS.find((option) => option.key === platform) ?? PLATFORM_OPTIONS[0];

  return (
    <>
      {variant === "button" && (
        <button
          ref={magnetic}
          type="button"
          onClick={openChooser}
          data-cursor
          data-cursor-label={cursorLabel}
          className="group inline-flex items-center gap-3 rounded-full bg-orax-blue px-8 py-4 text-lg font-medium text-white transition-colors duration-500 ease-editorial hover:bg-[#0F55A0]"
        >
          <Download className="size-5" strokeWidth={1.5} />
          {t.download.button}
        </button>
      )}

      {variant === "compact" && (
        <button
          type="button"
          onClick={openChooser}
          data-cursor
          data-cursor-label={cursorLabel}
          className="inline-flex items-center gap-2 rounded-full bg-orax-blue px-5 py-2.5 text-sm font-medium text-white transition-colors duration-500 ease-editorial hover:bg-[#0F55A0]"
        >
          <Download className="size-4" strokeWidth={1.5} />
          {t.download.compact}
        </button>
      )}

      {variant === "link" && (
        <button
          type="button"
          onClick={openChooser}
          data-cursor
          data-cursor-label={cursorLabel}
          className="mono group inline-flex items-center gap-2 border-b border-orax-blue pb-1 text-orax-blue transition-colors duration-500 ease-editorial hover:text-[#0F55A0]"
        >
          <Download className="size-4" strokeWidth={1.5} />
          {t.download.button}
        </button>
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
              DOWNLOAD — v1.13.4
            </p>
            <DialogTitle className="mt-2 text-start font-display text-3xl font-medium">
              {t.download.title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-start leading-relaxed">
              {t.download.desc}
            </DialogDescription>
          </DialogHeader>

          {/*
            * The platform chooser. Three systems, and under each one the packages
            * that system actually has - the distribution names are spelled out on
            * the rows rather than hidden behind a generic "Linux" label.
            */}
          <div
            role="tablist"
            aria-label={t.download.choosePlatform}
            className="mt-6 flex items-center gap-1 rounded-full border border-ink/10 p-1"
          >
            {PLATFORM_OPTIONS.map((option) => {
              const active = option.key === selected.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setPlatform(option.key)}
                  className={cn(
                    "mono flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs transition-colors duration-500 ease-editorial",
                    active
                      ? "bg-orax-blue text-white"
                      : "text-ink-soft hover:text-orax-blue",
                  )}
                >
                  <option.icon className="size-4" strokeWidth={1.5} />
                  {option.key}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-start text-sm text-ink-soft">
            {t.download.platforms[selected.noteIndex].note}
          </p>

          <ul className="mt-3 space-y-2">
            {selected.packages.map((pkg) => (
              <li key={pkg.asset}>
                <a
                  href={`${ASSET_BASE}/${pkg.asset}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    announce(selected.key);
                    setOpen(false);
                  }}
                  className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-ink/10 px-5 py-4 transition-colors duration-500 ease-editorial hover:border-orax-blue hover:bg-orax-blue hover:text-white"
                >
                  <span className="flex min-w-0 flex-col text-start">
                    <span className="mono font-medium" dir="ltr">
                      {pkg.label}
                    </span>
                    <span className="mt-1 text-sm text-ink-soft group-hover:text-white/70">
                      {t.download.packages[pkg.noteKey]}
                    </span>
                  </span>
                  <span className="flex shrink-0 flex-col items-end gap-1">
                    <span
                      className="mono whitespace-nowrap text-mink-50 group-hover:text-white/60"
                      dir="ltr"
                    >
                      {pkg.size}
                    </span>
                    <DirArrow
                      className="size-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </span>
                </a>
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
