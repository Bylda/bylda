# Tag · node `4:34` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · tones: Improve · Regress · Attention · Info · Neutral. Built in code as `@/components/bylda` → `Tag`.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — use the `by-*` component, never paste this.

## Code

```tsx
type TagProps = {
  className?: string;
  tone?: "Improve" | "Regress" | "Attention" | "Info" | "Neutral";
};

export default function Tag({ className, tone = "Improve" }: TagProps) {
  const isAttention = tone === "Attention";
  const isInfo = tone === "Info";
  const isNeutral = tone === "Neutral";
  const isRegress = tone === "Regress";
  return (
    <div className={className || `content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] ${isNeutral ? String.raw`bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid` : isInfo ? String.raw`bg-[var(--primitive\/signal\/info-bg,#eeebfa)]` : isAttention ? String.raw`bg-[var(--primitive\/signal\/attention-bg,#f8eedc)]` : isRegress ? String.raw`bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)]` : String.raw`bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)]`}`} id={isNeutral ? "node-4_32" : isInfo ? "node-4_30" : isAttention ? "node-4_28" : isRegress ? "node-4_26" : "node-4_24"}>
      <p className={`[word-break:break-word] font-["Geist_Mono:Medium"] font-medium leading-[1.3] relative shrink-0 text-[10px] tracking-[0.6px] whitespace-nowrap ${isNeutral ? String.raw`text-[color:var(--text\/secondary,#6e6c68)]` : isInfo ? String.raw`text-[color:var(--primitive\/signal\/info,#6a5ad0)]` : isAttention ? String.raw`text-[color:var(--primitive\/signal\/attention,#c27a1a)]` : isRegress ? String.raw`text-[color:var(--primitive\/signal\/regress,#c2413b)]` : String.raw`text-[color:var(--primitive\/signal\/improve,#2f7d5b)]`}`} id={isNeutral ? "node-4_33" : isInfo ? "node-4_31" : isAttention ? "node-4_29" : isRegress ? "node-4_27" : "node-4_25"}>
        {isNeutral ? "Discovery" : isInfo ? "Pattern" : isAttention ? "Needs review" : isRegress ? "↓ Regressing" : "↑ Improving"}
      </p>
    </div>
  );
}
```

These styles are contained in the design: Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6).

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
