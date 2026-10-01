import { assertNotRep, type DataCtx } from "../core/context";
import { useCtxQuery } from "../core/hook";
import { isEmptyArray } from "../core/query";
import { resolveSource } from "../core/source";
import { HEALTH } from "../mocks/admin";
import { HOME_FEED, INSIGHTS } from "../mocks/intelligence";
import type { HomeFeed, HomeTab, Insight, WorkspaceHealth } from "../types";
import { fetchHealthChecks, fetchHomeFeed, fetchInsights } from "./fetchers";
import { mapFeedItem, mapInsight } from "./map";
import { insightKeys } from "./queryKeys";
import { HEALTH_SOURCE, SOURCE } from "./source";

export type InsightFilter = { repId?: string; kind?: Insight["kind"]; limit?: number };

/** Insights. A rep gets only insights about themselves (affectedRepIds ∋ me). */
export async function loadInsights(ctx: DataCtx, f: InsightFilter = {}): Promise<Insight[]> {
  const all = resolveSource(SOURCE) === "mock" ? INSIGHTS : (await fetchInsights()).map(mapInsight);
  return all
    .filter((i) =>
      ctx.role === "rep"
        ? i.affectedRepIds.length === 1 && i.affectedRepIds[0] === ctx.userId
        : true,
    )
    .filter(
      (i) => (!f.repId || i.affectedRepIds.includes(f.repId)) && (!f.kind || i.kind === f.kind),
    )
    .slice(0, f.limit ?? 50);
}

/** H1–H6 manager feed. Never a rep's (their home is R1). */
export async function loadHomeFeed(ctx: DataCtx, tab: HomeTab | "all" = "all"): Promise<HomeFeed> {
  assertNotRep(ctx, "the manager feed");
  if (resolveSource(SOURCE) === "mock") {
    return {
      ...HOME_FEED,
      items: HOME_FEED.items.filter((i) => tab === "all" || tab === "for_you" || i.tab === tab),
    };
  }
  const items = (await fetchHomeFeed()).map(mapFeedItem);
  // GAP: attention items + coach queue — C-04
  return { items, attention: [], coachQueue: [] };
}

/** H7 Admin Home — owner/admin only. Hybrid: health checks real, the rest GAP. */
export async function loadWorkspaceHealth(ctx: DataCtx): Promise<WorkspaceHealth> {
  if (ctx.role !== "owner" && ctx.role !== "admin") assertNotRep(ctx, "workspace health");
  if (resolveSource(HEALTH_SOURCE) === "mock") return HEALTH;
  const checks = await fetchHealthChecks();
  const latest = new Map<string, string>();
  for (const c of checks) if (!latest.has(c.endpoint_name)) latest.set(c.endpoint_name, c.status);
  return {
    sources: [...latest.entries()].map(([key, status]) => ({
      key,
      name: key,
      status:
        status === "ok" || status === "healthy"
          ? "ok"
          : status === "degraded"
            ? "degraded"
            : "down",
    })),
    // GAP: org-scoped failed jobs / seats / weekly analyzed count — C-28
    failedJobs: 0,
    callsAnalyzedThisWeek: 0,
    seats: { used: 0, total: null },
    alerts: [],
  };
}

export const useInsights = (f: InsightFilter = {}) =>
  useCtxQuery(insightKeys.list(f), (ctx) => loadInsights(ctx, f), isEmptyArray);
export const useHomeFeed = (tab: HomeTab | "all" = "all") =>
  useCtxQuery(
    insightKeys.feed(tab),
    (ctx) => loadHomeFeed(ctx, tab),
    (d) => d.items.length === 0,
  );
export const useWorkspaceHealth = () =>
  useCtxQuery(insightKeys.health(), loadWorkspaceHealth, () => false);
