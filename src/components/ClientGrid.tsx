import { ClientCard } from "@/components/ClientCard";
import { CLIENTS } from "@/data/site";

export function ClientGrid() {
  return (
    <section id="clients" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Social proof
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Companies We've Transformed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Operators who stopped losing revenue to missed calls, slow follow-up, and manual work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client) => (
            <ClientCard key={client.name} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
