import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { ShieldCheck, TrendingUp, Timer } from "lucide-react";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/inversores")({
  head: () => ({
    meta: [
      { title: "Inversores — Royal Group" },
      { name: "description", content: "Rentabilidades superiores al 20% con operaciones garantizadas contra el propio inmueble." },
      { property: "og:title", content: "Inversores — Royal Group" },
      { property: "og:description", content: "Alta rentabilidad, bajo riesgo y retornos en menos de 12 meses." },
    ],
  }),
  component: Investors,
});

const content = {
  es: {
    eyebrow: "Inversores",
    title: "Alta rentabilidad. Bajo riesgo.",
    subtitle: "Retornos superiores al 20% en periodos no mayores a 12 meses, algo único en el sector.",
    cards: [
      { t: "+20% rentabilidad", d: "Frente al 6,5% de media del sector inmobiliario español." },
      { t: "Menos de 12 meses", d: "Plazo máximo de retorno del capital invertido." },
      { t: "Garantía real", d: "Operaciones aseguradas contra el propio inmueble." },
    ],
    h2: "Rentabilidad y garantías",
    p1: "El sector inmobiliario en España ofreció un 6,5% de rentabilidad en 2022; en Cataluña, donde se concentra la mayor parte de nuestras operaciones, alcanzó el 6,8%. Grupo Royal lleva más de 20 años ofreciendo a sus inversores rentabilidades superiores al 20% con retornos en periodos inferiores a 12 meses.",
    p2: "Nuestro equipo legal desarrolla estrategias que garantizan las operaciones contra el propio inmueble, algo que ningún competidor del sector puede ofrecer hoy.",
    cta: "Quiero invertir",
  },
  en: {
    eyebrow: "Investors",
    title: "High returns. Low risk.",
    subtitle: "Returns above 20% in less than 12 months — unique in the sector.",
    cards: [
      { t: "+20% return", d: "Compared to the 6.5% average of the Spanish real estate sector." },
      { t: "Under 12 months", d: "Maximum payback period for invested capital." },
      { t: "Real collateral", d: "Operations secured against the property itself." },
    ],
    h2: "Returns and guarantees",
    p1: "The Spanish real estate sector delivered 6.5% return in 2022; in Catalonia, where most of our operations take place, it reached 6.8%. Royal Group has been offering investors returns above 20% with paybacks in less than 12 months for over 20 years.",
    p2: "Our legal team develops strategies that secure each operation against the property itself — something no competitor can offer today.",
    cta: "I want to invest",
  },
  fr: {
    eyebrow: "Investisseurs",
    title: "Haute rentabilité. Faible risque.",
    subtitle: "Rendements supérieurs à 20 % en moins de 12 mois, unique sur le marché.",
    cards: [
      { t: "+20 % de rendement", d: "Contre 6,5 % en moyenne dans l'immobilier espagnol." },
      { t: "Moins de 12 mois", d: "Délai maximum de retour du capital investi." },
      { t: "Garantie réelle", d: "Opérations sécurisées contre le bien lui-même." },
    ],
    h2: "Rentabilité et garanties",
    p1: "Le secteur immobilier espagnol a offert 6,5 % de rentabilité en 2022 ; en Catalogne, où se concentre l'essentiel de nos opérations, il a atteint 6,8 %. Royal offre depuis plus de 20 ans des rendements supérieurs à 20 % avec des retours en moins de 12 mois.",
    p2: "Notre équipe juridique met en place des stratégies qui garantissent chaque opération contre le bien — un avantage qu'aucun concurrent ne peut offrir aujourd'hui.",
    cta: "Je souhaite investir",
  },
};

function Investors() {
  const t = usePick(content);
  const icons = [TrendingUp, Timer, ShieldCheck];
  return (
    <SiteLayout>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {t.cards.map((c, i) => {
            const Icon = icons[i];
            return (
              <div key={c.t} className="border border-border rounded-lg p-8 hover:border-teal transition">
                <Icon className="text-gold" size={32} />
                <h3 className="mt-6 font-serif text-2xl text-teal-deep">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl mt-20 text-center">
          <h2 className="font-serif text-4xl text-teal-deep">{t.h2}</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{t.p1}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.p2}</p>
          <Link to="/contacto" className="mt-10 inline-flex bg-teal-deep text-white px-8 py-4 rounded-full hover:bg-teal transition">
            {t.cta}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
