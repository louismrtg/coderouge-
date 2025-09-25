import { Question } from "@shared/api";

export default function QuestionCard({ q, selected, onSelect, onHide }: { q: Question; selected?: boolean; onSelect?: () => void; onHide?: () => void }) {
  return (
    <div className={`p-4 rounded-lg border bg-card/50 animate-[fadeBounce_.5s_ease] glitch-in ${selected ? "ring-2 ring-yellow-400" : ""}`}>
      <div className="text-sm text-muted-foreground">{new Date(q.createdAt).toLocaleTimeString()}</div>
      <div className="font-semibold mt-1">{q.firstName} {q.lastName}</div>
      <p className="mt-2 text-foreground/90">{q.text}</p>
      {(onSelect || onHide) && (
        <div className="mt-3 flex gap-2">
          {onSelect && (
            <button onClick={onSelect} className="px-3 py-1.5 rounded bg-primary text-primary-foreground hover:opacity-90 transition">
              Afficher
            </button>
          )}
          {onHide && (
            <button onClick={onHide} className="px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:opacity-90 transition">
              Masquer
            </button>
          )}
        </div>
      )}
    </div>
  );
}
