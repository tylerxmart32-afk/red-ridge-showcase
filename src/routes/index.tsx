import { createFileRoute } from "@tanstack/react-router";

import { PortfolioBanner } from "@/components/PortfolioBanner";
import { TopNav } from "@/components/TopNav";
import { PartnershipSection } from "@/components/PartnershipSection";
import { HeroSection } from "@/components/HeroSection";
import { AgentsVsAssistants } from "@/components/AgentsVsAssistants";
import { AiAgentSection } from "@/components/AiAgentSection";
import { FlagshipProducts } from "@/components/FlagshipProducts";
import { ClientGrid } from "@/components/ClientGrid";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Red Ridge AI Portfolio — Client Work, Platforms & the Connect Helm Partnership";
const DESCRIPTION =
  "The portfolio of Red Ridge AI (main site: redridgeai.com): live AI voice agents, virtual assistants, platforms and websites built for NJ businesses, plus Connect Helm, our partnership with Watchman IT.";
const MAIN_SITE = "https://www.redridgeai.com";
const MAIN_ORG_ID = `${MAIN_SITE}/#organization`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://redridgeagency.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://redridgeagency.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://redridgeagency.com/#portfolio",
              name: "Red Ridge AI Portfolio",
              description: DESCRIPTION,
              url: "https://redridgeagency.com/",
              about: { "@id": MAIN_ORG_ID },
              isPartOf: { "@type": "WebSite", name: "Red Ridge AI", url: `${MAIN_SITE}/` },
              mainEntity: { "@id": MAIN_ORG_ID },
            },
            {
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": MAIN_ORG_ID,
              name: "Red Ridge AI",
              url: `${MAIN_SITE}/`,
              telephone: "+17326395471",
              email: "info@redridgeai.com",
              areaServed: { "@type": "State", name: "New Jersey" },
              address: { "@type": "PostalAddress", addressLocality: "Branchburg", addressRegion: "NJ", addressCountry: "US" },
              sameAs: ["https://redridgeagency.com", "https://connecthelm.com"],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Voice & Chat Agents" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Virtual Assistants" } },
              ],
            },
            {
              "@type": "Organization",
              "@id": "https://connecthelm.com/#organization",
              name: "Connect Helm Technology",
              url: "https://connecthelm.com",
              description: "Intelligent communications and secure infrastructure for New Jersey businesses, launched by Red Ridge AI and Watchman IT.",
              address: { "@type": "PostalAddress", addressLocality: "Branchburg", addressRegion: "NJ", addressCountry: "US" },
              founder: [{ "@id": MAIN_ORG_ID }, { "@type": "Organization", name: "Watchman IT", url: "https://watchmanit.com" }],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioBanner />
      <TopNav />
      <main>
        <HeroSection />
        <PartnershipSection />
        <AgentsVsAssistants />
        <AiAgentSection />
        <FlagshipProducts />
        <ClientGrid />
        <ServicesGrid />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
