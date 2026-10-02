# P4 — Daily Rep Brief — email / push (60 sec) · node `13:316` · Lane 6 (Dhruv) · route `/doc/rep-brief-push` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This result came back inline (too small for the tool to save to a file); it was copied byte-for-byte from the tool result in the session transcript, not retyped. Not an app screen (email / push / print) — no shell.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.

## Code

```tsx
export default function DailyRepBriefEmailPush60Sec() {
  return (
    <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[14px] items-start px-[32px] py-[28px] relative size-full" data-node-id="13:316" data-name="Daily Rep Brief — email / push (60 sec)">
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="13:317">{`B Y L D A  ·  YOUR 60-SECOND BRIEF`}</p>
      <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] whitespace-nowrap" data-node-id="13:318">
        Morning, Jordan.
      </p>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="13:319">
        Great discovery yesterday. Lost control on pricing twice — same moment both times.
      </p>
      <div className="[word-break:break-word] bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col font-medium gap-[6px] items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="13:320" data-name="Frame">
        <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/on-dark-muted,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="13:321">
          TODAY’S FOCUS
        </p>
        <p className="font-['Newsreader:Medium'] leading-[1.35] min-w-full relative shrink-0 text-[18px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.09px] w-[min-content]" data-node-id="13:322">
          After an objection, pause before you respond.
        </p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-[min-content]" data-node-id="13:323">
        Try: one breath, then “When you say price — what’s behind that?”
      </p>
      <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="13:324" data-name="Button">
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I13:324;4:4">
          Hear the 90-second moment
        </p>
      </div>
    </div>
  );
}
```

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.


Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

These styles are contained in the design: Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H2: Font(family: "Newsreader", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), Editorial/Insight: Font(family: "Newsreader", style: Medium, size: 18, weight: 500, lineHeight: 1.350000023841858, letterSpacing: -0.5), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896).

Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
