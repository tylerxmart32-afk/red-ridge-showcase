# Red Ridge AI — Reference / Portfolio Page

A single dark-theme page at `/` built to convince SMB prospects: what you do, who you've done it for, and how to reach you.

## Design direction

- Background slate-950 (#030712), text white + slate-400, borders slate-700 with red-600 hover.
- Primary accent red-600 (#DC2626) with a deeper red glow used sparingly (hero halo, CTA gradient), not everywhere.
- Tight, technical typography — bold condensed headlines, generous section spacing, thin hairline dividers so it reads premium rather than templated.
- Dark mode only. Mobile-first from 375px; grids collapse 3 -> 2 -> 1.
- Subtle motion only: hover lifts, border/glow fades, short fade-up on section entry.

## Sections

1. **Nav** — Red Ridge wordmark + ridge mark, sticky with blur on scroll, single "Schedule Demo" CTA. Mobile: logo + compact CTA.
2. **Hero** — H1 "AI Infrastructure for Growing SMBs", subhead on revenue recovery ("Revenue recovery, not tech experiments"), two CTAs (Schedule Demo, Call (732) 639-5471), headshot placeholder framed in a red-edged panel, and stat strip: 24/7 automation, 5+ years, plus a third slot.
3. **Services grid** — 6 cards (Voice & Chat Agents, Website Development, AI Automations, Backend & Database, Social Media Management, SEO & Marketing Automation). Each: Lucide icon, title, one-line description, 3 checkmark features. Hover: border goes red, background lifts, icon tints.
4. **Companies We've Transformed** — clickable client cards: initials tile in the client's brand color, company name, 2–3 services, external link with arrow that slides in on hover. Ships with 3 placeholder clients (incl. "AC — Automotive Creations") in one data file so real clients drop in easily.
5. **Ready to Deploy?** — red-to-black gradient band, two buttons: Schedule Discovery, Send Requirements (mailto tyler@redridgeagency.com).
6. **Footer** — logo, services links, company info, phone/email, copyright.

## Technical notes

- Rewrites `src/routes/index.tsx`; sections extracted as named-export components under `src/components/` (TopNav, HeroSection, ServicesGrid, ServiceCard, ClientGrid, ClientCard, CtaBanner, SiteFooter) to stay under 150 lines each.
- Design tokens added to `src/styles.css` (slate-950 base, red primary, gradient + glow tokens) and applied through shadcn Button variants — no hardcoded color classes.
- Content lives in typed constants (`SERVICES`, `CLIENTS`) so copy and clients are edited in one place.
- Icons from lucide-react; Framer Motion for restrained fade-up/hover.
- Headshot is a styled placeholder block until you send the real photo; generated brand mark used for logo + favicon.
- Route `head()` metadata: title, description, og/twitter tags for Red Ridge AI.

## Open items

- Real client names, brand colors, services, and URLs to replace the three placeholders.
- Headshot image file.
- Booking URL for "Schedule Demo" / "Schedule Discovery" (defaults to mailto until provided).
