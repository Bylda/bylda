import { createFileRoute } from "@tanstack/react-router";
import { P5WeeklyManagerReportLivingDocument } from "@/components/lanes/lane-4/reports/P5WeeklyManagerReportLivingDocument";

// P5 · Weekly Manager Report — living document · Figma 29:352 · Lane 4 (Dravin)
export const Route = createFileRoute("/app/reports/weekly")({
  component: P5WeeklyManagerReportLivingDocument,
});
