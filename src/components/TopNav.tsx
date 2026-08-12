import { Link } from "@tanstack/react-router";
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
        <Link
          to="/"
          className="rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <BrandMark />
          <span className="sr-only">Red Ridge AI home</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link to="/" hash="services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link to="/" hash="clients" className="transition-colors hover:text-foreground">
              Clients
            </Link>
            <Link to="/" hash="contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
          <Button asChild size="sm">
            <a href={CONTACT.demoHref}>Schedule Demo</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
