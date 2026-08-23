import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — HoriPeak" },
      {
        name: "description",
        content:
          "How HoriPeak collects, uses and protects the personal information you share through our website and enquiry forms.",
      },
      { property: "og:title", content: "Privacy Policy — HoriPeak" },
      {
        property: "og:description",
        content: "How HoriPeak handles personal information collected through this website.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    title: "Information we collect",
    body: "We collect the details you submit through our contact and newsletter forms: your name, business name, email address, phone number, selected service, budget range and the message you write. We also collect standard anonymous analytics data such as pages visited and approximate location.",
  },
  {
    title: "How we use your information",
    body: "Your details are used to respond to your enquiry, prepare proposals, deliver services you have requested and, if you subscribe, send occasional newsletters. We do not sell or rent your information to anyone.",
  },
  {
    title: "Cookies and analytics",
    body: "This website may use cookies and analytics tools to understand how visitors use the site so we can improve it. You can block or delete cookies in your browser settings at any time.",
  },
  {
    title: "Data retention",
    body: "Enquiry data is retained only as long as it is needed for the purpose it was collected, or as required by law. You can ask us to delete your data at any time.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of the personal data we hold about you. Newsletter subscribers can unsubscribe using the link in any email.",
  },
  {
    title: "Contact",
    body: "For any privacy question or request, email hello@horipeak.com and we will respond within one working day.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        text="Last updated: August 2026. This policy explains what information we collect and how it is used."
        breadcrumb={[{ label: "Privacy Policy", to: "/privacy-policy" }]}
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
