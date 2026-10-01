import { renderToString } from "react-dom/server";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ForbiddenForRoleError, setSourceOverride, type DataCtx } from "@/lib/data";
import { loadBehaviorDetail } from "@/lib/data/behaviors/hooks";
import type { BehaviorDetail } from "@/lib/data";
import { BehaviorDetailView } from "../I2BehaviorDetailInterruptingDuringObjections";
import { RepsAffected } from "./RepsAffected";
import { project } from "./format";

const ctx = (role: DataCtx["role"]): DataCtx => ({
  userId: role === "rep" ? "u_jordan" : "u_dana",
  orgId: "org_acme",
  workspaceId: "ws_acme",
  teamId: "team_mm",
  role,
});

beforeAll(() => setSourceOverride("mock"));
afterAll(() => setSourceOverride(null));

const idle = { data: undefined, isLoading: false, error: null, isEmpty: false };

describe("Behavior Detail — reps affected is manager-only", () => {
  it("resolves pause_after_objection for a manager, with the by-rep list", async () => {
    const d = await loadBehaviorDetail(ctx("manager"), "pause_after_objection");
    expect(d?.behavior.key).toBe("pause_after_objection");
    expect(d?.byRep.length).toBeGreaterThan(0);
  });

  it("returns null for an unknown id (screen renders the error state)", async () => {
    expect(await loadBehaviorDetail(ctx("manager"), "nope")).toBeNull();
  });

  it("refuses a rep at the data layer", async () => {
    await expect(loadBehaviorDetail(ctx("rep"), "pause_after_objection")).rejects.toBeInstanceOf(
      ForbiddenForRoleError,
    );
  });

  it("a rep's view renders no rep names and no by-rep section", async () => {
    const full = (await loadBehaviorDetail(
      ctx("manager"),
      "pause_after_objection",
    )) as BehaviorDetail;
    const html = renderToString(
      <BehaviorDetailView
        detail={{ ...idle, error: new ForbiddenForRoleError("team behavior detail", "rep") }}
        outcomes={idle}
        behaviorKey="pause_after_objection"
      />,
    );
    expect(html).toContain("Restricted");
    expect(html).not.toContain("BY REP");
    for (const r of full.byRep) expect(html).not.toContain(r.repName);
  });

  it("the by-rep list names every rep for a manager", async () => {
    const full = (await loadBehaviorDetail(
      ctx("manager"),
      "pause_after_objection",
    )) as BehaviorDetail;
    const html = renderToString(<RepsAffected detail={full} />);
    for (const r of full.byRep) expect(html).toContain(r.repName);
  });

  it("an unknown id shows the error state", () => {
    const html = renderToString(
      <BehaviorDetailView
        detail={{ ...idle, data: null, isEmpty: true }}
        outcomes={idle}
        behaviorKey="nope"
      />,
    );
    expect(html).toContain("doesn’t have a behavior called that");
  });
});

describe("projection stays on the fixed y-range", () => {
  it("clamps", () => {
    const p = project({ points: [1, 1.5, 1.9], yMin: 0, yMax: 2 });
    expect(p.every((v) => v <= 2 && v >= 0)).toBe(true);
  });
});
