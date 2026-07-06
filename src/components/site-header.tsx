import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePick } from "@/lib/lang";
import { LanguageSwitcher } from "./language-switcher";

const navContent = {
  es: [
    { to: "/sobre-nosotros", label: "Sobre nosotros" },
    { to: "/inversores", label: "Inversores" },
    { to: "/como-trabajamos", label: "Cómo trabajamos" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto", label: "Contacto" },
  ],
  en: [
    { to: "/sobre-nosotros", label: "About us" },
    { to: "/inversores", label: "Investors" },
    { to: "/como-trabajamos", label: "How we work" },
    { to: "/servicios", label: "Services" },
    { to: "/contacto", label: "Contact" },
  ],
  fr: [
    { to: "/sobre-nosotros", label: "À propos" },
    { to: "/inversores", label: "Investisseurs" },
    { to: "/como-trabajamos", label: "Notre méthode" },
    { to: "/servicios", label: "Services" },
    { to: "/contacto", label: "Contact" },
  ],
};

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = usePick(navContent);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-teal-deep/95 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold font-serif text-lg">
          RG
          </span>
          <span className="font-serif text-xl tracking-widest">Royal GROUP</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-white/85 hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher className="pl-4 border-l border-white/15" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            className="text-white ml-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-teal-deep border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-white/90 py-2"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
