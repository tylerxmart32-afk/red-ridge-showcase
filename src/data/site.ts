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

export interface ServiceOutcome {
  value: string;
  label: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceDetail {
  headline: string;
  intro: string;
  problem: string;
  outcomes: ServiceOutcome[];
  process: ServiceStep[];
  deliverables: string[];
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: [string, string, string];
  detail: ServiceDetail;
}

export const SERVICES: Service[] = [
  {
    slug: "voice-and-chat-agents",
    icon: MessagesSquare,
    title: "Voice & Chat Agents",
    description:
      "Agents that answer every call and message, qualify the lead, and book the job before your competitor picks up.",
    features: ["24/7 call answering", "Lead qualification scripts", "CRM + calendar handoff"],
    detail: {
      headline: "Never lose another lead to a missed call",
      intro:
        "We deploy voice and chat agents trained on your services, pricing rules, and scheduling constraints. They answer instantly, ask the questions your best rep would ask, and put a qualified appointment on the calendar.",
      problem:
        "Most SMBs lose more revenue to unanswered calls and after-hours inquiries than to any marketing gap. The lead is already yours; it just has nowhere to land at 7pm on a Saturday.",
      outcomes: [
        { value: "100%", label: "Of inbound calls answered" },
        { value: "< 3s", label: "Average response time" },
        { value: "24/7", label: "Coverage with no headcount" },
      ],
      process: [
        {
          title: "Call audit",
          body: "We review call logs, missed-call volume, and the questions your team asks on every intake.",
        },
        {
          title: "Agent design",
          body: "Scripts, guardrails, escalation rules, and tone are built to match how your business actually sells.",
        },
        {
          title: "Systems handoff",
          body: "The agent writes to your CRM, books into your calendar, and texts the customer a confirmation.",
        },
        {
          title: "Tune and expand",
          body: "We review transcripts weekly, close gaps, and expand the agent into outbound follow-up.",
        },
      ],
      deliverables: [
        "Dedicated business phone number and routing",
        "Voice agent with human escalation path",
        "Website and SMS chat agent",
        "CRM, calendar, and notification integrations",
        "Transcript dashboard and monthly tuning",
      ],
    },
  },
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, conversion-focused sites built to turn traffic into booked revenue instead of bounce rate.",
    features: ["Sub-second load targets", "Conversion-first layouts", "Analytics wired in"],
    detail: {
      headline: "A site built to close, not to decorate",
      intro:
        "We design and build sites around a single question: what makes this visitor call, book, or buy? Everything else gets cut. The result loads fast, reads clearly on a phone, and gives you data on what is working.",
      problem:
        "Template sites look fine and convert poorly. Slow loads, buried contact paths, and copy written for the owner instead of the buyer quietly cost you the majority of your traffic.",
      outcomes: [
        { value: "90+", label: "Target Lighthouse performance" },
        { value: "2-4 wk", label: "Typical build timeline" },
        { value: "1", label: "Clear action per page" },
      ],
      process: [
        {
          title: "Positioning",
          body: "We define the buyer, the objection, and the one action every page should drive.",
        },
        {
          title: "Structure and copy",
          body: "Page architecture and real copy come before design so the layout serves the message.",
        },
        {
          title: "Build",
          body: "Modern, responsive, accessible front end with your booking and contact flows wired in.",
        },
        {
          title: "Measure",
          body: "Analytics and event tracking ship on day one so improvements are based on behavior.",
        },
      ],
      deliverables: [
        "Custom responsive design system",
        "Conversion-focused copy for every page",
        "Booking, contact, and lead capture flows",
        "Technical SEO foundation and sitemap",
        "Analytics, events, and reporting setup",
      ],
    },
  },
  {
    slug: "ai-automations",
    icon: Cog,
    title: "AI Automations",
    description:
      "Workflows that remove the manual steps between an inquiry, a quote, an invoice, and a paid job.",
    features: ["Quote and follow-up flows", "Document + data extraction", "Human-in-the-loop review"],
    detail: {
      headline: "Delete the admin work between inquiry and payment",
      intro:
        "We map the path a job takes through your business, find the manual handoffs, and automate them. Quotes go out same-day, follow-ups never get forgotten, and paperwork stops sitting in someone's inbox.",
      problem:
        "The bottleneck is rarely lead volume. It is the two days it takes to send a quote, the follow-up nobody made, and the invoice created by hand for the fourth time this week.",
      outcomes: [
        { value: "10+ hrs", label: "Admin hours recovered weekly" },
        { value: "Same day", label: "Quote turnaround" },
        { value: "0", label: "Follow-ups forgotten" },
      ],
      process: [
        {
          title: "Workflow mapping",
          body: "We document every step from first contact to paid invoice and time each one.",
        },
        {
          title: "Prioritize by dollars",
          body: "We automate the steps that cost the most revenue or hours first, not the easiest ones.",
        },
        {
          title: "Build with guardrails",
          body: "Human review sits wherever a mistake would be expensive. Everything else runs unattended.",
        },
        {
          title: "Monitor",
          body: "Failure alerts, run logs, and monthly reviews keep the automations honest as you grow.",
        },
      ],
      deliverables: [
        "Documented workflow map with time and cost estimates",
        "Automated quote, follow-up, and reminder sequences",
        "Document and data extraction pipelines",
        "Human-in-the-loop approval steps",
        "Monitoring, alerting, and run history",
      ],
    },
  },
  {
    slug: "backend-and-database",
    icon: Database,
    title: "Backend & Database",
    description:
      "The infrastructure underneath it all: clean schemas, secure access, and integrations that hold up.",
    features: ["Schema and API design", "Role-based access control", "Third-party integrations"],
    detail: {
      headline: "Infrastructure that still works at 10x the volume",
      intro:
        "Agents, automations, and portals are only as good as the data underneath them. We design the schema, lock down access, and build the APIs that let every tool in your stack share one source of truth.",
      problem:
        "Data scattered across spreadsheets, a CRM, and three SaaS tools makes every report a guess and every automation fragile. Fixing it later costs far more than building it right.",
      outcomes: [
        { value: "1", label: "Source of truth" },
        { value: "Row-level", label: "Security on every table" },
        { value: "99.9%", label: "Uptime target" },
      ],
      process: [
        {
          title: "Data model",
          body: "We model your actual entities: customers, jobs, quotes, assets, and how they relate.",
        },
        {
          title: "Access control",
          body: "Roles and row-level policies so staff, customers, and services see only what they should.",
        },
        {
          title: "APIs and integrations",
          body: "Typed endpoints and webhooks connect your CRM, accounting, and internal tools.",
        },
        {
          title: "Migration",
          body: "Existing records are cleaned and moved without downtime or lost history.",
        },
      ],
      deliverables: [
        "Documented database schema and migrations",
        "Role-based access and row-level security policies",
        "REST or RPC APIs with validation",
        "Third-party integrations and webhooks",
        "Backups, monitoring, and runbook",
      ],
    },
  },
  {
    slug: "social-media-management",
    icon: TrendingUp,
    title: "Social Media Management",
    description:
      "Consistent, on-brand output across channels without adding a headcount to your payroll.",
    features: ["Content calendar and drafts", "Automated scheduling", "Engagement reporting"],
    detail: {
      headline: "Show up every week without hiring for it",
      intro:
        "We build the content engine: a calendar tied to your sales cycle, drafts generated from your own jobs and expertise, and scheduling that runs whether or not anyone remembers to post.",
      problem:
        "Inconsistent posting kills trust with buyers who check your profile before they call. Most owners do not need an agency retainer; they need a system that keeps output moving.",
      outcomes: [
        { value: "12+", label: "Posts scheduled per month" },
        { value: "1 hr", label: "Of your time per month" },
        { value: "All", label: "Channels kept in sync" },
      ],
      process: [
        {
          title: "Voice and pillars",
          body: "We define three to five content pillars that map to what you actually want to sell.",
        },
        {
          title: "Capture system",
          body: "A simple pipeline turns job photos, wins, and questions into publishable content.",
        },
        {
          title: "Draft and approve",
          body: "You review a month of drafts in one sitting. Approved posts queue automatically.",
        },
        {
          title: "Report",
          body: "Monthly reporting on reach, engagement, and which pillars drive inbound.",
        },
      ],
      deliverables: [
        "Content pillars and brand voice guide",
        "Monthly content calendar with drafts",
        "Automated multi-channel scheduling",
        "Asset capture and intake workflow",
        "Monthly engagement and inbound report",
      ],
    },
  },
  {
    slug: "seo-and-marketing-automation",
    icon: Zap,
    title: "SEO & Marketing Automation",
    description:
      "Rank for what your buyers search, then nurture them automatically until they are ready to talk.",
    features: ["Technical SEO cleanup", "Local search visibility", "Email and SMS sequences"],
    detail: {
      headline: "Get found, then stay in front of them",
      intro:
        "We fix what is blocking you in search, build pages around the terms your buyers actually type, and put automated email and SMS sequences behind every lead so slow buyers still convert.",
      problem:
        "Ranking is only half the job. Most inquiries are not ready to buy the day they find you, and without nurture they go to whoever follows up in month three.",
      outcomes: [
        { value: "Local 3", label: "Map pack target" },
        { value: "90 days", label: "To measurable movement" },
        { value: "5-7", label: "Touches per nurture sequence" },
      ],
      process: [
        {
          title: "Technical audit",
          body: "Crawl, index, speed, and structured data issues get found and fixed first.",
        },
        {
          title: "Keyword and page plan",
          body: "We target commercial-intent and local terms, then build the pages to win them.",
        },
        {
          title: "Local presence",
          body: "Business profile, citations, and reviews are aligned so local search trusts you.",
        },
        {
          title: "Nurture",
          body: "Email and SMS sequences run behind every form fill and missed call until they book.",
        },
      ],
      deliverables: [
        "Technical SEO audit and remediation",
        "Keyword map and optimized service pages",
        "Local business profile and citation cleanup",
        "Email and SMS nurture sequences",
        "Ranking, traffic, and pipeline reporting",
      ],
    },
  },
];

export const SERVICE_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
);

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
