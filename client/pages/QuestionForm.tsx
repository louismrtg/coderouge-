import Layout from "@/components/Layout";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  firstName: z.string().min(1, "Prénom requis").max(60),
  lastName: z.string().optional().transform((v) => (v ?? "")),
  text: z.string().min(5, "Votre question est trop courte").max(2000),
});

export default function QuestionForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(null);
    setErrors({});
    const form = new FormData(e.currentTarget);
    const values = {
      firstName: String(form.get("firstName") || "").trim(),
      lastName: String(form.get("lastName") || "").trim(),
      text: String(form.get("text") || "").trim(),
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() || "form";
        errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }

    try {
      setLoading(true);

      // --- Simulation d'envoi ---
      await new Promise(resolve => setTimeout(resolve, 500)); // pause 0.5s
      setSuccess("Merci ! Votre question a été envoyée en direct (simulation).");
      (e.currentTarget as HTMLFormElement).reset();

    } catch (err) {
      setErrors({ form: (err as Error).message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-5xl heading font-extrabold flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
            <path d="M12 19l-7-7 7-7"/>
            <path d="M5 12h14"/>
          </svg> 
          Poser une question
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Partagez votre expérience ou interrogez nos invités. Les questions pertinentes peuvent apparaître en direct à l'écran.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium">Prénom</label>
            <input name="firstName" className="mt-1 w-full input bg-transparent" placeholder="Votre prénom" />
            {errors.firstName && <p className="form-error">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Votre question</label>
            <textarea name="text" className="mt-1 w-full input h-32 bg-transparent" placeholder="Formulez clairement votre question..." />
            {errors.text && <p className="form-error">{errors.text}</p>}
          </div>
          {errors.form && <p className="form-error">{errors.form}</p>}
          {success && (
            <div className="flex items-center gap-2 text-emerald-500 font-semibold animate-[fadeIn_.4s_ease]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{success}</span>
            </div>
          )}
          <button disabled={loading} className="btn-primary">
            {loading ? "Envoi..." : "Envoyer ma question"}
          </button>
        </form>
      </section>
    </Layout>
  );
}
