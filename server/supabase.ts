import { createClient } from "@supabase/supabase-js";
import { type Question } from "@shared/api";

// This is where we will define the functions that interact with the database.
// This allows us to keep the logic for Supabase separate from the server logic.

type AddQuestion = Omit<Question, "id">;
const TABLE_NAME = "questions";

// We'll get the Supabase URL and key from environment variables on Vercel
// This keeps our credentials safe and out of the code.
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";

// We create a single Supabase client that we can reuse throughout the server.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // This is important for server-side usage, we don't want to store session data
    autoRefreshToken: false,
    persistSession: false,
  },
});

export function initSupabase() {
  // We expose the Supabase client and the functions to interact with the database.
  // This is what `server/index.ts` will use.

  async function addQuestionToDb(question: AddQuestion) {
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

  return {
    supabase,
    addQuestionToDb,
    getQuestionsFromDb,
  };
}
