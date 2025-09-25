import { NavLink } from "react-router-dom";
import { Home, HelpCircle, Film, Info } from "lucide-react";

export function NavBar({ variant }: { variant: "top" | "bottom" }) {
  const links = [
    { to: "/", label: "Accueil", icon: Home },
    { to: "/poser-une-question", label: "Questions", icon: HelpCircle },
    { to: "/reportages", label: "Reportages", icon: Film },
    { to: "/a-propos", label: "À propos", icon: Info },
  ];

  if (variant === "top")
    return (
      <header className="sticky top-0 z-40 backdrop-blur bg-background/60 border-b">
        <div className="container mx-auto flex items-center justify-between py-3">
          <NavLink to="/" className="group"><Logo /></NavLink>
          <nav className="hidden md:flex gap-6 text-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `a-underline transition-colors ${isActive ? "text-primary font-semibold" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    );

  const mobile = [links[0], links[1], links[2], links[3]]; // Accueil, Questions, Reportages, À propos

  return (
    <nav className="mobile-nav md:hidden fixed bottom-0 left-0 right-0 z-40 border-t bg-background/85 backdrop-blur h-[calc(84px+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4 h-full">
        {mobile.map((l) => {
          const Icon = l.icon;
          return (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `flex flex-col items-center py-2.5 text-[11px] leading-4 ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              <Icon className="nav-ico h-5 w-5 transition-transform duration-150 group-hover:scale-110" />
              <span className="mt-1 whitespace-nowrap">{l.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 transition drop-shadow-none group-hover:drop-shadow-[0_0_20px_rgba(230,57,70,0.4)]">
      <div className="h-8 w-8 rounded bg-gradient-to-br from-red-500 to-red-700 animate-pulse shadow-[0_0_25px_rgba(239,68,68,0.6)] relative overflow-hidden">
        <span className="absolute inset-x-0 top-0 h-0.5 bg-white/70 animate-[scan_1.2s_linear_infinite]" />
      </div>
      <span className="heading tracking-widest text-xl"><span className="text-primary">CODE</span> <span className="text-foreground">ROUGE</span></span>
    </div>
  );
}
