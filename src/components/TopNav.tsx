import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/BrandMark";
import { CONTACT } from "@/data/site";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <BrandMark />
          <span className="sr-only">Red Ridge AI home</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#clients" className="transition-colors hover:text-foreground">
              Clients
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <Button asChild size="sm">
            <a href={CONTACT.demoHref}>Schedule Demo</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
