# S1 — Search — Command palette ⌘K · node `31:760` · Lane 2 (Mayur) · component `S1SearchCommandPalette` (shell overlay) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/42eabb52-f2c5-45b2-ba29-e418e7cb35dd.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/13fed6b7-ec70-41e3-9859-7a880f279d76.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/cb9900df-0134-40bd-af80-4a6747fd13a1.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/82695f48-aa44-43d8-a0e3-8d66572ca3b2.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/7aa83e62-3fac-419a-a125-cf6b08f0cd68.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/194b3d06-4357-4480-bc62-7e3fecb163db.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/1b7ffea3-1a88-49bf-8ff3-37afa5d9336f.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/98a1b74f-963d-41b1-806a-a308f35d2af6.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/45e12685-2d83-490e-9695-4e6987d3beb2.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/a44007ce-8883-4690-8d68-884c59b36c5d.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/481e3797-9b42-4910-a267-1a2837f594de.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/f8d267f7-df1f-4322-93ed-84b285edcaa6.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/ebbace7f-2a73-4f19-8bae-33549dafc25a.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/460750da-0be8-4f6f-a576-7ea858309c75.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/3790bcab-2c60-4cb0-bb2e-3fbb58f80515.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/a2e8b1ca-4158-41d3-a277-41721cdb9894.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/dc414d41-9caa-43f3-977c-da11aba722e3.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/faad17ba-32e9-4e0c-9417-52513e5683dc.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/72bbf618-04f4-4612-8550-f8f5527e569d.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/7f621c3c-640a-4600-8c8c-5147494a8ce8.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/b14dff87-220d-4e61-9e41-dde8f7ac6a89.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/24148fea-55e4-46d3-aa37-d8d2545e15ec.svg";

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

export default function SearchCommandPalettek() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="31:760" data-name="Search — Command palette ⌘K">
      <AppShellNavigationV2 className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" />
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[1128px]" crumb="Search  /  Command palette ⌘K" />
      <div className="absolute h-[1024px] left-[312px] top-[56px] w-[1128px]" data-node-id="31:850" data-name="Main" />
      <div className="absolute bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[150px] left-[348px] top-[156px] w-[740px]" data-node-id="31:851" data-name="Rectangle" />
      <div className="absolute bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[150px] left-[348px] top-[326px] w-[740px]" data-node-id="31:852" data-name="Rectangle" />
      <div className="absolute bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[150px] left-[348px] top-[496px] w-[740px]" data-node-id="31:853" data-name="Rectangle" />
      <div className="absolute bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[150px] left-[348px] top-[666px] w-[740px]" data-node-id="31:854" data-name="Rectangle" />
      <div className="absolute bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[150px] left-[348px] top-[836px] w-[740px]" data-node-id="31:855" data-name="Rectangle" />
      <div className="absolute bg-[var(--primitive\/ink,#0b0b0c)] h-[1080px] left-0 opacity-35 top-0 w-[1440px]" data-node-id="31:856" data-name="Rectangle" />
      <div className="[word-break:break-word] absolute bg-[var(--surface\/canvas,#f8f7f5)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex flex-col items-start left-[370px] overflow-clip rounded-[6px] shadow-[0px_24px_60px_0px_rgba(0,0,0,0.2)] top-[176px] w-[700px]" data-node-id="31:857" data-name="Palette">
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[16px] relative shrink-0 w-full" data-node-id="31:858" data-name="Frame">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.075px] whitespace-nowrap" data-node-id="31:859">
            ⌕
          </p>
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.35] min-w-px not-italic relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="31:860">
            jordan pri
          </p>
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:861">
            ESC
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[10px] py-[8px] relative shrink-0 w-full" data-node-id="31:862" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="31:863">{`   ASK BYLDA`}</p>
          <div className="bg-[var(--primitive\/pearl\/100,#eae8e4)] content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:864" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:865">
              ASK
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:866">
              Show Jordan’s price objections from last week
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:867">
              ↵
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[10px] py-[8px] relative shrink-0 w-full" data-node-id="31:868" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="31:869">{`   PEOPLE`}</p>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:870" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:871">
              REP
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:872">
              Jordan Reyes
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:873">
              Mid-Market AE
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[10px] py-[8px] relative shrink-0 w-full" data-node-id="31:874" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="31:875">{`   BEHAVIORS & PATTERNS`}</p>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:876" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:877">
              PAT
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:878">
              Defending price before diagnosing
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:879">
              Confirmed · 9 calls
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:880" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:881">
              BEH
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:882">
              Price objection handling
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:883">
              Behavior
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[10px] py-[8px] relative shrink-0 w-full" data-node-id="31:884" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="31:885">{`   CALLS`}</p>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:886" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:887">
              CALL
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:888">
              Jordan × Acme Logistics — Pricing follow-up
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:889">
              Mon · 38m
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:890" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:891">
              CALL
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:892">
              Jordan × Kestrel Labs — Negotiation
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:893">
              Fri · 52m
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[10px] py-[8px] relative shrink-0 w-full" data-node-id="31:894" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="31:895">{`   ACTIONS`}</p>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:896" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:897">
              DO
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:898">
              Assign coaching to Jordan
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:899">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="31:900" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[44px]" data-node-id="31:901">
              DO
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="31:902">
              Open Jordan’s Rep Profile
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="31:903">
              ​
            </p>
          </div>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-solid border-t content-stretch flex font-['Geist_Mono:Medium'] font-medium gap-[16px] items-start leading-[1.3] overflow-clip px-[18px] py-[10px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full whitespace-nowrap" data-node-id="31:904" data-name="Frame">
          <p className="relative shrink-0" data-node-id="31:905">
            ↑↓ navigate
          </p>
          <p className="relative shrink-0" data-node-id="31:906">
            ↵ open
          </p>
          <p className="relative shrink-0" data-node-id="31:907">
            ⌘↵ open in panel
          </p>
          <p className="relative shrink-0" data-node-id="31:908">
            Tab filter by type
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5).

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

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
