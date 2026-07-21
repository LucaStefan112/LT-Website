/* =========================================================================
   LT Strategy Partners — site content, ROMANIAN (ro)
   -------------------------------------------------------------------------
   Full mirror of ./site.ts with the same export shape. Rules:
   - Natural, formal business Romanian (dumneavoastră), not literal calques.
   - Terminology locked to the Gate Zero kit: construiți acum / încă nu /
     nu construiți; poartă (gate) glossed on first use; „raport” = readout.
   - Internal links carry the /ro prefix ("/#work" -> "/ro#work").
   - Facts, numbers, promises MUST stay identical to the English source —
     when either language changes, change the other the same day.
   ========================================================================= */

import type {
  CTA,
  NavItem,
  Card,
  Service,
  Step,
  Testimonial,
  FaqItem,
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
  ? { label: "Rezervați o discuție", href: config.bookingUrl, external: true }
  : { label: "Începeți o discuție", href: "/ro/contact" };

const assessmentCta: CTA = {
  label: "Începeți cu o evaluare",
  href: "/ro/assessment",
};

export const site = {
  name: "LT Strategy Partners",
  shortName: "LT Strategy",
  domain: "ltstrategypartners.com",
  url: "https://ltstrategypartners.com",
  tagline: "Strategie care livrează.",
  description:
    "Consultant independent în tehnologie și AI pentru echipele de conducere. Vă ajutăm să transformați AI-ul, inovația și tehnologia în decizii de business mai bune — găsind unde creează cu adevărat valoare și transformând pariurile potrivite în rezultate măsurabile.",
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
  assessmentCta,
};

/* ---------------------------------------------------------------- Navigation */

export const nav: NavItem[] = [
  { label: "Servicii", href: "/ro/services" },
  { label: "Proiecte", href: "/ro#work" },
  { label: "Perspective", href: "/ro/insights" },
  { label: "Despre", href: "/ro/about" },
  { label: "Contact", href: "/ro/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Servicii", href: "/ro/services" },
  { label: "Evaluare", href: "/ro/assessment" },
  { label: "Scorecard", href: "/ro/scorecard" },
  { label: "Proiecte", href: "/ro#work" },
  { label: "Perspective", href: "/ro/insights" },
  { label: "Despre", href: "/ro/about" },
  { label: "Contact", href: "/ro/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Confidențialitate", href: "/ro/privacy" },
  { label: "Termeni", href: "/ro/terms" },
];

/* --------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Consultanță tehnologie & AI · inovație aplicată în business",
  headline: "Transformați AI-ul și tehnologia în decizii de business mai bune.",
  subhead:
    "Consultant independent în tehnologie și AI pentru echipele de conducere. Vă ajutăm să vedeți unde mută inovația cu adevărat afacerea — ce tehnologii merită și pe care să le lăsați deoparte — și apoi transformăm alegerile potrivite în rezultate pe care le puteți măsura. Judecată practică, nu hype.",
  primaryCta: site.primaryCta,
  secondaryCta: site.assessmentCta,
  trustLine: "Independent · Nivel senior · Rezultatele de business, pe primul loc",
} as const;

/* -------------------------------------------------- The problem we solve */

export const intro = {
  eyebrow: "De ce contează",
  body: "Fiecare echipă de conducere e presată să „facă ceva cu AI” — și e greu de deosebit mișcările care se amortizează de distragerile costisitoare. Noi suntem partenerul independent care vă ajută să decideți: unde creează AI-ul și tehnologia nouă valoare reală în afacerea dumneavoastră, ce să prioritizați și cum să transformați asta în rezultate măsurabile. Fără vreun produs de vândut și fără hype — doar judecată clară și practică, aplicată deciziilor dumneavoastră.",
} as const;

/* ------------------------------------------------------- Value pillars */

export const pillars = {
  eyebrow: "Prin ce suntem diferiți",
  items: [
    {
      title: "Claritate înainte de cod.",
      body: "Pornim de la afacerea și cifrele dumneavoastră, nu de la tehnologie. Aflăm unde există valoare cu adevărat, unde nu există și cât valorează — înainte să scrie cineva vreo linie de cod.",
    },
    {
      title: "Consiliem și construim.",
      body: "Cele mai multe firme vă predau o recomandare și pleacă. Noi rămânem până la livrare — de la foaia de parcurs, la o soluție funcțională în producție, la impact măsurat față de cifrele pe care le-am convenit împreună.",
    },
    {
      title: "AI, folosit cu discernământ.",
      body: "AI este o capabilitate printre mai multe. Îl aplicăm acolo unde își merită locul, alegem soluția mai simplă atunci când e cea mai bună și vă spunem limpede când e una și când e cealaltă.",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Services */

export const services = {
  eyebrow: "Ce facem",
  headerTitle: "Un singur partener, cap-coadă.",
  deliverablesLabel: "Ce primiți",
  intro:
    "Un singur partener tehnologic pe tot parcursul — de la consultanță până la livrare, cu specializare aprofundată în AI — ca strategia și execuția să nu se rupă niciodată una de cealaltă.",
  items: [
    {
      title: "Consultanță și supervizare tehnologică",
      body: "Rolul pentru care existăm: consultantul tehnologic senior și independent pe care o echipă de conducere îl ține aproape — pentru unde să investească, la ce să spună nu, cum să cheltuiască bine și unde stă riscul real. Fără vreun produs de vândut și fără altă agendă decât a dumneavoastră.",
      deliverables: [
        "Un consultant permanent pentru deciziile care contează, între proiecte și dincolo de ele",
        "Analiză independentă a direcției, a cheltuielilor, a foilor de parcurs, a furnizorilor și a riscurilor",
        "Acces direct la un specialist senior pentru arhitectură, decizia build-vs-buy și AI",
      ],
    },
    {
      title: "Oportunitate și strategie",
      body: "Evaluăm unde pot AI, datele și tehnologia să miște veniturile, costurile sau riscul, dimensionăm valoarea în raport cu contul de profit și pierdere și separăm puținele oportunități care merită urmărite de multele care nu merită.",
      deliverables: [
        "O hartă a oportunităților, prioritizată după valoare și efort",
        "Business case-uri dimensionate pentru oportunitățile principale",
        "O foaie de parcurs secvențiată, cu responsabili și puncte de decizie",
      ],
    },
    {
      title: "Implementare și livrare",
      body: "Proiectăm, construim, integrăm și punem în producție noi înșine soluțiile, lucrând alături de echipele dumneavoastră, ca știința de a le opera să rămână în companie. Livrăm software funcțional, nu prezentări, și rămânem până când soluția e live, folosită și predată curat.",
      deliverables: [
        "O soluție funcțională, care rulează în producție",
        "Integrare în sistemele și fluxurile de lucru existente",
        "Documentație și o echipă instruită, care o poate opera fără noi",
      ],
    },
    {
      title: "Performanță operațională",
      body: "Îmbunătățim procesele și felul de a lucra din jurul tehnologiei, ca beneficiile să apară în cifre și să reziste și după plecarea noastră. Regândim felul în care curge munca, apoi punem în loc măsurători care să țină totul onest.",
      deliverables: [
        "Procese reproiectate, aliniate noilor instrumente",
        "Un cadru de măsurare legat de KPI-urile dumneavoastră",
        "O imagine înainte–după a câștigului obținut",
      ],
    },
  ] as Service[],
  ai: {
    eyebrow: "Specializarea",
    title: "AI, aplicat acolo unde chiar se amortizează.",
    body: "AI este zona în care mergem cel mai în profunzime — trecem dincolo de hype către puținele locuri unde chiar mișcă afacerea, apoi îl construim ca să funcționeze în realitate, nu doar în demo. Am construit exact asta — inclusiv un asistent cu retrieval care rulează integral pe hardware pe care o afacere îl deține deja.",
    points: [
      {
        title: "Unde se amortizează AI",
        body: "O citire onestă a cazurilor de utilizare care creează valoare reală și a celor care sunt distrageri costisitoare — dimensionate în raport cu cifrele dumneavoastră, înainte să se cheltuiască vreun ban.",
      },
      {
        title: "Sisteme AI și LLM de producție",
        body: "Asistenți, agenți și automatizări duse dincolo de demo — cu tuning-ul de retrieval, validarea rezultatelor și monitorizarea care le fac de încredere.",
      },
      {
        title: "AI responsabil și conform",
        body: "AI privat sau self-hosted acolo unde datele o cer, plus o citire clară a locurilor unde vi se aplică EU AI Act — îndrumare practică, nu teorie.",
      },
    ] as Card[],
    note: "Cele mai multe colaborări încep cu Evaluarea Oportunităților AI — gratuită, clar delimitată și onestă cu privire la locurile unde AI nu se va amortiza.",
    cta: site.assessmentCta,
  },
} as const;

/* ----------------------------- AI Opportunity Assessment (entry offer) */

export const assessment = {
  eyebrow: "Începeți aici — un prim pas fără risc",
  heading: "Evaluarea Oportunităților AI.",
  body: "Nu știți sigur unde se amortizează AI în afacerea dumneavoastră? Începeți aici. În două până la patru săptămâni, trecem cazurile de utilizare candidate prin Gate Zero — verificarea go/no-go pe care sistemele de producție o înfruntă oricum, aplicată înainte de a se cheltui vreun ban — și primiți un verdict scris pentru fiecare: construiți acum, încă nu sau nu construiți. Inclusiv, spus limpede, unde AI nu se va amortiza pentru dumneavoastră. Perimetru fix. Fără costuri. Fără pitch.",
  getHeading: "Ce primiți",
  get: [
    "Un raport scris de 3–5 pagini, gândit să fie arătat boardului",
    "Fiecare caz de utilizare, punctat și așezat pe hartă după valoare și viabilitate în producție",
    "Un verdict tranșant pentru cazul principal — cu motivul ingineresc",
    "Un nivel de risc provizoriu conform EU AI Act, pentru fiecare caz în parte",
  ],
  priceNote: "Gratuită — livrată de fondator, maximum trei pe lună.",
  cta: site.assessmentCta,
} as const;

/* -------------------------- Gate Zero: the /assessment offer page content */

export const assessmentPage = {
  eyebrow: "Evaluarea Oportunităților AI",
  heading: "Înainte să cheltuiți pe AI, obțineți verdictul cu care ar începe un audit plătit.",
  lead: "O sesiune structurată cu echipa de conducere și un raport scris, cu priorități — inclusiv un răspuns tranșant despre unde AI nu se va amortiza pentru dumneavoastră. Gratuită, livrată de fondator, cu locuri limitate.",
  heroCta: { label: "Aplicați pentru o evaluare", href: "#apply" } as CTA,
  heroFacts: [
    "45–60 de minute cu echipa de conducere",
    "Una per companie",
    "Fără acces la sisteme",
    "Fără pitch",
  ],

  problem: {
    eyebrow: "De ce există",
    heading: "Tiparul din spatele proiectelor AI blocate este un tipar de producție.",
    paragraphs: [
      "Probabil ați văzut deja filmul: un pilot promițător, un furnizor sigur pe el, un demo care a impresionat pe toată lumea — și apoi nimic care să supraviețuiască contactului cu utilizatori reali, date reale și responsabilitate reală. S&P Global a constatat că, până în 2025, 42% dintre companii renunțaseră la majoritatea inițiativelor lor de AI — aproape întotdeauna după ce banii fuseseră cheltuiți, nu înainte.",
      "Acestea nu sunt eșecuri de strategie. Sunt eșecuri de producție: retrieval care nu se poate ancora în datele pe care le aveți de fapt, rezultate pe care nu le poate valida nimeni, costuri care nu supraviețuiesc scalării și riscuri pe care nu le-a punctat nimeni înainte de construcție. Așa că o evaluare care vă merită timpul trebuie să fie o judecată de producție — nu un chestionar de maturitate.",
    ],
  },

  deliverable: {
    eyebrow: "Ce primiți",
    heading: "Raportul Gate Zero.",
    intro: "Trei până la cinci pagini, scrise personal de fondator — fără juniori, fără șabloane generate. Construit astfel încât prima pagină să poată fi trimisă boardului de una singură.",
    items: [
      "Un memo de decizie de o pagină, cu verdictul în titlu — nu îngropat la pagina patru",
      "Fiecare caz de utilizare candidat, punctat și așezat pe o singură hartă: valoare în joc × viabilitate în producție, fiecare cu eticheta lui de expunere — securitate și EU AI Act",
      "O listă formală de criterii de poartă pentru cazul principal: construiți acum / încă nu / nu construiți, cu interval de cost, timp până în producție și condiții de abandon",
      "O secțiune cu nume propriu — „Unde AI nu se va amortiza pentru dumneavoastră” — cu motivul ingineresc pentru fiecare nu",
      "Pași următori care includ acțiuni pe care le puteți face fără să ne angajați",
    ],
    guaranteeLabel: "Garanția, în scris",
    guarantee: "Așteptați-vă la cel puțin un caz de utilizare despre care vă vom spune să nu îl construiți — sau să nu îl construiți încă — cu motivul ingineresc, în scris. Iar dacă fiecare idee adusă trece cu adevărat de poartă, raportul spune asta la fel de limpede: ce nu va face niciodată este să fabrice un verdict, în oricare direcție.",
    sampleCta: { label: "Citiți un raport exemplu", href: "/ro/assessment/sample-readout" } as CTA,
  },

  method: {
    eyebrow: "Metoda",
    heading: "Gate Zero: poarta de producție, aplicată înainte de bani.",
    intro: "În ingineria de producție, o poartă (gate) este punctul formal de control go/no-go pe care un sistem trebuie să îl treacă înainte de lansare. Gate Zero aplică această disciplină cazurilor dumneavoastră de utilizare înainte să se construiască orice. Șapte dimensiuni, punctate pe criterii publicate:",
    dimensions: [
      { name: "Valoare în joc", desc: "Euro sau ore atașate unui flux de lucru numit — scenariu de bază conservator, cu ipotezele declarate. Fără curbe de hochei." },
      { name: "Realitatea datelor", desc: "Conținutul-sursă chiar există, e curat și e accesibil astăzi — sau trăiește în capul cuiva?" },
      { name: "Ancorare și fezabilitatea retrieval-ului", desc: "Pot fi răspunsurile ancorate în documentele dumneavoastră reale, la o calitate a retrieval-ului pe care un sistem de producție o poate susține?" },
      { name: "Toleranța la erori față de miză", desc: "Unde ar ateriza un răspuns greșit, cine observă și ce rată de eroare poate absorbi onest acest flux de lucru?" },
      { name: "Validare și verificabilitate", desc: "Poate fi corectitudinea verificată vreodată — automat, prin eșantionare sau printr-un pas uman care nu anulează valoarea?" },
      { name: "Cost, latență și responsabilitate", desc: "Economia unitară la volum de producție, latența pe care fluxul o tolerează și cine este sunat noaptea după lansare." },
      { name: "Securitate și expunere EU AI Act", desc: "Atingerea de date personale, suprafața de atac, constrângerile de instalare și un nivel de risc provizoriu conform EU AI Act — punctate per caz, de la început." },
    ],
    rulesLabel: "Trei reguli, prezente în fiecare raport",
    rules: [
      "Ponderile dimensiunilor sunt fixate înainte de punctarea oricărui caz.",
      "Niciun „scor de pregătire AI” agregat — dimensiunea cea mai slabă blochează poarta; mediile ascund.",
      "Fiecare punctaj poartă un nivel de încredere și ipotezele declarate.",
    ],
    questionsLabel: "Patru dintre întrebările reale ale porții",
    gateQuestions: [
      "Unde ar ateriza un răspuns greșit — și cine observă?",
      "Ce conținut ar ancora răspunsurile — și cine îl ține la zi?",
      "Ce cost per interogare și ce latență poate tolera acest flux de lucru?",
      "Cine deține acest sistem după lansare?",
    ],
    standardsNote: "Punctarea expunerii se raportează la EU AI Act (articolul 6 / anexa III), la NIST AI Risk Management Framework și la OWASP Top 10 pentru aplicații LLM.",
  },

  process: {
    eyebrow: "Cum decurge",
    heading: "Patru pași, două până la patru săptămâni.",
    steps: [
      { name: "Aplicați", time: "10 minute", desc: "Zece întrebări despre afacerea dumneavoastră, cazurile de utilizare candidate și unde trăiesc datele. Fiecare cerere este citită personal — iar unele sunt refuzate. Acesta este primul verdict, și vine înaintea oricărui apel." },
      { name: "Interviul de stres de producție", time: "45–60 de minute", desc: "O sesiune structurată cu echipa de conducere — nu un pitch, nu un chestionar de maturitate. Fiecare caz de utilizare trece prin întrebările pe care producția le va pune oricum. Doar discuție ghidată: fără credențiale, fără acces la sisteme, nimic nu vă părăsește perimetrul." },
      { name: "Se scrie raportul", time: "într-o săptămână", desc: "Fiecare caz este punctat pe cele șapte dimensiuni Gate Zero și așezat pe o singură hartă valoare–viabilitate. Scris de fondator, pe cifrele și vocabularul dumneavoastră." },
      { name: "Discuția despre verdict", time: "30 de minute", desc: "Primiți raportul și un răspuns tranșant pentru cazul principal: construiți acum, încă nu — și exact ce l-ar debloca — sau nu construiți. Documentul rămâne al dumneavoastră în oricare variantă." },
    ],
  },

  whyFree: {
    eyebrow: "De ce e gratuită",
    heading: "E un diagnostic, nu tratamentul.",
    body: "Așa decidem dacă vom lucra împreună. Primiți verdictul și ordinea priorităților; munca propriu-zisă o fac proiectele plătite. Rămâne gratuită pentru că e plafonată: o singură persoană susține fiecare apel și scrie fiecare raport — cel mult trei evaluări pe lună, una per companie, o singură dată.",
    branches: [
      { name: "Dacă verdictul e da", desc: "și ne potrivim, raportul leagă fiecare lipsă rămasă de tipul de proiect care o închide. Veți ști forma pasului următor înainte să vă angajați la orice." },
      { name: "Dacă verdictul e nu", desc: "păstrați raportul, nu urmează nicio secvență de e-mailuri și aici se încheie — dacă nu ne scrieți chiar dumneavoastră. Un „nu” urmat de e-mailuri insistente ar face verdictul lipsit de valoare." },
    ],
  },

  fit: {
    eyebrow: "Potrivire",
    heading: "Pentru cine este — și pentru cine nu.",
    forLabel: "Este pentru dumneavoastră dacă",
    notForLabel: "Nu este dacă",
    forWho: [
      "Echipe de conducere cu cel puțin un caz de utilizare AI candidat și un flux de lucru real în joc",
      "Companii cu un pilot blocat, o lansare riscantă sau cheltuieli pe AI care nu produc rezultate",
      "Organizații din UE sau expuse UE, care au nevoie de citirea AI Act alături de citirea valorii",
      "Afaceri cu date sensibile, care cântăresc ce poate și ce nu poate să le părăsească perimetrul",
    ],
    notForWho: [
      "Companii care caută un plan de implementare gratuit — acesta este un verdict, nu un proiect tehnic",
      "Echipe fără un sponsor executiv dispus să participe la sesiune",
      "Oricine caută validarea unei decizii deja luate — unele rapoarte spun „nu construiți”, iar al dumneavoastră ar putea fi printre ele",
    ],
  },

  whoRuns: {
    eyebrow: "Cine o realizează",
    heading: "Metoda există pentru că acestea sunt verificările pe care le fac înainte să livrez orice.",
    facts: [
      "Livrează sisteme AI și LLM de producție — tuning de retrieval, validarea rezultatelor, monitorizare, bugete de cost și latență",
      "A construit un asistent AI self-hosted, cu retrieval, care rulează complet offline pe hardware pe care o afacere îl deține deja",
      "Inginer de securitate de producție, cu experiență în protecția datelor",
      "A fondat două produse SaaS; arhitect principal al unei platforme enterprise multi-tenant",
    ],
    link: { label: "Mai multe despre Luca", href: "/ro/about" } as CTA,
  },

  positioning: {
    heading: "Nu e un chestionar. Nu e un proiect de slide-uri.",
    body: "Nu este un chestionar de zece minute cu punctaj automat și nici o evaluare de sute de mii de euro livrată de analiști juniori. Este verdictul pe cazuri de utilizare cu care ar începe un audit plătit, livrat personal de omul care l-ar și construi. Nu vindem cloud, hardware sau licențe — un „nu construiți” nu ne costă nimic, iar doar în această condiție un „construiți” chiar înseamnă ceva.",
    noLockIn: "Raportul este scris ca să vă fie util indiferent dacă ne angajați vreodată sau nu.",
  },

  apply: {
    eyebrow: "Aplicați",
    heading: "Aplicați pentru o evaluare.",
    intro: "Zece întrebări, cam zece minute. Fiecare cerere este citită personal — unele sunt refuzate, iar acesta e primul verdict. Dacă este acceptată, primiți agenda exactă a apelului și un raport exemplu înainte să angajați o oră din timpul echipei de conducere.",
    microcopy: "Gratuită · una per companie · cel mult trei pe lună · doar discuție ghidată, fără acces la sisteme",
    submitLabel: "Trimiteți cererea",
  },
} as const;

/* ------------------------------------------------ Your data & IP */

export const dataIp = {
  id: "data-ip",
  eyebrow: "Datele dumneavoastră și proprietatea intelectuală",
  heading: "Construit de un inginer de securitate — tratat ca atare.",
  body: "Venim dintr-un fundal de securitate și protecția datelor — inginerie de securitate de producție și, mai devreme, cercetare de securitate în autentificare și criptare. Disciplina aceasta este construită în felul în care lucrăm cu dumneavoastră.",
  items: [
    {
      title: "Datele dumneavoastră rămân ale dumneavoastră.",
      body: "Accesăm doar ce are nevoie un proiect, lucrăm fără rezerve sub NDA-ul dumneavoastră și putem opera în întregime în mediul dumneavoastră.",
    },
    {
      title: "Dețineți ce construim.",
      body: "Codul, modelele și documentația sunt ale dumneavoastră, cu o predare curată, ca echipa dumneavoastră să poată opera totul fără noi.",
    },
    {
      title: "Sigur din proiectare.",
      body: "Izolarea tenanților, accesul cu privilegii minime și gestiunea secretelor se decid în faza de design — nu se peticesc ulterior.",
    },
    {
      title: "AI folosit responsabil.",
      body: "Unde contează confidențialitatea, putem rula AI on-premise sau self-hosted; unde contează corectitudinea, ținem rezultatele modelului în spatele validării.",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Approach */

export const approach = {
  eyebrow: "Abordarea noastră",
  intro: "Un drum disciplinat de la întrebare la rezultat.",
  steps: [
    {
      n: "01",
      title: "Diagnosticăm",
      body: "Înțelegem obiectivele, operațiunile, datele și constrângerile dumneavoastră și punem imaginea completă în termeni simpli.",
      output: "O imagine comună și onestă a punctului în care vă aflați și a ce stă în cale.",
    },
    {
      n: "02",
      title: "Prioritizăm",
      body: "Identificăm oportunitățile cu cea mai mare valoare și construim business case-ul fiecăreia. Pariuri mai puține, mai bune.",
      output: "O listă scurtă de pariuri dimensionate și ordonate, cu măsuri de succes convenite.",
    },
    {
      n: "03",
      title: "Construim",
      body: "Proiectăm și livrăm soluția pragmatic, împreună cu echipele dumneavoastră, livrând software funcțional, nu prezentări.",
      output: "O soluție funcțională în producție, folosită de oamenii pentru care a fost făcută.",
    },
    {
      n: "04",
      title: "Dovedim și scalăm",
      body: "Măsurăm impactul față de cifrele pe care le-am convenit, consolidăm ce funcționează și îl scalăm.",
      output: "Rezultate dovedite pe KPI-urile dumneavoastră și un plan de extindere a ce a mers.",
    },
  ] as Step[],
} as const;

/* ----------------------------------------------------- Statement band */

export const statement = {
  headline: "Suntem judecați după rezultate, nu după livrabile.",
  support:
    "Fiecare proiect este legat de rezultate pe care le puteți măsura — și vă spunem adevărul despre ce funcționează.",
} as const;

/* --------------------------------------------------- Testimonials */
export const testimonials: Testimonial[] = [];

export const testimonialsMeta = {
  eyebrow: "Ce spun clienții",
  heading: "În cuvintele lor.",
} as const;

/* ------------------------------------------------- Who we work with */

export const clients = {
  eyebrow: "Cu cine lucrăm",
  body: "Lucrăm cu întreaga organizație, nu doar cu vârful ei. Schimbarea durabilă are nevoie ca oamenii care stabilesc direcția și oamenii care fac munca să se miște împreună — așa că lucrăm la fiecare nivel, de la board până la echipele din teren.",
  levels: [
    {
      role: "Boardul și conducerea executivă",
      detail: "CEO, COO, CTO și CIO — cei care stabilesc direcția și decid unde se investește.",
    },
    {
      role: "Șefii de funcțiuni și departamente",
      detail: "Conducătorii operațiunilor, finanțelor, produsului și tehnologiei — cei care răspund de rezultate.",
    },
    {
      role: "Echipele care fac munca",
      detail: "Managerii, analiștii și inginerii care construiesc, adoptă și operează totul, zi de zi.",
    },
  ],
} as const;

/* ------------------------------------------- About: homepage teaser */

export const aboutTeaser = {
  eyebrow: "Cine e în spate",
  heading: "Condusă de fondator. Implicare directă.",
  body: "LT Strategy Partners este condusă de Luca-Ștefan Tamaș — inginer de sisteme care construiește și livrează AI de producție, de la sisteme LLM self-hosted, cu retrieval, până la produse SaaS complete. Construiește sisteme de producție în medii exigente, critice pentru securitate, a fost arhitect principal al unei platforme enterprise multi-tenant (BI, ERP, gestiunea documentelor, automatizarea proceselor) și a fondat două produse SaaS proprii. Lucrați direct cu el: omul care vă consiliază este omul care face munca.",
  link: { label: "Mai multe despre Luca", href: "/ro/about" } as CTA,
  photoCaption: "Luca-Ștefan Tamaș · Fondator",
} as const;

/* ------------------------------------------------- About: full page */

export const aboutPage = {
  eyebrow: "Despre",
  heading: "Un partener implicat, de la început până la final.",
  paragraphs: [
    "Sunt Luca-Ștefan Tamaș, iar LT Strategy Partners este practica mea. Este mică și de nivel senior în mod intenționat: când lucrați cu noi, lucrați direct cu mine. Omul care dă sfatul este omul care face munca și rămâne răspunzător de felul în care iese.",
    "Ca formare, sunt inginer de sisteme. Munca la care țin cel mai mult — și în jurul căreia este construită această practică — este AI-ul care trebuie să reziste în producție, nu doar în demo: retrieval solid și date curate, rezultate ținute în spatele validării, latență și costuri sănătoase, plus monitorizarea și mecanismele de rezervă care țin un sistem de încredere odată ce oameni reali se bazează pe el.",
    "Zi de zi construiesc sisteme de producție într-un mediu de inginerie exigent, critic pentru securitate, iar înainte am fost arhitect principal al unei platforme enterprise multi-tenant care acoperă business intelligence, ERP, gestiunea documentelor și automatizarea proceselor. Am fondat și livrat două produse SaaS proprii — Mazely și Processly — și am construit un asistent AI self-hosted, cu retrieval, care rulează complet offline pe hardware pe care un local îl deține deja. Din 2020 livrez proiecte pentru clienți, cap-coadă, în web, mobil, date și AI, inclusiv aplicații publicate în App Store și Google Play. Fundamentul acesta de securitate și platforme este motivul pentru care AI-ul pe care îl construiesc rămâne privat și de încredere din start.",
  ],
  beliefsHeading: "Ce cred despre munca aceasta",
  beliefs: [
    "Cred că software-ul și infrastructura digitală a unei companii sunt printre cele mai bune investiții pe care le poate face o afacere — dar numai când sunt făcute cu cap. Destule organizații cheltuiesc mult și urmează orice e la modă, apoi se întreabă de ce banii nu au ajuns niciodată în rezultatul final. Rareori tehnologia este partea grea. Să cheltuiești pe lucrul potrivit, din motivul potrivit, în ordinea potrivită — de acolo vine de fapt randamentul, și exact partea aceasta se sare cel mai des.",
    "Mai cred că cei mai ieftini bani pe care îi veți cheltui vreodată sunt discuția de dinainte de a începe. O conversație scurtă și onestă cu cineva care a construit astfel de sisteme poate economisi luni de muncă și mult buget — prinzând devreme problema greșită, lăsând deoparte ideea care nu se va amortiza și arătându-vă cel mai simplu lucru care chiar funcționează. Tocmai de aceea primul pas pe care îl ofer nu costă nimic.",
  ],
  whyHeading: "Cum îmi place să lucrez",
  why: "Prefer să fiu util decât impresionant. Pentru că a trebuit să fac aceste sisteme să funcționeze în lumea reală, vă pot spune deschis ce merită făcut, ce nu și cât va costa cu adevărat — și nu voi recomanda nimic ce nu aș fi dispus să construiesc eu însumi.",
  glanceHeading: "Pe scurt",
  glance: [
    "Construiește sisteme AI și LLM de producție — retrieval-augmented generation, modele self-hosted și rezultate ținute în spatele validării",
    "A construit un asistent AI self-hosted, complet offline; fondator a două produse SaaS în producție (Mazely, Processly)",
    "Inginerie de sisteme de producție într-un mediu critic pentru securitate; arhitect principal al unei platforme multi-tenant de BI / ERP / DMS / automatizare de procese",
    "Fundament de securitate și protecția datelor: autentificare, criptare, privilegii minime și izolarea tenanților",
    "Certificări de date și analiză (Meta Data Analyst, Google Business Intelligence, Advanced SQL, Tableau); certificări de securitate (SOC Level 1, DevSecOps, Jr Penetration Tester)",
    "Cu sediul în Iași · lucrează cu clienți din UE și SUA",
  ],
  photoCaption: "Luca-Ștefan Tamaș · Fondator",
  ctaHeading: "Unde se ascunde valoarea în afacerea dumneavoastră?",
} as const;

/* ------------------------------------------------------- CTA (pre-footer) */

export const ctaBand = {
  headline: "Unde se ascunde valoarea în afacerea dumneavoastră?",
  body: "Haideți să purtăm o discuție directă, fără presiune, despre unde v-ar putea mișca AI și tehnologia cifrele cu adevărat.",
  cta: site.primaryCta,
} as const;

/* ----------------------------------------------------------------- FAQ */

export const faq = {
  eyebrow: "Întrebări frecvente",
  heading: "Întrebările pe care liderii le pun primele.",
  items: [
    {
      q: "Cum începem?",
      a: "Cu o Evaluare a Oportunităților AI, cu perimetru fix — un prim pas fără risc, care vă lasă o foaie de parcurs prioritizată, a dumneavoastră.",
    },
    {
      q: "Cum stabiliți prețul?",
      a: "Evaluarea Oportunităților AI este gratuită. Proiectele mai mari se dimensionează și se tarifează per proiect, cu prețul convenit dinainte.",
    },
    {
      q: "Lucrați la distanță?",
      a: "Da — cu clienți din UE și SUA, și la fața locului în România, acolo unde ajută.",
    },
    {
      q: "Suntem la început cu AI. E prea devreme?",
      a: "Nu. Evaluarea este gândită exact pentru acest punct de plecare.",
    },
    {
      q: "Cine face efectiv munca?",
      a: "Firma este condusă de fondator. Luca este implicat direct în fiecare proiect — lucrați cu un om senior, nu cu o predare către juniori.",
    },
    {
      q: "Cum tratați datele și proprietatea noastră intelectuală?",
      a: "Datele dumneavoastră rămân ale dumneavoastră, dețineți ce construim, iar totul este sigur din proiectare.",
      href: "/ro#data-ip",
    },
  ] as FaqItem[],
} as const;

/* ------------------------------------------------------------ Contact */

export const contact = {
  eyebrow: "Contact",
  headline: "Haideți să vorbim direct.",
  intro:
    "Spuneți-ne câteva lucruri despre organizația dumneavoastră și despre ce vreți să mișcați. Revenim personal — fără scenarii de vânzare, fără presiune.",
  email: site.email,
  phone: site.phone,
  phoneDisplay: site.phoneDisplay,
  location: site.location,
  fields: [
    { name: "name", label: "Nume", type: "text", required: true, autocomplete: "name" },
    { name: "company", label: "Companie", type: "text", required: true, autocomplete: "organization" },
    { name: "role", label: "Rol", type: "text", required: false, autocomplete: "organization-title" },
    { name: "email", label: "Email", type: "email", required: true, autocomplete: "email" },
    { name: "message", label: "Cu ce vă putem ajuta?", type: "textarea", required: true },
  ] as FormField[],
  prefills: {
    assessment: "Aș dori o Evaluare a Oportunităților AI.",
  } as Record<string, string>,
  submitLabel: "Trimiteți mesajul",
  asideEyebrow: "Linie directă",
  asideLead: "Preferați emailul — sau vreți să ne contactați imediat?",
  asidePoints: [
    "Consultanță independentă, la nivel senior.",
    "Răspuns în cel mult două zile lucrătoare.",
    "Fără scenarii de vânzare, fără presiune.",
  ],
  privacyHtml:
    'Folosim datele dumneavoastră doar ca să răspundem solicitării și nu le transmitem niciodată terților. Vedeți <a href="/ro/privacy">politica de confidențialitate</a>.',
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
    "O firmă de consultanță și livrare condusă la nivel senior, care ajută echipele de conducere să transforme strategia — și AI-ul, acolo unde își merită locul — în rezultate măsurabile.",
} as const;

/* --------------------------------------------------------- Insights */

export const insights = {
  eyebrow: "Perspective",
  heading: "Gândire limpede despre AI și tehnologie.",
  intro:
    "Texte scurte și practice pentru lideri — nu pentru ingineri — despre cum obțineți valoare reală din AI și tehnologie.",
} as const;

/* ------------------------------------------------- Selected work / portfolio */

export const work = {
  eyebrow: "Proiecte alese",
  intro:
    "Câteva lucruri pe care le-am proiectat și construit. Le arătăm ca să spunem un singur lucru, limpede: nu doar consiliem — livrăm. Iată ce a presupus fiecare, tehnic și strategic, și ce înseamnă pentru munca pe care am putea-o face împreună.",
  projects: [
    {
      slug: "processly",
      name: "Processly",
      tagline: "Proiectați munca o dată. Rulați-o la nesfârșit.",
      category: "Automatizarea fluxurilor de lucru",
      kind: "product",
      label: "Produs · construit cap-coadă",
      accent: "#111214",
      heroDark: true,
      oneLiner:
        "O platformă de proiectare a muncii, care transformă activitățile repetabile în procese vizuale pe care echipele le pot lansa la cerere",
      overview:
        "Processly este o aplicație web modernă pentru orchestrarea vizuală a proceselor și proiectelor. Echipele proiectează un flux de lucru o singură dată, apoi generează proiecte din el — cu un click, pe un program sau ambele. Accentul cade pe deținerea completă și pe vizibilitatea felului în care rulează munca.",
      context:
        "Echipele reproiectează și relansează manual aceeași muncă recurentă, iar știința din spatele acestor procese trăiește în capul oamenilor și în prezentări. Processly capturează munca repetabilă sub formă de sisteme reutilizabile.",
      delivered: [
        "Un designer vizual de fluxuri de lucru, bazat pe DAG, în care un proces se definește o dată și se refolosește",
        "Generare de proiecte cu un click, dintr-un proces salvat",
        "Generare programată, astfel încât munca recurentă să se lanseze automat",
        "Declanșatoare manuale și programate, combinate, pentru același proces",
      ],
      strategic: [
        "Capturează munca intelectuală repetabilă sub formă de sisteme reutilizabile, nu efort de unică folosință",
        "Aduce consecvență operațională fără personal suplimentar",
        "Le dă liderilor vizibilitate asupra felului în care rulează munca de fapt",
        "Mută știința proceselor din capul oamenilor într-un sistem deținut de companie",
      ],
      capabilities: [
        "Proiectarea proceselor",
        "Automatizarea fluxurilor de lucru",
        "Programare și orchestrare",
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
        "Arată că putem transforma munca recurentă și manuală a unui client în sisteme proiectate și reutilizabile, care rulează la cerere sau pe program — dând unei echipe de operațiuni consecvență și vizibilitate fără să crească echipa.",
      image: "processly",
    },
    {
      slug: "mazely",
      name: "Mazely",
      tagline: "Fiecare vizitator își găsește drumul. De fiecare dată.",
      category: "Inginerie de produs",
      kind: "product",
      label: "Produs · construit cap-coadă",
      accent: "#0077B5",
      oneLiner:
        "Orientare în interior ghidată de fotografii, pentru instituții complexe — fără aplicație, fără hardware",
      overview:
        "Mazely este o platformă enterprise de navigare în interiorul clădirilor, pentru clădiri publice, universități, spitale și instituții. Vizitatorii scanează un cod QR și urmează indicații pas cu pas, construite din fotografii reale ale coridoarelor — fără descărcarea vreunei aplicații și fără hardware instalat. Un panou de administrare acoperă proiectarea etajelor, gestiunea codurilor QR și analiza fluxurilor de vizitatori.",
      context:
        "Vizitatorii se pierd în clădiri instituționale mari și complexe, iar personalul pierde timp dând indicații. Instituțiile nu au nici date despre felul în care se mișcă oamenii prin spațiul lor.",
      delivered: [
        "Navigare pas cu pas, ghidată de fotografii, livrată printr-un cod QR scanat — fără descărcare de aplicație, fără hardware instalat",
        "Arhitectură multi-tenant, cu rutare pe mai multe etaje și clădiri și pathfinding atent la accesibilitate",
        "Suport multilingv: engleză, română, franceză și germană",
        "Panou de administrare cu proiectare drag-and-drop a etajelor, gestiunea codurilor QR și analize pentru sesiuni, popularitatea destinațiilor și feedback",
        "Infrastructură cloud cu TLS 1.3 în tranzit și AES-256 în repaus, proiectată pentru disponibilitate ridicată",
      ],
      strategic: [
        "Transformă o frustrare fizică recurentă într-un strat digital cu fricțiune minimă, care reduce povara personalului",
        "Produce analize de mișcare care dau instituțiilor date pe care înainte nu le aveau",
        "Proiectat cu cerințele instituțiilor reglementate în minte — privacy-by-design, urmărire anonimă a sesiunilor și fără colectare de date medicale personale",
        "Modelul fără aplicație și fără hardware ține fricțiunea de adopție și costul de lansare la minimum",
      ],
      capabilities: [
        "Sisteme de orientare în interior",
        "Pathfinding atent la accesibilitate",
        "Design de produs multilingv",
        "Analiza fluxurilor de mișcare",
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
        "Arată că putem proiecta și livra un produs atent la confidențialitate pentru instituții complexe, care elimină fricțiunea fizică și generează date operaționale utile — o abordare potrivită oriunde o organizație are nevoie de un strat digital cu fricțiune minimă peste un mediu fizic.",
      image: "mazely",
    },
    {
      slug: "restaurant-ai",
      name: "Asistentul de Meniu pentru Restaurante",
      tagline: "AI aplicat, care rulează pe hardware-ul restaurantului.",
      category: "AI aplicat",
      kind: "build",
      label: "Construcție self-hosted",
      accent: "#C2410C",
      oneLiner:
        "Un asistent de meniu cu AI, self-hosted, care răspunde întrebărilor clienților și rulează offline, on-premise",
      overview:
        "Asistentul de Meniu pentru Restaurante este un sistem AI self-hosted pentru restaurante. Împerechează o interfață de chat potrivită pentru kioșcuri și tablete — care îi ajută pe clienți să găsească preparate după preferințe sau nevoi alimentare — cu un panou de administrare pentru articole, categorii, prețuri în mai multe valute, reduceri și imagini. Folosește retrieval-augmented generation peste meniul propriu al restaurantului și rulează integral în rețeaua locală după instalare.",
      context:
        "Restaurantele vor ajutor AI pentru clienți fără să-și trimită datele de meniu în cloud și fără să plătească un tarif pentru fiecare întrebare pusă. Lucrarea răspunde la o întrebare precisă: cum livrezi AI util și privat pe hardware pe care localul îl deține deja.",
      delivered: [
        "O interfață de chat pentru kioșcuri și tablete, care răspunde la întrebări despre meniu și găsește preparate după preferințe sau nevoi alimentare",
        "Un panou de administrare pentru articole, categorii, prețuri în mai multe valute, reduceri și imagini, cu reindexarea automată a meniului după modificări",
        "Un pipeline de răspuns cu retrieval, folosind Ollama cu qwen2.5:3b pentru chat și bge-m3 pentru embeddings, sprijinit de căutarea semantică Qdrant",
        "Instalare self-hosted prin Podman / Docker Compose, cu PostgreSQL, stocare de imagini MinIO, proxy Nginx și administrare autentificată cu token",
        "Disciplină operațională: buget de memorie explicit pentru gazde de 8GB, health checks, backup și restaurare automate, secrete per instalare și rețea locală ca setare implicită",
      ],
      strategic: [
        "Ține datele private și on-premise, fără costuri cloud per interogare",
        "Arată retrieval-augmented generation aplicat cu discernământ și atent la costuri, cu compromisuri de model documentate",
        "Demonstrează rigoarea operațională necesară pentru a rula AI fiabil pe hardware modest, deținut de client",
        "Aceeași abordare poate aduce AI privat și offline oricărei afaceri precaute față de dependența de cloud",
      ],
      capabilities: [
        "Retrieval-augmented generation",
        "Instalare AI self-hosted",
        "Confidențialitatea datelor on-premise",
        "Alegerea modelelor atentă la costuri",
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
        "Arată că putem proiecta și livra AI cu retrieval care rulează privat, pe hardware pe care o afacere îl deține deja — cu bugetarea memoriei, health checks și disciplina de backup necesare ca să funcționeze în lumea reală.",
      diagram: true,
    },
    {
      slug: "transit-analytics",
      name: "Analiza Transportului Public — Iași",
      tagline: "Telemetria flotei, transformată în decizii operaționale.",
      category: "Date și analiză",
      kind: "analysis",
      label: "Analiză independentă",
      accent: "#4F63D2",
      oneLiner:
        "Un dashboard Metabase care transformă telemetria transportului public al unui oraș în decizii operaționale",
      overview:
        "Un dashboard de analiză în timp real pentru flota de transport public a Iașiului, construit pe Metabase, peste date GPS și de telemetrie. Raportează 238 de vehicule — autobuze și tramvaie — urmărind viteza, siguranța, accesibilitatea și congestia într-un singur loc. Arată cum telemetria brută a flotei devine imagini operaționale pe baza cărora o autoritate de transport poate acționa.",
      context:
        "Operatorii de transport public stau pe fluxuri continue de GPS și telemetrie, dar rareori le transformă în decizii operaționale de zi cu zi. Provocarea este să convertești date brute de poziție și viteză în imagini care informează eficiența, siguranța și conformitatea.",
      delivered: [
        "O hartă în timp real a pozițiilor vehiculelor, pentru întreaga flotă a orașului",
        "Analiza compoziției flotei: 238 de vehicule (63% autobuze, 37% tramvaie / metrou ușor)",
        "Metrici de eficiență a mobilității: viteza medie pe intervale orare și pe categorii (autobuze 27,35 km/h, tramvaie 17,52 km/h), plus o histogramă a distribuției vitezelor",
        "Indici de accesibilitate pentru vehiculele accesibile cu scaunul rulant (71,85%) și cu bicicleta (10,08%)",
        "O hartă a punctelor de congestie și un tabel cu 58 de depășiri de viteză înregistrate, semnalând valori extreme de până la 141 km/h — cu peste 50 km/h peste limită",
      ],
      strategic: [
        "Convertește telemetria brută în decizii de eficiență, siguranță, accesibilitate și congestie",
        "Le dă echipelor operaționale și celor din sectorul public o singură imagine factuală, pentru conformitate și supravegherea siguranței",
        "Demonstrează un pipeline repetabil de la date la decizii, aplicabil oricărei flote sau oricărui flux de senzori",
      ],
      capabilities: [
        "Pipeline-uri de date de telemetrie",
        "Dashboard-uri operaționale",
        "Analiza flotelor și a mobilității",
        "Design de la date la decizii",
      ],
      stack: ["Metabase (dashboard / BI)", "SQL", "Pipeline GPS / telemetrie"],
      takeaway:
        "Arată că putem lua date brute de senzori și telemetrie și le putem transforma în dashboard-uri operaționale care conduc decizii reale — o abordare aplicabilă oricărui client care operează o flotă, o rețea sau un flux de date operaționale.",
      image: "transit-map",
      gallery: ["transit-charts", "transit-speeding"],
    },
  ] as WorkProject[],
} as const;

/* ------------------------------------------ Supporting-route intro copy */

export const pageIntros = {
  services: {
    eyebrow: "Servicii",
    title: "De la board până în producție.",
    lead: "Un singur partener senior pe tot parcursul — strategie, livrare și schimbarea operațională care face rezultatul să țină. Fără predări între echipe, fără ruptură între plan și oamenii care îl construiesc.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Haideți să vorbim direct.",
    lead: "Spuneți-ne câteva lucruri despre organizația dumneavoastră și despre ce vreți să mișcați. Revenim personal — fără scenarii de vânzare, fără presiune.",
  },
} as const;

/* ------------------------------------------------ AI & Tech Opportunity Scorecard */

export const scorecardPage = {
  eyebrow: "Verificare gratuită · circa 3 minute",
  heading: "Merită AI-ul sau un nou pariu tehnologic pentru afacerea dumneavoastră — deja?",
  lead: "Zece întrebări simple, fără jargon, fără cont ca să începeți. Veți primi o citire onestă a faptului că o investiție în AI sau tehnologie s-ar amortiza cu adevărat pentru o companie ca a dumneavoastră chiar acum — și, la fel de des, unde mișcarea mai inteligentă e să reparați întâi ceva. Nu e un scor de maturitate menit să vă facă să vă simțiți în urmă. E un răspuns direct despre unde ar munci de fapt banii dumneavoastră.",
  microcopy: "Nu e nevoie de cont ca să răspundeți. Cerem un email doar dacă doriți citirea scrisă, mai amplă.",
  dataGateQuestionIndex: 2,
  dataGateNote:
    "Un lucru, înainte de orice altceva: chiar acum, informația de care ați avea nevoie stă mai ales în capul oamenilor și în e-mailuri. Până nu ajunge undeva unde un sistem chiar o poate atinge, niciun pariu pe AI sau tehnologie nu se poate amortiza — e singurul lucru care merită reparat înainte să cheltuiți pe orice de mai jos.",
  q10Note:
    "Nu există un răspuns greșit aici — munca cu miză mare nu e interzisă AI-ului, doar trebuie construită mai atent. Această întrebare modelează sfatul, nu verdictul.",
  questions: [
    {
      q: "Cât din săptămâna echipei se duce în muncă manuală, repetitivă, după reguli — reintroducere de date, formatarea acelorași rapoarte, răspuns la aceleași întrebări, mutarea informației dintr-un instrument în altul?",
      options: [
        { label: "Aproape nimic la care să pot arăta cu degetul", points: 0 },
        { label: "Ceva, dar împrăștiat între mai mulți oameni", points: 4 },
        { label: "O parte clară — câteva ore de persoană, în fiecare săptămână", points: 7 },
        { label: "Mult — e un cost real, iar unii oameni sunt angajați parțial ca să o facă", points: 10 },
      ],
    },
    {
      q: "Există o problemă anume, cu nume, pe care sperați că AI-ul sau tehnologia ar rezolva-o?",
      options: [
        { label: "Nu chiar — ne uităm pentru că toată lumea vorbește despre AI", points: 0 },
        { label: "O senzație vagă că ceva ar putea merge mai bine", points: 3 },
        { label: "Da — putem numi blocajul, dar nu și soluția", points: 7 },
        { label: "Da — îl putem numi și știm aproximativ cât ne costă", points: 10 },
      ],
    },
    {
      q: "Când echipa are nevoie de informație ca să facă această muncă, unde stă ea de fapt?",
      options: [
        { label: "Mai ales în capul oamenilor și în e-mailuri", points: 0 },
        { label: "În documente și fișiere Excel, împrăștiate", points: 4 },
        { label: "În sisteme adevărate, dar dezordonat sau răspândit în prea multe instrumente", points: 7 },
        { label: "În sisteme, rezonabil de curată și ușor de accesat", points: 10 },
      ],
    },
    {
      q: "Gândiți-vă la ultimul software sau instrument important pe care l-ați implementat. Cum a mers?",
      options: [
        { label: "L-am cumpărat și aproape nimeni nu-l folosește", points: 0 },
        { label: "N-am făcut niciodată o implementare ca lumea", points: 2 },
        { label: "Amestecat — ceva adopție, multă rezistență", points: 4 },
        { label: "Bine — oamenii chiar l-au adoptat și face parte din felul în care lucrăm acum", points: 10 },
      ],
    },
    {
      q: "Împinge ceva din afara companiei în această direcție?",
      options: [
        { label: "Nimic la care să putem arăta — e curiozitate internă", points: 0 },
        { label: "Simțim că încep să se miște competitorii", points: 5 },
        { label: "Clienți sau parteneri ne-o cer", points: 8 },
        { label: "Un contract, o afacere sau o cerință anume depinde de asta", points: 10 },
      ],
    },
    {
      q: "Dacă oportunitatea potrivită ar fi clară, ce ați putea pune realist în spatele ei în următoarele 6–12 luni?",
      options: [
        { label: "Nimic pus deoparte — ar trebui să găsim resursele", points: 0 },
        { label: "Un buget mic, doar pentru un experiment", points: 4 },
        { label: "Un buget real, dar modest, pentru un singur proiect concentrat", points: 7 },
        { label: "Fonduri pregătite, gata să pornim pe pariul potrivit", points: 10 },
      ],
    },
    {
      q: "Dacă ați porni ceva, cine l-ar deține în interiorul companiei?",
      options: [
        { label: "Nimeni evident — am fi toți part-time pe el", points: 0 },
        { label: "Cineva ar putea, peste sarcinile lui zilnice", points: 4 },
        { label: "Avem pe cineva care l-ar putea deține, cu ceva sprijin", points: 7 },
        { label: "Un responsabil clar, cu timpul și autoritatea de a-l duce la capăt", points: 10 },
      ],
    },
    {
      q: "Cum se iau de obicei deciziile de acest fel la dumneavoastră?",
      options: [
        { label: "Greu — mulți factori de decizie, greu de ajuns la un „da”", points: 2 },
        { label: "Depinde — unele lucruri se mișcă, altele se împotmolesc", points: 5 },
        { label: "Conducerea poate decide și se poate angaja destul de repede", points: 10 },
      ],
    },
    {
      q: "Cât de des se întâmplă de fapt lucrul pe care ați vrea să-l îmbunătățiți?",
      options: [
        { label: "Rar — e ocazional", points: 0 },
        { label: "De câteva ori pe săptămână", points: 4 },
        { label: "De multe ori pe zi, în toată echipa", points: 7 },
        { label: "Constant — e în miezul felului în care merge afacerea", points: 10 },
      ],
    },
    {
      q: "Dacă un instrument ar greși din când în când, ce s-ar întâmpla?",
      options: [
        { label: "Ar putea fi periculos, sau serios din punct de vedere legal ori financiar — nu e loc de eroare", points: 2 },
        { label: "Ar conta — cineva ar trebui să prindă greșeala", points: 6 },
        { label: "Oricum un om verifică rezultatul înainte să fie folosit", points: 9 },
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
      body: "Chiar acum, un pariu pe AI sau pe o tehnologie mare ar fi, cel mai probabil, bani cheltuiți înaintea problemei. Nu e o critică — e cea mai ieftină lecție pe care o veți primi vreodată, pentru că o învățați înainte de factură, nu după. Primul pas onest nu e un instrument. E să puneți un lucru la punct: o problemă care merită numită, informație pe care un sistem chiar o poate atinge, sau cineva care poate deține munca. Rezolvați asta și se deschid ieftin multe opțiuni. Cheltuiți acum peste ea și veți fi, probabil, printre companiile care lasă proiectul deoparte un an mai târziu. Reveniți și refaceți testul când terenul e mai solid — veți vedea scorul mișcându-se.",
    },
    {
      slug: "real-seed",
      min: 35,
      max: 59,
      name: "O sămânță reală, încă nu un proiect",
      headline: "Aveți aici ceva ce merită modelat.",
      body: "Aveți începutul unei oportunități reale — dar e încă o sămânță, nu un plan, iar cea mai rapidă cale de a arunca bani acum e să săriți la o soluție înainte de a dimensiona problema. Mișcarea care se amortizează cu adevărat: alegeți singurul flux de lucru care vă costă cel mai mult, scrieți negru pe alb cât vă costă azi, în ore sau în euro, și fiți onești cu privire la unde stau datele pentru el. Faceți asta și fie veți găsi un pariu care merită făcut — fie vă veți scuti de un proiect care oricum nu avea cum să reușească. Dacă v-ar ajuta să testați care dintre cele două e cazul, exact pentru asta există Evaluarea gratuită a Oportunităților AI.",
    },
    {
      slug: "strong-candidate",
      min: 60,
      max: 79,
      name: "Candidat serios",
      headline: "Merită o privire serioasă.",
      body: "Aveți cea mai mare parte din ce cere un astfel de pariu — o problemă reală, date utilizabile și destulă pregătire ca să acționați. Riscul în acest punct nu e să nu faceți nimic; e să construiți bine lucrul greșit, sau să alegeți cazul care arată superb în demo și apoi moare la contactul cu utilizatori reali. Înainte să angajați buget, cea mai profitabilă jumătate de oră pe care o puteți petrece e să obțineți un verdict tranșant despre care caz de utilizare se amortizează cu adevărat în producție — și pe care să-l lăsați deoparte. Exact asta vă oferă, în scris, Evaluarea gratuită a Oportunităților AI, înainte să cheltuiți vreun ban.",
    },
    {
      slug: "ready-to-move",
      min: 80,
      max: 100,
      name: "Pregătiți să porniți",
      headline: "Întrebarea nu e „dacă” — ci care pariu, și în ce ordine.",
      body: "Pe hârtie, sunteți pregătiți: o problemă cu nume, date pe care un sistem le poate atinge, buget, un responsabil și presiunea de a vă mișca. Singurul lucru dintre dumneavoastră și un randament e să alegeți primul pariu potrivit și să-l secvențiați bine — pentru că în acest punct greșeala scumpă e să construiți trei lucruri acceptabil, în loc de unul singur care se amortizează. Exact aici își merită banii o citire scurtă, onestă, din afară. Evaluarea gratuită a Oportunităților AI vă dă un verdict scris pentru fiecare candidat — construiți acum, încă nu, sau nu construiți — inclusiv, spus limpede, oriunde AI nu se va amortiza pentru dumneavoastră. Nu avem niciun produs de vândut, așa că un „nu construiți” nu ne costă nimic să-l spunem.",
    },
  ] as ScorecardTier[],
  ui: {
    seeResult: "Vedeți rezultatul",
    incomplete: "Vă rugăm să răspundeți la toate cele zece întrebări pentru a vedea rezultatul.",
    retake: "Reluați testul",
    scoreLabel: "Scorul dumneavoastră",
    outOf: "/ 100",
    resultEyebrow: "Rezultatul dumneavoastră",
  },
  gate: {
    heading: "Vreți citirea completă, în scris?",
    body: "Lăsați un email și vă trimit o versiune mai amplă a rezultatului: ce arată răspunsurile dumneavoastră, cele două-trei lucruri la care m-aș uita primul pentru o companie în situația dumneavoastră și — dacă se potrivește — singura întrebare la care aș căuta un răspuns înainte de a cheltui orice. Fără newsletter, fără șir de e-mailuri, fără apeluri de vânzare pe care nu le-ați cerut. Un singur email util.",
    emailLabel: "Email de serviciu",
    button: "Trimiteți-mi citirea",
    privacy: "Folosim emailul dumneavoastră doar ca să trimitem această citire. Nu îl transmitem mai departe și nu vă adăugăm pe nicio listă.",
    privacyLinkLabel: "Vedeți politica de confidențialitate.",
    privacyHref: "/ro/privacy",
  },
  ctaPrimary: {
    label: "Aplicați pentru o Evaluare gratuită a Oportunităților AI",
    href: "/ro/assessment",
    microcopy: "Gratuită · una per companie · livrată de fondator · un verdict scris, inclusiv unde AI nu se va amortiza.",
  },
  ctaSecondary: {
    label: "Sau, pur și simplu, discutați cu mine",
    href: "/ro/contact",
  },
} as const;

/* --------------------------------------------------- Per-page SEO metadata */

export const pageMeta = {
  home: {
    title: "LT Strategy Partners — Consultant tehnologie & AI pentru decizii de business mai bune",
    description: site.description,
    path: "/ro",
  },
  scorecard: {
    title: "Scorecard AI & Tehnologie — LT Strategy Partners",
    description:
      "O verificare gratuită de 3 minute: zece întrebări simple, apoi o citire onestă a faptului că un pariu pe AI sau tehnologie s-ar amortiza deja pentru afacerea dumneavoastră — sau ce merită reparat întâi.",
    path: "/ro/scorecard",
  },
  services: {
    title: "Servicii — LT Strategy Partners",
    description:
      "Consultanță tehnologică independentă și supervizare, strategie, livrare și performanță operațională — cu specializare aprofundată în AI. Un singur partener senior pe tot parcursul.",
    path: "/ro/services",
  },
  assessment: {
    title: "Evaluarea Oportunităților AI — LT Strategy Partners",
    description:
      "O evaluare gratuită, livrată de fondator: fiecare caz de utilizare AI, punctat după valoare, viabilitate în producție și expunere EU AI Act — cu verdict: construiți acum, încă nu sau nu construiți.",
    path: "/ro/assessment",
  },
  assessmentSample: {
    title: "Exemplu de Raport Gate Zero — LT Strategy Partners",
    description:
      "Un exemplu complet și clar marcat de Raport Gate Zero — verdictul scris livrat de Evaluarea gratuită a Oportunităților AI.",
    path: "/ro/assessment/sample-readout",
  },
  about: {
    title: "Despre — LT Strategy Partners",
    description:
      "Condusă de fondatorul Luca-Ștefan Tamaș, inginer de sisteme care construiește AI și sisteme LLM de producție și a livrat platforme enterprise și două produse SaaS proprii.",
    path: "/ro/about",
  },
  contact: {
    title: "Contact — LT Strategy Partners",
    description:
      "O discuție directă, fără presiune, despre unde v-ar putea mișca AI și tehnologia cifrele.",
    path: "/ro/contact",
  },
  insights: {
    title: "Perspective — LT Strategy Partners",
    description:
      "Texte scurte și practice pentru lideri, despre valoarea reală din AI și tehnologie.",
    path: "/ro/insights",
  },
  privacy: {
    title: "Confidențialitate — LT Strategy Partners",
    description: "Cum colectează și tratează LT Strategy Partners informațiile dumneavoastră.",
    path: "/ro/privacy",
  },
  terms: {
    title: "Termeni — LT Strategy Partners",
    description: "Termenii în care este furnizat site-ul LT Strategy Partners.",
    path: "/ro/terms",
  },
} as const;

/* ----------------------------------------------- Shared UI microcopy (i18n) */

export const ui = {
  footerExplore: "Explorați",
  footerContactHeading: "Contact",
  footerAria: "Subsol",
  footerRights: "Toate drepturile rezervate.",
  read: "Citiți",
  readMore: "Citiți mai mult",
  readAria: "Citiți:",
  comingSoon: "În curând",
  backToInsights: "Perspective",
  backToWork: "Proiecte alese",
  insightsDateLocale: "ro-RO",
  workContext: "Contextul",
  workDelivered: "Ce am livrat",
  workStrategic: "De ce contează",
  workImpact: "Impact",
  workGallery: "Din dashboard",
  workCapabilities: "Capabilități demonstrate",
  workStack: "Construit cu",
  workTakeaway: "Ce înseamnă pentru dumneavoastră",
  workCaptions: {
    "transit-map": "Hartă în timp real a pozițiilor vehiculelor, pentru flota orașului",
    "transit-charts":
      "Compoziția flotei, viteza medie pe categorii și indicii de accesibilitate",
    "transit-speeding": "Posibile puncte de congestie și depășiri de viteză înregistrate",
  } as Record<string, string>,
  founderPhotoAlt: "Portretul lui",
} as const;

/* --------------------------------------- Form strings shared with client JS */

export const formStrings = {
  honeypot: "Lăsați acest câmp gol",
  contactFormAria: "Formular de contact",
  sending: "Se trimite…",
  fixFields: "Vă rugăm să corectați câmpurile marcate.",
  required: "Acest câmp este obligatoriu.",
  invalidEmail: "Vă rugăm să introduceți o adresă de email validă.",
  failPrefix: "Ceva nu a mers. Vă rugăm să ne scrieți direct la",
  contactSubjectPrefix: "Mesaj de la",
  contactSuccessSent:
    "Mulțumim — mesajul dumneavoastră a fost trimis. Vă răspundem personal în cel mult două zile lucrătoare.",
  assessmentSubjectPrefix: "Cerere de evaluare —",
  assessmentSuccessMailto:
    "Mulțumim — cererea dumneavoastră este gata de trimis. Va fi citită personal și primiți răspuns în cel mult două zile lucrătoare.",
  assessmentSuccessSent:
    "Mulțumim — cererea dumneavoastră a fost trimisă. Va fi citită personal și primiți răspuns în cel mult două zile lucrătoare.",
  scorecardSubjectPrefix: "Citire scorecard —",
  scorecardSuccessMailto:
    "Mulțumim — cererea dumneavoastră e gata de trimis. Citirea scrisă urmează personal, de obicei în cel mult două zile lucrătoare.",
  scorecardSuccessSent:
    "Mulțumim — citirea dumneavoastră e pe drum. Va fi trimisă personal, de obicei în cel mult două zile lucrătoare.",
} as const;

/* ------------------------------- Assessment application form (field copy) */

import type { AssessmentField } from "./site";

export const assessmentForm = {
  fields: [
    { name: "name", label: "Numele dumneavoastră", type: "text", required: true, autocomplete: "name" },
    { name: "email", label: "Email de serviciu", type: "email", required: true, autocomplete: "email" },
    {
      name: "company",
      label: "Compania, și aproximativ câți oameni",
      hint: "Sectorul și ordinul de mărime ajung — „casă de expediții cu 130 de oameni”.",
      type: "text",
      required: true,
      autocomplete: "organization",
    },
    {
      name: "role",
      label: "Rolul dumneavoastră — și va participa un sponsor executiv la sesiune?",
      hint: "Verdictul este o decizie de conducere, așa că un sponsor în încăpere este o condiție, nu o preferință.",
      type: "text",
      required: true,
      autocomplete: "organization-title",
    },
    {
      name: "usecases",
      label: "Cele unu–două cazuri de utilizare AI pentru care vreți cel mai mult un verdict",
      hint: "O propoziție pentru fiecare. Dacă nu aveți încă unul, spuneți asta — schimbă rostul sesiunii.",
      type: "textarea",
      required: true,
    },
    {
      name: "cost",
      label: "Cât vă costă astăzi acele fluxuri de lucru, în ore sau în euro?",
      hint: "O aproximare e suficientă. „Nu știu” este un răspuns acceptabil — necunoscutele se punctează și ele.",
      type: "text",
      required: false,
    },
    {
      name: "tried",
      label: "Ce ați încercat deja cu AI — și ce s-a întâmplat?",
      hint: "Pilotări, furnizori, experimente interne. Locul în care s-a blocat fiecare este aur pentru diagnostic.",
      type: "textarea",
      required: false,
    },
    {
      name: "data",
      label: "Unde trăiesc astăzi datele sau conținutul care ar alimenta sistemul?",
      hint: "SharePoint, un wiki, o bază de date, PDF-uri, capul oamenilor — toate sunt răspunsuri oneste.",
      type: "text",
      required: true,
    },
    {
      name: "sensitive",
      label: "Ar atinge date personale, date ale clienților sau ceva ce ați ezita să trimiteți către un furnizor de cloud din SUA?",
      type: "text",
      required: false,
    },
    {
      name: "timeline",
      label: "Când ați vrea, realist, un prim sistem în producție?",
      type: "select",
      required: false,
      options: ["În acest trimestru", "În acest an", "Cândva — deocamdată explorăm"],
    },
  ] as AssessmentField[],
  selectPlaceholder: "Alegeți una (opțional)",
  honeypotLabel: "Lăsați acest câmp gol",
  submitLabel: "Trimiteți cererea",
  formAria: "Formular de cerere pentru evaluare",
} as const;

/* ----------------------------------------------------- Legal pages (i18n) */

import type { LegalSection } from "./site";

export const legalPages = {
  privacy: {
    eyebrow: "Legal",
    title: "Politica de confidențialitate.",
    lead: "Cum colectăm și cum tratăm informațiile pe care ni le împărtășiți. Limbaj simplu, fără surprize.",
    updated: "Ultima actualizare: 3 iulie 2026",
    sections: [
      {
        heading: "Cine suntem",
        html: `Operatorul de date pentru acest site este ${site.name} (o practică condusă de fondator, cu sediul în Iași, România). Pentru orice întrebare despre această politică sau despre datele dumneavoastră, scrieți-ne la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "Ce colectăm",
        html: `Colectăm informațiile pe care alegeți să ni le trimiteți. Prin <strong>formularul de contact</strong>: <strong>numele</strong>, <strong>compania</strong>, <strong>rolul</strong> (opțional), <strong>adresa de email</strong> și <strong>mesajul</strong> pe care îl scrieți. Dacă folosiți în schimb butonul „Rezervați o discuție”, furnizați numele, emailul și orice detalii adăugate la programare — vedeți <a href="#booking">Rezervarea unei discuții</a> mai jos. Nu difuzăm reclame și nu folosim urmărire invazivă sau instrumente de analiză de la terți care să vă identifice.`,
      },
      {
        heading: "De ce le colectăm, și temeiul legal",
        html: `Folosim aceste informații într-un singur scop: să citim și să răspundem solicitării dumneavoastră și să continuăm discuția despre o posibilă colaborare. Temeiul legal, conform GDPR, este interesul nostru legitim de a răspunde persoanelor care ne contactează în legătură cu serviciile noastre și — acolo unde inițiați contactul pentru a discuta o colaborare — demersurile făcute la cererea dumneavoastră înainte de încheierea unui contract.`,
      },
      {
        heading: "Transmiterea datelor",
        html: `Nu vă vindem informațiile și nu le transmitem terților pentru scopurile lor proprii. Solicitarea dumneavoastră ajunge la noi fie prin email, fie prin formularele site-ului, care sunt prelucrate de Google și stocate într-un tabel aflat în propriul nostru cont Google; Google, împreună cu furnizorii de email și de găzduire care transportă mesajul, acționează exclusiv ca persoane împuternicite, în numele nostru. Această prelucrare poate implica transferuri în afara SEE, în baza garanțiilor Google.`,
      },
      {
        id: "booking",
        heading: "Rezervarea unei discuții",
        html: `Butonul „Rezervați o discuție” deschide o pagină de programări furnizată de Google Calendar. Dacă rezervați acolo o discuție, detaliile introduse — numele, emailul și orice altceva adăugați — sunt prelucrate de Google pentru funcționarea programării, conform <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politicii de confidențialitate a Google</a>, și pot fi transferate pe servere din afara SEE, inclusiv în Statele Unite. Noi primim aceste detalii doar pentru a stabili și a ține întâlnirea cu dumneavoastră. Dacă preferați să nu folosiți Google, scrieți-ne direct la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "Cât timp le păstrăm",
        html: `Păstrăm corespondența doar atât cât este necesar pentru a trata solicitarea și, unde este cazul, pe durata colaborării care urmează — după care este ștearsă. Dacă o discuție nu duce nicăieri, o ștergem de îndată ce este limpede că nu mai este necesară.`,
      },
      {
        heading: "Drepturile dumneavoastră",
        html: `Conform GDPR, aveți dreptul de acces la datele personale pe care le deținem despre dumneavoastră, de rectificare dacă sunt greșite, de ștergere, de restricționare sau de opoziție față de prelucrare, precum și dreptul la portabilitatea datelor. Pentru a exercita oricare dintre ele, scrieți la <a href="mailto:${site.email}">${site.email}</a> și vă răspundem în termenul cerut de lege. Aveți, de asemenea, dreptul de a depune o plângere la autoritatea de supraveghere — în România, ANSPDCP.`,
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
    lead: "Baza pe care este furnizat acest site. Un punct de plecare scurt și simplu.",
    updated: "Ultima actualizare: 3 iulie 2026",
    sections: [
      {
        heading: "Despre acest site",
        html: `Acest site este publicat de ${site.name} pentru a ne descrie serviciile și a ne împărtăși gândirea. Este oferit exclusiv cu titlu informativ.`,
      },
      {
        heading: "Fără consultanță și fără contract",
        html: `Nimic de pe acest site nu constituie consultanță profesională, juridică, financiară sau tehnică, și nimic de aici nu formează un contract sau un angajament. Orice colaborare este guvernată de un acord scris separat, convenit cu dumneavoastră în prealabil.`,
      },
      {
        heading: "Proprietate intelectuală",
        html: `Conținutul, marca și designul acestui site aparțin ${site.name}, dacă nu se precizează altfel. Numele de produse și mărcile menționate în proiectele noastre aparțin deținătorilor lor.`,
      },
      {
        heading: "Linkuri",
        html: `Acolo unde acest site trimite către site-uri externe, nu răspundem pentru conținutul sau practicile acestora.`,
      },
      {
        heading: "Contact",
        html: `Aveți întrebări despre acești termeni? Scrieți-ne la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "",
        html: `Acești termeni sunt un punct de plecare concis și pot fi extinși pe măsură ce afacerea crește. Pentru orice colaborare, un acord scris separat are prioritate.`,
      },
    ] as LegalSection[],
  },
} as const;
