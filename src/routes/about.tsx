import { createFileRoute } from "@tanstack/react-router";
import { Compass, HeartHandshake, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrustBadges } from "@/components/site/TrustBadges";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HoriPeak — A Digital Growth Partner for Businesses" },
      {
        name: "description",
        content:
          "HoriPeak helps businesses, brands and creators build a professional digital presence. Learn about our story, mission, vision and values.",
      },
      { property: "og:title", content: "About HoriPeak" },
      {
        property: "og:description",
        content:
          "Our story, mission, vision and values — and how we work with businesses, brands and authors.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Professionalism", text: "Reliable delivery, clear scope and work we are happy to put our name on." },
  { icon: Lightbulb, title: "Creativity", text: "Ideas grounded in your market, not in whatever is trending this month." },
  { icon: TrendingUp, title: "Growth", text: "Every decision is measured against whether it helps your business move forward." },
  { icon: Compass, title: "Integrity", text: "Honest advice, including when the answer is that you do not need a service yet." },
  { icon: HeartHandshake, title: "Client Success", text: "Your outcome matters more than closing the project file." },
];

function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About HoriPeak"
        title="Helping Businesses Build a Stronger Digital Future."
        text="We are a digital growth partner for local businesses, store owners, companies, personal brands and authors who want to be seen, trusted and chosen online."
        breadcrumb={[{ label: "About Us", to: "/about" }]}
      />
      <TrustBadges />

      {/* Story */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Our Story" title="Built to close the gap between good businesses and good online presence." />
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              HoriPeak was created after seeing the same pattern repeat: capable businesses doing
              excellent work in person, but presenting themselves online in a way that undersold
              them. A dated website here, an abandoned business listing there, three social profiles
              that looked like three different companies.
            </p>
            <p>
              The gap was rarely effort. It was access — to professional digital services that
              explain themselves in plain language, respect a realistic budget and focus on results
              instead of jargon.
            </p>
            <p>
              That is the gap we exist to close. Whether you run a single shop, a growing company or
              you are an author preparing a first launch, our role is the same: make your business
              easier to find, easier to trust and easier to choose.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-y bg-secondary/50">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-9 shadow-card">
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-4 text-2xl font-bold text-foreground">What we work toward</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To help businesses, brands and creators build a professional digital presence and
              create more opportunities for sustainable growth.
            </p>
          </Reveal>
          <Reveal delay={120} className="surface-ink rounded-2xl p-9 shadow-lift">
            <p className="eyebrow">Our Vision</p>
            <h2 className="mt-4 text-2xl font-bold text-ink-foreground">Where we are heading</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              To become a trusted digital growth partner for businesses and creators looking to
              compete confidently in an increasingly digital world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Values"
            align="center"
            title="The principles behind every project."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                  <value.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-y bg-secondary/50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="surface-ink flex aspect-[4/5] items-center justify-center rounded-2xl shadow-lift">
              <div className="px-8 text-center">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary font-display text-2xl font-bold text-primary-foreground">
                  HP
                </span>
                <p className="mt-6 text-sm text-ink-muted">
                  Editable photo placeholder — add your professional founder photo here.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Meet HoriPeak"
              title="A hands-on partner, not a faceless agency."
            />
            <Reveal delay={120} className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                <em>Editable biography placeholder.</em> HoriPeak is led by a digital marketing
                practitioner who works directly with clients — from the first conversation about
                goals through to launch and beyond.
              </p>
              <p>
                The approach is deliberately simple: understand the business first, recommend only
                what is useful, explain everything in plain language, and deliver work that holds up
                against professional standards.
              </p>
              <p>
                Replace this section with your own story, background and a professional photograph
                to make the page feel personal to visitors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk about where your business is going."
        text="Tell us about your goals and we will tell you honestly what would make the biggest difference first."
        primaryLabel="Start a Project"
        secondaryLabel="Get a Free Consultation"
      />
    </>
  );
}
