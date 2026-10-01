# design-ref — Figma exports (build without Figma access)

Owner **Ansh** · frozen (CLAUDE.md §12 A) · re-export, never hand-edit.

**Rule:** build each screen from `design-ref/<screen-code>/spec.md` (+ `frame.png` if present). Do NOT call Figma tools unless that screen's design-ref folder is missing. For the Figma check before the PR, compare your screenshot to design-ref instead of calling Figma.

## What's in a folder

- `spec.md` — header (screen, node ID, lane, export date), then the **full `get_design_context` output**: React + Tailwind reference code with `data-node-id`s, the text styles used, and Figma's component descriptions. It is raw Figma Tailwind (`text-[color:var(--text\/primary,#0b0b0c)]`): **translate it to `by-*` utilities and `@/components/bylda` parts — never paste it.** Mapping: `design-ref/_tokens.md` + CLAUDE.md §3.
- `frame.png` — Figma render at native size (1440 wide for screens).
- Asset URLs inside specs (`figma.com/api/mcp/asset/…`) **expire 7 days after export**. Use `<Icon name=… />`; the 34 icon SVGs are saved in `_components/icons/svg/`.

## Source

Exported 2026-10-01 from fileKey **`HWdVvVXWqJl4BFD9MZ5vgW`** ("Bylda — Behavioral Intelligence (V1) – Copy – Copy"), the link supplied for this export. Node IDs are identical to the `8q5872jwTTRK69cOrWDOmk` file in `FRAMES.md` (spot-checked on `4:66`, and all 24 frames resolved at their `FRAMES.md` IDs).

Notes on "full output":

- **C7** was re-exported 2026-10-01 via the saved-file path (`forceCode`) and is now verbatim like every other screen spec, shell inline. (The first export came back inline and was hand-written with the shell collapsed.)
- **`_components/app-shell-nav-v2`** (page 03, outside this batch's scope) is a pointer spec + PNG; its markup is already verbatim in every other screen spec.

## Shared

| Path | What | spec | png |
| --- | --- | --- | --- |
| `_tokens.md` | Page 01 variables — 31 colors, 16 text styles (`get_variable_defs`) | ✅ | — |
| `_foundations/` | Page 01 Foundations frame `3:2` | ✅ | ✅ |
| `_components/button/` | `4:23` | ✅ | ✅ |
| `_components/tag/` | `4:34` | ✅ | ✅ |
| `_components/avatar/` | `4:35` | ✅ | ✅ |
| `_components/sidebar-item/` | `4:47` | ✅ | ✅ |
| `_components/confidence/` | `4:66` | ✅ | ✅ |
| `_components/evidence-block/` | `4:67` | ✅ | ✅ |
| `_components/insight-card/` | `4:72` | ✅ | ✅ |
| `_components/icons/` | `35:15` | ✅ | ✅ |
| `_components/block-report/` | `39:904` | ✅ | ✅ |
| `_components/block-call/` | `39:918` | ✅ | ✅ |
| `_components/block-coaching/` | `39:935` | ✅ | ✅ |
| `_components/block-structured-insight/` | `39:946` | ✅ | ✅ |
| `_components/reactions/` | `39:956` | ✅ | ✅ |
| `_components/badge-app/` | `39:965` | ✅ | ✅ |
| `_components/app-shell-nav-v2/` | `37:51 (page 03, pointer)` | ✅ | ✅ |

## Screens

| Screen code | Name | Node | Lane | spec ✅ | png ✅/— | PENDING |
| --- | --- | --- | --- | --- | --- | --- |
| [`C1`](C1/spec.md) | Calls Index — saved views | `17:1090` | 2 | ✅ | ✅ | — |
| [`C2`](C2/spec.md) | Calls Index — All calls + filters open | `52:8665` | 2 | ✅ | ✅ | — |
| [`C3`](C3/spec.md) | Call Review — Transcript & timeline | `9:2` | 2 | ✅ | ✅ | — |
| [`C4`](C4/spec.md) | Call Review — Overview | `44:1375` | 2 | ✅ | ✅ | — |
| [`C5`](C5/spec.md) | Call Review — Analysis | `44:1755` | 2 | ✅ | ✅ | — |
| [`C6`](C6/spec.md) | Call Review — Coaching | `44:2146` | 2 | ✅ | ✅ | — |
| [`C7`](C7/spec.md) | Calls — Manual upload | `28:1263` | 2 | ✅ | ✅ | — |
| [`C8`](C8/spec.md) | Call comparison | `28:1464` | 2 | ✅ | ✅ | — |
| [`C9`](C9/spec.md) | Calls — Rep view (my calls) | `28:1646` | 2 | ✅ | ✅ | — |
| [`G1`](G1/spec.md) | Coaching lifecycle (diagram) | `14:2` | 2 | ✅ | ✅ | — |
| [`G2`](G2/spec.md) | Assign Coaching — modal | `14:24` | 2 | ✅ | ✅ | — |
| [`G3`](G3/spec.md) | Coaching — Index (Active) | `30:246` | 2 | ✅ | ✅ | — |
| [`G4`](G4/spec.md) | Coaching — Needs follow-up | `52:6380` | 2 | ✅ | ✅ | — |
| [`G5`](G5/spec.md) | Coaching — Completed | `30:430` | 2 | ✅ | ✅ | — |
| [`G6`](G6/spec.md) | Coaching Detail — Jordan · active | `30:639` | 2 | ✅ | ✅ | — |
| [`G7`](G7/spec.md) | Coaching Detail — Overview | `46:1604` | 2 | ✅ | ✅ | — |
| [`G8`](G8/spec.md) | Coaching Detail — Evidence | `46:1935` | 2 | ✅ | ✅ | — |
| [`G9`](G9/spec.md) | Coaching Detail — Progress | `46:2244` | 2 | ✅ | ✅ | — |
| [`G10`](G10/spec.md) | Coaching Detail — Discussion | `46:2549` | 2 | ✅ | ✅ | — |
| [`G11`](G11/spec.md) | Coaching — Rep view (Jordan) | `30:839` | 2 | ✅ | ✅ | — |
| [`G12`](G12/spec.md) | Behavior Change Result — Alex Morgan | `14:224` | 2 | ✅ | ✅ | — |
| [`S1`](S1/spec.md) | Search — Command palette ⌘K | `31:760` | 2 | ✅ | ✅ | — |
| [`S2`](S2/spec.md) | Search — Natural-language results | `31:909` | 2 | ✅ | ✅ | — |
| [`S3`](S3/spec.md) | Ask Bylda — side panel | `50:26784` | 2 | ✅ | ✅ | — |
| [`A1`](A1/spec.md) | Auth — Sign in | `26:40` | 4 | ✅ | ✅ | — |
| [`A2`](A2/spec.md) | Auth — Sign up | `26:91` | 4 | ✅ | ✅ | — |
| [`A3`](A3/spec.md) | Auth — Verify email | `26:139` | 4 | ✅ | ✅ | — |
| [`A4`](A4/spec.md) | Auth — Forgot password | `26:184` | 4 | ✅ | ✅ | — |
| [`A5`](A5/spec.md) | Auth — Invite acceptance | `26:224` | 4 | ✅ | ✅ | — |
| [`A6`](A6/spec.md) | Onboarding — Workspace setup | `26:784` | 4 | ✅ | ✅ | — |
| [`A7`](A7/spec.md) | Onboarding — Teach Bylda how you sell | `15:2` | 4 | ✅ | ✅ | — |
| [`A8`](A8/spec.md) | Onboarding — Connect calls (integration states) | `15:302` | 4 | ✅ | ✅ | — |
| [`A9`](A9/spec.md) | Onboarding — Invite team | `26:496` | 4 | ✅ | ✅ | — |
| [`A10`](A10/spec.md) | Onboarding — Analysis initializing | `16:21` | 4 | ✅ | ✅ | — |
| [`A11`](A11/spec.md) | Onboarding — First insight | `16:244` | 4 | ✅ | ✅ | — |
| [`R1`](R1/spec.md) | Rep Home — Daily Brief | `8:2` | 4 | ✅ | ✅ | — |
| [`R2`](R2/spec.md) | Rep — My progress | `32:129` | 4 | ✅ | ✅ | — |
| [`R3`](R3/spec.md) | Call Review — Rep perspective | `32:334` | 4 | ✅ | ✅ | — |
| [`T1`](T1/spec.md) | Team Overview | `12:2` | 4 | ✅ | ✅ | — |
| [`T2`](T2/spec.md) | Team Detail — Mid-Market AE | `29:1423` | 4 | ✅ | ✅ | — |
| [`T3`](T3/spec.md) | Team Detail — Reps | `52:2125` | 4 | ✅ | ✅ | — |
| [`T4`](T4/spec.md) | Team Detail — Behaviors | `52:2520` | 4 | ✅ | ✅ | — |
| [`T5`](T5/spec.md) | Team Detail — Coaching | `52:2928` | 4 | ✅ | ✅ | — |
| [`T6`](T6/spec.md) | Team Detail — Calls | `52:3276` | 4 | ✅ | ✅ | — |
| [`T7`](T7/spec.md) | Team Detail — Settings | `52:3634` | 4 | ✅ | ✅ | — |
| [`T8`](T8/spec.md) | Rep Profile — Jordan Reyes (manager view) | `12:271` | 4 | ✅ | ✅ | — |
| [`T9`](T9/spec.md) | Rep Profile — Overview | `45:1147` | 4 | ✅ | ✅ | — |
| [`T10`](T10/spec.md) | Rep Profile — Calls | `45:1493` | 4 | ✅ | ✅ | — |
| [`T11`](T11/spec.md) | Rep Profile — Coaching | `45:1841` | 4 | ✅ | ✅ | — |
| [`T12`](T12/spec.md) | Rep Profile — Trends | `45:2142` | 4 | ✅ | ✅ | — |
| [`T13`](T13/spec.md) | Rep Comparison | `29:1629` | 4 | ✅ | ✅ | — |

**Lane 2: 24 / 24 exported · 24 PNGs · 0 PENDING.**

**Lane 4: 27 / 27 exported · 27 PNGs · 0 PENDING.** `A1`–`A6`, `A10`, `A11` came back inline (too small for the tool to save to a file) and were transcribed from the inline output; their regular repeated blocks (4mm grid, auth art panel) were regenerated by script from the same node IDs — noted in each spec header. Lanes 1, 5, 6: not yet exported — their folders are missing, so they still pull from Figma until their batch lands.
