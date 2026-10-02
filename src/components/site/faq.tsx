"use client";

import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { cn } from "@/lib/utils";
import { useI18n } from "./i18n-provider";

export function FAQ() {
  const { t } = useI18n();

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-ink/10 px-6 py-24 md:px-24 md:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        {/* Sticky header column */}
        <div>
          <Reveal className="mono text-mink-50">
            <Scramble text="( 07 — FAQ )" />
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Reveal delay={100}>{t.faq.heading1}</Reveal>
            <Reveal delay={220} className="text-mink-35">
              {t.faq.heading2}
            </Reveal>
          </h2>
          <Reveal delay={300}>
            <p className="mt-8 max-w-sm leading-loose text-ink-soft">
              {t.faq.para}
            </p>
          </Reveal>
        </div>

        {/* Accordion column */}
        <Reveal delay={150}>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-ink/10"
              >
                <AccordionTrigger className="group py-6 text-start hover:no-underline md:py-7 [&[data-state=open]>span.faq-plus]:rotate-45">
                  <span className="flex flex-1 items-baseline gap-4">
                    <span className="mono shrink-0 text-orax-red/70" dir="ltr">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl font-medium leading-relaxed md:text-2xl">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "faq-plus grid size-9 shrink-0 place-items-center rounded-full border border-ink/15",
                      "transition-transform duration-500 ease-editorial group-hover:border-orax-blue group-hover:text-orax-blue"
                    )}
                  >
                    <Plus className="size-4" strokeWidth={1.5} />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pe-14 text-start leading-loose text-ink-soft">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
