import type { Confidence, Direction, EvidenceRef, ID, Sparkline } from "./common";

/** Dev Handoff `BehavioralEvent` (21:102) — the atomic layer, immutable, versioned by detector. */
export type BehavioralEventType =
  | "objection"
  | "interruption"
  | "question"
  | "monologue"
  | "pause"
  | "sentiment_shift"
  | "control_shift"
  | "stage";

export type BehavioralEvent = {
  id: ID;
  callId: ID;
  type: BehavioralEventType;
  /** seconds */
  tStart: number;
  tEnd: number;
  speaker: "rep" | "prospect" | "other";
  attrs: Record<string, string | number | boolean | null>;
  detectorVersion: string;
};

/** Dev Handoff `Behavior` (21:106). */
export type Behavior = {
  key: string;
  name: string;
  definition: string;
  rule: Record<string, unknown>;
  methodologyId: ID | null;
  enabled: boolean;
  higherIsBetter: boolean;
};

/** I2 — one worked moment: an example to avoid or to copy (LANE_REQUESTS #26). */
export type BehaviorExample = {
  repId: ID;
  repName: string;
  account: string;
  callId: ID;
  /** "18:44" — where the moment starts. */
  timestamp: string;
  tSeconds: number;
  /** What happened, one or two sentences. */
  summary: string;
  /** Length of the playable clip, seconds; null when no clip exists. */
  clipSeconds: number | null;
  /** The quote shown on the Evidence Block. */
  moment: EvidenceRef;
};

/** I2 "AFFECTED CALLS" row — one call where the behavior was observed. */
export type AffectedCall = {
  callId: ID;
  account: string;
  repName: string;
  timestamp: string;
  tSeconds: number;
  /** Times the behavior occurred in that call. */
  count: number;
};

/** I2 Behavior Detail. */
export type BehaviorDetail = {
  behavior: Behavior;
  teamValue: number;
  unit: "ratio" | "seconds" | "per_call" | "percent" | "count";
  direction: Direction;
  confidence: Confidence;
  sampleSize: number;
  sparkline: Sparkline;
  byRep: {
    repId: ID;
    repName: string;
    value: number;
    n: number;
    /** Signed change vs the rep's own baseline (same unit as `value`); null when unknown. */
    // GAP: no baseline per rep/behavior in the backend (C-03)
    vsBaseline: number | null;
  }[];
  evidence: EvidenceRef[];
  /** "38 / 142" — calls with the behavior over analyzed calls. null when not computed. */
  // GAP: needs BehavioralEvent aggregation (C-02/C-03)
  callsWithBehavior: { withBehavior: number; total: number } | null;
  /** Reps on the team, for "4 of 9". null when unknown. */
  // GAP: C-03
  teamSize: number | null;
  /** Per-rep trend on the same fixed y-range as `sparkline`, keyed by repId. */
  // GAP: C-03
  repSparklines: Record<ID, Sparkline>;
  /** Projected continuation of `sparkline` (same y-range). Empty = no projection. */
  // GAP: projection is computed server-side in C-03
  projected: number[];
  /** Example to avoid / example to copy. Either may be absent. */
  // GAP: C-02
  examples: { avoid: BehaviorExample | null; copy: BehaviorExample | null };
  /** One-sentence recommended change. null → no recommendation (observation only). */
  // GAP: C-02
  recommendedChange: string | null;
  /** Calls where the behavior was observed, newest first, capped by the source. */
  // GAP: C-02
  affectedCalls: AffectedCall[];
};

/** I3 Emerging Patterns / I7–I11 pattern rows. */
export type Pattern = {
  id: ID;
  scope: "team" | "rep" | "prospect" | "outcome" | "methodology";
  headline: string;
  confidence: Confidence;
  sampleSize: number;
  firstSeenAt: string;
  behaviorKey: string | null;
  affectedRepIds: ID[];
};

/** I4 Objections — frequency view (buildable today from call_insights.objections). */
export type ObjectionStat = {
  label: string;
  count: number;
  callCount: number;
  handledWellRate: number | null;
  trend: Direction;
  sampleSize: number;
  confidence: Confidence;
};
