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

// We'll get the Supabase URL and key from environment variables on Vercel
// This keeps our credentials safe and out of the code.
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";
const TABLE_NAME = "questions";

// We create a single Supabase client that we can reuse throughout the server.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // This is important for server-side usage, we don't want to store session data
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
    console.error("Error adding question to database:", error);
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
    console.error("Error getting questions from database:", error);
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
    console.error("Error fetching questions from Supabase:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
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
    res.status(200).json({ ok: true, message: "Question submitted" });
  } catch (error) {
    console.error("Error adding question to Supabase:", error);
    res.status(500).json({ error: "Failed to submit question" });
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
