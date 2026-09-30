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
- Foundation (`src/components/v1/**`, `src/styles/bylda-v1.css`,
  `src/lib/data/types/**`, `src/lib/data/mocks/**`) is **frozen once merged**.
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
| 1 | Ansh | setup | Supply the Figma file key that actually contains pages 03–20 | `8q5872jwTTRK69cOrWDOmk` holds one page — an architecture poster. Every node ID in `FRAMES.md` is `PENDING`; no screen can be built to spec. | `blocked` |
| 2 | Ansh | setup | Rule on the 33 `OWNER DECISION` routes in `AUDIT.md` (Launchpad + CRM, ~19k lines) — leave routed / flag off / delete in a separate PR | They have no V1 counterpart. "Rebuild the ENTIRE frontend" is undefined until this is answered. Default assumed: leave routed and untouched. | `blocked` |
| 3 | Ansh | setup | Decide where `confidence` and `sample_size` come from | `CLAUDE.md` §4 makes both mandatory on every insight. No table carries either field. Blocks every insight surface across 05, 06, 08, 09, 11. | `blocked` |
| 4 | Ansh | setup | Regenerate `src/integrations/supabase/types.ts` | `calls`, `call_insights`, `call_transcripts` exist in the DB but are missing from the generated types. Cheapest unblock on the list; it gates area 07, the one well-supported area. Backend change — needs an owner. | `blocked` |
| 5 | Ansh | setup | Rule on the UNSURE list in `BACKEND_BOUNDARY.md` | ~12 client-side files encode backend contracts. Until ruled, all are read-only, which constrains Lane 2's adapter work. | `blocked` |
| 6 | Ansh | setup | Rebalance lanes once real frame counts land | Provisional split puts 41 rows on Lane 5 and 9 on Lane 2. Suggest moving area 16 Settings to Lane 2 or Lane 6. | `open` |
| 7 | Dravin | 5 | Ship area 17 (empty / loading / error / skeleton) before anything else in Lane 5 | Lanes 1–6 all import these states; `CLAUDE.md` §11 makes them part of done. | `open` |

<!-- Add new rows above. Keep the newest at the bottom. -->
