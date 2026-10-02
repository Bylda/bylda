# C2 — Calls Index — All calls + filters open · node `52:8665` · Lane 2 (Dhruv) · route `/app/calls/all` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/bfc6a27f-00c1-43bf-b6a0-1702d0e9c488.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/185a4dfb-3286-42f8-a628-697e8c94f3bf.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/73c0065e-652b-426d-bc6c-2a6086b3d2cb.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/d80d8dac-b8d6-4d58-980a-da424756a3c8.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/2ae08bbc-2e93-4873-980c-3ade55c2b999.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/721d5a11-fec8-4b98-8703-691e69025e45.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/de210207-15b9-4857-9ab5-bea9f22cd43f.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/f990f3be-bcfe-4f2a-9785-6fdf0220ab89.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/a12446cd-bd33-4c66-a83b-74e40523c713.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/7e63f43e-012e-42eb-a93a-e327bb15413f.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/8f9b2f20-d112-4d74-9226-56c77bcdc64b.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/ac54ff3a-63c7-4e3a-adbb-e5d13e2346d0.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/905a5f40-d590-4b1b-928d-5ba16ea17194.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/fc47fb72-e53b-4a37-a186-2b3eeabcd118.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/ac31ddcc-c4af-4aa5-985f-69242e90bd61.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/1dd659b8-62f9-46de-8f25-72e0d2645e5d.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/ae26c1b2-0967-4d8f-9eb8-ac78d83fa6fe.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/653fe2d7-8808-43d9-86ad-7fd865934aad.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/15fcf7e1-623b-4f37-89e7-e946e3e8d326.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/4908d871-46b4-4988-bdfd-b1f8304dc933.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/9ff0340a-4661-4efb-b21d-aaf711ef182e.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/759c47a9-1a93-49f7-a356-84459dd0a41e.svg";

function Avatar({ className }: { className?: string }) {
  return (
    <div className={className || "border-[1.5px] border-[var(--primitive\\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] size-[28px]"} data-node-id="4:35" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="4:36">
        JR
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

export default function CallsIndexAllCallsFiltersOpen() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="52:8665" data-name="Calls Index — All calls + filters open">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" data-node-id="52:8666" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I52:8666;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:8666;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I52:8666;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I52:8666;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:8666;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:8666;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:8666;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:8666;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I52:8666;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:8666;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:8666;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I52:8666;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I52:8666;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I52:8666;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I52:8666;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I52:8666;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:8666;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:8666;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I52:8666;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I52:8666;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I52:8666;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I52:8666;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I52:8666;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I52:8666;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I52:8666;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I52:8666;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I52:8666;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I52:8666;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:111;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:118;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I52:8666;37:118;36:49">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:118;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:133;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I52:8666;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I52:8666;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I52:8666;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I52:8666;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I52:8666;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I52:8666;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:231;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:231;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:231;36:45">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I52:8666;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I52:8666;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I52:8666;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I52:8666;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:8666;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:8666;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:8666;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8666;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[784px]" crumb="Calls Index  /  All calls + filters open" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[784px]" data-node-id="52:8900" data-name="Main">
        <div className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full" data-node-id="52:8902" data-name="Frame">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="52:8903" data-name="Frame">
            <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] w-full" data-node-id="52:8904">
              Calls
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="52:8905" data-name="Frame">
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="52:8906" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I52:8906;4:8">
                Upload calls
              </p>
            </div>
          </div>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:8908" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0 whitespace-nowrap" data-node-id="52:8909" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="52:8910">
              Needs review
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8911">
              4
            </p>
          </div>
          <div className="[word-break:break-word] border-[var(--primitive\/ink,#0b0b0c)] border-b-[1.5px] border-solid content-stretch flex font-medium gap-[6px] items-start overflow-clip py-[8px] relative shrink-0 whitespace-nowrap" data-node-id="52:8912" data-name="Frame">
            <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:8913">
              All calls
            </p>
            <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8914">
              142
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0 whitespace-nowrap" data-node-id="52:8915" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="52:8916">
              High coaching value
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8917">
              11
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0 whitespace-nowrap" data-node-id="52:8918" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="52:8919">
              Lost
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8920">
              6
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0 whitespace-nowrap" data-node-id="52:8921" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="52:8922">
              Won
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8923">
              9
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0 whitespace-nowrap" data-node-id="52:8924" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="52:8925">
              Price objections
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8926">
              17
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[8px] relative shrink-0" data-node-id="52:8927" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:8928">
              + Save view
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="52:8929" data-name="Table">
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="52:8930" data-name="Frame">
            <p className="relative shrink-0 w-[190px]" data-node-id="52:8931">
              CALL
            </p>
            <p className="relative shrink-0 w-[110px]" data-node-id="52:8932">
              REP
            </p>
            <p className="relative shrink-0 w-[210px]" data-node-id="52:8933">
              WHY
            </p>
            <p className="relative shrink-0 w-[90px]" data-node-id="52:8934">
              OUTCOME
            </p>
            <p className="relative shrink-0 w-[60px]" data-node-id="52:8935">
              LEN
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:8936" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:8937" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:8938">
                Acme Logistics
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8939">
                Mon · Negotiation
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:8940" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:8943">
                Jordan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:8944">
              Lost control at 18:42
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:8945" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:8946" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8946;4:29">
                  Stalled
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:8948">
              38:12
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:8949" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:8950" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:8951">
                Brightline Freight
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8952">
                Mon · Pricing
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:8953" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="52:8954" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8954;4:36">
                  TG
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:8956">
                Theo
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:8957">
              Best objection handling
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:8958" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:8959" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8959;4:25">
                  Advanced
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:8961">
              31:40
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:8962" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:8963" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:8964">
                Northwind Health
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8965">
                Mon · Discovery
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:8966" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="52:8967" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8967;4:36">
                  MK
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:8969">
                Mia
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:8970">
              Demo at 4:10
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:8971" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:8972" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8972;4:29">
                  Stalled
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:8974">
              24:05
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:8975" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:8976" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:8977">
                Vela Systems
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8978">
                Tue · Discovery
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:8979" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:8982">
                Jordan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:8983">
              Paused 0.9s — progress
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:8984" data-name="Frame">
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:8985" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8985;4:33">
                  Open
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:8987">
              31:02
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:8988" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:8989" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:8990">
                Quarry Road Co.
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:8991">
                Tue · Pricing
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:8992" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="52:8993" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8993;4:36">
                  MK
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:8995">
                Mia
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:8996">
              Paused 1.6s on price
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:8997" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:8998" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:8998;4:25">
                  Advanced
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:9000">
              29:10
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:9001" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:9002" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:9003">
                Kestrel Labs
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:9004">
                Fri · Negotiation
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:9005" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="52:9006" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9006;4:36">
                  AM
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:9008">
                Alex
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:9009">{`3 monologues > 2 min`}</p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:9010" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:9011" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9011;4:27">
                  Lost
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:9013">
              52:18
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:9014" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:9015" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:9016">{`Harbor & Pine`}</p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:9017">
                Thu · Demo
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:9018" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="52:9019" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9019;4:36">
                  AM
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:9021">
                Alex
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:9022">
              Asked before explaining 3×
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:9023" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:9024" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9024;4:25">
                  Advanced
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:9026">
              27:02
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:9027" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:9028" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:9029">
                Ferro Metals
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:9030">
                Wed · Negotiation
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:9031" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="52:9032" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9032;4:36">
                  NO
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:9034">
                Nina
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:9035">
              61 min, no outcome change
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:9036" data-name="Frame">
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:9037" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9037;4:33">
                  Open
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:9039">
              61:12
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="52:9040" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="52:9041" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:9042">
                Lumen Dental
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="52:9043">
                Thu · Intro
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="52:9044" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="52:9045" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9045;4:36">
                  LO
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:9047">
                Luis
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[210px]" data-node-id="52:9048">
              Transcript missing
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="52:9049" data-name="Frame">
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="52:9050" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:9050;4:33">
                  —
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[60px]" data-node-id="52:9052">
              00:40
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[18px] h-[1080px] items-start left-[1096px] overflow-clip px-[22px] py-[24px] top-0 w-[344px]" data-node-id="52:8901" data-name="Context Panel">
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="52:9053" data-name="Frame">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.35] min-w-px relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="52:9054">
            Filters
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9055">
            Clear all
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9056">
          DATE
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9057" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9058" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9059">
              Today
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9060" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9061">
              Last 7 days
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9062" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9063">
              30 days
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9064" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9065">
              90 days
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9066">
          REP
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9067" data-name="Frame">
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9068" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9069">
              All
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9070" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9071">
              Jordan
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9072" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9073">
              Alex
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9074" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9075">
              Mia
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9076" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9077">
              Sarah
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9078" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9079">
              Theo
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9080" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9081">
              Priya
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9082">
          OUTCOME
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9083" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9084" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9085">
              Won
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9086" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9087">
              Lost
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9088" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9089">
              Advanced
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9090" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9091">
              Stalled
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9092" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9093">
              Open
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9094">
          CALL TYPE
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9095" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9096" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9097">
              Intro
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9098" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9099">
              Discovery
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9100" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9101">
              Demo
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9102" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9103">
              Pricing
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9104" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9105">
              Negotiation
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9106">
          BEHAVIOR
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9107" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9108" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9109">
              Objection handled
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9110" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9111">
              Lost control
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9112" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9113">
              Interruption
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9114" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9115">
              Monologue
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9116" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9117">
              Strong discovery
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9118">
          METHODOLOGY STAGE
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9119" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9120" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9121">
              Discovery
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9122" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9123">
              Demo
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9124" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9125">
              Pricing
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9126" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9127">
              Next steps
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9128">
          REVIEW STATUS
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9129" data-name="Frame">
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9130" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9131">
              Needs review
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9132" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9133">
              Reviewed
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="52:9134" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:9135">
              Shared
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="52:9136" data-name="Frame">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="52:9137">
            DURATION
          </p>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex gap-[8px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-node-id="52:9138" data-name="Frame">
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="52:9139">
              15–60 min
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="52:9140">
              ⌄
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="52:9141" data-name="Button">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I52:9141;4:4">
            Save as view
          </p>
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5).

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

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
