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
  : { label: "Începeți o discuție", href: "/contact" };

const assessmentCta: CTA = {
  label: "Începeți cu o evaluare",
  href: "/assessment",
};

export const site = {
  name: "LT Strategy Partners",
  shortName: "LT Strategy",
  domain: "ltstrategypartners.com",
  url: "https://ltstrategypartners.com",
  tagline: "Strategie care dă rezultate.",
  description:
    "Consultant independent în tehnologie și AI pentru conducerea firmelor. Vă ajut să transformați AI-ul, inovația și tehnologia în decizii de afaceri mai bune: găsesc unde aduc valoare reală și duc alegerile potrivite până la rezultate măsurabile.",
  email: "luca.tamas@ltstrategypartners.com",
  phone: "+40734950060",
  phoneDisplay: "+40 734 950 060",
  founder: "Luca-Ștefan Tamaș",
  location: "Iași, România · Lucrez cu clienți din UE și SUA.",
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
  { label: "Servicii", href: "/services" },
  { label: "Proiecte", href: "/#work" },
  { label: "Perspective", href: "/insights" },
  { label: "Despre", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Servicii", href: "/services" },
  { label: "Evaluare", href: "/assessment" },
  { label: "Scorecard", href: "/scorecard" },
  { label: "Proiecte", href: "/#work" },
  { label: "Perspective", href: "/insights" },
  { label: "Despre", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Confidențialitate", href: "/privacy" },
  { label: "Termeni", href: "/terms" },
];

/* --------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Consultant independent în tehnologie și AI",
  headline: "Transformați AI-ul și tehnologia în decizii de afaceri mai bune.",
  subhead:
    "Consultant independent pentru echipele de conducere. Vă ajut să vedeți unde aduc AI-ul și tehnologia un câștig real în firma dumneavoastră — apoi duc alegerile potrivite până la rezultate pe care le puteți măsura.",
  // Role label on the hero portrait name-tag.
  tagRole: "Fondator",
  primaryCta: site.primaryCta,
  secondaryCta: site.assessmentCta,
  trustLine: "Independent · Nivel senior · Rezultatele pe primul loc",
} as const;

/* -------------------------------------------------- The problem we solve */

export const intro = {
  eyebrow: "De ce contează",
  body: "Orice echipă de conducere e presată să „facă ceva cu AI” — și e greu de spus ce pași aduc bani și care sunt doar cheltuială degeaba. Eu sunt partenerul independent care vă ajută să decideți: unde aduc AI-ul și tehnologiile noi valoare reală în firma dumneavoastră, ce să puneți primul pe listă și cum ajungeți la rezultate măsurabile. Nu am niciun produs de vândut și nu vând vorbe frumoase — doar judecată limpede, aplicată deciziilor dumneavoastră.",
} as const;

/* ------------------------------------------------------- Value pillars */

export const pillars = {
  eyebrow: "Ce mă face diferit",
  items: [
    {
      title: "Claritate înainte de cod.",
      body: "Pornesc de la afacerea și cifrele dumneavoastră, nu de la tehnologie. Caut unde există valoare cu adevărat, unde nu există și cât valorează — înainte să scrie cineva o linie de cod.",
    },
    {
      title: "Consiliez și construiesc.",
      body: "Majoritatea firmelor vă lasă o recomandare și pleacă. Eu rămân până la capăt: de la planul de lucru, la o soluție care funcționează în producție, până la impactul măsurat pe cifrele convenite împreună.",
    },
    {
      title: "AI, folosit cu discernământ.",
      body: "AI este doar unul dintre instrumentele disponibile. Îl folosesc acolo unde își merită locul, aleg varianta mai simplă când aceea e mai bună și vă spun limpede care e cazul.",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Services */

export const services = {
  eyebrow: "Ce fac",
  headerTitle: "Un singur partener, cap-coadă.",
  deliverablesLabel: "Ce primiți",
  intro:
    "Un singur partener tehnologic pe tot parcursul — de la consultanță până la livrare, cu specializare puternică în AI — ca strategia și execuția să nu se despartă niciodată.",
  items: [
    {
      title: "Consultanță și supervizare tehnologică",
      body: "Rolul pentru care exist: consultantul tehnologic senior și independent pe care o echipă de conducere îl ține aproape — unde să investească, la ce să spună nu, cum să cheltuiască bine și unde stă riscul real. Nu am niciun produs de vândut și nicio altă agendă în afară de a dumneavoastră.",
      deliverables: [
        "Un consultant la dispoziția dumneavoastră pentru deciziile care contează, între proiecte și după ele",
        "Analiză independentă a direcției, a cheltuielilor, a planurilor, a furnizorilor și a riscurilor",
        "Acces direct la un specialist senior pentru arhitectură, decizia «construim sau cumpărăm» și AI",
      ],
    },
    {
      title: "Oportunitate și strategie",
      body: "Analizez unde pot AI-ul, datele și tehnologia să schimbe veniturile, costurile sau riscul, calculez valoarea în contul de profit și pierdere și separ cele câteva oportunități care merită urmărite de multele care nu merită.",
      deliverables: [
        "O hartă a oportunităților, prioritizată după valoare și efort",
        "Un business case cu cifre pentru fiecare oportunitate principală",
        "Un plan pe etape, cu responsabili și puncte de decizie",
      ],
    },
    {
      title: "Implementare și livrare",
      body: "Proiectez, construiesc, integrez și pun în producție eu însumi soluția, lucrând alături de echipele dumneavoastră, ca priceperea de a o opera să rămână în firmă. Livrez software care funcționează, nu prezentări, și rămân până când e în funcțiune, folosit și predat curat.",
      deliverables: [
        "O soluție funcțională, care rulează în producție",
        "Integrare în sistemele și fluxurile de lucru existente",
        "Documentație și o echipă instruită, care o poate opera fără mine",
      ],
    },
    {
      title: "Performanță operațională",
      body: "Îmbunătățesc procesele și felul de a lucra din jurul tehnologiei, ca beneficiile să apară în cifre și să rămână și după ce plec. Regândesc modul în care se desfășoară munca, apoi las în urmă măsurători care arată dacă funcționează.",
      deliverables: [
        "Procese reproiectate, aliniate noilor instrumente",
        "Un set de indicatori legați de KPI-urile dumneavoastră",
        "O imagine înainte–după a câștigului obținut",
      ],
    },
  ] as Service[],
  ai: {
    eyebrow: "Specializarea",
    title: "AI, aplicat acolo unde chiar se amortizează.",
    body: "AI este zona în care merg cel mai în adâncime: las deoparte entuziasmul general și caut cele câteva locuri unde chiar schimbă ceva, apoi îl construiesc să funcționeze în realitate, nu doar în demo. Am făcut deja exact asta — inclusiv un asistent cu retrieval care rulează integral pe echipamente pe care firma le are deja.",
    points: [
      {
        title: "Unde merită AI-ul banii",
        body: "Un răspuns onest despre ce cazuri de utilizare aduc valoare reală și care sunt doar cheltuială degeaba — cântărite pe cifrele dumneavoastră, înainte să dați vreun ban.",
      },
      {
        title: "Sisteme AI și LLM de producție",
        body: "Asistenți, agenți și automatizări duse dincolo de demo — cu reglarea retrieval-ului, validarea rezultatelor și monitorizarea care le fac demne de încredere.",
      },
      {
        title: "AI responsabil și conform",
        body: "AI privat sau self-hosted acolo unde datele o cer, plus un răspuns clar despre unde vi se aplică EU AI Act — îndrumare practică, nu teorie.",
      },
    ] as Card[],
    note: "Majoritatea colaborărilor încep cu Evaluarea Oportunităților AI — gratuită, cu perimetru fix și onestă în privința locurilor unde AI nu vă va aduce niciun câștig.",
    cta: site.assessmentCta,
  },
} as const;

/* ----------------------------- AI Opportunity Assessment (entry offer) */

export const assessment = {
  eyebrow: "Începeți aici — un prim pas fără risc",
  heading: "Evaluarea Oportunităților AI.",
  body: "Nu știți unde se amortizează de fapt AI-ul în firma dumneavoastră? Începeți aici. În două până la patru săptămâni trec cazurile de utilizare pe care le aveți în vedere prin Gate Zero — controlul go/no-go prin care trece oricum orice sistem ajuns în producție, doar că aplicat înainte să cheltuiți un ban — și primiți un verdict scris pentru fiecare: construiți acum, încă nu sau nu construiți. Inclusiv, spus limpede, unde AI nu se va amortiza pentru dumneavoastră. Perimetru fix. Fără costuri. Nimic de vândut.",
  getHeading: "Ce primiți",
  get: [
    "Un raport scris de 3–5 pagini, pe care îl puteți pune în fața conducerii",
    "Fiecare caz de utilizare, punctat și așezat pe hartă după valoare și viabilitate în producție",
    "Un verdict tranșant pentru cazul principal — cu motivul tehnic din spate",
    "Un nivel de risc provizoriu conform EU AI Act, pentru fiecare caz în parte",
  ],
  priceNote: "Gratuită — o susțin personal, maximum trei pe lună.",
  cta: site.assessmentCta,
} as const;

/* -------------------------- Gate Zero: the /assessment offer page content */

export const assessmentPage = {
  eyebrow: "Evaluarea Oportunităților AI",
  heading: "Înainte să cheltuiți pe AI, aflați verdictul cu care ar începe un audit plătit.",
  lead: "O ședință structurată cu echipa dumneavoastră de conducere și un raport scris, cu priorități limpezi — inclusiv un răspuns tranșant despre unde AI nu se va amortiza pentru dumneavoastră. Gratuită, o susțin personal, cu locuri limitate.",
  heroCta: { label: "Aplicați pentru o evaluare", href: "#apply" } as CTA,
  heroFacts: [
    "45–60 de minute cu echipa de conducere",
    "Una per companie",
    "Fără acces la sisteme",
    "Nimic de vândut",
  ],

  problem: {
    eyebrow: "De ce există",
    heading: "Tiparul din spatele proiectelor AI blocate este un tipar de producție.",
    paragraphs: [
      "Probabil ați văzut deja filmul: un pilot promițător, un furnizor sigur pe el, un demo care a impresionat pe toată lumea — și apoi nimic care să reziste la contactul cu utilizatori reali, date reale și răspundere reală. S&P Global a constatat că, până în 2025, 42% dintre companii renunțaseră la majoritatea inițiativelor lor de AI — aproape întotdeauna după ce banii fuseseră cheltuiți, nu înainte.",
      "Nu sunt eșecuri de strategie, sunt eșecuri de producție: un retrieval care nu se poate ancora în datele pe care le aveți de fapt, rezultate pe care nimeni nu le poate valida, costuri care nu rezistă la scalare și riscuri pe care nimeni nu le-a evaluat înainte de a construi. De aceea, o evaluare care vă merită timpul trebuie să judece producția, nu să bifeze un chestionar de maturitate.",
    ],
  },

  deliverable: {
    eyebrow: "Ce primiți",
    heading: "Raportul Gate Zero.",
    intro: "Trei până la cinci pagini, scrise de mine personal — fără juniori, fără șabloane. Prima pagină e făcută să poată fi trimisă conducerii ca document de sine stătător.",
    items: [
      "O notă de decizie de o pagină, cu verdictul în titlu — nu ascuns la pagina patru",
      "Toate cazurile de utilizare luate în calcul, punctate și așezate pe o singură hartă: valoarea în joc × viabilitatea în producție, fiecare cu eticheta lui de expunere — securitate și EU AI Act",
      "Criteriile porții, scrise formal, pentru cazul principal: construiți acum / încă nu / nu construiți, cu interval de cost, timp până în producție și condițiile în care se oprește",
      "O secțiune întreagă, intitulată „Unde AI nu se va amortiza pentru dumneavoastră” — cu motivul tehnic pentru fiecare nu",
      "Pași următori, printre care și lucruri pe care le puteți face fără să mă angajați",
    ],
    guaranteeLabel: "Garanția, în scris",
    guarantee: "Așteptați-vă la cel puțin un caz de utilizare despre care vă spun să nu îl construiți — sau să nu îl construiți încă — cu motivul tehnic, în scris. Iar dacă toate ideile pe care le aduceți trec cu adevărat de poartă, raportul o spune la fel de limpede. Ce nu va face niciodată e să fabrice un verdict, într-o direcție sau în alta.",
    sampleCta: { label: "Citiți un raport exemplu", href: "/assessment/sample-readout" } as CTA,
  },

  method: {
    eyebrow: "Metoda",
    heading: "Gate Zero: poarta de producție, aplicată înainte să cheltuiți banii.",
    intro: "În ingineria de producție, o poartă (gate) este punctul formal de control go/no-go pe care un sistem trebuie să îl treacă înainte de lansare. Gate Zero aplică aceeași disciplină cazurilor dumneavoastră de utilizare, înainte să se construiască ceva. Șapte dimensiuni, punctate după criterii publicate:",
    dimensions: [
      { name: "Valoare în joc", desc: "Euro sau ore legate de un flux de lucru concret — scenariu de bază conservator, cu ipotezele spuse pe față. Fără proiecții spectaculoase." },
      { name: "Realitatea datelor", desc: "Conținutul-sursă există cu adevărat, e curat și se poate accesa astăzi — sau stă în capul cuiva?" },
      { name: "Ancorare și fezabilitatea retrieval-ului", desc: "Se pot ancora răspunsurile în documentele dumneavoastră adevărate, la o calitate de retrieval pe care un sistem de producție o poate ține?" },
      { name: "Toleranța la erori față de miză", desc: "Unde ajunge un răspuns greșit, cine îl observă și ce rată de eroare poate suporta, sincer, acest flux de lucru?" },
      { name: "Validare și verificabilitate", desc: "Se poate verifica vreodată corectitudinea — automat, prin eșantionare sau printr-o verificare umană care nu anulează câștigul?" },
      { name: "Cost, latență și responsabilitate", desc: "Costul pe operațiune la volum de producție, latența pe care o suportă fluxul de lucru și cine e sunat noaptea după lansare." },
      { name: "Securitate și expunere EU AI Act", desc: "Contactul cu date personale, suprafața de atac, constrângerile de instalare și un nivel de risc provizoriu conform EU AI Act — punctate pentru fiecare caz, din start." },
    ],
    rulesLabel: "Trei reguli, prezente în fiecare raport",
    rules: [
      "Ponderile dimensiunilor sunt fixate înainte de punctarea oricărui caz.",
      "Nu există un „scor de pregătire AI” agregat — dimensiunea cea mai slabă blochează poarta, iar mediile ascund tocmai ce contează.",
      "Fiecare punctaj vine cu un nivel de încredere și cu ipotezele pe care se sprijină.",
    ],
    questionsLabel: "Patru dintre întrebările pe care le pune poarta",
    gateQuestions: [
      "Unde ajunge un răspuns greșit — și cine îl observă?",
      "Ce conținut ar ancora răspunsurile — și cine îl ține la zi?",
      "Ce cost pe interogare și ce latență suportă acest flux de lucru?",
      "Cine deține acest sistem după lansare?",
    ],
    standardsNote: "Punctarea expunerii se raportează la EU AI Act (articolul 6 / anexa III), la NIST AI Risk Management Framework și la OWASP Top 10 pentru aplicații LLM.",
  },

  process: {
    eyebrow: "Cum decurge",
    heading: "Patru pași, două până la patru săptămâni.",
    steps: [
      { name: "Aplicați", time: "10 minute", desc: "Zece întrebări despre firma dumneavoastră, cazurile de utilizare pe care le aveți în vedere și locul în care stau datele. Citesc personal fiecare cerere — iar pe unele le refuz. Acesta e primul verdict și vine înaintea oricărei discuții." },
      { name: "Interviul de rezistență în producție", time: "45–60 de minute", desc: "O ședință structurată cu echipa dumneavoastră de conducere — nu o prezentare de vânzare, nu un chestionar de maturitate. Fiecare caz de utilizare trece prin întrebările pe care producția le va pune oricum. Doar discuție ghidată: fără parole, fără acces la sisteme, nimic nu iese din firma dumneavoastră." },
      { name: "Se scrie raportul", time: "într-o săptămână", desc: "Fiecare caz este punctat pe cele șapte dimensiuni Gate Zero și așezat pe o singură hartă valoare–viabilitate. Îl scriu eu, cu cifrele și cu vocabularul dumneavoastră." },
      { name: "Discuția despre verdict", time: "30 de minute", desc: "Primiți raportul și un răspuns tranșant pentru cazul principal: construiți acum, încă nu — și exact ce l-ar debloca — sau nu construiți. Documentul rămâne al dumneavoastră, oricare ar fi răspunsul." },
    ],
  },

  whyFree: {
    eyebrow: "De ce e gratuită",
    heading: "E un diagnostic, nu tratamentul.",
    body: "Așa decidem dacă are rost să lucrăm împreună. Primiți verdictul și ordinea priorităților; munca propriu-zisă intră în proiectele plătite. Rămâne gratuită tocmai pentru că e limitată: eu susțin fiecare discuție și eu scriu fiecare raport — cel mult trei evaluări pe lună, una per companie, o singură dată.",
    branches: [
      { name: "Dacă verdictul e da", desc: "și ne potrivim, raportul leagă fiecare lipsă rămasă de proiectul care o acoperă. Veți ști cum arată pasul următor înainte să vă angajați la ceva." },
      { name: "Dacă verdictul e nu", desc: "păstrați raportul, nu urmează nicio serie de e-mailuri și aici se termină — dacă nu îmi scrieți chiar dumneavoastră. Un „nu” urmat de e-mailuri insistente ar goli verdictul de orice valoare." },
    ],
  },

  fit: {
    eyebrow: "Potrivire",
    heading: "Pentru cine este — și pentru cine nu.",
    forLabel: "Este pentru dumneavoastră dacă",
    notForLabel: "Nu este dacă",
    forWho: [
      "Echipe de conducere care au cel puțin un caz de utilizare AI în vedere și un flux de lucru real în joc",
      "Companii cu un pilot blocat, o lansare riscantă sau cheltuieli pe AI care nu produc rezultate",
      "Firme din UE sau cu expunere în UE, care au nevoie de partea de AI Act, nu doar de cea de valoare",
      "Firme cu date sensibile, care cântăresc ce are voie și ce nu are voie să iasă din companie",
    ],
    notForWho: [
      "Companii care caută un plan de implementare gratuit — acesta este un verdict, nu un proiect tehnic",
      "Echipe fără un sponsor executiv dispus să participe la sesiune",
      "Oricine caută validarea unei decizii deja luate — unele rapoarte spun „nu construiți”, iar al dumneavoastră ar putea fi printre ele",
    ],
  },

  whoRuns: {
    eyebrow: "Cine o face",
    heading: "Metoda există pentru că acestea sunt verificările pe care le fac oricum înainte să pun ceva în producție.",
    facts: [
      "Construiesc sisteme AI și LLM care ajung în producție — reglarea retrieval-ului, validarea rezultatelor, monitorizare, bugete de cost și latență",
      "Am construit un asistent AI self-hosted, cu retrieval, care rulează complet offline pe echipamente pe care o firmă le are deja",
      "Inginer de securitate pe sisteme de producție, cu experiență în protecția datelor",
      "Am fondat două produse SaaS; arhitect principal al unei platforme enterprise multi-tenant",
    ],
    link: { label: "Mai multe despre Luca", href: "/about" } as CTA,
  },

  positioning: {
    heading: "Nu e un chestionar. Nu e un teanc de prezentări.",
    body: "Nu e un chestionar de zece minute cu punctaj automat și nici o evaluare de sute de mii de euro făcută de analiști juniori. E verdictul pe cazuri de utilizare cu care ar începe un audit plătit, dat personal de omul care ar și construi sistemul. Nu vând cloud, nu vând hardware și nu vând licențe — un „nu construiți” nu mă costă nimic, și doar așa un „construiți” înseamnă ceva.",
    noLockIn: "Raportul e scris ca să vă fie de folos și dacă nu mă angajați niciodată.",
  },

  apply: {
    eyebrow: "Aplicați",
    heading: "Aplicați pentru o evaluare.",
    intro: "Zece întrebări, cam zece minute. Citesc personal fiecare cerere — pe unele le refuz, și acesta e primul verdict. Dacă o accept, primiți agenda exactă a discuției și un raport-exemplu înainte să blocați o oră din timpul echipei de conducere.",
    microcopy: "Gratuită · una per companie · cel mult trei pe lună · doar discuție ghidată, fără acces la sisteme",
    submitLabel: "Trimiteți cererea",
  },
} as const;

/* ------------------------------------------------ Your data & IP */

export const dataIp = {
  id: "data-ip",
  eyebrow: "Datele dumneavoastră și proprietatea intelectuală",
  heading: "Construit de un inginer de securitate — tratat ca atare.",
  body: "Vin din securitate și protecția datelor — inginerie de securitate pe sisteme de producție și, înainte de asta, cercetare în autentificare și criptare. Disciplina aceasta se vede în felul în care lucrez cu dumneavoastră.",
  items: [
    {
      title: "Datele dumneavoastră rămân ale dumneavoastră.",
      body: "Accesez doar ce cere proiectul, lucrez fără rezerve sub NDA-ul dumneavoastră și pot lucra în întregime în mediul dumneavoastră.",
    },
    {
      title: "Dețineți ce construiesc.",
      body: "Codul, modelele și documentația sunt ale dumneavoastră, cu o predare curată, ca echipa dumneavoastră să poată duce totul mai departe fără mine.",
    },
    {
      title: "Securizat din proiectare.",
      body: "Izolarea tenanților, accesul cu privilegii minime și gestiunea secretelor se decid în faza de proiectare — nu se cârpesc pe urmă.",
    },
    {
      title: "AI folosit responsabil.",
      body: "Unde contează confidențialitatea, pot rula AI on-premise sau self-hosted; unde contează corectitudinea, țin rezultatele modelului în spatele unui strat de validare.",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Approach */

export const approach = {
  eyebrow: "Cum lucrez",
  intro: "Un parcurs disciplinat, de la întrebare la rezultat.",
  steps: [
    {
      n: "01",
      title: "Diagnostic",
      body: "Înțeleg obiectivele, operațiunile, datele și limitările firmei dumneavoastră, apoi vă prezint tabloul complet, în termeni simpli.",
      output: "O imagine limpede și onestă a locului în care sunteți și a ce vă stă în cale.",
    },
    {
      n: "02",
      title: "Prioritizare",
      body: "Aleg oportunitățile cu valoarea cea mai mare și fac calculul de rentabilitate pentru fiecare. Mai puține direcții, dar mai bune.",
      output: "O listă scurtă de investiții evaluate și ordonate, cu criterii de succes stabilite împreună.",
    },
    {
      n: "03",
      title: "Implementare",
      body: "Proiectez și construiesc pragmatic, împreună cu echipele dumneavoastră. Predau software care funcționează, nu prezentări.",
      output: "Un sistem care rulează în producție și e folosit de oamenii pentru care a fost făcut.",
    },
    {
      n: "04",
      title: "Dovadă și scalare",
      body: "Măsor rezultatul față de cifrele stabilite la început, fixez ce funcționează și îl duc mai departe.",
      output: "Rezultate dovedite pe KPI-urile dumneavoastră și un plan pentru a extinde ce a funcționat.",
    },
  ] as Step[],
} as const;

/* ----------------------------------------------------- Statement band */

export const statement = {
  headline: "Mă judecați după rezultate, nu după livrabile.",
  support:
    "Fiecare proiect este legat de rezultate pe care le puteți măsura — și vă spun adevărul despre ce funcționează.",
} as const;

/* --------------------------------------------------- Testimonials */
export const testimonials: Testimonial[] = [];

export const testimonialsMeta = {
  eyebrow: "Ce spun clienții",
  heading: "În cuvintele lor.",
} as const;

/* ------------------------------------------------- Who we work with */

export const clients = {
  eyebrow: "Cu cine lucrez",
  body: "Lucrez cu toată firma, nu doar cu vârful ei. Ca o schimbare să reziste, oamenii care dau direcția și oamenii care fac treaba trebuie să meargă în același sens — de aceea mă implic la fiecare nivel, de la conducere până la echipele din teren.",
  levels: [
    {
      role: "Consiliul de administrație și conducerea executivă",
      detail: "CEO, COO, CTO și CIO — cei care dau direcția și decid unde se duc banii.",
    },
    {
      role: "Șefii de departamente",
      detail: "Oamenii care conduc operațiunile, financiarul, produsul și tehnologia — cei care răspund de rezultate.",
    },
    {
      role: "Echipele care fac treaba",
      detail: "Managerii, analiștii și inginerii care construiesc, folosesc și țin totul în funcțiune, zi de zi.",
    },
  ],
} as const;

/* ------------------------------------------- About: homepage teaser */

export const aboutTeaser = {
  eyebrow: "Cine e în spate",
  heading: "Un singur om. Implicare directă.",
  body: "În spatele LT Strategy Partners este Luca-Ștefan Tamaș — inginer de sisteme care construiește și duce în producție AI, de la sisteme LLM self-hosted, cu retrieval, până la produse SaaS complete. Lucrează pe sisteme de producție într-un mediu exigent, critic pentru securitate, a fost arhitectul principal al unei platforme enterprise multi-tenant (BI, ERP, gestiunea documentelor, automatizarea proceselor) și a fondat două produse SaaS proprii. Lucrați direct cu el: omul care vă dă sfatul este omul care face treaba.",
  link: { label: "Mai multe despre Luca", href: "/about" } as CTA,
  photoCaption: "Luca-Ștefan Tamaș · Fondator",
} as const;

/* ------------------------------------------------- About: full page */

export const aboutPage = {
  eyebrow: "Despre",
  heading: "Un partener implicat, de la început până la final.",
  paragraphs: [
    "Sunt Luca-Ștefan Tamaș, iar LT Strategy Partners este firma prin care lucrez. E mică intenționat: nu o agenție, nu o echipă — când apelați la LT Strategy Partners, lucrați direct cu mine. Omul care dă sfatul este omul care face treaba și răspunde pentru cum iese.",
    "De formație sunt inginer de sisteme. Partea la care țin cel mai mult — și în jurul căreia am construit tot ce fac — este AI-ul care trebuie să reziste în producție, nu doar în demo: retrieval solid și date curate, rezultate trecute prin validare, latență și costuri rezonabile, plus monitorizarea și soluțiile de rezervă care țin un sistem de încredere atunci când oameni reali chiar depind de el.",
    "Zi de zi lucrez pe sisteme de producție într-un mediu de inginerie exigent, critic pentru securitate. Înainte am fost arhitectul principal al unei platforme enterprise multi-tenant care acoperă business intelligence, ERP, gestiunea documentelor și automatizarea proceselor. Am fondat și dus la capăt două produse SaaS proprii — Mazely și Processly — și am construit un asistent AI self-hosted, cu retrieval, care rulează complet offline pe echipamentele pe care un local le are deja. Din 2020 lucrez pentru clienți, cap-coadă, în web, mobil, date și AI, inclusiv aplicații publicate în App Store și Google Play. Din această bază de securitate și de platforme vine faptul că AI-ul pe care îl construiesc rămâne privat și de încredere din start.",
  ],
  beliefsHeading: "Ce cred despre munca asta",
  beliefs: [
    "Cred că software-ul și infrastructura digitală sunt printre cele mai bune investiții pe care le poate face o firmă — dar numai dacă sunt făcute cu cap. Destule firme cheltuiesc mult și se iau după ce e la modă, apoi se întreabă de ce banii nu s-au văzut niciodată în profit. Tehnologia e rar partea grea. Randamentul vine din a cheltui pe lucrul potrivit, din motivul potrivit, în ordinea potrivită — și exact partea asta se sare cel mai des.",
    "Mai cred că nimic nu costă mai puțin decât discuția de dinainte de a începe. O conversație scurtă și sinceră cu cineva care a construit astfel de sisteme vă poate scuti luni de muncă și mult buget — pentru că prinde din start problema pusă greșit, lasă deoparte ideea care nu se amortizează și vă arată cel mai simplu lucru care chiar funcționează. Exact de aceea primul pas pe care îl propun nu costă nimic.",
  ],
  whyHeading: "Cum îmi place să lucrez",
  why: "Prefer să fiu util, nu impresionant. Pentru că am dus astfel de sisteme până la capăt, în condiții reale, vă pot spune deschis ce merită făcut, ce nu și cât costă de fapt — și nu vă recomand nimic ce nu m-aș apuca să construiesc eu.",
  glanceHeading: "Pe scurt",
  glance: [
    "Construiesc sisteme AI și LLM de producție — retrieval-augmented generation, modele self-hosted și rezultate trecute prin validare",
    "Am construit un asistent AI self-hosted, complet offline; am fondat două produse SaaS aflate în producție (Mazely, Processly)",
    "Inginerie de sisteme de producție într-un mediu critic pentru securitate; arhitect principal al unei platforme multi-tenant de BI / ERP / DMS / automatizare de procese",
    "Fundament de securitate și protecția datelor: autentificare, criptare, privilegii minime și izolarea tenanților",
    "Certificări de date și analiză (Meta Data Analyst, Google Business Intelligence, Advanced SQL, Tableau); certificări de securitate (SOC Level 1, DevSecOps, Jr Penetration Tester)",
    "Cu sediul în Iași · lucrez cu clienți din UE și SUA",
  ],
  photoCaption: "Luca-Ștefan Tamaș · Fondator",
  ctaHeading: "Unde se ascunde valoarea în firma dumneavoastră?",
} as const;

/* ------------------------------------------------------- CTA (pre-footer) */

export const ctaBand = {
  headline: "Unde se ascunde valoarea în firma dumneavoastră?",
  body: "Vă propun o discuție directă, fără presiune, despre unde ar putea AI-ul și tehnologia să vă schimbe cu adevărat cifrele.",
  cta: site.primaryCta,
} as const;

/* ----------------------------------------------------------------- FAQ */

export const faq = {
  eyebrow: "Întrebări frecvente",
  heading: "Primele întrebări pe care le primesc.",
  items: [
    {
      q: "Cum începem?",
      a: "Cu o Evaluare a Oportunităților AI, cu perimetru fix — un prim pas fără risc, după care rămâneți cu un plan prioritizat, care vă aparține.",
    },
    {
      q: "Cum stabiliți prețul?",
      a: "Evaluarea Oportunităților AI este gratuită. Pentru proiectele mai mari stabilesc perimetrul și prețul de la început, per proiect.",
    },
    {
      q: "Lucrați la distanță?",
      a: "Da — am clienți în UE și în SUA, iar în România vin și la sediul dumneavoastră, când ajută.",
    },
    {
      q: "Suntem la început cu AI. E prea devreme?",
      a: "Nu. Evaluarea este gândită exact pentru acest punct de plecare.",
    },
    {
      q: "Cine face efectiv munca?",
      a: "Eu. Nu există juniori cărora să pasez munca — lucrați direct cu mine, în fiecare proiect.",
    },
    {
      q: "Cum tratați datele și proprietatea noastră intelectuală?",
      a: "Datele dumneavoastră rămân ale dumneavoastră, dețineți tot ce construiesc, iar securitatea se decide din faza de proiectare.",
      href: "/#data-ip",
    },
  ] as FaqItem[],
} as const;

/* ------------------------------------------------------------ Contact */

export const contact = {
  eyebrow: "Contact",
  headline: "Să vorbim deschis.",
  intro:
    "Spuneți-mi câteva lucruri despre firma dumneavoastră și despre ce ați vrea să schimbați. Vă răspund personal — fără discurs de vânzare, fără presiune.",
  email: site.email,
  phone: site.phone,
  phoneDisplay: site.phoneDisplay,
  location: site.location,
  fields: [
    { name: "name", label: "Nume", type: "text", required: true, autocomplete: "name" },
    { name: "company", label: "Companie", type: "text", required: true, autocomplete: "organization" },
    { name: "role", label: "Rol", type: "text", required: false, autocomplete: "organization-title" },
    { name: "email", label: "Email", type: "email", required: true, autocomplete: "email" },
    { name: "message", label: "Cu ce vă pot ajuta?", type: "textarea", required: true },
  ] as FormField[],
  prefills: {
    assessment: "Aș dori o Evaluare a Oportunităților AI.",
  } as Record<string, string>,
  submitLabel: "Trimiteți mesajul",
  asideEyebrow: "Linie directă",
  asideLead: "Preferați emailul sau vreți să mă contactați direct?",
  asidePoints: [
    "Consultanță independentă, la nivel senior.",
    "Răspuns în cel mult două zile lucrătoare.",
    "Fără discurs de vânzare, fără presiune.",
  ],
  privacyHtml:
    'Vă folosesc datele doar ca să vă răspund și nu le transmit niciodată altcuiva. Vedeți <a href="/privacy">politica de confidențialitate</a>.',
  successMessage:
    "Mulțumesc — mesajul dumneavoastră este gata de trimis. Vă răspund personal în cel mult două zile lucrătoare.",
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
    "Consultant independent care nu doar recomandă, ci și construiește. Ajut conducerea firmelor să transforme strategia — și AI-ul, acolo unde își merită locul — în rezultate măsurabile.",
} as const;

/* --------------------------------------------------------- Insights */

export const insights = {
  eyebrow: "Perspective",
  heading: "Idei limpezi despre AI și tehnologie.",
  intro:
    "Texte scurte și practice pentru antreprenori și manageri, nu pentru ingineri: despre cum scoateți valoare reală din AI și tehnologie.",
} as const;

/* ------------------------------------------------- Selected work / portfolio */

export const work = {
  eyebrow: "Proiecte alese",
  intro:
    "Câteva lucruri pe care le-am proiectat și construit. Le arăt ca să fie limpede un singur lucru: nu dau doar sfaturi — construiesc. Mai jos, ce a cerut fiecare, tehnic și strategic, și ce înseamnă pentru ce am putea face împreună.",
  projects: [
    {
      slug: "processly",
      name: "Processly",
      tagline: "Proiectați procesul o dată. Rulați-l de câte ori vreți.",
      category: "Automatizarea fluxurilor de lucru",
      kind: "product",
      label: "Produs · construit cap-coadă",
      accent: "#111214",
      heroDark: true,
      oneLiner:
        "O platformă care transformă activitățile care se repetă în procese vizuale, pe care echipele le pornesc oricând, cu un singur clic",
      overview:
        "Processly este o aplicație web pentru coordonarea vizuală a proceselor și a proiectelor. Fluxul de lucru se desenează o singură dată, apoi din el se generează proiecte — cu un singur clic, după un calendar sau în ambele feluri. Ideea e ca procesele să rămână ale firmei și să se vadă limpede cum rulează munca.",
      context:
        "Aceeași muncă se reproiectează și se reia manual de fiecare dată, iar felul în care se lucrează rămâne în capul câtorva oameni și în câteva prezentări. Processly transformă munca care se repetă în sisteme care se refolosesc.",
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
        "Arată că pot transforma munca manuală care se repetă la un client în sisteme proiectate și refolosibile, care pornesc la comandă sau după calendar — iar echipa de operațiuni câștigă consecvență și vizibilitate fără să se mărească.",
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
        "Orientare în clădiri mari, cu indicații pe bază de fotografii — fără aplicație și fără echipamente",
      overview:
        "Mazely este o platformă de orientare în interiorul clădirilor mari: sedii publice, universități, spitale, instituții. Vizitatorul scanează un cod QR și primește indicații pas cu pas, făcute din fotografii reale ale coridoarelor, fără să instaleze nimic și fără echipamente montate în clădire. Un panou de administrare acoperă desenarea etajelor, gestiunea codurilor QR și analiza traseelor.",
      context:
        "În clădirile mari, vizitatorii se rătăcesc, iar angajații pierd timp îndrumându-i. Instituția nu știe nici pe unde circulă oamenii prin propriile spații.",
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
        "Arată că pot proiecta și duce până la capăt un produs atent la confidențialitate pentru instituții mari: scapă oamenii de timpul pierdut zilnic și, în același timp, produce date operaționale utile. Aceeași abordare merge oriunde un spațiu fizic are nevoie de un strat digital simplu peste el.",
      image: "mazely",
    },
    {
      slug: "restaurant-ai",
      name: "Asistentul de Meniu pentru Restaurante",
      tagline: "AI aplicat, care rulează pe echipamentele restaurantului.",
      category: "AI aplicat",
      kind: "build",
      label: "Sistem self-hosted",
      accent: "#C2410C",
      oneLiner:
        "Un asistent de meniu cu AI, instalat la restaurant, care răspunde întrebărilor clienților și merge fără internet",
      overview:
        "Asistentul de Meniu pentru Restaurante este un sistem AI instalat pe echipamentele localului. Are două părți: un chat gândit pentru chioșcuri și tablete, care îi ajută pe clienți să găsească preparate după gust sau după restricții alimentare, și un panou de administrare pentru produse, categorii, prețuri în mai multe valute, reduceri și imagini. Răspunde folosind retrieval-augmented generation peste meniul propriu al restaurantului și, după instalare, rulează în întregime în rețeaua locală.",
      context:
        "Restaurantele vor un ajutor AI pentru clienți, dar fără să-și trimită meniul în cloud și fără să plătească pentru fiecare întrebare pusă. Proiectul răspunde exact la asta: cum ajunge AI-ul util și privat pe echipamente pe care localul le are deja.",
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
        "Arată că pot construi AI cu căutare în date proprii, care rulează privat, pe echipamente pe care firma le are deja — cu memoria calculată, verificările automate de funcționare și disciplina de backup fără care nu ține în lumea reală.",
      diagram: true,
    },
    {
      slug: "atlas-economic",
      name: "Atlas Economic",
      tagline: "Banii publici, județ cu județ.",
      category: "Date și analiză",
      kind: "analysis",
      label: "Analiză independentă · microsite public",
      accent: "#2f6db0",
      oneLiner:
        "Un microsite public care arată cum circulă banii din achiziții publice între toate cele 42 de județe ale României, construit exclusiv din date deschise",
      overview:
        "Atlas Economic răspunde la o întrebare pe care nicio instituție din România nu o publică: pentru fiecare județ, cât din valoarea atribuită de autoritățile contractante de acolo rămâne la firme cu sediul în județ, unde pleacă restul și cât câștigă firmele locale de la autorități din alte județe. Am legat trei surse deschise — sistemul de achiziții publice, registrul comerțului și nomenclatorul oficial al localităților — într-un registru simetric, cu câte o pagină pentru fiecare județ, pe care oricine o poate deschide și verifica. Este un proiect propriu, făcut ca să arăt metoda, nu pentru un client; de aceea sunt publice și prelucrarea, și metodologia, și pista de audit.",
      context:
        "Datele brute sunt publice, dar inutilizabile așa cum apar: anunțurile de atribuire nu spun în ce județ e autoritatea, instituțiile publice nu figurează în registrul comerțului, plafoanele acordurilor-cadru par cheltuieli reale, iar același contract apare o dată pentru fiecare membru al asocierii. Un răspuns cere ca fiecare autoritate să fie dusă în județul ei, fiecare furnizor la sediul lui și toți banii într-un registru care se închide.",
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
        "43.591 de contracte analizate (65,38 mld RON), din care 37,45 mld atribuite unui județ anume",
        "42 de județe acoperite cu aceeași metodologie",
        "Trei runde de verificare adversarială, cu doisprezece recenzenți independenți; două reimplementări de la zero au reprodus fiecare cifră publicată",
      ],
      takeaway:
        "Este cea mai clară demonstrație a felului în care lucrez cu datele: iau surse publice, dar inutilizabile, leg entitățile pe care nimeni nu le-a pus până acum împreună și public rezultatul cu limitele declarate — ca cifrele să reziste la verificare, nu să cedeze la prima întrebare.",
      image: "atlas",
      liveUrl: "/atlas/",
      liveLabel: "Deschide Atlasul",
    },
    {
      slug: "atlas-company-report",
      name: "Atlas · Raport de firmă",
      tagline: "Un CUI la intrare, un dosar complet la ieșire.",
      category: "Date și analiză",
      kind: "product",
      label: "Produs propriu · pe aceleași date ca Atlasul",
      accent: "#285c97",
      oneLiner:
        "Un generator fără bază de date care transformă un singur CUI într-un dosar complet de firmă — unsprezece ani de situații financiare, poziția în sector, un scor de risc de insolvență și expunerea la bani publici — numai din date deschise",
      overview:
        "Îi dați un CUI și scoate un raport de paisprezece secțiuni: identitate și stare juridică din registrul comerțului, statut fiscal interogat pe loc la ANAF, unsprezece exerciții financiare depuse, poziția față de toate firmele din aceeași diviziune CAEN, mărimea pieței și cota firmei, indicatori derivați comparați cu mediana sectorului, un scor de risc de insolvență și expunerea la achiziții publice pe ambele căi — licitații și achiziții sub prag. Merge pe aceleași date ca Atlasul, fără bază de date și fără server: caută direct în fișierele brute ale statului, pentru că un CUI este unic și o scanare îl găsește în 2 GB în mai puțin de o secundă. Distribuțiile pe sector — singurul lucru pe care o astfel de căutare nu îl poate afla — se calculează o dată, în avans.",
      context:
        "Sursele sunt publice și, luate una câte una, aproape inutilizabile. Situațiile financiare se publică drept douăzeci de indicatori numerotați, fără nume de coloane, în trei formate diferite de-a lungul anilor. Datoriile apar ca o sumă totală, așa că nicio rată de lichiditate nu poate fi calculată după definiția din carte. Nu există costul bunurilor vândute și nu există rezultat reportat, deci doi indicatori clasici și două componente Altman trebuie înlocuite cu aproximări. Arhiva de achiziții scrie data contractului în patru feluri și lasă 98.064 dintre ele goale. Nimic din toate acestea nu e scris nicăieri: trebuie descoperit pe teren, iar fiecare defect pierde date în tăcere, în loc să dea o eroare.",
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
        "Raportul este partea care se vede. Ce arată de fapt este o disciplină: fiecare cifră se poate urmări până la fișierul-sursă, fiecare aproximare e spusă pe nume, împreună cu direcția erorii, iar la final trec totul printr-o verificare care pornește de la ideea că propriul meu rezultat e greșit până rezistă la o recalculare pe alt drum.",
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
      category: "Date și analiză",
      kind: "analysis",
      label: "Analiză independentă",
      accent: "#4F63D2",
      oneLiner:
        "Un tablou de bord în Metabase care transformă telemetria transportului public al unui oraș în decizii de zi cu zi",
      overview:
        "Un tablou de bord în timp real pentru flota de transport public a Iașiului, construit în Metabase peste date GPS și de telemetrie. Acoperă 238 de vehicule — autobuze și tramvaie — și urmărește într-un singur loc viteza, siguranța, accesibilitatea și aglomerația. Arată cum telemetria brută a flotei devine o imagine limpede, pe baza căreia o autoritate de transport poate lua decizii.",
      context:
        "Operatorii de transport public primesc fără oprire date GPS și de telemetrie, dar rar le folosesc în deciziile de zi cu zi. Greul este transformarea pozițiilor și vitezelor brute în informații pe care se poate lucra: eficiență, siguranță, conformitate.",
      delivered: [
        "O hartă în timp real cu poziția vehiculelor, pentru toată flota orașului",
        "Structura flotei: 238 de vehicule (63% autobuze, 37% tramvaie / metrou ușor)",
        "Indicatori de eficiență a circulației: viteza medie pe intervale orare și pe categorii (autobuze 27,35 km/h, tramvaie 17,52 km/h), plus o histogramă a vitezelor",
        "Cât din flotă e accesibil cu scaunul rulant (71,85%) și cu bicicleta (10,08%)",
        "O hartă a punctelor de aglomerație și un tabel cu 58 de depășiri de viteză înregistrate, cu valori extreme de până la 141 km/h — peste 50 km/h în plus față de limită",
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
      stack: ["Metabase (dashboard / BI)", "SQL", "Flux de date GPS / telemetrie"],
      takeaway:
        "Arată că pot lua date brute de senzori și telemetrie și le pot transforma în tablouri de bord pe baza cărora se iau decizii reale — util oricărui client care are o flotă, o rețea sau un flux constant de date operaționale.",
      image: "transit-map",
      gallery: ["transit-charts", "transit-speeding"],
    },
  ] as WorkProject[],
} as const;

/* ------------------------------------------ Supporting-route intro copy */

export const pageIntros = {
  services: {
    eyebrow: "Servicii",
    title: "De la conducere până în producție.",
    lead: "Un singur partener senior pe tot parcursul — strategie, implementare și schimbarea din operațiuni fără care rezultatul nu rezistă. Fără predări de la o echipă la alta, fără ruptură între plan și oamenii care îl duc la capăt.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Să vorbim deschis.",
    lead: "Spuneți-mi câteva lucruri despre firma dumneavoastră și despre ce ați vrea să schimbați. Vă răspund personal — fără discurs de vânzare, fără presiune.",
  },
} as const;

/* ------------------------------------------------ AI & Tech Opportunity Scorecard */

export const scorecardPage = {
  eyebrow: "Verificare gratuită · circa 3 minute",
  heading: "Merită deja o investiție în AI sau în tehnologie nouă pentru firma dumneavoastră?",
  lead: "Zece întrebări simple, fără jargon, fără cont ca să începeți. Primiți un răspuns onest la întrebarea dacă o investiție în AI sau în tehnologie s-ar amortiza chiar acum într-o firmă ca a dumneavoastră — și, la fel de des, unde ar fi mai înțelept să reparați întâi altceva. Nu e un scor de maturitate care să vă facă să vă simțiți în urmă. E un răspuns direct despre unde ar lucra de fapt banii dumneavoastră.",
  microcopy: "Nu e nevoie de cont ca să răspundeți. Vă cer un email doar dacă doriți varianta scrisă, mai amplă.",
  dataGateQuestionIndex: 2,
  dataGateNote:
    "Un lucru, înainte de toate: chiar acum, informația de care ați avea nevoie stă mai ales în capul oamenilor și în e-mailuri. Până nu ajunge într-un loc de unde un sistem o poate citi, nicio investiție în AI sau tehnologie nu se poate amortiza — asta e singurul lucru care merită rezolvat înainte să cheltuiți pe orice altceva de mai jos.",
  q10Note:
    "Aici nu există răspuns greșit — miza mare nu îi este interzisă AI-ului, doar cere o construcție mai atentă. Această întrebare schimbă recomandarea, nu verdictul.",
  questions: [
    {
      q: "Cât din săptămâna echipei se duce în muncă manuală și repetitivă, după reguli — date reintroduse de mână, aceleași rapoarte formatate din nou, aceleași întrebări la care se răspunde iar, informație mutată dintr-un program în altul?",
      options: [
        { label: "Aproape nimic la care să pot arăta cu degetul", points: 0 },
        { label: "Ceva, dar împrăștiat între mai mulți oameni", points: 4 },
        { label: "O parte clară — câteva ore de persoană, în fiecare săptămână", points: 7 },
        { label: "Mult — e un cost real, iar unii oameni sunt angajați parțial ca să o facă", points: 10 },
      ],
    },
    {
      q: "Există o problemă anume, pe care o puteți numi, pe care sperați că AI-ul sau tehnologia ar rezolva-o?",
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
        { label: "Parțial — ceva adopție, multă rezistență", points: 4 },
        { label: "Bine — oamenii chiar l-au adoptat și face parte din felul în care lucrăm acum", points: 10 },
      ],
    },
    {
      q: "Există o presiune din afara companiei în această direcție?",
      options: [
        { label: "Nimic la care să putem arăta — e curiozitate internă", points: 0 },
        { label: "Simțim că încep să se miște concurenții", points: 5 },
        { label: "Clienți sau parteneri ne-o cer", points: 8 },
        { label: "Un contract, o afacere sau o cerință anume depinde de asta", points: 10 },
      ],
    },
    {
      q: "Dacă oportunitatea potrivită ar fi clară, ce ați putea aloca realist pentru ea în următoarele 6–12 luni?",
      options: [
        { label: "Nimic pus deoparte — ar trebui să găsim resursele", points: 0 },
        { label: "Un buget mic, doar pentru un experiment", points: 4 },
        { label: "Un buget real, dar modest, pentru un singur proiect concentrat", points: 7 },
        { label: "Buget aprobat, gata să pornim pe direcția potrivită", points: 10 },
      ],
    },
    {
      q: "Dacă ați porni ceva, cine ar fi responsabil de el în companie?",
      options: [
        { label: "Nimeni anume — ne-am ocupa toți pe lângă sarcinile zilnice", points: 0 },
        { label: "Cineva ar putea, peste sarcinile lui zilnice", points: 4 },
        { label: "Avem pe cineva care s-ar putea ocupa, cu puțin sprijin", points: 7 },
        { label: "Un responsabil clar, cu timpul și autoritatea de a-l duce la capăt", points: 10 },
      ],
    },
    {
      q: "Cum se iau de obicei deciziile de acest fel la dumneavoastră?",
      options: [
        { label: "Greu — mulți decidenți și un „da” care nu vine ușor", points: 2 },
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
        { label: "Ar putea fi periculos ori grav din punct de vedere legal sau financiar — nu e loc de greșeală", points: 2 },
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
      body: "Chiar acum, o investiție în AI sau într-o tehnologie mare ar fi, cel mai probabil, bani cheltuiți înaintea problemei. Nu e o critică — e cea mai ieftină lecție pe care o veți primi vreodată, pentru că o învățați înainte de factură, nu după. Primul pas onest nu e un instrument. E să puneți un lucru la punct: o problemă care merită numită, informație la care un sistem poate ajunge cu adevărat sau cineva care poate duce munca. Rezolvați asta și se deschid multe opțiuni, ieftin. Cheltuiți acum peste ea și veți fi, probabil, printre companiile care lasă proiectul deoparte un an mai târziu. Reveniți și reluați testul când terenul e mai solid — veți vedea cum se mișcă scorul.",
    },
    {
      slug: "real-seed",
      min: 35,
      max: 59,
      name: "O sămânță reală, încă nu un proiect",
      headline: "Aveți aici ceva care merită conturat.",
      body: "Aveți începutul unei oportunități reale — dar e încă o sămânță, nu un plan, iar cea mai rapidă cale de a arunca bani acum e să săriți la soluție înainte de a măsura problema. Mișcarea care se amortizează cu adevărat: luați singurul flux de lucru care vă costă cel mai mult, scrieți negru pe alb cât vă costă azi, în ore sau în euro, și fiți sinceri în privința locului unde stau datele pentru el. Faceți asta și fie găsiți o investiție care merită făcută, fie vă scutiți de un proiect care oricum nu avea cum să iasă. Dacă v-ar ajuta să vedeți care dintre cele două e situația, exact pentru asta există Evaluarea gratuită a Oportunităților AI.",
    },
    {
      slug: "strong-candidate",
      min: 60,
      max: 79,
      name: "Candidat serios",
      headline: "Merită o privire serioasă.",
      body: "Aveți cea mai mare parte din ce cere un astfel de proiect — o problemă reală, date utilizabile și destulă pregătire ca să acționați. Riscul, în acest punct, nu e să nu faceți nimic; e să construiți bine lucrul greșit sau să alegeți cazul care arată superb în demo și moare la primul contact cu utilizatori reali. Înainte să angajați buget, cea mai rentabilă jumătate de oră pe care o puteți investi e cea în care primiți un verdict tranșant: care caz de utilizare se amortizează cu adevărat în producție și pe care să îl lăsați deoparte. Exact asta vă dă, în scris, Evaluarea gratuită a Oportunităților AI, înainte să cheltuiți un ban.",
    },
    {
      slug: "ready-to-move",
      min: 80,
      max: 100,
      name: "Pregătiți să porniți",
      headline: "Întrebarea nu e „dacă” — ci ce anume, și în ce ordine.",
      body: "Pe hârtie, sunteți pregătiți: o problemă clar numită, date la care un sistem poate ajunge, buget, un responsabil și presiunea de a vă mișca. Între dumneavoastră și un randament stă un singur lucru: să alegeți primul proiect potrivit și să îl puneți în ordinea bună — pentru că, în acest punct, greșeala scumpă e să construiți trei lucruri acceptabil în loc de unul care se amortizează. Exact aici își merită banii o părere scurtă și onestă din afară. Evaluarea gratuită a Oportunităților AI vă dă un verdict scris pentru fiecare candidat — construiți acum, încă nu sau nu construiți — inclusiv, spus limpede, oriunde AI nu se va amortiza pentru dumneavoastră. Nu am niciun produs de vândut, așa că un „nu construiți” nu mă costă nimic.",
    },
  ] as ScorecardTier[],
  ui: {
    seeResult: "Vedeți rezultatul",
    incomplete: "Răspundeți la toate cele zece întrebări ca să vedeți rezultatul.",
    retake: "Reluați testul",
    scoreLabel: "Scorul dumneavoastră",
    outOf: "/ 100",
    resultEyebrow: "Rezultatul dumneavoastră",
  },
  gate: {
    heading: "Vreți rezultatul complet, în scris?",
    body: "Lăsați un email și vă trimit o versiune mai amplă a rezultatului: ce spun răspunsurile dumneavoastră, cele două-trei lucruri la care m-aș uita întâi într-o firmă în situația dumneavoastră și — dacă se potrivește — singura întrebare la care aș vrea un răspuns înainte să cheltuiți ceva. Fără newsletter, fără serie de e-mailuri, fără apeluri de vânzare pe care nu le-ați cerut. Un singur email util.",
    emailLabel: "Email de serviciu",
    button: "Trimiteți-mi rezultatul",
    privacy: "Folosesc adresa dumneavoastră doar ca să vă trimit acest rezultat. Nu o dau mai departe și nu vă adaug pe nicio listă.",
    privacyLinkLabel: "Vedeți politica de confidențialitate.",
    privacyHref: "/privacy",
  },
  ctaPrimary: {
    label: "Aplicați pentru o Evaluare gratuită a Oportunităților AI",
    href: "/assessment",
    microcopy: "Gratuită · una per companie · o susțin personal · un verdict scris, inclusiv unde AI nu se va amortiza.",
  },
  ctaSecondary: {
    label: "Sau, pur și simplu, discutați cu mine",
    href: "/contact",
  },
} as const;

/* --------------------------------------------------- Per-page SEO metadata */

export const pageMeta = {
  home: {
    title: "LT Strategy Partners — Consultant în tehnologie și AI pentru decizii de afaceri mai bune",
    description: site.description,
    path: "/",
  },
  scorecard: {
    title: "Scorecard AI & Tehnologie — LT Strategy Partners",
    description:
      "O verificare gratuită de 3 minute: zece întrebări simple și un răspuns onest la întrebarea dacă o investiție în AI sau tehnologie s-ar amortiza deja în firma dumneavoastră — sau ce merită rezolvat înainte.",
    path: "/scorecard",
  },
  services: {
    title: "Servicii — LT Strategy Partners",
    description:
      "Consultanță și supervizare tehnologică independentă, strategie, implementare și performanță operațională — cu specializare solidă în AI. Un singur partener senior, de la decizie până în producție.",
    path: "/services",
  },
  assessment: {
    title: "Evaluarea Oportunităților AI — LT Strategy Partners",
    description:
      "O evaluare gratuită, făcută personal de mine: fiecare caz de utilizare AI punctat după valoare, viabilitate în producție și expunere la EU AI Act, cu verdict clar — construiți acum, încă nu sau nu construiți.",
    path: "/assessment",
  },
  assessmentSample: {
    title: "Exemplu de Raport Gate Zero — LT Strategy Partners",
    description:
      "Un exemplu integral de Raport Gate Zero, marcat clar ca exemplu — verdictul scris pe care îl primiți din Evaluarea gratuită a Oportunităților AI.",
    path: "/assessment/sample-readout",
  },
  about: {
    title: "Despre — LT Strategy Partners",
    description:
      "Luca-Ștefan Tamaș, inginer de sisteme care construiește AI și sisteme LLM de producție, cu platforme enterprise livrate și două produse SaaS proprii.",
    path: "/about",
  },
  contact: {
    title: "Contact — LT Strategy Partners",
    description:
      "O discuție directă, fără presiune, despre unde ar putea AI-ul și tehnologia să vă schimbe cifrele.",
    path: "/contact",
  },
  insights: {
    title: "Perspective — LT Strategy Partners",
    description:
      "Texte scurte și practice pentru antreprenori și manageri, despre cum scoateți valoare reală din AI și tehnologie.",
    path: "/insights",
  },
  privacy: {
    title: "Confidențialitate — LT Strategy Partners",
    description: "Cum sunt colectate și folosite informațiile pe care le trimiteți către LT Strategy Partners.",
    path: "/privacy",
  },
  terms: {
    title: "Termeni — LT Strategy Partners",
    description: "Condițiile în care este oferit site-ul LT Strategy Partners.",
    path: "/terms",
  },
} as const;

/* ----------------------------------------------- Shared UI microcopy (i18n) */

export const ui = {
  footerExplore: "Navigare",
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
  workGallery: "Din tabloul de bord",
  workCapabilities: "Competențe demonstrate",
  workStack: "Construit cu",
  workLiveBadge: "Live",
  workTakeaway: "Ce înseamnă pentru dumneavoastră",
  workCaptions: {
    "transit-map": "Harta în timp real a vehiculelor din flota orașului",
    "transit-charts":
      "Compoziția flotei, viteza medie pe categorii și indicii de accesibilitate",
    "transit-speeding": "Posibile puncte de congestie și depășiri de viteză înregistrate",
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
  founderPhotoAlt: "Portretul lui",
} as const;

/* --------------------------------------- Form strings shared with client JS */

export const formStrings = {
  honeypot: "Lăsați acest câmp gol",
  contactFormAria: "Formular de contact",
  sending: "Se trimite…",
  fixFields: "Corectați, vă rog, câmpurile marcate.",
  required: "Acest câmp este obligatoriu.",
  invalidEmail: "Introduceți, vă rog, o adresă de email validă.",
  failPrefix: "Ceva nu a funcționat. Scrieți-mi, vă rog, direct la",
  contactSubjectPrefix: "Mesaj de la",
  contactSuccessSent:
    "Mulțumesc — mesajul a fost trimis. Vă răspund personal în cel mult două zile lucrătoare.",
  assessmentSubjectPrefix: "Cerere de evaluare —",
  assessmentSuccessMailto:
    "Mulțumesc — cererea este gata de trimis. O citesc personal și vă răspund în cel mult două zile lucrătoare.",
  assessmentSuccessSent:
    "Mulțumesc — cererea a fost trimisă. O citesc personal și vă răspund în cel mult două zile lucrătoare.",
  scorecardSubjectPrefix: "Rezultat scorecard —",
  scorecardSuccessMailto:
    "Mulțumesc — cererea e gata de trimis. Vă trimit personal rezultatul scris, de obicei în cel mult două zile lucrătoare.",
  scorecardSuccessSent:
    "Mulțumesc — rezultatul dumneavoastră e pe drum. Îl trimit personal, de obicei în cel mult două zile lucrătoare.",
} as const;

/* ------------------------------- Assessment application form (field copy) */

import type { AssessmentField } from "./site";

export const assessmentForm = {
  fields: [
    { name: "name", label: "Numele dumneavoastră", type: "text", required: true, autocomplete: "name" },
    { name: "email", label: "Email de serviciu", type: "email", required: true, autocomplete: "email" },
    {
      name: "company",
      label: "Compania și aproximativ câți angajați",
      hint: "Sectorul și mărimea aproximativă ajung — „casă de expediții cu 130 de oameni”.",
      type: "text",
      required: true,
      autocomplete: "organization",
    },
    {
      name: "role",
      label: "Rolul dumneavoastră — și va participa un sponsor executiv la sesiune?",
      hint: "Verdictul e o decizie de conducere, așa că prezența unui sponsor la discuție e o condiție, nu o preferință.",
      type: "text",
      required: true,
      autocomplete: "organization-title",
    },
    {
      name: "usecases",
      label: "Cele unu–două cazuri de utilizare AI pentru care doriți cel mai mult un verdict",
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
      hint: "Pilotări, furnizori, experimente interne. Locul în care s-a blocat fiecare îmi spune cel mai mult.",
      type: "textarea",
      required: false,
    },
    {
      name: "data",
      label: "Unde stau astăzi datele sau conținutul care ar alimenta sistemul?",
      hint: "SharePoint, un wiki, o bază de date, PDF-uri, capul oamenilor — toate sunt răspunsuri oneste.",
      type: "text",
      required: true,
    },
    {
      name: "sensitive",
      label: "Ar implica date personale, date ale clienților sau ceva ce ați ezita să trimiteți către un furnizor de cloud din SUA?",
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
  selectPlaceholder: "Alegeți o variantă (opțional)",
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
    lead: "Ce informații colectez și cum le folosesc. Limbaj simplu, fără surprize.",
    updated: "Ultima actualizare: 3 iulie 2026",
    sections: [
      {
        heading: "Cine sunt",
        html: `Operatorul de date pentru acest site este ${site.name} (activitate independentă, cu sediul în Iași, România). Pentru orice întrebare despre această politică sau despre datele dumneavoastră, scrieți-mi la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "Ce date colectez",
        html: `Colectez informațiile pe care alegeți să mi le trimiteți. Prin <strong>formularul de contact</strong>: <strong>numele</strong>, <strong>compania</strong>, <strong>rolul</strong> (opțional), <strong>adresa de email</strong> și <strong>mesajul</strong> pe care îl scrieți. Dacă folosiți butonul „Rezervați o discuție”, îmi lăsați numele, emailul și orice detalii adăugate la programare — vedeți <a href="#booking">Rezervarea unei discuții</a> mai jos. Nu fac publicitate și nu folosesc tehnologii de urmărire invazive sau instrumente de analiză de la terți care să vă identifice.`,
      },
      {
        heading: "De ce le colectez și temeiul legal",
        html: `Folosesc aceste informații într-un singur scop: să citesc solicitarea dumneavoastră, să vă răspund și să continuăm discuția despre o posibilă colaborare. Temeiul legal, conform GDPR, este interesul meu legitim de a răspunde persoanelor care mă contactează în legătură cu serviciile mele și, atunci când dumneavoastră inițiați contactul pentru a discuta o colaborare, demersurile făcute la cererea dumneavoastră înainte de încheierea unui contract.`,
      },
      {
        heading: "Transmiterea datelor",
        html: `Nu vă vând informațiile și nu le transmit către terți pentru scopurile lor proprii. Solicitarea dumneavoastră ajunge la mine fie prin email, fie prin formularele site-ului, care sunt prelucrate de Google și salvate într-un tabel din contul meu Google; Google, împreună cu furnizorii de email și de găzduire prin care trece mesajul, acționează exclusiv ca persoane împuternicite, în numele meu. Această prelucrare poate implica transferuri în afara SEE, în baza garanțiilor oferite de Google.`,
      },
      {
        id: "booking",
        heading: "Rezervarea unei discuții",
        html: `Butonul „Rezervați o discuție” deschide o pagină de programări pusă la dispoziție de Google Calendar. Dacă rezervați acolo o discuție, datele completate — numele, emailul și orice altceva adăugați — sunt prelucrate de Google ca parte a serviciului de programare, conform <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politicii de confidențialitate a Google</a>, și pot fi transferate pe servere din afara SEE, inclusiv în Statele Unite. Primesc aceste date exclusiv pentru a stabili și a ține întâlnirea cu dumneavoastră. Dacă preferați să nu folosiți Google, scrieți-mi direct la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "Cât timp le păstrez",
        html: `Păstrez corespondența doar atât cât este necesar pentru a soluționa solicitarea și, dacă este cazul, pe durata colaborării care urmează, după care o șterg. Dacă discuția nu duce nicăieri, o șterg imediat ce devine clar că nu mai este necesară.`,
      },
      {
        heading: "Drepturile dumneavoastră",
        html: `Conform GDPR, aveți dreptul de acces la datele personale pe care le dețin despre dumneavoastră, dreptul de rectificare dacă sunt greșite, de ștergere, de restricționare a prelucrării sau de opoziție la prelucrare, precum și dreptul la portabilitatea datelor. Pentru a exercita oricare dintre aceste drepturi, scrieți la <a href="mailto:${site.email}">${site.email}</a> și vă răspund în termenul prevăzut de lege. Aveți, de asemenea, dreptul de a depune o plângere la autoritatea de supraveghere (în România, ANSPDCP).`,
      },
      {
        heading: "Modificări",
        html: `Dacă modific această politică, actualizez data de mai sus. Schimbările importante vor fi semnalate clar pe această pagină.`,
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
        html: `Acest site este publicat de ${site.name} pentru a prezenta serviciile pe care le ofer și punctul meu de vedere profesional. Are caracter exclusiv informativ.`,
      },
      {
        heading: "Fără consultanță și fără contract",
        html: `Nimic de pe acest site nu constituie consultanță profesională, juridică, financiară sau tehnică și nimic de aici nu creează un contract sau un angajament. Orice colaborare se desfășoară în baza unui contract scris separat, convenit cu dumneavoastră în prealabil.`,
      },
      {
        heading: "Proprietate intelectuală",
        html: `Conținutul, marca și designul acestui site aparțin ${site.name}, dacă nu se precizează altfel. Numele de produse și mărcile menționate în proiectele mele aparțin deținătorilor de drept.`,
      },
      {
        heading: "Linkuri",
        html: `Acolo unde acest site trimite către site-uri externe, nu răspund pentru conținutul sau practicile lor.`,
      },
      {
        heading: "Contact",
        html: `Aveți întrebări despre acești termeni? Scrieți-mi la <a href="mailto:${site.email}">${site.email}</a>.`,
      },
      {
        heading: "",
        html: `Acești termeni sunt un punct de plecare concis și pot fi completați pe măsură ce activitatea crește. Pentru orice colaborare, prevalează contractul scris separat.`,
      },
    ] as LegalSection[],
  },
} as const;
