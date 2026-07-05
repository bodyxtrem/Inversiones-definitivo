import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import servicesImg from "@/assets/services.jpg";

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

const services = [
  {
    t: "Venta de inmueble",
    q: "¿Vendes tu casa porque necesitas liquidez?",
    d: "Te adelantamos hasta el 50% del precio de venta para que puedas hacer frente a lo que no puede esperar. Vende sin prisa y consigue el mejor precio por tu vivienda.",
  },
  {
    t: "Herencias",
    q: "¿Necesitas liquidez para aceptar una herencia?",
    d: "Si has heredado una propiedad y quieres venderla pero no tienes liquidez para afrontar los gastos, te avanzamos la suma necesaria para poder venderla sin problemas.",
  },
  {
    t: "Embargos",
    q: "¿Vender con embargos sobre la propiedad?",
    d: "Sabemos lo difícil que es vender una propiedad con embargos. Te adelantamos el dinero necesario para liquidarlos y facilitar la venta sin miedo a la ejecución.",
  },
  {
    t: "Renta vitalicia",
    q: "¿Renta vitalicia pero necesitas el importe ahora?",
    d: "En muchos casos, una mensualidad no resuelve el problema. Adelantamos el importe completo en un único pago en el momento de la firma del contrato.",
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones inmobiliarias a medida"
        subtitle="Nuestros clientes son la prioridad. Cada operación se estudia y ejecuta con el máximo rigor."
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <img src={servicesImg} alt="Firma de contrato" width={1280} height={960} loading="lazy" className="rounded-lg shadow-2xl w-full h-[480px] object-cover" />
          <div>
            <h2 className="font-serif text-4xl text-teal-deep">Garantía y eficacia</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Desde el primer contacto hasta la finalización de la operación,
              nuestro equipo de profesionales estará implicado al máximo en tu
              caso. Así conseguimos ofrecer, en un corto espacio de tiempo,
              soluciones óptimas, eficientes y sin riesgos.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-20 grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.t} className="p-8 rounded-lg bg-secondary border border-border hover:border-teal hover:shadow-lg transition">
              <h3 className="font-serif text-2xl text-teal-deep">{s.t}</h3>
              <p className="mt-3 font-medium text-teal">{s.q}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contacto" className="inline-flex bg-teal-deep text-white px-8 py-4 rounded-full hover:bg-teal transition">
            Solicitar estudio gratuito
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
