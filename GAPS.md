# GAPS.md — data the V1 screens need vs. what the backend has

# ≈ 78% MISSING

Counted by data field across V1 screen areas 04–18: **167 fields needed, 130
MISSING (77.8%), 37 AVAILABLE.**

That number is not a UI problem. The backend is a **CRM + founder-journey
platform**. Bylda V1 is a **behavioral intelligence product**. The entire
behavioral domain — the thing the product *is* — has no schema.

---

## The five missing tables everything hangs off

Verified across all 106 migrations with
`grep -riE "create table (if not exists )?(public\.)?<name>"`:

| Table | Exists? | Without it you cannot build |
| --- | --- | --- |
| `behaviors` / `behavioral_events` / `behavior_events` | **no** | 08 Behavior Detail, 05 Manager feed, 09 behaviors heatmap, 11 all coaching |
| `patterns` | **no** | 08 Emerging Patterns, Behavior × Outcome matrix, Outcome patterns |
| `coaching` / `coaching_assignments` | **no** | 11 entirely — Focus, Evidence, Acknowledgement, Result |
| `teams` / `team_members` | **no** | 09 entirely. Closest: `organization_members`, `workspace_member_roles`, `territories` — none is a sales team. |
| `rooms` / `messages` / `room_members` | **no** | 12 entirely — rooms, DMs, threads, BYLDA Coach |

Also absent: `briefs` (10), `methodology` / `objections` / `success_criteria` (16),
`rep_metrics` (06, 09), `insights` as a first-class object (05, 08).

Lane 6 is **mocks only** for exactly this reason. Lanes 1 and 3 are majority-mock.

---

## What *is* available

The call pipeline is real and usable. From
`supabase/migrations/20260719000006_crm_phase4_calling.sql` and
`20260809000001_vertical_call_intelligence.sql`:

**`calls`** — `id`, `organization_id`, `contact_id`, `lead_id`, `user_id`,
`direction` (`inbound`|`outbound`), `status` (`queued`|`ringing`|`in_progress`|
`completed`|`missed`|`voicemail`|`failed`), `duration`, `recording_url`,
`disposition`, `outcome_tag`, `from_number`, `to_number`, `provider`,
`provider_call_id`, `started_at`, `metadata` jsonb, `created_at`

**`call_transcripts`** — `call_id`, `organization_id`, `transcript_text`,
`speaker_segments` jsonb, `sentiment_score`, `created_at`

**`call_insights`** — `call_id` (unique), `organization_id`, `objections` jsonb,
`competitor_mentions` jsonb, `talk_ratio`, `next_steps_extracted` jsonb,
`summary`, `sales_profile`, `vertical_insights` jsonb, `crm_writeback_preview`
jsonb, `missing_required_fields` text[], `analysis_version`, `writeback_status`,
`approved_at`, `approved_by`, `created_at`

Plus `call_analysis_jobs`, `call_queues`, `dial_sessions`, `deviation_alerts`,
`bylda_events`, `bylda_actions`, `notifications`, `sales_baselines`,
`forecast_snapshots`, `observed_metrics`, `expected_outcomes`, `outcomes`.

⚠️ `calls`, `call_insights` and `call_transcripts` are **missing from
`src/integrations/supabase/types.ts`**. Existing code casts around it
(`const db = supabase as any` in `src/routes/app.crm.calls.tsx`). Regenerating
types is a backend change and out of scope — hand-write these types in
`src/lib/data/types/` and tag them `// GAP: types.ts stale`.

---

## Per-area breakdown

### 04 — Onboarding & Auth · 15 fields · 20% missing

| Field | Status |
| --- | --- |
| email, password, session | AVAILABLE: `supabase.auth` |
| invite token, invited role | AVAILABLE: `team-invite` edge fn + `auth.invite.tsx` |
| workspace name, id | AVAILABLE: `workspaces.name`, `.id` |
| org id, owner | AVAILABLE: `organizations.id`, `.owner_id` |
| member role | AVAILABLE: `user_roles`, `workspace_member_roles`, `has_role()` |
| onboarding answers | AVAILABLE: `complete-onboarding` `{mode, answers}`, `onboarding_responses` |
| call source connection | AVAILABLE: `save-integration`, `user_integrations`, `integration-oauth-start` |
| sales methodology template | AVAILABLE (partial): `crm_intelligence_profiles`, `business_context` |
| **"teach Bylda how you sell" — stage definitions** | **MISSING: `methodology` table (stages, rules, success criteria)** |
| **analysis-initializing progress %** | **MISSING: no workspace-level analysis job; `call_analysis_jobs` is per-call** |
| **first insight** | **MISSING: depends on `behaviors` + `insights`** |

### 05 — Manager / Admin Home · 18 fields · 83% missing

| Field | Status |
| --- | --- |
| workspace name, member count | AVAILABLE: `workspaces`, `list_org_members()` |
| calls today / this week | AVAILABLE: `calls` filtered on `created_at` |
| **feed item: insight → evidence → action** | **MISSING: `insights` table** |
| **attention items** | **MISSING: `deviation_alerts` exists but is CRM deviation, not behavioral** |
| **coach queue** | **MISSING: `coaching_assignments`** |
| **behavior name + direction (improve/regress)** | **MISSING: `behaviors`** |
| **confidence score** | **MISSING — and it is mandatory on every insight per CLAUDE.md §4** |
| **sample size** | **MISSING — same** |
| **before/after measurement window** | **MISSING: no `behavior_change_results`** |
| **rep name on a feed item** | AVAILABLE: `profiles.full_name` via `calls.user_id` |
| **team rollup** | **MISSING: `teams`** |
| admin: workspace health, failed jobs | AVAILABLE: `health_checks`, `failed_jobs`, `pulse_logs` |
| admin: usage / quota | AVAILABLE: `usage_tracking`, `usage_events`, `quotas`, `get_org_entitlements()` |

### 06 — Rep · 14 fields · 86% missing

| Field | Status |
| --- | --- |
| my calls | AVAILABLE: `calls` where `user_id = auth.uid()` |
| my call insights | AVAILABLE: `call_insights` joined on my calls |
| **today's focus (one behavior)** | **MISSING: `coaching_assignments` + `behaviors`** |
| **60-second brief** | **MISSING: `briefs`** |
| **my strengths / leaks** | **MISSING: `behaviors` aggregated per rep** |
| **my progress over time** | **MISSING: `rep_metrics` time series** |
| **acknowledge coaching** | **MISSING: no acknowledgement object** |
| **practice script** | **MISSING** |
| ⚠️ rep must never see peer data | **Enforce in UI.** No backend guarantee — RLS on `calls` is `is_org_member(organization_id, …)`, which lets any member read **every** call in the org. Filter by `user_id` in `/lib/data` **and** hide peer surfaces. This is a UI-enforced rule, exactly as CLAUDE.md §4 says. |

### 07 — Calls · 22 fields · 32% missing — the best-supported area

| Field | Status |
| --- | --- |
| call list, direction, status, duration, started_at | AVAILABLE: `calls.*` |
| recording URL / audio | AVAILABLE: `calls.recording_url` |
| disposition, outcome tag | AVAILABLE: `calls.disposition`, `.outcome_tag` |
| contact / lead / rep | AVAILABLE: `calls.contact_id`, `.lead_id`, `.user_id` |
| transcript + speaker split | AVAILABLE: `call_transcripts.transcript_text`, `.speaker_segments` |
| sentiment | AVAILABLE: `call_transcripts.sentiment_score` |
| objections, competitors | AVAILABLE: `call_insights.objections`, `.competitor_mentions` |
| talk ratio | AVAILABLE: `call_insights.talk_ratio` |
| summary, next steps | AVAILABLE: `call_insights.summary`, `.next_steps_extracted` |
| analysis status | AVAILABLE: `call_analysis_jobs`, `call_insights.analysis_version` |
| manual upload | AVAILABLE: `get-call-ingest-url` edge fn |
| re-analyse | AVAILABLE: `analyze-call` `{call_id}` |
| saved views / filters | AVAILABLE (client-side): no `saved_views` table — persist in localStorage or mock |
| **behavioral event timeline on the waveform** | **MISSING: `behavioral_events` with timestamps. `speaker_segments` gives turns, not behaviors.** |
| **moment player deep-link** | **MISSING: depends on behavioral event offsets** |
| **call comparison** | **MISSING: derivable client-side from two `call_insights` rows — mock the diff** |
| **methodology adherence per call** | **MISSING: `methodology`** |

### 08 — Intelligence · 20 fields · 95% missing

Only `calls` volume and `call_insights.objections` frequency are derivable.
Behavior Detail, Intelligence Home, Emerging Patterns, Objection view,
Behavior × Outcome matrix, Behavioral Outcome Graph, and the five Intelligence
tabs (Team behaviors · Methodology adherence · Outcome patterns · Rep patterns ·
Prospect patterns) are **MISSING: `behaviors`, `patterns`, `methodology`,
plus confidence and sample-size fields on every one.**

An objection **frequency** view is buildable today by aggregating
`call_insights.objections` jsonb client-side. That is the one real Intelligence
screen available. Everything else is mocked.

### 09 — Team · 16 fields · 88% missing

| Field | Status |
| --- | --- |
| member list, names, avatars | AVAILABLE: `list_org_members()`, `profiles`, `user_profiles` view |
| role per member | AVAILABLE: `user_roles`, `workspace_member_roles`, `has_role()` |
| calls per rep | AVAILABLE: aggregate `calls` by `user_id` |
| **team object, team membership** | **MISSING: `teams`, `team_members`** |
| **behaviors heatmap per rep** | **MISSING: `behaviors`** |
| **rep comparison on behavior** | **MISSING** |
| **coaching history per rep** | **MISSING** |
| **team-level trend** | **MISSING** |
| **"Mid-Market AE team of 9" fixture** | **MISSING — mock it; there is no team concept to seed** |

### 10 — Reports · 14 fields · 86% missing

`weekly_reviews`, `client_reports` and `org_briefings` exist but are
Launchpad/CRM reports, not behavioral briefs. Daily Manager Brief, Daily Rep
Brief, email version, Weekly Manager/Rep Report, Team/Behavior report and PDF
export are **MISSING: `briefs` + everything behavioral upstream.**
Email delivery is AVAILABLE as a mechanism: `send-email` edge fn.

### 11 — Coaching · 16 fields · 100% missing

All four V1 coaching objects are absent: **Focus, Evidence, Acknowledgement,
Result.** `mentor_insights` is written by `analyze-call` on risk and is the
nearest signal, but it is a text insight, not an assignable coaching object with
an acknowledgement and a measured result. **MISSING: `coaching_assignments`,
`coaching_acknowledgements`, `behavior_change_results`.**

### 12 — Rooms & Messages · 18 fields · 100% missing

`conversations`, `bylda_conversations` and `receive-message` are
**customer** messaging (inbound SMS/email to leads), not internal team rooms.
Rooms directory, `#daily-brief`, `#coaching`, `#objection-watch`,
`#mid-market-team`, `#acme-logistics` deal room, DMs, BYLDA Coach DM, threads on
insights, room tabs (Insights · Calls · Reports · Files · About), new-room modal:
**MISSING: `rooms`, `room_members`, `messages`, `threads`.**
**Lane 6 is mocks only.** Realtime exists (`20260701000004_realtime_publication.sql`)
if rooms are ever built.

### 13 — Search & Ask · 8 fields · 50% missing

| Field | Status |
| --- | --- |
| contact search | AVAILABLE: `search_contacts()` RPC |
| lead search | AVAILABLE: `search_leads()` RPC |
| semantic search | AVAILABLE: `match_documents()` RPC + `context_embeddings` (pgvector) |
| ask-Bylda answer | AVAILABLE (repurposed): `bylda-chat`, `operator`, `memory-query` |
| **call / behavior / pattern / coaching entities in the palette** | **MISSING: no unified search across V1 entities; behaviors and patterns do not exist** |
| **NL query over behavior data** | **MISSING** |

### 14 — Notifications · 8 fields · 50% missing

`notifications` table + `send-email` exist. **MISSING:** behavioral notification
*types* (behavior regressed, coaching assigned, pattern emerged), Slack/Teams
delivery config (no `delivery_channels` table), mobile push registration.

### 15 — Integrations · 12 fields · 25% missing

Strong. AVAILABLE: `user_integrations`, `user_integrations_masked` view,
`integration_oauth_states`, `integration_external_objects`,
`integration_raw_objects`, `get_user_integration()` / `set_user_integration()`,
and edge fns `integration-oauth-start`, `integration-oauth-callback`,
`save-integration`, `sync-crm`, `sync-gohighlevel`, `sync-salesforce`,
`get-call-ingest-url`, `get-inbound-url` `{org_id}` → `{configured, url?}`.
**MISSING:** HubSpot field-mapping UI state, and **delivery channels as a separate
area** (V1 architecture decision 5) — no `delivery_channels` table.

### 16 — Settings + Methodology · 20 fields · 60% missing

| Field | Status |
| --- | --- |
| profile, name, avatar | AVAILABLE: `profiles`, `user_profiles` |
| users, roles, permissions | AVAILABLE: `user_roles`, `roles`, `role_permissions`, `has_permission()` |
| billing, plan, invoices | AVAILABLE: `subscriptions`, `plan_tier_limits`, `feature_entitlements`, `list-invoices`, `manage-subscription`, `create-checkout` |
| audit log | AVAILABLE: `admin_audit_log`, `audit_log` |
| usage | AVAILABLE: `usage_tracking`, `usage_events` |
| **teams management** | **MISSING: `teams`** |
| **methodology index / stages / rules / rule editor** | **MISSING: `methodology`, `methodology_stages`, `methodology_rules`** |
| **objection library** | **MISSING** |
| **success criteria** | **MISSING: `expected_outcomes` is close but CRM-shaped** |
| **analysis preferences** | **MISSING** |
| **retention & privacy settings** | **MISSING** |
| **API keys** | **MISSING** |

### 17 — Empty & System States · 0 data fields

No backend need. Every state derives from a `/lib/data` hook's
`{loading, error, empty}`. **Build first** — lanes 1–6 all depend on these.

### 18 — Mobile & Responsive · 0 new fields

Same data, narrower layout. No new backend need.

---

## Rules for filling a gap

1. Type it in `src/lib/data/types/` — shaped how the real table *should* look,
   not how a mock is convenient.
2. Fixture it in `src/lib/data/mocks/`, behind `NEXT_PUBLIC_BYLDA_MOCKS`.
3. Tag every mock `// GAP: <what backend would need>` on the line above.
4. Add a row here under the right area.
5. Never invent a number in a component. Never `fetch` in a component.

Fixture, used by every mock so screens compose: **Acme Revenue** workspace ·
**Kiran Patel** owner · **Dana Whitfield** manager · **Mid-Market AE** team of 9 ·
**Jordan Reyes** rep · **#acme-logistics** deal room.

---

## Top 5 to escalate

1. **`behaviors` / `behavioral_events`** — blocks 05, 06, 08, 09, 11. The product
   does not exist without it. Nothing else on this list matters until it is decided.
2. **`coaching_assignments` + acknowledgement + result** — blocks 11 entirely
   (100% missing) and the "did it work?" half of the manager's job, which V1
   architecture decision 3 names as the point of the product.
3. **`confidence` + `sample_size` on every insight** — CLAUDE.md §4 makes these
   mandatory on screen. No table carries either field. Every insight surface is
   blocked on a decision about where these are computed.
4. **`teams` / `team_members`** — blocks 09 (88% missing) and every team rollup on
   05. `organization_members` is not a sales team; the "team of 9" fixture has
   nothing to map onto.
5. **Stale `types.ts`** — `calls`, `call_insights`, `call_transcripts` are absent
   from the generated types although the tables exist. Cheapest item on this list
   and it blocks the one well-supported area (07). Someone with backend access
   should regenerate; until then lanes hand-write types and cast.
