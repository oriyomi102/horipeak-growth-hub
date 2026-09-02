import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrustBadges } from "@/components/site/TrustBadges";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services — HRP" },
      {
        name: "description",
        content:
          "Website design, online store design, email marketing, GMB optimization, social media branding and marketing, business promotion and book services.",
      },
      { property: "og:title", content: "Digital Services Designed for Real Business Growth" },
      {
        property: "og:description",
        content:
          "Choose a single service or combine several. Nine digital services built around measurable business goals.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Services"
        title="Digital Services Designed for Real Business Growth."
        text="Every business is at a different stage. You can start with one service that solves your most pressing problem, or combine several into a coordinated plan — whichever produces the better result for your goals."
        breadcrumb={[{ label: "Services", to: "/services" }]}
      />
      <TrustBadges />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            align="center"
            title="Nine services. One focus: making your business easier to choose."
            text="Each service below includes what it is, who it is for and what you receive. Open any service for the full breakdown."
          />

          <div className="mt-14 space-y-6">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <article className="grid gap-8 rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-lift md:grid-cols-[1.1fr_1fr] md:p-10">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                      <service.icon className="h-5 w-5 text-primary" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-foreground">{service.name}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {service.overview[0]}
                    </p>
                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        Who it's for
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {service.whoFor.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                    <Button asChild variant="hero" className="mt-7">
                      <Link to="/services/$slug" params={{ slug: service.slug }}>
                        Explore {service.name} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="rounded-xl bg-secondary/70 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      What you receive
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {service.whatYouGet.slice(0, 5).map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center shadow-card md:p-14">
            <p className="eyebrow justify-center">Not sure where to start?</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Not Sure What Your Business Needs?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us where your business is today and what you want it to look like in six months.
              We will tell you honestly which service would make the biggest difference first — even
              if it is not the most expensive one.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/contact">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
