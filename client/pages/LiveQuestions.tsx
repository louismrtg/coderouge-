import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import type { QuestionsState } from "@shared/api";
import QuestionCard from "@/components/QuestionCard";

// Définit l'intervalle de rafraîchissement des questions en millisecondes (par exemple, toutes les 5 secondes)
const REFRESH_INTERVAL = 5000;

export default function LiveQuestions() {
  const [state, setState] = useState<QuestionsState>({ questions: [], selectedId: null });

  useEffect(() => {
    // Fonction pour récupérer les questions depuis l'API
    const fetchQuestions = () => {
      fetch("/api/questions")
        .then((r) => r.json())
        .then(setState)
        .catch(() => {
          // Gère les erreurs de récupération ici si nécessaire
          console.error("Erreur lors de la récupération des questions.");
        });
    };

    // Récupère les questions immédiatement au chargement
    fetchQuestions();

    // Configure un intervalle pour rafraîchir les questions régulièrement
    const interval = setInterval(fetchQuestions, REFRESH_INTERVAL);

    // Fonction de nettoyage qui s'exécute lorsque le composant est démonté
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Ces fonctions sont désormais des stubs car la logique de sélection est non implémentée sur le serveur
  const handleSelect = (id: string) => {
    // La logique de sélection devra être implémentée sur le serveur
    console.log("Sélection de la question :", id);
  };
  const handleHide = (id: string) => {
    // La logique de masquage devra être implémentée sur le serveur
    console.log("Masquage de la question :", id);
  };

  const isSelected = (id: string) => state.selectedId === id;
  const filteredQuestions = state.questions.filter((q) => !q.hidden);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl heading font-extrabold flex items-center gap-2 reveal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M8 10a4 4 0 1 1 8 0c0 1.5-1 2.5-2 3.5s-1 2-1 2"/><circle cx="12" cy="19" r="1"/></svg>
          Questions
        </h1>
        <p className="mt-2 text-muted-foreground reveal">Toutes les questions soumises apparaissent ici, en direct !</p>
        <div className="grid gap-4 mt-8">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>Pas de questions pour le moment...</p>
            </div>
          ) : (
            filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                isSelected={isSelected(question.id)}
                onSelect={handleSelect}
                onHide={handleHide}
                enableActions
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}
