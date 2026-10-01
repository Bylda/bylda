# A9 — Onboarding — Invite team · node `26:496` · Lane 4 (Dravin) · route `/welcome/invite-team` · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · `frame.png` (if present) = Figma render.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below.
> This is raw Figma Tailwind — **translate to `by-*` tokens and `@/components/bylda` parts; never paste it.**
> `https://www.figma.com/api/mcp/asset/…` URLs expire 7 days after export — use `<Icon name=… />` instead.

## Code

```tsx
const imgFrame = "https://www.figma.com/api/mcp/asset/907c4f23-571c-433b-bd55-b77620c69435.svg";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/8fe63b47-8e05-43f8-8ed1-bb1c22024491.svg";

function Avatar({ className }: { className?: string }) {
  return (
    <div className={className || "border-[1.5px] border-[var(--primitive\\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] size-[28px]"} data-node-id="4:35" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
      <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="4:36">
        JR
      </p>
    </div>
  );
}

export default function OnboardingInviteTeam() {
  return (
    <div className="bg-[var(--surface\/canvas,#f8f7f5)] relative size-full" data-node-id="26:496" data-name="Onboarding — Invite team">
      <div className="absolute h-[1024px] left-0 opacity-35 overflow-clip top-0 w-[1440px]" data-node-id="26:497" data-name="4mm grid">
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-0 top-0 w-[0.5px]" data-node-id="26:498" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[16px] top-0 w-[0.5px]" data-node-id="26:499" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[32px] top-0 w-[0.5px]" data-node-id="26:500" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[48px] top-0 w-[0.5px]" data-node-id="26:501" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[64px] top-0 w-[0.5px]" data-node-id="26:502" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[80px] top-0 w-[0.5px]" data-node-id="26:503" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[96px] top-0 w-[0.5px]" data-node-id="26:504" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[112px] top-0 w-[0.5px]" data-node-id="26:505" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[128px] top-0 w-[0.5px]" data-node-id="26:506" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[144px] top-0 w-[0.5px]" data-node-id="26:507" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[160px] top-0 w-[0.5px]" data-node-id="26:508" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[176px] top-0 w-[0.5px]" data-node-id="26:509" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[192px] top-0 w-[0.5px]" data-node-id="26:510" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[208px] top-0 w-[0.5px]" data-node-id="26:511" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[224px] top-0 w-[0.5px]" data-node-id="26:512" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[240px] top-0 w-[0.5px]" data-node-id="26:513" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[256px] top-0 w-[0.5px]" data-node-id="26:514" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[272px] top-0 w-[0.5px]" data-node-id="26:515" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[288px] top-0 w-[0.5px]" data-node-id="26:516" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[304px] top-0 w-[0.5px]" data-node-id="26:517" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[320px] top-0 w-[0.5px]" data-node-id="26:518" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[336px] top-0 w-[0.5px]" data-node-id="26:519" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[352px] top-0 w-[0.5px]" data-node-id="26:520" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[368px] top-0 w-[0.5px]" data-node-id="26:521" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[384px] top-0 w-[0.5px]" data-node-id="26:522" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[400px] top-0 w-[0.5px]" data-node-id="26:523" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[416px] top-0 w-[0.5px]" data-node-id="26:524" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[432px] top-0 w-[0.5px]" data-node-id="26:525" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[448px] top-0 w-[0.5px]" data-node-id="26:526" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[464px] top-0 w-[0.5px]" data-node-id="26:527" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[480px] top-0 w-[0.5px]" data-node-id="26:528" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[496px] top-0 w-[0.5px]" data-node-id="26:529" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[512px] top-0 w-[0.5px]" data-node-id="26:530" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[528px] top-0 w-[0.5px]" data-node-id="26:531" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[544px] top-0 w-[0.5px]" data-node-id="26:532" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[560px] top-0 w-[0.5px]" data-node-id="26:533" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[576px] top-0 w-[0.5px]" data-node-id="26:534" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[592px] top-0 w-[0.5px]" data-node-id="26:535" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[608px] top-0 w-[0.5px]" data-node-id="26:536" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[624px] top-0 w-[0.5px]" data-node-id="26:537" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[640px] top-0 w-[0.5px]" data-node-id="26:538" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[656px] top-0 w-[0.5px]" data-node-id="26:539" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[672px] top-0 w-[0.5px]" data-node-id="26:540" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[688px] top-0 w-[0.5px]" data-node-id="26:541" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[704px] top-0 w-[0.5px]" data-node-id="26:542" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[720px] top-0 w-[0.5px]" data-node-id="26:543" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[736px] top-0 w-[0.5px]" data-node-id="26:544" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[752px] top-0 w-[0.5px]" data-node-id="26:545" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[768px] top-0 w-[0.5px]" data-node-id="26:546" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[784px] top-0 w-[0.5px]" data-node-id="26:547" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[800px] top-0 w-[0.5px]" data-node-id="26:548" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[816px] top-0 w-[0.5px]" data-node-id="26:549" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[832px] top-0 w-[0.5px]" data-node-id="26:550" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[848px] top-0 w-[0.5px]" data-node-id="26:551" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[864px] top-0 w-[0.5px]" data-node-id="26:552" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[880px] top-0 w-[0.5px]" data-node-id="26:553" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[896px] top-0 w-[0.5px]" data-node-id="26:554" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[912px] top-0 w-[0.5px]" data-node-id="26:555" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[928px] top-0 w-[0.5px]" data-node-id="26:556" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[944px] top-0 w-[0.5px]" data-node-id="26:557" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[960px] top-0 w-[0.5px]" data-node-id="26:558" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[976px] top-0 w-[0.5px]" data-node-id="26:559" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[992px] top-0 w-[0.5px]" data-node-id="26:560" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1008px] top-0 w-[0.5px]" data-node-id="26:561" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1024px] top-0 w-[0.5px]" data-node-id="26:562" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1040px] top-0 w-[0.5px]" data-node-id="26:563" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1056px] top-0 w-[0.5px]" data-node-id="26:564" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1072px] top-0 w-[0.5px]" data-node-id="26:565" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1088px] top-0 w-[0.5px]" data-node-id="26:566" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1104px] top-0 w-[0.5px]" data-node-id="26:567" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1120px] top-0 w-[0.5px]" data-node-id="26:568" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1136px] top-0 w-[0.5px]" data-node-id="26:569" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1152px] top-0 w-[0.5px]" data-node-id="26:570" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1168px] top-0 w-[0.5px]" data-node-id="26:571" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1184px] top-0 w-[0.5px]" data-node-id="26:572" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1200px] top-0 w-[0.5px]" data-node-id="26:573" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1216px] top-0 w-[0.5px]" data-node-id="26:574" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1232px] top-0 w-[0.5px]" data-node-id="26:575" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1248px] top-0 w-[0.5px]" data-node-id="26:576" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1264px] top-0 w-[0.5px]" data-node-id="26:577" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1280px] top-0 w-[0.5px]" data-node-id="26:578" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1296px] top-0 w-[0.5px]" data-node-id="26:579" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1312px] top-0 w-[0.5px]" data-node-id="26:580" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1328px] top-0 w-[0.5px]" data-node-id="26:581" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1344px] top-0 w-[0.5px]" data-node-id="26:582" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1360px] top-0 w-[0.5px]" data-node-id="26:583" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1376px] top-0 w-[0.5px]" data-node-id="26:584" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1392px] top-0 w-[0.5px]" data-node-id="26:585" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1408px] top-0 w-[0.5px]" data-node-id="26:586" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[1024px] left-[1424px] top-0 w-[0.5px]" data-node-id="26:587" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-0 w-[1440px]" data-node-id="26:588" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[16px] w-[1440px]" data-node-id="26:589" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[32px] w-[1440px]" data-node-id="26:590" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[48px] w-[1440px]" data-node-id="26:591" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[64px] w-[1440px]" data-node-id="26:592" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[80px] w-[1440px]" data-node-id="26:593" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[96px] w-[1440px]" data-node-id="26:594" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[112px] w-[1440px]" data-node-id="26:595" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[128px] w-[1440px]" data-node-id="26:596" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[144px] w-[1440px]" data-node-id="26:597" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[160px] w-[1440px]" data-node-id="26:598" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[176px] w-[1440px]" data-node-id="26:599" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[192px] w-[1440px]" data-node-id="26:600" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[208px] w-[1440px]" data-node-id="26:601" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[224px] w-[1440px]" data-node-id="26:602" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[240px] w-[1440px]" data-node-id="26:603" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[256px] w-[1440px]" data-node-id="26:604" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[272px] w-[1440px]" data-node-id="26:605" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[288px] w-[1440px]" data-node-id="26:606" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[304px] w-[1440px]" data-node-id="26:607" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[320px] w-[1440px]" data-node-id="26:608" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[336px] w-[1440px]" data-node-id="26:609" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[352px] w-[1440px]" data-node-id="26:610" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[368px] w-[1440px]" data-node-id="26:611" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[384px] w-[1440px]" data-node-id="26:612" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[400px] w-[1440px]" data-node-id="26:613" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[416px] w-[1440px]" data-node-id="26:614" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[432px] w-[1440px]" data-node-id="26:615" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[448px] w-[1440px]" data-node-id="26:616" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[464px] w-[1440px]" data-node-id="26:617" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[480px] w-[1440px]" data-node-id="26:618" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[496px] w-[1440px]" data-node-id="26:619" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[512px] w-[1440px]" data-node-id="26:620" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[528px] w-[1440px]" data-node-id="26:621" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[544px] w-[1440px]" data-node-id="26:622" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[560px] w-[1440px]" data-node-id="26:623" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[576px] w-[1440px]" data-node-id="26:624" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[592px] w-[1440px]" data-node-id="26:625" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[608px] w-[1440px]" data-node-id="26:626" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[624px] w-[1440px]" data-node-id="26:627" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[640px] w-[1440px]" data-node-id="26:628" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[656px] w-[1440px]" data-node-id="26:629" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[672px] w-[1440px]" data-node-id="26:630" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[688px] w-[1440px]" data-node-id="26:631" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[704px] w-[1440px]" data-node-id="26:632" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[720px] w-[1440px]" data-node-id="26:633" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[736px] w-[1440px]" data-node-id="26:634" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[752px] w-[1440px]" data-node-id="26:635" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[768px] w-[1440px]" data-node-id="26:636" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[784px] w-[1440px]" data-node-id="26:637" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[800px] w-[1440px]" data-node-id="26:638" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[816px] w-[1440px]" data-node-id="26:639" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[832px] w-[1440px]" data-node-id="26:640" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[848px] w-[1440px]" data-node-id="26:641" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[864px] w-[1440px]" data-node-id="26:642" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[880px] w-[1440px]" data-node-id="26:643" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[896px] w-[1440px]" data-node-id="26:644" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[912px] w-[1440px]" data-node-id="26:645" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[928px] w-[1440px]" data-node-id="26:646" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[944px] w-[1440px]" data-node-id="26:647" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[960px] w-[1440px]" data-node-id="26:648" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[976px] w-[1440px]" data-node-id="26:649" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[992px] w-[1440px]" data-node-id="26:650" data-name="Rectangle" />
        <div className="absolute bg-[var(--primitive\/silver\/200,#e5e3df)] h-[0.5px] left-0 top-[1008px] w-[1440px]" data-node-id="26:651" data-name="Rectangle" />
      </div>
      <div className="absolute bg-[var(--surface\/sidebar,#1b1b1e)] content-stretch flex flex-col gap-[28px] h-[1024px] items-start left-0 overflow-clip px-[28px] py-[32px] top-0 w-[300px]" data-node-id="26:652" data-name="Frame">
        <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[30px] text-[color:var(--text\/on-dark,#eae8e4)] tracking-[-0.45px] whitespace-nowrap" data-node-id="26:653">
          B Y L D A
        </p>
        <div className="[word-break:break-word] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="26:654" data-name="Frame">
          <div className="content-stretch flex font-normal gap-[12px] items-center overflow-clip py-[12px] relative shrink-0 text-[color:var(--text\/on-dark,#eae8e4)] w-full" data-node-id="26:655" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="26:656">
              ✓
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[14px] tracking-[-0.042px]" data-node-id="26:657">
              Your workspace
            </p>
          </div>
          <div className="content-stretch flex font-normal gap-[12px] items-center overflow-clip py-[12px] relative shrink-0 text-[color:var(--text\/on-dark,#eae8e4)] w-full" data-node-id="26:658" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="26:659">
              ✓
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[14px] tracking-[-0.042px]" data-node-id="26:660">
              Teach Bylda how you sell
            </p>
          </div>
          <div className="content-stretch flex font-normal gap-[12px] items-center overflow-clip py-[12px] relative shrink-0 text-[color:var(--text\/on-dark,#eae8e4)] w-full" data-node-id="26:661" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="26:662">
              ✓
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[14px] tracking-[-0.042px]" data-node-id="26:663">
              Connect calls
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[12px] relative shrink-0 text-[color:var(--text\/on-dark,#eae8e4)] w-full" data-node-id="26:664" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="26:665">
              04
            </p>
            <p className="flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] tracking-[-0.042px]" data-node-id="26:666">
              Invite your team
            </p>
          </div>
          <div className="content-stretch flex font-normal gap-[12px] items-center overflow-clip py-[12px] relative shrink-0 text-[color:var(--text\/on-dark-muted,#9b9892)] w-full" data-node-id="26:667" data-name="Frame">
            <p className="font-['Geist_Mono:Regular'] leading-[1.4] relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="26:668">
              05
            </p>
            <p className="flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[14px] tracking-[-0.042px]" data-node-id="26:669">
              First analysis
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="26:670" data-name="Frame" />
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/on-dark-muted,#9b9892)] tracking-[-0.025px] w-[min-content]" data-node-id="26:671">
          Setup takes ~8 minutes. First analysis runs while you invite the team.
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[380px] overflow-clip top-[64px] w-[680px]" data-node-id="26:672" data-name="Frame">
        <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="26:673">
          STEP 4 OF 5
        </p>
        <p className="[word-break:break-word] font-['Newsreader:Medium'] font-medium leading-[1.12] relative shrink-0 text-[34px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.51px] whitespace-nowrap" data-node-id="26:674">
          Invite your team.
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[-0.042px] w-[min-content]" data-node-id="26:675">
          We matched 9 people from your Zoom account to calls. Choose who to invite and their role.
        </p>
        <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="26:676" data-name="Table">
          <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex font-['Geist_Mono:Medium'] font-medium items-start leading-[1.3] overflow-clip px-[16px] py-[9px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-full" data-node-id="26:677" data-name="Frame">
            <p className="relative shrink-0 w-[220px]" data-node-id="26:678">
              PERSON
            </p>
            <p className="relative shrink-0 w-[80px]" data-node-id="26:679">
              CALLS
            </p>
            <p className="relative shrink-0 w-[100px]" data-node-id="26:680">
              ROLE
            </p>
            <p className="relative shrink-0 w-[150px]" data-node-id="26:681">
              TEAM
            </p>
            <p className="relative shrink-0 w-[60px]" data-node-id="26:682">
              INVITE
            </p>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:683" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:684" data-name="Frame">
              <Avatar className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:687">
                Jordan Reyes
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:688">
              58
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:689">
              Rep
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[150px]" data-node-id="26:690">
              Mid-Market AE
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:691" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:692" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:694" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:695" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="26:696" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I26:696;4:36">
                  AM
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:698">
                Alex Morgan
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:699">
              44
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:700">
              Rep
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[150px]" data-node-id="26:701">
              Mid-Market AE
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:702" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:703" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:705" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:706" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="26:707" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I26:707;4:36">
                  MK
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:709">
                Mia Kowalski
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:710">
              51
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:711">
              Rep
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[150px]" data-node-id="26:712">
              Mid-Market AE
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:713" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:714" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:716" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:717" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="26:718" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I26:718;4:36">
                  SL
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:720">
                Sarah Lin
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:721">
              62
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:722">
              Rep
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[150px]" data-node-id="26:723">
              Mid-Market AE
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:724" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:725" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:727" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:728" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="26:729" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I26:729;4:36">
                  TG
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:731">
                Theo Grant
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:732">
              55
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:733">
              Rep
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[150px]" data-node-id="26:734">
              Mid-Market AE
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:735" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:736" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:738" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:739" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="26:740" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I26:740;4:36">
                  PN
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:742">
                Priya Nair
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:743">
              47
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:744">
              Rep
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[150px]" data-node-id="26:745">
              Mid-Market AE
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:746" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:747" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:749" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:750" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="26:751" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I26:751;4:36">
                  KP
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:753">
                Kiran Patel
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:754">
              0
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:755">
              Owner
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[-0.025px] w-[150px]" data-node-id="26:756">
              —
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:757" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:758" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="border-[var(--border\/engraved,#e5e3df)] border-b border-solid content-stretch flex items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="26:760" data-name="Frame">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[220px]" data-node-id="26:761" data-name="Frame">
              <div className="border-[1.5px] border-[var(--primitive\/white,white)] border-solid content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[22px]" data-node-id="26:762" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 217, 209) 0%, rgb(158, 153, 145) 71.429%)" }} data-name="Avatar">
                <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--primitive\/white,white)] tracking-[0.6px] whitespace-nowrap" data-node-id="I26:762;4:36">
                  RB
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px] whitespace-nowrap" data-node-id="26:764">
                Rob Baird
              </p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono:Regular'] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#6e6c68)] w-[80px]" data-node-id="26:765">
              12
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[100px]" data-node-id="26:766">
              Manager
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[150px]" data-node-id="26:767">
              Enterprise
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[60px]" data-node-id="26:768" data-name="Frame">
              <div className="h-[18px] relative shrink-0 w-[32px]" data-node-id="26:769" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="26:771" data-name="Frame">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.3] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#6e6c68)] tracking-[0.66px] whitespace-nowrap" data-node-id="26:772">
            OR ADD BY EMAIL
          </p>
          <div className="bg-[var(--surface\/raised,white)] border border-[var(--border\/strong,#d3d0cb)] border-solid content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-node-id="26:773" data-name="Frame">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.042px]" data-node-id="26:774">
              nina@acmerevenue.com, luis@acmerevenue.com
            </p>
          </div>
          <p className="[word-break:break-word] font-['Geist_Mono:Medium'] font-medium leading-[1.3] min-w-full relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] w-[min-content]" data-node-id="26:775">
            Separate with commas. Everyone joins as Rep unless you change it.
          </p>
        </div>
        <div className="[word-break:break-word] bg-[var(--surface\/inset,#f2f1ee)] border border-[var(--border\/engraved,#e5e3df)] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="26:776" data-name="Frame">
          <p className="font-['Geist_Mono:Medium'] font-medium leading-[1.3] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#9b9892)] tracking-[0.6px] whitespace-nowrap" data-node-id="26:777">
            REP PRIVACY DEFAULT
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[12.5px] text-[color:var(--text\/primary,#0b0b0c)] tracking-[-0.025px] w-[min-content]" data-node-id="26:778">{`Reps see only their own calls and coaching. Change later in Roles & permissions.`}</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="26:779" data-name="Frame">
          <div className="content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="26:780" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/silver\/600,#6e6c68)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I26:780;4:12">
              Skip for now
            </p>
          </div>
          <div className="bg-[var(--primitive\/ink,#0b0b0c)] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="26:782" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--primitive\/white,white)] tracking-[-0.042px] whitespace-nowrap" data-node-id="I26:782;4:16">
              Send 8 invites
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

These styles are contained in the design: Display/L: Font(family: "Newsreader", style: Medium, size: 30, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Small: Font(family: "Inter", style: Regular, size: 12.5, weight: 400, lineHeight: 1.4500000476837158, letterSpacing: -0.20000000298023224), Mono/Micro: Font(family: "Geist Mono", style: Medium, size: 10, weight: 500, lineHeight: 1.2999999523162842, letterSpacing: 6), Editorial/H1: Font(family: "Newsreader", style: Medium, size: 34, weight: 500, lineHeight: 1.1200000047683716, letterSpacing: -1.5), UI/Label: Font(family: "Inter", style: Semi Bold, size: 11, weight: 600, lineHeight: 1.2999999523162842, letterSpacing: 6).

Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## Avatar
**Node ID:** 4:35

Photo avatar slot: runtime uses the user’s SSO/Google photo; mockups show a warm-metal monogram.

## Button
**Node ID:** 4:23

Primary = black solid (per refs). Secondary = white + hairline. Ghost = text. One primary per view.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
