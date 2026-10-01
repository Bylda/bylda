import type { Notification, NotificationType, PushRegistration } from "../types";

const V1_TYPES: NotificationType[] = [
  "behavior_regression",
  "important_call",
  "emerging_pattern",
  "report_ready",
  "coaching_completed",
  "coaching_acknowledged",
  "methodology_breakdown",
  "integration_problem",
  "behavior_improvement",
];
const SEVERITY: Record<NotificationType, Notification["severity"]> = {
  behavior_regression: "regress",
  important_call: "attention",
  emerging_pattern: "info",
  report_ready: "info",
  coaching_completed: "improve",
  coaching_acknowledged: "info",
  methodology_breakdown: "attention",
  integration_problem: "attention",
  behavior_improvement: "improve",
};

/** Today's row. Unknown legacy types map to report_ready/info; title = message. */
export function mapNotificationRow(r: {
  id: string;
  type: string | null;
  message: string | null;
  read: boolean | null;
  created_at: string;
}): Notification {
  const type = (V1_TYPES as string[]).includes(r.type ?? "")
    ? (r.type as NotificationType)
    : "report_ready";
  return {
    id: r.id,
    type,
    typeLabel: type.replace(/_/g, " ").toUpperCase(),
    severity: SEVERITY[type],
    title: r.message ?? "",
    // GAP: body / href — C-22
    body: null,
    href: "/app/notifications",
    read: !!r.read,
    createdAt: r.created_at,
  };
}

/** C-22 · proposed notifications row after the V1 columns land. */
export type NotificationV1Row = {
  id: string;
  user_id: string;
  organization_id: string;
  type: NotificationType;
  severity: Notification["severity"];
  title: string;
  body: string | null;
  href: string;
  read: boolean;
  created_at: string;
};
export const mapNotificationV1 = (r: NotificationV1Row): Notification => ({
  id: r.id,
  type: r.type,
  typeLabel: r.type.replace(/_/g, " ").toUpperCase(),
  severity: r.severity,
  title: r.title,
  body: r.body,
  href: r.href,
  read: r.read,
  createdAt: r.created_at,
});

/** C-37 · proposed push_subscriptions row */
export type PushSubscriptionRow = {
  id: string;
  user_id: string;
  platform: PushRegistration["platform"];
  token: string;
  enabled: boolean;
  created_at: string;
};
export const mapPushSubscription = (r: PushSubscriptionRow): PushRegistration => ({
  platform: r.platform,
  enabled: r.enabled,
  registeredAt: r.created_at,
});
