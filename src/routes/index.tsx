import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Clock, ShieldCheck, TrendingUp, Users } from "lucide-react";
import heroImg from "@/assets/hero-skyscrapers.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import servicesImg from "@/assets/services.jpg";
import { SiteLayout } from "@/components/site-layout";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Group — Multifamily Office Inmobiliario en Barcelona" },
      { name: "description", content: "Más de 20 años ofreciendo soluciones inmobiliarias y financieras: adelantamos hasta el 50% del precio de venta, pagamos tu hipoteca y no cobras hasta vender." },
      { property: "og:title", content: "Royal Group — Multifamily Office" },
      { property: "og:description", content: "Soluciones inmobiliarias revolucionarias, efectivas y rápidas." },
    ],
  }),
  component: Home,
});

const content = {
  es: {
    eyebrow: "Grupo Royal",
    heroA: "Somos un",
    heroB: "multifamily office",
    heroSub: "Más de 20 años de experiencia acompañando a familias e inversores en el sector inmobiliario.",
    ctaContact: "Contactar",
    ctaServices: "Nuestros servicios",
    introEyebrow: "Más de 20 años de experiencia",
    introTitle: "No somos una agencia inmobiliaria cualquiera",
    introText: "En Royal Real Estate, además de nuestro departamento inmobiliario, contamos con un equipo legal con más de 20 años de experiencia en el sector. Ofrecemos soluciones revolucionarias, efectivas y rápidas.",
    bullets: [
      "Contrato de arras en 48 horas",
      "Adelantamos hasta el 50% del precio de venta",
      "Pagamos tu hipoteca mientras vendes",
      "Adelantamos los gastos de tu herencia",
    ],
    tagline: "Y no pagas hasta que vendas.",
    yearsLabel: "años acompañando a nuestros clientes",
    pillarsEyebrow: "Nuestros pilares",
    pillarsTitle: "En Grupo Royal, nuestra prioridad son las personas",
    pillars: [
      { title: "Rentabilidad", text: "Ofrecemos a nuestros inversores rentabilidades superiores al 20% con retornos en periodos no superiores a 12 meses." },
      { title: "Garantías", text: "Nuestras operaciones están garantizadas contra el propio inmueble, minimizando el riesgo al máximo." },
      { title: "Personas", text: "Cada cliente cuenta con un agente dedicado desde el primer contacto hasta la firma en notaría." },
    ],
    methodEyebrow: "Nuestro método",
    methodTitle: "En cuatro sencillos pasos",
    steps: [
      { t: "Solicitud", d: "Solicita un estudio gratuito para analizar el tipo de necesidad que mejor se adapta a tus intereses." },
      { t: "Estudio", d: "Nuestro agente te indicará la viabilidad y la documentación necesaria para el estudio definitivo." },
      { t: "Propuesta", d: "Te haremos una oferta en base a tus necesidades y la propiedad." },
      { t: "Firma", d: "Te acompañamos en todo el proceso hasta la firma en la notaría." },
    ],
    advEyebrow: "Nuestras ventajas",
    advTitle: "Confianza, rapidez y seguridad",
    advs: [
      { t: "Exclusividad", s: "Atención personalizada", d: "Un agente dedicado a tu caso desde el inicio hasta el día de la firma." },
      { t: "Rapidez", s: "Estudio gratuito en 48 horas", d: "Respuesta de viabilidad sin compromiso. Solo cobramos si finalmente firmas." },
      { t: "Seguridad", s: "20 años de experiencia", d: "Miles de clientes satisfechos avalan la eficacia de nuestro método." },
    ],
    servEyebrow: "Nuestros servicios",
    servTitle: "Soluciones a medida para cada cliente",
    servText: "Grupo Royal es sinónimo de garantía y eficacia. A través de nuestra experiencia ofrecemos diferentes servicios a nuestros clientes para resolver de forma óptima, eficiente y sin riesgos.",
    servLink: "Ver todos los servicios",
    servs: [
      { t: "Venta de inmueble", d: "Adelantamos hasta el 50% del precio de venta." },
      { t: "Herencias", d: "Anticipamos los gastos para aceptar tu herencia." },
      { t: "Embargos", d: "Liquidamos embargos para facilitar la venta." },
      { t: "Renta vitalicia", d: "Recibe el importe completo en un solo pago." },
    ],
    ctaTitle: "¿Hablamos de tu proyecto?",
    ctaSub: "Estudio gratuito y sin compromiso en 48 horas.",
    ctaBtn: "Contactar ahora",
  },
  en: {
    eyebrow: "Royal Group",
    heroA: "We are a",
    heroB: "multifamily office",
    heroSub: "Over 20 years of experience supporting families and investors in real estate.",
    ctaContact: "Contact us",
    ctaServices: "Our services",
    introEyebrow: "Over 20 years of experience",
    introTitle: "We're not your typical real estate agency",
    introText: "At Royal Real Estate, in addition to our real estate department, we have a legal team with over 20 years of experience. We offer revolutionary, effective and fast solutions.",
    bullets: [
      "Deposit contract in 48 hours",
      "We advance up to 50% of the sale price",
      "We pay your mortgage while you sell",
      "We advance the costs of your inheritance",
    ],
    tagline: "And you don't pay until you sell.",
    yearsLabel: "years supporting our clients",
    pillarsEyebrow: "Our pillars",
    pillarsTitle: "At Royal Group, people are our priority",
    pillars: [
      { title: "Profitability", text: "We offer our investors returns above 20% with payback in less than 12 months." },
      { title: "Guarantees", text: "Our operations are guaranteed against the property itself, minimizing risk." },
      { title: "People", text: "Each client has a dedicated agent from first contact through signing." },
    ],
    methodEyebrow: "Our method",
    methodTitle: "Four simple steps",
    steps: [
      { t: "Request", d: "Request a free study to analyze the solution that best fits your needs." },
      { t: "Study", d: "Our agent will review feasibility and the documentation required for the definitive study." },
      { t: "Proposal", d: "We'll make an offer tailored to your needs and the property." },
      { t: "Signing", d: "We accompany you throughout the process, up to signing at the notary." },
    ],
    advEyebrow: "Our advantages",
    advTitle: "Trust, speed and safety",
    advs: [
      { t: "Exclusivity", s: "Personalized service", d: "A dedicated agent for your case from start to signing day." },
      { t: "Speed", s: "Free study in 48 hours", d: "Feasibility answer with no commitment. We only charge if you sign." },
      { t: "Safety", s: "20 years of experience", d: "Thousands of satisfied clients back the effectiveness of our method." },
    ],
    servEyebrow: "Our services",
    servTitle: "Tailored solutions for every client",
    servText: "Royal Group means reliability and effectiveness. Through our experience we offer different services to our clients to solve their situations in the best possible way.",
    servLink: "See all services",
    servs: [
      { t: "Property sale", d: "We advance up to 50% of the sale price." },
      { t: "Inheritances", d: "We advance the costs to accept your inheritance." },
      { t: "Liens", d: "We settle liens to enable the sale." },
      { t: "Life annuity", d: "Receive the full amount in a single payment." },
    ],
    ctaTitle: "Shall we talk about your project?",
    ctaSub: "Free, no-obligation study in 48 hours.",
    ctaBtn: "Contact us now",
  },
  fr: {
    eyebrow: "Groupe Royal",
    heroA: "Nous sommes un",
    heroB: "multifamily office",
    heroSub: "Plus de 20 ans d'expérience aux côtés des familles et des investisseurs dans l'immobilier.",
    ctaContact: "Nous contacter",
    ctaServices: "Nos services",
    introEyebrow: "Plus de 20 ans d'expérience",
    introTitle: "Nous ne sommes pas une agence immobilière comme les autres",
    introText: "Chez Royal Real Estate, au-delà de notre département immobilier, nous disposons d'une équipe juridique forte de plus de 20 ans d'expérience. Nous offrons des solutions révolutionnaires, efficaces et rapides.",
    bullets: [
      "Compromis de vente en 48 heures",
      "Nous avançons jusqu'à 50 % du prix de vente",
      "Nous payons votre hypothèque pendant la vente",
      "Nous avançons les frais de votre succession",
    ],
    tagline: "Et vous ne payez rien tant que vous ne vendez pas.",
    yearsLabel: "années aux côtés de nos clients",
    pillarsEyebrow: "Nos piliers",
    pillarsTitle: "Chez Royal, notre priorité, ce sont les personnes",
    pillars: [
      { title: "Rentabilité", text: "Nous offrons à nos investisseurs des rendements supérieurs à 20 % avec un retour en moins de 12 mois." },
      { title: "Garanties", text: "Nos opérations sont garanties contre le bien lui-même, réduisant le risque au minimum." },
      { title: "Les personnes", text: "Chaque client bénéficie d'un agent dédié, du premier contact à la signature notariée." },
    ],
    methodEyebrow: "Notre méthode",
    methodTitle: "En quatre étapes simples",
    steps: [
      { t: "Demande", d: "Demandez une étude gratuite pour analyser la solution la mieux adaptée à vos besoins." },
      { t: "Étude", d: "Notre agent vous indiquera la faisabilité et les documents nécessaires à l'étude définitive." },
      { t: "Proposition", d: "Nous vous faisons une offre sur mesure selon vos besoins et le bien." },
      { t: "Signature", d: "Nous vous accompagnons tout au long du processus jusqu'à la signature chez le notaire." },
    ],
    advEyebrow: "Nos avantages",
    advTitle: "Confiance, rapidité et sécurité",
    advs: [
      { t: "Exclusivité", s: "Service personnalisé", d: "Un agent dédié à votre dossier, du début jusqu'au jour de la signature." },
      { t: "Rapidité", s: "Étude gratuite en 48 h", d: "Réponse de faisabilité sans engagement. Vous ne payez que si vous signez." },
      { t: "Sécurité", s: "20 ans d'expérience", d: "Des milliers de clients satisfaits attestent de l'efficacité de notre méthode." },
    ],
    servEyebrow: "Nos services",
    servTitle: "Des solutions sur mesure pour chaque client",
    servText: "Royal est synonyme de fiabilité et d'efficacité. Grâce à notre expérience, nous proposons différents services pour résoudre chaque situation de manière optimale.",
    servLink: "Voir tous les services",
    servs: [
      { t: "Vente d'un bien", d: "Nous avançons jusqu'à 50 % du prix de vente." },
      { t: "Successions", d: "Nous avançons les frais pour accepter votre succession." },
      { t: "Saisies", d: "Nous levons les saisies pour faciliter la vente." },
      { t: "Rente viagère", d: "Recevez la totalité en un seul versement." },
    ],
    ctaTitle: "Parlons de votre projet",
    ctaSub: "Étude gratuite et sans engagement en 48 heures.",
    ctaBtn: "Nous contacter",
  },
};

function Home() {
  const t = usePick(content);
  const pillarIcons = [TrendingUp, ShieldCheck, Users];
  const advIcons = [undefined, undefined, undefined];
  const stepNums = ["01", "02", "03", "04"];

  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img src={heroImg} alt="Skyline" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-teal-deep/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">{t.eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
            {t.heroA}<br />
            <span className="italic">{t.heroB}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">{t.heroSub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-gold text-teal-deep px-8 py-4 rounded-full font-medium hover:bg-gold/90 transition">
              {t.ctaContact} <ArrowRight size={18} />
            </Link>
            <Link to="/servicios" className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
              {t.ctaServices}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">{t.introEyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">{t.introTitle}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.introText}</p>
            <ul className="mt-8 space-y-3">
              {t.bullets.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="text-gold mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-serif italic text-2xl text-teal">{t.tagline}</p>
          </div>
          <div className="relative">
            <img src={realEstateImg} alt="" width={1280} height={960} loading="lazy" className="rounded-lg shadow-2xl w-full h-[520px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-teal-deep text-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-4xl text-gold">+20</p>
              <p className="text-sm mt-1">{t.yearsLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-secondary py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">{t.pillarsEyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-teal-deep">{t.pillarsTitle}</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {t.pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={p.title} className="bg-background p-8 rounded-lg text-left border border-border hover:border-teal transition group">
                  <div className="w-12 h-12 rounded-full bg-teal-deep flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-teal-deep transition">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-2xl text-teal-deep mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <img src={teamImg} alt="" width={1280} height={960} loading="lazy" className="rounded-lg shadow-2xl w-full h-[520px] object-cover order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">{t.methodEyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">{t.methodTitle}</h2>
            <div className="mt-10 space-y-8">
              {t.steps.map((s, i) => (
                <div key={s.t} className="flex gap-6">
                  <span className="font-serif text-5xl text-gold leading-none">{stepNums[i]}</span>
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
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">{t.advEyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t.advTitle}</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {t.advs.map((v, i) => {
              const Icon = advIcons[i];
              return (
                <div key={v.t} className="border-t border-gold pt-6">
                  {Icon ? <Icon className="text-gold mb-3" size={24} /> : null}
                  <h3 className="font-serif text-3xl text-gold">{v.t}</h3>
                  <p className="mt-2 font-medium">{v.s}</p>
                  <p className="mt-4 text-white/70 leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal uppercase tracking-[0.3em] text-xs mb-4">{t.servEyebrow}</p>
              <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">{t.servTitle}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{t.servText}</p>
              <Link to="/servicios" className="mt-8 inline-flex items-center gap-2 text-teal-deep font-medium hover:text-teal group">
                {t.servLink}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </Link>
            </div>
            <img src={servicesImg} alt="" width={1280} height={960} loading="lazy" className="rounded-lg shadow-2xl w-full h-[520px] object-cover" />
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.servs.map((s) => (
              <div key={s.t} className="p-6 rounded-lg border border-border hover:border-teal hover:shadow-lg transition">
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
          <h2 className="font-serif text-4xl md:text-5xl text-teal-deep">{t.ctaTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.ctaSub}</p>
          <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 bg-teal-deep text-white px-8 py-4 rounded-full hover:bg-teal transition">
            {t.ctaBtn} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
