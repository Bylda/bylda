import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { DataCtx } from "../core/context";
import { setSourceOverride } from "../core/source";
import { loadInsights } from "../insights/hooks";
import {
  loadBehaviorDetail,
  loadBehaviors,
  loadObjectionStats,
  loadPatterns,
  loadTeamBehaviors,
} from "../behaviors/hooks";
import { loadOutcomeAssociations } from "../outcomes/hooks";
import { BEHAVIOR_DETAILS } from "../mocks/intelligence";
import { OUTCOME_MIN_CLOSED, patternShowsConfidence, type GatedInsight } from "../types";

/**
 * Fixtures match Figma I1 Intelligence Home (27:298) and I3 Emerging Patterns (27:567) in row
 * count and variety. Where a frame draws fewer rows than its own total ("12 tracked · 5 shown"),
 * the fixture holds the total and the screen shows the slice.
 */
const DANA: DataCtx = {
  userId: "u_dana",
  orgId: "org_acme",
  workspaceId: "ws_acme",
  teamId: "team_mm",
  role: "manager",
};
const JORDAN: DataCtx = { ...DANA, userId: "u_jordan", role: "rep" };
const MIA: DataCtx = { ...DANA, userId: "u_mia", role: "rep" };

const idOf = (g: GatedInsight) => (g.state === "insight" ? g.insight.id : g.id);

beforeAll(() => setSourceOverride("mock"));
afterAll(() => setSourceOverride(null));

describe("I3 Emerging Patterns — the six drawn rows", () => {
  it("has the rows in Figma's order, with a name per row", async () => {
    const rows = await loadPatterns(DANA);
    expect(rows.map((p) => p.headline)).toEqual([
      "Defending price before diagnosing",
      "Demo before discovery",
      "Late economic-buyer contact",
      "Pausing after objections",
      "Monologues on ROI",
      "Talking over prospects in demos",
    ]);
    expect(new Set(rows.map((p) => p.id)).size).toBe(6);
  });

  it("matches the CALLS, CONF., FIRST SEEN and REPS columns", async () => {
    const rows = await loadPatterns(DANA);
    expect(rows.map((p) => p.sampleSize)).toEqual([34, 5, 7, 38, 4, 0]);
    expect(rows.map((p) => p.confidence)).toEqual([
      "high",
      "medium",
      "low",
      "high",
      "medium",
      "high",
    ]);
    expect(rows.map((p) => p.firstSeenAt)).toEqual([
      "2026-09-08",
      "2026-09-21",
      "2026-09-24",
      "2026-08-02",
      "2026-07-30",
      "2026-07-12",
    ]);
    expect(rows.map((p) => p.affectedRepIds)).toEqual([
      ["u_jordan", "u_alex", "u_mia"],
      ["u_mia"],
      ["u_sarah", "u_nina"],
      ["u_theo", "u_priya"],
      ["u_alex"],
      ["u_nina"],
    ]);
  });

  it("covers every confidence level and several scopes", async () => {
    const rows = await loadPatterns(DANA);
    expect(new Set(rows.map((p) => p.confidence))).toEqual(new Set(["low", "medium", "high"]));
    expect(new Set(rows.map((p) => p.scope))).toEqual(new Set(["team", "rep", "methodology"]));
    expect((await loadPatterns(DANA, "rep")).map((p) => p.id)).toEqual([
      "pat_demo_before_discovery",
      "pat_roi_monologue",
      "pat_talking_over_demo",
    ]);
  });

  it("every pattern points at a tracked behavior", async () => {
    const keys = new Set((await loadBehaviors(DANA)).map((b) => b.key));
    for (const p of await loadPatterns(DANA)) expect(keys.has(p.behaviorKey ?? "")).toBe(true);
  });

  it("is never served to a rep", async () => {
    await expect(loadPatterns(JORDAN)).rejects.toThrow();
  });
});

describe("I3 rulings over Figma", () => {
  it("tab counts come from the six drawn rows, not Figma's 11", async () => {
    const rows = await loadPatterns(DANA);
    const count = (s: string) => rows.filter((p) => p.status === s).length;
    expect({
      all: rows.length,
      emerging: count("emerging"),
      confirmed: count("confirmed"),
      fading: count("fading"),
      resolved: count("resolved"),
    }).toEqual({ all: 6, emerging: 2, confirmed: 2, fading: 1, resolved: 1 });
    // I1 "Emerging patterns 5" is the open ones
    expect(rows.filter((p) => p.status !== "resolved")).toHaveLength(5);
  });

  it("Confirmed rows have n ≥ 30 and Emerging rows n < 20, as the lifecycle legend says", async () => {
    for (const p of await loadPatterns(DANA)) {
      if (p.status === "confirmed") expect(p.sampleSize).toBeGreaterThanOrEqual(30);
      if (p.status === "emerging") expect(p.sampleSize).toBeLessThan(20);
    }
  });

  it("the Resolved row has 0 calls and shows no confidence; every other row does", async () => {
    const rows = await loadPatterns(DANA);
    const resolved = rows.find((p) => p.status === "resolved")!;
    expect(resolved.headline).toBe("Talking over prospects in demos");
    expect(resolved.sampleSize).toBe(0);
    expect(patternShowsConfidence(resolved)).toBe(false);
    expect(rows.filter((p) => !patternShowsConfidence(p))).toEqual([resolved]);
  });

  it("every row has its rule line, and only Demo before discovery has the selected panel", async () => {
    const rows = await loadPatterns(DANA);
    expect(rows.map((p) => p.rule)).toEqual([
      "Answers price objection < 1s, then discounts",
      "Screen share before 5 min, < 3 questions",
      "EB not on a call by stage 3",
      "≥ 1.5s before responding",
      "> 2 min rep speech on value",
      "Overlap > 300ms in demo stage",
    ]);
    expect(rows.filter((p) => p.selected).map((p) => p.id)).toEqual(["pat_demo_before_discovery"]);
    expect(rows[1].selected).toEqual({
      frequency: "5 of 7 Mia first calls · 1 of 38 rest of team",
      associatedOutcome: "Next step 40% vs team 74%",
      trend: "New this month",
    });
  });
});

describe("Interruptions is 0.9 everywhere", () => {
  it("I2 detail, I1/I7 row and the series all agree, and I2 still reads +18%", async () => {
    const detail = (await loadBehaviorDetail(DANA, "interrupting_during_objections"))!;
    const row = (await loadTeamBehaviors(DANA)).find(
      (r) => r.behaviorKey === "interrupting_during_objections",
    )!;
    expect(detail.teamValue).toBe(0.9);
    expect(row.teamValue).toBe(0.9);
    expect(row.valueLabel).toBe("0.9 / obj");
    const pts = detail.sparkline.points;
    expect(pts.at(-1)).toBe(0.9);
    // the lane derives I2's "TEAM TREND · 30D" from first → last
    expect(Math.round(((pts.at(-1)! - pts[0]) / pts[0]) * 100)).toBe(18);
    expect(row.changeLabel).toBe("+18%");
    expect(detail.projected.every((v) => v > 0.9)).toBe(true);
  });
});

describe("team behaviors list (I1 table)", () => {
  it("returns the 12 tracked behaviors, Figma's five first", async () => {
    const rows = await loadTeamBehaviors(DANA);
    expect(rows).toHaveLength(12);
    expect(new Set(rows.map((r) => r.behaviorKey)).size).toBe(12);
    expect(rows.slice(0, 5).map((r) => r.behaviorKey)).toEqual([
      "discovery_depth",
      "interrupting_during_objections",
      "next_step_booked",
      "talk_share",
      "economic_buyer_by_s3",
    ]);
    const tracked = (await loadBehaviors(DANA)).map((b) => b.key).sort();
    expect(rows.map((r) => r.behaviorKey).sort()).toEqual(tracked);
  });

  it("the five shown rows carry Figma's labels, change and direction", async () => {
    const rows = (await loadTeamBehaviors(DANA)).slice(0, 5);
    expect(rows.map((r) => [r.valueLabel, r.changeLabel, r.direction])).toEqual([
      ["2.6 / topic", "+0.4", "improving"],
      ["0.9 / obj", "+18%", "regressing"],
      ["74%", "+3 pts", "steady"],
      ["52 / 48", "−2 pts", "steady"],
      ["61% by stage 3", "—", "steady"],
    ]);
  });

  it("the shown rows are the same numbers as their details", async () => {
    for (const r of (await loadTeamBehaviors(DANA)).slice(0, 5)) {
      const d = BEHAVIOR_DETAILS[r.behaviorKey];
      expect([r.teamValue, r.unit, r.direction, r.sparkline]).toEqual([
        d.teamValue,
        d.unit,
        d.direction,
        d.sparkline,
      ]);
    }
  });

  it("every row has a sample size, a confidence and a fixed y-range its points sit inside", async () => {
    for (const r of await loadTeamBehaviors(DANA)) {
      expect(r.sampleSize).toBeGreaterThan(0);
      expect(["low", "medium", "high"]).toContain(r.confidence);
      expect(r.sparkline.yMax).toBeGreaterThan(r.sparkline.yMin);
      for (const p of r.sparkline.points) {
        expect(p).toBeGreaterThanOrEqual(r.sparkline.yMin);
        expect(p).toBeLessThanOrEqual(r.sparkline.yMax);
      }
    }
  });

  it("is never served to a rep", async () => {
    await expect(loadTeamBehaviors(JORDAN)).rejects.toThrow();
  });
});

describe("I3 selected pattern — Demo before discovery", () => {
  it("has the evidence quote, the Medium confidence and the coaching action for Mia", async () => {
    const mia = (await loadInsights(DANA)).find((g) => idOf(g) === "ins_mia_demo_first");
    if (mia?.state !== "insight") throw new Error("gated");
    const i = mia.insight;
    expect(i.confidence).toBe("medium");
    expect(i.sampleSize).toBe(7);
    expect(i.evidence).toHaveLength(1);
    expect(i.evidence[0]).toMatchObject({ timestamp: "04:10", speaker: "rep" });
    expect(i.action).toMatchObject({ type: "assign_coaching", repId: "u_mia" });
  });

  it("is Mia's own and nobody else's: a peer rep never sees it", async () => {
    const ids = (c: DataCtx) => loadInsights(c).then((r) => r.map(idOf));
    expect(await ids(MIA)).toContain("ins_mia_demo_first");
    expect(await ids(JORDAN)).not.toContain("ins_mia_demo_first");
  });
});

describe("I1 Intelligence Home", () => {
  it("has three Important-today cards that clear the gate, one per tone", async () => {
    const all = await loadInsights(DANA);
    const cards = ["ins_discovery_outcome", "ins_price_discount_losses", "ins_call_length"].map(
      (id) => all.find((g) => idOf(g) === id),
    );
    for (const g of cards) expect(g?.state).toBe("insight");
    const ins = cards.map((g) => (g?.state === "insight" ? g.insight : null));
    expect(ins.map((i) => i?.confidence)).toEqual(["high", "medium", "medium"]);
    expect(ins.map((i) => i?.tone)).toEqual(["info", "regress", "neutral"]);
    expect(ins.map((i) => i?.sampleLabel)).toEqual([
      "n = 19 won · 23 lost · 142 discovery calls",
      "n = 20 deals",
      "n = 486 calls",
    ]);
    expect(ins.map((i) => i?.action?.type ?? null)).toEqual(["review_calls", null, null]);
  });

  it("every insight carries a sample size, and none is causal", async () => {
    for (const g of await loadInsights(DANA)) {
      if (g.state !== "insight") continue;
      expect(g.insight.sampleSize).toBeGreaterThan(0);
      expect(g.insight.causalTested).toBe(false);
      expect(g.insight.headline).not.toMatch(/\bcaus/i);
    }
  });

  it("a rep sees none of the team cards", async () => {
    const seen = (await loadInsights(JORDAN)).map(idOf);
    for (const id of ["ins_discovery_outcome", "ins_price_discount_losses", "ins_call_length"])
      expect(seen).not.toContain(id);
  });

  it("tracks 12 behaviors, all enabled, and 6 objection types", async () => {
    const b = await loadBehaviors(DANA);
    expect(b).toHaveLength(12);
    expect(b.every((x) => x.enabled)).toBe(true);
    expect(new Set(b.map((x) => x.key)).size).toBe(12);
    expect(await loadObjectionStats(DANA)).toHaveLength(6);
  });

  it("the 5 shown behaviors differ: both directions, three shapes, a fixed range each", async () => {
    const shown = [
      "discovery_depth",
      "interrupting_during_objections",
      "next_step_booked",
      "talk_share",
      "economic_buyer_by_s3",
    ];
    const rows = await Promise.all(shown.map((k) => loadBehaviorDetail(DANA, k)));
    const d = rows.map((r) => r!);
    expect(d.map((r) => r.behavior.key)).toEqual(shown);
    expect(d.map((r) => r.direction)).toEqual([
      "improving",
      "regressing",
      "steady",
      "steady",
      "steady",
    ]);
    const first = (r: (typeof d)[number]) => r.sparkline.points[0];
    const last = (r: (typeof d)[number]) => r.sparkline.points.at(-1)!;
    expect(last(d[0])).toBeGreaterThan(first(d[0])); // discovery rises
    expect(last(d[1])).toBeGreaterThan(first(d[1])); // interruptions rise
    expect(last(d[3])).toBeLessThan(first(d[3])); // talk share falls
    expect(last(d[4])).toBe(first(d[4])); // economic buyer ends where it began
    for (const r of d) {
      for (const p of r.sparkline.points) {
        expect(p).toBeGreaterThanOrEqual(r.sparkline.yMin);
        expect(p).toBeLessThanOrEqual(r.sparkline.yMax);
      }
      expect(r.byRep.length).toBeGreaterThan(1);
    }
    // two different behaviors never share one fixture any more
    expect(new Set(d.map((r) => r.teamValue)).size).toBe(5);
  });

  it("each shown behavior has an outcome association that clears the n ≥ 30 floor", async () => {
    for (const key of [
      "discovery_depth",
      "interrupting_during_objections",
      "next_step_booked",
      "talk_share",
      "economic_buyer_by_s3",
    ]) {
      const rows = await loadOutcomeAssociations(DANA, key);
      expect(rows.length).toBeGreaterThan(0);
      for (const r of rows) expect(r.nClosed).toBeGreaterThanOrEqual(OUTCOME_MIN_CLOSED);
    }
    expect((await loadOutcomeAssociations(DANA, "discovery_depth")).map((r) => r.outcome)).toEqual([
      "won",
      "advanced",
    ]);
  });
});
