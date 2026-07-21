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
  role: string; // e.g. "Former manager, [Company]"
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
  // Google Apps Script web-app URL that writes form submissions into the
  // "Website Submissions" Google Sheet (setup: LT-Assets/forms-endpoint).
  // Empty = both forms fall back to mailto:. PUBLIC_CONTACT_ENDPOINT env
  // overrides this at build time if ever needed.
  contactEndpoint:
    "https://script.google.com/macros/s/AKfycbzLSRed2MODuWezvsSzL-kf98Oj3ckz8C9CRt7ZxElQVDFn82mfybfXkcgAJv_iWwF8/exec",
  // Plausible Analytics: cookieless, privacy-first, no consent banner needed.
  // Set to the domain registered in your Plausible dashboard (must match).
  // Empty = analytics off. Plausible ignores localhost, so local builds never
  // pollute the stats — only the live site at this domain reports.
  plausibleDomain: "ltstrategypartners.com",
  // Base URL of the Plausible instance that serves the tracking script and
  // receives events (no trailing slash). This is a self-hosted instance;
  // use "https://plausible.io" for Plausible Cloud instead.
  plausibleHost: "https://plausible-production-c952.up.railway.app",
} as const;

/* --------------------------------------------------------------- Site meta */

const primaryCta: CTA = config.bookingUrl
  ? { label: "Book a conversation", href: config.bookingUrl, external: true }
  : { label: "Start a conversation", href: "/contact" };

const assessmentCta: CTA = {
  label: "Start with an assessment",
  href: "/assessment",
};

export const site = {
  name: "LT Strategy Partners",
  shortName: "LT Strategy",
  domain: "ltstrategypartners.com",
  url: "https://ltstrategypartners.com",
  tagline: "Strategy that delivers.",
  description:
    "Independent technology & AI advisor for leadership teams. We help you turn AI, innovation, and technology into better business decisions — spotting where they genuinely create value, then turning the right bets into measurable results.",
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
  { label: "Assessment", href: "/assessment" },
  { label: "Scorecard", href: "/scorecard" },
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
  eyebrow: "Technology & AI advisory · innovation applied to the business",
  headline: "Turn AI and technology into better business decisions.",
  subhead:
    "An independent technology and AI advisor for leadership teams. We help you see where innovation genuinely moves the business — which technologies to back, which to skip — then turn the right ones into results you can measure. Practical judgment, not hype.",
  primaryCta: site.primaryCta,
  // Low-commitment path alongside the direct one (Task 5).
  secondaryCta: site.assessmentCta,
  trustLine: "Independent · Senior-led · Business outcomes first",
} as const;

/* -------------------------------------------------- The problem we solve */

export const intro = {
  eyebrow: "Why it matters",
  body: "Every leadership team is under pressure to \"do something with AI\" — and it's genuinely hard to tell the moves that will pay off from the expensive distractions. We're the independent partner who helps you decide: where AI and new technology actually create value in your business, what to prioritize, and how to turn it into results you can measure. No product to sell you, no hype — just clear, practical judgment applied to your decisions.",
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
  headerTitle: "One partner, end to end.",
  deliverablesLabel: "What you get",
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
        "A prioritized opportunity map, ranked by value and effort",
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
    title: "AI, applied where it actually pays off.",
    body: "AI is where we go deepest — cutting through the hype to the handful of places it genuinely moves your business, then building it so it works in the real world, not just the demo. We've built exactly this, including a retrieval-augmented assistant that runs entirely on hardware a business already owns.",
    points: [
      {
        title: "Where AI pays off",
        body: "An honest read of which use cases create real value and which are expensive distractions — sized against your numbers, before any money is spent.",
      },
      {
        title: "Production AI & LLM systems",
        body: "Assistants, agents, and automation taken past the demo — with the retrieval tuning, output validation, and monitoring that make them dependable.",
      },
      {
        title: "Responsible & compliant AI",
        body: "Private or self-hosted where your data demands it, and a clear read on where the EU AI Act applies to you — practical guidance, not theory.",
      },
    ] as Card[],
    note: "Most engagements start with the AI Opportunity Assessment — free, fixed-scope, and honest about where AI won't pay off.",
    cta: site.assessmentCta,
  },
} as const;

/* ----------------------------- AI Opportunity Assessment (entry offer) */

export const assessment = {
  eyebrow: "Start here — a low-risk first step",
  heading: "The AI Opportunity Assessment.",
  body: "Not sure where AI actually pays off in your business? Start here. In two to four weeks, we put your candidate use cases through Gate Zero — the go/no-go check production systems face, applied before any money is spent — and give you a written verdict on each: build now, not yet, or don't build. Including, plainly, where AI won't pay off for you. Fixed scope. No fee. No pitch.",
  getHeading: "What you get",
  get: [
    "A 3–5 page written readout, built to be shown to your board",
    "Every use case scored and mapped by value and production viability",
    "A blunt verdict on your top use case — with the engineering reason",
    "A provisional EU AI Act risk tier for each use case",
  ],
  // The initial assessment is free (a low-risk entry offer).
  priceNote: "Free — founder-delivered, capped at three per month.",
  cta: site.assessmentCta,
} as const;

/* -------------------------- Gate Zero: the /assessment offer page content */
/* The dedicated landing page for the free AI Opportunity Assessment, run
   through the Gate Zero Method. Honesty rules baked into this copy:
   - The capacity cap (3/month) is real for a founder-delivered offer — if
     capacity changes, change the number here and in offer-assets/.
   - The only statistic used is S&P Global's 2025 finding, with attribution.
   - The no-go guarantee is a commitment about future readouts, not a claim
     about past work. Never add invented clients, metrics, or history. */

export const assessmentPage = {
  eyebrow: "The AI Opportunity Assessment",
  heading: "Before you spend on AI, get the verdict a paid audit would start with.",
  lead: "A structured session with your leadership team and a written, prioritized readout — including a blunt call on where AI won't pay off for you. Free, founder-delivered, and capped.",
  heroCta: { label: "Apply for an assessment", href: "#apply" } as CTA,
  heroFacts: [
    "45–60 minutes with your leadership team",
    "One per company",
    "No system access needed",
    "No pitch",
  ],

  problem: {
    eyebrow: "Why this exists",
    heading: "The pattern behind stalled AI is a production pattern.",
    paragraphs: [
      "You've probably watched it happen: a promising pilot, a confident vendor, a demo that impressed everyone — and then nothing that survives contact with real users, real data, and real accountability. S&P Global found that by 2025, 42% of companies had abandoned most of their AI initiatives — almost always after the money was spent, not before.",
      "Those aren't strategy failures. They're production failures: retrieval that can't be grounded in the data you actually have, outputs nobody can validate, costs that don't survive scale, and risk nobody scored before building. So an assessment worth your time has to be a production judgment — not a maturity survey.",
    ],
  },

  deliverable: {
    eyebrow: "What you get",
    heading: "The Gate Zero Readout.",
    intro: "Three to five pages, written personally by the founder — no juniors, no template engine. Built so page one can be forwarded to your board on its own.",
    items: [
      "A one-page decision memo with the verdict in the title — not buried on page four",
      "Every candidate use case scored and plotted on one map: value at stake × production viability, each with its security and EU AI Act exposure badge",
      "A formal gate checklist on your top use case: build now / not yet / don't build, with cost band, time-to-production, and walk-away conditions",
      "A named section — “Where AI won't pay off for you” — with the engineering reason for every no",
      "Next steps that include actions you can take without hiring us",
    ],
    guaranteeLabel: "The written guarantee",
    guarantee: "Expect at least one use case we'll tell you not to build — or not to build yet — with the engineering reason, in writing. And if every idea you bring genuinely clears the gate, the readout says that plainly instead: what it will never do is manufacture a verdict, in either direction.",
    sampleCta: { label: "Read a sample readout", href: "/assessment/sample-readout" } as CTA,
  },

  method: {
    eyebrow: "The method",
    heading: "Gate Zero: the production gate, applied before the money.",
    intro: "In production engineering, a gate is the formal go/no-go checkpoint a system must pass before it ships. Gate Zero applies that discipline to your use cases before anything is built. Seven dimensions, scored on published anchors:",
    dimensions: [
      { name: "Value at stake", desc: "Euros or hours attached to a named workflow — conservative base case, assumptions stated. No hockey sticks." },
      { name: "Data reality", desc: "Does the grounding content actually exist, is it clean, and is it accessible today — or does it live in someone's head?" },
      { name: "Grounding & retrieval feasibility", desc: "Can outputs be grounded in your actual documents, at retrieval quality a production system can sustain?" },
      { name: "Error tolerance vs stakes", desc: "Where would a wrong output land, who notices, and what error rate can this workflow honestly absorb?" },
      { name: "Validation & verifiability", desc: "Can correctness ever be checked — automatically, by sampling, or by a human step that doesn't erase the value?" },
      { name: "Cost, latency & ownership", desc: "Unit economics at production volume, latency the workflow tolerates, and who gets paged after launch." },
      { name: "Security & EU AI Act exposure", desc: "Personal-data touch, attack surface, deployment constraints, and a provisional EU AI Act risk tier — scored per use case, at intake." },
    ],
    rulesLabel: "Three rules, stated in every readout",
    rules: [
      "Dimension weights are fixed before any use case is scored.",
      "No single aggregate “AI readiness score” — the lowest dimension gates; averages hide.",
      "Every score carries a confidence level and its declared assumptions.",
    ],
    questionsLabel: "Four of the actual gate questions",
    gateQuestions: [
      "Where would a wrong output land, and who notices?",
      "What content would ground the answers — and who keeps it current?",
      "What cost per query and latency can this workflow tolerate?",
      "Who owns this system after launch?",
    ],
    standardsNote: "Exposure scoring cross-references the EU AI Act (Article 6 / Annex III), the NIST AI Risk Management Framework, and the OWASP Top 10 for LLM applications.",
  },

  process: {
    eyebrow: "How it runs",
    heading: "Four steps, two to four weeks.",
    steps: [
      { name: "Apply", time: "10 minutes", desc: "Ten questions about your business, your candidate use cases, and where your data lives. Every application is read personally — and some are declined. That's the first verdict, and it happens before any call." },
      { name: "The production stress interview", time: "45–60 minutes", desc: "A structured session with your leadership team — not a pitch, not a maturity survey. Each use case goes under the questions production will eventually ask anyway. Walkthrough only: no credentials, no system access, nothing leaves your walls." },
      { name: "The readout is written", time: "within a week", desc: "Each use case is scored through the seven Gate Zero dimensions and plotted on one value-by-viability map. Founder-written, on your numbers and your vocabulary." },
      { name: "The verdict walkthrough", time: "30 minutes", desc: "You get the readout and a blunt call on your top use case: build now, not yet — and exactly what unlocks it — or don't build. The document is yours either way." },
    ],
  },

  whyFree: {
    eyebrow: "Why it's free",
    heading: "It's a diagnosis, not the treatment.",
    body: "This is how we decide whether to work together. You get the verdict and the priority order; the paid engagements do the work. It stays free because it's capped: one person runs every call and writes every readout — at most three assessments per month, one per company, ever.",
    branches: [
      { name: "If it's a go", desc: "and we fit, the readout maps each open gap to the engagement that closes it. You'll know the shape of the next step before you commit to anything." },
      { name: "If it's a no-go", desc: "you keep the readout, there is no follow-up sequence, and that's the end — unless you write first. A no-go followed by nurture emails would make the verdict worthless." },
    ],
  },

  fit: {
    eyebrow: "Fit",
    heading: "Who it's for — and who it isn't.",
    forLabel: "This is for you if",
    notForLabel: "It isn't if",
    forWho: [
      "Leadership teams with at least one candidate AI use case and a real workflow at stake",
      "Companies with a stalled pilot, a risky rollout, or AI spend that isn't landing",
      "EU-based or EU-exposed organizations that need the AI Act read alongside the value read",
      "Data-sensitive businesses weighing what can and cannot leave their walls",
    ],
    notForWho: [
      "Companies looking for a free implementation plan — this is a verdict, not a blueprint",
      "Teams without an executive sponsor willing to attend the session",
      "Anyone shopping for validation of a decision already made — some readouts say don't build, and yours might",
    ],
  },

  whoRuns: {
    eyebrow: "Who runs it",
    heading: "The method exists because these are the checks I run before I ship anything.",
    facts: [
      "Ships production AI and LLM systems — retrieval tuning, output validation, monitoring, cost and latency budgets",
      "Built a self-hosted, retrieval-augmented AI assistant that runs fully offline on hardware a business already owns",
      "Production security engineer with a data-protection background",
      "Founded two SaaS products; lead architect of a multi-tenant enterprise platform",
    ],
    link: { label: "More about Luca", href: "/about" } as CTA,
  },

  positioning: {
    heading: "Not a quiz. Not a slide-deck engagement.",
    body: "This is not a ten-minute self-scoring quiz, and not a six-figure assessment delivered by junior analysts. It is the use-case verdict a paid audit would start with, delivered personally by the person who would build it. We sell no cloud, no hardware, and no licenses — a “don't build” costs us nothing, which is the only condition under which a “build” means anything.",
    noLockIn: "The readout is written to be useful whether or not you ever hire us.",
  },

  apply: {
    eyebrow: "Apply",
    heading: "Apply for an assessment.",
    intro: "Ten questions, about ten minutes. Every application is read personally — some are declined, and that's the first verdict. If accepted, you'll get the exact call agenda and a sample readout before you commit an hour of your leadership team's time.",
    microcopy: "Free · one per company · at most three per month · walkthrough only, no system access",
    submitLabel: "Submit application",
  },
} as const;

/* ------------------------------------------------ Your data & IP (Task 6) */

export const dataIp = {
  id: "data-ip",
  eyebrow: "Your data, your IP",
  heading: "Built by a security engineer — handled accordingly.",
  body: "We come from a security and data-protection background — production security engineering, and earlier security R&D in authentication and encryption. That discipline is built into how we work with you.",
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
      title: "Prioritize",
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
     { quote: "…", name: "…", role: "COO", company: "Acme Co." }
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
  body: "LT Strategy Partners is led by Luca-Ștefan Tamaș — a systems engineer who builds and ships production AI, from self-hosted, retrieval-augmented LLM systems to full SaaS products. He builds production systems in demanding, security-critical environments, has been lead architect on a multi-tenant enterprise platform (BI, ERP, document management, process automation), and has founded two SaaS products of his own. You work with him directly: the person who advises you is the person who does the work.",
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
    "Day to day I build production systems inside a demanding, security-critical engineering environment, and before that I was lead architect on a multi-tenant enterprise platform spanning business intelligence, ERP, document management, and process automation. I've founded and shipped two SaaS products of my own — Mazely and Processly — and built a self-hosted, retrieval-augmented AI assistant that runs entirely offline on hardware a venue already owns. Since 2020 I've delivered client work end to end across web, mobile, data, and AI, including apps on the App Store and Google Play. That security and platform grounding is why the AI I build stays private and dependable by default.",
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
    "Production systems engineering in a security-critical environment; lead architect on a multi-tenant BI / ERP / DMS / process-automation platform",
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
      a: "With a fixed-scope AI Opportunity Assessment — a low-risk first step that gives you a prioritized roadmap you own.",
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
  asideEyebrow: "Direct line",
  asideLead: "Prefer email, or want to reach us straight away?",
  asidePoints: [
    "Independent, senior-led advice.",
    "A reply within two business days.",
    "No sales script, no pressure.",
  ],
  privacyHtml:
    'We only use your details to reply to your enquiry, and never share them with third parties. See our <a href="/privacy">privacy policy</a>.',
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
        "Cloud infrastructure with TLS 1.3 in transit and AES-256 at rest, architected for high availability",
      ],
      strategic: [
        "Turns a recurring physical frustration into a low-friction digital layer that cuts staff burden",
        "Produces movement analytics that give institutions data they previously lacked",
        "Designed with regulated-institution requirements in mind — privacy-by-design, anonymous session tracking, and no personal health data collected",
        "The zero-app, zero-hardware model keeps adoption friction and rollout cost low",
      ],
      capabilities: [
        "Indoor wayfinding systems",
        "Accessibility-aware pathfinding",
        "Multilingual product design",
        "Movement analytics",
        "Privacy-by-design",
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
        "This shows we can design and ship a privacy-conscious product for complex institutions that removes physical friction while generating useful operational data — an approach that fits anywhere an organization needs a low-friction digital layer over a physical environment.",
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
        "Demonstrates the operational rigor to run AI reliably on modest, customer-owned hardware",
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
        "This shows we can design and ship retrieval-augmented AI that runs privately on hardware a business already owns, with the memory budgeting, health checks, and backup discipline needed to keep it running in the real world.",
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

/* ------------------------------------------------ AI & Tech Opportunity Scorecard */
/* Free self-serve diagnostic. Reader answers 10 business questions, sees a score
   (0–100) and tier on-screen, then can email-gate a fuller written readout that
   routes into the free AI Opportunity Assessment. Scoring is a straight sum of
   the selected option points. One honest override: if Q3 (where the data lives)
   scores 0, the result leads with `dataGateNote` regardless of total. */

export interface ScorecardOption {
  label: string;
  points: number;
}
export interface ScorecardQuestion {
  q: string;
  options: ScorecardOption[];
}
export interface ScorecardTier {
  slug: string;
  min: number;
  max: number;
  name: string;
  headline: string;
  body: string;
}

export const scorecardPage = {
  eyebrow: "Free self-check · about 3 minutes",
  heading: "Is AI or a new tech bet actually worth it for your business — yet?",
  lead: "Ten plain questions, no jargon, no sign-up to start. You'll get an honest read on whether AI or a technology investment would genuinely pay off for a company like yours right now — and, just as often, where the smarter move is to fix something first. This isn't a maturity score to make you feel behind. It's a straight answer about where your money would actually go to work.",
  microcopy: "No login to answer. We only ask for an email if you want the fuller written readout.",
  // The Q3 index (0-based) whose zero-point answer triggers the data-gate override.
  dataGateQuestionIndex: 2,
  dataGateNote:
    "One thing first, before anything else: right now the information you'd need lives mostly in people's heads and email. Until it lives somewhere a system can actually reach, no AI or tech bet can pay off — it's the one thing worth fixing before you spend on anything below.",
  q10Note:
    "There's no wrong answer here — high-stakes work isn't off-limits for AI, it just needs to be built more carefully. This question shapes the advice, not the verdict.",
  questions: [
    {
      q: "How much of your team's week goes into repetitive, rule-based manual work — re-keying data, formatting the same reports, answering the same questions, moving information between tools?",
      options: [
        { label: "Barely any I could point to", points: 0 },
        { label: "Some, but it's scattered across different people", points: 4 },
        { label: "A clear chunk — a few hours per person, every week", points: 7 },
        { label: "A lot — it's a real cost, and people are partly hired to do it", points: 10 },
      ],
    },
    {
      q: "Is there a specific, named problem you're hoping AI or technology would solve?",
      options: [
        { label: "Not really — we're looking because everyone's talking about AI", points: 0 },
        { label: "A vague sense that something could be better", points: 3 },
        { label: "Yes — we can name the bottleneck, but not the fix", points: 7 },
        { label: "Yes — we can name it and roughly what it costs us", points: 10 },
      ],
    },
    {
      q: "When your team needs the information to do this work, where does it actually live?",
      options: [
        { label: "Mostly in people's heads and email threads", points: 0 },
        { label: "In documents and spreadsheets, scattered around", points: 4 },
        { label: "In proper systems, but messy or spread across too many tools", points: 7 },
        { label: "In systems, reasonably clean and easy to get at", points: 10 },
      ],
    },
    {
      q: "Think of the last significant software or tool you rolled out. How did it go?",
      options: [
        { label: "We bought it and almost nobody uses it", points: 0 },
        { label: "We've never really done a proper rollout", points: 2 },
        { label: "Mixed — some adoption, a lot of resistance", points: 4 },
        { label: "Well — people actually adopted it and it's part of how we work now", points: 10 },
      ],
    },
    {
      q: "Is anything outside the company pushing this?",
      options: [
        { label: "Nothing we can point to — it's internal curiosity", points: 0 },
        { label: "We sense competitors starting to move", points: 5 },
        { label: "Customers or partners are asking for it", points: 8 },
        { label: "A specific deal, contract, or requirement depends on it", points: 10 },
      ],
    },
    {
      q: "If the right opportunity were clear, what could you realistically put behind it in the next 6–12 months?",
      options: [
        { label: "Nothing set aside — we'd have to go find it", points: 0 },
        { label: "A small budget for an experiment only", points: 4 },
        { label: "A real but modest budget for one focused project", points: 7 },
        { label: "Funded and ready to move on the right bet", points: 10 },
      ],
    },
    {
      q: "If you started something, who would own it inside the company?",
      options: [
        { label: "No one obvious — we'd all be part-time on it", points: 0 },
        { label: "Someone could, on top of their day job", points: 4 },
        { label: "We have someone who could own it with some support", points: 7 },
        { label: "A clear owner, with the time and the authority to see it through", points: 10 },
      ],
    },
    {
      q: "How do decisions like this usually get made here?",
      options: [
        { label: "Slowly — many stakeholders, hard to reach a yes", points: 2 },
        { label: "It depends — some things move, some stall", points: 5 },
        { label: "Leadership can decide and commit fairly quickly", points: 10 },
      ],
    },
    {
      q: "How often does the thing you'd want to improve actually happen?",
      options: [
        { label: "Rarely — it's occasional", points: 0 },
        { label: "A handful of times a week", points: 4 },
        { label: "Many times a day, across the team", points: 7 },
        { label: "Constantly — it's core to how the business runs", points: 10 },
      ],
    },
    {
      q: "If a tool got something wrong now and then, what would happen?",
      options: [
        { label: "It could be dangerous, or legally or financially serious — there's no room for error", points: 2 },
        { label: "It would matter — someone would have to catch it", points: 6 },
        { label: "A person reviews the output anyway before it's used", points: 9 },
        { label: "Small mistakes are easy to spot and low-stakes", points: 10 },
      ],
    },
  ] as ScorecardQuestion[],
  tiers: [
    {
      slug: "foundations-first",
      min: 0,
      max: 34,
      name: "Foundations first",
      headline: "Not yet — and that's a useful answer.",
      body: "Right now, an AI or big technology bet would most likely be money spent ahead of the problem. That's not a criticism — it's the cheapest lesson you'll ever get, because you're learning it before the invoice, not after. The honest first step isn't a tool. It's getting one thing in order: a problem worth naming, information a system can actually reach, or someone who can own the work. Sort that, and a lot of options open up cheaply. Spend into it now, and you'll likely be one of the many companies that quietly shelve the project a year later. Come back and re-run this once the ground is firmer — you'll see the score move.",
    },
    {
      slug: "real-seed",
      min: 35,
      max: 59,
      name: "A real seed, not yet a project",
      headline: "There's something here worth shaping.",
      body: "You've got the beginnings of a real opportunity — but it's still a seed, not a plan, and the fastest way to waste money now is to jump to a solution before the problem is sized. The move that actually pays: pick the single workflow that costs you the most, write down what it costs today in hours or euros, and be honest about where the data for it lives. Do that and you'll either find a bet worth making — or save yourself a project that was never going to land. If it would help to pressure-test which one it is, that's exactly what the free AI Opportunity Assessment is for.",
    },
    {
      slug: "strong-candidate",
      min: 60,
      max: 79,
      name: "Strong candidate",
      headline: "This is worth a serious look.",
      body: "You have most of what a bet like this needs — a real problem, workable data, and enough readiness to act. The risk at this stage isn't doing nothing; it's building the wrong thing well, or picking the use case that demos beautifully and then dies on contact with real users. Before you commit budget, the highest-return half-hour you can spend is getting a straight verdict on which use case actually pays off in production — and which ones to leave alone. That's what the free AI Opportunity Assessment gives you, in writing, before you spend a cent.",
    },
    {
      slug: "ready-to-move",
      min: 80,
      max: 100,
      name: "Ready to move",
      headline: "The question isn't whether — it's which bet, and in what order.",
      body: "On paper, you're ready: a named problem, data a system can reach, budget, an owner, and the pressure to move. The only thing standing between you and a return is choosing the right first bet and sequencing it well — because at this stage the expensive mistake is building three things adequately instead of one thing that pays. This is exactly the point where a short, honest, outside read earns its keep. The free AI Opportunity Assessment gives you a written verdict on each candidate — build now, not yet, or don't build — including, plainly, anywhere AI won't pay off for you. No product to sell you, so a \"don't build\" costs us nothing to say.",
    },
  ] as ScorecardTier[],
  ui: {
    seeResult: "See my result",
    incomplete: "Please answer all ten questions to see your result.",
    retake: "Start over",
    scoreLabel: "Your score",
    outOf: "/ 100",
    resultEyebrow: "Your result",
  },
  gate: {
    heading: "Want the fuller readout in writing?",
    body: "Leave an email and I'll send a longer version of your result: what your answers point to, the two or three things I'd look at first for a company in your position, and — if it fits — the one question I'd get answered before spending anything. No newsletter, no drip sequence, no sales calls you didn't ask for. One useful email.",
    emailLabel: "Work email",
    button: "Send me the readout",
    privacy: "We use your email only to send this readout. We don't pass it on and we won't add you to a list.",
    privacyLinkLabel: "See our privacy policy.",
    privacyHref: "/privacy",
  },
  ctaPrimary: {
    label: "Apply for a free AI Opportunity Assessment",
    href: "/assessment",
    microcopy: "Free · one per company · founder-delivered · a written verdict, including where AI won't pay off.",
  },
  ctaSecondary: {
    label: "Or just talk it through",
    href: "/contact",
  },
} as const;

export const pageMeta = {
  home: {
    title: "LT Strategy Partners — Technology & AI advisor for smarter business decisions",
    description: site.description,
    path: "/",
  },
  scorecard: {
    title: "AI & Tech Opportunity Scorecard — LT Strategy Partners",
    description:
      "A free 3-minute self-check: ten plain questions, then an honest read on whether AI or a technology bet would actually pay off for your business yet — or what to fix first.",
    path: "/scorecard",
  },
  services: {
    title: "Services — LT Strategy Partners",
    description:
      "Independent technology advisory and oversight, strategy, delivery, and operational performance — with deep specialization in AI. One senior partner across the full journey.",
    path: "/services",
  },
  assessment: {
    title: "AI Opportunity Assessment — LT Strategy Partners",
    description:
      "A free, founder-delivered assessment: every AI use case scored for value, production viability, and EU AI Act exposure — verdict included: build now, not yet, or don't build.",
    path: "/assessment",
  },
  assessmentSample: {
    title: "Sample Gate Zero Readout — LT Strategy Partners",
    description:
      "A full, clearly-labeled sample of the Gate Zero Readout — the written verdict delivered by the free AI Opportunity Assessment.",
    path: "/assessment/sample-readout",
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

/* ----------------------------------------------- Shared UI microcopy (i18n) */

export const ui = {
  footerExplore: "Explore",
  footerContactHeading: "Contact",
  footerAria: "Footer",
  footerRights: "All rights reserved.",
  read: "Read",
  readMore: "Read more",
  readAria: "Read:",
  comingSoon: "Coming soon",
  backToInsights: "Insights",
  backToWork: "Selected work",
  insightsDateLocale: "en-US",
  workContext: "The context",
  workDelivered: "What we delivered",
  workStrategic: "Why it matters",
  workImpact: "Impact",
  workGallery: "From the dashboard",
  workCapabilities: "Capabilities shown",
  workStack: "Built with",
  workTakeaway: "What this means for you",
  workCaptions: {
    "transit-map": "Live vehicle-location map across the city fleet",
    "transit-charts":
      "Fleet composition, average speed by category, and accessibility indices",
    "transit-speeding": "Possible congestion points and recorded speeding events",
  } as Record<string, string>,
  founderPhotoAlt: "Portrait of",
} as const;

/* --------------------------------------- Form strings shared with client JS */

export const formStrings = {
  honeypot: "Leave this field empty",
  contactFormAria: "Contact form",
  sending: "Sending…",
  fixFields: "Please correct the highlighted fields.",
  required: "This field is required.",
  invalidEmail: "Please enter a valid email address.",
  failPrefix: "Something went wrong. Please email us directly at",
  contactSubjectPrefix: "Enquiry from",
  contactSuccessSent:
    "Thank you — your message has been sent. We'll reply personally within two business days.",
  assessmentSubjectPrefix: "Assessment application —",
  assessmentSuccessMailto:
    "Thank you — your application is ready to send. It will be read personally, and you'll hear back within two business days.",
  assessmentSuccessSent:
    "Thank you — your application has been sent. It will be read personally, and you'll hear back within two business days.",
  scorecardSubjectPrefix: "Scorecard readout —",
  scorecardSuccessMailto:
    "Thank you — your request is ready to send. Your written readout will follow personally, usually within two business days.",
  scorecardSuccessSent:
    "Thank you — your readout is on its way. It will be sent personally, usually within two business days.",
} as const;

/* ------------------------------- Assessment application form (field copy) */

export interface AssessmentField {
  name: string;
  label: string;
  hint?: string;
  type: "text" | "email" | "textarea" | "select";
  required: boolean;
  autocomplete?: string;
  options?: string[];
}

export const assessmentForm = {
  fields: [
    { name: "name", label: "Your name", type: "text", required: true, autocomplete: "name" },
    { name: "email", label: "Work email", type: "email", required: true, autocomplete: "email" },
    {
      name: "company",
      label: "Company, and roughly how many people",
      hint: "Sector and size band is enough — “130-person freight forwarder”.",
      type: "text",
      required: true,
      autocomplete: "organization",
    },
    {
      name: "role",
      label: "Your role — and will an executive sponsor attend the session?",
      hint: "The verdict is a leadership decision, so a sponsor in the room is a condition, not a preference.",
      type: "text",
      required: true,
      autocomplete: "organization-title",
    },
    {
      name: "usecases",
      label: "The one or two AI use cases you most want a verdict on",
      hint: "A sentence each. If you don't have one yet, say so — that changes what the session is for.",
      type: "textarea",
      required: true,
    },
    {
      name: "cost",
      label: "What are those workflows costing you today, in hours or euros?",
      hint: "Rough is fine. “Don't know” is an acceptable answer — unknowns get scored too.",
      type: "text",
      required: false,
    },
    {
      name: "tried",
      label: "What have you already tried with AI — and what happened?",
      hint: "Pilots, vendors, internal experiments. Where each one stalled is diagnostic gold.",
      type: "textarea",
      required: false,
    },
    {
      name: "data",
      label: "Where does the data or content that would feed this live today?",
      hint: "SharePoint, a wiki, a database, PDFs, people's heads — all honest answers.",
      type: "text",
      required: true,
    },
    {
      name: "sensitive",
      label: "Would it touch personal data, customer data, or anything you'd hesitate to send to a US cloud provider?",
      type: "text",
      required: false,
    },
    {
      name: "timeline",
      label: "When would you realistically want a first system in production?",
      type: "select",
      required: false,
      options: ["This quarter", "This year", "Someday — exploring for now"],
    },
  ] as AssessmentField[],
  selectPlaceholder: "Choose one (optional)",
  honeypotLabel: "Leave this field empty",
  submitLabel: "Submit application",
  formAria: "Assessment application form",
} as const;

/* ----------------------------------------------------- Legal pages (i18n) */

export interface LegalSection {
  id?: string;
  heading: string;
  html: string;
}

export const legalPages = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy policy.",
    lead: "How we collect and handle the information you share with us. Plain language, no surprises.",
    updated: "Last updated: 3 July 2026",
    sections: [
      {
        heading: "Who we are",
        html: `The data controller for this website is ${site.name} (a founder-led practice based in Iași, Romania). If you have any question about this policy or your data, contact us at <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "What we collect",
        html: `We collect the information you choose to send us. Through the <strong>contact form</strong>, that is your <strong>name</strong>, <strong>company</strong>, <strong>role</strong> (optional), <strong>email address</strong>, and the <strong>message</strong> you write. If instead you use the “Book a conversation” button, you provide your name, email, and any details you add when scheduling — see <a href="#booking">Booking a conversation</a> below. We do not run advertising, and we do not use invasive tracking or third-party analytics that identify you.`,
      },
      {
        heading: "Why we collect it, and our lawful basis",
        html: `We use this information for one purpose: to read and respond to your enquiry, and to follow up about a possible engagement. Our lawful basis under the GDPR is our legitimate interest in responding to people who contact us about our services, and — where you initiate contact to discuss working together — taking steps at your request prior to entering into a contract.`,
      },
      {
        heading: "Sharing",
        html: `We do not sell your information, and we do not share it with third parties for their own purposes. Your enquiry reaches us either by email or through our website forms, which are processed by Google and stored in a spreadsheet in our own Google account; Google, and the email and hosting providers that carry your message, act only as processors on our behalf. This processing may involve transfers outside the EEA under Google's safeguards.`,
      },
      {
        id: "booking",
        heading: "Booking a conversation",
        html: `The “Book a conversation” button opens an appointment page provided by Google Calendar. If you book a call there, the details you enter — your name, email, and anything you add — are handled by Google as part of running the scheduling, under <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's own privacy policy</a>, and may be transferred to servers outside the EEA, including the United States. We receive those details only to arrange and hold the appointment with you. If you would rather not use Google, just email us instead at <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "How long we keep it",
        html: `We keep enquiry correspondence only as long as needed to deal with your request and, where relevant, for the duration of any engagement that follows, after which it is deleted. If a conversation does not lead anywhere, we delete it once it is clearly no longer needed.`,
      },
      {
        heading: "Your rights",
        html: `Under the GDPR you have the right to access the personal data we hold about you, to have it corrected if it is wrong, to have it erased, to restrict or object to how we use it, and to data portability. To exercise any of these, email <a href="mailto:${site.email}">${site.email}</a> and we will respond within the time the law requires. You also have the right to lodge a complaint with your local data-protection authority.`,
      },
      {
        heading: "Changes",
        html: `If we change this policy, we will update the date above. Material changes will be made clear on this page.`,
      },
    ] as LegalSection[],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of use.",
    lead: "The basis on which this website is provided. A short, plain starting point.",
    updated: "Last updated: 3 July 2026",
    sections: [
      {
        heading: "About this site",
        html: `This website is published by ${site.name} to describe our services and share our thinking. It is provided for general information only.`,
      },
      {
        heading: "No advice or contract",
        html: `Nothing on this website is professional, legal, financial, or technical advice, and nothing here forms a contract or an engagement. Any work we do together is governed by a separate written agreement agreed with you in advance.`,
      },
      {
        heading: "Intellectual property",
        html: `The content, brand, and design of this website belong to ${site.name} unless stated otherwise. Product names and marks referenced in our work belong to their respective owners.`,
      },
      {
        heading: "Links",
        html: `Where this site links to external sites, we are not responsible for their content or their practices.`,
      },
      {
        heading: "Contact",
        html: `Questions about these terms? Email <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "",
        html: `These terms are a concise starting point and may be extended as the business grows. For any engagement, a separate written agreement takes precedence.`,
      },
    ] as LegalSection[],
  },
} as const;
