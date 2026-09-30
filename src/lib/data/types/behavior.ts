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

/** I2 Behavior Detail. */
export type BehaviorDetail = {
  behavior: Behavior;
  teamValue: number;
  unit: "ratio" | "seconds" | "per_call" | "percent" | "count";
  direction: Direction;
  confidence: Confidence;
  sampleSize: number;
  sparkline: Sparkline;
  byRep: { repId: ID; repName: string; value: number; n: number }[];
  evidence: EvidenceRef[];
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
