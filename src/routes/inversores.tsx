import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { ShieldCheck, TrendingUp, Timer } from "lucide-react";

export const Route = createFileRoute("/inversores")({
  head: () => ({
    meta: [
      { title: "Inversores — Cisum Group" },
      { name: "description", content: "Rentabilidades superiores al 20% con operaciones garantizadas contra el propio inmueble." },
      { property: "og:title", content: "Inversores — Cisum Group" },
      { property: "og:description", content: "Alta rentabilidad, bajo riesgo y retornos en menos de 12 meses." },
    ],
  }),
  component: Investors,
});

function Investors() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Inversores"
        title="Alta rentabilidad. Bajo riesgo."
        subtitle="Retornos superiores al 20% en periodos no mayores a 12 meses, algo único en el sector."
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            { icon: TrendingUp, t: "+20% rentabilidad", d: "Frente al 6,5% de media del sector inmobiliario español." },
            { icon: Timer, t: "Menos de 12 meses", d: "Plazo máximo de retorno del capital invertido." },
            { icon: ShieldCheck, t: "Garantía real", d: "Operaciones aseguradas contra el propio inmueble." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="border border-border rounded-lg p-8 hover:border-teal transition">
              <Icon className="text-gold" size={32} />
              <h3 className="mt-6 font-serif text-2xl text-teal-deep">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl mt-20 text-center">
          <h2 className="font-serif text-4xl text-teal-deep">Rentabilidad y garantías</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            El sector inmobiliario en España ofreció un 6,5% de rentabilidad en
            2022; en Cataluña, donde se concentra la mayor parte de nuestras
            operaciones, alcanzó el 6,8%. Grupo Cisum lleva más de 20 años
            ofreciendo a sus inversores rentabilidades superiores al 20% con
            retornos en periodos inferiores a 12 meses.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nuestro equipo legal desarrolla estrategias que garantizan las
            operaciones contra el propio inmueble, algo que ningún competidor
            del sector puede ofrecer hoy.
          </p>
          <Link to="/contacto" className="mt-10 inline-flex bg-teal-deep text-white px-8 py-4 rounded-full hover:bg-teal transition">
            Quiero invertir
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
