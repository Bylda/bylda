import {
  ConfidenceMeter,
  DataBoundary,
  SkeletonBlock,
  StateError,
  SystemState,
} from "@/components/bylda";
import {
  REP_INSIGHT_MIN_CALLS,
  useRepScores,
  type BehaviorScore,
  type RepSummary,
} from "@/lib/data";
import { LocalSparkline } from "../rep/LocalSparkline";
import { directionTone, formatScore } from "../rep/repFormat";
import { ChartGrid, RepProfileFrame } from "./repProfile";

/**
 * T12 · Rep Profile — Trends
 * Figma 45:2142 (page 1:10) · Lane 4 — Dravin · route /app/team/reps/$repId/trends
 * Hooks: useRepScores — see src/lib/data/README.md
 *
 * One card per behavior. Each chart plots on that behavior's FIXED y-range from the data
 * layer (§4 — "fix in build, mockups auto-scale"), so a steady rep looks steady.
 */
export function T12RepProfileTrends() {
  return <RepProfileFrame tab="trends">{(s) => <Trends summary={s} />}</RepProfileFrame>;
}

function Trends({ summary }: { summary: RepSummary }) {
  const scores = useRepScores(summary.rep.id);
  return (
    <DataBoundary
      query={scores}
      loading={
        <div className="grid grid-cols-3 gap-4 max-[1200px]:grid-cols-2 max-[800px]:grid-cols-1">
          {[0, 1, 2].map((i) => (
            <SkeletonBlock key={i} height={190} />
          ))}
        </div>
      }
      error={() => (
        <StateError
          eyebrow="REP PROFILE · TRENDS"
          body="Bylda couldn’t load these trends. Try again in a moment."
          onRetry={() => void scores.refetch()}
        />
      )}
      empty={
        <SystemState
          eyebrow="REP PROFILE · NOT ENOUGH CALLS YET"
          tag={{ tone: "attention", label: "Low evidence" }}
          title="No behavior trends yet."
          body={`Trends appear once ${REP_INSIGHT_MIN_CALLS} of this rep’s calls are analyzed.`}
        />
      }
    >
      {(rows) => (
        <div className="grid grid-cols-3 gap-4 max-[1200px]:grid-cols-2 max-[800px]:grid-cols-1">
          {rows.map((s) => (
            <TrendCard key={s.behaviorKey} score={s} />
          ))}
        </div>
      )}
    </DataBoundary>
  );
}

function TrendCard({ score: s }: { score: BehaviorScore }) {
  const weeks = s.sparkline.points.length;
  return (
    <section className="flex flex-col gap-2 rounded-by-card border border-by-border-engraved bg-by-surface-raised px-4 py-4">
      <p className="type-ui-small text-by-text-secondary">{s.name}</p>
      <p className="type-editorial-h2 text-by-text-primary">{formatScore(s.value, s.unit)}</p>
      <ChartGrid className="h-[80px]">
        <LocalSparkline
          sparkline={s.sparkline}
          tone={directionTone(s.direction)}
          className="h-full w-full"
        />
      </ChartGrid>
      <p className="type-ui-small text-by-text-tertiary">{`last ${weeks} weeks · vs own baseline`}</p>
      <ConfidenceMeter level={s.confidence} sampleSize={s.sampleSize} />
    </section>
  );
}
