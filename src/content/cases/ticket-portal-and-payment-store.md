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

## Problem

Technicians worked their tickets in the admin panel, which was extremely hard to use on a phone. Payment points had no system at all: payments were arranged in WhatsApp chats, with nothing that tied them together.

## What I did

- Started both projects and built them alone: 290 of the 317 commits across them are mine, and a teammate set up deployment.
- Ticket portal: a ticket list filtered by assignee, priority and scheduled date; ticket details with the customer, their services, subscriptions and invoices; photos compressed in the browser before upload; the customer's signature; rebooting the customer's router and changing its password; asking the customer for their location by SMS.
- Payment store: customer search by name, phone or national ID; balance top-ups and withdrawals; transfers with limits and commission, signed by the customer; reports and PDF receipts sent by email.
- Shared across both: two-factor sign-in, runtime configuration so one build serves every tenant, four languages with right-to-left layout for Arabic and Hebrew, and installable PWAs.
- Strict TypeScript checked by vue-tsc on every build, Vitest, oxlint, oxfmt, Knip and CI format checks.

## Decisions

- **One build for every environment and tenant.** The API address is not baked in at build time: CI writes a runtime config next to the bundle at deploy, and the tenant comes from the subdomain. The same Docker image runs on every environment and for every tenant company.
- **Type errors block the deploy.** vue-tsc runs in strict mode as part of every build, so a type error stops the release instead of reaching a technician's phone.
- **Decisions written down, not just made.** One backend serves four frontends and could not tell which app sent a request. I added an `X-Client-Id` header, set once in the request interceptor so no call can skip it, and recorded the trade-offs in an ADR: CORS preflight on cross-origin calls, and images loaded through `<img>` that stay unattributed by design.
- **Right-to-left generated, not hand-written.** Styles are written once and postcss-rtlcss emits the mirrored version for Arabic and Hebrew, so there is no second set of RTL styles to keep in sync.
- **PWAs on mobile data.** Technicians upload from the field, so photos are compressed in the browser before they leave the phone. Both apps install from a link, with no store review, and updates reach every device on the next open.

## Result

Both apps are in production, owned from the first commit. Technicians work their tickets in an app built for a phone, and payment points that ran on WhatsApp chats now go through one system, in four languages.
