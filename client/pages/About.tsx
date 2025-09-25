import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-4xl heading font-extrabold reveal flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 20l9-5-9-5-9 5 9 5z"/><path d="M12 12l9-5-9-5-9 5 9 5z"/></svg>
          “CODE ROUGE” : Quand le débat s’invite à l’hôpital.
        </h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="reveal">
            <h2 className="text-2xl font-bold mb-2">Notre mission</h2>
            <p className="text-muted-foreground">“CODE ROUGE” est une émission de débat citoyen, conçue et réalisée par les étudiants du Lycée Général Notre-Dame de Nevers. Face à une crise des urgences qui ne cesse de faire les gros titres, notre équipe a décidé de poser une question simple, mais cruciale : « La crise des urgences à l’hôpital, tous responsables ? ».</p>
          </div>
          <div className="reveal">
            <h2 className="text-2xl font-bold mb-2">Animateur & invités</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                Présenté par <strong>Yann Le Fur</strong>, le premier numéro de notre émission réunit des experts pour un débat essentiel. Retrouvez nos invités, <strong>Lilou Laurent</strong>, <strong>Louis Beaujean</strong> et <strong>Nicolas Denis</strong>, pour analyser et débattre de la crise qui secoue notre système de santé.
              </p>
              <p>
                Sur le terrain, nos reportages sont signés par <strong>Lohann Thonnon-Varenne</strong> et <strong>Jessy Bouvet</strong>, qui vous feront vivre le quotidien des hommes et des femmes qui sont en première ligne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
