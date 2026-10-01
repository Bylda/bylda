# C4 — Call Review — Overview · node `44:1375` · Lane 2 (Mayur) · route `/app/calls/$callId` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/150b6512-aba4-4c0a-a45b-bf30889abe2e.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/15ce8e6a-d1a1-4706-a6b6-29af63b01901.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/b30d43f6-d77b-434e-9b00-6c86bba260a1.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/6d19a509-6b73-48d1-b7eb-45bbbd5af6ca.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/bab6a241-cf91-4342-a591-e410e0c158f3.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/04e7b7dd-8df8-4d07-9a80-5c8f8988fe39.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/96293491-49c9-44cf-a6ff-4ae84b8bc021.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/25d173bf-7aac-4bb7-845b-0eba97bb1f8f.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/dc732041-bb5c-4fc5-a9cd-901e0f09e44e.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/e660e7c2-6da5-462b-af28-a38f4cea7aca.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/12fe6fd5-6e16-43c8-8d57-bfe6628bd8c8.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/10e85017-fea6-4cb3-938d-2dfb74fc7919.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/d1ceddf0-ad0b-4853-a65f-5ae82b29790b.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/38570b7c-6d77-4789-84b9-04b069e1972b.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/2bd10d77-754b-4f69-9d00-add9d06f4065.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/4c785250-0135-4c4e-87af-48b84766b409.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/219a3c59-0a9b-46bb-9759-b10e515c9370.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/4ddede5a-25ea-40cd-af39-be3021c2a655.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/6252ecef-6f4e-4936-bc42-7011d616d22b.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/e5601523-34e1-435b-a59b-a7e0c53e9940.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/cd3869a3-e9ff-4b83-8d08-589f2a2a3490.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/8a2d4d04-1523-4fad-bca1-8c5714755c01.svg";
const imgIconPlay = "https://www.figma.com/api/mcp/asset/2581079c-ae08-48f7-8f6d-3a135e08cdff.svg";
const imgFrame = "https://www.figma.com/api/mcp/asset/69339149-ae01-46c2-b9f5-c5ea3cd96466.svg";
const imgIconCheck = "https://www.figma.com/api/mcp/asset/621098c1-6563-4e98-9423-88c7bec33322.svg";
const imgIconAlert = "https://www.figma.com/api/mcp/asset/0fb34595-4eb4-47e5-b39a-c54f903a75fd.svg";
const imgIconAlert1 = "https://www.figma.com/api/mcp/asset/eab3f539-a960-4509-a74c-db6c747b1caa.svg";

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

export default function CallReviewOverview() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="44:1375" data-name="Call Review — Overview">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" data-node-id="44:1376" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I44:1376;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I44:1376;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I44:1376;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I44:1376;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I44:1376;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I44:1376;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I44:1376;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I44:1376;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I44:1376;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I44:1376;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I44:1376;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I44:1376;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I44:1376;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I44:1376;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I44:1376;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I44:1376;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I44:1376;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I44:1376;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I44:1376;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I44:1376;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I44:1376;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I44:1376;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I44:1376;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I44:1376;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I44:1376;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I44:1376;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I44:1376;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I44:1376;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:111;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:118;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I44:1376;37:118;36:49">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:118;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:133;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I44:1376;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I44:1376;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I44:1376;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I44:1376;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I44:1376;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I44:1376;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:231;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:231;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:231;36:45">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I44:1376;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I44:1376;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I44:1376;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I44:1376;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I44:1376;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I44:1376;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I44:1376;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1376;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[1128px]" crumb="Call Review  /  Overview" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[1128px]" data-node-id="44:1610" data-name="Main">
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="44:1611" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative" data-node-id="44:1612" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] whitespace-nowrap" data-node-id="44:1613">
              Acme Logistics — Pricing follow-up
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-[min-content]" data-node-id="44:1614">
              Mon, Sep 28 · 38 min · Jordan Reyes · David Park (CFO), Sarah Cole (Ops) · Opp $48,000 · Negotiation
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="44:1615" data-name="Frame">
            <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[28px]" />
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[28px]" data-node-id="44:1618" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1618;4:36">
                DP
              </p>
            </div>
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" data-node-id="44:1620" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1620;4:36">
                SC
              </p>
            </div>
          </div>
          <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="44:1622" data-name="Tag">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I44:1622;4:29">
              Stalled
            </p>
          </div>
          <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="44:1624" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I44:1624;4:8">
              Share
            </p>
          </div>
          <Button className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" />
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="44:1628" data-name="Frame">
          <div className="border-[var(--primitive\/ink,#0b0b0c)] border-b-2 border-solid content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="44:1629" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1630">
              Overview
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="44:1631" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1632">
              Transcript
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="44:1633" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1634">
              Analysis
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="44:1635" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1636">
              Coaching
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="44:1637" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[34px]" data-node-id="44:1638" data-name="Frame">
            <div className="relative shrink-0 size-[13px]" data-node-id="44:1639" data-name="Icon/play">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlay} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)] whitespace-nowrap" data-node-id="44:1641">
            18:42 / 38:12
          </p>
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-node-id="44:1642" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="44:1650">
            1×
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="44:1651">
            −10s
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="44:1652">
            +10s
          </p>
        </div>
        <div className="content-stretch flex gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="44:1653" data-name="Frame">
          <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip px-[18px] py-[16px] relative rounded-[12px]" data-node-id="44:1654" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px] whitespace-nowrap" data-node-id="44:1655">
              Key moments
            </p>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip py-[9px] relative shrink-0 w-full" data-node-id="44:1656" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-node-id="44:1657" data-name="Frame">
                <div className="relative shrink-0 size-[15px]" data-node-id="44:1658" data-name="Icon/check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[46px]" data-node-id="44:1661">
                04:10
              </p>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="44:1662">
                Strong discovery question — “What breaks between dispatch and billing?”
              </p>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip py-[9px] relative shrink-0 w-full" data-node-id="44:1663" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-node-id="44:1664" data-name="Frame">
                <div className="relative shrink-0 size-[15px]" data-node-id="44:1665" data-name="Icon/check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[46px]" data-node-id="44:1668">
                17:58
              </p>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="44:1669">
                Accurate recap; prospect confirmed all three pains
              </p>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip py-[9px] relative shrink-0 w-full" data-node-id="44:1670" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-node-id="44:1671" data-name="Frame">
                <div className="relative shrink-0 size-[15px]" data-node-id="44:1672" data-name="Icon/alert">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[46px]" data-node-id="44:1676">
                18:42
              </p>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="44:1677">
                Price objection raised — really about rollout risk
              </p>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip py-[9px] relative shrink-0 w-full" data-node-id="44:1678" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-node-id="44:1679" data-name="Frame">
                <div className="relative shrink-0 size-[15px]" data-node-id="44:1680" data-name="Icon/alert">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert1} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[46px]" data-node-id="44:1684">
                18:44
              </p>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="44:1685">
                Interrupted the CFO; offered 12% discount in 5s
              </p>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip py-[9px] relative shrink-0 w-full" data-node-id="44:1686" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-node-id="44:1687" data-name="Frame">
                <div className="relative shrink-0 size-[15px]" data-node-id="44:1688" data-name="Icon/alert">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert1} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[46px]" data-node-id="44:1692">
                19:02
              </p>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="44:1693">
                ROI monologue — 1:42 uninterrupted
              </p>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip py-[9px] relative shrink-0 w-full" data-node-id="44:1694" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-node-id="44:1695" data-name="Frame">
                <div className="relative shrink-0 size-[15px]" data-node-id="44:1696" data-name="Icon/alert">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[46px]" data-node-id="44:1700">
                27:05
              </p>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="44:1701">
                Same objection resurfaced
              </p>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip py-[9px] relative shrink-0 w-full" data-node-id="44:1702" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-node-id="44:1703" data-name="Frame">
                <div className="relative shrink-0 size-[15px]" data-node-id="44:1704" data-name="Icon/alert">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert1} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[46px]" data-node-id="44:1708">
                38:00
              </p>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="44:1709">
                Call ended without a next step
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[360px]" data-node-id="44:1710" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.35] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px] whitespace-nowrap" data-node-id="44:1711">
              Behavioral analysis
            </p>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start overflow-clip px-[14px] py-[11px] relative rounded-[10px] shrink-0 w-full" data-node-id="44:1712" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[40px] relative rounded-[2px] shrink-0 w-[3px]" data-node-id="44:1713" data-name="Rectangle" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="44:1714" data-name="Frame">
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="44:1715">
                  Interruption
                </p>
                <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1716">
                  5 instances
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[-0.025px] w-[min-content]" data-node-id="44:1717">
                  ↑ 100% vs Jordan’s avg · 3 during pricing
                </p>
              </div>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start overflow-clip px-[14px] py-[11px] relative rounded-[10px] shrink-0 w-full" data-node-id="44:1718" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention,#c27a1a)] h-[40px] relative rounded-[2px] shrink-0 w-[3px]" data-node-id="44:1719" data-name="Rectangle" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="44:1720" data-name="Frame">
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="44:1721">
                  Talk to listen
                </p>
                <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1722">
                  61 : 39
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[-0.025px] w-[min-content]" data-node-id="44:1723">
                  ↑ 12% vs avg · 78 : 22 after 18:42
                </p>
              </div>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start overflow-clip px-[14px] py-[11px] relative rounded-[10px] shrink-0 w-full" data-node-id="44:1724" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[40px] relative rounded-[2px] shrink-0 w-[3px]" data-node-id="44:1725" data-name="Rectangle" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="44:1726" data-name="Frame">
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="44:1727">
                  Objection handling
                </p>
                <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1728">
                  Needs improvement
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[-0.025px] w-[min-content]" data-node-id="44:1729">
                  Answered before diagnosing · Pattern in 4 of 6 objections
                </p>
              </div>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start overflow-clip px-[14px] py-[11px] relative rounded-[10px] shrink-0 w-full" data-node-id="44:1730" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve,#2f7d5b)] h-[40px] relative rounded-[2px] shrink-0 w-[3px]" data-node-id="44:1731" data-name="Rectangle" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="44:1732" data-name="Frame">
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="44:1733">
                  Question quality
                </p>
                <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1734">
                  Strong
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[-0.025px] w-[min-content]" data-node-id="44:1735">
                  9 discovery Qs · 4 follow-ups · Top 3 on team
                </p>
              </div>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start overflow-clip px-[14px] py-[11px] relative rounded-[10px] shrink-0 w-full" data-node-id="44:1736" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention,#c27a1a)] h-[40px] relative rounded-[2px] shrink-0 w-[3px]" data-node-id="44:1737" data-name="Rectangle" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="44:1738" data-name="Frame">
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="44:1739">
                  Pacing
                </p>
                <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1740">
                  201 wpm
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[-0.025px] w-[min-content]" data-node-id="44:1741">
                  after the objection (from 168) · Rushed
                </p>
              </div>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start overflow-clip px-[14px] py-[11px] relative rounded-[10px] shrink-0 w-full" data-node-id="44:1742" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress,#c2413b)] h-[40px] relative rounded-[2px] shrink-0 w-[3px]" data-node-id="44:1743" data-name="Rectangle" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="44:1744" data-name="Frame">
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="44:1745">
                  Next step
                </p>
                <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="44:1746">
                  None set
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[-0.025px] w-[min-content]" data-node-id="44:1747">
                  first time in 10 calls
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[18px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="44:1748" data-name="Frame">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="44:1749">
            BYLDA SUMMARY
          </p>
          <p className="font-['Newsreader:Medium'] font-medium leading-[1.35] min-w-full relative shrink-0 text-[18px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.09px] w-[min-content]" data-node-id="44:1750">
            Strong first 17 minutes. Control was lost at 18:42 when Jordan answered the CFO’s concern before he finished. The real concern — rollout — was never addressed.
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5), Editorial/Insight: Font(family: "Newsreader", style: Medium, size: 18, weight: 500, lineHeight: 1.350000023841858, letterSpacing: -0.5).

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

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
