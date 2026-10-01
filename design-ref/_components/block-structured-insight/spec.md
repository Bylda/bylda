# Block / Structured insight · node `39:946` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · room message block.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — translate to `by-*`, never paste this.

## Code

```tsx
export default function BlockStructuredInsight({ className }: { className?: string }) {
  return (
    <div className={className || "[word-break:break-word] bg-[var(--primitive\\/pearl\\/50,#f2f1ee)] border border-[var(--primitive\\/silver\\/200,#e5e3df)] border-solid content-stretch flex items-start not-italic relative rounded-[10px] w-[560px]"} data-node-id="39:946" data-name="Block / Structured insight">
      <div className="border-[var(--primitive\/silver\/200,#e5e3df)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[14px] py-[12px] relative" data-node-id="39:947" data-name="Frame">
        <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="39:948">
          Key moment
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-[min-content]" data-node-id="39:949">
          Acme CFO voiced rollout risk at 18:42; treated as price.
        </p>
      </div>
      <div className="border-[var(--primitive\/silver\/200,#e5e3df)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[14px] py-[12px] relative" data-node-id="39:950" data-name="Frame">
        <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="39:951">
          Behavioral insight
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-[min-content]" data-node-id="39:952">
          Reps answered before diagnosing in 7 of 9 price objections.
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[14px] py-[12px] relative" data-node-id="39:953" data-name="Frame">
        <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="39:954">
          Today’s focus
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-[min-content]" data-node-id="39:955">
          Pause · ask “what’s behind that?” · then answer.
        </p>
      </div>
    </div>
  );
}
```

These styles are contained in the design: UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224).

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
