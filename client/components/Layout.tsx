import { ReactNode, useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";
import { initRevealObserver } from "@/lib/reveal";
import MobileHeader from "./MobileHeader";

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    const cleanup = initRevealObserver();
    const t = window.setTimeout(() => setLoading(false), 1200);
    let scrollTimer: number | undefined;
    const onScroll = () => {
      document.documentElement.classList.add("scrolling");
      if (scrollTimer) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => document.documentElement.classList.remove("scrolling"), 180) as unknown as number;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { mql.removeEventListener("change", onChange); cleanup && cleanup(); window.clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col bg-motif">
      {loading && (
        <div className="preloader">
          <div className="preloader__logo heading">
            <div className="preloader__scan" />
            CODE ROUGE
          </div>
        </div>
      )}
      {!isMobile && <NavBar variant="top" />}
      {isMobile && <MobileHeader />}
      <main className={`flex-1 ${isMobile ? "pb-[calc(84px+env(safe-area-inset-bottom))]" : ""}`}>{children}</main>
      <Footer />
      {isMobile && <NavBar variant="bottom" />}
    </div>
  );
}
