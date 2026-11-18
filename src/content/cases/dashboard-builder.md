---
order: 2
title: A customizable, extensible dashboard builder
company: CONNECT 972
period: 2025 – 2026
role: Front-end lead
summary: Drag-and-drop dashboards of customers, routers, services and revenue that tenants and managers arrange for themselves.
metric:
  value: "22"
  label: widgets in 5 card types
measures:
  - value: "22"
    label: widgets users can place
  - value: "5"
    label: card types behind them
stack: [Vue 3, JavaScript, Vuex, GridStack, ApexCharts]
---

## Context

An enterprise fiber network platform used by many tenant companies. Tenants and their managers needed to see the state of their business at a glance: new and total customers, installed routers, active and terminated services, revenue and churn. Each company, and each person in it, cared about a different set of numbers.

## Problem

The platform had one fixed dashboard, the same for every company and every person. A sales manager and a network engineer looked at the same numbers in the same order, and nobody could change it.

## What I did

- Built user-customizable drag-and-drop dashboards on GridStack.
- Shipped 22 widgets in 5 card types (two metric cards, area, donut and line charts, plus widget groups) covering customers, routers, services, revenue, churn and payment methods, charted with ApexCharts.
- One period selector drives every widget on the dashboard at once.
- Synced each user's layout to the backend.

## Decisions

- **Widgets as configuration, not components.** Each widget is a category and a metric on one endpoint pattern, rendered by one of five card types. Adding a widget is a config entry, and a group of widgets is a nested grid that moves as one block.
- **Edit mode with a way back.** The layout is snapshotted when editing starts, so a user can drop their changes instead of breaking the dashboard they rely on every day.
- **The layout lives in the user profile.** It is saved as JSON on the existing profile endpoint, so the backend team did not need a new table or API for it.
- **Card types load on demand.** Each of the five card components is its own chunk, so a dashboard downloads only the card types it actually shows.
- **GridStack over a custom grid.** It supports nested grids, which widget groups need, and ships its own Vue wrapper with active releases.

## Result

Each user arranges their own dashboard from a shared set of 22 widgets, the layout follows them across sessions, and a new metric reaches every tenant as one config entry.
