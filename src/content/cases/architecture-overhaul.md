---
order: 1
title: Architecture overhaul without a feature freeze
company: CONNECT 972
period: 2025 – 2026
role: Front-end lead
summary: A six-week refactor of an enterprise fiber network platform while features kept shipping.
metric:
  value: 0 → 884
  label: unit tests in CI
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

## Result

- 0 → 884 Vitest unit tests running in CI.
- 5,300 lines of store code removed.
- Payment-form chunk 70.5 → 10.2 kB (23.9 → 4.1 kB gzipped).
- Production builds from 26 s to 4 s after the Vite 8 upgrade.
- Defects found along the way fixed, including user data surviving logout in a multi-tenant app.
