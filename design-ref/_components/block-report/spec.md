# Block / Report · node `39:904` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · room message block.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — translate to `by-*`, never paste this.

## Code

```tsx
const imgIconFile = "https://www.figma.com/api/mcp/asset/f5ceda1a-54cc-4b02-b11a-a7028e7ba280.svg";
const imgIconMore = "https://www.figma.com/api/mcp/asset/712d679d-7061-4d19-aa1f-4a10a65b0d13.svg";

export default function BlockReport({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--primitive\\/white,white)] border border-[var(--primitive\\/silver\\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center px-[14px] py-[12px] relative rounded-[10px] w-[560px]"} data-node-id="39:904" data-name="Block / Report">
      <div className="bg-[var(--primitive\/signal\/info-bg,#eeebfa)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-node-id="39:905" data-name="Frame">
        <div className="relative shrink-0 size-[18px]" data-node-id="39:906" data-name="Icon/file">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFile} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="39:909" data-name="Frame">
        <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="39:910">
          Weekly Sales Behavior Report
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="39:911">
          Report · Wk 39 · 5-min read
        </p>
      </div>
      <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="39:912" data-name="Button">
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I39:912;4:8">
          Open
        </p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-node-id="39:914" data-name="Icon/more">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMore} />
      </div>
    </div>
  );
}
```

These styles are contained in the design: UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224).

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
