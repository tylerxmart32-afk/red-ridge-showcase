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
  // Leave empty to hide the "Or call the agent" CTA in AiAgentSection.
  agentPhone: "",
  agentPhoneHref: "",
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
    icon: MoonStar,
    title: "Virtual Assistants",
    description:
      "Autonomous operators that work your CRM and dashboard overnight, so you stop logging in to run your own business.",
    features: ["Autonomous CRM data entry", "Scheduled owner reports", "Reminders, not logins"],
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
    features: [
      "Quote and follow-up flows",
      "Document + data extraction",
      "Human-in-the-loop review",
    ],
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
  callLabel: "Or call the agent",
  fallbackNote:
    "The live agent widget is being wired in — check back shortly, or use the CTAs above.",
} as const;
