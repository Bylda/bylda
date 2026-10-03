# Notification Visibility & Authorization

## Summary

Notification visibility (full spec: docs/notification-visibility.md)
- Access is decided by the notification's subject (who or what it is about), never by its type.
- Rep: only notifications whose single subject is that rep. No other reps, no team patterns, no multi-rep rows even when they are one of the subjects, no integration or system alerts.
- Manager: themselves and reps in their scope. V1 scope = the whole workspace; teams can narrow it later.
- Owner and Admin: everything in the workspace. Admin has the same visibility as Owner.
- Integration and system alerts: Owner yes, Admin yes, Manager yes, Rep no.
- Coach and Viewer: undefined, so they see nothing.
- The payload counts: a rep-facing title or body must not mention anyone else.
- Backend-enforced and default-deny. No subject means not returned. Mock and frontend filters are not enforcement.

---

## Purpose

Bylda surfaces behavioral intelligence to the person who can act on it, while protecting rep-level performance data from users who should not have access to it.

Visibility MUST be determined by who or what a notification is about, not by its type.

Frontend filtering is not authorization. Mock filtering is not authorization. The backend is the final authority on whether a user may access a notification.

## Roles

| Role | Sees |
|---|---|
| Owner | Everything in the workspace |
| Admin | Same as Owner |
| Manager | Themselves, reps in their scope, patterns across that scope, integration and system alerts |
| Rep | Only notifications whose single subject is that rep |
| Coach, Viewer | Undefined. Undefined roles see nothing. |

Coach and Viewer exist as V1 roles, but this spec grants them no visibility, so they receive no notifications: empty list, no unread dot. The mock enforces this with an allowlist (owner, admin, manager, rep). Any role added later gets the same default until this table says otherwise.

## Core privacy principle

A user only receives behavioral intelligence about people or systems they are authorized to oversee.

The backend MUST decide authorization before returning a notification. Unauthorized notifications must never be included in an API response, even if the frontend intends to hide them.

## Rep visibility

A Rep may see a notification only when it is explicitly and solely about that Rep.

Rep Mike may see:

- "Your objection handling regressed this week."
- "Your discovery questioning improved."
- "You lost control during this call."
- "This call is worth reviewing."
- "Your behavior improved after your last coaching recommendation."

Mike may NOT see:

- Notifications about Sarah or any other individual Rep
- Team-wide patterns, team regressions, methodology breakdowns
- Manager coaching alerts
- Cross-rep comparisons
- Integration errors, CRM connection failures, call ingestion failures
- Workspace, system or administrative notifications

A Rep must never receive another Rep's behavioral data through a notification.

## Manager visibility

A Manager may see:

- Notifications about themselves
- Notifications about Reps in their scope: behavioral changes, coaching opportunities, calls that deserve review
- Patterns, methodology breakdowns, improvements and regressions across their scope
- Integration and system alerts

A Manager may NOT see Owner-only billing, security or account-level information.

**Scope.** In V1 a Manager's scope is the whole workspace. When teams are introduced, scope narrows to the teams a Manager is assigned to, and a Manager must not see Reps, teams or patterns outside it. Permissions follow scope, not simply the `manager` role.

## Owner and Admin visibility

Owners and Admins see every notification in the workspace: rep-level, manager-level, team and organization patterns, integration failures, ingestion failures, system issues and administrative notifications.

## Integration and system notifications

Examples: CRM disconnected, dialer authentication expired, call ingestion failed, transcript processing stalled, workspace configuration invalid.

| Role | Receives |
|---|---|
| Owner | Yes |
| Admin | Yes |
| Manager | Yes |
| Rep | No |

## Notification subject model

Every notification MUST have an explicit subject. Access must not be inferred from notification type.

Required:

- `subject_type`: `rep` | `team` | `workspace` | `integration` | `system`
- `subject_id`: ID of that rep, team, workspace or integration
- `workspace_id`

Any further fields (recipient or owner ID, team ID, and so on) are the backend's decision, not a requirement of this spec.

Two notifications can share a type and differ in visibility:

```json
{ "type": "behavior_regression", "subject_type": "rep",  "subject_id": "rep_123",  "workspace_id": "workspace_1" }
{ "type": "behavior_regression", "subject_type": "team", "subject_id": "team_10", "workspace_id": "workspace_1" }
```

The first may be visible to the Rep involved. The second must not be visible to any Rep.

## Authorization logic

The question is "Is this user authorized to see information about this subject?", not "Is this user allowed to see this notification type?"

Type describes what happened. Subject describes who or what it happened to. Authorization is based on the subject.

**Rep rule.** ALLOW only when all of these hold; otherwise DENY:

- `subject_type == "rep"`
- `subject_id == authenticated_user.rep_id`
- `workspace_id == authenticated_user.workspace_id`

This is a default-deny system. If Bylda cannot confidently determine that a user may see a notification, it must not be returned.

## Payload privacy rule

Authorization applies to the whole payload, not only the title.

A notification "about Mike" must not carry information about Sarah or the rest of the team. This is not allowed:

```json
{
  "title": "Mike's behavior improved",
  "body": "Mike improved 10%, while Sarah declined 18% and is now the team's worst performer."
}
```

Rep-facing content must contain only information that Rep is authorized to access.

## Multi-subject notifications

A notification involving more than one Rep is team-level intelligence.

Example: "Mike, Sarah and Alex are all beginning to lose control when prospects raise pricing objections."

Mike must NOT receive it, even though he is included, because it reveals information about Sarah and Alex. Managers with all three in scope may receive it. Owners and Admins may receive it.

If the insight is useful to an individual Rep, generate a separate personalized notification containing information only about that Rep: "Your pricing-objection handling has regressed over your last 8 calls."

## Missing or malformed authorization data

If any required field is missing, invalid, contradictory or unresolvable: DENY.

Examples: missing `subject_id`, unknown `workspace_id`, a reference to a deleted Rep, a multi-subject notification labeled as individual.

Privacy fails closed, not open.

## Backend enforcement

Every notification retrieval path must apply these rules.

**Surfaces that exist today**

- Notification list (drawer and center), including pagination
- Notification count and unread count
- Notification detail by ID
- Deep links

**When introduced**

- Realtime / WebSocket updates
- Push and mobile notifications
- Email notification links
- Slack / Teams delivery
- Notification search
- Team-scoped manager permissions

A Rep must not be able to obtain unauthorized notification information by calling the API directly, guessing a notification ID, editing frontend code, changing URL parameters, querying another Rep's ID, or inspecting network responses.

## Acceptance tests

**Required now**

1. Rep A cannot retrieve Rep B's notification through the list endpoint.
2. Rep A cannot retrieve Rep B's notification by guessing its ID.
3. Rep A does not receive team-level behavioral notifications.
4. Rep A does not receive integration or system notifications.
5. Rep A receives their own behavioral regression notification.
6. Rep A receives their own improvement notification.
7. Rep A does not receive a multi-Rep notification, even when Rep A is one of the subjects.
8. A Manager sees notifications for Reps in their scope.
9. A Manager sees integration and system notifications.
10. An Owner and an Admin see every notification in the workspace.
11. A notification with missing subject information is not returned to anyone below Owner/Admin.
12. Unauthorized information does not appear inside an otherwise authorized payload.
13. Unauthorized notifications do not affect a Rep's unread count.
14. Deep links cannot bypass authorization.

**Required when the surface is introduced**

15. A Manager cannot see Reps or patterns outside their assigned team scope.
16. Realtime updates follow exactly the same rules as API retrieval.
17. Push, mobile, email, Slack/Teams and search follow exactly the same rules as API retrieval.

## Canonical rule

Bylda notification access is subject-based, scope-aware, backend-enforced and default-deny.

A notification is returned only when the authenticated user's role and scope authorize them to see its subject and every piece of information in its payload.
