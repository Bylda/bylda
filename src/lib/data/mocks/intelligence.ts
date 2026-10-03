import type {
  Behavior,
  BehaviorDetail,
  BehaviorExample,
  BehaviorScore,
  CoachingFocus,
  EvidenceRef,
  HomeFeed,
  Insight,
  ObjectionStat,
  OutcomeAssociation,
  Pattern,
} from "../types";

export const EV_ACME: EvidenceRef = {
  callId: "call_acme",
  timestamp: "18:42",
  tSeconds: 1122,
  speaker: "prospect",
  speakerLabel: "PROSPECT",
  quote: "We already budgeted for another tool this year, and I’d need to see—",
};

export const BEHAVIORS: Behavior[] = [
  {
    key: "pause_after_objection",
    name: "Pause after objection",
    definition: "Seconds of silence after a prospect objection before the rep responds.",
    rule: { event: "objection", measure: "gap_seconds" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: true,
  },
  {
    key: "interrupting_during_objections",
    name: "Interrupting during objections",
    definition: "Rep speaks over the prospect while an objection is being voiced.",
    rule: { event: "interruption", during: "objection" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: false,
  },
  {
    key: "discovery_depth",
    name: "Discovery depth",
    definition: "Follow-up questions per discovery topic.",
    rule: { event: "question", per: "topic" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: true,
  },
  {
    key: "talk_share",
    name: "Talk share",
    definition: "Rep share of talk time.",
    rule: { measure: "talk_ratio" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: false,
  },
  // I1 "12 tracked" / I7 "12 BEHAVIORS TRACKED": the four above plus these eight. The first five
  // of these complete I7's nine drawn rows; demo_before_discovery and talking_over_prospects are
  // named by I3's patterns and call_length by I1's third card.
  {
    key: "early_discounting",
    name: "Early discounting",
    definition: "A discount is offered in the first 60 seconds of a price conversation.",
    rule: { event: "discount", within_seconds: 60 },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: false,
  },
  {
    key: "next_step_booked",
    name: "Next step booked",
    definition: "The call ends with a dated next step.",
    rule: { measure: "next_step_rate" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: true,
  },
  {
    key: "monologue_over_2min",
    name: "Monologue > 2 min",
    definition: "The rep speaks for more than two minutes without a break.",
    rule: { event: "monologue", min_seconds: 120 },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: false,
  },
  {
    key: "economic_buyer_by_s3",
    name: "Economic buyer by S3",
    definition: "The economic buyer is identified by stage 3.",
    rule: { event: "stage", stage: 3, requires: "economic_buyer" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: true,
  },
  {
    key: "recap_before_pricing",
    name: "Recap before pricing",
    definition: "The rep recaps the prospect’s needs before discussing price.",
    rule: { before: "pricing", requires: "recap" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: true,
  },
  {
    key: "demo_before_discovery",
    name: "Demo before discovery",
    definition: "Screen share starts before minute 5 with fewer than 3 questions asked.",
    rule: { event: "control_shift", before_seconds: 300, max_questions: 2 },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: false,
  },
  {
    key: "talking_over_prospects",
    name: "Talking over prospects",
    definition: "Speech overlap above 300ms while the prospect is talking in the demo stage.",
    rule: { event: "interruption", min_overlap_ms: 300, stage: "demo" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: false,
  },
  {
    key: "call_length",
    name: "Call length",
    definition: "Call duration in minutes.",
    rule: { measure: "duration_minutes" },
    methodologyId: "meth_meddic",
    enabled: true,
    higherIsBetter: false,
  },
];

const spark = (points: number[], yMin: number, yMax: number) => ({ points, yMin, yMax });

export const SCORES_JORDAN: BehaviorScore[] = [
  {
    behaviorKey: "pause_after_objection",
    name: "Pause after objection",
    value: 0.4,
    unit: "seconds",
    teamMedian: 1.3,
    direction: "regressing",
    confidence: "high",
    sampleSize: 41,
    sparkline: spark([0.9, 0.7, 0.6, 0.4], 0, 3),
  },
  {
    behaviorKey: "discovery_depth",
    name: "Discovery depth",
    value: 2.9,
    unit: "per_call",
    teamMedian: 2.4,
    direction: "improving",
    confidence: "medium",
    sampleSize: 18,
    sparkline: spark([2.2, 2.5, 2.7, 2.9], 0, 4),
  },
];

export const INSIGHTS: Insight[] = [
  {
    id: "ins_jordan_control",
    kind: "regression",
    headline: "Jordan lost control during 4 of 6 price objections this week.",
    body: "He responds within half a second, before the prospect finishes the concern. Top performers on this team pause ~1.8s and ask one clarifying question first.",
    confidence: "high",
    sampleSize: 6,
    sampleLabel: "n = 6 objections · 4 calls",
    callsAnalyzed: 41,
    affectedRepIds: ["u_jordan"],
    evidence: [EV_ACME],
    action: {
      type: "assign_coaching",
      label: "Assign coaching",
      repId: "u_jordan",
      behaviorKey: "pause_after_objection",
    },
    causalTested: false,
    tone: "regress",
    tag: "↓ Regressing",
    createdAt: "2026-09-30T08:04:00Z",
  },
  {
    id: "ins_discovery_won",
    kind: "pattern",
    headline: "Won deals contain 2.3× more second-level discovery questions.",
    body: "Associated with closed-won outcomes across the Mid-Market AE team this quarter.",
    confidence: "medium",
    // §13.13: a team pattern needs ≥ 50 calls — was n = 41 in Figma.
    sampleSize: 58,
    sampleLabel: "n = 58 calls",
    callsAnalyzed: 58,
    affectedRepIds: [],
    evidence: [],
    action: { type: "open_behavior", label: "View behavior", behaviorKey: "discovery_depth" },
    causalTested: false,
    tone: "info",
    tag: "Pattern",
    createdAt: "2026-09-29T09:00:00Z",
  },
  {
    id: "ins_alex_improving",
    kind: "improvement",
    headline: "Alex is pausing after objections — 3 of the last 4.",
    body: null,
    confidence: "low",
    sampleSize: 4,
    sampleLabel: "n = 4 objections · 14 calls",
    callsAnalyzed: 14,
    affectedRepIds: ["u_alex"],
    evidence: [],
    action: null,
    causalTested: false,
    tone: "improve",
    tag: "↑ Improving",
    createdAt: "2026-09-29T17:00:00Z",
  },
  {
    // Below REP_INSIGHT_MIN_CALLS on purpose — gated to the Y3 insufficient state.
    id: "ins_nina_early",
    kind: "improvement",
    headline: "Nina is asking more second-level discovery questions.",
    body: null,
    confidence: "low",
    sampleSize: 3,
    sampleLabel: "n = 3 calls",
    callsAnalyzed: 6,
    affectedRepIds: ["u_nina"],
    evidence: [],
    action: null,
    causalTested: false,
    tone: "improve",
    tag: "↑ Improving",
    createdAt: "2026-09-29T16:00:00Z",
  },
  // I1 "Important today · 3" — three team-level cards. `callsAnalyzed` is the team's analyzed
  // calls (486, the I1 header), as the Insight type documents for a team pattern; Figma's own
  // n ("19 won · 23 lost · 142 discovery calls", "20 deals") stays in sampleSize / sampleLabel.
  // `tag` carries the eyebrow category ("IMPORTANT TODAY · OUTCOME PATTERN"); Insight has no
  // category field. Appended after the originals so INSIGHTS[0..3] and the Home feed don't move.
  {
    id: "ins_discovery_outcome",
    kind: "pattern",
    headline:
      "Won deals contain more second-level discovery questions — 3.4 per call vs 1.6 in losses.",
    body: "Holds across 5 of 6 reps. Strongest in deals over $30k.",
    confidence: "high",
    sampleSize: 142,
    sampleLabel: "n = 19 won · 23 lost · 142 discovery calls",
    callsAnalyzed: 486,
    affectedRepIds: [],
    evidence: [],
    // Figma also has "Make it a team focus": InsightAction is one action, and assign_coaching
    // needs a repId. GAP: second action + team-level coaching focus.
    action: {
      type: "review_calls",
      label: "See 6 examples",
      callIds: [
        "call_acme",
        "call_brightline",
        "call_kestrel",
        "call_vela",
        "call_ferro",
        "call_lumen",
      ],
    },
    causalTested: false,
    tone: "info",
    tag: "Outcome pattern",
    createdAt: "2026-09-30T08:00:00Z",
  },
  {
    id: "ins_price_discount_losses",
    kind: "pattern",
    headline: "Losses with price objections often include a discount offered in the first 60s.",
    body: "7 of 9 such losses. Wins with price objections: 2 of 11.",
    confidence: "medium",
    sampleSize: 20,
    sampleLabel: "n = 20 deals",
    callsAnalyzed: 486,
    affectedRepIds: [],
    evidence: [],
    action: null,
    causalTested: false,
    tone: "regress",
    tag: "Objection pattern",
    createdAt: "2026-09-30T07:45:00Z",
  },
  {
    id: "ins_call_length",
    kind: "pattern",
    headline: "Calls longer than 42 minutes aren’t producing better outcomes for this team.",
    body: "Next-step rate 68% (<42m) vs 61% (>42m).",
    confidence: "medium",
    sampleSize: 486,
    sampleLabel: "n = 486 calls",
    callsAnalyzed: 486,
    affectedRepIds: [],
    evidence: [],
    action: null,
    causalTested: false,
    tone: "neutral",
    tag: "Call length",
    createdAt: "2026-09-30T07:30:00Z",
  },
  // I3 context panel — "SELECTED · DEMO BEFORE DISCOVERY". About Mia alone, so a rep could see
  // it; but kind "pattern" is always team-gated (insightScope), so it clears on the team's 486.
  // Figma's own sample (7 + 38 first calls = 45) is under the 50-call floor. The panel's
  // Frequency / Associated / Trend rows compare her with the team, so they stay out of this
  // rep-visible insight (CLAUDE.md §4).
  // GAP: nothing links this insight to pat_demo_before_discovery except behaviorKey + rep.
  {
    id: "ins_mia_demo_first",
    kind: "pattern",
    headline:
      "Mia started screen-share before minute 5 on 5 of her last 7 first calls, after fewer than 3 questions.",
    body: null,
    confidence: "medium",
    sampleSize: 7,
    sampleLabel: "n = 7 first calls",
    callsAnalyzed: 486,
    affectedRepIds: ["u_mia"],
    // Figma anchors this on Northwind; in the shared fixtures call_northwind is Nina's 40-second
    // partial call, so the clip points at Mia's own call_vela instead.
    evidence: [
      {
        callId: "call_vela",
        timestamp: "04:10",
        tSeconds: 250,
        speaker: "rep",
        speakerLabel: "MIA · VELA",
        quote: "Let me just show you — it’s easier than explaining.",
      },
    ],
    action: {
      type: "assign_coaching",
      label: "Create coaching focus for Mia",
      repId: "u_mia",
      behaviorKey: "demo_before_discovery",
    },
    causalTested: false,
    tone: "attention",
    tag: "Emerging",
    createdAt: "2026-09-30T07:15:00Z",
  },
];

/**
 * O3 — #objection-watch · Insights. Figma's samples (9 · 1 · 4 · 3 calls) are below the
 * §13.13 thresholds; these fixtures meet them (team ≥ 50, rep ≥ 10).
 */
export const ROOM_INSIGHTS: Record<string, Insight[]> = {
  room_objections: [
    {
      id: "ins_room_defend_price",
      kind: "pattern",
      headline: "Reps defend price before diagnosing the concern.",
      body: "Observed in 31% more price objections this week.",
      confidence: "high",
      sampleSize: 62,
      sampleLabel: "62 calls · 9 reps",
      callsAnalyzed: 62,
      affectedRepIds: [],
      evidence: [EV_ACME],
      action: {
        type: "open_behavior",
        label: "View behavior",
        behaviorKey: "pause_after_objection",
      },
      causalTested: false,
      tone: "info",
      tag: "Pattern · Confirmed",
      createdAt: "2026-09-30T08:00:00Z",
    },
    {
      id: "ins_room_mia_pause",
      kind: "improvement",
      headline: "Mia paused after “budget’s tight” and asked what it was compared to.",
      body: "First time this month — 3 of her last 5 price objections.",
      confidence: "medium",
      sampleSize: 5,
      sampleLabel: "n = 5 objections · 12 calls",
      callsAnalyzed: 12,
      affectedRepIds: ["u_mia"],
      evidence: [],
      action: {
        type: "open_behavior",
        label: "View behavior",
        behaviorKey: "pause_after_objection",
      },
      causalTested: false,
      tone: "improve",
      tag: "Improvement",
      createdAt: "2026-09-30T07:40:00Z",
    },
    {
      id: "ins_room_sarah_interrupt",
      kind: "regression",
      headline: "Interruptions during objections +18% vs her baseline.",
      body: null,
      confidence: "medium",
      sampleSize: 11,
      sampleLabel: "n = 11 calls since Fri",
      callsAnalyzed: 11,
      affectedRepIds: ["u_sarah"],
      evidence: [],
      action: {
        type: "assign_coaching",
        label: "Assign coaching",
        repId: "u_sarah",
        behaviorKey: "interrupting_during_objections",
      },
      causalTested: false,
      tone: "regress",
      tag: "Regression · Sarah Lin",
      createdAt: "2026-09-30T07:20:00Z",
    },
    {
      id: "ins_room_board_froze",
      kind: "pattern",
      headline: "“Board froze new tools” — a new objection phrase.",
      body: "Observed in 6 of 54 calls since Monday.",
      confidence: "low",
      sampleSize: 6,
      sampleLabel: "6 of 54 calls",
      callsAnalyzed: 54,
      affectedRepIds: [],
      evidence: [],
      action: null,
      causalTested: false,
      tone: "info",
      tag: "Pattern · Emerging",
      createdAt: "2026-09-30T07:00:00Z",
    },
  ],
};

export const HOME_FEED: HomeFeed = {
  items: [
    { id: "f1", tab: "for_you", insight: INSIGHTS[0] },
    { id: "f2", tab: "team_updates", insight: INSIGHTS[1] },
    { id: "f3", tab: "coaching", insight: INSIGHTS[2] },
  ],
  attention: [
    {
      id: "at1",
      title: "Aircall stopped syncing on Sep 27",
      severity: "regress",
      href: "/app/connections",
    },
  ],
  coachQueue: [
    {
      repId: "u_jordan",
      repName: "Jordan Reyes",
      behaviorName: "Pause after objection",
      reason: "4 of 6 price objections lost control",
    },
  ],
};

export const BEHAVIOR_DETAIL: BehaviorDetail = {
  behavior: BEHAVIORS[1],
  teamValue: 0.9,
  unit: "per_call",
  direction: "regressing",
  confidence: "high",
  sampleSize: 41,
  sparkline: spark([0.5, 0.6, 0.8, 0.9], 0, 2),
  byRep: [
    { repId: "u_jordan", repName: "Jordan Reyes", value: 1.5, n: 12, vsBaseline: null },
    { repId: "u_sarah", repName: "Sarah Lin", value: 1.2, n: 9, vsBaseline: null },
    { repId: "u_alex", repName: "Alex Morgan", value: 0.7, n: 11, vsBaseline: null },
    { repId: "u_theo", repName: "Theo Brandt", value: 0.2, n: 9, vsBaseline: null },
  ],
  evidence: [EV_ACME],
  callsWithBehavior: null,
  teamSize: null,
  repSparklines: {},
  projected: [],
  examples: { avoid: null, copy: null },
  recommendedChange: null,
  affectedCalls: [],
};

/** I2 · Figma 11:2 sample content — Interrupting during objections (Acme Revenue fixture). */
const INTERRUPTION_AVOID: BehaviorExample = {
  repId: "u_jordan",
  repName: "Jordan Reyes",
  account: "Acme Logistics",
  callId: "call_acme",
  timestamp: "18:44",
  tSeconds: 1124,
  summary:
    "CFO was mid-sentence on rollout risk; Jordan cut in with a 12% discount. The objection came back at 27:05.",
  clipSeconds: 40,
  moment: {
    callId: "call_acme",
    timestamp: "18:42",
    tSeconds: 1122,
    speaker: "prospect",
    speakerLabel: "ACME · CFO",
    quote: "Honestly the number isn’t the problem, it’s whether my team will actually—",
  },
};

const INTERRUPTION_COPY: BehaviorExample = {
  repId: "u_theo",
  repName: "Theo Brandt",
  account: "Brightline Freight",
  callId: "call_brightline",
  timestamp: "12:30",
  tSeconds: 750,
  summary:
    "Theo waited 2.1s after the objection, then asked what was driving it. The prospect named the real blocker (IT review).",
  clipSeconds: 40,
  moment: {
    callId: "call_brightline",
    timestamp: "12:30",
    tSeconds: 750,
    speaker: "prospect",
    speakerLabel: "BRIGHTLINE · VP OPS",
    quote: "It’s a lot more than we planned for this quarter…",
  },
};

export const BEHAVIOR_DETAIL_INTERRUPTING: BehaviorDetail = {
  behavior: BEHAVIORS[1],
  teamValue: 0.8,
  unit: "per_call",
  direction: "regressing",
  confidence: "medium",
  sampleSize: 142,
  sparkline: spark([0.7, 0.68, 0.72, 0.74, 0.76, 0.77, 0.8, 0.826], 0, 2),
  byRep: [
    { repId: "u_jordan", repName: "Jordan Reyes", value: 1.5, n: 12, vsBaseline: 0.8 },
    { repId: "u_sarah", repName: "Sarah Lin", value: 1.2, n: 9, vsBaseline: 0.5 },
    { repId: "u_alex", repName: "Alex Morgan", value: 0.7, n: 11, vsBaseline: -0.4 },
    { repId: "u_theo", repName: "Theo Brandt", value: 0.2, n: 6, vsBaseline: 0 },
  ],
  evidence: [INTERRUPTION_AVOID.moment],
  callsWithBehavior: { withBehavior: 38, total: 142 },
  teamSize: 9,
  repSparklines: {
    u_jordan: spark([0.7, 0.8, 0.9, 1.0, 1.1, 1.3, 1.4, 1.5], 0, 2),
    u_sarah: spark([0.7, 0.7, 0.8, 0.9, 1.0, 1.0, 1.1, 1.2], 0, 2),
    u_alex: spark([1.1, 1.1, 1.0, 0.9, 0.8, 0.8, 0.7, 0.7], 0, 2),
    u_theo: spark([0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.2, 0.2], 0, 2),
  },
  projected: [0.86, 0.9],
  examples: { avoid: INTERRUPTION_AVOID, copy: INTERRUPTION_COPY },
  recommendedChange:
    "Coach one move: after any objection, let the prospect finish, pause, and ask one clarifying question before responding.",
  affectedCalls: [
    {
      callId: "call_acme",
      account: "Acme Logistics",
      repName: "Jordan Reyes",
      timestamp: "18:44",
      tSeconds: 1124,
      count: 3,
    },
    {
      callId: "call_kestrel",
      account: "Kestrel Labs",
      repName: "Jordan Reyes",
      timestamp: "22:10",
      tSeconds: 1330,
      count: 2,
    },
    {
      callId: "call_ferro",
      account: "Ferro Metals",
      repName: "Sarah Lin",
      timestamp: "09:31",
      tSeconds: 571,
      count: 2,
    },
    {
      callId: "call_northwind",
      account: "Northwind Health",
      repName: "Sarah Lin",
      timestamp: "15:02",
      tSeconds: 902,
      count: 1,
    },
    {
      callId: "call_vela",
      account: "Vela Systems",
      repName: "Jordan Reyes",
      timestamp: "31:18",
      tSeconds: 1878,
      count: 2,
    },
  ],
};

/**
 * I1 team-behaviors table: one summary per shown row. Only the headline fields and `byRep` are
 * modelled (BEST / NEEDS WORK in I7 are the top and bottom of `byRep`, ranks as drawn; the values
 * are invented). Everything the table doesn't need is empty or null, not copied from another
 * behavior. GAP: Figma shows "2.6 / topic", "0.9 / obj", "52 / 48", "61% by stage 3" and a
 * 30-day change in mixed units ("+0.4", "+3 pts", "—"), and a "Watch" tag; BehaviorDetail has
 * a unit enum, a fixed range and a three-value direction, so those labels can't be carried.
 */
const summary = (
  behavior: Behavior,
  o: Pick<
    BehaviorDetail,
    "teamValue" | "unit" | "direction" | "confidence" | "sampleSize" | "sparkline" | "byRep"
  >,
): BehaviorDetail => ({
  behavior,
  ...o,
  evidence: [],
  callsWithBehavior: null,
  teamSize: 9,
  repSparklines: {},
  projected: [],
  examples: { avoid: null, copy: null },
  recommendedChange: null,
  affectedCalls: [],
});
const behaviorByKey = (key: string): Behavior => {
  const b = BEHAVIORS.find((x) => x.key === key);
  if (!b) throw new Error(`mock behavior missing: ${key}`);
  return b;
};
const rep = (repId: string, repName: string, value: number, n: number) => ({
  repId,
  repName,
  value,
  n,
  vsBaseline: null,
});

/** Keyed by behavior; a key with no entry falls back to BEHAVIOR_DETAIL in loadBehaviorDetail. */
export const BEHAVIOR_DETAILS: Record<string, BehaviorDetail> = {
  interrupting_during_objections: BEHAVIOR_DETAIL_INTERRUPTING,
  discovery_depth: summary(behaviorByKey("discovery_depth"), {
    teamValue: 2.6,
    unit: "count",
    direction: "improving",
    confidence: "high",
    sampleSize: 142,
    sparkline: spark([2.2, 2.3, 2.2, 2.4, 2.5, 2.6], 0, 4),
    byRep: [
      rep("u_theo", "Theo Brandt", 3.4, 9),
      rep("u_priya", "Priya Nair", 3.1, 8),
      rep("u_jordan", "Jordan Reyes", 2.9, 12),
      rep("u_alex", "Alex Morgan", 2.7, 11),
      rep("u_mia", "Mia Kowalski", 1.8, 7),
    ],
  }),
  next_step_booked: summary(behaviorByKey("next_step_booked"), {
    teamValue: 74,
    unit: "percent",
    direction: "steady",
    confidence: "high",
    sampleSize: 486,
    sparkline: spark([71, 70, 72, 72, 73, 74], 0, 100),
    byRep: [
      rep("u_priya", "Priya Nair", 84, 61),
      rep("u_theo", "Theo Brandt", 79, 52),
      rep("u_alex", "Alex Morgan", 76, 58),
      rep("u_jordan", "Jordan Reyes", 70, 66),
      rep("u_sarah", "Sarah Lin", 61, 49),
    ],
  }),
  talk_share: summary(behaviorByKey("talk_share"), {
    teamValue: 0.52,
    unit: "ratio",
    direction: "steady",
    confidence: "high",
    sampleSize: 486,
    sparkline: spark([0.54, 0.54, 0.53, 0.53, 0.52, 0.52], 0, 1),
    byRep: [
      rep("u_theo", "Theo Brandt", 0.41, 52),
      rep("u_priya", "Priya Nair", 0.47, 61),
      rep("u_alex", "Alex Morgan", 0.5, 58),
      rep("u_sarah", "Sarah Lin", 0.55, 49),
      rep("u_jordan", "Jordan Reyes", 0.64, 66),
    ],
  }),
  economic_buyer_by_s3: summary(behaviorByKey("economic_buyer_by_s3"), {
    teamValue: 61,
    unit: "percent",
    direction: "steady",
    confidence: "medium",
    sampleSize: 128,
    sparkline: spark([61, 55, 50, 56, 60, 61], 0, 100),
    byRep: [
      rep("u_theo", "Theo Brandt", 80, 15),
      rep("u_priya", "Priya Nair", 70, 14),
      rep("u_alex", "Alex Morgan", 62, 16),
      rep("u_jordan", "Jordan Reyes", 55, 18),
      rep("u_sarah", "Sarah Lin", 38, 13),
    ],
  }),
};

/**
 * I3 Emerging Patterns — the six rows Figma draws, in its order. I1's "Emerging patterns 5" is
 * the first five (open); the sixth is Resolved. Headline is Figma's row title: the rule line under
 * it ("Answers price objection < 1s, then discounts") and the lifecycle status (Confirmed ·
 * Emerging · Fading · Resolved) have no field on Pattern. GAP: status, rule text.
 * `sampleSize` is the CALLS column — 0 for the Resolved row, as drawn. Scope is by who it names:
 * one rep → rep, two or more → team, a methodology step → methodology.
 */
export const PATTERNS: Pattern[] = [
  {
    id: "pat_price_early",
    scope: "team",
    headline: "Defending price before diagnosing",
    confidence: "high",
    sampleSize: 9,
    firstSeenAt: "2026-09-08",
    behaviorKey: "pause_after_objection",
    affectedRepIds: ["u_jordan", "u_alex", "u_mia"],
  },
  {
    id: "pat_demo_before_discovery",
    scope: "rep",
    headline: "Demo before discovery",
    confidence: "medium",
    sampleSize: 5,
    firstSeenAt: "2026-09-21",
    behaviorKey: "demo_before_discovery",
    affectedRepIds: ["u_mia"],
  },
  {
    id: "pat_eb_stage3",
    scope: "methodology",
    headline: "Late economic-buyer contact",
    confidence: "low",
    sampleSize: 7,
    firstSeenAt: "2026-09-24",
    behaviorKey: "economic_buyer_by_s3",
    affectedRepIds: ["u_sarah", "u_nina"],
  },
  {
    id: "pat_pause_after_objection",
    scope: "team",
    headline: "Pausing after objections",
    confidence: "high",
    sampleSize: 23,
    firstSeenAt: "2026-08-02",
    behaviorKey: "pause_after_objection",
    affectedRepIds: ["u_theo", "u_priya"],
  },
  {
    id: "pat_roi_monologue",
    scope: "rep",
    headline: "Monologues on ROI",
    confidence: "medium",
    sampleSize: 4,
    firstSeenAt: "2026-07-30",
    behaviorKey: "monologue_over_2min",
    affectedRepIds: ["u_alex"],
  },
  {
    id: "pat_talking_over_demo",
    scope: "rep",
    headline: "Talking over prospects in demos",
    confidence: "high",
    sampleSize: 0,
    firstSeenAt: "2026-07-12",
    behaviorKey: "talking_over_prospects",
    affectedRepIds: ["u_nina"],
  },
];

/**
 * I4 Objections — the six rows Figma draws (I1 tab "Objections 6"). Labels, COUNT and HELD as
 * drawn; Unclassified has no HELD rate (—). `callCount` is not in Figma. GAP: BEST HANDLER and
 * WHAT WORKS have no field.
 */
export const OBJECTIONS: ObjectionStat[] = [
  {
    label: "Price / budget",
    count: 312,
    callCount: 186,
    handledWellRate: 0.46,
    trend: "regressing",
    sampleSize: 312,
    confidence: "high",
  },
  {
    label: "Timing / not now",
    count: 201,
    callCount: 148,
    handledWellRate: 0.63,
    trend: "steady",
    sampleSize: 201,
    confidence: "high",
  },
  {
    label: "Already have a tool",
    count: 144,
    callCount: 112,
    handledWellRate: 0.52,
    trend: "steady",
    sampleSize: 144,
    confidence: "high",
  },
  {
    label: "Implementation risk",
    count: 88,
    callCount: 71,
    handledWellRate: 0.38,
    trend: "regressing",
    sampleSize: 88,
    confidence: "medium",
  },
  {
    label: "Need to check with team",
    count: 131,
    callCount: 104,
    handledWellRate: 0.71,
    trend: "improving",
    sampleSize: 131,
    confidence: "high",
  },
  {
    label: "Unclassified",
    count: 47,
    callCount: 39,
    handledWellRate: null,
    trend: "steady",
    sampleSize: 47,
    confidence: "low",
  },
];

export const OUTCOMES: OutcomeAssociation[] = [
  {
    behaviorKey: "discovery_depth",
    behaviorName: "Discovery depth",
    outcome: "won",
    withRate: 0.41,
    withoutRate: 0.18,
    nWith: 22,
    nWithout: 19,
    nClosed: 41,
    confidence: "medium",
    confounders: ["deal size", "segment"],
  },
  {
    behaviorKey: "pause_after_objection",
    behaviorName: "Pause after objection",
    outcome: "advanced",
    withRate: 0.55,
    withoutRate: 0.3,
    nWith: 4,
    nWithout: 3,
    nClosed: 7,
    confidence: "low",
    confounders: [],
  },
  // I1 team-behaviors table, ASSOCIATED WITH column. Each outcome is its own row: "Stage advanced,
  // won" is two. "Weak signal" has no outcome of its own: it is a low-confidence, near-zero gap.
  {
    behaviorKey: "discovery_depth",
    behaviorName: "Discovery depth",
    outcome: "advanced",
    withRate: 0.64,
    withoutRate: 0.38,
    nWith: 214,
    nWithout: 272,
    nClosed: 486,
    confidence: "high",
    confounders: ["deal size", "segment"],
  },
  {
    behaviorKey: "interrupting_during_objections",
    behaviorName: "Interrupting during objections",
    outcome: "next_step_booked",
    withRate: 0.52,
    withoutRate: 0.78,
    nWith: 38,
    nWithout: 104,
    nClosed: 142,
    confidence: "medium",
    confounders: ["deal size"],
  },
  {
    behaviorKey: "next_step_booked",
    behaviorName: "Next step booked",
    outcome: "advanced",
    withRate: 0.7,
    withoutRate: 0.29,
    nWith: 360,
    nWithout: 126,
    nClosed: 486,
    confidence: "high",
    confounders: ["segment"],
  },
  {
    behaviorKey: "talk_share",
    behaviorName: "Talk share",
    outcome: "advanced",
    withRate: 0.47,
    withoutRate: 0.45,
    nWith: 240,
    nWithout: 246,
    nClosed: 486,
    confidence: "low",
    confounders: [],
  },
  {
    behaviorKey: "economic_buyer_by_s3",
    behaviorName: "Economic buyer by S3",
    outcome: "won",
    withRate: 0.44,
    withoutRate: 0.19,
    nWith: 25,
    nWithout: 17,
    nClosed: 42,
    confidence: "medium",
    confounders: ["deal size"],
  },
];

export const COACHING: CoachingFocus[] = [
  {
    id: "cf_jordan_pause",
    repId: "u_jordan",
    repName: "Jordan Reyes",
    behaviorKey: "pause_after_objection",
    behaviorName: "Pause after objection",
    note: "Pause · ask “what’s behind that?” · then answer.",
    evidence: [EV_ACME],
    metric: "seconds before responding to an objection",
    baseline: 0.4,
    target: 1.5,
    judgeAfter: { calls: 5, date: null },
    status: "measuring",
    result: null,
    assignedById: "u_dana",
    assignedAt: "2026-09-29T10:00:00Z",
    acknowledgedAt: "2026-09-29T12:00:00Z",
  },
  {
    id: "cf_alex_pause",
    repId: "u_alex",
    repName: "Alex Morgan",
    behaviorKey: "pause_after_objection",
    behaviorName: "Pause after objection",
    note: "Hold the pause, then one clarifying question.",
    evidence: [],
    metric: "seconds before responding to an objection",
    baseline: 0.6,
    target: 1.5,
    judgeAfter: { calls: 5, date: null },
    status: "held",
    result: {
      value: 1.8,
      baseline: 0.6,
      target: 1.5,
      verdict: "held",
      measuredOn: "2026-09-25T00:00:00Z",
      sampleSize: 5,
    },
    assignedById: "u_dana",
    assignedAt: "2026-09-10T10:00:00Z",
    acknowledgedAt: "2026-09-10T11:00:00Z",
  },
  {
    id: "cf_mia_eb",
    repId: "u_mia",
    repName: "Mia Kowalski",
    behaviorKey: "discovery_depth",
    behaviorName: "Discovery depth",
    note: "Cover Metrics before demo.",
    evidence: [],
    metric: "follow-ups per topic",
    baseline: 1.9,
    target: 2.5,
    judgeAfter: { calls: null, date: "2026-10-10T00:00:00Z" },
    status: "assigned",
    result: null,
    assignedById: "u_dana",
    assignedAt: "2026-09-30T08:30:00Z",
    acknowledgedAt: null,
  },
];
