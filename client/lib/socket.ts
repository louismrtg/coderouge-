import { io, Socket } from "socket.io-client";

export const socket: Socket = io({
  path: "/socket.io",
  transports: ["websocket"],
  autoConnect: true,
});

export type QuestionsEvents =
  | "questions:init"
  | "questions:update"
  | "question:new"
  | "question:selected";
