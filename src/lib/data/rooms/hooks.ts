import type { DataCtx } from "../core/context";
import { ForbiddenForRoleError } from "../core/errors";
import { useCtxQuery } from "../core/hook";
import { isEmptyArray } from "../core/query";
import { resolveSource } from "../core/source";
import { DM_THREADS, MESSAGES, ROOMS } from "../mocks/collab";
import type { DmThread, Message, Room } from "../types";
import { fetchMessages, fetchRooms } from "./fetchers";
import { mapMessage, mapRoom } from "./map";
import { roomKeys } from "./queryKeys";
import { SOURCE } from "./source";

/** A rep never sees the team room's peer-ranking content — rooms of kind "team" are manager+rep safe by design (no rankings are posted there). */
export async function loadRooms(ctx: DataCtx): Promise<Room[]> {
  void ctx;
  return resolveSource(SOURCE) === "mock" ? ROOMS : (await fetchRooms()).map(mapRoom);
}
export async function loadRoom(ctx: DataCtx, id: string): Promise<Room | null> {
  return (await loadRooms(ctx)).find((r) => r.id === id || r.slug === id) ?? null;
}
export async function loadRoomMessages(ctx: DataCtx, roomId: string): Promise<Message[]> {
  const room = await loadRoom(ctx, roomId);
  if (!room) return [];
  return resolveSource(SOURCE) === "mock"
    ? MESSAGES.filter((m) => m.roomId === room.id)
    : (await fetchMessages({ roomId: room.id })).map(mapMessage);
}
export async function loadDmThreads(ctx: DataCtx): Promise<DmThread[]> {
  return DM_THREADS.filter(
    (d) => d.isCoach || d.participantIds.includes(ctx.userId) || ctx.role !== "rep",
  );
}
/** O12/O13 — a rep can only read DMs they are in (and their BYLDA Coach DM). */
export async function loadDmMessages(ctx: DataCtx, threadId: string): Promise<Message[]> {
  const id = threadId === "coach" ? "dm_coach" : threadId;
  const t = DM_THREADS.find((d) => d.id === id);
  if (t && ctx.role === "rep" && !t.isCoach && !t.participantIds.includes(ctx.userId))
    throw new ForbiddenForRoleError("someone else's DM", ctx.role);
  return resolveSource(SOURCE) === "mock"
    ? MESSAGES.filter((m) => m.threadId === id)
    : (await fetchMessages({ threadId: id })).map(mapMessage);
}

export const useRooms = () => useCtxQuery(roomKeys.list(), loadRooms, isEmptyArray);
export const useRoom = (id: string) =>
  useCtxQuery(
    roomKeys.one(id),
    (ctx) => loadRoom(ctx, id),
    (d) => d === null,
  );
export const useRoomMessages = (roomId: string) =>
  useCtxQuery(roomKeys.messages(roomId), (ctx) => loadRoomMessages(ctx, roomId), isEmptyArray);
export const useDmThreads = () => useCtxQuery(roomKeys.dms(), loadDmThreads, isEmptyArray);
export const useDmMessages = (threadId: string) =>
  useCtxQuery(roomKeys.dmMessages(threadId), (ctx) => loadDmMessages(ctx, threadId), isEmptyArray);
