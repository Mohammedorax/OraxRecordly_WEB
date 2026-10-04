"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";

/**
 * First-visit curtain — a white stage that carries the logo for a beat,
 * then lifts to reveal the page. Shows once per session only:
 * a pre-paint inline script marks repeat visits with `intro-skip`.
 * While the curtain is up (`html.intro-hold`), every reveal is held back
 * so no animation plays behind it — then `orax:go` sets them free.
 */
export function Intro() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const finish = () => {
      root.classList.remove("intro-hold", "intro-skip");
      window.dispatchEvent(new Event("orax:go"));
      try {
        sessionStorage.setItem("orax-intro", "1");
      } catch {
        /* private mode — the curtain simply won't persist */
      }
      setDone(true);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skipped = root.classList.contains("intro-skip");
    if (skipped || reduced) {
      finish();
      return;
    }

    // First visit — hold the stage, then lift the curtain
    let t2 = 0;
    const t1 = window.setTimeout(() => {
      curtainRef.current?.classList.add("is-open");
      t2 = window.setTimeout(finish, 950);
    }, 1000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (done) return null;

  return (
    <div ref={curtainRef} className="intro-curtain" aria-hidden="true">
      <Image
        src={asset("/brand/logo-full.png")}
        alt=""
        width={400}
        height={378}
        className="h-20 w-auto md:h-24"
        priority
      />
      <p className="mono flex items-center gap-3 text-black/50">
        <span className="rec-dot" />
        <span dir="ltr">ORAXRECORDLY — EST. 2026</span>
      </p>
    </div>
  );
}
