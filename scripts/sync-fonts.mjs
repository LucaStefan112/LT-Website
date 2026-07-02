/* Copies the Archivo variable .woff2 out of the installed @fontsource package
   into public/fonts so we can self-host + preload a single file (no CLS).
   Run automatically as part of `npm run gen:og`-style setup, or manually:
     node scripts/sync-fonts.mjs
*/
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const candidates = [
  "node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2",
  "node_modules/@fontsource-variable/archivo/files/archivo-latin-variable-wghtOnly-normal.woff2",
];

const outDir = join(root, "public", "fonts");
const out = join(outDir, "archivo-variable.woff2");

const src = candidates.map((c) => join(root, c)).find((p) => existsSync(p));

if (!src) {
  console.error(
    "[sync-fonts] Could not find the Archivo variable woff2 in node_modules.\n" +
      "Run `npm install` first, or check @fontsource-variable/archivo/files/."
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, out);
console.log(`[sync-fonts] Copied ${src} -> ${out}`);
