# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two readers, usually one after the other:

1. **Recruiters** scan first, in about 30–60 seconds. They look for title, years, core stack, availability, location or timezone, and a way to make contact.
2. **Engineering managers and tech leads** get the link passed on to them and read more closely. They open the case studies to judge depth, judgement and ownership before or after a screening call.

Both readers have to succeed on the same page. The scan layer must not hide the depth, and the depth must not slow the scan.

## Product Purpose

This is the personal portfolio of Maksym Matsydulskas, a Senior Front-End Engineer and front-end lead (TypeScript), based in Ukraine and working remotely (UTC+2). The goal is to get hired. A full-time remote senior or lead front-end role comes first, and contract work is also welcome. Success is either of two outcomes, and both count. A recruiter downloads the CV to put into their hiring pipeline, which is why Download CV is the primary action on every contact group. Or a reader makes contact (LinkedIn replies fastest, then email or Telegram) to set up a conversation.

## Positioning

He is a front-end lead who owns hard product UI from start to finish and leaves the codebase better than he found it. Four things together set him apart, each backed by a real case:

- **Fixes messy codebases**: led a six-week refactor with no feature freeze. Unit tests went from 0 to 884, API error handling moved out of 337 files into one helper, the payment-form chunk dropped from 70.5 to 10.2 kB, and production builds went from 26 s to 4 s after the Vite 8 upgrade. Moved two apps from Vue CLI to Vite, and took over SDA's B2B platform from a previous developer.
- **Ships complex product UI**: a drag-and-drop dashboard builder with 22 widgets, an embeddable widget for third-party sites, and a B2B platform with 250+ components.
- **Owns it end to end**: a ticket portal and a payment-store PWA built alone from scratch in strict TypeScript, and WeekFit, an iOS app built alone from the mobile client to the database and typed end to end.
- **Leads and mentors**: front-end lead with code review, mentoring two developers, and working directly with the client.

## Operating Context

- Readers arrive from a CV, a LinkedIn profile, a job application or a recruiter's message, often on a phone and often with several tabs open.
- The site is passed between people (recruiter to hiring manager), so the Open Graph link preview matters.
- The PDF CV is the document that travels with an application. The site sits next to it and should never contradict it.

## Capabilities and Constraints

- An Astro static site with almost no client JavaScript by design. The only scripts are the email "Copy" button and Vercel Analytics. Interactive work lives in separate projects (Tech graph uses React).
- It is deployed on Vercel. Canonical URLs, Open Graph and the sitemap come from `VERCEL_PROJECT_PRODUCTION_URL`, and Vercel Web Analytics is on.
- Pages: home (hero, selected work, experience, projects, skills, contact) and one page per case study at `/work/[id]/`.
- Content lives in data files, not markup: `src/data/profile.ts` holds the profile, experience and projects, and `src/content/cases/*.md` holds the case studies (frontmatter: order, title, company, period, role, summary, metric, stack).
- The CV file name `Maksym_Matsydulskas_Resume.pdf` is fixed so the "Download CV" link never breaks. When the PDF changes, `experience` must be updated to match.
- The site is English only.

## Brand Commitments

- Name and title: "Maksym Matsydulskas — Senior Front-End Engineer · Lead | TypeScript".
- Voice: plain, factual, first person when it needs to be, and led by numbers. Claims are specific and measured (counts, sizes, before and after), never adjectives.
- Status line: "Open to work".

## Evidence on Hand

- Five case studies in `src/content/cases/`: architecture overhaul, dashboard builder, ticket portal and payment store, embeddable callback widget, WeekFit.
- `EVIDENCE.md` at the project root: every site claim checked against the work repositories, with commits and counts.
- Experience at seven organisations, 2021–2026, in `src/data/profile.ts`.
- Three live side projects: Tech graph, the "Python-1" Station browser game, and a challenge tracker (Rust/WASM PWA).
- `public/Maksym_Matsydulskas_Resume.pdf`, `src/assets/photo.jpg`, `public/og.png`, `public/favicon.svg`.
- **Not on hand, so never make it up:** testimonials, quotes from colleagues or clients, employer logos, screenshots of client work (the platforms are private or under NDA), and public code for WeekFit (private repo; demo on request).

## Product Principles

1. **Built for the scan, deep enough for the read.** Who, what, availability and contact must be clear within seconds. The cases hold the depth for the second reader.
2. **Numbers over adjectives.** Every claim is something a hiring manager could check or ask about in an interview.
3. **Contact is always one step away.** Every page ends with a clear way to reach him.
4. **The site is a sample of the work.** It is fast, accessible, uses no unneeded JS and is cleanly built, because the reader is judging front-end craft.
5. **Stay in sync with the CV.** The site and the PDF never disagree.
