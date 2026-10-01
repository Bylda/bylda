# C3 — Call Review — Transcript & timeline · node `9:2` · Lane 2 (Mayur) · route `/app/calls/$callId/transcript` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/fde3d787-0c75-44ae-8b97-d0d64073d65f.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/114cc0d9-de94-4044-978a-54fadba27df2.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/9a3a896b-e8f7-4316-9850-db93001e6885.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/ef54a062-b2e9-43cf-815c-faf4d854f4e2.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/c52eca0a-4a47-4351-8769-8facb8f3d0fd.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/bc22e5ba-4b56-44a6-a8c3-8b5ddc9ce229.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/41867c7c-80b8-4854-9cf9-a717c8f759d6.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/d1ffab32-d8c8-4a67-9a42-1e95620f4504.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/68271cf3-7c51-46e8-be73-21a5c077ea9f.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/789d6c6f-11de-467f-89ce-5038e07d2102.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/1ddceaaf-df20-440c-a59a-c9805589c0a6.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/933db892-90a0-47ab-bd8e-1bb76a0554b4.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/3c122429-b258-4bc0-8488-19c614760844.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/967fdf2b-f74d-4a05-a74b-9a2af03d4a08.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/0ab3830c-01d9-4b5f-9679-6ddf835113f1.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/0ea6eeb5-5432-4a4c-a145-5a33e61fadec.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/04b5d373-8d21-48f4-87c9-147d7cd7ceef.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/04dd533f-f36c-49be-95b5-5c1752c71bd3.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/e64a4cec-7cdf-4f70-9879-81590ac28840.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/285e9220-5bd6-4cea-958b-f28fe37dd255.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/a9bc0e51-96f6-4ec4-a7e1-2cd369ca4331.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/3f9fd0c7-34f5-4413-876f-8baa6ea9946d.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/eb348c7a-0eb4-4a78-889f-eeb310073cc6.svg";
const imgPolygon = "https://www.figma.com/api/mcp/asset/232f8648-4bdc-4bba-8b85-cdbe9c3b1f88.svg";
const imgPolygon1 = "https://www.figma.com/api/mcp/asset/bc4cef1a-b94e-41df-aa42-aa7a2591e10a.svg";
const imgVector = "https://www.figma.com/api/mcp/asset/c7aec174-1efa-4ef5-8025-45227afa67e1.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/47d79335-af6f-4701-8b9e-e4385a3e44ca.svg";

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

export default function CallReviewTranscriptTimeline() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="9:2" data-name="Call Review — Transcript & timeline">
      <div className="absolute content-stretch flex h-[1476px] items-start left-0 top-0 w-[312px]" data-node-id="38:2383" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I38:2383;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:2383;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:2383;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:2383;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:2383;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:2383;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:2383;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:2383;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I38:2383;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:2383;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:2383;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I38:2383;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:2383;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:2383;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I38:2383;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:2383;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I38:2383;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I38:2383;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I38:2383;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I38:2383;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I38:2383;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I38:2383;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I38:2383;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I38:2383;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:2383;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I38:2383;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I38:2383;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I38:2383;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:111;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:118;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I38:2383;37:118;36:49">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:118;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:133;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:2383;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:2383;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:2383;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:2383;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:2383;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:2383;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:231;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:231;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:231;36:45">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I38:2383;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I38:2383;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I38:2383;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I38:2383;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I38:2383;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I38:2383;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I38:2383;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I38:2383;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[1128px]" crumb="Call Review  /  Acme Logistics" />
      <div className="absolute content-stretch flex flex-col gap-[18px] h-[1420px] items-start left-[312px] overflow-clip px-[32px] py-[24px] top-[56px] w-[1128px]" data-node-id="9:131" data-name="Main">
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="9:132" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="9:133">{`CALLS  /  NEEDS REVIEW  /`}</p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.6px] whitespace-nowrap" data-node-id="9:134">
            ACME LOGISTICS
          </p>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="9:135" data-name="Frame" />
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="9:136">{`← PREV   2 of 4   NEXT →`}</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="9:137" data-name="Frame">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="9:138" data-name="Frame">
            <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] whitespace-nowrap" data-node-id="9:139">
              Acme Logistics — Pricing follow-up
            </p>
            <div className="content-center flex flex-wrap gap-[6px_14px] items-center overflow-clip relative shrink-0 w-full" data-node-id="9:140" data-name="Frame">
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="9:141" data-name="Frame">
                <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] whitespace-nowrap" data-node-id="9:144">
                  Jordan Reyes
                </p>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="9:145">
                Mon Sep 28 · 2:00 PM
              </p>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="9:146">
                38:12
              </p>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="9:147">
                Negotiation call
              </p>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="9:148">
                David Park (CFO), Sarah Cole (Ops)
              </p>
              <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="9:149">
                Opp: Acme Logistics · $48,000 · Negotiation
              </p>
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:150" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:150;4:29">
                  Stalled
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="9:152" data-name="Frame">
            <div className="content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="9:153" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I9:153;4:12">
                Share
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="9:155" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I9:155;4:8">
                Add note
              </p>
            </div>
            <Button className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex gap-[20px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="9:159" data-name="Frame">
          <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="9:160" data-name="Frame">
            <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="9:161">
              BYLDA SUMMARY
            </p>
            <p className="font-['Newsreader:Medium'] leading-[1.35] min-w-full relative shrink-0 text-[18px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.09px] w-[min-content]" data-node-id="9:162">
              Strong first 17 minutes. Control was lost at 18:42, when Jordan answered the CFO’s pricing concern before he finished it. The real concern — rollout risk — was never addressed, and the call ended without a next step.
            </p>
          </div>
          <div className="content-stretch flex flex-col font-normal gap-[8px] items-start overflow-clip relative shrink-0 w-[220px]" data-node-id="9:163" data-name="Frame">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="9:164" data-name="Frame">
              <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:165">
                Talk / listen
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)] whitespace-nowrap" data-node-id="9:166">
                61 / 39
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="9:167" data-name="Frame">
              <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:168">
                Interruptions
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--primitive\/signal\/regress,#c2413b)] whitespace-nowrap" data-node-id="9:169">
                5 (3 in pricing)
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="9:170" data-name="Frame">
              <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:171">
                Longest monologue
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] whitespace-nowrap" data-node-id="9:172">
                1:42 at 19:02
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="9:173" data-name="Frame">
              <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:174">
                Questions asked
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)] whitespace-nowrap" data-node-id="9:175">
                14 · 9 in discovery
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="9:176" data-name="Frame">
              <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:177">
                Next step
              </p>
              <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--primitive\/signal\/regress,#c2413b)] whitespace-nowrap" data-node-id="9:178">
                None set
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="9:179" data-name="Behavioral Timeline">
          <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-node-id="9:180" data-name="Frame">
            <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[30px]" data-node-id="9:181" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.025px] whitespace-nowrap" data-node-id="9:182">
                ▶
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)] whitespace-nowrap" data-node-id="9:183">
              18:42 / 38:12
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-nowrap" data-node-id="9:184">
              1×
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] whitespace-pre" data-node-id="9:185">{`−10s   +10s`}</p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="9:186" data-name="Frame" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="9:187">
              ◆ objection
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="9:188">
              | interruption
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/graphite\/700,#3a3a3f)] tracking-[0.6px] whitespace-nowrap" data-node-id="9:189">
              ▬ monologue
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/info,#6a5ad0)] tracking-[0.6px] whitespace-nowrap" data-node-id="9:190">
              • question
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="9:191">
              ✓ positive
            </p>
          </div>
          <div className="h-[196px] relative shrink-0 w-full" data-node-id="9:192" data-name="Tracks">
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[8px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:193">
              STAGE
            </p>
            <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-[80px] top-[30px] w-[944px]" data-node-id="9:194" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[46px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:195">
              EVENTS
            </p>
            <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-[80px] top-[68px] w-[944px]" data-node-id="9:196" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[84px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:197">
              TALK
            </p>
            <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-[80px] top-[106px] w-[944px]" data-node-id="9:198" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[122px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:199">
              CONTROL
            </p>
            <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-[80px] top-[144px] w-[944px]" data-node-id="9:200" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[160px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:201">
              SENTIMENT
            </p>
            <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-px left-[80px] top-[182px] w-[944px]" data-node-id="9:202" data-name="Rectangle" />
            <div className="absolute bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[22px] left-[81px] top-[4px] w-[84.492px]" data-node-id="9:203" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[86px] text-[10px] text-[color:var(--text\/secondary,#6e6c68)] top-[10px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:204">
              Opening
            </p>
            <div className="absolute bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[22px] left-[167.49px] top-[4px] w-[331.613px]" data-node-id="9:205" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[172.49px] text-[10px] text-[color:var(--text\/secondary,#6e6c68)] top-[10px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:206">
              Discovery
            </p>
            <div className="absolute bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[22px] left-[501.1px] top-[4px] w-[32.597px]" data-node-id="9:207" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[22px] left-[535.7px] top-[4px] w-[358.796px]" data-node-id="9:209" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[540.7px] text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] top-[10px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:210">
              Pricing
            </p>
            <div className="absolute bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid h-[22px] left-[896.5px] top-[4px] w-[126.503px]" data-node-id="9:211" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[901.5px] text-[10px] text-[color:var(--text\/secondary,#6e6c68)] top-[10px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:212">
              Close (no next step)
            </p>
            <div className="absolute left-[188.2px] size-[6px] top-[52px]" data-node-id="9:213" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[225.27px] size-[6px] top-[52px]" data-node-id="9:214" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[254.93px] size-[6px] top-[52px]" data-node-id="9:215" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[277.17px] size-[6px] top-[52px]" data-node-id="9:216" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[309.29px] size-[6px] top-[52px]" data-node-id="9:217" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[348.83px] size-[6px] top-[52px]" data-node-id="9:218" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[388.37px] size-[6px] top-[52px]" data-node-id="9:219" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[405.67px] size-[6px] top-[52px]" data-node-id="9:220" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[450.15px] size-[6px] top-[52px]" data-node-id="9:221" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="absolute left-[536.12px] size-[12px] top-[49px]" data-node-id="9:222" data-name="Polygon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPolygon} />
            </div>
            <div className="absolute left-[743.7px] size-[12px] top-[49px]" data-node-id="9:223" data-name="Polygon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPolygon} />
            </div>
            <div className="absolute bg-[var(--primitive\/signal\/regress,#c2413b)] h-[20px] left-[542.61px] top-[46px] w-[1.5px]" data-node-id="9:224" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/signal\/regress,#c2413b)] h-[20px] left-[553.24px] top-[46px] w-[1.5px]" data-node-id="9:225" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/signal\/regress,#c2413b)] h-[20px] left-[750.19px] top-[46px] w-[1.5px]" data-node-id="9:226" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/signal\/regress,#c2413b)] h-[20px] left-[806.53px] top-[46px] w-[1.5px]" data-node-id="9:227" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/signal\/regress,#c2413b)] h-[20px] left-[846.07px] top-[46px] w-[1.5px]" data-node-id="9:228" data-name="Rectangle" />
            <div className="absolute h-[9px] left-[327.06px] top-[68px] w-[10px]" data-node-id="9:229" data-name="Polygon">
              <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
              </div>
            </div>
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[80px] top-[84px] w-[29.654px]" data-node-id="9:230" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[109.65px] top-[94px] w-[19.77px]" data-node-id="9:231" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[129.42px] top-[84px] w-[34.597px]" data-node-id="9:232" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[164.02px] top-[94px] w-[39.539px]" data-node-id="9:233" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[203.56px] top-[84px] w-[14.827px]" data-node-id="9:234" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[218.39px] top-[94px] w-[46.953px]" data-node-id="9:235" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[265.34px] top-[84px] w-[12.356px]" data-node-id="9:236" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[277.7px] top-[94px] w-[49.424px]" data-node-id="9:237" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[327.12px] top-[84px] w-[14.827px]" data-node-id="9:238" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[341.95px] top-[94px] w-[59.309px]" data-node-id="9:239" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[401.26px] top-[84px] w-[14.827px]" data-node-id="9:240" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[416.08px] top-[94px] w-[84.021px]" data-node-id="9:241" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[500.1px] top-[84px] w-[34.597px]" data-node-id="9:242" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[534.7px] top-[94px] w-[7.414px]" data-node-id="9:243" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[542.12px] top-[84px] w-[7.414px]" data-node-id="9:244" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[549.53px] top-[84px] w-[42.01px]" data-node-id="9:245" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[591.54px] top-[94px] w-[14.827px]" data-node-id="9:246" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[606.37px] top-[84px] w-[66.723px]" data-node-id="9:247" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[673.09px] top-[94px] w-[24.712px]" data-node-id="9:248" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[697.8px] top-[84px] w-[49.424px]" data-node-id="9:249" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[747.23px] top-[94px] w-[4.942px]" data-node-id="9:250" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[752.17px] top-[84px] w-[69.194px]" data-node-id="9:251" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[821.36px] top-[94px] w-[24.712px]" data-node-id="9:252" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[846.07px] top-[84px] w-[49.424px]" data-node-id="9:253" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[9px] left-[895.5px] top-[94px] w-[24.712px]" data-node-id="9:254" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[9px] left-[920.21px] top-[84px] w-[103.791px]" data-node-id="9:255" data-name="Rectangle" />
            <div className="absolute bg-[var(--primitive\/signal\/attention,#c27a1a)] h-[2px] left-[550.27px] top-[80px] w-[42.01px]" data-node-id="9:256" data-name="Rectangle" />
            <div className="absolute h-[16.8px] left-[80px] top-[130.4px] w-[944px]" data-node-id="9:257" data-name="Vector">
              <div className="absolute inset-[-4.46%_0_-4.47%_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[228.27px] text-[10px] text-[color:var(--text\/tertiary,#9b9892)] top-[112px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:258">
              prospect leads
            </p>
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[623.66px] text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] top-[152px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:259">
              rep pushing
            </p>
            <div className="absolute h-[14.3px] left-[80px] top-[167.8px] w-[944px]" data-node-id="9:260" data-name="Vector">
              <div className="absolute inset-[-4.37%_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[759.58px] text-[10px] text-[color:var(--primitive\/signal\/info,#6a5ad0)] top-[188px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:261">
              prospect cooling
            </p>
            <div className="absolute bg-[var(--primitive\/ink,#0b0b0c)] h-[196px] left-[542.12px] top-0 w-[1.5px]" data-node-id="9:262" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['Geist_Mono:Medium'] font-medium leading-[1.3] left-[547.12px] text-[10px] text-[color:var(--text\/primary,#0b0b0c)] top-[-18px] tracking-[0.6px] whitespace-nowrap" data-node-id="9:263">
              18:42
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip pl-[80px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="9:264" data-name="Frame">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:265">
              0:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:266">
              5:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:267">
              10:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:268">
              15:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:269">
              20:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:270">
              25:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:271">
              30:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:272">
              35:00
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="9:273">
              38:12
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px overflow-clip relative w-full" data-node-id="9:274" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative rounded-[10px]" data-node-id="9:275" data-name="Transcript">
            <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[12px] items-start leading-[1.3] overflow-clip px-[18px] py-[12px] relative shrink-0 w-full" data-node-id="9:276" data-name="Frame">
              <p className="flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="9:277">
                TRANSCRIPT
              </p>
              <p className="font-['Geist_Mono:Medium'] font-medium relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="9:278">{`Search transcript   ⌘F`}</p>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative shrink-0 w-full" data-node-id="9:279" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:280" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:281">
                  17:58
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.6px] w-full" data-node-id="9:282">
                  JORDAN
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="9:283" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-full" data-node-id="9:284">
                  So to recap — three warehouses, the handoff between dispatch and billing is where it breaks, and you want this live before peak season.
                </p>
              </div>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative shrink-0 w-full" data-node-id="9:285" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:286" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:287">
                  18:21
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="9:288">
                  SARAH COLE
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="9:289" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-full" data-node-id="9:290">
                  Right. November is the hard stop.
                </p>
              </div>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative shrink-0 w-full" data-node-id="9:291" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:292" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:293">
                  18:34
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.6px] w-full" data-node-id="9:294">
                  JORDAN
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="9:295" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-full" data-node-id="9:296">
                  Great. So on pricing, for all three sites we’re at forty-eight—
                </p>
              </div>
            </div>
            <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="9:297" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:298" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:299">
                  18:42
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="9:300">
                  DAVID PARK · CFO
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="9:301" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-[min-content]" data-node-id="9:302">
                  Honestly the number isn’t the problem, it’s whether my team will actually—
                </p>
                <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-node-id="9:303" data-name="Frame">
                  <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:304" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:304;4:29">
                      ◆ Objection · implementation risk
                    </p>
                  </div>
                  <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:306" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:306;4:33">
                      Prospect cut off at 3.1s
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="9:308" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:309" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:310">
                  18:44
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.6px] w-full" data-node-id="9:311">
                  JORDAN
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="9:312" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="9:313">
                  Totally, and we can flex on price if that helps get this over the line. If you sign by the thirtieth I can do twelve percent off, and—
                </p>
                <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-node-id="9:314" data-name="Frame">
                  <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:315" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:315;4:27">
                      | Interruption · 0.4s
                    </p>
                  </div>
                  <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:317" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:317;4:27">
                      Discount before diagnosis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative shrink-0 w-full" data-node-id="9:319" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:320" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:321">
                  19:02
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.6px] w-full" data-node-id="9:322">
                  JORDAN
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="9:323" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="9:324">
                  …and the way most customers look at the ROI is, if you save even four hours a week per dispatcher, that’s—
                </p>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="9:325" data-name="Frame">
                  <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:326" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:326;4:29">
                      ▬ Monologue 1:42
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative shrink-0 w-full" data-node-id="9:328" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:329" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:330">
                  20:44
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="9:331">
                  DAVID PARK · CFO
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="9:332" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-full" data-node-id="9:333">
                  Okay. Let me take this back to the team.
                </p>
              </div>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative shrink-0 w-full" data-node-id="9:334" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:335" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:336">
                  20:51
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.6px] w-full" data-node-id="9:337">
                  JORDAN
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="9:338" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-full" data-node-id="9:339">
                  Sure — what does the timeline look like on your side?
                </p>
              </div>
            </div>
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[14px] items-start overflow-clip px-[18px] py-[10px] relative shrink-0 w-full" data-node-id="9:340" data-name="Frame">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0 w-[92px]" data-node-id="9:341" data-name="Frame">
                <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-full" data-node-id="9:342">
                  20:58
                </p>
                <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="9:343">
                  DAVID PARK · CFO
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="9:344" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-full" data-node-id="9:345">
                  I’ll let you know.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[10px] shrink-0 w-[500px]" data-node-id="9:346" data-name="Behavioral Analysis">
            <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[18px] items-start overflow-clip px-[18px] relative shrink-0 w-full" data-node-id="9:347" data-name="Frame">
              <div className="border-[var(--primitive\/ink,#0b0b0c)] border-b-[1.5px] border-solid content-stretch flex flex-col items-start overflow-clip py-[12px] relative shrink-0" data-node-id="9:348" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="9:349">
                  Analysis
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip py-[12px] relative shrink-0" data-node-id="9:350" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="9:351">
                  Behaviors
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip py-[12px] relative shrink-0" data-node-id="9:352" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="9:353">
                  Methodology
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip py-[12px] relative shrink-0" data-node-id="9:354" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="9:355">
                  Notes · 1
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[18px] py-[16px] relative shrink-0 w-full" data-node-id="9:356" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.66px] whitespace-nowrap" data-node-id="9:357">
                WHERE THE CALL WAS LOST
              </p>
              <div className="bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="9:358" data-name="Frame">
                <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="9:359" data-name="Frame">
                  <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[96px]" data-node-id="9:360">
                    OBSERVATION
                  </p>
                  <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="9:361">
                    You responded to the pricing objection 0.4s after the CFO started it, and offered 12% off within 5 seconds.
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="9:362" data-name="Frame">
                  <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[96px]" data-node-id="9:363">
                    INTERPRETATION
                  </p>
                  <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="9:364">
                    He hadn’t finished. His concern was rollout — “whether my team will actually” adopt it — not price. The discount answered a question he didn’t ask.
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="9:365" data-name="Frame">
                  <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[96px]" data-node-id="9:366">
                    DO THIS NEXT TIME
                  </p>
                  <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="9:367">
                    Pause. Ask: “Whether your team will actually…what?” Then handle adoption risk with the Brightline rollout story.
                  </p>
                </div>
                <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[12px] items-start px-[14px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="9:368" data-name="Evidence Block">
                  <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I9:368;4:68" data-name="Meta">
                    <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I9:368;4:69">
                      18:42
                    </p>
                    <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="I9:368;4:70">
                      EVIDENCE
                    </p>
                  </div>
                  <p className="flex-[1_0_0] font-['Newsreader:Italic'] font-normal italic leading-[1.45] min-w-px relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)]" data-node-id="I9:368;4:71">
                    “Honestly the number isn’t the problem, it’s whether my team will actually—”
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="9:373" data-name="Frame">
                  <Confidence className="content-stretch flex gap-[6px] items-center relative shrink-0" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Geist_Mono:Medium'] font-medium leading-[1.3] min-w-px relative text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px]" data-node-id="9:380">
                    Pattern seen in 4 of Jordan’s last 6 price objections
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.66px] whitespace-nowrap" data-node-id="9:381">
                WHAT WENT WELL
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="9:382">
                Discovery (3:30–17:00): 9 questions, 4 of them second-level. The recap at 17:58 was accurate and the prospect confirmed it — that’s the moment you had the most control.
              </p>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px] whitespace-nowrap" data-node-id="9:383">
                BEHAVIORS ON THIS CALL
              </p>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="9:384" data-name="Frame">
                <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="9:385" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[128px]" data-node-id="9:386">
                    Question quality
                  </p>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:387">
                    9 discovery Qs, 4 follow-ups
                  </p>
                  <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:388" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:388;4:25">
                      Strong
                    </p>
                  </div>
                </div>
                <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="9:390" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[128px]" data-node-id="9:391">
                    Talk / listen
                  </p>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:392">
                    61 / 39 — rose to 78 / 22 after 18:42
                  </p>
                  <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:393" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:393;4:29">
                      Shifted
                    </p>
                  </div>
                </div>
                <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="9:395" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[128px]" data-node-id="9:396">
                    Interruptions
                  </p>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:397">
                    5 · 3 during pricing
                  </p>
                  <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:398" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:398;4:27">
                      Leak
                    </p>
                  </div>
                </div>
                <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="9:400" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[128px]" data-node-id="9:401">
                    Objection handling
                  </p>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:402">
                    Answered before diagnosing
                  </p>
                  <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:403" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:403;4:27">
                      Leak
                    </p>
                  </div>
                </div>
                <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="9:405" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[128px]" data-node-id="9:406">
                    Pacing
                  </p>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:407">
                    168 → 201 wpm after objection
                  </p>
                  <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:408" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:408;4:29">
                      Rushed
                    </p>
                  </div>
                </div>
                <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="9:410" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[128px]" data-node-id="9:411">
                    Control
                  </p>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:412">
                    Led discovery; lost it at pricing
                  </p>
                  <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:413" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:413;4:27">
                      Lost
                    </p>
                  </div>
                </div>
                <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="9:415" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[128px]" data-node-id="9:416">
                    Framework (MEDDIC)
                  </p>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="9:417">
                    Economic buyer ✓ · Decision process ✗
                  </p>
                  <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="9:418" data-name="Tag">
                    <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I9:418;4:29">
                      Partial
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), Editorial/Insight: Font(family: "Newsreader", style: Medium, size: 18, weight: 500, lineHeight: 1.350000023841858, letterSpacing: -0.5), Editorial/Quote: Font(family: "Newsreader", style: Italic, size: 15, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: 0).

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

## Confidence
**Node ID:** 4:66

Always pair with sample size (n=). Low = do not recommend action, only observe.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
