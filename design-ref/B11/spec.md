# B11 — Responsive — Manager Home @1024 (icon rail only) · node `32:7490` · Lane 5 (Mayur) · route `/app/home @1024` · exported 2026-10-02

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This result came back inline (too small for the tool to save to a file); it was copied byte-for-byte from the tool result in the session transcript, not retyped.
> Shell breakpoint — **Foundation builds it; Lane 5 only QA's it** (CLAUDE.md §8). Check, don't rebuild.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/be32b9ea-fa9b-46e0-b32e-4986b0391f55.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/89784266-8d94-4262-9815-f68bbb9bafbd.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/8be198aa-3623-4fa3-8f0f-96320ce21efd.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/4c4b9b56-609a-4b56-a5c4-07ea515e7f28.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/a3ab1c8c-35c3-4c5a-a29a-35c94d7edcd7.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/3d066e77-e0c5-4548-9d7b-515a2de2cbdd.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/e45c8c80-c60b-4997-b58d-952790357aee.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/b08f8e7a-0718-4dd2-b368-0237f800c2b5.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/e63c3245-e2a6-4268-bd75-fe095bf3d6ca.svg";
const imgByldaGlyph = "https://www.figma.com/api/mcp/asset/46fbf181-2a16-4a17-a781-5b39943cbeec.svg";
const imgPolygon = "https://www.figma.com/api/mcp/asset/84b6969e-7277-46de-b3c6-f946155f5634.svg";
const imgSparkline = "https://www.figma.com/api/mcp/asset/1e83f13a-1026-41e5-880f-f2432f1f68cd.svg";
const imgSparkline1 = "https://www.figma.com/api/mcp/asset/c9eb5994-9b67-4a7e-8177-57c6ad6aba92.svg";

type TagProps = {
  className?: string;
  tone?: "Improve" | "Regress";
};

function Tag({ className, tone = "Improve" }: TagProps) {
  const isRegress = tone === "Regress";
  return (
    <div className={className || `content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] ${isRegress ? String.raw`bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)]` : String.raw`bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)]`}`} id={isRegress ? "node-4_26" : "node-4_24"}>
      <p className={`[word-break:break-word] font-["Geist_Mono:Medium"] font-medium leading-[1.3] relative shrink-0 text-[10px] tracking-[0.6px] whitespace-nowrap ${isRegress ? String.raw`text-[color:var(--primitive\/signal\/regress,#c2413b)]` : String.raw`text-[color:var(--primitive\/signal\/improve,#2f7d5b)]`}`} id={isRegress ? "node-4_27" : "node-4_25"}>
        {isRegress ? "↓ Regressing" : "↑ Improving"}
      </p>
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

function Avatar({ className }: { className?: string }) {
  return (
    <div className={className || "border-[1.5px] border-[var(--primitive\\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] size-[28px]"} data-node-id="4:35" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="4:36">
        JR
      </p>
    </div>
  );
}

type ButtonProps = {
  className?: string;
  state?: "Default";
  type?: "Primary";
};

function Button({ className, state = "Default", type = "Primary" }: ButtonProps) {
  return (
    <div className={className || "bg-[var(--primitive\\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px]"} data-node-id="4:3">
      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="4:4">
        Assign coaching
      </p>
    </div>
  );
}

type WorkspaceTopBarProps = {
  className?: string;
  crumb?: string;
};

function WorkspaceTopBar({ className, crumb = "Home" }: WorkspaceTopBarProps) {
  return (
    <div className={className || "bg-[var(--primitive\\/white,white)] border-[var(--primitive\\/silver\\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center pl-[28px] pr-[20px] relative w-[784px]"} data-node-id="36:52" data-name="Workspace Top Bar">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[-0.025px]" data-node-id="36:53">
        {crumb}
      </p>
      <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[8px] h-[34px] items-center overflow-clip pl-[12px] pr-[8px] py-[7px] relative rounded-[8px] shrink-0 w-[300px]" data-node-id="36:54" data-name="Search">
        <div className="relative shrink-0 size-[15px]" data-node-id="36:55" data-name="Icon/search">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="36:58">
          Search calls, people, insights…
        </p>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[5px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="36:59" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="36:60">
            ⌘ K
          </p>
        </div>
      </div>
      <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex gap-[6px] items-center overflow-clip pl-[12px] pr-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="36:61" data-name="New">
        <div className="relative shrink-0 size-[14px]" data-node-id="36:62" data-name="Icon/plus">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="36:65">
          New
        </p>
      </div>
      <div className="border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[34px]" data-node-id="36:66" data-name="Bell">
        <div className="relative shrink-0 size-[17px]" data-node-id="36:67" data-name="Icon/bell">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
        </div>
      </div>
    </div>
  );
}

export default function ResponsiveManagerHome1024IconRailOnly() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="32:7490" data-name="Responsive — Manager Home @1024 (icon rail only)">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[64px]" data-node-id="38:20553" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I38:20553;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:20553;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:20553;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:20553;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:20553;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:20553;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:20553;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:20553;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I38:20553;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:20553;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:20553;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:20553;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:20553;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:20553;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:20553;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:20553;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:20553;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:20553;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:20553;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:20553;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:20553;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I38:20553;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:20553;37:93;4:36">
              DW
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[64px] pl-[28px] pr-[20px] top-0 w-[960px]" crumb="Responsive  /  Manager Home @1024 (icon rail only)" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[64px] overflow-clip px-[36px] py-[28px] top-[56px] w-[960px]" data-node-id="32:7492" data-name="Main">
        <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-node-id="32:7493" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-medium gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="32:7494" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7495">
              TUESDAY · SEPTEMBER 29
            </p>
            <p className="font-['Newsreader:Medium'] leading-[1.12] min-w-full relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] w-[min-content]" data-node-id="32:7496">
              Good morning, Dana. Three things need you.
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[18px] items-start overflow-clip relative shrink-0" data-node-id="32:7497" data-name="Frame">
          <div className="border-[var(--primitive\/ink,#0b0b0c)] border-b-[1.5px] border-solid content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0" data-node-id="32:7498" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="32:7499">
              For you
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0" data-node-id="32:7500" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="32:7501">
              All activity
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0" data-node-id="32:7502" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="32:7503">
              Patterns
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0" data-node-id="32:7504" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="32:7505">
              Reports
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex items-start overflow-clip relative rounded-[10px] shrink-0 w-full whitespace-nowrap" data-node-id="32:7506" data-name="Frame">
          <div className="border-[var(--border\/engraved,#e5e3df)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="32:7507" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="32:7508">
              CALLS ANALYZED
            </p>
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="32:7509">
              142
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px]" data-node-id="32:7510">
              +18 vs Mon
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="32:7511" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="32:7512">
              REPS ACTIVE
            </p>
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="32:7513">
              9 / 9
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px]" data-node-id="32:7514">
              all on calls
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="32:7515" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="32:7516">
              BEHAVIOR SHIFTS
            </p>
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="32:7517">
              5
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px]" data-node-id="32:7518">
              3 up · 2 down
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="32:7519" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="32:7520">
              NEEDS REVIEW
            </p>
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="32:7521">
              4 calls
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px]" data-node-id="32:7522">
              ~26 min total
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="32:7523" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="32:7524">
              COACHING OPEN
            </p>
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="32:7525">
              3
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px]" data-node-id="32:7526">
              1 due today
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[14px] items-start px-[20px] py-[18px] relative rounded-[10px] shrink-0 w-full" data-node-id="32:7527" data-name="Insight Card">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I32:7527;4:73" data-name="Header">
            <div className="h-[9px] relative shrink-0 w-[10px]" data-node-id="I32:7527;4:74" data-name="Bylda glyph">
              <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                <img alt="" className="block max-w-none size-full" src={imgByldaGlyph} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:7527;4:75">
              BYLDA · REGRESSION · JORDAN REYES
            </p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="I32:7527;4:76" data-name="Frame" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:7527;4:77">
              8:04 AM
            </p>
          </div>
          <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.35] min-w-full relative shrink-0 text-[18px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.09px] w-[min-content]" data-node-id="I32:7527;4:78">
            Jordan lost control during 4 of 6 price objections this week.
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-[min-content]" data-node-id="I32:7527;4:79">
            He answers in ~0.4s — before the prospect finishes the concern — then defends price for 90+ seconds. Reps on this team who hold these calls pause ~1.8s and ask one clarifying question first.
          </p>
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="I32:7527;4:80" data-name="Meta">
            <Confidence className="content-stretch flex gap-[6px] items-center relative shrink-0" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:7527;4:87">
              n = 6 objections · 4 calls · vs 31 team objections
            </p>
            <Tag className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" tone="Regress" />
          </div>
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start px-[14px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="I32:7527;4:90" data-name="Evidence Block">
            <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I32:7527;4:90;4:68" data-name="Meta">
              <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I32:7527;4:90;4:69">
                18:42
              </p>
              <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="I32:7527;4:90;4:70">
                ACME · CFO
              </p>
            </div>
            <p className="flex-[1_0_0] font-['Newsreader:Italic'] font-normal italic leading-[1.45] min-w-px relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I32:7527;4:90;4:71">
              “Honestly the number isn’t the problem, it’s whether my team will actually—” / JORDAN: “Totally, and we can flex on price if—”
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="I32:7527;4:95" data-name="Actions">
            <Button className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" />
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="I32:7527;4:98" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I32:7527;4:98;4:8">
                View 4 calls
              </p>
            </div>
            <div className="content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="I32:7527;4:100" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I32:7527;4:100;4:12">
                Dismiss
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-[18px] relative rounded-[10px] shrink-0 w-full" data-node-id="32:7528" data-name="Feed / Pattern">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="32:7529" data-name="Frame">
            <div className="h-[9px] relative shrink-0 w-[10px]" data-node-id="32:7530" data-name="Polygon">
              <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                <img alt="" className="block max-w-none size-full" src={imgPolygon} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7531">
              BYLDA · EMERGING PATTERN · TEAM
            </p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="32:7532" data-name="Frame" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7533">
              7:58 AM
            </p>
          </div>
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="32:7534" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="32:7535" data-name="Frame">
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.35] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.09px] w-full" data-node-id="32:7536">
                Price objections are up 31% this week, and reps are defending price before diagnosing the concern.
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="32:7537">
                In 7 of 9 affected calls the rep offered a discount or ROI defense before asking a single question. This is associated with calls stalling at pricing — not yet with lost deals (too few closed).
              </p>
            </div>
            <div className="bg-[var(--surface\/inset,#f2f1ee)] content-stretch flex flex-col gap-[6px] items-start overflow-clip px-[12px] py-[10px] relative shrink-0 w-[180px]" data-node-id="32:7538" data-name="Frame">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7539">
                PRICE OBJECTIONS / WK
              </p>
              <div className="h-[30px] relative shrink-0 w-[156px]" data-node-id="32:7540" data-name="Sparkline">
                <div className="absolute inset-[-1.8%_-0.2%_-2%_-0.11%]">
                  <img alt="" className="block max-w-none size-full" src={imgSparkline} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7541">
                17 this wk · 13 last
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="32:7542" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7543">
              AFFECTED
            </p>
            <div className="border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex gap-[6px] items-center overflow-clip px-[6px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:7544" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[18px]" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] whitespace-nowrap" data-node-id="32:7546">
                Jordan · 4
              </p>
            </div>
            <div className="border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex gap-[6px] items-center overflow-clip px-[6px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:7547" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[18px]" data-node-id="32:7548" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:7548;4:36">
                  AM
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] whitespace-nowrap" data-node-id="32:7549">
                Alex · 3
              </p>
            </div>
            <div className="border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex gap-[6px] items-center overflow-clip px-[6px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:7550" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[18px]" data-node-id="32:7551" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:7551;4:36">
                  MK
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] whitespace-nowrap" data-node-id="32:7552">
                Mia · 2
              </p>
            </div>
            <Confidence className="content-stretch flex gap-[6px] items-center relative shrink-0" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7554">
              n = 9 calls
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="32:7555" data-name="Frame">
            <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="32:7556" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I32:7556;4:4">
                Create team focus
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="32:7557" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I32:7557;4:8">
                Review pattern
              </p>
            </div>
            <div className="content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="32:7558" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I32:7558;4:12">
                View 9 calls
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex gap-[16px] items-center overflow-clip px-[20px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="32:7559" data-name="Feed / Coaching result">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" data-node-id="32:7560" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:7560;4:36">
              AM
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-medium gap-[3px] items-start min-w-px overflow-clip relative" data-node-id="32:7561" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7562">
              COACHING RESULT · 11 CALLS AFTER FOCUS
            </p>
            <p className="font-['Inter:Medium'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="32:7563">
              Alex’s talk share during objections fell from 64% to 49%.
            </p>
          </div>
          <div className="h-[22px] relative shrink-0 w-[90px]" data-node-id="32:7564" data-name="Sparkline">
            <div className="absolute inset-[-2.77%_0_-2.82%_-0.16%]">
              <img alt="" className="block max-w-none size-full" src={imgSparkline1} />
            </div>
          </div>
          <Tag className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="32:7566" data-name="Frame">
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[4px] py-[9px] relative shrink-0 w-full" data-node-id="32:7567" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[84px]" data-node-id="32:7568">
              REPORT
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:7569">
              Your Daily Team Brief is ready — 2 min read
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7570">
              7:30 AM
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[4px] py-[9px] relative shrink-0 w-full" data-node-id="32:7571" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[84px]" data-node-id="32:7572">
              SARAH LIN
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:7573">
              Added feedback on Jordan × Acme Logistics at 18:42
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7574">
              Mon
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[4px] py-[9px] relative shrink-0 w-full" data-node-id="32:7575" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[84px]" data-node-id="32:7576">
              ALERT
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:7577">
              Interruptions up 18% for Sarah Lin vs her 30-day baseline
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:7578">
              Mon
            </p>
          </div>
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5), Editorial/Insight: Font(family: "Newsreader", style: Medium, size: 18, weight: 500, lineHeight: 1.350000023841858, letterSpacing: -0.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), Editorial/Quote: Font(family: "Newsreader", style: Italic, size: 15, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: 0).

Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## App Shell / Navigation v2
**Node ID:** 37:51

v2 shell (merged refs): icon rail (home/search/notifications/Ask Bylda + teams), icon sidebar, rooms, people with presence, saved. Swap Nav/Room/Person items to State=Active per screen.

## Avatar
**Node ID:** 4:35

Photo avatar slot: runtime uses the user’s SSO/Google photo; mockups show a warm-metal monogram.

## Insight Card
**Node ID:** 4:72

The atomic unit of Bylda: INSIGHT → EVIDENCE → ACTION. Kind: PATTERN / REGRESSION / IMPROVEMENT / CALL / COACHING / REPORT. Always carries confidence + sample size.

## Confidence
**Node ID:** 4:66

Always pair with sample size (n=). Low = do not recommend action, only observe.

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
