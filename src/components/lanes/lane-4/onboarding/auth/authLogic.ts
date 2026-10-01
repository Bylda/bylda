import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useViewer, type Role } from "@/lib/data";

/** Non-component helpers for the 04 Auth screens (A1–A4). Lane-4 local. */
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_MIN = 8;

/** Supabase error text → our voice. Unknown messages pass through. */
export function authErrorMessage(err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err);
  const m = raw.toLowerCase();
  if (m.includes("invalid login credentials"))
    return "That email and password don't match. Try again or reset your password.";
  if (m.includes("email not confirmed"))
    return "You haven't confirmed your email yet. Check your inbox for the link.";
  if (m.includes("already registered") || m.includes("already exists"))
    return "There's already an account with that email. Sign in instead.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "Too many tries. Wait a minute, then try again.";
  if (m.includes("failed to fetch") || m.includes("network"))
    return "Couldn't reach Bylda. Check your connection and try again.";
  return raw || "Something went wrong. Try again.";
}

/** Where each role lands after sign-in (Flow 0: the owner lands on Admin Home, H7). */
export function homeFor(role: Role): "/app/home/admin" | "/app/rep" | "/app/home" {
  if (role === "owner" || role === "admin") return "/app/home/admin";
  if (role === "rep") return "/app/rep";
  return "/app/home";
}

/**
 * After a successful sign-in, waits for the viewer to resolve and routes by role.
 * No workspace yet → onboarding (A6), since there's nothing to land on.
 */
export function useRouteHomeWhen(ready: boolean) {
  const navigate = useNavigate();
  const viewer = useViewer();
  const v = viewer.data?.id ? viewer.data : null;
  const to = v ? (v.orgId ? homeFor(v.role) : "/welcome/workspace") : null;
  useEffect(() => {
    if (ready && to) void navigate({ to });
  }, [ready, to, navigate]);
  // NOT_SIGNED_IN is the pre-sign-in query; it's replaced once auth catches up.
  const err = viewer.error;
  const failed = ready && !!err && !(err instanceof Error && err.message === "NOT_SIGNED_IN");
  return { failed };
}
