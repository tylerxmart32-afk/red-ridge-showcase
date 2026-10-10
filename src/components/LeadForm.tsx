import { useState } from "react";
import { CalendarCheck, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, INDUSTRIES } from "@/data/site";

/**
 * Same intake workflow as redridgeai.com: POST to the Red Ridge lead-intake Worker, which
 * writes the person / company / note / callback task into the Red Ridge Twenty CRM (JARVIS),
 * logs it, sends the confirmation email and pings the team on Telegram.
 */
const LEAD_ENDPOINT =
  import.meta.env["VITE_LEAD_INTAKE_URL"] || "https://redridge-lead-intake.alfredagent.workers.dev/lead";

type Intent = "demo" | "book_call";

interface FormState {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  businessWebsite: string;
  preferredTime: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  industry: "",
  businessWebsite: "",
  preferredTime: "",
  message: "",
};

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-shadow focus:ring-2 focus:ring-ring focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";
const errorClass = "mt-1 text-xs text-destructive";

function utmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const out: Record<string, string> = {};
  const q = new URLSearchParams(window.location.search);
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"]) {
    const v = q.get(k);
    if (v) out[k] = v;
  }
  return out;
}

interface LeadFormProps {
  intent?: Intent;
  heading?: string;
  blurb?: string;
  submitLabel?: string;
}

export function LeadForm({
  intent = "demo",
  heading = "Request your live demo",
  blurb = "Tell us a little about your business. We confirm a time by email or text, usually the same business day.",
  submitLabel = "Request My Demo",
}: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [startedAt] = useState(() => Date.now());

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((err) => ({ ...err, [field]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Your name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (form.phone.trim() && !/^[\d\s()+.-]{7,}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      business_name: form.businessName.trim() || null,
      industry: form.industry || null,
      preferred_time: form.preferredTime.trim() || null,
      business_website: form.businessWebsite.trim() || null,
      message: form.message.trim() || null,
      intent,
      fax_number: honeypot,
      started_at: startedAt,
      page: typeof window !== "undefined" ? window.location.href : "",
      ...utmParams(),
    };

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setSubmitError(
        data.error ||
          `We couldn't send that just now. Please try again or call ${CONTACT.phone}.`,
      );
    } catch {
      setSubmitError(`We couldn't reach our server. Please try again or call ${CONTACT.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <CalendarCheck aria-hidden="true" className="mx-auto mb-4 size-10 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Request received.</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thanks, {form.name.split(" ")[0]}. We have your details and will reach out shortly to lock
          in your time. Need us sooner? Call{" "}
          <a href={CONTACT.phoneHref} className="text-primary hover:underline">
            {CONTACT.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
      <p className="mt-1 mb-6 text-sm text-muted-foreground">{blurb}</p>

      {/* Honeypot: hidden from people, filled by bots. Any value = silently dropped by the intake Worker. */}
      <div aria-hidden="true" className="absolute top-auto -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="lf-fax">Fax number</label>
        <input
          id="lf-fax"
          name="fax_number"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className={labelClass}>
            Name *
          </label>
          <input id="lf-name" className={inputClass} value={form.name} onChange={set("name")} autoComplete="name" />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="lf-email" className={labelClass}>
            Email *
          </label>
          <input
            id="lf-email"
            type="email"
            className={inputClass}
            value={form.email}
            onChange={set("email")}
            placeholder="you@business.com"
            autoComplete="email"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="lf-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="lf-phone"
            type="tel"
            className={inputClass}
            value={form.phone}
            onChange={set("phone")}
            placeholder="Best number to text or call"
            autoComplete="tel"
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="lf-business" className={labelClass}>
            Business name
          </label>
          <input
            id="lf-business"
            className={inputClass}
            value={form.businessName}
            onChange={set("businessName")}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="lf-industry" className={labelClass}>
            Industry
          </label>
          <select id="lf-industry" className={inputClass} value={form.industry} onChange={set("industry")}>
            <option value="">Select your industry</option>
            {INDUSTRIES.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lf-site" className={labelClass}>
            Business website
          </label>
          <input
            id="lf-site"
            type="url"
            inputMode="url"
            className={inputClass}
            value={form.businessWebsite}
            onChange={set("businessWebsite")}
            placeholder="yourbusiness.com"
            autoComplete="url"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lf-time" className={labelClass}>
            Preferred day and time
          </label>
          <input
            id="lf-time"
            className={inputClass}
            value={form.preferredTime}
            onChange={set("preferredTime")}
            placeholder="e.g. Tuesday afternoon, or any weekday after 4pm"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="lf-message" className={labelClass}>
          What do you want to see the AI handle?
        </label>
        <textarea
          id="lf-message"
          rows={4}
          className={inputClass}
          value={form.message}
          onChange={set("message")}
          placeholder="Missed calls while on jobs, slow follow-up, booking, quotes that go quiet..."
        />
      </div>

      {submitError && (
        <p className="mb-4 text-sm text-destructive" role="alert">
          {submitError}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? (
            <>
              <Loader2 aria-hidden="true" className="animate-spin" /> Sending...
            </>
          ) : (
            submitLabel
          )}
        </Button>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone aria-hidden="true" className="size-4" />
          Or call {CONTACT.phone}
        </a>
      </div>
    </form>
  );
}
