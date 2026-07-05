import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-teal-deep text-white/85">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold font-serif">
              CG
            </span>
            <span className="font-serif text-xl tracking-widest">CISUM GROUP</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-sm">
            Multifamily office con más de 20 años de experiencia en el sector
            inmobiliario y legal.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl text-gold mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre-nosotros" className="hover:text-gold">Sobre nosotros</Link></li>
            <li><Link to="/inversores" className="hover:text-gold">Inversores</Link></li>
            <li><Link to="/como-trabajamos" className="hover:text-gold">Cómo trabajamos</Link></li>
            <li><Link to="/servicios" className="hover:text-gold">Servicios</Link></li>
            <li><Link to="/contacto" className="hover:text-gold">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-gold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0" /> Av. Diagonal 407 1º 2ª, 08008 Barcelona</li>
            <li className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /> info@cisumgroup.com</li>
            <li className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /> +34 900 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Cisum Group. Todos los derechos reservados.
      </div>
    </footer>
  );
}
