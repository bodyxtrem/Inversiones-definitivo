import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePick } from "@/lib/lang";

const content = {
  es: {
    tagline: "Multifamily Office con más de 10 años de experiencia en el sector inmobiliario y legal.",
    nav: "Navegación",
    contact: "Contacto",
    links: [
      { to: "/sobre-nosotros", label: "Sobre nosotros" },
      { to: "/inversores", label: "Inversores" },
      { to: "/como-trabajamos", label: "Cómo trabajamos" },
      { to: "/servicios", label: "Servicios" },
      { to: "/contacto", label: "Contacto" },
    ],
    rights: "Todos los derechos reservados.",
  },
  en: {
    tagline: "Multifamily Office with over 20 years of experience in real estate and legal services.",
    nav: "Navigation",
    contact: "Contact",
    links: [
      { to: "/sobre-nosotros", label: "About us" },
      { to: "/inversores", label: "Investors" },
      { to: "/como-trabajamos", label: "How we work" },
      { to: "/servicios", label: "Services" },
      { to: "/contacto", label: "Contact" },
    ],
    rights: "All rights reserved.",
  },
  fr: {
    tagline: "Multifamily Office avec plus de 20 ans d'expérience dans l'immobilier et le juridique.",
    nav: "Navigation",
    contact: "Contact",
    links: [
      { to: "/sobre-nosotros", label: "À propos" },
      { to: "/inversores", label: "Investisseurs" },
      { to: "/como-trabajamos", label: "Notre méthode" },
      { to: "/servicios", label: "Services" },
      { to: "/contacto", label: "Contact" },
    ],
    rights: "Tous droits réservés.",
  },
};

export function SiteFooter() {
  const t = usePick(content);
  return (
    <footer className="bg-teal-deep text-white/85">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold font-serif">
              RG
            </span>
            <span className="font-serif text-xl tracking-widest">ROYAL GROUP</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-sm">{t.tagline}</p>
        </div>

        <div>
          <h3 className="font-serif text-xl text-gold mb-4">{t.nav}</h3>
          <ul className="space-y-2 text-sm">
            {t.links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-gold mb-4">{t.contact}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0" /> Av. Diagonal 407 1º 2ª, 08008 Barcelona</li>
            <li className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /> info@royalgroup.com</li>
            <li className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /> +34 900 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Royal Group. {t.rights}
      </div>
    </footer>
  );
}
