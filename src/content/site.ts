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
  icon?: string; // name from components/ui/Icon.astro
}

export interface Service {
  stage: string; // which part of the offer: Strategy / Training / Implementation / Improvement
  icon: string; // name from components/ui/Icon.astro
  title: string;
  body: string;
  deliverables: string[];
  link?: CTA; // optional deeper page (e.g. /training)
}

export interface Layer {
  layer: string; // Leadership / Processes / People
  icon: string; // name from components/ui/Icon.astro
  question: string;
  detail: string;
}


export interface Step {
  n: string;
  icon?: string; // name from components/ui/Icon.astro
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
  // Case-study framing on the home cards: the problem, then what was built.
  problem: string;
  solution: string;
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
  // Optional: how this build informs our training (never a claim of past
  // training delivered — only what the experience lets us teach).
  training?: string;
  image?: string;
  gallery?: string[];
  diagram?: boolean;
  // Optional link to something the reader can open and inspect themselves.
  liveUrl?: string;
  liveLabel?: string;
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
  : { label: "Start a conversation", href: "/en/contact" };

const assessmentCta: CTA = {
  label: "Start with the diagnostic",
  href: "/en/assessment",
};

export const site = {
  name: "LT Strategy Partners",
  shortName: "LT Strategy",
  domain: "ltstrategypartners.com",
  url: "https://ltstrategypartners.com",
  tagline: "First the problem. Then the solution.",
  description:
    "We find what's holding your business back and build what fixes it: processes, automation, reporting, internal tools and AI where it's justified. Independent, no vendor commissions.",
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
  // Header-only short form: the full label is 195-202px and pushed the
  // inline nav past the container. Full label stays in the hero, the CTA
  // band and the mobile panel, and is used as this button's aria-label.
  primaryCtaShort: "Book a call",
  assessmentCta,
};

/* ---------------------------------------------------------------- Navigation */
/* Canonical Services target is the /services page (Task 11) — used in header
   AND footer. About / Work / Services / Contact appear in both. */

export const nav: NavItem[] = [
  // Problem-first: what we solve, how we work (the diagnostic page), proof.
  // Training lives under "What we solve" and in the footer, not up here.
  { label: "What we solve", href: "/en/services" },
  { label: "How we work", href: "/en/assessment" },
  { label: "Case studies", href: "/en#work" },
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

export const footerNav: NavItem[] = [
  { label: "What we solve", href: "/en/services" },
  { label: "How we work", href: "/en/assessment" },
  { label: "Case studies", href: "/en#work" },
  { label: "Team training", href: "/en/training" },
  { label: "Scorecard", href: "/en/scorecard" },
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/en/privacy" },
  { label: "Terms", href: "/en/terms" },
];

/* ------------------------------------------------------------- Partners */
/* Clients and institutions supplied by the founder. Names only — add a
   logo only once that company has agreed to its logo being shown. */

export const partners = {
  eyebrow: "Companies and institutions we've worked with",
  names: [
    "ProInvest",
    "Enovis",
    "CJRAE Iași",
    "Casa Bolta Rece",
    "Carmangeria Boierilor",
  ],
} as const;

/* --------------------------------------------------------------- Hero */

export const hero = {
  // The brand line leads: the problem comes first.
  eyebrow: "First the problem. Then the solution.",
  headline: "We find what's holding your business back. And build what fixes it.",
  subhead:
    "We work with owners and managers who can feel something isn't working — margin, time, decisions — but can't pin down why. We learn how your business really runs, find the real cause, and fix it: with a better process, numbers you can trust, or a system we build ourselves.",
  // Role label on the hero portrait name-tag.
  tagRole: "Founder",
  primaryCta: { ...site.primaryCta, label: "Talk through a problem" } as CTA,
  secondaryCta: { label: "See how we work", href: "/en/assessment" } as CTA,
  trustLine: "Diagnosis before solution · We build what we recommend · No vendor commissions",
} as const;

/* ---------------------------------------------- Symptoms ("sound familiar?") */

export const symptoms = {
  eyebrow: "Sound familiar?",
  heading: "Problems are rarely where they seem.",
  items: [
    "Margin is shrinking and nobody can say exactly why.",
    "The same order is typed by hand into three systems.",
    "The Monday report takes a day, and still nobody trusts it.",
    "You bought a system; the team still works in Excel.",
    "Everything depends on two people who know how things work.",
    "You have a good idea, and nobody is building it.",
  ],
  closing:
    "Each has a cause, and usually not the one you suspect. That's why we start with a diagnosis.",
} as const;

/* ------------------------------------------------------- What we solve */

export const solve = {
  eyebrow: "What we solve",
  heading: "Four kinds of problems that show up in almost every growing company.",
  items: [
    {
      icon: "flow",
      title: "Manual work and processes that break",
      body: "Data typed in several times, approvals by email, key people everything depends on. We redesign the flow and automate what's worth it.",
    },
    {
      icon: "chart",
      title: "Numbers and decisions",
      body: "Hand-built reports, a different number in every department, unclear margin by product or client. We build the data and reports you use in Monday's meeting.",
    },
    {
      icon: "users",
      title: "Systems nobody uses",
      body: "An ERP, CRM or licences paid for and worked around. We find out why, fit the process and prepare the team.",
    },
    {
      icon: "code",
      title: "Ideas that need building",
      body: "An internal tool, a client portal, a new product, a real case for AI. We check it's worth it, then build it.",
    },
  ] as Card[],
  toolbox:
    "We use whatever fits the problem: a better process, automation, internal tools, data and reporting, AI — and sometimes nothing new.",
  more: { label: "See what we solve in detail", href: "/en/services" } as CTA,
} as const;

/* ------------------------------------------------------- Value pillars */

export const pillars = {
  eyebrow: "Why LT",
  items: [
    {
      title: "Same people, from diagnosis to system.",
      body: "The person who understands the problem builds the fix. Nothing gets lost along the way.",
      icon: "compass",
    },
    {
      title: "Independent.",
      body: "No vendor commissions, so we recommend what helps you.",
      icon: "shield",
    },
    {
      title: "We say \"no\" too.",
      body: "If the answer is a simpler process, or nothing yet, you get that in writing.",
      icon: "target",
    },
    {
      title: "Built properly.",
      body: "Secure, documented systems, cleanly handed over — we build products of our own too.",
      icon: "code",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Services */

export const services = {
  eyebrow: "What we do",
  headerTitle: "Strategy, training, implementation — and proof it worked.",
  deliverablesLabel: "What you get",
  intro:
    "Four areas that make up one line of work. You can bring us in for any one of them, but they are built to connect: the strategy decides what's worth doing, the training gets people ready, the implementation delivers it, and the measurement shows whether it paid off.",
  items: [
    {
      stage: "Strategy",
      icon: "compass",
      title: "Digitalization Strategy & Advisory",
      body: "You can feel where the business leaks — late quotes, idle stock, numbers re-keyed by hand — but not which fix to do first. We put a number on each, pick the few worth pursuing, and stay on as an independent voice for the vendor and build-vs-buy calls that follow.",
      deliverables: [
        "A ranked map of what's actually costing you, by value and effort",
        "Sized business cases and a sequenced roadmap with owners and decision points",
        "An independent advisor for vendor, spend, architecture and AI decisions — between and beyond projects",
      ],
    },
    {
      stage: "Training & enablement",
      icon: "presentation",
      title: "Digital Capability & Training",
      body: "Technology only creates value when people know how to use it. We train managers and employees on the AI, automation, data and digital tools that matter for their work — built on your processes and software, not a generic syllabus.",
      deliverables: [
        "Practical training for managers and teams: AI at work, automation, data & BI, digital security",
        "Exercises built on your own tasks, tools and documents",
        "Repeatable workflows and usage rules the team keeps using afterwards",
      ],
      link: { label: "See the training", href: "/en/training" },
    },
    {
      stage: "Implementation",
      icon: "code",
      title: "Implementation & Delivery",
      body: "The usual failure isn't the plan — it's that nobody builds it. We design, build and integrate the solution ourselves — internal tools, automation, dashboards, AI systems — and stay until it's live, used and handed over cleanly.",
      deliverables: [
        "A working solution running in production",
        "Integration into your existing systems and workflows",
        "Documentation and a trained team who can run it without us",
      ],
    },
    {
      stage: "Improvement",
      icon: "chart",
      title: "Operational Performance",
      body: "A new tool changes nothing if the work around it stays the same. We redesign how the work flows, then put measurement in place so the gain is visible and holds after we leave.",
      deliverables: [
        "Redesigned processes mapped to the new tools",
        "A measurement framework tied to your KPIs",
        "A before-and-after view of the gain",
      ],
    },
  ] as Service[],
  // Featured, visually distinct block that showcases the AI specialty within
  // the single Services narrative (folds in AI governance). AI is framed as one
  // tool within digitalization, not the whole offer. No prices.
  ai: {
    eyebrow: "Where AI fits",
    title: "AI, when it's genuinely the right answer.",
    body: "AI is one tool within digitalization, not the whole of it — and the one we know best. So we can tell you where it genuinely moves your numbers, build it to survive real users, and teach your team to use it safely.",
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
        title: "Safe & compliant AI use",
        body: "Private or self-hosted where your data demands it, clear rules for how employees use AI tools, and a practical read on where the EU AI Act applies to you.",
      },
    ] as Card[],
    note: "Not sure where AI fits for you? The Business Diagnostic is free, fixed-scope, and just as willing to conclude that the answer isn't technology at all.",
    cta: site.assessmentCta,
  },
} as const;


/* -------------------------- Gate Zero: the /assessment offer page content */
/* The dedicated landing page for the free Business Diagnostic, run
   through the Gate Zero Method. Honesty rules baked into this copy:
   - The capacity cap (3/month) is real for an offer he delivers himself — if
     capacity changes, change the number here and in offer-assets/.
   - No statistics are used on this page; if one is added, attribute it.
   - The no-go guarantee is a commitment about future readouts, not a claim
     about past work. Never add invented clients, metrics, or history. */

export const assessmentPage = {
  eyebrow: "How we work · The Business Diagnostic",
  heading: "Before anyone sells you a solution, find out what is actually holding you back.",
  lead: "A structured session with your leadership team and a written, prioritized diagnosis of what is costing you most — including a blunt “don't build anything” where that is the honest answer. Free, we run it ourselves, and capped.",
  heroCta: { label: "Apply for a diagnostic", href: "#apply" } as CTA,
  heroFacts: [
    "45–60 minutes with your leadership team",
    "One per company",
    "No system access needed",
    "No pitch",
  ],

  problem: {
    eyebrow: "Why this exists",
    heading: "Most advice arrives with the answer already chosen.",
    paragraphs: [
      "You already know something is wrong; what you don't have is a name for it. Margin that used to be there and isn't. Stock sitting still while more of it gets ordered. The same order typed into three systems by three people. A decision on hold until someone finishes the report. Quotes going out two days late and nobody able to say why. Half of what makes the firm work living in two people's heads.",
      "Take that to most people and you get their product back: the software company finds a software problem, the AI vendor finds an AI problem, the consultancy finds a strategy problem. We take no commission from any vendor — which is exactly why we can afford to look at your business first and then tell you the cause is a pricing rule, a handover nobody owns, a tool nobody was shown how to use, or a report nobody trusts. And when the answer is something that has to be built, we build it.",
    ],
  },

  deliverable: {
    eyebrow: "What you get",
    heading: "The written diagnosis.",
    intro: "three to five pages, written by our team — no hand-offs between teams, no template engine. Built so page one can be forwarded to your board on its own.",
    items: [
      "A one-page decision memo with the verdict in the title — not buried on page four",
      "Every problem we find, plotted on one map: what it costs you × how hard it is to fix, each with what you risk by leaving it alone",
      "For anything that would have to be built, the Gate Zero check in writing: build now / not yet / don't build, with cost band, time-to-production, and walk-away conditions",
      "A named section — “Not worth fixing yet” — with the reason for every one of them",
      "Next steps that include the ones you can take without hiring us",
    ],
    guaranteeLabel: "The written guarantee",
    guarantee: "Expect at least one thing we'll tell you not to fix — or not to fix yet — with the reason, in writing. If what matters most turns out to be a process change and no new system, the diagnosis says exactly that. And if everything you bring genuinely holds up, it says that plainly instead: what it will never do is manufacture a verdict, in either direction.",
    sampleCta: { label: "Read a sample Gate Zero verdict", href: "/en/assessment/sample-readout" } as CTA,
  },

  method: {
    eyebrow: "The method",
    heading: "How we look at the business — and where Gate Zero comes in.",
    intro: "We arrive without a candidate solution. Seven things get looked at, in your numbers and your vocabulary, and only what survives them is worth spending on. Anything that would have to be built then goes through Gate Zero — the formal go/no-go check a production system faces, applied before the money:",
    dimensions: [
      { name: "Value at stake", desc: "Euros or hours attached to a named workflow — conservative base case, assumptions stated. No hockey sticks." },
      { name: "Data reality", desc: "Does the information this depends on actually exist, is it clean, and can you get to it today — or does it live in someone's head?" },
      { name: "How the work really runs", desc: "The process as people actually do it, not as the diagram says: the workarounds, the re-keying, the second spreadsheet nobody mentions." },
      { name: "Error tolerance vs stakes", desc: "Where does a mistake land today, who notices, and what has it cost by the time someone catches it?" },
      { name: "Whether the fix can be measured", desc: "If this changes, does the improvement show up in numbers you already have — or would you be taking our word for it?" },
      { name: "Cost, effort & ownership", desc: "What a fix costs to run and not only to build, and who inside the firm owns it once we are gone." },
      { name: "Exposure & dependency", desc: "Single points of failure, key-person risk, personal data nobody can account for, and the rules you are already subject to — including where the EU AI Act applies to you." },
    ],
    rulesLabel: "Three rules, stated in every diagnosis",
    rules: [
      "What matters most is agreed with you before anything is scored.",
      "No single aggregate “maturity score” — the weakest dimension decides; averages hide.",
      "Every score carries a confidence level and its declared assumptions.",
    ],
    questionsLabel: "Four of the questions we actually ask",
    gateQuestions: [
      "Where does a mistake land today — and who notices?",
      "Which decisions are waiting on information you don't have?",
      "What does this cost you every month it stays as it is?",
      "What happens to this if the person who runs it leaves?",
    ],
    standardsNote: "Where something does get built, the exposure read cross-references the EU AI Act (Article 6 / Annex III), the NIST AI Risk Management Framework, and the OWASP Top 10 for LLM applications.",
  },

  process: {
    eyebrow: "How it runs",
    heading: "Four steps, two to four weeks.",
    steps: [
      { name: "Apply", time: "10 minutes", desc: "Ten questions about the firm, about what isn't working, and about where your numbers live. We read every application personally — and we decline some. That's the first verdict, and it happens before any call." },
      { name: "The diagnostic session", time: "45–60 minutes", desc: "A structured session with your leadership team — we come to understand the business, not to present anything. We follow the money and the friction through the processes you actually run, and we ask the questions production would eventually ask anyway. Walkthrough only: no credentials, no system access, nothing leaves your walls." },
      { name: "The diagnosis is written", time: "within a week", desc: "Every problem found is scored on the seven dimensions and plotted on one map: what it costs you by how hard it is to fix. Written by us, on your numbers and in your vocabulary." },
      { name: "The verdict walkthrough", time: "30 minutes", desc: "You get the diagnosis and a blunt call on the one thing to fix first: now, not yet — and exactly what unlocks it — or leave it alone. Where the answer is something to build, it comes with the Gate Zero verdict. The document is yours either way." },
    ],
  },

  whyFree: {
    eyebrow: "Why it's free",
    heading: "It's a diagnosis, not the treatment.",
    body: "This is how we both find out whether working together makes sense. You get the diagnosis and the priority order; the paid engagements do the work. It stays free because it's capped: we run every session and write every diagnosis ourselves — at most three per month, one per company, ever.",
    branches: [
      { name: "If it's a go", desc: "and the fit is there, the diagnosis maps each problem worth solving to the engagement that closes it — a process change, training for the team, or something we would build ourselves. You'll know the shape of the next step before you commit to anything." },
      { name: "If it's a no-go", desc: "you keep the diagnosis, there is no follow-up sequence, and that's the end — unless you write first. A no-go followed by nurture emails would make the verdict worthless." },
    ],
  },

  fit: {
    eyebrow: "Fit",
    heading: "Who it's for — and who it isn't.",
    forLabel: "This is for you if",
    notForLabel: "It isn't if",
    forWho: [
      "Owners and managers who can see the symptom but not the cause",
      "Firms where margin, stock or cash is drifting and the reason isn't obvious",
      "Companies that already bought a system or ran a pilot and have little to show for it",
      "Data-sensitive businesses weighing what can and cannot leave their walls",
    ],
    notForWho: [
      "Companies looking for a free implementation plan — this is a verdict, not a blueprint",
      "Teams without an executive sponsor willing to attend the session",
      "Anyone shopping for validation of a decision already made — some diagnoses say don't build anything, and yours might",
    ],
  },

  whoRuns: {
    eyebrow: "Who runs it",
    heading: "The method exists because these are the checks we run before we ship anything.",
    facts: [
      "Designs, builds and ships production systems — including AI and LLM systems: retrieval tuning, output validation, monitoring, cost and latency budgets",
      "Built a self-hosted, retrieval-augmented AI assistant that runs fully offline on hardware a business already owns",
      "Production security engineer with a data-protection background",
      "Founded two SaaS products; lead architect of a multi-tenant enterprise platform",
    ],
    link: { label: "More about Luca", href: "/en/about" } as CTA,
  },

  apply: {
    eyebrow: "Apply",
    heading: "Apply for the Business Diagnostic.",
    intro: "Ten questions, about ten minutes. We read every application personally — some are declined, and that's the first verdict. If accepted, you'll get the exact session agenda before you commit an hour of your leadership team's time.",
    microcopy: "Free · one per company · at most three per month · walkthrough only, no system access",
    submitLabel: "Submit application",
  },
} as const;


/* ----------------------------------------------------------- Approach */

export const approach = {
  eyebrow: "How we work",
  // Shown under the steps on the home page.
  more: { label: "Start with the diagnostic", href: "/en/assessment" } as CTA,
  outputLabel: "What you get",
  title: "Five steps, the same people from start to finish.",
  intro: "We start from the problem, not from a solution chosen in advance — and you can stop after any step that's no longer worth it.",
  steps: [
    {
      n: "01",
      icon: "search",
      title: "Diagnose",
      body: "We learn how work and money flow, and find the cause, not the symptom.",
      output: "A written picture of the real problems, ranked by what they cost you.",
    },
    {
      n: "02",
      icon: "ranking",
      title: "Decide",
      body: "We put a number on each problem and choose together what to fix — and what not to.",
      output: "A short, ranked list with success measures agreed up front.",
    },
    {
      n: "03",
      icon: "code",
      title: "Build",
      body: "We design and build the fix: a process, automation, report or system.",
      output: "A fix running in your business, integrated with what you already use.",
    },
    {
      n: "04",
      icon: "users",
      title: "Make it stick",
      body: "We prepare people to work the new way, on their real tasks.",
      output: "A team that uses the fix, with workflows it keeps.",
    },
    {
      n: "05",
      icon: "chart",
      title: "Measure",
      body: "We check that the right things changed, and adjust.",
      output: "Measured results on your indicators, and a plan for what comes next.",
    },
  ] as Step[],
} as const;

/* ----------------------------------------------------- Statement band */

export const statement = {
  eyebrow: "What changes",
  // Rendered one sentence per line.
  lines: [
    "You know what it really costs.",
    "The fix works and gets used.",
    "You see the result in numbers.",
  ],
  support:
    "Every problem with its number: hours, money, risk. A fix running in your business, not a document on a shelf. And the result measured before and after, on indicators agreed together.",
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

/* ------------------------------------- Three layers we work across */

export const layers = {
  eyebrow: "Three layers, one partner",
  body: "Digitalization fails when it happens on one level only: leadership buys a system, the process stays the same, and the team keeps the old spreadsheet. We work on all three at once.",
  items: [
    {
      layer: "Leadership",
      icon: "compass",
      question: "What should we digitalize?",
      detail: "Where technology creates value, what it's worth, and what to do first.",
    },
    {
      layer: "Processes",
      icon: "flow",
      question: "How should the work change?",
      detail: "Redesigning workflows, handovers and reports so the gain shows up in the numbers.",
    },
    {
      layer: "People",
      icon: "users",
      question: "How will the team actually use it?",
      detail: "Hands-on practice with the tools and AI the team will use every day.",
    },
  ] as Layer[],
} as const;


/* ----------------------------------------------- Founder strip (home) */

export const founderStrip = {
  eyebrow: "Who you work with",
  body: "I'm Luca-Ștefan Tamaș. I've been building software systems since 2020 — enterprise platforms, products of my own, AI systems — but what really interests me is the problem behind them. You work with me directly: the person who understands the problem builds the fix.",
  link: { label: "More about me", href: "/en/about" } as CTA,
} as const;

/* ------------------------------------------------- About: full page (Task 1) */

export const aboutPage = {
  eyebrow: "About",
  heading: "A hands-on partner, start to finish.",
  paragraphs: [
    "LT Strategy Partners is the practice of Luca-Ștefan Tamaș, a systems engineer who builds software that has to work in production. It is small on purpose: no account managers, no hand-offs to juniors. The person who sits with your leadership team to work out what's worth doing is the same person who trains your people and writes the code.",
    "That combination is the point. We understand technology deeply enough to build it — production AI systems, enterprise platforms, automation, data pipelines — and we understand business well enough to explain where it should and shouldn't be used. Most of the value sits between the two: translating what a system can really do into what it means for a margin, a process or someone's working day. Since 2020 we've delivered end-to-end work across web, mobile, data and AI for clients in the EU and US, including apps published on the App Store and Google Play.",
    "It's also why we teach. Technology only pays off when the people using it understand it, and a complex system is best explained plainly by someone who has built one. We work across all three levels of a company — leadership deciding where to invest, managers redesigning how work flows, employees learning the tools they'll use every day — and make sure what's decided at the top actually reaches the work.",
  ],
  beliefsHeading: "What we believe about this work",
  beliefs: [
    "Software and digital infrastructure are among the best investments a business can make — but only when made thoughtfully. The technology is rarely the hard part: the return comes from spending on the right thing, in the right order, and making sure people can actually use it.",
    "And the cheapest money you'll ever spend is the conversation before you start — which is why our first step, the Business Diagnostic, costs nothing.",
  ],
  whyHeading: "How we like to work",
  why: "We would rather be useful than impressive. We take no vendor commissions, so telling you not to build something costs us nothing — which is the only condition under which a “build this” means anything. And because we have had to make these systems work in the real world, we can tell you plainly what is worth doing, what is not, and what it will really take — we will not recommend anything we would not be willing to build ourselves, or teach your team to use.",
  workHeading: "Some of what we've built",
  workSlugs: ["processly", "atlas-economic", "transit-analytics"],
  glanceHeading: "Background at a glance",
  glance: [
    "Builds production AI and LLM systems — retrieval-augmented generation, self-hosted models, and outputs kept behind validation",
    "Built a self-hosted, offline AI assistant; founder of two production SaaS products (Mazely, Processly)",
    "Production systems engineering in a security-critical environment; lead architect on a multi-tenant BI / ERP / DMS / process-automation platform",
    "Security and data-protection foundation: authentication, encryption, least-privilege, and tenant isolation",
    "Explains complex systems in plain language to leadership teams, operational staff and the people who use them",
    "Data & analytics credentials (Meta Data Analyst, Google Business Intelligence, Advanced SQL, Tableau); security certifications (SOC Level 1, DevSecOps, Jr Penetration Tester)",
  ],
  photoCaption: `${"Luca-Ștefan Tamaș"} · Founder`,
  ctaHeading: "What's the problem you'd most like solved?",
} as const;

/* ------------------------------------------------------- CTA (pre-footer) */

export const ctaBand = {
  headline: "What isn't working in your business?",
  body: "Tell us the problem, even if you don't know yet where it comes from. The first conversation is free, with no slides and no quote on the spot.",
  cta: site.primaryCta,
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
    "Tell us what isn't working, even if you don't know yet where it comes from. We'll reply personally within two business days with a first view — not a quote.",
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
    { name: "message", label: "What problem would you like to solve?", type: "textarea", required: true },
  ] as FormField[],
  // Query-param prefills for the message field (e.g. /contact?topic=assessment).
  prefills: {
    assessment: "I'd like the Business Diagnostic.",
    training: "We'd like to talk about training for our team.",
  } as Record<string, string>,
  submitLabel: "Send message",
  asideEyebrow: "Direct line",
  asideLead: "Prefer email, or want to reach us straight away?",
  asidePoints: [
    "Independent and senior — no vendor commissions.",
    "From diagnosis to a built fix, with the same people.",
    "A reply within two business days, with a first view — not a quote.",
    "No sales script, no pressure.",
  ],
  privacyHtml:
    'We only use your details to reply to you, and never share them with third parties. See the <a href="/en/privacy">privacy policy</a>.',
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
    "We find what's holding your business back and build what fixes it — or tell you plainly that nothing needs building.",
} as const;

/* ------------------------------------------------- Selected work / portfolio */

export const work = {
  eyebrow: "Case studies",
  // Founder-led voice (Task 2): no "team".
  intro:
    "From the problem to the system that runs: a few things we've designed and built from scratch.",
  projects: [
    {
      slug: "processly",
      name: "Processly",
      tagline: "Design your work once. Run it forever.",
      problem: "Recurring work rebuilt from scratch every time.",
      solution: "A system that launches it on demand or on a schedule.",
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
      training:
        "The same thinking is what we teach teams in automation and digital-productivity training: map the recurring work once, then decide which steps are worth automating — and which aren't.",
      image: "processly",
    },
    {
      slug: "mazely",
      name: "Mazely",
      tagline: "Every visitor finds their way. Every time.",
      problem: "Visitors lost in large buildings, staff losing time giving directions.",
      solution: "Step-by-step directions from a QR code, with no app and no hardware.",
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
      problem: "AI for diners, without sending the menu data to the cloud.",
      solution: "An assistant that runs offline, on the venue's own hardware.",
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
      training:
        "Building it is what grounds our AI training: why an assistant gives confident wrong answers, what keeping company data private actually takes, and how to check an answer before relying on it.",
      diagram: true,
    },
    {
      slug: "atlas-economic",
      name: "Atlas Economic",
      tagline: "Public money, county by county.",
      problem: "Public procurement data that's unusable as published.",
      solution: "A verified money-flow indicator for all 42 counties.",
      category: "Data & analytics",
      kind: "analysis",
      label: "Independent analysis · live microsite",
      accent: "#2f6db0",
      oneLiner:
        "A live microsite that maps how public-procurement money flows between all 42 Romanian counties, built entirely from open data",
      overview:
        "Atlas Economic answers a question no Romanian institution publishes: for each county, how much of what its public buyers award actually stays with suppliers based there, where the rest goes, and how much local firms win back from authorities elsewhere. It joins three open datasets — the procurement system, the companies register, and the official locality classifier — into one symmetric ledger, and publishes a page per county that you can open and check. It is self-initiated — built to demonstrate the method rather than for a client — which is why the pipeline, the methodology and the audit trail are all public.",
      context:
        "The raw data is public but unusable as published: award notices carry no county, public institutions are absent from the companies register, framework ceilings look like spending, and the same contract appears once per consortium member. Answering the question at all means resolving buyers to counties, suppliers to registered seats, and money to a ledger that balances.",
      delivered: [
        "A reproducible pipeline over three open sources — a full year of SICAP award notices (three of the four quarters are Excel-only, and the one published CSV is silently truncated), the ONRC companies register (~3.9M entities), and the INS SIRUTA locality classifier",
        "A symmetric flow ledger: every leu leaving one county enters another, verified against two structural identities to the leu",
        "42 county pages plus a national league table, generated as static HTML with no external dependencies",
        "A published methodology that documents every filter, both possible conventions, and each failure mode found in review",
        "An audit trail file exposing the weak attributions and everything the method deliberately leaves unattributed",
      ],
      strategic: [
        "Turns fragmented public data into an indicator no single institution publishes — the commercial value is in the joining, not the raw data",
        "Shows a measurement problem handled honestly: the limits are quantified on the page, not hidden",
        "Demonstrates a pipeline that re-runs each quarter as new data is published, rather than a one-off study",
      ],
      capabilities: [
        "Open-data engineering",
        "Entity resolution & record linkage",
        "Economic indicator design",
        "Reproducible analysis & audit trails",
      ],
      stack: [
        "Python (standard library only)",
        "SICAP / ONRC / SIRUTA open data",
        "Static HTML & inline SVG",
        "CC BY 4.0 sources",
      ],
      // Verifiable properties of the published analysis itself, not client outcomes.
      impact: [
        "43,591 contracts analysed (65.38 bn RON), of which 37.45 bn attributed to a specific county",
        "42 counties covered with one identical methodology",
        "Three rounds of adversarial review by twelve independent reviewers; two full from-scratch reimplementations reproduced every published figure",
      ],
      takeaway:
        "This is the clearest demonstration of what we do with data: take sources that are public but unusable, resolve the entities nobody has joined before, and publish the result with its limits stated — so the numbers survive scrutiny instead of collapsing under it.",
      training:
        "It's the discipline behind our data & BI training: where numbers go wrong between the source and the report, and how a team can check a figure before a decision rests on it.",
      image: "atlas",
      liveUrl: "/atlas/",
      liveLabel: "Open the live Atlas",
    },
    {
      slug: "atlas-company-report",
      name: "Atlas Company Report",
      tagline: "One fiscal code in, a full dossier out.",
      problem: "Company data scattered across sources nobody can use.",
      solution: "A full company dossier from a single fiscal code.",
      category: "Data & analytics",
      kind: "product",
      label: "Own product · built on the Atlas data spine",
      accent: "#285c97",
      oneLiner:
        "A stateless generator that turns a single Romanian fiscal code into a complete company dossier — eleven years of financials, sector position, insolvency score and public-money exposure — from open data only",
      overview:
        "Give it a CUI and it produces a fourteen-section report: identity and legal status from the companies register, fiscal status queried live from the tax authority, eleven years of filed financial statements, position against every firm in the same CAEN division, market size and share, derived indicators against sector medians, an insolvency-risk score, and public-procurement exposure across both the tender and the below-threshold channel. It runs against the same data spine as the Atlas, with no database and no server — point lookups straight at the raw government files, because a fiscal code is unique and a scan finds it in under a second across 2 GB. Peer distributions, the one thing a lookup cannot answer, are precomputed once.",
      context:
        "The sources are public and individually near-useless. Financial statements are published as twenty numbered indicators with no column names, in three different layouts across the years. Liabilities arrive as a single total, so no standard liquidity ratio can be computed as defined. There is no cost of goods sold and no retained earnings, so two textbook indicators and two Altman components have to be substituted. The procurement archive writes contract dates four different ways and leaves 98,064 of them blank. None of that is documented anywhere — it has to be discovered, and each defect causes silent data loss rather than an error.",
      delivered: [
        "A one-command generator: fiscal code in, styled HTML and print-ready PDF out, in about twenty seconds",
        "Coverage of all 4,201,627 entities in the companies register, degrading honestly — the 68% with no filed accounts get a section explaining why, not empty tables",
        "Peer distributions over 8.7 million filings: 40,000+ groups across CAEN division, section and county, eleven years, eight quantiles each",
        "Every indicator printed with its formula in balance-sheet line names, a plain-language reading, and the direction that counts as better",
        "A published methodology that names each forced approximation and states the direction of its bias — or states that the direction cannot be established, where it cannot",
      ],
      strategic: [
        "Turns a fiscal code — the one identifier a business always has for a counterparty — into a decision document, without a subscription or a data-room",
        "The defensible asset is the joining and the verification, not the data: anyone can download the same files and get nothing usable",
        "Same spine as the Atlas, so county analysis and company analysis can never contradict each other",
      ],
      capabilities: [
        "Open-data engineering",
        "Financial-statement analysis at scale",
        "Indicator design & peer benchmarking",
        "Adversarial verification",
      ],
      stack: [
        "Python (standard library only)",
        "MF / ONRC / ANAF / SICAP open data",
        "Eurostat HICP deflator",
        "Static HTML, inline SVG, headless-Chrome PDF",
      ],
      // Properties of the verification itself, not client outcomes.
      impact: [
        "Column mapping validated independently of the official legend: the balance-sheet identity holds for 100.00% of filings across all three published layouts",
        "238 reconciliation checks on the financial sections recomputed from the raw files with no defect; 34 findings from two adversarial audits fixed, including a lookup that returned a different company for 3,005 fiscal codes",
        "One correction cut a published procurement figure by 32% — the deduplication key could not survive four date formats and 98,064 blank dates",
      ],
      takeaway:
        "The report is the visible part. What it actually demonstrates is a discipline: every number traceable to a source file, every approximation named with the direction of its error, and a verification pass that assumes our own output is wrong until it survives being recomputed a second way.",
      image: "raport-firma",
      gallery: [
        "raport-firma-indicatori",
        "raport-firma-altman",
        "raport-firma-risc",
      ],
    },
    {
      slug: "transit-analytics",
      name: "Public Transport Analytics — Iași",
      tagline: "Turning fleet telemetry into operating decisions.",
      problem: "Fleet telemetry that never reached a decision.",
      solution: "A dashboard operating decisions can rest on.",
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
      training:
        "In data & BI training, this is the pattern we teach: start from the decision someone has to make, then build the view of the data that serves it.",
      image: "transit-map",
      gallery: ["transit-charts", "transit-speeding"],
    },
  ] as WorkProject[],
} as const;

/* ------------------------------------------- Training & enablement page */
/* The /training page. Positioned as one stage of digitalization, not as a
   course catalogue. Honesty rules: no certifications, client counts, durations
   or outcomes are claimed — formats are starting points, and the credibility
   section only cites builds shown under Selected work. */

export const trainingPage = {
  eyebrow: "Training & enablement",
  heading: "Training on the technology your team will actually use.",
  lead: "Practical, company-specific training on AI, digitalization, automation, data and cybersecurity — for managers and employees, built around your processes, your software and the problems you're trying to solve. Taught by the people who design and build these systems.",
  heroSecondary: { label: "Ask about training for your team", href: "/en/contact?topic=training" } as CTA,

  why: {
    eyebrow: "Why it matters",
    heading: "Technology only creates value when people know how to use it.",
    body: "Companies buy licences, roll out new systems and give everyone access to AI tools — and months later much of the work still happens the old way. Usually not because people resist change, but because nobody showed them how the tool fits their actual job. We teach what matters for that job, and leave out what doesn't.",
    outcomesLabel: "What becomes better",
    outcomes: [
      "Less repetitive work and manual copy-paste between tools",
      "Faster, more reliable reporting from data you already have",
      "Better use of the software you already pay for",
      "AI used safely and effectively — with clear rules on what data goes where",
      "Administrative steps automated where it makes sense",
      "A clear view of which processes are worth automating next",
    ],
  },

  audience: {
    eyebrow: "Who it's for",
    heading: "Built for the people who'll use it.",
    items: [
      { title: "Management teams", body: "Evaluating where AI and digitalization fit, what they cost, and the risks they carry." },
      { title: "Office & administrative teams", body: "Everyday work with documents, email, spreadsheets, reports and AI assistants." },
      { title: "Operational teams", body: "The systems, data and checklists that run production, logistics or service." },
      { title: "Non-technical employees", body: "Confidence with digital tools from where people are today — without jargon." },
      { title: "Mixed teams", body: "Managers and staff learning together, so decisions and day-to-day use line up." },
      { title: "Departments adopting a new tool", body: "Rollout training for a specific system, AI tool or workflow — before and after go-live." },
    ] as Card[],
  },

  formats: {
    eyebrow: "Example formats",
    heading: "Starting points, not a fixed catalogue.",
    intro: "Every program is adapted to your company. These are typical starting points, which we combine and tailor to your tools, roles and problems.",
    items: [
      { title: "AI at Work", icon: "sparkle", body: "Practical AI for everyday business tasks — drafting, summarizing, searching and analysing documents and data — with prompts and checks built on your own work." },
      { title: "AI for Managers", icon: "compass", body: "How to evaluate AI opportunities, costs, risks and vendors — and how to tell a real use case from an expensive demo." },
      { title: "Digital Productivity", icon: "bolt", body: "Getting more out of the tools your team already has: shared documents, spreadsheets and reports, working with data and BI, and the small automations that remove repetitive work." },
      { title: "Digitalization for Employees", icon: "flow", body: "How digital workflows, no-code automation and process improvement work — so employees can spot the steps worth changing in their own job." },
      { title: "AI & Cybersecurity", icon: "shield", body: "Using AI without creating avoidable risk: what data may go into which tools, phishing and social engineering, and responsible-use rules a team can follow." },
      { title: "Custom Company Training", icon: "sliders", body: "Training built entirely on your organization's tools, workflows and processes — including rollout training for a system we've built for you." },
    ] as Card[],
  },

  // Same shape as `approach`, rendered by the same component.
  process: {
    eyebrow: "How it works",
    title: "Training built around real work.",
    intro: "No off-the-shelf course dropped on your team. We start from how they work today and end with workflows they keep using.",
    outputLabel: "What you get",
    steps: [
      {
        n: "01",
        icon: "search",
        title: "Understand the starting point",
        body: "We talk to managers and a few people from the team about how they work today, which tools they use, and where the time goes.",
        output: "A clear picture of current skills, tools and pain points.",
      },
      {
        n: "02",
        icon: "target",
        title: "Pick the use cases",
        body: "We identify the tasks where better use of digital tools, automation or AI would make a real difference — and the ones where it wouldn't.",
        output: "A short list of use cases worth training on.",
      },
      {
        n: "03",
        icon: "presentation",
        title: "Train on real work",
        body: "Sessions use your team's own tasks, documents and software instead of generic examples, adapted to each role and level.",
        output: "Hands-on sessions people can apply the next day.",
      },
      {
        n: "04",
        icon: "document",
        title: "Make it repeatable",
        body: "We turn what worked into written workflows, prompt libraries, templates and usage guidelines the team keeps using.",
        output: "Documented workflows and clear rules for everyday use.",
      },
      {
        n: "05",
        icon: "refresh",
        title: "Follow up",
        body: "We check what's being used and what isn't, answer the questions that only come up in daily work, and adjust.",
        output: "A view of what changed — and what still needs work.",
      },
    ] as Step[],
  },

  credibility: {
    eyebrow: "Who teaches it",
    heading: "We can teach it because we build it.",
    body: "The same people who design production AI systems, automation platforms and data pipelines run the training. So the sessions cover what actually holds up in practice — where AI gets things wrong, what keeping company data private takes, how to check a number before trusting it — not just which buttons to press.",
    // Real builds from Selected work, shown as image tiles.
    tiles: [
      { slug: "restaurant-ai", caption: "An offline AI assistant on a business's own hardware — behind how we teach safe, private AI use" },
      { slug: "processly", caption: "Processly, our workflow-automation platform — behind how we teach teams to automate repetitive work" },
      { slug: "transit-analytics", caption: "Dashboards built on raw operational data — behind our data & BI training" },
    ],
    note: "Plus a production security-engineering background, behind our AI & cybersecurity training.",
    link: { label: "See the projects", href: "/en#work" } as CTA,
  },

  bridge: {
    eyebrow: "Where it leads",
    heading: "Training is often where the real opportunities show up.",
    body: "When a team learns how the tools work on its own tasks, the processes worth automating become obvious — often first to the people doing the work. That's where training connects to the rest of what we do: we can size the opportunity, build the solution and measure the result. Or the training stands on its own. Both are fine.",
    links: [
      { label: "How the Digitalization Program works", href: "/en/services#approach" },
      { label: "Start with the Business Diagnostic", href: "/en/assessment" },
    ] as CTA[],
  },

  ctaHeading: "What should your team be able to do better?",
} as const;

/* ------------------------------------------ Supporting-route intro copy */

export const pageIntros = {
  services: {
    eyebrow: "What we solve",
    title: "From the problem to a fix that works.",
    lead: "We find the cause, decide with you what's worth doing, build the fix and make sure it stays in use — with the same people from start to finish.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's have a direct conversation.",
    lead: "Tell us what isn't working, even if you don't know yet where it comes from. We'll reply personally within two business days with a first view — not a quote.",
  },
} as const;

/* --------------------------------------------------- Per-page SEO metadata */

/* ------------------------------------------------ AI & Tech Opportunity Scorecard */
/* Free self-serve diagnostic. Reader answers 10 business questions, sees a score
   (0–100) and tier on-screen, then can email-gate a fuller written readout that
   routes into the free Business Diagnostic. Scoring is a straight sum of
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
  heading: "Where is your business losing time and money — and is anything worth building?",
  lead: "Ten plain questions about how the business actually runs — no jargon, no sign-up to start. You'll get an honest read on where your time and money are going, and whether an investment in technology would genuinely pay off for a company like yours right now — and, just as often, where the smarter move is to fix something first. This isn't a maturity score to make you feel behind. It's a straight answer about where your money would actually go to work.",
  microcopy: "No login to answer. We only ask for an email if you want the fuller written readout.",
  // The Q3 index (0-based) whose zero-point answer triggers the data-gate override.
  dataGateQuestionIndex: 2,
  dataGateNote:
    "One thing first, before anything else: right now the information you'd need lives mostly in people's heads and email. Until it lives somewhere a system can actually reach, nothing you buy or build on top of it can pay off — it's the one thing worth fixing before you spend on anything below.",
  q10Note:
    "There's no wrong answer here — high-stakes work isn't off-limits, it just has to be built far more carefully. This question shapes the advice, not the verdict.",
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
      q: "Is there a specific, named problem you're hoping to solve?",
      options: [
        { label: "Not really — we're looking because it feels like we should be doing something", points: 0 },
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
      body: "Right now, buying or building something would most likely be money spent ahead of the problem. That's not a criticism — it's the cheapest lesson you'll ever get, because you're learning it before the invoice, not after. The honest first step isn't a tool. It's getting one thing in order: a problem worth naming, information a system can actually reach, or someone who can own the work. Sort that, and a lot of options open up cheaply. Spend into it now, and you'll likely be one of the many companies that quietly shelve the project a year later. Come back and re-run this once the ground is firmer — you'll see the score move.",
    },
    {
      slug: "real-seed",
      min: 35,
      max: 59,
      name: "A real seed, not yet a project",
      headline: "There's something here worth shaping.",
      body: "You've got the beginnings of a real opportunity — but it's still a seed, not a plan, and the fastest way to waste money now is to jump to a solution before the problem is sized. The move that actually pays: pick the single workflow that costs you the most, write down what it costs today in hours or euros, and be honest about where the data for it lives. Do that and you'll either find a bet worth making — or save yourself a project that was never going to land. If it would help to pressure-test which one it is, that's exactly what the free Business Diagnostic is for.",
    },
    {
      slug: "strong-candidate",
      min: 60,
      max: 79,
      name: "Strong candidate",
      headline: "This is worth a serious look.",
      body: "You have most of what a bet like this needs — a real problem, workable data, and enough readiness to act. The risk at this stage isn't doing nothing; it's building the wrong thing well, or picking the idea that demos beautifully and then dies on contact with real users. Before you commit budget, the highest-return half-hour you can spend is getting a straight verdict on which problem is actually worth solving in production — and which ones to leave alone. That's what the free Business Diagnostic gives you, in writing, before you spend a cent.",
    },
    {
      slug: "ready-to-move",
      min: 80,
      max: 100,
      name: "Ready to move",
      headline: "The question isn't whether — it's which bet, and in what order.",
      body: "On paper, you're ready: a named problem, data a system can reach, budget, an owner, and the pressure to move. The only thing standing between you and a return is choosing the right first bet and sequencing it well — because at this stage the expensive mistake is building three things adequately instead of one thing that pays. This is exactly the point where a short, honest, outside read earns its keep. The free Business Diagnostic gives you a written verdict on each candidate — build now, not yet, or don't build — including, plainly, when the honest answer is that nothing here should be built. We take no vendor commissions, so a \"don't build\" costs us nothing — which is the only reason a \"build\" from us means anything.",
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
    body: "Leave an email and we'll send a longer version of your result: what your answers point to, the two or three things we'd look at first for a company in your position, and — if it fits — the one question we'd get answered before spending anything. No newsletter, no drip sequence, no sales calls you didn't ask for. One useful email.",
    emailLabel: "Work email",
    button: "Send me the readout",
    privacy: "We use your email only to send this readout. We don't pass it on and we won't add you to a list.",
    privacyLinkLabel: "See the privacy policy.",
    privacyHref: "/en/privacy",
  },
  ctaPrimary: {
    label: "Apply for a free Business Diagnostic",
    href: "/en/assessment",
    microcopy: "Free · one per company · we run it personally · a written verdict, including where nothing should be built.",
  },
  ctaSecondary: {
    label: "Or just talk it through",
    href: "/en/contact",
  },
} as const;

export const pageMeta = {
  home: {
    title: "LT Strategy Partners — Business problems, found and fixed",
    description: site.description,
    path: "/en",
  },
  scorecard: {
    title: "Where is your business losing time and money? — LT Strategy Partners",
    description:
      "A free 3-minute self-check: ten plain questions about how your business runs, and an honest read on where time and money leak — and what to fix first.",
    path: "/en/scorecard",
  },
  services: {
    title: "What we solve — LT Strategy Partners",
    description:
      "Manual work, numbers nobody trusts, systems nobody uses, ideas that need building: a diagnosis, a built fix, a trained team and a measured result.",
    path: "/en/services",
  },
  training: {
    title: "Team training — LT Strategy Partners",
    description:
      "Practical training for managers and employees, built on your own processes and tools: working with data, automation, digital tools and safe AI use.",
    path: "/en/training",
  },
  assessment: {
    title: "The Business Diagnostic — LT Strategy Partners",
    description:
      "A free diagnostic we run personally: where the money, the time and the decisions leak in your business, what is worth fixing first — and, honestly, where the answer isn't technology.",
    path: "/en/assessment",
  },
  assessmentSample: {
    title: "Sample Gate Zero Readout — LT Strategy Partners",
    description:
      "A full, clearly-labeled sample of the Gate Zero Readout — the written build / don't-build verdict, produced once the diagnosis concludes something should be built.",
    path: "/en/assessment/sample-readout",
  },
  about: {
    title: "About — LT Strategy Partners",
    description:
      "Luca-Ștefan Tamaș — a systems engineer who finds what's holding a business back and builds the fix himself. Enterprise platforms, two SaaS products of his own, data and AI systems.",
    path: "/en/about",
  },
  contact: {
    title: "Contact — LT Strategy Partners",
    description:
      "Tell us what isn't working in your business. A first conversation that's free, with no slides and no quote on the spot.",
    path: "/en/contact",
  },
  privacy: {
    title: "Privacy — LT Strategy Partners",
    description: "How LT Strategy Partners collects and handles your information.",
    path: "/en/privacy",
  },
  terms: {
    title: "Terms — LT Strategy Partners",
    description: "The terms on which the LT Strategy Partners website is provided.",
    path: "/en/terms",
  },
} as const;

/* ----------------------------------------------- Shared UI microcopy (i18n) */

export const ui = {
  footerExplore: "Explore",
  stepPrefix: "Step",
  viewProject: "View project",
  navPrimaryAria: "Primary",
  heroProofAria: "What sets the practice apart",
  ragDiagram: {
    boundary: "Runs on the venue's own network — no cloud, no per-query cost",
    customerChat: "Customer chat",
    customerChatSub: "kiosk / tablet",
    adminPanel: "Admin panel",
    adminPanelSub: "menu management",
    apiSub: "token auth · retrieval-augmented answering",
    qdrantSub: "vector search",
    postgresSub: "menu & config",
    minioSub: "dish images",
  },
  ragDiagramAlt:
    "Architecture: customer chat and admin panel connect through an Nginx proxy to a Python API, which uses Ollama (qwen2.5:3b and bge-m3), Qdrant vector search, PostgreSQL, and MinIO — all self-hosted on the venue's own network.",
  footerContactHeading: "Contact",
  footerAria: "Footer",
  footerRights: "All rights reserved.",
  backToWork: "Case studies",
  workProblem: "The problem",
  workSolution: "What we built",
  workContext: "The context",
  workDelivered: "What we delivered",
  workStrategic: "Why it matters",
  workImpact: "Impact",
  workGallery: "From the dashboard",
  workCapabilities: "Capabilities shown",
  workStack: "Built with",
  workLiveBadge: "Live",
  workTakeaway: "What this means for you",
  workTraining: "What it brings to our training",
  workTrainingLink: "See the training",
  workCaptions: {
    "transit-map": "Live vehicle-location map across the city fleet",
    "transit-charts":
      "Fleet composition, average speed by category, and accessibility indices",
    "transit-speeding": "Possible congestion points and recorded speeding events",
    // Excerpts from a generated report, identity redacted: the figures are a real
    // company's, the name and registration are not shown. No named company is
    // published, because the report carries risk assessments.
    "raport-firma":
      "Key figures for the last filed financial year, each term defined where it is read. The report is generated in Romanian, in the accounting vocabulary its readers use — these excerpts are from a real company with its identity redacted",
    "raport-firma-indicatori":
      "Every indicator with its formula in balance-sheet line names, a plain-language reading, the company against its sector median, and which direction is better",
    "raport-firma-altman":
      "Insolvency-risk score with the published cut-offs drawn in, each component's contribution, and the national base rate so the label can be sized",
    "raport-firma-risc":
      "Rule-based risk flags, each carrying the figure it derives from, plus the checks that could not run because the data is absent",
  } as Record<string, string>,
} as const;

/* --------------------------------------- Form strings shared with client JS */

export const formStrings = {
  mail: {
    name: "Name",
    company: "Company",
    role: "Role",
    roleSponsor: "Role / sponsor",
    email: "Email",
    problems: "Problems to look at first",
    costToday: "Cost today",
    triedSoFar: "Tried so far",
    dataLivesIn: "Data lives in",
    sensitiveData: "Sensitive data",
    timeline: "Timeline",
    fromWebsite: "website",
    scorecardResult: "Scorecard result",
    question: "Question",
    score: "Score",
    requestedReadoutTo: "Readout requested to",
    answers: "Answers",
  },
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
  assessmentSubjectPrefix: "Diagnostic application —",
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
      label: "The one or two problems you most want looked at",
      hint: "A sentence each. The symptom is enough — you don't need to know the cause.",
      type: "textarea",
      required: true,
    },
    {
      name: "cost",
      label: "What are those problems costing you today, in hours or euros?",
      hint: "Rough is fine. “Don't know” is an acceptable answer — unknowns get scored too.",
      type: "text",
      required: false,
    },
    {
      name: "tried",
      label: "What have you already tried — and what happened?",
      hint: "New software, a consultant, a pilot, an internal fix. Where each one stalled tells us the most.",
      type: "textarea",
      required: false,
    },
    {
      name: "data",
      label: "Where do the numbers you'd need to see live today?",
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
      label: "When would you realistically want this fixed?",
      type: "select",
      required: false,
      options: ["This quarter", "This year", "Someday — exploring for now"],
    },
  ] as AssessmentField[],
  selectPlaceholder: "Choose one (optional)",
  honeypotLabel: "Leave this field empty",
  submitLabel: "Submit application",
  formAria: "Diagnostic application form",
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
        html: `The data controller for this website is ${site.name} (a founder-led practice based in Iași, Romania). If you have any question about this policy or your data, write to us at <a href="mailto:${site.email}">${site.email}</a>.`,
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
        html: `We do not sell your information, and we do not share it with third parties for their own purposes. Your enquiry reaches us either by email or through the website forms, which are processed by Google and stored in a spreadsheet in our own Google account; Google, and the email and hosting providers that carry your message, act only as processors on our behalf. This processing may involve transfers outside the EEA under Google's safeguards.`,
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



