# Lane 1 — cutover checklist

Owner: **Ansh** · Lane 1 = Manager Home (H1–H6) + Admin Home (H7). Base: `integration` @ `bf70f41`.

CLAUDE.md §12 B: `/app` and `/auth` switch to the V1 routes only when **Lane 1 sections 1–2**
(Manager Home feed + tabs, Admin Home) and Lane 4 onboarding are all merged. This file is what
"Lane 1 is cutover-ready" means in practice. **Nothing here is checked yet** — every screen is
built and verified against mocks only.

Docs only. No code changes.

## Cutover blocker

- [ ] **LANE_REQUESTS #52d — workspace health is owner/admin-only, enforced server-side, not just in the UI.**
      _(Called #34d while #29 was in review; renumbered to #52d when Lane 5's merges took #34–#51.)_

  Today the only thing stopping a manager from reading Admin Home data is `H7AdminHomeOwner.tsx`
  rendering a "restricted" state. The data layer's `loadWorkspaceHealth` refuses **reps only**
  (`assertNotRep`), so a manager, viewer or coach passes it. And a data-layer guard is still
  frontend code: anyone with a session can call the API directly. Same class of problem as
  BACKEND_BACKLOG **item 0 (P0)** — rep-scoped call access is "UI-only today".

  Done when **all three** hold:
  1. **Data layer (Foundation, frozen path — needs an owner PR):** `assertOwnerOrAdmin(ctx, "workspace health")`
     replaces the rep-only guard in `src/lib/data/insights/hooks.ts`; a case is added to
     `__tests__/rep-safety.test.ts` (manager and rep both refused). Defence in depth, not the guarantee.
  2. **Database (Tirth):** the data H7 reads — workspace health / alerts (C-31, #52b), adoption stats
     (#52a), seats (`usePlan`), cross-team patterns (#52c) — is readable **only** by owner/admin, via RLS
     or `SECURITY DEFINER` RPCs that check `organization_members.role` (and the V1 role once C-09 lands).
     **This half is not in any `BACKEND_BACKLOG.md` contract yet** — #52a/#52b propose the tables but say
     nothing about who may read them. Add it to the contracts.
  3. **Contract test** (`src/lib/data/__tests__/contracts/`): a **manager** session and a **rep** session each
     get 0 rows / a refusal from every one of those sources; an owner and an admin get data.
  4. **Real-mode check** on H7 with a manager session: restricted state, and no owner data in the network tab.

## Preconditions that also gate this

Not asked for, but the cutover rule and the verification column below depend on them — strike if wrong.

- [x] **H7 is merged** — [#29](https://github.com/Bylda/bylda/pull/29), `bf70f41`. §12 B needs Lane 1 sections 1–2.
- [ ] **A replayable environment exists.** A local Supabase stack built from `supabase/migrations` fails at
      `20260807000001_integration_oauth.sql` (`column "value_hint" does not exist`): that migration and
      `20260612210000_fix_integration_save.sql` use `value_hint` / `encrypted_value`, which no migration
      ever adds. Until it replays from empty, **no "real-mode verified" box below can be checked.** (Tirth.)
- [x] Sign-in returns to the page the guard sent the visitor from — [#28](https://github.com/Bylda/bylda/pull/28), `6826888`.
      (The redirect _loop_ is already fixed: #27, merged.)

## Screens — real-mode verified

"Real-mode verified" means: `VITE_BYLDA_MOCKS=false`, a **signed-in session on a replayable environment**
(not the hosted project), the right role for the screen, and — with screenshots at `design-qa/<code>-real.png` —
**default · loading · error · empty · wrong-role** each checked, with **no mock fixture rendered as if real**.
"Data today" is each hook's `SOURCE` on `integration` (`mock` = fixtures only; `hybrid` = real where the
table exists, GAP fields come back `null`/`[]`).

- [ ] **H1** Manager Home — For You · `/app/home` · Figma `7:2` · merged — real-mode verified
  - Data today: `useHomeFeed` **mock** · `useCalls` hybrid · `useCoachingFoci` **mock** · `useReports` **mock** · `useTeamMembers` hybrid · `useViewer` hybrid
  - Mock-verified: `design-qa/H1.png` (+ `H1-1280`, `H1-1024`, and before/after states from #25)
  - Needs for real: C-04/C-07 (feed), C-05 (coaching), C-13 (briefs)
- [ ] **H2** Team Updates · `/app/home/team-updates` · `43:692` · merged (#25) — real-mode verified
  - Data today: `useHomeFeed` **mock** · `useCoachingFoci` **mock** · `useTeamMembers` hybrid
  - Mock-verified: `design-qa/H2.png`
  - Needs for real: C-05; **#33a** (activity events) for the rows Figma shows that are not built
- [ ] **H3** Calls · `/app/home/calls` · `43:1176` · merged (#25) — real-mode verified
  - Data today: `useHomeFeed` **mock** · `useCalls` hybrid (`coachingValue`, `topMoment` are GAP → list is empty in real mode)
  - Mock-verified: `design-qa/H3.png`
  - Needs for real: C-06/C-10; **#33d**. Delete `home/calls/worthYourTime.ts` when #33d lands (`TODO(LANE_REQUESTS 33d)`)
- [ ] **H4** Coaching · `/app/home/coaching` · `43:1670` · merged (#25) — real-mode verified
  - Data today: `useCoachingFoci` **mock**
  - Mock-verified: `design-qa/H4.png`
  - Needs for real: C-05; **#33b** (interim progress)
- [ ] **H5** Reports · `/app/home/reports` · `43:2139` · merged (#25) — real-mode verified
  - Data today: `useReports` **mock** · `useBrief` **mock** (one `useBrief` per row until #33c)
  - Mock-verified: `design-qa/H5.png`
  - Needs for real: C-13; **#33c**
- [ ] **H6** Mentions · `/app/home/mentions` · `43:2612` · merged (#25) — real-mode verified
  - Data today: **none** — lane-local `useMentions` serves a fixture in mock mode only and `[]` otherwise, so in real mode this screen is an empty state by construction
  - Mock-verified: `design-qa/H6.png`
  - Needs for real: the `useMentions` fold-into-data item below
- [ ] **H7** Admin Home — Owner · `/app/home/admin` · `31:9916` · merged (#29) — real-mode verified
  - Data today: `useWorkspaceHealth` hybrid (`health_checks` real; alerts/seats/failed jobs GAP) · `useDataSources` hybrid · `useTeams` **mock** (C-08) · `useCalls` hybrid · `useCoachingFoci` **mock** · `usePatterns` **mock** · `usePlan` hybrid · `useMembers` hybrid · `useMethodologies` **mock** · `useDeliveryChannels` **mock**
  - Mock-verified: `design-qa/H7-{default,loading,error,empty,non-owner}.png`
  - Needs for real: **#52a–e**, and the blocker above. Also check **owner** and **admin** separately, plus **manager** (must be refused)

Rep-safety applies to every Lane 1 screen: H1–H7 are manager/owner surfaces, so a **rep** session must get
the restricted state on each (the data layer refuses reps today; the database does not — BACKEND_BACKLOG item 0).

## Open LANE_REQUESTS (Lane 1)

An item is done when its hook exists in **real** mode (`SOURCE` flipped per CLAUDE.md §12 E) and the screen
renders it without change — or the request is explicitly withdrawn. All shapes are in `LANE_REQUESTS.md`.

Merged on `integration` — Manager Home tabs (#25). _(#33 has sub-rows **33a–d**; there is no 33e.)_

- [ ] **#33** — umbrella: H2–H6 gaps, what is derived vs missing; carries the `useMentions` and `List` primitives items below
- [ ] **#33a** — `useTeamActivity` / `TeamActivityEvent` (H2)
- [ ] **#33b** — `CoachingFocus.metricUnit` + `progress` (H4)
- [ ] **#33c** — `ReportListItem.readMinutes` / `summary` / `series` (H5)
- [ ] **#33d** — `Call.reviewPriority` + `useCalls({ sort, since, limit })` (H3)

Merged on `integration` — Admin Home ([#29](https://github.com/Bylda/bylda/pull/29)). _(Called #34 / 34a–e during review; renumbered to **#52 / 52a–e** when Lane 5 took #34–#51.)_

- [ ] **#52** — umbrella: H7 built from what, and what is missing
- [ ] **#52a** — `useAdoption` (briefs opened, per-team open rate, trajectory, focus-ack window) — **Tirth: confirm the trajectory metric**
- [ ] **#52b** — `WorkspaceHealth.alerts[]` kind / source link / notify target, `useNotifyAlertOwner`, `callsReceivedThisWeek`
- [ ] **#52c** — `Pattern` cross-team fields (`teamIds`, `byTeam`, `body`, `callsAnalyzed`) + `usePatterns("cross_team")`, owner/admin only
- [ ] **#52d** — owner/admin-only enforcement — **cutover blocker, see top**
- [ ] **#52e** — `TeamSummary.manager` + `activeFocuses`, `Plan.interval`, `Methodology.teamIds`

### `fold-into-data`

- [ ] **`useMentions`** — `useMentions(): Mention[]` with `{ id, from, room | dm, body, createdAt, read }` (C-33 / C-34; first filed in **#33**).
      Today: `home/mentions/useMentions.ts` is a lane-local, **mock-mode-only** fixture. **Delete it when the hook lands**,
      and drop its `GAP` comment. Until then H6 is empty in production.

### Also open, not blockers

- [ ] `fold-into-kit`: `SectionLabel` / `ListCard` / `ListRow` (`lane-1/home/shared/List.tsx`; filed in #33), reused by H2–H7.
