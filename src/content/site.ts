/* =========================================================================
   LT Strategy Partners — site content
   -------------------------------------------------------------------------
   Single source of truth for ALL copy. Edit text here; components read from
   it. Items the founder must confirm/fill are marked [[VERIFY: ...]] and live
   in `config` below — they degrade gracefully (never rendered as invented
   fact). See README "What the founder must supply".
   ========================================================================= */

/* ------------------------------------------------------------------- Types */

export interface CTA {
  label: string;
  href: string;
  external?: boolean; // opens in a new tab (e.g. a booking link)
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Card {
  title: string;
  body: string;
}

export interface Service {
  title: string;
  body: string;
  deliverables: string[];
}

export interface Step {
  n: string;
  title: string;
  body: string;
  output: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string; // e.g. "Former manager, Enovis"
  company?: string;
  logo?: string; // optional logo key in src/assets/... (only if permissioned)
}

export interface FaqItem {
  q: string;
  a: string;
  href?: string; // optional in-page link (e.g. to the data & IP section)
}

export interface WorkProject {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  // Honest label for what this proves: a product we built vs a client engagement.
  kind: "product" | "build" | "analysis" | "client";
  label: string; // display label for `kind`
  accent: string;
  heroDark?: boolean;
  oneLiner: string;
  overview: string;
  context: string;
  delivered: string[];
  strategic: string[];
  capabilities: string[];
  stack: string[];
  // [[VERIFY: add real, founder-supplied measurable outcomes per project when
  // available]]. Leave empty to keep the qualitative framing — never invent.
  impact?: string[];
  takeaway: string;
  image?: string;
  gallery?: string[];
  diagram?: boolean;
}

/* -------------------------------------------------- Config / [[VERIFY]] items */
/* Fill these when confirmed. Empty values degrade gracefully — nothing invented
   is shown on the live page. */
export const config = {
  // Booking link (Google Calendar appointment page). Because this is set, the
  // primary CTA reads "Book a conversation" and opens this link in a new tab;
  // the contact form stays available as the alternative.
  bookingUrl: "https://calendar.app.google/dAY836e79fkCiy9m6",
  // Founder photo: public/brand/founder.jpg.
  founderPhoto: "/brand/founder.jpg",
} as const;

/* --------------------------------------------------------------- Site meta */

const primaryCta: CTA = config.bookingUrl
  ? { label: "Book a conversation", href: config.bookingUrl, external: true }
  : { label: "Start a conversation", href: "/contact" };

const assessmentCta: CTA = {
  label: "Start with an assessment",
  href: "/contact?topic=assessment",
};

export const site = {
  name: "LT Strategy Partners",
  shortName: "LT Strategy",
  domain: "ltstrategypartners.com",
  url: "https://ltstrategypartners.com",
  tagline: "Strategy that delivers.",
  description:
    "An independent digital and technology advisor for leadership teams, specialized in AI — finding where technology creates real, measurable value, then advising, building, and proving it.",
  email: "luca.tamas@ltstrategypartners.com",
  phone: "+40734950060", // used for the tel: link
  phoneDisplay: "+40 734 950 060", // shown to readers
  founder: "Luca-Ștefan Tamaș",
  location: "Iași, Romania · Working with clients across the EU and US.",
  links: {
    companyLinkedin: "https://www.linkedin.com/company/lt-strategy-partners/",
    founderLinkedin:
      "https://www.linkedin.com/in/luca-%C8%99tefan-tama%C8%99-a40282229/",
    github: "https://github.com/LucaStefan112",
  },
  primaryCta,
  assessmentCta,
};

/* ---------------------------------------------------------------- Navigation */
/* Canonical Services target is the /services page (Task 11) — used in header
   AND footer. About / Work / Insights / Services / Contact appear in both. */

export const nav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/* --------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Digital & technology advisory · AI solutions",
  headline: "Strategy that delivers measurable results.",
  subhead:
    "An independent digital and technology advisor for leadership teams, specialized in AI. We find where technology genuinely creates value, then advise, build, and prove it — from boardroom to deployment, and back to the numbers.",
  primaryCta: site.primaryCta,
  // Low-commitment path alongside the direct one (Task 5).
  secondaryCta: site.assessmentCta,
  trustLine: "Independent · Senior-led · Outcome-focused",
} as const;

/* -------------------------------------------------- The problem we solve */

export const intro = {
  eyebrow: "Why it matters",
  body: "Most leadership teams betting on AI don't lack ambition — they lack an independent, honest read on where it actually pays off, and someone who can take it into production safely and prove it worked. Pilots stall. Vendors oversell. The demo never survives real users. We're the technology advisor who closes that gap — and the one you keep for the decisions that come after.",
} as const;

/* ------------------------------------------------------- Value pillars */

export const pillars = {
  eyebrow: "How we're different",
  items: [
    {
      title: "Clarity before code.",
      body: "We start with your business and your numbers, not the technology. We find where value genuinely is, where it isn't, and what it's worth before anyone writes a line of code.",
    },
    {
      title: "We advise and we build.",
      body: "Most firms hand you a recommendation and leave. We stay through delivery — from roadmap, to a working solution in production, to impact measured against the numbers we agreed.",
    },
    {
      title: "AI, used judiciously.",
      body: "AI is one capability among several. We apply it where it earns its place, choose the simpler answer when it's the better one, and tell you plainly which is which.",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Services */

export const services = {
  eyebrow: "What we do",
  intro:
    "One technology partner across the full journey — advisory through to delivery, with deep specialization in AI — so strategy and delivery never disconnect.",
  items: [
    {
      title: "Technology Advisory & Oversight",
      body: "The role we're built for: the senior, independent technology advisor a leadership team keeps close — for where to invest, what to say no to, how to spend well, and where the real risk sits. No product to sell you, and no agenda but yours.",
      deliverables: [
        "An ongoing advisor for the decisions that matter, between and beyond projects",
        "Independent review of direction, spend, roadmaps, vendors, and risk",
        "Direct access to a senior technologist for the architecture, build-vs-buy, and AI calls",
      ],
    },
    {
      title: "Opportunity & Strategy",
      body: "We assess where AI, data, and technology can move revenue, cost, or risk, size the value against your P&L, and separate the few opportunities worth pursuing from the many that aren't.",
      deliverables: [
        "A prioritised opportunity map, ranked by value and effort",
        "Sized business cases for the top opportunities",
        "A sequenced roadmap with owners and decision points",
      ],
    },
    {
      title: "Implementation & Delivery",
      body: "We design, build, integrate, and deploy the solutions ourselves, working alongside your teams so the knowledge stays in-house. We ship working software over slideware, and stay until it's live, used, and handed over cleanly.",
      deliverables: [
        "A working solution running in production",
        "Integration into your existing systems and workflows",
        "Documentation and a trained team who can run it without us",
      ],
    },
    {
      title: "Operational Performance",
      body: "We improve the processes and ways of working around the technology, so the gains show up in the numbers and hold once we leave. We redesign how work flows, then put measurement in place to keep it honest.",
      deliverables: [
        "Redesigned processes mapped to the new tools",
        "A measurement framework tied to your KPIs",
        "A before-and-after view of the gain",
      ],
    },
  ] as Service[],
  // Featured, visually distinct block that showcases the AI specialty within
  // the single Services narrative (folds in AI governance). No prices — the
  // free AI Opportunity Assessment is the entry point.
  ai: {
    eyebrow: "The specialty",
    title: "Specialized in AI that earns its place.",
    body: "AI is where we go deepest — not demos and pilots that stall, but production AI and LLM systems that run reliably, respect your data, and prove their worth. We've built exactly this, including retrieval-augmented assistants that run entirely on a client's own hardware.",
    points: [
      {
        title: "Production AI & LLM systems",
        body: "Retrieval-augmented assistants, agents, and automation taken past the demo — with the retrieval tuning, output validation, and monitoring that make them safe to rely on.",
      },
      {
        title: "Private & self-hosted AI",
        body: "Where confidentiality or regulation demands it, AI that runs on your own infrastructure — nothing sensitive leaving your walls.",
      },
      {
        title: "AI governance & EU AI Act readiness",
        body: "A clear read on where the EU AI Act and responsible-AI duties apply to you, and a prioritised, risk-ranked list of what to put in place — practical guidance, not theory.",
      },
    ] as Card[],
    note: "Most AI work starts with the AI Opportunity Assessment — free, fixed-scope, and honest about where AI won't pay off.",
    cta: site.assessmentCta,
  },
} as const;

/* ----------------------------- AI Opportunity Assessment (entry offer) */

export const assessment = {
  eyebrow: "Start here — a low-risk first step",
  heading: "The AI Opportunity Assessment.",
  body: "Not sure where AI or automation actually pays off in your business? Start here. In two to four weeks, we assess your operations, data, and goals and give you a clear, prioritised view of where technology can move revenue, cost, or risk — and, just as honestly, where it can't. Fixed scope. No fee. No obligation to go further.",
  getHeading: "What you get",
  get: [
    "A prioritised opportunity map, ranked by value and effort",
    "Sized business cases for the top two or three opportunities",
    "A practical, sequenced roadmap you own — whether you build it with us or not",
  ],
  // The initial assessment is free (a low-risk entry offer).
  priceNote: "Free — scoped in a short introductory call.",
  cta: site.assessmentCta,
} as const;

/* ------------------------------------------------ Your data & IP (Task 6) */

export const dataIp = {
  id: "data-ip",
  eyebrow: "Your data, your IP",
  heading: "Built by a security engineer — handled accordingly.",
  body: "We come from a security and data-protection background — production security engineering at Bitdefender, and earlier security R&D in authentication and encryption. That discipline is built into how we work with you.",
  items: [
    {
      title: "Your data stays yours.",
      body: "We access only what an engagement needs, work happily under your NDA, and can operate inside your own environment.",
    },
    {
      title: "You own what we build.",
      body: "Code, models, and documentation are yours, with a clean handover so your team can run everything without us.",
    },
    {
      title: "Secure by design.",
      body: "Tenant isolation, least-privilege access, and secret handling are decided at the design stage — not patched on later.",
    },
    {
      title: "AI used responsibly.",
      body: "Where confidentiality matters, we can run AI on-premise or self-hosted; where correctness matters, we keep model outputs behind validation.",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Approach */

export const approach = {
  eyebrow: "Our approach",
  intro: "A disciplined path from question to outcome.",
  steps: [
    {
      n: "01",
      title: "Diagnose",
      body: "We understand your goals, operations, data, and constraints, and set out the full picture in plain terms.",
      output: "A shared, honest view of where you stand and what's in the way.",
    },
    {
      n: "02",
      title: "Prioritise",
      body: "We identify the highest-value opportunities and build the business case for each. Fewer, better bets.",
      output: "A short list of sized, sequenced bets with agreed success measures.",
    },
    {
      n: "03",
      title: "Build",
      body: "We design and deliver the solution pragmatically, with your teams, shipping working software over slideware.",
      output: "A working solution in production, used by the people it's for.",
    },
    {
      n: "04",
      title: "Prove & scale",
      body: "We measure the impact against the numbers we agreed, embed what works, and scale it.",
      output: "Proven results on your KPIs, and a plan to extend what worked.",
    },
  ] as Step[],
} as const;

/* ----------------------------------------------------- Statement band */

export const statement = {
  headline: "We're judged by outcomes, not output.",
  support:
    "Every engagement is tied to results you can measure — and we tell you the truth about what's working.",
} as const;

/* --------------------------------------------------- Testimonials (Task 3) */
/* No testimonials yet. The section renders only when this array has at least one
   REAL, PERMISSIONED quote — an empty array shows nothing (no placeholder). Add
   real quotes here when available; example shape:
     { quote: "…", name: "…", role: "Former manager, Enovis", company: "Enovis" }
*/
export const testimonials: Testimonial[] = [];

export const testimonialsMeta = {
  eyebrow: "What clients say",
  heading: "In their words.",
} as const;

/* ------------------------------------------------- Who we work with */

export const clients = {
  eyebrow: "Who we work with",
  body: "We work with the whole organization, not just the top of it. Lasting change needs the people who set direction and the people who do the work moving together — so we partner across every level, from the boardroom to the teams on the ground.",
  levels: [
    {
      role: "Boards and the C-suite",
      detail: "CEOs, COOs, CTOs, and CIOs who set direction and decide where to invest.",
    },
    {
      role: "Function and department leads",
      detail: "The heads of operations, finance, product, and technology who own the results.",
    },
    {
      role: "The teams who do the work",
      detail: "The managers, analysts, and engineers who build, adopt, and run it every day.",
    },
  ],
} as const;

/* ------------------------------------------- About: homepage teaser (Task 1) */

export const aboutTeaser = {
  eyebrow: "Who's behind it",
  heading: "Founder-led, and hands-on.",
  body: "LT Strategy Partners is led by Luca-Ștefan Tamaș — a systems engineer who builds and ships production AI, from self-hosted, retrieval-augmented LLM systems to full SaaS products. He builds production systems at Bitdefender, has been lead architect on a multi-tenant enterprise platform (BI, ERP, document management, process automation), and has founded two SaaS products of his own. You work with him directly: the person who advises you is the person who does the work.",
  link: { label: "More about Luca", href: "/about" } as CTA,
  photoCaption: `${"Luca-Ștefan Tamaș"} · Founder`,
} as const;

/* ------------------------------------------------- About: full page (Task 1) */

export const aboutPage = {
  eyebrow: "About",
  heading: "A hands-on partner, start to finish.",
  paragraphs: [
    "I'm Luca-Ștefan Tamaș, and LT Strategy Partners is my practice. It is small and senior on purpose: when you work with us, you work with me directly. The person who gives the advice is the person who does the work and stays accountable for how it turns out.",
    "By background I'm a systems engineer. The work I care about most — and what this practice is built around — is AI that has to hold up in production, not just in a demo: strong retrieval and clean data, model outputs kept behind validation, sane latency and cost, and the monitoring and fallbacks that keep a system dependable once real people rely on it.",
    "Day to day I build production systems at Bitdefender, one of the world's larger cybersecurity companies, and before that I was lead architect on a multi-tenant enterprise platform spanning business intelligence, ERP, document management, and process automation. I've founded and shipped two SaaS products of my own — Mazely and Processly — and built a self-hosted, retrieval-augmented AI assistant that runs entirely offline on hardware a venue already owns. Since 2020 I've delivered client work end to end across web, mobile, data, and AI, including apps on the App Store and Google Play. That security and platform grounding is why the AI I build stays private and dependable by default.",
  ],
  beliefsHeading: "What I believe about this work",
  beliefs: [
    "I believe software and a company's digital infrastructure are among the best investments a business can make — but only when they are made thoughtfully. Plenty of organizations spend heavily and follow whatever is trending, then wonder why the money never reached the bottom line. The technology is rarely the hard part. Spending on the right thing, for the right reason, in the right order is where the return actually comes from, and it is the part most often skipped.",
    "I also believe the cheapest money you will ever spend is the conversation before you start. A short, honest talk with someone who has built these systems can save months of work and a lot of budget — by catching the wrong problem early, setting aside the idea that will not pay off, and pointing you at the simplest thing that actually works. That is exactly why the first step I offer costs nothing.",
  ],
  whyHeading: "How I like to work",
  why: "I would rather be useful than impressive. Because I have had to make these systems work in the real world, I can tell you plainly what is worth doing, what is not, and what it will really take — and I will not recommend anything I would not be willing to build myself.",
  glanceHeading: "Background at a glance",
  glance: [
    "Builds production AI and LLM systems — retrieval-augmented generation, self-hosted models, and outputs kept behind validation",
    "Built a self-hosted, offline AI assistant; founder of two production SaaS products (Mazely, Processly)",
    "Production systems engineering at Bitdefender; lead architect on a multi-tenant BI / ERP / DMS / process-automation platform",
    "Security and data-protection foundation: authentication, encryption, least-privilege, and tenant isolation",
    "Data & analytics credentials (Meta Data Analyst, Google Business Intelligence, Advanced SQL, Tableau); security certifications (SOC Level 1, DevSecOps, Jr Penetration Tester)",
    "Based in Iași, Romania · working with clients across the EU and US",
  ],
  photoCaption: `${"Luca-Ștefan Tamaș"} · Founder`,
  ctaHeading: "Where is the value hiding in your business?",
} as const;

/* ------------------------------------------------------- CTA (pre-footer) */

export const ctaBand = {
  headline: "Where is the value hiding in your business?",
  body: "Let's have a direct, no-pressure conversation about where AI and technology could actually move your numbers.",
  cta: site.primaryCta,
} as const;

/* ----------------------------------------------------------------- FAQ (Task 12) */

export const faq = {
  eyebrow: "Common questions",
  heading: "Questions leaders ask first.",
  items: [
    {
      q: "How do we start?",
      a: "With a fixed-scope AI Opportunity Assessment — a low-risk first step that gives you a prioritised roadmap you own.",
    },
    {
      q: "How do you price?",
      a: "The AI Opportunity Assessment is free. Larger engagements are scoped and priced per project, agreed up front.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes — with clients across the EU and US, and on-site in Romania where it helps.",
    },
    {
      q: "We're early on AI. Is it too soon?",
      a: "No. The assessment is designed exactly for that starting point.",
    },
    {
      q: "Who actually does the work?",
      a: "The firm is founder-led. Luca is directly involved in every engagement — you work with a senior person, not a junior hand-off.",
    },
    {
      q: "How do you handle our data and IP?",
      a: "Your data stays yours, you own what we build, and everything is secure by design.",
      href: "/#data-ip",
    },
  ] as FaqItem[],
} as const;

/* ------------------------------------------------------------ Contact */

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
  autocomplete?: string;
}

export const contact = {
  eyebrow: "Contact",
  headline: "Let's have a direct conversation.",
  intro:
    "Tell us a little about your organization and what you're trying to move. We'll come back to you personally — no sales script, no pressure.",
  email: site.email,
  phone: site.phone,
  phoneDisplay: site.phoneDisplay,
  location: site.location,
  // NOTE: the form is not wired to a backend. See README to connect Formspree/Resend.
  // The submit handler falls back to a mailto: link if no endpoint is configured.
  fields: [
    { name: "name", label: "Name", type: "text", required: true, autocomplete: "name" },
    { name: "company", label: "Company", type: "text", required: true, autocomplete: "organization" },
    { name: "role", label: "Role", type: "text", required: false, autocomplete: "organization-title" },
    { name: "email", label: "Email", type: "email", required: true, autocomplete: "email" },
    { name: "message", label: "How can we help?", type: "textarea", required: true },
  ] as FormField[],
  // Query-param prefills for the message field (e.g. /contact?topic=assessment).
  prefills: {
    assessment: "I'd like an AI Opportunity Assessment.",
  } as Record<string, string>,
  submitLabel: "Send message",
  successMessage:
    "Thank you — your message is ready to send. We'll reply personally within two business days.",
} as const;

/* ------------------------------------------------------------- Footer */

export const footer = {
  tagline: site.tagline,
  email: site.email,
  phone: site.phone,
  phoneDisplay: site.phoneDisplay,
  location: site.location,
  linkedin: site.links.companyLinkedin,
  blurb:
    "A senior-led advisory and delivery firm helping leadership teams turn strategy — and AI where it earns its place — into measurable results.",
} as const;

/* --------------------------------------------------------- Insights (Task 8) */

export const insights = {
  eyebrow: "Insights",
  heading: "Plain thinking on AI and technology.",
  intro:
    "Short, practical pieces for leaders — not engineers — on getting real value from AI and technology.",
} as const;

/* ------------------------------------------------- Selected work / portfolio */

export const work = {
  eyebrow: "Selected work",
  // Founder-led voice (Task 2): no "team".
  intro:
    "A few things we've designed and built. We show them to make one point plainly: we don't just advise — we ship. Here is what each took, technically and strategically, and what it means for the work we could do with you.",
  projects: [
    {
      slug: "processly",
      name: "Processly",
      tagline: "Design your work once. Run it forever.",
      category: "Workflow automation",
      kind: "product",
      label: "Product · built end to end",
      accent: "#111214",
      heroDark: true,
      oneLiner:
        "A work-design platform that turns repeatable work into visual processes teams can launch on demand",
      overview:
        "Processly is a modern web application for visual process and project orchestration. Teams design a workflow once, then generate projects from it — with one click, on a schedule, or both. The emphasis is on full ownership and visibility of how work runs.",
      context:
        "Teams re-design and manually re-run the same recurring work, and the knowledge behind those processes lives in people's heads and slide decks. Processly captures that repeatable work as reusable systems instead.",
      delivered: [
        "A DAG-based visual workflow designer where a process is defined once and reused",
        "One-click project generation from a saved process design",
        "Scheduled generation so recurring work launches automatically",
        "Combined manual and scheduled triggers for the same process",
      ],
      strategic: [
        "Captures repeatable knowledge work as reusable systems rather than one-off effort",
        "Delivers operational consistency without adding headcount",
        "Gives leaders visibility into how work actually runs",
        "Moves process knowledge out of people's heads and into an owned system",
      ],
      capabilities: [
        "Process design",
        "Workflow automation",
        "Scheduling & orchestration",
        "Product & UX design",
      ],
      // Versions set to match the public repos (github.com/LucaStefan112/Processly
      // + Processly-API): Next 15.0.4 / React 18.3.1, React Flow (@xyflow/react),
      // Prisma over PostgreSQL, MinIO; scheduling uses node-cron (no Redis).
      // [[VERIFY: bump these if the deployed app runs newer versions.]]
      stack: [
        "Next.js 15",
        "React 18",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "React Flow",
        "MinIO",
      ],
      takeaway:
        "This shows we can turn a client's recurring, manual work into designed, reusable systems that run on demand or on a schedule — giving an operations team consistency and visibility without growing the team.",
      image: "processly",
    },
    {
      slug: "mazely",
      name: "Mazely",
      tagline: "Every visitor finds their way. Every time.",
      category: "Product engineering",
      kind: "product",
      label: "Product · built end to end",
      accent: "#0077B5",
      oneLiner:
        "Photo-guided indoor wayfinding for complex institutions — no app, no hardware",
      overview:
        "Mazely is an enterprise indoor navigation platform for public buildings, universities, hospitals, and institutions. Visitors scan a QR code and follow turn-by-turn directions built from real corridor photographs, with no app download and no on-site hardware. An admin dashboard handles floor design, QR management, and movement analytics.",
      context:
        "Visitors get lost in large, complex institutional buildings, and staff waste time giving directions. Institutions also have no data on how people actually move through their space.",
      delivered: [
        "Photo-guided turn-by-turn navigation delivered through a scanned QR code — no app download, no installed hardware",
        "Multi-tenant architecture with multi-floor and multi-building routing and accessibility-aware pathfinding",
        "Multilingual support across English, Romanian, French, and German",
        "Admin dashboard with drag-and-drop floor design, QR management, and analytics for session tracking, destination popularity, and feedback",
        "Cloud infrastructure with TLS 1.3 in transit, AES-256 at rest, a 99.9% uptime SLA, and deployment in roughly two to four weeks",
      ],
      strategic: [
        "Turns a recurring physical frustration into a low-friction digital layer that cuts staff burden",
        "Produces movement analytics that give institutions data they previously lacked",
        "Built to regulated-institution standards — aligned with GDPR, HIPAA, and ADA, with anonymous session tracking and no PHI collected",
        "The zero-app, zero-hardware model keeps adoption friction and rollout cost low",
      ],
      capabilities: [
        "Indoor wayfinding systems",
        "Accessibility-aware pathfinding",
        "Multilingual product design",
        "Movement analytics",
        "Regulated-industry compliance",
      ],
      stack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "MinIO",
      ],
      takeaway:
        "This shows we can design and ship a compliance-grade product for regulated institutions that removes physical friction while generating useful operational data — an approach that fits anywhere an organization needs a low-friction digital layer over a physical environment.",
      image: "mazely",
    },
    {
      slug: "restaurant-ai",
      name: "Restaurant Menu Assistant",
      tagline: "Applied AI that runs on the restaurant's own hardware.",
      category: "Applied AI",
      kind: "build",
      label: "Self-hosted build",
      accent: "#C2410C",
      oneLiner:
        "A self-hosted AI menu assistant that answers diner questions and runs offline, on-premise",
      overview:
        "The Restaurant Menu Assistant is a self-hosted AI system for restaurants. It pairs a kiosk- and tablet-friendly chat interface that helps diners find dishes by preference or dietary need with an admin panel for managing items, categories, multi-currency prices, discounts, and images. It uses retrieval-augmented generation over the restaurant's own menu and runs entirely on the local network after setup.",
      context:
        "Restaurants want AI help for diners without shipping menu data to the cloud or paying a per-query fee for every question asked. This work addresses how to deliver useful, private AI on hardware a venue already owns.",
      delivered: [
        "A customer chat interface for kiosks and tablets that answers menu questions and finds dishes by preference or dietary need",
        "An admin panel to manage items, categories, multi-currency prices, discounts, and images, with automatic menu reindexing after edits",
        "A retrieval-augmented answering pipeline using Ollama with qwen2.5:3b for chat and bge-m3 for embeddings, backed by Qdrant semantic search",
        "A self-hosted deployment via Podman / Docker Compose with PostgreSQL, MinIO image storage, an Nginx proxy, and token-authenticated admin",
        "Operational discipline: explicit memory budgeting for 8GB hosts, health checks, automated backup and restore, per-install secrets, and LAN-only defaults",
      ],
      strategic: [
        "Keeps data private and on-premise, with no per-query cloud cost",
        "Shows retrieval-augmented generation applied judiciously and cost-consciously, with documented model tradeoffs",
        "Demonstrates the operational rigour to run AI reliably on modest, customer-owned hardware",
        "The same approach can bring private, offline AI to any business wary of cloud dependence",
      ],
      capabilities: [
        "Retrieval-augmented generation",
        "Self-hosted AI deployment",
        "On-premise data privacy",
        "Cost-conscious model choice",
      ],
      // Real stack from the public repository (self-hosted / offline-capable AI).
      stack: [
        "Self-hosted / on-premise",
        "Python",
        "TypeScript",
        "Ollama (qwen2.5:3b · bge-m3)",
        "PostgreSQL",
        "Qdrant",
        "MinIO",
      ],
      takeaway:
        "This shows we can design and ship retrieval-augmented AI that runs privately on a client's own hardware, with the memory budgeting, health checks, and backup discipline needed to keep it running in the real world.",
      diagram: true,
    },
    {
      slug: "transit-analytics",
      name: "Public Transport Analytics — Iași",
      tagline: "Turning fleet telemetry into operating decisions.",
      category: "Data & analytics",
      kind: "analysis",
      label: "Independent analysis",
      accent: "#4F63D2",
      oneLiner:
        "A Metabase dashboard that turns a city's public-transport telemetry into operating decisions",
      overview:
        "A live analytics dashboard for the public-transport fleet of Iași, Romania, built on Metabase over GPS and telemetry data. It reports on 238 vehicles across buses and trams — tracking speed, safety, accessibility, and congestion in one place. It shows how raw fleet telemetry becomes operational views a transport authority can act on.",
      context:
        "Public-transport operators sit on continuous GPS and telemetry streams but rarely turn them into daily operating decisions. The challenge is converting raw location and speed data into views that inform efficiency, safety, and compliance.",
      delivered: [
        "A live vehicle-location map covering the city fleet",
        "Fleet-composition analysis across 238 vehicles (63% buses, 37% trams / light metro)",
        "Mobility-efficiency metrics: average speed by time of day and by category (buses 27.35 km/h, trams 17.52 km/h), plus a speed-distribution histogram",
        "Accessibility indices for wheelchair-accessible (71.85%) and bicycle-accessible (10.08%) vehicles",
        "A congestion-point map and a recorded-speeding table of 58 events, flagging outliers up to 141 km/h as more than 50 km/h over the limit",
      ],
      strategic: [
        "Converts raw telemetry into decisions across efficiency, safety, accessibility, and congestion",
        "Gives operations and public-sector teams a single, factual view for compliance and safety oversight",
        "Demonstrates a repeatable data-to-decisions pipeline that applies to any fleet or sensor stream",
      ],
      capabilities: [
        "Telemetry data pipelines",
        "Operational dashboarding",
        "Fleet & mobility analytics",
        "Data-to-decisions design",
      ],
      // [[VERIFY: full stack]] — Metabase confirmed from the dashboard export.
      stack: ["Metabase (dashboard / BI)", "SQL", "GPS / telemetry pipeline"],
      takeaway:
        "This shows we can take raw sensor and telemetry data and turn it into operational dashboards that drive real decisions — an approach that applies to any client running a fleet, a network, or a stream of operational data.",
      image: "transit-map",
      gallery: ["transit-charts", "transit-speeding"],
    },
  ] as WorkProject[],
} as const;

/* ------------------------------------------ Supporting-route intro copy */

export const pageIntros = {
  services: {
    eyebrow: "Services",
    title: "From boardroom to deployment.",
    lead: "One senior partner across the full journey — strategy, delivery, and the operational change that makes it stick. No handoffs, no disconnect between the plan and the people who build it.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's have a direct conversation.",
    lead: "Tell us a little about your organization and what you're trying to move. We'll come back to you personally — no sales script, no pressure.",
  },
} as const;

/* --------------------------------------------------- Per-page SEO metadata */

export const pageMeta = {
  home: {
    title: "LT Strategy Partners — Technology advisor, specialized in AI",
    description: site.description,
    path: "/",
  },
  services: {
    title: "Services — LT Strategy Partners",
    description:
      "Independent technology advisory and oversight, strategy, delivery, and operational performance — with deep specialization in AI. One senior partner across the full journey.",
    path: "/services",
  },
  about: {
    title: "About — LT Strategy Partners",
    description:
      "Founder-led by Luca-Ștefan Tamaș, a systems engineer who builds production AI and LLM systems and has shipped enterprise platforms and two SaaS products of his own.",
    path: "/about",
  },
  contact: {
    title: "Contact — LT Strategy Partners",
    description:
      "Have a direct, no-pressure conversation about where AI and technology could move your numbers.",
    path: "/contact",
  },
  insights: {
    title: "Insights — LT Strategy Partners",
    description:
      "Short, practical pieces for leaders on getting real value from AI and technology.",
    path: "/insights",
  },
  privacy: {
    title: "Privacy — LT Strategy Partners",
    description: "How LT Strategy Partners collects and handles your information.",
    path: "/privacy",
  },
  terms: {
    title: "Terms — LT Strategy Partners",
    description: "The terms on which the LT Strategy Partners website is provided.",
    path: "/terms",
  },
} as const;
