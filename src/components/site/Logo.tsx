import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="HoriPeak home">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary transition-transform duration-300 group-hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
          <path
            d="M3 19 L9.5 8 L13.5 14 L16.5 9.5 L21 19 Z"
            fill="var(--color-primary-foreground)"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          onInk ? "text-ink-foreground" : "text-foreground",
        )}
      >
        Hori<span className="text-primary">Peak</span>
      </span>
    </Link>
  );
}
