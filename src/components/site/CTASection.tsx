import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Ready to Take Your Business to the Next Level?",
  text = "Whether you need a website, stronger local visibility, social media support or professional promotion, HRP is ready to help you move forward.",
  primaryLabel = "Start a Project",
  secondaryLabel = "Book a Free Consultation",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="surface-ink relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="container-page section-y relative text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight text-ink-foreground md:text-[2.8rem]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {text}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="onInk" size="lg">
              <Link to="/contact">{secondaryLabel}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
