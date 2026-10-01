import { StateEmpty } from "@/components/bylda";
import { HomeFrame } from "./shared/HomeFrame";

/**
 * H2 · Manager Home — Team Updates
 * Figma 43:692 (page 1:6) · Lane 1 — Ansh · route /app/home/team-updates
 * Hooks (when built out): useHomeFeed — see src/lib/data/README.md
 *
 * Tab shell only for now: greeting + tab bar from H1, body is the page-17 empty state.
 */
export function H2ManagerHomeTeamUpdates() {
  return (
    <HomeFrame>
      <StateEmpty
        eyebrow="HOME · TEAM UPDATES"
        title="No team updates yet."
        body="Pattern changes across the team will post here as soon as Bylda has enough calls to see them."
      />
    </HomeFrame>
  );
}
