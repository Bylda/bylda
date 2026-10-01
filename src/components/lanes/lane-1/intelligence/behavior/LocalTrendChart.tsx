import { cn } from "@/components/bylda";
import type { Sparkline } from "@/lib/data";
import { project } from "./format";

/**
 * LocalTrendChart — fold-into-kit (LANE_REQUESTS #26). Solid = measured, dashed = projected,
 * on the series' FIXED y-range (CLAUDE.md §4). Stroke is currentColor: colour at the call site.
 */
export function LocalTrendChart({
  series,
  label,
  className,
}: {
  series: Sparkline;
  label: string;
  className?: string;
}) {
  const { points, yMin, yMax } = series;
  const projected = project(series);
  if (points.length < 2 || yMax <= yMin) return null;
  const W = 300;
  const H = 120;
  const pad = 4;
  const total = points.length + projected.length;
  const x = (i: number) => pad + (i / (total - 1)) * (W - pad * 2);
  const y = (v: number) => pad + (1 - (v - yMin) / (yMax - yMin)) * (H - pad * 2);
  const measured = points.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const dashed = [points[points.length - 1], ...projected]
    .map((v, i) => `${x(points.length - 1 + i).toFixed(1)},${y(v).toFixed(1)}`)
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={label}
      className={cn("h-[120px] w-full", className)}
    >
      <line
        x1={pad}
        x2={W - pad}
        y1={H - pad}
        y2={H - pad}
        className="stroke-by-border-engraved"
        strokeWidth={1}
      />
      <polyline
        points={measured}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {projected.length > 0 ? (
        <polyline
          points={dashed}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  );
}
