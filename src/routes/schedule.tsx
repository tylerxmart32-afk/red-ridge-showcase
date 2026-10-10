import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { TopNav } from "@/components/TopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";

const TITLE = "Schedule a Demo — Red Ridge AI";
const DESCRIPTION =
  "Book time with Red Ridge AI to walk through what an AI agent or virtual assistant would look like running inside your business.";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
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
