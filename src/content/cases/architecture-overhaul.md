---
order: 1
title: Architecture overhaul without a feature freeze
company: CONNECT 972
period: 2025 – 2026
role: Front-end lead
summary: A six-week, 66-ticket refactor of an enterprise fiber network platform while features kept shipping.
metric:
  value: 0 → 884
  label: unit tests in CI
stack: [Vue 3, TypeScript, Pinia, Vuex, Vitest, Playwright, Vite, GitLab CI]
---

## Context

An enterprise fiber network management platform: the operational system a telecom operator runs its business on. A team of three front-end developers; I reviewed code, mentored two developers and owned architectural decisions.

## Problem

The codebase had no test runner, no linting standards and a lot of copy-paste. API error handling lived in 337 files, 83 paginated tables each carried their own store logic, and date handling was spread across 152 files and two libraries.

## What I did

- Led a six-week, 66-ticket refactor with no feature freeze.
- Introduced the project's first test runner and CI checks that block the old patterns.
- Moved API error handling from 337 files into one lint-guarded helper.
- Moved 83 paginated tables onto one store factory.
- Consolidated date logic into one module and removed moment.js.
- Upgraded Ant Design v3 → v4 and Vite 5 → 8, removed 20,000+ lines of dead code with Knip, and set up oxlint, oxfmt and GitLab CI/CD.

## Result

- 0 → 884 Vitest unit tests running in CI.
- −34% state-layer code.
- Payment-page bundle 70.5 → 10.2 kB.
- 40% faster builds.
- 125 documented defects fixed, including user data surviving logout in a multi-tenant app.
