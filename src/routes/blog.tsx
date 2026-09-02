import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Search, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BLOG_CATEGORIES, POSTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources — Practical Insights for Growing Online | HRP" },
      {
        name: "description",
        content:
          "Practical articles on website design, local business growth, social media, email marketing and book promotion from the HRP team.",
      },
      { property: "og:title", content: "Practical Insights for Growing Online" },
      {
        property: "og:description",
        content: "Guides and checklists on digital marketing, websites, local visibility and book promotion.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

function BlogPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");

  const featured = POSTS.find((p) => p.featured) ?? POSTS[0]!;

  const filtered = useMemo(
    () =>
      POSTS.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (query.trim() === "" ||
            (p.title + p.excerpt).toLowerCase().includes(query.trim().toLowerCase())),
      ),
    [category, query],
  );

  return (
    <>
      <PageBanner
        eyebrow="Blog & Resources"
        title="Practical Insights for Growing Online."
        text="No fluff and no jargon — just the advice we give clients about websites, local visibility, social media, email and book promotion."
        breadcrumb={[{ label: "Blog", to: "/blog" }]}
      />

      {/* Featured */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <article className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-card lg:grid-cols-2">
              <div className="surface-ink flex min-h-56 items-center justify-center p-10">
                <span className="text-center font-display text-xl font-bold text-ink-foreground">
                  {featured.category}
                </span>
              </div>
              <div className="p-8 md:p-12">
                <p className="eyebrow">Featured Article</p>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {formatDate(featured.date)} · {featured.readTime}
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Filters + list */}
      <section className="pb-20">
        <div className="container-page">
          <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative lg:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <Input
                id="blog-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="h-11 pl-9"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={(i % 3) * 90}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
              >
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-4 text-lg font-bold leading-snug text-foreground">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {formatDate(post.date)} · {post.readTime}
                </p>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-muted-foreground">
              No articles match that search yet.
            </p>
          ) : null}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center shadow-card">
            <SectionHeading
              align="center"
              eyebrow="Newsletter"
              title="One useful email a month."
              text="Practical growth tips for businesses and authors. No spam, unsubscribe anytime."
            />
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                toast.success("You're subscribed — thanks for joining.");
                setEmail("");
              }}
            >
              <label htmlFor="blog-newsletter" className="sr-only">
                Email address
              </label>
              <Input
                id="blog-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-12"
              />
              <Button type="submit" variant="hero" size="lg">
                Subscribe <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Prefer advice specific to your business?"
        text="A short consultation is usually faster than reading ten articles. Tell us your situation and we'll point you in the right direction."
        primaryLabel="Book a Consultation"
        secondaryLabel="Explore Our Services"
      />
      <div className="sr-only">
        <ArrowRight />
      </div>
    </>
  );
}
