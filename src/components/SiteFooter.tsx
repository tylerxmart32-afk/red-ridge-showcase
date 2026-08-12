import { Phone, Mail } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { CONTACT, SERVICES } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI infrastructure for growing SMBs. {CONTACT.tagline}.
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold text-foreground">Services</h2>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone aria-hidden="true" className="size-4!" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail aria-hidden="true" className="size-4!" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">New Jersey, United States</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {CONTACT.company}. All rights reserved.
          </p>
          <p>Built and operated in-house.</p>
        </div>
      </div>
    </footer>
  );
}
