import type { Confidence, EvidenceRef, ID, ISODate, SignalTone } from "./common";

/** Dev Handoff `Insight` (21:110). `confidence` + `sampleSize` are REQUIRED — never render without. */
export type InsightKind = "pattern" | "regression" | "improvement" | "call" | "coaching" | "report";

export type InsightAction =
  | { type: "assign_coaching"; label: string; repId: ID; behaviorKey: string }
  | { type: "review_calls"; label: string; callIds: ID[] }
  | { type: "open_report"; label: string; reportId: ID }
  | { type: "open_behavior"; label: string; behaviorKey: string };

export type Insight = {
  id: ID;
  kind: InsightKind;
  headline: string;
  body: string | null;
  confidence: Confidence;
  sampleSize: number;
  /** e.g. "6 objections · 4 calls" */
  sampleLabel: string | null;
  affectedRepIds: ID[];
  evidence: EvidenceRef[];
  /** null when confidence is low — observation only. */
  action: InsightAction | null;
  /** The word "caused" may appear only when true. */
  causalTested: boolean;
  tone: SignalTone;
  tag: string | null;
  createdAt: ISODate;
};

/** H1–H6 Manager Home. */
export type HomeTab = "for_you" | "team_updates" | "calls" | "coaching" | "reports" | "mentions";
export type FeedItem = { id: ID; tab: HomeTab; insight: Insight };
export type AttentionItem = {
  id: ID;
  title: string;
  severity: "attention" | "regress";
  href: string;
};
export type HomeFeed = {
  items: FeedItem[];
  attention: AttentionItem[];
  coachQueue: { repId: ID; repName: string; behaviorName: string; reason: string }[];
};
