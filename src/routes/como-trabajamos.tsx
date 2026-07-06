import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/como-trabajamos")({
  head: () => ({
    meta: [
      { title: "Cómo trabajamos — Royal Group" },
      { name: "description", content: "Nuestro método en cuatro pasos: solicitud, estudio, propuesta y firma." },
      { property: "og:title", content: "Cómo trabajamos — Royal Group" },
      { property: "og:description", content: "Un método probado, cercano y eficaz." },
    ],
  }),
  component: How,
});

const content = {
  es: {
    eyebrow: "Nuestro método",
    title: "En cuatro sencillos pasos",
    subtitle: "Un proceso claro y transparente, del primer contacto a la firma en notaría.",
    stepLabel: (i: number, total: number) => `Paso ${i} de ${total}`,
    steps: [
      { t: "Solicitud", d: "Solicita un estudio gratuito para analizar el tipo de necesidad que mejor se adapta a tus intereses." },
      { t: "Estudio", d: "Nuestro agente te indicará la viabilidad y la documentación necesaria para el estudio definitivo." },
      { t: "Propuesta", d: "Te haremos una oferta en base a tus necesidades y la propiedad." },
      { t: "Firma", d: "Te acompañamos en todo el proceso hasta la firma en la notaría." },
    ],
  },
  en: {
    eyebrow: "Our method",
    title: "Four simple steps",
    subtitle: "A clear, transparent process, from first contact to signing at the notary.",
    stepLabel: (i: number, total: number) => `Step ${i} of ${total}`,
    steps: [
      { t: "Request", d: "Request a free study to analyze the solution that best fits your needs." },
      { t: "Study", d: "Our agent will review feasibility and the documentation required for the definitive study." },
      { t: "Proposal", d: "We'll make you an offer tailored to your needs and the property." },
      { t: "Signing", d: "We accompany you throughout the process, up to signing at the notary." },
    ],
  },
  fr: {
    eyebrow: "Notre méthode",
    title: "En quatre étapes simples",
    subtitle: "Un processus clair et transparent, du premier contact à la signature notariée.",
    stepLabel: (i: number, total: number) => `Étape ${i} sur ${total}`,
    steps: [
      { t: "Demande", d: "Demandez une étude gratuite pour analyser la solution la mieux adaptée à vos besoins." },
      { t: "Étude", d: "Notre agent vous indiquera la faisabilité et les documents nécessaires à l'étude définitive." },
      { t: "Proposition", d: "Nous vous faisons une offre sur mesure selon vos besoins et le bien." },
      { t: "Signature", d: "Nous vous accompagnons jusqu'à la signature chez le notaire." },
    ],
  },
};

const numbers = ["1.", "2.", "3.", "4."];

function How() {
  const t = usePick(content);
  return (
    <SiteLayout>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          {t.steps.map((s, i) => (
            <div key={s.t} className="flex gap-8 items-start border-b border-border pb-12 last:border-none">
              <span className="font-serif text-6xl text-gold leading-none w-24 shrink-0">{numbers[i]}</span>
              <div>
                <h3 className="font-serif text-3xl text-teal-deep">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                <p className="mt-4 text-sm text-teal">{t.stepLabel(i + 1, t.steps.length)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
