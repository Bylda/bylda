# T11 — Rep Profile — Coaching · node `45:1841` · Lane 4 (Dravin) · route `/app/team/reps/$repId/coaching` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/db6d5ff9-02b5-412c-9ff3-80f1a49e728c.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/eebe7276-581f-40ec-9d48-feb83144fa86.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/68545758-490c-4ef3-b560-9652ee03bf6c.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/afe3b95b-26b5-48eb-a0e8-25dadd7cd893.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/056365f5-5782-4dcb-9bf4-5cd49abd90f2.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/7e103077-68ab-44b0-8086-3f859283076c.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/16b18471-9757-4046-be07-01c901505617.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/a9b01b5f-bc37-408d-9115-2bd278b7a708.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/c4b8b99b-5d52-4f2b-825e-ce918587e25b.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/2fc5fd98-7e45-4030-bb92-4f782b0e9a17.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/d32ad70c-29fb-4465-8da3-baf4bd0e3f4c.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/ac255aae-49be-4b86-8bd0-79f67b44e583.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/f32c0d81-f24c-4146-a5b7-8e491ec40feb.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/b0ba09c9-a987-49ef-864c-68b33d6b9ef6.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/d8f6e19c-c620-4800-8238-33c7d6e3b6c1.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/512512d7-1e4e-492b-a859-90e789f9df22.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/4bb93ce6-7ec4-4e28-93e9-5ab4fa0f50de.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/68d5973e-ece4-48ea-8b46-1e3a07a1bfc0.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/9894bbf8-868f-410e-b584-b9dc190a1a74.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/d051528a-3f9e-4554-a3a2-806f3126ba24.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/1195dabb-448d-4da2-8f64-5bf9da267530.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/63ff8ebc-b999-4916-8d96-8dda6be03f53.svg";
const imgIcon10 = "https://www.figma.com/api/mcp/asset/7a75217b-930d-4e73-8d73-4fec42a87a98.svg";

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

export default function RepProfileCoaching() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="45:1841" data-name="Rep Profile — Coaching">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" data-node-id="45:1842" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I45:1842;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I45:1842;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I45:1842;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I45:1842;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I45:1842;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I45:1842;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I45:1842;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I45:1842;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I45:1842;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I45:1842;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I45:1842;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I45:1842;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I45:1842;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I45:1842;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I45:1842;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I45:1842;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I45:1842;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I45:1842;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I45:1842;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I45:1842;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I45:1842;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I45:1842;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I45:1842;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I45:1842;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I45:1842;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I45:1842;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I45:1842;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I45:1842;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:111;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:118;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:118;36:44">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:118;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:133;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I45:1842;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I45:1842;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I45:1842;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I45:1842;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I45:1842;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I45:1842;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:231;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I45:1842;37:231;36:49">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:231;36:50">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I45:1842;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I45:1842;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I45:1842;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I45:1842;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I45:1842;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I45:1842;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon10} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I45:1842;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:1842;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[1128px]" crumb="Rep Profile  /  Coaching" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[1128px]" data-node-id="45:2076" data-name="Main">
        <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-node-id="45:2077" data-name="Frame">
          <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[64px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative whitespace-nowrap" data-node-id="45:2080" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px]" data-node-id="45:2081">
              Jordan Reyes
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="45:2082">
              Account Executive · Mid-Market · 14 months · 58 calls (30d)
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="45:2083" data-name="Frame">
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[26px]" data-node-id="45:2084" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:2084;4:36">
                DW
              </p>
            </div>
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[26px]" data-node-id="45:2086" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:2086;4:36">
                KP
              </p>
            </div>
          </div>
          <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="45:2088" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I45:2088;4:8">
              Message
            </p>
          </div>
          <Button className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" />
        </div>
        <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="45:2092" data-name="Frame">
          <div className="content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="45:2093" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="45:2094">
              Overview
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="45:2095" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="45:2096">
              Calls
            </p>
          </div>
          <div className="border-[var(--primitive\/ink,#0b0b0c)] border-b-2 border-solid content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="45:2097" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="45:2098">
              Coaching
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip py-[9px] relative shrink-0" data-node-id="45:2099" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="45:2100">
              Trends
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[22px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-node-id="45:2101" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="45:2102">
            ACTIVE FOCUS · DAY 2 OF 10
          </p>
          <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-full relative shrink-0 text-[24px] text-[color:var(--primitive\/white,white)] tracking-[-0.24px] w-[min-content]" data-node-id="45:2103">
            After an objection, pause before you respond.
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.025px] w-[min-content]" data-node-id="45:2104">
            Baseline 0.4s → since focus 0.9s → target 1.5s · 1 of 5 objections measured
          </p>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="45:2105" data-name="Table">
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="45:2106" data-name="Frame">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="45:2107">
              COACHING HISTORY
            </p>
          </div>
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="45:2108" data-name="Frame">
            <p className="relative shrink-0 w-[300px]" data-node-id="45:2109">
              FOCUS
            </p>
            <p className="relative shrink-0 w-[180px]" data-node-id="45:2110">
              DATES
            </p>
            <p className="relative shrink-0 w-[160px]" data-node-id="45:2111">
              RESULT
            </p>
            <p className="relative shrink-0 w-[200px]" data-node-id="45:2112">
              CHANGE
            </p>
            <p className="relative shrink-0 w-[120px]" data-node-id="45:2113">
              ​
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="45:2114" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[300px]" data-node-id="45:2115">
              Pause after objections
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[180px]" data-node-id="45:2116">
              Sep 28 →
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="45:2117" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/info-bg,#eeebfa)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="45:2118" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/info,#6a5ad0)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:2118;4:31">
                  Measuring
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[200px]" data-node-id="45:2120">
              0.4s → 0.9s
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[120px]" data-node-id="45:2121">
              Open
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="45:2122" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[300px]" data-node-id="45:2123">
              Talk less during demos
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[180px]" data-node-id="45:2124">
              Aug 12 – Sep 2
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="45:2125" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="45:2126" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:2126;4:25">
                  Held 4 wks
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[200px]" data-node-id="45:2128">
              71% → 58%
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[120px]" data-node-id="45:2129">
              Open
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="45:2130" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[300px]" data-node-id="45:2131">
              Confirm next step
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[180px]" data-node-id="45:2132">
              Jun 30 – Jul 21
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="45:2133" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="45:2134" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I45:2134;4:25">
                  Held 10 wks
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[200px]" data-node-id="45:2136">
              62% → 86%
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[120px]" data-node-id="45:2137">
              Open
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Editorial/H2: Font(family: "Newsreader", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0).

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
