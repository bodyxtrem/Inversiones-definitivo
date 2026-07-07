import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import teamImg from "@/assets/team-meeting.jpg";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros — Royal Group" },
      { name: "description", content: "Conoce Grupo Royal: más de 20 años ofreciendo soluciones inmobiliarias y legales personalizadas." },
      { property: "og:title", content: "Sobre nosotros — Royal Group" },
      { property: "og:description", content: "Multifamily Office con experiencia y confianza." },
    ],
  }),
  component: About,
});

const content = {
  es: {
    eyebrow: "Quiénes somos",
    title: "Un Multifamily Office con historia",
    subtitle: "Más de dos décadas cuidando el patrimonio inmobiliario de nuestros clientes.",
    h2: "Nuestra prioridad son las personas",
    p1: "En Grupo Royal trabajamos de forma personalizada. Cada cliente cuenta con un agente dedicado que acompaña su caso desde el primer contacto hasta la firma en notaría, garantizando cercanía, transparencia y resultados.",
    p2: "Combinamos un departamento inmobiliario ágil con un equipo legal con más de 10 años de experiencia. Esta doble mirada nos permite diseñar soluciones que otros no pueden ofrecer.",
    s1: "años de experiencia",
    s2: "de estudio gratuito",
    s3: "rentabilidad media",
  },
  en: {
    eyebrow: "Who we are",
    title: "A Multifamily Office with history",
    subtitle: "More than two decades caring for our clients' real estate assets.",
    h2: "People are our priority",
    p1: "At Royal Group we work one-on-one. Each client has a dedicated agent from first contact through signing at the notary, ensuring closeness, transparency and results.",
    p2: "We combine an agile real estate department with a legal team of over 20 years of experience. This dual perspective lets us design solutions others cannot offer.",
    s1: "years of experience",
    s2: "free feasibility study",
    s3: "average return",
  },
  fr: {
    eyebrow: "Qui sommes-nous",
    title: "Un Multifamily Office avec une histoire",
    subtitle: "Plus de deux décennies au service du patrimoine immobilier de nos clients.",
    h2: "Notre priorité, ce sont les personnes",
    p1: "Chez Royal, nous travaillons de manière personnalisée. Chaque client bénéficie d'un agent dédié, du premier contact à la signature notariée, avec proximité, transparence et résultats.",
    p2: "Nous combinons un département immobilier agile et une équipe juridique forte de plus de 20 ans d'expérience. Cette double approche nous permet de concevoir des solutions uniques.",
    s1: "ans d'expérience",
    s2: "étude gratuite",
    s3: "rentabilité moyenne",
  },
};

function About() {
  const t = usePick(content);
  return (
    <SiteLayout>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <img src={teamImg} alt="" width={1280} height={960} loading="lazy" className="rounded-lg shadow-2xl w-full h-[500px] object-cover" />
          <div>
            <h2 className="font-serif text-3xl text-teal-deep">{t.h2}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.p1}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.p2}</p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-4xl text-gold">+15 años</p>
                <p className="text-sm text-muted-foreground">{t.s1}</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-gold">48h</p>
                <p className="text-sm text-muted-foreground">{t.s2}</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-gold">15%</p>
                <p className="text-sm text-muted-foreground">{t.s3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
