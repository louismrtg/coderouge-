import Layout from "@/components/Layout";

export default function Sitemap() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl heading font-extrabold">Plan du site</h1>
        <ul className="mt-4 grid gap-2">
          <li><a className="a-underline" href="/">Accueil</a></li>
          <li><a className="a-underline" href="/poser-une-question">Questions (soumission)</a></li>
          <li><a className="a-underline" href="/questions-en-direct">Questions en direct (diffusion)</a></li>
          <li><a className="a-underline" href="/reportages">Reportages</a></li>
          <li><a className="a-underline" href="/a-propos">À propos</a></li>
          <li><a className="a-underline" href="/mentions-legales">Mentions légales</a></li>
          <li><a className="a-underline" href="/obs" target="_blank" rel="noreferrer">Bandeau OBS (technique)</a></li>
        </ul>
      </section>
    </Layout>
  );
}
