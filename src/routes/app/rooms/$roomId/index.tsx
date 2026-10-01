import { createFileRoute } from "@tanstack/react-router";
import { O2RoomObjectionWatch } from "@/components/lanes/lane-6/rooms/O2RoomObjectionWatch";

// O2 · Room — #objection-watch · Figma 18:2 · Lane 6 (Lane 6)
export const Route = createFileRoute("/app/rooms/$roomId/")({ component: O2RoomObjectionWatch });
