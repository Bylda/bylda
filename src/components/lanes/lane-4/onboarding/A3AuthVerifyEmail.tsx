import { useEffect, useState } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { Button } from "@/components/bylda";
import { useAuthActions } from "@/lib/data";
import { AuthError, AuthField, AuthLayout, AuthNotice } from "./auth/AuthKit";
import { EMAIL_RE, authErrorMessage } from "./auth/authLogic";

/**
 * A3 · Auth — Verify email
 * Figma 26:139 (page 1:5) · Lane 4 — Dravin · route /welcome/verify?email=
 * Two arrivals: from A2 (check your inbox) and from the email link itself
 * (signUp's emailRedirectTo). Flow 4 → A6 workspace setup. Hooks: useAuthActions.
 */
type Arrival = "inbox" | "verified" | "link-error";

/** Supabase puts the link result in the hash (implicit) or a ?code= (PKCE). */
function readArrival(): { arrival: Arrival; detail: string | null } {
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const query = new URLSearchParams(window.location.search);
  const err = hash.get("error_description") ?? query.get("error_description");
  if (err) return { arrival: "link-error", detail: err.replace(/\+/g, " ") };
  if (hash.get("access_token") || query.get("code")) return { arrival: "verified", detail: null };
  return { arrival: "inbox", detail: null };
}

const RESEND_COOLDOWN_S = 30;

export function A3AuthVerifyEmail() {
  const search = useSearch({ from: "/welcome/verify" });
  const { resendVerification } = useAuthActions();
  const [{ arrival, detail }, setArrival] = useState<{ arrival: Arrival; detail: string | null }>({
    arrival: "inbox",
    detail: null,
  });
  const [email, setEmail] = useState(search.email ?? "");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentAgain, setSentAgain] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => setArrival(readArrival()), []);
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  async function resend() {
    const addr = email.trim();
    if (!EMAIL_RE.test(addr)) return setError("Enter the email you signed up with.");
    setError(null);
    setSentAgain(false);
    setPending(true);
    try {
      await resendVerification(addr);
      setSentAgain(true);
      setCooldown(RESEND_COOLDOWN_S);
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setPending(false);
    }
  }

  if (arrival === "verified") {
    return (
      <AuthLayout
        eyebrow="Email verified"
        title="You're in"
        lede="Next, set up your workspace. It takes about two minutes."
      >
        <Button asChild className="w-full">
          <Link to="/welcome/workspace">Set up workspace</Link>
        </Button>
      </AuthLayout>
    );
  }

  const knownEmail = !!search.email;
  const expired = arrival === "link-error";

  return (
    <AuthLayout
      eyebrow={expired ? "Link expired" : "Verify email"}
      title={expired ? "That link didn't work" : "Check your inbox"}
      lede={
        expired ? (
          "Verification links expire after a while. Send a fresh one."
        ) : knownEmail ? (
          <>
            We sent a link to{" "}
            <span className="type-ui-body-strong text-by-text-primary">{search.email}</span>. Open
            it on this device to continue.
          </>
        ) : (
          "We sent a link to your work email. Open it on this device to continue."
        )
      }
      footer={
        <>
          Wrong email?{" "}
          <Link to="/welcome/sign-up" className="type-ui-body-strong text-by-text-primary">
            Start over
          </Link>
        </>
      }
    >
      <div className="flex flex-col gap-4">
        {expired && detail ? <AuthError message={detail} /> : null}
        {!knownEmail ? (
          <AuthField
            label="Work email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={pending}
          />
        ) : null}
        <AuthError message={error} />
        {sentAgain ? <AuthNotice>Sent. Give it a minute and check spam too.</AuthNotice> : null}
        <Button
          variant={expired ? "primary" : "secondary"}
          className="w-full"
          onClick={resend}
          disabled={pending || cooldown > 0}
        >
          {pending
            ? "Sending…"
            : cooldown > 0
              ? `Resend in ${cooldown}s`
              : expired
                ? "Send a new link"
                : "Resend email"}
        </Button>
      </div>
    </AuthLayout>
  );
}
