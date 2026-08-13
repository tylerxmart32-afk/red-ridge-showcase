import { AGENT_COMPARISON_ROWS } from "@/data/site";

export function AgentComparisonStrip() {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-border">
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)]">
        <div className="hidden bg-surface px-5 py-3 md:block" aria-hidden="true" />
        <div className="hidden bg-surface px-5 py-3 text-xs font-medium tracking-[0.18em] text-primary uppercase md:block">
          AI Agents
        </div>
        <div className="hidden bg-surface px-5 py-3 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase md:block">
          Virtual Assistants
        </div>

        {AGENT_COMPARISON_ROWS.map((row) => (
          <div key={row.dimension} className="contents">
            <div className="bg-surface px-5 py-4 text-sm font-semibold text-foreground md:py-5">
              {row.dimension}
            </div>
            <div className="bg-surface px-5 py-4 text-sm text-muted-foreground md:py-5">
              <span className="mb-1 block text-xs font-medium tracking-[0.14em] text-primary uppercase md:hidden">
                AI Agents
              </span>
              {row.agents}
            </div>
            <div className="bg-surface px-5 py-4 text-sm text-muted-foreground md:py-5">
              <span className="mb-1 block text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase md:hidden">
                Virtual Assistants
              </span>
              {row.assistants}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
