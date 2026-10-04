"use client";

import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./reveal";
import { DownloadCTA } from "./download-cta";
import { useI18n } from "./i18n-provider";
import { useToast } from "@/hooks/use-toast";
import { asset } from "@/lib/asset";

function FooterList({
  title,
  items,
  copyAria,
  toasts,
}: {
  title: string;
  items: { label: string; href: string; copy?: boolean }[];
  copyAria: string;
  toasts: { okTitle: string; okDesc: string; failTitle: string; failDesc: string };
}) {
  const { lang, monoLabel } = useI18n();
  const DirArrow = lang === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <div>
      <Reveal>
        <h3 className={monoLabel + " text-mink-d40"}>{title}</h3>
      </Reveal>
      <ul className="mt-6 space-y-1">
        {items.map((item, i) => (
          <Reveal key={item.href + item.label} delay={i * 60}>
            <li>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                data-cursor-label={item.copy ? (lang === "ar" ? "انسخ" : "Copy") : lang === "ar" ? "اذهب" : "Go"}
                className="u-line group inline-flex items-center gap-2 py-2 text-lg text-mink-d60 transition-colors duration-500 ease-editorial hover:text-orax-blue-bright"
              >
                {item.label}
                {item.copy ? (
                  <CopyButton text={item.label} copyAria={copyAria} toasts={toasts} />
                ) : (
                  <DirArrow
                    className="size-4 opacity-0 transition-all duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:opacity-100 ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                    strokeWidth={1.5}
                  />
                )}
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/** One tap, the address is on the clipboard — no select-all gymnastics. */
function CopyButton({
  text,
  copyAria,
  toasts,
}: {
  text: string;
  copyAria: string;
  toasts: { okTitle: string; okDesc: string; failTitle: string; failDesc: string };
}) {
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const copyText = async (value: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Legacy path — contexts where the async clipboard API is unavailable
      try {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
      } catch {
        return false;
      }
    }
  };

  const onCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const ok = await copyText(text);
    if (ok) {
      setDone(true);
      window.setTimeout(() => setDone(false), 1800);
      toast({ title: toasts.okTitle, description: toasts.okDesc });
    } else {
      toast({ title: toasts.failTitle, description: toasts.failDesc });
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`${copyAria}: ${text}`}
      className="-mt-1 grid size-8 place-items-center rounded-full border border-white/15 text-mink-d40 transition-colors duration-500 ease-editorial hover:border-orax-blue-bright/50 hover:text-orax-blue-bright"
    >
      {done ? (
        <Check className="size-3.5 text-orax-blue-bright" strokeWidth={2} />
      ) : (
        <Copy className="size-3.5" strokeWidth={1.5} />
      )}
    </button>
  );
}

export function Footer() {
  const { t, lang, monoLabel } = useI18n();
  const f = t.footer;

  const contact: { label: string; href: string; copy?: boolean }[] = [
    { label: "orax2004@gmail.com", href: "mailto:orax2004@gmail.com", copy: true },
    { label: f.privacy, href: "#download" },
  ];

  return (
    <footer
      id="download"
      className="mt-auto scroll-mt-24 bg-[#0A0A0A] text-white"
    >
      <div className="px-6 pb-8 pt-24 md:px-24">
        {/* CTA row */}
        <div className="border-b border-white/10 pb-16 md:pb-24">
          <Reveal className="mono mb-8 flex items-center gap-3 text-mink-d40">
            <span className="rec-dot" aria-hidden="true" />
            <span dir="ltr">( 07 — GET STARTED )</span>
          </Reveal>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[1.2]">
              <Reveal>{f.heading1}</Reveal>
              <Reveal delay={140} className="text-mink-d35">
                {f.heading2}
              </Reveal>
            </h2>
            <Reveal delay={280}>
              <DownloadCTA listen showReleases />
            </Reveal>
          </div>
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-3 md:py-20">
          {/* Columns 1-2: brand chip + bio */}
          <div className="md:col-span-2">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white py-2.5 pe-5 ps-5">
                <Image
                  src={asset("/brand/logo-horizontal.png")}
                  alt={f.logoAlt}
                  width={400}
                  height={123}
                  className="h-9 w-auto"
                />
              </span>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-sm leading-loose text-mink-d60">
                {f.bio}
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-6 flex flex-wrap gap-2">
              {["WINDOWS", "64-BIT", "AGPL-3.0", "v1.4.4"].map((tag) => (
                <span
                  key={tag}
                  dir="ltr"
                  className="mono rounded-full border border-white/15 px-3 py-1 text-mink-d50 transition-colors duration-500 ease-editorial hover:border-orax-blue-bright/50 hover:text-orax-blue-bright"
                >
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Column 3: Contact — the single way to reach us */}
          <FooterList
            title={f.contactTitle}
            items={contact}
            copyAria={f.copyAria}
            toasts={{
              okTitle: f.copyToastTitle,
              okDesc: f.copyToastDesc,
              failTitle: f.copyFailTitle,
              failDesc: f.copyFailDesc,
            }}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-mink-d40 md:flex-row md:items-center">
          <p>{f.copyright}</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("orax:shortcuts"))}
              data-cursor-label={lang === "ar" ? "اختصارات" : "Keys"}
              className="mono inline-flex items-center gap-2 transition-colors duration-500 ease-editorial hover:text-orax-blue-bright"
            >
              <span dir="ltr">KEYBOARD — ?</span>
              <span className={monoLabel}>{f.keyboard}</span>
            </button>
            <p className="mono" dir={lang === "ar" ? "rtl" : "ltr"}>
              {f.madeIn}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
