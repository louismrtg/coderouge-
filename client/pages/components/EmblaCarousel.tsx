import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  const slides = [
    {
      title: "Urgences en action",
      desc: "Patients, soignants et réalités du terrain",
      svg: (
        <svg viewBox="0 0 300 140" className="w-full h-40">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="300" height="140" fill="url(#g1)" rx="12" />
          <g fill="#fff" opacity="0.9">
            <rect x="20" y="40" width="80" height="50" rx="8" />
            <rect x="120" y="30" width="60" height="70" rx="8" />
            <rect x="200" y="50" width="80" height="40" rx="8" />
          </g>
          <g fill="#ef4444">
            <rect x="35" y="55" width="50" height="8" rx="4" />
            <rect x="135" y="55" width="30" height="8" rx="4" />
            <rect x="220" y="65" width="40" height="8" rx="4" />
          </g>
        </svg>
      ),
    },
    {
      title: "Bloc opératoire",
      desc: "Tension, expertise et décisions critiques",
      svg: (
        <svg viewBox="0 0 300 140" className="w-full h-40">
          <rect x="0" y="0" width="300" height="140" rx="12" fill="#0ea5e9" />
          <circle cx="80" cy="70" r="30" fill="#bae6fd" />
          <circle cx="150" cy="70" r="30" fill="#7dd3fc" />
          <circle cx="220" cy="70" r="30" fill="#38bdf8" />
          <rect x="70" y="62" width="160" height="16" rx="8" fill="#ef4444" />
        </svg>
      ),
    },
    {
      title: "Accueil des familles",
      desc: "Humanité et soutien psychologique",
      svg: (
        <svg viewBox="0 0 300 140" className="w-full h-40">
          <rect x="0" y="0" width="300" height="140" rx="12" fill="#f59e0b" />
          <rect x="20" y="30" width="260" height="80" rx="10" fill="#fff" opacity="0.9" />
          <rect x="40" y="50" width="80" height="12" rx="6" fill="#ef4444" />
          <rect x="40" y="70" width="160" height="12" rx="6" fill="#0ea5e9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="embla rounded-xl ring-1 ring-border">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((s) => (
            <div className="embla__slide p-6 grid md:grid-cols-[1fr,2fr] gap-6 items-center" key={s.title}>
              <div>{s.svg}</div>
              <div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
