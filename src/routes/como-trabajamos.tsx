import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/como-trabajamos")({
  head: () => ({
    meta: [
      { title: "Cómo trabajamos — Cisum Group" },
      { name: "description", content: "Nuestro método en cuatro pasos: solicitud, estudio, propuesta y firma." },
      { property: "og:title", content: "Cómo trabajamos — Cisum Group" },
      { property: "og:description", content: "Un método probado, cercano y eficaz." },
    ],
  }),
  component: How,
});

const steps = [
  { n: "01", t: "Solicitud", d: "Solicita un estudio gratuito para analizar el tipo de necesidad que mejor se adapta a tus intereses." },
  { n: "02", t: "Estudio", d: "Nuestro agente te indicará la viabilidad y la documentación necesaria para el estudio definitivo." },
  { n: "03", t: "Propuesta", d: "Te haremos una oferta en base a tus necesidades y la propiedad." },
  { n: "04", t: "Firma", d: "Te acompañamos en todo el proceso hasta la firma en la notaría." },
];

function How() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nuestro método"
        title="En cuatro sencillos pasos"
        subtitle="Un proceso claro y transparente, del primer contacto a la firma en notaría."
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-8 items-start border-b border-border pb-12 last:border-none">
              <span className="font-serif text-6xl text-gold leading-none w-24 shrink-0">{s.n}</span>
              <div>
                <h3 className="font-serif text-3xl text-teal-deep">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                <p className="mt-4 text-sm text-teal">Paso {i + 1} de {steps.length}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
