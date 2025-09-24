import path from "path";
import "dotenv/config";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
let io = null;
const state = {
  questions: [],
  selectedId: null
};
function initSocket(httpServer) {
  if (io) return io;
  io = new Server(httpServer, {
    path: "/socket.io",
    cors: { origin: true, credentials: true }
  });
  io.on("connection", (socket) => {
    socket.emit("questions:init", state);
    socket.on("question:submit", (payload) => {
      const q = {
        id: crypto.randomUUID(),
        firstName: payload.firstName?.toString().slice(0, 60) || "",
        lastName: payload.lastName?.toString().slice(0, 60) || "",
        text: payload.text?.toString().slice(0, 500) || "",
        createdAt: Date.now(),
        hidden: false
      };
      addQuestion(q);
    });
    socket.on("director:select", (id) => {
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
    socket.on("director:hide", (id) => {
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
function getState() {
  return state;
}
function addQuestion(q) {
  state.questions.unshift(q);
  broadcastNew(q);
}
function selectQuestion(id) {
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
function hideSelected(id) {
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
function broadcastNew(q) {
  io?.emit("question:new", q);
  broadcast();
}
function createServer() {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app2.get("/api/demo", handleDemo);
  app2.get("/api/questions", (_req, res) => {
    res.json(getState());
  });
  app2.post("/api/questions", (req, res) => {
    const body = req.body;
    const firstName = (body.firstName || "").toString().trim().slice(0, 60);
    const lastName = (body.lastName || "").toString().trim().slice(0, 60);
    const text = (body.text || "").toString().trim().slice(0, 2e3).trim();
    if (!firstName || !text) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }
    const q = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      text,
      createdAt: Date.now(),
      hidden: false
    };
    addQuestion(q);
    const response = { ok: true, question: q };
    res.json(response);
  });
  app2.post("/api/questions/select", (req, res) => {
    const id = req.body?.id || null;
    selectQuestion(id);
    res.json({ ok: true, selectedId: getState().selectedId });
  });
  app2.post("/api/questions/hide", (req, res) => {
    const id = req.body?.id || null;
    hideSelected(id);
    res.json({ ok: true, selectedId: getState().selectedId });
  });
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
const server = http.createServer(app);
initSocket(server);
server.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
