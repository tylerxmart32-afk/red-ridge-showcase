import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessagesSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/BrandMark";
import { CONTACT } from "@/data/site";

/** Section anchors on the home page, in page order. Inline at xl+, in the menu below that. */
const NAV_LINKS: { hash: string; label: string }[] = [
  { hash: "partnership", label: "Connect Helm" },
  { hash: "agents", label: "Agents vs Assistants" },
  { hash: "products", label: "Products" },
  { hash: "clients", label: "Clients" },
  { hash: "concepts", label: "Concept builds" },
  { hash: "services", label: "Services" },
  { hash: "contact", label: "Contact" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <Link
          to="/"
          className="shrink-0 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <BrandMark />
          <span className="sr-only">Red Ridge AI home</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <div className="hidden items-center gap-5 text-sm whitespace-nowrap text-muted-foreground xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button asChild size="sm" variant="ghost">
            <Link to="/" hash="talk">
              <MessagesSquare aria-hidden="true" />
              <span className="hidden sm:inline">Talk to our AI agent</span>
              <span className="sr-only sm:hidden">Talk to our AI agent</span>
            </Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={CONTACT.website}>Main site</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent xl:hidden"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border/70 bg-background xl:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <Link
                  to="/"
                  hash={link.hash}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 mb-3 flex flex-col gap-2">
              <Button asChild size="lg">
                <a href={CONTACT.demoHref}>Book a Free 15-Minute Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={CONTACT.website}>Main site: redridgeai.com</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
