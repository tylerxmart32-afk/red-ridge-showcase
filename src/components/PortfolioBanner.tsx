import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "@/data/site";

/** Thin bar above the nav: this domain is the portfolio, the main site is redridgeai.com. */
export function PortfolioBanner() {
  return (
    <div className="border-b border-primary/30 bg-primary/10 text-foreground">
      <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2 text-center text-xs sm:px-8 sm:text-sm">
        <span className="font-medium">{PORTFOLIO.notice}</span>
        <a
          href={PORTFOLIO.mainSiteHref}
          className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 transition-colors hover:underline"
        >
          {PORTFOLIO.mainSiteLabel}
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </p>
    </div>
  );
}
