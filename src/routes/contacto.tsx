import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { usePick } from "@/lib/lang";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Royal Group" },
      { name: "description", content: "Contacta con Royal Group y recibe un estudio gratuito y sin compromiso en un plazo de 48 a 72 horas." },
      { property: "og:title", content: "Contacto — Royal Group" },
      { property: "og:description", content: "Cuéntanos tu caso y encontraremos la mejor solución para ti." },
    ],
  }),
  component: Contact,
});

const content = {
  es: {
    eyebrow: "Contacto",
    title: "Cuéntanos tu caso",
    subtitle: "Analizamos tu operación sin compromiso y te respondemos en un plazo de 48 a 72 horas.",
    h2: "Información de contacto",
    address: "Dirección", email: "Email", phone: "Teléfono",
    name: "Nombre", message: "Mensaje", send: "Enviar mensaje",
    thanks: "¡Solicitud recibida!",
    thanksSub: "Hemos recibido tu solicitud. Un asesor se pondrá en contacto contigo en un plazo máximo de 48 a 72 horas.",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk about your project",
    subtitle: "Free, no-obligation study in 48 hours.",
    h2: "Contact details",
    address: "Address", email: "Email", phone: "Phone",
    name: "Name", message: "Message", send: "Send message",
    thanks: "Thank you!",
    thanksSub: "We've received your message. We'll get back to you within 48 hours.",
  },
  fr: {
    eyebrow: "Contact",
    title: "Parlons de votre projet",
    subtitle: "Étude gratuite et sans engagement en 48 heures.",
    h2: "Coordonnées",
    address: "Adresse", email: "E-mail", phone: "Téléphone",
    name: "Nom", message: "Message", send: "Envoyer le message",
    thanks: "Merci !",
    thanksSub: "Nous avons bien reçu votre message. Nous vous répondrons sous 48 heures.",
  },
};

function Contact() {
  const [sent, setSent] = useState(false);
  const t = usePick(content);
  return (
    <SiteLayout>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-teal-deep">{t.h2}</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-medium">{t.address}</p>
                  <p className="text-muted-foreground">Av. Diagonal 539, 1º 1ª, 08029 Barcelona</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-medium">{t.email}</p>
                  <p className="text-muted-foreground">info@royalgroup.com</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-medium">{t.phone}</p>
                  <p className="text-muted-foreground">+34 900 000 000</p>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-secondary p-8 rounded-lg space-y-4"
          >
            {sent ? (
              <div className="text-center py-16">
                <h3 className="font-serif text-2xl text-teal-deep">{t.thanks}</h3>
                <p className="mt-3 text-muted-foreground">{t.thanksSub}</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm mb-2 font-medium">{t.name}</label>
                  <input required className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">{t.email}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">{t.phone}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">{t.message}</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <button type="submit" className="w-full bg-teal-deep text-white py-4 rounded-full hover:bg-teal transition">
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