import { mocksForced } from "@/lib/data";

// GAP: the data layer has no "people matched from your call source" list for A9
// (per-person call counts, suggested role/team, invite email) — LANE_REQUESTS.md #16.
// These Figma fixtures (Acme Revenue) render ONLY with VITE_BYLDA_MOCKS=true; live mode
// shows the add-by-email form alone. Never show them against a real workspace.

export type InviteCandidate = {
  id: string;
  name: string;
  email: string;
  calls: number;
  role: "rep" | "manager" | "owner";
  team: string | null;
  /** Pre-toggled on. */
  suggested: boolean;
};

const CANDIDATES: InviteCandidate[] = [
  ["u_jordan", "Jordan Reyes", 58, "rep", "Mid-Market AE", true],
  ["u_alex", "Alex Morgan", 44, "rep", "Mid-Market AE", true],
  ["u_mia", "Mia Kowalski", 51, "rep", "Mid-Market AE", true],
  ["u_sarah", "Sarah Lin", 62, "rep", "Mid-Market AE", true],
  ["u_theo", "Theo Grant", 55, "rep", "Mid-Market AE", true],
  ["u_priya", "Priya Nair", 47, "rep", "Mid-Market AE", true],
  ["u_kiran", "Kiran Patel", 0, "owner", null, true],
  ["u_rob", "Rob Baird", 12, "manager", "Enterprise", false],
].map(([id, name, calls, role, team, suggested]) => ({
  id: id as string,
  name: name as string,
  email: `${(name as string).split(" ")[0].toLowerCase()}@acme-revenue.test`,
  calls: calls as number,
  role: role as InviteCandidate["role"],
  team: team as string | null,
  suggested: suggested as boolean,
}));

/** Matched people + the source they were matched from, or null outside forced mocks. */
export function inviteCandidates(): { source: string; people: InviteCandidate[] } | null {
  return mocksForced() ? { source: "Zoom", people: CANDIDATES } : null;
}
