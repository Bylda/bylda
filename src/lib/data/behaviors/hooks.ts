import { assertNotRep, scopeRepId, type DataCtx } from "../core/context";
import { useCtxQuery } from "../core/hook";
import { isEmptyArray } from "../core/query";
import { resolveSource } from "../core/source";
import {
  BEHAVIORS,
  BEHAVIOR_DETAIL,
  OBJECTIONS,
  PATTERNS,
  SCORES_JORDAN,
} from "../mocks/intelligence";
import type { Behavior, BehaviorDetail, BehaviorScore, ObjectionStat, Pattern } from "../types";
import { fetchBehaviorScores, fetchBehaviors, fetchObjectionRows, fetchPatterns } from "./fetchers";
import { aggregateObjections, mapBehavior, mapBehaviorScore, mapPattern } from "./map";
import { behaviorKeys } from "./queryKeys";
import { OBJECTIONS_SOURCE, SOURCE } from "./source";

export async function loadBehaviors(ctx: DataCtx): Promise<Behavior[]> {
  void ctx;
  if (resolveSource(SOURCE) === "mock") return BEHAVIORS;
  return (await fetchBehaviors()).map(mapBehavior);
}

/** I2 — team-wide, so never served to a rep. */
export async function loadBehaviorDetail(
  ctx: DataCtx,
  key: string,
): Promise<BehaviorDetail | null> {
  assertNotRep(ctx, "team behavior detail");
  if (resolveSource(SOURCE) === "mock") {
    const b = BEHAVIORS.find((x) => x.key === key);
    return b ? { ...BEHAVIOR_DETAIL, behavior: b } : null;
  }
  await fetchBehaviorScores();
  return null;
}

/** T9/T12/R2 — a rep only ever gets their own scores. */
export async function loadRepScores(ctx: DataCtx, repId: string): Promise<BehaviorScore[]> {
  const id = scopeRepId(ctx, repId);
  if (resolveSource(SOURCE) === "mock")
    return id === "u_jordan"
      ? SCORES_JORDAN
      : SCORES_JORDAN.map((s) => ({ ...s, value: +(s.value * 1.2).toFixed(1) }));
  return (await fetchBehaviorScores()).map(mapBehaviorScore);
}

/** I1/I3/I7–I11 — team-wide patterns, managers only. */
export async function loadPatterns(ctx: DataCtx, scope?: Pattern["scope"]): Promise<Pattern[]> {
  assertNotRep(ctx, "team patterns");
  if (resolveSource(SOURCE) === "mock") return PATTERNS.filter((p) => !scope || p.scope === scope);
  return (await fetchPatterns()).map(mapPattern).filter((p) => !scope || p.scope === scope);
}

/** I4 — hybrid: frequency is real (call_insights.objections), handled-well + trend are GAP. */
export async function loadObjectionStats(ctx: DataCtx): Promise<ObjectionStat[]> {
  assertNotRep(ctx, "team objection stats");
  if (resolveSource(OBJECTIONS_SOURCE) === "mock") return OBJECTIONS;
  if (!ctx.orgId) return [];
  return aggregateObjections(await fetchObjectionRows(ctx.orgId));
}

export const useBehaviors = () => useCtxQuery(behaviorKeys.list(), loadBehaviors, isEmptyArray);
export const useBehaviorDetail = (key: string) =>
  useCtxQuery(
    behaviorKeys.detail(key),
    (ctx) => loadBehaviorDetail(ctx, key),
    (d) => d === null,
  );
export const useRepScores = (repId: string) =>
  useCtxQuery(behaviorKeys.scores(repId), (ctx) => loadRepScores(ctx, repId), isEmptyArray);
export const usePatterns = (scope?: Pattern["scope"]) =>
  useCtxQuery(
    behaviorKeys.patterns(scope ?? "all"),
    (ctx) => loadPatterns(ctx, scope),
    isEmptyArray,
  );
export const useObjectionStats = () =>
  useCtxQuery(behaviorKeys.objections(), loadObjectionStats, isEmptyArray);
