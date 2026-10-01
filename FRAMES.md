# FRAMES.md — Figma frame → screen code → lane owner

File: **Bylda — Behavioral Intelligence (V1)** · fileKey `8q5872jwTTRK69cOrWDOmk`
Pulled live from Figma. **128 product views across 21 pages.** Dev Handoff (page 20)
confirms the same total.

## ⚠️ How to list the pages

`get_metadata` **without** a `nodeId` is broken on this file — it reports only
`0:1: 00 — Product Architecture` and hides the other 20 pages. Do not trust it.

Pages are `0:1` plus `1:2` … `1:21`. The full map is below. Always call
`get_metadata` / `get_design_context` with an explicit `nodeId` from this file.

Skip frames whose name starts `__` (e.g. `__lib` `25:2`, `__swap` `38:2` on page 20).

## Page map

| Node | Page | Contents |
| --- | --- | --- |
| `0:1` | 00 — Product Architecture | Strategy poster (frame `2:2`). Reference. |
| `1:2` | 01 — Foundations | Design tokens (frame `3:2`). **Read before any screen.** |
| `1:3` | 02 — Components | Component library. **Foundation.** |
| `1:4` | 03 — Global Shell | Shell symbols + explorations. **Foundation.** |
| `1:5` | 04 — Onboarding | 11 views |
| `1:6` | 05 — Manager | 7 views |
| `1:7` | 06 — Rep | 3 views |
| `1:8` | 07 — Calls | 9 views |
| `1:9` | 08 — Intelligence | 11 views |
| `1:10` | 09 — Team | 13 views |
| `1:11` | 10 — Reports | 10 views |
| `1:12` | 11 — Coaching | 12 views |
| `1:13` | 12 — Rooms | 14 views |
| `1:14` | 13 — Search | 3 views |
| `1:15` | 14 — Notifications | 2 views |
| `1:16` | 15 — Integrations | 3 views |
| `1:17` | 16 — Settings | 18 views |
| `1:18` | 17 — Empty & System States | 1 board, 13 states |
| `1:19` | 18 — Mobile / Responsive | 11 views |
| `1:20` | 19 — Prototypes | **101 `PROTO ·` copies. Do NOT build. Reference only.** |
| `1:21` | 20 — Dev Handoff | Doc (frame `21:2`). **Governs.** |

Page 19 holds duplicate copies wired for the clickable prototype. Build from the
source pages (04–18); use 19 only to check flows.

---

## FOUNDATION — Ansh

### 01 — Foundations · `1:2`

| Frame | Node ID | Notes |
| --- | --- | --- |
| Foundations | `3:2` | Color, type, spacing, radius, surfaces, shell zones, motion |

Token groups inside: `pearl/0` `pearl/50` `pearl/100` `white` · `silver/200-600` ·
`graphite/700-900` `ink` · `signal/improve` `signal/regress` `signal/attention`
`signal/info` + each `-bg` · `space/4-72` · radius `none·0 xs·2 sm·4 md·6 pill·999`.

### 02 — Components · `1:3`

| Component | Node ID | Variants |
| --- | --- | --- |
| Button | `4:23` | Primary · Secondary · Ghost · Dark · Destructive × Default/Disabled |
| Tag | `4:34` | Improve · Regress · Attention · Info · Neutral |
| Avatar | `4:35` | — |
| Sidebar Item | `4:47` | Default · Active · Unread |
| **Confidence** | `4:66` | Low · Medium · High — **required on every insight** |
| Evidence Block | `4:67` | — |
| Insight Card | `4:72` | — |
| Icons | `35:15` | 34 icons (`Icon/home` … `Icon/trend`) |
| Block / Report | `39:904` | Room message blocks |
| Block / Call | `39:918` | |
| Block / Coaching | `39:935` | |
| Block / Structured insight | `39:946` | |
| Reactions | `39:956` | |
| Badge / APP | `39:965` | |

### 03 — Global Shell · `1:4`

| Frame | Node ID | Notes |
| --- | --- | --- |
| **App Shell / Navigation v2** | `37:51` | 312×1024 — rail 64 + sidebar 248. **Use this one.** |
| **Workspace Top Bar** | `36:52` | 784×56 |
| Nav Item | `36:51` | |
| Avatar/Small | `37:49` | |
| Menus & popovers | `50:27312` | Workspace switcher · + New · profile · call more-menu |
| Visual Product Spec | `41:17795` | Merged references |
| App Shell / Navigation | `6:2` | **v1 — superseded by `37:51`. Do not use.** |
| Exploration A | `5:4` | Rejected |
| Exploration B (CHOSEN) | `5:34` | The chosen structure |
| Exploration C | `5:76` | Rejected |
| Scorecard | `5:100` | Decision record |

Shell arithmetic, verified on every screen: **312** (rail 64 + sidebar 248) +
**784** main + **344** context = **1440**. Top bar **56**.
The 72/240/520/300 boxes in the Foundations diagram are illustrative — use 64/248/344.

---

## Lane 4 — Dravin · 04 Onboarding & Auth · `1:5` · 11 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Auth — Sign in | `26:40` | `A1` | Dravin | `/welcome/sign-in` |
| Auth — Sign up | `26:91` | `A2` | Dravin | `/welcome/sign-up` |
| Auth — Verify email | `26:139` | `A3` | Dravin | `/welcome/verify` |
| Auth — Forgot password | `26:184` | `A4` | Dravin | `/welcome/forgot` |
| Auth — Invite acceptance | `26:224` | `A5` | Dravin | `/welcome/invite` |
| Onboarding — Workspace setup | `26:784` | `A6` | Dravin | `/welcome/workspace` |
| Onboarding — Teach Bylda how you sell | `15:2` | `A7` | Dravin | `/welcome/teach` |
| Onboarding — Connect calls (integration states) | `15:302` | `A8` | Dravin | `/welcome/connect` |
| Onboarding — Invite team | `26:496` | `A9` | Dravin | `/welcome/invite-team` |
| Onboarding — Analysis initializing | `16:21` | `A10` | Dravin | `/welcome/analysis` |
| Onboarding — First insight | `16:244` | `A11` | Dravin | `/welcome/first-insight` |

All 1440×1024.

## Lane 1 — Ansh · 05 Manager/Admin Home · `1:6` · 7 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Manager Home — Feed | `7:2` | `H1` | Ansh | `/app/home` |
| Manager Home — Team Updates | `43:692` | `H2` | Ansh | `/app/home/team-updates` |
| Manager Home — Calls | `43:1176` | `H3` | Ansh | `/app/home/calls` |
| Manager Home — Coaching | `43:1670` | `H4` | Ansh | `/app/home/coaching` |
| Manager Home — Reports | `43:2139` | `H5` | Ansh | `/app/home/reports` |
| Manager Home — Mentions | `43:2612` | `H6` | Ansh | `/app/home/mentions` |
| Admin Home — Owner (workspace health) | `31:9916` | `H7` | Ansh | `/app/home/admin` |

H2–H6 are tabs of H1 (`For You · Team Updates · Calls · Coaching · Reports · Mentions`).

## Lane 4 — Dravin · 06 Rep · `1:7` · 3 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Rep Home — Daily Brief | `8:2` | `R1` | Dravin | `/app/rep` |
| Rep — My progress | `32:129` | `R2` | Dravin | `/app/rep/progress` |
| Call Review — Rep perspective | `32:334` | `R3` | Dravin | `/app/rep/calls/$callId` |

`R1` context panel ends with *"No team rankings here. This view is only about you."*
`R2` with *"Your manager sees this same page. No one else does."* Keep both.

## Lane 2 — Dhruv · 07 Calls · `1:8` · 9 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Calls Index — saved views | `17:1090` | `C1` | Dhruv | `/app/calls` |
| Calls Index — All calls + filters open | `52:8665` | `C2` | Dhruv | `/app/calls/all` |
| Call Review — Transcript & timeline | `9:2` | `C3` | Dhruv | `/app/calls/$callId/transcript` |
| Call Review — Overview | `44:1375` | `C4` | Dhruv | `/app/calls/$callId` |
| Call Review — Analysis | `44:1755` | `C5` | Dhruv | `/app/calls/$callId/analysis` |
| Call Review — Coaching | `44:2146` | `C6` | Dhruv | `/app/calls/$callId/coaching` |
| Calls — Manual upload | `28:1263` | `C7` | Dhruv | `/app/calls/upload` |
| Call comparison | `28:1464` | `C8` | Dhruv | `/app/calls/compare` |
| Calls — Rep view (my calls) | `28:1646` | `C9` | Dhruv | `/app/calls/mine` |

`C3` is 1440×1476. `C4`–`C6` are tabs of the Call Review.

## Lane 1 — Ansh · 08 Intelligence · `1:9` · 11 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Intelligence Home | `27:298` | `I1` | Ansh | `/app/intelligence` |
| Behavior Detail — Interrupting during objections | `11:2` | `I2` | Ansh | `/app/intelligence/behaviors/$behaviorKey` |
| Emerging Patterns | `27:567` | `I3` | Ansh | `/app/intelligence/patterns` |
| Objections | `28:378` | `I4` | Ansh | `/app/intelligence/objections` |
| Behavior × Outcome matrix | `28:641` | `I5` | Ansh | `/app/intelligence/matrix` |
| Behavioral Outcome Graph | `28:857` | `I6` | Ansh | `/app/intelligence/graph` |
| Intelligence — Team behaviors | `51:1420` | `I7` | Ansh | `/app/intelligence/team-behaviors` |
| Intelligence — Methodology adherence | `51:2887` | `I8` | Ansh | `/app/intelligence/methodology` |
| Intelligence — Outcome patterns | `51:1819` | `I9` | Ansh | `/app/intelligence/outcomes` |
| Intelligence — Rep patterns | `51:2196` | `I10` | Ansh | `/app/intelligence/reps` |
| Intelligence — Prospect patterns | `51:2556` | `I11` | Ansh | `/app/intelligence/prospects` |

`I6` is 1600×1000 — a concept view, not shell-framed.

## Lane 4 — Dravin · 09 Team · `1:10` · 13 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Team Overview | `12:2` | `T1` | Dravin | `/app/team` |
| Team Detail — Mid-Market AE | `29:1423` | `T2` | Dravin | `/app/team/$teamId` |
| Team Detail — Reps | `52:2125` | `T3` | Dravin | `/app/team/$teamId/reps` |
| Team Detail — Behaviors | `52:2520` | `T4` | Dravin | `/app/team/$teamId/behaviors` |
| Team Detail — Coaching | `52:2928` | `T5` | Dravin | `/app/team/$teamId/coaching` |
| Team Detail — Calls | `52:3276` | `T6` | Dravin | `/app/team/$teamId/calls` |
| Team Detail — Settings | `52:3634` | `T7` | Dravin | `/app/team/$teamId/settings` |
| Rep Profile — Jordan Reyes (manager view) | `12:271` | `T8` | Dravin | `/app/team/reps/$repId` |
| Rep Profile — Overview | `45:1147` | `T9` | Dravin | `/app/team/reps/$repId/overview` |
| Rep Profile — Calls | `45:1493` | `T10` | Dravin | `/app/team/reps/$repId/calls` |
| Rep Profile — Coaching | `45:1841` | `T11` | Dravin | `/app/team/reps/$repId/coaching` |
| Rep Profile — Trends | `45:2142` | `T12` | Dravin | `/app/team/reps/$repId/trends` |
| Rep Comparison | `29:1629` | `T13` | Dravin | `/app/team/compare` |

## Lane 6 — Mayur · 10 Reports · `1:11` · 10 views

| Frame name | Node ID | Code | Owner | Width | V1 route |
| --- | --- | --- | --- | --- | --- |
| Reports — Index | `29:159` | `P1` | Mayur | 1440 | `/app/reports` |
| Daily Manager Brief — in-app document | `13:2` | `P2` | Mayur | 1440×1656 | `/app/reports/daily` |
| Daily Manager Brief — email (640) | `13:232` | `P3` | Mayur | **760** | `/doc/manager-brief-email` |
| Daily Rep Brief — email / push (60 sec) | `13:316` | `P4` | Mayur | **420×380** | `/doc/rep-brief-push` |
| Weekly Manager Report — living document | `29:352` | `P5` | Mayur | 1440×2056 | `/app/reports/weekly` |
| Weekly Sales Behavior Report — outline | `52:10624` | `P6` | Mayur | 1440 | `/app/reports/outline` |
| Weekly Rep Report — Jordan | `29:625` | `P7` | Mayur | 1440×1256 | `/app/reports/rep/$repId` |
| Team Report — September | `29:773` | `P8` | Mayur | 1440×1256 | `/app/reports/team/$teamId` |
| Behavior Report — Objection handling | `29:993` | `P9` | Mayur | 1440×1156 | `/app/reports/behavior/$behaviorKey` |
| Weekly Report — PDF / print (A4) | `29:1154` | `P10` | Mayur | **794×1123** | `/doc/weekly-print` |

`P3`, `P4`, `P10` are **not** app screens — email, push and print. Don't wrap them in the shell.

## Lane 2 — Dhruv · 11 Coaching · `1:12` · 12 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Coaching lifecycle | `14:2` | `G1` | Dhruv — 1450×70 diagram, reference | component `G1CoachingLifecycle` |
| Assign Coaching — modal | `14:24` | `G2` | Dhruv | `/app/coaching/assign` |
| Coaching — Index (Active) | `30:246` | `G3` | Dhruv | `/app/coaching` |
| Coaching — Needs follow-up | `52:6380` | `G4` | Dhruv | `/app/coaching/follow-up` |
| Coaching — Completed | `30:430` | `G5` | Dhruv | `/app/coaching/completed` |
| Coaching Detail — Jordan · active | `30:639` | `G6` | Dhruv | `/app/coaching/$focusId` |
| Coaching Detail — Overview | `46:1604` | `G7` | Dhruv | `/app/coaching/$focusId/overview` |
| Coaching Detail — Evidence | `46:1935` | `G8` | Dhruv | `/app/coaching/$focusId/evidence` |
| Coaching Detail — Progress | `46:2244` | `G9` | Dhruv | `/app/coaching/$focusId/progress` |
| Coaching Detail — Discussion | `46:2549` | `G10` | Dhruv | `/app/coaching/$focusId/discussion` |
| Coaching — Rep view (Jordan) | `30:839` | `G11` | Dhruv | `/app/coaching/mine` |
| Behavior Change Result — Alex Morgan | `14:224` | `G12` | Dhruv | `/app/coaching/$focusId/result` |

## Lane 6 — Mayur · 12 Rooms & Messages · `1:13` · 14 views · MOCKS ONLY

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Rooms — Directory | `31:241` | `O1` | Mayur | `/app/rooms` |
| Room — #objection-watch | `18:2` | `O2` | Mayur | `/app/rooms/$roomId` |
| Room — #objection-watch · Insights | `48:1283` | `O3` | Mayur | `/app/rooms/$roomId/insights` |
| Room — #objection-watch · Calls | `48:1732` | `O4` | Mayur | `/app/rooms/$roomId/calls` |
| Room — #objection-watch · Reports | `48:2213` | `O5` | Mayur | `/app/rooms/$roomId/reports` |
| Room — #objection-watch · Files | `48:2662` | `O6` | Mayur | `/app/rooms/$roomId/files` |
| Room — #objection-watch · About | `48:3103` | `O7` | Mayur | `/app/rooms/$roomId/about` |
| Room — #daily-brief | `31:403` | `O8` | Mayur | component `O8RoomDailyBrief` |
| Room — #coaching | `31:586` | `O9` | Mayur | component `O9RoomCoaching` |
| Room — #mid-market-team (team room) | `48:25761` | `O10` | Mayur | component `O10RoomMidMarketTeam` |
| Room — #acme-logistics (deal room) | `50:3655` | `O11` | Mayur | component `O11RoomAcmeLogistics` |
| Direct message — Dana ↔ Jordan | `49:3123` | `O12` | Mayur | `/app/dm/$threadId` |
| Direct message — BYLDA Coach (rep) | `49:3627` | `O13` | Mayur | `/app/dm/coach` |
| Rooms — New room modal | `50:4184` | `O14` | Mayur | `/app/rooms/new` |

## Lane 2 — Dhruv · 13 Search & Ask · `1:14` · 3 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Search — Command palette ⌘K | `31:760` | `S1` | Dhruv | component `S1SearchCommandPalette` |
| Search — Natural-language results | `31:909` | `S2` | Dhruv | `/app/search` |
| Ask Bylda — side panel (from rail ✦) | `50:26784` | `S3` | Dhruv | component `S3AskByldaSidePanel` |

`S2` states the rule: *"Bylda converts your question to filters you can see and
edit. It never answers from memory — every result links to a call."* Build the
editable filter chips, not a chat.
`S3`'s panel is 440 wide and overlays main (main shrinks to 1000).

## Lane 1 — Ansh · 14 Notifications · `1:15` · 2 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Notifications — Drawer over Home | `31:1101` | `N1` | Ansh | component `N1NotificationsDrawerOverHome` |
| Notifications — Center | `31:1258` | `N2` | Ansh | `/app/notifications` |

Drawer is 400 wide. Types: `BEHAVIOR REGRESSION` · `IMPORTANT CALL` ·
`EMERGING PATTERN` · `REPORT READY` · `COACHING COMPLETED` ·
`COACHING ACKNOWLEDGED` · `METHODOLOGY BREAKDOWN` · `INTEGRATION PROBLEM` ·
`BEHAVIOR IMPROVEMENT`.
Rule on the frame: *"Severity is shown by a dot and a word, never by red badges
or counts that pile up."*

## Lane 5 — Mayur · 15 Integrations · `1:16` · 3 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Integrations — Data sources | `31:1464` | `X1` | Mayur | `/app/connections` |
| Integrations — Delivery channels | `31:1688` | `X2` | Mayur | `/app/connections/channels` |
| Integration detail — HubSpot mapping | `31:1915` | `X3` | Mayur | `/app/connections/hubspot` |

`X1` states: *"Bylda never writes to your CRM in V1."* Read-only, always.

## Lane 5 — Mayur · 16 Settings + Methodology · `1:17` · 18 views

| Frame name | Node ID | Code | Owner | V1 route |
| --- | --- | --- | --- | --- |
| Settings — Workspace general | `31:2201` | `E1` | Mayur | `/app/workspace` |
| Settings — Profile | `31:2394` | `E2` | Mayur | `/app/workspace/profile` |
| Settings — Users | `31:2583` | `E3` | Mayur | `/app/workspace/users` |
| Settings — Teams | `31:2828` | `E4` | Mayur | `/app/workspace/teams` |
| Settings — Roles & permissions | `31:3018` | `E5` | Mayur | `/app/workspace/roles` |
| Settings — Analysis preferences | `31:3275` | `E6` | Mayur | `/app/workspace/analysis` |
| Settings — Notifications | `31:3474` | `E7` | Mayur | `/app/workspace/notifications` |
| Settings — Retention & privacy | `31:3738` | `E8` | Mayur | `/app/workspace/retention` |
| Methodology — Index | `31:7762` | `E9` | Mayur | `/app/methodology` |
| Methodology — Detail (stages) | `31:7973` | `E10` | Mayur | `/app/methodology/$methodologyId` |
| Methodology — Behavior rules list | `31:8450` | `E11` | Mayur | `/app/methodology/$methodologyId/rules` |
| Methodology — Behavior rule editor | `31:8218` | `E12` | Mayur | `/app/methodology/$methodologyId/rules/$ruleKey` |
| Methodology — Objection library | `31:8720` | `E13` | Mayur | `/app/methodology/objections` |
| Methodology — Success criteria | `31:8913` | `E14` | Mayur | `/app/methodology/success-criteria` |
| Settings — Billing & plan | `31:9113` | `E15` | Mayur | `/app/workspace/billing` |
| Settings — Usage | `31:9316` | `E16` | Mayur | `/app/workspace/usage` |
| Settings — API keys | `31:9530` | `E17` | Mayur | `/app/workspace/api-keys` |
| Settings — Audit log | `31:9715` | `E18` | Mayur | `/app/workspace/audit-log` |

## Lane 5 — Mayur · 17 Empty & System States · `1:18` · ✅ DONE (built in Foundation)

One board frame `19:2` (1600×1424) holding **13** states. Every lane imports these.

| State | Node ID | Code |
| --- | --- | --- |
| Home · No calls yet | `19:6` | `Y1` |
| Home · Analysis processing | `19:19` | `Y2` |
| Behavior · Insufficient data | `19:30` | `Y3` |
| Intelligence · No pattern yet | `19:41` | `Y4` |
| Call · Analysis failed | `19:52` | `Y5` |
| Call · Missing transcript | `19:65` | `Y6` |
| Upload · Unsupported file | `19:76` | `Y7` |
| Integration · Disconnected | `19:87` | `Y8` |
| Rep · Permission denied | `19:98` | `Y9` |
| Team · No members | `19:109` | `Y10` |
| Call · Deleted | `19:122` | `Y11` |
| Search · No results | `19:133` | `Y12` |
| Feed · Skeleton | `19:144` | `Y13` |

Board rule: *"when Bylda lacks evidence, it says so — with the number it needs.
It never fills space with fake intelligence."*
`Y13` is labelled **"NO SHIMMER THEATRICS"** — static bars, no animated shimmer.

## Lane 5 — Mayur · 18 Mobile & Responsive · `1:19` · 11 views

| Frame name | Node ID | Code | Size | V1 route |
| --- | --- | --- | --- | --- |
| Mobile — Rep Daily Brief | `20:2` | `B1` | 390×844 | `/m/brief` |
| Mobile — Manager Brief + alert | `20:24` | `B2` | 390×844 | `/m/manager-brief` |
| Mobile — Quick call review + coach | `20:67` | `B3` | 390×844 | `/m/calls/$callId` |
| Mobile — Coaching acknowledge (Rep) | `32:572` | `B4` | 390×844 | `/m/coaching/$focusId` |
| Mobile — Alerts (Manager) | `32:605` | `B5` | 390×844 | `/m/alerts` |
| Mobile — Moment player (Rep) | `32:646` | `B6` | 390×844 | `/m/moments/$momentId` |
| Mobile — Room #objection-watch | `52:11424` | `B7` | 390×844 | `/m/rooms/$roomId` |
| Mobile — Direct message (Dana ↔ Jordan) | `52:11495` | `B8` | 390×844 | `/m/dm/$threadId` |
| Mobile — Ask Bylda / BYLDA Coach | `52:11547` | `B9` | 390×844 | `/m/ask` |
| Responsive — Manager Home @1280 (context → drawer) | `32:7245` | `B10` | 1280×1080 | `/app/home` @1280 — shell breakpoint (Foundation), QA Lane 5 |
| Responsive — Manager Home @1024 (icon rail only) | `32:7490` | `B11` | 1024×1080 | `/app/home` @1024 — shell breakpoint (Foundation), QA Lane 5 |

Skip `20:130` — an unnamed 420×198 helper frame, not a view.

## 19 — Prototypes · `1:20` · reference only

101 frames, all prefixed `PROTO · `. Duplicates of the source screens wired for
the clickable prototype. **Never build from this page.**

Dev Handoff lists **13 flows (0–12)**, and *"SIDEBAR, RAIL, TOP BAR, TABS ALL CLICKABLE"*:

`0` Sign in · `1` Manager day · `2` Rep day · `3` Pattern · `4` Sign up & connect ·
`5` Rep invite · `6` Rooms · `7` Messages · `8` Ask & find · `9` Intelligence ·
`10` Team · `11` Connections · `12` Settings

## 20 — Dev Handoff · `1:21` · governs

| Frame | Node ID |
| --- | --- |
| Dev Handoff | `21:2` |
| Screen inventory (live from file) | `55:50908` |
| Prototype flows table | `55:50996` |
| **Core data objects** | `21:91` |
| **Implementation rules** | `21:143` |

Hidden helpers on this page: `__lib` `25:2`, `__swap` `38:2` — skip.

---

## View count per lane

Mayur owns Lanes 5, 2 and 6, built in that order. Full ownership + folders:
`CLAUDE.md` §8.

| Lane | Owner | Areas | Views |
| --- | --- | --- | --- |
| Foundation | Ansh | 01, 02, 03 + all 13 states of 17 + shell breakpoints B10/B11 | tokens + 14 components + shell |
| Lane 1 | Ansh | 05, 14, 08 | 7 + 2 + 11 = **20** |
| Lane 2 | Mayur | 07, 11, then 13 | 9 + 12 + 3 = **24** |
| Lane 4 | Dravin | 04, 06, then 09 | 11 + 3 + 13 = **27** |
| Lane 5 | Mayur | 15, 16, 18 (17 ✅ done) | 3 + 18 + 11 = **32** (the 13 states of 17 are built — Foundation) |
| Lane 6 | Mayur | 10, then 12 | 10 + 14 = **24** |
| Backend | Tirth | `BACKEND_BACKLOG.md` | — |
| | | | **128 product views** |

Every screen above has a placeholder route (the **V1 route** column) and a screen
component in `src/components/lanes/lane-<n>/` named by its code. Rows marked
`component` have no route of their own: overlays mounted by the shell (`S1`, `S3`,
`N1`), a reference diagram (`G1`), or room kinds rendered by `/app/rooms/$roomId`
(`O8`–`O11`).

`10 Reports` belongs to Lane 6. Its placeholder components stay at `src/components/lanes/lane-4/reports/` — Lane 6
owns that folder (see `CLAUDE.md` §8).
