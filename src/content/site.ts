/* =========================================================================
   LT Strategy Partners — site content
   -------------------------------------------------------------------------
   This is the single source of truth for ALL copy on the site. Edit text
   here; components read from it. No copy is hard-coded inside components.
   Placeholders that need client input are wrapped in [square brackets].
   ========================================================================= */

/* ------------------------------------------------------------------- Types */

export interface CTA {
  label: string;
  href: string;
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
  // Concrete, tangible outputs the client receives.
  deliverables: string[];
}

export interface Step {
  n: string;
  title: string;
  body: string;
  // What the client has / leaves with after this step.
  output: string;
}

/* --------------------------------------------------------------- Site meta */

export const site = {
  name: "LT Strategy Partners",
  shortName: "LT Strategy",
  domain: "ltstrategypartners.com",
  url: "https://ltstrategypartners.com",
  tagline: "Strategy that delivers.",
  // Kept within ~155 chars so it isn't truncated in search results.
  description:
    "LT Strategy Partners helps leadership teams find where AI and technology create real, measurable business value — then advises, builds, and proves it.",
  email: "luca.tamas@ltstrategypartners.com",
  founder: "Luca Tamas",
  // The CTA verb is consistent everywhere it appears (brief §5).
  primaryCta: { label: "Book a conversation", href: "/contact" } as CTA,
} as const;

/* ---------------------------------------------------------------- Navigation */

export const nav: NavItem[] = [
  { label: "Approach", href: "/#approach" },
  { label: "Services", href: "/#services" },
  // Hidden while the Results and About sections are commented out:
  // { label: "Results", href: "/#results" },
  // { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

/* Footer navigation (concise) */
export const footerNav: NavItem[] = [
  { label: "Approach", href: "/#approach" },
  { label: "Services", href: "/services" },
  // Founder/About page hidden for now:
  // { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Privacy/Terms pages are disabled for now (placeholder content). Re-add when
// the real legal text and the src/pages/_privacy.astro / _terms.astro routes
// are restored.
export const legalNav: NavItem[] = [
  // { label: "Privacy", href: "/privacy" },
  // { label: "Terms", href: "/terms" },
];

/* --------------------------------------------------------------- §6.1 Hero */

export const hero = {
  eyebrow: "AI & Business Transformation",
  headline: "Strategy that delivers measurable results.",
  subhead:
    "We help leadership teams find where AI and technology create real business value — then we advise, build, and prove it. From boardroom to deployment, and back to the numbers.",
  primaryCta: site.primaryCta,
  secondaryCta: { label: "See how we work", href: "/#approach" } as CTA,
  trustLine: "Independent · Senior-led · Outcome-focused",
} as const;

/* -------------------------------------------------- §6.2 The problem we solve */

export const intro = {
  eyebrow: "Why it matters",
  body: "Most organizations don't lack ideas about AI and technology — they lack a clear, honest view of where it actually pays off, and the ability to deliver it. Pilots stall. Vendors oversell. Strategy decks gather dust. We close the gap between ambition and results.",
} as const;

/* ------------------------------------------------------- §6.3 Value pillars */

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

/* ----------------------------------------------------------- §6.4 Services */

export const services = {
  eyebrow: "What we do",
  intro:
    "A single partner across the full journey — so strategy and delivery never disconnect.",
  items: [
    {
      title: "Opportunity & Strategy",
      body: "We assess where AI, data, and technology can move revenue, cost, or risk, size the value against your P&L, and separate the few opportunities worth pursuing from the many that aren't. You leave with a decision-ready plan, not a wish list.",
      deliverables: [
        "A prioritised opportunity map, ranked by value and effort",
        "Sized business cases for the top opportunities",
        "A sequenced roadmap with owners and decision points",
      ],
    },
    {
      title: "Implementation & Delivery",
      body: "We design, build, integrate, and deploy the solutions, working alongside your teams so the knowledge stays in-house. We ship working software over slideware, and stay until it's live, used, and handed over cleanly.",
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
    {
      title: "Advisory & Oversight",
      body: "Independent counsel for executives and boards on where to invest in technology, what to say no to, and where the real risk lies. Senior people you can trust for the decisions that matter, with no product to sell you.",
      deliverables: [
        "Regular reviews of direction, spend, and risk",
        "Independent assessments of proposals and vendors",
        "Direct access to senior people between sessions",
      ],
    },
  ] as Service[],
} as const;

/* ----------------------------------------------------------- §6.5 Approach */

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

/* ----------------------------------------------------- §6.6 Statement band */

export const statement = {
  headline: "We're judged by outcomes, not output.",
  support:
    "Every engagement is tied to results you can measure — and we tell you the truth about what's working.",
} as const;

/* ------------------------------------------------------------ §6.7 Results */

export const results = {
  eyebrow: "Results",
  intro: "What good looks like when strategy actually reaches the ground.",
  items: [
    "Faster, better-informed decisions on where to invest.",
    "Solutions that reach production and get used — not pilots that stall.",
    "Lower operational cost and effort where it counts.",
    "A clear, honest line of sight from investment to impact.",
  ],
  placeholder:
    "[Add 2–3 client outcomes or short case notes here once available]",
} as const;

/* ------------------------------------------------- §6.8 Who we work with */

export const clients = {
  eyebrow: "Who we work with",
  body: "We work with the whole organization, not just the top of it. Lasting change needs the people who set direction and the people who do the work moving together — so we partner across every level, from the boardroom to the teams on the ground.",
  // The people we collaborate with, by level (no named companies).
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

/* -------------------------------------------------------- §6.9 About / founder */

export const about = {
  eyebrow: "About",
  body: "LT Strategy Partners is a senior-led advisory and delivery firm founded by Luca Tamas. We combine strategy, technology, and operational know-how to help leaders make confident decisions and see them through to results. We stay small and senior by design: the people who advise you are the people who deliver.",
  bioPlaceholder: "[Founder bio — background, experience, credentials]",
  portraitPlaceholder: "[Portrait image]",
  // Optional supplied portrait asset (avatar). Client may replace.
  portrait: "/brand/lt-avatar-800.png",
} as const;

/* ------------------------------------------------------- §6.10 CTA (pre-footer) */

export const ctaBand = {
  headline: "Where is the value hiding in your business?",
  body: "Let's have a direct, no-pressure conversation about where AI and technology could actually move your numbers.",
  cta: site.primaryCta,
} as const;

/* ------------------------------------------------------------ §6.11 Contact */

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
  // NOTE: the form is not wired to a backend. See README to connect Formspree/Resend.
  // The submit handler falls back to a mailto: link if no endpoint is configured.
  fields: [
    { name: "name", label: "Name", type: "text", required: true, autocomplete: "name" },
    { name: "company", label: "Company", type: "text", required: true, autocomplete: "organization" },
    { name: "role", label: "Role", type: "text", required: false, autocomplete: "organization-title" },
    { name: "email", label: "Email", type: "email", required: true, autocomplete: "email" },
    { name: "message", label: "How can we help?", type: "textarea", required: true },
  ] as FormField[],
  submitLabel: "Send message",
  successMessage:
    "Thank you — your message is ready to send. We'll reply personally within two business days.",
} as const;

/* ------------------------------------------------------------- §6.12 Footer */

export const footer = {
  tagline: site.tagline,
  email: site.email,
  blurb:
    "A senior-led advisory and delivery firm helping leadership teams turn strategy — and AI where it earns its place — into measurable results.",
} as const;

/* ------------------------------------------ Supporting-route intro copy */

export const pageIntros = {
  services: {
    eyebrow: "Services",
    title: "From boardroom to deployment.",
    lead: "One senior partner across the full journey — strategy, delivery, and the operational change that makes it stick. No handoffs, no disconnect between the plan and the people who build it.",
  },
  about: {
    eyebrow: "Who we are",
    title: "Small and senior, by design.",
    lead: "The people who advise you are the people who deliver. We keep engagements led by experienced hands, close to your business and accountable for the outcome.",
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
    title: "LT Strategy Partners — Strategy that delivers.",
    description: site.description,
    path: "/",
  },
  services: {
    title: "Services — LT Strategy Partners",
    description:
      "Opportunity & strategy, implementation & delivery, operational performance, and advisory & oversight — one senior partner across the full journey.",
    path: "/services",
  },
  about: {
    title: "About — LT Strategy Partners",
    description:
      "A senior-led advisory and delivery firm founded by Luca Tamas. The people who advise you are the people who deliver.",
    path: "/about",
  },
  contact: {
    title: "Contact — LT Strategy Partners",
    description:
      "Have a direct, no-pressure conversation about where AI and technology could move your numbers.",
    path: "/contact",
  },
} as const;
