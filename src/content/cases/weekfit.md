---
order: 5
title: WeekFit — an offline-first gym notebook
company: Personal product
period: "2026"
role: Sole developer, front end to database
summary: An iOS app in private beta with an end-to-end typed API that keeps working without a connection.
metric:
  value: "23"
  label: API routes typed end to end, no codegen
measures:
  - value: "23"
    label: API routes the app calls with shared types
  - value: "10"
    label: database tables behind them
  - value: "43"
    label: unit tests across the API and the app
  - value: "13"
    label: screens in the iOS app
stack: [Expo, React Native, TypeScript, Hono, Drizzle, PostgreSQL, Better Auth]
---

## Context

A gym notebook for iOS, built alone from the mobile client to the database. Currently in private beta; the repository is private and a demo is available on request.

## What I did

- A React Native (Expo) client with an offline cache.
- A Hono API with Drizzle and PostgreSQL, typed end to end.
- Idempotent photo uploads.
- Authentication with Better Auth.

## Result

The app keeps working in a gym with no signal, and the client and server share one set of types.
