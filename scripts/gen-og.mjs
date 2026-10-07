/* Generates the 1200×630 Open Graph image from an inline SVG using sharp.
   Deep-blue background, reversed LT logo, tagline. Output: public/og-image.png
     node scripts/gen-og.mjs
*/
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const INK = "#16304C";
const BONE = "#F1EFE9";
const STEEL_BRIGHT = "#5E9BDD";

// The LT monogram, drawn inline so the OG image is fully self-contained.
// Mirrors public/brand/lt-monogram-reversed.svg (mark on dark).
const monogram = `
  <g transform="translate(120,90) scale(1.15)">
    <rect x="26" y="36" width="11" height="58" fill="${BONE}"/>
    <rect x="26" y="83" width="34" height="11" fill="${BONE}"/>
    <path d="M64 45 L84 42 L104 45" fill="none" stroke="${STEEL_BRIGHT}" stroke-width="11"/>
    <rect x="78.5" y="45" width="11" height="49" fill="${STEEL_BRIGHT}"/>
  </g>`;

// The headline mirrors the home hero. CI (ubuntu) has no Archivo, so it renders
// in the DejaVu Sans fallback: at 72px the longer line is ~990px, which leaves
// a right margin of ~90px. Re-measure if the wording changes.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${STEEL_BRIGHT}"/>
  ${monogram}
  <text x="120" y="280" font-family="Archivo, sans-serif" font-size="30" letter-spacing="4"
        fill="${STEEL_BRIGHT}" font-weight="500">LT STRATEGY PARTNERS</text>
  <text font-family="Archivo, sans-serif" font-size="72" font-weight="600"
        fill="#FFFFFF" letter-spacing="-1">
    <tspan x="118" y="370">We help companies work</tspan>
    <tspan x="118" y="452">better with technology.</tspan>
  </text>
  <text x="120" y="522" font-family="Archivo, sans-serif" font-size="27" font-weight="400"
        fill="${BONE}" opacity="0.82">Digitalization &amp; AI · strategy, training, implementation.</text>
</svg>`;

const outPath = join(root, "public", "og-image.png");

const buf = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(outPath, buf);
console.log(`[gen-og] Wrote ${outPath} (${buf.length} bytes)`);
