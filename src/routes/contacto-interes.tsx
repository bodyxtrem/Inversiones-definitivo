import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/contacto-interes")({
  head: () => ({
    meta: [
      {
        title: "Oportunidades de inversión — Royal Group",
      },
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

    nameField: "Nombre y apellidos",
    emailField: "Correo electrónico",
    phoneField: "Teléfono",
    interestField: "¿Qué opción te interesa?",
    selectPlaceholder: "Selecciona una opción",
    messageField: "¿Qué estás buscando?",

    messageHint: "Escribe al menos 15 caracteres.",
    messageRequired: "Cuéntanos qué estás buscando.",
    messageMin: "Debes escribir al menos 15 caracteres.",

    send: "Quiero recibir información",
    sending: "Enviando...",

    thanks: "¡Solicitud recibida!",
    thanksSub:
      "Gracias por tu interés. Uno de nuestros asesores se pondrá en contacto contigo en un plazo de 48 a 72 horas.",

    submitError:
      "No hemos podido enviar la solicitud. Inténtalo de nuevo.",
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

    nameField: "Full name",
    emailField: "Email address",
    phoneField: "Phone",
    interestField: "Which option are you interested in?",
    selectPlaceholder: "Select an option",
    messageField: "What are you looking for?",

    messageHint: "Write at least 15 characters.",
    messageRequired: "Tell us what you are looking for.",
    messageMin: "You must write at least 15 characters.",

    send: "I want more information",
    sending: "Sending...",

    thanks: "Request received!",
    thanksSub:
      "Thank you for your interest. One of our advisors will contact you within 48 to 72 hours.",

    submitError:
      "We could not send your request. Please try again.",
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

    nameField: "Nom et prénom",
    emailField: "Adresse e-mail",
    phoneField: "Téléphone",
    interestField: "Quelle option vous intéresse ?",
    selectPlaceholder: "Sélectionnez une option",
    messageField: "Que recherchez-vous ?",

    messageHint: "Écrivez au moins 15 caractères.",
    messageRequired: "Expliquez-nous ce que vous recherchez.",
    messageMin: "Vous devez écrire au moins 15 caractères.",

    send: "Recevoir des informations",
    sending: "Envoi en cours...",

    thanks: "Demande reçue !",
    thanksSub:
      "Merci pour votre intérêt. L’un de nos conseillers vous contactera sous 48 à 72 heures.",

    submitError:
      "Nous n’avons pas pu envoyer votre demande. Réessayez.",
  },
};

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const t = usePick(content);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setSending(true);
    setSubmitError("");

    try {
      const formData = new FormData(form);

      const payload = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        interest: String(formData.get("interest") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
        source: String(formData.get("source") ?? "contacto-interes"),
      };

      if (
        !payload.name ||
        !payload.email ||
        !payload.phone ||
        !payload.interest ||
        !payload.message
      ) {
        throw new Error(t.submitError);
      }

      if (payload.message.length < 15) {
        throw new Error(t.messageMin);
      }

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || t.submitError);
      }

      form.reset();
      setSent(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : t.submitError,
      );
    } finally {
      setSending(false);
    }
  }

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
            onSubmit={handleSubmit}
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
                    {t.nameField}
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
                    {t.interestField}
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
                    {t.messageField}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={15}
                    aria-describedby="message-help"
                    onInput={(event) => {
                      const textarea = event.currentTarget;
                      const value = textarea.value.trim();

                      if (value.length === 0) {
                        textarea.setCustomValidity("");
                      } else if (value.length < 15) {
                        textarea.setCustomValidity(t.messageMin);
                      } else {
                        textarea.setCustomValidity("");
                      }
                    }}
                    onInvalid={(event) => {
                      const textarea = event.currentTarget;
                      const value = textarea.value.trim();

                      if (value.length === 0) {
                        textarea.setCustomValidity(t.messageRequired);
                      } else if (value.length < 15) {
                        textarea.setCustomValidity(t.messageMin);
                      }
                    }}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal"
                  />

                  <p
                    id="message-help"
                    className="mt-1 text-xs text-muted-foreground"
                  >
                    {t.messageHint}
                  </p>
                </div>

                {submitError && (
                  <p
                    role="alert"
                    aria-live="polite"
                    className="text-sm text-red-600"
                  >
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-teal-deep text-white py-4 rounded-full hover:bg-teal transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? t.sending : t.send}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}