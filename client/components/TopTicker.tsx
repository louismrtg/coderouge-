import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import type { Question, QuestionsState } from "@shared/api";

export default function TopTicker() {
  const [latest, setLatest] = useState<Question | null>(null);

  useEffect(() => {
    const updateFrom = (s: QuestionsState) => {
      const q = s.questions.find((x) => !x.hidden) || null;
      setLatest(q);
    };
    socket.on("questions:init", updateFrom);
    socket.on("questions:update", updateFrom);
    return () => {
      socket.off("questions:init", updateFrom);
      socket.off("questions:update", updateFrom);
    };
  }, []);

  if (!latest) return null;

  return (
    <div className="w-full bg-black/70 text-white py-2 border-b border-white/10">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="marquee whitespace-nowrap text-sm">
          <span className="text-red-400 font-semibold mr-3">Breaking News</span>
          {`${latest.firstName} ${latest.lastName} · ${latest.text}`}
        </div>
      </div>
    </div>
  );
}
