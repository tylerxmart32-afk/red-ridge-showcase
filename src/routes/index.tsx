import { createFileRoute } from "@tanstack/react-router";

import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ClientGrid } from "@/components/ClientGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Red Ridge AI — AI Infrastructure for Growing SMBs";
const DESCRIPTION =
  "Red Ridge AI builds voice agents, automations, websites, and backend systems that recover revenue for growing small and mid-sized businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Red Ridge AI",
          description: DESCRIPTION,
          telephone: "+1-732-639-5471",
          email: "tyler@redridgeagency.com",
          areaServed: "US",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <ServicesGrid />
        <ClientGrid />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
