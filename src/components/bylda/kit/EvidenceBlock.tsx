import { cn } from "./cn";

/** Evidence Block (4:67) — a timestamped quote on the Inset surface. */
export type Evidence = {
  /** "18:42" — position in the call. */
  timestamp: string;
  /** "PROSPECT", "REP", a name… */
  speaker: string;
  quote: string;
  /** Optional deep link to the moment. */
  href?: string;
};

export function EvidenceBlock({ evidence, className }: { evidence: Evidence; className?: string }) {
  const body = (
    <>
      <span className="flex shrink-0 flex-col gap-0.5">
        <span className="type-mono-data text-by-text-primary">{evidence.timestamp}</span>
        <span className="type-mono-micro text-by-text-tertiary">
          {evidence.speaker.toUpperCase()}
        </span>
      </span>
      <span className="type-editorial-quote min-w-0 flex-1 text-by-text-primary">
        “{evidence.quote}”
      </span>
    </>
  );
  const cls = cn(
    "flex w-full items-start gap-3 rounded-by-control border border-by-border-engraved bg-by-surface-inset px-3.5 py-3 text-left",
    evidence.href && "transition-colors hover:border-by-border-control",
    className,
  );
  return evidence.href ? (
    <a href={evidence.href} className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}
