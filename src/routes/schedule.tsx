import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { TopNav } from "@/components/TopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";

const TITLE = "Book a Free 15-Minute AI Demo | Red Ridge AI";
const DESCRIPTION =
  "See what an AI agent or virtual assistant would look like inside your business. Tell us what you want it to handle; a real person confirms your time.";
const PAGE_URL = "https://redridgeagency.com/schedule";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: TITLE,
          description: DESCRIPTION,
          isPartOf: { "@id": "https://redridgeagency.com/#website" },
          about: { "@id": "https://www.redridgeai.com/#organization" },
        }),
      },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
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
          <div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft aria-hidden="true" className="size-4!" />
              Back home
            </Link>

            <div className="mt-8 max-w-xl">
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                Live demo
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Schedule your demo
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us a bit about your business and when works for you. We will walk through
                exactly what an agent or assistant looks like running inside it. Your request goes
                straight into our CRM, so a real person follows up, not a queue.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <LeadForm intent="demo" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
