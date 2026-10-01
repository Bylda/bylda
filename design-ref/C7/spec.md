# C7 — Calls — Manual upload · node `28:1263` · Lane 2 (Mayur) · exported 2026-10-01

Route `/app/calls/upload` · fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · frame 1440×1080 · `frame.png` = Figma render at 1440.

> Source: Figma MCP `get_design_context`, verbatim **except** the `App Shell / Navigation v2` subtree
> (identical on every screen; Foundation already built it in `src/components/bylda/shell/`) is replaced
> by a `{/* SHELL … */}` marker naming the active item. Full shell: `design-ref/_components/app-shell-nav-v2/spec.md`.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.

## Code

```tsx
const imgIconSearch = "https://www.figma.com/api/mcp/asset/30bdeb98-e135-44f7-aca4-dd7ae192daad.svg";
const imgIconPlus = "https://www.figma.com/api/mcp/asset/2cfcaa12-32be-4739-a5bf-51bb28b4b8ba.svg";
const imgIconBell = "https://www.figma.com/api/mcp/asset/1454d6d2-7898-4932-94d1-3df836b7ccad.svg";

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

export default function CallsManualUpload() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="28:1263" data-name="Calls — Manual upload">
      {/* SHELL — App Shell / Navigation v2 (instance 38:2843), absolute left-0 top-0 h-[1080px] w-[312px]. Active nav item: "Calls". Sidebar meta as in every frame (daily-brief ●, objection-watch 9, Jordan Reyes "on a call", Sarah Lin "away", DM Jordan Reyes 2, Saved 12). */}
      <WorkspaceTopBar className="absolute bg-[var(--primitive\/white,white)] border-[var(--primitive\/silver\/200,#e5e3df)] border-b border-solid content-stretch flex gap-[10px] h-[56px] items-center left-[312px] pl-[28px] pr-[20px] top-0 w-[784px]" crumb="Calls  /  Manual upload" />
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[1024px] items-start left-[312px] overflow-clip px-[36px] py-[28px] top-[56px] w-[784px]" data-node-id="28:1353" data-name="Main">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="28:1355" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-pre" data-node-id="28:1356">{`CALLS  /  UPLOAD`}</p>
        </div>
        <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-node-id="28:1357" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="28:1358" data-name="Frame">
            <p className="font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] w-full" data-node-id="28:1359">
              Upload calls
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.025px] w-full" data-node-id="28:1360">
              For teams without a connected recorder, or to backfill older calls. Bylda needs speaker separation to analyze behavior.
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--primitive\/silver\/500,#9b9892)] border-dashed content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[24px] py-[48px] relative rounded-[10px] shrink-0 w-full" data-node-id="28:1361" data-name="Frame">
          <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.24px] whitespace-nowrap" data-node-id="28:1362">
            Drop audio, video or transcript files
          </p>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] min-w-full relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] text-center tracking-[0.6px] w-[min-content] whitespace-pre-wrap" data-node-id="28:1363">{`mp3 · m4a · wav · mp4 · vtt · srt · txt   ·   up to 2 GB each   ·   dual-channel audio gives the best speaker separation`}</p>
          <div className="bg-[var(--primitive\/white,white)] border border-[var(--primitive\/silver\/300,#d3d0cb)] border-solid content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="28:1364" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/ink,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I28:1364;4:8">
              Choose files
            </p>
          </div>
        </div>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="28:1366" data-name="Table">
          <div className="[word-break:break-word] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-start leading-[1.3] overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="28:1367" data-name="Frame">
            <p className="flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="28:1368">
              THIS UPLOAD
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="28:1369">
              5 files
            </p>
          </div>
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="28:1370" data-name="Frame">
            <p className="relative shrink-0 w-[210px]" data-node-id="28:1371">
              FILE
            </p>
            <p className="relative shrink-0 w-[70px]" data-node-id="28:1372">
              SIZE
            </p>
            <p className="relative shrink-0 w-[120px]" data-node-id="28:1373">
              REP
            </p>
            <p className="relative shrink-0 w-[90px]" data-node-id="28:1374">
              DATE
            </p>
            <p className="relative shrink-0 w-[100px]" data-node-id="28:1375">
              STATUS
            </p>
            <p className="relative shrink-0 w-[60px]" data-node-id="28:1376">
              ​
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="28:1377" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[210px] whitespace-nowrap" data-node-id="28:1378" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="28:1379">
                acme_pricing_0928.m4a
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="28:1380">
                dual channel
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[70px]" data-node-id="28:1381">
              41 MB
            </p>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-node-id="28:1382" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="28:1385">
                Jordan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="28:1386">
              Sep 28
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="28:1387" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/improve-bg,#e7f2ec)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="28:1388" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/improve,#2f7d5b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1388;4:25">
                  Analyzed
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[60px]" data-node-id="28:1390">
              Open
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="28:1391" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[210px] whitespace-nowrap" data-node-id="28:1392" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="28:1393">
                northwind_disc.mp4
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="28:1394">
                video · mono audio
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[70px]" data-node-id="28:1395">
              612 MB
            </p>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-node-id="28:1396" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="28:1397" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1397;4:36">
                  MK
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="28:1399">
                Mia
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="28:1400">
              Sep 28
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="28:1401" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/info-bg,#eeebfa)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="28:1402" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/info,#6a5ad0)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1402;4:31">
                  Transcribing 62%
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] w-[60px]" data-node-id="28:1404">
              —
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="28:1405" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[210px] whitespace-nowrap" data-node-id="28:1406" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="28:1407">
                kestrel_neg.txt
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="28:1408">
                transcript · speakers labeled
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[70px]" data-node-id="28:1409">
              88 KB
            </p>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-node-id="28:1410" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="28:1411" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1411;4:36">
                  AM
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="28:1413">
                Alex
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="28:1414">
              Sep 25
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="28:1415" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/info-bg,#eeebfa)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="28:1416" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/info,#6a5ad0)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1416;4:31">
                  Queued
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] w-[60px]" data-node-id="28:1418">
              —
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="28:1419" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[210px] whitespace-nowrap" data-node-id="28:1420" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="28:1421">
                kickoff.mov
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="28:1422">
                unsupported
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[70px]" data-node-id="28:1423">
              1.1 GB
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[120px]" data-node-id="28:1424">
              Unassigned
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] w-[90px]" data-node-id="28:1425">
              —
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="28:1426" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/regress-bg,#f8e7e5)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="28:1427" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/regress,#c2413b)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1427;4:27">
                  Unsupported
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[60px]" data-node-id="28:1429">
              Remove
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="28:1430" data-name="Frame">
            <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[2px] items-start overflow-clip relative shrink-0 w-[210px] whitespace-nowrap" data-node-id="28:1431" data-name="Frame">
              <p className="font-['Inter:Medium'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="28:1432">
                vm_0922.mp3
              </p>
              <p className="font-['Geist_Mono:Medium'] leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px]" data-node-id="28:1433">
                40 seconds
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[70px]" data-node-id="28:1434">
              0.6 MB
            </p>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-node-id="28:1435" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="28:1436" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1436;4:36">
                  LO
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="28:1438">
                Luis
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[90px]" data-node-id="28:1439">
              Sep 22
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="28:1440" data-name="Frame">
              <div className="bg-[var(--primitive\/signal\/attention-bg,#f8eedc)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[999px] shrink-0" data-node-id="28:1441" data-name="Tag">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/signal\/attention,#c27a1a)] tracking-[0.6px] whitespace-nowrap" data-node-id="I28:1441;4:29">
                  Too short
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[60px]" data-node-id="28:1443">
              Include
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/raised,white)] border-[var(--border\/engraved,#e5e3df)] border-l border-solid content-stretch flex flex-col gap-[18px] h-[1080px] items-start left-[1096px] overflow-clip px-[22px] py-[24px] rounded-[10px] top-0 w-[344px]" data-node-id="28:1354" data-name="Context Panel">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="28:1444" data-name="Frame">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] min-w-px not-italic relative text-[11px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[0.66px]" data-node-id="28:1445">
            ASSIGN FILES
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="28:1446" data-name="Frame">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="28:1447">
            REP
          </p>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-node-id="28:1448" data-name="Frame">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.042px]" data-node-id="28:1449">
              Match by filename or pick…
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="28:1450" data-name="Frame">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="28:1451">
            ACCOUNT / OPPORTUNITY
          </p>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-node-id="28:1452" data-name="Frame">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.042px]" data-node-id="28:1453">
              Optional — links to CRM outcome
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="28:1454" data-name="Frame">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="28:1455">
            CALL TYPE
          </p>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex gap-[8px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-node-id="28:1456" data-name="Frame">
            <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="28:1457">
              Auto-detect
            </p>
            <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="28:1458">
              ⌄
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="28:1459" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="28:1460">
            SPEAKERS
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="28:1461">{`Mono recordings are split by voice. If Bylda can’t tell rep from prospect with > 90% confidence, it asks you to label one line.`}</p>
        </div>
      </div>
    </div>
  );
}
```

## Text styles in this frame

Brand/Logo: Cinzel Regular 20 / 1.1 / +12% · Mono/Micro: Geist Mono Medium 10 / 1.3 / +6% · UI/Body Strong: Inter Medium 14 / 1.5 / −0.3% · UI/Small: Inter Regular 12.5 / 1.45 / −0.2% · UI/Body: Inter Regular 14 / 1.5 / −0.3% · UI/Label: Inter Semi Bold 11 / 1.3 / +6% · Editorial/H1: Newsreader Medium 34 / 1.12 / −1.5% · Editorial/H2: Newsreader Medium 24 / 1.2 / −1% · Mono/Data: Geist Mono Regular 12 / 1.4 / 0

## Component descriptions (from Figma)

- **App Shell / Navigation v2** (`37:51`) — v2 shell (merged refs): icon rail (home/search/notifications/Ask Bylda + teams), icon sidebar, rooms, people with presence, saved. Swap Nav/Room/Person items to State=Active per screen.
- **Avatar** (`4:35`) — Photo avatar slot: runtime uses the user's SSO/Google photo; mockups show a warm-metal monogram.
- **Nav Item** (`36:51`) — Sidebar navigation item. Swap Icon (Icon/* or Avatar for people). Meta = count / status on the right.
- **Button** (`4:23`) — Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.
- **Tag** (`4:34`) — Color only encodes behavioral direction. Never decorative.
