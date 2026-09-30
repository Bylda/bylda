# FRAMES.md — Figma frame → screen code → lane owner

# ⛔ PENDING — generate from Figma

**Every node ID in this file is `PENDING`. Do not start a screen until its row is filled.**

---

## Why it is pending

Figma MCP **is** available this session and authenticated (`whoami` → Ansh Patel,
`Ansh Patel's team`, pro, admin). File `8q5872jwTTRK69cOrWDOmk` opened fine.

The problem is the file itself. `get_metadata` with no `nodeId` returns **one page**:

```
Top-level pages of the document:
- 0:1: 00 — Product Architecture
```

That page holds exactly **one** top-level frame — `2:2 "Product Architecture"`,
2600 × 2934 — a strategy poster made of 333 text nodes. No sections, no
components, no screen frames. There is no page 03, no pages 04–18, and **no page
20 "Dev Handoff"**.

The poster *references* the screen pages by number — `"Manager Home feed ·
1280/1024 variants (05, 18)"`, `"Prototype flows 0–4 (19)"` — and states
**"SCREEN INDEX — BY ROLE · 127 VIEWS DESIGNED · NO PHASES — EVERYTHING BELOW IS
IN SCOPE"**. So the 127 screens exist somewhere. **They are not in this file key.**

**Blocker:** someone must supply the correct file key (or move/branch the screen
pages into this file). Then re-run Step 5 and fill the tables below.

### How to finish this file

```
1. Get the real file key for the file containing pages 03–20.
2. mcp__Figma__get_metadata { fileKey }                     → confirm pages 03–20 exist
3. For EACH page, one call at a time (never the whole file):
     mcp__Figma__get_metadata { fileKey, nodeId: "<page id>" }
4. Read page 20 "Dev Handoff" in full first — it overrides guesses below.
5. Fill frame name + node ID per row. Skip frames whose name starts "__".
6. Delete this section and the PENDING banner.
```

Page 20 "Dev Handoff" governs. Where it disagrees with `CLAUDE.md`, **Dev Handoff wins** —
raise it in `LANE_REQUESTS.md` so §3 gets corrected once for everyone.

---

## Screen codes

`<letter><n>` where the letter is the area and `n` the screen within it. The
letters below are **provisional** — replace them with whatever page 20 uses.
Screen files are named `<code><Name>.tsx`, e.g. `H1RoomFeed.tsx` (CLAUDE.md §6).

| Area | Letter |
| --- | --- |
| 03 Menus & overlays | `M` |
| 04 Onboarding & Auth | `A` |
| 05 Manager/Admin Home | `H` |
| 06 Rep | `R` |
| 07 Calls | `C` |
| 08 Intelligence | `I` |
| 09 Team | `T` |
| 10 Reports | `P` |
| 11 Coaching | `G` |
| 12 Rooms & Messages | `O` |
| 13 Search & Ask | `S` |
| 14 Notifications | `N` |
| 15 Integrations | `X` |
| 16 Settings + Methodology | `E` |
| 17 Empty & System States | `Y` |
| 18 Mobile & Responsive | `B` |

Expected rows are derived from the poster's own screen index, so the row *lists*
are grounded even though the node IDs are not.

---

## 03 — Menus & overlays — Ansh (FOUNDATION)

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Workspace switcher | `PENDING` | `M1` | Ansh (foundation) |
| + New menu | `PENDING` | `M2` | Ansh (foundation) |
| Profile menu | `PENDING` | `M3` | Ansh (foundation) |
| Call more-menu | `PENDING` | `M4` | Ansh (foundation) |

## 04 — Onboarding & Auth — Lane 4 Mayur

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Sign in | `PENDING` | `A1` | Mayur |
| Sign up | `PENDING` | `A2` | Mayur |
| Verify email | `PENDING` | `A3` | Mayur |
| Forgot password | `PENDING` | `A4` | Mayur |
| Invite acceptance | `PENDING` | `A5` | Mayur |
| Workspace setup | `PENDING` | `A6` | Mayur |
| Teach Bylda how you sell | `PENDING` | `A7` | Mayur |
| Connect call source | `PENDING` | `A8` | Mayur |
| Invite team | `PENDING` | `A9` | Mayur |
| Analysis initializing | `PENDING` | `A10` | Mayur |
| First insight | `PENDING` | `A11` | Mayur |

## 05 — Manager / Admin Home — Lane 1 Ansh

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Manager Home — feed (1440) | `PENDING` | `H1` | Ansh |
| Manager Home — 1280 variant | `PENDING` | `H2` | Ansh |
| Manager Home — 1024 variant | `PENDING` | `H3` | Ansh |
| Manager Home — tab views | `PENDING` | `H4` | Ansh |
| Admin Home — workspace health | `PENDING` | `H5` | Ansh |

## 06 — Rep — Lane 4 Mayur

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Rep Home — 60-sec brief + Today's Focus | `PENDING` | `R1` | Mayur |
| My progress | `PENDING` | `R2` | Mayur |
| My calls | `PENDING` | `R3` | Mayur |
| Call Review — rep perspective | `PENDING` | `R4` | Mayur |

## 07 — Calls — Lane 2 Dhruv

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Calls Index — saved views | `PENDING` | `C1` | Dhruv |
| All calls + filter panel | `PENDING` | `C2` | Dhruv |
| Call Review | `PENDING` | `C3` | Dhruv |
| Call Review — tab views | `PENDING` | `C4` | Dhruv |
| Manual upload | `PENDING` | `C5` | Dhruv |
| Call comparison | `PENDING` | `C6` | Dhruv |

## 08 — Intelligence — Lane 1 Ansh

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Intelligence Home | `PENDING` | `I1` | Ansh |
| Behavior Detail | `PENDING` | `I2` | Ansh |
| Emerging Patterns | `PENDING` | `I3` | Ansh |
| Objection view | `PENDING` | `I4` | Ansh |
| Behavior × Outcome matrix | `PENDING` | `I5` | Ansh |
| Behavioral Outcome Graph — concept | `PENDING` | `I6` | Ansh |
| Tab: Team behaviors | `PENDING` | `I7` | Ansh |
| Tab: Methodology adherence | `PENDING` | `I8` | Ansh |
| Tab: Outcome patterns | `PENDING` | `I9` | Ansh |
| Tab: Rep patterns | `PENDING` | `I10` | Ansh |
| Tab: Prospect patterns | `PENDING` | `I11` | Ansh |

## 09 — Team — Lane 3 Tirth

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Team Overview | `PENDING` | `T1` | Tirth |
| Team Detail — Reps | `PENDING` | `T2` | Tirth |
| Team Detail — Behaviors heatmap | `PENDING` | `T3` | Tirth |
| Team Detail — Coaching | `PENDING` | `T4` | Tirth |
| Team Detail — Calls | `PENDING` | `T5` | Tirth |
| Team Detail — Settings | `PENDING` | `T6` | Tirth |
| Rep Profile (manager) | `PENDING` | `T7` | Tirth |
| Rep Profile — tab views | `PENDING` | `T8` | Tirth |
| Rep Comparison | `PENDING` | `T9` | Tirth |

## 10 — Reports — Lane 3 Tirth

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Daily Manager Brief — in-app | `PENDING` | `P1` | Tirth |
| Daily Rep Brief | `PENDING` | `P2` | Tirth |
| Brief — email version | `PENDING` | `P3` | Tirth |
| Rep email brief | `PENDING` | `P4` | Tirth |
| Weekly Manager Report | `PENDING` | `P5` | Tirth |
| Weekly Rep Report | `PENDING` | `P6` | Tirth |
| Weekly report — outline view | `PENDING` | `P7` | Tirth |
| Team / Behavior report | `PENDING` | `P8` | Tirth |
| PDF export | `PENDING` | `P9` | Tirth |

## 11 — Coaching — Lane 3 Tirth

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Assign Coaching modal | `PENDING` | `G1` | Tirth |
| Coaching Detail | `PENDING` | `G2` | Tirth |
| Coaching Detail — tab views | `PENDING` | `G3` | Tirth |
| Coaching index | `PENDING` | `G4` | Tirth |
| Needs follow-up | `PENDING` | `G5` | Tirth |
| Completed | `PENDING` | `G6` | Tirth |
| Rep Coaching view | `PENDING` | `G7` | Tirth |
| Practice script | `PENDING` | `G8` | Tirth |
| Behavior Change Result | `PENDING` | `G9` | Tirth |

## 12 — Rooms & Messages — Lane 6 (first free person) · MOCKS ONLY

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Rooms directory | `PENDING` | `O1` | Lane 6 |
| #daily-brief | `PENDING` | `O2` | Lane 6 |
| #coaching | `PENDING` | `O3` | Lane 6 |
| #objection-watch — Insights | `PENDING` | `O4` | Lane 6 |
| #objection-watch — Calls | `PENDING` | `O5` | Lane 6 |
| #objection-watch — Reports | `PENDING` | `O6` | Lane 6 |
| #objection-watch — Files | `PENDING` | `O7` | Lane 6 |
| #objection-watch — About | `PENDING` | `O8` | Lane 6 |
| #mid-market-team (team room) | `PENDING` | `O9` | Lane 6 |
| #acme-logistics (deal room) | `PENDING` | `O10` | Lane 6 |
| Thread on an insight | `PENDING` | `O11` | Lane 6 |
| New room modal | `PENDING` | `O12` | Lane 6 |
| DM — Dana ↔ Jordan | `PENDING` | `O13` | Lane 6 |
| DM — BYLDA Coach | `PENDING` | `O14` | Lane 6 |

## 13 — Search & Ask — Lane 2 Dhruv

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| ⌘K command palette — entities | `PENDING` | `S1` | Dhruv |
| Natural-language search | `PENDING` | `S2` | Dhruv |
| Ask Bylda side panel (rail ✦) | `PENDING` | `S3` | Dhruv |

## 14 — Notifications — Lane 1 Ansh

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Notifications drawer | `PENDING` | `N1` | Ansh |
| Notification center | `PENDING` | `N2` | Ansh |

## 15 — Integrations — Lane 5 Dravin

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Data sources | `PENDING` | `X1` | Dravin |
| HubSpot field mapping | `PENDING` | `X2` | Dravin |
| Delivery channels | `PENDING` | `X3` | Dravin |

## 16 — Settings + Methodology — Lane 5 Dravin

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Settings — General | `PENDING` | `E1` | Dravin |
| Settings — Profile | `PENDING` | `E2` | Dravin |
| Settings — Users | `PENDING` | `E3` | Dravin |
| Settings — Teams | `PENDING` | `E4` | Dravin |
| Settings — Roles | `PENDING` | `E5` | Dravin |
| Personal notifications | `PENDING` | `E6` | Dravin |
| Analysis preferences | `PENDING` | `E7` | Dravin |
| Retention & privacy | `PENDING` | `E8` | Dravin |
| Methodology — index | `PENDING` | `E9` | Dravin |
| Methodology — stages | `PENDING` | `E10` | Dravin |
| Methodology — rule list | `PENDING` | `E11` | Dravin |
| Methodology — rule editor | `PENDING` | `E12` | Dravin |
| Objection library | `PENDING` | `E13` | Dravin |
| Success criteria | `PENDING` | `E14` | Dravin |
| Billing · Usage | `PENDING` | `E15` | Dravin |
| API keys | `PENDING` | `E16` | Dravin |
| Audit log | `PENDING` | `E17` | Dravin |

## 17 — Empty & System States — Lane 5 Dravin · BUILD FIRST

12 states + skeleton. Lanes 1–6 all import these, so they land before screen work.

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Empty / loading / error states ×12 | `PENDING` | `Y1`–`Y12` | Dravin |
| Skeleton | `PENDING` | `Y13` | Dravin |

## 18 — Mobile & Responsive — Lane 5 Dravin

| Frame name | Node ID | Screen code | Lane owner |
| --- | --- | --- | --- |
| Mobile — brief | `PENDING` | `B1` | Dravin |
| Mobile — alerts | `PENDING` | `B2` | Dravin |
| Mobile — quick call review | `PENDING` | `B3` | Dravin |
| Mobile — coaching acknowledge | `PENDING` | `B4` | Dravin |
| Mobile — moment player | `PENDING` | `B5` | Dravin |
| Mobile — room | `PENDING` | `B6` | Dravin |
| Mobile — DM | `PENDING` | `B7` | Dravin |
| Mobile — BYLDA Coach | `PENDING` | `B8` | Dravin |

## 19 — Prototype flows — reference only, not built

Flows 0–4. CLAUDE.md §11 requires screen links to match them. Read, don't build.

---

## Provisional frame count per lane

Rows listed above, all `PENDING`:

| Lane | Owner | Areas | Rows |
| --- | --- | --- | --- |
| Foundation | Ansh | 03 | 4 |
| Lane 1 | Ansh | 05, 08, 14 | 18 |
| Lane 2 | Dhruv | 07, 13 | 9 |
| Lane 3 | Tirth | 09, 10, 11 | 27 |
| Lane 4 | Mayur | 04, 06 | 15 |
| Lane 5 | Dravin | 15, 16, 17, 18 | 41 |
| Lane 6 | first free | 12 | 14 |
| **Total** | | | **128** |

128 rows against the poster's claimed **127 views** — close enough to suggest the
row lists are right and only the node IDs are missing. Treat the split as
provisional: **Lane 5 at 41 rows is overloaded and Lane 2 at 9 is light.** Once
real frame counts land, move 16 Settings (17 rows) to Lane 2 or Lane 6.
