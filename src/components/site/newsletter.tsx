"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { useI18n } from "./i18n-provider";
import { useToast } from "@/hooks/use-toast";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; message: string }
  | { kind: "error"; error: string };

/**
 * The letter is a static site (GitHub Pages) — there is no server to POST the
 * address to, and `output: "export"` forbids API routes. So the form validates
 * in the browser exactly as the old /api/subscribe route did and then hands the
 * address to the visitor's own mail client with a pre-filled subscribe request
 * to the studio inbox. Nothing is fetched, nothing is silently dropped: the
 * visitor sees the message they are about to send and can send it themselves.
 */
const STUDIO_INBOX = "hello@oraxrecordly.app";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Newsletter() {
  const { t, lang, monoLabel } = useI18n();
  const [state, setState] = useState<State>({ kind: "idle" });
  const { toast } = useToast();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const form_data = new FormData(form);
    const email = String(form_data.get("email") ?? "").trim();

    if (!EMAIL_RE.test(email) || email.length > 254) {
      setState({ kind: "error", error: t.newsletter.api.invalid });
      return;
    }

    setState({ kind: "loading" });

    const subject =
      lang === "ar"
        ? "اشتراك في ديوان أوراكس"
        : "Orax divan subscription";
    const body =
      lang === "ar"
        ? `أرغب في الانضمام إلى ديوان أوراكس.\n\nالبريد: ${email}`
        : `I'd like to join the Orax divan.\n\nEmail: ${email}`;
    const mailto = `mailto:${STUDIO_INBOX}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailto;
      setState({ kind: "success", message: t.newsletter.api.welcome });
      toast({
        title: t.newsletter.toastTitle,
        description: t.newsletter.api.welcome,
      });
      form.reset();
    } catch {
      setState({ kind: "error", error: t.newsletter.errorUnexpected });
    }
  }

  return (
    <section
      id="newsletter"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-24 md:px-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal className="mono text-mink-50">
          <Scramble text="( 09 — THE DIVAN LETTER )" />
        </Reveal>

        <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
          <Reveal delay={100}>{t.newsletter.heading1}</Reveal>
          <Reveal delay={220} className="text-mink-35">
            {t.newsletter.heading2}
          </Reveal>
        </h2>

        <Reveal delay={300}>
          <p className="mx-auto mt-8 max-w-xl leading-loose text-ink-soft">
            {t.newsletter.para}
          </p>
        </Reveal>

        <Reveal delay={380} className="mt-12">
          {state.kind === "success" ? (
            <div
              className="mx-auto flex max-w-lg items-center justify-center gap-3 rounded-full border border-orax-blue/30 bg-orax-blue/5 px-8 py-5"
              role="status"
            >
              <Check className="size-5 shrink-0 text-orax-blue" strokeWidth={2} />
              <p className="font-medium text-orax-blue">{state.message}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row sm:items-center sm:gap-0"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t.newsletter.emailLabel}
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                dir="ltr"
                autoComplete="email"
                placeholder="you@studio.com"
                disabled={state.kind === "loading"}
                className="h-14 flex-1 rounded-full border border-ink/15 bg-paper px-6 text-start text-lg outline-none transition-colors duration-500 ease-editorial placeholder:text-mink-30 focus:border-orax-blue"
              />
              <button
                type="submit"
                disabled={state.kind === "loading"}
                data-cursor-label={lang === "ar" ? "انضم" : "Join"}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-8 text-lg font-medium text-paper transition-colors duration-500 ease-editorial hover:bg-orax-blue disabled:opacity-60 sm:ms-3"
              >
                {state.kind === "loading" ? (
                  <Loader2 className="size-5 animate-spin" strokeWidth={1.5} />
                ) : (
                  <>
                    {t.newsletter.button}
                    <Arrow
                      className="size-5 transition-transform duration-500 ease-editorial group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1"
                      strokeWidth={1.5}
                    />
                  </>
                )}
              </button>
            </form>
          )}

          {state.kind === "error" && (
            <p className="mt-4 text-sm font-medium text-orax-red" role="alert">
              {state.error}
            </p>
          )}

          <p className={monoLabel + " mt-6 text-mink-35"}>
            {t.newsletter.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
