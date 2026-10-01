# S2 — Search — Natural-language results · node `31:909` · Lane 2 (Dhruv) · route `/app/search` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/4323aa2b-f289-4682-8c1a-8003b381225e.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/3171457c-0961-4b0a-bc25-4eff8bcaa03f.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/e5fe6d84-ee42-4495-a9e2-f2e50c21bd35.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/a13c17a5-03e6-4f60-b844-0a033c6c6cd3.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/1072d08b-1541-4590-aa48-ae9e0dadefce.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/eef874f1-7bd2-4038-b58c-906ddbf99954.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/b1d1f74a-073a-4ec7-b190-6ed040ab1622.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/53eff4c3-1cba-47e4-8828-7db3741f7c6c.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/2f4983cf-9394-4414-83da-f56a228798fc.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/37a6aca4-4f7c-436c-913b-a5d51b4fee5b.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/6209e29d-5f69-4c5f-824b-f92d0085fdeb.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/c3fdb608-ec06-404b-b27c-ecb383a964f0.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/baec5f98-535b-4091-bb24-300683c1eccc.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/16dc8aaf-88e7-4f82-bac2-22c5b27968d6.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/6e93ea1e-a81c-4b0c-b356-08394d3563b5.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/8e7586f1-3085-4b8c-85b0-8d2aeb6f231c.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/b6da48cb-ad87-4e10-81d9-15d123a47814.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/f1969356-592d-4c2f-8a49-b0e95a6c6f5c.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/ae17f361-6792-4d56-8335-db17cefa2b5c.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/e13c0cb8-0215-41c2-87e6-848bca943892.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/ff361b39-85b7-4853-bb9a-ba5ce7ae99c2.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/5047ee15-3670-42c2-b2a6-c06a727f03f0.svg";

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

function AppShellNavigationV2({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex h-[1024px] items-start relative w-[312px]"} data-node-id="37:51" data-name="App Shell / Navigation v2">
      <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="37:52" data-name="Workspace Rail">
        <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="37:54" data-name="Workspace / Acme Revenue">
          <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="37:53">
            B
          </p>
        </div>
        <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="37:55" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="37:58" data-name="Rail / Home">
          <div className="relative shrink-0 size-[18px]" data-node-id="37:56" data-name="Icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="37:62" data-name="Rail / Search">
          <div className="relative shrink-0 size-[18px]" data-node-id="37:59" data-name="Icon/search">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
          </div>
        </div>
        <div className="relative shrink-0 size-[38px]" data-node-id="37:66" data-name="Rail / Notifications">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="37:71" data-name="Rail / Ask Bylda">
          <div className="relative shrink-0 size-[18px]" data-node-id="37:68" data-name="Icon/intelligence">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
          </div>
        </div>
        <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="37:72" data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="37:74" data-name="Team / MM">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="37:73">
            MM
          </p>
        </div>
        <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="37:76" data-name="Team / ENT">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="37:75">
            ENT
          </p>
        </div>
        <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="37:80" data-name="Team / add">
          <div className="relative shrink-0 size-[16px]" data-node-id="37:77" data-name="Icon/plus">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="37:81" data-name="Frame" />
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="37:92" data-name="Rail / Settings">
          <div className="relative shrink-0 size-[18px]" data-node-id="37:82" data-name="Icon/settings">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
          </div>
        </div>
        <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:93;4:36">
            DW
          </p>
        </div>
      </div>
      <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="37:95" data-name="Sidebar">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="37:96" data-name="Frame">
          <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="37:97">
            BYLDA
          </p>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="37:98" data-name="Workspace header">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="37:99" data-name="Frame">
            <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="37:100">
              Acme Revenue
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="37:101">
              Mid-Market AE · 9 reps
            </p>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="37:102" data-name="Icon/chevron">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
          </div>
        </div>
        <div className="h-[8px] relative shrink-0 w-px" data-node-id="37:104" data-name="Frame" />
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:105" data-name="Nav / Home">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:105;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:105;36:44">
            Home
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:105;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:111" data-name="Nav / Intelligence">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:111;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:111;36:44">
            Intelligence
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:111;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:118" data-name="Nav / Calls">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:118;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:118;36:44">
            Calls
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:118;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:124" data-name="Nav / Reports">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:124;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:124;36:44">
            Reports
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:124;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:133" data-name="Nav / Team">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:133;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:133;36:44">
            Team
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:133;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:142" data-name="Nav / Coaching">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:142;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:142;36:44">
            Coaching
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:142;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:150" data-name="Nav / Rooms">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:150;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:150;36:44">
            Rooms
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:150;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="37:156" data-name="Section / MY ROOMS">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="37:157">
            MY ROOMS
          </p>
          <div className="relative shrink-0 size-[13px]" data-node-id="37:158" data-name="Icon/plus">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:161" data-name="Room / daily-brief">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:161;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:161;36:44">
            daily-brief
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:161;36:45">
            ●
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:170" data-name="Room / coaching">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:170;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:170;36:44">
            coaching
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:170;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:179" data-name="Room / objection-watch">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:179;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:179;36:44">
            objection-watch
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:179;36:45">
            9
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:188" data-name="Room / wins">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:188;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:188;36:44">
            wins
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:188;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:197" data-name="Room / lost-deals">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:197;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:197;36:44">
            lost-deals
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:197;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="37:226" data-name="Section / PEOPLE">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="37:227">
            PEOPLE
          </p>
          <div className="relative shrink-0 size-[13px]" data-node-id="37:228" data-name="Icon/plus">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:231" data-name="Person / Jordan Reyes">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:231;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:231;36:44">
            Jordan Reyes
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:231;36:45">
            on a call
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:237" data-name="Person / Alex Morgan">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:237;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:237;36:44">
            Alex Morgan
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:237;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:243" data-name="Person / Mia Kowalski">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:243;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:243;36:44">
            Mia Kowalski
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:243;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:249" data-name="Person / Sarah Lin">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:249;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:249;36:44">
            Sarah Lin
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:249;36:45">
            away
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="42:1836" data-name="Section / DIRECT MESSAGES">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="42:1837">
            DIRECT MESSAGES
          </p>
          <div className="relative shrink-0 size-[13px]" data-node-id="42:1838" data-name="Icon/plus">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="42:1839" data-name="DM / Jordan Reyes">
          <div className="relative shrink-0 size-[16px]" data-node-id="I42:1839;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I42:1839;36:44">
            Jordan Reyes
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I42:1839;36:45">
            2
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="42:1845" data-name="DM / Kiran Patel">
          <div className="relative shrink-0 size-[16px]" data-node-id="I42:1845;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I42:1845;36:44">
            Kiran Patel
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I42:1845;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="42:1851" data-name="DM / BYLDA Coach">
          <div className="relative shrink-0 size-[16px]" data-node-id="I42:1851;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I42:1851;36:44">
            BYLDA Coach
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I42:1851;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="42:1858" data-name="Nav / Saved">
          <div className="relative shrink-0 size-[16px]" data-node-id="I42:1858;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I42:1858;36:44">
            Saved
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I42:1858;36:45">
            12
          </p>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="37:276" data-name="Frame" />
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:277" data-name="Nav / Integrations">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:277;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:277;36:44">
            Integrations
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:277;36:45">
            ​
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="37:286" data-name="Nav / Settings">
          <div className="relative shrink-0 size-[16px]" data-node-id="I37:286;36:42" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I37:286;36:44">
            Settings
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I37:286;36:45">
            ​
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SearchNaturalLanguageResults() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="31:909" data-name="Search — Natural-language results">
      <AppShellNavigationV2 className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" />
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[784px]" crumb="Search  /  Natural-language results" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[784px]" data-node-id="31:999" data-name="Main">
        <div className="[word-break:break-word] bg-[var(--surface\/raised,white)] border border-[var(--primitive\/graphite\/800,#2a2a2e)] border-solid content-stretch flex font-['Inter:Semi_Bold'] font-semibold gap-[10px] items-start leading-[1.35] not-italic overflow-clip px-[16px] py-[12px] relative rounded-[4px] shrink-0 text-[15px] tracking-[-0.075px] w-full" data-node-id="31:1001" data-name="Frame">
          <p className="relative shrink-0 text-[color:var(--text\/tertiary,#9b9892)] whitespace-nowrap" data-node-id="31:1002">
            ⌕
          </p>
          <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="31:1003">
            Show lost calls where pricing was discussed
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="31:1004" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:1005">
            BYLDA READ THIS AS
          </p>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1006" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1007">
              Outcome = Lost
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1008" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1009">
              Stage includes Pricing
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1010" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1011">
              Last 90 days
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1012" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1013">
              Team: Mid-Market AE
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1014">
            Edit
          </p>
        </div>
        <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.35] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.09px] w-full" data-node-id="31:1015">
          9 lost calls discussed pricing. In 7 of them, a discount was offered before the prospect’s concern was clarified.
        </p>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="31:1016" data-name="Table">
          <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-start leading-[1.3] overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="31:1017" data-name="Frame">
            <p className="flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="31:1018">
              9 RESULTS
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:1019">
              sorted by relevance
            </p>
          </div>
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative rounded-[10px] shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="31:1020" data-name="Frame">
            <p className="relative shrink-0 w-[190px]" data-node-id="31:1021">
              CALL
            </p>
            <p className="relative shrink-0 w-[110px]" data-node-id="31:1022">
              REP
            </p>
            <p className="relative shrink-0 w-[90px]" data-node-id="31:1023">
              PRICING MOMENT
            </p>
            <p className="relative shrink-0 w-[290px]" data-node-id="31:1024">
              WHAT HAPPENED
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="31:1025" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="31:1026" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:1027">
                Kestrel Labs
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="31:1028">
                Fri · 52m
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="31:1029" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="31:1032">
                Jordan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="31:1033">
              22:10
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[290px]" data-node-id="31:1034">
              Discount in 5s; objection resurfaced
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="31:1035" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="31:1036" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:1037">
                Vela Systems
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="31:1038">
                Sep 18 · 33m
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="31:1039" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="31:1040" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I31:1040;4:36">
                  SL
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="31:1042">
                Sarah
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="31:1043">
              19:40
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[290px]" data-node-id="31:1044">
              Interrupted twice, then ROI monologue
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="31:1045" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="31:1046" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:1047">
                Ferro Metals
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="31:1048">
                Sep 12 · 61m
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="31:1049" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="31:1050" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I31:1050;4:36">
                  NO
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="31:1052">
                Nina
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="31:1053">
              44:02
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[290px]" data-node-id="31:1054">
              Price was fine; lost on implementation risk
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="31:1055" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="31:1056" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:1057">
                Lumen Dental
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="31:1058">
                Sep 9 · 28m
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="31:1059" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="31:1060" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I31:1060;4:36">
                  MK
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="31:1062">
                Mia
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="31:1063">
              14:55
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[290px]" data-node-id="31:1064">
              Discount before discovery finished
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="31:1065" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[190px] whitespace-nowrap" data-node-id="31:1066" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:1067">
                Orchid Health
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="31:1068">
                Sep 3 · 36m
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[110px]" data-node-id="31:1069" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="31:1072">
                Jordan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="31:1073">
              21:18
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[290px]" data-node-id="31:1074">
              Discount in 3s; no next step
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[18px] h-[1080px] items-start left-[1096px] overflow-clip px-[22px] py-[24px] rounded-[10px] top-0 w-[344px]" data-node-id="31:1000" data-name="Context Panel">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="31:1075" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="31:1076">
            REFINE
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="31:1077" data-name="Frame">
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1078" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1079">
              Lost
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1080" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1081">
              Won
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1082" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1083">
              Stalled
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1084" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1085">
              Pricing
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1086" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1087">
              Discovery
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1088" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1089">
              Last 30 days
            </p>
          </div>
          <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="31:1090" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="31:1091">
              Last 90 days
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="31:1092" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="31:1093">
            SAVE
          </p>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="31:1094" data-name="Button">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I31:1094;4:8">
            Save as view in Calls
          </p>
        </div>
        <div className="content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="31:1096" data-name="Button">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I31:1096;4:12">
            Turn into pattern watch
          </p>
        </div>
        <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="31:1098" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:1099">
            HOW THIS WORKS
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="31:1100">
            Bylda converts your question to filters you can see and edit. It never answers from memory — every result links to a call.
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5), Editorial/Insight: Font(family: "Newsreader", style: Medium, size: 18, weight: 500, lineHeight: 1.350000023841858, letterSpacing: -0.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0).

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
