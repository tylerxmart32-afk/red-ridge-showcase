import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { FlagshipProduct } from "@/data/site";

interface ProductCardProps {
  product: FlagshipProduct;
  wide?: boolean;
}

export function ProductCard({ product, wide = false }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-accent/50 hover:shadow-[var(--glow-primary)] ${wide ? "lg:p-8" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-accent/60 text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:text-primary">
          <Icon aria-hidden="true" className="size-5!" />
        </span>
        <Badge variant="outline" className="shrink-0 text-xs font-normal text-muted-foreground">
          {product.status}
        </Badge>
      </div>

      <p className="mt-5 text-xs font-medium tracking-[0.18em] text-primary uppercase">
        {product.category}
      </p>
      <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">
        {product.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>

      <ul
        className={`mt-5 space-y-2 border-t border-border pt-5 ${wide ? "sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2 sm:space-y-0" : ""}`}
      >
        {product.capabilities.map((capability) => (
          <li key={capability} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check aria-hidden="true" className="mt-0.5 size-4! shrink-0 text-primary" />
            <span>{capability}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {product.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
