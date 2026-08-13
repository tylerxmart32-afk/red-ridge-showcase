import type { AgentModel } from "@/data/site";

interface AgentModelCardProps {
  model: AgentModel;
}

export function AgentModelCard({ model }: AgentModelCardProps) {
  const Icon = model.icon;
  const edge = model.id === "agents" ? "bg-[image:var(--gradient-primary)]" : "bg-border";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--glow-primary)] sm:p-8">
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${edge}`} />

      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-accent/60 text-primary">
          <Icon aria-hidden="true" className="size-5!" />
        </span>
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {model.eyebrow}
        </p>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">{model.title}</h3>
      <p className="mt-2 text-sm font-medium text-primary">{model.positioning}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.summary}</p>

      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {model.capabilities.map((capability) => {
          const CapabilityIcon = capability.icon;
          return (
            <li key={capability.label} className="flex items-start gap-3 text-sm text-foreground">
              <CapabilityIcon aria-hidden="true" className="mt-0.5 size-4! shrink-0 text-primary" />
              <span>{capability.label}</span>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 border-t border-border pt-5 text-sm font-medium text-foreground">
        {model.outcome}
      </p>
    </article>
  );
}
