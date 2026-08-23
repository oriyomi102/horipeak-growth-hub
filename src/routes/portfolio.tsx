import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { PROJECT_CATEGORIES, PROJECTS, type Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — HoriPeak" },
      {
        name: "description",
        content:
          "Sample website, online store, social branding, campaign and book projects showing how HoriPeak approaches structure, presentation and conversion.",
      },
      { property: "og:title", content: "Work That Speaks for the Brands Behind It" },
      {
        property: "og:description",
        content: "Explore sample HoriPeak projects across websites, stores, branding and book launches.",
      },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageBanner
        eyebrow="Our Work"
        title="Work That Speaks for the Brands Behind It."
        text="The sample projects below illustrate our approach. Each one is clearly marked as an example while we build a portfolio of published client work."
        breadcrumb={[{ label: "Portfolio", to: "/portfolio" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <Reveal className="flex flex-wrap gap-2.5">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
                  filter === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {category}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 90}>
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="group block h-full w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="surface-ink absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <span className="px-8 text-center font-display text-lg font-bold text-ink-foreground">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="eyebrow">{project.category}</p>
                    <h2 className="mt-3 text-base font-bold text-foreground">{project.service}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.result}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-12 text-center text-muted-foreground">
              No projects in this category yet.
            </p>
          ) : null}
        </div>
      </section>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {active ? (
            <>
              <DialogHeader>
                <p className="eyebrow">{active.category}</p>
                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.overview}</DialogDescription>
              </DialogHeader>
              <div className="surface-ink mt-2 flex aspect-[16/9] items-center justify-center rounded-xl">
                <span className="px-8 text-center text-sm text-ink-muted">
                  Editable project image placeholder
                </span>
              </div>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Challenge
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {active.challenge}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Solution
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {active.solution}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Services provided
                  </dt>
                  <dd className="mt-1.5 text-sm text-muted-foreground">
                    {active.services.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Outcome
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {active.outcome}
                  </dd>
                </div>
              </dl>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      <CTASection
        title="Want work like this for your business?"
        text="Tell us what you are trying to achieve and we will outline a realistic approach and timeline."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
