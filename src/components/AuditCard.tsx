import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AUDITS_ORDER_URL, type OneTimeAudit } from "@/data/site";

interface AuditCardProps {
  audit: OneTimeAudit;
}

/** Same card shell as ProductCard; the footer links out to ordering on redridgeai.com. */
export function AuditCard({ audit }: AuditCardProps) {
  const Icon = audit.icon;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-accent/50 hover:shadow-[var(--glow-primary)]">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-accent/60 text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:text-primary">
          <Icon aria-hidden="true" className="size-5!" />
        </span>
        <Badge variant="outline" className="shrink-0 text-xs font-normal text-muted-foreground">
          {audit.turnaround}
        </Badge>
      </div>

      <p className="mt-5 text-xs font-medium tracking-[0.18em] text-primary uppercase">
        {audit.category}
      </p>
      <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">{audit.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{audit.summary}</p>

      <ul className="mt-5 flex-1 space-y-2 border-t border-border pt-5">
        {audit.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check aria-hidden="true" className="mt-0.5 size-4! shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
        <p className="text-sm font-medium text-foreground">{audit.priceLine}</p>
        <a
          href={AUDITS_ORDER_URL}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-80 transition-opacity hover:opacity-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {audit.ctaLabel}
          <ArrowUpRight aria-hidden="true" className="size-4!" />
        </a>
      </div>
    </article>
  );
}
