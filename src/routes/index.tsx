import { createFileRoute } from "@tanstack/react-router";

import { PortfolioBanner } from "@/components/PortfolioBanner";
import { TopNav } from "@/components/TopNav";
import { PartnershipSection } from "@/components/PartnershipSection";
import { HeroSection } from "@/components/HeroSection";
import { AgentsVsAssistants } from "@/components/AgentsVsAssistants";
import { AiAgentSection } from "@/components/AiAgentSection";
import { FlagshipProducts } from "@/components/FlagshipProducts";
import { ClientGrid } from "@/components/ClientGrid";
import { DemoGallery } from "@/components/DemoGallery";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { AUDITS_ORDER_URL, CONTACT, ONE_TIME_AUDITS, SERVICES } from "@/data/site";

const TITLE = "Red Ridge AI Portfolio: Live AI Agents for NJ Businesses";
const DESCRIPTION =
  "See 7 live client systems built by Red Ridge AI in Branchburg, NJ: 24/7 AI voice agents, virtual assistants and websites. Talk to our AI agent now.";
const SITE = "https://redridgeagency.com";
const MAIN_SITE = "https://www.redridgeai.com";
const MAIN_ORG_ID = `${MAIN_SITE}/#organization`;
const FOUNDER_ID = `${MAIN_SITE}/#founder`;
const SERVICE_AREA = { "@type": "State", name: "New Jersey" } as const;
// Same postal address redridgeai.com publishes for this @id, so the two domains never disagree.
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "971 US Highway 202 N, Suite N",
  addressLocality: "Branchburg",
  addressRegion: "NJ",
  postalCode: "08876",
  addressCountry: "US",
} as const;

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
              "@type": "WebSite",
              "@id": `${SITE}/#website`,
              name: "Red Ridge AI Portfolio",
              url: `${SITE}/`,
              publisher: { "@id": MAIN_ORG_ID },
            },
            {
              "@type": "CollectionPage",
              "@id": `${SITE}/#portfolio`,
              name: "Red Ridge AI Portfolio",
              description: DESCRIPTION,
              url: `${SITE}/`,
              about: { "@id": MAIN_ORG_ID },
              isPartOf: { "@id": `${SITE}/#website` },
              mainEntity: { "@id": MAIN_ORG_ID },
            },
            {
              "@type": "Person",
              "@id": FOUNDER_ID,
              name: "Tyler Martin",
              jobTitle: "Founder",
              worksFor: { "@id": MAIN_ORG_ID },
            },
            {
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": MAIN_ORG_ID,
              name: CONTACT.company,
              description: CONTACT.tagline,
              url: `${MAIN_SITE}/`,
              telephone: CONTACT.phoneHref.replace("tel:", ""),
              email: CONTACT.email,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: CONTACT.phoneHref.replace("tel:", ""),
                email: CONTACT.email,
                contactType: "sales",
                areaServed: SERVICE_AREA,
                availableLanguage: "English",
              },
              areaServed: SERVICE_AREA,
              address: ADDRESS,
              founder: { "@id": FOUNDER_ID },
              // sameAs is for the entity's own profiles (LinkedIn, Google Business Profile...).
              // Our other domains are not profiles of it, so none are listed until real ones exist.
              knowsAbout: [
                "AI consulting for small and midsize businesses",
                ...SERVICES.map((service) => service.title),
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI consulting and implementation services",
                itemListElement: SERVICES.map((service) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    serviceType: service.title,
                    description: service.description,
                    url: `${SITE}/services/${service.slug}`,
                    provider: { "@id": MAIN_ORG_ID },
                    areaServed: SERVICE_AREA,
                  },
                })),
              },
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
            // One-time audits: listed as Services only (no Offer/price -- quoted at order).
            ...ONE_TIME_AUDITS.map((audit) => ({
              "@type": "Service",
              "@id": `${MAIN_SITE}/audits#${audit.id}`,
              name: audit.name,
              serviceType: audit.name,
              description: audit.summary,
              url: AUDITS_ORDER_URL,
              provider: { "@id": MAIN_ORG_ID },
              areaServed: { "@type": "State", name: "New Jersey" },
            })),
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
        <DemoGallery />
        <ServicesGrid />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
