---
order: 1
title: Architecture overhaul without a feature freeze
short: Architecture overhaul
company: CONNECT 972
period: engagement 03/2025 – 10/2026
role: Front-end lead
summary: A six-week refactor of an enterprise fiber network platform while features kept shipping.
metric:
  value: 0 → 884
  label: unit tests in CI
measures:
  - value: 0 → 884
    label: unit tests running in CI
    short: unit tests in CI
  - value: 337 → 1
    label: files handling API errors, now one helper
    short: error-handling files
  - value: 70.5 → 10.2
    label: payment-form chunk, kB (gzipped 23.9 to 4.1)
    short: payment chunk, kB
  - value: 26 → 4
    label: production build, seconds
    short: build, seconds
  - value: −5,300
    label: lines of store code
stack: [Vue 3, JavaScript, Vuex, Vitest, Vite, Ant Design Vue, oxlint, GitLab CI]
---

## Context

An enterprise fiber network management platform: the operational system a telecom operator runs its business on. A team of three front-end developers; I reviewed code, mentored two developers and owned architectural decisions.

## Problem

The codebase had no test runner, no linting standards and a lot of copy-paste. API error handling lived in 337 files and 83 paginated tables each carried their own store logic. Dates went through moment in 28 files and dayjs in 52, plus a moment-based mixin that 66 files depended on.

## What I did

- Led a six-week refactor with no feature freeze, in small branches so every review stayed small.
- Introduced the project's first test runner and CI checks that block the old patterns.
- Moved API error handling from 337 files into one lint-guarded helper.
- Moved 83 paginated tables onto one store factory.
- Moved 188 files onto one date module and removed moment.js.

Earlier on the project I migrated the build from Vue CLI (webpack) to Vite and later to Vite 8, upgraded Ant Design v3 → v4, removed 20,000+ lines of dead code, and set up oxlint, oxfmt, Knip and GitLab CI/CD.

## Decisions

- **Expand, migrate, contract instead of a rewrite branch.** Each new module landed beside the old code with its own tests and no change in behaviour. Call sites moved over in batches sized by how far they reached, and the old form was deleted only once nothing used it. CI stayed green at every step, which is what let features keep shipping without a freeze.
- **A lint rule as the contract, not a style guide.** Once API errors and responses went through one helper, an oxlint rule made reading raw error and Hydra payloads anywhere else fail CI. The old pattern cannot come back through a new ticket or a new developer.
- **Kept Vuex and fixed the duplication first.** Moving to Pinia at the same time would have multiplied the blast radius of every change. One store factory removed the copy-paste behind 83 tables, and it turns a later move to Pinia into mechanical work instead of a rewrite.
- **Tickets an AI agent can finish in one pass, with a person owning the design.** I split the refactor into tickets small enough for a coding agent to implement in one context window, each with the figures it would change counted from the code, not estimated. I set the architecture, reviewed every branch, and made the branches and commits myself.

## Result

- 0 → 884 Vitest unit tests running in CI.
- 5,300 lines of store code removed.
- Payment-form chunk 70.5 → 10.2 kB (23.9 → 4.1 kB gzipped).
- Production builds from 26 s to 4 s after the Vite 8 upgrade.
- Defects found along the way fixed, including user data surviving logout in a multi-tenant app.
