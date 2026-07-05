import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Cisum Group" },
      { name: "description", content: "Contacta con Cisum Group en Barcelona. Estudio gratuito y sin compromiso en 48 horas." },
      { property: "og:title", content: "Contacto — Cisum Group" },
      { property: "og:description", content: "Hablemos de tu proyecto." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu proyecto"
        subtitle="Estudio gratuito y sin compromiso en 48 horas."
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl text-teal-deep">Datos de contacto</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-muted-foreground">Av. Diagonal 407 1º 2ª, 08008 Barcelona</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@cisumgroup.com</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-12 h-12 rounded-full bg-teal-deep text-gold flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-muted-foreground">+34 900 000 000</p>
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
                <h3 className="font-serif text-3xl text-teal-deep">¡Gracias!</h3>
                <p className="mt-3 text-muted-foreground">Hemos recibido tu mensaje. Te contactaremos en menos de 48 horas.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm mb-2 font-medium">Nombre</label>
                  <input required className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">Mensaje</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-teal" />
                </div>
                <button type="submit" className="w-full bg-teal-deep text-white py-4 rounded-full hover:bg-teal transition">
                  Enviar mensaje
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
