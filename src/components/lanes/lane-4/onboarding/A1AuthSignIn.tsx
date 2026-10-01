import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/bylda";
import { useAuthActions } from "@/lib/data";
import { AuthError, AuthField, AuthLayout } from "./auth/AuthKit";
import { EMAIL_RE, authErrorMessage, useRouteHomeWhen } from "./auth/authLogic";

/**
 * A1 · Auth — Sign in
 * Figma 26:40 (page 1:5) · Lane 4 — Dravin · route /welcome/sign-in
 * Flow 0 · Sign in → role home (owner → H7 Admin Home). Hooks: useAuthActions.
 */
export function A1AuthSignIn() {
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signedIn, setSignedIn] = useState(false);
  const { failed } = useRouteHomeWhen(signedIn);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) return setError("Enter the email you use for work.");
    if (!password) return setError("Enter your password.");
    setError(null);
    setPending(true);
    try {
      await signIn(email.trim(), password);
      setSignedIn(true);
    } catch (err) {
      setError(authErrorMessage(err));
      setPending(false);
    }
  }

  const busy = (pending || signedIn) && !failed;
  const shown = failed
    ? "You're signed in, but we couldn't load your workspace. Refresh to try again."
    : error;

  return (
    <AuthLayout
      eyebrow="Sign in"
      title="Welcome back"
      lede="Pick up where your team left off."
      footer={
        <>
          New to Bylda?{" "}
          <Link to="/welcome/sign-up" className="type-ui-body-strong text-by-text-primary">
            Create a workspace
          </Link>
        </>
      }
    >
      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
        <AuthField
          label="Work email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={busy}
          autoFocus
        />
        <AuthField
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={busy}
          aside={
            <Link
              to="/welcome/forgot"
              className="type-ui-small text-by-text-secondary hover:text-by-text-primary"
            >
              Forgot password?
            </Link>
          }
        />
        <AuthError message={shown} />
        <Button type="submit" className="mt-2 w-full" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </AuthLayout>
  );
}
