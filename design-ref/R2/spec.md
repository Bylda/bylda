# R2 — Rep — My progress · node `32:129` · Lane 4 (Dravin) · route `/app/rep/progress` · exported 2026-10-01

> **See CLAUDE.md §13: decision overrides Figma.**

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/ad2b3cbf-c8f6-4f3d-a161-68d96e29cd56.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/6ae042d7-593c-43c1-907b-8301750902e0.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/f59117af-4ab8-4947-9796-1d07a2ff007d.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/8ad19e87-15ab-4b93-8543-4750399d1b33.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/3d940ea9-301a-41a0-9d45-900c6aeb1a89.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/92553835-edc9-431a-9a19-cb19de7f9abd.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/167ca709-b48a-4571-a307-74b19932a7eb.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/1eb42a02-4e19-45b0-bc6e-97a504fa82d5.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/b6437bff-1354-4435-9782-e8710d78761c.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/bcfd63d9-46f0-49ce-b5dd-fe8e6568d0c7.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/86289835-972a-4938-9f50-44f893c2bce1.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/21c9434a-6f2f-4e5c-b6b2-696ed311132d.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/be8cedb5-fd38-4f46-ba13-952b3870664e.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/7385797b-7d33-40e4-bf2d-b77aead71525.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/418d02aa-1ce2-427d-8b77-249cb6f92c06.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/80522b83-cf28-4fbe-be23-e21820a0ad44.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/5bb2afc5-97a4-41eb-8be5-33720bfb85d6.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/7cd22ea2-8cc5-4d5d-990e-b5a9f3dda9d9.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/4cb9f9ed-c9bc-4f44-ba52-e89aac96767c.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/beb3a6d2-2170-45f8-b9d5-2616b5e4ab7c.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/8a813a55-82e6-49e9-bedc-6ed7e011e2cf.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/db382809-63fe-44eb-aa07-a935826fda41.svg";
const imgFrame = "https://www.figma.com/api/mcp/asset/06c20b35-a826-40d6-b20b-57371dc24261.svg";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/c3c7542d-fae7-4e24-929d-f7913c550536.svg";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/7fdc6dfa-2ece-40be-85cd-73d0d8476470.svg";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/1f241eb6-41b6-4009-b977-a351f6df08ec.svg";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/673e1f56-7263-44af-b7de-83e2343a4ef9.svg";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/f88fe111-85d6-4585-a059-d0e47f079449.svg";
const imgPolygon = "https://www.figma.com/api/mcp/asset/e613f7ea-56d8-4442-a221-6dfe87372b4d.svg";
const imgPolygon1 = "https://www.figma.com/api/mcp/asset/30e9ec7f-1823-4f2f-be11-d81bb39b4b7e.svg";

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

export default function RepMyProgress() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="32:129" data-name="Rep — My progress">
      <div className="absolute content-stretch flex h-[1156px] items-start left-0 top-0 w-[312px]" data-node-id="38:1414" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I38:1414;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1414;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:1414;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:1414;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1414;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1414;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1414;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1414;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I38:1414;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1414;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1414;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:1414;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:1414;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:1414;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:1414;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:1414;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:1414;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:1414;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I38:1414;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:93;4:36">
              JR
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I38:1414;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I38:1414;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:1414;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I38:1414;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I38:1414;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:1414;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I38:1414;37:101">
                Jordan Reyes · AE
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I38:1414;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I38:1414;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:111;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:118;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:118;36:44">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:118;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:124;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:133;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:1414;37:133;36:49">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:133;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:1414;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:1414;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:1414;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:1414;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:1414;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:1414;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:1414;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:1414;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:1414;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:1414;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:1414;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[784px]" crumb="Rep  /  My progress" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1100px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[784px]" data-node-id="32:221" data-name="Main">
        <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-node-id="32:223" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="32:224" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] w-full" data-node-id="32:225">
              My progress
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="32:226">
              Compared with your own last 90 days. Team median shown for context only — no names, no ranks.
            </p>
          </div>
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="32:227" data-name="Frame">
          <div className="border-[var(--primitive\/ink,#0b0b0c)] border-b-[1.5px] border-solid content-stretch flex items-start overflow-clip py-[8px] relative shrink-0" data-node-id="32:228" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="32:229">
              30 days
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[8px] relative shrink-0" data-node-id="32:230" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="32:231">
              90 days
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[8px] relative shrink-0" data-node-id="32:232" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="32:233">
              Since joining
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="32:234" data-name="Table">
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="32:235" data-name="Frame">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:236">
              YOUR BEHAVIORS
            </p>
          </div>
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="32:237" data-name="Frame">
            <p className="relative shrink-0 w-[190px]" data-node-id="32:238">
              BEHAVIOR
            </p>
            <p className="relative shrink-0 w-[110px]" data-node-id="32:239">
              YOU NOW
            </p>
            <p className="relative shrink-0 w-[120px]" data-node-id="32:240">
              90 DAYS
            </p>
            <p className="relative shrink-0 w-[100px]" data-node-id="32:241">
              TEAM MEDIAN
            </p>
            <p className="relative shrink-0 w-[120px]" data-node-id="32:242">
              ​
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="32:243" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[190px]" data-node-id="32:244">
              Discovery depth
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="32:245">
              2.9 / topic
            </p>
            <div className="h-[16px] relative shrink-0 w-[120px]" data-node-id="32:246" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[100px]" data-node-id="32:248">
              2.4
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="32:249" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:250" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:250;4:25">
                  Strength
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="32:252" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[190px]" data-node-id="32:253">
              Next step booked
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="32:254">
              86%
            </p>
            <div className="h-[16px] relative shrink-0 w-[120px]" data-node-id="32:255" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[100px]" data-node-id="32:257">
              74%
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="32:258" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:259" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:259;4:25">
                  Strength
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="32:261" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[190px]" data-node-id="32:262">
              Demo talk share
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="32:263">
              58%
            </p>
            <div className="h-[16px] relative shrink-0 w-[120px]" data-node-id="32:264" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[100px]" data-node-id="32:266">
              55%
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="32:267" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:268" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:268;4:25">
                  Coaching held
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="32:270" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[190px]" data-node-id="32:271">
              Held control in objections
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="32:272">
              3 of 9
            </p>
            <div className="h-[16px] relative shrink-0 w-[120px]" data-node-id="32:273" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[100px]" data-node-id="32:275">
              58%
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="32:276" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:277" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:277;4:27">
                  Focus
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="32:279" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[190px]" data-node-id="32:280">
              Pause after objection
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="32:281">
              0.4s
            </p>
            <div className="h-[16px] relative shrink-0 w-[120px]" data-node-id="32:282" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[100px]" data-node-id="32:284">
              1.3s
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="32:285" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:286" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:286;4:27">
                  Focus
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="32:288" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[190px]" data-node-id="32:289">
              Interruptions / objection
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="32:290">
              1.5
            </p>
            <div className="h-[16px] relative shrink-0 w-[120px]" data-node-id="32:291" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame5} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[100px]" data-node-id="32:293">
              0.6
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="32:294" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="32:295" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I32:295;4:29">
                  Related
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="32:297" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip px-[18px] py-[16px] relative rounded-[10px]" data-node-id="32:298" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="32:299" data-name="Frame">
              <div className="h-[9px] relative shrink-0 w-[10px]" data-node-id="32:300" data-name="Polygon">
                <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                  <img alt="" className="block max-w-none size-full" src={imgPolygon} />
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Geist_Mono:Medium'] font-medium leading-[1.3] min-w-px relative text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px]" data-node-id="32:301">
                WHAT CHANGED MOST
              </p>
            </div>
            <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.35] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.09px] w-full" data-node-id="32:302">
              Your next-step rate went from 62% to 86% after your July focus — and it stuck.
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip px-[18px] py-[16px] relative rounded-[10px]" data-node-id="32:303" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="32:304" data-name="Frame">
              <div className="h-[9px] relative shrink-0 w-[10px]" data-node-id="32:305" data-name="Polygon">
                <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                  <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Geist_Mono:Medium'] font-medium leading-[1.3] min-w-px relative text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px]" data-node-id="32:306">
                WHAT TO WATCH
              </p>
            </div>
            <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.35] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.09px] w-full" data-node-id="32:307">
              Your objection handling slipped in September, starting around the new price sheet.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[18px] h-[1156px] items-start left-[1096px] overflow-clip px-[22px] py-[24px] rounded-[10px] top-0 w-[344px]" data-node-id="32:222" data-name="Context Panel">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="32:308" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:309">
            MILESTONES
          </p>
        </div>
        <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-normal gap-[10px] items-start overflow-clip py-[7px] relative shrink-0 w-full" data-node-id="32:310" data-name="Frame">
          <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[56px]" data-node-id="32:311">
            Jul 21
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:312">
            Next-step focus held
          </p>
        </div>
        <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-normal gap-[10px] items-start overflow-clip py-[7px] relative shrink-0 w-full" data-node-id="32:313" data-name="Frame">
          <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[56px]" data-node-id="32:314">
            Sep 2
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:315">
            Demo talk-share focus held
          </p>
        </div>
        <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-normal gap-[10px] items-start overflow-clip py-[7px] relative shrink-0 w-full" data-node-id="32:316" data-name="Frame">
          <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[56px]" data-node-id="32:317">
            Sep 28
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:318">
            Started: pause after objections
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="32:319" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="32:320">
            OUTCOMES · 30 DAYS
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="32:321" data-name="Frame">
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="32:322" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[80px]" data-node-id="32:323">
              Won
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:324">
              3
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="32:325" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[80px]" data-node-id="32:326">
              Advanced
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:327">
              9
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="32:328" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[80px]" data-node-id="32:329">
              Stalled
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="32:330">
              4 · 3 after price objections
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="32:331" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="32:332">
            VISIBILITY
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="32:333">
            Your manager sees this same page. No one else does.
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

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
