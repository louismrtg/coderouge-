import path from "path";
import "dotenv/config";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import http from "http";
import { createClient } from "@supabase/supabase-js";
import { type Question, type QuestionsState } from "@shared/api";

const app = express__default();
app.use(express.json());
app.use(cors());

// On récupère les URL et la clé de Supabase depuis les variables d'environnement de Vercel.
// Cela permet de garder nos identifiants en sécurité.
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";
const TABLE_NAME = "questions";

// AJOUT TEMPORAIRE : On va afficher les variables pour vérifier qu'elles sont bien chargées
console.log("SUPABASE_URL:", SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", SUPABASE_ANON_KEY ? "Loaded" : "Not Loaded");

// On crée un client Supabase unique qui sera réutilisé par le serveur.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // C'est important pour une utilisation côté serveur : on ne veut pas stocker de sessions utilisateur.
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function addQuestionToDb(question: Omit<Question, "id">) {
  try {
    const { error } = await supabase.from(TABLE_NAME).insert(question);
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout de la question à la base de données :", error);
    throw error;
  }
}

async function getQuestionsFromDb(): Promise<Question[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .order("createdAt", { ascending: false });
    if (error) {
      throw error;
    }
    return data as Question[];
  } catch (error) {
    console.error("Erreur lors de la récupération des questions depuis la base de données :", error);
    throw error;
  }
}

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));

app.get("/api/questions", async (_req, res) => {
  try {
    const questions = await getQuestionsFromDb();
    const response: QuestionsState = {
      questions: questions,
      selectedId: null,
    };
    res.json(response);
  } catch (error) {
    console.error("Erreur lors de la récupération des questions depuis Supabase :", error);
    res.status(500).json({ error: "Échec de la récupération des questions" });
  }
});

app.post("/api/questions", async (req, res) => {
  try {
    const { firstName, lastName, text } = req.body;
    const newQuestion: Omit<Question, "id"> = {
      firstName: firstName,
      lastName: lastName,
      text: text,
      createdAt: Date.now(),
      hidden: false,
    };
    await addQuestionToDb(newQuestion);
    res.status(200).json({ ok: true, message: "Question soumise avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'ajout de la question à Supabase :", error);
    res.status(500).json({ error: "Échec de la soumission de la question" });
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "Point d'accès API non trouvé" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Le serveur fonctionne sur le port ${port}`);
});
