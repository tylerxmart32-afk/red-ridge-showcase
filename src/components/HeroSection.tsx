import { Phone, CalendarCheck, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/site";

const STATS = [
  { value: "24/7", label: "Automated coverage" },
  { value: "5+", label: "Years shipping AI systems" },
  { value: "6", label: "Integrated service lines" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {CONTACT.tagline}
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            AI Infrastructure for <span className="text-primary">Growing SMBs</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build the systems that recover the revenue you are already losing — missed calls,
            cold leads, and manual work that never gets done. Deployed in weeks, owned by you, not
            another pilot project that dies in a slide deck.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={CONTACT.demoHref}>
                <CalendarCheck aria-hidden="true" />
                Schedule Demo
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={CONTACT.phoneHref}>
                <Phone aria-hidden="true" />
                Call {CONTACT.phone}
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-surface px-5 py-4">
                <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex aspect-4/5 flex-col items-center justify-center gap-3 bg-accent/40">
              <UserRound aria-hidden="true" className="size-12! text-muted-foreground" />
              <p className="px-6 text-center text-xs text-muted-foreground">
                Professional headshot placeholder
              </p>
            </div>
            <div className="border-t border-border px-5 py-4">
              <p className="text-sm font-semibold text-foreground">Tyler Martin</p>
              <p className="text-xs text-muted-foreground">Founder, Red Ridge AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
