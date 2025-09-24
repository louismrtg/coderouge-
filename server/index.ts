import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { addQuestion, getState, hideSelected, selectQuestion } from "./socket";
import type { SubmitQuestionRequest, SubmitQuestionResponse } from "@shared/api";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Questions API
  app.get("/api/questions", (_req, res) => {
    res.json(getState());
  });

  app.post("/api/questions", (req, res) => {
    const body = req.body as SubmitQuestionRequest;
    const firstName = (body.firstName || "").toString().trim().slice(0, 60);
    const lastName = (body.lastName || "").toString().trim().slice(0, 60);
    const text = (body.text || "").toString().trim().slice(0, 2000).trim();

    if (!firstName || !text) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }

    const q = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      text,
      createdAt: Date.now(),
      hidden: false,
    };

    addQuestion(q);

    const response: SubmitQuestionResponse = { ok: true, question: q };
    res.json(response);
  });

  app.post("/api/questions/select", (req, res) => {
    const id = (req.body?.id || null) as string | null;
    selectQuestion(id);
    res.json({ ok: true, selectedId: getState().selectedId });
  });

  app.post("/api/questions/hide", (req, res) => {
    const id = (req.body?.id || null) as string | null;
    hideSelected(id);
    res.json({ ok: true, selectedId: getState().selectedId });
  });

  return app;
}
