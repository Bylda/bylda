# P10 — Weekly Report — PDF / print (A4) · node `29:1154` · Lane 6 (Mayur) · route `/doc/weekly-print` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This result came back inline (too small for the tool to save to a file); it was copied byte-for-byte from the tool result in the session transcript, not retyped. Not an app screen (email / push / print) — no shell.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.

## Code

```tsx
export default function WeeklyReportPdfPrintA4() {
  return (
    <div className="bg-[var(--primitive\/white,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex flex-col gap-[18px] items-start p-[64px] relative size-full" data-node-id="29:1154" data-name="Weekly Report — PDF / print (A4)">
      <div className="[word-break:break-word] content-stretch flex items-start leading-[1.3] overflow-clip relative shrink-0 w-full" data-node-id="29:1155" data-name="Frame">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[1.1px]" data-node-id="29:1156">
          B Y L D A
        </p>
        <p className="font-['Geist_Mono:Medium'] font-medium relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="29:1157">
          ACME REVENUE · CONFIDENTIAL
        </p>
      </div>
      <div className="bg-[var(--primitive\/ink,#0b0b0c)] h-px relative shrink-0 w-full" data-node-id="29:1158" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.12] min-w-full relative shrink-0 text-[30px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.45px] w-[min-content]" data-node-id="29:1159">
        Weekly Sales Behavior Report
      </p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="29:1160">
        Mid-Market AE · Week of September 21 · 164 calls · 9 reps
      </p>
      <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] whitespace-nowrap" data-node-id="29:1161">
        Executive summary
      </p>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="29:1162">
        Discovery quality is the best it’s been in 8 weeks. Objection handling got worse, concentrated in pricing conversations and in two reps. Alex’s coaching held for a third week.
      </p>
      <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] whitespace-nowrap" data-node-id="29:1163">
        Team behavior
      </p>
      <div className="[word-break:break-word] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="29:1164" data-name="Table">
        <div className="bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="29:1165" data-name="Frame">
          <p className="relative shrink-0 w-[240px]" data-node-id="29:1166">
            BEHAVIOR
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1167">
            THIS WK
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1168">
            LAST WK
          </p>
          <p className="relative shrink-0 w-[120px]" data-node-id="29:1169">
            CHANGE
          </p>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Inter:Regular'] font-normal items-center leading-[1.45] not-italic overflow-clip px-[16px] py-[10px] relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-full" data-node-id="29:1170" data-name="Frame">
          <p className="relative shrink-0 w-[240px]" data-node-id="29:1171">
            Discovery depth
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1172">
            3.4
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1173">
            2.9
          </p>
          <p className="relative shrink-0 w-[120px]" data-node-id="29:1174">
            +0.5
          </p>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Inter:Regular'] font-normal items-center leading-[1.45] not-italic overflow-clip px-[16px] py-[10px] relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-full" data-node-id="29:1175" data-name="Frame">
          <p className="relative shrink-0 w-[240px]" data-node-id="29:1176">
            Held control in objections
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1177">
            54%
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1178">
            61%
          </p>
          <p className="relative shrink-0 w-[120px]" data-node-id="29:1179">
            −7 pts
          </p>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Inter:Regular'] font-normal items-center leading-[1.45] not-italic overflow-clip px-[16px] py-[10px] relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-full" data-node-id="29:1180" data-name="Frame">
          <p className="relative shrink-0 w-[240px]" data-node-id="29:1181">
            Next step booked
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1182">
            76%
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1183">
            74%
          </p>
          <p className="relative shrink-0 w-[120px]" data-node-id="29:1184">
            +2 pts
          </p>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Inter:Regular'] font-normal items-center leading-[1.45] not-italic overflow-clip px-[16px] py-[10px] relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-full" data-node-id="29:1185" data-name="Frame">
          <p className="relative shrink-0 w-[240px]" data-node-id="29:1186">
            Interruptions / objection
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1187">
            0.9
          </p>
          <p className="relative shrink-0 w-[100px]" data-node-id="29:1188">
            0.76
          </p>
          <p className="relative shrink-0 w-[120px]" data-node-id="29:1189">
            +18%
          </p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] whitespace-nowrap" data-node-id="29:1190">
        Coaching priorities
      </p>
      <div className="[word-break:break-word] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="29:1191" data-name="Frame">
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="29:1192" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[110px]" data-node-id="29:1193">
            1 · Jordan
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="29:1194">
            Pause after objections
          </p>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="29:1195" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[110px]" data-node-id="29:1196">
            2 · Sarah
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="29:1197">
            Same behavior — joint session
          </p>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="29:1198" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[110px]" data-node-id="29:1199">
            3 · Mia
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="29:1200">
            Discovery before demo
          </p>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="29:1201" data-name="Frame" />
      <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="29:1202" data-name="Frame">
        <p className="flex-[1_0_0] min-w-px relative" data-node-id="29:1203">
          Associations, not proven causes. Confidence and sample sizes in the online version.
        </p>
        <p className="relative shrink-0 whitespace-nowrap" data-node-id="29:1204">
          1 / 3
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

These styles are contained in the design: Display/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 10), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), Display/L: Font(family: "Newsreader", style: Medium, size: 30, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), Editorial/H2: Font(family: "Newsreader", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224).

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
