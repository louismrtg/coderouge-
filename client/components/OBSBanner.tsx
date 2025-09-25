import { useEffect, useRef, useState } from "react";
import { socket } from "@/lib/socket";
import type { QuestionsState, Question } from "@shared/api";

export default function OBSBanner({ autoHideMs = 10000 }: { autoHideMs?: number }) {
  const [state, setState] = useState<QuestionsState>({ questions: [], selectedId: null });
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const onInit = (s: QuestionsState) => setState(s);
    const onUpdate = (s: QuestionsState) => setState(s);
    const onSelected = () => {
      setVisible(false);
      window.setTimeout(() => setVisible(true), 50);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setVisible(false), autoHideMs);
    };

    socket.on("questions:init", onInit);
    socket.on("questions:update", onUpdate);
    socket.on("question:selected", onSelected);

    return () => {
      socket.off("questions:init", onInit);
      socket.off("questions:update", onUpdate);
      socket.off("question:selected", onSelected);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [autoHideMs]);

  const selected: Question | undefined = state.questions.find((q) => q.id === state.selectedId);

  return (
    <div className="w-full h-full flex items-end justify-center p-6 bg-transparent">
      <div
        className={`obs-banner ${visible ? "obs-in" : "obs-out"} max-w-5xl w-full`}
        aria-hidden={!visible}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-sm bg-gradient-to-br from-red-500 to-red-700 animate-glow" />
          <div className="text-xs uppercase tracking-widest font-bold text-yellow-400">Breaking News</div>
        </div>
        <div className="mt-2 whitespace-nowrap overflow-hidden">
          <div className="marquee text-lg md:text-2xl font-semibold">
            {selected ? `${selected.firstName} ${selected.lastName} · ${selected.text}` : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
