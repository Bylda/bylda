import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/bylda";
import { useAuthActions } from "@/lib/data";
import { AuthError, AuthField, AuthLayout } from "./auth/AuthKit";
import { EMAIL_RE, PASSWORD_MIN, authErrorMessage } from "./auth/authLogic";

/**
 * A2 · Auth — Sign up
 * Figma 26:91 (page 1:5) · Lane 4 — Dravin · route /welcome/sign-up
 * Flow 4 · Sign up & connect → A3 verify. Hooks: useAuthActions.
 */
export function A2AuthSignUp() {
  const { signUp } = useAuthActions();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const addr = email.trim();
    if (!name.trim()) return setError("Add your name so your team knows who you are.");
    if (!EMAIL_RE.test(addr)) return setError("Enter the email you use for work.");
    if (password.length < PASSWORD_MIN)
      return setError(`Use at least ${PASSWORD_MIN} characters for your password.`);
    setError(null);
    setPending(true);
    try {
      await signUp(addr, password, name.trim());
      void navigate({ to: "/welcome/verify", search: { email: addr } });
    } catch (err) {
      setError(authErrorMessage(err));
      setPending(false);
    }
  }

  return (
    <AuthLayout
      eyebrow="Create workspace"
      title="Start with Bylda"
      lede="Connect your calls and see the behaviors that move deals."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/welcome/sign-in" className="type-ui-body-strong text-by-text-primary">
            Sign in
          </Link>
        </>
      }
    >
      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
        <AuthField
          label="Full name"
          autoComplete="name"
          placeholder="Kiran Patel"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={pending}
          autoFocus
        />
        <AuthField
          label="Work email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={pending}
        />
        <AuthField
          label="Password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={pending}
          hint={`At least ${PASSWORD_MIN} characters.`}
        />
        <AuthError message={error} />
        <Button type="submit" className="mt-2 w-full" disabled={pending}>
          {pending ? "Creating account…" : "Create account"}
        </Button>
        <p className="type-ui-small text-by-text-tertiary">
          Bylda only reads from your call and CRM tools. It never writes back.
        </p>
      </form>
    </AuthLayout>
  );
}
