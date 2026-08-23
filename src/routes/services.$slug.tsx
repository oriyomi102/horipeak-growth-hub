import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { getService, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { name: service.name, description: service.seoDescription, headline: service.bannerHeadline };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable — HoriPeak" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name} — HoriPeak`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.name,
            description: loaderData.description,
            provider: { "@type": "Organization", name: "HoriPeak" },
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) return null;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageBanner
        eyebrow={service.name}
        title={service.bannerHeadline}
        text={service.cardBlurb}
        breadcrumb={[
          { label: "Services", to: "/services" },
        ]}
      />

      {/* Overview */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Service Overview" title={`Why ${service.name.toLowerCase()} matters.`} />
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {service.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What you get + who for */}
      <section className="section-y bg-secondary/50">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
            <p className="eyebrow">
              <Sparkles className="h-4 w-4" /> What You Get
            </p>
            <h2 className="mt-4 text-2xl font-bold text-foreground">Included in this service</h2>
            <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {service.whatYouGet.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="surface-ink rounded-2xl p-8 shadow-lift md:p-10">
            <p className="eyebrow">
              <Users className="h-4 w-4" /> Who It's For
            </p>
            <h2 className="mt-4 text-2xl font-bold text-ink-foreground">Ideal for</h2>
            <ul className="mt-7 space-y-4">
              {service.whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Process"
            align="center"
            title="How this project runs, step by step."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 100}
                className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5"
              >
                <span className="font-display text-sm font-bold tracking-[0.2em] text-primary">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why HoriPeak */}
      <section className="section-y bg-secondary/50">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Why HoriPeak"
            title="What you can expect from working with us."
            text="Practical delivery, clear reporting and advice that respects your budget and your time."
          />
          <div className="space-y-4">
            {service.whyPoints.map((point, i) => (
              <Reveal
                key={point}
                delay={i * 90}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <p className="text-sm font-medium leading-relaxed text-foreground">{point}</p>
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
            title="Questions we get asked most."
            text="Something not covered here? Ask us directly — we answer plainly."
          />
          <FaqAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <SectionHeading eyebrow="Related Services" title="Often combined with" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card"
                >
                  <s.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 text-base font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.cardBlurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="surface-ink">
        <div className="container-page section-y text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-ink-foreground md:text-[2.6rem]">
              Ready to Get Started?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Tell us about your business and what you want {service.name.toLowerCase()} to achieve.
              We will reply with a clear recommendation and next steps.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/contact">
                Request This Service <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
