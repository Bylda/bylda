import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { ByldaGlyph, Icon, Wordmark, cn } from "@/components/bylda";

/**
 * Shared pieces for the 04 Auth screens (A1–A4). Lane-4 local — not a shared component.
 * Outside the app shell: canvas page, wordmark top-left, one raised card centred.
 */
export function AuthLayout({
  eyebrow,
  title,
  lede,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <main className="bylda flex min-h-screen flex-col bg-by-surface-canvas text-by-text-primary">
      <header className="flex h-14 items-center px-8">
        <Wordmark />
      </header>
      <div className="flex flex-1 items-start justify-center px-4 pb-16 pt-[12vh]">
        <div className="w-full max-w-[400px]">
          <section className="rounded-by-card border border-by-border-engraved bg-by-surface-raised p-8">
            <div className="mb-6 flex flex-col gap-2">
              <span className="type-mono-micro flex items-center gap-1.5 uppercase text-by-text-tertiary">
                <ByldaGlyph size={10} />
                {eyebrow}
              </span>
              <h1 className="type-display-l">{title}</h1>
              {lede ? <p className="type-ui-body text-by-text-secondary">{lede}</p> : null}
            </div>
            {children}
          </section>
          {footer ? (
            <p className="type-ui-small mt-5 text-center text-by-text-secondary">{footer}</p>
          ) : null}
        </div>
      </div>
    </main>
  );
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: ReactNode;
  /** right-aligned slot on the label row, e.g. "Forgot password?" */
  aside?: ReactNode;
};

export const AuthField = forwardRef<HTMLInputElement, FieldProps>(function AuthField(
  { label, hint, aside, className, id, ...rest },
  ref,
) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between">
        <label htmlFor={fieldId} className="type-ui-label uppercase text-by-text-secondary">
          {label}
        </label>
        {aside}
      </div>
      <input
        ref={ref}
        id={fieldId}
        className={cn(
          "type-ui-body h-9 w-full rounded-by-control border border-by-border-control bg-by-surface-raised px-3 text-by-text-primary",
          "placeholder:text-by-text-tertiary transition-colors duration-200 ease-by-out",
          "focus:border-by-border-focus focus:outline-none disabled:opacity-40",
          className,
        )}
        {...rest}
      />
      {hint ? <p className="type-ui-small text-by-text-tertiary">{hint}</p> : null}
    </div>
  );
});

/** Inline error — regress tint, a dot and a word. Never a toast, never a red badge. */
export function AuthError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="type-ui-small flex items-start gap-2 rounded-by-control bg-by-signal-regress-bg px-3 py-2 text-by-signal-regress"
    >
      <Icon name="alert" size={14} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </p>
  );
}

/** Quiet confirmation — improve tint. */
export function AuthNotice({ children }: { children: ReactNode }) {
  return (
    <p
      role="status"
      className="type-ui-small flex items-start gap-2 rounded-by-control bg-by-signal-improve-bg px-3 py-2 text-by-signal-improve"
    >
      <Icon name="check" size={14} className="mt-0.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}
