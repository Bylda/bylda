import { StateEmpty } from "@/components/bylda";
import { HomeFrame } from "./shared/HomeFrame";

/**
 * H6 · Manager Home — Mentions
 * Figma 43:2612 (page 1:6) · Lane 1 — Ansh · route /app/home/mentions
 * Hooks (when built out): useHomeFeed — see src/lib/data/README.md
 *
 * Tab shell only for now: greeting + tab bar from H1, body is the page-17 empty state.
 */
export function H6ManagerHomeMentions() {
  return (
    <HomeFrame>
      <StateEmpty
        eyebrow="HOME · MENTIONS"
        title="No mentions yet."
        body="When someone @mentions you in a room, a call or a coaching thread, it shows up here."
      />
    </HomeFrame>
  );
}
