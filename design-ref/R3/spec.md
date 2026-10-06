# R3 — Call Review — Rep perspective · node `32:334` · Lane 4 (Dravin) · route `/app/rep/calls/$callId` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/cb6a5b19-43dd-48cc-8684-46f4b8e28746.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/5de7dca1-202c-404a-963f-c6220ff18ecc.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/0c837428-d553-414e-9a53-ada852a0f4dc.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/77412b53-a245-4aac-9f9d-8153c6a844d1.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/d47878bd-a6ae-4a5e-ae7f-57b5e3d8d522.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/28a62bd0-8823-453f-846c-b2184eb1fe74.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/2148ca64-aa56-4a81-a14e-3b8a34b5031e.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/6849e88a-396f-4df0-ad38-34ffef3dec45.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/b5ad1ce8-9535-4abe-81d6-27d8f1c55e26.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/0504da58-c160-4e16-a20c-ed042cf538a0.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/1b33d773-2d8e-4c7c-8851-ea1c187cf444.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/f676e4aa-e6a1-4ad8-adf9-936009e4ad9c.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/556c2762-ef8b-4928-9e4b-6fd6e2b8d880.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/21516348-f5ed-4ec5-b1d5-b6fb138ab0c7.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/ba18f5fc-acb2-4637-bc59-80e47b0c4cf9.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/c861bf91-ebd6-469f-9278-1cde2b7fe837.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/265f3099-4c2b-4bab-b40d-42d915cafd2d.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/1b438aaa-54da-48f7-a6cb-6692d4dee0d1.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/b75ecaa9-3fb6-4e45-b57d-ea6d13a67d23.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/8062ec91-083a-4480-9c16-4e6d53843d14.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/d204697f-964c-4774-bfe8-63dcf93adc5e.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/19e91488-0216-4665-bb56-579dca76ad80.svg";

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

export default function CallReviewRepPerspective() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="32:334" data-name="Call Review — Rep perspective">
      <div className="absolute content-stretch flex h-[1156px] items-start left-0 top-0 w-[312px]" data-node-id="38:1647" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I38:1647;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1647;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:1647;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:1647;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1647;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1647;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1647;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1647;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I38:1647;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1647;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1647;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:1647;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:1647;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:1647;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:1647;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:1647;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1647;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1647;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I38:1647;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:93;4:36">
              JR
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I38:1647;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I38:1647;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:1647;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I38:1647;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I38:1647;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:1647;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I38:1647;37:101">
                Jordan Reyes · AE
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I38:1647;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I38:1647;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:111;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:118;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:1647;37:118;36:49">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:118;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:133;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:1647;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:1647;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:1647;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:1647;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:1647;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:1647;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:1647;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1647;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1647;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1647;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1647;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[728px]" crumb="Call Review  /  Rep perspective" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1100px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[728px]" data-node-id="32:426" data-name="Main">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="32:428" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="32:429">{`MY CALLS  /  ACME LOGISTICS`}</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full" data-node-id="32:430" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="32:431" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] w-full" data-node-id="32:432">
              Acme Logistics — Pricing follow-up
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="32:433">
              Mon Sep 28 · 38:12 · David Park (CFO), Sarah Cole (Ops) · Stalled
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="32:434" data-name="Frame">
            <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="32:435" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I32:435;4:4">
                Mark as reviewed
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex gap-[3px] items-end overflow-clip px-[16px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="32:437" data-name="Frame">
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:438" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:439" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:440" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:441" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:442" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:443" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:444" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:445" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:446" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:447" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:448" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:449" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:450" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:451" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:452" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:453" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:454" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:455" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:456" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:457" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:458" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:459" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:460" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:461" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:462" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:463" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:464" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:465" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:466" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:467" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:468" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:469" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:470" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:471" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/signal\/attention,#c27a1a)] h-[30px] relative shrink-0 w-[6px]" data-node-id="32:472" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[30px] relative shrink-0 w-[6px]" data-node-id="32:473" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[30px] relative shrink-0 w-[6px]" data-node-id="32:474" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[30px] relative shrink-0 w-[6px]" data-node-id="32:475" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[30px] relative shrink-0 w-[6px]" data-node-id="32:476" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[30px] relative shrink-0 w-[6px]" data-node-id="32:477" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[30px] relative shrink-0 w-[6px]" data-node-id="32:478" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:479" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:480" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:481" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:482" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:483" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:484" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:485" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:486" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:487" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:488" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:489" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:490" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:491" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:492" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:493" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:494" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:495" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:496" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:497" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:498" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:499" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:500" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:501" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:502" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:503" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:504" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:505" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[8px] relative shrink-0 w-[6px]" data-node-id="32:506" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] relative shrink-0 w-[6px]" data-node-id="32:507" data-name="Rectangle" />
        </div>
        <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)] whitespace-nowrap" data-node-id="32:508">
          ▶ 18:42 — the moment that matters · 90 seconds
        </p>
        <div className="[word-break:break-word] bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[18px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="32:509" data-name="Frame">
          <div className="content-stretch flex gap-[12px] items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="32:510" data-name="Frame">
            <div className="font-['Geist_Mono:Medium'] font-medium leading-[0] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] w-[80px]" data-node-id="32:511">
              <p className="leading-[1.3] mb-0">18:34</p>
              <p className="leading-[1.3]">YOU</p>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="32:512">
              Great. So on pricing, for all three sites we’re at forty-eight—
            </p>
          </div>
          <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex gap-[12px] items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="32:513" data-name="Frame">
            <div className="font-['Geist_Mono:Medium'] font-medium leading-[0] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] w-[80px]" data-node-id="32:514">
              <p className="leading-[1.3] mb-0">18:42</p>
              <p className="leading-[1.3]">DAVID · CFO</p>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="32:515">
              Honestly the number isn’t the problem, it’s whether my team will actually—
            </p>
          </div>
          <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex gap-[12px] items-start overflow-clip p-[8px] relative shrink-0 w-full" data-node-id="32:516" data-name="Frame">
            <div className="font-['Geist_Mono:Medium'] font-medium leading-[0] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] w-[80px]" data-node-id="32:517">
              <p className="leading-[1.3] mb-0">18:44</p>
              <p className="leading-[1.3]">YOU</p>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="32:518">
              Totally, and we can flex on price if that helps get this over the line…
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="32:519" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:520">
            COACH NOTES ON THIS CALL
          </p>
        </div>
        <div className="bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[6px] items-start overflow-clip px-[18px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="32:521" data-name="Frame">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="32:522" data-name="Frame">
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="32:523" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:523;4:36">
                DW
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:525">
              Dana · at 18:42
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="32:526">
            He wasn’t asking for a discount yet — he was worried about rollout.
          </p>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[12px] py-[9px] relative shrink-0 w-full" data-node-id="32:527" data-name="Frame">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="32:528">
              Reply to Dana…
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[18px] h-[1156px] items-start left-[1040px] overflow-clip px-[22px] py-[24px] rounded-[10px] top-0 w-[400px]" data-node-id="32:427" data-name="Context Panel">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="32:529" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:530">
            WHAT YOU DID WELL
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-full" data-node-id="32:531">
          Discovery was strong: 9 questions, 4 of them follow-ups. Your recap at 17:58 was accurate — that’s where you had the most control.
        </p>
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="32:532" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:533">
            WHERE YOU LOST THE CALL
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-full" data-node-id="32:534">
          At 18:42 you answered before David finished. His concern was rollout, not price. The discount answered a question he didn’t ask.
        </p>
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="32:535" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:536">
            TRY THIS NEXT TIME
          </p>
        </div>
        <div className="[word-break:break-word] bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[6px] items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="32:537" data-name="Frame">
          <p className="font-['Newsreader:Medium'] font-medium leading-[1.35] relative shrink-0 text-[18px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.09px] w-full" data-node-id="32:538">
            Pause. Then: “Whether your team will actually… what?”
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark-muted,#9b9892)] tracking-[-0.025px] w-full" data-node-id="32:539">
            Then tell the Brightline rollout story.
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="32:540" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:541">
            THIS CALL
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="32:542" data-name="Frame">
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="32:543" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[100px]" data-node-id="32:544">
              Talk / listen
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:545">
              61 / 39
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="32:546" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[100px]" data-node-id="32:547">
              Interruptions
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:548">
              5 · 3 in pricing
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="32:549" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[100px]" data-node-id="32:550">
              Questions
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:551">
              14
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="32:552" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[100px]" data-node-id="32:553">
              Next step
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:554">
              None set
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), Editorial/Insight: Font(family: "Newsreader", style: Medium, size: 18, weight: 500, lineHeight: 1.350000023841858, letterSpacing: -0.5).

Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## App Shell / Navigation v2
**Node ID:** 37:51

v2 shell (merged refs): icon rail (home/search/notifications/Ask Bylda + teams), icon sidebar, rooms, people with presence, saved. Swap Nav/Room/Person items to State=Active per screen.

## Avatar
**Node ID:** 4:35

Photo avatar slot: runtime uses the user’s SSO/Google photo; mockups show a warm-metal monogram.

## Nav Item
**Node ID:** 36:51

Sidebar navigation item. Swap Icon (Icon/\* or Avatar for people). Meta = count / status on the right.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
