import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/contacto-interes")({
  head: () => ({
    meta: [
      { title: "Solicita información — Royal Group" },
      {
        name: "description",
        content:
          "Déjanos tus datos y descubre las oportunidades de inversión que mejor se adaptan a tus objetivos.",
      },
      {
        property: "og:title",
        content: "Descubre tu próxima oportunidad de inversión — Royal Group",
      },
      {
        property: "og:description",
        content:
          "Completa el formulario y un asesor especializado se pondrá en contacto contigo.",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: Contact,
});

const content = {
  es: {
    eyebrow: "Oportunidades de inversión",
    title: "Encuentra la inversión que mejor se adapta a ti",
    subtitle:
      "Déjanos tus datos y uno de nuestros asesores analizará tu perfil para presentarte oportunidades adaptadas a tus objetivos.",
    h2: "Habla con un asesor",
    contactText:
      "Completa el formulario y nuestro equipo se pondrá en contacto contigo para ofrecerte información personalizada y sin compromiso.",
    address: "Oficina",
    email: "Email",
    phone: "Teléfono",
    name: "Nombre y apellidos",
    emailField: "Correo electrónico",
    phoneField: "Teléfono",
    interest: "¿Qué opción te interesa?",
    selectPlaceholder: "Selecciona una opción",
    message: "¿Qué estás buscando?",
    send: "Quiero recibir información",
    thanks: "¡Solicitud recibida!",
    thanksSub:
      "Gracias por tu interés. Uno de nuestros asesores se pondrá en contacto contigo en un plazo de 48 a 72 horas.",
  },
  en: {
    eyebrow: "Investment opportunities",
    title: "Find the investment that best suits you",
    subtitle:
      "Leave us your details and one of our advisors will review your profile and present opportunities aligned with your goals.",
    h2: "Speak with an advisor",
    contactText:
      "Complete the form and our team will contact you with personalized, no-obligation information.",
    address: "Office",
    email: "Email",
    phone: "Phone",
    name: "Full name",
    emailField: "Email address",
    phoneField: "Phone",
    interest: "Which option are you interested in?",
    selectPlaceholder: "Select an option",
    message: "What are you looking for?",
    send: "I want more information",
    thanks: "Request received!",
    thanksSub:
      "Thank you for your interest. One of our advisors will contact you within 48 to 72 hours.",
  },
  fr: {
    eyebrow: "Opportunités d’investissement",
    title: "Trouvez l’investissement qui vous correspond",
    subtitle:
      "Laissez-nous vos coordonnées et l’un de nos conseillers analysera votre profil afin de vous proposer des opportunités adaptées.",
    h2: "Parlez à un conseiller",
    contactText:
      "Remplissez le formulaire et notre équipe vous contactera avec des informations personnalisées et sans engagement.",
    address: "Bureau",
    email: "E-mail",
    phone: "Téléphone",
    name: "Nom et prénom",
    emailField: "Adresse e-mail",
    phoneField: "Téléphone",
    interest: "Quelle option vous intéresse ?",
    selectPlaceholder: "Sélectionnez une option",
    message: "Que recherchez-vous ?",
    send: "Recevoir des informations",
    thanks: "Demande reçue !",
    thanksSub:
      "Merci pour votre intérêt. L’un de nos conseillers vous contactera sous 48 à 72 heures.",
  },
};

function Contact() {
  const [sent, setSent] = useState(false);
  const t = usePick(content);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-teal-deep">
              {t.h2}
            </h2>

            <p className="mt-4 text-muted-foreground">
              {t.contactText}
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-medium">{t.address}</p>
                  <p className="text-muted-foreground">
                    Av. Diagonal 407 1º 2ª, 08008 Barcelona
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-medium">{t.email}</p>
                  <p className="text-muted-foreground">
                    info@royalgroup.com
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-medium">{t.phone}</p>
                  <p className="text-muted-foreground">
                    +34 900 000 000
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-secondary p-8 rounded-lg space-y-4"
          >
            {sent ? (
              <div className="text-center py-16">
                <h3 className="font-serif text-2xl text-teal-deep">
                  {t.thanks}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {t.thanksSub}
                </p>
              </div>
            ) : (
              <>
                <input
                  type="hidden"
                  name="source"
                  value="contacto-interes"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 font-medium"
                  >
                    {t.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 font-medium"
                  >
                    {t.emailField}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm mb-2 font-medium"
                  >
                    {t.phoneField}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm mb-2 font-medium"
                  >
                    {t.interest}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal"
                  >
                    <option value="" disabled>
                      {t.selectPlaceholder}
                    </option>
                    <option value="opcion-1">Opción 1</option>
                    <option value="opcion-2">Opción 2</option>
                    <option value="opcion-3">Opción 3</option>
                    <option value="opcion-4">Opción 4</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 font-medium"
                  >
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-deep text-white py-4 rounded-full hover:bg-teal transition"
                >
                  {t.send}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}