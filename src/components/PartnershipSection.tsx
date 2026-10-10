import { ArrowUpRight, Check, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PARTNERSHIP } from "@/data/site";

/** Red Ridge AI x Watchman IT -> Connect Helm. Promoted directly under the hero. */
export function PartnershipSection() {
  return (
    <section id="partnership" className="scroll-mt-20 border-b border-border/60 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={PARTNERSHIP.eyebrow}
          title={PARTNERSHIP.title}
          lede={PARTNERSHIP.lede}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1.15fr] lg:items-stretch">
          {PARTNERSHIP.partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 80} className="contents">
              <div className="flex flex-col rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  {partner.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    {partner.name}
                    <ArrowUpRight aria-hidden="true" className="size-4 text-muted-foreground" />
                  </a>
                </h3>
                <ul className="mt-4 space-y-2">
                  {partner.brings.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                aria-hidden="true"
                className="hidden items-center justify-center text-2xl font-semibold text-muted-foreground lg:flex"
              >
                {index === 0 ? "+" : "="}
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/40 p-6"
              style={{ background: "var(--gradient-cta)" }}
            >
              <div className="flex items-center gap-2">
                <Handshake aria-hidden="true" className="size-5 text-primary" />
                <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                  {PARTNERSHIP.result.role}
                </p>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                {PARTNERSHIP.result.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{PARTNERSHIP.result.tagline}</p>
              <ul className="mt-4 space-y-2">
                {PARTNERSHIP.result.delivers.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-foreground/90">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 min-w-0 pt-2">
                <Button asChild size="lg" className="w-full whitespace-normal sm:w-auto">
                  <a href={PARTNERSHIP.ctaHref} target="_blank" rel="noopener">
                    {PARTNERSHIP.ctaLabel}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{PARTNERSHIP.footnote}</p>
      </div>
    </section>
  );
}
