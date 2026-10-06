# Reactions · node `39:956` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · room message reactions.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — translate to `by-*`, never paste this.

## Code

```tsx
export default function Reactions({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-start relative"} data-node-id="39:956" data-name="Reactions">
      <div className="[word-break:break-word] bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex font-['Inter:Regular'] font-normal gap-[4px] items-start leading-[1.45] not-italic overflow-clip px-[8px] py-[3px] relative rounded-[999px] shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="39:957" data-name="Frame">
        <p className="relative shrink-0" data-node-id="39:958">
          ◉
        </p>
        <p className="relative shrink-0" data-node-id="39:959">
          3
        </p>
      </div>
      <div className="[word-break:break-word] bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex font-['Inter:Regular'] font-normal gap-[4px] items-start leading-[1.45] not-italic overflow-clip px-[8px] py-[3px] relative rounded-[999px] shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="39:960" data-name="Frame">
        <p className="relative shrink-0" data-node-id="39:961">
          ✓
        </p>
        <p className="relative shrink-0" data-node-id="39:962">
          2
        </p>
      </div>
      <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="39:963" data-name="Frame">
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="39:964">
          +
        </p>
      </div>
    </div>
  );
}
```

These styles are contained in the design: UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224).

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
