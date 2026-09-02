import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — HRP" },
      {
        name: "description",
        content:
          "The terms that apply when you use the HRP website or engage HRP for digital marketing, design or book services.",
      },
      { property: "og:title", content: "Terms of Service — HRP" },
      {
        property: "og:description",
        content: "Terms that apply to the HRP website and our client engagements.",
      },
      { property: "og:url", content: "/terms-of-service" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    title: "Using this website",
    body: "The content on this website is provided for general information. While we keep it accurate and current, it does not constitute a guarantee of specific results for your business.",
  },
  {
    title: "Service engagements",
    body: "Every project is confirmed with a written proposal covering scope, deliverables, timeline and cost. That proposal, once accepted, governs the engagement alongside these terms.",
  },
  {
    title: "Payments",
    body: "Unless agreed otherwise in writing, projects begin after an initial payment, with the balance due on completion or according to the schedule stated in the proposal.",
  },
  {
    title: "Client responsibilities",
    body: "Timely feedback, content and access are required to keep projects on schedule. Delays in providing these may shift agreed delivery dates.",
  },
  {
    title: "Intellectual property",
    body: "On final payment, ownership of the delivered project files transfers to you. We may reference the work in our portfolio unless you ask us in writing not to.",
  },
  {
    title: "Limitation of liability",
    body: "We deliver our services with professional care, but we are not liable for indirect or consequential losses arising from the use of the deliverables or third-party platforms.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to hello@hrp.com.",
  },
];

function TermsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms of Service"
        text="Last updated: August 2026. These terms apply to this website and to engagements with HRP."
        breadcrumb={[{ label: "Terms of Service", to: "/terms-of-service" }]}
      />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
