import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { AiAgentWidget } from "@/components/AiAgentWidget";
import { AI_AGENT_WIDGET } from "@/data/ai-agent-widget";
import { AI_AGENT_SECTION, CONTACT } from "@/data/site";

export function AiAgentSection() {
  const widgetConfigured = AI_AGENT_WIDGET.embedSnippet.trim().length > 0;

  return (
    <section
      id="talk"
      className="scroll-mt-20 border-b border-border/60 bg-background sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={AI_AGENT_SECTION.eyebrow}
          title={AI_AGENT_SECTION.title}
          lede={AI_AGENT_SECTION.lede}
          align="center"
        />

        <Reveal delay={80} className="mt-10">
          <div
            className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 text-center sm:px-12"
            style={{ background: "var(--gradient-cta)" }}
          >
            <span
              aria-hidden="true"
              className="mx-auto flex h-3 w-3 items-center justify-center rounded-full bg-primary"
            >
              <span className="h-3 w-3 animate-ping rounded-full bg-primary opacity-75" />
            </span>

            <p className="mt-4 text-sm font-medium text-foreground">
              {widgetConfigured
                ? "Look for the chat bubble in the corner of this page — that's a live AI agent."
                : AI_AGENT_SECTION.fallbackNote}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={widgetConfigured ? "#talk" : CONTACT.demoHref}>
                  {widgetConfigured ? AI_AGENT_SECTION.buttonLabel : "Schedule a live demo instead"}
                </a>
              </Button>
              {CONTACT.agentPhoneHref ? (
                <Button asChild size="lg" variant="outline">
                  <a href={CONTACT.agentPhoneHref}>
                    <PhoneCall aria-hidden="true" />
                    {AI_AGENT_SECTION.callLabel}
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>

        {/* GHL widget mounts here (or floats in the corner) -- see src/data/ai-agent-widget.ts */}
        <AiAgentWidget />
      </div>
    </section>
  );
}
