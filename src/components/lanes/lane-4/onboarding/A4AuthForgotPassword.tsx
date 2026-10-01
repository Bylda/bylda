import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/bylda";
import { useAuthActions } from "@/lib/data";
import { AuthError, AuthField, AuthLayout, AuthNotice } from "./auth/AuthKit";
import { EMAIL_RE, PASSWORD_MIN, authErrorMessage, useRouteHomeWhen } from "./auth/authLogic";

/**
 * A4 · Auth — Forgot password
 * Figma 26:184 (page 1:5) · Lane 4 — Dravin · route /welcome/forgot
 * Step 1: request a link. Step 2: the link (sendReset's redirectTo) lands back here with
 * `#type=recovery` → set a new password → role home. Hooks: useAuthActions.
 */
export function A4AuthForgotPassword() {
  const [recovery, setRecovery] = useState(false);
  useEffect(() => {
    setRecovery(
      new URLSearchParams(window.location.hash.replace(/^#/, "")).get("type") === "recovery",
    );
  }, []);
  return recovery ? <SetNewPassword /> : <RequestLink />;
}

function backToSignIn() {
  return (
    <>
      Remembered it?{" "}
      <Link to="/welcome/sign-in" className="type-ui-body-strong text-by-text-primary">
        Back to sign in
      </Link>
    </>
  );
}

function RequestLink() {
  const { sendReset } = useAuthActions();
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const addr = email.trim();
    if (!EMAIL_RE.test(addr)) return setError("Enter the email you sign in with.");
    setError(null);
    setPending(true);
    try {
      await sendReset(addr);
      setSentTo(addr);
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setPending(false);
    }
  }

  if (sentTo) {
    return (
      <AuthLayout
        eyebrow="Reset password"
        title="Check your inbox"
        lede={
          <>
            If there's an account for{" "}
            <span className="type-ui-body-strong text-by-text-primary">{sentTo}</span>, a reset link
            is on its way.
          </>
        }
        footer={backToSignIn()}
      >
        <Button variant="secondary" className="w-full" onClick={() => setSentTo(null)}>
          Use a different email
        </Button>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      eyebrow="Reset password"
      title="Forgot your password?"
      lede="Enter your work email and we'll send you a link to set a new one."
      footer={backToSignIn()}
    >
      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
        <AuthField
          label="Work email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={pending}
          autoFocus
        />
        <AuthError message={error} />
        <Button type="submit" className="mt-2 w-full" disabled={pending}>
          {pending ? "Sending…" : "Send reset link"}
        </Button>
      </form>
    </AuthLayout>
  );
}

function SetNewPassword() {
  const { updatePassword } = useAuthActions();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const { failed } = useRouteHomeWhen(done);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (password.length < PASSWORD_MIN)
      return setError(`Use at least ${PASSWORD_MIN} characters for your password.`);
    if (password !== confirm) return setError("Those passwords don't match.");
    setError(null);
    setPending(true);
    try {
      await updatePassword(password);
      setDone(true);
    } catch (err) {
      setError(authErrorMessage(err));
      setPending(false);
    }
  }

  const busy = (pending || done) && !failed;

  return (
    <AuthLayout eyebrow="Reset password" title="Set a new password" footer={backToSignIn()}>
      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
        <AuthField
          label="New password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={busy}
          hint={`At least ${PASSWORD_MIN} characters.`}
          autoFocus
        />
        <AuthField
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          disabled={busy}
        />
        <AuthError message={error} />
        {done ? (
          <AuthNotice>
            Password updated.{" "}
            {failed ? (
              <Link to="/welcome/sign-in" className="type-ui-body-strong">
                Sign in
              </Link>
            ) : (
              "Taking you in…"
            )}
          </AuthNotice>
        ) : null}
        <Button type="submit" className="mt-2 w-full" disabled={busy}>
          {pending && !done ? "Saving…" : "Save password"}
        </Button>
      </form>
    </AuthLayout>
  );
}
