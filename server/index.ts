import express from "express";
import cors from "cors";

// --- MODIFICATIONS ICI ---
// 1. Suppression de l'import "dotenv/config" car les variables sont gérées par Vercel.
// 2. Suppression de l'import Socket (./socket) et des types associés, car nous retirons Socket.IO.
import { handleDemo } from "./routes/demo"; 
import type { SubmitQuestionRequest, SubmitQuestionResponse } from "@shared/api";

// --- Fonctions de Stockage Simplifiées ---
// Nous devons simuler les fonctions qui étaient dans votre fichier 'socket' ou 'state'.
// Ceci est une implémentation simplifiée et temporaire de l'état du serveur :

interface Question {
  id: string;
  firstName: string;
  lastName: string;
  text: string;
  createdAt: number;
  hidden: boolean;
}

let questions: Question[] = []; // Stockage temporaire en mémoire
let selectedId: string | null = null;

function getState() {
    return { questions: questions, selectedId: selectedId };
}
function addQuestion(q: Question) {
    questions.push(q);
}
function selectQuestion(id: string | null) {
    selectedId = id;
}
function hideSelected(id: string | null) {
    // Si la logique de hideSelected est simple, on la laisse ici.
    // Sinon, on peut la retirer si elle est trop complexe sans Socket.IO.
}
// ----------------------------------------


export function createServer() {
  const app = express();

  // Middleware
  // Le CORS est activé pour accepter toutes les requêtes (simple pour le Serverless).
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

    // --- MODIFICATION ICI : Remplacement de crypto.randomUUID() ---
    // Utilisation d'une méthode d'ID simple pour éviter les problèmes de Serverless.
    const newId = Date.now().toString() + Math.random().toString(36).substring(2);
    
    const q: Question = {
      id: newId, 
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
