import { Facebook, Instagram, Landmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="heading text-xl font-bold"><span className="text-primary">CODE</span> ROUGE</div>
          <p className="text-muted-foreground mt-2">© 2025 CODE ROUGE Productions • Design et développement : Louis Martignon</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <a href="mailto:contact@lmart.frstud.fr" className="a-underline">contact@lmart.frstud.fr</a>
        </div>
        <div>
          <div className="font-semibold">Pages</div>
          <div className="mt-2 grid gap-1">
            <a href="/mentions-legales" className="a-underline">Mentions légales</a>
            <a href="/a-propos" className="a-underline">À propos</a>
            <a href="/plan-du-site" className="a-underline">Plan du site</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Réseaux sociaux</div>
          <div className="flex gap-3 mt-2 text-muted-foreground">
            <a href="https://www.facebook.com/csnd58/?locale=fr_FR" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-primary"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/csndnevers?igsh=YjFnb3o1b3BhM3V5" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.tiktok.com/@csndlgtnevers?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-primary">
              <svg viewBox="0 0 256 256" className="w-5 h-5 fill-current"><path d="M201.5 80.8c-19.3-8.9-34.1-24.1-41.8-42.5h-.2v136.1c0 29.6-24 53.6-53.6 53.6S52.3 203.9 52.3 174.4s24-53.6 53.6-53.6c3.7 0 7.3.4 10.8 1.2v28.9c-3.3-1.8-7.1-2.8-11.1-2.8-12.9 0-23.3 10.5-23.3 23.3s10.5 23.3 23.3 23.3 23.3-10.5 23.3-23.3V24h28.3c6.7 21.1 23.8 38.9 45.8 46.9v9.9z"/></svg>
            </a>
            <a href="https://www.csnd58.fr/" target="_blank" rel="noreferrer" aria-label="CSND" className="hover:text-primary"><Landmark className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
