# AUDIT.md — what exists today

Generated on branch `integration`. Two parts: **(a)** every frontend route and what
becomes of it, **(b)** every backend call the frontend makes today.

---

## Headline

This repo's frontend is **Launchpad Nova** — 87 routes covering a founder-journey
product (Launchpad missions, Academy, Builder, Automations, SOP library) plus a
full CRM (contacts, leads, pipelines, campaigns, forms).

The Bylda V1 Figma is **Bylda — Behavioral Intelligence**: a different product.
Pulled live: **21 pages, 128 product views** across areas 04–18, confirmed by its
own Dev Handoff page. It contains **no** Launchpad screens and **no** CRM
pipeline/contacts/deals screens at all.

Counted against the V1 screen index:

| | Routes |
| --- | --- |
| Map to a V1 Figma area (→ / MERGE / SPLIT) | **23** (of 128 V1 views) |
| Redirect-only stubs (≤10 lines, `throw redirect`) | **21** |
| DELETE with content — V1 decision 3 (no LMS) ×5, no V1 concept ×3 | **8** |
| Marketing / public pages + `__root`, outside the app shell | **6** |
| **Launchpad Nova + CRM surface with no V1 counterpart** | **29** |
| **Total** (every file in `src/routes/`, counted once) | **87** |

Put plainly: the repo has 87 routes that cover ~23 of the 128 views V1 needs, and
29 substantive routes covering views V1 does not have. This is not a re-skin; it
is a new product's frontend built beside an existing one.

Of the 21 redirect stubs, 12 are marked DELETE in the sections below, 8 point
into the OWNER DECISION surface (listed there), and `/app/bylda/workflows`
(→ `/app/automations`) is listed under OWNER DECISION too — delete them
together with whatever they redirect to. `/app/` (`app.index.tsx`, 6 lines) is
*not* a stub: it renders `OperatorCanvas`.

Those 29 routes — **20,053 lines** (CRM 13 routes / 9,534; Launchpad 16 / 10,519)
including `app.bylda.crm.tsx` (3,308), `app.launchpad.$tool.tsx` (2,397) and
`app.builder.tsx` (1,818) — are **not mine to delete**. They are marked `OWNER DECISION` below and are the single
biggest open question in this setup. See "What blocks Step 2" in the report.

---

## (a) Frontend routes → V1 Figma screen

Legend: **→ NN** = becomes that Figma area · **DELETE** = remove ·
**MERGE** = folds into another screen · **OWNER DECISION** = no V1 counterpart,
someone must rule on it · **KEEP** = out of rebuild scope.

### Auth & onboarding → 04

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/auth/sign-in` | `auth.sign-in.tsx` | 143 | → **04** Sign in |
| `/auth/sign-up` | `auth.sign-up.tsx` | 86 | → **04** Sign up |
| `/auth/forgot-password` | `auth.forgot-password.tsx` | 50 | → **04** Forgot password |
| `/auth/reset-password` | `auth.reset-password.tsx` | 68 | → **04** Verify / reset |
| `/auth/invite` | `auth.invite.tsx` | 184 | → **04** Invite acceptance |
| `/onboarding` | `onboarding.tsx` | 684 | → **04** Workspace setup · Teach Bylda · Connect source · Invite team · Analysis initializing · First insight (6 screens) |
| `/signup` | `signup.tsx` | 343 | **MERGE** → `/auth/sign-up`. Duplicate signup path. |
| `/demo` | `demo.tsx` | 90 | **DELETE** — demo shell, no V1 counterpart |

### Home → 05 / 06

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/bylda-home` | `app.bylda-home.tsx` | 682 | → **05** Manager Home intelligence feed. Rewrite: today it is a KPI grid + health hero, which V1 architecture decision 2 explicitly rejects. |
| `/app/` | `app.index.tsx` | 6 | → **05** role-aware redirect (Manager/Rep/Admin home) |
| `/app` | `app.tsx` | 94 | → shell layout. Becomes rail 64 / sidebar 248 / top bar 56 / main / context panel 344. |
| `/app/monitoring` | `app.monitoring.tsx` | 547 | → **05** Admin Home — workspace health |
| `/app/dashboard` | `app.dashboard.tsx` | 10 | **DELETE** (redirect stub) |
| `/app/command-center` | `app.command-center.tsx` | 9 | **DELETE** (redirect stub) |
| `/app/launch-control` | `app.launch-control.tsx` | 9 | **DELETE** (redirect stub) |
| `/app/galaxy` | `app.galaxy.tsx` | 9 | **DELETE** (redirect stub) |
| `/app/bylda-full` | `app.bylda-full.tsx` | 9 | **DELETE** (redirect stub) |
| `/app/bylda-os` | `app.bylda-os.tsx` | 9 | **DELETE** (redirect stub) |
| `/app/bylda-os/$slug` | `app.bylda-os.$slug.tsx` | 9 | **DELETE** (redirect stub) |
| `/app/bylda/` | `app.bylda.index.tsx` | 9 | **DELETE** (redirect stub) |
| `/app/mission-control` | `app.mission-control.tsx` | 714 | **DELETE** — Launchpad mission concept, absent from V1 |

There is **no Rep Home today.** Area **06** is built from nothing.

### Calls → 07

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/crm/calls` | `app.crm.calls.tsx` | 508 | → **07** Calls Index + Call Review (`C1`–`C9`, 9 views). Closest thing in the repo to a V1 screen. Note its `const db = supabase as any` workaround for stale types. |
| `/app/crm/conversations` | `app.crm.conversations.tsx` | 455 | **MERGE** → **12** Rooms & Messages (thread UI) and **07** (call context) |

### Intelligence → 08

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/context-memory` | `app.context-memory.tsx` | 903 | **MERGE** → **16** Methodology (what Bylda knows about how you sell) |
| `/app/memory` | `app.memory.tsx` | 941 | **MERGE** → **16** Methodology. Overlaps `/app/context-memory`; pick one. |
| `/app/ai-dashboard` | `app.ai-dashboard.tsx` | 9 | **DELETE** (redirect stub) |

Behavior Detail, Intelligence Home, Emerging Patterns, Objection view and the
Behavior × Outcome matrix are **all new.** Nothing in the repo does behavioral analysis.

### Team → 09

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/admin` | `app.admin.tsx` | 1,594 | **SPLIT** → **05** Admin Home (workspace health) + **16** Settings (users, teams, roles) |
| `/app/scale/team` | `app.scale.team.tsx` | 9 | **DELETE** (redirect stub) |

Team Overview, Team Detail, Rep Profile and Rep Comparison are **all new.**

### Reports → 10

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/bylda/reports` | `app.bylda.reports.tsx` | 339 | → **10** Reports shell. Content is entirely new (briefs are behavioral, not KPI). |
| `/app/scale/reports` | `app.scale.reports.tsx` | 9 | **DELETE** (redirect stub) |

Daily Manager Brief, Daily Rep Brief, email brief, Weekly reports, PDF export: **all new.**

### Coaching → 11

Nothing exists. **All new.**

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/mentor` | `app.mentor.tsx` | 656 | **DELETE** — Launchpad AI mentor chat, a different concept from V1 coaching |
| `/app/academy` | `app.academy.tsx` | 312 | **DELETE** — V1 architecture decision 3: *"No LMS, no courses, no quizzes"* |
| `/app/academy/$module` | `app.academy.$module.tsx` | 693 | **DELETE** — same |
| `/app/tutorials` | `app.tutorials.tsx` | 893 | **DELETE** — same |
| `/app/launchpad/course` | `app.launchpad.course.tsx` | 410 | **DELETE** — same |
| `/app/launchpad/mentors` | `app.launchpad.mentors.tsx` | 594 | **DELETE** — same |

### Rooms & Messages → 12 · Search → 13 · Notifications → 14

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/activity` | `app.activity.tsx` | 9 | **DELETE** (redirect stub); **14** Notification center is new |

Rooms, DMs, threads, BYLDA Coach DM, ⌘K palette, NL search, notification
drawer + center: **all new.** No command palette exists (`cmdk` is a dependency,
unused for this).

### Integrations → 15

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/integrations` | `app.integrations.tsx` | 1,068 | → **15** Data sources. Real OAuth wiring exists — reuse the contract, rebuild the UI. |
| `/app/crm/setup` | `app.crm.setup.tsx` | 648 | **MERGE** → **15** (source mapping) + **16** (methodology) |

Delivery channels (Slack/Teams/email) as a **separate** settings area: new, per V1
architecture decision 5.

### Settings & Methodology → 16

| Route | File | Lines | Disposition |
| --- | --- | --- | --- |
| `/app/settings` | `app.settings.tsx` | 1,063 | → **16** Settings: General · Profile · Users · Teams · Roles |
| `/app/billing` | `app.billing.tsx` | 842 | → **16** Billing & plan |
| `/app/billing/return` | `app.billing.return.tsx` | 54 | → **16** Billing return |
| `/app/playbook` | `app.playbook.tsx` | 220 | → **16** Methodology from template |

Analysis preferences, Retention & privacy, stage/rule editor, objection library,
success criteria, API keys, audit log: **all new.**

### 17 Empty & System States · 18 Mobile & Responsive

No dedicated state or mobile screens exist. **All new.** 12 empty/loading/error
states + skeleton (17); mobile brief, alerts, quick call review, room, DM (18).

### Marketing / public — KEEP, outside rebuild scope

| Route | File | Lines |
| --- | --- | --- |
| `/` | `index.tsx` | 370 |
| `/about` | `about.tsx` | 152 |
| `/pricing` | `pricing.tsx` | 197 |
| `/book/$slug` | `book.$slug.tsx` | 246 |
| `/f/$formId` | `f.$formId.tsx` | 175 |
| `__root` | `__root.tsx` | 154 — root layout, not a page; kept here so every file is counted once |

Public booking and form-fill pages serve live links. Do not touch them.

### OWNER DECISION — 29 routes (+9 redirect stubs into them), no V1 counterpart

Neither in the V1 screen index nor implied by it. **Do not delete without a ruling.**

**CRM surface (13 routes, 9,534 lines)** — `/app/bylda/crm` (3,308),
`/app/contacts` (1,761), `/app/crm/campaigns` (567), `/app/crm/companies` (513),
`/app/crm/calendar` (530), `/app/crm/forms` (498), `/app/crm/tasks` (398),
`/app/crm/waitlist` (302), `/app/crm/duplicates` (265), `/app/crm/accounts` (226),
`/app/crm/automations` (641), `/app/scale` (282), `/app/scale/campaigns` (243),
plus redirect stubs `/app/leads`, `/app/bylda/leads`, `/app/bylda/clients`,
`/app/scale/pipeline`, `/app/scale/automations`

**Launchpad Nova surface (16 routes, 10,519 lines)** — `/app/launchpad/$tool` (2,397),
`/app/builder` (1,818), `/app/automations` (1,162), `/app/templates` (957),
`/app/research` (770), `/app/workflow-templates` (507), `/app/roadmap` (443),
`/app/sop-library` (434), `/app/reputation` (319), `/app/outcomes/$category` (312),
`/app/launchpad/bylda` (289), `/app/launchpad/first-customers` (274),
`/app/launchpad/outputs/$id` (280), `/app/assets` (187),
`/app/launchpad/history` (204), `/app/launchpad/missions` (166),
plus redirect stubs `/app/launchpad/` (→ `/app/playbook`), `/app/launchpad-path`
and `/app/mission-briefing` (→ `/app/mission-control`), `/app/bylda/workflows`
(→ `/app/automations`)

Three options, all the owner's call: **(1)** leave them routed and untouched while
V1 is built alongside; **(2)** move them behind a feature flag; **(3)** delete them
as a separate PR before lane work starts. Option 1 is the default assumption
baked into the lane map — nothing in lanes 1–6 touches these files.

---

## (b) Backend calls the frontend makes today

### Transport

There are **no server functions.** Both greps return empty:

```
grep -rl "use server" src/                                          → (nothing)
grep -rl "createServerFn\|createServerRoute\|createAPIFileRoute" src/ → (nothing)
```

Three wire protocols, all from the browser:

1. **`supabase.from(...)` / `.rpc(...)`** — PostgREST over HTTP, anon key +
   user JWT, RLS-scoped. Auth is the Supabase session; most tables gate on
   `is_org_member(organization_id, auth.uid())`.
2. **`invokeEdge(fn, body)`** (`src/lib/invokeEdge.ts`) — `POST
   {VITE_SUPABASE_URL}/functions/v1/{fn}`. Adds `apikey`, `Authorization: Bearer
   <access_token>`, 60s timeout, 1 retry on network/5xx, never on 4xx. Throws
   `EdgeError {message, status, code}`. `invokeEdgeStream` for SSE (no retry).
3. **`supabase.functions.invoke(fn, {body})`** — the raw supabase-js path, used by
   18 call sites in 9 files that predate `invokeEdge` (two of them take the
   function name as a variable: `startIntegrationOAuth` in `lib/queries.ts` and
   `invokeFunction` in `app.context-memory.tsx`). Same endpoint, no timeout/retry.
   New code should use `invokeEdge`.
4. **Raw `fetch`** — `src/lib/analytics.ts` POSTs to
   `/functions/v1/log-activation-event` directly.

### Edge functions called from the frontend

All **POST** to `/functions/v1/<name>`. "Auth" is `verify_jwt` from
`supabase/config.toml` — `true` means the gateway rejects an unauthenticated call
before the function runs. A function with **no** `[functions.<name>]` block falls
back to the Supabase default (`verify_jwt = true`) — flagged `default` below so
nobody assumes it was a deliberate choice.

**44 of 61 functions are called from `src/`**: 32 `verify_jwt=true`, 6 default
(not in `config.toml`), 6 `verify_jwt=false`. Derived by matching every function
directory name against string literals within 4 lines of `invokeEdge` /
`invokeEdgeStream` / `functions.invoke` / `invokeFunction` / `functions/v1`,
then hand-checking the misses.

| Function | Called from | Request shape | Response shape | Auth |
| --- | --- | --- | --- | --- |
| `analyze-call` | `lib/crm.ts`, `app.context-memory.tsx` | `{call_id, analysis_job_id?, analysis_attempt_token?}` | `{ok, objections, competitors, next_steps, talk_ratio, sentiment_score, …}`; writes `call_insights`, backfills transcript sentiment, inserts `mentor_insights` on risk | JWT |
| `get-call-ingest-url` | `lib/queries.ts` | `{…}` | ingest URL | JWT |
| `get-inbound-url` | `app.context-memory.tsx`, `app.crm.conversations.tsx` | `{org_id}` | `{configured: boolean, url?/call_url?: string}` | JWT |
| `write-call-to-gohighlevel` | `lib/queries.ts` | `{…}` | writeback result | JWT |
| `sync-crm` | `lib/queries.ts` | `{…}` | sync result | JWT |
| `sync-salesforce` | `lib/queries.ts` | `{…}` | sync result | JWT |
| `context-package` | `app.context-memory.tsx` | `{…}` | `{context: ContextPackage}` | JWT |
| `generate-crm-intelligence-profile` | `CrmSetupGate.tsx`, `app.crm.setup.tsx` | `{…}` | profile | JWT |
| `crm-insights` | `lib/crm.ts` | `{…}` | `{ok, insights_written: number}` | JWT |
| `crm-action` | `lib/crm.ts`, `app.launchpad.outputs.$id.tsx` | `{…}` | `{ok, result: {id}}` / `{ok, result: {id, created}}` | JWT |
| `crm-dedupe` | `lib/crm.ts` | `{…}` | `{ok, scanned: number}` | JWT |
| `crm-merge` | `lib/crm.ts` | `{…}` | `{ok}` | JWT |
| `next-best-action` | `lib/crm.ts`, `CrmNextBestAction.tsx` | `{…}` | `{ok, actions: NbaAction[]}` | JWT |
| `conversation-ai` | `app.crm.conversations.tsx` | `{…}` | `{draft: string}` | JWT |
| `send-campaign` | `app.crm.campaigns.tsx` | `{…}` | `{sent, recipients}` | JWT |
| `workflow-engine` | `app.crm.automations.tsx` | `{…}` | `{results: {steps_completed, steps_total}[]}` | JWT |
| `compile-workflow` | `lib/crm.ts` | `{…}` | `{ok, workflow_id, steps: number}` | JWT |
| `bylda-action` | `ByldaChatModal.tsx`, `IntelligenceRail.tsx` | `{action_id, decision: "approve"\|"skip"}` | action result | JWT |
| `bylda-chat` | `ByldaChatModal`, `IntelligenceRail`, `app.research`, `app.mentor`, `app.automations`, `app.launchpad.bylda` | `{…}` | **SSE stream** (`invokeEdgeStream`) or JSON | JWT |
| `mentor-chat` | `app.mentor.tsx`, `app.launchpad.mentors.tsx` | `{…}` | **SSE stream** | JWT |
| `run-tool` | `lib/runTool.ts`, `lib/operator.ts` | `{toolKey, input, organizationId, fromRunId?}` | tool run | JWT |
| `analyze-website` | `lib/runTool.ts` | `{url}` | tool run | JWT |
| `complete-onboarding` | `onboarding.tsx`, `WorkspaceStatusBanner.tsx` | `{mode, answers}` | onboarding result | JWT |
| `generate-ai-dashboard` | `lib/queries.ts` | `{…}` | dashboard spec | JWT |
| `save-integration` | `lib/queries.ts` | `{…}` | save result | JWT |
| `integration-oauth-start` | `lib/queries.ts` | `{integration_key, …}` | OAuth redirect URL | JWT |
| `paypal-connect-start` | `lib/queries.ts` | `{integration_key}` | OAuth redirect URL | JWT |
| `shopify-connect-start` | `lib/queries.ts` | `{integration_key, shop}` | OAuth redirect URL | JWT |
| `team-invite` | `app.settings.tsx` | `{…}` | invite result | JWT |
| `create-checkout` | `lib/stripe.ts` | `{…}` | Stripe checkout session | JWT |
| `manage-subscription` | `app.billing.tsx` | `{…}` | portal session | JWT |
| `list-invoices` | `app.billing.tsx` | `{…}` | invoices | JWT |
| `operator` | `lib/operator.ts` | `{…}` | operator response | default — not in `config.toml` |
| `advance-mission` | `lib/mission-loop.ts`, `app.launchpad.course.tsx` | `{…}` | mission state | default — not in `config.toml` |
| `run-workflow` | `lib/automation-run.ts` | `{…}` | run result | default — not in `config.toml` |
| `automation-dispatch` | `lib/automation-run.ts` | `{body: {…}}` | dispatch result | default — not in `config.toml` |
| `generate-course` | `app.launchpad.outputs.$id.tsx` | `{casefile_run_id}` | course | default — not in `config.toml` |
| `log-activation-event` | `lib/analytics.ts` (raw `fetch`) | event | — | default — not in `config.toml` |
| `cs-health` | `lib/crm.ts` | `{org_id}` | `{ok, accounts_scored: number}` | **`verify_jwt=false`** |
| `forecast-rollup` | `lib/crm.ts` | `{org_id}` | `{ok, period: string}` | **`verify_jwt=false`** |
| `marketing-attribution` | `lib/crm.ts` | `{…}` | `{ok, leads_attributed: number}` | **`verify_jwt=false`** |
| `sequence-runner` | `lib/crm.ts` | `{org_id}` | `{ok, processed, advanced, completed}` | **`verify_jwt=false`** |
| `weekly-review` | `WeeklyReviewCard.tsx` | `{…}` | review | **`verify_jwt=false`** |
| `book-appointment` | `book.$slug.tsx` (public page) | `{…}` | `{message}` | **`verify_jwt=false`** — expected, anonymous booking |

⚠️ Five `verify_jwt=false` functions other than `book-appointment` are called from
the signed-in app with an `org_id` in the body. Whether they validate org
membership internally is a **backend** question — read them before Lane 3 wires
Reports, and do not change them.

**Not called from `src/` (17):** webhooks (`payments-webhook`, `ingest-call-webhook`,
`receive-message`), OAuth callbacks (`integration-oauth-callback`,
`paypal-connect-callback`, `shopify-connect-callback`), cron / server-to-server
(`process-reminders`, `feedback-loop`, `sync-gohighlevel`, `send-email`,
`send-sms`, `track-event`, `provision-workspace`, `memory-query`,
`generate-playbook`), and `validate-idea` / `kill-my-idea` (their slugs appear in
`src/` only as `run-tool` tool keys, not as direct invocations).

### RPCs called from the frontend

| RPC | Purpose |
| --- | --- |
| `install_automation_template` | installs an automation template |
| `list_org_members` | lists org members (bypasses a recursive-RLS problem on `organization_members`) |

23 DB functions exist. Useful unused ones for V1: `search_contacts`,
`search_leads`, `match_documents` (pgvector), `has_role`, `has_permission`,
`is_org_member`, `is_org_admin`, `is_admin`, `get_org_entitlements`, `get_user_plan`.

### Tables read by the frontend

80 distinct tables/views via literal `.from("…")` (excluding tests). Most-used: `leads` (18 call sites), `contacts` (16),
`tool_runs` (11), `workspaces` (10), `operator_memory` (8), `subscriptions` (7),
`tasks`/`profiles`/`missions`/`mission_steps`/`mentor_insights`/`memory_sources`/
`automation_workflows` (6 each).

V1-relevant: `calls`, `call_transcripts`, `call_insights`, `deviation_alerts`,
`bylda_events`, `notifications`, `organizations`, `organization_members`,
`profiles`, `user_roles`, `workspaces`, `crm_intelligence_profiles`.

Full schema: **105 tables, 9 views, 23 functions, 19 enums** in
`src/integrations/supabase/types.ts` — but see the stale-types warning in
`BACKEND_BOUNDARY.md`. **16 of the 80 tables the frontend queries are missing
from it**, every one created by a migration in `supabase/migrations/`:
`calls`, `call_insights`, `call_transcripts`, `customer_accounts`,
`duplicate_matches`, `campaign_events`, `waitlist_signups`, `founder_streaks`,
`playbooks`, `playbook_lessons`, `org_briefings`, `integration_raw_objects`,
`integration_external_objects`, `context_package_runs`,
`context_memory_chunks`, `failed_jobs`. The three `call*` tables are the ones
V1 cares about.

Realtime channels (subscriptions, not queries): `notifs:<user_id>`
(`NotificationBell.tsx`), `leads-rt:<org_id>` (`app.bylda.crm.tsx`),
`conversations:<org_id>` (`app.crm.conversations.tsx`).

### Cloudflare Workers

8 workers exist (`workers/bylda-context-api`, `-contacts-api`, `-automations-api`,
`-tools-api`, `-ai-api`, `-stripe-api`, `-automation-consumer`, `-pulse`).
**No frontend code calls them directly** — no `fetch` to a worker URL anywhere in
`src/`. They are invoked by queues, cron and other services. Treated as read-only.
