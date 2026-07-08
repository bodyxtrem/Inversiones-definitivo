import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import servicesImg from "@/assets/services.jpg";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Royal Group" },
      { name: "description", content: "Venta de inmuebles, herencias, embargos y renta vitalicia. Soluciones inmobiliarias y financieras a medida." },
      { property: "og:title", content: "Servicios — Royal Group" },
      { property: "og:description", content: "Soluciones inmobiliarias y financieras adaptadas a cada cliente." },
    ],
  }),
  component: Services,
});

const content = {
  es: {
    eyebrow: "Servicios",
    title: "Soluciones inmobiliarias y financieras a medida",
    subtitle: "Cada operación se analiza de forma personalizada para ofrecer la mejor solución con total seguridad y transparencia.",
    h2: "Experiencia, garantía y eficacia",
    p: "Desde el primer contacto hasta la firma de la operación, nuestro equipo te acompaña en todo el proceso. Analizamos cada caso con rigor para ofrecer soluciones inmobiliarias y financieras ágiles, eficaces y con todas las garantías.",
    cta: "Solicitar estudio gratuito",
    services: [
      { t: "Venta de inmueble", q: "¿Vendes tu casa porque necesitas liquidez?", d: "Te adelantamos hasta el 50% del valor de venta para que puedas hacer frente a lo que no puede esperar. Vende sin prisa y consigue el mejor precio por tu vivienda." },
      { t: "Herencias", q: "¿Necesitas liquidez para aceptar una herencia?", d: "Si has heredado un inmueble y quieres venderlo, adelantamos el capital necesario para cubrir los gastos y facilitar la operación sin complicaciones." },
      { t: "Embargos", q: "¿Quieres vender un inmueble con embargos?", d: "Sabemos lo difícil que es vender una propiedad con embargos. Te adelantamos el dinero necesario para liquidarlos y facilitar la venta sin miedo a la ejecución." },
      { t: "Renta vitalicia", q: "¿Necesitas disponer del importe de tu renta vitalicia?", d: "Si necesitas liquidez inmediata, adelantamos el importe completo de tu renta vitalicia en un único pago durante la firma de la operación." },
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
            <h2 className="font-serif text-3xl text-teal-deep">{t.h2}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.p}</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-20 grid md:grid-cols-2 gap-8">
          {t.services.map((s) => (
            <div key={s.t} className="p-8 rounded-lg bg-secondary border border-border hover:border-teal hover:shadow-lg transition">
              <h3 className="font-serif text-1xl text-teal-deep">{s.t}</h3>
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
