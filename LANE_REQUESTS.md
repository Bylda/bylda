# LANE_REQUESTS.md — cross-lane change requests

You own your lane's folders and nothing else (`CLAUDE.md` §8). When you need a
change **outside** them — a shared component, a data type, a mock, a theme token,
a shell tweak — you do **two** things:

1. **Add a row here.**
2. **Build a local copy in your own folder** so you are never blocked.

When the shared version lands, delete your copy.

## Rules

- **Never** edit another lane's folder, even for a one-line fix.
- **Never** edit anything in `BACKEND_BOUNDARY.md`. A backend need is a request
  here with status `blocked` and an owner decision — not a change you make.
- Foundation (`src/components/bylda/**`, `src/components/ui/**`, `src/styles/**`,
  `src/lib/data/**`, `src/routes/app.tsx`) is **frozen once merged** (`CLAUDE.md` §12 A).
  Every change to it comes through this file.
- One row per request. Keep `what` to one line — link a PR or issue for detail.
- Update your own row's status. Don't let it rot.

## Status values

| Status | Meaning |
| --- | --- |
| `open` | logged, nobody picked it up |
| `accepted` | owner agreed, not built yet |
| `in-progress` | being built now |
| `landed` | merged into `integration` — requester deletes their local copy |
| `declined` | not happening; reason in `what` |
| `blocked` | needs a decision above the team (backend, Figma, scope) |

## Requests

| # | Requester | Lane | What | Why | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Ansh | setup | ~~Supply the correct Figma file key~~ — **resolved** | The file was right; `get_metadata` with no `nodeId` only reports page `0:1` and hides the other 20. All 21 pages and 128 views are now mapped with real node IDs in `FRAMES.md`. | `landed` |
| 2 | Ansh | setup | Rule on the `OWNER DECISION` routes in `AUDIT.md` | **Ruled 2026-09-30 (§12 B):** the 29 routes are QUARANTINED — out of nav, code untouched, reachable by URL (`LEGACY_ROUTES.md`). Keep / flag off / delete is still open, as its own PR. | `landed` |
| 3 | Ansh | setup | Decide where `confidence` and `sample_size` come from | `CLAUDE.md` §4 makes both mandatory on every insight. No table carries either field. Blocks every insight surface across 05, 06, 08, 09, 11. **Contract C-04** (`insights.confidence`, `insights.sample_n`, `CHECK` low ⇒ no action) — `BACKEND_BACKLOG.md`. | `accepted` |
| 4 | Ansh | setup | Regenerate `src/integrations/supabase/types.ts` | **Ruled (§12 C–D):** Tirth, item 2 in `BACKEND_BACKLOG.md`. Until then 16 missing tables are typed in `src/lib/data/db-types.ts` (TEMP). | `accepted` |
| 5 | Ansh | setup | Rule on the UNSURE list in `BACKEND_BOUNDARY.md` | **Ruled (§12 A):** all frozen, owner Ansh; lanes reach them only through `src/lib/data`. | `landed` |
| 6 | Ansh | setup | Rebalance lanes once real frame counts land | **Ruled (§12 F):** Lane 3 dissolved — 11 Coaching → Lane 2, 09 Team + 10 Reports → Lane 4. Counts now L1 20 · L2 24 · L4 37 · L5 45 (≈32; Foundation built the 13 states) · L6 14. Lane 4 is heaviest — see `FRAMES.md`. | `landed` |
| 7 | Mayur | 5 | Ship area 17 (empty / loading / error / skeleton) before anything else in Lane 5 | **Foundation built all 13 (`SystemState` in `@/components/bylda`).** Lane 5 reviews them against `19:2` and logs any fix here. (Lane 5 is Mayur's since the 2026-09-30 owner swap.) | `landed` |

| 8 | Ansh | setup | Confirm the design values in `CLAUDE.md` §3 | **Re-checked 2026-09-30 against the page-02 components** (`get_design_context`): cards/blocks use radius **10**, buttons/inputs/evidence **6**, tags/avatars pill, popovers 12 + one soft shadow `0 12px 32px rgba(0,0,0,.12)`. The "Cards: 2 / Inputs: 4" text on page 01 contradicts every component — the earlier "2px" correction was wrong and is reverted. Signal 4 is `info`. **Ask the designer to fix the page-01 caption.** | `open` |
| 9 | Ansh | setup | Source the licensed **Ragnar/Nordic** display face | Foundations: *"Cinzel is a stand-in… Swap the `Display/*` styles when the licensed font is added — nothing else changes."* Ship on Cinzel; swap later. | `open` |
| 10 | Ansh | setup | Decide where `coaching_value` is computed | It ranks calls on `C1`, `H1` and `H3`. No column exists on `calls`. Until it's decided, Calls and Home cannot order their lists — mock it and flag. **Contract C-06** (`calls.coaching_value`, read via `v_calls_v1`). Until built it is `null` in hybrid mode — screens must not rank by it then. | `accepted` |

| 11 | Ansh | setup | Add `VITE_BYLDA_MOCKS=` to `.env.example` | Requested in the foundation brief, but `.env.*` is a guarded backend path — only a `backend/*` PR with the `backend` label may touch it. Documented in `CLAUDE.md` §12 H and `src/lib/data/README.md` instead. | `open` — Tirth |
| 12 | Ansh | setup | Lane owner swap | 2026-09-30: Lane 4 → **Dravin**, Lane 5 → **Mayur**. Lane numbers, folders, screens and order unchanged. `CLAUDE.md` §8/§12, `FRAMES.md`, `CODEOWNERS`, `TEAM_START.md` updated. | `landed` |

| 13 | Mayur | 5 | Extend Integrations presentation contracts and actions for X1–X3 | Catalog is missing Meet, Salesforce, Calendar and file sources; no syncing state, health metrics, mapping examples/totals/stages, channel routing/preview, or sync/disconnect/mapping/channel mutations. Temporary Figma fixtures live in Lane 5 and render only with forced mocks; unsupported actions explain the gap. Please add these through the shared data API; no CRM writes. Reference: copied Figma file `rOK5GQ1TzyTuHmyXiOALrD`, nodes `31:1464`, `31:1688`, `31:1915`. | `open` — Ansh / Tirth |

| 14 | Mayur | 5 | Align inherited shell on X1–X3 with Figma | Context panel currently starts below the top bar rather than at frame y=0, and breadcrumb duplicates the area label. Screens use the existing context slot; please adjust in Foundation. Integrations status tags follow Figma and Y8 despite the general behavioral-color-only wording; clarify this exception in shared guidance. See Lane 5 connections/QA.md and screenshots. | `open` — Ansh |

| 15 | Dravin | 4 | Add `signInWithOAuth(provider)` and `verifyOtp(email, token)` to `useAuthActions`; decide where the password-recovery "set new password" step lives | A1/A2 show Continue with Google / Microsoft and A3 shows a 6-digit code, but `useAuthActions` only has password sign-in/up, reset, `updatePassword`, resend. Today OAuth buttons show an inline "isn't connected yet" note; A3's Verify proceeds only in mock mode and in real mode tells the user to use the emailed link. `sendReset` redirects to `/welcome/forgot` but no Figma frame covers the new-password form that `updatePassword` needs. No backend change — all three are existing Supabase auth calls. | `open` — Ansh |

| 16 | Mayur | 6 | Extend shared Reports contracts/content for P1, P2 and P5 without lane-local overrides | `ReportListItem` lacks delivery/status/sharing/subject presentation; shared daily/weekly briefs have only two insight sections, not the saved design's summaries, behavior tables, coaching priorities, coverage and comments. Narrative statements also need confidence + sample size (§13.14). Keep existing shared values intact; Section 1 stays draft pending the shared contract/content. See Lane 6 reports/QA.md. | `open` — Ansh |
| 17 | Mayur | 6 | Provide shared report scheduling, pinning, comments and PDF-export actions | Public Reports API is read-only. Section 1 explains unsupported actions; comments are explicitly unsaved drafts, Share only copies the existing URL. No backend or room writes. | `open` — Ansh / Tirth |
| 18 | Mayur | 6 | Align shared daily/weekly report periods and content with design-ref P2/P5 | Shared daily brief says `Tue 30 Sep` and 5-minute read; P2 saved frame says `Tuesday, September 29` and 2-minute read. P5 currently shares the daily-style two sections instead of the weekly document's sections. Render shared values as-is; please correct centrally, not in a lane fixture. | `open` — Ansh |

<!-- Add new rows above. Keep the newest at the bottom. -->
