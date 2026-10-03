import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, createElement } from "react";
import { createRoot } from "react-dom/client";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { DataCtx } from "../core/context";
import { setSourceOverride, type Source } from "../core/source";
import { NOTIFICATIONS, REP_NOTIFICATIONS } from "../mocks/collab";
import type { Notification, NotificationType } from "../types";

const DANA: DataCtx = {
  userId: "u_dana",
  orgId: "org_acme",
  workspaceId: "ws_acme",
  teamId: "team_mm",
  role: "manager",
};
const JORDAN: DataCtx = { ...DANA, userId: "u_jordan", role: "rep" };
const viewer = vi.hoisted(() => ({ ctx: null as DataCtx | null }));

vi.mock("../session/hooks", () => ({ useDataCtx: () => viewer.ctx }));
vi.mock("./fetchers", () => ({ fetchNotifications: vi.fn(), markRead: vi.fn() }));

import { fetchNotifications, markRead } from "./fetchers";
import {
  loadNotifications,
  resetMockNotificationState,
  useMarkNotificationRead,
  useNotifications,
} from "./hooks";

const fetchMock = vi.mocked(fetchNotifications);
const markMock = vi.mocked(markRead);

/**
 * Figma N2 (31:1258) tab counts: All 9 · Needs you 3 · Behavior 4 · Coaching 2 · Reports 1 · System 1.
 * Behavior + Coaching + Reports + System is only 8, so one type belongs to no category tab. The data
 * type has no category field; this is the mapping the counts imply (important_call is the orphan).
 * "Needs you" is the lane rule (#72): unread AND (tone regress or attention, OR an emerging
 * pattern), with no System exception. The lane implements it; it is mirrored here so the fixtures
 * are proven to exercise it.
 */
const TAB: Record<string, NotificationType[]> = {
  behavior: [
    "behavior_regression",
    "emerging_pattern",
    "methodology_breakdown",
    "behavior_improvement",
  ],
  coaching: ["coaching_completed", "coaching_acknowledged"],
  reports: ["report_ready"],
  system: ["integration_problem"],
};
const needsYou = (n: Notification) =>
  !n.read &&
  (n.severity === "regress" || n.severity === "attention" || n.type === "emerging_pattern");
const counts = (rows: Notification[]) => ({
  all: rows.length,
  needsYou: rows.filter(needsYou).length,
  ...Object.fromEntries(
    Object.entries(TAB).map(([k, types]) => [k, rows.filter((n) => types.includes(n.type)).length]),
  ),
});

/** The table as the server would return it. */
let db: { id: string; type: string; message: string; read: boolean; created_at: string }[] = [];
const seedDb = () => {
  db = NOTIFICATIONS.map((n) => ({
    id: n.id,
    type: n.type,
    message: n.title,
    read: n.read,
    created_at: n.createdAt,
  }));
};

type Probe = { list: Notification[] | undefined; mark: ReturnType<typeof useMarkNotificationRead> };
let qc: QueryClient;
let probe: Probe;
let unmount: () => void;

function mount(ctx: DataCtx) {
  viewer.ctx = ctx;
  qc = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });
  probe = { list: undefined, mark: undefined as never };
  function Harness() {
    probe.list = useNotifications().data;
    probe.mark = useMarkNotificationRead();
    return null;
  }
  const el = document.createElement("div");
  const root = createRoot(el);
  act(() =>
    root.render(createElement(QueryClientProvider, { client: qc }, createElement(Harness))),
  );
  unmount = () => act(() => root.unmount());
}
const flush = () => act(async () => void (await new Promise((r) => setTimeout(r, 0))));
const cached = () =>
  qc
    .getQueriesData<Notification[]>({ queryKey: ["notifications", "list"] })
    .flatMap(([, r]) => r ?? []);
const isRead = (id: string) => cached().find((n) => n.id === id)?.read;
const deferred = () => {
  let resolve!: () => void;
  let reject!: (e: Error) => void;
  const promise = new Promise<void>((res, rej) => ((resolve = res), (reject = rej)));
  return { promise, resolve, reject };
};

beforeAll(() => {
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
});
afterAll(() => setSourceOverride(null));
beforeEach(() => {
  resetMockNotificationState();
  seedDb();
  fetchMock.mockReset();
  markMock.mockReset();
  fetchMock.mockImplementation(async () => db.map((r) => ({ ...r })));
});
afterEach(() => unmount?.());

const useSource = (s: Source) => setSourceOverride(s);

describe("fixtures match Figma N1 / N2", () => {
  it("has the nine rows, newest first, one per type", () => {
    expect(NOTIFICATIONS.map((n) => n.typeLabel)).toEqual([
      "BEHAVIOR REGRESSION",
      "IMPORTANT CALL",
      "EMERGING PATTERN",
      "REPORT READY",
      "COACHING COMPLETED",
      "COACHING ACKNOWLEDGED",
      "METHODOLOGY BREAKDOWN",
      "INTEGRATION PROBLEM",
      "BEHAVIOR IMPROVEMENT",
    ]);
    expect(new Set(NOTIFICATIONS.map((n) => n.type)).size).toBe(9);
    expect(new Set(NOTIFICATIONS.map((n) => n.id)).size).toBe(9);
    const at = NOTIFICATIONS.map((n) => Date.parse(n.createdAt));
    expect(at).toEqual([...at].sort((a, b) => b - a));
  });

  it("covers every severity, read and unread, with no body line", () => {
    expect(new Set(NOTIFICATIONS.map((n) => n.severity))).toEqual(
      new Set(["regress", "attention", "info", "improve"]),
    );
    expect(NOTIFICATIONS.filter((n) => !n.read).map((n) => n.id)).toEqual(["n1", "n2", "n3"]);
    expect(NOTIFICATIONS.every((n) => n.body === null)).toBe(true);
  });

  it("exercises the Needs-you rule: read regress and attention rows are present and don't count", () => {
    const read = NOTIFICATIONS.filter((n) => n.read);
    expect(read.find((n) => n.type === "integration_problem")?.severity).toBe("regress");
    expect(read.find((n) => n.type === "methodology_breakdown")?.severity).toBe("attention");
    expect(NOTIFICATIONS.filter(needsYou).map((n) => n.id)).toEqual(["n1", "n2", "n3"]);
  });

  it("splits 4 Today / 5 Earlier around 30 Sep and reproduces the tab counts", () => {
    const today = NOTIFICATIONS.filter((n) => n.createdAt.startsWith("2026-09-30"));
    expect(today).toHaveLength(4);
    expect(NOTIFICATIONS.length - today.length).toBe(5);
    expect(counts(NOTIFICATIONS)).toEqual({
      all: 9,
      needsYou: 3,
      behavior: 4,
      coaching: 2,
      reports: 1,
      system: 1,
    });
  });
});

describe("rep view (CLAUDE.md §4, #72) — scoped by whose row it is", () => {
  beforeEach(() => useSource("mock"));

  it("manager sees the nine Figma rows and none of the rep's", async () => {
    const rows = await loadNotifications(DANA);
    expect(rows).toHaveLength(9);
    expect(rows.map((n) => n.id)).not.toContain("n10");
  });

  it("rep sees exactly their own regression row", async () => {
    const rows = await loadNotifications(JORDAN);
    expect(rows.map((n) => [n.id, n.type])).toEqual([["n10", "behavior_regression"]]);
  });

  it("rep never sees a manager-inbox row: team alerts, other reps, the manager brief", async () => {
    const mine = new Set((await loadNotifications(JORDAN)).map((n) => n.id));
    for (const n of NOTIFICATIONS) expect(mine.has(n.id)).toBe(false);
  });

  it("a rep with no inbox sees nothing (fail-closed)", async () => {
    expect(await loadNotifications({ ...JORDAN, userId: "u_alex" })).toEqual([]);
    expect(Object.keys(REP_NOTIFICATIONS)).toEqual(["u_jordan"]);
  });
});

describe("useMarkNotificationRead — mock mode", () => {
  beforeEach(() => {
    useSource("mock");
    mount(DANA);
  });

  it("flips the row, updates the counts, and survives a refetch", async () => {
    await flush();
    expect(counts(cached()).needsYou).toBe(3);
    act(() => probe.mark.mutate("n1"));
    await flush();
    expect(isRead("n1")).toBe(true);
    expect(counts(cached()).needsYou).toBe(2);
    await act(() => qc.invalidateQueries({ queryKey: ["notifications", "list"] }));
    expect(isRead("n1")).toBe(true);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(markMock).not.toHaveBeenCalled();
  });

  it("works the same for a rep, on their own row", async () => {
    unmount();
    mount(JORDAN);
    await flush();
    expect(cached().map((n) => n.id)).toEqual(["n10"]);
    act(() => probe.mark.mutate("n10"));
    await flush();
    expect(isRead("n10")).toBe(true);
  });

  it("rolls back and surfaces the error when the write fails", async () => {
    await flush();
    const before = cached();
    act(() => probe.mark.mutate("nope"));
    await flush();
    expect(probe.mark.error?.message).toBe("NOTIFICATION_NOT_FOUND");
    expect(cached()).toEqual(before);
  });
});

describe("useMarkNotificationRead — real mode", () => {
  beforeEach(() => {
    useSource("real");
    mount(DANA);
  });

  it("flips at once, before the write returns, then refetches", async () => {
    await flush();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const write = deferred();
    markMock.mockImplementationOnce(() => write.promise);
    act(() => probe.mark.mutate("n1"));
    await flush();
    expect(isRead("n1")).toBe(true); // write still in flight
    expect(counts(cached()).needsYou).toBe(2);
    db.find((r) => r.id === "n1")!.read = true;
    write.resolve();
    await flush();
    expect(markMock).toHaveBeenCalledWith("n1");
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(isRead("n1")).toBe(true);
  });

  it("rolls the row back when the write fails, before the refetch lands", async () => {
    await flush();
    const refetch = deferred();
    const write = deferred();
    markMock.mockImplementationOnce(() => write.promise);
    act(() => probe.mark.mutate("n1"));
    await flush();
    expect(isRead("n1")).toBe(true);
    fetchMock.mockImplementationOnce(
      async () => (await refetch.promise, db.map((r) => ({ ...r }))),
    );
    write.reject(new Error("rls"));
    await flush();
    expect(probe.mark.error?.message).toBe("rls");
    expect(isRead("n1")).toBe(false); // cache is the rolled-back state; refetch hasn't returned
    expect(counts(cached()).needsYou).toBe(3);
    refetch.resolve();
    await flush();
    expect(isRead("n1")).toBe(false);
  });

  it("mark-all as parallel writes: one failure restores only its own row", async () => {
    await flush();
    const refetch = deferred();
    const ids = ["n1", "n2", "n3"];
    markMock.mockImplementation(async (id) => {
      if (id === "n2") throw new Error("rls");
      db.find((r) => r.id === id)!.read = true;
    });
    fetchMock.mockImplementation(async () => (await refetch.promise, db.map((r) => ({ ...r }))));
    // one hook instance, three overlapping mutations on different ids
    await act(async () => {
      await Promise.allSettled(ids.map((id) => probe.mark.mutateAsync(id)));
    });
    expect(isRead("n1")).toBe(true);
    expect(isRead("n2")).toBe(false);
    expect(isRead("n3")).toBe(true);
    expect(counts(cached()).needsYou).toBe(1);
    refetch.resolve();
    await flush();
    expect(counts(cached()).needsYou).toBe(1);
  });
});
