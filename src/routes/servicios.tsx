import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import servicesImg from "@/assets/services.jpg";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Cisum Group" },
      { name: "description", content: "Venta de inmueble, herencias, embargos y renta vitalicia. Soluciones inmobiliarias a medida." },
      { property: "og:title", content: "Servicios — Cisum Group" },
      { property: "og:description", content: "Soluciones inmobiliarias a medida." },
    ],
  }),
  component: Services,
});

const content = {
  es: {
    eyebrow: "Servicios",
    title: "Soluciones inmobiliarias a medida",
    subtitle: "Nuestros clientes son la prioridad. Cada operación se estudia y ejecuta con el máximo rigor.",
    h2: "Garantía y eficacia",
     p: [
      "En Grupo Cisum entendemos que cada operación inmobiliaria representa una historia, una necesidad y una decisión importante. Por eso acompañamos a cada cliente desde el primer contacto hasta la firma, ofreciendo un asesoramiento cercano, transparente y profesional.",
      "Nuestro equipo multidisciplinar trabaja de forma coordinada para analizar cada caso, diseñar la mejor estrategia y garantizar un proceso ágil, seguro y sin incertidumbres.",
      "Más que gestionar operaciones inmobiliarias, ayudamos a las personas a tomar decisiones con confianza, protegiendo su patrimonio y ofreciéndoles soluciones eficaces adaptadas a su situación.",
      "Diseñamos soluciones personalizadas para situaciones que requieren rapidez, seguridad y experiencia."
    ],
    cta: "Solicitar estudio gratuito",
    services: [
      { t: "Venta de inmueble", q: "¿Vendes tu casa porque necesitas liquidez?", d: "Te adelantamos hasta el 50% del precio de venta para que puedas hacer frente a lo que no puede esperar. Vende sin prisa y consigue el mejor precio por tu vivienda." },
      { t: "Herencias", q: "¿Necesitas liquidez para aceptar una herencia?", d: "Si has heredado una propiedad y quieres venderla pero no tienes liquidez para afrontar los gastos, te avanzamos la suma necesaria para poder venderla sin problemas." },
      { t: "Embargos", q: "¿Vender con embargos sobre la propiedad?", d: "Sabemos lo difícil que es vender una propiedad con embargos. Te adelantamos el dinero necesario para liquidarlos y facilitar la venta sin miedo a la ejecución." },
      { t: "Renta vitalicia", q: "¿Renta vitalicia pero necesitas el importe ahora?", d: "En muchos casos, una mensualidad no resuelve el problema. Adelantamos el importe completo en un único pago en el momento de la firma del contrato." },
    ],
  },
  en: {
    eyebrow: "Services",
    title: "Tailored real estate solutions",
    subtitle: "Our clients come first. Every deal is studied and executed with the utmost rigor.",
    h2: "Reliability and effectiveness",
    p: "From first contact to closing, our team of professionals will be fully involved in your case. That's how we deliver, in a short time, optimal, efficient and risk-free solutions.",
    cta: "Request a free study",
    services: [
      { t: "Property sale", q: "Selling your home because you need cash?", d: "We advance up to 50% of the sale price so you can face what can't wait. Sell without pressure and get the best price for your home." },
      { t: "Inheritances", q: "Need liquidity to accept an inheritance?", d: "If you've inherited a property and want to sell it but don't have liquidity for the costs, we advance the amount needed so you can sell without issues." },
      { t: "Liens", q: "Selling with liens on the property?", d: "We know how hard it is to sell a property with liens. We advance the money to settle them and enable the sale without fear of foreclosure." },
      { t: "Life annuity", q: "Need the full annuity amount now?", d: "In many cases a monthly payment doesn't solve the problem. We advance the full amount in a single payment at signing." },
    ],
  },
  fr: {
    eyebrow: "Services",
    title: "Des solutions immobilières sur mesure",
    subtitle: "Nos clients sont la priorité. Chaque opération est étudiée et exécutée avec la plus grande rigueur.",
    h2: "Fiabilité et efficacité",
    p: "Du premier contact à la clôture, notre équipe de professionnels s'implique pleinement dans votre dossier. Nous offrons ainsi, en peu de temps, des solutions optimales, efficaces et sans risque.",
    cta: "Demander une étude gratuite",
    services: [
      { t: "Vente d'un bien", q: "Vous vendez votre logement par besoin de liquidités ?", d: "Nous avançons jusqu'à 50 % du prix de vente pour faire face à ce qui ne peut attendre. Vendez sans précipitation au meilleur prix." },
      { t: "Successions", q: "Besoin de liquidités pour accepter une succession ?", d: "Si vous avez hérité d'un bien à vendre sans disposer des liquidités pour les frais, nous avançons la somme nécessaire pour vendre sans problème." },
      { t: "Saisies", q: "Vendre malgré des saisies sur le bien ?", d: "Nous savons combien il est difficile de vendre un bien saisi. Nous avançons les fonds nécessaires pour lever les saisies et faciliter la vente." },
      { t: "Rente viagère", q: "Rente viagère mais besoin du montant maintenant ?", d: "Souvent, une mensualité ne suffit pas. Nous avançons la totalité en un seul versement au moment de la signature." },
    ],
  },
};

function Services() {
  const t = usePick(content);
  return (
    <SiteLayout>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <img src={servicesImg} alt="" width={1280} height={960} loading="lazy" className="rounded-lg shadow-2xl w-full h-[480px] object-cover" />
          <div>
            <h2 className="font-serif text-4xl text-teal-deep">{t.h2}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.p}</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-20 grid md:grid-cols-2 gap-8">
          {t.services.map((s) => (
            <div key={s.t} className="p-8 rounded-lg bg-secondary border border-border hover:border-teal hover:shadow-lg transition">
              <h3 className="font-serif text-2xl text-teal-deep">{s.t}</h3>
              <p className="mt-3 font-medium text-teal">{s.q}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contacto" className="inline-flex bg-teal-deep text-white px-8 py-4 rounded-full hover:bg-teal transition">
            {t.cta}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
