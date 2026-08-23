import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services", hasMenu: true },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onDark = !scrolled;
  const linkClass = cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary",
    onDark ? "text-ink-foreground/85" : "text-foreground/80",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 py-2.5 backdrop-blur-md"
          : "border-b border-transparent py-4",
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Logo onInk={onDark} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) =>
            "hasMenu" in item && item.hasMenu ? (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className={cn(linkClass, "inline-flex items-center gap-1")}
                  activeProps={{ className: "active" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[30rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-2 shadow-lift">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                      >
                        <service.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm font-medium leading-tight text-foreground">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="col-span-2 mt-1 rounded-lg bg-secondary px-3 py-2.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-accent"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass}
                activeProps={{ className: "active" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden",
            onDark
              ? "border-ink-foreground/30 text-ink-foreground"
              : "border-border text-foreground",
          )}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-5 w-5" />
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-50 flex flex-col bg-background transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {NAV.map((item) =>
            "hasMenu" in item && item.hasMenu ? (
              <div key={item.to} className="border-b border-border">
                <div className="flex items-center justify-between">
                  <Link to={item.to} className="block py-4 text-base font-semibold">
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServices((v) => !v)}
                    className="p-3"
                    aria-label="Toggle services list"
                    aria-expanded={mobileServices}
                  >
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", mobileServices && "rotate-180")}
                    />
                  </button>
                </div>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    mobileServices ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="flex items-center gap-3 py-2.5 text-sm text-muted-foreground"
                      >
                        <service.icon className="h-4 w-4 text-primary" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="block border-b border-border py-4 text-base font-semibold"
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="mt-6 space-y-3">
            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="quiet" size="lg" className="w-full">
              <Link to="/contact">
                <Phone className="h-4 w-4" /> Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
