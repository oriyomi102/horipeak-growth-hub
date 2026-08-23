import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  onInk = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  onInk?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", onInk && "text-primary")}>
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold leading-[1.12] md:text-[2.6rem]",
          onInk ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-[1.05rem]",
            onInk ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
