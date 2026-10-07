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
  Layer,
  StartPath,
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
    "Consultanță în digitalizare și AI pentru companii. Aflăm unde se amortizează cu adevărat tehnologia, vă pregătim managerii și echipele să o folosească în munca de zi cu zi, apoi proiectăm și construim noi soluțiile. Independenți: nu vindem produse și nu luăm comisioane.",
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
  { label: "Servicii", href: "/services" },
  { label: "Diagnostic", href: "/assessment" },
  { label: "Training", href: "/training" },
  { label: "Proiecte", href: "/#work" },
  { label: "Despre", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Servicii", href: "/services" },
  { label: "Diagnostic", href: "/assessment" },
  { label: "Training", href: "/training" },
  { label: "Verificare rapidă", href: "/scorecard" },
  { label: "Proiecte", href: "/#work" },
  { label: "Despre", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Confidențialitate", href: "/privacy" },
  { label: "Termeni", href: "/terms" },
];

/* --------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Digitalizare și AI pentru companii",
  headline: "Ajutăm firmele să lucreze mai bine cu tehnologia.",
  subhead:
    "Aflăm unde instrumentele digitale, automatizarea și AI-ul aduc cu adevărat valoare în firma dumneavoastră, vă pregătim managerii și echipele să le folosească în munca de zi cu zi, apoi proiectăm și construim noi soluțiile — și măsurăm ce s-a schimbat de fapt.",
  // Role label on the hero portrait name-tag.
  tagRole: "Fondator",
  primaryCta: site.primaryCta,
  secondaryCta: site.assessmentCta,
  trustLine: "Nimic de vândut · Vă pregătim echipa · Construim ce recomandăm",
} as const;

/* -------------------------------------------------- The problem we solve */

export const intro = {
  eyebrow: "Începem de la problemă",
  body: "Marja se subțiază și nimeni nu poate spune exact unde. Aceleași cifre, trecute de mână în trei sisteme. Un program plătit de firmă, pe care jumătate din echipă îl ocolește. Astfel de probleme sunt rareori acolo unde se crede — și rareori se rezolvă doar cu tehnologie. De aceea începem prin a înțelege cum circulă munca în realitate, unde se blochează, cât costă și cum folosesc oamenii instrumentele pe care le au deja. Apoi rezolvăm ce merită rezolvat — printr-o schimbare de proces, prin training sau printr-un sistem construit de noi.",
} as const;

/* ------------------------------------------------------- Value pillars */

export const pillars = {
  eyebrow: "Ce ne diferențiază",
  items: [
    {
      title: "Întâi afacerea, apoi tehnologia.",
      body: "Pornim de la cifrele firmei și de la felul în care se lucrează în realitate, nu de la un instrument. Așa găsim unde se amortizează tehnologia — și tot de aceea „nu construiți nimic” e un răspuns normal. Nu vindem produse sau licențe și nu luăm comision de la furnizori, deci nimic nu ne influențează recomandarea.",
    },
    {
      title: "Predăm ce construim.",
      body: "Trainingul nostru vine de la oamenii care proiectează și operează astfel de sisteme — așa că acoperă ce funcționează în practică, unde greșește AI-ul și cum îl folosiți în siguranță. Lucrăm pe sarcinile reale ale echipei, nu pe slide-uri generice.",
    },
    {
      title: "Construim ce recomandăm.",
      body: "Majoritatea consultanților vă lasă o recomandare și pleacă. Noi proiectăm, construim și integrăm soluția, rămânem până când e folosită și măsurăm rezultatul pe cifrele convenite cu dumneavoastră.",
    },
  ] as Card[],
} as const;

/* ----------------------------------------------------------- Services */

export const services = {
  eyebrow: "Ce facem",
  headerTitle: "Strategie, training, implementare — și dovada că a funcționat.",
  deliverablesLabel: "Ce primiți",
  intro:
    "Patru domenii care se leagă între ele. Ne puteți chema pentru oricare, dar sunt gândite să funcționeze împreună: strategia stabilește ce merită făcut, trainingul pregătește oamenii, implementarea livrează soluția, iar măsurarea arată dacă a meritat.",
  items: [
    {
      stage: "Strategie",
      title: "Strategie de digitalizare și consultanță",
      body: "De obicei simțiți unde pierde bani firma dumneavoastră — oferte trimise târziu, stoc care stă, aceleași cifre reintroduse de mână — dar nu și care dintre rezolvări merită făcută prima. Calculăm cât vă costă fiecare problemă în contul de profit și pierdere, separăm puținele oportunități care merită urmărite de multele care nu merită și rămânem alături de dumneavoastră, ca voce independentă, la deciziile care urmează: furnizori, bugete, „construim sau cumpărăm”. Uneori concluzia onestă e că niciuna nu merită.",
      deliverables: [
        "O hartă a lucrurilor care vă costă cel mai mult, ordonată după valoare și efort",
        "Calcule de rentabilitate și un plan pe etape, cu responsabili și puncte de decizie",
        "Un consultant independent pentru deciziile despre furnizori, cheltuieli, arhitectură și AI — între proiecte și după ele",
      ],
    },
    {
      stage: "Training",
      title: "Competențe digitale și training",
      body: "Tehnologia aduce valoare doar când oamenii știu să o folosească. Îi învățăm pe manageri și pe angajați să folosească AI-ul, automatizările, datele și instrumentele digitale care contează pentru munca lor reală — pornind de la procesele, aplicațiile și rolurile din firma dumneavoastră, nu de la o programă generică.",
      deliverables: [
        "Training practic pentru manageri și echipe: AI în munca de zi cu zi, automatizare, date și BI, securitate digitală",
        "Exerciții construite pe sarcinile, instrumentele și documentele dumneavoastră",
        "Fluxuri de lucru repetabile și reguli de utilizare pe care echipa le păstrează și după training",
      ],
      link: { label: "Detalii despre training", href: "/training" },
    },
    {
      stage: "Implementare",
      title: "Implementare și livrare",
      body: "De obicei nu planul e problema — e faptul că nu îl construiește nimeni. Proiectăm, construim, integrăm și punem soluția în producție chiar noi — fie că e vorba de instrumente interne, automatizarea proceselor, fluxuri de date și tablouri de bord sau sisteme AI. Lucrăm alături de echipa dumneavoastră, ca firma să o poată opera și fără noi. Software care funcționează, nu prezentări — și rămânem până când soluția funcționează, e folosită și e predată curat.",
      deliverables: [
        "O soluție funcțională, care rulează în producție",
        "Integrare în sistemele și fluxurile de lucru existente",
        "Documentație și o echipă instruită, care poate opera soluția fără noi",
      ],
    },
    {
      stage: "Îmbunătățire",
      title: "Performanță operațională",
      body: "Un instrument nou nu schimbă nimic dacă munca din jurul lui rămâne la fel — așa apar câștiguri care se văd în demo și niciodată în contabilitate. Regândim felul în care se desfășoară efectiv munca, apoi lăsăm în firmă un sistem de măsurare care face câștigul vizibil și îl ajută să se mențină după ce plecăm.",
      deliverables: [
        "Procese reproiectate, potrivite cu noile instrumente",
        "Un set de măsurători legate de KPI-urile dumneavoastră",
        "O imagine înainte–după a câștigului obținut",
      ],
    },
  ] as Service[],
  ai: {
    eyebrow: "Unde intră AI-ul",
    title: "AI, atunci când chiar e răspunsul potrivit.",
    body: "AI-ul e doar unul dintre instrumentele digitalizării, nu totul — dar e domeniul în care suntem cei mai specializați. Tocmai de aceea vă putem spune unde schimbă cu adevărat cifrele și unde e doar cheltuială degeaba, îl putem construi astfel încât să facă față utilizatorilor reali și vă putem învăța echipa să îl folosească în siguranță. Am făcut deja asta — inclusiv un asistent AI care răspunde din documentele firmei și rulează integral pe echipamentele pe care aceasta le are deja.",
    points: [
      {
        title: "Unde se amortizează AI-ul",
        body: "Un răspuns onest despre ce cazuri de utilizare aduc valoare reală și care sunt doar cheltuială degeaba — cântărite pe cifrele dumneavoastră, înainte să dați vreun ban.",
      },
      {
        title: "Sisteme AI și LLM de producție",
        body: "Asistenți, agenți și automatizări care trec dincolo de demo — cu o căutare în documente bine reglată, validarea rezultatelor și monitorizarea care le fac de încredere.",
      },
      {
        title: "AI folosit sigur și conform",
        body: "AI privat, găzduit la dumneavoastră acolo unde datele o cer, reguli clare despre cum folosesc angajații instrumentele AI și un răspuns practic despre unde vi se aplică EU AI Act.",
      },
    ] as Card[],
    note: "Nu știți încă unde și-ar avea locul AI-ul la dumneavoastră? Diagnosticul firmei e gratuit, bine delimitat și poate foarte bine să ajungă la concluzia că răspunsul nu ține de tehnologie.",
    cta: site.assessmentCta,
  },
} as const;

/* ------------------------------------ Where to start: two entry paths */

export const startPaths = {
  eyebrow: "De unde începem",
  heading: "Două puncte de plecare. Ambele pot duce la o soluție care funcționează.",
  intro:
    "De obicei, firmele vin la noi cu una dintre două întrebări. Amândouă sunt puncte bune de plecare — iar când pe parcurs apare o oportunitate concretă, o putem construi.",
  paths: [
    {
      question: "„Trebuie să aflăm ce merită digitalizat.”",
      title: "Diagnosticul firmei",
      body: "Ne uităm cum funcționează de fapt firma și, în două până la patru săptămâni, primiți un diagnostic scris: ce vă ține pe loc în realitate, ce merită rezolvat primul și ce ar presupune fiecare rezolvare — un sistem, o schimbare de proces, un training sau nimic.",
      points: [
        "Un diagnostic scris de 3–5 pagini, pe care îl puteți pune în fața conducerii",
        "Fiecare problemă cântărită după cât vă costă și cât de greu se rezolvă",
        "Un răspuns tranșant despre ce trebuie rezolvat primul — și motivul din spate",
      ],
      note: "Gratuit — îl facem noi, cel mult trei pe lună.",
      cta: site.assessmentCta,
    },
    {
      question: "„Vrem ca oamenii noștri să lucreze mai bine cu AI și cu instrumentele digitale.”",
      title: "Training pentru echipe",
      body: "Training practic pentru manageri și angajați despre AI, automatizare, date și instrumente digitale — pornind de la procesele, aplicațiile și rolurile din firma dumneavoastră, ca să schimbe felul în care se lucrează chiar din săptămâna următoare.",
      points: [
        "Adaptat sarcinilor reale ale echipei și instrumentelor pe care le aveți deja",
        "Pentru conducere, echipe de birou și echipe operaționale — tehnice sau nu",
        "Se încheie cu fluxuri de lucru pe care echipa le folosește în continuare și cu o imagine clară a ceea ce merită automatizat",
      ],
      note: "Formatul, durata și mărimea grupului se stabilesc împreună cu dumneavoastră.",
      cta: { label: "Vedeți ce include trainingul", href: "/training" },
    },
  ] as StartPath[],
  footnote:
    "Adesea, cele două drumuri se întâlnesc. Trainingul scoate la suprafață procesele care merită automatizate; un diagnostic ajunge uneori la concluzia că o echipă are nevoie de training înainte de un sistem nou. Implementarea vine doar când există un motiv concret pentru ea.",
} as const;

/* -------------------------- Gate Zero: the /assessment offer page content */

export const assessmentPage = {
  eyebrow: "Diagnosticul firmei",
  heading:
    "Înainte să vă vândă cineva o soluție, aflați ce vă ține de fapt pe loc.",
  lead: "O ședință structurată cu echipa dumneavoastră de conducere și un diagnostic scris, cu priorități limpezi, despre ce vă costă cel mai mult — inclusiv un „nu construiți nimic” spus pe față, dacă acesta e răspunsul onest. Gratuit, îl facem noi, cu locuri limitate.",
  heroCta: { label: "Cereți un diagnostic", href: "#apply" } as CTA,
  heroFacts: [
    "45–60 de minute cu echipa de conducere",
    "Unul per firmă",
    "Fără acces la sisteme",
    "Nimic de vândut",
  ],

  problem: {
    eyebrow: "De ce există",
    heading: "Aproape toți vin la dumneavoastră cu răspunsul deja pregătit.",
    paragraphs: [
      "Știți deja că ceva nu e în regulă; ce vă lipsește e un nume pentru asta. O marjă care exista și acum nu mai e. Marfă care zace în stoc, în timp ce se mai comandă din ea. Aceeași comandă tastată în trei locuri, de trei oameni. O decizie amânată până termină cineva raportul. Oferte care pleacă cu două zile întârziere și nimeni nu poate spune de ce. Jumătate din ce ține firma în funcțiune stă în capul a doi oameni.",
      "Duceți asta la aproape oricine și primiți drept răspuns produsul lui: firma de software găsește o problemă de software, furnizorul de AI găsește o problemă de AI, iar consultantul găsește o problemă de strategie. Noi nu vindem niciun produs, nu avem nicio licență de vândut și nu luăm comision de la nimeni — exact de asta ne permitem să ne uităm întâi la firma dumneavoastră și abia apoi să vă spunem că problema e o regulă de preț, o predare de care nu răspunde nimeni, un program pe care nimeni nu a fost învățat să-l folosească sau un raport în care nimeni nu are încredere. Iar când răspunsul e ceva ce trebuie construit, îl construim noi.",
    ],
  },

  deliverable: {
    eyebrow: "Ce primiți",
    heading: "Diagnosticul scris.",
    intro:
      "Trei până la cinci pagini, scrise de noi. Prima pagină e făcută să poată fi trimisă conducerii ca document de sine stătător.",
    items: [
      "O notă de decizie de o pagină, cu verdictul în titlu — nu ascuns la pagina patru",
      "Fiecare problemă găsită, așezată pe o singură hartă: cât vă costă × cât de greu se rezolvă, fiecare cu ce riscați dacă rămâne așa",
      "Pentru orice ar trebui construit, verificarea Gate Zero în scris: construiți acum / încă nu / nu construiți, cu interval de cost, cât durează până în producție și condițiile în care se renunță",
      "O secțiune întreagă, intitulată „Ce nu merită rezolvat acum” — cu motivul pentru fiecare",
      "Pași următori, printre care și lucruri pe care le puteți face fără să ne angajați",
    ],
    guaranteeLabel: "Garanția, în scris",
    guarantee:
      "Așteptați-vă la cel puțin un lucru pe care vă spunem să nu îl rezolvați — sau să nu îl rezolvați acum — cu motivul, în scris. Dacă ce contează cel mai mult se dovedește a fi o schimbare de proces, nu un sistem nou, diagnosticul spune exact asta. Iar dacă tot ce aduceți stă în picioare, o spune la fel de limpede. Ce nu va face niciodată e să fabrice un verdict, într-o direcție sau în alta.",
    sampleCta: {
      label: "Citiți un exemplu de verdict Gate Zero",
      href: "/assessment/sample-readout",
    } as CTA,
  },

  method: {
    eyebrow: "Metoda",
    heading: "Cum ne uităm la firmă — și unde intră Gate Zero.",
    intro:
      "Venim fără o soluție pregătită. Ne uităm la șapte lucruri, cu cifrele și cu vocabularul dumneavoastră, și doar ce trece de ele merită banii dumneavoastră. Iar ce ar trebui construit trece apoi prin Gate Zero — verificarea formală go/no-go la care e supus orice sistem de producție, doar că aplicată înainte să cheltuiți:",
    dimensions: [
      {
        name: "Valoarea în joc",
        desc: "Euro sau ore legate de un flux de lucru concret — scenariu de bază conservator, cu ipotezele spuse pe față. Fără proiecții spectaculoase.",
      },
      {
        name: "Realitatea datelor",
        desc: "Informația de care depinde asta există cu adevărat, e curată și se poate accesa astăzi — sau stă în capul cuiva?",
      },
      {
        name: "Cum se lucrează în realitate",
        desc: "Procesul așa cum îl fac oamenii, nu așa cum arată schema: ocolișurile, datele trecute de două ori, al doilea tabel despre care nu vorbește nimeni.",
      },
      {
        name: "Toleranța la erori față de miză",
        desc: "Unde ajunge astăzi o greșeală, cine o observă și cât costă până o prinde cineva?",
      },
      {
        name: "Dacă rezultatul se poate măsura",
        desc: "Dacă se schimbă asta, se vede în cifre pe care le aveți deja — sau ar trebui să ne credeți pe cuvânt?",
      },
      {
        name: "Cost, efort și responsabilitate",
        desc: "Cât costă o rezolvare în funcționare, nu doar la construcție, și cine din firmă răspunde de ea după ce plecăm noi.",
      },
      {
        name: "Expunere și dependențe",
        desc: "Locuri în care totul atârnă de un singur lucru, dependența de un singur om, date personale de care nu poate răspunde nimeni și regulile cărora sunteți deja supuși — inclusiv unde vi se aplică EU AI Act.",
      },
    ],
    rulesLabel: "Trei reguli, prezente în fiecare diagnostic",
    rules: [
      "Ce contează cel mai mult se stabilește cu dumneavoastră înainte să punctăm ceva.",
      "Nu există un „scor de maturitate” agregat — decide dimensiunea cea mai slabă, iar mediile ascund tocmai ce contează.",
      "Fiecare punctaj vine cu un nivel de încredere și cu ipotezele pe care se sprijină.",
    ],
    questionsLabel: "Patru dintre întrebările pe care le punem de fapt",
    gateQuestions: [
      "Unde ajunge astăzi o greșeală — și cine o observă?",
      "Ce decizii stau blocate pentru că vă lipsesc informații?",
      "Cât vă costă asta în fiecare lună în care rămâne așa?",
      "Ce se întâmplă cu asta dacă pleacă omul care o ține?",
    ],
    standardsNote:
      "Dacă ajungem să construim ceva, partea de expunere se raportează la EU AI Act (articolul 6 / anexa III), la NIST AI Risk Management Framework și la OWASP Top 10 pentru aplicații LLM.",
  },

  process: {
    eyebrow: "Cum decurge",
    heading: "Patru pași, două până la patru săptămâni.",
    steps: [
      {
        name: "Cererea",
        time: "10 minute",
        desc: "Zece întrebări despre firmă, despre ce nu funcționează și despre locul în care stau cifrele. Citim noi fiecare cerere — iar pe unele le refuzăm. Acesta e primul verdict și vine înaintea oricărei discuții.",
      },
      {
        name: "Ședința de diagnostic",
        time: "45–60 de minute",
        desc: "O ședință structurată cu echipa dumneavoastră de conducere — venim să înțelegem firma, nu să prezentăm ceva. Urmărim banii și blocajele prin procesele pe care le folosiți cu adevărat și punem întrebările care apar oricum atunci când un sistem ajunge să lucreze pe viu. Doar discuție ghidată: fără parole, fără acces la sisteme, nimic nu iese din firma dumneavoastră.",
      },
      {
        name: "Se scrie diagnosticul",
        time: "într-o săptămână",
        desc: "Fiecare problemă găsită e punctată pe cele șapte dimensiuni și așezată pe o singură hartă: cât vă costă × cât de greu se rezolvă. Diagnosticul îl scriem noi, cu cifrele și cu vocabularul dumneavoastră.",
      },
      {
        name: "Discuția despre verdict",
        time: "30 de minute",
        desc: "Primiți diagnosticul și un răspuns tranșant despre primul lucru care trebuie rezolvat: acum, încă nu — și exact ce l-ar debloca — sau lăsați-l în pace. Dacă răspunsul e ceva de construit, vine cu verdictul Gate Zero. Documentul rămâne al dumneavoastră, oricare ar fi răspunsul.",
      },
    ],
  },

  whyFree: {
    eyebrow: "De ce e gratuit",
    heading: "E un diagnostic, nu tratamentul.",
    body: "Așa aflăm, de ambele părți, dacă are rost să lucrăm împreună. Primiți diagnosticul și ordinea priorităților; munca propriu-zisă intră în proiectele plătite. Rămâne gratuit tocmai pentru că e limitat: ținem noi fiecare ședință și scriem noi fiecare diagnostic — cel mult trei pe lună, unul per companie, o singură dată.",
    branches: [
      {
        name: "Dacă verdictul e da",
        desc: "și ne potrivim, diagnosticul leagă fiecare problemă care merită rezolvată de proiectul care o rezolvă — o schimbare de proces, training pentru echipă sau ceva ce am construi noi. Veți ști cum arată pasul următor înainte să vă angajați la ceva.",
      },
      {
        name: "Dacă verdictul e nu",
        desc: "păstrați diagnosticul, nu urmează nicio serie de e-mailuri și aici se termină — dacă nu ne scrieți chiar dumneavoastră. Un „nu” urmat de e-mailuri insistente ar goli verdictul de orice valoare.",
      },
    ],
  },

  fit: {
    eyebrow: "Potrivire",
    heading: "Pentru cine este — și pentru cine nu.",
    forLabel: "Este pentru dumneavoastră dacă",
    notForLabel: "Nu este dacă",
    forWho: [
      "Antreprenori și manageri care văd simptomul, dar nu cauza",
      "Firme în care marja, stocul sau încasările scapă de sub control, iar motivul nu e limpede",
      "Firme care au cumpărat deja un sistem sau au încercat un pilot și nu au mare lucru de arătat",
      "Firme cu date sensibile, care cântăresc ce poate și ce nu poate să iasă din firmă",
    ],
    notForWho: [
      "Companii care caută un plan de implementare gratuit — acesta este un verdict, nu un proiect tehnic",
      "Firme în care nimeni din conducere nu poate participa la ședință",
      "Oricine caută validarea unei decizii deja luate — unele diagnostice spun „nu construiți nimic”, iar al dumneavoastră ar putea fi printre ele",
    ],
  },

  whoRuns: {
    eyebrow: "Cine îl face",
    heading:
      "Metoda există pentru că acestea sunt verificările pe care le facem oricum înainte să punem ceva în producție.",
    facts: [
      "Proiectăm, construim și ducem în producție sisteme întregi — inclusiv AI și LLM: căutare în documente bine reglată, validarea rezultatelor, monitorizare, bugete de cost și latență",
      "Am construit un asistent AI care răspunde din documentele firmei și rulează complet offline pe echipamente pe care o firmă le are deja",
      "Experiență în ingineria de securitate pentru sisteme de producție și în protecția datelor",
      "Am fondat două produse SaaS și am fost arhitectul principal al unei platforme enterprise multi-tenant",
    ],
    link: { label: "Mai multe despre Luca", href: "/about" } as CTA,
  },

  apply: {
    eyebrow: "Cererea",
    heading: "Cereți Diagnosticul firmei.",
    intro:
      "Zece întrebări, cam zece minute. Citim noi fiecare cerere — pe unele le refuzăm, și acesta e primul verdict. Dacă o acceptăm, primiți agenda exactă a ședinței înainte să blocați o oră din timpul echipei de conducere.",
    microcopy:
      "Gratuit · unul per companie · cel mult trei pe lună · doar discuție ghidată, fără acces la sisteme",
    submitLabel: "Trimiteți cererea",
  },
} as const;


/* ----------------------------------------------------------- Approach */

export const approach = {
  eyebrow: "Programul de digitalizare",
  more: { label: "Vedeți serviciile în detaliu", href: "/services" } as CTA,
  outputLabel: "Ce obțineți",
  title: "Cinci etape, de la diagnostic la rezultatul măsurat.",
  intro:
    "Un program structurat, condus de aceiași oameni de la început până la sfârșit. Trainingul nu e un serviciu separat, adăugat pe deasupra — e etapa care face ca implementarea să prindă. Puteți începe cu diagnosticul sau cu trainingul și vă puteți opri în orice moment în care etapa următoare nu se mai justifică.",
  steps: [
    {
      n: "01",
      title: "Diagnostic",
      body: "Vă ascultăm pe dumneavoastră și pe oamenii care fac munca, ne uităm la cifrele firmei, apoi urmărim câteva procese reale de la un capăt la altul, ca să vedem unde se duc de fapt timpul, banii și munca manuală.",
      output:
        "O imagine scrisă a problemelor și oportunităților reale, ordonate după cât vă costă.",
    },
    {
      n: "02",
      title: "Prioritizare",
      body: "Separăm împreună ce merită făcut de ce puteți lăsa așa și punem o cifră pe fiecare. Unele rezolvări nu cer deloc software; ce ar urma să fie construit trece prin Gate Zero.",
      output:
        "O listă scurtă, în ordine, cu criteriile de succes stabilite de la început — și ce vă recomandăm să nu construiți.",
    },
    {
      n: "03",
      title: "Training",
      body: "Îi învățăm pe manageri și pe angajați să folosească instrumentele, automatizările și AI-ul care contează pentru schimbările ce urmează — pe propriile sarcini și documente, ca noul mod de lucru să fie pregătit când vine sistemul.",
      output:
        "O echipă care știe să lucreze cu noile instrumente, plus fluxuri de lucru repetabile pe care le păstrează.",
    },
    {
      n: "04",
      title: "Implementare",
      body: "Proiectăm și construim soluțiile alese și le integrăm cu sistemele pe care le folosiți deja, lucrând alături de oamenii dumneavoastră — nu doar predăm un caiet de sarcini.",
      output:
        "Soluții care rulează în producție și sunt folosite de oamenii pentru care au fost făcute.",
    },
    {
      n: "05",
      title: "Măsurare",
      body: "Verificăm dacă eficiența, calitatea, costul sau viteza s-au schimbat față de ce am convenit la început, vă spunem deschis ce a funcționat și ce nu, și ajustăm.",
      output:
        "Rezultate măsurate pe KPI-urile dumneavoastră și un plan pentru a extinde ce a funcționat.",
    },
  ] as Step[],
} as const;

/* ----------------------------------------------------- Statement band */

export const statement = {
  eyebrow: "Ce facem, pe scurt",
  lines: [
    "Înțelegem afacerea.",
    "Pregătim oamenii.",
    "Construim tehnologia.",
    "Măsurăm rezultatul.",
  ],
  support:
    "Un singur partener pentru toate patru — ca strategia, oamenii și sistemul să nu ajungă să tragă în direcții diferite. Și ne puteți judeca după rezultate, nu după livrabile.",
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
  body: "Digitalizarea eșuează când se întâmplă pe un singur nivel: conducerea cumpără un sistem, procesul rămâne neschimbat, iar echipa lucrează în continuare în tabelul vechi. Noi lucrăm pe toate cele trei niveluri deodată — și pentru că suntem aceiași oameni la fiecare nivel, nimic nu se pierde pe drum.",
  items: [
    {
      layer: "Conducerea",
      question: "Ce merită digitalizat?",
      detail:
        "Cu antreprenorii și managerii stabilim unde aduce tehnologia valoare, cât valorează asta, ce facem întâi — și ce e mai bine să lăsăm deoparte.",
    },
    {
      layer: "Procesele",
      question: "Cum trebuie să se schimbe munca?",
      detail:
        "Cu șefii de departamente regândim fluxurile de lucru, predările și rapoartele în care trebuie să se integreze tehnologia, ca rezultatul să se vadă în cifre.",
    },
    {
      layer: "Oamenii",
      question: "Cum va lucra echipa, concret, cu tehnologia?",
      detail:
        "Cu angajații care fac efectiv munca exersăm instrumentele, automatizările și AI-ul pe care le vor folosi zilnic, pe propriile lor sarcini.",
    },
  ] as Layer[],
} as const;


/* ------------------------------------------------- About: full page */

export const aboutPage = {
  eyebrow: "Despre",
  heading: "Un partener implicat, de la început până la final.",
  paragraphs: [
    "LT Strategy Partners este firma prin care lucrează Luca-Ștefan Tamaș, inginer de sisteme care construiește software ce trebuie să funcționeze în producție. E mică intenționat: fără intermediari și fără să vă predăm unor juniori. Omul care stabilește împreună cu echipa de conducere ce merită făcut este același care vă instruiește angajații și scrie codul.",
    "Tocmai această combinație face diferența. Înțelegem tehnologia suficient de bine încât să o construim — sisteme AI de producție, platforme enterprise, automatizări, fluxuri de date — și înțelegem afacerea suficient de bine încât să vă spunem unde își are locul și unde nu. Cea mai mare parte a valorii stă între cele două: în a traduce ce poate face cu adevărat un sistem în ce înseamnă el pentru marjă, pentru un proces sau pentru ziua de lucru a cuiva. Din 2020 am livrat proiecte cap-coadă în web, mobil, date și AI pentru clienți din UE și SUA, inclusiv aplicații publicate în App Store și Google Play.",
    "De aici vine și partea de training. Tehnologia se amortizează doar când oamenii care o folosesc o înțeleg, iar un sistem complicat e explicat cel mai simplu de cineva care a construit unul. Lucrăm pe toate cele trei niveluri ale unei firme — cu conducerea care decide unde investește, cu managerii care regândesc felul în care circulă munca și cu angajații care învață instrumentele pe care le vor folosi zilnic — și ne asigurăm că ce se decide sus ajunge efectiv în munca de zi cu zi.",
  ],
  beliefsHeading: "Ce credem despre munca asta",
  beliefs: [
    "Credem că software-ul și infrastructura digitală sunt printre cele mai bune investiții pe care le poate face o firmă — dar numai dacă sunt făcute cu cap. Destule firme cheltuiesc mult și se iau după ce e la modă, apoi se întreabă de ce banii nu s-au văzut niciodată în profit. Tehnologia e rar partea grea. Randamentul vine din a cheltui pe lucrul potrivit, din motivul potrivit, în ordinea potrivită — și din grija ca oamenii să îl poată folosi efectiv. Exact peste partea asta se sare cel mai des.",
    "Mai credem că nimic nu costă mai puțin decât discuția purtată înainte să începeți. O conversație scurtă și sinceră cu cineva care a construit astfel de sisteme vă poate economisi luni de muncă și mult buget — pentru că prinde din start problema pusă greșit, lasă deoparte ideea care nu se amortizează și vă arată cel mai simplu lucru care chiar funcționează. Exact de aceea primul pas pe care îl propunem, Diagnosticul firmei, nu costă nimic.",
  ],
  whyHeading: "Cum ne place să lucrăm",
  why: "Preferăm să fim utili, nu impresionanți. Nu avem produs, licență sau comision de vândut, așa că un „nu construiți asta” nu ne costă nimic — și doar așa un „construiți” înseamnă ceva. Iar pentru că am dus astfel de sisteme până la capăt, în condiții reale, vă putem spune deschis ce merită făcut, ce nu și cât costă de fapt — și nu vă recomandăm nimic din ce n-am fi dispuși să construim chiar noi — și să vă învățăm echipa să folosească.",
  glanceHeading: "Pe scurt",
  glance: [
    "Construim sisteme AI și LLM de producție — retrieval-augmented generation, modele self-hosted și rezultate trecute prin validare",
    "Am construit un asistent AI self-hosted, complet offline; am fondat două produse SaaS aflate în producție (Mazely, Processly)",
    "Inginerie de sisteme de producție într-un mediu critic pentru securitate; arhitect principal al unei platforme multi-tenant de BI / ERP / DMS / automatizare de procese",
    "Fundament de securitate și protecția datelor: autentificare, criptare, privilegii minime și izolarea tenanților",
    "Explicăm sisteme complexe pe înțelesul echipelor de conducere, al personalului operațional și al celor care le folosesc",
    "Certificări de date și analiză (Meta Data Analyst, Google Business Intelligence, Advanced SQL, Tableau); certificări de securitate (SOC Level 1, DevSecOps, Jr Penetration Tester)",
  ],
  photoCaption: "Luca-Ștefan Tamaș · Fondator",
  ctaHeading: "Ce problemă vă încurcă cel mai mult?",
} as const;

/* ------------------------------------------------------- CTA (pre-footer) */

export const ctaBand = {
  headline: "Care este problema reală din firma dumneavoastră?",
  body: "Vă propunem o discuție directă, fără presiune, despre ce vă stă în cale — iar dacă răspunsul nu ține de tehnologie, vă spunem și asta.",
  cta: site.primaryCta,
} as const;


/* ------------------------------------------------------------ Contact */

export const contact = {
  eyebrow: "Contact",
  headline: "Să vorbim deschis.",
  intro:
    "Spuneți-ne câteva lucruri despre firma dumneavoastră și despre ce ați vrea să îmbunătățiți — să aflați ce merită digitalizat, să vă pregătiți echipa să lucreze sigur cu AI și cu instrumentele digitale sau să construiți ceva anume. Vă răspundem personal — fără discurs de vânzare, fără presiune.",
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
      label: "Ce ați vrea să îmbunătățiți?",
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
    "Consultanță independentă, la nivel senior — nimic de vândut.",
    "Strategie, training și implementare, de la aceiași oameni.",
    "Răspuns în cel mult două zile lucrătoare.",
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
    "Digitalizare și AI, de la strategie la implementare: aflăm unde se amortizează tehnologia, pregătim oamenii care o vor folosi și construim noi soluția — sau vă spunem limpede că nu e nevoie să construiți nimic.",
} as const;

/* ------------------------------------------------- Selected work / portfolio */

export const work = {
  eyebrow: "Proiecte alese",
  intro:
    "Câteva lucruri pe care le-am proiectat și construit. Le arătăm ca să fie limpede un singur lucru: nu dăm doar sfaturi — construim. Tot de aici vine și trainingul nostru: predăm din experiența sistemelor pe care le-am construit și le-am operat. Mai jos: ce a cerut fiecare, tehnic și strategic, și ce înseamnă asta pentru un proiect al dumneavoastră.",
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
        "Arată că putem transforma munca manuală care se repetă la un client în sisteme proiectate și refolosibile, care pornesc la comandă sau după calendar — iar echipa de operațiuni câștigă consecvență și vizibilitate fără să se mărească.",
      training:
        "Același mod de gândire îl predăm echipelor în trainingurile de automatizare și productivitate digitală: munca recurentă se descrie o dată, apoi se decide care pași merită automatizați — și care nu.",
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
        "Arată că putem proiecta și duce până la capăt un produs atent la confidențialitate pentru instituții mari: scapă oamenii de timpul pierdut zilnic și, în același timp, produce date operaționale utile. Aceeași abordare merge oriunde un spațiu fizic are nevoie de un strat digital simplu peste el.",
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
        "Arată că putem construi AI cu căutare în date proprii, care rulează privat, pe echipamente pe care firma le are deja — cu memoria calculată, verificările automate de funcționare și disciplina de backup fără care nu ține în lumea reală.",
      training:
        "Construirea lui stă la baza trainingurilor noastre de AI: de ce un asistent dă răspunsuri greșite cu toată convingerea, ce presupune de fapt păstrarea datelor firmei în siguranță și cum verificați un răspuns înainte să vă bazați pe el.",
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
        "Atlas Economic răspunde la o întrebare pe care nicio instituție din România nu o publică: pentru fiecare județ, cât din valoarea atribuită de autoritățile contractante de acolo rămâne la firme cu sediul în județ, unde pleacă restul și cât câștigă firmele locale de la autorități din alte județe. Am legat trei surse deschise — sistemul de achiziții publice, registrul comerțului și nomenclatorul oficial al localităților — într-un registru simetric, cu câte o pagină pentru fiecare județ, pe care oricine o poate deschide și verifica. Este un proiect propriu, făcut ca să arătăm metoda, nu pentru un client; de aceea sunt publice și prelucrarea, și metodologia, și pista de audit.",
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
      { title: "AI în munca de zi cu zi", body: "AI practic pentru sarcinile obișnuite ale firmei — redactare, rezumate, căutare și analiză de documente și date — cu instrucțiuni și verificări construite pe munca dumneavoastră." },
      { title: "AI pentru manageri", body: "Cum evaluați oportunitățile, costurile, riscurile și furnizorii de AI — și cum deosebiți un caz real de un demo scump." },
      { title: "Productivitate digitală", body: "Cum scoateți mai mult din instrumentele pe care echipa le are deja: documente partajate, tabele și rapoarte, lucrul cu date și BI și micile automatizări care elimină munca repetitivă." },
      { title: "Digitalizare pentru angajați", body: "Cum funcționează fluxurile de lucru digitale, automatizarea no-code și îmbunătățirea proceselor — ca angajații să vadă singuri pașii care merită schimbați în munca lor." },
      { title: "AI și securitate cibernetică", body: "Cum folosiți AI-ul fără riscuri evitabile: ce date pot intra în ce instrumente, phishing și inginerie socială, plus reguli de folosire responsabilă pe care o echipă le poate respecta." },
      { title: "Training personalizat pentru firmă", body: "Training construit integral pe instrumentele, fluxurile de lucru și procesele firmei dumneavoastră — inclusiv pentru lansarea unui sistem pe care l-am construit pentru dumneavoastră." },
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
        title: "Înțelegem punctul de plecare",
        body: "Vorbim cu managerii și cu câțiva oameni din echipă despre cum lucrează azi, ce instrumente folosesc și unde se duce timpul.",
        output: "O imagine clară a competențelor, instrumentelor și problemelor actuale.",
      },
      {
        n: "02",
        title: "Alegem cazurile de utilizare",
        body: "Identificăm sarcinile în care o folosire mai bună a instrumentelor digitale, a automatizării sau a AI-ului ar face o diferență reală — și pe cele în care nu ar face.",
        output: "O listă scurtă de situații pe care merită să le lucrăm în training.",
      },
      {
        n: "03",
        title: "Training pe munca reală",
        body: "Lucrăm pe sarcinile, documentele și programele echipei, nu pe exemple generice, și adaptăm sesiunile fiecărui rol și nivel.",
        output: "Sesiuni practice, pe care oamenii le pot aplica a doua zi.",
      },
      {
        n: "04",
        title: "Documentăm ce funcționează",
        body: "Transformăm ce a funcționat în fluxuri de lucru scrise, colecții de instrucțiuni pentru AI, șabloane și reguli de folosire pe care echipa le păstrează.",
        output: "Fluxuri de lucru documentate și reguli clare pentru folosirea zilnică.",
      },
      {
        n: "05",
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
    points: [
      "Un asistent AI care rulează offline, pe echipamentele firmei — de aici vine felul în care predăm folosirea sigură și privată a AI-ului",
      "Processly, o platformă de automatizare a fluxurilor de lucru — de aici vine felul în care învățăm echipele să descrie și să automatizeze munca repetitivă",
      "Fluxuri de date și tablouri de bord pe date publice și operaționale — de aici vine trainingul nostru de date și BI",
      "Experiență în ingineria de securitate pentru sisteme de producție — de aici vine trainingul nostru de AI și securitate cibernetică",
    ],
    link: { label: "Vedeți proiectele", href: "/#work" } as CTA,
  },

  bridge: {
    eyebrow: "Unde duce",
    heading: "Trainingul e adesea momentul în care ies la iveală oportunitățile reale.",
    body: "Când o echipă învață cum funcționează instrumentele pe propriile sarcini, procesele care merită automatizate devin evidente — de multe ori mai întâi pentru oamenii care fac munca. Aici se leagă trainingul de restul muncii noastre: putem evalua oportunitatea, construi soluția și măsura rezultatul. Sau trainingul poate rămâne de sine stătător — ambele variante sunt în regulă.",
    links: [
      { label: "Cum funcționează Programul de digitalizare", href: "/services#approach" },
      { label: "Începeți cu Diagnosticul firmei", href: "/assessment" },
    ] as CTA[],
  },

  ctaHeading: "Ce ar trebui să poată face echipa dumneavoastră mai bine?",
} as const;

/* ------------------------------------------ Supporting-route intro copy */

export const pageIntros = {
  services: {
    eyebrow: "Servicii",
    title: "Strategie, training și implementare — de la același partener.",
    lead: "Vă ajutăm să decideți unde merită investit în tehnologie, vă pregătim oamenii să o folosească și o construim — cu aceiași oameni seniori pe tot parcursul. Fără predări între plan, training și cel care scrie codul.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Să vorbim deschis.",
    lead: "Spuneți-ne câteva lucruri despre firma dumneavoastră și despre ce ați vrea să îmbunătățiți — să aflați ce merită digitalizat, să vă pregătiți echipa să lucreze sigur cu AI și cu instrumentele digitale sau să construiți ceva anume. Vă răspundem personal — fără discurs de vânzare, fără presiune.",
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
      body: "Pe hârtie, sunteți pregătiți: o problemă clar numită, date la care un sistem poate ajunge, buget, un responsabil și presiunea de a acționa. Între dumneavoastră și un câștig real stă un singur lucru: să alegeți proiectul cu care începeți și să ordonați bine pașii următori — pentru că, în acest punct, greșeala scumpă e să construiți trei lucruri pe jumătate în loc de unul care se amortizează. Exact aici își merită banii o părere scurtă și onestă din afară. Diagnosticul gratuit al firmei vă dă un verdict scris pentru fiecare variantă — construiți acum, încă nu sau nu construiți — inclusiv, spus limpede, când răspunsul onest e că nu e nimic de construit. Nu vindem niciun produs, nu avem nicio licență de vândut și nu luăm comision de la furnizori, așa că un „nu construiți” nu ne costă nimic — și doar de aceea un „construiți” din partea noastră înseamnă ceva.",
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
      "LT Strategy Partners — Consultanță în digitalizare și AI, training și implementare",
    description: site.description,
    path: "/",
  },
  scorecard: {
    title: "Verificare AI și tehnologie — LT Strategy Partners",
    description:
      "O verificare gratuită de 3 minute: zece întrebări simple și un răspuns onest la întrebarea dacă o investiție în AI sau tehnologie s-ar amortiza deja în firma dumneavoastră — sau ce merită rezolvat înainte.",
    path: "/scorecard",
  },
  services: {
    title: "Servicii de digitalizare și AI — LT Strategy Partners",
    description:
      "Consultanță în transformare digitală, training de AI și digitalizare pentru angajați și implementare practică de automatizări și AI — un singur program, de la diagnostic la rezultatul măsurat.",
    path: "/services",
  },
  training: {
    title: "Training de AI și digitalizare pentru firme — LT Strategy Partners",
    description:
      "Training practic de AI pentru firme: AI în munca de zi cu zi, automatizare, date și BI și securitate cibernetică, pentru manageri și angajați — adaptat proceselor și instrumentelor dumneavoastră, predat de oameni care construiesc astfel de sisteme.",
    path: "/training",
  },
  assessment: {
    title: "Diagnosticul firmei — LT Strategy Partners",
    description:
      "Un diagnostic gratuit, pe care îl facem noi: unde se pierd banii, timpul și deciziile în firma dumneavoastră, ce merită rezolvat primul — și, spus cinstit, unde răspunsul nu ține de tehnologie.",
    path: "/assessment",
  },
  assessmentSample: {
    title: "Exemplu de Raport Gate Zero — LT Strategy Partners",
    description:
      "Un exemplu integral de Raport Gate Zero, marcat clar ca exemplu — verdictul scris „construiți sau nu”, întocmit după ce diagnosticul arată că merită construit ceva.",
    path: "/assessment/sample-readout",
  },
  about: {
    title: "Despre — LT Strategy Partners",
    description:
      "Luca-Ștefan Tamaș, inginer de sisteme care înțelege mai întâi firma, îi pregătește pe oamenii care vor folosi tehnologia și apoi proiectează și construiește el însuși soluția. Sisteme AI de producție, platforme enterprise, două produse SaaS proprii.",
    path: "/about",
  },
  contact: {
    title: "Contact — LT Strategy Partners",
    description:
      "O discuție directă, fără presiune, despre ce ați vrea să îmbunătățiți — digitalizare, adoptarea AI, training pentru angajați sau un proiect anume.",
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
  backToWork: "Proiecte alese",
  workContext: "Contextul",
  workDelivered: "Ce am livrat",
  workStrategic: "De ce contează",
  workImpact: "Impact",
  workGallery: "Din tabloul de bord",
  workCapabilities: "Competențe demonstrate",
  workStack: "Construit cu",
  workLiveBadge: "Live",
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
