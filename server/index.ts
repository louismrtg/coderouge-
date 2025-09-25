// server/index.ts

// --- Imports de Supabase et Express ---
import { createClient } from '@supabase/supabase-js';
import express from "express";
import cors from "cors";

// Assurez-vous que l'import de 'crypto' n'est plus là, ni de './socket'
import { handleDemo } from "./routes/demo"; 
import type { SubmitQuestionRequest, SubmitQuestionResponse } from "@shared/api";

// --- Initialisation de Supabase (Utilise les variables Vercel) ---
// La clé d'accès sera lue dans la variable SUPABASE_SERVICE_KEY que vous avez ajoutée.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

// Crée le client Supabase avec la clé service_role pour le serveur
// Il est crucial d'utiliser la clé SERVICE_ROLE ici car elle est stockée en secret sur Vercel
// et permet les opérations INSERT et SELECT.
const supabase = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    persistSession: false // Important pour les environnements Serverless
  }
});
// -----------------------------------------------------------------


// --- Fonctions de Stockage Réelles (Persistance) ---

async function getState() {
    // Récupère toutes les questions non masquées, triées par date (les plus récentes en premier)
    const { data: questions, error } = await supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false });

    // En cas d'erreur de BDD, retourne un tableau vide pour éviter le crash
    if (error) {
        console.error("Erreur Supabase lors de la récupération :", error);
        return { questions: [], selectedId: null };
    }

    // Le selectedId n'est plus géré ici, il faudrait une table séparée pour l'état global.
    // Pour l'instant, on retourne juste les questions
    return { questions: questions || [], selectedId: null }; 
}

async function addQuestion(q: { firstName: string, lastName: string, text: string }) {
    // Enregistre la nouvelle question dans la base de données
    const { data, error } = await supabase
        .from('questions')
        .insert({
            firstName: q.firstName,
            lastName: q.lastName,
            text: q.text,
            // L'ID et created_at sont gérés par défaut par la BDD si configurée correctement,
            // sinon on doit les inclure ici.
        })
        .select(); // Retourne la ligne insérée

    if (error) {
        console.error("Erreur Supabase lors de l'insertion :", error);
        return false;
    }
    return true;
}
// ---------------------------------------------------


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
  app.get("/api/questions", async (_req, res) => {
    // Utilisation de la version ASYNCHRONE de getState()
    const state = await getState(); 
    res.json(state);
  });

  app.post("/api/questions", async (req, res) => { // La fonction doit être async
    const body = req.body as SubmitQuestionRequest;
    const firstName = (body.firstName || "").toString().trim().slice(0, 60);
    const lastName = (body.lastName || "").toString().trim().slice(0, 60);
    const text = (body.text || "").toString().trim().slice(0, 2000).trim();

    if (!firstName || !text) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }

    // Création de l'objet sans ID ni createdAt (géré par la BDD)
    const q = {
      firstName,
      lastName,
      text,
    };
    
    // Tentative d'ajouter à la base de données
    const success = await addQuestion(q);

    if (!success) {
        // Si l'enregistrement échoue (pour une raison de BDD), on renvoie une erreur 500
        return res.status(500).json({ error: "Erreur lors de l'enregistrement de la question." });
    }

    const response: SubmitQuestionResponse = { ok: true, question: { ...q, id: 'temp', createdAt: Date.now(), hidden: false } };
    res.json(response);
  });
  
  // Ces routes ne sont plus fonctionnelles sans une table de BDD dédiée à l'état global.
  // Vous devrez les retravailler ou les supprimer :
  app.post("/api/questions/select", (_req, res) => {
    return res.status(501).json({ error: "Non implémenté sans état BDD" });
  });

  app.post("/api/questions/hide", (_req, res) => {
    return res.status(501).json({ error: "Non implémenté sans état BDD" });
  });

  return app;
}
