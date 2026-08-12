import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, CalendarCheck, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TopNav } from "@/components/TopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT, SERVICES, SERVICE_BY_SLUG } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICE_BY_SLUG[params.slug];
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = SERVICE_BY_SLUG[params.slug];
    if (!service) {
      return { meta: [{ title: "Service not found — Red Ridge AI" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${service.title} — Red Ridge AI`;
    const description = service.detail.intro.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData();
  const service = SERVICE_BY_SLUG[slug]!;
  const { icon: Icon, title, detail } = service;
  const others = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Link
              to="/"
              hash="services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft aria-hidden="true" className="size-4!" />
              All services
            </Link>

            <div className="mt-8 max-w-3xl animate-fade-in">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/50 bg-accent/60 text-primary">
                <Icon aria-hidden="true" className="size-6!" />
              </span>
              <p className="mt-6 text-xs font-medium tracking-[0.18em] text-primary uppercase">
                {title}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                {detail.headline}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {detail.intro}
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
            </div>

            <dl className="mt-14 grid gap-4 sm:grid-cols-3">
              {detail.outcomes.map((outcome, index) => (
                <div
                  key={outcome.label}
                  className="animate-fade-in rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary/60"
                  style={{ animationDelay: `${100 + index * 90}ms`, animationFillMode: "backwards" }}
                >
                  <dt className="text-3xl font-semibold tracking-tight text-primary">
                    {outcome.value}
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{outcome.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                  The problem
                </p>
                <p className="mt-4 text-xl leading-relaxed text-balance text-foreground">
                  {detail.problem}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                  How we work
                </p>
                <ol className="mt-6 space-y-0">
                  {detail.process.map((step, index) => (
                    <li
                      key={step.title}
                      className="group relative border-l border-border pb-8 pl-8 last:pb-0"
                    >
                      <span className="absolute -left-[13px] top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-[11px] font-semibold text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                        {index + 1}
                      </span>
                      <h2 className="text-base font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              What you get
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {detail.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
                >
                  <Check aria-hidden="true" className="mt-0.5 size-4! shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pairs well with
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {others.map(({ slug: otherSlug, icon: OtherIcon, title: otherTitle, description }) => (
                <Link
                  key={otherSlug}
                  to="/services/$slug"
                  params={{ slug: otherSlug }}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-accent/50"
                >
                  <div className="flex items-start justify-between">
                    <OtherIcon
                      aria-hidden="true"
                      className="size-5! text-muted-foreground transition-colors group-hover:text-primary"
                    />
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4! -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                    {otherTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div
              className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 text-center sm:px-12"
              style={{ background: "var(--gradient-cta)" }}
            >
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Ready to deploy {title.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Bring us the bottleneck. We will map the fix, scope the build, and tell you what it
                is worth before you commit a dollar.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={CONTACT.demoHref}>Schedule Discovery</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={CONTACT.requirementsHref}>Send Requirements</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
