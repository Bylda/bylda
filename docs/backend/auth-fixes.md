# Phase 1 — auth configuration audit

Branch: `backend/auth-fixes`, based on integration `4900c9d` (2026-10-03).
No schema, function implementation, frontend, or response-shape changes.
No production migrations or function deployments performed.

## Before / after and callers

| Function | Before | After | Internal checks / caller impact |
| --- | --- | --- | --- |
| sequence-runner | Explicit `false` | Explicit `false`, rationale added | `auth.getUser()` and org membership for app callers; exact service-role bearer **and** `internal:true` for cron. No caller change. |
| operator | Absent (default `true`) | Explicit `true` | `auth.getUser()`; `src/lib/operator.ts` uses signed-in transport. No expected change. |
| advance-mission | Absent (default `true`) | Explicit `true` | `auth.getUser()`; mission-loop and course UI send session JWTs. No expected change. |
| run-workflow | Absent (default `true`) | Explicit `true` | User JWT or service-role token + internal flag + user ID. App sends session JWT; automation-dispatch sends legacy service-role JWT. No expected change. |
| automation-dispatch | Absent (default `true`) | Explicit `true` | Exact service-role token or user verification + membership filtering. App nudge and existing pg_cron service-role JWT remain supported. |
| generate-course | Absent (default `true`) | Explicit `true` | User JWT, owned workspace, casefile org match. Signed-in casefile UI unchanged. |
| log-activation-event | Absent (default `true`) | Explicit `true` | `auth.getUser()`; analytics.ts explicitly adds session JWT and skips signed-out users. No expected change. |

Supabase documents the default in [Function configuration](https://supabase.com/docs/guides/functions/function-configuration).
These are repository configuration semantics, NOT a claim that current production
deployment flags were inspected. Deployment overrides (`--no-verify-jwt`) can differ.

### Why sequence-runner stays false

The premise that it lacks auth is not borne out by its handler. It already
rejects missing/invalid credentials and cross-org user calls before reading due
enrollments. A user cannot gain internal access by setting the body flag.
Keeping its existing mixed-caller boundary avoids changing cron behavior.
This is membership authorization, not an owner-only role requirement; Phase 1
does not change which org members may invoke this legacy endpoint.

The cron migrations are `20260719000005_sequence_runner_cron.sql` and
`20260619000003_automation_activation.sql`. The latter and automation-dispatch's
run-workflow calls use a service-role bearer. With legacy JWT-based service keys
the six explicit `true` entries do not change effective behavior. Opaque secret
keys or a different JWT signing configuration require **non-production gateway
verification before approval**, not silently disabling all gateway checks.
See [Supabase key migration guidance](https://supabase.com/docs/guides/getting-started/migrating-to-new-api-keys).
No external unsigned caller was found for the six functions. Such a caller was
already unsupported under the repository default.

## Verification

- `bun test supabase/tests/auth-boundary.test.ts`: 15 pass. Actual sequence-runner
  handler executed with in-memory Auth/DB doubles, no external calls. Covers
  missing/invalid/anonymous token, spoofed internal flag, cross-org denial,
  membership scoping, no membership and service-role + internal flag pairing.
- `bun run typecheck`: same 8 pre-existing errors, no new errors.
- `bun run build`, `bun run boundary`, `bun run lint:changed`, and
  `bun run tokens:check`: pass. Git Bash added to PATH for shell-based checks.
- Before any edits, Windows `bun run test`: 729 pass, 36 skipped, 3 fail.
  Two are the documented integrations-catalog failures. The third is the
  contracts-doc equality test caused by checkout CRLF vs rendered LF; observed
  on pristine integration, not introduced here. No frontend tests were changed.
- Docker is unavailable on this machine. No local Supabase stack/gateway smoke
  test was run; the unit harness is not a substitute. Keep the PR draft until
  branch/local gateway checks below pass. No new tables, so no RLS migration tests.

## Required non-production smoke test before approval

On a machine with Docker, use a throwaway checkout with local-only credentials:

```bash
bun install --frozen-lockfile
bun test supabase/tests/auth-boundary.test.ts
bun run typecheck
bun run test
bun run build
supabase start
supabase functions serve
```

Use ONLY the local URL printed by `supabase status` and locally-created users.
For all seven endpoints assert missing and invalid credentials return 401;
assert signed-in app requests reach handler validation (not gateway 401).
For sequence-runner: user A + org B returns 403; user A + own org returns 200;
service-role without internal:true returns 401; service-role + internal:true
returns 200 with no due enrollments. For dispatch/run-workflow, verify the local
service-role cron path. Do not seed due communication jobs or real provider keys.

## Ansh only — production commands AFTER approval

First compare the deployed function revision with this branch: these commands
deploy function source as well as config. Do not overwrite newer production code.
No SQL migration or database push is needed. From the approved merge checkout:

```bash
supabase functions deploy operator --project-ref ipidfqwlszuhjgjygbvx
supabase functions deploy advance-mission --project-ref ipidfqwlszuhjgjygbvx
supabase functions deploy run-workflow --project-ref ipidfqwlszuhjgjygbvx
supabase functions deploy automation-dispatch --project-ref ipidfqwlszuhjgjygbvx
supabase functions deploy generate-course --project-ref ipidfqwlszuhjgjygbvx
supabase functions deploy log-activation-event --project-ref ipidfqwlszuhjgjygbvx
```

Do not pass `--no-verify-jwt`. Sequence-runner requires no deployment: its
effective config and implementation are unchanged. Confirm configured JWT flags
after deployment and monitor signed-in requests and cron auth errors.

## Separate findings for Ansh (not fixed in this bounded phase)

JWT identity is not sufficient resource authorization. advance-mission's
complete_step path updates a body-supplied step ID with the service client;
log-activation-event accepts a body-supplied workspace ID without a membership
check. These pre-existing resource-ownership checks need a separately scoped
security PR. The backlog's P0 rep-scoped call access also remains outstanding.
Do not interpret this configuration PR as a full tenant-isolation audit.

Stop after Phase 1. Types regeneration and object contracts remain unchanged.
