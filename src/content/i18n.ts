/* Locale-aware access to the site content.
   Romanian is the DEFAULT locale and is served at the root (/, /services…);
   English lives under /en. English stays the source of truth for the content
   *shape* (./site.ts) and Romanian mirrors it 1:1 (./site.ro.ts) — that is a
   maintenance convention, independent of which locale sits at the root.
   Components resolve their copy through getContent() using the pathname, so the
   same markup renders both language trees.

   Path convention: a "bare path" (no locale prefix) is the Romanian path — the
   URL as actually served at the root. localePath() maps it into either locale. */

import * as en from "./site";
import * as ro from "./site.ro";

export type Locale = "en" | "ro";
export const locales: Locale[] = ["en", "ro"];
export const defaultLocale: Locale = "ro";

/** The shape of the content module (EN is canonical; RO mirrors it). */
export type Content = typeof en;

/** Accepts a locale code OR a pathname ("/en", "/en/x", "/en.html"). */
export function resolveLocale(value: string | undefined): Locale {
  if (!value) return "ro";
  if (value === "en") return "en";
  if (value === "ro") return "ro";
  const path = value.replace(/\.html$/, "");
  return path === "/en" || path.startsWith("/en/") ? "en" : "ro";
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

/** Strip an /en prefix and build-output suffixes (.html, /index.html),
    returning the clean path in the default (Romanian, root) convention. */
export function stripLocale(path: string): string {
  let p = path.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
  if (p === "") p = "/";
  if (p === "/en") return "/";
  return p.startsWith("/en/") ? p.slice(3) : p;
}

/** The equivalent of a bare (Romanian-convention) `path` in the given locale. */
export function localePath(locale: string | undefined, path: string): string {
  const bare = stripLocale(path);
  if (resolveLocale(locale) === "ro") return bare;
  if (bare === "/") return "/en";
  if (bare.startsWith("/#")) return `/en#${bare.slice(2)}`; // "/#work" -> "/en#work"
  return `/en${bare}`;
}
