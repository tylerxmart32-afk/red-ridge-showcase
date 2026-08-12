import { CalendarCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/site";

export function CtaBanner() {
  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div
          className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 text-center sm:px-12"
          style={{ background: "var(--gradient-cta)" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ready to Deploy?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Bring us the bottleneck. We will map the fix, scope the build, and tell you what it is
            worth before you commit a dollar.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={CONTACT.demoHref}>
                <CalendarCheck aria-hidden="true" />
                Schedule Discovery
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={CONTACT.requirementsHref}>
                <Mail aria-hidden="true" />
                Send Requirements
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
