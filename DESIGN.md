---
name: Maksym Matsydulskas — Portfolio
description: A senior front-end engineer laid out like a technical spec sheet.
colors:
  blueprint-cobalt: "#1f3bd6"
  cobalt-wash: "rgba(31, 59, 214, 0.08)"
  on-cobalt: "#ffffff"
  paper: "#f6f6f3"
  paper-sunk: "#ecece8"
  ink: "#111111"
  ink-2: "#4d4d49"
  ink-muted: "#6b6b65"
  hairline: "#d6d6d1"
  blueprint-cobalt-dark: "#8a9bff"
  cobalt-wash-dark: "rgba(138, 155, 255, 0.12)"
  on-cobalt-dark: "#141413"
  paper-dark: "#141413"
  paper-sunk-dark: "#1e1e1c"
  ink-dark: "#e8e8e3"
  ink-2-dark: "#b4b4ad"
  ink-muted-dark: "#8a8a84"
  hairline-dark: "#33332f"
typography:
  display:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 7vw, 88px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(32px, 5vw, 56px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  figure:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "36px"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "24px"
  lead:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  lead-compact:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  name:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "20px"
  body:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "24px"
  reading:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "28px"
  reading-compact:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  label:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "20px"
    letterSpacing: "0.06em"
  control:
    fontFamily: "Host Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "16px"
  mono:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "18px"
  mono-label:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  mono-code:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
rounded:
  none: "0px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-primary:
    backgroundColor: "{colors.blueprint-cobalt}"
    textColor: "{colors.on-cobalt}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  case-tile:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  case-tile-hover:
    backgroundColor: "{colors.cobalt-wash}"
  inline-code:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-code}"
    padding: "0 4px"
---

# Design System: Maksym Matsydulskas — Portfolio

## Overview

**Creative North Star: "The Spec Sheet"**

The site reads like the datasheet of a well-engineered part. The engineer is specified, not sold. It is a Swiss-style system in a technical register: one grotesque typeface for statements, one monospace for metadata, rules that divide the page into numbered, labelled compartments, and figures set large enough to read before the sentence around them. Nothing is decorative. Every line, label and number holds information or separates it.

The page is calm and dense in the way a good spec is dense. Content sits on warm off-white paper in near-black ink. Hierarchy comes from type size, weight and rules rather than colour or depth. A single Blueprint Cobalt is the only chromatic voice, and it means one thing: live, actionable, or the current state. The photo is grayscale so it doesn't introduce a second colour. At night the same sheet turns over: warm near-black paper, warm off-white ink and a lifted cobalt, following the reader's system setting.

Interaction is precise and mechanical, like switches on an instrument panel. Corners are square, borders are 1px, nothing has a shadow, and hover inverts a control to solid in 120ms with no movement.

**Key Characteristics:**
- Paper-and-ink neutrals with one cobalt accent used sparingly.
- A heavy 2px ink rule opens every section, and 1px hairlines divide everything inside it.
- Uppercase tracked labels for section names, monospace for every piece of metadata (dates, countries, indices, stack lists).
- Big numbers carry the claims: metrics are set in the figure style and placed before their prose. On the homepage tiles only a claim of change earns that size: a before/after ("0 → 884") leads its tile, while a count of things ("22 widgets") sits under the title in Mono. The Measured column on a case page sets every figure large, counts included, because each sits beside its own label.
- Square everything, flat everything, motion limited to colour changes.

## Colors

A near-monochrome paper-and-ink palette with a single blueprint-blue signal.

### Primary
- **Blueprint Cobalt** (`blueprint-cobalt`): the only accent. It is used for the primary call to action (Download CV), the "Open to work" status marker, link hover, case-tile "Read the case →" cues, em-dash list markers in case prose, focus outlines, and the browser `accent-color`.
- **Cobalt Wash** (`cobalt-wash`): an 8% tint of the accent, used only as the hover fill of case tiles.
- **On Cobalt** (`on-cobalt`): white text on cobalt fills (Night Paper in the dark theme).

### Neutral
- **Paper** (`paper`): the page background, and the text colour on ink fills.
- **Sunk Paper** (`paper-sunk`): one step darker, used only behind inline code.
- **Ink** (`ink`): body text, headings, button borders, the hover fill of buttons, and the 2px section rule.
- **Graphite** (`ink-2`, 7.8:1 on Paper): secondary text such as lead paragraphs, summaries, job roles and mono metadata.
- **Muted Graphite** (`ink-muted`, 4.9:1): tertiary indices and utility links in section heads ("05 cases", "All work", "GitHub ↗"). It is a visible step lighter than Graphite, so the tertiary tier reads as a tier.
- **Hairline** (`hairline`): every 1px divider, including the hero meta rule, grid cell borders, job rows, project tops and prose heading rules.

### Dark Theme
The dark theme follows `prefers-color-scheme: dark` (`color-scheme: light dark` on the root) until the reader picks one with the Theme Toggle, which sets `data-theme="light"` or `"dark"` on the root. The dark tokens are declared under the media query guarded by `:root:not([data-theme="light"])` and again under `:root[data-theme="dark"]`, each forced theme also sets its own `color-scheme`, and every component switches without its own dark styles. It is composed, not inverted: the paper keeps the light paper's warm hue, and each role keeps its contrast step.
- **Night Paper** (`paper-dark`): the page background and the text on light fills.
- **Night Sunk Paper** (`paper-sunk-dark`): one step lighter than the paper, behind inline code.
- **Chalk** (`ink-dark`): body text, headings, button borders and hover fills, and the 2px section rule (15.6:1 on the paper, slightly below white to cut glare).
- **Night Graphite** (`ink-2-dark`, 8.9:1) and **Night Muted** (`ink-muted-dark`, 5.3:1): the same secondary and tertiary roles as in light, with the same visible step between them.
- **Night Hairline** (`hairline-dark`): every 1px divider, a touch stronger than the light hairline so it still reads on dark.
- **Lifted Cobalt** (`blueprint-cobalt-dark`): the signal colour raised to 7.2:1 on the paper, matching the light cobalt's 7.3:1, so it carries the same weight. Because the fill is now light, the primary button's text flips to Night Paper (`on-cobalt-dark`), and the tile hover wash is 12% instead of 8%.

### Named Rules
**The One Signal Rule.** Blueprint Cobalt is the only hue on the page and covers well under 10% of any screen. It marks action, state or focus, never decoration or emphasis in running text.

**The Grayscale Portrait Rule.** Photography is desaturated (`filter: grayscale(1)`) so imagery never competes with the signal colour. The portrait carries a 1px Hairline frame so a dark photo keeps its square edge on Night Paper.

## Typography

**Display Font:** Host Grotesk Variable (with Helvetica Neue, Arial)
**Body Font:** Host Grotesk Variable (with Helvetica Neue, Arial)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SFMono-Regular, Menlo, Consolas)

**Character:** A sturdy, slightly warm grotesque does all the speaking. Geist Mono does all the measuring. The split is semantic: prose is grotesque, and anything that could appear in a table cell (dates, countries, counts, stacks, indices) is mono.

### Hierarchy
- **Display** (700, clamp 40–88px, 0.95, −0.04em): the name in the hero only, capped at 10ch so it breaks into a stacked block.
- **Headline** (700, clamp 32–56px, 1.0, −0.035em): case-study page titles, capped at 20ch.
- **Figure** (700, 32px/36px, −0.025em): metric values ("0 → 884", "30 s") and the closing "Let's talk." line. Numbers are the loudest thing after the name.
- **Title** (600, 20px/24px): the hero role line and case-tile titles.
- **Lead** (400, 18px/28px): hero and case summaries in Graphite, capped at `--measure-lead` (52ch, about 70 characters in Host Grotesk).
- **Name** (600, 15px/20px): project titles, hero spec values, company names in Experience and the skills list. Tool names never outrank roles or case titles.
- **Reading** (400, 17px/28px; 16px/26px below 640px): case-study prose only, where the engineering manager reads closely. The prose column stays at `--measure-prose`, which resolves against this size (about 72 characters).
- **Body** (400, 15px/24px): all other running text. Prose and job notes are capped at `--measure-prose` (54ch, about 72 characters). Host Grotesk's "0" is wider than its average letter, so `ch` caps render about 1.35× more characters than their number: never set a measure by the 65–75 rule in raw `ch`. Paragraphs, list items and definitions use `text-wrap: pretty`; headings use `text-wrap: balance`.
- **Label** (600, 13px/20px, 0.06em, uppercase): section titles and case-prose H2s only.
- **Control** (500, 13px/16px): buttons and in-tile action cues.
- **Mono** (400, 13px/18px): all metadata, in Graphite by default. 13px is the floor for HTML text; only the 12-unit labels inside schematic drawings sit below it, and they render at 12px or more.
- **Mono Label** (400, 14px/20px): the mono label that explains a figure (Measured rows, flagship figure labels, tile metric and count lines). It is one step above Mono because the reader decodes it while holding the figure in mind.
- **Mono Code** (400, 14px/20px): inline code in case prose, sized to sit in Reading text.

### Named Rules
**The Measured Metadata Rule.** If a value could sit in a spreadsheet cell (a period, country, index, count or tech list), it is set in Mono. Grotesque is reserved for sentences and names.

**The Single Shout Rule.** Uppercase appears only in Label (section titles and case H2s). Nothing else is set in capitals.

**The Whole Compound Rule.** A hyphenated word in a case title ("offline-first", "third-party") never breaks at its hyphen. Host Grotesk has no non-breaking hyphen (U+2011 falls back to another font's glyph), so `splitCompounds` in `src/lib/text.ts` marks each hyphenated word and `CompoundText.astro` wraps it in a `white-space: nowrap` span. Case titles render through it everywhere: the case page `h1`, every Case Tile and the 404 case list.

## Layout

A single centred column, max 1120px wide with a 16px gutter. Sections are separated by a 96px gap (64px below 640px) and each one opens with a 2px ink rule followed by a section head: an uppercase label on the left and a mono index or utility link on the right, aligned to the baseline, with 32px below. Spacing steps are 4, 8, 12, 16, 24, 32, 48, 64 and 96px, and 16px is the default internal pad.

Projects use an auto-fit grid (`minmax(240px, 1fr)`), so it reflows without breakpoints. Case tiles form a ledger grid of four columns (two below 960px, one below 640px). The flagship takes a full row and the other four cases fill the row under it, so five tiles never leave an orphan. The same grid (`.tile-grid`) holds the More work row on case pages. The homepage reads hero, Selected work, Experience, Skills, Projects, then the contact footer, so the page ends on live work rather than a list of tools. Hairlines are drawn top and left on the container and right and bottom on each cell, so borders never double. Experience is a table separated by hairlines: a 160px mono period with the role's length under it in Muted ("1 yr 8 mo"), the content, and a right rail of cobalt mono links named after the case (its `short` title, e.g. "Architecture overhaul →") for roles that have case studies (they wrap into a row under the note below 640px). Roles are ordered by end date, most recent first, in three groups: the main roles with no label, then the short early roles (E-groshi, Visit Everywhere, flagged `earlier`) under a mono "Earlier" label, then non-client part-time work that runs alongside the main career (the university website) under a mono "Alongside, part-time" label. Client work stays in the main list even when it is a part-time contract that overlaps another role (SDA), because it is a role in its own right. Earlier roles keep a one-sentence note. Project cells have 32px gaps, each topped by a hairline.

The main breakpoint is 640px. Below it, the hero tightens so Download CV sits in the first screen of a 390px phone: the photo shrinks from 160px to a 64px square beside the name, the name scales with the viewport (32–56px), the lead drops to Lead Compact (16/24), experience rows collapse to one column, and the case facts grid stacks. Hover styles apply only on devices that hover, buttons grow to 44px on coarse pointers, and mono utility links (including every breadcrumb, the 404 one too) carry a 40px hit area and project title links a 44px one, without changing the layout.

### Named Rules
**The Compartment Rule.** Every section is a labelled compartment: 2px rule, section head, then content. A new block of content gets this structure or it doesn't get a section.

## Elevation & Depth

The system is completely flat. There are no shadows, blurs or layered surfaces. Separation comes from rules (2px ink between sections, 1px hairline within them), and the only tonal shift is Sunk Paper behind inline code. State is shown by fill and colour inversion, never by lift.

### Named Rules
**The Drafting Table Rule.** Everything lies on the same sheet. If something needs to stand out, give it a rule, a weight or the signal colour, never a shadow.

## Shapes

Every corner is square (0px radius), including buttons, tiles, the photo, code chips and focus rings. The status marker is an 8px solid square, not a dot. Borders come in two weights: 2px ink for structural section breaks, and 1px for everything else (hairline for dividers, ink for button outlines). Lists in case prose use a cobalt em dash instead of a bullet.

## Components

Precise and mechanical: controls behave like panel switches. They are exact, respond instantly, and have no ornament.

### Buttons
- **Shape:** square corners (0px), 40px minimum height, 16px horizontal pad, 8px internal gap.
- **Default:** transparent fill, 1px ink border, Control type in ink.
- **Primary:** Blueprint Cobalt fill and border with white text. There is one per contact group (Download CV).
- **Hover:** both variants invert to a solid ink fill with paper text (120ms ease-out on background, colour and border). The primary loses its cobalt on hover, so the signal colour only marks it at rest.
- **Focus:** a 2px cobalt outline offset by 2px, applied globally through `:focus-visible`.

### Contact Group
The row used in the hero, footer and case-page footer. Four controls in priority order, so the decision point stays within four choices: Download CV (the only primary; its accessible name adds "(PDF)"), LinkedIn (the channel the copy says replies fastest, so it comes right after the CV), and email with a joined "Copy" button (shared border, the left border of Copy removed, at least 72px wide, label switches to "Copied" for 1.6s; it ships hidden and appears only when the clipboard is available; named "Copy email address" for screen readers). The row wraps with 8px gaps. Under it, a mono line carries two wrapping parts: "CV: PDF, 72 KB, updated 11/2026" (the size is read from the file at build time, the month from `profile.cvUpdated`; update it whenever a new PDF is published) and "Also on Telegram", where Telegram is an ink text link with a 40px hit area. GitHub is work evidence, not a contact channel, so it lives in the Projects section head instead. Besides the Theme Toggle, this is the only place client JavaScript runs in the UI. On the homepage footer and the case-page footer, a Lead-type line in Graphite sits between the sign-off and the row, saying what he is looking for and which channel replies fastest. The homepage footer carries `id="contact"` as the Contact jump target.

### Theme Toggle
A spec-sheet field, not a switch: "Light / Dark" in Mono, with a muted slash between the two values. The theme on screen is set in Ink with no underline (`aria-pressed="true"`, default cursor); the other is a Graphite underlined button that turns cobalt on hover, like every other link. The two buttons sit in a `role="group"` labelled "Theme", each with a 40px tall hit area. It sits at the right end of the hero meta strip after the jump links (on phones it takes the right of the first row and the jump links drop to a row of their own), after Download CV in the case breadcrumb, and after "Error 404" on the 404 page (on phones the 404 crumbs stack: name, then "Error 404" and the field). Pressing the value already on screen does nothing and stores nothing, so a reader who never picks the other theme keeps following the system. A pick is stored in `localStorage` (`theme`) and applied by a tiny inline script in `<head>` before first paint, so a returning reader never sees the other theme flash. Without JavaScript the field stays hidden and the page follows the system setting. Lives in `src/components/ThemeToggle.astro`.

### Section Jump Links
A `nav` ("Sections") on the right of the hero meta strip: "Work · Experience · Contact" as mono Graphite links with a 40px hit area, pointing at the Selected work and Experience section titles and the contact footer. Plain anchors, no JavaScript and no sticky bar; it gives a 6,000px phone page a way to the parts a recruiter skips to.

### Case Tile
- **Container:** a cell in the ledger grid with hairline borders, 16px padding, square corners and no background at rest.
- **Content order:** two variants, chosen by the data. When the metric is a before/after (contains "→"), the tile is figure-led: mono index and company, then the figure in Figure (the flagship shows up to four), the mono label, the case title in Title, the summary in Graphite (which grows to align tile bottoms), and the cobalt "Read the case →" cue. Otherwise the tile is title-led: mono index and company, a thumbnail of one step of the case's schematic, the case title in Title, then the count and its label on one mono line ("22 widgets in 5 card types"), the summary and the cue. A count never gets Figure size. A tile leads with either a figure or a drawing, never both, and below 640px the drawing is dropped because it costs a phone screen of height for a decorative cue: the thumbnail is the same SVG the case page draws (from `src/components/schematics/thumbs/<case id>.astro`, shared with that case's schematic step), `aria-hidden`, and only title-led tiles get one. The drawing carries no caption: a step name out of its sequence means nothing to a scanning reader, so the tile's title and count line do the explaining.
- **Hover:** the whole tile is the link and fills with Cobalt Wash. Text colour stays ink.
- **Semantics:** the tile is an `article` whose case title is an `h3` link stretched over the whole tile with `::after`. In the DOM the title comes first, and the meta (and, on figure-led tiles, the figure and label) are moved above it visually with flex `order`. Screen readers hear a short heading link instead of the whole tile, and heading navigation lands on every case. "Read the case →" is `aria-hidden`. Keyboard focus draws the cobalt ring around the whole tile (`:has(a:focus-visible)`). Figures with an arrow ("0 → 884", spaced or not) render through `MetricValue.astro`, which reads them aloud as "0 to 884". Every figure rule (what counts as a change, how it splits, how it scales) lives in `src/lib/figures.ts`, covered by `npm test`.
- **Reuse:** one component (`CaseTile.astro`) renders the tile everywhere. On case pages a "More work" section shows the four other cases in the same ledger grid as the homepage row, starting with the next case and wrapping to the first. Its section head carries an "All work" utility link to the homepage work section.

### Not Found Page
The 404 page uses the case-page skeleton: a breadcrumb strip with "Error 404" as mono metadata on the right (never as an eyebrow above the heading), a Headline that states the problem, a Lead that names the recovery, a hairline ledger of the five cases (mono index, case title in Name type, mono company) because a broken forwarded case link is the likeliest way to land here, then the standard contact compartment with the contact note. There is no "See all work" button: the case list and the home breadcrumb already cover it.

### Skip Link
The first focusable element on every page: a default outline Button reading "Skip to content", pinned 8px from the top-left on Paper and moved off-screen until it receives keyboard focus. It targets `#content`, the page's `main`, which carries `tabindex="-1"` so focus moves there in every browser; `main` draws no focus ring because it is a landing point, not a control. The breadcrumb strip and the contact footer sit outside `main`, so the footer is the page's contentinfo landmark.

### Decorative Glyphs
Arrows used as decoration (`↗`, `←`, `→` in links and cues) are wrapped in `aria-hidden` spans. The portrait has an empty `alt` because the name sits in the `h1` beside it.

### Section Head
An uppercase tracked Label on the left and a muted mono index or utility link on the right, sitting under the 2px section rule.

### Hero Spec Strip
The person's datasheet, placed between the role line and the lead paragraph. It is a definition list under a 1px hairline (12px top pad, 24px above it). Each cell is a mono Graphite label over a value in Name type, with a 4px gap. The cells are Experience ("5+ yrs · since 2021", so the count shows where it starts), Core stack ("TypeScript · Vue 3 · React": the two frameworks side by side with no meta-framework, so neither reads as the specialism), Domains, Availability ("Remote · Full-time, contract") and Location ("Ukraine · English B2": the country, not the timezone, is what a recruiter filters on, and so is English level). Location appears only here, never repeated in the meta strip or the footer. They flow in a wrapping row with 16px vertical and 24px horizontal gaps: one row on desktop (keep the five values short enough that it stays one row at 1088px, so the flagship figures start above a 900px fold), stacked rows on mobile. Values are short facts with no sentences. The data lives in `profile.spec`.

### Status Marker
Mono text in cobalt ("Open to work") preceded by an 8px solid cobalt square. The 8px square is reserved for this marker, the way cobalt is reserved for action and state: no other element borrows it. It sits on the left of the hero meta strip, opposite the section jump links, and in the case-page breadcrumb beside Download CV, always above a hairline.

### Experience Row
A two-column ledger row: a mono period on the left with the role's length under it in Mono Muted ("1 yr 8 mo", "4 mo", "5 yrs 1 mo"), then the company as a bold heading (`h3`; `h4` under the "Earlier" and "Alongside, part-time" `h3` labels, so heading navigation reaches every role) with a mono country, the role in Graphite, and the note (capped at `--measure-prose`). Rows are divided by hairlines. The length is computed at build time from `period` by `src/lib/duration.ts` (both end months count, so 03/2025 – 10/2026 is 20 months), covered by `npm test`; it is never typed by hand.

### Skills Ledger
Grouped skills in the same two-column structure as the Experience rows: a mono group label in a 160px column, then the items in Name type. Rows are 12px apart, divided by hairlines and baseline-aligned. Items are a real list separated by muted `·` marks drawn in CSS. The marks sit in the 24px gap, and the parent clips them, so a wrapped line never starts or ends with a separator. The marks are hidden from screen readers. The link to the full Tech graph map is the section-head utility link, not a button. The data lives in `profile.skills`.

### Case Facts
Only for a case without a Measured table: a definition-list strip under a 2px rule, with a mono "Result" label over the metric in Figure and its mono label, and a mono "Stack" label over the stack list, in 1fr and 2fr columns that stack below 640px. When a case has measures, the strip is dropped so the headline figure is never shown twice; the stack moves under the Measured table and the first section starts 64px below the summary.

### Flagship Tile
The first case tile takes a full row of the grid, so it carries more than one figure: every before/after row of that case's Measured table (values containing "→"), each a Figure value over its mono `short` label. A fifth row wraps onto a second line of the same grid instead of being dropped. They sit in a four-column grid with a 32px gap (two columns below 960px), which puts each figure exactly above a tile column of the row below; below 640px they become a single-column list with every label under its value, so the phone reader's first figures read as one even ledger. Each side of a change stays whole; a value that is too wide breaks only before the arrow, so "→ 12,345" moves to the next line together. From 961px up the flagship itself is a four-column grid with the same 32px column gap as its figures, so the columns line up: meta and figures span the row, the case title sits in columns 1–2, and the summary with the "Read the case →" cue sits in columns 3–4, baseline-aligned with the title. The title stays first in the DOM (it is the stretched link), so hover and the focus ring still cover the whole tile. Below that it is the normal stacked tile. Other tiles follow the Case Tile variants: a single before/after figure leads its tile, and a count sits under the title in Mono.

### Stack List
Tool names (case stacks, project stacks) render as a mono list through `StackList.astro`: each name never wraps internally, and the " · " separators are drawn before each item and clipped at the line start, so a line never begins with a separator. Skills use the same clipped-separator pattern at Name size.

### Case Glance
The phone reader's first figures. Below 960px, when a case has Measured rows, a compact list sits under the case summary: its before/after rows (or its first two counts when it has none), each a Figure value with its Mono Label `short` label under it, divided by hairlines. It is `aria-hidden` and hidden at 960px and up, because it repeats the Measured table, which screen readers reach after the story and desktop readers see beside it.

### Measured
The spec-sheet table of a case: every verified before/after or count, so the numbers a hiring manager checks are read as figures, not prose. Its heading says what the figures are: "Measured" when at least one row is a before/after change, "Scope" when every row is a count of what was built (22 widgets, 290 / 317 commits, 23 API routes), so "Measured" only ever promises change. It is an `aside` with that heading in the same uppercase label style as the prose sections, holding a definition list. Each row shows the value in Figure (arrows read as "to") above its mono label, with a hairline under every row. Values stay short ("337 → 1", "26 → 4") and units live in the label, so a row fits a 320px phone. In the DOM it follows the prose `article`, so a screen reader hears the story before the figures. On desktop it sits in the right column beside the prose, top-aligned with the first section and sticky 24px from the top; below 960px it follows the prose, so a phone reader learns what the project was before reading its numbers. It renders only when the case's `measures` frontmatter has entries, and only verified figures go in it. A "Stack" block in the same label style closes the aside. Every before/after row also draws its scale: two 6px bars under the label, measured against the larger of the two numbers. "Before" is an empty track outlined 1px in Muted and "after" is solid Ink, so a reader sees 26 → 4 shrink before reading it, in either theme. Magnitude suffixes count ("2.1k" is 2,100). No bars are drawn when the two sides carry different units ("2.1 s → 900 ms") or when the smaller side is under 5% of the larger (0 → 884, 337 → 1), because a sliver reads as a stray pixel and a lone full bar reads as a rule; the figure already says it. The bars are aria-hidden, 6px so they can never be mistaken for a 1px hairline, and never Blueprint Cobalt, which stays reserved for action, state and focus.

### Schematic
The drawing a datasheet always carries. Client screenshots are under NDA, so every case page has one schematic of its own mechanism instead, drawn from what the case text states and nothing more. It sits between the case header and the case body, under a 1px hairline with an uppercase "Schematic" label (an `h2`) on the left and a mono caption on the right, both inside the `figcaption`. Below that, four numbered steps in the four-column grid of the tile row (two columns below 960px, one below 640px), each topped by a hairline: a mono index and the step name in Name type, the drawing, then one or two sentences in Body Graphite. A muted arrow sits in the gap between steps on the same row. Below 640px the steps become a horizontal filmstrip instead of a 1,100px stack: one row, each step 82% of the width so the next one peeks in, scroll-snapped to each step's start, with a thin Muted scrollbar and 12px under it for the bar. The drawings keep their 280px cap there, never a 2×2 grid that would shrink their text to about 8px. Only the strip scrolls; the page never overflows sideways. The list is a keyboard stop (`tabindex="0"`, named "Schematic steps") so arrow keys scroll it, and it takes the global focus ring.

Drawings are inline SVG on a 240×96 viewBox, capped at 280px wide so their 12-unit mono text never renders below about 12px. Strokes are 1px and non-scaling, corners square, nothing filled except small solid markers. Ink draws the structure, Muted draws context and the old path, and Blueprint Cobalt draws only the current path (the new helper, the chosen card type, the winning write). Labels inside the drawing are short mono words; the explanation lives in the HTML text, and the drawings are `aria-hidden`. Each case's drawing is its own component in `src/components/schematics/<case id>.astro`, built from `Schematic.astro` and `SchematicStep.astro`; the case page picks it up by the case id, and a case without one renders no figure. The step that best stands alone lives in `schematics/thumbs/<case id>.astro` and doubles as that case's tile thumbnail. Every drawing carries `class="drawing"`, and its stroke and text styles live once in `global.css`.

### Breadcrumb
The identity strip at the top of case pages, above a hairline, for a reader who arrives on a forwarded case link. On the left, a mono "← Name" link in ink with no underline (its accessible name adds "home page"), then the role and focus in Graphite, written exactly like the hero title ("Senior Front-End Engineer · Lead | TypeScript"). On the right, the cobalt status marker and a cobalt mono "Download CV" link with a 40px hit area; like the Contact Group button, its accessible name adds a visually hidden "(PDF)". Below 640px the name, role and actions stack into three short lines. The case's position ("Case 02 / 05") opens the mono meta line above the title. The period on that line is the case's own dates; a case that covers a whole engagement says so ("engagement 03/2025 – 10/2026"), so a span is never read as the length of one project. Separators in the role and the dash in every period are joined with non-breaking characters (`src/lib/text.ts`), so a line never starts with "·" or "|" and a date range never splits at its dash.

## Do's and Don'ts

### Do:
- **Do** open every new section with the 2px ink rule and a section head (uppercase Label left, mono index right).
- **Do** set dates, countries, counts, indices and stack lists in Mono, in Graphite.
- **Do** lead with the figure when it is a before/after: put it in the Figure style before the sentence that explains it. On tiles, a count of things goes under the title in Mono.
- **Do** keep Blueprint Cobalt for action, state and focus only: one primary button per contact group, status, hover, focus and list markers.
- **Do** use hairline-bordered auto-fit grids (`minmax(240px, 1fr)`) for collections, with borders split between container and cells so they never double.
- **Do** keep motion to colour and background changes at 120ms ease-out, and disable it under `prefers-reduced-motion`.
- **Do** cap measure: `--measure-lead` (52ch) for leads, `--measure-prose` (54ch) for case prose and job notes.

### Don't:
- **Don't** round any corner. The radius is 0px everywhere.
- **Don't** add shadows, blurs, gradients or layered surfaces.
- **Don't** introduce a second accent hue or tinted section backgrounds. Paper and ink plus one cobalt is the whole palette.
- **Don't** use uppercase outside section and case-prose labels.
- **Don't** show colour photography. Portraits are grayscale.
- **Don't** animate position, scale or opacity on hover. State changes are fill and colour inversions only.
- **Don't** use bullets or icons for list markers in prose. Use the cobalt em dash.
