# B6 — Mobile — Moment player (Rep) · node `32:646` · Lane 5 (Mayur) · route `/m/moments/$momentId` · exported 2026-10-02

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This result came back inline (too small for the tool to save to a file); it was copied byte-for-byte from the tool result in the session transcript, not retyped.
> Mobile screen (390×844, `/m/*`) — outside the app shell.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.

## Code

```tsx
export default function MobileMomentPlayerRep() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[20px] relative rounded-[28px] size-full" data-node-id="32:646" data-name="Mobile — Moment player (Rep)">
      <div className="[word-break:break-word] content-stretch flex items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="32:647" data-name="Frame">
        <p className="flex-[1_0_0] font-['Geist_Mono:Regular'] font-normal leading-[1.4] min-w-px relative text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="32:648">
          9:41
        </p>
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[1.1px] whitespace-nowrap" data-node-id="32:649">
          B Y L D A
        </p>
      </div>
      <div className="[word-break:break-word] absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-solid border-t content-stretch flex h-[72px] items-center justify-between left-[-1px] not-italic overflow-clip px-[32px] top-[771px] w-[390px] whitespace-nowrap" data-node-id="32:650" data-name="Frame">
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="32:651">
          Brief
        </p>
        <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="32:652">
          Calls
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="32:653">
          Coaching
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="32:654">
          Alerts
        </p>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:655">
        ← ACME LOGISTICS
      </p>
      <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-full relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] w-[min-content]" data-node-id="32:656">
        The 90 seconds that mattered
      </p>
      <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[18px] relative shrink-0 w-full" data-node-id="32:657" data-name="Frame">
        <div className="content-stretch flex gap-[3px] items-center overflow-clip relative shrink-0" data-node-id="32:658" data-name="Frame">
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[6px] relative shrink-0 w-[4px]" data-node-id="32:659" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[17px] relative shrink-0 w-[4px]" data-node-id="32:660" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[28px] relative shrink-0 w-[4px]" data-node-id="32:661" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[13px] relative shrink-0 w-[4px]" data-node-id="32:662" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[24px] relative shrink-0 w-[4px]" data-node-id="32:663" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[9px] relative shrink-0 w-[4px]" data-node-id="32:664" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[20px] relative shrink-0 w-[4px]" data-node-id="32:665" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[31px] relative shrink-0 w-[4px]" data-node-id="32:666" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[16px] relative shrink-0 w-[4px]" data-node-id="32:667" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[27px] relative shrink-0 w-[4px]" data-node-id="32:668" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[12px] relative shrink-0 w-[4px]" data-node-id="32:669" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[23px] relative shrink-0 w-[4px]" data-node-id="32:670" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[8px] relative shrink-0 w-[4px]" data-node-id="32:671" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] h-[19px] relative shrink-0 w-[4px]" data-node-id="32:672" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[30px] relative shrink-0 w-[4px]" data-node-id="32:673" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[15px] relative shrink-0 w-[4px]" data-node-id="32:674" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[26px] relative shrink-0 w-[4px]" data-node-id="32:675" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[11px] relative shrink-0 w-[4px]" data-node-id="32:676" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[22px] relative shrink-0 w-[4px]" data-node-id="32:677" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[7px] relative shrink-0 w-[4px]" data-node-id="32:678" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[18px] relative shrink-0 w-[4px]" data-node-id="32:679" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[29px] relative shrink-0 w-[4px]" data-node-id="32:680" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[14px] relative shrink-0 w-[4px]" data-node-id="32:681" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[25px] relative shrink-0 w-[4px]" data-node-id="32:682" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[10px] relative shrink-0 w-[4px]" data-node-id="32:683" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[21px] relative shrink-0 w-[4px]" data-node-id="32:684" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[6px] relative shrink-0 w-[4px]" data-node-id="32:685" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[17px] relative shrink-0 w-[4px]" data-node-id="32:686" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[28px] relative shrink-0 w-[4px]" data-node-id="32:687" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[13px] relative shrink-0 w-[4px]" data-node-id="32:688" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[24px] relative shrink-0 w-[4px]" data-node-id="32:689" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[9px] relative shrink-0 w-[4px]" data-node-id="32:690" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[20px] relative shrink-0 w-[4px]" data-node-id="32:691" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[31px] relative shrink-0 w-[4px]" data-node-id="32:692" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[16px] relative shrink-0 w-[4px]" data-node-id="32:693" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[27px] relative shrink-0 w-[4px]" data-node-id="32:694" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[12px] relative shrink-0 w-[4px]" data-node-id="32:695" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[23px] relative shrink-0 w-[4px]" data-node-id="32:696" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[8px] relative shrink-0 w-[4px]" data-node-id="32:697" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-[19px] relative shrink-0 w-[4px]" data-node-id="32:698" data-name="Rectangle" />
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 text-[color:var(--text\/on-dark,#eae8e4)] whitespace-nowrap" data-node-id="32:699" data-name="Frame">
          <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px]" data-node-id="32:700">
            −10
          </p>
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] tracking-[-0.075px]" data-node-id="32:701">
            ▶
          </p>
          <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px]" data-node-id="32:702">
            +10
          </p>
          <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px]" data-node-id="32:703">
            1×
          </p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="32:704">{`18:42  DAVID · CFO`}</p>
      <p className="[word-break:break-word] font-['Newsreader:Italic'] font-normal italic leading-[1.45] min-w-full relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] w-[min-content]" data-node-id="32:705">
        “Honestly the number isn’t the problem, it’s whether my team will actually—”
      </p>
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-pre" data-node-id="32:706">{`18:44  YOU`}</p>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="32:707">
        “Totally, and we can flex on price if—”
      </p>
      <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col font-medium gap-[4px] items-start overflow-clip px-[14px] py-[12px] relative shrink-0 w-full" data-node-id="32:708" data-name="Frame">
        <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:709">
          TRY THIS NEXT TIME
        </p>
        <p className="font-['Inter:Medium'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="32:710">
          Pause. “Whether your team will actually… what?”
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

These styles are contained in the design: Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), Display/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 10), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H2: Font(family: "Newsreader", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5), Editorial/Quote: Font(family: "Newsreader", style: Italic, size: 15, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: 0), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896).

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
