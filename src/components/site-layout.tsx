import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-teal-deep text-white pt-36 pb-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {eyebrow && (
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">{eyebrow}</p>
        )}
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
