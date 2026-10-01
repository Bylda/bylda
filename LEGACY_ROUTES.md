# LEGACY_ROUTES.md — quarantined routes

**Decision (CLAUDE.md §12 B, 2026-09-30):** these 29 routes have no Bylda V1 counterpart
(`AUDIT.md` → OWNER DECISION). They are **QUARANTINED**:

- **out of every nav** — the V1 shell's nav config never links to them;
- **code untouched** — no lane edits, reformats or deletes these files;
- **still reachable by URL** — they render inside the V1 shell's main area, unchanged,
  so live bookmarks and any customer still using them keep working;
- **ruled on later** — keep, flag off or delete is an owner decision, in its own PR.

Line counts measured on `foundation` (2026-09-30). The 9 redirect stubs that point
into this surface are listed separately and follow whatever is decided for their target.

## CRM surface — 13 routes

| Route | File | Lines |
| --- | --- | --- |
| `/app/bylda/crm` | `src/routes/app.bylda.crm.tsx` | 3,308 |
| `/app/contacts` | `src/routes/app.contacts.tsx` | 1,761 |
| `/app/crm/campaigns` | `src/routes/app.crm.campaigns.tsx` | 567 |
| `/app/crm/companies` | `src/routes/app.crm.companies.tsx` | 513 |
| `/app/crm/calendar` | `src/routes/app.crm.calendar.tsx` | 530 |
| `/app/crm/forms` | `src/routes/app.crm.forms.tsx` | 498 |
| `/app/crm/tasks` | `src/routes/app.crm.tasks.tsx` | 398 |
| `/app/crm/waitlist` | `src/routes/app.crm.waitlist.tsx` | 302 |
| `/app/crm/duplicates` | `src/routes/app.crm.duplicates.tsx` | 265 |
| `/app/crm/accounts` | `src/routes/app.crm.accounts.tsx` | 226 |
| `/app/crm/automations` | `src/routes/app.crm.automations.tsx` | 641 |
| `/app/scale` | `src/routes/app.scale.tsx` | 282 |
| `/app/scale/campaigns` | `src/routes/app.scale.campaigns.tsx` | 243 |
| | **total** | **9,534** |

## Launchpad Nova surface — 16 routes

| Route | File | Lines |
| --- | --- | --- |
| `/app/launchpad/$tool` | `src/routes/app.launchpad.$tool.tsx` | 2,397 |
| `/app/builder` | `src/routes/app.builder.tsx` | 1,818 |
| `/app/automations` | `src/routes/app.automations.tsx` | 1,162 |
| `/app/templates` | `src/routes/app.templates.tsx` | 957 |
| `/app/research` | `src/routes/app.research.tsx` | 770 |
| `/app/workflow-templates` | `src/routes/app.workflow-templates.tsx` | 507 |
| `/app/roadmap` | `src/routes/app.roadmap.tsx` | 443 |
| `/app/sop-library` | `src/routes/app.sop-library.tsx` | 434 |
| `/app/reputation` | `src/routes/app.reputation.tsx` | 319 |
| `/app/outcomes/$category` | `src/routes/app.outcomes.$category.tsx` | 312 |
| `/app/launchpad/bylda` | `src/routes/app.launchpad.bylda.tsx` | 289 |
| `/app/launchpad/first-customers` | `src/routes/app.launchpad.first-customers.tsx` | 274 |
| `/app/launchpad/outputs/$id` | `src/routes/app.launchpad.outputs.$id.tsx` | 280 |
| `/app/assets` | `src/routes/app.assets.tsx` | 187 |
| `/app/launchpad/history` | `src/routes/app.launchpad.history.tsx` | 204 |
| `/app/launchpad/missions` | `src/routes/app.launchpad.missions.tsx` | 166 |
| | **total** | **10,519** |

**29 routes · 20,053 lines.**

## Redirect stubs into the quarantined surface — 9

| Route | File | Lines | Redirects to |
| --- | --- | --- | --- |
| `/app/leads` | `src/routes/app.leads.tsx` | 9 | `/app/contacts` |
| `/app/bylda/leads` | `src/routes/app.bylda.leads.tsx` | 9 | `/app/contacts` |
| `/app/bylda/clients` | `src/routes/app.bylda.clients.tsx` | 9 | `/app/contacts` |
| `/app/scale/pipeline` | `src/routes/app.scale.pipeline.tsx` | 9 | `/app/bylda/crm` |
| `/app/scale/automations` | `src/routes/app.scale.automations.tsx` | 9 | `/app/automations` |
| `/app/launchpad/` | `src/routes/app.launchpad.index.tsx` | 10 | `/app/playbook` |
| `/app/launchpad-path` | `src/routes/app.launchpad-path.tsx` | 10 | `/app/mission-control` |
| `/app/mission-briefing` | `src/routes/app.mission-briefing.tsx` | 8 | `/app/mission-control` |
| `/app/bylda/workflows` | `src/routes/app.bylda.workflows.tsx` | 9 | `/app/automations` |

## Not in this list

- The **8 DELETE routes** (`AUDIT.md`: `/demo`, `/app/mission-control`, `/app/mentor`,
  `/app/academy`, `/app/academy/$module`, `/app/tutorials`, `/app/launchpad/course`,
  `/app/launchpad/mentors`) — also out of nav, deleted in the **final cleanup** PR.
- The **23 routes that map to a V1 screen** — out of nav, replaced by redirects to their V1
  path at final cleanup (owners in `CLAUDE.md` §8).
- The 12 other redirect stubs (`/app/dashboard`, `/app/galaxy`, …) — deleted at final cleanup.
