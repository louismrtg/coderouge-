import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileHeader() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (delta > 5) setCompact(true);
        else if (delta < -5) setCompact(false);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`md:hidden sticky top-0 z-40 backdrop-blur bg-background/60 border-b transition-all duration-300 ease-in-out ${compact ? "h-12" : "h-20"}`}>
      <div className={`container mx-auto px-4 h-full flex items-center transition-all duration-300 ease-in-out ${compact ? "justify-start" : "justify-center"}`}>
        <NavLink to="/" className="group">
          <div className={`relative flex items-center gap-2 transition-all duration-300 ease-in-out ${compact ? "scale-90" : "scale-100"}`}>
            <div className="h-8 w-8 rounded bg-gradient-to-br from-red-500 to-red-700 animate-pulse shadow-[0_0_25px_rgba(239,68,68,0.6)] relative overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-white/70 animate-[scan_1.2s_linear_infinite]" />
            </div>
            <span className="heading tracking-widest text-xl"><span className="text-primary">CODE</span> <span className="text-foreground">ROUGE</span></span>
          </div>
        </NavLink>
      </div>
    </header>
  );
}
