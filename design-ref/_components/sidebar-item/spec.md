# Sidebar Item · node `4:47` · Foundation component (page 02) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · states: Default · Active · Unread. Part of the Foundation shell.

> Source: Figma MCP `get_design_context` — **full output, verbatim**, below. Raw Figma Tailwind — use the `by-*` component, never paste this.

## Code

```tsx
const imgDot = "https://www.figma.com/api/mcp/asset/45888ffc-56a6-4175-9ae8-cfa18b5187d2.svg";

type SidebarItemProps = {
  className?: string;
  state?: "Default" | "Active" | "Unread";
};

export default function SidebarItem({ className, state = "Default" }: SidebarItemProps) {
  const isActive = state === "Active";
  const isUnread = state === "Unread";
  return (
    <div className={className || `content-stretch flex gap-[10px] items-center px-[10px] py-[7px] relative rounded-[6px] w-[220px] ${isUnread ? "" : isActive ? String.raw`[word-break:break-word] bg-[rgba(255,255,255,0.1)] text-[color:var(--text\/on-dark,#eae8e4)]` : String.raw`[word-break:break-word] font-normal text-[color:var(--text\/on-dark-muted,#9b9892)]`}`} id={isUnread ? "node-4_43" : isActive ? "node-4_40" : "node-4_37"}>
      <p className={`font-["Geist_Mono:Regular"] leading-[1.4] relative shrink-0 text-[12px] whitespace-nowrap ${isUnread ? String.raw`[word-break:break-word] font-normal text-[color:var(--text\/on-dark,#eae8e4)]` : isActive ? "font-normal" : ""}`} id={isUnread ? "node-4_44" : isActive ? "node-4_41" : "node-4_38"}>
        #
      </p>
      <p className={`flex-[1_0_0] leading-[1.5] min-w-px not-italic relative text-[14px] tracking-[-0.042px] ${isUnread ? String.raw`[word-break:break-word] font-["Inter:Medium"] font-medium text-[color:var(--text\/on-dark,#eae8e4)]` : isActive ? 'font-["Inter:Medium"] font-medium' : 'font-["Inter:Regular"]'}`} id={isUnread ? "node-4_45" : isActive ? "node-4_42" : "node-4_39"}>
        daily-brief
      </p>
      {isUnread && (
        <div className="relative shrink-0 size-[6px]" data-node-id="4:46" data-name="Dot">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
        </div>
      )}
    </div>
  );
}
```

These styles are contained in the design: Mono/Data: Font(family: "Geist Mono", style: Regular, size: 12, weight: 400, lineHeight: 1.399999976158142, letterSpacing: 0), UI/Body: Font(family: "Inter", style: Regular, size: 14, weight: 400, lineHeight: 1.5, letterSpacing: -0.30000001192092896), UI/Body Strong: Font(family: "Inter", style: Medium, size: 14, weight: 500, lineHeight: 1.5, letterSpacing: -0.30000001192092896).

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000.png'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
