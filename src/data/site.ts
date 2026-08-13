import {
  MessagesSquare,
  Globe,
  Cog,
  Database,
  TrendingUp,
  Zap,
  Headset,
  MoonStar,
  PhoneIncoming,
  MessageCircle,
  ClipboardCheck,
  CalendarClock,
  PhoneForwarded,
  NotebookPen,
  RefreshCw,
  LayoutDashboard,
  BellRing,
  BedDouble,
  Building2,
  Bot,
  ShieldCheck,
  Sparkles,
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

export const HERO = {
  eyebrow: CONTACT.tagline,
  headline: "AI Infrastructure for",
  headlineAccent: "Growing SMBs",
  subhead:
    "We build the systems that recover the revenue you are already losing — missed calls, cold leads, and manual work that never gets done. Deployed in weeks, owned by you, not another pilot project that dies in a slide deck.",
} as const;

export const HERO_STATS: { value: string; label: string }[] = [
  { value: "24/7", label: "Automated coverage" },
  { value: "5+", label: "Years shipping AI systems" },
  { value: "6", label: "Live client systems" },
  { value: "4", label: "Flagship platforms built" },
];

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
    slug: "virtual-assistants",
    icon: MoonStar,
    title: "Virtual Assistants",
    description:
      "Autonomous operators that work your CRM and dashboard overnight, so you stop logging in to run your own business.",
    features: ["Autonomous CRM data entry", "Scheduled owner reports", "Reminders, not logins"],
    detail: {
      headline: "Stop logging into your own CRM",
      intro:
        "We deploy an autonomous assistant that lives inside your CRM and dashboard — pulling and updating records, running your reports, and surfacing exactly what you need to know. It works while you sleep, not while you watch it.",
      problem:
        "Owners lose hours a week to manual CRM upkeep: updating pipeline stages, chasing stale records, and pulling reports nobody automated. That time is never billable, and it never stops needing to happen.",
      outcomes: [
        { value: "0", label: "Manual CRM logins required" },
        { value: "24/7", label: "Background operation" },
        { value: "Daily", label: "Owner reminders and reports" },
      ],
      process: [
        {
          title: "CRM and dashboard audit",
          body: "We map every recurring manual task in your CRM and dashboard, and what it costs you weekly.",
        },
        {
          title: "Assistant design",
          body: "Data entry, pipeline hygiene, and reporting rules are built to match how you actually run the business.",
        },
        {
          title: "Systems handoff",
          body: "The assistant runs as its own authenticated user, pulling and creating records on schedule or on trigger.",
        },
        {
          title: "Reminders and reporting",
          body: "You get owner-facing reminders and reports instead of a login prompt — the assistant does the logging in.",
        },
      ],
      deliverables: [
        "Autonomous CRM data entry and cleanup",
        "Scheduled owner reports and dashboards",
        "Reminder delivery for what actually needs you",
        "CRM and third-party integrations",
        "Monitoring and monthly tuning",
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
    features: [
      "Quote and follow-up flows",
      "Document + data extraction",
      "Human-in-the-loop review",
    ],
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
  industry: string;
  outcome: string;
  services: string[];
  url: string;
}

export const CLIENTS: Client[] = [
  {
    name: "Automotive Creations",
    initials: "AC",
    brandColor: "#1D4ED8",
    industry: "Auto detailing & restoration",
    outcome: "24/7 voice agent answers every call and books jobs straight to the calendar.",
    services: ["Voice Agents", "Website Development", "SEO"],
    url: "https://automotivecreations.lovable.app",
  },
  {
    name: "Sharpen it",
    initials: "SI",
    brandColor: "#7C3AED",
    industry: "Home & lifestyle services",
    outcome: "AI automations and SEO rebuilt the lead pipeline from the ground up.",
    services: ["AI Automations", "SEO", "Website Development"],
    url: "https://sharpenit.lovable.app",
  },
  {
    name: "Marshal Holland",
    initials: "MH",
    brandColor: "#2563EB",
    industry: "Nonprofit / community org",
    outcome: "Voice agent plus a backend built to handle real donor and volunteer traffic.",
    services: ["Voice Agents", "Backend & Database"],
    url: "https://www.loveprovokingchange.org",
  },
  {
    name: "Hydro Pros",
    initials: "HP",
    brandColor: "#0891B2",
    industry: "Water treatment & filtration",
    outcome: "Chat agent qualifies inbound leads and hands off warm, ready to close.",
    services: ["Chat Agents", "Marketing Automation"],
    url: "https://hydropros-nj.com",
  },
  {
    name: "Kingsmen Enterprise",
    initials: "KE",
    brandColor: "#059669",
    industry: "Professional services",
    outcome: "Social presence and internal automations running without added headcount.",
    services: ["Social Media Management", "AI Automations"],
    url: "https://kingsmenent.lovable.app",
  },
  {
    name: "Torney Media Agency",
    initials: "TM",
    brandColor: "#DB2777",
    industry: "Marketing agency",
    outcome: "Full SEO and marketing automation stack behind a rebuilt web presence.",
    services: ["SEO & Marketing Automation", "Website Development"],
    url: "https://torneymedia.lovable.app",
  },
];

// ── AI Agents vs. Virtual Assistants ────────────────────────────────────────

export const AGENT_SECTION = {
  eyebrow: "How it works",
  title: "AI Agents vs. Virtual Assistants",
  lede: "Two different products, working two different jobs. Most Red Ridge clients end up running both — one facing your customers, one running your business behind the scenes.",
  closingLine: "Together: nothing inbound is missed, and nothing internal waits on you.",
} as const;

export interface AgentCapability {
  icon: LucideIcon;
  label: string;
}

export interface AgentModel {
  id: "agents" | "assistants";
  eyebrow: string;
  title: string;
  positioning: string;
  summary: string;
  icon: LucideIcon;
  capabilities: AgentCapability[];
  outcome: string;
}

export const AGENT_MODELS: readonly [AgentModel, AgentModel] = [
  {
    id: "agents",
    eyebrow: "Front line",
    title: "AI Agents",
    positioning: "Work for your business, in front of your customers.",
    summary:
      "The moment a call, text, or email comes in, an agent picks it up — instantly, every time, day or night.",
    icon: Headset,
    capabilities: [
      { icon: PhoneIncoming, label: "Answers every inbound call, 24/7" },
      { icon: MessageCircle, label: "Answers SMS and email in the same voice" },
      { icon: ClipboardCheck, label: "Qualifies the lead against your criteria" },
      { icon: CalendarClock, label: "Books the appointment on your calendar" },
      { icon: PhoneForwarded, label: "Warm-transfers hot callers to a human" },
    ],
    outcome: "Nobody who contacts your company reaches a voicemail again.",
  },
  {
    id: "assistants",
    eyebrow: "Back office",
    title: "Virtual Assistants",
    positioning: "Work inside your business, while you're not even logged in.",
    summary:
      "An assistant runs autonomously in the background — pulling and updating your CRM, running your dashboard, working overnight.",
    icon: MoonStar,
    capabilities: [
      { icon: NotebookPen, label: "Pulls and creates records in your CRM" },
      { icon: RefreshCw, label: "Keeps pipelines and data up to date" },
      { icon: LayoutDashboard, label: "Operates your company dashboard" },
      { icon: BellRing, label: "Sends you the reminders that matter" },
      { icon: BedDouble, label: "Works overnight, unattended" },
    ],
    outcome: "You stop logging into your own CRM. You send your assistant instead.",
  },
] as const;

export interface AgentComparisonRow {
  dimension: string;
  agents: string;
  assistants: string;
}

export const AGENT_COMPARISON_ROWS: AgentComparisonRow[] = [
  {
    dimension: "Where it works",
    agents: "Phone, SMS, and email — in front of your customer",
    assistants: "Inside your CRM and dashboards",
  },
  {
    dimension: "When it works",
    agents: "The instant contact comes in, 24/7",
    assistants: "On a schedule, or continuously overnight",
  },
  {
    dimension: "Who it talks to",
    agents: "Your customers and leads",
    assistants: "You — the owner, via reminders and reports",
  },
  {
    dimension: "What it replaces",
    agents: "A missed call or a slow reply",
    assistants: "You logging in to manage the CRM yourself",
  },
];

// ── Flagship products ────────────────────────────────────────────────────────

export const PRODUCTS_SECTION = {
  eyebrow: "What we build",
  title: "Complex products, not just chatbots",
  lede: "A single voice agent is the entry point. Here's the infrastructure behind it — built and running today.",
} as const;

export type ProductStatus = "Live in production" | "In build" | "Available to build";

export interface FlagshipProduct {
  id: string;
  name: string;
  category: string;
  summary: string;
  capabilities: string[];
  stack: string[];
  status: ProductStatus;
  icon: LucideIcon;
  featured: boolean;
}

export const FLAGSHIP_PRODUCTS: FlagshipProduct[] = [
  {
    id: "nexus",
    name: "NEXUS",
    category: "White-label multi-tenant agent platform",
    summary:
      "Every client gets an isolated AI agent, a branded dashboard, and two-way CRM sync out to their own system — one platform, many businesses, no data crossing streams.",
    capabilities: [
      "Per-client isolated agent + Slack workspace",
      "Branded client dashboard",
      "Two-way sync out to Salesforce or CRM",
      "Usage metering per tenant",
    ],
    stack: ["Salesforce", "Slack", "Multi-tenant infra"],
    status: "Live in production",
    icon: Building2,
    featured: true,
  },
  {
    id: "jarvis",
    name: "JARVIS",
    category: "Autonomous CRM operator agent",
    summary:
      "Runs a client's CRM directly, over Telegram — builds and activates workflow automations without the owner ever opening the CRM themselves.",
    capabilities: [
      "Builds and activates CRM workflows",
      "Runs as its own authenticated CRM user",
      "Cross-channel memory of every conversation",
      "Reachable entirely from Telegram",
    ],
    stack: ["Twenty CRM", "Telegram", "Claude API"],
    status: "Live in production",
    icon: Bot,
    featured: true,
  },
  {
    id: "friday",
    name: "FRIDAY",
    category: "Automated security scanning + pentest engine",
    summary:
      "Runs a real security scan and penetration test against a prospect's live website, then hands back a branded, readable report — a working credibility hook, not a slide.",
    capabilities: [
      "SSL, headers, and DNS security scan",
      "Multi-agent penetration test engine",
      "Branded PDF report generation",
      "Runs from Telegram on demand",
    ],
    stack: ["Python", "Docker sandbox", "Claude API"],
    status: "Live in production",
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: "pulse",
    name: "PULSE",
    category: "Multi-platform content engine",
    summary:
      "One input in, ready-to-post content out — across seven platforms at once, so a real social presence doesn't cost a headcount.",
    capabilities: [
      "One Claude call generates 7 platform captions",
      "Google Business Profile, Facebook, Instagram, Threads, LinkedIn, TikTok, YouTube",
      "Rotating video library for organic content",
      "Fully automated scheduling",
    ],
    stack: ["Claude API", "Sora video", "7 social APIs"],
    status: "Live in production",
    icon: Sparkles,
    featured: true,
  },
];

// ── Talk to our AI agent ─────────────────────────────────────────────────────

export const AI_AGENT_SECTION = {
  eyebrow: "Live demo",
  title: "Talk to our AI agent right now",
  lede: "Don't take our word for what an AI agent can do. The one below is the same kind we build for clients — start a real conversation with it.",
  buttonLabel: "Start a conversation",
} as const;
