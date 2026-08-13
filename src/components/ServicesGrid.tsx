import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/site";

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-border/60 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Services"
          title="One team for the entire stack"
          lede="Every engagement starts with the revenue leak, not the technology. Then we build only what closes it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
