import type { Sparkline as SparklineData } from "@/lib/data";
import { cn } from "@/components/bylda";

/**
 * Sparkline on the series' FIXED y-range (CLAUDE.md §4: "a steady rep looks steady").
 * Dev Handoff: "fix in build — mockups auto-scale" — so never scale to min/max of points.
 * Stroke is currentColor; colour it with a signal text utility at the call site.
 */
export function Sparkline({
  data,
  width = 60,
  height = 18,
  className,
}: {
  data: SparklineData;
  width?: number;
  height?: number;
  className?: string;
}) {
  const { points, yMin, yMax } = data;
  if (points.length < 2 || yMax <= yMin) return null;
  const pad = 1.5;
  const span = yMax - yMin;
  const xy = points.map((p, i) => {
    const x = pad + (i / (points.length - 1)) * (width - pad * 2);
    const clamped = Math.min(yMax, Math.max(yMin, p));
    const y = pad + (1 - (clamped - yMin) / span) * (height - pad * 2);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <polyline
        points={xy.join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
