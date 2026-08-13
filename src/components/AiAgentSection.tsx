import { ArrowDownRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { AI_AGENT_SECTION } from "@/data/site";

// The live agent itself is the global ChatWidget mounted in __root.tsx --
// this section just pulls the visitor's attention to it right after the
// AI-agents-vs-virtual-assistants claim lands.
export function AiAgentSection() {
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

            <p className="mx-auto mt-4 max-w-md text-base font-medium text-foreground">
              {AI_AGENT_SECTION.prompt}
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-primary motion-safe:animate-bounce">
              <span className="text-sm font-semibold tracking-wide uppercase">
                It's waiting in the corner
              </span>
              <ArrowDownRight aria-hidden="true" className="size-5!" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
