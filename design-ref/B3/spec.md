# B3 — Mobile — Quick call review + coach · node `20:67` · Lane 5 (Mayur) · route `/m/calls/$callId` · exported 2026-10-02

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This result came back inline (too small for the tool to save to a file); it was copied byte-for-byte from the tool result in the session transcript, not retyped.
> Mobile screen (390×844, `/m/*`) — outside the app shell.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.

## Code

```tsx
function Avatar({ className }: { className?: string }) {
  return (
    <div className={className || "border-[1.5px] border-[var(--primitive\\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] size-[28px]"} data-node-id="4:35" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="4:36">
        JR
      </p>
    </div>
  );
}

export default function MobileQuickCallReviewCoach() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[20px] relative rounded-[28px] size-full" data-node-id="20:67" data-name="Mobile — Quick call review + coach">
      <div className="[word-break:break-word] content-stretch flex items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="20:68" data-name="Frame">
        <p className="flex-[1_0_0] font-['Geist_Mono:Regular'] font-normal leading-[1.4] min-w-px relative text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="20:69">
          9:41
        </p>
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[1.1px] whitespace-nowrap" data-node-id="20:70">
          B Y L D A
        </p>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="20:71">
        ← CALLS
      </p>
      <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] whitespace-nowrap" data-node-id="20:72">
        Acme Logistics
      </p>
      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="20:73" data-name="Frame">
        <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" />
        <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="20:76">
          Jordan · 38:12
        </p>
        <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="20:77" data-name="Tag">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I20:77;4:29">
            Stalled
          </p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="20:79">
        Strong first 17 minutes. Control was lost at 18:42 when Jordan answered the CFO’s concern before he finished.
      </p>
      <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex gap-[4px] items-end overflow-clip px-[10px] py-[14px] relative shrink-0 w-full" data-node-id="20:80" data-name="Frame">
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:81" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:82" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:83" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:84" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:85" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:86" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:87" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:88" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:89" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:90" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:91" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:92" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:93" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:94" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:95" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:96" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/signal\/attention,#c27a1a)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:97" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:98" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:99" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:100" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:101" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:102" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:103" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:104" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:105" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:106" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:107" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:108" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:109" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[18px] relative shrink-0 w-[4px]" data-node-id="20:110" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:111" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:112" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:113" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[8px] relative shrink-0 w-[4px]" data-node-id="20:114" data-name="Rectangle" />
      </div>
      <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start px-[14px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="20:115" data-name="Evidence Block">
        <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I20:115;4:68" data-name="Meta">
          <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I20:115;4:69">
            18:42
          </p>
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="I20:115;4:70">
            ACME · CFO
          </p>
        </div>
        <p className="flex-[1_0_0] font-['Newsreader:Italic'] font-normal italic leading-[1.45] min-w-px relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I20:115;4:71">
          “Honestly the number isn’t the problem, it’s whether my team will actually—”
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:120" data-name="Frame">
        <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="20:121" data-name="Button">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I20:121;4:16">
            Assign coaching to Jordan
          </p>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="20:123" data-name="Button">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I20:123;4:8">
            Play 90-sec moment
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-solid border-t content-stretch flex h-[72px] items-start justify-between left-[-1px] not-italic overflow-clip px-[32px] py-[12px] top-[771px] w-[390px] whitespace-nowrap" data-node-id="20:125" data-name="Frame">
        <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="20:126">
          Brief
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="20:127">
          Calls
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="20:128">
          Coaching
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="20:129">
          Alerts
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

These styles are contained in the design: Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), Display/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 10), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H2: Font(family: "Newsreader", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), Editorial/Quote: Font(family: "Newsreader", style: Italic, size: 15, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: 0), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224).

Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## Avatar
**Node ID:** 4:35

Photo avatar slot: runtime uses the user’s SSO/Google photo; mockups show a warm-metal monogram.

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
