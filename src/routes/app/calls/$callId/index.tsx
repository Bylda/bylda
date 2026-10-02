import { createFileRoute } from "@tanstack/react-router";
import { C4CallReviewOverview } from "@/components/lanes/lane-2/calls/C4CallReviewOverview";

// C4 · Call Review — Overview · Figma 44:1375 · Lane 2 (Dhruv)
export const Route = createFileRoute("/app/calls/$callId/")({ component: C4CallReviewOverview });
