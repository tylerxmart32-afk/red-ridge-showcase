import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/data/site";

export function ServicesGrid() {
  return (
    <section id="services" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            One team for the entire stack
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every engagement starts with the revenue leak, not the technology. Then we build only
            what closes it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
