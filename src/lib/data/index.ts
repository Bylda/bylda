/**
 * @/lib/data — the ONLY data import surface for V1 screens (CLAUDE.md §5).
 * Every hook: TanStack Query result + `isEmpty`, same shape in mock / real / hybrid.
 * Docs: src/lib/data/README.md.
 */
export type * from "./types";
export { OUTCOME_MIN_CLOSED, isOutcomeSufficient } from "./types";

export { mocksForced, resolveSource, setSourceOverride, type Source } from "./core/source";
export { NotBuiltError, ForbiddenForRoleError, isNotBuilt } from "./core/errors";
export { DEV_ROLES, setDevRole, useDevRole } from "./core/devRole";
export type { DataCtx } from "./core/context";
export type { DataResult } from "./core/query";

export { useViewer, useDataCtx, useWorkspaces, useTeams } from "./session/hooks";
export { useSidebar, useHasUnread } from "./shell/hooks";
export type { SidebarData } from "./shell/map";
