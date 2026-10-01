import { StateEmpty } from "@/components/bylda";
import { HomeFrame } from "./shared/HomeFrame";

/**
 * H5 · Manager Home — Reports
 * Figma 43:2139 (page 1:6) · Lane 1 — Ansh · route /app/home/reports
 * Hooks (when built out): useHomeFeed, useReports — see src/lib/data/README.md
 *
 * Tab shell only for now: greeting + tab bar from H1, body is the page-17 empty state.
 */
export function H5ManagerHomeReports() {
  return (
    <HomeFrame>
      <StateEmpty
        eyebrow="HOME · REPORTS"
        title="No reports in your feed yet."
        body="Daily and weekly briefs will post here when they’re generated."
      />
    </HomeFrame>
  );
}
