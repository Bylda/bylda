# G12 — Behavior Change Result — Alex Morgan · node `14:224` · Lane 2 (Dhruv) · route `/app/coaching/$focusId/result` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/d0cebf30-9bf8-4be3-af0a-e5dcf84bab06.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/f1c17c12-600d-4aae-a8d9-3a98e7dd2994.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/cffafad6-6b87-4d88-acb8-d56421e4eb2d.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/aca26e51-f045-4f19-9c1b-8b4679af0581.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/9f502a72-ebeb-4de5-981e-ecfb8807c769.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/04497f27-c8e7-4fad-9c00-73447704c745.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/9a3e18b5-a671-4db9-9f8b-7ed26b36c0bf.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/79a74c08-3786-4476-92cc-330ffb0b5eed.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/7be1adfb-ff67-4c12-a1c8-6a4c22bad55a.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/cab82931-b5af-451c-bab6-6abb4b84138b.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/7754831a-6d8a-405e-bd3f-a8d28316518c.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/1b9be553-8028-4571-bb6a-327613333f12.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/4a962ecc-e9a8-4856-b8e0-4f1815cc34e0.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/15d8dd5e-1c3f-4686-9a94-2b5b12c5a94b.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/232d5124-fdcc-4b74-83dd-78120fd766ff.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/794b313b-0880-404b-919d-8b19232ae0bf.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/8c46bccf-eb2d-45a0-a129-616b198b40b0.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/0f2f586b-7a43-4951-a469-5babf05923df.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/ea788c8d-cb38-4439-a5dd-870e76c0bc05.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/d31f939a-c16e-40d5-a638-8615b71e12fe.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/cc576c91-e88b-456b-ab3f-523ebc4f8fe6.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/e41287e2-df98-4b6c-a6e9-b04e55e5fa17.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/501ab734-5d6f-471c-9d8d-59b3bad867b4.svg";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/f4f82371-9e23-4e56-9de3-0e1b808b6bb0.svg";

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

export default function BehaviorChangeResultAlexMorgan() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="14:224" data-name="Behavior Change Result — Alex Morgan">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" data-node-id="38:9413" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I38:9413;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9413;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:9413;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:9413;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9413;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9413;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9413;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9413;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I38:9413;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9413;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9413;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:9413;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:9413;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:9413;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:9413;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:9413;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9413;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9413;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I38:9413;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I38:9413;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I38:9413;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:9413;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I38:9413;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I38:9413;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:9413;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I38:9413;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I38:9413;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I38:9413;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:111;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:118;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:118;36:44">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:118;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:133;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:142;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:9413;37:142;36:49">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:142;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:9413;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:9413;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:9413;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:9413;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:9413;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:9413;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:231;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:231;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:231;36:45">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:9413;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:9413;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:9413;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:9413;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9413;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9413;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9413;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9413;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[1128px]" crumb="Behavior Change Result  /  Alex Morgan" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[1128px]" data-node-id="14:314" data-name="Main">
        <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono:Medium'] font-medium gap-[8px] items-start leading-[1.3] overflow-clip relative shrink-0 text-[10px] tracking-[0.6px] w-full" data-node-id="14:315" data-name="Frame">
          <p className="relative shrink-0 text-[color:var(--text\/tertiary,#9b9892)] whitespace-pre" data-node-id="14:316">{`COACHING  /  COMPLETED  /`}</p>
          <p className="relative shrink-0 text-[color:var(--text\/primary,#0b0b0c)] whitespace-nowrap" data-node-id="14:317">
            ALEX MORGAN · CALL CONTROL
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-node-id="14:318" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[48px]" data-node-id="14:319" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I14:319;4:36">
              AM
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="14:321" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] w-full" data-node-id="14:322">
              The coaching worked. Alex talks less when prospects push back.
            </p>
            <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="14:323">
              Focus: “When a prospect objects, ask before you explain.” · Assigned Sep 1 by Dana · 11 calls with objections since
            </p>
          </div>
          <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="14:324" data-name="Tag">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I14:324;4:25">
              Held · 3 weeks
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:326" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip px-[22px] py-[18px] relative rounded-[10px]" data-node-id="14:327" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="14:328">
              REP TALK SHARE DURING OBJECTIONS · PER CALL
            </p>
            <div className="h-[220px] relative shrink-0 w-[640px]" data-node-id="14:329" data-name="Frame">
              <div className="absolute bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] h-[180px] left-[304px] opacity-60 top-0 w-[336px]" data-node-id="14:338" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-0 top-[154.29px] w-[640px]" data-node-id="14:330" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[-30px] text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[148.29px] tracking-[0.6px] whitespace-nowrap" data-node-id="14:331">
                45%
              </p>
              <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-0 top-[102.86px] w-[640px]" data-node-id="14:332" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[-30px] text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[96.86px] tracking-[0.6px] whitespace-nowrap" data-node-id="14:333">
                55%
              </p>
              <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-0 top-[51.43px] w-[640px]" data-node-id="14:334" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[-30px] text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[45.43px] tracking-[0.6px] whitespace-nowrap" data-node-id="14:335">
                65%
              </p>
              <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-0 top-0 w-[640px]" data-node-id="14:336" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[-30px] text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[-6px] tracking-[0.6px] whitespace-nowrap" data-node-id="14:337">
                75%
              </p>
              <div className="absolute bg-[var(--primitive\/ink,#0b0b0c)] h-[200px] left-[304px] top-[-10px] w-px" data-node-id="14:339" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[310px] text-[10px] text-[color:var(--text\/primary,#0b0b0c)] top-[-12px] tracking-[0.6px] whitespace-nowrap" data-node-id="14:340">
                Focus assigned · Sep 1
              </p>
              <div className="absolute left-[-3.5px] size-[7px] top-[32.5px]" data-node-id="14:341" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[28.5px] size-[7px] top-[58.21px]" data-node-id="14:342" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[60.5px] size-[7px] top-[17.07px]" data-node-id="14:343" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[92.5px] size-[7px] top-[42.79px]" data-node-id="14:344" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[124.5px] size-[7px] top-[63.36px]" data-node-id="14:345" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[156.5px] size-[7px] top-[53.07px]" data-node-id="14:346" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[188.5px] size-[7px] top-[22.21px]" data-node-id="14:347" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[220.5px] size-[7px] top-[68.5px]" data-node-id="14:348" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[252.5px] size-[7px] top-[47.93px]" data-node-id="14:349" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[284.5px] size-[7px] top-[58.21px]" data-node-id="14:350" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[316.5px] size-[7px] top-[83.93px]" data-node-id="14:351" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[348.5px] size-[7px] top-[99.36px]" data-node-id="14:352" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[380.5px] size-[7px] top-[94.21px]" data-node-id="14:353" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[412.5px] size-[7px] top-[114.79px]" data-node-id="14:354" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[444.5px] size-[7px] top-[119.93px]" data-node-id="14:355" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[476.5px] size-[7px] top-[125.07px]" data-node-id="14:356" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[508.5px] size-[7px] top-[130.21px]" data-node-id="14:357" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[540.5px] size-[7px] top-[114.79px]" data-node-id="14:358" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[572.5px] size-[7px] top-[140.5px]" data-node-id="14:359" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[604.5px] size-[7px] top-[135.36px]" data-node-id="14:360" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[636.5px] size-[7px] top-[130.21px]" data-node-id="14:361" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute bg-[var(--primitive\/silver\/500,#9b9892)] h-[1.5px] left-0 top-[51.43px] w-[288px]" data-node-id="14:362" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] top-[57.43px] tracking-[0.6px] whitespace-nowrap" data-node-id="14:363">
                before · median 65%
              </p>
              <div className="absolute bg-[var(--primitive\/signal\/improve,#2f7d5b)] h-[1.5px] left-[320px] top-[123.43px] w-[320px]" data-node-id="14:364" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[320px] text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] top-[129.43px] tracking-[0.6px] whitespace-nowrap" data-node-id="14:365">
                after · median 51%
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-[min-content]" data-node-id="14:366">
              Each dot is one call with at least one objection. 10 calls before, 11 after.
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-[18px] relative rounded-[10px] shrink-0 w-[300px]" data-node-id="14:367" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px] whitespace-nowrap" data-node-id="14:368">
              RESULT
            </p>
            <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex flex-col font-normal gap-[2px] items-start overflow-clip py-[6px] relative shrink-0 w-full whitespace-nowrap" data-node-id="14:369" data-name="Frame">
              <p className="font-['Inter:Regular'] leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="14:370">
                Talk share in objections
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)]" data-node-id="14:371">
                65% → 51%
              </p>
            </div>
            <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex flex-col font-normal gap-[2px] items-start overflow-clip py-[6px] relative shrink-0 w-full whitespace-nowrap" data-node-id="14:372" data-name="Frame">
              <p className="font-['Inter:Regular'] leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="14:373">
                Asked before explaining
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)]" data-node-id="14:374">
                2 of 10 → 9 of 11
              </p>
            </div>
            <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex flex-col font-normal gap-[2px] items-start overflow-clip py-[6px] relative shrink-0 w-full whitespace-nowrap" data-node-id="14:375" data-name="Frame">
              <p className="font-['Inter:Regular'] leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="14:376">
                Objection repeated later
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)]" data-node-id="14:377">
                60% → 27%
              </p>
            </div>
            <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex flex-col font-normal gap-[2px] items-start overflow-clip py-[6px] relative shrink-0 w-full whitespace-nowrap" data-node-id="14:378" data-name="Frame">
              <p className="font-['Inter:Regular'] leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="14:379">
                Next step booked
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="14:380">
                60% → 73%
              </p>
            </div>
            <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex flex-col font-normal gap-[2px] items-start overflow-clip py-[6px] relative shrink-0 w-full whitespace-nowrap" data-node-id="14:381" data-name="Frame">
              <p className="font-['Inter:Regular'] leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="14:382">
                Held after focus ended
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)]" data-node-id="14:383">
                3 weeks
              </p>
            </div>
            <Confidence className="content-stretch flex gap-[6px] items-center relative shrink-0" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] min-w-full relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[min-content]" data-node-id="14:390">
              n = 21 calls. Same team, same pricing; deal mix similar before/after. Bylda can’t rule out other factors (e.g. Alex’s own practice) — but the change started the week of the focus.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:391" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip px-[16px] py-[14px] relative rounded-[10px]" data-node-id="14:392" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="14:393">
              BEFORE · AUG 27 · KESTREL LABS
            </p>
            <div className="bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start px-[14px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="14:394" data-name="Evidence Block">
              <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I14:394;4:68" data-name="Meta">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I14:394;4:69">
                  22:10
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="I14:394;4:70">
                  PROSPECT
                </p>
              </div>
              <p className="flex-[1_0_0] font-['Newsreader:Italic'] font-normal italic leading-[1.45] min-w-px relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I14:394;4:71">
                “Seems pricey.” → Alex, 1:48 on ROI math without a question.
              </p>
            </div>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip px-[16px] py-[14px] relative rounded-[10px]" data-node-id="14:399" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="14:400">{`AFTER · SEP 24 · HARBOR & PINE`}</p>
            <div className="bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start px-[14px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="14:401" data-name="Evidence Block">
              <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I14:401;4:68" data-name="Meta">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I14:401;4:69">
                  14:05
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="I14:401;4:70">
                  PROSPECT
                </p>
              </div>
              <p className="flex-[1_0_0] font-['Newsreader:Italic'] font-normal italic leading-[1.45] min-w-px relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I14:401;4:71">
                “Seems pricey.” → Alex: “Pricey compared to what you’re doing now, or to budget?”
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="14:406" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="14:407" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I14:407;4:4">
              Close focus — mark as held
            </p>
          </div>
          <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="14:409" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I14:409;4:8">
              Share win to #wins
            </p>
          </div>
          <div className="content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="14:411" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I14:411;4:12">
              Pick Alex’s next focus
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), Editorial/Quote: Font(family: "Newsreader", style: Italic, size: 15, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: 0).

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

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

## Confidence
**Node ID:** 4:66

Always pair with sample size (n=). Low = do not recommend action, only observe.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
