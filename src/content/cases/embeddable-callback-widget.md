---
order: 4
title: An embeddable callback widget for third-party sites
short: Callback widget
company: OneVOIPlanet
period: 09/2023 – 06/2024
role: Front-end developer
summary: A script any website can embed, isolated from the host page, that gets a visitor a call back from the customer's team.
metric:
  value: "8"
  label: appearance settings, texts for 4 visitor states
measures:
  - value: "8"
    label: appearance settings in the widget builder
  - value: "4"
    label: visitor states with their own texts
  - value: "2"
    label: widget types, each with its own builder
  - value: 80+
    label: components I built across 8 cabinet modules
stack: [Vue 3, TypeScript, Vite, Socket.IO, Chrome Extensions]
---

## Context

The customer cabinet of a cloud telephony provider. I was one of two core front-end developers and built 80+ components and pages across 8 product modules, including widgets, call-from-site, call processing, blacklists, SIP trunks and verification.

## Problem

Customers wanted to put a callback button on their own websites. The widget had to run on pages we did not control without breaking them or being broken by their CSS.

## What I did

- An embeddable script loaded asynchronously into third-party sites, rendering inside an isolated iframe to avoid CSS collisions.
- Two widget types, callback and call-from-site, each with its own admin builder: embed snippet, scenario rules and per-widget statistics.
- An appearance builder for the callback widget: button style, size, animation and colours, corner position and offsets, and separate texts for working hours, after hours, leaving the site and deferred calls.
- A call-from-site widget and a softphone shipped as a Chrome extension with its own Vite build, with real-time call-status handling.

Around the widgets I built KPI calculation with xlsx export and the call journal, CRM integrations with SalesDrive, KeyCRM and NetHunt, Telegram, Firebase push notifications, GeoIP country detection and Google sign-in, and upgraded the project to Vite 5 and Vue 3.4.

## Result

A customer pastes one snippet into their site, and visitors can request a call back or call straight from the page, styled to match the site and with statistics for every widget.
