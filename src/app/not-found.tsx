"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/site/i18n-provider";
import { asset } from "@/lib/asset";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <Image
        src={asset("/brand/logo-full.png")}
        alt={t.notFound.logoAlt}
        width={400}
        height={378}
        className="h-16 w-auto"
      />

      <p className="mono mt-14 text-mink-50" dir="ltr">
        ERROR 404 — SCENE NOT FOUND
      </p>

      <h1 className="mt-6 font-display text-[clamp(3rem,10vw,7rem)] font-medium leading-[1.15]">
        {t.notFound.title}
      </h1>

      <p className="mt-6 max-w-md leading-loose text-ink-soft">
        {t.notFound.para}
      </p>

      <Link
        href="/"
        className="mono mt-12 inline-flex items-center gap-3 rounded-full bg-orax-blue px-8 py-4 text-white transition-colors duration-500 ease-editorial hover:bg-[#0F55A0]"
      >
        {t.notFound.cta}
      </Link>

      <p className="mono mt-16 text-mink-35" dir="ltr">
        ORAXRECORDLY — EVERY FRAME COUNTS
      </p>
    </div>
  );
}
