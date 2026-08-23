import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Star } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { TrustBadges } from "@/components/site/TrustBadges";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — HoriPeak" },
      {
        name: "description",
        content:
          "Feedback from businesses and authors working with HoriPeak. Placeholder testimonials are clearly marked until verified client reviews are published.",
      },
      { property: "og:title", content: "Real Feedback. Real Client Experiences." },
      {
        property: "og:description",
        content: "Read what working with HoriPeak looks like from the client side.",
      },
      { property: "og:url", content: "/testimonials" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Testimonials"
        title="Real Feedback. Real Client Experiences."
        text="We only publish feedback clients have actually given us. Everything shown below is clearly marked as an editable placeholder until verified reviews replace it."
        breadcrumb={[{ label: "Testimonials", to: "/testimonials" }]}
      />
      <TrustBadges />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Featured"
            title="What working with HoriPeak feels like."
            text="Clear communication, honest scope and work that holds up. That is the standard we ask to be judged against."
          />
          <TestimonialSlider />
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Written Feedback"
            align="center"
            title="Placeholder client testimonials."
            text="Replace each card below with a real quote as clients share their experience."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.business + i}
                delay={(i % 3) * 90}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={cn("h-4 w-4", s < t.rating ? "fill-primary text-primary" : "text-border")}
                    />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.business} · {t.service}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Video Feedback"
            align="center"
            title="Video testimonials coming soon."
            text="These slots are reserved for short client videos. Each one is an editable placeholder."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Website Design client", "Local Business client", "Author client"].map((label, i) => (
              <Reveal
                key={label}
                delay={i * 100}
                className="surface-ink flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl shadow-card"
              >
                <PlayCircle className="h-10 w-10 text-primary" />
                <p className="px-6 text-center text-sm text-ink-muted">
                  Video placeholder — {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Own Success Story"
        text="Tell us where your business is today. We will show you what a stronger online presence could look like."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
