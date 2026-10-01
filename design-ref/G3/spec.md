# G3 — Coaching — Index (Active) · node `30:246` · Lane 2 (Mayur) · route `/app/coaching` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/edb3d8ff-ec8c-44d0-863a-ee9b395ec966.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/1546ecc4-1511-485f-8984-78271f00c634.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/d1c05928-951f-472f-93b6-53956d21acbb.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/ce25f884-d692-4478-8f1e-3d6c8803ec5d.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/80996eb0-4554-44da-a35c-8479303d89ca.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/6aa32e3d-3802-43bb-96c2-96b8921330d2.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/994e9cb9-9eb5-4e4e-8ec9-039550e578d9.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/9e541766-7566-46c4-a1d3-d7272b9a6248.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/8a01da1d-4de2-4514-981f-380793decd94.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/492e38a5-1341-4d60-be8b-7e80bc7bcb97.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/db31b23d-3f8f-420c-b5b1-d67ecce9d76d.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/619ec4a2-b64c-4f8b-9a63-30a5952b1a52.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/5a43a3f8-8881-401b-9d05-7b212814055d.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/ed73d21c-e4f8-426b-9647-fbadd13072a3.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/187e55b9-f598-412c-b777-2f22439b0598.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/4759f13a-e54b-4d11-b8f4-0bfdaf7c407c.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/78dbad96-266b-401c-ba08-4545ff48bd36.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/39a6da90-c9db-41e4-a860-6683275bcfda.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/952232d1-a48b-45de-90bc-47e932b45d42.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/a04a0f6d-7e70-451c-becc-e1a52a993397.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/d2d51cd8-33e0-4bce-b427-3007e14227af.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/27adb97e-6b4d-4d0b-8647-08d2262023cb.svg";
const imgFrame = "https://www.figma.com/api/mcp/asset/d86366df-397f-48e6-9629-689247a3e096.svg";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/68e129b0-5e8a-47e2-9402-9e75ff265197.svg";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/61247a8a-7934-423c-9f97-a1a9aa55b7fd.svg";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/6abc9fe0-4ff0-4880-b637-3c189af2362e.svg";

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

export default function CoachingIndexActive() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="30:246" data-name="Coaching — Index (Active)">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" data-node-id="38:9645" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I38:9645;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9645;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:9645;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:9645;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9645;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9645;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9645;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9645;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I38:9645;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9645;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9645;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:9645;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:9645;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:9645;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:9645;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:9645;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:9645;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:9645;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I38:9645;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I38:9645;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I38:9645;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:9645;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I38:9645;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I38:9645;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:9645;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I38:9645;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I38:9645;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I38:9645;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:111;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:118;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:118;36:44">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:118;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:133;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:142;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:9645;37:142;36:49">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:142;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:9645;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:9645;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:9645;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:9645;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:9645;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:9645;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:231;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:231;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:231;36:45">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:9645;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:9645;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:9645;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:9645;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:9645;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:9645;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:9645;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:9645;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[1128px]" crumb="Coaching  /  Index (Active)" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[1128px]" data-node-id="30:336" data-name="Main">
        <div className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full" data-node-id="30:337" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="30:338" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] w-full" data-node-id="30:339">
              Coaching
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="30:340">
              One behavior per rep at a time. Bylda measures each focus on real calls.
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="30:341" data-name="Frame">
            <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="30:342" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I30:342;4:4">
                New focus
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[18px] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="30:344" data-name="Frame">
          <div className="border-[var(--primitive\/ink,#0b0b0c)] border-b-[1.5px] border-solid content-stretch flex font-medium gap-[6px] items-start overflow-clip py-[8px] relative shrink-0" data-node-id="30:345" data-name="Frame">
            <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="30:346">
              Active
            </p>
            <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="30:347">
              4
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0" data-node-id="30:348" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="30:349">
              Needs follow-up
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="30:350">
              1
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0" data-node-id="30:351" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="30:352">
              Completed
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="30:353">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-start overflow-clip py-[8px] relative shrink-0" data-node-id="30:354" data-name="Frame">
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px]" data-node-id="30:355">
              All
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="30:356">
              14
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="30:357" data-name="Table">
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="30:358" data-name="Frame">
            <p className="relative shrink-0 w-[170px]" data-node-id="30:359">
              REP
            </p>
            <p className="relative shrink-0 w-[260px]" data-node-id="30:360">
              FOCUS
            </p>
            <p className="relative shrink-0 w-[150px]" data-node-id="30:361">
              STATUS
            </p>
            <p className="relative shrink-0 w-[160px]" data-node-id="30:362">
              PROGRESS
            </p>
            <p className="relative shrink-0 w-[110px]" data-node-id="30:363">
              CHECK-IN
            </p>
            <p className="relative shrink-0 w-[120px]" data-node-id="30:364">
              ​
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="30:365" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[170px]" data-node-id="30:366" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="30:369">
                Jordan Reyes
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[260px]" data-node-id="30:370">
              Pause after objections
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-node-id="30:371" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/info-bg,#eeebfa)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:372" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/info,#6a5ad0)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:372;4:31">
                  Measuring · day 2
                </p>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-[160px]" data-node-id="30:374" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="30:376">
              Thu Oct 1
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="30:377" data-name="Frame">
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:378" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:378;4:33">
                  1 of 5 obj.
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="30:380" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[170px]" data-node-id="30:381" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="30:382" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:382;4:36">
                  PN
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="30:384">
                Priya Nair
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[260px]" data-node-id="30:385">
              Confirm next step before hanging up
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-node-id="30:386" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:387" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:387;4:25">
                  On track · day 6
                </p>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-[160px]" data-node-id="30:389" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="30:391">
              Mon Oct 5
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="30:392" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:393" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:393;4:25">
                  81% / 80%
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="30:395" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[170px]" data-node-id="30:396" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="30:397" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:397;4:36">
                  MH
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="30:399">
                Marcus Hale
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[260px]" data-node-id="30:400">
              Recap before pricing
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-node-id="30:401" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:402" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:402;4:29">
                  Not yet · day 12
                </p>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-[160px]" data-node-id="30:404" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="30:406">
              Overdue
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="30:407" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:408" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:408;4:29">
                  2 of 8
                </p>
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="30:410" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[170px]" data-node-id="30:411" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="30:412" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:412;4:36">
                  MK
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="30:414">
                Mia Kowalski
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[260px]" data-node-id="30:415">
              Discovery before demo
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-node-id="30:416" data-name="Frame">
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:417" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:417;4:33">
                  Assigned · not ack.
                </p>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-[160px]" data-node-id="30:419" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[110px]" data-node-id="30:421">
              Fri Oct 2
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="30:422" data-name="Frame">
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="30:423" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I30:423;4:33">
                  —
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="30:425" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="30:426">
            NEEDS FOLLOW-UP
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="30:427">
            Marcus’s focus isn’t moving after 12 days (recap before pricing: 2 of 8 calls). Bylda suggests a 1:1 with a model call rather than extending.
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0).

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
