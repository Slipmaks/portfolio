---
order: 3
title: Two TypeScript apps, built alone from scratch
company: CONNECT 972
period: 2025 – 2026
role: Sole front-end developer
summary: A ticket portal for technicians and a payment-store PWA for payment points, each built from scratch in strict TypeScript.
metric:
  value: "4"
  label: languages per app, 2 right-to-left
measures:
  - value: 290 / 317
    label: commits across both apps are mine
  - value: "4"
    label: languages in each app
  - value: "2"
    label: of them right-to-left, Arabic and Hebrew
stack: [Vue 3, TypeScript, Pinia, Quasar, Vite, Vitest, PWA]
---

## Context

The fiber operator's platform needed two apps outside the admin panel: one for technicians working through support tickets, and one for payment points taking money from customers. Both had to run on phones, serve several tenant companies, and work in Arabic, Hebrew, English and Russian.

## What I did

- Started both projects and built them alone: 290 of the 317 commits across them are mine, and a teammate set up deployment.
- Ticket portal: a ticket list filtered by assignee, priority and scheduled date; ticket details with the customer, their services, subscriptions and invoices; photos compressed in the browser before upload; the customer's signature; rebooting the customer's router and changing its password; asking the customer for their location by SMS.
- Payment store: customer search by name, phone or national ID; balance top-ups and withdrawals; transfers with limits and commission, signed by the customer; reports and PDF receipts sent by email.
- Shared across both: two-factor sign-in, runtime configuration so one build serves every tenant, four languages with right-to-left layout for Arabic and Hebrew, and installable PWAs.
- Strict TypeScript checked by vue-tsc on every build, Vitest, oxlint, oxfmt, Knip and CI format checks.

## Result

Both apps are in production, owned from the first commit: the technician's daily ticket work and the payment point's cash flow each run through one focused, installable app in four languages.
