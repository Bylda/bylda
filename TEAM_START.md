# TEAM_START.md — ready-to-paste start prompts

Owners: Lane 1 **Ansh** · Lane 4 **Dravin** · Lanes 5, 2, 6 **Mayur** (in that order) · Backend **Tirth**.
Foundation and the data layer are **Ansh**'s. 17 States are done — Foundation built them.

**How to use this file:** open a **fresh** Claude Code session per section, paste your lane's prompt,
then tell it which section to do ("do section 1"). One section per session, one PR per section,
STOP after each. The foundation (tokens, UI kit, shell, nav, data layer, placeholder routes) is
already merged — you fill your own screen files and nothing else.

Every screen already has a placeholder component (the file listed) rendering *"Coming soon: …"*, and
— where it's a page — a route file and a nav link. Replace the component body; keep its export name.

Screen order inside each lane puts the **demo flows first** (Dev Handoff page 20, flows 0–12).

---

## Lane 1 — Ansh · 05 Manager/Admin Home → 14 Notifications → 08 Intelligence

20 screens in 7 sections. Branch `lane-1-ansh`.

```text
You are building Lane 1 (Ansh) of the Bylda V1 frontend rebuild, repo Bylda/bylda.

BRANCH: lane-1-ansh, created from origin/integration. Every morning: `git fetch origin && git merge origin/integration`.

YOU OWN — edit ONLY these paths:
  - src/routes/app/home/**
  - src/routes/app/notifications/**
  - src/routes/app/intelligence/**
  - src/components/lanes/lane-1/**
Everything else is frozen or another lane's. Need a shared change (component, token, hook,
field, shell)? Add a row to LANE_REQUESTS.md and build a local copy in src/components/lanes/lane-1/.
Never touch anything in BACKEND_BOUNDARY.md. Never edit the router config or the nav.

READ ONLY THESE, don't explore elsewhere: CLAUDE.md, src/components/bylda/index.ts,
src/lib/data/README.md. Pull Figma frames by node ID only (fileKey 8q5872jwTTRK69cOrWDOmk),
with get_design_context. Never call get_metadata without a nodeId (it's broken on this file).
Never build from page 19 (PROTO copies) — use it only to check links.
DESIGN-REF: Build each screen from design-ref/<screen-code>/spec.md (+ frame.png if present). Do NOT call Figma tools unless that screen's design-ref folder is missing. For the Figma check before the PR, compare your screenshot to design-ref instead of calling Figma.

RULES: screens import data ONLY from @/lib/data and UI ONLY from @/components/bylda.
No fetch / supabase / invokeEdge in a screen. No hard-coded numbers. Tokens only (by-*).
Run and verify screens with VITE_BYLDA_MOCKS=true so every field renders; never hard-code values.
  (VITE_BYLDA_MOCKS=true bun run dev --host 127.0.0.1; switch role with ?as=rep.)

SECTIONS — build in this order (demo flows first). Do exactly ONE section per session:
1. Manager Home feed + tabs  [Flow 1 · Manager day]
   - **H1** Manager Home — Feed — Figma `7:2` (page `1:6`) · route `/app/home` · file `src/components/lanes/lane-1/home/H1ManagerHomeFeed.tsx` · hooks `useHomeFeed`, `useViewer`
   - **H2** Manager Home — Team Updates — Figma `43:692` (page `1:6`) · route `/app/home/team-updates` · file `src/components/lanes/lane-1/home/H2ManagerHomeTeamUpdates.tsx` · hooks `useHomeFeed`
   - **H3** Manager Home — Calls — Figma `43:1176` (page `1:6`) · route `/app/home/calls` · file `src/components/lanes/lane-1/home/H3ManagerHomeCalls.tsx` · hooks `useHomeFeed`, `useCalls`
   - **H4** Manager Home — Coaching — Figma `43:1670` (page `1:6`) · route `/app/home/coaching` · file `src/components/lanes/lane-1/home/H4ManagerHomeCoaching.tsx` · hooks `useHomeFeed`, `useCoachingFoci`
   - **H5** Manager Home — Reports — Figma `43:2139` (page `1:6`) · route `/app/home/reports` · file `src/components/lanes/lane-1/home/H5ManagerHomeReports.tsx` · hooks `useHomeFeed`, `useReports`
   - **H6** Manager Home — Mentions — Figma `43:2612` (page `1:6`) · route `/app/home/mentions` · file `src/components/lanes/lane-1/home/H6ManagerHomeMentions.tsx` · hooks `useHomeFeed`
2. Admin Home (owner)  [Flow 0 · Sign in (owner lands here)]
   - **H7** Admin Home — Owner (workspace health) — Figma `31:9916` (page `1:6`) · route `/app/home/admin` · file `src/components/lanes/lane-1/home/H7AdminHomeOwner.tsx` · hooks `useWorkspaceHealth`, `useDataSources`, `useUsage`
3. Notifications drawer + center  [Flow 8 · Ask & find]
   - **N1** Notifications — Drawer over Home — Figma `31:1101` (page `1:15`) · mounted by the shell · file `src/components/lanes/lane-1/notifications/N1NotificationsDrawer.tsx` · hooks `useNotifications`, `useMarkNotificationRead`
   - **N2** Notifications — Center — Figma `31:1258` (page `1:15`) · route `/app/notifications` · file `src/components/lanes/lane-1/notifications/N2NotificationsCenter.tsx` · hooks `useNotifications`, `useMarkNotificationRead`
4. Behavior Detail  [Flow 3 · Pattern]
   - **I2** Behavior Detail — Interrupting during objections — Figma `11:2` (page `1:9`) · route `/app/intelligence/behaviors/$behaviorKey` · file `src/components/lanes/lane-1/intelligence/I2BehaviorDetailInterruptingDuringObjections.tsx` · hooks `useBehaviorDetail`, `useOutcomeAssociations`
5. Intelligence home + emerging patterns  [Flow 9 · Intelligence]
   - **I1** Intelligence Home — Figma `27:298` (page `1:9`) · route `/app/intelligence` · file `src/components/lanes/lane-1/intelligence/I1IntelligenceHome.tsx` · hooks `useInsights`, `usePatterns`
   - **I3** Emerging Patterns — Figma `27:567` (page `1:9`) · route `/app/intelligence/patterns` · file `src/components/lanes/lane-1/intelligence/I3EmergingPatterns.tsx` · hooks `usePatterns`
6. Objections, Behavior × Outcome, Outcome graph  [Flow 9 · Intelligence]
   - **I4** Objections — Figma `28:378` (page `1:9`) · route `/app/intelligence/objections` · file `src/components/lanes/lane-1/intelligence/I4Objections.tsx` · hooks `useObjectionStats`
   - **I5** Behavior × Outcome matrix — Figma `28:641` (page `1:9`) · route `/app/intelligence/matrix` · file `src/components/lanes/lane-1/intelligence/I5BehaviorXOutcomeMatrix.tsx` · hooks `useOutcomeAssociations`
   - **I6** Behavioral Outcome Graph — Figma `28:857` (page `1:9`) · route `/app/intelligence/graph` · file `src/components/lanes/lane-1/intelligence/I6BehavioralOutcomeGraph.tsx` · hooks `useOutcomeAssociations`
7. Intelligence tabs  [Flow 9 · Intelligence]
   - **I7** Intelligence — Team behaviors — Figma `51:1420` (page `1:9`) · route `/app/intelligence/team-behaviors` · file `src/components/lanes/lane-1/intelligence/I7IntelligenceTeamBehaviors.tsx` · hooks `usePatterns`, `useBehaviors`
   - **I8** Intelligence — Methodology adherence — Figma `51:2887` (page `1:9`) · route `/app/intelligence/methodology` · file `src/components/lanes/lane-1/intelligence/I8IntelligenceMethodologyAdherence.tsx` · hooks `usePatterns`, `useMethodologies`
   - **I9** Intelligence — Outcome patterns — Figma `51:1819` (page `1:9`) · route `/app/intelligence/outcomes` · file `src/components/lanes/lane-1/intelligence/I9IntelligenceOutcomePatterns.tsx` · hooks `usePatterns`, `useOutcomeAssociations`
   - **I10** Intelligence — Rep patterns — Figma `51:2196` (page `1:9`) · route `/app/intelligence/reps` · file `src/components/lanes/lane-1/intelligence/I10IntelligenceRepPatterns.tsx` · hooks `usePatterns`
   - **I11** Intelligence — Prospect patterns — Figma `51:2556` (page `1:9`) · route `/app/intelligence/prospects` · file `src/components/lanes/lane-1/intelligence/I11IntelligenceProspectPatterns.tsx` · hooks `usePatterns`

DONE CHECKLIST for the section:
  - [ ] Matches Figma at **1440** (390 for mobile, the frame's own width for email/print)
  - [ ] **Tokens only** — `by-*` utilities, no raw hex / `rgb()` (`bun run tokens:check`)
  - [ ] **Empty, loading and error states** present (`DataBoundary` + `systemStates.*`; Y9 for FORBIDDEN_FOR_ROLE)
  - [ ] Links match the **page 19** prototype flows (13 flows, 0–12)
  - [ ] Every insight shows confidence + sample size; low confidence = no action button; no causal language; no peer data in a rep view; sparklines on a fixed y-range; OutcomeAssociation hidden below n=30
  - [ ] `bun run typecheck` → exactly **8** errors · `bun run lint:changed` clean · `bun run test` → only the **2** known failures · `bun run build` green
  - [ ] `bun run boundary` clean · `bun run tokens:check` clean
  - [ ] One screenshot per screen at the end → `design-qa/<code>.png`

When the section is done: commit, push, open ONE PR into integration titled
"Lane 1 — <section name>", with screenshots. Then write a short report and STOP.
```

---

## Lane 4 — Dravin · 04 Onboarding/Auth → 06 Rep → 09 Team

27 screens in 6 sections. Branch `lane-4-dravin`.

```text
You are building Lane 4 (Dravin) of the Bylda V1 frontend rebuild, repo Bylda/bylda.

BRANCH: lane-4-dravin, created from origin/integration. Every morning: `git fetch origin && git merge origin/integration`.

YOU OWN — edit ONLY these paths:
  - src/routes/welcome/**
  - src/routes/app/rep/**
  - src/routes/app/team/**
  - src/components/lanes/lane-4/** — EXCEPT src/components/lanes/lane-4/reports/** (Lane 6's)
Everything else is frozen or another lane's. Need a shared change (component, token, hook,
field, shell)? Add a row to LANE_REQUESTS.md and build a local copy in src/components/lanes/lane-4/.
Never touch anything in BACKEND_BOUNDARY.md. Never edit the router config or the nav.

READ ONLY THESE, don't explore elsewhere: CLAUDE.md, src/components/bylda/index.ts,
src/lib/data/README.md. Pull Figma frames by node ID only (fileKey 8q5872jwTTRK69cOrWDOmk),
with get_design_context. Never call get_metadata without a nodeId (it's broken on this file).
Never build from page 19 (PROTO copies) — use it only to check links.
DESIGN-REF: Build each screen from design-ref/<screen-code>/spec.md (+ frame.png if present). Do NOT call Figma tools unless that screen's design-ref folder is missing. For the Figma check before the PR, compare your screenshot to design-ref instead of calling Figma.

RULES: screens import data ONLY from @/lib/data and UI ONLY from @/components/bylda.
No fetch / supabase / invokeEdge in a screen. No hard-coded numbers. Tokens only (by-*).
Run and verify screens with VITE_BYLDA_MOCKS=true so every field renders; never hard-code values.
  (VITE_BYLDA_MOCKS=true bun run dev --host 127.0.0.1; switch role with ?as=rep.)

SECTIONS — build in this order (demo flows first). Do exactly ONE section per session:
1. Sign in + sign up + verify  [Flow 0 · Sign in · Flow 4 · Sign up & connect]
   - **A1** Auth — Sign in — Figma `26:40` (page `1:5`) · route `/welcome/sign-in` · file `src/components/lanes/lane-4/onboarding/A1AuthSignIn.tsx` · hooks `useAuthActions`
   - **A2** Auth — Sign up — Figma `26:91` (page `1:5`) · route `/welcome/sign-up` · file `src/components/lanes/lane-4/onboarding/A2AuthSignUp.tsx` · hooks `useAuthActions`
   - **A3** Auth — Verify email — Figma `26:139` (page `1:5`) · route `/welcome/verify` · file `src/components/lanes/lane-4/onboarding/A3AuthVerifyEmail.tsx` · hooks `useAuthActions`
   - **A4** Auth — Forgot password — Figma `26:184` (page `1:5`) · route `/welcome/forgot` · file `src/components/lanes/lane-4/onboarding/A4AuthForgotPassword.tsx` · hooks `useAuthActions`
2. Onboarding  [Flow 4 · Sign up & connect]
   - **A6** Onboarding — Workspace setup — Figma `26:784` (page `1:5`) · route `/welcome/workspace` · file `src/components/lanes/lane-4/onboarding/A6OnboardingWorkspaceSetup.tsx` · hooks `useOnboarding`, `useSaveOnboarding`
   - **A7** Onboarding — Teach Bylda how you sell — Figma `15:2` (page `1:5`) · route `/welcome/teach` · file `src/components/lanes/lane-4/onboarding/A7OnboardingTeachByldaHowYouSell.tsx` · hooks `useOnboarding`, `useSaveOnboarding`, `useMethodologies`
   - **A8** Onboarding — Connect calls (integration states) — Figma `15:302` (page `1:5`) · route `/welcome/connect` · file `src/components/lanes/lane-4/onboarding/A8OnboardingConnectCalls.tsx` · hooks `useOnboarding`, `useDataSources`, `useConnectSource`
   - **A9** Onboarding — Invite team — Figma `26:496` (page `1:5`) · route `/welcome/invite-team` · file `src/components/lanes/lane-4/onboarding/A9OnboardingInviteTeam.tsx` · hooks `useOnboarding`, `useInviteMembers`
   - **A10** Onboarding — Analysis initializing — Figma `16:21` (page `1:5`) · route `/welcome/analysis` · file `src/components/lanes/lane-4/onboarding/A10OnboardingAnalysisInitializing.tsx` · hooks `useOnboarding`
   - **A11** Onboarding — First insight — Figma `16:244` (page `1:5`) · route `/welcome/first-insight` · file `src/components/lanes/lane-4/onboarding/A11OnboardingFirstInsight.tsx` · hooks `useOnboarding`, `useInsights`
3. Invite acceptance  [Flow 5 · Rep invite]
   - **A5** Auth — Invite acceptance — Figma `26:224` (page `1:5`) · route `/welcome/invite` · file `src/components/lanes/lane-4/onboarding/A5AuthInviteAcceptance.tsx` · hooks `useAuthActions`, `useViewer`
4. Rep home, rep call review, my progress  [Flow 2 · Rep day]
   - **R1** Rep Home — Daily Brief — Figma `8:2` (page `1:7`) · route `/app/rep` · file `src/components/lanes/lane-4/rep/R1RepHomeDailyBrief.tsx` · hooks `useRepHome`, `useMyCoaching`
   - **R3** Call Review — Rep perspective — Figma `32:334` (page `1:7`) · route `/app/rep/calls/$callId` · file `src/components/lanes/lane-4/rep/R3CallReviewRepPerspective.tsx` · hooks `useCallReview`, `useViewer`
   - **R2** Rep — My progress — Figma `32:129` (page `1:7`) · route `/app/rep/progress` · file `src/components/lanes/lane-4/rep/R2RepMyProgress.tsx` · hooks `useMyProgress`
5. Rep Profile  [Flow 1 · Manager day]
   - **T8** Rep Profile — Jordan Reyes (manager view) — Figma `12:271` (page `1:10`) · route `/app/team/reps/$repId` · file `src/components/lanes/lane-4/team/T8RepProfileJordanReyes.tsx` · hooks `useRepSummary`
   - **T9** Rep Profile — Overview — Figma `45:1147` (page `1:10`) · route `/app/team/reps/$repId/overview` · file `src/components/lanes/lane-4/team/T9RepProfileOverview.tsx` · hooks `useRepSummary`, `useRepScores`
   - **T10** Rep Profile — Calls — Figma `45:1493` (page `1:10`) · route `/app/team/reps/$repId/calls` · file `src/components/lanes/lane-4/team/T10RepProfileCalls.tsx` · hooks `useCalls`
   - **T11** Rep Profile — Coaching — Figma `45:1841` (page `1:10`) · route `/app/team/reps/$repId/coaching` · file `src/components/lanes/lane-4/team/T11RepProfileCoaching.tsx` · hooks `useCoachingFoci`
   - **T12** Rep Profile — Trends — Figma `45:2142` (page `1:10`) · route `/app/team/reps/$repId/trends` · file `src/components/lanes/lane-4/team/T12RepProfileTrends.tsx` · hooks `useRepScores`
6. Team overview + detail + comparison  [Flow 10 · Team]
   - **T1** Team Overview — Figma `12:2` (page `1:10`) · route `/app/team` · file `src/components/lanes/lane-4/team/T1TeamOverview.tsx` · hooks `useTeams`, `useTeam`
   - **T2** Team Detail — Mid-Market AE — Figma `29:1423` (page `1:10`) · route `/app/team/$teamId` · file `src/components/lanes/lane-4/team/T2TeamDetailMidMarketAE.tsx` · hooks `useTeam`, `useTeamMembers`
   - **T3** Team Detail — Reps — Figma `52:2125` (page `1:10`) · route `/app/team/$teamId/reps` · file `src/components/lanes/lane-4/team/T3TeamDetailReps.tsx` · hooks `useTeamMembers`
   - **T4** Team Detail — Behaviors — Figma `52:2520` (page `1:10`) · route `/app/team/$teamId/behaviors` · file `src/components/lanes/lane-4/team/T4TeamDetailBehaviors.tsx` · hooks `useTeam`, `useBehaviors`
   - **T5** Team Detail — Coaching — Figma `52:2928` (page `1:10`) · route `/app/team/$teamId/coaching` · file `src/components/lanes/lane-4/team/T5TeamDetailCoaching.tsx` · hooks `useCoachingFoci`
   - **T6** Team Detail — Calls — Figma `52:3276` (page `1:10`) · route `/app/team/$teamId/calls` · file `src/components/lanes/lane-4/team/T6TeamDetailCalls.tsx` · hooks `useCalls`
   - **T7** Team Detail — Settings — Figma `52:3634` (page `1:10`) · route `/app/team/$teamId/settings` · file `src/components/lanes/lane-4/team/T7TeamDetailSettings.tsx` · hooks `useTeam`
   - **T13** Rep Comparison — Figma `29:1629` (page `1:10`) · route `/app/team/compare` · file `src/components/lanes/lane-4/team/T13RepComparison.tsx` · hooks `useRepComparison`
DONE CHECKLIST for the section:
  - [ ] Matches Figma at **1440** (390 for mobile, the frame's own width for email/print)
  - [ ] **Tokens only** — `by-*` utilities, no raw hex / `rgb()` (`bun run tokens:check`)
  - [ ] **Empty, loading and error states** present (`DataBoundary` + `systemStates.*`; Y9 for FORBIDDEN_FOR_ROLE)
  - [ ] Links match the **page 19** prototype flows (13 flows, 0–12)
  - [ ] Every insight shows confidence + sample size; low confidence = no action button; no causal language; no peer data in a rep view; sparklines on a fixed y-range; OutcomeAssociation hidden below n=30
  - [ ] `bun run typecheck` → exactly **8** errors · `bun run lint:changed` clean · `bun run test` → only the **2** known failures · `bun run build` green
  - [ ] `bun run boundary` clean · `bun run tokens:check` clean
  - [ ] One screenshot per screen at the end → `design-qa/<code>.png`

When the section is done: commit, push, open ONE PR into integration titled
"Lane 4 — <section name>", with screenshots. Then write a short report and STOP.
```

---

## Mayur — Lanes 5 → 2 → 6

Mayur owns three lanes and builds them in this order:

1. **Lane 5** — finish the open Integrations / Settings / Mobile work.
2. **Lane 2** — Calls → Coaching → Search & Ask.
3. **Lane 6** — Reports → Rooms & DMs (mocks only).

One branch per lane (`lane-5-mayur`, `lane-2-mayur`, `lane-6-mayur`), one section per session,
one PR per section. PR titles start **"L5 — "**, **"L2 — "** or **"L6 — "**. Paste the prompt for
the lane you're on.

### Lane 5 — 15 Integrations → 16 Settings + Methodology → 18 Mobile (17 States ✅ done) (first — finish open work)

30 screens in 7 sections (+ 17 States, done). Branch `lane-5-mayur`.

```text
You are building Lane 5 (Mayur) of the Bylda V1 frontend rebuild, repo Bylda/bylda.

BRANCH: lane-5-mayur, created from origin/integration. Every morning: `git fetch origin && git merge origin/integration`.

YOU OWN — edit ONLY these paths:
  - src/routes/app/connections/**
  - src/routes/app/workspace/**
  - src/routes/app/methodology/**
  - src/routes/app/states/**
  - src/routes/m/**
  - src/components/lanes/lane-5/**
Everything else is frozen or another lane's. Need a shared change (component, token, hook,
field, shell)? Add a row to LANE_REQUESTS.md and build a local copy in src/components/lanes/lane-5/.
Never touch anything in BACKEND_BOUNDARY.md. Never edit the router config or the nav.

READ ONLY THESE, don't explore elsewhere: CLAUDE.md, src/components/bylda/index.ts,
src/lib/data/README.md. Pull Figma frames by node ID only (fileKey 8q5872jwTTRK69cOrWDOmk),
with get_design_context. Never call get_metadata without a nodeId (it's broken on this file).
Never build from page 19 (PROTO copies) — use it only to check links.
DESIGN-REF: Build each screen from design-ref/<screen-code>/spec.md (+ frame.png if present). Do NOT call Figma tools unless that screen's design-ref folder is missing. For the Figma check before the PR, compare your screenshot to design-ref instead of calling Figma.

RULES: screens import data ONLY from @/lib/data and UI ONLY from @/components/bylda.
No fetch / supabase / invokeEdge in a screen. No hard-coded numbers. Tokens only (by-*).
Run and verify screens with VITE_BYLDA_MOCKS=true so every field renders; never hard-code values.
  (VITE_BYLDA_MOCKS=true bun run dev --host 127.0.0.1; switch role with ?as=rep.)

SECTIONS — build in this order (demo flows first). Do exactly ONE section per session:
✅ DONE — 17 Empty & System States (Y0 gallery `19:2`, Y1–Y13): built in Foundation
   (`@/components/bylda` → `SystemState`, gallery at /app/states). Nothing to build.
1. Integrations  [Flow 11 · Connections]
   - **X1** Integrations — Data sources — Figma `31:1464` (page `1:16`) · route `/app/connections` · file `src/components/lanes/lane-5/connections/X1IntegrationsDataSources.tsx` · hooks `useDataSources`, `useConnectSource`
   - **X3** Integration detail — HubSpot mapping — Figma `31:1915` (page `1:16`) · route `/app/connections/hubspot` · file `src/components/lanes/lane-5/connections/X3IntegrationDetailHubSpotMapping.tsx` · hooks `useIntegrationDetail`
   - **X2** Integrations — Delivery channels — Figma `31:1688` (page `1:16`) · route `/app/connections/channels` · file `src/components/lanes/lane-5/connections/X2IntegrationsDeliveryChannels.tsx` · hooks `useDeliveryChannels`
2. Settings — workspace, profile, users, teams, roles  [Flow 12 · Settings]
   - **E1** Settings — Workspace general — Figma `31:2201` (page `1:17`) · route `/app/workspace` · file `src/components/lanes/lane-5/settings/E1SettingsWorkspaceGeneral.tsx` · hooks `useWorkspaceSettings`
   - **E2** Settings — Profile — Figma `31:2394` (page `1:17`) · route `/app/workspace/profile` · file `src/components/lanes/lane-5/settings/E2SettingsProfile.tsx` · hooks `useProfile`
   - **E3** Settings — Users — Figma `31:2583` (page `1:17`) · route `/app/workspace/users` · file `src/components/lanes/lane-5/settings/E3SettingsUsers.tsx` · hooks `useMembers`, `useInviteMembers`
   - **E4** Settings — Teams — Figma `31:2828` (page `1:17`) · route `/app/workspace/teams` · file `src/components/lanes/lane-5/settings/E4SettingsTeams.tsx` · hooks `useTeams`, `useMembers`
   - **E5** Settings — Roles & permissions — Figma `31:3018` (page `1:17`) · route `/app/workspace/roles` · file `src/components/lanes/lane-5/settings/E5SettingsRolesPermissions.tsx` · hooks `useRoleDefinitions`
3. Settings — analysis, notifications, retention  [Flow 12 · Settings]
   - **E6** Settings — Analysis preferences — Figma `31:3275` (page `1:17`) · route `/app/workspace/analysis` · file `src/components/lanes/lane-5/settings/E6SettingsAnalysisPreferences.tsx` · hooks `useAnalysisPreferences`
   - **E7** Settings — Notifications — Figma `31:3474` (page `1:17`) · route `/app/workspace/notifications` · file `src/components/lanes/lane-5/settings/E7SettingsNotifications.tsx` · hooks `useNotificationPreferences`
   - **E8** Settings — Retention & privacy — Figma `31:3738` (page `1:17`) · route `/app/workspace/retention` · file `src/components/lanes/lane-5/settings/E8SettingsRetentionPrivacy.tsx` · hooks `useRetentionPolicy`
4. Methodology  [Flow 12 · Settings]
   - **E9** Methodology — Index — Figma `31:7762` (page `1:17`) · route `/app/methodology` · file `src/components/lanes/lane-5/settings/E9MethodologyIndex.tsx` · hooks `useMethodologies`
   - **E10** Methodology — Detail (stages) — Figma `31:7973` (page `1:17`) · route `/app/methodology/$methodologyId` · file `src/components/lanes/lane-5/settings/E10MethodologyDetail.tsx` · hooks `useMethodology`
   - **E11** Methodology — Behavior rules list — Figma `31:8450` (page `1:17`) · route `/app/methodology/$methodologyId/rules` · file `src/components/lanes/lane-5/settings/E11MethodologyBehaviorRulesList.tsx` · hooks `useMethodology`
   - **E12** Methodology — Behavior rule editor — Figma `31:8218` (page `1:17`) · route `/app/methodology/$methodologyId/rules/$ruleKey` · file `src/components/lanes/lane-5/settings/E12MethodologyBehaviorRuleEditor.tsx` · hooks `useMethodology`, `useBehaviors`
   - **E13** Methodology — Objection library — Figma `31:8720` (page `1:17`) · route `/app/methodology/objections` · file `src/components/lanes/lane-5/settings/E13MethodologyObjectionLibrary.tsx` · hooks `useObjectionLibrary`
   - **E14** Methodology — Success criteria — Figma `31:8913` (page `1:17`) · route `/app/methodology/success-criteria` · file `src/components/lanes/lane-5/settings/E14MethodologySuccessCriteria.tsx` · hooks `useSuccessCriteria`
5. Billing, usage, API keys, audit log  [Flow 12 · Settings]
   - **E15** Settings — Billing & plan — Figma `31:9113` (page `1:17`) · route `/app/workspace/billing` · file `src/components/lanes/lane-5/settings/E15SettingsBillingPlan.tsx` · hooks `usePlan`, `useInvoices`
   - **E16** Settings — Usage — Figma `31:9316` (page `1:17`) · route `/app/workspace/usage` · file `src/components/lanes/lane-5/settings/E16SettingsUsage.tsx` · hooks `useUsage`
   - **E17** Settings — API keys — Figma `31:9530` (page `1:17`) · route `/app/workspace/api-keys` · file `src/components/lanes/lane-5/settings/E17SettingsAPIKeys.tsx` · hooks `useApiKeys`
   - **E18** Settings — Audit log — Figma `31:9715` (page `1:17`) · route `/app/workspace/audit-log` · file `src/components/lanes/lane-5/settings/E18SettingsAuditLog.tsx` · hooks `useAuditLog`
6. Mobile — rep  [Flow 2 · Rep day (mobile)]
   - **B1** Mobile — Rep Daily Brief — Figma `20:2` (page `1:19`) · route `/m/brief` · file `src/components/lanes/lane-5/mobile/B1MobileRepDailyBrief.tsx` · hooks `useRepHome`
   - **B4** Mobile — Coaching acknowledge (Rep) — Figma `32:572` (page `1:19`) · route `/m/coaching/$focusId` · file `src/components/lanes/lane-5/mobile/B4MobileCoachingAcknowledge.tsx` · hooks `useMyCoaching`, `useAcknowledgeCoaching`, `usePushRegistration`
   - **B6** Mobile — Moment player (Rep) — Figma `32:646` (page `1:19`) · route `/m/moments/$momentId` · file `src/components/lanes/lane-5/mobile/B6MobileMomentPlayer.tsx` · hooks `useCallReview`
   - **B9** Mobile — Ask Bylda / BYLDA Coach — Figma `52:11547` (page `1:19`) · route `/m/ask` · file `src/components/lanes/lane-5/mobile/B9MobileAskByldaBYLDACoach.tsx` · hooks `useSearch`
7. Mobile — manager + messaging  [Flow 1 (mobile) · Flows 6–7]
   - **B2** Mobile — Manager Brief + alert — Figma `20:24` (page `1:19`) · route `/m/manager-brief` · file `src/components/lanes/lane-5/mobile/B2MobileManagerBriefAlert.tsx` · hooks `useHomeFeed`
   - **B3** Mobile — Quick call review + coach — Figma `20:67` (page `1:19`) · route `/m/calls/$callId` · file `src/components/lanes/lane-5/mobile/B3MobileQuickCallReviewCoach.tsx` · hooks `useCallReview`, `useAssignCoaching`
   - **B5** Mobile — Alerts (Manager) — Figma `32:605` (page `1:19`) · route `/m/alerts` · file `src/components/lanes/lane-5/mobile/B5MobileAlerts.tsx` · hooks `useNotifications`, `usePushRegistration`
   - **B7** Mobile — Room #objection-watch — Figma `52:11424` (page `1:19`) · route `/m/rooms/$roomId` · file `src/components/lanes/lane-5/mobile/B7MobileRoomObjectionWatch.tsx` · hooks `useRoomMessages`
   - **B8** Mobile — Direct message (Dana ↔ Jordan) — Figma `52:11495` (page `1:19`) · route `/m/dm/$threadId` · file `src/components/lanes/lane-5/mobile/B8MobileDirectMessage.tsx` · hooks `useDmMessages`

DONE CHECKLIST for the section:
  - [ ] Matches Figma at **1440** (390 for mobile, the frame's own width for email/print)
  - [ ] **Tokens only** — `by-*` utilities, no raw hex / `rgb()` (`bun run tokens:check`)
  - [ ] **Empty, loading and error states** present (`DataBoundary` + `systemStates.*`; Y9 for FORBIDDEN_FOR_ROLE)
  - [ ] Links match the **page 19** prototype flows (13 flows, 0–12)
  - [ ] Every insight shows confidence + sample size; low confidence = no action button; no causal language; no peer data in a rep view; sparklines on a fixed y-range; OutcomeAssociation hidden below n=30
  - [ ] `bun run typecheck` → exactly **8** errors · `bun run lint:changed` clean · `bun run test` → only the **2** known failures · `bun run build` green
  - [ ] `bun run boundary` clean · `bun run tokens:check` clean
  - [ ] One screenshot per screen at the end → `design-qa/<code>.png`

When the section is done: commit, push, open ONE PR into integration titled
"L5 — <section name>", with screenshots. Then write a short report and STOP.
```


### Lane 2 — 07 Calls → 11 Coaching → 13 Search & Ask (second)

24 screens in 7 sections. Branch `lane-2-mayur`.

```text
You are building Lane 2 (Mayur) of the Bylda V1 frontend rebuild, repo Bylda/bylda.

BRANCH: lane-2-mayur, created from origin/integration. Every morning: `git fetch origin && git merge origin/integration`.

YOU OWN — edit ONLY these paths:
  - src/routes/app/calls/**
  - src/routes/app/search/**
  - src/routes/app/coaching/**
  - src/components/lanes/lane-2/**
Everything else is frozen or another lane's. Need a shared change (component, token, hook,
field, shell)? Add a row to LANE_REQUESTS.md and build a local copy in src/components/lanes/lane-2/.
Never touch anything in BACKEND_BOUNDARY.md. Never edit the router config or the nav.

READ ONLY THESE, don't explore elsewhere: CLAUDE.md, src/components/bylda/index.ts,
src/lib/data/README.md. Pull Figma frames by node ID only (fileKey 8q5872jwTTRK69cOrWDOmk),
with get_design_context. Never call get_metadata without a nodeId (it's broken on this file).
Never build from page 19 (PROTO copies) — use it only to check links.
DESIGN-REF: Build each screen from design-ref/<screen-code>/spec.md (+ frame.png if present). Do NOT call Figma tools unless that screen's design-ref folder is missing. For the Figma check before the PR, compare your screenshot to design-ref instead of calling Figma.

RULES: screens import data ONLY from @/lib/data and UI ONLY from @/components/bylda.
No fetch / supabase / invokeEdge in a screen. No hard-coded numbers. Tokens only (by-*).
Run and verify screens with VITE_BYLDA_MOCKS=true so every field renders; never hard-code values.
  (VITE_BYLDA_MOCKS=true bun run dev --host 127.0.0.1; switch role with ?as=rep.)

SECTIONS — build in this order (demo flows first). Do exactly ONE section per session:
1. Call Review  [Flow 1 · Manager day]
   - **C4** Call Review — Overview — Figma `44:1375` (page `1:8`) · route `/app/calls/$callId` · file `src/components/lanes/lane-2/calls/C4CallReviewOverview.tsx` · hooks `useCallReview`
   - **C3** Call Review — Transcript & timeline — Figma `9:2` (page `1:8`) · route `/app/calls/$callId/transcript` · file `src/components/lanes/lane-2/calls/C3CallReviewTranscriptTimeline.tsx` · hooks `useCallReview`, `useReanalyzeCall`
   - **C5** Call Review — Analysis — Figma `44:1755` (page `1:8`) · route `/app/calls/$callId/analysis` · file `src/components/lanes/lane-2/calls/C5CallReviewAnalysis.tsx` · hooks `useCallReview`, `useBehavioralEvents`, `useReanalyzeCall`
   - **C6** Call Review — Coaching — Figma `44:2146` (page `1:8`) · route `/app/calls/$callId/coaching` · file `src/components/lanes/lane-2/calls/C6CallReviewCoaching.tsx` · hooks `useCallReview`, `useAssignCoaching`
2. Calls index + rep view  [Flow 1 entry · Flow 2 · Rep day]
   - **C1** Calls Index — saved views — Figma `17:1090` (page `1:8`) · route `/app/calls` · file `src/components/lanes/lane-2/calls/C1CallsIndexSavedViews.tsx` · hooks `useSavedViews`, `useCalls`
   - **C2** Calls Index — All calls + filters open — Figma `52:8665` (page `1:8`) · route `/app/calls/all` · file `src/components/lanes/lane-2/calls/C2CallsIndexAllCallsFiltersOpen.tsx` · hooks `useCalls`
   - **C9** Calls — Rep view (my calls) — Figma `28:1646` (page `1:8`) · route `/app/calls/mine` · file `src/components/lanes/lane-2/calls/C9CallsRepView.tsx` · hooks `useMyCalls`
3. Upload + comparison  [—]
   - **C7** Calls — Manual upload — Figma `28:1263` (page `1:8`) · route `/app/calls/upload` · file `src/components/lanes/lane-2/calls/C7CallsManualUpload.tsx` · hooks `useUploadCall`
   - **C8** Call comparison — Figma `28:1464` (page `1:8`) · route `/app/calls/compare` · file `src/components/lanes/lane-2/calls/C8CallComparison.tsx` · hooks `useCallComparison`
4. Assign coaching + result  [Flow 1 · Manager day · Flow 3 · Pattern]
   - **G2** Assign Coaching — modal — Figma `14:24` (page `1:12`) · route `/app/coaching/assign` · file `src/components/lanes/lane-2/coaching/G2AssignCoachingModal.tsx` · hooks `useAssignCoaching`, `useTeamMembers`, `useBehaviors`
   - **G12** Behavior Change Result — Alex Morgan — Figma `14:224` (page `1:12`) · route `/app/coaching/$focusId/result` · file `src/components/lanes/lane-2/coaching/G12BehaviorChangeResultAlexMorgan.tsx` · hooks `useCoachingFocus`
5. Coaching detail  [Flow 1 · Manager day]
   - **G6** Coaching Detail — Jordan · active — Figma `30:639` (page `1:12`) · route `/app/coaching/$focusId` · file `src/components/lanes/lane-2/coaching/G6CoachingDetailJordanActive.tsx` · hooks `useCoachingFocus`
   - **G7** Coaching Detail — Overview — Figma `46:1604` (page `1:12`) · route `/app/coaching/$focusId/overview` · file `src/components/lanes/lane-2/coaching/G7CoachingDetailOverview.tsx` · hooks `useCoachingFocus`
   - **G8** Coaching Detail — Evidence — Figma `46:1935` (page `1:12`) · route `/app/coaching/$focusId/evidence` · file `src/components/lanes/lane-2/coaching/G8CoachingDetailEvidence.tsx` · hooks `useCoachingFocus`
   - **G9** Coaching Detail — Progress — Figma `46:2244` (page `1:12`) · route `/app/coaching/$focusId/progress` · file `src/components/lanes/lane-2/coaching/G9CoachingDetailProgress.tsx` · hooks `useCoachingFocus`
   - **G10** Coaching Detail — Discussion — Figma `46:2549` (page `1:12`) · route `/app/coaching/$focusId/discussion` · file `src/components/lanes/lane-2/coaching/G10CoachingDetailDiscussion.tsx` · hooks `useCoachingFocus`, `useCoachingComments`
6. Coaching index + rep view  [Flow 2 · Rep day]
   - **G3** Coaching — Index (Active) — Figma `30:246` (page `1:12`) · route `/app/coaching` · file `src/components/lanes/lane-2/coaching/G3CoachingIndex.tsx` · hooks `useCoachingFoci`
   - **G4** Coaching — Needs follow-up — Figma `52:6380` (page `1:12`) · route `/app/coaching/follow-up` · file `src/components/lanes/lane-2/coaching/G4CoachingNeedsFollowUp.tsx` · hooks `useCoachingFoci`
   - **G5** Coaching — Completed — Figma `30:430` (page `1:12`) · route `/app/coaching/completed` · file `src/components/lanes/lane-2/coaching/G5CoachingCompleted.tsx` · hooks `useCoachingFoci`
   - **G11** Coaching — Rep view (Jordan) — Figma `30:839` (page `1:12`) · route `/app/coaching/mine` · file `src/components/lanes/lane-2/coaching/G11CoachingRepView.tsx` · hooks `useMyCoaching`, `useAcknowledgeCoaching`
   - **G1** Coaching lifecycle — Figma `14:2` (page `1:12`) · component, no route · file `src/components/lanes/lane-2/coaching/G1CoachingLifecycle.tsx` · hooks — (static)
7. Search & Ask  [Flow 8 · Ask & find]
   - **S1** Search — Command palette ⌘K — Figma `31:760` (page `1:14`) · mounted by the shell · file `src/components/lanes/lane-2/search/S1CommandPalette.tsx` · hooks `usePaletteItems`
   - **S2** Search — Natural-language results — Figma `31:909` (page `1:14`) · route `/app/search` · file `src/components/lanes/lane-2/search/S2SearchNaturalLanguageResults.tsx` · hooks `useSearch`
   - **S3** Ask Bylda — side panel (from rail ✦) — Figma `50:26784` (page `1:14`) · mounted by the shell · file `src/components/lanes/lane-2/search/S3AskByldaPanel.tsx` · hooks `useSearch`

DONE CHECKLIST for the section:
  - [ ] Matches Figma at **1440** (390 for mobile, the frame's own width for email/print)
  - [ ] **Tokens only** — `by-*` utilities, no raw hex / `rgb()` (`bun run tokens:check`)
  - [ ] **Empty, loading and error states** present (`DataBoundary` + `systemStates.*`; Y9 for FORBIDDEN_FOR_ROLE)
  - [ ] Links match the **page 19** prototype flows (13 flows, 0–12)
  - [ ] Every insight shows confidence + sample size; low confidence = no action button; no causal language; no peer data in a rep view; sparklines on a fixed y-range; OutcomeAssociation hidden below n=30
  - [ ] `bun run typecheck` → exactly **8** errors · `bun run lint:changed` clean · `bun run test` → only the **2** known failures · `bun run build` green
  - [ ] `bun run boundary` clean · `bun run tokens:check` clean
  - [ ] One screenshot per screen at the end → `design-qa/<code>.png`

When the section is done: commit, push, open ONE PR into integration titled
"L2 — <section name>", with screenshots. Then write a short report and STOP.
```


### Lane 6 — 10 Reports → 12 Rooms & Messages (MOCKS ONLY) (third)

24 screens in 7 sections. Branch `lane-6-mayur`.

```text
You are building Lane 6 (Mayur) of the Bylda V1 frontend rebuild, repo Bylda/bylda.
Lane 6 = 10 Reports first, then 12 Rooms & Messages (mocks only).

BRANCH: lane-6-mayur, created from origin/integration. Every morning: `git fetch origin && git merge origin/integration`.

YOU OWN — edit ONLY these paths:
  - src/routes/app/rooms/**
  - src/routes/app/dm/**
  - src/routes/app/reports/**
  - src/routes/doc/**
  - src/components/lanes/lane-6/**
  - src/components/lanes/lane-4/reports/** (the Reports placeholders live here; keep the path)
Everything else is frozen or another lane's. Need a shared change (component, token, hook,
field, shell)? Add a row to LANE_REQUESTS.md and build a local copy in src/components/lanes/lane-6/.
Never touch anything in BACKEND_BOUNDARY.md. Never edit the router config or the nav.

READ ONLY THESE, don't explore elsewhere: CLAUDE.md, src/components/bylda/index.ts,
src/lib/data/README.md. Pull Figma frames by node ID only (fileKey 8q5872jwTTRK69cOrWDOmk),
with get_design_context. Never call get_metadata without a nodeId (it's broken on this file).
Never build from page 19 (PROTO copies) — use it only to check links.
DESIGN-REF: Build each screen from design-ref/<screen-code>/spec.md (+ frame.png if present). Do NOT call Figma tools unless that screen's design-ref folder is missing. For the Figma check before the PR, compare your screenshot to design-ref instead of calling Figma.

RULES: screens import data ONLY from @/lib/data and UI ONLY from @/components/bylda.
No fetch / supabase / invokeEdge in a screen. No hard-coded numbers. Tokens only (by-*).
Run and verify screens with VITE_BYLDA_MOCKS=true so every field renders; never hard-code values.
  (VITE_BYLDA_MOCKS=true bun run dev --host 127.0.0.1; switch role with ?as=rep.)

SECTIONS — build in this order (demo flows first). Do exactly ONE section per session:
1. Reports — index, daily, weekly  [Flow 1 (H5 Reports tab)]
   - **P1** Reports — Index — Figma `29:159` (page `1:11`) · route `/app/reports` · file `src/components/lanes/lane-4/reports/P1ReportsIndex.tsx` · hooks `useReports`
   - **P2** Daily Manager Brief — in-app document — Figma `13:2` (page `1:11`) · route `/app/reports/daily` · file `src/components/lanes/lane-4/reports/P2DailyManagerBriefInAppDocument.tsx` · hooks `useBrief`
   - **P5** Weekly Manager Report — living document — Figma `29:352` (page `1:11`) · route `/app/reports/weekly` · file `src/components/lanes/lane-4/reports/P5WeeklyManagerReportLivingDocument.tsx` · hooks `useBrief`
2. Reports — rep, team, behavior, outline  [—]
   - **P7** Weekly Rep Report — Jordan — Figma `29:625` (page `1:11`) · route `/app/reports/rep/$repId` · file `src/components/lanes/lane-4/reports/P7WeeklyRepReportJordan.tsx` · hooks `useBrief`
   - **P8** Team Report — September — Figma `29:773` (page `1:11`) · route `/app/reports/team/$teamId` · file `src/components/lanes/lane-4/reports/P8TeamReportSeptember.tsx` · hooks `useBrief`
   - **P9** Behavior Report — Objection handling — Figma `29:993` (page `1:11`) · route `/app/reports/behavior/$behaviorKey` · file `src/components/lanes/lane-4/reports/P9BehaviorReportObjectionHandling.tsx` · hooks `useBrief`
   - **P6** Weekly Sales Behavior Report — outline — Figma `52:10624` (page `1:11`) · route `/app/reports/outline` · file `src/components/lanes/lane-4/reports/P6WeeklySalesBehaviorReportOutline.tsx` · hooks `useBrief`
3. Reports — email, push, print (outside the shell)  [—]
   - **P3** Daily Manager Brief — email (640) — Figma `13:232` (page `1:11`) · route `/doc/manager-brief-email` · file `src/components/lanes/lane-4/reports/P3DailyManagerBriefEmail.tsx` · hooks `useBrief`
   - **P4** Daily Rep Brief — email / push (60 sec) — Figma `13:316` (page `1:11`) · route `/doc/rep-brief-push` · file `src/components/lanes/lane-4/reports/P4DailyRepBriefEmailPush.tsx` · hooks `useBrief`
   - **P10** Weekly Report — PDF / print (A4) — Figma `29:1154` (page `1:11`) · route `/doc/weekly-print` · file `src/components/lanes/lane-4/reports/P10WeeklyReportPDFPrint.tsx` · hooks `useBrief`
4. Rooms directory + room feed  [Flow 6 · Rooms]
   - **O1** Rooms — Directory — Figma `31:241` (page `1:13`) · route `/app/rooms` · file `src/components/lanes/lane-6/rooms/O1RoomsDirectory.tsx` · hooks `useRooms`
   - **O2** Room — #objection-watch — Figma `18:2` (page `1:13`) · route `/app/rooms/$roomId` · file `src/components/lanes/lane-6/rooms/O2RoomObjectionWatch.tsx` · hooks `useRoom`, `useRoomMessages`
5. Room tabs  [Flow 6 · Rooms]
   - **O3** Room — #objection-watch · Insights — Figma `48:1283` (page `1:13`) · route `/app/rooms/$roomId/insights` · file `src/components/lanes/lane-6/rooms/O3RoomObjectionWatchInsights.tsx` · hooks `useRoom`, `useRoomMessages`
   - **O4** Room — #objection-watch · Calls — Figma `48:1732` (page `1:13`) · route `/app/rooms/$roomId/calls` · file `src/components/lanes/lane-6/rooms/O4RoomObjectionWatchCalls.tsx` · hooks `useRoom`, `useRoomMessages`
   - **O5** Room — #objection-watch · Reports — Figma `48:2213` (page `1:13`) · route `/app/rooms/$roomId/reports` · file `src/components/lanes/lane-6/rooms/O5RoomObjectionWatchReports.tsx` · hooks `useRoom`, `useRoomMessages`
   - **O6** Room — #objection-watch · Files — Figma `48:2662` (page `1:13`) · route `/app/rooms/$roomId/files` · file `src/components/lanes/lane-6/rooms/O6RoomObjectionWatchFiles.tsx` · hooks `useRoom`
   - **O7** Room — #objection-watch · About — Figma `48:3103` (page `1:13`) · route `/app/rooms/$roomId/about` · file `src/components/lanes/lane-6/rooms/O7RoomObjectionWatchAbout.tsx` · hooks `useRoom`
6. Room kinds  [Flow 6 · Rooms]
   - **O8** Room — #daily-brief — Figma `31:403` (page `1:13`) · component, no route · file `src/components/lanes/lane-6/rooms/O8RoomDailyBrief.tsx` · hooks `useRoom`, `useRoomMessages`
   - **O9** Room — #coaching — Figma `31:586` (page `1:13`) · component, no route · file `src/components/lanes/lane-6/rooms/O9RoomCoaching.tsx` · hooks `useRoom`, `useRoomMessages`
   - **O10** Room — #mid-market-team (team room) — Figma `48:25761` (page `1:13`) · component, no route · file `src/components/lanes/lane-6/rooms/O10RoomMidMarketTeam.tsx` · hooks `useRoom`, `useRoomMessages`
   - **O11** Room — #acme-logistics (deal room) — Figma `50:3655` (page `1:13`) · component, no route · file `src/components/lanes/lane-6/rooms/O11RoomAcmeLogistics.tsx` · hooks `useRoom`, `useRoomMessages`
7. New room + DMs + BYLDA Coach  [Flow 7 · Messages · Flow 2 · Rep day]
   - **O14** Rooms — New room modal — Figma `50:4184` (page `1:13`) · route `/app/rooms/new` · file `src/components/lanes/lane-6/rooms/O14RoomsNewRoomModal.tsx` · hooks `useRooms`
   - **O12** Direct message — Dana ↔ Jordan — Figma `49:3123` (page `1:13`) · route `/app/dm/$threadId` · file `src/components/lanes/lane-6/rooms/O12DirectMessageDanaJordan.tsx` · hooks `useDmThreads`, `useDmMessages`
   - **O13** Direct message — BYLDA Coach (rep) — Figma `49:3627` (page `1:13`) · route `/app/dm/coach` · file `src/components/lanes/lane-6/rooms/O13DirectMessageBYLDACoach.tsx` · hooks `useDmMessages`

DONE CHECKLIST for the section:
  - [ ] Matches Figma at **1440** (390 for mobile, the frame's own width for email/print)
  - [ ] **Tokens only** — `by-*` utilities, no raw hex / `rgb()` (`bun run tokens:check`)
  - [ ] **Empty, loading and error states** present (`DataBoundary` + `systemStates.*`; Y9 for FORBIDDEN_FOR_ROLE)
  - [ ] Links match the **page 19** prototype flows (13 flows, 0–12)
  - [ ] Every insight shows confidence + sample size; low confidence = no action button; no causal language; no peer data in a rep view; sparklines on a fixed y-range; OutcomeAssociation hidden below n=30
  - [ ] `bun run typecheck` → exactly **8** errors · `bun run lint:changed` clean · `bun run test` → only the **2** known failures · `bun run build` green
  - [ ] `bun run boundary` clean · `bun run tokens:check` clean
  - [ ] One screenshot per screen at the end → `design-qa/<code>.png`

When the section is done: commit, push, open ONE PR into integration titled
"L6 — <section name>", with screenshots. Then write a short report and STOP.
```

---

## Backend track — Tirth

Builds the backend FROM the frontend contracts. Lanes never wait on this track.

```text
You are the backend track (Tirth) for the Bylda V1 rebuild, repo Bylda/bylda.

READ FIRST: CLAUDE.md §2 and §12 (D, E, G), BACKEND_BACKLOG.md, BACKEND_BOUNDARY.md,
src/lib/data/README.md, and the contract you're building in src/lib/data/contracts/.

BRANCHES: one per item, `backend/<object>` off origin/integration (backend/auth-fixes,
backend/types-regen, backend/behavioral-event, …). Every PR MUST carry the label `backend` —
the CI guard (scripts/backend-pr-gate.sh) rejects boundary paths on any other branch/label.

ORDER (BACKEND_BACKLOG.md → Order):
  1. backend/auth-fixes — sequence-runner is verify_jwt=false but called from the signed-in
     app; operator, advance-mission, run-workflow, automation-dispatch, generate-course and
     log-activation-event have no [functions.*] block in supabase/config.toml. Also review
     cs-health, forecast-rollup, marketing-attribution, weekly-review (verify_jwt=false +
     org_id in the body). Fix, document the decision in BACKEND_BACKLOG.md.
  2. backend/types-regen — regenerate src/integrations/supabase/types.ts, then delete
     src/lib/data/db-types.ts and repoint its imports (Ansh reviews the frontend part).
  3–8. C-01 BehavioralEvent → C-02/C-03 Behavior + scores → C-04/C-07 Insight + feed →
     C-05/C-11 CoachingFocus → C-06 calls V1 fields → C-14 OutcomeAssociation.
     (C-06 before C-14 — it completes the Flow 1 demo on real data.)
  9+. The remaining contracts in BACKEND_BACKLOG.md order.

FOR EACH CONTRACT:
  - Build exactly the table/columns, RLS and endpoint in its BACKEND_BACKLOG.md section.
    If the contract is wrong, change src/lib/data/contracts/* FIRST (Ansh approves), run
    `bun run contracts:doc`, then build.
  - Replace the NOT_BUILT fetcher in src/lib/data/<domain>/fetchers.ts with the real read.
  - Prove it: BYLDA_CONTRACT_LIVE=1 BYLDA_CONTRACT_EMAIL=… BYLDA_CONTRACT_PASSWORD=…
    BYLDA_CONTRACT_ORG_ID=… bun run test src/lib/data/__tests__/contracts/C-NN.contract.test.ts
  - Swap protocol (§12 E): set the contract status to Done in src/lib/data/contracts/*, run
    `bun run contracts:doc`, and flip src/lib/data/<domain>/source.ts to 'real' or 'hybrid'
    — all in the SAME PR. Screens must not change; if one would, fix map.ts instead.

DONE CHECKLIST per PR:
  - [ ] branch backend/<object>, label `backend`
  - [ ] migration + RLS as specified; reps can read only their own rows where the contract says so
  - [ ] the contract's live test passes; the offline suite (bun run test) → only the 2 known failures
  - [ ] bun run typecheck → 8 · bun run build green
  - [ ] BACKEND_BACKLOG.md regenerated, status Done, source.ts flipped

One contract per session, one PR per contract. Short report, then STOP.
```
