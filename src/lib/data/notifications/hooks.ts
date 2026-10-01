import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { DataCtx } from "../core/context";
import { useCtxQuery } from "../core/hook";
import { isEmptyArray } from "../core/query";
import { resolveSource } from "../core/source";
import { NOTIFICATIONS } from "../mocks/collab";
import type { Notification, PushRegistration } from "../types";
import { fetchNotifications, markRead } from "./fetchers";
import { mapNotificationRow } from "./map";
import { notificationKeys } from "./queryKeys";
import { SOURCE } from "./source";

/** N1/N2/B5 — only ever the viewer's own notifications. */
export async function loadNotifications(ctx: DataCtx): Promise<Notification[]> {
  if (resolveSource(SOURCE) === "mock") {
    // Reps don't receive team-level alerts in the fixture.
    return ctx.role === "rep"
      ? NOTIFICATIONS.filter(
          (n) => n.type !== "integration_problem" && n.type !== "behavior_regression",
        )
      : NOTIFICATIONS;
  }
  return (await fetchNotifications(ctx.userId)).map(mapNotificationRow);
}

export const useNotifications = () =>
  useCtxQuery(notificationKeys.list(), loadNotifications, isEmptyArray);

export function useMarkNotificationRead() {
  const qc = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id) => (resolveSource(SOURCE) === "mock" ? undefined : markRead(id)),
    onSuccess: () => void qc.invalidateQueries({ queryKey: notificationKeys.list() }),
  });
}

/** B1/B2/B4/B5 — mobile push registration. GAP: push_subscriptions (C-36) — mock in every mode. */
export async function loadPushRegistration(ctx: DataCtx): Promise<PushRegistration> {
  void ctx;
  return { platform: "web", enabled: false, registeredAt: null };
}
export const usePushRegistration = () =>
  useCtxQuery(["notifications", "push"], loadPushRegistration, () => false);
