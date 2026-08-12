import { ArrowUpRight } from "lucide-react";
import type { Client } from "@/data/site";

export function ClientCard({ name, initials, brandColor, services, url }: Client) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    >
      <div className="flex items-start justify-between">
        <span
          aria-hidden="true"
          className="inline-flex h-14 w-14 items-center justify-center rounded-xl text-lg font-semibold text-white opacity-85 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: brandColor }}
        >
          {initials}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-5! translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100"
        />
      </div>

      <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">{name}</h3>

      <ul className="mt-3 flex flex-wrap gap-2">
        {services.map((service) => (
          <li
            key={service}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground"
          >
            {service}
          </li>
        ))}
      </ul>

      <span className="mt-5 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary">
        Visit site
      </span>
    </a>
  );
}
