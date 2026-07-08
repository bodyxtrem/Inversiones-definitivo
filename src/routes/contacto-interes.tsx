import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/contacto-interes")({
  head: () => ({
    meta: [
      {
        title: "Solicita información — Royal Group",
      },
      {
        name: "description",
        content:
          "Solicita un estudio gratuito y sin compromiso. Un asesor de Royal Group contactará contigo en un plazo de 48 a 72 horas.",
      },
      {
        property: "og:title",
        content: "Solicita información — Royal Group",
      },
      {
        property: "og:description",
        content:
          "Cuéntanos tu caso y nuestro equipo estudiará la mejor solución para ti.",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: ContactoInteres,
});

const content = {
  es: {
    eyebrow: "Estudio gratuito",
    title: "Cuéntanos tu caso",
    subtitle:
      "Déjanos tus datos y analizaremos tu operación sin compromiso. Te responderemos en un plazo de 48 a 72 horas.",
    h2: "Información de contacto",
    address: "Dirección",
    email: "Email",
    phone: "Teléfono",
    name: "Nombre",
    message: "Cuéntanos brevemente tu caso",
    send: "Solicitar información",
    thanks: "¡Solicitud recibida!",
    thanksSub:
      "Hemos recibido tus datos. Un asesor se pondrá en contacto contigo en un plazo máximo de 48 a 72 horas.",
  },
  en: {
    eyebrow: "Free assessment",
    title: "Tell us about your case",
    subtitle:
      "Leave us your details and we will review your situation with no obligation. We will contact you within 48 to 72 hours.",
    h2: "Contact details",
    address: "Address",
    email: "Email",
    phone: "Phone",
    name: "Name",
    message: "Tell us briefly about your case",
    send: "Request information",
    thanks: "Request received!",
    thanksSub:
      "We have received your details. An advisor will contact you within 48 to 72 hours.",
  },
  fr: {
    eyebrow: "Étude gratuite",
    title: "Parlez-nous de votre situation",
    subtitle:
      "Laissez-nous vos coordonnées et nous étudierons votre situation sans engagement. Nous vous contacterons sous 48 à 72 heures.",
    h2: "Coordonnées",
    address: "Adresse",
    email: "E-mail",
    phone: "Téléphone",
    name: "Nom",
    message: "Décrivez-nous brièvement votre situation",
    send: "Demander des informations",
    thanks: "Demande reçue !",
    thanksSub:
      "Nous avons bien reçu vos coordonnées. Un conseiller vous contactera sous 48 à 72 heures.",
  },
};

function ContactoInteres() {
  const [sent, setSent] = useState(false);
  const t = usePick(content);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Aquí debes conectar el formulario con tu herramienta
     * de captación de leads antes de mostrar el mensaje de éxito.
     */

    setSent(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-teal-deep">
              {t.h2}
            </h2>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep text-gold">
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
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep text-gold">
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
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep text-gold">
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
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg bg-secondary p-8"
          >
            {sent ? (
              <div className="py-16 text-center">
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
                    htmlFor="lead-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t.name}
                  </label>

                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t.email}
                  </label>

                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t.phone}
                  </label>

                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-message"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t.message}
                  </label>

                  <textarea
                    id="lead-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-teal-deep py-4 text-white transition hover:bg-teal"
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
