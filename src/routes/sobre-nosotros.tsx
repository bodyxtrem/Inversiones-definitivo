import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import teamImg from "@/assets/team-meeting.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros — Cisum Group" },
      { name: "description", content: "Conoce Grupo Cisum: más de 20 años ofreciendo soluciones inmobiliarias y legales personalizadas." },
      { property: "og:title", content: "Sobre nosotros — Cisum Group" },
      { property: "og:description", content: "Multifamily office con experiencia y confianza." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quiénes somos"
        title="Un multifamily office con historia"
        subtitle="Más de dos décadas cuidando el patrimonio inmobiliario de nuestros clientes."
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <img src={teamImg} alt="Equipo Cisum" width={1280} height={960} loading="lazy" className="rounded-lg shadow-2xl w-full h-[500px] object-cover" />
          <div>
            <h2 className="font-serif text-4xl text-teal-deep">Nuestra prioridad son las personas</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              En Grupo Cisum trabajamos de forma personalizada. Cada cliente
              cuenta con un agente dedicado que acompaña su caso desde el
              primer contacto hasta la firma en notaría, garantizando cercanía,
              transparencia y resultados.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Combinamos un departamento inmobiliario ágil con un equipo legal
              con más de 20 años de experiencia. Esta doble mirada nos permite
              diseñar soluciones que otros no pueden ofrecer.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-4xl text-gold">+20</p>
                <p className="text-sm text-muted-foreground">años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-gold">48h</p>
                <p className="text-sm text-muted-foreground">de estudio gratuito</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-gold">20%</p>
                <p className="text-sm text-muted-foreground">rentabilidad media</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
