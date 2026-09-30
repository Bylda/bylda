# CLAUDE.md — Bylda V1 parallel frontend build

Auto-loaded in every session in this repo. Read it all before your first edit.

## 0. Read this first

Three things are true and each will bite you:

1. **`FRAMES.md` has no node IDs yet.** File key `8q5872jwTTRK69cOrWDOmk` contains
   one page — an architecture poster — not the 127 screens. Until someone supplies
   the right file key, you cannot pull a frame. **Do not invent a design.** Ask.
2. **≈78% of the data V1 needs does not exist** (`GAPS.md`). `behaviors`,
   `patterns`, `coaching`, `teams`, `rooms` and `messages` have no tables. You will
   mock more than you wire. That is expected, not failure.
3. **This repo's frontend is a different product** (`AUDIT.md`). 87 routes of
   Launchpad Nova + CRM. Only ~21 map to a V1 screen. 33 have no V1 counterpart
   and are **not yours to delete.**

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

**Tokens only. No raw hex outside the theme file.**

Palette — Pearl `#F8F7F5` · Pearl50 `#F2F1EE` · Pearl100 `#EAE8E4` · White ·
Silver200 `#E5E3DF` · Silver300 `#D3D0CB` · Silver500 `#9B9892` ·
Silver600 `#6E6C68` · Graphite700 `#3A3A3F` · Graphite800 `#2A2A2E` ·
Graphite900 `#1B1B1E` · Ink `#0B0B0C` · Accent `#C9C5BE`

Signal colors — **behavior only, never decoration**:

| Signal | Fore | Back |
| --- | --- | --- |
| Improve | `#2F7D5B` | `#E7F2EC` |
| Regress | `#C2413B` | `#F8E7E5` |
| Attention | `#C27A1A` | `#F8EEDC` |
| Pattern | `#6A5AD0` | `#EEEBFA` |

Type — **Newsreader** display + insights · **Inter** UI · **Geist Mono** data ·
**Cinzel** wordmark.

Form — radius 10 / 6 / pill · 4px grid · 1px hairlines · minimal soft shadows ·
Lucide icons at **1.6** stroke.

Shell — rail **64** | sidebar **248** | top bar **56** | main | context panel **344**.

**Never** use gradients, orbs, glassmorphism, donut KPI walls, confetti or
gamification. **Never redesign away from Figma.** If Figma looks wrong, say so —
don't fix it silently.

⚠️ This palette is **not** the repo's current theme. `src/styles.css` +
`src/lib/theme-palette.ts` implement a user-customisable 3-colour system
(`--background` etc. derived with `color-mix`) with presets like `#7c3aed`. The V1
theme is a **new token layer** Ansh adds in `src/styles/bylda-v1.css` — do not
rip out the existing theme; the Launchpad/CRM routes still use it.

ESLint already warns on raw hex in inline `style` props
(`no-restricted-syntax`). It is a **warning**. Don't ship the warning.

---

## 4. Product rules

- **Every insight shows confidence + sample size.** No exceptions. Neither field
  exists in the backend (`GAPS.md` #3) — mock them, but never omit them.
- **"associated with" / "observed alongside". Never "caused".** V1 architecture
  decision 4.
- **Reps never see leaderboards or another rep's data. Enforce in the UI.**
  There is **no backend guarantee**: RLS on `calls` is
  `is_org_member(organization_id, auth.uid())`, so any member can read every call
  in the org. Filter on `user_id` in `/lib/data` **and** never render a peer
  surface in a rep view. Getting this wrong is the adoption risk that kills the
  product (V1 architecture decision 6).
- **Home is an intelligence feed** — insight → evidence → action. Not a KPI grid,
  not a chat stream (decision 2).
- **Coaching is 4 objects** — Focus, Evidence, Acknowledgement, Result. No LMS, no
  courses, no quizzes (decision 3).
- **Data Sources and Delivery Channels are separate settings areas** (decision 5).
- **Voice**: sharp sales colleague. Casual, concise, contractions. Not a chatbot,
  not a coach-bot, not enterprise-software prose.
- **Every screen has empty / loading / error states** (area 17). A screen without
  all three is not done.

---

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

Missing field → typed mock in `src/lib/data/mocks`, behind
`NEXT_PUBLIC_BYLDA_MOCKS`, tagged `// GAP:` on the line above, **and logged in
`GAPS.md`**. All four steps or it doesn't count.

Every hook returns `{ data, loading, error, isEmpty }` so area-17 states compose.

**Fixture** — every mock uses it, so screens compose into a coherent demo:
**Acme Revenue** workspace · **Kiran Patel** owner · **Dana Whitfield** manager ·
**Mid-Market AE** team of 9 · **Jordan Reyes** rep · **#acme-logistics** deal room.

Contracts to read (never edit): `src/lib/invokeEdge.ts` (the edge gateway — auth,
60s timeout, 1 retry, `EdgeError {message, status, code}`), `supabase/config.toml`
(`verify_jwt` per function), `supabase/migrations/**` (real table shapes),
`src/lib/queries.ts` + `src/lib/crm.ts` (how the old frontend called things).

⚠️ `src/integrations/supabase/types.ts` is **stale** — `calls`, `call_insights`
and `call_transcripts` are missing from it though the tables exist. Hand-write
those types in `/lib/data/types` and tag `// GAP: types.ts stale`. Regenerating
is a backend change.

---

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

Notes:
- **Area 17 lands first.** Every lane imports those states. Dravin ships them
  before anything else in Lane 5.
- **Lane 5 is overloaded** (41 provisional rows vs. Lane 2's 9). Once real frame
  counts land, move 16 Settings to Lane 2 or Lane 6. Flag it, don't grind.
- Lanes 1, 3 and 6 are **majority mock** — see `GAPS.md`. Lane 2's area 07 is the
  only well-supported area (32% missing).

**Nobody touches** the 33 `OWNER DECISION` routes in `AUDIT.md` (Launchpad + CRM,
~19,000 lines) or anything in `BACKEND_BOUNDARY.md`.

---

## 9. Working rules

- Pull Figma frames **by node ID from `FRAMES.md` only.** Never `get_metadata` on
  a whole file — page by page, node by node.
- Read **page 20 "Dev Handoff"** before your first screen. It governs; where it
  disagrees with §3 here, Dev Handoff wins — raise it in `LANE_REQUESTS.md`.
- **One screenshot per screen, at the end**, to `/design-qa/<code>.png`.
- Don't explore outside: your lane folders + `src/components/v1` +
  `src/lib/data/types` + `CLAUDE.md`.
- **Start a fresh session per section.** Context rot is real on a build this size.

---

## 10. Screen inventory

`03` Menus & overlays · `04` Onboarding & Auth · `05` Manager/Admin Home ·
`06` Rep · `07` Calls · `08` Intelligence · `09` Team · `10` Reports ·
`11` Coaching · `12` Rooms & Messages · `13` Search & Ask · `14` Notifications ·
`15` Integrations · `16` Settings + Methodology · `17` Empty & System States ·
`18` Mobile & Responsive · `19` Prototype flows (reference only) ·
`20` Dev Handoff (read first, don't build)

Poster claim: **127 views, no phases, everything in scope.** Per-lane rows in `FRAMES.md`.

---

## 11. Definition of done, per section

1. Matches Figma at **1440** (390 if mobile).
2. **Tokens only** — no raw hex outside the theme file. `lint:changed` runs at
   `--max-warnings=0`, so the hex rule is a hard gate on your files.
3. **Empty, loading and error states all present.**
4. Links match the **page 19** prototype.
5. `bun run typecheck` at the known 8 · `bun run lint:changed` clean · `bun run build` green.
6. `bun run boundary` clean.
7. Confidence + sample size on every insight; no causal language; no peer data in
   a rep view.
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
