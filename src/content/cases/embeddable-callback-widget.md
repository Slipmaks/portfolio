---
order: 3
title: An embeddable callback widget for third-party sites
company: OneVOIPlanet
period: 2023 – 2024
role: Front-end developer
summary: A script any website can embed, isolated from the host page, that gets a visitor a call back within 30 seconds.
metric:
  value: 30 s
  label: to an automated call-back
stack: [Vue 3, TypeScript, Vite, Socket.IO, Chrome Extensions]
---

## Context

The customer cabinet of a cloud telephony provider. I was one of two core front-end developers and built 80+ components and pages across 8 product modules.

## Problem

Customers wanted to put a callback button on their own websites. The widget had to run on pages we did not control without breaking them or being broken by their CSS.

## What I did

- An embeddable script loaded asynchronously into third-party sites, rendering inside an isolated iframe to avoid CSS collisions.
- Two widget types, callback and call-from-site, each with its own admin builder: embed snippet, scenario rules and per-widget statistics.
- An appearance builder for the callback widget: button style, size, animation and colours, corner position and offsets, and separate texts for working hours, after hours, leaving the site and deferred calls.
- A call-from-site widget and a softphone shipped as a Chrome extension with its own Vite build, with real-time call-status handling.

## Result

A visitor on any customer's site gets an automated call-back within 30 seconds.
