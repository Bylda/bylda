# S3 — Ask Bylda — side panel (from rail ✦) · node `50:26784` · Lane 2 (Dhruv) · component `S3AskByldaSidePanel` (shell overlay) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/2eaf7b03-77fd-4bae-9c5c-6fb8e425b710.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/248c7e34-baf9-45be-b9fe-1f198009ad8b.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/917e504e-2ee3-47fa-853a-87d21035f4a9.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/20fd6e62-a001-4e83-becd-d4bc842adefe.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/5d154ff4-2444-4b89-a361-e7603246bec7.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/31da9680-bd34-4943-a417-fa3cf1691141.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/e87bc969-a315-4e45-8e07-0388090ba293.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/b3c2de48-1288-41b0-9f40-00a173eef7d8.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/763d4edc-cbb4-4d4b-8afb-dc0c526e083b.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/7845e045-a478-41a7-82f0-533904b5fadb.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/f0903e7e-a871-409e-a26f-73bb051da1d2.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/1c4ddf88-c431-47ae-953e-3591288a5130.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/8b3678cc-5fb9-46de-91f4-827fe1a9f5ab.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/fb1b08c3-027a-4f80-9dac-475270bfd00f.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/ef362b29-6508-4478-947c-d5008e9af46b.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/054763c2-46d5-47c2-82d3-4a3ec0c9d537.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/a09c60ea-5249-4f9e-87c2-f2a9d4fe5207.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/b36ccde7-52f8-466d-860f-ef2c0a184f55.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/8ce3363b-deaf-4d2f-85fc-d825fcdd462e.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/6a2fe221-a585-4114-9eb9-83f3af6dfb90.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/39046298-a3f5-4ca7-b05d-d21004dcd9a8.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/2fa99ff1-1653-4789-bcd5-9288a2913102.svg";
const imgIcon10 = "https://www.figma.com/api/mcp/asset/da8f06d9-a561-4de1-842b-2f6e172f3efa.svg";
const imgIconHome2 = "https://www.figma.com/api/mcp/asset/5e67834f-e4aa-43a5-96e2-2af54f3fe7f9.svg";
const imgIconTeam = "https://www.figma.com/api/mcp/asset/ad77147b-77ed-4999-bb73-bde081016de8.svg";
const imgIconCalls = "https://www.figma.com/api/mcp/asset/094eaf31-5923-4e4b-8cde-d23af9030e98.svg";
const imgIconCoaching = "https://www.figma.com/api/mcp/asset/fe71341d-39df-4eb1-a761-813dd1f8447d.svg";
const imgIconReports = "https://www.figma.com/api/mcp/asset/a9a45836-697f-46c6-99b6-8a2e970fcddd.svg";
const imgIconAt = "https://www.figma.com/api/mcp/asset/1799291b-8bfe-424b-ae26-9593cd8c886c.svg";
const imgIconIntelligence1 = "https://www.figma.com/api/mcp/asset/57beddde-5344-44d1-873f-439e42bc1822.svg";
const imgSparkline = "https://www.figma.com/api/mcp/asset/4404c8c1-527d-4446-977a-89318c827579.svg";
const imgIconFile = "https://www.figma.com/api/mcp/asset/e905bc6b-810a-401a-beca-44d6522444fe.svg";
const imgSparkline1 = "https://www.figma.com/api/mcp/asset/2a2fe951-c508-48b3-9643-90129d531639.svg";
const imgIconPattern = "https://www.figma.com/api/mcp/asset/c08395a9-2887-4a8c-a6cf-271e8116a98f.svg";
const imgIconTrend = "https://www.figma.com/api/mcp/asset/eb4a39eb-be25-40b9-931f-8a6bf7e32680.svg";
const imgIconAlert = "https://www.figma.com/api/mcp/asset/a72ef3cf-ebf3-4e96-b5d7-16cd4877a364.svg";
const imgIconCheck = "https://www.figma.com/api/mcp/asset/bf974dd3-2b49-46e1-bb8a-ac1574f798d2.svg";
const imgIconCheck1 = "https://www.figma.com/api/mcp/asset/16901abd-8dd3-426b-9c63-341ebda0ba17.svg";
const imgIconPlay = "https://www.figma.com/api/mcp/asset/7426e5ea-17ad-4372-9018-c21968a310b0.svg";
const imgIconIntelligence2 = "https://www.figma.com/api/mcp/asset/8dd780c2-215f-47fb-97f2-a801ef7361ac.svg";
const imgIconX = "https://www.figma.com/api/mcp/asset/faa0e641-f59a-4160-b01a-513c2c19166a.svg";
const imgSparkline2 = "https://www.figma.com/api/mcp/asset/af3479d9-252c-4c8b-9ce3-4158f6c4fdcb.svg";
const imgIconSend = "https://www.figma.com/api/mcp/asset/475cbae4-b371-4cd0-98c1-cfc1b5ff8cb7.svg";

type ConfidenceProps = {
  className?: string;
  level?: "Medium" | "High";
};

function Confidence({ className, level = "Medium" }: ConfidenceProps) {
  const isHigh = level === "High";
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center relative"} id={isHigh ? "node-4_60" : "node-4_54"}>
      <div className="content-stretch flex gap-[2px] items-start overflow-clip relative shrink-0" id={isHigh ? "node-4_61" : "node-4_55"} data-name="Bars">
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[10px] relative shrink-0 w-[3px]" id={isHigh ? "node-4_62" : "node-4_56"} data-name="Rectangle" />
        <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[10px] relative shrink-0 w-[3px]" id={isHigh ? "node-4_63" : "node-4_57"} data-name="Rectangle" />
        <div className={`h-[10px] relative shrink-0 w-[3px] ${isHigh ? String.raw`bg-[var(--primitive\/graphite\/800,#2a2a2e)]` : String.raw`bg-[var(--primitive\/silver\/200,#e5e3df)]`}`} id={isHigh ? "node-4_64" : "node-4_58"} data-name="Rectangle" />
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" id={isHigh ? "node-4_65" : "node-4_59"}>
        {isHigh ? "CONFIDENCE HIGH" : "CONFIDENCE MEDIUM"}
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

type ButtonProps = {
  className?: string;
  state?: "Default";
  type?: "Primary" | "Secondary";
};

function Button({ className, state = "Default", type = "Primary" }: ButtonProps) {
  const isSecondaryAndDefault = type === "Secondary" && state === "Default";
  return (
    <div className={className || `content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] ${isSecondaryAndDefault ? String.raw`bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid` : String.raw`bg-[var(--primitive\/ink,#0b0b0c)]`}`} id={isSecondaryAndDefault ? "node-4_7" : "node-4_3"}>
      <p className={`[word-break:break-word] font-["Inter:Medium"] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.042px] whitespace-nowrap ${isSecondaryAndDefault ? String.raw`text-[color:var(--primitive\/ink,#0b0b0c)]` : String.raw`text-[color:var(--primitive\/white,white)]`}`} id={isSecondaryAndDefault ? "node-4_8" : "node-4_4"}>
        Assign coaching
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

export default function AskByldaSidePanelFromRail() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="50:26784" data-name="Ask Bylda — side panel (from rail ✦)">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" data-node-id="50:26785" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I50:26785;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I50:26785;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I50:26785;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I50:26785;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I50:26785;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I50:26785;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I50:26785;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I50:26785;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I50:26785;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I50:26785;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I50:26785;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I50:26785;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I50:26785;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I50:26785;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I50:26785;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I50:26785;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I50:26785;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I50:26785;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I50:26785;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I50:26785;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I50:26785;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I50:26785;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I50:26785;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I50:26785;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I50:26785;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I50:26785;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I50:26785;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I50:26785;37:104" data-name="Frame" />
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:105;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I50:26785;37:105;36:49">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:105;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:111;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:118;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:118;36:44">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:118;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:124;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:124;36:44">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:124;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:133;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I50:26785;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I50:26785;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I50:26785;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I50:26785;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I50:26785;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I50:26785;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:231;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:231;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:231;36:45">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I50:26785;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I50:26785;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I50:26785;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I50:26785;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I50:26785;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I50:26785;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon10} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I50:26785;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26785;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[784px]" crumb="Manager Home  /  Feed" />
      <div className="absolute content-stretch flex flex-col gap-[14px] h-[1024px] items-start left-[312px] overflow-clip pb-[28px] pt-[26px] px-[36px] top-[56px] w-[784px]" data-node-id="50:26787" data-name="Main">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:26788" data-name="Frame">
          <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] whitespace-nowrap" data-node-id="50:26789">
            Good morning, Dana.
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-[min-content]" data-node-id="50:26790">
            Here’s what’s happening with your team today — 142 calls analyzed since yesterday.
          </p>
        </div>
        <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[2px] items-start overflow-clip p-[4px] relative rounded-[10px] shrink-0" data-node-id="50:26791" data-name="Frame">
          <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[7px] items-center overflow-clip px-[12px] py-[7px] relative rounded-[7px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)] shrink-0" data-node-id="50:26792" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:26793" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome2} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26794">
              For You
            </p>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[12px] py-[7px] relative rounded-[7px] shrink-0" data-node-id="50:26795" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:26796" data-name="Icon/team">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTeam} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26797">
              Team Updates
            </p>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[12px] py-[7px] relative rounded-[7px] shrink-0" data-node-id="50:26798" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:26799" data-name="Icon/calls">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCalls} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26800">
              Calls
            </p>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[12px] py-[7px] relative rounded-[7px] shrink-0" data-node-id="50:26801" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:26802" data-name="Icon/coaching">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCoaching} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26803">
              Coaching
            </p>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[12px] py-[7px] relative rounded-[7px] shrink-0" data-node-id="50:26804" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:26805" data-name="Icon/reports">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconReports} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26806">
              Reports
            </p>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[12px] py-[7px] relative rounded-[7px] shrink-0" data-node-id="50:26807" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:26808" data-name="Icon/at">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAt} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26809">
              Mentions
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[18px] items-start overflow-clip px-[22px] py-[20px] relative rounded-[12px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-node-id="50:26810" data-name="Feed / Hero insight">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[38px]" data-node-id="50:26811" data-name="Frame">
            <div className="relative shrink-0 size-[17.86px]" data-node-id="50:26812" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence1} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="50:26813" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="50:26814" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px] whitespace-nowrap" data-node-id="50:26815">
                BYLDA
              </p>
              <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="50:26816" data-name="Frame">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:26817">
                  APP
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26818">
                Today · 8:04 AM
              </p>
            </div>
            <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-full relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] w-[min-content]" data-node-id="50:26819">
              Jordan lost control during 4 of 6 price objections this week.
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-[min-content]" data-node-id="50:26820">
              He answers in ~0.4s — before the prospect finishes — then defends price. Reps who hold these calls pause ~1.8s and ask one question first.
            </p>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="50:26821" data-name="Frame">
              <Confidence className="content-stretch flex gap-[6px] items-center relative shrink-0" level="High" />
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:26823">
                n = 6 objections · 4 calls
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="50:26824" data-name="Frame">
              <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="50:26825" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I50:26825;4:4">
                  View pattern
                </p>
              </div>
              <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="50:26826" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I50:26826;4:8">
                  View calls (4)
                </p>
              </div>
              <Button className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" type="Secondary" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center overflow-clip relative shrink-0 w-[150px]" data-node-id="50:26828" data-name="Frame">
            <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[64px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26830">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26831">
              4 affected calls
            </p>
            <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="50:26832" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[60px]" data-node-id="50:26833" data-name="Sparkline">
                <div className="absolute inset-[-3.25%_-0.37%_-3.92%_-0.37%]">
                  <img alt="" className="block max-w-none size-full" src={imgSparkline} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26834">
                ↑ 27%
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26835">
              vs last week
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:26836" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="50:26837" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26837;4:36">
              SL
            </p>
          </div>
          <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="50:26838" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:26839">
              MANAGER UPDATE
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26840">
            Sarah added feedback to Jordan’s Acme call at 18:42.
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26841">
            10 min ago
          </p>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:26842" data-name="Frame">
          <div className="bg-[var(--primitive\/signal\/info-bg,#eeebfa)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[34px]" data-node-id="50:26843" data-name="Frame">
            <div className="relative shrink-0 size-[15.98px]" data-node-id="50:26844" data-name="Icon/file">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFile} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="50:26845" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:26846">
              REPORT
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26847">
            Your Daily Team Brief is ready — 2 min read.
          </p>
          <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="50:26848" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="50:26849" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26850">
                Daily Team Brief
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="50:26851">
                Tue, Sep 29
              </p>
            </div>
            <div className="h-[18px] relative shrink-0 w-[70px]" data-node-id="50:26852" data-name="Sparkline">
              <div className="absolute inset-[-2.58%_-0.6%_-4.1%_-0.37%]">
                <img alt="" className="block max-w-none size-full" src={imgSparkline1} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26853">
            7:30 AM
          </p>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:26854" data-name="Frame">
          <div className="bg-[var(--primitive\/signal\/info-bg,#eeebfa)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[34px]" data-node-id="50:26855" data-name="Frame">
            <div className="relative shrink-0 size-[15.98px]" data-node-id="50:26856" data-name="Icon/pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPattern} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="50:26857" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:26858">
              PATTERN
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26859">
            Discovery depth improved 12% across the team this week.
          </p>
          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="50:26860" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:26861" data-name="Icon/trend">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrend} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26862">
              12%
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26863">
            2 h ago
          </p>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:26864" data-name="Frame">
          <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[34px]" data-node-id="50:26865" data-name="Frame">
            <div className="relative shrink-0 size-[15.98px]" data-node-id="50:26866" data-name="Icon/alert">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="50:26867" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:26868">
              ALERT
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26869">
            Three reps are interrupting more often than last week.
          </p>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="50:26870" data-name="Frame">
            <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[24px]" />
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[24px]" data-node-id="50:26872" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26872;4:36">
                SL
              </p>
            </div>
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[24px]" data-node-id="50:26873" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26873;4:36">
                MK
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-pre" data-node-id="50:26874">{`  +1`}</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26875">
            3 h ago
          </p>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:26876" data-name="Frame">
          <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[34px]" data-node-id="50:26877" data-name="Frame">
            <div className="relative shrink-0 size-[15.98px]" data-node-id="50:26878" data-name="Icon/check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="50:26879" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:26880">
              COACHING
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26881">
            Alex’s objection-handling focus held for 3 weeks.
          </p>
          <div className="relative shrink-0 size-[20px]" data-node-id="50:26882" data-name="Icon/check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck1} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26883">
            5 h ago
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--primitive\/pearl\/0,#f8f7f5)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[20px] h-[1080px] items-start left-[1096px] overflow-clip px-[22px] py-[24px] rounded-[10px] top-0 w-[344px]" data-node-id="50:26884" data-name="Context Panel">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="50:26885">
          TODAY AT A GLANCE
        </p>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="50:26886" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:26887" data-name="Frame">
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip px-[14px] py-[12px] relative rounded-[10px]" data-node-id="50:26888" data-name="Frame">
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="50:26889">
                142
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="50:26890">
                Calls analyzed
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[-0.025px]" data-node-id="50:26891">
                ↑ 18%
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip px-[14px] py-[12px] relative rounded-[10px]" data-node-id="50:26892" data-name="Frame">
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="50:26893">
                7
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="50:26894">
                Key insights
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[-0.025px]" data-node-id="50:26895">
                ↑ 3 new
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:26896" data-name="Frame">
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip px-[14px] py-[12px] relative rounded-[10px]" data-node-id="50:26897" data-name="Frame">
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="50:26898">
                3
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="50:26899">
                Coaching items
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[-0.025px]" data-node-id="50:26900">
                ✓ 2 completed
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip px-[14px] py-[12px] relative rounded-[10px]" data-node-id="50:26901" data-name="Frame">
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="50:26902">
                1
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="50:26903">
                Important pattern
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[-0.025px]" data-node-id="50:26904">
                + Needs attention
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="50:26905">
          COACH TODAY
        </p>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[6px] relative shrink-0 w-full" data-node-id="50:26906" data-name="Frame">
          <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[30px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative" data-node-id="50:26908" data-name="Frame">
            <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-full" data-node-id="50:26909">
              Jordan — objection handling
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="50:26910">
              4 of 6 price objections
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[6px] relative shrink-0 w-full" data-node-id="50:26911" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[30px]" data-node-id="50:26912" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26912;4:36">
              AM
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative" data-node-id="50:26913" data-name="Frame">
            <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-full" data-node-id="50:26914">
              Alex — call control
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="50:26915">{`Monologues > 2 min in 5 calls`}</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[6px] relative shrink-0 w-full" data-node-id="50:26916" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[30px]" data-node-id="50:26917" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26917;4:36">
              MK
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative" data-node-id="50:26918" data-name="Frame">
            <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-full" data-node-id="50:26919">
              Mia — discovery depth
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="50:26920">
              1.1 follow-ups / topic
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="50:26921">
          TEAM ACTIVITY
        </p>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-node-id="50:26922" data-name="Frame">
          <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" />
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26924">
            Jordan
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="50:26925">
            On a call
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26926">
            12 min
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-node-id="50:26927" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" data-node-id="50:26928" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26928;4:36">
              SL
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26929">
            Sarah
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="50:26930">
            Reviewed 3 calls
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26931">
            28 min
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-node-id="50:26932" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" data-node-id="50:26933" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26933;4:36">
              AM
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26934">
            Alex
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="50:26935">
            Completed coaching
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26936">
            1 h
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-node-id="50:26937" data-name="Frame">
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" data-node-id="50:26938" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:26938;4:36">
              MK
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="50:26939">
            Mia
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="50:26940">
            Mentioned you
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26941">
            2 h
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="50:26942">
          RECENT CALLS
        </p>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[6px] relative shrink-0 w-full" data-node-id="50:26943" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[28px]" data-node-id="50:26944" data-name="Frame">
            <div className="relative shrink-0 size-[12px]" data-node-id="50:26945" data-name="Icon/play">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlay} />
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26946">
            Acme Logistics
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26947">
            Jordan
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26948">
            8:24 AM
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[6px] relative shrink-0 w-full" data-node-id="50:26949" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[28px]" data-node-id="50:26950" data-name="Frame">
            <div className="relative shrink-0 size-[12px]" data-node-id="50:26951" data-name="Icon/play">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlay} />
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26952">
            Northwind Health
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26953">
            Mia
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26954">
            7:51 AM
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[6px] relative shrink-0 w-full" data-node-id="50:26955" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[28px]" data-node-id="50:26956" data-name="Frame">
            <div className="relative shrink-0 size-[12px]" data-node-id="50:26957" data-name="Icon/play">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlay} />
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:26958">
            Brightline Freight
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26959">
            Theo
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:26960">
            6:12 AM
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--primitive\/white,white)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[14px] h-[1080px] items-start left-[1000px] overflow-clip px-[20px] py-[18px] shadow-[-12px_0px_40px_0px_rgba(0,0,0,0.12)] top-0 w-[440px]" data-node-id="50:27250" data-name="Ask Bylda panel">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="50:27251" data-name="Frame">
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 size-[28px]" data-node-id="50:27252" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="50:27253" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence2} />
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.35] min-w-px not-italic relative text-[15px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.075px]" data-node-id="50:27256">
            Ask Bylda
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="50:27257" data-name="Icon/x">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconX} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-[min-content]" data-node-id="50:27260">
          Answers come from your team’s calls and CRM — every claim links to evidence.
        </p>
        <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:27261" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="50:27262">
            Why are price objections getting worse this month?
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:27263" data-name="Frame">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-[min-content]" data-node-id="50:27264">
            Three things are happening at once, all starting around Sep 7:
          </p>
          <div className="[word-break:break-word] content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:27265" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/tertiary,#9b9892)] whitespace-nowrap" data-node-id="50:27266">
              1
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="50:27267">
              The new price sheet raised list price 14% — objections rose in both teams (Mid-Market +31%, Enterprise +22%).
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:27268" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/tertiary,#9b9892)] whitespace-nowrap" data-node-id="50:27269">
              2
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="50:27270">
              Jordan and Sarah respond before diagnosing — together 71% of interruptions during objections.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:27271" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/tertiary,#9b9892)] whitespace-nowrap" data-node-id="50:27272">
              3
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px]" data-node-id="50:27273">
              Implementation-risk objections are being heard as price (Acme, Ferro Metals).
            </p>
          </div>
          <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col gap-[6px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:27274" data-name="Frame">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:27275">
              PRICE OBJECTIONS / WEEK · BOTH TEAMS
            </p>
            <div className="h-[40px] relative shrink-0 w-[360px]" data-node-id="50:27276" data-name="Sparkline">
              <div className="absolute inset-[-1.86%_0_-1.88%_0]">
                <img alt="" className="block max-w-none size-full" src={imgSparkline2} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="50:27277" data-name="Frame">
            <Confidence className="content-stretch flex gap-[6px] items-center relative shrink-0" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="50:27284">
              n = 80 objections · 202 calls
            </p>
          </div>
          <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:27285" data-name="Frame">
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="50:27286" data-name="Tag">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:27286;4:33">
                Objections view
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="50:27288" data-name="Tag">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:27288;4:33">
                Behavior: interruptions
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="50:27290" data-name="Tag">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:27290;4:33">
                Acme Logistics · 18:42
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="50:27292" data-name="Tag">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.6px] whitespace-nowrap" data-node-id="I50:27292;4:33">
                HubSpot price field
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="50:27294" data-name="Frame">
            <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="50:27295" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I50:27295;4:4">
                Create team focus
              </p>
            </div>
            <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="50:27297" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I50:27297;4:8">
                Share to #objection-watch
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="50:27299" data-name="Frame" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.66px] whitespace-nowrap" data-node-id="50:27300">
          TRY
        </p>
        <div className="content-start flex flex-wrap gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="50:27301" data-name="Frame">
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="50:27302" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:27303">
              Who needs coaching this week?
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="50:27304" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:27305">
              Compare Jordan and Theo on discovery
            </p>
          </div>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="50:27306" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="50:27307">
              What changed after Alex’s coaching?
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="50:27308" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.45] min-w-px not-italic relative text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px]" data-node-id="50:27309">
            Ask about calls, reps, behaviors…
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="50:27310" data-name="Icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Editorial/H2: Font(family: "Newsreader", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1), UI/Title: Font(family: "Inter", style: Semi Bold, size: 15, weight: 600, lineHeight: 1.350000023841858, letterSpacing: -0.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0).

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

## Confidence
**Node ID:** 4:66

Always pair with sample size (n=). Low = do not recommend action, only observe.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

## Tag
**Node ID:** 4:34

Color only encodes behavioral direction. Never decorative.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
