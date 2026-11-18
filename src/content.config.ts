import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '*.md' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    company: z.string(),
    period: z.string(),
    role: z.string(),
    summary: z.string(),
    metric: z.object({ value: z.string(), label: z.string() }),
    measures: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    stack: z.array(z.string()),
  }),
});

export const collections = { cases };
