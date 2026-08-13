import { Phone, CalendarCheck, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, HERO, HERO_STATS, CLIENTS } from "@/data/site";
import headshotAsset from "@/assets/tyler-headshot.png.asset.json";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-mesh)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl motion-safe:animate-[ridge-pulse_8s_ease-in-out_infinite]"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {HERO.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {HERO.headline}{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              {HERO.headlineAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {HERO.subhead}
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
            <Button asChild size="lg" variant="ghost">
              <a href="#talk">
                <MessagesSquare aria-hidden="true" />
                Talk to our AI agent
              </a>
            </Button>
          </div>

          <a
            href="#clients"
            className="mt-8 flex w-fit items-center gap-3 rounded-full border border-transparent py-1 pr-3 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            <span className="flex -space-x-2">
              {CLIENTS.map((client) => (
                <span
                  key={client.name}
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-semibold text-white opacity-90"
                  style={{ backgroundColor: client.brandColor }}
                >
                  {client.initials}
                </span>
              ))}
            </span>
            {CLIENTS.length} live client systems →
          </a>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
            <img
              src={headshotAsset.url}
              alt="Tyler Martin, Founder of Red Ridge AI"
              className="aspect-4/5 w-full object-cover"
              loading="eager"
            />
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
