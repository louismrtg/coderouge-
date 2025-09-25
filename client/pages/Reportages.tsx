import Layout from "@/components/Layout";

export default function Reportages() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-4xl heading font-extrabold">Reportages : Plongée au cœur de la crise</h1>
        <div className="reveal mt-2 text-muted-foreground">Découvrez nos sujets avec un regard de terrain.</div>
        <div className="reveal mt-6 grid md:grid-cols-[2fr,1fr] gap-6 items-start">
          <div className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-border bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(230,57,70,0.15),transparent)] pointer-events-none" />
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Reportage : La réalité des urgences"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">La réalité des urgences</h2>
            <p className="text-muted-foreground mt-2">Plongée au cœur des services d’urgences: témoignages des soignants, parcours des patients, et défis quotidiens. Contenu vidéo de démonstration.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
