# CLAUDE.md — Bylda V1 parallel frontend build

Auto-loaded in every session in this repo. Read it all before your first edit.

## 0. Read this first

1. **`FRAMES.md` has every frame's node ID.** Pull frames from there, by ID.
   ⚠️ `get_metadata` **without** a `nodeId` is broken on this file — it lists only
   page `0:1` and hides the other 20. Pages are `0:1` and `1:2`…`1:21`.
2. **Read page 20 Dev Handoff (`1:21`) and page 01 Foundations (`1:2`) before your
   first screen.** Dev Handoff governs. Where it disagrees with this file, it wins
   — and several values in §3 below were corrected from it already.
3. **≈78% of the data V1 needs has no backend** (`GAPS.md`). `BehavioralEvent`,
   `Behavior`, `Insight`, `OutcomeAssociation` and `CoachingFocus` have no tables.
   You will mock more than you wire. Expected, not failure.
4. **This repo's frontend is a different product** (`AUDIT.md`). 87 routes of
   Launchpad Nova + CRM. Only ~21 map to a V1 screen. 33 have no V1 counterpart
   and are **not yours to delete.**

**128 product views across 21 pages.** Build from source pages 04–18 only.
Page 19 is 101 `PROTO ·` duplicates for the clickable prototype — never build from it.

---

## 1. Goal

Rebuild the entire frontend to the **Bylda V1** Figma
("Bylda — Behavioral Intelligence (V1)"), wired to the **existing backend exactly
as it is**. Five people in parallel, one lane each.

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

**Tokens only. No raw hex outside the theme file.** Dev Handoff: *"bind everything
to `Bylda / Color` and `Bylda / Space & Radius` variables."*

Palette — Pearl `#F8F7F5` · Pearl50 `#F2F1EE` · Pearl100 `#EAE8E4` · White ·
Silver200 `#E5E3DF` · Silver300 `#D3D0CB` · Silver500 `#9B9892` ·
Silver600 `#6E6C68` · Graphite700 `#3A3A3F` · Graphite800 `#2A2A2E` ·
Graphite900 `#1B1B1E` · Ink `#0B0B0C` · Accent `#C9C5BE`

Figma token names (page 01, `1:2`): `pearl/0` `pearl/50` `pearl/100` `white` ·
`silver/200` `silver/300` `silver/500` `silver/600` · `graphite/700` `graphite/800`
`graphite/900` `ink`.

Signal colors — **behavioral direction only, never decoration**:

| Figma token | Fore | Back |
| --- | --- | --- |
| `signal/improve` | `#2F7D5B` | `#E7F2EC` |
| `signal/regress` | `#C2413B` | `#F8E7E5` |
| `signal/attention` | `#C27A1A` | `#F8EEDC` |
| `signal/info` | `#6A5AD0` | `#EEEBFA` |

⚠️ The fourth signal is **`info`**, not "pattern" — that's its name in Foundations
and in the `Tag` component (`Improve · Regress · Attention · Info · Neutral`).

**Type** — **Newsreader** serif for titles and insights · **Inter** for all UI ·
**Geist Mono** for timestamps and metrics · **Cinzel** for the BYLDA wordmark only.
Cinzel is a **stand-in for the licensed Ragnar/Nordic display face** — swap the
`Display/*` styles when it lands; nothing else changes.

Named styles: `Display/XL` `Display/L` `Display/Label` · `Editorial/H1`
`Editorial/H2` `Editorial/Insight` `Editorial/Quote` · `UI/Title` `UI/Body`
`UI/Body Strong` `UI/Small` `UI/Label` · `Mono/Data` `Mono/Micro` `Mono/Metric`.

**Spacing** — 4pt base: `space/4 8 12 16 24 32 40 56 72`.

⚠️ **Radius — corrected.** Foundations gives `none·0` `xs·2` `sm·4` `md·6`
`pill·999`, with the rule **"Cards: 2. Inputs/buttons: 4. Pills/avatars only: pill."**
An earlier draft of this file said "10/6/pill" — that was wrong. **Cards are 2px.**

**Surfaces** — `Raised` = primary card, **1px engraved border, no shadow** ·
`Inset` = evidence, transcript quotes, secondary modules · `Divider editorial` =
no container, hairline rules between sections (reports).
⚠️ An earlier draft said "minimal soft shadows". Foundations says **no shadow** on
the primary card. Hairlines do the work.

**Shell** — icon rail **64** + sidebar **248** + top bar **56** + main + context
panel **344**, closable. At **1280** the context panel becomes an overlay drawer;
at **1024** icon rail only. Verified: 312 (64+248) + 784 + 344 = 1440.
Use component **App Shell / Navigation v2** (`37:51`) and **Workspace Top Bar**
(`36:52`). `App Shell / Navigation` (`6:2`) is v1 — superseded, don't use.

**Motion** — 180–220ms ease-out. Panels slide 180ms. Insights resolve in
(opacity + 4px rise, 220ms). The timeline playhead is the only continuously
moving element. **No typing effects. No fake progress** — progress bars reflect
real counts. Nothing bounces.

**Icons** — Lucide at **1.6** stroke. 34 icons exist in `Icons` (`35:15`):
`Icon/home` `intelligence` `calls` `reports` `team` `coaching` `rooms` `hash`
`search` `bell` `bookmark` `plug` `settings` `plus` `chevron` `share` `more`
`chart` `video` `calendar` `pattern` `alert` `check` `mic` `smile` `at` `send`
`play` `lock` `user` `file` `x` `external` `trend`.

**Never** use gradients, orbs, glassmorphism, donut KPI walls, confetti or
gamification. **Never redesign away from Figma.** If Figma looks wrong, say so —
don't fix it silently.

⚠️ This palette is **not** the repo's current theme. `src/styles.css` +
`src/lib/theme-palette.ts` implement a user-customisable 3-colour system with
presets like `#7c3aed`. The V1 theme is a **new token layer** Ansh adds in
`src/styles/bylda-v1.css` — do not rip out the existing theme; the Launchpad/CRM
routes still use it.

ESLint warns on raw hex in inline `style` props. `lint:changed` runs at
`--max-warnings=0`, so it's a hard gate on your files.

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
  surface in a rep view. The Figma says it out loud on two frames — keep both
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

**Screens import ONLY from `/lib/data`.** No `fetch`, no `supabase.*`, no
hard-coded numbers in a component. Ever.

```
src/lib/data/
  types/      ← Dhruv (foundation, frozen once merged)
  mocks/      ← Dhruv (foundation, frozen once merged)
  adapters/   ← Dhruv (Lane 2) — real Supabase / invokeEdge wiring
  index.ts    ← the only import surface for screens
```

A screen does this and nothing else:

```ts
import { useCallReview } from "@/lib/data";
```

Every hook returns `{ data, loading, error, isEmpty }` so the page-17 states compose.

### Core data objects — from Dev Handoff (`21:91`). Model these exactly.

| Object | Key fields | Notes |
| --- | --- | --- |
| **Call** | `id, rep_id, account, opportunity_id?, started_at, duration, type, stage_at_call, outcome, coaching_value, status(processing\|ready\|failed\|partial)` | `coaching_value` drives ranking in Calls + Home. `outcome` back-filled from CRM. |
| **BehavioralEvent** | `call_id, type(objection\|interruption\|question\|monologue\|pause\|sentiment_shift\|control_shift\|stage), t_start, t_end, speaker, attrs{}` | The atomic layer. Everything above is computed from events — immutable, versioned by detector. |
| **Behavior** | `key, name, definition, rule(json), methodology_id, enabled, direction(higher_is_better?)` | Template-driven, admin-editable in Methodology → Behavior rules. |
| **Insight** | `kind(pattern\|regression\|improvement\|call\|report), headline, body, confidence(low\|med\|high), sample_n, affected_rep_ids, evidence[], action` | Headline must pass the language rule. **Never render without `sample_n`.** |
| **OutcomeAssociation** | `behavior_key, outcome, with_rate, without_rate, n_with, n_without, confidence, confounders[]` | Association only. **Hide when `n_closed` < 30** → "insufficient data" state. |
| **CoachingFocus** | `rep_id, behavior_key, note, evidence[], metric, baseline, target, judge_after, status(assigned\|acknowledged\|measuring\|held\|not_yet\|reverted), result{}` | The 4-object coaching loop. No courses, no quizzes. |

Missing field → typed mock in `src/lib/data/mocks`, behind
`NEXT_PUBLIC_BYLDA_MOCKS`, tagged `// GAP:` on the line above, **and logged in
`GAPS.md`**. All four steps or it doesn't count.

Only **Call** has real backing today (`calls` + `call_transcripts` +
`call_insights`), and even that is partial — no `coaching_value`, no
`stage_at_call`. The other five objects have **no tables at all**. See `GAPS.md`.

**Fixture** — every mock uses it, so screens compose into a coherent demo:
**Acme Revenue** workspace · **Kiran Patel** owner · **Dana Whitfield** manager ·
**Mid-Market AE** team of 9 · **Jordan Reyes** rep · **#acme-logistics** deal room.
Supporting cast in the Figma: reps Sarah, Alex, Mia, Theo, Priya, Nina; accounts
Acme Logistics, Brightline Freight, Kestrel Labs, Vela Systems, Ferro Metals,
Lumen Dental, Orchid Health, Northwind Health; David Park (CFO), Sarah Cole (Ops).

Contracts to read (never edit): `src/lib/invokeEdge.ts` (edge gateway — auth, 60s
timeout, 1 retry, `EdgeError {message, status, code}`), `supabase/config.toml`
(`verify_jwt` per function), `supabase/migrations/**` (real table shapes),
`src/lib/queries.ts` + `src/lib/crm.ts` (how the old frontend called things).

⚠️ `src/integrations/supabase/types.ts` is **stale** — `calls`, `call_insights`
and `call_transcripts` are missing from it though the tables exist. Hand-write
those types in `/lib/data/types` and tag `// GAP: types.ts stale`. Regenerating
is a backend change.

## 6. Naming

Screen files use the Figma code from `FRAMES.md`: `H1RoomFeed.tsx`,
`C3CallReview.tsx`, `G1AssignCoaching.tsx`. One screen per file.

```
src/screens/<NN-area>/<Code><Name>.tsx    ← e.g. src/screens/05-home/H1ManagerFeed.tsx
```

Routes are **thin**: a `createFileRoute` plus the screen import. Keep logic in the
screen, data in `/lib/data`.

```ts
// src/routes/v1.home.tsx
import { createFileRoute } from "@tanstack/react-router";
import { H1ManagerFeed } from "@/screens/05-home/H1ManagerFeed";
export const Route = createFileRoute("/v1/home")({ component: H1ManagerFeed });
```

Note this repo uses **flat dot-notation** file routes (`app.crm.calls.tsx` →
`/app/crm/calls`), so `src/routes/` is a shared folder. Prefix every new V1 route
file `v1.` and only create the ones your lane owns. Never edit another lane's
route file. `src/routeTree.gen.ts` is generated — never hand-edit it; merge
conflicts there are resolved by regenerating.

---

## 7. Branching

- Each lane: `lane-<n>-<name>` off `integration` (e.g. `lane-3-tirth`).
- **Merge `integration` into your branch daily.** Not weekly.
- Open **small PRs into `integration`, one per section.** Never PR to `main`.
- CI must be green and `bun run boundary` clean before you ask for review.

---

## 8. Lane map + folder ownership

### Foundation — frozen once merged

| Area | Paths | Owner |
| --- | --- | --- |
| Components, theme, shell | `src/components/v1/**`, `src/styles/bylda-v1.css`, `src/screens/03-menus/**` | **Ansh** |
| Data types + mocks | `src/lib/data/types/**`, `src/lib/data/mocks/**`, `src/lib/data/index.ts` | **Dhruv** |

Foundation lands **before** lane work. Once merged it is frozen: changes go
through `LANE_REQUESTS.md`.

### Lanes

| Lane | Owner | Areas | Folders |
| --- | --- | --- | --- |
| 1 | **Ansh** | 05 Manager/Admin Home · 14 Notifications · 08 Intelligence | `src/screens/05-home/**`, `src/screens/14-notifications/**`, `src/screens/08-intelligence/**`, `src/routes/v1.home*`, `v1.notifications*`, `v1.intelligence*` |
| 2 | **Dhruv** | real adapter wiring · 07 Calls · 13 Search & Ask | `src/lib/data/adapters/**`, `src/screens/07-calls/**`, `src/screens/13-search/**`, `src/routes/v1.calls*`, `v1.search*` |
| 3 | **Tirth** | 09 Team · 11 Coaching · 10 Reports | `src/screens/09-team/**`, `src/screens/11-coaching/**`, `src/screens/10-reports/**`, `src/routes/v1.team*`, `v1.coaching*`, `v1.reports*` |
| 4 | **Mayur** | 04 Onboarding/Auth · 06 Rep | `src/screens/04-onboarding/**`, `src/screens/06-rep/**`, `src/routes/v1.auth*`, `v1.onboarding*`, `v1.rep*` |
| 5 | **Dravin** | 15 Integrations · 16 Settings · 17 System states · 18 Mobile | `src/screens/15-integrations/**`, `src/screens/16-settings/**`, `src/screens/17-states/**`, `src/screens/18-mobile/**`, `src/routes/v1.integrations*`, `v1.settings*` |
| 6 | first free person | 12 Rooms & Messages — **mocks only** | `src/screens/12-rooms/**`, `src/routes/v1.rooms*` |

**Edit ONLY your lane's folders.** Need a shared change? Log it in
`LANE_REQUESTS.md` and build a **local copy in your folder** so you're never
blocked. The shared version lands later; you delete your copy then.

Notes — **real view counts, pulled from Figma** (`FRAMES.md`):

| Lane | Owner | Areas | Views |
| --- | --- | --- | --- |
| 1 | Ansh | 05, 08, 14 | 7 + 11 + 2 = **20** |
| 2 | Dhruv | adapters, 07, 13 | 9 + 3 = **12** |
| 3 | Tirth | 09, 10, 11 | 13 + 10 + 12 = **35** |
| 4 | Mayur | 04, 06 | 11 + 3 = **14** |
| 5 | Dravin | 15, 16, 17, 18 | 3 + 18 + 13 + 11 = **45** |
| 6 | first free | 12 | **14** |

- ⚠️ **The split is unbalanced: Lane 5 has 45, Lane 2 has 12.** Recommended fix,
  one move: **give 16 Settings (18 views, `E1`–`E18`) to Lane 2.** Lane 2 → 30,
  Lane 5 → 27. Lane 3 stays at 35 because 09+10+11 are the coaching core and
  shouldn't be split. Settle this in `LANE_REQUESTS.md` **before** lane work starts.
- **Area 17 lands first.** All 13 states (`Y1`–`Y13`) — every lane imports them
  and §11 makes them part of done. Dravin ships them before anything else.
- Lanes 1, 3 and 6 are **majority mock** (`GAPS.md`). Lane 2's area 07 is the only
  well-supported area (32% missing).
- Page 19 is 101 `PROTO ·` duplicates. **Never build from it** — check flows only.

**Nobody touches** the 33 `OWNER DECISION` routes in `AUDIT.md` (Launchpad + CRM,
~19,000 lines) or anything in `BACKEND_BOUNDARY.md`.

---

## 9. Working rules

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
- Don't explore outside: your lane folders + `src/components/v1` +
  `src/lib/data/types` + `CLAUDE.md`.
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
2. **Tokens only** — no raw hex outside the theme file. `lint:changed` runs at
   `--max-warnings=0`, so the hex rule is a hard gate on your files.
3. **Empty, loading and error states all present.**
4. Links match the **page 19** prototype (13 flows, 0–12).
5. `bun run typecheck` at the known 8 · `bun run lint:changed` clean · `bun run build` green.
6. `bun run boundary` clean.
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
bun run build         # vite build → Nitro/Vercel. Verified green, no env needed.
bun run format        # prettier --write .   ⚠️ never run repo-wide, see below
```

**`bun run build` works with no `.env`.** Verified on this branch: `✓ built in
12.29s`. So step 5 below includes the build — there is no env excuse.

**Package manager is `bun`** (`bun.lock`; `package-lock.json`, `yarn.lock` and
`pnpm-lock.yaml` are gitignored). Don't switch it.

`typecheck` uses `tsconfig.typecheck.json`, which excludes
`src/lib/__tests__/**`. Those tests import `supabase/functions/_shared/**`, which
drags Deno edge code into a Node tsconfig (`Cannot find name 'Deno'`) — unfixable
without editing backend code. The tests themselves run fine under
`bun run test`.

**Known pre-existing failures. Measured on this branch — memorise the numbers.**

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

`bun run lint` → **208 errors, 122 warnings.** Most are Prettier formatting in
`supabase/functions/**` and `workers/**` — backend paths you may not touch. Scoped
to `eslint src` it is still 66 errors / 121 warnings, all pre-existing.

So **`bun run lint` is not a usable gate.** Use `bun run lint:changed`, which
lints only the `.ts`/`.tsx` files your branch changed (backend paths and
`routeTree.gen.ts` excluded) at `--max-warnings=0`. Your own code must be clean.

`bun run test` → **2 failing tests, 152 passing.** Both in
`src/lib/__tests__/integrations-catalog.test.ts` ("ReadyMode integration > is
available as a call webhook connector" and "API credential fallback > preserves
every field required by multi-credential connectors"). Verified identical on a
clean checkout of this branch. Not yours.

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
