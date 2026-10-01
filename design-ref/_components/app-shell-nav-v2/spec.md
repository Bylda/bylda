# App Shell / Navigation v2 · node `37:51` · Foundation shell (page 03) · exported 2026-10-01

fileKey `HWdVvVXWqJl4BFD9MZ5vgW` · 312×1024 — icon rail 64 + sidebar 248 · `frame.png` = Figma render.

**Already built by Foundation** in `src/components/bylda/shell/`. Lanes never rebuild it — screens render inside it.

> Pointer spec, not a full export: page 03 wasn't in this batch's scope. The shell's full `get_design_context`
> markup is included **verbatim** in every Lane 2 screen spec (search `data-name="App Shell / Navigation v2"`
> in e.g. `design-ref/C1/spec.md`). The only per-screen difference is which Nav / Room / Person item is
> `State=Active` (`bg-[rgba(255,255,255,0.1)]`, Inter Medium, `primitive/white`). C7's spec collapses the
> shell to a one-line marker.

Workspace Top Bar (`36:52`, 784×56) is likewise inlined as `function WorkspaceTopBar` in every screen spec,
including C7.

## App Shell / Navigation v2
**Node ID:** 37:51

v2 shell (merged refs): icon rail (home/search/notifications/Ask Bylda + teams), icon sidebar, rooms, people with presence, saved. Swap Nav/Room/Person items to State=Active per screen.

## Nav Item
**Node ID:** 36:51

Sidebar navigation item. Swap Icon (Icon/\* or Avatar for people). Meta = count / status on the right.
