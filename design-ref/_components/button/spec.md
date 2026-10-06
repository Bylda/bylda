# Button · node `4:23` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · variants: Primary · Secondary · Ghost · Dark · Destructive × Default/Disabled. Built in code as `@/components/bylda` → `Button`.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — use the `by-*` component, never paste this.

## Code

```tsx
type ButtonProps = {
  className?: string;
  state?: "Default" | "Disabled";
  type?: "Primary" | "Secondary" | "Ghost" | "Dark" | "Destructive";
};

export default function Button({ className, state = "Default", type = "Primary" }: ButtonProps) {
  const isDarkAndDefault = type === "Dark" && state === "Default";
  const isDarkAndDisabled = type === "Dark" && state === "Disabled";
  const isDestructive = type === "Destructive";
  const isDestructiveAndDefault = type === "Destructive" && state === "Default";
  const isDestructiveAndDisabled = type === "Destructive" && state === "Disabled";
  const isGhost = type === "Ghost";
  const isGhostAndDefault = type === "Ghost" && state === "Default";
  const isGhostAndDisabled = type === "Ghost" && state === "Disabled";
  const isPrimaryAndDisabled = type === "Primary" && state === "Disabled";
  const isSecondary = type === "Secondary";
  const isSecondaryAndDefault = type === "Secondary" && state === "Default";
  const isSecondaryAndDisabled = type === "Secondary" && state === "Disabled";
  return (
    <div className={className || `content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] ${isDestructiveAndDisabled ? String.raw`bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] opacity-40` : isDestructiveAndDefault ? String.raw`bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)]` : isGhostAndDisabled ? "opacity-40" : isGhostAndDefault ? "" : isSecondaryAndDisabled ? String.raw`bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid opacity-40` : isSecondaryAndDefault ? String.raw`bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid` : state === "Disabled" && ["Primary", "Dark"].includes(type) ? String.raw`bg-[var(--primitive\/ink,#0b0b0c)] opacity-40` : String.raw`bg-[var(--primitive\/ink,#0b0b0c)]`}`} id={isDestructiveAndDisabled ? "node-4_21" : isDestructiveAndDefault ? "node-4_19" : isDarkAndDisabled ? "node-4_17" : isDarkAndDefault ? "node-4_15" : isGhostAndDisabled ? "node-4_13" : isGhostAndDefault ? "node-4_11" : isSecondaryAndDisabled ? "node-4_9" : isSecondaryAndDefault ? "node-4_7" : isPrimaryAndDisabled ? "node-4_5" : "node-4_3"}>
      <p className={`[word-break:break-word] font-["Inter:Medium"] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.042px] whitespace-nowrap ${isDestructive ? String.raw`text-[color:var(--primitive\/signal\/regress,#c2413b)]` : isGhost ? String.raw`text-[color:var(--primitive\/silver\/600,#6e6c68)]` : isSecondary ? String.raw`text-[color:var(--primitive\/ink,#0b0b0c)]` : String.raw`text-[color:var(--primitive\/white,white)]`}`} id={isDestructiveAndDisabled ? "node-4_22" : isDestructiveAndDefault ? "node-4_20" : isDarkAndDisabled ? "node-4_18" : isDarkAndDefault ? "node-4_16" : isGhostAndDisabled ? "node-4_14" : isGhostAndDefault ? "node-4_12" : isSecondaryAndDisabled ? "node-4_10" : isSecondaryAndDefault ? "node-4_8" : isPrimaryAndDisabled ? "node-4_6" : "node-4_4"}>
        {isDestructive ? "Remove" : isPrimaryAndDisabled || isSecondary || isGhost || type === "Dark" ? "Assign coaching" : "Assign coaching"}
      </p>
    </div>
  );
}
```

These styles are contained in the design: UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896).

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
