/* Locale-aware access to the site content.
   English is the source of truth (./site.ts); Romanian mirrors it 1:1
   (./site.ro.ts). Components resolve their copy through getContent() using
   Astro.currentLocale, so the same markup renders both language trees. */

import * as en from "./site";
import * as ro from "./site.ro";

export type Locale = "en" | "ro";
export const locales: Locale[] = ["en", "ro"];
export const defaultLocale: Locale = "en";

/** The shape of the content module (EN is canonical; RO mirrors it). */
export type Content = typeof en;

/** Accepts a locale code OR a pathname ("/ro", "/ro/x", "/ro.html"). */
export function resolveLocale(value: string | undefined): Locale {
  if (!value) return "en";
  if (value === "ro") return "ro";
  const path = value.replace(/\.html$/, "");
  return path === "/ro" || path.startsWith("/ro/") ? "ro" : "en";
}

export function getContent(locale: string | undefined): Content {
  // RO structurally mirrors EN; literal string types differ, hence the cast.
  return resolveLocale(locale) === "ro" ? (ro as unknown as Content) : en;
}

/** BCP-47 / Open Graph values per locale. */
export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string }> = {
  en: { htmlLang: "en", ogLocale: "en_US" },
  ro: { htmlLang: "ro", ogLocale: "ro_RO" },
};

/** Strip a /ro prefix and build-output suffixes (.html, /index.html),
    returning the clean path in EN (root) convention. */
export function stripLocale(path: string): string {
  let p = path.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
  if (p === "" ) p = "/";
  if (p === "/ro") return "/";
  return p.startsWith("/ro/") ? p.slice(3) : p;
}

/** The equivalent of an EN-convention `path` in the given locale. */
export function localePath(locale: string | undefined, path: string): string {
  const bare = stripLocale(path);
  if (resolveLocale(locale) === "en") return bare;
  if (bare === "/") return "/ro";
  if (bare.startsWith("/#")) return `/ro#${bare.slice(2)}`; // "/#work" -> "/ro#work"
  return `/ro${bare}`;
}
