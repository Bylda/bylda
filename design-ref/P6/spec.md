# P6 — Weekly Sales Behavior Report — outline · node `52:10624` · Lane 6 (Dhruv) · route `/app/reports/outline` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.
> The `App Shell / Navigation v2` subtree is Foundation's (`src/components/bylda/shell/`) — don't rebuild it.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/76ca9a94-21ce-4fe9-a2c8-6870de3cd302.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/187e2ab5-3c25-4075-929a-08b72a355c30.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/e4776060-36b9-4ebd-8371-12333acc6974.svg";
const imgIconHome = "https://www.figma.com/api/mcp/asset/e8eae474-b321-4554-be08-27baf47a0731.svg";
const imgIconSearch1 = "https://www.figma.com/api/mcp/asset/87fc3cec-05e4-46ae-9d7e-cd1bc6c54b4d.svg";
const imgRailNotifications = "https://www.figma.com/api/mcp/asset/001205d9-b64e-4163-b096-b6987b1953b6.svg";
const imgIconIntelligence = "https://www.figma.com/api/mcp/asset/aa4ecc82-c759-4758-95b0-8c89abd71822.svg";
const imgIconPlus1 = "https://www.figma.com/api/mcp/asset/8903d209-851f-425e-bfa0-c83fcbed6c48.svg";
const imgIconSettings = "https://www.figma.com/api/mcp/asset/818ec3d8-bf7b-4642-bd43-ca88042c072a.svg";
const imgIconChevron = "https://www.figma.com/api/mcp/asset/747c1491-684a-4025-bd1c-1a7ed052a694.svg";
const imgIconHome1 = "https://www.figma.com/api/mcp/asset/3982ddbd-8336-4cc3-a6c3-490ab8e572e6.svg";
const imgIcon = "https://www.figma.com/api/mcp/asset/4276a72c-4c44-47ba-b889-2ba8ec1090b0.svg";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/deae4042-9498-45eb-8492-4f1691675c31.svg";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/ae3f7ee6-7c1c-40b6-8eee-52c29c2f8734.svg";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/2bf3086c-6bdf-4cbe-9b22-7b496dfd5dbd.svg";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/4318e8bc-c22b-4ddc-9323-aaf083ac8da2.svg";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/543c9980-f085-4b45-b163-f3af4d55350f.svg";
const imgIconPlus2 = "https://www.figma.com/api/mcp/asset/95e6a177-a0b9-45e8-92f8-3ed23cfa3e26.svg";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/e1d4b5d4-e3ab-4fef-a032-40bf0ba7c724.svg";
const imgIcon7 = "https://www.figma.com/api/mcp/asset/80460f21-54ef-4351-8dc0-0ca882590d7d.svg";
const imgIcon8 = "https://www.figma.com/api/mcp/asset/3c4f0252-4f3a-4de5-ae01-47c7caa264b8.svg";
const imgIcon9 = "https://www.figma.com/api/mcp/asset/962046c0-667d-4ff2-84ff-d48389b1cf30.svg";
const imgIconMore = "https://www.figma.com/api/mcp/asset/80891557-b8c0-4337-9cf6-5a84b1fe44cf.svg";
const imgIconChevron1 = "https://www.figma.com/api/mcp/asset/b072b8ae-fce4-4d23-8818-9a702d71f249.svg";
const imgIconChevron2 = "https://www.figma.com/api/mcp/asset/321f9e01-de51-4002-8874-acc1f897fd6a.svg";
const imgSparkline = "https://www.figma.com/api/mcp/asset/06c6f5b9-4677-4d8e-9369-24b4bdd7c1ce.svg";

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

export default function WeeklySalesBehaviorReportOutlineReferenceStyle() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="52:10624" data-name="Weekly Sales Behavior Report — outline (reference style)">
      <div className="absolute content-stretch flex h-[1080px] items-start left-0 top-0 w-[312px]" data-node-id="52:10625" data-name="App Shell / Navigation v2">
        <div className="bg-[var(--surface\/rail,#0b0b0c)] content-stretch flex flex-col gap-[10px] h-full items-center overflow-clip py-[14px] relative shrink-0 w-[64px]" data-node-id="I52:10625;37:52" data-name="Workspace Rail">
          <div className="bg-[var(--primitive\/white,white)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:10625;37:54" data-name="Workspace / Acme Revenue">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[2.4px] whitespace-nowrap" data-node-id="I52:10625;37:53">
              B
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I52:10625;37:55" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/800,#2a2a2e)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:10625;37:58" data-name="Rail / Home">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:10625;37:56" data-name="Icon/home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:10625;37:62" data-name="Rail / Search">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:10625;37:59" data-name="Icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch1} />
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I52:10625;37:66" data-name="Rail / Notifications">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRailNotifications} />
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:10625;37:71" data-name="Rail / Ask Bylda">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:10625;37:68" data-name="Icon/intelligence">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconIntelligence} />
            </div>
          </div>
          <div className="bg-[var(--primitive\/graphite\/700,#3a3a3f)] h-px relative shrink-0 w-[22px]" data-node-id="I52:10625;37:72" data-name="Rectangle" />
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I52:10625;37:74" data-name="Team / MM">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:73">
              MM
            </p>
          </div>
          <div className="bg-[var(--primitive\/graphite\/900,#1b1b1e)] border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I52:10625;37:76" data-name="Team / ENT">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:75">
              ENT
            </p>
          </div>
          <div className="border border-[var(--primitive\/graphite\/700,#3a3a3f)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I52:10625;37:80" data-name="Team / add">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:77" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus1} />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I52:10625;37:81" data-name="Frame" />
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="I52:10625;37:92" data-name="Rail / Settings">
            <div className="relative shrink-0 size-[18px]" data-node-id="I52:10625;37:82" data-name="Icon/settings">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSettings} />
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[34px]" data-node-id="I52:10625;37:93" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:93;4:36">
              DW
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-px h-full items-start overflow-clip pb-[14px] pt-[16px] px-[12px] relative shrink-0 w-[248px]" data-node-id="I52:10625;37:95" data-name="Sidebar">
          <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[10px] relative shrink-0 w-full" data-node-id="I52:10625;37:96" data-name="Frame">
            <p className="[word-break:break-word] font-['Cinzel:Regular'] font-normal leading-[1.1] relative shrink-0 text-[20px] text-[color:var(--primitive\/white,white)] tracking-[2.4px] whitespace-nowrap" data-node-id="I52:10625;37:97">
              BYLDA
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I52:10625;37:98" data-name="Workspace header">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="I52:10625;37:99" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I52:10625;37:100">
                Acme Revenue
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] relative shrink-0 text-[12.5px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[-0.025px]" data-node-id="I52:10625;37:101">
                Mid-Market AE · 9 reps
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I52:10625;37:102" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron} />
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="I52:10625;37:104" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:105" data-name="Nav / Home">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:105;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:105;36:44">
              Home
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:105;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:111" data-name="Nav / Intelligence">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:111;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:111;36:44">
              Intelligence
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:111;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:118" data-name="Nav / Calls">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:118;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:118;36:44">
              Calls
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:118;36:45">
              ​
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:124" data-name="Nav / Reports">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:124;36:47" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px]" data-node-id="I52:10625;37:124;36:49">
              Reports
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:124;36:50">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:133" data-name="Nav / Team">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:133;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:133;36:44">
              Team
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:133;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:142" data-name="Nav / Coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:142;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:142;36:44">
              Coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:142;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:150" data-name="Nav / Rooms">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:150;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:150;36:44">
              Rooms
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:150;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I52:10625;37:156" data-name="Section / MY ROOMS">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I52:10625;37:157">
              MY ROOMS
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I52:10625;37:158" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:161" data-name="Room / daily-brief">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:161;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:161;36:44">
              daily-brief
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:161;36:45">
              ●
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:170" data-name="Room / coaching">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:170;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:170;36:44">
              coaching
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:170;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:179" data-name="Room / objection-watch">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:179;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:179;36:44">
              objection-watch
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:179;36:45">
              9
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:188" data-name="Room / wins">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:188;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:188;36:44">
              wins
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:188;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:197" data-name="Room / lost-deals">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:197;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:197;36:44">
              lost-deals
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:197;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I52:10625;37:226" data-name="Section / PEOPLE">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I52:10625;37:227">
              PEOPLE
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I52:10625;37:228" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:231" data-name="Person / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:231;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:231;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:231;36:45">
              on a call
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:237" data-name="Person / Alex Morgan">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:237;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:237;36:44">
              Alex Morgan
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:237;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:243" data-name="Person / Mia Kowalski">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:243;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:243;36:44">
              Mia Kowalski
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:243;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:249" data-name="Person / Sarah Lin">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:249;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:249;36:44">
              Sarah Lin
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:249;36:45">
              away
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[6px] pl-[10px] pr-[8px] pt-[14px] relative shrink-0 w-full" data-node-id="I52:10625;42:1836" data-name="Section / DIRECT MESSAGES">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.66px]" data-node-id="I52:10625;42:1837">
              DIRECT MESSAGES
            </p>
            <div className="relative shrink-0 size-[13px]" data-node-id="I52:10625;42:1838" data-name="Icon/plus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus2} />
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;42:1839" data-name="DM / Jordan Reyes">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;42:1839;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;42:1839;36:44">
              Jordan Reyes
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;42:1839;36:45">
              2
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;42:1845" data-name="DM / Kiran Patel">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;42:1845;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;42:1845;36:44">
              Kiran Patel
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;42:1845;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;42:1851" data-name="DM / BYLDA Coach">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;42:1851;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;42:1851;36:44">
              BYLDA Coach
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;42:1851;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;42:1858" data-name="Nav / Saved">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;42:1858;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;42:1858;36:44">
              Saved
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;42:1858;36:45">
              12
            </p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-px" data-node-id="I52:10625;37:276" data-name="Frame" />
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:277" data-name="Nav / Integrations">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:277;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:277;36:44">
              Integrations
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:277;36:45">
              ​
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0 w-full" data-node-id="I52:10625;37:286" data-name="Nav / Settings">
            <div className="relative shrink-0 size-[16px]" data-node-id="I52:10625;37:286;36:42" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--primitive\/silver\/300,#d3d0cb)] tracking-[-0.042px]" data-node-id="I52:10625;37:286;36:44">
              Settings
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/silver\/500,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10625;37:286;36:45">
              ​
            </p>
          </div>
        </div>
      </div>
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[828px]" crumb="Weekly Sales Behavior Report  /  outline (reference style)" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[64px] py-[28px] top-[56px] w-[828px]" data-node-id="52:10859" data-name="Main">
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10861" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative whitespace-nowrap" data-node-id="52:10862" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px]" data-node-id="52:10863">
              Weekly Sales Behavior Report
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="52:10864">
              Sep 21 – Sep 27 · Mid-Market AE · 164 calls
            </p>
          </div>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="52:10865" data-name="Frame">
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[26px]" data-node-id="52:10866" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10866;4:36">
                DW
              </p>
            </div>
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[26px]" data-node-id="52:10868" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10868;4:36">
                KP
              </p>
            </div>
            <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center mr-[-6px] relative rounded-[999px] shrink-0 size-[26px]" />
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[26px]" data-node-id="52:10872" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10872;4:36">
                TG
              </p>
            </div>
          </div>
          <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="52:10874" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I52:10874;4:8">
              Share
            </p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-node-id="52:10876" data-name="Icon/more">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMore} />
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10880" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10881" data-name="Frame">
            <div className="relative shrink-0 size-[14px]" data-node-id="52:10882" data-name="Icon/chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10884">
              Executive summary
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] w-full" data-node-id="52:10885">
            Discovery quality improved across the team — second-level questions are at an 8-week high. Price objections rose 27% and were handled worse: reps answered before diagnosing in 7 of 9 cases.
          </p>
          <div className="[word-break:break-word] content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="52:10886" data-name="Frame">
            <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip px-[12px] py-[10px] relative rounded-[8px]" data-node-id="52:10887" data-name="Frame">
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="52:10888">
                Discovery depth
              </p>
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10889">
                3.4
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[-0.025px]" data-node-id="52:10890">
                ↑ 17%
              </p>
            </div>
            <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip px-[12px] py-[10px] relative rounded-[8px]" data-node-id="52:10891" data-name="Frame">
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="52:10892">
                Price objections
              </p>
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10893">
                17
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[-0.025px]" data-node-id="52:10894">
                ↑ 27%
              </p>
            </div>
            <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip px-[12px] py-[10px] relative rounded-[8px]" data-node-id="52:10895" data-name="Frame">
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="52:10896">
                Held control
              </p>
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10897">
                54%
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[-0.025px]" data-node-id="52:10898">
                ↓ 7 pts
              </p>
            </div>
            <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip px-[12px] py-[10px] relative rounded-[8px]" data-node-id="52:10899" data-name="Frame">
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px]" data-node-id="52:10900">
                Coaching held
              </p>
              <p className="font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10901">
                3 of 3
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10903" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10904" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10905">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10907">
              This week’s biggest change
            </p>
            <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="52:10902" data-name="Sparkline">
              <div className="absolute inset-[-2.17%_-0.39%_-2.6%_0]">
                <img alt="" className="block max-w-none size-full" src={imgSparkline} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10915" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10916" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10917">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10919">
              Team behavior
            </p>
            <div className="h-[24px] overflow-clip relative shrink-0 w-[90px]" data-node-id="52:10908" data-name="Frame">
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] left-0 rounded-[1px] size-[12px] top-[12px]" data-node-id="52:10909" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] left-[15px] rounded-[1px] top-[9px] w-[12px]" data-node-id="52:10910" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15px] left-[30px] rounded-[1px] top-[9px] w-[12px]" data-node-id="52:10911" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[18px] left-[45px] rounded-[1px] top-[6px] w-[12px]" data-node-id="52:10912" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[21px] left-[60px] rounded-[1px] top-[3px] w-[12px]" data-node-id="52:10913" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[24px] left-[75px] rounded-[1px] top-0 w-[12px]" data-node-id="52:10914" data-name="Rectangle" />
            </div>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10927" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10928" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10929">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10931">
              Rep changes
            </p>
            <div className="h-[24px] overflow-clip relative shrink-0 w-[90px]" data-node-id="52:10920" data-name="Frame">
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[10.286px] left-0 rounded-[1px] top-[13.71px] w-[12px]" data-node-id="52:10921" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[20.571px] left-[15px] rounded-[1px] top-[3.43px] w-[12px]" data-node-id="52:10922" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[13.714px] left-[30px] rounded-[1px] top-[10.29px] w-[12px]" data-node-id="52:10923" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[24px] left-[45px] rounded-[1px] top-0 w-[12px]" data-node-id="52:10924" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[17.143px] left-[60px] rounded-[1px] top-[6.86px] w-[12px]" data-node-id="52:10925" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[20.571px] left-[75px] rounded-[1px] top-[3.43px] w-[12px]" data-node-id="52:10926" data-name="Rectangle" />
            </div>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10939" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10940" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10941">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10943">
              Important objections
            </p>
            <div className="h-[24px] overflow-clip relative shrink-0 w-[90px]" data-node-id="52:10932" data-name="Frame">
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[12.706px] left-0 rounded-[1px] top-[11.29px] w-[12px]" data-node-id="52:10933" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[15.529px] left-[15px] rounded-[1px] top-[8.47px] w-[12px]" data-node-id="52:10934" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[14.118px] left-[30px] rounded-[1px] top-[9.88px] w-[12px]" data-node-id="52:10935" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[16.941px] left-[45px] rounded-[1px] top-[7.06px] w-[12px]" data-node-id="52:10936" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[18.353px] left-[60px] rounded-[1px] top-[5.65px] w-[12px]" data-node-id="52:10937" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[24px] left-[75px] rounded-[1px] top-0 w-[12px]" data-node-id="52:10938" data-name="Rectangle" />
            </div>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10944" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10945" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10946">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10948">
              Calls worth reviewing · 4
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10956" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10957" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10958">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10960">
              Methodology breakdown
            </p>
            <div className="h-[24px] overflow-clip relative shrink-0 w-[90px]" data-node-id="52:10949" data-name="Frame">
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[24px] left-0 rounded-[1px] top-0 w-[12px]" data-node-id="52:10950" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[24px] left-[15px] rounded-[1px] top-0 w-[12px]" data-node-id="52:10951" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[20.571px] left-[30px] rounded-[1px] top-[3.43px] w-[12px]" data-node-id="52:10952" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[20.571px] left-[45px] rounded-[1px] top-[3.43px] w-[12px]" data-node-id="52:10953" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/silver\/300,#d3d0cb)] h-[17.143px] left-[60px] rounded-[1px] top-[6.86px] w-[12px]" data-node-id="52:10954" data-name="Rectangle" />
              <div className="absolute bg-[var(--primitive\/graphite\/800,#2a2a2e)] h-[17.143px] left-[75px] rounded-[1px] top-[6.86px] w-[12px]" data-node-id="52:10955" data-name="Rectangle" />
            </div>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10961" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10962" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10963">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10965">
              Coaching priorities
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10966" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10967" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10968">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10970">
              Recommendations
            </p>
          </div>
        </div>
        <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip px-[18px] py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="52:10971" data-name="Frame">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10972" data-name="Frame">
            <div className="flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="52:10973">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[14px]" data-name="Icon/chevron">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevron2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium'] font-medium leading-[1.2] min-w-px relative text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px]" data-node-id="52:10975">
              Evidence · 14 calls
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[18px] h-[1080px] items-start left-[1140px] overflow-clip px-[22px] py-[24px] top-0 w-[300px]" data-node-id="52:10860" data-name="Context Panel">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="52:10976" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="52:10977">
            ON THIS PAGE
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10978">
          Executive summary
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10979">
          Biggest change
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10980">
          Team behavior
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10981">
          Rep changes
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10982">
          Objections
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10983">
          Calls
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10984">
          Methodology
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10985">
          Coaching
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10986">
          Recommendations
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] whitespace-nowrap" data-node-id="52:10987">
          Evidence
        </p>
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[1.3] overflow-clip relative shrink-0 w-full" data-node-id="52:10988" data-name="Frame">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="52:10989">
            COMMENTS
          </p>
          <p className="font-['Geist_Mono:Medium'] font-medium relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="52:10990">
            2
          </p>
        </div>
        <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="52:10991" data-name="Frame">
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="52:10992" data-name="Frame">
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[18px]" data-node-id="52:10993" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10993;4:36">
                KP
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:10995">
              Kiran
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="52:10996">
            Can we see this for Enterprise?
          </p>
        </div>
        <div className="bg-[var(--primitive\/pearl\/50,#f2f1ee)] border border-[var(--primitive\/silver\/200,#e5e3df)] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="52:10997" data-name="Frame">
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="52:10998" data-name="Frame">
            <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[18px]" data-node-id="52:10999" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
              <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I52:10999;4:36">
                DW
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="52:11001">
              Dana
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="52:11002">
            @Sarah @Jordan joint session Thursday.
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

These styles are contained in the design: Brand/Logo: Font(family: "Cinzel", style: Regular, size: 20, weight: 400, lineHeight: 1.100000023841858, letterSpacing: 12), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Editorial/H2: Font(family: "Newsreader", style: Medium, size: 24, weight: 500, lineHeight: 1.2000000476837158, letterSpacing: -1).

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
