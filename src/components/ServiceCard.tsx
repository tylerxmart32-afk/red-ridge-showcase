import { Check } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCard({ icon: Icon, title, description, features }: Service) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-accent/50 hover:shadow-[var(--glow-primary)]">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-accent/60 text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:text-primary">
        <Icon aria-hidden="true" className="size-5!" />
      </span>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-5 space-y-2 border-t border-border pt-5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check aria-hidden="true" className="mt-0.5 size-4! shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
