import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Clock, ShieldCheck, TrendingUp, Users } from "lucide-react";
import heroImg from "@/assets/hero-skyscrapers.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import servicesImg from "@/assets/services.jpg";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cisum Group — Multifamily Office Inmobiliario en Barcelona" },
      {
        name: "description",
        content:
          "Más de 20 años ofreciendo soluciones inmobiliarias y financieras: adelantamos hasta el 50% del precio de venta, pagamos tu hipoteca y no cobras hasta vender.",
      },
      { property: "og:title", content: "Cisum Group — Multifamily Office" },
      {
        property: "og:description",
        content: "Soluciones inmobiliarias revolucionarias, efectivas y rápidas.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Rascacielos de un distrito financiero"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-deep/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">
            Grupo Cisum
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
            Somos un<br />
            <span className="italic">multifamily office</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
            Más de 20 años de experiencia acompañando a familias e inversores
            en el sector inmobiliario.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-gold text-teal-deep px-8 py-4 rounded-full font-medium hover:bg-gold/90 transition"
            >
              Contactar <ArrowRight size={18} />
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white/10 transition"
            >
              Nuestros servicios
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* INTRO / SOLUCIONES */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">
              Más de 20 años de experiencia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">
              No somos una agencia inmobiliaria cualquiera
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              En Cisum Real Estate, además de nuestro departamento inmobiliario,
              contamos con un equipo legal con más de 20 años de experiencia en
              el sector. Ofrecemos soluciones revolucionarias, efectivas y
              rápidas.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Contrato de arras en 48 horas",
                "Adelantamos hasta el 50% del precio de venta",
                "Pagamos tu hipoteca mientras vendes",
                "Adelantamos los gastos de tu herencia",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="text-gold mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-serif italic text-2xl text-teal">
              Y no pagas hasta que vendas.
            </p>
          </div>
          <div className="relative">
            <img
              src={realEstateImg}
              alt="Edificio residencial elegante en Barcelona"
              width={1280}
              height={960}
              loading="lazy"
              className="rounded-lg shadow-2xl w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-teal-deep text-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-4xl text-gold">+20</p>
              <p className="text-sm mt-1">años acompañando a nuestros clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-secondary py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">
            Nuestros pilares
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-teal-deep">
            En Grupo Cisum, nuestra prioridad son las personas
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Rentabilidad",
                text: "Ofrecemos a nuestros inversores rentabilidades superiores al 20% con retornos en periodos no superiores a 12 meses.",
              },
              {
                icon: ShieldCheck,
                title: "Garantías",
                text: "Nuestras operaciones están garantizadas contra el propio inmueble, minimizando el riesgo al máximo.",
              },
              {
                icon: Users,
                title: "Personas",
                text: "Cada cliente cuenta con un agente dedicado desde el primer contacto hasta la firma en notaría.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-background p-8 rounded-lg text-left border border-border hover:border-teal transition group"
              >
                <div className="w-12 h-12 rounded-full bg-teal-deep flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-teal-deep transition">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-2xl text-teal-deep mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={teamImg}
            alt="Equipo Cisum reunido"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-lg shadow-2xl w-full h-[520px] object-cover order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">
              Nuestro método
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">
              En cuatro sencillos pasos
            </h2>
            <div className="mt-10 space-y-8">
              {[
                { n: "01", t: "Solicitud", d: "Solicita un estudio gratuito para analizar el tipo de necesidad que mejor se adapta a tus intereses." },
                { n: "02", t: "Estudio", d: "Nuestro agente te indicará la viabilidad y la documentación necesaria para el estudio definitivo." },
                { n: "03", t: "Propuesta", d: "Te haremos una oferta en base a tus necesidades y la propiedad." },
                { n: "04", t: "Firma", d: "Te acompañamos en todo el proceso hasta la firma en la notaría." },
              ].map((s) => (
                <div key={s.n} className="flex gap-6">
                  <span className="font-serif text-5xl text-gold leading-none">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-teal-deep">{s.t}</h3>
                    <p className="text-muted-foreground mt-2">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="bg-teal-deep text-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
              Nuestras ventajas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Confianza, rapidez y seguridad
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { t: "Exclusividad", s: "Atención personalizada", d: "Un agente dedicado a tu caso desde el inicio hasta el día de la firma." },
              { t: "Rapidez", s: "Estudio gratuito en 48 horas", d: "Respuesta de viabilidad sin compromiso. Solo cobramos si finalmente firmas.", icon: Clock },
              { t: "Seguridad", s: "20 años de experiencia", d: "Miles de clientes satisfechos avalan la eficacia de nuestro método." },
            ].map((v) => (
              <div key={v.t} className="border-t border-gold pt-6">
                <h3 className="font-serif text-3xl text-gold">{v.t}</h3>
                <p className="mt-2 font-medium">{v.s}</p>
                <p className="mt-4 text-white/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">
                Nuestros servicios
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">
                Soluciones a medida para cada cliente
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Grupo Cisum es sinónimo de garantía y eficacia. A través de
                nuestra experiencia ofrecemos diferentes servicios a nuestros
                clientes para resolver de forma óptima, eficiente y sin riesgos.
              </p>
              <Link
                to="/servicios"
                className="mt-8 inline-flex items-center gap-2 text-teal-deep font-medium hover:text-teal group"
              >
                Ver todos los servicios
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </Link>
            </div>
            <img
              src={servicesImg}
              alt="Firma de un contrato inmobiliario"
              width={1280}
              height={960}
              loading="lazy"
              className="rounded-lg shadow-2xl w-full h-[520px] object-cover"
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Venta de inmueble", d: "Adelantamos hasta el 50% del precio de venta." },
              { t: "Herencias", d: "Anticipamos los gastos para aceptar tu herencia." },
              { t: "Embargos", d: "Liquidamos embargos para facilitar la venta." },
              { t: "Renta vitalicia", d: "Recibe el importe completo en un solo pago." },
            ].map((s) => (
              <div
                key={s.t}
                className="p-6 rounded-lg border border-border hover:border-teal hover:shadow-lg transition"
              >
                <h3 className="font-serif text-xl text-teal-deep">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-teal-deep">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estudio gratuito y sin compromiso en 48 horas.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 bg-teal-deep text-white px-8 py-4 rounded-full hover:bg-teal transition"
          >
            Contactar ahora <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
