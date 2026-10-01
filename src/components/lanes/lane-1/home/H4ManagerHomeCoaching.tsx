import { StateEmpty } from "@/components/bylda";
import { HomeFrame } from "./shared/HomeFrame";

/**
 * H4 · Manager Home — Coaching
 * Figma 43:1670 (page 1:6) · Lane 1 — Ansh · route /app/home/coaching
 * Hooks (when built out): useHomeFeed, useCoachingFoci — see src/lib/data/README.md
 *
 * Tab shell only for now: greeting + tab bar from H1, body is the page-17 empty state.
 */
export function H4ManagerHomeCoaching() {
  return (
    <HomeFrame>
      <StateEmpty
        eyebrow="HOME · COACHING"
        title="No coaching updates yet."
        body="Acknowledgements and results for the focuses you assign will show up here."
      />
    </HomeFrame>
  );
}
