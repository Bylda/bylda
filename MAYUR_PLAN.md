# MAYUR_PLAN.md — Lanes 5 → 2 → 6, one session at a time

Written 2026-10-01 from `origin/integration` @ `87f7110`. Supersedes the Mayur section of
`TEAM_START.md` for **remaining** work only (that file still lists sections you already shipped).

**70 screens left in 20 sessions. One session = one section = one PR. Then STOP and close the session.**
The next section starts in a **brand-new session** (CLAUDE.md §9: "Start a fresh session per
section. Context rot is real on a build this size.") — never continue in the old one.

---

## 0. The loop (do this every time)

**A. Before opening the session (you, 2 minutes)**

```bash
git fetch origin
git checkout lane-<N>-mayur          # lane-5-mayur | lane-2-mayur | lane-6-mayur
git merge origin/integration         # must be clean; fast-forwards if your last PR is merged
bun install
bun run typecheck                    # must print exactly 8 errors (known). 9+ = stop and tell Ansh
```

- **Don't start Session N+1 until Session N's PR is merged into `integration`.** If it isn't,
  the next PR will contain both sections.
- If the merge conflicts in `src/routeTree.gen.ts`: run `bun run build`, commit the regenerated file.
- If it conflicts in `LANE_REQUESTS.md`: keep both rows.

**B. Open a NEW Claude Code session** on repo `Bylda/bylda`, branch from the step above, and paste
that session's prompt (each one is a few lines — the detail lives in this file).

**C. Inside the session** Claude builds only that section, then runs the finish checklist (§5),
commits, pushes `lane-<N>-mayur`, opens **one PR into `integration`** titled
`L5 — <section>` / `L2 — <section>` / `L6 — <section>` with screenshots, writes a short report, **stops**.

**D. After** — check CI is green, ping Ansh for review, tick the box in §2, go to the next session.

---

## 1. One-time setup — do these BEFORE Session 1

1. **Get this file onto `integration`.** The session prompts tell Claude to read `MAYUR_PLAN.md`;
   it only exists on branches that have merged it.
2. **Settle PR #24 ("Lanes 2 + 6 → Dhruv", open).** It would reassign Lanes 2 and 6 (44 of your 70
   screens). `CLAUDE.md` on `integration` currently says Lanes 2, 5, 6 are yours. Ask Ansh. If Dhruv
   takes them, **skip Sessions 8–20** and do only Lane 5.
3. **Lane 5 has no `design-ref/` folders** (E1–E18, B1–B9 — verified: none exist). The rule "don't call
   Figma if design-ref exists" therefore doesn't apply: for Lane 5 sessions Claude **may and must**
   call `get_design_context` by node ID (fileKey `8q5872jwTTRK69cOrWDOmk`) and `get_screenshot`.
   Make sure the Figma MCP is connected in your environment. Lanes 2 and 6 have design-ref for every
   screen — use `design-ref/<code>/spec.md` + `frame.png`, no Figma calls.
4. **Your three branches are stale.** `lane-5-mayur` is 51 commits behind `integration`,
   `lane-6-mayur` 27, `lane-2-mayur` 11. Step 0-A above fixes that (they're fully merged, so it is a
   fast-forward). Do it for each lane the first time you touch it.
5. Local dev for verifying screens (mock data forces every field to render):

   ```bash
   VITE_BYLDA_MOCKS=true bun run dev --host 127.0.0.1     # add ?as=rep to view as Jordan (rep)
   ```

---

## 2. Progress tracker

| # | Lane | Section | Screens | Branch | PR |
| --- | --- | --- | --- | --- | --- |
| [ ] 1 | 5 | Settings — workspace, profile, users, teams, roles | E1–E5 | `lane-5-mayur` | |
| [ ] 2 | 5 | Settings — analysis, notifications, retention | E6–E8 | `lane-5-mayur` | |
| [ ] 3 | 5 | Methodology | E9–E14 | `lane-5-mayur` | |
| [ ] 4 | 5 | Billing, usage, API keys, audit log | E15–E18 | `lane-5-mayur` | |
| [ ] 5 | 5 | Mobile — rep | B1, B4, B6, B9 | `lane-5-mayur` | |
| [ ] 6 | 5 | Mobile — manager + messaging | B2, B3, B5, B7, B8 | `lane-5-mayur` | |
| [ ] 7 | 5 | Responsive QA + Lane 5 wrap-up | B10, B11 (QA only) | `lane-5-mayur` | |
| [ ] 8 | 2 | Calls index + rep view | C1, C2, C9 | `lane-2-mayur` | |
| [ ] 9 | 2 | Upload + comparison | C7, C8 | `lane-2-mayur` | |
| [ ] 10 | 2 | Assign coaching + result | G2, G12 | `lane-2-mayur` | |
| [ ] 11 | 2 | Coaching detail | G6–G10 | `lane-2-mayur` | |
| [ ] 12 | 2 | Coaching index + rep view + lifecycle | G3, G4, G5, G11, G1 | `lane-2-mayur` | |
| [ ] 13 | 2 | Search & Ask | S1, S2, S3 | `lane-2-mayur` | |
| [ ] 14 | 6 | Reports — finish index, daily, weekly | P1, P2, P5 | `lane-6-mayur` | |
| [ ] 15 | 6 | Reports — rep, team, behavior, outline | P7, P8, P9, P6 | `lane-6-mayur` | |
| [ ] 16 | 6 | Reports — email, push, print | P3, P4, P10 | `lane-6-mayur` | |
| [ ] 17 | 6 | Rooms directory + room feed | O1, O2 | `lane-6-mayur` | |
| [ ] 18 | 6 | Room tabs | O3–O7 | `lane-6-mayur` | |
| [ ] 19 | 6 | Room kinds | O8–O11 | `lane-6-mayur` | |
| [ ] 20 | 6 | New room + DMs + BYLDA Coach | O14, O12, O13 | `lane-6-mayur` | |

Already done, don't rebuild: X1–X3 · Y0–Y13 (Foundation) · C3–C6.
Not yours: P-reports placeholder files sit under `lane-4/reports/` but are **Lane 6 / yours**; Team T1–T13 is Dravin's.

---

## 3. Lane rule blocks (referenced by every session prompt)

### Lane 5 rules

- **Branch:** `lane-5-mayur`. **PR title:** `L5 — …`
- **Edit ONLY:** `src/routes/app/connections/**`, `src/routes/app/workspace/**`,
  `src/routes/app/methodology/**`, `src/routes/app/states/**`, `src/routes/m/**`,
  `src/components/lanes/lane-5/**`
- Screen files: `src/components/lanes/lane-5/settings/` (E1–E18) and `lane-5/mobile/` (B1–B9).
- Mobile screens render **outside the shell** (`bare`), at **390×844**. The route files already exist
  under `src/routes/m/**`; don't touch them.
- Settings screens render **inside the shell** at 1440.

### Lane 2 rules

- **Branch:** `lane-2-mayur`. **PR title:** `L2 — …`
- **Edit ONLY:** `src/routes/app/calls/**`, `src/routes/app/search/**`, `src/routes/app/coaching/**`,
  `src/components/lanes/lane-2/**`
- Screen files: `lane-2/calls/`, `lane-2/coaching/`, `lane-2/search/`.
- **Use the file names that already exist** (`S1CommandPalette.tsx`, `S3AskByldaPanel.tsx`), not the
  longer names in FRAMES.md — the shell imports these exact paths.

### Lane 6 rules

- **Branch:** `lane-6-mayur`. **PR title:** `L6 — …`
- **Edit ONLY:** `src/routes/app/rooms/**`, `src/routes/app/dm/**`, `src/routes/app/reports/**`,
  `src/routes/doc/**`, `src/components/lanes/lane-6/**`, `src/components/lanes/lane-4/reports/**`
- Report screen files live in `src/components/lanes/lane-4/reports/` (keep that path); the real P1/P2/P5
  code is in `lane-6/reports/` (`ReportsIndex.tsx`, `ReportDocument.tsx`) and the `lane-4/reports/` files are thin wrappers.
- Rooms are **mocks only** — don't wire real fetchers.

### Rules every session (from CLAUDE.md — it auto-loads, but these are the ones that bite)

- **Zero backend changes.** Never touch anything in `BACKEND_BOUNDARY.md`. Run `bun run boundary`.
- Data **only** from `@/lib/data`; UI **only** from `@/components/bylda`; tokens only (`by-*`),
  no hex / `rgb()` / inline styles / gradients. No `fetch`, no `supabase.*`, no hard-coded numbers.
- Kit missing something? Build `Local<Name>` in your lane folder, log it in `LANE_REQUESTS.md` tagged
  **`fold-into-kit`** (check for an existing `fold-into-kit` row first — reuse it). Next free row is **#32**.
- Data field missing? That's a gap in the data layer, never in the screen: report it in `LANE_REQUESTS.md`
  — do **not** edit `src/lib/data/**` (Ansh's, frozen) or add fields to a screen.
- Don't edit the router config, nav, `src/styles/**`, `src/components/bylda/**`, `design-ref/**`.
- **Every insight shows confidence + sample size.** Low confidence = observation only, **no action button**.
  Language: "associated with", "observed alongside" — never "caused".
- **Reps never see peer data, rankings, or named-peer comparisons** (§4, §13.10). No backend guarantee —
  the UI must enforce it.
- Radius: controls 6 (`rounded-by-control`), cards 10 (`rounded-by-card`). Shadow only on menus, popovers,
  modals, hero cards (`shadow-by-float`). Form errors use `by-feedback-error`, not signal colours.
- Every screen needs **empty, loading and error** states (`DataBoundary` + `SystemState`; Y9 for forbidden-for-role).
- Notification severity = a dot and a word. Never a red badge or a count pile-up.

---

## 4. The sessions

Each session: **Scope table → gotchas → paste prompt.** The prompt is the *only* thing you paste.
All file names are relative to the lane's screen folder named in §3.

---

### SESSION 1 — Settings: workspace, profile, users, teams, roles (E1–E5) · Lane 5

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| E1 | Workspace general | `31:2201` | `/app/workspace` | `E1SettingsWorkspaceGeneral` | `useWorkspaceSettings` |
| E2 | Profile | `31:2394` | `/app/workspace/profile` | `E2SettingsProfile` | `useProfile` |
| E3 | Users | `31:2583` | `/app/workspace/users` | `E3SettingsUsers` | `useMembers`, `useInviteMembers` |
| E4 | Teams | `31:2828` | `/app/workspace/teams` | `E4SettingsTeams` | `useTeams`, `useMembers` |
| E5 | Roles & permissions | `31:3018` | `/app/workspace/roles` | `E5SettingsRolesPermissions` | `useRoleDefinitions` |

Gotchas
- Figma only (no design-ref). Page `1:17`. **Build E1 first** and extract the settings sub-nav + form
  layout into one `LocalSettingsLayout` in `lane-5/settings/`; E2–E18 will reuse it — log it `fold-into-kit`.
- Save/invite buttons call the mock actions the hooks expose; if a hook has no write action, log it, don't fake persistence.
- E5: show the real role definitions; no editing of permissions the data layer can't express.

```text
New session, Lane 5 (Mayur), repo Bylda/bylda, branch lane-5-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 1" — screens E1–E5. Follow "Lane 5 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. No design-ref exists for E-screens: use Figma
get_design_context by node ID (fileKey 8q5872jwTTRK69cOrWDOmk). Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L5 — Settings: workspace, profile, users, teams, roles", short report, STOP.
Do not start Session 2.
```

---

### SESSION 2 — Settings: analysis, notifications, retention (E6–E8) · Lane 5

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| E6 | Analysis preferences | `31:3275` | `/app/workspace/analysis` | `E6SettingsAnalysisPreferences` | `useAnalysisPreferences` |
| E7 | Notifications | `31:3474` | `/app/workspace/notifications` | `E7SettingsNotifications` | `useNotificationPreferences` |
| E8 | Retention & privacy | `31:3738` | `/app/workspace/retention` | `E8SettingsRetentionPrivacy` | `useRetentionPolicy` |

Gotchas
- Reuse `LocalSettingsLayout` from Session 1.
- E6: evidence thresholds are **hard** (rep insight ≥10 calls, team pattern ≥50, outcome association ≥30 closed).
  If Figma shows them as editable, render what Figma shows but log the conflict with §13.13 in `LANE_REQUESTS.md`.
- E7: severity = dot + word (no red badges). Delivery channels vs data sources stay separate settings areas.
- E8: this is the privacy page — copy must match the product rules ("Bylda never writes to your CRM").

```text
New session, Lane 5 (Mayur), repo Bylda/bylda, branch lane-5-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 2" — screens E6–E8. Follow "Lane 5 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. No design-ref: use Figma get_design_context by node
ID (fileKey 8q5872jwTTRK69cOrWDOmk). Reuse LocalSettingsLayout from Session 1. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L5 — Settings: analysis, notifications, retention", short report, STOP.
```

---

### SESSION 3 — Methodology (E9–E14) · Lane 5

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| E9 | Index | `31:7762` | `/app/methodology` | `E9MethodologyIndex` | `useMethodologies` |
| E10 | Detail (stages) | `31:7973` | `/app/methodology/$methodologyId` | `E10MethodologyDetail` | `useMethodology` |
| E11 | Behavior rules list | `31:8450` | `…/$methodologyId/rules` | `E11MethodologyBehaviorRulesList` | `useMethodology` |
| E12 | Behavior rule editor | `31:8218` | `…/rules/$ruleKey` | `E12MethodologyBehaviorRuleEditor` | `useMethodology`, `useBehaviors` |
| E13 | Objection library | `31:8720` | `/app/methodology/objections` | `E13MethodologyObjectionLibrary` | `useObjectionLibrary` |
| E14 | Success criteria | `31:8913` | `/app/methodology/success-criteria` | `E14MethodologySuccessCriteria` | `useSuccessCriteria` |

Gotchas
- This is the biggest Lane 5 section (6 screens, one editor). Build E9 → E10 → E11 → E12 → E13 → E14.
- E12 edits a `Behavior.rule` (json). `Behavior` has **no table** — the editor saves through the mock action only; don't invent a backend shape.
- Behavior definitions are template-driven and admin-editable here; keep `direction (higher_is_better?)` visible.

```text
New session, Lane 5 (Mayur), repo Bylda/bylda, branch lane-5-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 3" — screens E9–E14. Follow "Lane 5 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. No design-ref: use Figma get_design_context by node
ID (fileKey 8q5872jwTTRK69cOrWDOmk). Reuse LocalSettingsLayout. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L5 — Methodology", short report, STOP.
```

---

### SESSION 4 — Billing, usage, API keys, audit log (E15–E18) · Lane 5

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| E15 | Billing & plan | `31:9113` | `/app/workspace/billing` | `E15SettingsBillingPlan` | `usePlan`, `useInvoices` |
| E16 | Usage | `31:9316` | `/app/workspace/usage` | `E16SettingsUsage` | `useUsage` |
| E17 | API keys | `31:9530` | `/app/workspace/api-keys` | `E17SettingsAPIKeys` | `useApiKeys` |
| E18 | Audit log | `31:9715` | `/app/workspace/audit-log` | `E18SettingsAuditLog` | `useAuditLog` |

Gotchas
- `src/lib/stripe.ts`, `plan.ts`, `feature-gates.ts` are **frozen** — only `usePlan` / `useInvoices` / `useUsage`.
- No donut/KPI walls (§3). E16 usage uses plain bars/numbers per Figma.
- E17: keys render masked; no real secret anywhere, no env files.

```text
New session, Lane 5 (Mayur), repo Bylda/bylda, branch lane-5-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 4" — screens E15–E18. Follow "Lane 5 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. No design-ref: use Figma get_design_context by node
ID (fileKey 8q5872jwTTRK69cOrWDOmk). Reuse LocalSettingsLayout. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L5 — Billing, usage, API keys, audit log", short report, STOP.
```

---

### SESSION 5 — Mobile, rep (B1, B4, B6, B9) · Lane 5

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| B1 | Rep Daily Brief | `20:2` | `/m/brief` | `B1MobileRepDailyBrief` | `useRepHome` |
| B4 | Coaching acknowledge | `32:572` | `/m/coaching/$focusId` | `B4MobileCoachingAcknowledge` | `useMyCoaching`, `useAcknowledgeCoaching`, `usePushRegistration` |
| B6 | Moment player | `32:646` | `/m/moments/$momentId` | `B6MobileMomentPlayer` | `useCallReview` |
| B9 | Ask Bylda / BYLDA Coach | `52:11547` | `/m/ask` | `B9MobileAskByldaBYLDACoach` | `useSearch` |

Gotchas
- Page `1:19`, **390×844**, outside the shell. Verify with the browser at 390 wide.
- **Rep surfaces:** no peer data, no rankings. B9 Coach prompt suggestions must be self-comparison only
  ("Me vs my last 30 days", §13.10); *"Coach only sees your calls"* stays; each Coach insight line shows
  confidence + "based on N calls" (§13.14). Practice/role-play only from the rep's own calls (§13.12).
- B1: render the rep brief; insights appear at ≥10 analyzed calls, otherwise the "not enough data" state (Y3).
- Build a small `LocalMobileFrame` (status bar + safe area) once; reuse in Session 6 — log `fold-into-kit`.

```text
New session, Lane 5 (Mayur), repo Bylda/bylda, branch lane-5-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 5" — screens B1, B4, B6, B9 (mobile, rep, 390×844). Follow
"Lane 5 rules", "Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. No design-ref:
use Figma get_design_context by node ID (fileKey 8q5872jwTTRK69cOrWDOmk). Verify with VITE_BYLDA_MOCKS=true
at 390px width. Enforce the rep-privacy rules in the Gotchas.
When done: one PR titled "L5 — Mobile: rep", short report, STOP.
```

---

### SESSION 6 — Mobile, manager + messaging (B2, B3, B5, B7, B8) · Lane 5

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| B2 | Manager Brief + alert | `20:24` | `/m/manager-brief` | `B2MobileManagerBriefAlert` | `useHomeFeed` |
| B3 | Quick call review + coach | `20:67` | `/m/calls/$callId` | `B3MobileQuickCallReviewCoach` | `useCallReview`, `useAssignCoaching` |
| B5 | Alerts (manager) | `32:605` | `/m/alerts` | `B5MobileAlerts` | `useNotifications`, `usePushRegistration` |
| B7 | Room #objection-watch | `52:11424` | `/m/rooms/$roomId` | `B7MobileRoomObjectionWatch` | `useRoomMessages` |
| B8 | Direct message Dana ↔ Jordan | `52:11495` | `/m/dm/$threadId` | `B8MobileDirectMessage` | `useDmMessages` |

Gotchas
- Reuse `LocalMobileFrame` from Session 5.
- B5: severity is **a dot and a word**, never a red badge or pile-up count (`31:1197`).
- B3: low-confidence insight → no coach/assign button.
- B7/B8 read the Rooms mocks (Lane 6 data) — read-only here; if a field is missing, log it.

```text
New session, Lane 5 (Mayur), repo Bylda/bylda, branch lane-5-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 6" — screens B2, B3, B5, B7, B8 (mobile, manager + messaging, 390×844).
Follow "Lane 5 rules", "Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. No design-ref:
use Figma get_design_context by node ID (fileKey 8q5872jwTTRK69cOrWDOmk). Reuse LocalMobileFrame.
Verify with VITE_BYLDA_MOCKS=true at 390px.
When done: one PR titled "L5 — Mobile: manager + messaging", short report, STOP.
```

---

### SESSION 7 — Responsive QA + Lane 5 wrap-up (B10, B11) · Lane 5

No new screens. Foundation built the breakpoints; Lane 5 **QA's** them.

| Code | Frame | Figma | Check |
| --- | --- | --- | --- |
| B10 | Manager Home @1280 — context panel becomes overlay drawer | `32:7245` | `/app/home` at 1280×1080 |
| B11 | Manager Home @1024 — icon rail only | `32:7490` | `/app/home` at 1024×1080 |

Deliverable: screenshots to `design-qa/B10.png` and `design-qa/B11.png` and a pass/fail note per frame.
**You may not edit the shell** (frozen, Ansh) — any mismatch goes in `LANE_REQUESTS.md` as a new row
(`#32+`). Also: open each Lane 5 screen (E1–E18, B1–B9) once and confirm the 3 states (empty/loading/error) render.

```text
New session, Lane 5 (Mayur), repo Bylda/bylda, branch lane-5-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 7" — QA of B10 (1280) and B11 (1024) on /app/home against Figma
32:7245 and 32:7490. Do NOT edit the shell or Lane 1 files; log any mismatch in LANE_REQUESTS.md. Save
design-qa/B10.png and design-qa/B11.png. Then smoke-test every Lane 5 screen's empty/loading/error states.
One PR titled "L5 — Responsive QA + wrap-up", short report, STOP. Lane 5 is then complete.
```

---

### SESSION 8 — Calls index + rep view (C1, C2, C9) · Lane 2

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| C1 | Calls Index — saved views | `17:1090` | `/app/calls` | `C1CallsIndexSavedViews` | `useSavedViews`, `useCalls` |
| C2 | All calls + filters open | `52:8665` | `/app/calls/all` | `C2CallsIndexAllCallsFiltersOpen` | `useCalls` |
| C9 | Calls — Rep view (my calls) | `28:1646` | `/app/calls/mine` | `C9CallsRepView` | `useMyCalls` |

Gotchas
- Use `design-ref/C1`, `C2`, `C9` (`spec.md` + `frame.png`). No Figma calls.
- `coaching_value` has no column — it ranks calls, so it's mocked (`// GAP:`); the screens must sort by it without knowing that.
- **C9 is a rep surface:** only the rep's own calls (`useMyCalls`), no peer rows, no team median, no ranking.
- Reuse C3–C6 pieces (`ReviewLayout`, `reviewStyle`, `reviewModel`) instead of re-implementing call rows. Read `lane-2/calls/QA.md`.
- Open `LANE_REQUESTS` #28 (Call Review shell) — it applies to anything inheriting the same shell offset.

```text
New session, Lane 2 (Mayur), repo Bylda/bylda, branch lane-2-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 8" — screens C1, C2, C9. Follow "Lane 2 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref/<code>/spec.md + frame.png; do
NOT call Figma. Verify with VITE_BYLDA_MOCKS=true; check C9 with ?as=rep.
When done: one PR titled "L2 — Calls index + rep view", short report, STOP.
```

---

### SESSION 9 — Upload + comparison (C7, C8) · Lane 2

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| C7 | Calls — Manual upload | `28:1263` | `/app/calls/upload` | `C7CallsManualUpload` | `useUploadCall` |
| C8 | Call comparison | `28:1464` | `/app/calls/compare` | `C8CallComparison` | `useCallComparison` |

Gotchas
- `design-ref/C7` and `C8` exist. C7 was re-exported (verbatim spec, shell inline).
- C7: show real progress states from the hook only — **no fake progress, no shimmer** (§3 motion).
- C8: association language only. Never "caused".

```text
New session, Lane 2 (Mayur), repo Bylda/bylda, branch lane-2-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 9" — screens C7, C8. Follow "Lane 2 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT call Figma.
Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L2 — Upload + comparison", short report, STOP.
```

---

### SESSION 10 — Assign coaching + result (G2, G12) · Lane 2

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| G2 | Assign Coaching — modal | `14:24` | `/app/coaching/assign` | `G2AssignCoachingModal` | `useAssignCoaching`, `useTeamMembers`, `useBehaviors` |
| G12 | Behavior Change Result — Alex Morgan | `14:224` | `/app/coaching/$focusId/result` | `G12BehaviorChangeResultAlexMorgan` | `useCoachingFocus` |

Gotchas
- **G2 is shared.** It is opened from Home, Calls, Intelligence and "+ New". Before touching it:
  `grep -rn "G2AssignCoachingModal\|useAssignCoaching" src` and keep every existing import/prop working
  (Lane 1's I2 already has an assign-coaching button). Export the component *and* serve the route.
- Modal uses `shadow-by-float` (§13.15). A low-confidence insight must not offer "Assign coaching".
- Coaching = 4 objects only: Focus, Evidence, Acknowledgement, Result. No courses, no quizzes.
- G12: result states `held | not_yet | reverted` — measured against baseline/target, association language, show sample size.

```text
New session, Lane 2 (Mayur), repo Bylda/bylda, branch lane-2-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 10" — screens G2 and G12. Follow "Lane 2 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref/G2 and G12; do NOT call Figma.
First grep for existing G2 / useAssignCoaching callers and don't break them. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L2 — Assign coaching + result", short report, STOP.
```

---

### SESSION 11 — Coaching detail (G6–G10) · Lane 2

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| G6 | Detail — Jordan · active | `30:639` | `/app/coaching/$focusId` | `G6CoachingDetailJordanActive` | `useCoachingFocus` |
| G7 | Detail — Overview | `46:1604` | `…/$focusId/overview` | `G7CoachingDetailOverview` | `useCoachingFocus` |
| G8 | Detail — Evidence | `46:1935` | `…/$focusId/evidence` | `G8CoachingDetailEvidence` | `useCoachingFocus` |
| G9 | Detail — Progress | `46:2244` | `…/$focusId/progress` | `G9CoachingDetailProgress` | `useCoachingFocus` |
| G10 | Detail — Discussion | `46:2549` | `…/$focusId/discussion` | `G10CoachingDetailDiscussion` | `useCoachingFocus`, `useCoachingComments` |

Gotchas
- One shared detail layout with tabs (Overview · Evidence · Progress · Discussion) — build it once (`LocalCoachingDetailLayout`), then the 5 screens are thin.
- G9 sparkline: **fixed y-range per behavior**, don't copy the mock's auto-scale (Dev Handoff: "fix in build").
- Every insight/evidence line: confidence + sample size.

```text
New session, Lane 2 (Mayur), repo Bylda/bylda, branch lane-2-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 11" — screens G6–G10 (coaching detail). Follow "Lane 2 rules",
"Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT
call Figma. Build one shared detail layout, then the five screens. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L2 — Coaching detail", short report, STOP.
```

---

### SESSION 12 — Coaching index + rep view + lifecycle (G3, G4, G5, G11, G1) · Lane 2

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| G3 | Index (Active) | `30:246` | `/app/coaching` | `G3CoachingIndex` | `useCoachingFoci` |
| G4 | Needs follow-up | `52:6380` | `/app/coaching/follow-up` | `G4CoachingNeedsFollowUp` | `useCoachingFoci` |
| G5 | Completed | `30:430` | `/app/coaching/completed` | `G5CoachingCompleted` | `useCoachingFoci` |
| G11 | Rep view (Jordan) | `30:839` | `/app/coaching/mine` | `G11CoachingRepView` | `useMyCoaching`, `useAcknowledgeCoaching` |
| G1 | Coaching lifecycle (reference diagram) | `14:2` | component only | `G1CoachingLifecycle` | — (static) |

Gotchas
- **G11 is a rep surface:** only the rep's own focus items; no peer rows; no team median.
- G1 is a 1450×70 reference diagram, no route.
- Status vocabulary: `assigned · acknowledged · measuring · held · not_yet · reverted`.

```text
New session, Lane 2 (Mayur), repo Bylda/bylda, branch lane-2-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 12" — screens G3, G4, G5, G11, G1. Follow "Lane 2 rules",
"Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT
call Figma. Check G11 with ?as=rep and confirm no peer data. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L2 — Coaching index + rep view", short report, STOP.
```

---

### SESSION 13 — Search & Ask (S1, S2, S3) · Lane 2

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| S1 | Command palette ⌘K | `31:760` | shell overlay | `search/S1CommandPalette` | `usePaletteItems` |
| S2 | Natural-language results | `31:909` | `/app/search` | `search/S2SearchNaturalLanguageResults` | `useSearch` |
| S3 | Ask Bylda side panel (440px) | `50:26784` | shell overlay | `search/S3AskByldaPanel` | `useSearch` |

Gotchas
- S1 and S3 are **mounted by the shell** from these exact file paths: keep the export names; don't edit the shell.
- **Search never answers from memory.** It converts the question into **visible, editable filter chips**; every
  result links to a call. Build chips, not a chat (`31:909`).
- S3: panel is 440 wide and overlays main (main shrinks to 1000).
- When there's no evidence, say so with the number needed. No fake intelligence.

```text
New session, Lane 2 (Mayur), repo Bylda/bylda, branch lane-2-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 13" — screens S1, S2, S3. Follow "Lane 2 rules", "Rules every session"
and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT call Figma. Do not edit
the shell — keep the existing export names so it keeps mounting S1/S3. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L2 — Search & Ask", short report, STOP. Lane 2 is then complete.
```

---

### SESSION 14 — Reports: finish index, daily, weekly (P1, P2, P5) · Lane 6

P1/P2/P5 exist as a "partial implementation" (PR #14).

| Code | Screen | Figma | Route | Wrapper file (`lane-4/reports/`) | Real code |
| --- | --- | --- | --- | --- | --- |
| P1 | Reports — Index | `29:159` | `/app/reports` | `P1ReportsIndex` | `lane-6/reports/ReportsIndex.tsx` |
| P2 | Daily Manager Brief — in-app | `13:2` | `/app/reports/daily` | `P2DailyManagerBriefInAppDocument` | `lane-6/reports/ReportDocument.tsx` |
| P5 | Weekly Manager Report — living doc | `29:352` | `/app/reports/weekly` | `P5WeeklyManagerReportLivingDocument` | `lane-6/reports/ReportDocument.tsx` |

Gotchas
- Goal: close every difference that can be fixed **inside Lane 6**. `src/lib/data/reports/**` is frozen (Ansh) —
  gaps go in `LANE_REQUESTS.md` (**#16, #17, #18 already exist: update them, don't duplicate**).
  Known gaps: report presentation fields (delivery/status/sharing/subject), scheduling/pinning/comments/PDF-export
  actions, P2 shows `Tue 30 Sep` vs design `Tuesday, September 29`, P5 has two sections vs design's more.
- Every report statement: confidence + sample size (§13.14). Never "caused".
- Compare your screenshot to `design-ref/P1|P2|P5/frame.png`; don't call Figma.

```text
New session, Lane 6 (Mayur), repo Bylda/bylda, branch lane-6-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 14" — finish P1, P2, P5 (they exist as a partial build). Follow
"Lane 6 rules", "Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from
design-ref; do NOT call Figma. Don't edit src/lib/data/** — update LANE_REQUESTS #16–#18 for anything blocked.
Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L6 — Reports: index, daily, weekly", short report, STOP.
```

---

### SESSION 15 — Reports: rep, team, behavior, outline (P7, P8, P9, P6) · Lane 6

| Code | Screen | Figma | Route | File (`lane-4/reports/`) | Hooks |
| --- | --- | --- | --- | --- | --- |
| P7 | Weekly Rep Report — Jordan | `29:625` | `/app/reports/rep/$repId` | `P7WeeklyRepReportJordan` | `useBrief` |
| P8 | Team Report — September | `29:773` | `/app/reports/team/$teamId` | `P8TeamReportSeptember` | `useBrief` |
| P9 | Behavior Report — Objection handling | `29:993` | `/app/reports/behavior/$behaviorKey` | `P9BehaviorReportObjectionHandling` | `useBrief` |
| P6 | Weekly Sales Behavior Report — outline | `52:10624` | `/app/reports/outline` | `P6WeeklySalesBehaviorReportOutline` | `useBrief` |

Gotchas
- Reuse `ReportDocument` from Session 14 — don't fork a second document layout.
- **P7 is a rep's report:** the rep never sees peers. The team median is allowed only as one anonymous number and
  **hidden when the team has < 8 reps** (§13.6). P8 (team report) is manager-only.
- P9: `OutcomeAssociation` hidden when `n_closed < 30` → "Behavior · Insufficient data" state needing "~30 calls with and without it, plus outcomes from your CRM".

```text
New session, Lane 6 (Mayur), repo Bylda/bylda, branch lane-6-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 15" — screens P7, P8, P9, P6. Follow "Lane 6 rules", "Rules every
session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT call Figma.
Reuse the ReportDocument layout from lane-6/reports. Verify with VITE_BYLDA_MOCKS=true (P7 also with ?as=rep).
When done: one PR titled "L6 — Reports: rep, team, behavior, outline", short report, STOP.
```

---

### SESSION 16 — Reports: email, push, print (P3, P4, P10) · Lane 6

| Code | Screen | Figma | Route | File (`lane-4/reports/`) | Frame size |
| --- | --- | --- | --- | --- | --- |
| P3 | Daily Manager Brief — email | `13:232` | `/doc/manager-brief-email` | `P3DailyManagerBriefEmail` | **760** wide |
| P4 | Daily Rep Brief — email / push (60 sec) | `13:316` | `/doc/rep-brief-push` | `P4DailyRepBriefEmailPush` | **420×380** |
| P10 | Weekly Report — PDF / print (A4) | `29:1154` | `/doc/weekly-print` | `P10WeeklyReportPDFPrint` | **794×1123** |

Gotchas
- These are **not app screens**: no shell, no sidebar. Render at the frame's own width.
- P4 is a rep brief: own data only. P10 needs print CSS (`@media print`, A4) built from tokens — no raw hex.
- Email-safe layout (single column, no shadows, no gradients).

```text
New session, Lane 6 (Mayur), repo Bylda/bylda, branch lane-6-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 16" — screens P3, P4, P10 (outside the shell, /doc/*; widths 760,
420×380, 794×1123). Follow "Lane 6 rules", "Rules every session" and §5 Finish checklist in that file, plus
CLAUDE.md. Build from design-ref; do NOT call Figma. Verify with VITE_BYLDA_MOCKS=true.
When done: one PR titled "L6 — Reports: email, push, print", short report, STOP.
```

---

### SESSION 17 — Rooms directory + room feed (O1, O2) · Lane 6 · MOCKS ONLY

| Code | Screen | Figma | Route | File (`lane-6/rooms/`) | Hooks |
| --- | --- | --- | --- | --- | --- |
| O1 | Rooms — Directory | `31:241` | `/app/rooms` | `O1RoomsDirectory` | `useRooms` |
| O2 | Room — #objection-watch | `18:2` | `/app/rooms/$roomId` | `O2RoomObjectionWatch` | `useRoom`, `useRoomMessages` |

Gotchas
- Mocks only. Build `LocalRoomShell` (header, tab bar: Feed · Insights · Calls · Reports · Files · About, composer) **once** here;
  Sessions 18–19 reuse it — log `fold-into-kit`.
- `/app/rooms/$roomId` must pick the screen by room kind (O2 objection-watch, O8–O11 special kinds) — wire the kind switch now
  with the later kinds falling through to a placeholder, so Session 19 only fills them in.
- Any insight posted into a room: confidence + sample size; low confidence = no action.

```text
New session, Lane 6 (Mayur), repo Bylda/bylda, branch lane-6-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 17" — screens O1, O2 (Rooms are MOCKS ONLY). Follow "Lane 6 rules",
"Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT
call Figma. Build a reusable LocalRoomShell and the room-kind switch on /app/rooms/$roomId.
When done: one PR titled "L6 — Rooms: directory + feed", short report, STOP.
```

---

### SESSION 18 — Room tabs (O3–O7) · Lane 6

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| O3 | #objection-watch · Insights | `48:1283` | `…/$roomId/insights` | `O3RoomObjectionWatchInsights` | `useRoom`, `useRoomMessages` |
| O4 | · Calls | `48:1732` | `…/$roomId/calls` | `O4RoomObjectionWatchCalls` | `useRoom`, `useRoomMessages` |
| O5 | · Reports | `48:2213` | `…/$roomId/reports` | `O5RoomObjectionWatchReports` | `useRoom`, `useRoomMessages` |
| O6 | · Files | `48:2662` | `…/$roomId/files` | `O6RoomObjectionWatchFiles` | `useRoom` |
| O7 | · About | `48:3103` | `…/$roomId/about` | `O7RoomObjectionWatchAbout` | `useRoom` |

Gotchas
- Reuse `LocalRoomShell`. O3 uses `useRoomInsights`, which returns `GatedInsight` — render the "not enough data yet" state for `state: "insufficient"` (no headline exists on it). Demo fixtures already meet the thresholds.
- O5 links into the Reports screens (P-codes); O4 links to calls.

```text
New session, Lane 6 (Mayur), repo Bylda/bylda, branch lane-6-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 18" — screens O3–O7 (room tabs, MOCKS ONLY). Follow "Lane 6 rules",
"Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT
call Figma. Reuse LocalRoomShell.
When done: one PR titled "L6 — Room tabs", short report, STOP.
```

---

### SESSION 19 — Room kinds (O8–O11) · Lane 6

| Code | Screen | Figma | Where | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| O8 | #daily-brief | `31:403` | component, picked by room kind | `O8RoomDailyBrief` | `useRoom`, `useRoomMessages` |
| O9 | #coaching | `31:586` | component, picked by room kind | `O9RoomCoaching` | `useRoom`, `useRoomMessages` |
| O10 | #mid-market-team (team room) | `48:25761` | component, picked by room kind | `O10RoomMidMarketTeam` | `useRoom`, `useRoomMessages` |
| O11 | #acme-logistics (deal room) | `50:3655` | component, picked by room kind | `O11RoomAcmeLogistics` | `useRoom`, `useRoomMessages` |

Gotchas
- No own routes — they render from `/app/rooms/$roomId` via the kind switch from Session 17.
- O9 (coaching room) uses the 4 coaching objects only. O10 is a **team** room: no individual rankings.
- Fixture cast: Acme Revenue, Dana Whitfield (manager), Jordan Reyes (rep), #acme-logistics deal room, David Park (CFO), Sarah Cole (Ops).

```text
New session, Lane 6 (Mayur), repo Bylda/bylda, branch lane-6-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 19" — screens O8–O11 (room kinds, MOCKS ONLY). Follow "Lane 6 rules",
"Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT
call Figma. Reuse LocalRoomShell and the room-kind switch.
When done: one PR titled "L6 — Room kinds", short report, STOP.
```

---

### SESSION 20 — New room + DMs + BYLDA Coach (O14, O12, O13) · Lane 6

| Code | Screen | Figma | Route | File | Hooks |
| --- | --- | --- | --- | --- | --- |
| O14 | Rooms — New room modal | `50:4184` | `/app/rooms/new` | `O14RoomsNewRoomModal` | `useRooms` |
| O12 | Direct message — Dana ↔ Jordan | `49:3123` | `/app/dm/$threadId` | `O12DirectMessageDanaJordan` | `useDmThreads`, `useDmMessages` |
| O13 | Direct message — BYLDA Coach (rep) | `49:3627` | `/app/dm/coach` | `O13DirectMessageBYLDACoach` | `useDmMessages` |

Gotchas
- O14 modal: `shadow-by-float` (§13.15).
- **O13 is a rep surface:** *"Coach only sees your calls"*; prompt suggestions are self-comparison only
  (**"Me vs my last 30 days"**, never "Me vs Theo", §13.10); each Coach line shows confidence + "based on N calls" (§13.14).
  Practice/role-play only from the rep's own calls, no scores/quizzes/lessons (§13.12).
- O12: Dana ↔ Jordan thread is visible to exactly those two; no third-party data.

```text
New session, Lane 6 (Mayur), repo Bylda/bylda, branch lane-6-mayur (already merged with origin/integration).
Open MAYUR_PLAN.md. Do ONLY "SESSION 20" — screens O14, O12, O13 (MOCKS ONLY). Follow "Lane 6 rules",
"Rules every session" and §5 Finish checklist in that file, plus CLAUDE.md. Build from design-ref; do NOT
call Figma. Check O13 with ?as=rep and enforce the rep-privacy rules in the Gotchas.
When done: one PR titled "L6 — New room, DMs, BYLDA Coach", short report, STOP. Lane 6 and your queue are then complete.
```

---

## 5. Finish checklist (every session, before the PR)

Claude runs these; you confirm the output in the PR.

```bash
bun run typecheck       # exactly 8 errors (the known ones). 9 = yours, fix it
bun run lint:changed    # clean (never `bun run lint` — 208 pre-existing errors)
bun run test            # only the 2 known failures (integrations-catalog.test.ts)
bun run build           # green
bun run boundary        # clean — zero backend paths touched
bun run tokens:check    # clean — no raw hex / rgb() outside src/styles/bylda.css
npx prettier --write <only the files you changed>   # NEVER `bun run format` repo-wide
```

- [ ] Matches the frame at **1440** (390 for mobile; the frame's own width for email/print)
- [ ] Empty, loading and error states all present
- [ ] Links match the page-19 prototype flows (0–12)
- [ ] Confidence + sample size on every insight; low confidence = no action; no causal language
- [ ] No peer data in any rep view; sparklines on a fixed y-range; `OutcomeAssociation` hidden below n = 30
- [ ] One screenshot per screen → `design-qa/<code>.png`, compared against `design-ref/<code>/frame.png`
      (Lane 5: compared against `get_screenshot` of the Figma node)
- [ ] PR into **`integration`** (never `main`), titled as the session says, with the screenshots
- [ ] Short report, then **STOP** — don't begin the next session in the same conversation

## 6. If you get stuck

- Ambiguous requirement or Figma contradicts CLAUDE.md → CLAUDE.md §13 wins; log the conflict in `LANE_REQUESTS.md`, don't silently redesign.
- A field/hook/kit part doesn't exist → build a `Local<Name>` in your lane + a `LANE_REQUESTS.md` row; **never** edit frozen paths.
- `bun run boundary` fails → you touched a backend path. Revert that file; don't argue with the guard.
- Don't wait on Tirth: every backend object is mocked, and a swap never changes a screen.
- Anything about ownership, frozen files or priorities → ask Ansh before building.
