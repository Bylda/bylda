# CLAUDE.md — Bylda V1 parallel frontend build

Auto-loaded in every session in this repo. Read it all before your first edit.

## 0. Read this first

1. **`FRAMES.md` has every frame's node ID.** Pull frames from there, by ID.
   ⚠️ `get_metadata` **without** a `nodeId` is broken on this file — it lists only
   page `0:1` and hides the other 20. Pages are `0:1` and `1:2`…`1:21`.
2. **Read page 20 Dev Handoff (`1:21`) and page 01 Foundations (`1:2`) before your
   first screen.** Dev Handoff governs. Where it disagrees with this file, it wins
   — and several values in §3 below were corrected from it already.
3. **≈69% of the data fields V1 needs have no backend (5 of 6 core objects)** (`GAPS.md`). `BehavioralEvent`,
   `Behavior`, `Insight`, `OutcomeAssociation` and `CoachingFocus` have no tables.
   You will mock more than you wire. Expected, not failure.
4. **This repo's frontend is a different product** (`AUDIT.md`). 87 routes of
   Launchpad Nova + CRM. Only ~23 map to a V1 screen. 29 (plus 9 redirect stubs
   into them) have no V1 counterpart and are **not yours to delete.**

**128 product views across 21 pages.** Build from source pages 04–18 only.
Page 19 is 101 `PROTO ·` duplicates for the clickable prototype — never build from it.

---

## 1. Goal

Rebuild the entire frontend to the **Bylda V1** Figma
("Bylda — Behavioral Intelligence (V1)"), wired to the **existing backend exactly
as it is**. Four people in parallel: Ansh (Lane 1 + Foundation), Dravin (Lane 4),
Mayur (Lanes 5, 2 and 6, in that order) and Tirth (backend).

Bylda observes sales conversations, names the behavior that matters, and measures
whether it changed. Loop: **OBSERVE → UNDERSTAND → RECOMMEND → CHANGE → MEASURE ↺**

---

## 2. HARD RULE — zero backend changes

Every path in `BACKEND_BOUNDARY.md` is **read-only.** Read backend code only to
learn contracts.

**Never** add, modify or delete an endpoint, field, table, column, type, RLS
policy, migration or edge function. Never create, fake or commit an env file or a
secret. Never regenerate `src/integrations/supabase/types.ts`.

Ambiguous → **ask.** Don't guess, don't "just add a column".

Check yourself before every push:

```bash
bun run boundary
```

CI runs the same check on every PR into `integration` and `main`
(`.github/workflows/backend-guard.yml`). Both parse the pattern block in
`BACKEND_BOUNDARY.md`, so that file is the one place patterns live.

`BACKEND_BOUNDARY.md` has an **UNSURE** section. Treat everything in it as
read-only until an owner rules. That includes `src/lib/invokeEdge.ts`,
`src/lib/auth.tsx` and `src/integrations/supabase/client.ts`.

---

## 3. Design

Source of truth: Figma page 01 Foundations (`1:2`, frame `3:2`) **and** the real
components on page 02 (`1:3`). Pulled with `get_variable_defs` / `get_design_context`
on 2026-09-30. Tokens live in **`src/styles/bylda.css`** — the only file in `src/**`
allowed to contain a raw hex or `rgb()` (`bun run tokens:check` enforces it).

### Two token layers — components use the SEMANTIC layer only

**Primitive** (Figma `primitive/*`, raw values — never referenced from a component):

| Figma variable | Value | CSS var |
| --- | --- | --- |
| `primitive/pearl/0` | `#F8F7F5` | `--by-pearl-0` |
| `primitive/pearl/50` | `#F2F1EE` | `--by-pearl-50` |
| `primitive/pearl/100` | `#EAE8E4` | `--by-pearl-100` |
| `primitive/white` | `#FFFFFF` | `--by-white` |
| `primitive/silver/200` | `#E5E3DF` | `--by-silver-200` |
| `primitive/silver/300` | `#D3D0CB` | `--by-silver-300` |
| `primitive/silver/500` | `#9B9892` | `--by-silver-500` |
| `primitive/silver/600` | `#6E6C68` | `--by-silver-600` |
| `primitive/graphite/700` | `#3A3A3F` | `--by-graphite-700` |
| `primitive/graphite/800` | `#2A2A2E` | `--by-graphite-800` |
| `primitive/graphite/900` | `#1B1B1E` | `--by-graphite-900` |
| `primitive/ink` | `#0B0B0C` | `--by-ink` |
| `primitive/signal/improve` · `-bg` | `#2F7D5B` · `#E7F2EC` | `--by-improve` · `--by-improve-bg` |
| `primitive/signal/regress` · `-bg` | `#C2413B` · `#F8E7E5` | `--by-regress` · `--by-regress-bg` |
| `primitive/signal/attention` · `-bg` | `#C27A1A` · `#F8EEDC` | `--by-attention` · `--by-attention-bg` |
| `primitive/signal/info` · `-bg` | `#6A5AD0` · `#EEEBFA` | `--by-info` · `--by-info-bg` |

**Semantic** (Figma `surface/*`, `text/*`, `border/*` — what components bind to).
Tailwind utilities are generated from these names only (prefix `by-`):

| Figma variable | → primitive | Utility |
| --- | --- | --- |
| `surface/canvas` | pearl/0 | `bg-by-surface-canvas` |
| `surface/raised` | white | `bg-by-surface-raised` |
| `surface/inset` | pearl/50 | `bg-by-surface-inset` |
| `surface/rail` | ink | `bg-by-surface-rail` |
| `surface/sidebar` | graphite/900 | `bg-by-surface-sidebar` |
| `text/primary` | ink | `text-by-text-primary` |
| `text/secondary` | silver/600 | `text-by-text-secondary` |
| `text/tertiary` | silver/500 | `text-by-text-tertiary` |
| `text/on-dark` | pearl/100 | `text-by-text-on-dark` |
| `text/on-dark-muted` | silver/500 | `text-by-text-on-dark-muted` |
| `border/engraved` | silver/200 | `border-by-border-engraved` |

Foundation adds a few semantic names Figma uses as raw primitives on components
(`by-border-control` = silver/300 on secondary buttons and neutral tags,
`by-surface-control-dark` = ink on primary buttons, `by-surface-hover` = pearl/50,
`by-surface-muted` = pearl/100, the rail/sidebar hairlines and the signal pairs
`by-signal-{improve,regress,attention,info}` + `-bg`). Full list: `src/styles/bylda.css`.

**Signal colours encode behavioral direction only — never decoration.** The fourth
signal is **`info`**, not "pattern" (`Tag` tones: `Improve · Regress · Attention · Info · Neutral`).
There is **no Accent `#C9C5BE`** — it is not a Figma variable; the earlier draft was wrong.

### Type — 16 named styles, exact from Figma

| Style | Family | Size / line-height / tracking |
| --- | --- | --- |
| `Brand/Logo` | **Cinzel** Regular | 20 / 1.1 / +12% — **the BYLDA wordmark only** |
| `Display/XL` | **Newsreader** Medium | 44 / 1.08 / −2% |
| `Display/L` | **Newsreader** Medium | 30 / 1.12 / −1.5% |
| `Display/Label` | Inter SemiBold | 11 / 1.3 / +10% |
| `Editorial/H1` | Newsreader Medium | 34 / 1.12 / −1.5% |
| `Editorial/H2` | Newsreader Medium | 24 / 1.2 / −1% |
| `Editorial/Insight` | Newsreader Medium | 18 / 1.35 / −0.5% |
| `Editorial/Quote` | Newsreader Italic | 15 / 1.45 / 0 |
| `UI/Title` | Inter SemiBold | 15 / 1.35 / −0.5% |
| `UI/Body` · `UI/Body Strong` | Inter Regular · Medium | 14 / 1.5 / −0.3% |
| `UI/Small` | Inter Regular | 12.5 / 1.45 / −0.2% |
| `UI/Label` | Inter SemiBold | 11 / 1.3 / +6% |
| `Mono/Data` | Geist Mono Regular | 12 / 1.4 / 0 |
| `Mono/Micro` | Geist Mono Medium | 10 / 1.3 / +6% |
| `Mono/Metric` | Geist Mono Light | 28 / 1.1 / −2% |

Utilities: `type-display-xl`, `type-editorial-insight`, `type-ui-body`, `type-mono-micro`, …
(one per style). ⚠️ `Display/XL` and `Display/L` are **Newsreader**, not Cinzel —
the earlier draft said otherwise. Cinzel is a stand-in for the licensed Ragnar/Nordic
face and is used **only** by `Brand/Logo`. Fonts ship via `@fontsource`.

### Space, radius, elevation

- **Spacing** — 4pt base: `space/4 8 12 16 24 32 40 56 72`.
- **Radius** — what the page-02 components actually use: **card 10** (Insight Card,
  message blocks), **control 6** (buttons, inputs, evidence), **tile 8**, **badge 4**,
  **menu 12**, **pill 999** (tags, avatars). ⚠️ Page 01 prints *"Cards: 2. Inputs/buttons: 4"*
  but no component in page 02 uses 2 or 4 for those — Figma contradicts itself;
  we follow the components (logged in `LANE_REQUESTS.md` #8).
- **Hairlines** — 1px `by-border-engraved`. Raised cards have **no shadow**.
- **One soft shadow** — `shadow-by-float` = `0 12px 32px rgba(0,0,0,.12)`, the menus
  and popovers on `50:27312`, plus modals and hero cards (§13.3). Nothing else casts a shadow.

### Shell, motion, icons

**Shell** — icon rail **64** + sidebar **248** + top bar **56** + main + context panel
**344**, closable. At **1280** the context panel becomes an overlay drawer; at **1024**
icon rail only. 312 + 784 + 344 = 1440. Built once in `src/components/bylda/shell/`
from **App Shell / Navigation v2** (`37:51`) and **Workspace Top Bar** (`36:52`).
`App Shell / Navigation` (`6:2`) is v1 — superseded.

**Motion** — 180–220ms ease-out. Panels slide 180ms. Insights resolve in (opacity +
4px rise, 220ms). The timeline playhead is the only continuously moving element. **No
typing effects. No fake progress. No shimmer.** Nothing bounces.

**Icons** — Lucide at **1.6** stroke, via `<Icon name="calls" />` from
`@/components/bylda`. 34 names from `Icons` (`35:15`).

**Never** use gradients, orbs, glassmorphism, donut KPI walls, confetti or
gamification. The single exception is Figma's own warm-metal avatar monogram
(`--by-avatar-metal`, `4:35`). **Never redesign away from Figma.** If Figma looks
wrong, say so in `LANE_REQUESTS.md` — don't fix it silently.

The legacy theme (`src/styles.css`, `src/lib/theme-palette.ts`) stays for the
quarantined Launchpad/CRM routes. V1 code never uses its utilities (`bg-primary`,
`text-muted-foreground`, …) — only `by-*`.

## 4. Product rules

Straight from Dev Handoff (`1:21` → Implementation rules, `21:143`):

- **Every insight renders confidence + sample size.** Use the `Confidence`
  component (`4:66`, Low/Medium/High). **Low confidence = observation only — no
  action button.** Never render an insight without `sample_n`.
- **Language:** "associated with", "observed alongside", "pattern detected".
  **The word "caused" requires an explicit causal-test flag on the insight.**
- **Reps never see peer comparisons or team rankings. Enforce in the UI.**
  There is **no backend guarantee**: RLS on `calls` is
  `is_org_member(organization_id, auth.uid())`, so any member can read every call
  in the org. Filter on `user_id` in `/lib/data` **and** never render a peer
  surface in a rep view. **One exception (§13.6):** the **team median** on R2 may
  render as an anonymous aggregate — one number, no names, no ranks, no
  distribution — and is **hidden when the team has fewer than 5 reps**. The data
  layer returns the aggregate (and `team_size`); the rep view never receives peer
  rows. The Figma says it out loud on two frames — keep both
  lines: *"No team rankings here. This view is only about you."* (`8:2`) and
  *"Your manager sees this same page. No one else does."* (`32:129`).
- **Sparklines share a fixed y-range per behavior**, so a steady rep looks steady.
  Dev Handoff: *"fix in build — mockups auto-scale."* Do not copy the mockup scaling.
- **Bylda never writes to your CRM in V1** (`31:1464`). Read-only, always.
- **Evidence thresholds** — don't invent your own:
  - Patterns start at **~50 calls per team** (`19:6`).
  - A rep's insights appear at **10 analyzed calls** (`19:19`).
  - `OutcomeAssociation` is **hidden when `n_closed` < 30** → show the
    `Behavior · Insufficient data` state (`19:30`), which needs *"~30 calls with
    and without it, plus outcomes from your CRM."*
- **Home is an intelligence feed** — insight → evidence → action. Not a KPI grid,
  not a chat stream. Tabs: `For You · Team Updates · Calls · Coaching · Reports · Mentions`.
- **Coaching is 4 objects** — Focus, Evidence, Acknowledgement, Result. No LMS, no
  courses, no quizzes.
- **Data Sources and Delivery Channels are separate settings areas.** A team can
  use Gong as the source and Slack as the channel; disconnecting a channel never
  stops analysis.
- **Notification severity is a dot and a word, never a red badge or a pile-up
  count** (`31:1197`).
- **Search never answers from memory.** It converts the question into filter chips
  the user can see and edit; every result links to a call (`31:909`).
- **When Bylda lacks evidence it says so, with the number it needs. It never fills
  space with fake intelligence** (`19:2`). Skeletons are static — the Figma
  labels them **"NO SHIMMER THEATRICS"**.
- **Voice**: sharp sales colleague. Casual, concise, contractions.
- **Every screen has empty / loading / error states** (page 17, `Y1`–`Y13`).

## 5. Data

**Screens import ONLY from `@/lib/data`.** No `fetch`, no `supabase.*`, no
hard-coded numbers in a component. Ever. The whole layer is documented in
**`src/lib/data/README.md`** — read that, not the adapters.

```
src/lib/data/
  types/<domain>.ts      view-model types (what screens see)
  db-types.ts            TEMP row types for the 16 tables missing from types.ts
  mocks/                 deterministic Acme Revenue fixtures
  <domain>/source.ts     export const SOURCE: 'mock' | 'real' | 'hybrid'
  <domain>/queryKeys.ts  TanStack Query keys
  <domain>/fetchers.ts   real reads — via supabase client / invokeEdge only
  <domain>/map.ts        row → view model
  <domain>/hooks.ts      useX() — the only thing screens call
  index.ts               the only import surface
```

```ts
import { useCallReview } from "@/lib/data";
```

Every hook is a TanStack Query hook with the same shape in every mode. Set
**`VITE_BYLDA_MOCKS=true`** to force every domain to mocks (demo, Storybook-style
work, offline). Otherwise each domain follows its `SOURCE`.

### Core data objects — from Dev Handoff (`21:91`). Model these exactly.

| Object | Key fields | Notes |
| --- | --- | --- |
| **Call** | `id, rep_id, account, opportunity_id?, started_at, duration, type, stage_at_call, outcome, coaching_value, status(processing\|ready\|failed\|partial)` | `coaching_value` drives ranking in Calls + Home. `outcome` back-filled from CRM. |
| **BehavioralEvent** | `call_id, type(objection\|interruption\|question\|monologue\|pause\|sentiment_shift\|control_shift\|stage), t_start, t_end, speaker, attrs{}` | The atomic layer. Everything above is computed from events — immutable, versioned by detector. |
| **Behavior** | `key, name, definition, rule(json), methodology_id, enabled, direction(higher_is_better?)` | Template-driven, admin-editable in Methodology → Behavior rules. |
| **Insight** | `kind(pattern\|regression\|improvement\|call\|report), headline, body, confidence(low\|med\|high), sample_n, affected_rep_ids, evidence[], action` | Headline must pass the language rule. **Never render without `sample_n`.** |
| **OutcomeAssociation** | `behavior_key, outcome, with_rate, without_rate, n_with, n_without, confidence, confounders[]` | Association only. **Hide when `n_closed` < 30** → "insufficient data" state. |
| **CoachingFocus** | `rep_id, behavior_key, note, evidence[], metric, baseline, target, judge_after, status(assigned\|acknowledged\|measuring\|held\|not_yet\|reverted), result{}` | The 4-object coaching loop. No courses, no quizzes. |

Only **Call** has real backing today (`calls` + `call_transcripts` + `call_insights`),
and even that is partial — no `coaching_value`, no `stage_at_call`. The other five have
**no tables**; their real fetchers throw `NOT_BUILT: <object>` and the mocks follow the
**proposed row contracts in `BACKEND_BACKLOG.md`**, which Tirth builds to.

A missing field is a gap in the **data layer**, never in a screen: typed in
`types/`, mocked in `mocks/`, tagged `// GAP:` on the line above, logged in `GAPS.md`.

**Fixture** — every mock uses it, so screens compose into a coherent demo:
**Acme Revenue** workspace · **Kiran Patel** owner · **Dana Whitfield** manager ·
**Mid-Market AE** team of 9 · **Jordan Reyes** rep · **#acme-logistics** deal room.
Supporting cast in the Figma: reps Sarah, Alex, Mia, Theo, Priya, Nina; accounts
Acme Logistics, Brightline Freight, Kestrel Labs, Vela Systems, Ferro Metals,
Lumen Dental, Orchid Health, Northwind Health; David Park (CFO), Sarah Cole (Ops).

⚠️ `src/integrations/supabase/types.ts` is **stale** (16 queried tables missing).
Their row types live in `src/lib/data/db-types.ts` (TEMP) until Tirth regenerates it.

## 6. Naming

A screen is a component named by its Figma code from `FRAMES.md`, one per file, in
your lane's component folder. A route file is **thin**: `createFileRoute` plus the
screen import. Foundation already created both for every V1 screen — you fill the
screen file, you rarely touch the route file.

```
src/components/lanes/lane-2/calls/C1CallsIndex.tsx      ← you build this
src/routes/app/calls/index.tsx                          ← already exists, imports it
```

```ts
// src/routes/app/calls/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { C1CallsIndex } from "@/components/lanes/lane-2/calls/C1CallsIndex";
export const Route = createFileRoute("/app/calls/")({ component: C1CallsIndex });
```

V1 routes are **directory routes** (`src/routes/app/calls/…`), one directory per
area, owned by one lane. The legacy flat files (`app.crm.calls.tsx`, …) stay beside
them untouched. `src/routeTree.gen.ts` is generated — never hand-edit it; resolve a
merge conflict there by running `bun run build` (or `bun run dev`) and committing the
regenerated file.

---

## 7. Branching

- Each lane: `lane-<n>-<name>` off `integration` (e.g. `lane-4-dravin`). Backend work: `backend/<object>` (Tirth only).
- **Merge `integration` into your branch daily.** Not weekly.
- Open **small PRs into `integration`, one per section.** Never PR to `main`.
- CI must be green and `bun run boundary` clean before you ask for review.

---

## 8. Lane map + folder ownership

**Owners:** Lane 1 **Ansh** · Lane 2 **Mayur** · Lane 4 **Dravin** · Lane 5 **Mayur** ·
Lane 6 **Mayur** · Backend track **Tirth**. Foundation, the data layer (`src/lib/data/**`)
and the frozen wrappers are **Ansh**'s.
Mayur's order: finish Lane 5 → Lane 2 (Calls → Coaching → Search & Ask) → Lane 6
(Reports → Rooms & DMs). There is no Lane 3 — its areas are in Lanes 2 and 4. 10 Reports
belongs to Lane 6; its placeholders live under `lane-4/reports/`.

### Foundation — frozen once merged (owner Ansh)

| What | Paths |
| --- | --- |
| Tokens + legacy theme | `src/styles/**`, `src/styles.css` |
| UI kit | `src/components/bylda/**`, `src/components/ui/**` |
| Shell + nav config | `src/components/bylda/shell/**`, `src/routes/app.tsx` |
| Data layer | `src/lib/data/**` |
| Dev gallery | `src/routes/dev/**` |

Changes go through `LANE_REQUESTS.md`. See §12 A for the full frozen list.

### Lanes — each lane edits ONLY these paths

Paths are real TanStack Router directory routes. Every V1 screen already has a
route file and a placeholder screen component (§12 G). **No route folder is shared.**

| Lane | Owner | Figma areas (build order) | Route folders (URL) | Component folder |
| --- | --- | --- | --- | --- |
| 1 | **Ansh** | 05 Manager/Admin Home → 14 Notifications → 08 Intelligence | `src/routes/app/home/**` (`/app/home`) · `src/routes/app/notifications/**` · `src/routes/app/intelligence/**` | `src/components/lanes/lane-1/**` |
| 2 | **Mayur** | 07 Calls → 11 Coaching → 13 Search & Ask | `src/routes/app/calls/**` · `src/routes/app/search/**` · `src/routes/app/coaching/**` | `src/components/lanes/lane-2/**` |
| 4 | **Dravin** | 04 Onboarding/Auth → 06 Rep → 09 Team | `src/routes/welcome/**` (`/welcome/*`, outside the shell) · `src/routes/app/rep/**` · `src/routes/app/team/**` | `src/components/lanes/lane-4/**` **except** `lane-4/reports/**` |
| 5 | **Mayur** | 15 Integrations → 16 Settings + Methodology → 18 Mobile (17 States ✅ done) | `src/routes/app/connections/**` · `src/routes/app/workspace/**` · `src/routes/app/methodology/**` · `src/routes/app/states/**` · `src/routes/m/**` (390 mobile, outside the shell) | `src/components/lanes/lane-5/**` |
| 6 | **Mayur** | 10 Reports → 12 Rooms & Messages — **mocks only** | `src/routes/app/rooms/**` · `src/routes/app/dm/**` · `src/routes/app/reports/**` · `src/routes/doc/**` (email/push/print, outside the shell) | `src/components/lanes/lane-6/**` · `src/components/lanes/lane-4/reports/**` (Reports placeholders stay at that path) |
| — | **Tirth** (backend) | `BACKEND_BACKLOG.md`, in order | `supabase/**` etc., on `backend/*` branches only | — |

**Real view counts** (`FRAMES.md`): Lane 1 **20** (7 + 2 + 11) · Lane 2 **24** (9 + 12 + 3) ·
Lane 4 **27** (11 + 3 + 13) · Lane 5 **32** (3 + 18 + 11; the 13 page-17 states are done —
Foundation built them) · Lane 6 **24** (14 + 10).

### Route conflicts — resolved

The V1 URL an area would naturally take is already used by a live legacy route in
these cases. The legacy file stays untouched; V1 takes a different path:

| V1 screen(s) | Natural path | Taken by (legacy) | V1 path | Owner |
| --- | --- | --- | --- | --- |
| 04 Auth + Onboarding `A1`–`A11` | `/auth/*`, `/onboarding` | `auth.*.tsx`, `onboarding.tsx`, `signup.tsx` (live sign-in) | `/welcome/*` | Lane 4 |
| 15 Integrations `X1`–`X3` | `/app/integrations` | `app.integrations.tsx` | `/app/connections` (Figma flow 11 is "Connections") | Lane 5 |
| 16 Settings `E1`–`E8`, `E15`–`E18` | `/app/settings` | `app.settings.tsx` | `/app/workspace/*` | Lane 5 |
| 05 Admin Home `H7` | `/app/admin` | `app.admin.tsx` | `/app/home/admin` | Lane 1 |

Cross-area screens, each assigned to exactly one lane:

| Screen | Why it's shared | Assigned to | Where |
| --- | --- | --- | --- |
| `R3` Call Review — Rep perspective | a Call Review (07) seen by a Rep (06) | **Lane 4** | `/app/rep/calls/$callId` |
| `C9` Calls — Rep view, `G11` Coaching — Rep view | rep-facing, but live inside Calls / Coaching | **Lane 2** | `/app/calls/mine`, `/app/coaching/mine` |
| `T8`–`T12` Rep Profile | opened from Team, Home, sidebar People | **Lane 4** | `/app/team/reps/$repId/*` |
| `G2` Assign Coaching modal | opened from Home, Calls, Intelligence, + New | **Lane 2** | `/app/coaching/assign` + exported component |
| `S1` ⌘K palette, `S3` Ask Bylda panel | shell overlays | **Lane 2** | components the shell mounts: `lanes/lane-2/search/S1CommandPalette.tsx`, `S3AskByldaPanel.tsx` |
| `N1` Notifications drawer | shell overlay | **Lane 1** | component the shell mounts: `lanes/lane-1/notifications/N1NotificationsDrawer.tsx` |
| `O8`–`O11` special rooms | same room route, different room kind | **Lane 6** | `/app/rooms/$roomId` picks the screen by kind |
| `B10`, `B11` responsive Manager Home | shell breakpoints + Lane 1's H1 | **Foundation** builds the breakpoints; **Lane 5** QA's them | `/app/home` at 1280 / 1024 |
| `Y1`–`Y13` system states | every lane uses them | **Foundation** built them — ✅ done | `@/components/bylda` → `SystemState` |

Legacy routes that map to a V1 screen (`AUDIT.md`) are **not edited during lane
work**. At final cleanup their owner replaces each with a redirect to the V1 path:
Lane 4 — `auth.*`, `signup`, `onboarding`; Lane 6 — `app.bylda.reports`; Lane 1 — `app.index`,
`app.bylda-home`, `app.monitoring`; Lane 2 — `app.crm.calls`, `app.crm.conversations`;
Lane 5 — `app.integrations`, `app.crm.setup`, `app.settings`, `app.billing*`,
`app.playbook`, `app.admin`, `app.context-memory`, `app.memory`.

**Edit ONLY your lane's paths.** Need a shared change? Log it in `LANE_REQUESTS.md`
and build a **local copy in your component folder** so you're never blocked.

**Nobody touches** the 29 quarantined routes (`LEGACY_ROUTES.md`) or anything in
`BACKEND_BOUNDARY.md`.

---

## 9. Working rules

- **Build each screen from `design-ref/<screen-code>/spec.md` (+ `frame.png` if present). Do NOT call Figma tools unless that screen's design-ref folder is missing. For the Figma check before the PR, compare your screenshot to design-ref instead of calling Figma.**
  Tokens: `design-ref/_tokens.md`; components: `design-ref/_components/<name>/spec.md`. Index: `design-ref/README.md`.
- Pull Figma frames **by node ID from `FRAMES.md` only.** Never `get_metadata` on
  a whole page you don't need — node by node.
- ⚠️ `get_metadata` with **no** `nodeId` reports only page `0:1` and hides the
  other 20. It is broken on this file. Use the page map in §10.
- A whole screen page's metadata often exceeds the tool's output cap and gets
  written to a file instead — parse that file, don't re-request.
- Read **page 20 Dev Handoff (`1:21`)** and **page 01 Foundations (`1:2`)** before
  your first screen. Dev Handoff governs; where it disagrees with §3, it wins —
  raise it in `LANE_REQUESTS.md` so §3 gets fixed once for everyone.
- **One screenshot per screen, at the end**, to `/design-qa/<code>.png`.
- Don't explore outside: your lane folders + `CLAUDE.md` + `src/components/bylda/index.ts`
  + `src/lib/data/README.md`. Those three files are the whole API you build against.
- **Start a fresh session per section.** Context rot is real on a build this size.

---

## 10. Screen inventory — 128 product views, 21 pages

Node IDs in `FRAMES.md`. `get_metadata` with no `nodeId` lists only `0:1` — broken.

| Node | Page | Views |
| --- | --- | --- |
| `0:1` | 00 — Product Architecture | poster, reference |
| `1:2` | 01 — Foundations | tokens — **read first** |
| `1:3` | 02 — Components | 14 components |
| `1:4` | 03 — Global Shell | shell symbols |
| `1:5` | 04 — Onboarding | 11 |
| `1:6` | 05 — Manager | 7 |
| `1:7` | 06 — Rep | 3 |
| `1:8` | 07 — Calls | 9 |
| `1:9` | 08 — Intelligence | 11 |
| `1:10` | 09 — Team | 13 |
| `1:11` | 10 — Reports | 10 |
| `1:12` | 11 — Coaching | 12 |
| `1:13` | 12 — Rooms | 14 |
| `1:14` | 13 — Search | 3 |
| `1:15` | 14 — Notifications | 2 |
| `1:16` | 15 — Integrations | 3 |
| `1:17` | 16 — Settings | 18 |
| `1:18` | 17 — Empty & System States | 13 states |
| `1:19` | 18 — Mobile / Responsive | 11 |
| `1:20` | 19 — Prototypes | 101 copies — **don't build** |
| `1:21` | 20 — Dev Handoff | **governs** |

**13 prototype flows (0–12)**, all with sidebar/rail/top bar/tabs clickable:
`0` Sign in · `1` Manager day · `2` Rep day · `3` Pattern · `4` Sign up & connect ·
`5` Rep invite · `6` Rooms · `7` Messages · `8` Ask & find · `9` Intelligence ·
`10` Team · `11` Connections · `12` Settings

## 11. Definition of done, per section

1. Matches Figma at **1440** (390 if mobile).
2. **Tokens only** — semantic `by-*` utilities; no raw hex / `rgb()` outside
   `src/styles/bylda.css`. `bun run tokens:check` is a hard gate.
3. **Empty, loading and error states all present.**
4. Links match the **page 19** prototype (13 flows, 0–12).
5. `bun run typecheck` at the known 8 · `bun run lint:changed` clean · `bun run build` green.
6. `bun run boundary` clean · `bun run tokens:check` clean.
7. Confidence + sample size on every insight; low confidence = no action button;
   no causal language; no peer data in a rep view; sparklines on a fixed y-range;
   `OutcomeAssociation` hidden below n=30.
8. Short report, then **STOP.**

### Commands

```bash
bun install
bun run dev           # vite dev
bun run typecheck     # tsc --noEmit -p tsconfig.typecheck.json
bun run lint:changed  # eslint, only the files your branch changed  ← use this
bun run lint          # eslint .  — ~208 pre-existing errors, see below
bun run test          # vitest run
bun run boundary      # backend boundary check vs origin/integration
bun run tokens:check  # no raw hex/rgb() outside src/styles/bylda.css (also runs in lint + lint:changed)
bun run build         # vite build → Nitro/Vercel. Verified green, no env needed.
bun run format        # prettier --write .   ⚠️ never run repo-wide, see below
```

**`bun run build` works with no `.env`.** Verified on `Bylda/bylda` `integration`
(base `main` @ `8339f35`, 2026-09-30): exit 0, `✓ built in 15.34s`. So step 5 below includes the build — there is no env excuse.

**Package manager is `bun`** (`bun.lock`; `package-lock.json`, `yarn.lock` and
`pnpm-lock.yaml` are gitignored). Don't switch it.

`typecheck` uses `tsconfig.typecheck.json`, which excludes
`src/lib/__tests__/**`. Those tests import `supabase/functions/_shared/**`, which
drags Deno edge code into a Node tsconfig (`Cannot find name 'Deno'`) — unfixable
without editing backend code. The tests themselves run fine under
`bun run test`.

**Known pre-existing failures. Re-measured on `Bylda/bylda` `integration` (base
`main` @ `8339f35`, 2026-09-30) — identical to the first measurement. Memorise the numbers.**

`bun run typecheck` → **exactly 8 errors.** An error count of 9 is yours.

```
src/components/canvas/ConnectSources.tsx        (45,5) (55,30) (166,41) (174,45)
src/components/canvas/use-operator-data.ts      (197,47)
src/routes/app.context-memory.tsx               (807,71)
supabase/functions/_shared/sales-verticals.ts   (582,35) (608,5)
```

The first three files are `DELETE`/`MERGE` in `AUDIT.md` and go away as the
rebuild lands. The last two are Deno edge code dragged in because
`src/components/canvas/CrmSetupGate.tsx` — production code, not a test — imports
`_shared/sales-verticals`. Fixing them would mean editing a backend file, which
§2 forbids. **Don't fix any of the 8 in a lane PR.**

`bun run lint` → **208 errors, 116 warnings** (re-measured 2026-10-01 on `foundation`,
with `.vercel/` ignored — before that, a local `bun run build` left a `.vercel/`
bundle that made full lint run 15+ minutes). Most are Prettier formatting in
`supabase/functions/**` and `workers/**` — backend paths you may not touch. Scoped
to `eslint src` it is still 66 errors / 115 warnings, all pre-existing.

So **`bun run lint` is not a usable gate.** Use `bun run lint:changed`, which
lints only the `.ts`/`.tsx` files your branch changed (backend paths and
`routeTree.gen.ts` excluded) at `--max-warnings=0`. Your own code must be clean.

`bun run test` → **2 failing tests, 152 passing.** Both in
`src/lib/__tests__/integrations-catalog.test.ts` ("ReadyMode integration > is
available as a call webhook connector" and "API credential fallback > preserves
every field required by multi-credential connectors"). Verified identical on a
clean checkout of this branch. Not yours.

`src/integrations/supabase/types.ts` is **stale** — 16 tables the frontend queries
(`calls`, `call_insights`, `call_transcripts` among them) exist in migrations but
not in the generated types. Regenerating it is a backend change: out of scope.
Hand-write the types you need in `src/lib/data/types/` (see `BACKEND_BOUNDARY.md`).

⚠️ **Never run `bun run format` repo-wide.** Prettier would rewrite hundreds of
backend files and the boundary guard would — correctly — reject your PR. Format
your own files: `npx prettier --write <your files>`.

### Stack

TanStack Start + TanStack Router (flat file routes) · React 19 · Vite 7 ·
Tailwind v4 (`@tailwindcss/vite`) · TanStack Query v5 · Radix + shadcn-style
`src/components/ui` (46 files) · `@supabase/supabase-js` · Recharts 2.15 ·
Lucide · Zod 3 · Sonner · `bun` · Vitest 2 · ESLint 9 + Prettier ·
Nitro→Vercel target, Cloudflare Workers alongside.

Path alias: `@/*` → `./src/*`.

---

## 12. DECISIONS (2026-09-30)

Binding until an owner changes them here. Where anything above disagrees, this wins.

### A. Frozen — read-only for lanes

Request changes in `LANE_REQUESTS.md`. Owner **Ansh** unless noted.

| Path | Rule |
| --- | --- |
| `src/lib/invokeEdge.ts`, `src/lib/queries.ts`, `src/lib/crm.ts`, `src/lib/auth.tsx`, `src/integrations/supabase/client.ts` | Lanes use them **only through `src/lib/data`**. Never imported from a screen. |
| `src/lib/feature-gates.ts`, `src/lib/plan.ts`, `src/lib/stripe.ts` | frozen |
| `src/lib/impersonation.ts`, `src/lib/admin.ts`, `src/lib/ownerMode.ts` | frozen |
| `src/lib/observability.ts`, `src/lib/analytics.ts` | **callable, not editable** |
| `vite.config.ts`, `bunfig.toml`, `.lovable/` | frozen |
| `design-ref/**` | frozen — Figma exports (owner **Ansh**). Re-export, never hand-edit. |
| After this PR merges: `src/styles/**`, `src/components/ui/**`, `src/components/bylda/**`, the shell layout route `src/routes/app.tsx`, `src/lib/data/**` | frozen |

This rules on every UNSURE item in `BACKEND_BOUNDARY.md`.

### B. Routes

- The **29 owner-decision routes are QUARANTINED**: out of every nav, code untouched,
  still reachable by URL, listed in **`LEGACY_ROUTES.md`**. Their 9 redirect stubs too.
- The **8 DELETE routes** (`AUDIT.md`) are deleted only in the final cleanup PR.
- Legacy routes that map to a V1 screen become redirects at final cleanup (§8).
- **Cutover rule.** `/app` and `/auth` switch to the V1 routes only when **Lane 1
  sections 1–2** (Manager Home feed + tabs, Admin Home) **and Lane 4 onboarding**
  (sections 1–3: sign in/up/verify, onboarding, invite acceptance) are all merged into
  `integration`. Until then the demo runs from **`/app/home`** and **`/welcome`**.
- The 29 quarantined routes (and their 9 redirect stubs) are **kept until after the
  demo** — they are not deleted or redirected as part of cutover.

### C. Types

`src/integrations/supabase/types.ts` is **never regenerated by a lane**. Row types for
the missing tables go in **`src/lib/data/db-types.ts` (TEMP)**, derived by reading the
migrations. Deleted when Tirth regenerates `types.ts`.

### D. Backend track — Tirth

Branches `backend/<object>`, PRs labeled **`backend`** (the guard only lets boundary
paths through on that combination — see G). Order:

1. **Auth fixes** — `sequence-runner` is `verify_jwt=false` but called from the signed-in
   app; 6 called functions (`operator`, `advance-mission`, `run-workflow`,
   `automation-dispatch`, `generate-course`, `log-activation-event`) have no
   `config.toml` entry.
2. Regenerate `types.ts` (then delete `src/lib/data/db-types.ts`).
3. `BehavioralEvent` → 4. `Behavior` → 5. `Insight` → 6. `CoachingFocus` →
   7. `calls.coaching_value` + `stage_at_call` → 8. `OutcomeAssociation`.
9. Then every other contract in `BACKEND_BACKLOG.md`, in its order.

He builds **to the contracts in `BACKEND_BACKLOG.md`** — the frontend defines the
backend. Each contract has a Vitest contract test (`src/lib/data/__tests__/contracts/`);
a backend object is Done only when its test passes against the real fetcher.
**Lanes never wait on him.**

### E. Swap protocol

When a backend object merges: mark it **Done** in `BACKEND_BACKLOG.md`, and in **one
PR** flip that domain's `src/lib/data/<domain>/source.ts` from `'mock'` to `'real'` or
`'hybrid'`. **Screens never change for a swap.** If one would need to, the adapter is
wrong — fix `map.ts`.

### F. Lanes

| Lane | Owner | Areas (build order) |
| --- | --- | --- |
| 1 | **Ansh** | Manager/Admin Home, Notifications, Intelligence (05, 14, 08) |
| 2 | **Mayur** | Calls (07), Coaching (11), then Search & Ask (13) |
| 4 | **Dravin** | Onboarding/Auth, Rep (04, 06), then Team (09) |
| 5 | **Mayur** | Integrations, Settings, mobile (15, 16, 18); system states (17) done |
| 6 | **Mayur** | Reports (10), then Rooms & Messages (12), mocks only |
| Backend | **Tirth** | `BACKEND_BACKLOG.md` |

Each lane edits **only** its own route folders + `src/components/lanes/<lane>/**` (§8).
One exception: `src/components/lanes/lane-4/reports/**` belongs to **Lane 6**, not Lane 4.
Branch `lane-<n>-<name>` off `integration` (`lane-1-ansh`, `lane-2-mayur`,
`lane-4-dravin`, `lane-5-mayur`, `lane-6-mayur`). **Merge `integration` in every
morning.** One small PR per section. Per-person start prompts: **`TEAM_START.md`**.

### G. Guards

- `bun run boundary` / CI `backend-guard`: boundary paths are allowed **only** on head
  branches starting `backend/` **and** carrying the label `backend`. Everything else fails.
- `bun run tokens:check`: no raw hex / `rgb()` in `src/**` outside `src/styles/bylda.css`.
  Legacy files are baselined (`scripts/tokens-baseline.json`) and may only go down.
- `CODEOWNERS` maps every path to its owner.
- Every V1 screen has a placeholder route + screen that renders
  *"Coming soon: <screen>"*. Nav links are already wired. Lanes fill files; they never
  touch the router config or the nav.

### H. Env

`VITE_BYLDA_MOCKS=true` forces every data domain to mocks. It is **not** in
`.env.example`: that file is a guarded backend path (`BACKEND_BOUNDARY.md`), so adding
it is a `backend`-labelled change for Tirth. Set it locally in your shell or an
untracked `.env.local`.

---

## 13. DESIGN DECISIONS (override Figma where they conflict)

Approved 2026-10-01 by **Ansh** (owner of `src/styles`, `src/components/bylda`,
`design-ref`, this file). Where Figma, a `design-ref` spec or anything above
disagrees, **this section wins.** Affected specs carry the line
*"See CLAUDE.md §13: decision overrides Figma."*

1. **Tokens.** Three semantic tokens beyond Figma's set, in `src/styles/bylda.css`
   and `design-ref/_tokens.md`:
   - `border/strong` `#D3D0CB` (silver/300) → `border-by-border-strong`. Form inputs.
     (`by-border-control` is the same value, kept for the kit.)
   - `feedback/error` — same value as `signal/regress`, its own token →
     `text-by-feedback-error`, `border-by-feedback-error`.
   - `focus/ring` `#2A2A2E` (graphite/800) → `ring-by-focus-ring`, `border-by-focus-ring`.
     Taken from the focused input on **A1** (`26:80`) — A4 only shows the error
     state. (`by-border-focus` is the same value, kept for the kit.)
2. **No gradients anywhere**, except the warm-metal avatar monogram
   (`bg-by-avatar-metal`). **Block / Call**'s thumbnail is a flat surface
   (`bg-by-surface-sidebar`); the `call-thumb` gradient token is gone.
3. **Shadows** (`shadow-by-float`, the only one) on **menus, popovers, modals and
   hero cards** only. The **A11 first-insight card is a hero card** — it uses
   `shadow-by-float` (not Figma's 6% variant). Everything else is flat + hairline.
4. **Wordmark is always Cinzel**, via `<Wordmark />` from `@/components/bylda` —
   including the auth/onboarding art panels (A1–A10) where Figma sets
   "B Y L D A" in Newsreader. Never hand-set it.
5. **Radius: controls/inputs 6px (`rounded-by-control`), cards 10px
   (`rounded-by-card`), always.** Ignore Figma's 4px/2px on inputs, buttons and
   cards (e.g. A1–A6 inputs at 4px). `by-badge`/`by-bar` are for badges, kbd and
   skeleton bars only.
6. **Rep team median (R2)** — allowed as an anonymous aggregate (no names, no
   ranks), **hidden when the team has fewer than 5 reps**. Folded into the
   rep-privacy rule in §4.
7. **Form errors use `feedback/error`, never signal colours.** Signal colours
   stay behavioral direction only. (A4's regress-red error input/message →
   `by-feedback-error`.)
8. **Ignore the A5 art-panel 13px offset** — the art panel sits flush at `left: 0`
   like every other auth frame.
9. **C7** was re-exported via the saved-file path, so its spec is verbatim
   (shell inline) like every other screen spec.

