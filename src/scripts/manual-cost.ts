/* Manual-work cost: the arithmetic behind /calculator. Shared by the server
   render (the default example people see before typing anything) and the
   browser (live updates), so the two can never disagree. */

export type Frequency = "daily" | "weekly" | "monthly";
export type Currency = "RON" | "EUR";

// How often a task comes round in a working year, after public holidays and
// leave: 220 working days, 46 working weeks, 12 months.
export const TIMES_PER_YEAR: Record<Frequency, number> = {
  daily: 220,
  weekly: 46,
  monthly: 12,
};

// Hours one full-time person works in that year (220 days × 8 hours).
export const FTE_HOURS = 1760;

// The starting hourly cost for each currency, until the visitor types their own.
export const RATE_DEFAULTS: Record<Currency, number> = { RON: 45, EUR: 15 };

export interface CostInput {
  minutes: number;
  frequency: Frequency;
  people: number;
  rate: number;
}

export interface CostResult {
  hours: number;
  yearly: number;
  monthly: number;
  fte: number;
}

/** Minutes × times a year × people ÷ 60 = hours; × the hourly cost = a year. */
export function computeCost({ minutes, frequency, people, rate }: CostInput): CostResult | null {
  const times = TIMES_PER_YEAR[frequency];
  if (!times || !(minutes > 0) || !(people > 0) || !(rate > 0)) return null;
  const hours = (minutes * times * people) / 60;
  const yearly = hours * rate;
  return { hours, yearly, monthly: yearly / 12, fte: hours / FTE_HOURS };
}

export function formatNumber(value: number, numberLocale: string, digits = 0): string {
  return new Intl.NumberFormat(numberLocale, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

/** "29.700 lei", "9.900 €" (Romanian) or "29,700 lei", "€9,900" (English). */
export function formatMoney(value: number, currency: Currency, numberLocale: string): string {
  const n = formatNumber(Math.round(value), numberLocale);
  if (currency === "RON") return `${n} lei`;
  return numberLocale.startsWith("ro") ? `${n} €` : `€${n}`;
}

export interface FteStrings {
  tiny: string; // under a tenth of a full-time job
  lessThanOne: string; // "{fte}" is replaced
  one: string;
  many: string; // "{fte}" is replaced
}

/** "≈ 0,4 dintr-o normă întreagă", "≈ one full-time job", "≈ 1.2 full-time jobs",
    "≈ 24 de norme întregi". */
export function formatFte(fte: number, numberLocale: string, t: FteStrings): string {
  const rounded = Math.round(fte * 10) / 10;
  if (rounded < 0.1) return t.tiny;
  if (rounded < 1) return t.lessThanOne.replace("{fte}", formatNumber(rounded, numberLocale, 1));
  if (rounded === 1) return t.one;
  // One decimal below ten ("1,2", "2"), whole numbers from ten up ("24")
  const shown = rounded < 10 ? rounded : Math.round(rounded);
  let n = new Intl.NumberFormat(numberLocale, { maximumFractionDigits: 1 }).format(shown);
  // Romanian puts "de" between a whole number and its noun from 20 up
  // ("24 de norme", "120 de norme"), but not when the last two digits are
  // 1–19 ("101 norme")
  const lastTwo = shown % 100;
  if (numberLocale.startsWith("ro") && Number.isInteger(shown) && shown >= 20 && (lastTwo === 0 || lastTwo >= 20)) {
    n += " de";
  }
  return t.many.replace("{fte}", n);
}
