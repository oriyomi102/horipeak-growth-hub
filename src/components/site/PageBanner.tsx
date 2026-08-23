import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageBanner({
  eyebrow,
  title,
  text,
  breadcrumb,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  breadcrumb?: { label: string; to: string }[];
}) {
  return (
    <section className="surface-ink relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div className="container-page relative">
        <p className="eyebrow mb-5">
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-ink-foreground md:text-[3.25rem]">
          {title}
        </h1>
        {text ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {text}
          </p>
        ) : null}
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mt-8 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.to} className="flex items-center gap-2">
                <ChevronRight className="h-3.5 w-3.5" />
                <Link to={crumb.to} className="hover:text-primary">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
  );
}
