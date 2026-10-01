import { createFileRoute } from "@tanstack/react-router";
import { P2DailyManagerBriefInAppDocument } from "@/components/lanes/lane-4/reports/P2DailyManagerBriefInAppDocument";

// P2 · Daily Manager Brief — in-app document · Figma 13:2 · Lane 4 (Dravin)
export const Route = createFileRoute("/app/reports/daily")({
  component: P2DailyManagerBriefInAppDocument,
});
