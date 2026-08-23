import { ShieldCheck } from "lucide-react";
import { TRUST_BADGES } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="container-page py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
          {TRUST_BADGES.map((badge, i) => (
            <Reveal key={badge} delay={i * 60} className="flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {badge}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
