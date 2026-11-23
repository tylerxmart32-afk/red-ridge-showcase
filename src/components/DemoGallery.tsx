import { useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { DEMOS, DEMOS_SECTION, DEMO_CATEGORIES } from "@/data/site";
import type { DemoBuild, DemoCategory } from "@/data/site";

type Filter = "All" | DemoCategory;

const FILTERS: readonly Filter[] = ["All", ...DEMO_CATEGORIES];

function countFor(filter: Filter) {
  return filter === "All" ? DEMOS.length : DEMOS.filter((demo) => demo.category === filter).length;
}

function DemoCard({
  name,
  initials,
  brandColor,
  industry,
  location,
  description,
  url,
  builtBy,
}: DemoBuild) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--client-color": brandColor } as CSSProperties}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-accent/50 hover:shadow-[0_0_28px_-8px_var(--client-color)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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

      <p className="mt-5 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
        {industry}
      </p>
      <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        <li className="rounded-full border border-primary/40 px-2.5 py-1 text-xs text-foreground">
          Concept build (fictional)
        </li>
        <li className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground">
          Built by {builtBy}
        </li>
        <li className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground">
          {location}
        </li>
      </ul>

      <span className="mt-5 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary">
        View live demo ↗
      </span>
    </a>
  );
}

export function DemoGallery() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? DEMOS : DEMOS.filter((demo) => demo.category === active);

  return (
    <section
      id="concepts"
      className="scroll-mt-20 border-b border-border/60 bg-background sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={DEMOS_SECTION.eyebrow}
          title={`${DEMOS.length} demo sites, built end to end`}
          lede={DEMOS_SECTION.lede}
        />
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground/80">{DEMOS_SECTION.note}</p>

        <div
          role="group"
          aria-label="Filter concept builds by category"
          className="mt-8 flex flex-wrap gap-2"
        >
          {FILTERS.map((filter) => {
            const selected = filter === active;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(filter)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {filter}
                <span className={cn("ml-1.5 text-xs", selected ? "opacity-80" : "opacity-60")}>
                  {countFor(filter)}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((demo, index) => (
            <Reveal key={demo.url} delay={(index % 3) * 80}>
              <DemoCard {...demo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
