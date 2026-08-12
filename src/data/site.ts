import {
  MessagesSquare,
  Globe,
  Cog,
  Database,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  company: "Red Ridge AI",
  tagline: "Revenue recovery, not tech experiments",
  phone: "(732) 639-5471",
  phoneHref: "tel:+17326395471",
  email: "tyler@redridgeagency.com",
  emailHref: "mailto:tyler@redridgeagency.com",
  demoHref: "mailto:tyler@redridgeagency.com?subject=Schedule%20a%20demo",
  requirementsHref: "mailto:tyler@redridgeagency.com?subject=Project%20requirements",
} as const;

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: [string, string, string];
}

export const SERVICES: Service[] = [
  {
    icon: MessagesSquare,
    title: "Voice & Chat Agents",
    description:
      "Agents that answer every call and message, qualify the lead, and book the job before your competitor picks up.",
    features: ["24/7 call answering", "Lead qualification scripts", "CRM + calendar handoff"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, conversion-focused sites built to turn traffic into booked revenue instead of bounce rate.",
    features: ["Sub-second load targets", "Conversion-first layouts", "Analytics wired in"],
  },
  {
    icon: Cog,
    title: "AI Automations",
    description:
      "Workflows that remove the manual steps between an inquiry, a quote, an invoice, and a paid job.",
    features: ["Quote and follow-up flows", "Document + data extraction", "Human-in-the-loop review"],
  },
  {
    icon: Database,
    title: "Backend & Database",
    description:
      "The infrastructure underneath it all: clean schemas, secure access, and integrations that hold up.",
    features: ["Schema and API design", "Role-based access control", "Third-party integrations"],
  },
  {
    icon: TrendingUp,
    title: "Social Media Management",
    description:
      "Consistent, on-brand output across channels without adding a headcount to your payroll.",
    features: ["Content calendar and drafts", "Automated scheduling", "Engagement reporting"],
  },
  {
    icon: Zap,
    title: "SEO & Marketing Automation",
    description:
      "Rank for what your buyers search, then nurture them automatically until they are ready to talk.",
    features: ["Technical SEO cleanup", "Local search visibility", "Email and SMS sequences"],
  },
];

export interface Client {
  name: string;
  initials: string;
  brandColor: string;
  services: string[];
  url: string;
}

export const CLIENTS: Client[] = [
  {
    name: "Automotive Creations",
    initials: "AC",
    brandColor: "#1D4ED8",
    services: ["Voice Agents", "Website Development", "SEO"],
    url: "https://automotivecreations.lovable.app",
  },
  {
    name: "Sharpen it",
    initials: "SI",
    brandColor: "#7C3AED",
    services: ["AI Automations", "SEO", "Website Development"],
    url: "https://sharpenit.lovable.app",
  },
  {
    name: "Marshal Holland",
    initials: "MH",
    brandColor: "#2563EB",
    services: ["Voice Agents", "Backend & Database"],
    url: "https://www.loveprovokingchange.org",
  },
  {
    name: "Hydro Pros",
    initials: "HP",
    brandColor: "#0891B2",
    services: ["Chat Agents", "Marketing Automation"],
    url: "https://hydropros-nj.com",
  },
  {
    name: "Kingsmen Enterprise",
    initials: "KE",
    brandColor: "#059669",
    services: ["Social Media Management", "AI Automations"],
    url: "https://kingsmenent.lovable.app",
  },
  {
    name: "Torney Media Agency",
    initials: "TM",
    brandColor: "#DB2777",
    services: ["SEO & Marketing Automation", "Website Development"],
    url: "https://torneymedia.lovable.app",
  },
];
