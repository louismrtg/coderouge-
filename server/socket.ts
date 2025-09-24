import type http from "http";
import { Server as IOServer, type Server, type Socket } from "socket.io";
import { Question, QuestionsState } from "@shared/api";

let io: Server | null = null;
const state: QuestionsState = {
  questions: [],
  selectedId: null,
};

export function initSocket(httpServer: http.Server) {
  if (io) return io;
  io = new IOServer(httpServer, {
    path: "/socket.io",
    cors: { origin: true, credentials: true },
  });

  io.on("connection", (socket: Socket) => {
    socket.emit("questions:init", state);

    socket.on("question:submit", (payload: Omit<Question, "id" | "createdAt"> & { text: string }) => {
      const q: Question = {
        id: crypto.randomUUID(),
        firstName: payload.firstName?.toString().slice(0, 60) || "",
        lastName: payload.lastName?.toString().slice(0, 60) || "",
        text: payload.text?.toString().slice(0, 500) || "",
        createdAt: Date.now(),
        hidden: false,
      };
      addQuestion(q);
    });

    socket.on("director:select", (id: string | null) => {
      if (!id) {
        state.selectedId = null;
        broadcast();
        return;
      }
      if (state.questions.some((q) => q.id === id)) {
        state.selectedId = id;
        broadcast();
      }
    });

    socket.on("director:hide", (id?: string | null) => {
      if (id) {
        const q = state.questions.find((x) => x.id === id);
        if (q) q.hidden = true;
        if (state.selectedId === id) state.selectedId = null;
      } else if (state.selectedId) {
        const q = state.questions.find((x) => x.id === state.selectedId);
        if (q) q.hidden = true;
        state.selectedId = null;
      }
      broadcast();
    });
  });

  return io;
}

export function getIO() {
  return io;
}

export function getState(): QuestionsState {
  return state;
}

export function addQuestion(q: Question) {
  state.questions.unshift(q);
  broadcastNew(q);
}

export function selectQuestion(id: string | null) {
  if (!id) {
    state.selectedId = null;
    broadcast();
    return;
  }
  if (state.questions.find((q) => q.id === id)) {
    state.selectedId = id;
    broadcast();
  }
}

export function hideSelected(id?: string | null) {
  if (id) {
    const q = state.questions.find((x) => x.id === id);
    if (q) q.hidden = true;
    if (state.selectedId === id) state.selectedId = null;
  } else if (state.selectedId) {
    const q = state.questions.find((x) => x.id === state.selectedId);
    if (q) q.hidden = true;
    state.selectedId = null;
  }
  broadcast();
}

function broadcast() {
  io?.emit("questions:update", state);
  if (state.selectedId) io?.emit("question:selected", state.selectedId);
}

function broadcastNew(q: Question) {
  io?.emit("question:new", q);
  broadcast();
}
