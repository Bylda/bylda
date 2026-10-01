import { createFileRoute } from "@tanstack/react-router";
import { A3AuthVerifyEmail } from "@/components/lanes/lane-4/onboarding/A3AuthVerifyEmail";

// A3 · Auth — Verify email · Figma 26:139 · Lane 4 (Dravin)
export const Route = createFileRoute("/welcome/verify")({
  validateSearch: (s: Record<string, unknown>): { email?: string } =>
    typeof s.email === "string" ? { email: s.email } : {},
  component: A3AuthVerifyEmail,
});
