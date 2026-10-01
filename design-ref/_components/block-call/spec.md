# Block / Call · node `39:918` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · room message block.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — translate to `by-*`, never paste this.
> ⚠️ The thumbnail uses a 3-stop gradient. CLAUDE.md §3 bans gradients except the avatar monogram — raise in `LANE_REQUESTS.md` before copying it.

## Code

```tsx
const imgIconPlay = "https://www.figma.com/api/mcp/asset/6fc0e1d2-eaf1-4538-9d0f-75403e734a51.svg";
const imgIconMore = "https://www.figma.com/api/mcp/asset/c666b865-618d-445d-a05d-d1986cf51ac7.svg";

export default function BlockCall({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--primitive\\/white,white)] border border-[var(--primitive\\/silver\\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center px-[14px] py-[12px] relative rounded-[10px] w-[560px]"} data-node-id="39:918" data-name="Block / Call">
      <div className="content-stretch flex h-[68px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0 w-[120px]" data-node-id="39:919" style={{ backgroundImage: "linear-gradient(142.92692736710416deg, rgb(56, 56, 61) 0%, rgb(140, 138, 133) 35.714%, rgb(31, 31, 33) 71.429%)" }} data-name="Thumbnail">
        <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center opacity-92 overflow-clip relative rounded-[999px] shrink-0 size-[28px]" data-node-id="39:920" data-name="Frame">
          <div className="relative shrink-0 size-[12px]" data-node-id="39:921" data-name="Icon/play">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlay} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative" data-node-id="39:923" data-name="Frame">
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="39:924">
          Jordan × Acme Logistics
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="39:925">
          38 min · Mon 2:00 PM · 4 key moments
        </p>
        <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="39:926" data-name="Frame">
          <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="39:927" data-name="Tag">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I39:927;4:27">
              Lost control 18:42
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="39:929" data-name="Button">
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I39:929;4:8">
          Review call
        </p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-node-id="39:931" data-name="Icon/more">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMore} />
      </div>
    </div>
  );
}
```

These styles are contained in the design: UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6).

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

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
