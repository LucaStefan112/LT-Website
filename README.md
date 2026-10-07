# LT Strategy Partners — website

Marketing site for **LT Strategy Partners**, a hands-on digitalization and AI partner:
*understand the business, train the people, build the technology, measure the result.*
Fast, static, and premium: a long-scroll home page plus supporting routes (Services,
Diagnostic, Training, Scorecard, About, Contact, project pages, and legal pages), in
Romanian (root) and English (`/en`).

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

**All site copy lives in two typed files: [`src/content/site.ts`](src/content/site.ts) (English, canonical shape) and [`src/content/site.ro.ts`](src/content/site.ro.ts) (Romanian, a 1:1 mirror). Change both the same day.**
Components read from it — nothing is hard-coded in the markup. To change wording,
edit the relevant export:

- `site` — name, tagline, contact email, founder, primary CTA
- `nav`, `footerNav`, `legalNav` — navigation links
- `hero`, `intro`, `layers` (Leadership / Processes / People), `approach` (the five-stage Digitalization Program), `services` (Strategy / Training & enablement / Implementation / Improvement, plus the AI block), `pillars`, `statement`, `startPaths` (the two entry points: Diagnostic or Training), `ctaBand`, `contact`, `footer` — each home section
- `trainingPage` — the `/training` page (formats, audiences, process, who teaches it)
- `assessmentPage`, `scorecardPage`, `aboutPage` — the Diagnostic, Scorecard and About routes
- `pageIntros` — the hero blocks on the Services / Contact routes
- `pageMeta` — per-page `<title>`, meta description, and path (for SEO + canonical)
- `work` — the **Selected work** portfolio. Each item in `work.projects` renders a card in the home "Work" section and a full page at `/work/<slug>`. Fields include `accent` (per-page colour), `heroDark`, `overview`, `delivered`, `strategic`, `capabilities`, `stack`, `takeaway`, an optional `training` (what the build lets us teach, linked to `/training`), and an `image` (or `diagram: true`). Project images live in `src/assets/work/<key>.png` (optimised by Astro); the `image`/`gallery` keys map to those filenames. Pages link only internally — never out to the projects themselves.

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
| `founder.jpg` | Founder portrait (hero, About page) |

**To replace the founder portrait:** swap `public/brand/founder.jpg` for a new
(roughly square) photo, or point `config.founderPhoto` in `src/content/site.ts`
at a new file.

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

To collect submissions in a Google Sheet (both the contact form and the
assessment application), deploy the Apps Script in the private LT-Assets repo
(`forms-endpoint/README.md` — ~5 minutes) and paste the web-app URL into
`config.contactEndpoint` in `src/content/site.ts`. Each submission then lands
as a row in the "Website Submissions" sheet plus an email notification,
and the forms automatically fall back to `mailto:` if the endpoint is ever
unreachable.

A build-time environment variable overrides the config value if needed:

```bash
# .env
PUBLIC_CONTACT_ENDPOINT="https://script.google.com/macros/s/<id>/exec"
```

---

## Optional settings

These live in `config` at the top of [`src/content/site.ts`](src/content/site.ts). Everything degrades gracefully — nothing invented is ever shown. Current state and how to change it:

| Setting | Current | How to change |
| --- | --- | --- |
| **Founder photo** | Set — `public/brand/founder.jpg` shows on `/about` + the homepage teaser | Replace the file, or point `config.founderPhoto` elsewhere (empty ⇒ a labelled placeholder) |
| **Booking link** | None — the primary CTA reads **"Start a conversation"** → `/contact` | Set `config.bookingUrl` to a Cal.com/Calendly URL to switch it to "Book a conversation" → your link |
| **Assessment fee** | Free — the initial assessment is offered at no fee | To charge later, edit `assessment.body` / `assessment.priceNote` in `site.ts` |
| **Testimonials** | None — the "What clients say" section does not render | Add real, permissioned quotes to the `testimonials` array in `site.ts` |
| **Case-study metrics** | None — the qualitative framing stands | Add real figures to a project's optional `impact: [...]` in `work.projects` (never invent numbers) 
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
    sections/       Hero, IntroBand, Layers, Approach, Services, Pillars, Work,
                    Statement, StartPaths, CTABand, ContactForm, PageIntro, …
    Header.astro, Footer.astro
  scripts/ui.ts     header scroll state, mobile menu, reveals, active-nav
  views/            one view per route, shared by the RO (root) and EN (/en) pages
  pages/            index, services, training, assessment, scorecard, about,
                    contact, work/[slug], privacy, terms, 404 (+ the same under en/)
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
