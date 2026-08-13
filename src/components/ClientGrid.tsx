import { ClientCard } from "@/components/ClientCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CLIENTS } from "@/data/site";

export function ClientGrid() {
  return (
    <section
      id="clients"
      className="scroll-mt-20 border-b border-border/60 bg-background sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Social proof"
          title="Companies We've Transformed"
          lede="Operators who stopped losing revenue to missed calls, slow follow-up, and manual work. Every logo below is a link to their live site."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client, index) => (
            <Reveal key={client.name} delay={(index % 3) * 80}>
              <ClientCard {...client} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
