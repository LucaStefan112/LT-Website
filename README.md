# LT Strategy Partners — website

Marketing site for **LT Strategy Partners**. Fast, static, and premium: a long-scroll
home page plus supporting routes (Services, About, Contact, and legal placeholders).

- **Stack:** [Astro 5](https://astro.build) · TypeScript · [Tailwind CSS v4](https://tailwindcss.com) (CSS-first tokens)
- **Fonts:** Archivo, self-hosted as a single preloaded variable `.woff2` (no layout shift)
- **JavaScript:** tiny, dependency-free vanilla TS islands only (sticky header, mobile menu, scroll reveals, active-nav) — no UI framework runtime
- **Hosting:** static output, deployed to **GitHub Pages** at the custom domain `ltstrategypartners.com`

---

## Quick start

```bash
npm install          # install dependencies
npm run sync:fonts   # copy the Archivo woff2 into public/fonts/ (run once after install)
npm run gen:og       # generate public/og-image.png (run once, or after brand changes)
npm run dev          # local dev server at http://localhost:4321
```

Build and preview the production output locally:

```bash
npm run build        # outputs static site to dist/
npm run preview      # serve dist/ locally
```

> `public/fonts/archivo-variable.woff2` and `public/og-image.png` are generated
> (git-ignored). The scripts above create them; the CI workflow runs them
> automatically before every build, so you don't have to commit them.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and build the static site to `dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run sync:fonts` | Copy the Archivo variable font into `public/fonts/` |
| `npm run gen:og` | Regenerate the 1200×630 Open Graph image |

---

## Editing the copy

**All site copy lives in one typed file: [`src/content/site.ts`](src/content/site.ts).**
Components read from it — nothing is hard-coded in the markup. To change wording,
edit the relevant export:

- `site` — name, tagline, contact email, founder, primary CTA
- `nav`, `footerNav`, `legalNav` — navigation links
- `hero`, `intro`, `pillars`, `services`, `approach`, `statement`, `results`, `clients`, `about`, `ctaBand`, `contact`, `footer` — each home section
- `pageIntros` — the hero blocks on the Services / About / Contact routes
- `pageMeta` — per-page `<title>`, meta description, and path (for SEO + canonical)

Placeholders that need your input are written in `[square brackets]` (e.g. the
client-logo strip, founder bio, portrait, and results case-notes). Search the
codebase for `[` to find them.

---

## Brand assets

Drop-in brand files live in **[`public/brand/`](public/brand/)** and are referenced
by their exact filenames — the logo is never recreated in code.

| File | Used for |
| --- | --- |
| `lt-logo-primary.svg` | Header logo (light backgrounds) |
| `lt-logo-reversed.svg` | Footer logo (Deep Blue backgrounds) |
| `lt-logo-stacked.svg`, `lt-logo-mono.svg` | Optional lockups |
| `lt-monogram.svg`, `lt-monogram-reversed.svg` | "LT" mark |
| `lt-favicon-32.png`, `lt-favicon-64.png` | Favicons |
| `lt-apple-touch-180.png` | Apple touch icon |
| `lt-icon-512.png`, `lt-icon-1024.png` | PWA / manifest icons |
| `lt-avatar-800.png` | Founder portrait placeholder |

**To replace the founder portrait:** swap `public/brand/lt-avatar-800.png` for a real
(roughly square) photo, keeping the same filename — or point `about.portrait` in
`src/content/site.ts` at a new file.

If you change the logo or palette, re-run `npm run gen:og` to refresh the social card.

### Colour + type tokens

The palette, type scale, and component classes live in
[`src/styles/global.css`](src/styles/global.css) under `@theme`. Change a token
there and it updates everywhere — components never hard-code colours.

---

## Connecting the contact form

The form (`src/components/sections/ContactForm.astro`) is **not** wired to a backend
by default. It validates on the client and, with no endpoint configured, falls back
to opening the visitor's mail client (`mailto:` to the address in `contact.email`).

To send submissions to a service (e.g. [Formspree](https://formspree.io) or
[Resend](https://resend.com) via a small function), set an environment variable:

```bash
# .env
PUBLIC_CONTACT_ENDPOINT="https://formspree.io/f/your-form-id"
```

When set, the form POSTs the fields as JSON to that endpoint and shows a success or
error message. No other code changes are needed. (Only `PUBLIC_`-prefixed variables
are exposed to the client, by design.)

---

## Deploying

### GitHub Pages (configured)

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which installs deps, generates the font + OG image, builds, and deploys to Pages.

One-time setup:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. **Custom domain:** `public/CNAME` already contains `ltstrategypartners.com`. Point
   the domain's DNS at GitHub Pages (`A`/`AAAA` records to GitHub's IPs, or a `CNAME`
   for a subdomain), then set the custom domain under Settings → Pages and enable
   "Enforce HTTPS".

> **Serving from a project sub-path instead?** If you don't use the custom domain and
> serve from `https://<user>.github.io/LT-Website/`, set `site` to that URL and add
> `base: "/LT-Website"` in `astro.config.mjs`, then prefix internal asset paths with
> `import.meta.env.BASE_URL`. With the custom domain, the base is root `/` and no
> changes are needed.

### Vercel (alternative)

Astro deploys to Vercel with zero config: import the repo, keep the defaults
(`npm run build`, output `dist/`), and add a build step or hook running
`npm run sync:fonts && npm run gen:og` before the build (or commit the two generated
files). Remove `public/CNAME` if not using the custom domain there.

---

## Project structure

```
public/
  brand/            brand assets (logos, favicons, icons, avatar)
  fonts/            generated: archivo-variable.woff2
  CNAME             custom domain for GitHub Pages
  robots.txt, site.webmanifest, .nojekyll
  og-image.png      generated social card (1200×630)
src/
  content/site.ts   ← ALL copy + per-page SEO metadata
  styles/global.css  design tokens (@theme) + component classes
  layouts/Base.astro head, SEO, JSON-LD, favicons, skip-link
  components/
    ui/             Container, Section, SectionHeader, Eyebrow, Button, Reveal, Logo
    sections/       Hero, IntroBand, Pillars, Services, Approach, Statement,
                    Results, Clients, About, CTABand, ContactForm, PageIntro
    Header.astro, Footer.astro
  scripts/ui.ts     header scroll state, mobile menu, reveals, active-nav
  pages/            index, services, about, contact, privacy, terms, 404
scripts/
  sync-fonts.mjs, gen-og.mjs
```

## Accessibility & performance notes

- WCAG 2.1 AA: semantic landmarks, one `<h1>` per page, skip link, visible keyboard
  focus, labelled form fields, an accessible mobile menu (focus trap, `aria-expanded`,
  Escape to close), and `prefers-reduced-motion` honoured throughout.
- Performance: preloaded self-hosted font with `font-display: swap`, images sized to
  avoid CLS, lazy-loading below the fold, flat colour (no gradients/heavy shadows),
  and a very small, deferred JS payload. In-viewport internal links are prefetched.
