# Maksym Matsydulskas — portfolio

Personal site: who I am, five case studies, experience, and a link to the full skills map in Tech graph.

**Why Astro:** content site → static, zero JS. Interactive app → React (see Tech graph).

## Commands

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static output in dist/
pnpm check     # type-check .astro and .ts files
```

## Content

| What | Where |
| --- | --- |
| Name, summary, contacts, experience, projects | `src/data/profile.ts` |
| Case studies (one Markdown file each) | `src/content/cases/*.md` |
| CV download | `public/Maksym_Matsydulskas_Resume.pdf` |
| Link preview image (1200×630) | `public/og.png` |

**Updated the PDF? Update `experience` in `src/data/profile.ts` too.** The file name stays the same so the "Download CV" link never breaks.

## Deploy

Vercel, static build. `site` comes from `VERCEL_PROJECT_PRODUCTION_URL`, so canonical URLs, Open Graph and the sitemap need no manual config. Enable Web Analytics in the Vercel project settings.
