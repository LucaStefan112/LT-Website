/* =========================================================================
   LT Strategy Partners — site content, ROMANIAN (ro)
   -------------------------------------------------------------------------
   Full mirror of ./site.ts with the same export shape. Rules:
   - Natural, formal business Romanian (dumneavoastră), not literal calques.
   - Terminology locked to the Gate Zero kit: construiți acum / încă nu /
     nu construiți; poartă (gate) glossed on first use; „raport” = readout.
   - Romanian is the DEFAULT locale and sits at the root: internal links here
     carry NO prefix ("/#work", "/services"). English is the prefixed tree (/en).
   - Facts, numbers, promises MUST stay identical to the English source —
     when either language changes, change the other the same day.
   ========================================================================= */

import type {
  CTA,
  NavItem,
  Card,
  Service,
  EngagementStage,
  Faq,
  Step,
  Testimonial,
  Layer,
  WorkProject,
  FormField,
  ScorecardQuestion,
  ScorecardTier,
} from "./site";
// Config carries no prose — share the single source of truth.
export { config } from "./site";
import { config } from "./site";

/* --------------------------------------------------------------- Site meta */

const primaryCta: CTA = config.bookingUrl
  ? { label: "Programați o discuție", href: config.bookingUrl, external: true }
  : { label: "Începeți o discuție", href: "/contact" };

const assessmentCta: CTA = {
  label: "Începeți cu diagnosticul",
  href: "/assessment",
};

export const site = {
  name: "LT Strategy Partners",
  shortName: "LT Strategy",
  domain: "ltstrategypartners.com",
  url: "https://ltstrategypartners.com",
  tagline: "Întâi problema. Apoi soluția.",
  description:
    "Găsim ce vă ține firma pe loc și construim soluția: procese, automatizări, rapoarte, aplicații interne și AI acolo unde se justifică. Independenți, fără comisioane de la furnizori.",
  email: "luca.tamas@ltstrategypartners.com",
  phone: "+40734950060",
  phoneDisplay: "+40 734 950 060",
  founder: "Luca-Ștefan Tamaș",
  location: "Iași, România · Lucrăm cu clienți din UE și SUA.",
  links: {
    companyLinkedin: "https://www.linkedin.com/company/lt-strategy-partners/",
    founderLinkedin:
      "https://www.linkedin.com/in/luca-%C8%99tefan-tama%C8%99-a40282229/",
    github: "https://github.com/LucaStefan112",
  },
  primaryCta,
  primaryCtaShort: "Programare",
  assessmentCta,
};

/* ---------------------------------------------------------------- Navigation */

export const nav: NavItem[] = [
  { label: "Ce rezolvăm", href: "/services" },
  { label: "Cum lucrăm", href: "/assessment" },
  { label: "Studii de caz", href: "/work" },
  { label: "Despre", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Ce rezolvăm", href: "/services" },
  { label: "Cum lucrăm", href: "/assessment" },
  { label: "Studii de caz", href: "/work" },
  { label: "Training pentru echipe", href: "/training" },
  { label: "Verificare rapidă", href: "/scorecard" },
  { label: "Despre", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Confidențialitate", href: "/privacy" },
  { label: "Termeni", href: "/terms" },
];

/* ------------------------------------------------------------- Partners */

export const partners = {
  eyebrow: "Companii și instituții cu care am lucrat",
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
  eyebrow: "Întâi problema. Apoi soluția.",
  headline: "Găsim ce vă\u00a0ține firma pe loc. Și construim soluția.",
  subhead:
    "Lucrăm cu antreprenori și manageri care simt că ceva nu merge — marja, timpul, deciziile — dar nu pot spune exact ce. Înțelegem cum funcționează firma de fapt, găsim cauza reală și o rezolvăm: cu un proces mai bun, cu cifre în care puteți avea încredere sau cu un sistem construit de noi.",
  // Role label on the hero portrait name-tag.
  tagRole: "Fondator",
  primaryCta: { ...site.primaryCta, label: "Discutați o problemă" } as CTA,
  secondaryCta: { label: "Vedeți cum lucrăm", href: "/assessment" } as CTA,
  trustLine: "Diagnostic înainte de soluție · Construim ce recomandăm · Fără comisioane de la furnizori",
} as const;

/* ---------------------------------------------- Symptoms ("sună cunoscut?") */

export const symptoms = {
  eyebrow: "Sună cunoscut?",
  heading: "Problemele rareori sunt acolo unde par.",
  items: [
    "Marja scade și nimeni nu poate spune exact de ce.",
    "Aceeași comandă e introdusă de mână în trei locuri.",
    "Raportul de luni durează o zi — și tot nu are nimeni încredere în el.",
    "Ați cumpărat un sistem, dar echipa lucrează tot în Excel.",
    "Totul depinde de doi oameni care știu cum merg lucrurile.",
    "Aveți o idee bună, dar nu o construiește nimeni.",
  ],
  closing:
    "Fiecare are o cauză. De cele mai multe ori nu e cea la care vă gândiți — de aceea începem cu diagnosticul.",
} as const;

/* ------------------------------------------------------- What we solve */

export const solve = {
  eyebrow: "Ce rezolvăm",
  heading: "Patru tipuri de probleme care apar în aproape orice firmă care crește.",
  items: [
    {
      icon: "flow",
      title: "Muncă manuală și procese care se rup",
      body: "Date introduse de mai multe ori, aprobări pe email, oameni-cheie de care depinde totul. Regândim fluxul și automatizăm ce merită.",
    },
    {
      icon: "chart",
      title: "Cifre și decizii",
      body: "Rapoarte făcute de mână, cifre diferite în fiecare departament, marjă neclară pe produs sau client. Construim datele și rapoartele pe care le folosiți în ședința de luni.",
    },
    {
      icon: "users",
      title: "Sisteme pe care nu le folosește nimeni",
      body: "ERP, CRM sau licențe plătite și ocolite. Aflăm de ce, potrivim procesul și pregătim echipa.",
    },
    {
      icon: "code",
      title: "Idei care trebuie construite",
      body: "Un instrument intern, un portal pentru clienți, un produs nou, un caz real pentru AI. Verificăm dacă merită, apoi îl construim.",
    },
  ] as Card[],
  toolbox:
    "Folosim ce se potrivește problemei: un proces mai bun, automatizări, aplicații interne, date și rapoarte, AI — și uneori nimic nou.",
  more: { label: "Vedeți ce rezolvăm în detaliu", href: "/services" } as CTA,
} as const;

/* ------------------------------------------------------- Value pillars */

export const pillars = {
  eyebrow: "De ce LT",
  items: [
    {
      title: "Aceiași oameni, de la diagnostic la sistem.",
      body: "Cel care înțelege problema e cel care construiește soluția. Nimic nu se pierde pe drum.",
      icon: "compass",
    },
    {
      title: "Independenți.",
      body: "Nu luăm comisioane de la furnizori, așa că recomandăm ce vă ajută pe dumneavoastră.",
      icon: "shield",
    },
    {
      title: "Spunem și „nu”.",
      body: "Dacă răspunsul e un proces mai simplu sau nimic deocamdată, vă spunem asta în scris.",
      icon: "target",
    },
    {
      title: "Construim cum trebuie.",
      body: "Sisteme sigure, documentate și predate curat — construim și produse proprii.",
      icon: "code",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Services */

export const services = {
  eyebrow: "Ce rezolvăm",
  symptomsLabel: "Cum arată",
  doLabel: "Ce facem",
  deliverablesLabel: "Ce primiți",
  items: [
    {
      icon: "flow",
      title: "Muncă manuală și procese care se rup",
      symptoms: [
        "Aceleași date sunt introduse de mână în mai multe sisteme.",
        "Aprobările se pierd prin emailuri și prin memoria oamenilor.",
        "Concediul unui singur om încetinește toată echipa.",
      ],
      body: "Urmărim cum circulă munca în realitate, scoatem pașii care nu aduc nimic și automatizăm ce merită — cu instrumentele pe care le aveți deja sau cu o aplicație internă construită exact pentru asta.",
      deliverables: [
        "O hartă a procesului așa cum merge de fapt, cu blocajele marcate",
        "Fluxul regândit, automatizat acolo unde merită",
        "Orele câștigate și erorile evitate, măsurate înainte și după",
      ],
    },
    {
      icon: "chart",
      title: "Cifre și decizii",
      symptoms: [
        "Rapoartele se fac de mână și durează zile.",
        "Fiecare departament are altă cifră pentru același lucru.",
        "Nu vedeți marja pe produs, pe client sau pe locație.",
      ],
      body: "Aflăm de unde vin cifrele, reparăm datele de la sursă și construim rapoartele pe care chiar le folosiți în ședințe — verificate, ca să puteți avea încredere în ele.",
      deliverables: [
        "Un singur set de cifre, cu sursa fiecăreia documentată",
        "Rapoarte care se actualizează singure, în loc să fie refăcute de mână",
        "Cei câțiva indicatori care contează, vizibili în fiecare luni",
      ],
    },
    {
      icon: "users",
      title: "Sisteme pe care nu le folosește nimeni",
      symptoms: [
        "Ați cumpărat un ERP sau un CRM, dar oamenii lucrează tot în Excel.",
        "Licențele de software sau de AI stau nefolosite.",
        "Fiecare echipă ocolește sistemul în felul ei.",
      ],
      body: "Aflăm de ce — de obicei un proces care nu se potrivește, date în care oamenii nu au încredere sau faptul că nu le-a arătat nimeni cum se potrivește sistemul cu munca lor. Apoi potrivim procesul, legăm ce lipsește și pregătim echipa pe munca ei reală.",
      deliverables: [
        "Un diagnostic clar: de ce e ocolit sistemul",
        "Ajustări de proces și integrări, ca sistemul să se potrivească muncii",
        "Training pe sarcinile reale ale echipei, cu folosirea urmărită",
      ],
      link: { label: "Despre trainingul pentru echipe", href: "/training" },
    },
    {
      icon: "code",
      title: "Idei care trebuie construite",
      symptoms: [
        "Știți ce instrument v-ar ajuta, dar nu îl construiește nimeni.",
        "Un portal pentru clienți, o aplicație internă sau un caz de AI tot se amână.",
        "Software-ul gata făcut nu se potrivește cu felul în care lucrați.",
      ],
      body: "Întâi verificăm dacă merită construit: verdictul „construim, cumpărăm sau așteptăm”. Apoi îl proiectăm, îl construim, îl integrăm cu ce folosiți și îl predăm cum trebuie. Folosim AI acolo unde e cu adevărat instrumentul potrivit — privat sau găzduit la dumneavoastră, dacă datele o cer.",
      deliverables: [
        "Un verdict scris „construim / cumpărăm / așteptăm”, cu un interval de cost",
        "Un sistem care rulează în producție, sigur și documentat",
        "O predare curată, ca echipa să îl poată opera",
      ],
    },
  ] as Service[],
  toolbox:
    "Folosim ce se potrivește problemei: un proces mai bun, automatizări, aplicații interne, date și rapoarte, AI — și uneori nimic nou.",
} as const;

/* -------------------------------------- Ways to work together (ladder) */

export const engagements = {
  eyebrow: "Cum lucrăm împreună",
  heading: "Începeți cu puțin. Mergeți mai departe doar dacă merită.",
  intro: "Fiecare pas se încheie cu ceva util și cu o decizie: continuăm sau ne oprim aici.",
  stages: [
    {
      name: "Pentru început",
      items: [
        {
          name: "Discuție de triaj",
          meta: "30 de minute · gratuit",
          body: "O discuție despre problema dumneavoastră. Plecați cu o primă părere și cu pasul următor recomandat, chiar dacă nu suntem noi.",
        },
        {
          name: "Diagnosticul firmei",
          meta: "2–4 săptămâni · gratuit, cel mult trei pe lună",
          body: "O ședință cu echipa de conducere și un diagnostic scris de 3–5 pagini: ce vă ține pe loc, ce rezolvați primul și ce nu merită rezolvat.",
        },
        {
          name: "Sprint de diagnostic",
          meta: "2 săptămâni · preț fix",
          body: "Două săptămâni pe o singură problemă: procesul cartografiat cu echipa, datele verificate, soluția proiectată și un calcul de rentabilitate, cu verdictul „construim, cumpărăm sau așteptăm”.",
        },
        {
          name: "Atelier de echipă",
          meta: "O jumătate de zi sau o zi · preț fix",
          body: "O sesiune pe munca reală a echipei: procese, instrumente digitale, folosirea sigură a AI-ului.",
        },
      ],
    },
    {
      name: "Pentru rezolvare",
      featured: true,
      items: [
        {
          name: "Proiect de rezolvare",
          meta: "De obicei 6–12 săptămâni · preț fix pe etape",
          body: "Soluția, de la cap la coadă: procesul regândit, sistemul construit și integrat, echipa pregătită, rezultatul măsurat. Pe etape, și vă puteți opri după oricare dintre ele.",
        },
      ],
    },
    {
      name: "Pe termen lung",
      items: [
        {
          name: "Partener pe termen lung",
          meta: "Lunar",
          body: "Un număr fix de zile pe lună: planul de tehnologie, deciziile despre furnizori și bugete, îmbunătățiri continue și suport pentru sistemele pe care le-am construit.",
        },
      ],
    },
  ] as EngagementStage[],
  note: "Prețurile sunt fixe și stabilite înainte de fiecare pas. Nu luăm comisioane de la furnizori.",
} as const;

/* ----------------------------------------- Services page: common questions */

export const servicesFaq = {
  eyebrow: "Întrebări frecvente",
  heading: "Ce ne întreabă antreprenorii mai întâi.",
  items: [
    {
      q: "Lucrați cu AI?",
      a: "Da, atunci când e răspunsul potrivit. Am construit sisteme AI de producție, inclusiv un asistent care rulează offline, pe echipamentele firmei. Dar AI-ul e un instrument, nu punctul de plecare: întâi aflăm unde ajută cu adevărat și unde ar fi doar o cheltuială.",
    },
    {
      q: "Și dacă problema nu ține de tehnologie?",
      a: "Atunci vă spunem. Uneori soluția e un proces mai simplu, un responsabil clar pentru o sarcină sau un raport făcut cum trebuie — și uneori nimic deocamdată.",
    },
    {
      q: "Cât costă?",
      a: "Discuția de triaj și Diagnosticul firmei sunt gratuite. Tot ce urmează are preț fix pe etape, stabilit înainte să începem, și vă puteți opri după oricare etapă.",
    },
    {
      q: "Cine face munca?",
      a: "Lucrați direct cu fondatorul: cel care înțelege problema e cel care proiectează și construiește soluția.",
    },
    {
      q: "Lucrați la distanță?",
      a: "Da — cu clienți din UE și din SUA, iar în România venim și la sediul dumneavoastră, când ajută.",
    },
  ] as Faq[],
} as const;


/* -------------------------- Gate Zero: the /assessment offer page content */

export const assessmentPage = {
  eyebrow: "Cum lucrăm · Diagnosticul firmei",
  heading:
    "Înainte să vă vândă cineva o soluție, aflați ce vă ține de fapt pe loc.",
  lead: "O ședință cu echipa de conducere și un diagnostic scris, scurt: ce vă costă cel mai mult, ce rezolvați întâi și ce nu merită rezolvat acum. Gratuit, îl facem noi, cu locuri limitate.",
  heroCta: { label: "Cereți un diagnostic", href: "#apply" } as CTA,
  heroFacts: [
    "45–60 de minute cu echipa de conducere",
    "Unul per firmă",
    "Fără acces la sisteme",
    "Fără discurs de vânzare",
  ],

  problem: {
    eyebrow: "De ce există",
    heading: "Aproape toți vin la dumneavoastră cu răspunsul deja pregătit.",
    paragraphs: [
      "Știți că ceva nu merge, dar nu și ce anume. O marjă care exista și acum nu mai e. Aceeași comandă tastată în trei sisteme. O decizie care așteaptă un raport.",
      "Întrebați un furnizor și primiți înapoi produsul lui. Noi nu luăm comision de la niciun furnizor, așa că ne uităm întâi la firma dumneavoastră — iar cauza e adesea o regulă de preț, o predare de care nu răspunde nimeni sau un raport în care nimeni nu are încredere. Când chiar trebuie construit ceva, îl construim noi.",
    ],
  },

  deliverable: {
    eyebrow: "Ce primiți",
    heading: "Diagnosticul scris.",
    intro: "Trei până la cinci pagini, scrise de noi. Prima pagină se poate citi și singură.",
    items: [
      "O notă de o pagină, cu răspunsul în titlu",
      "Fiecare problemă pe o singură hartă: cât costă și cât de greu se rezolvă",
      "Pentru fiecare problemă care merită rezolvată, tipul de soluție: o schimbare de proces, un raport, training sau ceva de construit",
      "O secțiune intitulată „Ce nu merită rezolvat acum”, cu motivele",
      "Pași următori, inclusiv cei pe care îi puteți face fără noi",
    ],
    guaranteeLabel: "Garanția, în scris",
    guarantee:
      "Așteptați-vă la cel puțin un lucru pe care vă spunem să nu-l rezolvați, sau să nu-l rezolvați acum, cu motivul în scris. Dacă răspunsul e o schimbare de proces, nu un sistem nou, diagnosticul o spune. Și nu inventează niciodată un verdict, în nicio direcție.",
    sampleCta: {
      label: "Citiți un exemplu de diagnostic",
      href: "/assessment/sample-diagnosis",
    } as CTA,
  },

  method: {
    eyebrow: "Metoda",
    heading: "Cum ne uităm la firmă.",
    intro:
      "Venim fără o soluție pregătită. Fiecare problemă e privită din șapte unghiuri, cu cifrele și cu vocabularul dumneavoastră.",
    dimensions: [
      { name: "Valoarea în joc", desc: "Euro sau ore legate de o activitate concretă. Conservator, fără proiecții spectaculoase." },
      { name: "Realitatea datelor", desc: "Informația există și se poate accesa astăzi?" },
      { name: "Cum se lucrează în realitate", desc: "Ocolișurile, datele trecute de două ori, al doilea tabel." },
      { name: "Toleranța la erori față de miză", desc: "Cât costă o greșeală și cât trece până o prinde cineva." },
      { name: "Dacă rezultatul se poate măsura", desc: "Se va vedea în cifre pe care le aveți deja?" },
      { name: "Cost, efort și responsabilitate", desc: "Cât costă o soluție în funcționare și cine răspunde de ea după ce plecăm." },
      { name: "Expunere și dependențe", desc: "Oameni de care atârnă totul, date personale, regulile cărora sunteți supuși." },
    ],
    rulesLabel: "Trei reguli, prezente în fiecare diagnostic",
    rules: [
      "Ce contează cel mai mult se stabilește cu dumneavoastră înainte de punctare.",
      "Niciun scor agregat: decide dimensiunea cea mai slabă.",
      "Fiecare punctaj își declară nivelul de încredere și ipotezele.",
    ],
    questionsLabel: "Patru dintre întrebările pe care le punem de fapt",
    gateQuestions: [
      "Unde ajunge astăzi o greșeală — și cine o observă?",
      "Ce decizii stau blocate pentru că vă lipsesc informații?",
      "Cât vă costă asta în fiecare lună în care rămâne așa?",
      "Ce se întâmplă cu asta dacă pleacă omul care o ține?",
    ],
    build: {
      label: "Când trebuie construit ceva: Gate Zero",
      body: "Dacă diagnosticul arată că e nevoie de ceva nou — un program, o automatizare, un sistem AI — acesta trece prin Gate Zero înainte să se cheltuiască vreun ban: verificarea go/no-go la care e supus oricum un sistem care lucrează pe viu, făcută dinainte. Primiți verdictul în scris: construiți acum, încă nu sau nu construiți, cu un interval de cost, cât durează până la punerea în funcțiune și condițiile în care ne-am opri.",
      standards:
        "Pentru sistemele AI, verificarea se raportează la EU AI Act (articolul 6 / anexa III), la NIST AI Risk Management Framework și la OWASP Top 10 pentru aplicații LLM.",
      link: { label: "Exemplu: când soluția e un sistem AI", href: "/assessment/sample-readout" } as CTA,
    },
  },

  process: {
    eyebrow: "Cum decurge",
    heading: "Patru pași, două până la patru săptămâni.",
    steps: [
      {
        name: "Cererea",
        time: "10 minute",
        desc: "Zece întrebări despre firmă și despre ce nu funcționează. Citim fiecare cerere și pe unele le refuzăm.",
      },
      {
        name: "Ședința de diagnostic",
        time: "45–60 de minute",
        desc: "O discuție structurată cu echipa de conducere, pe urmele banilor și ale blocajelor. Fără parole, fără acces la sisteme.",
      },
      {
        name: "Se scrie diagnosticul",
        time: "într-o săptămână",
        desc: "Fiecare problemă, punctată pe cele șapte dimensiuni și așezată pe o singură hartă.",
      },
      {
        name: "Discutăm diagnosticul",
        time: "30 de minute",
        desc: "Un răspuns limpede despre ce rezolvați întâi: acum, mai târziu sau deloc. Documentul rămâne al dumneavoastră, oricum ar fi.",
      },
    ],
  },

  whyFree: {
    eyebrow: "De ce e gratuit",
    heading: "E un diagnostic, nu tratamentul.",
    body: "Așa aflăm, de ambele părți, dacă are rost să lucrăm împreună; munca plătită vine după, doar dacă o vreți. Rămâne gratuit pentru că e limitat: le facem pe toate noi — cel mult trei pe lună, unul per firmă.",
    branches: [
      {
        name: "Dacă e ceva de rezolvat",
        desc: "Știți ce fel de soluție vă trebuie și care e pasul următor, înainte să vă angajați la ceva.",
      },
      {
        name: "Dacă nu e",
        desc: "Păstrați diagnosticul. Fără e-mailuri de urmărire.",
      },
    ],
  },

  fit: {
    eyebrow: "Potrivire",
    heading: "Pentru cine este — și pentru cine nu.",
    forLabel: "Este pentru dumneavoastră dacă",
    notForLabel: "Nu este dacă",
    forWho: [
      "Vedeți simptomul, dar nu și cauza",
      "Marja, stocul sau încasările scapă de sub control și nu știți de ce",
      "Ați cumpărat un sistem sau ați încercat un pilot, fără mare rezultat",
      "Urmează o achiziție mare de software și vreți întâi o a doua părere",
    ],
    notForWho: [
      "Căutați un plan de implementare gratuit",
      "Nimeni din conducere nu poate participa",
      "Căutați confirmarea unei decizii deja luate — răspunsul ar putea fi „niciun sistem nou”",
    ],
  },

  apply: {
    eyebrow: "Cererea",
    heading: "Cereți Diagnosticul firmei.",
    intro:
      "Zece întrebări, cam zece minute. Dacă acceptăm cererea, primiți agenda ședinței înainte să blocați timpul echipei.",
    microcopy:
      "Gratuit · unul per firmă · cel mult trei pe lună · doar discuție ghidată, fără acces la sisteme",
    submitLabel: "Trimiteți cererea",
  },
} as const;

/* ------------------------------ Exemplu de diagnostic (/assessment/sample-diagnosis) */
/* Traducerea integrală a `sampleDiagnosis` din site.ts. „Velmora Distribuție”
   este o firmă fictivă, iar toate cifrele sunt inventate. Punctajele și
   pozițiile de pe hartă stau în SampleDiagnosisView (comune ambelor limbi). */
export const sampleDiagnosis = {
  back: "Diagnosticul firmei",
  kicker: "Exemplu: o firmă de distribuție",
  title: "Un exemplu de diagnostic.",
  banner: [
    { lead: "Unde se încadrează acest document.", text: "Acesta este diagnosticul scris pe care îl primiți la finalul Diagnosticului firmei, care e gratuit." },
    { lead: "Exemplu ilustrativ.", text: "„Velmora Distribuție” este o companie fictivă, iar fiecare cifră de mai jos este inventată. Metoda, punctarea și formatul sunt exact ceea ce primiți; diferența e că le aplicăm pe cifrele dumneavoastră." },
  ],
  docHead: "Diagnosticul firmei — Velmora Distribuție · septembrie 2026 · Întocmit de Luca-Ștefan Tamaș, LT Strategy Partners",

  memo: {
    tag: "Pagina 1 · Memo de decizie",
    verdict: "Introduceți fiecare comandă o singură dată. Urmăriți marja în fiecare săptămână. Păstrați CRM-ul pe care îl aveți — și folosiți-l cu adevărat.",
    body: "Conducerea Velmora a adus cinci probleme la ședință. Trei merită rezolvate acum, în această ordine, și doar pentru una dintre ele trebuie construit ceva. Celelalte două pot aștepta: una e în mare parte efectul primei, iar cealaltă e o achiziție de 85.000 € care n-ar rezolva ce nu funcționează de fapt.",
    points: [
      { lead: "Comenzile sunt tastate de trei ori, iar asta costă în jur de 31.000 € pe an.", text: "Fiecare comandă intră în ERP, apoi în lista de pregătire din depozit, apoi în programul de facturare — trei oameni, cam 30 de ore pe săptămână. De aici pornesc majoritatea erorilor din depozit și a facturilor corectate. Soluția e singurul lucru de construit din acest diagnostic: legăm sistemele pe care le aveți deja, ca o comandă să fie introdusă o singură dată." },
      { lead: "Marja se vede cu șase săptămâni întârziere, iar reducerile se dau pe nevăzute.", text: "Raportul de marjă se face de mână, pe la 12 ale lunii următoare, fără costurile de transport și fără reducerile stabilite la telefon. În trei luni de facturi, 11 dintre primii 40 de clienți erau sub marja țintă, odată ce am pus la socoteală transportul. Soluția e un raport săptămânal și o regulă, nu un sistem nou." },
      { lead: "Problema nu e CRM-ul — nimeni nu le-a arătat oamenilor unde se potrivește în munca lor.", text: "Doi din opt agenți de vânzări îl folosesc, iar ședința săptămânală de vânzări se ține pe tabelele lor personale. Un CRM nou ar repeta povestea, cu altă siglă. Soluția e o schimbare în felul în care se ține ședința și două sesiuni de lucru cu echipa." },
    ],
    anchor: "Ce bănuia deja conducerea, acum cu cifre: plângerea biroului de comenzi că tastează aceeași comandă iar și iar e cea mai scumpă problemă din firmă — mai scumpă decât ERP-ul de care se plânge toată lumea.",
    nextLabel: "Responsabili și primele 30 de zile",
    next: "Managerul de operațiuni răspunde de fluxul comenzilor, cap-coadă, începând de săptămâna aceasta. Managerul financiar face de mână verificarea săptămânală a marjei pentru primii 40 de clienți, începând de lunea viitoare.",
  },

  map: {
    tag: "Pagina 2 · Harta problemelor",
    title: "Cinci probleme, o singură hartă.",
    ariaLabel: "Harta costului anual al fiecărei probleme, în funcție de cât de ușor se rezolvă. A, comenzi tastate de trei ori: cost mare, destul de ușor de rezolvat — de rezolvat întâi. B, marja văzută prea târziu: cost mare, ușor de rezolvat — de rezolvat întâi. C, CRM-ul pe care nu-l folosește nimeni: cost mai mic, ușor de rezolvat — câștig rapid. D, ERP-ul de care se plânge toată lumea: cost mic, greu de rezolvat — rămâne deocamdată. E, erorile din depozit: cost moderat, greu de rezolvat separat, cauzate mai ales de A — încă nu.",
    axisY: "Cât costă pe an →",
    axisX: "Cât de ușor se rezolvă →",
    quadrants: { tl: "Merită — de planificat", tr: "De rezolvat întâi", bl: "Rămâne deocamdată", br: "Câștiguri rapide" },
    dots: {
      a: "A · Comenzi tastate de trei ori",
      b: "B · Marja văzută prea târziu",
      c: "C · CRM-ul pe care nu-l folosește nimeni",
      d: "D · ERP-ul de care se plânge toată lumea",
      e: "E · Erori în depozit",
    },
    tableLabel: "Punctajul celor trei soluții care merită făcute",
    tableHead: "Dimensiunea diagnosticului",
    columns: ["A · Comenzi", "B · Marjă", "C · CRM"],
    rag: {
      green: { letter: "V", label: "Solid — nimic de aici nu stă în calea soluției" },
      amber: { letter: "G", label: "Lipsă rezolvabilă — condiția de îndeplinit este numită" },
      red: { letter: "R", label: "Vine întâi — soluția nu ține până nu se rezolvă asta" },
    },
    notes: [
      { cell: "A / Cum se lucrează (galben):", text: "cam un sfert din comenzi vin pe WhatsApp, în afara oricărei căsuțe de e-mail. Soluția are nevoie de o singură cale de intrare pentru comenzi, stabilită întâi cu agenții de vânzări." },
      { cell: "A / Responsabilitate (galben):", text: "biroul de comenzi, depozitul și financiarul răspund fiecare de o bucată din flux; de fluxul întreg nu răspunde nimeni. Numim un responsabil înainte să se construiască ceva." },
      { cell: "A / Dependențe (galben):", text: "un singur om știe cum ajung facturile în programul de facturare. Se pune pe hârtie în prima fază, înainte să se schimbe ceva." },
      { cell: "B / Valoare (galben):", text: "scenariul de bază de 25.000 € vine din trei luni de facturi; anul întreg îl va schimba, cel mai probabil în sus." },
      { cell: "B / Realitatea datelor (galben):", text: "reducerile apar doar ca text liber, în observațiile facturilor, iar costurile de transport stau într-un tabel separat. Amândouă au nevoie de un câmp propriu în ERP." },
      { cell: "B / Toleranța la erori (galben):", text: "o cifră de marjă greșită ar împinge reducerile în direcția greșită. Raportul se verifică lunar cu contabilitatea." },
      { cell: "C / Valoare (galben):", text: "costul licențelor e cunoscut (4.800 € pe an); pierderea din ofertele la care nu mai revine nimeni nu e măsurată, deci nu intră în calcul." },
      { cell: "C / Realitatea datelor (roșu):", text: "CRM-ul conține cam 30% din clienții activi; restul stau în tabelele personale ale agenților." },
      { cell: "C / Cum se lucrează (roșu):", text: "ședința săptămânală de vânzări se ține pe aceste tabele, așa că nimic nu-i aduce pe oameni în CRM. Asta vine întâi." },
    ],
    bindingLead: "Constrângerea care blochează totul la Velmora:",
    binding: "comenzile intră în firmă de trei ori — de aici pornește cea mai mare parte din ce merge prost mai departe.",
    footnote: "Ce contează cel mai mult a fost stabilit cu conducerea Velmora înainte de punctare: întâi banii și marja, apoi timpul biroului de comenzi. Nu se raportează niciun scor agregat — decide dimensiunea cea mai slabă; mediile ascund.",
  },

  fixes: {
    tag: "Pagina 3 · Ce rezolvăm și cum",
    title: "Trei soluții, în ordine.",
    labels: {
      problem: "Problema",
      cost: "Cât costă, scenariu de bază conservator",
      fix: "Soluția",
      effort: "Efort și interval de cost",
      measure: "Cum vedem că a funcționat",
      owner: "Responsabil",
    },
    items: [
      {
        name: "A · Fiecare comandă, introdusă o singură dată",
        kind: "Ceva de construit",
        problem: "Comenzile vin pe e-mail, la telefon și pe WhatsApp și sunt tastate în ERP, apoi în lista de pregătire din depozit, apoi în programul de facturare.",
        cost: "3 oameni × ~10 ore pe săptămână × 46 de săptămâni × 10 €/oră (costul complet al Velmora) ≈ 14.000 € pe an doar pe tastat. La asta se adaugă cam 40 de facturi corectate pe lună și livrările refăcute din cauza comenzilor greșite: ≈ 17.000 €. În total, în jur de 31.000 € pe an.",
        fix: "Legăm ce aveți deja: comanda se introduce o singură dată, în ERP, și ajunge singură în depozit și în programul de facturare. Comenzile de pe WhatsApp intră într-o singură căsuță comună. Niciun sistem nou.",
        effort: "6–8 săptămâni; mai puțin decât costă problema într-un an, plătit pe faze. Un interval, nu o ofertă.",
        measure: "Orele de tastat la 100 de comenzi, facturile corectate pe lună și erorile din depozit — măsurate înainte și la 30 de zile după.",
        owner: "Managerul de operațiuni.",
      },
      {
        name: "B · Marja, văzută în fiecare săptămână",
        kind: "Un raport și o regulă",
        problem: "Marja se află pe la 12 ale lunii următoare, fără costurile de transport și fără reducerile stabilite la telefon.",
        cost: "În trei luni de facturi, 11 dintre primii 40 de clienți erau sub marja țintă, cu transportul inclus. Scenariu de bază: cel puțin 25.000 € pe an în reduceri date pe comenzi care erau deja sub țintă.",
        fix: "Un raport săptămânal de marjă pe client și pe produs, făcut din datele din ERP, cu transportul și reducerile incluse. Și o regulă: orice reducere peste 5% trece printr-o verificare de marjă înainte să fie promisă.",
        effort: "2–3 săptămâni; câteva mii de euro. Cea mai mare parte a muncii e să stabilim ce înseamnă „marjă” la Velmora.",
        measure: "Ponderea comenzilor cu reduceri sub marja țintă, în fiecare săptămână.",
        owner: "Managerul financiar, împreună cu directorul de vânzări pentru regula de reduceri.",
      },
      {
        name: "C · CRM-ul, folosit cu adevărat",
        kind: "Proces și training",
        problem: "Doi din opt agenți de vânzări folosesc CRM-ul cumpărat acum 18 luni; ședința săptămânală de vânzări se ține pe tabelele lor personale.",
        cost: "4.800 € pe an în licențe, plus ofertele la care nu mai revine nimeni — nemăsurat, deci neinclus.",
        fix: "Dați CRM-ului trei roluri: clienți, oferte și revenirea după ofertă. Mutați clienții activi în el. Țineți ședința săptămânală de vânzări din CRM. Două sesiuni de lucru cu agenții, pe clienții lor.",
        effort: "3 săptămâni, mai ales timpul echipei; un atelier de o jumătate de zi.",
        measure: "Ofertele urmate de o revenire în 7 zile și agenții activi în CRM în fiecare săptămână.",
        owner: "Directorul de vânzări.",
      },
    ],
    confidence: "Nivel de încredere: punctaj la adâncimea discuției ghidate — pe sistemele descrise în ședință, nu inspectate. Ipoteze declarate: costul complet pe oră, din cifrele de salarizare ale Velmora; volumele de comenzi și corecturile, din ultimele trei luni; reducerile, dintr-un eșantion de 600 de facturi.",
  },

  later: {
    tag: "Pagina 4 · Ce nu merită rezolvat acum și pașii următori",
    title: "Ce lăsăm deoparte — și ce urmează.",
    notYetLabel: "Ce nu merită rezolvat acum",
    items: [
      {
        chip: "Nu cumpărați acum",
        name: "D · Înlocuirea ERP-ului",
        text: "Toată lumea se plânge de ERP și există pe masă o ofertă de 85.000 € pentru înlocuirea lui. Dar nu ERP-ul e cel care nu funcționează: comenzile se tastează pe lângă el, raportul de marjă se face în afara lui, iar CRM-ul stă alături. Un ERP nou ar moșteni toate trei problemele.",
        unlockLabel: "Ce ar schimba verdictul:",
        unlock: "dacă, la un an după A, B și C, ERP-ul e încă cel care blochează o soluție, revine pe listă — cu un calcul de rentabilitate.",
      },
      {
        chip: "Încă nu",
        name: "E · Scanarea codurilor de bare în depozit",
        text: "Erorile de pregătire sunt reale — cam 1,5% din comenzi — dar aproximativ două treimi dintre ele pornesc de la o comandă retastată. Scanarea ar costa în jur de 20.000 € ca să rezolve treimea rămasă.",
        unlockLabel: "Ce ar schimba verdictul:",
        unlock: "măsurăm din nou la 60 de zile după ce A funcționează. Dacă erorile rămân peste 0,5% din comenzi, scanarea revine, cu un calcul de rentabilitate.",
      },
    ],
    stepsLabel: "Pașii următori — cu noi sau fără noi",
    steps: [
      { lead: "Numiți un responsabil pentru fluxul comenzilor (de făcut de dumneavoastră, săptămâna aceasta).", text: "Nu e nevoie de niciun proiect: un singur om, care răspunde de o comandă de la primul mesaj până la factură." },
      { lead: "Începeți verificarea marjei de mână (de făcut de dumneavoastră, de lunea viitoare).", text: "Primii 40 de clienți, facturile din săptămâna trecută, cu transportul inclus. Un tabel e suficient — obiceiul contează mai mult decât instrumentul." },
      { lead: "Dați CRM-ului cele trei roluri (de făcut de dumneavoastră, într-o ședință).", text: "Clienți, oferte, revenirea după ofertă. Restul așteaptă." },
      { lead: "Stabiliți ce cuprinde integrarea comenzilor.", text: "Cu noi sau cu altcineva: cartografiați fluxul, verificați cum se pot lega ERP-ul și programul de facturare și cereți un preț pe faze." },
    ],
    forwardLabel: "Dacă vreți ajutor, iată unde se potrivește fiecare soluție",
    forward: [
      { lead: "A → un Proiect de rezolvare în trei faze:", text: "cartografiem fluxul, legăm sistemele, apoi echipa trece pe noul flux, iar noi măsurăm." },
      { lead: "B → un Sprint de diagnostic pe cifre și decizii,", text: "sau prima fază a proiectului A." },
      { lead: "C → un Atelier de echipă de o jumătate de zi", text: "și două sesiuni de urmărire cu agenții de vânzări." },
    ],
    yours: "Documentul rămâne al dumneavoastră, oricum ar fi.",
  },

  cta: {
    text: "Acesta este documentul pe care îl primește conducerea firmei dumneavoastră — construit pe cifrele și în cuvintele dumneavoastră.",
    button: { label: "Începeți cu Diagnosticul firmei", href: "/assessment#apply" } as CTA,
    ai: { label: "Când soluția e un sistem AI: un exemplu de verdict Gate Zero", href: "/assessment/sample-readout" } as CTA,
  },
} as const;


/* ----------------------------------------------------------- Approach */

export const approach = {
  eyebrow: "Cum lucrăm",
  more: { label: "Începeți cu diagnosticul", href: "/assessment" } as CTA,
  outputLabel: "Ce obțineți",
  title: "Cinci pași, aceiași oameni de la început la sfârșit.",
  intro:
    "Pornim de la problemă, nu de la o soluție aleasă dinainte — și vă puteți opri după orice pas care nu se mai justifică.",
  steps: [
    {
      n: "01",
      icon: "search",
      title: "Diagnosticăm",
      body: "Înțelegem cum circulă munca și banii și găsim cauza, nu simptomul.",
      output:
        "O imagine scrisă a problemelor reale, ordonate după cât vă costă.",
    },
    {
      n: "02",
      icon: "ranking",
      title: "Decidem",
      body: "Punem o cifră pe fiecare problemă și alegem împreună ce merită rezolvat — inclusiv ce nu.",
      output:
        "O listă scurtă, în ordine, cu criteriile de succes stabilite de la început.",
    },
    {
      n: "03",
      icon: "code",
      title: "Construim",
      body: "Proiectăm și construim soluția: proces, automatizare, raport sau sistem.",
      output:
        "O soluție care rulează în firmă, integrată cu ce folosiți deja.",
    },
    {
      n: "04",
      icon: "users",
      title: "Pregătim echipa",
      body: "Îi pregătim pe oameni să lucreze în noul mod, pe sarcinile lor reale.",
      output:
        "O echipă care folosește soluția, cu fluxuri de lucru pe care le păstrează.",
    },
    {
      n: "05",
      icon: "chart",
      title: "Măsurăm",
      body: "Verificăm dacă s-a schimbat ce trebuia și ajustăm.",
      output:
        "Rezultate măsurate pe indicatorii dumneavoastră și un plan pentru ce urmează.",
    },
  ] as Step[],
} as const;

/* ----------------------------------------------------- Statement band */

export const statement = {
  eyebrow: "Ce se schimbă",
  lines: [
    "Știți ce vă costă de fapt.",
    "Soluția funcționează și e folosită.",
    "Vedeți rezultatul în cifre.",
  ],
  support:
    "Fiecare problemă, cu cifra ei: ore, bani, risc. O soluție care rulează în firmă, nu un document pe raft. Și rezultatul, măsurat înainte și după, pe indicatori stabiliți împreună.",
} as const;

/* --------------------------------------------------- Testimonials */
export const testimonials: Testimonial[] = [];

export const testimonialsMeta = {
  eyebrow: "Ce spun clienții",
  heading: "În cuvintele lor.",
} as const;

/* ------------------------------------- Three layers we work across */

export const layers = {
  eyebrow: "Trei niveluri, un singur partener",
  body: "Rareori o soluție eșuează din cauza tehnologiei. Eșuează când se lucrează pe un singur nivel: conducerea cumpără un sistem, procesul rămâne la fel, iar echipa lucrează tot în tabelul vechi. Noi lucrăm pe toate trei deodată.",
  items: [
    {
      layer: "Conducerea",
      icon: "compass",
      question: "Ce merită rezolvat întâi?",
      detail: "Unde costă problema cel mai mult, cât valorează rezolvarea ei și ce lăsăm deoparte.",
    },
    {
      layer: "Procesele",
      icon: "flow",
      question: "Cum trebuie să se schimbe munca?",
      detail: "Regândim fluxurile, predările și rapoartele, ca rezultatul să se vadă în cifre.",
    },
    {
      layer: "Oamenii",
      icon: "users",
      question: "Cum va lucra echipa, concret, cu noua soluție?",
      detail: "Exersăm cu echipa pe munca ei reală, cu instrumentele pe care le va folosi zilnic.",
    },
  ] as Layer[],
} as const;


/* ----------------------------------------------- Founder strip (home) */

export const founderStrip = {
  eyebrow: "Cine lucrează cu dumneavoastră",
  body: "Sunt Luca-Ștefan Tamaș. Din 2020 construiesc sisteme software — platforme enterprise, produse proprii, sisteme AI — dar ce mă interesează cu adevărat e problema din spatele lor. Lucrați direct cu mine: cel care înțelege problema e cel care construiește soluția.",
  link: { label: "Mai multe despre mine", href: "/about" } as CTA,
} as const;

/* ------------------------------------------------- About: full page */

export const aboutPage = {
  eyebrow: "Despre",
  heading: "Rezolv probleme. Și construiesc soluția.",
  lead: "Sunt Luca-Ștefan Tamaș. Ajut firmele să găsească ce le ține pe loc — muncă manuală, cifre în care nu are nimeni încredere, sisteme pe care nu le folosește nimeni — și construiesc soluția.",
  paragraphs: [
    "Sunt inginer de sisteme și, din 2020, construiesc software care trebuie să funcționeze în firme reale: platforme enterprise, două produse proprii și un asistent AI care rulează offline, pe echipamentele firmei. Ce mă interesează cel mai mult, însă, e problema din spatele sistemului.",
    "Cele mai multe firme cu care vorbesc nu au nevoie de mai multă tehnologie. Au nevoie să știe unde se duc timpul și banii, ce merită rezolvat întâi și o soluție pe care oamenii chiar o folosesc. Uneori asta înseamnă un proces mai simplu. Alteori, cifre în care toată lumea are încredere. Alteori, un sistem pe care îl construiesc eu.",
    "LT Strategy Partners e o firmă mică, intenționat. Nu există intermediari și nu sunteți pasați de la un om la altul: cel care stă cu echipa de conducere ca să găsească problema e același care construiește soluția și le arată oamenilor dumneavoastră cum s-o folosească. De aceea lucrez cu puțini clienți în același timp.",
  ],
  principlesEyebrow: "Cum gândesc",
  principlesHeading: "Cinci reguli după care lucrez.",
  principles: [
    { title: "Simptomul e rareori problema.", body: "Înainte să propun ceva, vreau să văd cum se lucrează de fapt: unde se blochează comenzile, banii și informația, și cât vă costă asta." },
    { title: "„Nu construiți asta” e un răspuns normal.", body: "Nu iau comisioane de la furnizori, așa că nu pierd nimic dacă vă spun să nu cumpărați sau să nu construiți ceva. Tocmai de aceea un „construiți” are greutate." },
    { title: "Câștigă cea mai simplă soluție care funcționează.", body: "Adesea, un proces mai clar sau un raport de încredere ajută mai mult decât un sistem nou. Când chiar trebuie construit ceva, îl construiesc cum trebuie: sigur, documentat și predat." },
    { title: "Dacă echipa nu poate explica soluția, n-am explicat-o eu bine.", body: "O soluție se amortizează doar dacă oamenii care o folosesc o înțeleg. De aceea lucrez cu vorbe simple, pe sarcinile reale ale echipei." },
    { title: "Rezultatele se măsoară, nu se declară.", body: "Stabilim de la început cum vom ști că a mers, iar eu vă spun deschis ce s-a schimbat — și ce nu." },
  ],
  workHeading: "Câteva lucruri pe care le-am construit",
  workSlugs: ["processly", "atlas-economic", "transit-analytics"],
  glanceHeading: "Pe scurt",
  glance: [
    "Software pentru firme reale din 2020 — web, mobil, date și AI, pentru clienți din UE și SUA",
    "Fondatorul a două produse software, Processly și Mazely; arhitect principal al unei platforme enterprise pentru rapoarte, ERP, documente și automatizarea proceselor",
    "Un asistent AI care rulează offline, pe echipamentele firmei — construit ca datele să nu iasă din firmă",
    "Inginerie de sisteme de producție într-un mediu critic pentru securitate — de aceea ce construiesc vă protejează datele și funcționează fără întreruperi",
  ],
  photoCaption: "Luca-Ștefan Tamaș · Fondator",
  ctaHeading: "Ce problemă vă încurcă cel mai mult?",
} as const;

/* ------------------------------------------------------- CTA (pre-footer) */

export const ctaBand = {
  headline: "Ce nu merge în firma dumneavoastră?",
  body: "Spuneți-ne problema, chiar dacă nu știți încă de unde vine. Prima discuție e gratuită, fără prezentări și fără ofertă pe loc.",
  cta: site.primaryCta,
} as const;


/* ------------------------------------------------------------ Contact */

export const contact = {
  eyebrow: "Contact",
  headline: "Să vorbim deschis.",
  intro:
    "Spuneți-ne ce nu merge în firmă, chiar dacă nu știți încă de unde vine. Vă răspundem personal, în cel mult două zile lucrătoare, cu o primă părere — nu cu o ofertă.",
  email: site.email,
  phone: site.phone,
  phoneDisplay: site.phoneDisplay,
  location: site.location,
  fields: [
    {
      name: "name",
      label: "Nume",
      type: "text",
      required: true,
      autocomplete: "name",
    },
    {
      name: "company",
      label: "Firmă",
      type: "text",
      required: true,
      autocomplete: "organization",
    },
    {
      name: "role",
      label: "Funcție",
      type: "text",
      required: false,
      autocomplete: "organization-title",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      autocomplete: "email",
    },
    {
      name: "message",
      label: "Ce problemă vreți să rezolvați?",
      type: "textarea",
      required: true,
    },
  ] as FormField[],
  prefills: {
    assessment: "Aș dori Diagnosticul firmei.",
    training: "Ne-ar interesa un training pentru echipa noastră.",
  } as Record<string, string>,
  submitLabel: "Trimiteți mesajul",
  asideEyebrow: "Linie directă",
  asideLead: "Preferați emailul sau vreți să ne contactați direct?",
  asidePoints: [
    "Consultanță independentă, la nivel senior — fără comisioane de la furnizori.",
    "De la diagnostic la soluția construită, cu aceiași oameni.",
    "Răspuns în cel mult două zile lucrătoare, cu o primă părere — nu cu o ofertă.",
    "Fără discurs de vânzare, fără presiune.",
  ],
  privacyHtml:
    'Vă folosim datele doar ca să vă răspundem și nu le transmitem niciodată altcuiva. Detalii în <a href="/privacy">politica de confidențialitate</a>.',
  successMessage:
    "Mulțumim — mesajul dumneavoastră este gata de trimis. Vă răspundem personal în cel mult două zile lucrătoare.",
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
    "Găsim ce vă ține firma pe loc și construim soluția — sau vă spunem limpede că nu e nevoie să construiți nimic.",
} as const;

/* ------------------------------------------------- Selected work / portfolio */

export const work = {
  eyebrow: "Studii de caz",
  intro:
    "De la problemă la sistemul care rulează: câteva lucruri pe care le-am proiectat și construit de la zero.",
  homeSlugs: ["processly", "atlas-economic", "transit-analytics", "restaurant-ai"],
  projects: [
    {
      slug: "processly",
      name: "Processly",
      tagline: "Proiectați procesul o dată. Rulați-l de câte ori vreți.",
      problem: "Munca recurentă era refăcută de la zero de fiecare dată.",
      solution: "Un sistem care o pornește la comandă sau după calendar.",
      category: "Automatizarea fluxurilor de lucru",
      kind: "product",
      label: "Produs · construit cap-coadă",
      accent: "#111214",
      heroDark: true,
      oneLiner:
        "O platformă care transformă activitățile care se repetă în procese vizuale, pe care echipele le pornesc oricând, cu un singur clic",
      overview:
        "Processly este o aplicație web pentru coordonarea vizuală a proceselor și a proiectelor. Fluxul de lucru se desenează o singură dată, apoi din el se generează proiecte — cu un singur clic, după un calendar sau în ambele feluri. Ideea e ca procesele să rămână ale firmei și să se vadă limpede cum rulează munca.",
      context: "Echipele reproiectează și refac de mână aceeași muncă recurentă, de fiecare dată când revine.",
      found: "Munca în sine nu era problema; problema era că felul în care se organizează se pierdea de fiecare dată. Cunoștințele din spatele fiecărui proces stăteau în capul câtorva oameni și în câteva prezentări, așa că fiecare reluare pornea de la zero.",
      result: "Un produs funcțional: un proces se proiectează o singură dată, apoi pornește cu un clic, după calendar sau în ambele feluri — iar munca recurentă nu mai pornește de la zero.",
      delivered: [
        "Un editor vizual de fluxuri de lucru, pe bază de DAG: procesul se definește o dată și se refolosește",
        "Proiecte generate cu un singur clic, pornind de la un proces salvat",
        "Generare după calendar, ca munca care se repetă să pornească singură",
        "Pornire manuală și pornire programată, combinate în același proces",
      ],
      strategic: [
        "Transformă munca intelectuală care se repetă în sisteme refolosibile, în loc de efort consumat o singură dată",
        "Aduce consecvență în operațiuni, fără angajări suplimentare",
        "Le arată celor care conduc cum se lucrează în realitate",
        "Scoate felul de a lucra din capul oamenilor și îl mută într-un sistem al firmei",
      ],
      capabilities: [
        "Proiectarea proceselor",
        "Automatizarea fluxurilor de lucru",
        "Planificare și orchestrare",
        "Design de produs și UX",
      ],
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
        "Arată că putem transforma munca manuală care se repetă la un client în sisteme proiectate și refolosibile, care pornesc la comandă sau după calendar — iar echipa de operațiuni câștigă consecvență și vizibilitate fără să se mărească.",
      training:
        "Același mod de gândire îl predăm echipelor în trainingurile de automatizare și productivitate digitală: munca recurentă se descrie o dată, apoi se decide care pași merită automatizați — și care nu.",
      image: "processly",
    },
    {
      slug: "mazely",
      name: "Mazely",
      tagline: "Fiecare vizitator își găsește drumul. De fiecare dată.",
      problem: "Vizitatori pierduți în clădiri mari, angajați care pierd timp îndrumându-i.",
      solution: "Indicații pas cu pas dintr-un cod QR, fără aplicație și fără echipamente.",
      category: "Inginerie de produs",
      kind: "product",
      label: "Produs · construit cap-coadă",
      accent: "#0077B5",
      oneLiner:
        "Orientare în clădiri mari, cu indicații pe bază de fotografii — fără aplicație și fără echipamente",
      overview:
        "Mazely este o platformă de orientare în interiorul clădirilor mari: sedii publice, universități, spitale, instituții. Vizitatorul scanează un cod QR și primește indicații pas cu pas, făcute din fotografii reale ale coridoarelor, fără să instaleze nimic și fără echipamente montate în clădire. Un panou de administrare acoperă desenarea etajelor, gestiunea codurilor QR și analiza traseelor.",
      context: "În clădirile mari, vizitatorii se rătăcesc, iar angajații pierd timp îndrumându-i.",
      found: "Soluția trebuia să funcționeze fără aplicație de instalat și fără echipamente de montat, altfel nu ar fi fost folosită — iar instituția nu știa deloc pe unde circulă oamenii prin propriile clădiri.",
      result: "O platformă funcțională: vizitatorii scanează un cod QR și urmează indicații pe bază de fotografii, în patru limbi, iar instituția vede cum circulă oamenii prin spațiile ei.",
      delivered: [
        "Indicații pas cu pas, pe bază de fotografii, pornite din scanarea unui cod QR — fără aplicație de instalat și fără echipamente",
        "Arhitectură multi-tenant, cu trasee pe mai multe etaje și clădiri și calcul de rută care ține cont de accesibilitate",
        "Suport în patru limbi: engleză, română, franceză și germană",
        "Panou de administrare cu desenarea etajelor prin drag-and-drop, gestiunea codurilor QR și rapoarte despre sesiuni, destinațiile cele mai căutate și feedback",
        "Infrastructură în cloud, cu TLS 1.3 pe transport și AES-256 la stocare, gândită pentru disponibilitate ridicată",
      ],
      strategic: [
        "Rezolvă o problemă care se repetă zilnic printr-un strat digital simplu de folosit, care ia presiune de pe angajați",
        "Produce date despre circulația oamenilor, pe care instituția nu le-a avut până acum",
        "Gândit pentru instituții reglementate: confidențialitate din construcție, sesiuni urmărite anonim și nicio dată medicală colectată",
        "Fără aplicație și fără echipamente, adoptarea vine de la sine și costul de pornire rămâne mic",
      ],
      capabilities: [
        "Sisteme de orientare în clădiri",
        "Trasee adaptate accesibilității",
        "Produs digital multilingv",
        "Analiza circulației persoanelor",
        "Confidențialitate din proiectare",
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
        "Arată că putem proiecta și duce până la capăt un produs atent la confidențialitate pentru instituții mari: scapă oamenii de timpul pierdut zilnic și, în același timp, produce date operaționale utile. Aceeași abordare merge oriunde un spațiu fizic are nevoie de un strat digital simplu peste el.",
      image: "mazely",
    },
    {
      slug: "restaurant-ai",
      name: "Asistentul de Meniu pentru Restaurante",
      tagline: "AI aplicat, care rulează pe echipamentele restaurantului.",
      problem: "AI pentru clienți, fără ca datele meniului să ajungă în cloud.",
      solution: "Un asistent care rulează offline, pe echipamentele localului.",
      category: "AI aplicat",
      kind: "build",
      label: "Sistem self-hosted",
      accent: "#C2410C",
      oneLiner:
        "Un asistent de meniu cu AI, instalat la restaurant, care răspunde întrebărilor clienților și merge fără internet",
      overview:
        "Asistentul de Meniu pentru Restaurante este un sistem AI instalat pe echipamentele localului. Are două părți: un chat gândit pentru chioșcuri și tablete, care îi ajută pe clienți să găsească preparate după gust sau după restricții alimentare, și un panou de administrare pentru produse, categorii, prețuri în mai multe valute, reduceri și imagini. Răspunde folosind retrieval-augmented generation peste meniul propriu al restaurantului și, după instalare, rulează în întregime în rețeaua locală.",
      context: "Restaurantele vor un ajutor AI pentru clienți, dar fără să-și trimită meniul în cloud și fără să plătească pentru fiecare întrebare pusă.",
      found: "Nu era nevoie de un model mare, în cloud. Un model mic, pe echipamente modeste pe care localul le are deja, e suficient, cu condiția să răspundă doar din meniul restaurantului și ca memoria să fie calculată dinainte.",
      result: "Un asistent care răspunde la întrebările clienților despre meniu, rulează complet în rețeaua locală după instalare și nu costă nimic pe întrebare.",
      delivered: [
        "Un chat pentru chioșcuri și tablete, care răspunde la întrebări despre meniu și găsește preparate după gust sau după restricții alimentare",
        "Un panou de administrare pentru produse, categorii, prețuri în mai multe valute, reduceri și imagini, cu reindexarea automată a meniului după fiecare modificare",
        "Un flux de răspuns care caută în meniul propriu: Ollama cu qwen2.5:3b pentru conversație, bge-m3 pentru embeddings și căutare semantică în Qdrant",
        "Instalare la client prin Podman / Docker Compose, cu PostgreSQL, imagini în MinIO, proxy Nginx și administrare protejată prin token",
        "Disciplină operațională: memorie calculată explicit pentru gazde de 8GB, verificări automate de funcționare, backup și restaurare automate, secrete per instalare și rețea locală ca setare implicită",
      ],
      strategic: [
        "Datele rămân private, la client, fără costuri de cloud la fiecare întrebare",
        "Arată AI cu căutare în date proprii, folosit cu cap și cu ochii pe costuri — compromisurile de model sunt scrise negru pe alb",
        "Dovedește rigoarea de care e nevoie ca AI-ul să ruleze constant pe echipamente modeste, ale clientului",
        "Aceeași abordare aduce AI privat, fără internet, în orice firmă care nu vrea să depindă de cloud",
      ],
      capabilities: [
        "Retrieval-augmented generation",
        "Instalare AI la client",
        "Confidențialitatea datelor la client",
        "Alegerea modelelor după cost",
      ],
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
        "Arată că putem construi AI cu căutare în date proprii, care rulează privat, pe echipamente pe care firma le are deja — cu memoria calculată, verificările automate de funcționare și disciplina de backup fără care nu ține în lumea reală.",
      training:
        "Construirea lui stă la baza trainingurilor noastre de AI: de ce un asistent dă răspunsuri greșite cu toată convingerea, ce presupune de fapt păstrarea datelor firmei în siguranță și cum verificați un răspuns înainte să vă bazați pe el.",
      diagram: true,
    },
    {
      slug: "atlas-economic",
      name: "Atlas Economic",
      tagline: "Banii publici, județ cu județ.",
      problem: "Date despre achizițiile publice, inutilizabile așa cum sunt publicate.",
      solution: "Un indicator verificat al fluxurilor de bani pentru toate cele 42 de județe.",
      figure: { value: "43.591", label: "de contracte publice analizate" },
      category: "Date și analiză",
      kind: "analysis",
      label: "Analiză independentă · microsite public",
      accent: "#2f6db0",
      oneLiner:
        "Un microsite public care arată cum circulă banii din achiziții publice între toate cele 42 de județe ale României, construit exclusiv din date deschise",
      overview:
        "Atlas Economic răspunde la o întrebare pe care nicio instituție din România nu o publică: pentru fiecare județ, cât din valoarea atribuită de autoritățile contractante de acolo rămâne la firme cu sediul în județ, unde pleacă restul și cât câștigă firmele locale de la autorități din alte județe. Am legat trei surse deschise — sistemul de achiziții publice, registrul comerțului și nomenclatorul oficial al localităților — într-un registru simetric, cu câte o pagină pentru fiecare județ, pe care oricine o poate deschide și verifica. Este un proiect propriu, făcut ca să arătăm metoda, nu pentru un client; de aceea sunt publice și prelucrarea, și metodologia, și pista de audit.",
      context: "Nicio instituție din România nu publică cât din cheltuielile publice ale fiecărui județ rămâne la furnizori locali. Datele care ar răspunde sunt publice, dar inutilizabile așa cum apar.",
      found: "Anunțurile de atribuire nu spun în ce județ e autoritatea, instituțiile publice nu figurează în registrul comerțului, plafoanele acordurilor-cadru par cheltuieli reale, iar același contract apare o dată pentru fiecare membru al asocierii. Un răspuns cere ca fiecare autoritate să fie dusă în județul ei, fiecare furnizor la sediul lui și toți banii într-un registru care se închide.",
      result: "Un microsite live, cu o pagină pentru fiecare județ și un clasament național — fiecare cifră se poate reproduce din date publice.",
      delivered: [
        "O prelucrare reproductibilă peste trei surse deschise — un an întreg de anunțuri SICAP (trei trimestre din patru există doar în Excel, iar singurul CSV publicat e tăiat fără nicio avertizare), registrul ONRC (~3,9 milioane de entități) și nomenclatorul SIRUTA al INS",
        "Un registru simetric al fluxurilor: fiecare leu care iese dintr-un județ intră în altul, verificat la leu, prin două identități structurale",
        "42 de pagini de județ și un clasament național, generate ca HTML static, fără nicio dependență externă",
        "O metodologie publicată, cu fiecare filtru explicat, cu ambele convenții posibile și cu fiecare eroare găsită la verificare",
        "Un fișier de audit care arată atribuirile slabe și tot ce metoda lasă intenționat neatribuit",
      ],
      strategic: [
        "Transformă date publice împrăștiate într-un indicator pe care nicio instituție nu îl publică; valoarea stă în felul în care se leagă datele, nu în datele brute",
        "Arată o problemă de măsurare tratată cinstit: limitele sunt cuantificate pe pagină, nu ascunse",
        "Dovedește o prelucrare care se poate relua la fiecare trimestru, nu un studiu făcut o singură dată",
      ],
      capabilities: [
        "Inginerie de date deschise",
        "Corelarea entităților",
        "Proiectare de indicatori economici",
        "Analiză reproductibilă & piste de audit",
      ],
      stack: [
        "Python (doar biblioteca standard)",
        "Date deschise SICAP / ONRC / SIRUTA",
        "HTML static & SVG inline",
        "Surse CC BY 4.0",
      ],
      impact: [
        "65,38 mld RON în contracte, din care 37,45 mld atribuite unui județ anume",
        "42 de județe acoperite cu aceeași metodologie",
        "Trei runde de verificare adversarială, cu doisprezece recenzenți independenți; două reimplementări de la zero au reprodus fiecare cifră publicată",
      ],
      takeaway:
        "Este cea mai clară demonstrație a felului în care lucrăm cu datele: luăm surse publice, dar inutilizabile, legăm entitățile pe care nimeni nu le-a pus până acum împreună și publicăm rezultatul cu limitele declarate — ca cifrele să reziste la verificare, nu să cedeze la prima întrebare.",
      training:
        "Este disciplina din spatele trainingului nostru de date și BI: unde apar erorile în cifre, între sursă și raport, și cum poate o echipă să verifice o cifră înainte să se ia o decizie pe baza ei.",
      image: "atlas",
      liveUrl: "/atlas/",
      liveLabel: "Deschide Atlasul",
    },
    {
      slug: "atlas-company-report",
      name: "Atlas · Raport de firmă",
      tagline: "Un CUI la intrare, un dosar complet la ieșire.",
      problem: "Date despre firme, împrăștiate în surse greu de folosit.",
      solution: "Un dosar complet de firmă dintr-un singur CUI.",
      figure: { value: "4.201.627", label: "de entități înregistrate acoperite" },
      category: "Date și analiză",
      kind: "product",
      label: "Produs propriu · pe aceleași date ca Atlasul",
      accent: "#285c97",
      oneLiner:
        "Un generator fără bază de date care transformă un singur CUI într-un dosar complet de firmă — unsprezece ani de situații financiare, poziția în sector, un scor de risc de insolvență și expunerea la bani publici — numai din date deschise",
      overview:
        "Îi dați un CUI și scoate un raport de paisprezece secțiuni: identitate și stare juridică din registrul comerțului, statut fiscal interogat pe loc la ANAF, unsprezece exerciții financiare depuse, poziția față de toate firmele din aceeași diviziune CAEN, mărimea pieței și cota firmei, indicatori derivați comparați cu mediana sectorului, un scor de risc de insolvență și expunerea la achiziții publice pe ambele căi — licitații și achiziții sub prag. Merge pe aceleași date ca Atlasul, fără bază de date și fără server: caută direct în fișierele brute ale statului, pentru că un CUI este unic și o scanare îl găsește în 2 GB în mai puțin de o secundă. Distribuțiile pe sector — singurul lucru pe care o astfel de căutare nu îl poate afla — se calculează o dată, în avans.",
      context: "Aproape tot ce ați vrea să știți despre o firmă din România e public, dar împrăștiat în surse care, luate una câte una, sunt aproape inutilizabile.",
      found: "Situațiile financiare se publică drept douăzeci de indicatori numerotați, fără nume de coloane, în trei formate diferite de-a lungul anilor. Datoriile apar ca o sumă totală și nu există costul bunurilor vândute, așa că mai mulți indicatori clasici trebuie aproximați. Arhiva de achiziții scrie data contractului în patru feluri și lasă 98.064 dintre ele goale. Nimic din toate acestea nu e documentat — iar fiecare defect pierde date în tăcere, în loc să dea o eroare.",
      result: "Un CUI la intrare, un dosar în paisprezece secțiuni la ieșire — în HTML și PDF gata de tipărit, în circa douăzeci de secunde, pentru oricare dintre cele 4,2 milioane de entități înregistrate.",
      delivered: [
        "Un generator dintr-o singură comandă: CUI la intrare, HTML stilizat și PDF gata de tipar la ieșire, în circa douăzeci de secunde",
        "Acoperire pentru toate cele 4.201.627 de entități din registrul comerțului, cu limitele spuse pe față: cele 68% fără bilanț depus primesc o secțiune care explică de ce, nu tabele goale",
        "Distribuții pe sector, calculate din 8,7 milioane de depuneri: peste 40.000 de grupuri pe diviziune CAEN, secțiune și județ, unsprezece ani, câte opt cuantile fiecare",
        "Fiecare indicator tipărit cu formula scrisă în denumirile rândurilor din bilanț, cu explicația pe înțelesul oricui și cu sensul în care valoarea e bună",
        "O metodologie publicată care spune pe nume fiecărei aproximări impuse de sursă și arată încotro trage eroarea — sau recunoaște, acolo unde e cazul, că direcția nu se poate stabili",
      ],
      strategic: [
        "Transformă un CUI — singurul lucru pe care îl știți sigur despre un partener — într-un document pe care se poate lua o decizie, fără abonament și fără baze de date plătite",
        "Ce contează nu sunt datele, ci felul în care se leagă și se verifică: oricine poate descărca aceleași fișiere și nu obține nimic folosibil",
        "Aceleași date ca Atlasul, deci analiza pe județe și analiza pe firmă nu se pot contrazice niciodată",
      ],
      capabilities: [
        "Inginerie de date deschise",
        "Analiza situațiilor financiare la scară",
        "Indicatori și comparații de sector",
        "Verificare adversarială",
      ],
      stack: [
        "Python (doar biblioteca standard)",
        "Date deschise MF / ONRC / ANAF / SICAP",
        "Deflator HICP Eurostat",
        "HTML static, SVG inline, PDF prin Chrome headless",
      ],
      impact: [
        "Corespondența coloanelor, validată independent de legenda oficială: egalitatea bilanțieră se verifică pe 100,00% din depuneri, în toate cele trei formate publicate",
        "238 de controale de reconciliere pe secțiunile financiare, recalculate din fișierele brute fără nicio abatere; 34 de observații din două audituri adversariale, toate rezolvate — inclusiv o căutare care întorcea altă firmă pentru 3.005 CUI-uri",
        "O singură corecție a redus cu 32% o cifră publicată despre achiziții publice: cheia de deduplicare nu rezista la patru formate de dată și la 98.064 de date goale",
      ],
      takeaway:
        "Raportul este partea care se vede. Ce arată de fapt este o disciplină: fiecare cifră se poate urmări până la fișierul-sursă, fiecare aproximare e spusă pe nume, împreună cu direcția erorii, iar la final trecem totul printr-o verificare care pornește de la ideea că propriul nostru rezultat e greșit până rezistă la o recalculare pe alt drum.",
      image: "raport-firma",
      gallery: [
        "raport-firma-indicatori",
        "raport-firma-altman",
        "raport-firma-risc",
      ],
    },
    {
      slug: "transit-analytics",
      name: "Analiza Transportului Public — Iași",
      tagline: "Telemetria flotei, transformată în decizii operaționale.",
      problem: "Telemetria flotei nu ajungea niciodată într-o decizie.",
      solution: "Un tablou de bord pe care se pot lua decizii operaționale.",
      figure: { value: "238", label: "de vehicule într-un singur tablou de bord" },
      category: "Date și analiză",
      kind: "analysis",
      label: "Analiză independentă",
      accent: "#4F63D2",
      oneLiner:
        "Un tablou de bord în Metabase care transformă telemetria transportului public al unui oraș în decizii de zi cu zi",
      overview:
        "Un tablou de bord în timp real pentru flota de transport public a Iașiului, construit în Metabase peste date GPS și de telemetrie. Acoperă 238 de vehicule — autobuze și tramvaie — și urmărește într-un singur loc viteza, siguranța, accesibilitatea și aglomerația. Arată cum telemetria brută a flotei devine o imagine limpede, pe baza căreia o autoritate de transport poate lua decizii.",
      context: "Operatorii de transport public primesc fără oprire date GPS și de telemetrie, dar rar le folosesc în deciziile de zi cu zi.",
      found: "Cu telemetria adunată într-un singur loc, datele au răspuns direct la întrebările operaționale: autobuzele au mers în medie cu 27,35 km/h, tramvaiele cu 17,52 km/h; 71,85% din vehicule erau accesibile cu scaunul rulant, dar doar 10,08% cu bicicleta; iar cele 58 de depășiri de viteză înregistrate au inclus valori de până la 141 km/h — peste 50 km/h în plus față de limită.",
      result: "Un singur tablou de bord live, în care viteza, siguranța, accesibilitatea și aglomerația întregii flote stau una lângă alta.",
      delivered: [
        "O hartă în timp real cu poziția vehiculelor, pentru toată flota orașului",
        "Structura flotei: 238 de vehicule (63% autobuze, 37% tramvaie / metrou ușor)",
        "Indicatori de eficiență a circulației: viteza medie pe intervale orare și pe categorii, plus o histogramă a vitezelor",
        "Cât din flotă e accesibil cu scaunul rulant și cu bicicleta",
        "O hartă a punctelor de aglomerație și un tabel al depășirilor de viteză înregistrate, cu valorile extreme scoase în evidență",
      ],
      strategic: [
        "Transformă telemetria brută în decizii despre eficiență, siguranță, accesibilitate și aglomerație",
        "Dă echipelor operaționale și celor din administrație o singură imagine, bazată pe fapte, pentru conformitate și pentru supravegherea siguranței",
        "Arată un flux repetabil de la date la decizii, care se aplică oricărei flote sau oricărui flux de senzori",
      ],
      capabilities: [
        "Fluxuri de date de telemetrie",
        "Tablouri de bord operaționale",
        "Analiza flotelor și a mobilității",
        "De la date la decizii",
      ],
      stack: [
        "Metabase (dashboard / BI)",
        "SQL",
        "Flux de date GPS / telemetrie",
      ],
      takeaway:
        "Arată că putem lua date brute de senzori și telemetrie și le putem transforma în tablouri de bord pe baza cărora se iau decizii reale — util oricărui client care are o flotă, o rețea sau un flux constant de date operaționale.",
      training:
        "În trainingul de date și BI, acesta e tiparul pe care îl predăm: porniți de la decizia pe care trebuie să o ia cineva, apoi construiți raportul sau tabloul de bord care o susține.",
      image: "transit-map",
      gallery: ["transit-charts", "transit-speeding"],
    },
  ] as WorkProject[],
} as const;

/* ------------------------------------------- Training & enablement page */

export const trainingPage = {
  eyebrow: "Training pentru echipe",
  heading: "Training pe tehnologia pe care echipa o va folosi cu adevărat.",
  lead: "Training practic despre AI, digitalizare, automatizare, date și securitate cibernetică, făcut pentru firma dumneavoastră — pentru manageri și angajați, pornind de la procesele și aplicațiile pe care le folosiți și de la problemele pe care vreți să le rezolvați. Îl țin oamenii care proiectează și construiesc astfel de sisteme.",
  heroSecondary: { label: "Întrebați-ne despre un training pentru echipă", href: "/contact?topic=training" } as CTA,

  why: {
    eyebrow: "De ce contează",
    heading: "Tehnologia aduce valoare doar când oamenii știu să o folosească.",
    body: "Firmele cumpără licențe, introduc sisteme noi și le dau tuturor acces la instrumente AI — iar după câteva luni mare parte din muncă se face tot ca înainte. De obicei nu pentru că oamenii se opun schimbării, ci pentru că nu le-a arătat nimeni cum se potrivește instrumentul cu munca lor. Noi predăm ce contează pentru munca aceea și lăsăm deoparte restul.",
    outcomesLabel: "Ce se îmbunătățește",
    outcomes: [
      "Mai puțină muncă repetitivă și mai puțin copy-paste manual între programe",
      "Raportare mai rapidă și mai sigură, din datele pe care le aveți deja",
      "Folosire mai bună a programelor pe care le plătiți deja",
      "AI folosit sigur și eficient — cu reguli clare despre ce date ajung unde",
      "Pași administrativi automatizați acolo unde are sens",
      "O imagine clară a proceselor care merită automatizate în continuare",
    ],
  },

  audience: {
    eyebrow: "Pentru cine",
    heading: "Pentru oamenii care lucrează efectiv cu tehnologia.",
    items: [
      { title: "Echipe de conducere", body: "Cântăresc unde își au locul AI-ul și digitalizarea, cât costă și ce riscuri aduc." },
      { title: "Echipe de birou și administrative", body: "Munca de zi cu zi cu documente, email, tabele, rapoarte și asistenți AI." },
      { title: "Echipe operaționale", body: "Sistemele, datele și listele de verificare din producție, logistică sau servicii." },
      { title: "Angajați fără profil tehnic", body: "Încredere în instrumentele digitale, pornind de la nivelul la care sunt oamenii azi — fără jargon." },
      { title: "Echipe mixte", body: "Manageri și angajați care învață împreună, ca deciziile de sus și munca de zi cu zi să meargă în aceeași direcție." },
      { title: "Departamente care adoptă un instrument nou", body: "Training pentru lansarea unui sistem, a unui instrument AI sau a unui flux de lucru — înainte și după punerea în funcțiune." },
    ] as Card[],
  },

  formats: {
    eyebrow: "Exemple de formate",
    heading: "Puncte de plecare, nu un catalog fix.",
    intro: "Fiecare program se adaptează firmei dumneavoastră. Acestea sunt puncte de plecare obișnuite, pe care le combinăm și le potrivim instrumentelor, rolurilor și problemelor dumneavoastră.",
    items: [
      { title: "AI în munca de zi cu zi", icon: "sparkle", body: "AI practic pentru sarcinile obișnuite ale firmei — redactare, rezumate, căutare și analiză de documente și date — cu instrucțiuni și verificări construite pe munca dumneavoastră." },
      { title: "AI pentru manageri", icon: "compass", body: "Cum evaluați oportunitățile, costurile, riscurile și furnizorii de AI — și cum deosebiți un caz real de un demo scump." },
      { title: "Productivitate digitală", icon: "bolt", body: "Cum scoateți mai mult din instrumentele pe care echipa le are deja: documente partajate, tabele și rapoarte, lucrul cu date și BI și micile automatizări care elimină munca repetitivă." },
      { title: "Digitalizare pentru angajați", icon: "flow", body: "Cum funcționează fluxurile de lucru digitale, automatizarea no-code și îmbunătățirea proceselor — ca angajații să vadă singuri pașii care merită schimbați în munca lor." },
      { title: "AI și securitate cibernetică", icon: "shield", body: "Cum folosiți AI-ul fără riscuri evitabile: ce date pot intra în ce instrumente, phishing și inginerie socială, plus reguli de folosire responsabilă pe care o echipă le poate respecta." },
      { title: "Training personalizat pentru firmă", icon: "sliders", body: "Training construit integral pe instrumentele, fluxurile de lucru și procesele firmei dumneavoastră — inclusiv pentru lansarea unui sistem pe care l-am construit pentru dumneavoastră." },
    ] as Card[],
  },

  process: {
    eyebrow: "Cum funcționează",
    title: "Training construit pe munca reală.",
    intro: "Nu aplicăm echipei un curs standard. Pornim de la felul în care lucrează azi și încheiem cu fluxuri de lucru pe care le folosesc în continuare.",
    outputLabel: "Ce obțineți",
    steps: [
      {
        n: "01",
        icon: "search",
        title: "Înțelegem punctul de plecare",
        body: "Vorbim cu managerii și cu câțiva oameni din echipă despre cum lucrează azi, ce instrumente folosesc și unde se duce timpul.",
        output: "O imagine clară a competențelor, instrumentelor și problemelor actuale.",
      },
      {
        n: "02",
        icon: "target",
        title: "Alegem cazurile de utilizare",
        body: "Identificăm sarcinile în care o folosire mai bună a instrumentelor digitale, a automatizării sau a AI-ului ar face o diferență reală — și pe cele în care nu ar face.",
        output: "O listă scurtă de situații pe care merită să le lucrăm în training.",
      },
      {
        n: "03",
        icon: "presentation",
        title: "Training pe munca reală",
        body: "Lucrăm pe sarcinile, documentele și programele echipei, nu pe exemple generice, și adaptăm sesiunile fiecărui rol și nivel.",
        output: "Sesiuni practice, pe care oamenii le pot aplica a doua zi.",
      },
      {
        n: "04",
        icon: "document",
        title: "Documentăm ce funcționează",
        body: "Transformăm ce a funcționat în fluxuri de lucru scrise, colecții de instrucțiuni pentru AI, șabloane și reguli de folosire pe care echipa le păstrează.",
        output: "Fluxuri de lucru documentate și reguli clare pentru folosirea zilnică.",
      },
      {
        n: "05",
        icon: "refresh",
        title: "Revenim",
        body: "Verificăm ce se folosește și ce nu, răspundem la întrebările care apar doar în munca de zi cu zi și ajustăm.",
        output: "O imagine clară a ceea ce s-a schimbat — și a ceea ce mai e de lucrat.",
      },
    ] as Step[],
  },

  credibility: {
    eyebrow: "Cine predă",
    heading: "Putem preda pentru că construim.",
    body: "Trainingul îl țin chiar oamenii care proiectează sisteme AI de producție, platforme de automatizare și fluxuri de date. De aceea sesiunile acoperă ce rezistă de fapt în practică — unde greșește AI-ul, ce presupune păstrarea datelor firmei în siguranță, cum verificați o cifră înainte să aveți încredere în ea — nu doar pe ce butoane se apasă.",
    tiles: [
      { slug: "restaurant-ai", caption: "Un asistent AI care rulează offline, pe echipamentele firmei — de aici vine felul în care predăm folosirea sigură și privată a AI-ului" },
      { slug: "processly", caption: "Processly, platforma noastră de automatizare a fluxurilor de lucru — de aici vine felul în care învățăm echipele să automatizeze munca repetitivă" },
      { slug: "transit-analytics", caption: "Tablouri de bord construite pe date operaționale brute — de aici vine trainingul nostru de date și BI" },
    ],
    note: "Plus experiența în ingineria de securitate pentru sisteme de producție — de aici vine trainingul nostru de AI și securitate cibernetică.",
    link: { label: "Vedeți proiectele", href: "/work" } as CTA,
  },

  bridge: {
    eyebrow: "Unde duce",
    heading: "Trainingul e adesea momentul în care ies la iveală oportunitățile reale.",
    body: "Când o echipă învață cum funcționează instrumentele pe propriile sarcini, procesele care merită automatizate devin evidente — de multe ori mai întâi pentru oamenii care fac munca. Aici se leagă trainingul de restul muncii noastre: putem evalua oportunitatea, construi soluția și măsura rezultatul. Sau trainingul poate rămâne de sine stătător — ambele variante sunt în regulă.",
    links: [
      { label: "Cum rezolvăm o problemă, de la cap la coadă", href: "/services#approach" },
      { label: "Începeți cu Diagnosticul firmei", href: "/assessment" },
    ] as CTA[],
  },

  ctaHeading: "Ce ar trebui să poată face echipa dumneavoastră mai bine?",
} as const;

/* ------------------------------------------ Supporting-route intro copy */

export const pageIntros = {
  services: {
    eyebrow: "Ce rezolvăm",
    title: "De la problemă la soluția care funcționează.",
    lead: "Găsim cauza, decidem împreună ce merită făcut, construim soluția și ne asigurăm că rămâne folosită — cu aceiași oameni de la început la sfârșit.",
  },
  work: {
    eyebrow: "Studii de caz",
    title: "Ce am construit, problemă cu problemă.",
    lead: "Produse, analize de date și AI pe care le-am proiectat și construit de la zero. Fiecare se citește la fel: problema, ce am găsit, ce am construit și rezultatul.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Să vorbim deschis.",
    lead: "Spuneți-ne ce nu merge în firmă, chiar dacă nu știți încă de unde vine. Vă răspundem personal, în cel mult două zile lucrătoare, cu o primă părere — nu cu o ofertă.",
  },
} as const;

/* ------------------------------------------------ AI & Tech Opportunity Scorecard */

export const scorecardPage = {
  eyebrow: "Verificare gratuită · circa 3 minute",
  heading:
    "Unde pierde firma dumneavoastră timp și bani — și merită construit ceva?",
  lead: "Zece întrebări simple despre felul în care merge de fapt firma dumneavoastră, fără jargon și fără să vă faceți cont. Primiți un răspuns onest despre unde se duc timpul și banii și dacă o investiție în tehnologie s-ar amortiza chiar acum într-o firmă ca a dumneavoastră — și, la fel de des, unde ar fi mai înțelept să rezolvați întâi altceva. Nu e un scor de maturitate care să vă facă să vă simțiți în urmă. E un răspuns direct despre unde ar lucra de fapt banii dumneavoastră.",
  microcopy:
    "Nu e nevoie de cont ca să răspundeți. Vă cerem adresa de e-mail doar dacă doriți varianta scrisă, mai amplă.",
  dataGateQuestionIndex: 2,
  dataGateNote:
    "Un lucru, înainte de toate: chiar acum, informația de care ați avea nevoie stă mai ales în capul oamenilor și în e-mailuri. Până nu ajunge într-un loc de unde un sistem o poate citi, nimic din ce cumpărați sau construiți peste ea nu se poate amortiza — asta e singurul lucru care merită rezolvat înainte să cheltuiți pe oricare dintre lucrurile de mai jos.",
  q10Note:
    "Aici nu există răspuns greșit — miza mare nu e interzisă, doar cere o construcție mult mai atentă. Această întrebare schimbă recomandarea, nu verdictul.",
  questions: [
    {
      q: "Cât din săptămâna echipei se duce în muncă manuală și repetitivă, după reguli — date reintroduse de mână, aceleași rapoarte formatate din nou, aceleași întrebări la care se răspunde iar, informație mutată dintr-un program în altul?",
      options: [
        { label: "Aproape nimic concret", points: 0 },
        { label: "Ceva, dar împrăștiat între mai mulți oameni", points: 4 },
        {
          label: "O parte clară — câteva ore de persoană, în fiecare săptămână",
          points: 7,
        },
        {
          label:
            "Mult — e un cost real, iar unii oameni sunt angajați în bună parte ca să o facă",
          points: 10,
        },
      ],
    },
    {
      q: "Există o problemă anume, pe care o puteți numi și pe care sperați să o rezolvați?",
      options: [
        {
          label:
            "Nu chiar — ne uităm pentru că simțim că ar trebui să facem ceva",
          points: 0,
        },
        { label: "O senzație vagă că ceva ar putea merge mai bine", points: 3 },
        { label: "Da — putem numi blocajul, dar nu și soluția", points: 7 },
        {
          label: "Da — o putem numi și știm aproximativ cât ne costă",
          points: 10,
        },
      ],
    },
    {
      q: "Când echipa are nevoie de informație ca să facă această muncă, unde stă de fapt informația?",
      options: [
        { label: "Mai ales în capul oamenilor și în e-mailuri", points: 0 },
        { label: "În documente și fișiere Excel, împrăștiate", points: 4 },
        {
          label:
            "În sisteme adevărate, dar dezordonată sau răspândită în prea multe programe",
          points: 7,
        },
        {
          label: "În sisteme, rezonabil de curată și ușor de accesat",
          points: 10,
        },
      ],
    },
    {
      q: "Gândiți-vă la ultimul software sau instrument important pe care l-ați implementat. Cum a mers?",
      options: [
        { label: "L-am cumpărat și aproape nimeni nu-l folosește", points: 0 },
        { label: "N-am făcut niciodată o implementare ca lumea", points: 2 },
        {
          label: "Parțial — l-au folosit unii, cu multă rezistență",
          points: 4,
        },
        {
          label:
            "Bine — oamenii chiar l-au adoptat și face parte din felul în care lucrăm acum",
          points: 10,
        },
      ],
    },
    {
      q: "Există o presiune din afara companiei în această direcție?",
      options: [
        { label: "Nimic concret — e doar curiozitate internă", points: 0 },
        { label: "Simțim că încep să se miște concurenții", points: 5 },
        { label: "Clienții sau partenerii ne cer asta", points: 8 },
        {
          label: "Un contract, o vânzare sau o cerință anume depinde de asta",
          points: 10,
        },
      ],
    },
    {
      q: "Dacă oportunitatea potrivită ar fi clară, ce ați putea aloca realist pentru ea în următoarele 6–12 luni?",
      options: [
        {
          label: "Nimic pus deoparte — ar trebui să găsim resursele",
          points: 0,
        },
        { label: "Un buget mic, doar pentru un experiment", points: 4 },
        {
          label:
            "Un buget real, dar modest, pentru un singur proiect, bine delimitat",
          points: 7,
        },
        {
          label: "Buget aprobat, gata să pornim pe direcția potrivită",
          points: 10,
        },
      ],
    },
    {
      q: "Dacă ați porni ceva, cine ar fi responsabil de el în companie?",
      options: [
        {
          label: "Nimeni anume — ne-am ocupa toți pe lângă sarcinile zilnice",
          points: 0,
        },
        { label: "Cineva ar putea, pe lângă sarcinile lui zilnice", points: 4 },
        {
          label: "Avem pe cineva care s-ar putea ocupa, cu puțin sprijin",
          points: 7,
        },
        {
          label:
            "Un responsabil clar, cu timpul și autoritatea de a-l duce la capăt",
          points: 10,
        },
      ],
    },
    {
      q: "Cum se iau de obicei deciziile de acest fel la dumneavoastră?",
      options: [
        {
          label:
            "Greu — prea mulți oameni care trebuie să aprobe și un „da” care nu vine ușor",
          points: 2,
        },
        {
          label: "Depinde — unele lucruri se mișcă, altele se împotmolesc",
          points: 5,
        },
        {
          label:
            "Conducerea poate decide și poate merge înainte destul de repede",
          points: 10,
        },
      ],
    },
    {
      q: "Cât de des se întâmplă de fapt lucrul pe care ați vrea să-l îmbunătățiți?",
      options: [
        { label: "Rar — e ocazional", points: 0 },
        { label: "De câteva ori pe săptămână", points: 4 },
        { label: "De multe ori pe zi, în toată echipa", points: 7 },
        { label: "Constant — e în miezul activității firmei", points: 10 },
      ],
    },
    {
      q: "Dacă un instrument ar greși din când în când, ce s-ar întâmpla?",
      options: [
        {
          label:
            "Ar putea fi periculos ori grav din punct de vedere legal sau financiar — nu e loc de greșeală",
          points: 2,
        },
        { label: "Ar conta — cineva ar trebui să prindă greșeala", points: 6 },
        {
          label: "Oricum un om verifică rezultatul înainte să fie folosit",
          points: 9,
        },
        { label: "Greșelile mici se observă ușor și au miză mică", points: 10 },
      ],
    },
  ] as ScorecardQuestion[],
  tiers: [
    {
      slug: "foundations-first",
      min: 0,
      max: 34,
      name: "Întâi fundația",
      headline: "Încă nu — și e un răspuns util.",
      body: "Chiar acum, să cumpărați sau să construiți ceva ar fi, cel mai probabil, bani cheltuiți înaintea problemei. Nu e o critică — e cea mai ieftină lecție pe care o veți primi vreodată, pentru că o învățați înainte de factură, nu după. Primul pas onest nu e un instrument. E să puneți un lucru la punct: o problemă care merită numită, informație la care un sistem poate ajunge cu adevărat sau cineva care poate duce munca la capăt. Rezolvați asta și se deschid multe opțiuni, fără să cheltuiți mult. Cheltuiți acum peste lipsurile acestea și veți fi, probabil, printre firmele care lasă proiectul deoparte un an mai târziu. Reveniți și reluați testul când terenul e mai solid — veți vedea cum se schimbă scorul.",
    },
    {
      slug: "real-seed",
      min: 35,
      max: 59,
      name: "O sămânță reală, încă nu un proiect",
      headline: "Aveți aici ceva care merită conturat.",
      body: "Aveți începutul unei oportunități reale — dar e încă o sămânță, nu un plan, iar cea mai rapidă cale de a arunca bani acum e să săriți la soluție înainte de a măsura problema. Pasul care se amortizează cu adevărat: luați fluxul de lucru care vă costă cel mai mult, scrieți negru pe alb cât vă costă azi, în ore sau în euro, și fiți sinceri în privința locului unde stau datele pentru el. Faceți asta și fie găsiți o investiție care merită făcută, fie vă scutiți de un proiect care oricum nu avea cum să iasă. Dacă v-ar ajuta să vedeți în care dintre cele două situații sunteți, exact pentru asta există Diagnosticul firmei, gratuit.",
    },
    {
      slug: "strong-candidate",
      min: 60,
      max: 79,
      name: "Candidat serios",
      headline: "Merită o privire serioasă.",
      body: "Aveți cea mai mare parte din ce cere un astfel de proiect — o problemă reală, date utilizabile și destulă pregătire ca să acționați. Riscul, în acest punct, nu e să nu faceți nimic; e să construiți bine lucrul greșit sau să alegeți ideea care arată superb în demo și moare la primul contact cu utilizatori reali. Înainte să alocați buget, cea mai rentabilă jumătate de oră pe care o puteți investi e cea în care primiți un verdict tranșant: care problemă merită cu adevărat rezolvată în producție și pe care să o lăsați deoparte. Exact asta vă dă, în scris, Diagnosticul firmei, gratuit, înainte să cheltuiți un ban.",
    },
    {
      slug: "ready-to-move",
      min: 80,
      max: 100,
      name: "Pregătiți să porniți",
      headline: "Întrebarea nu e „dacă” — ci ce anume, și în ce ordine.",
      body: "Pe hârtie, sunteți pregătiți: o problemă clar numită, date la care un sistem poate ajunge, buget, un responsabil și presiunea de a acționa. Între dumneavoastră și un câștig real stă un singur lucru: să alegeți proiectul cu care începeți și să ordonați bine pașii următori — pentru că, în acest punct, greșeala scumpă e să construiți trei lucruri pe jumătate în loc de unul care se amortizează. Exact aici își merită banii o părere scurtă și onestă din afară. Diagnosticul gratuit al firmei vă dă un verdict scris pentru fiecare variantă — construiți acum, încă nu sau nu construiți — inclusiv, spus limpede, când răspunsul onest e că nu e nimic de construit. Nu luăm comisioane de la furnizori, așa că un „nu construiți” nu ne costă nimic — și doar de aceea un „construiți” din partea noastră înseamnă ceva.",
    },
  ] as ScorecardTier[],
  ui: {
    seeResult: "Vedeți rezultatul",
    incomplete:
      "Răspundeți la toate cele zece întrebări ca să vedeți rezultatul.",
    retake: "Reluați testul",
    scoreLabel: "Scorul dumneavoastră",
    outOf: "/ 100",
    resultEyebrow: "Rezultatul dumneavoastră",
  },
  gate: {
    heading: "Vreți rezultatul complet, în scris?",
    body: "Lăsați-ne adresa de e-mail și vă trimitem o versiune mai amplă a rezultatului: ce spun răspunsurile dumneavoastră, cele două-trei lucruri la care ne-am uita întâi într-o firmă în situația dumneavoastră și — dacă se potrivește — singura întrebare la care am vrea un răspuns înainte să cheltuiți ceva. Fără newsletter, fără serii de e-mailuri, fără apeluri de vânzare pe care nu le-ați cerut. Un singur email util.",
    emailLabel: "E-mail de serviciu",
    button: "Trimiteți-mi rezultatul",
    privacy:
      "Folosim adresa dumneavoastră doar ca să vă trimitem acest rezultat. Nu o dăm mai departe și nu vă adăugăm pe nicio listă.",
    privacyLinkLabel: "Vedeți politica de confidențialitate.",
    privacyHref: "/privacy",
  },
  ctaPrimary: {
    label: "Cereți Diagnosticul firmei — e gratuit",
    href: "/assessment",
    microcopy:
      "Gratuit · unul per companie · îl facem noi · un verdict scris, inclusiv când nu e nimic de construit.",
  },
  ctaSecondary: {
    label: "Sau pur și simplu discutați cu noi",
    href: "/contact",
  },
} as const;

/* --------------------------------------------------- Per-page SEO metadata */

export const pageMeta = {
  home: {
    title:
      "LT Strategy Partners — Găsim ce vă ține firma pe loc",
    description: site.description,
    path: "/",
  },
  scorecard: {
    title: "Unde pierde firma timp și bani? — LT Strategy Partners",
    description:
      "O verificare gratuită de 3 minute: zece întrebări simple despre cum merge firma și un răspuns onest despre unde se pierd timpul și banii — și ce merită rezolvat întâi.",
    path: "/scorecard",
  },
  services: {
    title: "Ce rezolvăm — LT Strategy Partners",
    description:
      "Muncă manuală, cifre în care nu are nimeni încredere, sisteme nefolosite, idei care trebuie construite: diagnostic, soluție construită, echipă pregătită și rezultat măsurat.",
    path: "/services",
  },
  training: {
    title: "Training pentru echipe — LT Strategy Partners",
    description:
      "Training practic pentru manageri și angajați, pe procesele și instrumentele firmei: lucrul cu date, automatizări, instrumente digitale și AI folosit în siguranță.",
    path: "/training",
  },
  assessment: {
    title: "Diagnosticul firmei — LT Strategy Partners",
    description:
      "Un diagnostic gratuit, pe care îl facem noi: unde se pierd banii, timpul și deciziile în firma dumneavoastră, ce merită rezolvat primul — și, spus cinstit, unde răspunsul nu ține de tehnologie.",
    path: "/assessment",
  },
  assessmentSample: {
    title: "Exemplu: când soluția e un sistem AI — LT Strategy Partners",
    description:
      "Un exemplu integral de Raport Gate Zero, marcat clar ca exemplu: verdictul scris „construiți acum / încă nu / nu construiți” pentru trei cazuri de utilizare AI, întocmit după ce diagnosticul arată că merită construit ceva.",
    path: "/assessment/sample-readout",
  },
  assessmentDiagnosisSample: {
    title: "Un exemplu de diagnostic — LT Strategy Partners",
    description:
      "Un exemplu integral de diagnostic scris, marcat clar ca exemplu: o firmă de distribuție cu comenzi tastate de trei ori, marja văzută prea târziu și un CRM pe care nu-l folosește nimeni — ce rezolvați întâi și ce lăsați deoparte.",
    path: "/assessment/sample-diagnosis",
  },
  work: {
    title: "Studii de caz — LT Strategy Partners",
    description:
      "Ce am proiectat și construit de la zero — produse, analize de date și AI — fiecare spus la fel: problema, ce am găsit, ce am construit și rezultatul.",
    path: "/work",
  },
  about: {
    title: "Despre — LT Strategy Partners",
    description:
      "Luca-Ștefan Tamaș, inginer de sisteme care găsește ce ține o firmă pe loc și construiește soluția. Platforme enterprise, două produse software proprii, sisteme de date și AI.",
    path: "/about",
  },
  contact: {
    title: "Contact — LT Strategy Partners",
    description:
      "Spuneți-ne ce nu merge în firmă. O primă discuție gratuită, fără prezentări și fără ofertă pe loc.",
    path: "/contact",
  },
  privacy: {
    title: "Confidențialitate — LT Strategy Partners",
    description:
      "Cum colectăm și cum folosim informațiile pe care ni le trimiteți.",
    path: "/privacy",
  },
  terms: {
    title: "Termeni — LT Strategy Partners",
    description:
      "Condițiile în care este pus la dispoziție site-ul LT Strategy Partners.",
    path: "/terms",
  },
} as const;

/* ----------------------------------------------- Shared UI microcopy (i18n) */

export const ui = {
  footerExplore: "Navigare",
  stepPrefix: "Pasul",
  viewProject: "Vedeți proiectul",
  navPrimaryAria: "Navigare principală",
  heroProofAria: "Ce ne diferențiază",
  ragDiagram: {
    boundary:
      "Rulează în rețeaua proprie a restaurantului — fără cloud, fără cost la fiecare întrebare",
    customerChat: "Chat pentru clienți",
    customerChatSub: "chioșc / tabletă",
    adminPanel: "Panou de administrare",
    adminPanelSub: "gestiunea meniului",
    apiSub: "autentificare cu token · răspunsuri bazate pe retrieval",
    qdrantSub: "căutare vectorială",
    postgresSub: "meniu și configurare",
    minioSub: "imaginile preparatelor",
  },
  ragDiagramAlt:
    "Arhitectura: interfața de chat pentru clienți și panoul de administrare se conectează printr-un proxy Nginx la un API Python, care folosește Ollama (qwen2.5:3b și bge-m3), căutare vectorială în Qdrant, PostgreSQL și MinIO — totul găzduit în rețeaua proprie a restaurantului.",
  footerContactHeading: "Contact",
  footerAria: "Subsolul paginii",
  footerRights: "Toate drepturile rezervate.",
  backToWork: "Studii de caz",
  workProblem: "Problema",
  workSolution: "Ce am construit",
  workFound: "Ce am găsit",
  workResult: "Rezultatul",
  workStrategic: "De ce contează",
  workCapabilities: "Competențe demonstrate",
  workStack: "Sub capot",
  workLiveBadge: "Live",
  allWork: "Toate studiile de caz",
  workTakeaway: "Ce înseamnă pentru dumneavoastră",
  workTraining: "Ce aduce în trainingurile noastre",
  workTrainingLink: "Detalii despre training",
  workCaptions: {
    "transit-map": "Harta în timp real a vehiculelor din flota orașului",
    "transit-charts":
      "Compoziția flotei, viteza medie pe categorii și indicii de accesibilitate",
    "transit-speeding":
      "Posibile puncte de congestie și depășiri de viteză înregistrate",
    // Fragmente din raport, cu identitatea redactată: cifrele sunt ale unei firme
    // reale, denumirea și înmatricularea nu se afișează. Nu publicăm nicio firmă
    // cu numele ei, pentru că raportul conține evaluări de risc.
    "raport-firma":
      "Cifrele-cheie din ultimul exercițiu financiar depus, cu fiecare termen explicat chiar acolo unde apare. Fragmentele sunt din raportul unei firme reale, cu identitatea anonimizată",
    "raport-firma-indicatori":
      "Fiecare indicator cu formula scrisă în denumirile rândurilor din bilanț, explicația pe înțelesul oricui, firma comparată cu mediana sectorului și direcția în care valoarea e bună",
    "raport-firma-altman":
      "Scorul de risc de insolvență, cu pragurile publicate trasate pe grafic, contribuția fiecărei componente și rata de bază la nivel național, ca să știți cât cântărește eticheta",
    "raport-firma-risc":
      "Semnale de risc după reguli fixe, fiecare însoțit de cifra din care rezultă, plus verificările care nu s-au putut face din lipsă de date",
  } as Record<string, string>,
} as const;

/* --------------------------------------- Form strings shared with client JS */

export const formStrings = {
  mail: {
    name: "Nume",
    company: "Firma",
    role: "Rol",
    roleSponsor: "Rol / responsabil",
    email: "E-mail",
    problems: "Probleme de analizat în primul rând",
    costToday: "Cât costă acum",
    triedSoFar: "Ce s-a încercat până acum",
    dataLivesIn: "Unde stau datele",
    sensitiveData: "Date sensibile",
    timeline: "Termen",
    fromWebsite: "site",
    scorecardResult: "Rezultat Scorecard",
    question: "Întrebarea",
    score: "Scor",
    requestedReadoutTo: "Raportul a fost cerut la",
    answers: "Răspunsuri",
  },
  honeypot: "Lăsați acest câmp gol",
  contactFormAria: "Formular de contact",
  sending: "Se trimite…",
  fixFields: "Corectați, vă rog, câmpurile marcate.",
  required: "Acest câmp este obligatoriu.",
  invalidEmail: "Introduceți, vă rog, o adresă de email validă.",
  failPrefix: "Ceva nu a funcționat. Scrieți-ne, vă rog, direct la",
  contactSubjectPrefix: "Mesaj de la",
  contactSuccessSent:
    "Mulțumim — mesajul a fost trimis. Vă răspundem personal în cel mult două zile lucrătoare.",
  assessmentSubjectPrefix: "Cerere de diagnostic —",
  assessmentSuccessMailto:
    "Mulțumim — cererea este gata de trimis. O citim noi și vă răspundem în cel mult două zile lucrătoare.",
  assessmentSuccessSent:
    "Mulțumim — cererea a fost trimisă. O citim noi și vă răspundem în cel mult două zile lucrătoare.",
  scorecardSubjectPrefix: "Rezultat verificare —",
  scorecardSuccessMailto:
    "Mulțumim — cererea e gata de trimis. Vă trimitem noi rezultatul scris, de obicei în cel mult două zile lucrătoare.",
  scorecardSuccessSent:
    "Mulțumim — rezultatul dumneavoastră e pe drum. Îl trimitem noi, de obicei în cel mult două zile lucrătoare.",
} as const;

/* ------------------------------- Assessment application form (field copy) */

import type { AssessmentField } from "./site";

export const assessmentForm = {
  fields: [
    {
      name: "name",
      label: "Numele dumneavoastră",
      type: "text",
      required: true,
      autocomplete: "name",
    },
    {
      name: "email",
      label: "E-mail de serviciu",
      type: "email",
      required: true,
      autocomplete: "email",
    },
    {
      name: "company",
      label: "Firma și câți angajați aveți, aproximativ",
      hint: "Sectorul și mărimea aproximativă sunt de ajuns — „casă de expediții cu 130 de oameni”.",
      type: "text",
      required: true,
      autocomplete: "organization",
    },
    {
      name: "role",
      label:
        "Rolul dumneavoastră — și va participa cineva din conducere la ședință?",
      hint: "Verdictul e o decizie de conducere, așa că prezența cuiva din conducere e o condiție, nu o preferință.",
      type: "text",
      required: true,
      autocomplete: "organization-title",
    },
    {
      name: "usecases",
      label: "Una sau două probleme la care vreți să ne uităm în primul rând",
      hint: "O propoziție pentru fiecare. E de ajuns simptomul — nu trebuie să știți cauza.",
      type: "textarea",
      required: true,
    },
    {
      name: "cost",
      label: "Cât vă costă astăzi acele probleme, în ore sau în euro?",
      hint: "O aproximare e suficientă. „Nu știu” este un răspuns acceptabil — necunoscutele se punctează și ele.",
      type: "text",
      required: false,
    },
    {
      name: "tried",
      label: "Ce ați încercat deja — și ce s-a întâmplat?",
      hint: "Un program nou, un consultant, un proiect-pilot, o rezolvare internă. Locul în care s-a blocat fiecare ne spune cel mai mult.",
      type: "textarea",
      required: false,
    },
    {
      name: "data",
      label: "Unde stau astăzi cifrele de care ați avea nevoie?",
      hint: "SharePoint, un wiki, o bază de date, PDF-uri, capul oamenilor — toate sunt răspunsuri oneste.",
      type: "text",
      required: true,
    },
    {
      name: "sensitive",
      label:
        "Ar implica date personale, date ale clienților sau ceva ce ați ezita să trimiteți către un furnizor de cloud din SUA?",
      type: "text",
      required: false,
    },
    {
      name: "timeline",
      label: "Când ați vrea, realist, să fie rezolvată problema?",
      type: "select",
      required: false,
      options: [
        "În acest trimestru",
        "În acest an",
        "Cândva — deocamdată doar ne uităm",
      ],
    },
  ] as AssessmentField[],
  selectPlaceholder: "Alegeți o variantă (opțional)",
  honeypotLabel: "Lăsați acest câmp gol",
  submitLabel: "Trimiteți cererea",
  formAria: "Formular de cerere pentru diagnostic",
} as const;

/* ----------------------------------------------------- Legal pages (i18n) */

import type { LegalSection } from "./site";

export const legalPages = {
  privacy: {
    eyebrow: "Legal",
    title: "Politica de confidențialitate.",
    lead: "Ce informații colectăm și cum le folosim. Limbaj simplu, fără surprize.",
    updated: "Ultima actualizare: 3 iulie 2026",
    sections: [
      {
        heading: "Cine suntem",
        html: `Operatorul de date pentru acest site este ${site.name} (activitate independentă, cu sediul în Iași, România). Pentru orice întrebare despre această politică sau despre datele dumneavoastră, scrieți-ne la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "Ce date colectăm",
        html: `Colectăm informațiile pe care alegeți să ni le trimiteți. Prin <strong>formularul de contact</strong>: <strong>numele</strong>, <strong>firma</strong>, <strong>rolul</strong> (opțional), <strong>adresa de email</strong> și <strong>mesajul</strong> pe care îl scrieți. Dacă folosiți butonul „Rezervați o discuție”, ne lăsați numele, emailul și orice detalii adăugate la programare — vedeți <a href="#booking">Rezervarea unei discuții</a> mai jos. Nu facem publicitate și nu folosim tehnologii de urmărire invazive sau instrumente de analiză de la terți care să vă identifice.`,
      },
      {
        heading: "De ce le colectăm și temeiul legal",
        html: `Folosim aceste informații într-un singur scop: să citim solicitarea dumneavoastră, să vă răspundem și să continuăm discuția despre o posibilă colaborare. Temeiul legal, conform GDPR, este interesul nostru legitim de a răspunde persoanelor care ne contactează în legătură cu serviciile noastre și, atunci când dumneavoastră inițiați contactul pentru a discuta o colaborare, demersurile făcute la cererea dumneavoastră înainte de încheierea unui contract.`,
      },
      {
        heading: "Transmiterea datelor",
        html: `Nu vă vindem informațiile și nu le transmitem către terți pentru scopurile lor proprii. Solicitarea dumneavoastră ajunge la noi fie prin email, fie prin formularele site-ului, care sunt prelucrate de Google și salvate într-o foaie de calcul din contul nostru Google; Google, împreună cu furnizorii de email și de găzduire prin care trece mesajul, acționează exclusiv ca persoane împuternicite, în numele nostru. Această prelucrare poate implica transferuri în afara SEE, în baza garanțiilor oferite de Google.`,
      },
      {
        id: "booking",
        heading: "Rezervarea unei discuții",
        html: `Butonul „Rezervați o discuție” deschide o pagină de programări pusă la dispoziție de Google Calendar. Dacă rezervați acolo o discuție, datele completate — numele, emailul și orice altceva adăugați — sunt prelucrate de Google ca parte a serviciului de programare, conform <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politicii de confidențialitate a Google</a>, și pot fi transferate pe servere din afara SEE, inclusiv în Statele Unite. Primim aceste date exclusiv pentru a stabili și a ține întâlnirea cu dumneavoastră. Dacă preferați să nu folosiți Google, scrieți-ne direct la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "Cât timp le păstrăm",
        html: `Păstrăm corespondența doar atât cât este necesar pentru a soluționa solicitarea și, dacă este cazul, pe durata colaborării care urmează, după care o ștergem. Dacă discuția nu duce nicăieri, o ștergem imediat ce devine clar că nu mai este necesară.`,
      },
      {
        heading: "Drepturile dumneavoastră",
        html: `Conform GDPR, aveți dreptul de acces la datele personale pe care le deținem despre dumneavoastră, dreptul de rectificare dacă sunt greșite, de ștergere, de restricționare a prelucrării sau de opoziție la prelucrare, precum și dreptul la portabilitatea datelor. Pentru a exercita oricare dintre aceste drepturi, scrieți la <a href="mailto:${site.email}">${site.email}</a> și vă răspundem în termenul prevăzut de lege. Aveți, de asemenea, dreptul de a depune o plângere la autoritatea de supraveghere (în România, ANSPDCP).`,
      },
      {
        heading: "Modificări",
        html: `Dacă modificăm această politică, actualizăm data de mai sus. Schimbările importante vor fi semnalate clar pe această pagină.`,
      },
    ] as LegalSection[],
  },
  terms: {
    eyebrow: "Legal",
    title: "Termeni de utilizare.",
    lead: "Condițiile în care este pus la dispoziție acest site. Pe scurt și pe înțeles.",
    updated: "Ultima actualizare: 3 iulie 2026",
    sections: [
      {
        heading: "Despre acest site",
        html: `Acest site este publicat de ${site.name} pentru a prezenta serviciile pe care le oferim și punctul nostru de vedere profesional. Are caracter exclusiv informativ.`,
      },
      {
        heading: "Fără consultanță și fără contract",
        html: `Nimic de pe acest site nu constituie consultanță profesională, juridică, financiară sau tehnică și nimic de aici nu creează un contract sau un angajament. Orice colaborare se desfășoară în baza unui contract scris separat, convenit cu dumneavoastră în prealabil.`,
      },
      {
        heading: "Proprietate intelectuală",
        html: `Conținutul, marca și designul acestui site aparțin ${site.name}, dacă nu se precizează altfel. Numele de produse și mărcile menționate în proiectele noastre aparțin deținătorilor lor de drept.`,
      },
      {
        heading: "Linkuri",
        html: `Acolo unde acest site trimite către site-uri externe, nu răspundem pentru conținutul sau practicile lor.`,
      },
      {
        heading: "Contact",
        html: `Aveți întrebări despre acești termeni? Scrieți-ne la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "",
        html: `Acești termeni sunt un punct de plecare concis și pot fi completați pe măsură ce activitatea crește. Pentru orice colaborare, prevalează contractul scris separat.`,
      },
    ] as LegalSection[],
  },
} as const;
