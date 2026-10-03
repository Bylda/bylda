import {
  isInsightSufficient,
  type Brief,
  type BriefKind,
  type Call,
  type Insight,
  type Viewer,
} from "@/lib/data";

export type ReportScreen = "rep" | "team" | "behavior" | "outline";
export const detailKind: Record<ReportScreen, BriefKind> = {
  rep: "weekly_rep",
  team: "team",
  behavior: "behavior",
  outline: "weekly_manager",
};
export function detailAllowed(viewer: Viewer, screen: ReportScreen, subject?: string) {
  if (viewer.role === "rep") return screen === "rep" && subject === viewer.id;
  return ["manager", "owner", "admin"].includes(viewer.role);
}
/** The latest-by-kind fallback must never open a different subject. */
export function detailMatches(brief: Brief, screen: ReportScreen, subject?: string) {
  return (
    brief.kind === detailKind[screen] &&
    (screen === "outline" || (!!subject && brief.subjectId === subject))
  );
}
const causal = /\bcaus(?:e|ed|es|ing)\b/i;
const closedOutcome = /\b(?:won|win rate|closed|outcome|lost deals)\b/i;
const comparison = /\b(?:team|peer|rank(?:ing)?|top performers|best)\b/i;
export function statementAllowed(insight: Insight, subject?: string) {
  if (
    !isInsightSufficient(insight) ||
    !Number.isFinite(insight.sampleSize) ||
    insight.sampleSize <= 0
  )
    return false;
  // Brief has no n_closed/OutcomeAssociation linkage; sampleSize is not a closed-call count.
  if (closedOutcome.test(insight.headline + " " + (insight.body ?? ""))) return false;
  if (
    !insight.causalTested &&
    causal.test(insight.headline + " " + (subject ? "" : (insight.body ?? "")))
  )
    return false;
  if (subject)
    return (
      insight.kind !== "pattern" &&
      insight.affectedRepIds.length === 1 &&
      insight.affectedRepIds[0] === subject &&
      !comparison.test(insight.headline)
    );
  return true;
}
export function ownEvidence(insight: Insight, calls: Call[], subject: string) {
  const allowed = new Set(calls.filter((c) => c.repId === subject).map((c) => c.id));
  return insight.evidence.filter((e) => allowed.has(e.callId));
}
export const outlineSections = [
  "Executive summary",
  "This week’s biggest change",
  "Team behavior",
  "Rep changes",
  "Important objections",
  "Calls worth reviewing",
  "Methodology breakdown",
  "Coaching priorities",
  "Recommendations",
  "Evidence",
] as const;
export const outlineId = (index: number) => "report-outline-" + index;
