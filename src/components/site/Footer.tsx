import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SERVICES, SOCIAL_LINKS } from "@/lib/site-data";
import { Logo } from "./Logo";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-6.99L4.66 22H1.4l8.02-9.166L1 2h7.02l4.844 6.4L18.244 2Zm-1.2 18h1.86L7.04 3.9H5.05L17.044 20Z" />
    </svg>
  );
}

const socialIcons = { Facebook, Instagram, "X / Twitter": XIcon } as const;

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="surface-ink">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:pr-8">
          <Logo onInk />
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            Helping businesses, brands and creators build stronger digital visibility and better
            opportunities for growth.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`HRP on ${social.name}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-foreground/15 text-ink-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-ink-foreground">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Testimonials", to: "/testimonials" },
              { label: "Blog / Resources", to: "/blog" },
              { label: "Contact Us", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-muted transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-ink-foreground">
            Our Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-ink-muted transition-colors hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-ink-foreground">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-muted">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:hello@hrp.com" className="hover:text-primary">
                hello@hrp.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              Working with clients remotely, worldwide.
            </li>
          </ul>

          <h4 className="mt-8 text-sm font-semibold text-ink-foreground">Newsletter</h4>
          <p className="mt-2 text-sm text-ink-muted">
            Practical growth insights. No spam, unsubscribe anytime.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("Thanks for subscribing — check your inbox to confirm.");
              setEmail("");
            }}
          >
            <label htmlFor="footer-newsletter" className="sr-only">
              Email address
            </label>
            <Input
              id="footer-newsletter"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-10 border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground placeholder:text-ink-muted"
            />
            <Button type="submit" size="icon" aria-label="Subscribe">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-ink-muted md:flex-row">
          <p>© 2026 HRP. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
