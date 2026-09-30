# BACKEND_BACKLOG.md — what the backend builds, in order

**Owner:** Tirth (backend track). **Rule:** the frontend defines the backend. Every
item below is built **to its contract** — the view-model shape the screens already
consume, the proposed table/columns, and the endpoint. Each contract has a Vitest
contract test under `src/lib/data/__tests__/contracts/`; an item is **Done** only
when that test passes against the real fetcher (`SOURCE = 'real'`).

Process (`CLAUDE.md` §12 D–E):

1. Branch `backend/<object>` off `integration`. Label the PR **`backend`** — the guard
   rejects boundary paths on any other branch/label combination.
2. Build to the contract below. If the contract is wrong, change it **here first**
   (Ansh approves), then the mapper and test, then the backend.
3. When it merges: set its status to **Done** here, and in the **same PR** flip
   `src/lib/data/<domain>/source.ts` to `'real'` or `'hybrid'`. Screens never change.

Lanes never wait on this list — every item is mocked behind the same hook today.

## Order

| # | Item | Branch | Status |
| --- | --- | --- | --- |
| 1 | Auth fixes (below) | `backend/auth-fixes` | Not started |
| 2 | Regenerate `src/integrations/supabase/types.ts`; delete `src/lib/data/db-types.ts` | `backend/types-regen` | Not started |
| 3 | `BehavioralEvent` | `backend/behavioral-event` | Not started |
| 4 | `Behavior` | `backend/behavior` | Not started |
| 5 | `Insight` | `backend/insight` | Not started |
| 6 | `CoachingFocus` | `backend/coaching-focus` | Not started |
| 7 | `OutcomeAssociation` | `backend/outcome-association` | Not started |
| 8 | `calls.coaching_value` + `calls.stage_at_call` | `backend/call-fields` | Not started |
| 9+ | Every other contract below, in the order listed | `backend/<domain>` | Not started |

## 1. Auth findings (from `AUDIT.md`, re-verified 2026-09-30)

| Finding | Where | Fix to make |
| --- | --- | --- |
| `sequence-runner` is `verify_jwt = false` but is called from the signed-in app (`src/lib/crm.ts`) with an `org_id` in the body | `supabase/config.toml` | Set `verify_jwt = true`, **or** keep it false for cron and add an explicit org-membership check on the caller's JWT. Decide which, document it here. |
| 6 functions called from the frontend have **no** `[functions.<name>]` block, so they run on the platform default (`verify_jwt = true`) by accident rather than by decision: `operator`, `advance-mission`, `run-workflow`, `automation-dispatch`, `generate-course`, `log-activation-event` | `supabase/config.toml` | Add an explicit block for each. `log-activation-event` is hit by a raw `fetch` from `src/lib/analytics.ts` — confirm it sends the bearer token. |
| `cs-health`, `forecast-rollup`, `marketing-attribution`, `weekly-review` are `verify_jwt = false`, called from the browser with `org_id` in the body | functions + config | Read each: does it verify org membership itself? If not, same fix as `sequence-runner`. (`book-appointment` is correctly public.) |
| RLS on `calls` is `is_org_member(organization_id, auth.uid())` — any member reads every call in the org | migration `20260719000006` | Not a bug for managers, but V1's "reps never see peer data" rule is UI-only today. Consider a rep-scoped policy once `workspace_member_roles` is authoritative. |

## Contracts

_Filled in by the foundation data layer (Phase 3): one section per domain, for every
field `GAPS.md` marks MISSING, ordered by the screens it unblocks (demo Flow 1
first). Each has: the view-model shape, the screens using it, the proposed
table/columns, the endpoint (name, input, output), and its contract test._
