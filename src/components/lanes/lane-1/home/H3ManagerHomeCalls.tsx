import { StateEmpty } from "@/components/bylda";
import { HomeFrame } from "./shared/HomeFrame";

/**
 * H3 · Manager Home — Calls
 * Figma 43:1176 (page 1:6) · Lane 1 — Ansh · route /app/home/calls
 * Hooks (when built out): useHomeFeed, useCalls — see src/lib/data/README.md
 *
 * Tab shell only for now: greeting + tab bar from H1, body is the page-17 empty state.
 */
export function H3ManagerHomeCalls() {
  return (
    <HomeFrame>
      <StateEmpty
        eyebrow="HOME · CALLS"
        title="No calls to surface yet."
        body="The most coachable calls from your team will land here once they’re analyzed."
      />
    </HomeFrame>
  );
}
