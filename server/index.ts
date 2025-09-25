import { createClient } from '@supabase/supabase-js';
import express from "express";
import cors from "cors";
import path from "path";
import { handleDemo } from "./routes/demo";
import type { SubmitQuestionRequest, SubmitQuestionResponse } from "@shared/api";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    persistSession: false
  }
});

async function getState() {
    const { data: questions, error } = await supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Erreur Supabase lors de la récupération :", error);
        return { questions: [], selectedId: null };
    }
    return { questions: questions || [], selectedId: null };
}

async function addQuestion(q: { firstName: string, lastName: string, text: string }) {
    const { data, error } = await supabase
        .from('questions')
        .insert({
            firstName: q.firstName,
            lastName: q.lastName,
            text: q.text,
        })
        .select();

    if (error) {
        console.error("Erreur Supabase lors de l'insertion :", error);
        return false;
    }
    return true;
}

export function createServer() {
  const app = express();
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes API
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  app.get("/api/questions", async (_req, res) => {
    const state = await getState();
    res.json(state);
  });

  app.post("/api/questions", async (req, res) => {
    const body = req.body as SubmitQuestionRequest;
    const firstName = (body.firstName || "").toString().trim().slice(0, 60);
    const lastName = (body.lastName || "").toString().trim().slice(0, 60);
    const text = (body.text || "").toString().trim().slice(0, 2000).trim();

    if (!firstName || !text) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }

    const q = { firstName, lastName, text };
    
    const success = await addQuestion(q);

    if (!success) {
        return res.status(500).json({ error: "Erreur lors de l'enregistrement de la question." });
    }

    const response: SubmitQuestionResponse = { ok: true, question: { ...q, id: 'temp', createdAt: Date.now(), hidden: false } };
    res.json(response);
  });
  
  // Ces routes sont désormais des stubs car elles n'ont pas d'implémentation dans la BDD.
  app.post("/api/questions/select", (_req, res) => {
    return res.status(501).json({ error: "Non implémenté sans état BDD" });
  });

  app.post("/api/questions/hide", (_req, res) => {
    return res.status(501).json({ error: "Non implémenté sans état BDD" });
  });

  return app;
}

// Le reste de votre configuration Vercel devrait gérer le service des fichiers statiques.
// Si ce n'est pas le cas, vous devrez ajouter cette section :
// app.use(express.static(path.join(__dirname, "../spa")));
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, '../spa/index.html'));
// });
