import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroGrowth from "@/assets/hero-growth.jpg";
import heroWebsite from "@/assets/hero-website.jpg";
import heroLocal from "@/assets/hero-local.jpg";
import heroBooks from "@/assets/hero-books.jpg";

type Slide = {
  eyebrow: string;
  headline: string;
  text: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
  image: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Digital Growth",
    headline: "Grow Your Business Beyond Your Physical Location.",
    text: "We help local businesses, store owners and growing companies build a strong online presence that attracts attention, builds trust and brings in more customers.",
    primary: { label: "Get Started", to: "/contact" },
    secondary: { label: "Explore Our Services", to: "/services" },
    image: heroGrowth,
    alt: "A small business team reviewing digital marketing results together in a bright office",
  },
  {
    eyebrow: "Website & Store Design",
    headline: "Your Website Should Do More Than Just Look Good.",
    text: "Get a modern, professional and conversion-focused website or online store designed to turn visitors into real customers.",
    primary: { label: "Start Your Website", to: "/contact" },
    secondary: { label: "View Our Work", to: "/portfolio" },
    image: heroWebsite,
    alt: "Laptop and smartphone displaying a modern business website design",
  },
  {
    eyebrow: "Local Visibility",
    headline: "Get Found by Customers Searching for Your Business.",
    text: "From Google Business Profile optimization to social media marketing, HoriPeak helps your business become easier to find, trust and choose.",
    primary: { label: "Improve My Visibility", to: "/contact" },
    secondary: { label: "Talk to an Expert", to: "/contact" },
    image: heroLocal,
    alt: "Local shop owner welcoming customers at the entrance of a boutique store",
  },
  {
    eyebrow: "Authors & Book Services",
    headline: "Your Book Deserves to Be Seen.",
    text: "From book writing and professional formatting to strategic promotion, we help authors prepare, present and promote their books with confidence.",
    primary: { label: "Promote My Book", to: "/contact" },
    secondary: { label: "Explore Book Services", to: "/services" },
    image: heroBooks,
    alt: "Author workspace with a stack of books, an open notebook and a laptop",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const total = SLIDES.length;

  const go = useCallback((next: number) => setIndex(((next % total) + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section
      className="relative isolate min-h-[38rem] overflow-hidden bg-ink md:min-h-[46rem]"
      aria-roledescription="carousel"
      aria-label="HoriPeak highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        setPaused(true);
        touchStart.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        const end = e.changedTouches[0]?.clientX ?? null;
        if (start !== null && end !== null && Math.abs(end - start) > 50) {
          go(index + (end < start ? 1 : -1));
        }
        touchStart.current = null;
      }}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.headline}
          className={cn(
            "absolute inset-0 transition-opacity duration-[900ms] ease-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "h-full w-full object-cover transition-transform duration-[9000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
        </div>
      ))}

      <div className="container-page relative flex min-h-[38rem] items-center pb-24 pt-32 md:min-h-[46rem] md:pb-28 md:pt-40">
        <div className="max-w-2xl">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.headline}
              className={cn(
                "transition-all duration-700",
                i === index ? "block" : "hidden",
              )}
            >
              <p
                className="eyebrow mb-5 animate-in fade-in slide-in-from-bottom-3 duration-700"
                key={`e-${index}`}
              >
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                {slide.eyebrow}
              </p>
              <h1 className="text-[2.1rem] font-bold leading-[1.08] text-ink-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 sm:text-5xl md:text-[3.75rem]">
                {slide.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted animate-in fade-in slide-in-from-bottom-4 duration-1000 md:text-lg">
                {slide.text}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Button asChild variant="hero" size="lg">
                  <Link to={slide.primary.to}>
                    {slide.primary.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="onInk" size="lg">
                  <Link to={slide.secondary.to}>{slide.secondary.label}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="container-page absolute inset-x-0 bottom-8 flex items-center justify-between">
        <div className="flex gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-10 bg-primary" : "w-4 bg-ink-foreground/30 hover:bg-ink-foreground/60",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
