import { useEffect, useMemo, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { EmblaCarousel } from "./components/EmblaCarousel";
import TopTicker from "@/components/TopTicker";
import TeaserVideo from "@/components/TeaserVideo";

export default function Home() {
  const sloganFull = "Au cœur de l'urgence, au cœur du débat.";
  const [slogan, setSlogan] = useState("");
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.querySelector("#jingle");
    el?.classList.add("jingle-in");
    const t = setTimeout(() => el?.classList.remove("jingle-in"), 2000);

    // typewriter
    let i = 0;
    const step = () => {
      i += 1;
      setSlogan(sloganFull.slice(0, i));
      if (i < sloganFull.length) raf = requestAnimationFrame(step);
    };
    let raf = requestAnimationFrame(step);

    // parallax
    const onScroll = () => {
      const y = window.scrollY * 0.2;
      if (parallaxRef.current) parallaxRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => { clearTimeout(t); cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  const badges = useMemo(() => [
    { text: "Plateau TV Moderne" },
    { text: "Ouvert au grand public" },
    { text: "Interactif & immersif" },
  ], []);

  return (
    <Layout>
      <TopTicker />
      <section className="relative overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(230,57,70,0.12),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(255,255,255,0.06),transparent)]" />
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div id="jingle" className="opacity-0 scale-90 transition-all duration-700 reveal">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-600/20 ring-1 ring-red-500/60">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white">Jingle d'ouverture</span>
            </div>
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl heading font-extrabold tracking-tight leading-tight reveal">
            <span className="logo-red">CODE</span> <span className="text-foreground">ROUGE</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl reveal">
            {slogan}
            <span className="border-r-2 border-primary ml-0.5 animate-pulse" />
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground reveal">
            {badges.map((b) => (
              <span key={b.text} className="px-2 py-1 rounded bg-secondary ring-1 ring-border">{b.text}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 reveal">
            <NavLink to="/poser-une-question" className="btn-primary inline-flex items-center gap-2 active:scale-[.98]">
              Poser une question <ChevronRight className="h-4 w-4" />
            </NavLink>
            <NavLink to="/questions-en-direct" className="btn-secondary active:scale-[.98]">Questions en direct</NavLink>
          </div>
          <div className="mt-10 text-sm text-muted-foreground reveal">Diffusion : Jeudi 2 octobre 13:00 • Présentateur : Yann Le Fur</div>
        </div>
        <div className="container mx-auto px-4 mt-10 mb-16 reveal">
          <TeaserVideo />
        </div>
        <div className="container mx-auto px-4 pb-24 reveal">
          <EmblaCarousel />
        </div>
      </section>
    </Layout>
  );
}
