// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Public site URL. Using the custom domain served via GitHub Pages (see public/CNAME).
// If you instead serve from the project sub-path (https://<user>.github.io/LT-Website/),
// set `site` to that origin and add `base: "/LT-Website"` — then use import.meta.env.BASE_URL
// when building internal asset/href paths. With the custom domain, base is root "/".
const SITE_URL = "https://ltstrategypartners.com";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "ignore",
  // Prefetch in-viewport internal links so route navigation feels instant.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    // Emit /services.html rather than /services/index.html so GitHub Pages serves
    // clean URLs from the flat file structure.
    format: "file",
    // Inline all CSS into the HTML: the critical CSS is small (~25KB raw /
    // ~6KB gzipped) and this eliminates render-blocking stylesheet requests,
    // improving FCP/LCP on a small marketing site.
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Home first, then the supporting routes.
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date("2026-07-02"),
    }),
  ],
});
