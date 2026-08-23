import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { TrustBadges } from "@/components/site/TrustBadges";
import { PROJECTS, SERVICES, STATS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HoriPeak — Digital Marketing, Website Design & Local Visibility" },
      {
        name: "description",
        content:
          "HoriPeak helps local businesses, store owners, brands and authors get seen, trusted and chosen online — websites, stores, GMB, social media and book services.",
      },
      { property: "og:title", content: "HoriPeak — Get Seen, Trusted & Chosen Online" },
      {
        property: "og:description",
        content:
          "Website design, online stores, email marketing, GMB optimization, social media and book services for growing businesses.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const TRUST_POINTS = [
  "Professional Digital Solutions",
  "Customized for Your Business",
  "Clear Communication",
  "Results-Focused Strategy",
];

const WHY_POINTS = [
  {
    title: "Strategy Before Action",
    text: "We take time to understand your goals before recommending solutions.",
  },
  {
    title: "Professional Brand Presentation",
    text: "Your business deserves to look credible, modern and trustworthy.",
  },
  {
    title: "Solutions That Fit Your Business",
    text: "No unnecessary one-size-fits-all packages. We focus on what makes sense for your goals.",
  },
  {
    title: "Clear Communication",
    text: "You will understand what we are doing, why we are doing it and how it supports your business.",
  },
  {
    title: "Focused on Growth",
    text: "Our goal is not simply to complete a project — it is to help you create better opportunities online.",
  },
];

const STEPS = [
  { step: "01", title: "Discover", text: "We learn about your business, audience and goals." },
  { step: "02", title: "Plan", text: "We create a strategy and recommend the right digital solution." },
  { step: "03", title: "Build", text: "We design, optimize and develop your project professionally." },
  {
    step: "04",
    title: "Grow",
    text: "You launch with a stronger foundation for attracting and converting customers.",
  },
];

function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBadges />

      {/* Trust / intro */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Who We Are"
            title="Digital Solutions Built Around Your Growth."
            text="At HoriPeak, we believe every business deserves a professional online presence. We combine strategy, creativity and practical digital solutions to help businesses stand out, connect with the right audience and create opportunities for growth."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {TRUST_POINTS.map((point, i) => (
              <Reveal
                key={point}
                delay={i * 90}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm font-semibold leading-snug text-foreground">{point}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            align="center"
            title="Everything You Need to Grow Your Presence Online."
            text="Choose a single service or combine several — every engagement starts with what your business actually needs."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lift"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent transition-colors duration-300 group-hover:bg-primary">
                    <service.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-foreground">{service.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.cardBlurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why HoriPeak"
              title="Why Businesses Choose HoriPeak."
              text="We work like a partner, not a vendor. That means honest advice, clear scope and a focus on what actually moves your business forward."
            />
            <Reveal delay={200} className="mt-8">
              <Button asChild variant="hero" size="lg">
                <Link to="/about">
                  More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="space-y-3">
            {WHY_POINTS.map((point, i) => (
              <Reveal
                key={point.title}
                delay={i * 80}
                className="group flex gap-5 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-card"
              >
                <span className="font-display text-2xl font-bold text-primary/30 transition-colors duration-300 group-hover:text-primary">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            align="center"
            title="A Simple Process. A Stronger Digital Presence."
            text="Four clear stages, with review points along the way so you always know where your project stands."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 110} className="relative">
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-primary">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="surface-ink">
        <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="text-center lg:text-left">
              <p className="font-display text-5xl font-extrabold text-primary md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-ink-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Work"
              title="Work Designed to Make an Impact."
              text="A selection of sample projects showing how we approach structure, presentation and conversion."
              className="max-w-xl"
            />
            <Reveal>
              <Button asChild variant="quiet" size="lg">
                <Link to="/portfolio">
                  View Our Portfolio <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 6).map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 90}>
                <Link
                  to="/portfolio"
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <div className="surface-ink absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <span className="px-8 text-center font-display text-lg font-bold text-ink-foreground">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="eyebrow">{project.category}</p>
                    <h3 className="mt-3 text-base font-bold text-foreground">{project.service}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.result}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y bg-secondary/50">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by People Who Want to Grow."
            text="These are clearly marked placeholder testimonials shown while we collect verified client feedback."
          />
          <TestimonialSlider />
        </div>
      </section>

      <CTASection />
    </>
  );
}
