import Layout from "@/components/Layout";

export default function Legal() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-4xl heading font-extrabold reveal flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/></svg>
          Mentions Légales
        </h1>
        <div className="mt-6 grid gap-6">
          <div className="reveal">
            <h2 className="text-2xl font-bold mb-1">Hébergeur et Éditeur</h2>
            <p className="text-muted-foreground">Ce site web est réalisé dans le cadre d’un projet étudiant. Le tournage a été réalisé au Lycée Général Notre-Dame Nevers, 10 Rue du Cloître St Cry, 58000 Nevers, France. Le site web a été conçu et développé par Louis Martignon. L'hébergement est effectué par Plesk et Louis Martignon, Rue des Marguerites, 58000 Saint-Éloi.</p>
          </div>
          <div className="reveal">
            <h2 className="text-2xl font-bold mb-1">Droit à l'Image et Droit d'auteur</h2>
            <p className="text-muted-foreground"><strong>Article L122-4 du Code de la propriété intellectuelle :</strong> Toute représentation ou reproduction intégrale ou partielle faite sans le consentement de l'auteur ou de ses ayants droit ou ayants cause est illicite. Il en est de même pour la traduction, l'adaptation ou la transformation, l'arrangement ou la reproduction par un art ou un procédé quelconque.</p>
            <p className="text-muted-foreground"><strong>Droit à l'image :</strong> Conformément aux dispositions relatives au droit à l'image, la reproduction et l'utilisation des visuels (photographies, vidéos) du site sont soumises à l'autorisation expresse des personnes concernées et des ayants droit. Toute utilisation non autorisée est passible de poursuites judiciaires.</p>
            <p className="text-muted-foreground"><strong>Propriété intellectuelle :</strong> Le contenu de ce site (textes, images, vidéos, animations, etc.) est la propriété exclusive des créateurs de l'émission "CODE ROUGE". Toute reproduction, adaptation ou diffusion, même partielle, est formellement interdite sans un accord écrit préalable.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
