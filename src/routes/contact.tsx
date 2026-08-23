import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Facebook, Instagram, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrustBadges } from "@/components/site/TrustBadges";
import { BUDGET_OPTIONS, SERVICES, SOCIAL_LINKS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HoriPeak — Let's Talk About Your Next Project" },
      {
        name: "description",
        content:
          "Tell HoriPeak about your business and project. Request a quote, book a free consultation or ask a question — we reply within one working day.",
      },
      { property: "og:title", content: "Let's Talk About Your Next Project" },
      {
        property: "og:description",
        content: "Request a quote or book a free consultation with HoriPeak.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-6.99L4.66 22H1.4l8.02-9.166L1 2h7.02l4.844 6.4L18.244 2Zm-1.2 18h1.86L7.04 3.9H5.05L17.044 20Z" />
    </svg>
  );
}

const socialIcons = { Facebook, Instagram, "X / Twitter": XIcon } as const;

const CONTACT_FAQS = [
  {
    q: "How quickly will I hear back?",
    a: "We reply to every enquiry within one working day, usually sooner. If your project is time-sensitive, mention the deadline in your message.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. The first conversation is about understanding your goals and telling you honestly whether we are the right fit. There is no obligation.",
  },
  {
    q: "Do you work with small budgets?",
    a: "We work with a range of budgets and will tell you clearly what is realistic at your level rather than overpromising.",
  },
  {
    q: "Can we combine several services?",
    a: "Often that is the better approach. We will recommend a sensible order so spend is staged rather than spent all at once.",
  },
  {
    q: "Do you work with clients outside my country?",
    a: "Yes. We work remotely with clients in different time zones and schedule calls around your availability.",
  },
];

const STEPS = [
  { title: "You send your details", text: "Use the form or email us directly with a short description of your project." },
  { title: "We reply within one working day", text: "Usually with a few clarifying questions so we understand the goal properly." },
  { title: "Free consultation call", text: "A short conversation about your business, timeline and budget." },
  { title: "Proposal and next steps", text: "A clear written recommendation with scope, timeline and cost — no obligation." },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Let's Talk About Your Next Project."
        text="Tell us what you are trying to achieve. We will reply with honest advice and a clear recommendation — whether or not you end up working with us."
        breadcrumb={[{ label: "Contact", to: "/contact" }]}
      />
      <TrustBadges />

      {/* Intro */}
      <section className="pt-20 md:pt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get in Touch"
            align="center"
            title="Every good project starts with a conversation."
            text="Share as much or as little detail as you have. Even a rough idea is enough for us to give you a useful first answer."
          />
        </div>
      </section>

      {/* Form + quick contact */}
      <section className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
            <h2 className="text-2xl font-bold text-foreground">Project enquiry form</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              All fields marked with * are required. Your details are never shared with third
              parties.
            </p>
            <form
              className="mt-8 grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const honeypot = (form.elements.namedItem("company_website") as HTMLInputElement)
                  ?.value;
                if (honeypot) return;
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  form.reset();
                  setService("");
                  setBudget("");
                  toast.success("Thanks — your enquiry is in. We'll reply within one working day.");
                }, 700);
              }}
            >
              {/* spam protection */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" required autoComplete="name" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" name="businessName" autoComplete="organization" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed *</Label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger id="service" className="h-11">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s.slug} value={s.name}>
                        {s.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Project Budget</Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger id="budget" className="h-11">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_OPTIONS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Tell Us About Your Project *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What are you trying to achieve, and by when?"
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" disabled={submitting}>
                  {submitting ? "Sending…" : "Send My Enquiry"} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="surface-ink rounded-2xl p-8 shadow-lift">
              <h2 className="text-xl font-bold text-ink-foreground">Quick contact options</h2>
              <a
                href="mailto:hello@horipeak.com"
                className="mt-6 flex items-center gap-3 rounded-xl border border-ink-foreground/15 p-4 text-sm text-ink-foreground transition-colors hover:border-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                hello@horipeak.com
              </a>
              <div className="mt-4 space-y-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.name as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-ink-foreground/15 p-4 text-sm text-ink-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      Message us on {social.name}
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={120} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg font-bold text-foreground">Response time</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We reply to every enquiry within one working day. Consultations are scheduled around
                your availability, including evenings where needed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Working with HoriPeak */}
      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Happens Next"
            align="center"
            title="Working With HoriPeak"
            text="Here is exactly what happens after you press send — no mystery, no pressure."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 100}
                className="h-full rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <span className="font-display text-sm font-bold tracking-[0.2em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Before you get in touch."
            text="A few answers to the questions we hear most often from new clients."
          />
          <FaqAccordion faqs={CONTACT_FAQS} />
        </div>
      </section>

      <section className="surface-ink">
        <div className="container-page section-y text-center">
          <Reveal className="mx-auto max-w-2xl">
            <MessageSquare className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-6 text-3xl font-bold text-ink-foreground md:text-[2.6rem]">
              Talk to HoriPeak today.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              One short conversation is usually enough to know whether we can help — and what would
              make the biggest difference to your business first.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <a href="mailto:hello@horipeak.com">
                Email hello@horipeak.com <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
