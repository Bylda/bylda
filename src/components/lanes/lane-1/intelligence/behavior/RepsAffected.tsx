import { Avatar, Tag } from "@/components/bylda";
import type { BehaviorDetail } from "@/lib/data";
import { formatValue } from "./format";

/**
 * BY REP — MANAGER ONLY. Names every rep with their value, so it must never render in a
 * rep view. The gate is in the data layer (`loadBehaviorDetail` → assertNotRep → the hook
 * errors for a rep and this component is never reached); the I2 screen additionally renders
 * it only from a successful manager fetch. Tested in BehaviorDetail.test.tsx.
 */
export function RepsAffected({ detail }: { detail: BehaviorDetail }) {
  const { byRep, unit } = detail;
  return (
    <section className="flex flex-1 flex-col rounded-by-card border border-by-border-engraved bg-by-surface-raised px-5 py-4">
      <h2 className="type-ui-label text-by-text-primary">BY REP</h2>
      {byRep.length === 0 ? (
        <p className="type-ui-small pt-3 text-by-text-secondary">
          No rep has this behavior in the measured window.
        </p>
      ) : (
        <ul>
          {byRep.map((r) => (
            <li
              key={r.repId}
              className="flex items-center gap-2.5 border-b border-by-border-engraved py-[9px] last:border-b-0"
            >
              <Avatar name={r.repName} size={22} />
              <span className="flex min-w-0 flex-1 flex-col gap-px">
                <span className="type-ui-small text-by-text-primary">{r.repName}</span>
                <span className="type-mono-micro text-by-text-secondary">
                  {formatValue(r.value, unit)} · n={r.n}
                </span>
              </span>
              {r.n < 10 ? <Tag>Early read</Tag> : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
