import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Insights: Markdown pieces the founder can add under src/content/insights/.
// `draft: true` items show as titles in listings but do not get a page and
// are never published — so the section can look alive without fabricated bodies.
const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
