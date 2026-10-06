# B7 — Mobile — Room #objection-watch · node `52:11424` · Lane 5 (Mayur) · route `/m/rooms/$roomId` · exported 2026-10-02

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This result came back inline (too small for the tool to save to a file); it was copied byte-for-byte from the tool result in the session transcript, not retyped.
> Mobile screen (390×844, `/m/*`) — outside the app shell.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.

## Code

```tsx
const imgIconPlus = "https://www.figma.com/api/mcp/asset/0c2bfad8-4635-404d-adf1-d3fa5edd263c.svg";
const imgIconSend = "https://www.figma.com/api/mcp/asset/5b55a38d-d838-4f91-9010-1a5a05f96de2.svg";

function BadgeApp({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--primitive\\/pearl\\/100,#eae8e4)] content-stretch flex items-start px-[5px] py-px relative rounded-[4px]"} data-node-id="39:965" data-name="Badge / APP">
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="39:966">
        APP
      </p>
    </div>
  );
}

function Reactions({ className }: { className?: string }) {
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

type ConfidenceProps = {
  className?: string;
  level?: "High";
};

function Confidence({ className, level = "High" }: ConfidenceProps) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center relative"} data-node-id="4:60">
      <div className="content-stretch flex gap-[2px] items-start overflow-clip relative shrink-0" data-node-id="4:61" data-name="Bars">
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[10px] relative shrink-0 w-[3px]" data-node-id="4:62" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[10px] relative shrink-0 w-[3px]" data-node-id="4:63" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[10px] relative shrink-0 w-[3px]" data-node-id="4:64" data-name="Rectangle" />
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="4:65">
        CONFIDENCE HIGH
      </p>
    </div>
  );
}

export default function MobileRoomObjectionWatch() {
  return (
    <div className="bg-[var(--primitive\/pearl\/0,#f8f7f5)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[28px] size-full" data-node-id="52:11424" data-name="Mobile — Room #objection-watch">
      <div className="bg-[var(--primitive\/white,white)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[18px] py-[12px] relative shrink-0 w-full" data-node-id="52:11425" data-name="Frame">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="52:11426" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist_Mono:Regular'] font-normal leading-[1.4] min-w-px relative text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="52:11427">
            9:41
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="52:11428" data-name="Frame">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] relative shrink-0 text-[15px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.075px]" data-node-id="52:11429">
            ‹
          </p>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px overflow-clip relative" data-node-id="52:11430" data-name="Frame">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="52:11431">
              # objection-watch
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="52:11432">
              7 members · 9 new
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px overflow-clip px-[16px] py-[14px] relative w-full" data-node-id="52:11433" data-name="Frame">
        <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:11442" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 size-[28px]" data-node-id="52:11443" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="52:11444">
              B
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="52:11445" data-name="Frame">
            <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="52:11446" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:11447">
                BYLDA
              </p>
              <BadgeApp className="bg-[var(--primitive\/pearl\/100,#eae8e4)] content-stretch flex items-start px-[5px] py-px relative rounded-[4px] shrink-0" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:11450">
                8:02
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="52:11451">
              Price objections up 31%. Reps respond before identifying the concern.
            </p>
            <Confidence className="content-stretch flex gap-[6px] items-center relative shrink-0" />
            <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-node-id="52:11458" data-name="Frame">
              <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="52:11459" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I52:11459;4:4">
                  Team focus
                </p>
              </div>
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="52:11461" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I52:11461;4:8">
                  9 calls
                </p>
              </div>
            </div>
            <Reactions className="content-stretch flex gap-[6px] items-start relative shrink-0" />
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:11472" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" data-node-id="52:11473" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:11473;4:36">
              DW
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative" data-node-id="52:11475" data-name="Frame">
            <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="52:11476" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:11477">
                Dana
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="52:11478">
                8:40
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="52:11479">
              @Jordan @Alex review before tomorrow.
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:11480" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 size-[28px]" data-node-id="52:11481" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="52:11482">
              B
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="52:11483" data-name="Frame">
            <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="52:11484" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:11485">
                BYLDA
              </p>
              <BadgeApp className="bg-[var(--primitive\/pearl\/100,#eae8e4)] content-stretch flex items-start px-[5px] py-px relative rounded-[4px] shrink-0" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:11488">
                11:26
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="52:11489">
              Theo’s Brightline call is the example to copy.
            </p>
            <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start px-[14px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="52:11490" data-name="Evidence Block">
              <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I52:11490;4:68" data-name="Meta">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I52:11490;4:69">
                  12:30
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="I52:11490;4:70">
                  THEO
                </p>
              </div>
              <p className="flex-[1_0_0] font-['Newsreader:Italic'] font-normal italic leading-[1.45] min-w-px relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I52:11490;4:71">
                2.1s pause → “What were you planning for?”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--primitive\/white,white)] border-[var(--border\/engraved,#e5e3df)] border-solid border-t content-stretch flex gap-[10px] items-center overflow-clip pb-[28px] pt-[12px] px-[14px] relative shrink-0 w-full" data-node-id="52:11434" data-name="Frame">
        <div className="relative shrink-0 size-[16px]" data-node-id="52:11435" data-name="Icon/plus">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus} />
        </div>
        <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip px-[12px] py-[8px] relative rounded-[18px]" data-node-id="52:11438" data-name="Frame">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:11439">
            Message
          </p>
        </div>
        <div className="relative shrink-0 size-[16px]" data-node-id="52:11440" data-name="Icon/send">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
        </div>
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

These styles are contained in the design: Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), Editorial/Quote: Font(family: "Newsreader", style: Italic, size: 15, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: 0).

Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## Confidence
**Node ID:** 4:66

Always pair with sample size (n=). Low = do not recommend action, only observe.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

## Avatar
**Node ID:** 4:35

Photo avatar slot: runtime uses the user’s SSO/Google photo; mockups show a warm-metal monogram.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
