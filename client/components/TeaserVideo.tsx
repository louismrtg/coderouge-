import { useRef, useState } from "react";

export default function TeaserVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden ring-1 ring-border bg-black">
      <video
        ref={ref}
        className="w-full h-full aspect-video object-cover"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <button
        onClick={toggle}
        className="absolute top-3 right-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/60 text-white backdrop-blur active:scale-95 transition"
        aria-label={muted ? "Activer le son" : "Couper le son"}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M19 5l-6 6"/><path d="M19 11l-6 6"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"/></svg>
        )}
      </button>
    </div>
  );
}
