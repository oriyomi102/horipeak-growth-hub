import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(id);
  }, [paused, total]);

  const active = TESTIMONIALS[index] ?? TESTIMONIALS[0]!;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-12">
        <Quote className="h-9 w-9 text-primary/25" aria-hidden="true" />
        <div className="mt-5 flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < active.rating ? "fill-primary text-primary" : "text-border",
              )}
            />
          ))}
        </div>
        <blockquote className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
          “{active.quote}”
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground"
            aria-hidden="true"
          >
            {active.initials}
          </span>
          <div>
            <p className="font-semibold text-foreground">{active.name}</p>
            <p className="text-sm text-muted-foreground">
              {active.business} · {active.service}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.business + i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/40",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % total)}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
