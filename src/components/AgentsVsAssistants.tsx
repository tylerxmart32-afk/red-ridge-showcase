import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { AgentModelCard } from "@/components/AgentModelCard";
import { AgentComparisonStrip } from "@/components/AgentComparisonStrip";
import { AGENT_SECTION, AGENT_MODELS } from "@/data/site";

export function AgentsVsAssistants() {
  return (
    <section id="agents" className="scroll-mt-20 border-b border-border/60 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={AGENT_SECTION.eyebrow}
          title={AGENT_SECTION.title}
          lede={AGENT_SECTION.lede}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {AGENT_MODELS.map((model, index) => (
            <Reveal key={model.id} delay={index * 120}>
              <AgentModelCard model={model} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <AgentComparisonStrip />
        </Reveal>

        <p className="mt-8 text-sm font-medium text-foreground">{AGENT_SECTION.closingLine}</p>
      </div>
    </section>
  );
}
