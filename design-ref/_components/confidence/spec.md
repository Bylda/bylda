# Confidence · node `4:66` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · levels: Low · Medium · High (symbols `4:48` · `4:54` · `4:60`). Built in code as `@/components/bylda` → `Confidence`. **Required on every insight.**

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — use the `by-*` component, never paste this.

## Code

```tsx
type ConfidenceProps = {
  className?: string;
  level?: "Low" | "Medium" | "High";
};

export default function Confidence({ className, level = "Low" }: ConfidenceProps) {
  const isHigh = level === "High";
  const isMedium = level === "Medium";
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center relative"} id={isHigh ? "node-4_60" : isMedium ? "node-4_54" : "node-4_48"}>
      <div className="content-stretch flex gap-[2px] items-start overflow-clip relative shrink-0" id={isHigh ? "node-4_61" : isMedium ? "node-4_55" : "node-4_49"} data-name="Bars">
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[10px] relative shrink-0 w-[3px]" id={isHigh ? "node-4_62" : isMedium ? "node-4_56" : "node-4_50"} data-name="Rectangle" />
        <div className={`h-[10px] relative shrink-0 w-[3px] ${["Medium", "High"].includes(level) ? String.raw`bg-[var(--primitive\/graphite\/800,#2a2a2e)]` : String.raw`bg-[var(--primitive\/silver\/200,#e5e3df)]`}`} id={isHigh ? "node-4_63" : isMedium ? "node-4_57" : "node-4_51"} data-name="Rectangle" />
        <div className={`h-[10px] relative shrink-0 w-[3px] ${isHigh ? String.raw`bg-[var(--primitive\/graphite\/800,#2a2a2e)]` : String.raw`bg-[var(--primitive\/silver\/200,#e5e3df)]`}`} id={isHigh ? "node-4_64" : isMedium ? "node-4_58" : "node-4_52"} data-name="Rectangle" />
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" id={isHigh ? "node-4_65" : isMedium ? "node-4_59" : "node-4_53"}>
        {isHigh ? "CONFIDENCE HIGH" : isMedium ? "CONFIDENCE MEDIUM" : "CONFIDENCE LOW"}
      </p>
    </div>
  );
}
```

These styles are contained in the design: Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6).

## Confidence
**Node ID:** 4:66

Always pair with sample size (n=). Low = do not recommend action, only observe.

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
