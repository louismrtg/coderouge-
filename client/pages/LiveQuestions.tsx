import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import type { QuestionsState } from "@shared/api";
import { socket } from "@/lib/socket";
import QuestionCard from "@/components/QuestionCard";

export default function LiveQuestions() {
  const [state, setState] = useState<QuestionsState>({ questions: [], selectedId: null });

  useEffect(() => {
    fetch("/api/questions").then((r) => r.json()).then(setState).catch(() => {});
    const onInit = (s: QuestionsState) => setState(s);
    const onUpdate = (s: QuestionsState) => setState(s);
    socket.on("questions:init", onInit);
    socket.on("questions:update", onUpdate);
    return () => {
      socket.off("questions:init", onInit);
      socket.off("questions:update", onUpdate);
    };
  }, []);


  return (
    <Layout>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl heading font-extrabold flex items-center gap-2 reveal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M8 10a4 4 0 1 1 8 0c0 1.5-1 2.5-2 3.5s-1 2-1 2"/><circle cx="12" cy="19" r="1"/></svg>
          Questions
        </h1>
        <p className="text-muted-foreground mt-2 reveal">Les dernières questions envoyées par le public.</p>
        <div className="mt-6 grid gap-3">
          {state.questions.map((q) => (
            <QuestionCard key={q.id} q={q} selected={false} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
