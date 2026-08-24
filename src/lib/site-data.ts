import {
  Globe,
  ShoppingBag,
  Mail,
  MapPin,
  Palette,
  Megaphone,
  TrendingUp,
  BookOpen,
  PenTool,
  type LucideIcon,
} from "lucide-react";

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61592872920966" },
  { name: "Instagram", href: "https://www.instagram.com/oripeak6/" },
  { name: "X / Twitter", href: "https://x.com/oripeak6" },
] as const;

export type ServiceSlug =
  | "website-design"
  | "store-design"
  | "email-marketing"
  | "gmb-optimization"
  | "social-media-branding"
  | "social-media-marketing"
  | "business-promotion"
  | "book-promotion"
  | "book-writing-formatting";

export type Service = {
  slug: ServiceSlug;
  name: string;
  navLabel: string;
  icon: LucideIcon;
  cardBlurb: string;
  bannerHeadline: string;
  overview: string[];
  whatYouGet: string[];
  whoFor: string[];
  process: { step: string; title: string; text: string }[];
  whyPoints: string[];
  faqs: { q: string; a: string }[];
  seoDescription: string;
};

const commonProcess = (a: string, b: string, c: string, d: string) => [
  { step: "01", title: "Discover", text: a },
  { step: "02", title: "Plan", text: b },
  { step: "03", title: "Build", text: c },
  { step: "04", title: "Grow", text: d },
];

export const SERVICES: Service[] = [
  {
    slug: "website-design",
    name: "Website Design",
    navLabel: "Website Design",
    icon: Globe,
    cardBlurb:
      "Build a professional website designed to represent your brand and convert visitors.",
    bannerHeadline: "A Website Built to Represent Your Business—and Win Customers.",
    overview: [
      "Most business websites lose customers quietly. Visitors arrive, fail to understand what is being offered, and leave for a competitor whose site simply made things clearer.",
      "We design websites around the decisions your customers are actually making: what you do, who you do it for, why you can be trusted, and what to do next. The result is a site that looks credible and works hard for your business every day.",
    ],
    whatYouGet: [
      "A custom, mobile-first website structure planned around your services",
      "Professional page design with clear hierarchy and readable typography",
      "Conversion-focused copy structure and calls to action on every page",
      "Contact and inquiry forms wired to your inbox",
      "Basic on-page SEO: titles, descriptions, headings and alt text",
      "Speed and accessibility checks before launch",
      "Launch support and a walkthrough so you understand your own site",
    ],
    whoFor: [
      "Local businesses that only have a social page today",
      "Service companies with an outdated or slow website",
      "Professionals and consultants building credibility online",
      "Growing brands that outgrew a DIY template",
    ],
    process: commonProcess(
      "We map your services, audience and the questions customers ask most.",
      "We agree on page structure, key messages and the main conversion path.",
      "We design and build the pages, then review them with you on real devices.",
      "We launch, monitor and refine so the site keeps earning enquiries.",
    ),
    whyPoints: [
      "Strategy before pixels — structure is agreed before design starts",
      "Built mobile-first, because that is where most visitors arrive",
      "Plain-English communication at every stage",
    ],
    faqs: [
      {
        q: "How long does a website project take?",
        a: "Most business websites take two to five weeks depending on the number of pages and how quickly content is approved. We agree on a timeline before work begins.",
      },
      {
        q: "Do I need to provide content and images?",
        a: "It helps if you have them, but we can structure the copy for you and source suitable professional imagery where needed.",
      },
      {
        q: "Will I be able to update the website myself?",
        a: "Yes. We hand over a straightforward setup and walk you through the updates you are most likely to make.",
      },
      {
        q: "Is the website mobile friendly?",
        a: "Always. Mobile layouts are designed intentionally rather than shrunk down from desktop.",
      },
      {
        q: "Do you help with SEO?",
        a: "Every build includes proper heading structure, meta titles and descriptions, alt text and fast-loading pages as a foundation.",
      },
    ],
    seoDescription:
      "Professional website design for local businesses and growing brands. Modern, mobile-first, conversion-focused websites built by HoriPeak.",
  },
  {
    slug: "store-design",
    name: "Online Store Design",
    navLabel: "Store Design",
    icon: ShoppingBag,
    cardBlurb: "Create a smooth, professional online shopping experience for your customers.",
    bannerHeadline: "Turn Your Products Into a Better Online Shopping Experience.",
    overview: [
      "Selling online is not only about listing products. Shoppers abandon stores that feel confusing, slow or untrustworthy at checkout.",
      "We design online stores where products are easy to browse, easy to trust and easy to buy — from the first product image to the confirmation page.",
    ],
    whatYouGet: [
      "Store structure with sensible categories, filters and navigation",
      "Product page design that answers buying questions",
      "Clean cart and checkout flow designed to reduce drop-off",
      "Trust elements: shipping, returns, contact and payment clarity",
      "Mobile shopping experience designed intentionally",
      "Product upload guidance and store handover training",
    ],
    whoFor: [
      "Store owners moving from social selling to a real storefront",
      "Retailers with a store that looks dated or converts poorly",
      "Brands launching a first product line",
      "Businesses selling both in person and online",
    ],
    process: commonProcess(
      "We review your products, margins, delivery and typical customer.",
      "We plan categories, product page layout and the checkout journey.",
      "We build, test purchases end to end and prepare your product data.",
      "We launch and refine based on real shopper behaviour.",
    ),
    whyPoints: [
      "Checkout flow reviewed on real devices before launch",
      "Product pages written to answer objections, not just describe",
      "Clear handover so you can add products confidently",
    ],
    faqs: [
      {
        q: "Which platform do you use?",
        a: "We recommend a platform based on your product range, budget and how you prefer to manage orders, then explain the trade-offs before you commit.",
      },
      {
        q: "Can you migrate my existing products?",
        a: "Yes. We can move existing product data and images, and clean it up in the process.",
      },
      {
        q: "Do you set up payments and shipping?",
        a: "We configure the payment and shipping options you choose and test the full purchase flow before going live.",
      },
      {
        q: "What if I only have a few products?",
        a: "That is fine. A small, well-presented catalogue often converts better than a large disorganised one.",
      },
    ],
    seoDescription:
      "Online store design that makes browsing, trusting and buying easy. HoriPeak builds conversion-focused ecommerce experiences for store owners.",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    navLabel: "Email Marketing",
    icon: Mail,
    cardBlurb: "Stay connected with your audience and turn subscribers into loyal customers.",
    bannerHeadline: "Stay Connected. Build Trust. Drive More Sales.",
    overview: [
      "Most people who visit your business are not ready to buy on the first day. Without a way to stay in touch, that interest disappears.",
      "Email gives you a direct line to people who already raised their hand. We help you build that list and send messages people actually want to open.",
    ],
    whatYouGet: [
      "Email platform setup and list structure",
      "Signup forms and lead magnets that fit your business",
      "Welcome sequence for new subscribers",
      "Campaign templates matched to your brand",
      "Content calendar and subject-line guidance",
      "Performance reporting on opens, clicks and conversions",
    ],
    whoFor: [
      "Stores wanting repeat purchases",
      "Service businesses nurturing slower decisions",
      "Authors building a reader list",
      "Any business with an audience it never follows up with",
    ],
    process: commonProcess(
      "We look at your audience, offers and how people currently find you.",
      "We plan the list growth path and the sequences worth automating.",
      "We build templates, forms and automations, then test everything.",
      "We review results monthly and improve what underperforms.",
    ),
    whyPoints: [
      "Written for humans, not spam filters",
      "Automations you can understand and edit",
      "Clear reporting on what actually drove revenue",
    ],
    faqs: [
      { q: "I have no list. Can you still help?", a: "Yes — the first phase is usually list growth: forms, incentives and the right placement on your site." },
      { q: "How often should I email?", a: "For most businesses, twice a month is a sustainable starting point. Consistency matters more than volume." },
      { q: "Who writes the emails?", a: "We can write them, or provide templates and guidance if you prefer to write in your own voice." },
      { q: "Which platform will I need?", a: "We recommend one that fits your list size and budget, and set it up so you are never locked out of your own data." },
    ],
    seoDescription:
      "Email marketing setup, automation and campaigns that turn subscribers into loyal customers. HoriPeak keeps your audience engaged.",
  },
  {
    slug: "gmb-optimization",
    name: "GMB Optimization",
    navLabel: "GMB Optimization",
    icon: MapPin,
    cardBlurb: "Help local customers discover and trust your business on Google.",
    bannerHeadline: "Help Local Customers Find and Trust Your Business on Google.",
    overview: [
      "When someone searches for a business like yours nearby, your Google Business Profile is often the first thing they see — and sometimes the only thing.",
      "We optimise that profile so your business appears in local results with accurate information, strong photos and reviews that make choosing you the easy decision.",
    ],
    whatYouGet: [
      "Full profile audit and cleanup",
      "Accurate categories, services, hours and service areas",
      "Optimised business description and product/service listings",
      "Photo strategy and upload guidance",
      "Review request process and response templates",
      "Google Posts plan to keep the profile active",
      "Insights reporting on calls, direction requests and clicks",
    ],
    whoFor: [
      "Shops, salons, clinics, restaurants and trades",
      "Multi-location businesses with inconsistent listings",
      "Any local business invisible in map results",
      "Businesses with few or unmanaged reviews",
    ],
    process: commonProcess(
      "We audit your current profile and compare it to nearby competitors.",
      "We prioritise the changes with the biggest visibility impact.",
      "We implement optimisations and set up your review process.",
      "We track calls and direction requests and keep the profile active.",
    ),
    whyPoints: [
      "Focused on real actions: calls, directions and visits",
      "No fake reviews or risky tactics — ever",
      "Simple monthly reporting you can actually read",
    ],
    faqs: [
      { q: "How long before I see results?", a: "Profile improvements often show within a few weeks, though competitive areas take longer. Ranking is influenced by proximity, relevance and prominence." },
      { q: "Do you guarantee first place?", a: "No credible provider can. We focus on the factors we can control and improve them consistently." },
      { q: "I do not have a profile yet.", a: "We create and verify it with you, then optimise from the start." },
      { q: "Can you help with reviews?", a: "We set up an ethical request process and give you response templates. We never generate reviews." },
    ],
    seoDescription:
      "Google Business Profile (GMB) optimization for local businesses. Get found in map results and turn searches into calls and visits.",
  },
  {
    slug: "social-media-branding",
    name: "Social Media Branding",
    navLabel: "Social Media",
    icon: Palette,
    cardBlurb: "Create a consistent and professional brand identity across your social platforms.",
    bannerHeadline: "Make Every Social Profile Look Like One Strong Brand.",
    overview: [
      "Inconsistent profiles make a good business look smaller than it is. Mismatched logos, colours and bios create doubt before anyone reads a word.",
      "We build a clean, recognisable visual identity and apply it consistently across every platform you use.",
    ],
    whatYouGet: [
      "Profile and cover artwork sized for each platform",
      "Colour palette, typography and visual guidelines",
      "Bio and about-section copy for each profile",
      "Reusable post and story templates",
      "Highlight covers and content style guide",
      "Handover files you own outright",
    ],
    whoFor: [
      "Businesses with profiles built at different times",
      "Personal brands and professionals",
      "New businesses launching their presence",
      "Authors presenting a consistent identity",
    ],
    process: commonProcess(
      "We review your current profiles, market and how you want to be perceived.",
      "We define the visual direction and where it should be applied.",
      "We design the identity assets and templates and refine with you.",
      "You roll it out with a guide that keeps everything consistent.",
    ),
    whyPoints: [
      "Consistency across every platform, not just one",
      "Editable templates so your team stays on brand",
      "Design grounded in your market, not in trends",
    ],
    faqs: [
      { q: "Do you design logos?", a: "We can create a clean wordmark or refine an existing logo as part of the identity work." },
      { q: "Which platforms do you cover?", a: "Typically Facebook, Instagram and X, plus any other platform your audience uses." },
      { q: "Do I own the files?", a: "Yes. You receive the source and export files at handover." },
      { q: "Can you train my team?", a: "We include a walkthrough so whoever posts knows how to stay on brand." },
    ],
    seoDescription:
      "Social media branding that makes every profile look like one strong, professional brand. Identity, templates and guidelines by HoriPeak.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    navLabel: "Social Media Marketing",
    icon: Megaphone,
    cardBlurb: "Reach more people with strategic content and marketing campaigns.",
    bannerHeadline: "Turn Your Social Media Into a Tool for Business Growth.",
    overview: [
      "Posting without a plan burns time and rarely produces customers. Reach alone does not pay bills.",
      "We build a content and campaign approach tied to actual business goals — enquiries, visits, orders — and keep improving it with real data.",
    ],
    whatYouGet: [
      "Audience and competitor review",
      "Monthly content plan and calendar",
      "Post design and copywriting",
      "Campaign setup and audience targeting",
      "Community management guidance",
      "Monthly performance report with next actions",
    ],
    whoFor: [
      "Local businesses wanting steady visibility",
      "Stores promoting products and offers",
      "Service businesses generating enquiries",
      "Brands with no time to post consistently",
    ],
    process: commonProcess(
      "We clarify the goal: awareness, enquiries, footfall or sales.",
      "We build the content pillars, calendar and campaign plan.",
      "We produce, schedule and publish, then run campaigns.",
      "We report monthly and double down on what works.",
    ),
    whyPoints: [
      "Every plan tied to a measurable business outcome",
      "Content produced consistently, not in bursts",
      "Honest reporting, including what did not work",
    ],
    faqs: [
      { q: "How many posts per month?", a: "It depends on the platform and goal. We agree on a realistic, sustainable volume rather than overpromising." },
      { q: "Do you manage ad budgets?", a: "Yes. Ad spend is separate from our fee and always stays in your own account." },
      { q: "Will you respond to comments?", a: "We can handle community management or provide response guidelines for your team." },
      { q: "How soon will I see results?", a: "Engagement usually shifts in the first month; consistent lead flow typically takes two to three months." },
    ],
    seoDescription:
      "Strategic social media marketing: content plans, campaigns and reporting that turn attention into enquiries and sales.",
  },
  {
    slug: "business-promotion",
    name: "Business Promotion",
    navLabel: "Business Promotion",
    icon: TrendingUp,
    cardBlurb: "Increase awareness and put your business in front of more potential customers.",
    bannerHeadline: "Put Your Business in Front of More Potential Customers.",
    overview: [
      "Plenty of good businesses stay quiet simply because nobody knows they exist. Awareness is a solvable problem.",
      "We create focused promotion campaigns that put your offer in front of the right people, in the right places, with a clear reason to act.",
    ],
    whatYouGet: [
      "Promotion strategy tied to a specific offer or launch",
      "Campaign messaging and creative assets",
      "Channel selection across social, search and local placements",
      "Landing page or offer page where required",
      "Tracking setup so results are measurable",
      "Campaign report with recommendations",
    ],
    whoFor: [
      "New businesses and new locations",
      "Businesses launching a product, offer or event",
      "Companies entering a new area or audience",
      "Anyone whose best-kept secret is their own business",
    ],
    process: commonProcess(
      "We define the offer, audience and what a good result looks like.",
      "We select channels and build the campaign plan and budget.",
      "We produce assets, launch and monitor daily in the early phase.",
      "We report on results and plan the next promotion cycle.",
    ),
    whyPoints: [
      "Campaigns built around one clear offer, not vague awareness",
      "Tracking in place before launch, not after",
      "Budget recommendations that respect your reality",
    ],
    faqs: [
      { q: "What budget do I need?", a: "We work with your budget and tell you honestly whether it is enough to produce a meaningful result." },
      { q: "Which channels do you use?", a: "Chosen per campaign — usually a mix of social, search and local visibility rather than everything at once." },
      { q: "Can you promote an event?", a: "Yes. Event and launch promotions are a common use of this service." },
      { q: "How do I know it worked?", a: "We agree the metric up front — enquiries, bookings, visits or sales — and report against it." },
    ],
    seoDescription:
      "Business promotion campaigns that build awareness and put your offer in front of more potential customers, with measurable results.",
  },
  {
    slug: "book-promotion",
    name: "Book Promotion",
    navLabel: "Book Promotion",
    icon: BookOpen,
    cardBlurb: "Help your book reach more readers and gain better visibility.",
    bannerHeadline: "Help Your Book Get the Attention It Deserves.",
    overview: [
      "Writing the book is the hard part. Being discovered afterwards is where most authors lose momentum.",
      "We build a promotion plan around your book, your genre and your readers — so launch week is not the last time anyone hears about it.",
    ],
    whatYouGet: [
      "Book positioning, blurb and audience definition",
      "Author platform and social profile setup",
      "Launch plan with a promotion calendar",
      "Promotional graphics, quote cards and teasers",
      "Reader email list growth support",
      "Paid promotion setup where suitable",
      "Post-launch visibility plan",
    ],
    whoFor: [
      "First-time and self-published authors",
      "Authors with a finished manuscript and no launch plan",
      "Publishers supporting a title",
      "Authors relaunching a backlist book",
    ],
    process: commonProcess(
      "We read your positioning, genre and target reader.",
      "We build the launch calendar and promotion mix.",
      "We produce assets and run the campaign through launch.",
      "We keep visibility going after launch week.",
    ),
    whyPoints: [
      "Plans matched to genre and reader behaviour",
      "No purchased reviews or artificial ranking tactics",
      "Support that continues after launch week",
    ],
    faqs: [
      { q: "When should promotion start?", a: "Ideally four to eight weeks before launch, but we can also build momentum for an already-published book." },
      { q: "Do you guarantee bestseller status?", a: "No. We focus on genuine visibility and reader reach rather than short-lived chart tricks." },
      { q: "Do you get reviews for my book?", a: "We help you reach readers who may review honestly. We never buy or fabricate reviews." },
      { q: "Which genres do you work with?", a: "Fiction and non-fiction. The approach differs, and we explain the difference before starting." },
    ],
    seoDescription:
      "Book promotion for authors and publishers: positioning, launch plans, promotional assets and ongoing visibility for your title.",
  },
  {
    slug: "book-writing-formatting",
    name: "Book Writing & Formatting",
    navLabel: "Book Services",
    icon: PenTool,
    cardBlurb: "Turn your ideas into a professionally prepared and well-presented book.",
    bannerHeadline: "Transform Your Ideas Into a Professionally Presented Book.",
    overview: [
      "A strong idea presented poorly reads as amateur. Formatting, structure and typography quietly decide whether a reader keeps going.",
      "We help you shape the manuscript and prepare it to professional standards for print and digital release.",
    ],
    whatYouGet: [
      "Structural outline and chapter planning",
      "Writing and ghostwriting support where required",
      "Line editing and proofreading pass",
      "Interior formatting for print and eBook",
      "Front and back matter setup",
      "Print-ready and eBook export files",
      "Cover layout coordination",
    ],
    whoFor: [
      "Professionals writing a first book",
      "Business owners turning expertise into a book",
      "Authors with a draft that needs shaping",
      "Self-publishers who need clean, submission-ready files",
    ],
    process: commonProcess(
      "We discuss the idea, audience and the outcome you want from the book.",
      "We agree on structure, chapter outline and schedule.",
      "We write, edit and format in reviewed stages.",
      "You receive final files ready for publication.",
    ),
    whyPoints: [
      "Clear stages with review points, no black box",
      "Files that meet major publishing platform requirements",
      "Your voice preserved throughout the process",
    ],
    faqs: [
      { q: "Can you write the whole book?", a: "Yes, ghostwriting is available. It is a collaborative process built on interviews and your notes." },
      { q: "Who owns the finished book?", a: "You do, entirely — including full rights and the final files." },
      { q: "How long does formatting take?", a: "Most manuscripts are formatted within one to two weeks once the final text is approved." },
      { q: "Do you design covers?", a: "We coordinate cover layout and can arrange cover design as part of the project." },
      { q: "Do you help publish it?", a: "We prepare submission-ready files and can guide you through the upload process." },
    ],
    seoDescription:
      "Book writing, editing and professional formatting. Turn your manuscript into print-ready and eBook files with HoriPeak.",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/* EDITABLE: update these numbers as the business grows. */
export const STATS = [
  { value: 50, suffix: "+", label: "Projects Supported" },
  { value: 30, suffix: "+", label: "Businesses Served" },
  { value: 9, suffix: "", label: "Digital Services" },
  { value: 100, suffix: "%", label: "Focused on Client Growth" },
];

export const TRUST_BADGES = [
  "Secure Website",
  "Professional Service",
  "Client-Focused Solutions",
  "Strategy-Driven Approach",
  "Clear Communication",
  "Quality-Focused Work",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  service: string;
  result: string;
  overview: string;
  challenge: string;
  solution: string;
  services: string[];
  outcome: string;
};

/* EDITABLE: sample project entries. Replace with real client work. */
export const PROJECTS: Project[] = [
  {
    slug: "neighbourhood-cafe",
    title: "Neighbourhood Café Website",
    category: "Website Design",
    service: "Website Design",
    result: "A clear menu, location and booking path in one scroll.",
    overview: "A sample project showing how a single-location café presents itself online.",
    challenge: "The café relied on social posts only, so opening hours and the menu were hard to find.",
    solution: "A one-page-first site structure with menu, hours, directions and a booking call-to-action above the fold.",
    services: ["Website Design", "GMB Optimization"],
    outcome: "A site where the three most-asked questions are answered without scrolling.",
  },
  {
    slug: "home-goods-store",
    title: "Home Goods Online Store",
    category: "Online Stores",
    service: "Store Design",
    result: "Streamlined browsing and a three-step checkout.",
    overview: "A sample storefront concept for a small home goods retailer.",
    challenge: "Shoppers abandoned a long, confusing checkout on mobile.",
    solution: "Reorganised categories, rewritten product pages and a shortened mobile checkout flow.",
    services: ["Store Design", "Email Marketing"],
    outcome: "A shopping path that takes three steps instead of six.",
  },
  {
    slug: "wellness-studio-branding",
    title: "Wellness Studio Social Identity",
    category: "Social Media Branding",
    service: "Social Media Branding",
    result: "One consistent identity across three platforms.",
    overview: "A sample branding set applied across a studio's social profiles.",
    challenge: "Each profile used a different logo version, palette and tone.",
    solution: "A single visual system with templates, bios and highlight covers per platform.",
    services: ["Social Media Branding"],
    outcome: "Profiles that read as one professional brand.",
  },
  {
    slug: "local-services-campaign",
    title: "Local Services Promotion Campaign",
    category: "Marketing Campaigns",
    service: "Business Promotion",
    result: "A single offer promoted across search and social.",
    overview: "A sample seasonal campaign for a local services company.",
    challenge: "Previous promotions ran without tracking, so results were guesswork.",
    solution: "One clear offer, a dedicated landing page and tracking configured before launch.",
    services: ["Business Promotion", "Social Media Marketing"],
    outcome: "Every enquiry traceable to the channel that produced it.",
  },
  {
    slug: "retail-visibility",
    title: "Retail Local Visibility Refresh",
    category: "Business Promotion",
    service: "GMB Optimization",
    result: "A complete, active Google Business Profile.",
    overview: "A sample local visibility project for an independent retailer.",
    challenge: "Outdated hours, missing categories and no photos on the business profile.",
    solution: "Full profile cleanup, photo plan, review request process and regular posts.",
    services: ["GMB Optimization", "Business Promotion"],
    outcome: "A profile that answers customer questions before they call.",
  },
  {
    slug: "debut-author-launch",
    title: "Debut Author Book Launch",
    category: "Book Projects",
    service: "Book Promotion",
    result: "A structured six-week launch calendar.",
    overview: "A sample launch plan for a first-time non-fiction author.",
    challenge: "A finished manuscript with no audience and no launch plan.",
    solution: "Positioning work, author platform setup, promotional assets and a week-by-week calendar.",
    services: ["Book Promotion", "Book Writing & Formatting"],
    outcome: "A repeatable launch process the author can run again.",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Website Design",
  "Online Stores",
  "Social Media Branding",
  "Marketing Campaigns",
  "Business Promotion",
  "Book Projects",
];

/* EDITABLE PLACEHOLDER TESTIMONIALS — replace with real client feedback. */
export const TESTIMONIALS = [
  {
    name: "Adaeze Nwosu",
    business: "Local Retail Store",
    service: "Website Design",
    rating: 5,
    quote:
      "the process was clear from the first call, and the finished website finally explains what we do without me having to repeat it on the phone.",
    initials: "AN",
  },
  {
    name: "Grace Adeyemi",
    business: "Wellness Studio",
    service: "Social Media Branding",
    rating: 5,
    quote:
      "our profiles used to look like three different businesses. Now everything matches and it feels like a real brand.",
    initials: "GA",
  },
  {
    name: "Michael Okonkwo",
    business: "Home Goods Store",
    service: "Store Design",
    rating: 5,
    quote:
      "checkout is far simpler than before and I can add products myself without asking for help every time.",
    initials: "MO",
  },
  {
    name: "Sarah Bello",
    business: "Independent Author",
    service: "Book Promotion",
    rating: 5,
    quote:
      "I had a finished book and no idea what to do next. The launch calendar gave me a plan I could actually follow.",
    initials: "SB",
  },
  {
    name: "Daniel Ogundipe",
    business: "Family Restaurant",
    service: "GMB Optimization",
    rating: 5,
    quote:
      "our listing was out of date for years. It is now complete, active and people mention finding us on Google.",
    initials: "DO",
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Digital Marketing",
  "Website Tips",
  "Local Business Growth",
  "Social Media",
  "Email Marketing",
  "Book Promotion",
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "website-questions-customers-ask",
    title: "The Three Questions Every Business Website Must Answer",
    category: "Website Tips",
    excerpt:
      "Visitors decide in seconds. If your homepage does not answer what you do, who it is for and what to do next, they leave. Here is how to fix that quickly.",
    date: "2026-08-12",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "google-business-profile-basics",
    title: "Google Business Profile: The Basics Most Local Businesses Skip",
    category: "Local Business Growth",
    excerpt:
      "Categories, photos, services and reviews do more for local visibility than most owners realise. A practical checklist you can work through today.",
    date: "2026-08-05",
    readTime: "7 min read",
  },
  {
    slug: "social-content-that-converts",
    title: "Why Posting More Is Not a Social Media Strategy",
    category: "Social Media",
    excerpt:
      "Volume without direction produces noise. Here is how to build content pillars tied to actual business outcomes.",
    date: "2026-07-28",
    readTime: "5 min read",
  },
  {
    slug: "first-email-sequence",
    title: "The First Email Sequence Every Small Business Should Set Up",
    category: "Email Marketing",
    excerpt:
      "A simple welcome sequence does more work than a monthly newsletter. What to include and how to keep it short.",
    date: "2026-07-19",
    readTime: "6 min read",
  },
  {
    slug: "store-checkout-drop-off",
    title: "Five Reasons Shoppers Abandon Your Online Store",
    category: "Digital Marketing",
    excerpt:
      "Most abandoned carts come down to friction, not price. These five checkout issues are the usual suspects.",
    date: "2026-07-10",
    readTime: "8 min read",
  },
  {
    slug: "book-launch-timeline",
    title: "A Realistic Book Launch Timeline for First-Time Authors",
    category: "Book Promotion",
    excerpt:
      "What to do eight weeks out, four weeks out, launch week and after — without burning out before publication day.",
    date: "2026-06-30",
    readTime: "9 min read",
  },
];

export const BUDGET_OPTIONS = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Not sure yet",
];
