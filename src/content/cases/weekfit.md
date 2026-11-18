---
order: 5
title: WeekFit — an offline-first gym notebook
short: WeekFit
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

## Problem

At a machine you need your own settings: seat height, pin position, the cue that makes the lift feel right. Gym apps log sets and reps, and in my comparison of the five leading ones, none ties a photo to an exercise or a machine. And the place you need it most, the gym floor, is often where the signal drops.

## What I did

- An Expo (React Native) client: body parts, exercise cards with photos and notes, search, and a notebook that opens with no connection.
- A Hono API with Drizzle on PostgreSQL, Better Auth, and photos stored in S3-compatible storage as WebP with a thumbnail.
- 43 unit tests: API suites against an in-memory Postgres, and the offline and upload logic tested through injected file and network ports.

## Decisions

- **My own API instead of a backend-as-a-service.** I wanted to own and understand the whole path from screen to database, so the backend is Hono, Better Auth and Drizzle rather than Supabase or Firebase. That choice also gave me one typed contract and ownership checks in a single middleware.
- **Types without codegen.** The API exports its route types and the app imports them type-only, so a change in a server response breaks the app's typecheck instead of a screen at runtime. There is no generated client to drift.
- **Uploads that can be retried safely.** Every photo carries an idempotency key, backed by a unique index. If two attempts race, the loser deletes its own files and returns the winner's row, and a photo whose response was lost is never uploaded twice.
- **Offline data that belongs to one person.** Photos are saved by ID, not by URL, so hourly re-signed storage links do not trigger re-downloads. Only the signed-in user can write to the offline copy, so a download that finishes after sign-out leaves nothing behind, and an expired session makes the notebook read-only instead of wiping it.
- **Backups proven, not assumed.** Every night the database dump is restored into a clean Postgres and its row counts are compared. Photo files are deleted only after the database transaction commits.

I built it with coding agents working under project rules I wrote; the architecture, the reviews and the decisions above are mine.

## Result

The notebook opens in a gym with no signal, uploads survive a dropped connection without duplicates, and the client and server share one set of types.
