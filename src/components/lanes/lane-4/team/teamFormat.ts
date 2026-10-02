import { useParams } from "@tanstack/react-router";
import type { BehaviorScore, Call, CoachingFocus, Methodology, Person, Team } from "@/lib/data";
import { formatScore } from "../rep/repFormat";

/** Non-component helpers for the Team screens T1–T7, T13. Pure functions of data-layer values. */

/** `$teamId` from the route. T2–T7 all live under /app/team/$teamId. */
export function useTeamIdParam(): string {
  const { teamId = "" } = useParams({ strict: false }) as { teamId?: string };
  return teamId;
}

export type Unit = BehaviorScore["unit"];

// GAP: `RepComparisonRow` and `CoachingFocus` carry no unit (LANE_REQUESTS #33 c). Until they do,
// a behavior's unit is looked up here by key; an unknown key prints the bare number.
const UNIT_BY_BEHAVIOR: Record<string, Unit> = {
  pause_after_objection: "seconds",
  interrupting_during_objections: "per_call",
  discovery_depth: "per_call",
  talk_share: "ratio",
};

export const unitOf = (behaviorKey: string): Unit | null => UNIT_BY_BEHAVIOR[behaviorKey] ?? null;

/** A behavior value in its unit, without the "/ call" suffix (table cells carry it in the row name). */
export function formatValue(value: number, behaviorKey: string): string {
  const unit = unitOf(behaviorKey);
  if (!unit) return `${value}`;
  if (unit === "per_call") return value.toFixed(1);
  return formatScore(value, unit);
}

/** "0.4s → 0.9s" once there is a result; null while the focus is still running. */
export function focusChange(f: CoachingFocus): string | null {
  if (!f.result) return null;
  return `${formatValue(f.result.baseline, f.behaviorKey)} → ${formatValue(f.result.value, f.behaviorKey)}`;
}

/** "9 reps · Manager: Dana Whitfield · MEDDIC" — the T2–T7 header line. */
export function teamMeta(
  team: Team,
  manager: Person | undefined,
  methodology: Methodology | undefined,
  long: boolean,
): string {
  const reps = `${team.repIds.length} ${team.repIds.length === 1 ? "rep" : "reps"}`;
  const method = methodology
    ? long
      ? `Methodology: ${methodology.template.toUpperCase()} (${methodology.template === "custom" ? "custom" : "template"})`
      : methodology.template.toUpperCase()
    : null;
  // GAP: team creation date ("Since Jul 2026") — `Team` has none (LANE_REQUESTS #33 a)
  return [reps, manager ? `Manager: ${manager.name}` : null, method].filter(Boolean).join(" · ");
}

const WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
/** Figma headlines spell small counts out: "Two reps need you this week." */
export const countWord = (n: number) => WORDS[n] ?? `${n}`;

export const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);

/** Calls belong to a team through their rep — `CallFilter.teamId` isn't applied by every source. */
export const callsOfTeam = (calls: Call[], team: Team) =>
  calls.filter((c) => team.repIds.includes(c.repId));

/** Median of a list; null when empty. */
export function median(xs: number[]): number | null {
  if (xs.length === 0) return null;
  const s = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const DAY_MS = 86_400_000;
export const daysBetween = (fromIso: string, toIso: string) =>
  Math.max(0, Math.round((new Date(toIso).getTime() - new Date(fromIso).getTime()) / DAY_MS));
