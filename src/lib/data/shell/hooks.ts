import { useQuery } from "@tanstack/react-query";
import type { DataCtx } from "../core/context";
import { withEmpty, type DataResult } from "../core/query";
import { resolveSource } from "../core/source";
import { DM_THREADS, NOTIFICATIONS, ROOMS, SAVED_COUNT } from "../mocks/collab";
import { PEOPLE } from "../mocks/people";
import { useDataCtx } from "../session/hooks";
import { fetchSidebar } from "./fetchers";
import type { SidebarData } from "./map";
import { shellKeys } from "./queryKeys";
import { SOURCE } from "./source";

/** Pure loader. Reps don't get a PEOPLE list (it links to manager-only rep profiles). */
export async function loadSidebar(ctx: DataCtx): Promise<SidebarData> {
  if (resolveSource(SOURCE) !== "mock") return fetchSidebar();
  const people =
    ctx.role === "rep"
      ? []
      : PEOPLE.filter((p) => p.role === "rep" && p.teamId === (ctx.teamId ?? "team_mm"))
          .slice(0, 4)
          .map(({ id, name, presence }) => ({ id, name, presence }));
  return {
    rooms: ROOMS.filter(
      (r) => r.isMember && (r.kind === "channel" || r.kind === "brief" || r.kind === "coaching"),
    ).map(({ id, slug, name, unread, hasMention }) => ({ id, slug, name, unread, hasMention })),
    people,
    // DM title = the OTHER participant, from the viewer's side.
    dms: DM_THREADS.filter(
      (d) => d.isCoach || d.participantIds.includes(ctx.userId) || ctx.role === "manager",
    ).map((d) => {
      const other = d.participantIds.find((id) => id !== ctx.userId && id !== "bylda");
      const title = d.isCoach ? d.title : (PEOPLE.find((p) => p.id === other)?.name ?? d.title);
      return { id: d.id, title, unread: d.unread, isCoach: d.isCoach };
    }),
    savedCount: SAVED_COUNT,
  };
}

export function useSidebar(): DataResult<SidebarData> {
  const ctx = useDataCtx();
  const q = useQuery({
    queryKey: shellKeys.sidebar(ctx?.userId ?? "", ctx?.role ?? ""),
    queryFn: () => loadSidebar(ctx!),
    enabled: !!ctx,
  });
  return withEmpty(q, (d) => d.rooms.length + d.people.length + d.dms.length === 0);
}

/** Rail / bell dot — a boolean, never a count (N1 rule). */
export function useHasUnread(): DataResult<boolean> {
  const ctx = useDataCtx();
  const q = useQuery({
    queryKey: shellKeys.unread(ctx?.userId ?? ""),
    // GAP: behavioral notification types — notifications table exists but lacks V1 types (GAPS 14)
    queryFn: async () => NOTIFICATIONS.some((n) => !n.read),
    enabled: !!ctx,
  });
  return withEmpty(q, () => false);
}
