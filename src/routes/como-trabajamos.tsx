import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { usePick } from "@/lib/lang";
import { FileText, Search, Handshake, PenLine, Clock3, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/como-trabajamos")({
  head: () => ({
    meta: [
      { title: "Cómo trabajamos — Royal Group" },
      { name: "description", content: "Conoce nuestro proceso en cuatro pasos para ofrecer soluciones inmobiliarias y financieras de forma ágil y segura." },
      { property: "og:title", content: "Cómo trabajamos — Royal Group" },
      { property: "og:description", content: "Un proceso transparente, seguro y diseñado para proteger tus intereses." },
    ],
  }),
  component: How,
});

const content = {
  es: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso claro en cuatro pasos",
    subtitle: "Te acompañamos desde el primer contacto hasta la firma ante notario con un proceso ágil, transparente y totalmente personalizado.",
    stepLabel: (i: number, total: number) => `Paso ${i} de ${total}`,
    steps: [
      { t: "Solicitud", d: "Solicita un estudio gratuito para que podamos analizar tu situación y ofrecerte la solución más adecuada." },
      { t: "Estudio", d: "Nuestro equipo analizará la viabilidad de la operación y revisará toda la documentación necesaria para elaborar una propuesta." },
      { t: "Propuesta personalizada", d: "Recibirás una propuesta personalizada, ajustada a tus necesidades y al valor real de tu inmueble." },
      { t: "Firma ante notario", d: "Te acompañamos en cada etapa del proceso hasta la firma ante notario con todas las garantías legales." },
    ],
  },
  en: {
    eyebrow: "Our method",
    title: "Four simple steps",
    subtitle: "A clear, transparent process, from first contact to signing at the notary.",
    stepLabel: (i: number, total: number) => `Step ${i} of ${total}`,
    steps: [
      { t: "Request", d: "Request a free study to analyze the solution that best fits your needs." },
      { t: "Study", d: "Our agent will review feasibility and the documentation required for the definitive study." },
      { t: "Proposal", d: "We'll make you an offer tailored to your needs and the property." },
      { t: "Signing", d: "We accompany you throughout the process, up to signing at the notary." },
    ],
  },
  fr: {
    eyebrow: "Notre méthode",
    title: "En quatre étapes simples",
    subtitle: "Un processus clair et transparent, du premier contact à la signature notariée.",
    stepLabel: (i: number, total: number) => `Étape ${i} sur ${total}`,
    steps: [
      { t: "Demande", d: "Demandez une étude gratuite pour analyser la solution la mieux adaptée à vos besoins." },
      { t: "Étude", d: "Notre agent vous indiquera la faisabilité et les documents nécessaires à l'étude définitive." },
      { t: "Proposition", d: "Nous vous faisons une offre sur mesure selon vos besoins et le bien." },
      { t: "Signature", d: "Nous vous accompagnons jusqu'à la signature chez le notaire." },
    ],
  },
};

const numbers = ["1","2","3","4"];
const icons=[FileText,Search,Handshake,PenLine];
const times=["5 minutos","24-48 horas","24 horas","Según disponibilidad"];

function How() {
  const t = usePick(content);
  return (
    <SiteLayout>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <section className="py-20 px-6">
<div className="mx-auto max-w-5xl">
<div className="bg-secondary rounded-2xl p-8 mb-16 border border-border">
<p className="flex items-center gap-3 text-lg"><Clock3 className="text-gold"/>En menos de <strong>72 horas</strong> sabrás si tu operación es viable y recibirás una propuesta personalizada.</p>
</div>
<div className="relative border-l-2 border-gold/40 ml-8">
{t.steps.map((s,i)=>{const Icon=icons[i]; return (
<div key={s.t} className="relative pl-16 pb-10">
<div className="absolute -left-8 top-2 w-14 h-14 rounded-full bg-gold text-white flex items-center justify-center font-serif text-2xl">{numbers[i]}</div>
<div className="rounded-xl border border-border bg-secondary p-8 shadow-sm hover:shadow-xl transition">
<div className="flex justify-between items-start gap-6 flex-wrap">
<div className="flex gap-5">
<div className="w-16 h-16 rounded-full bg-background flex items-center justify-center"><Icon className="text-teal-deep"/></div>
<div><h3 className="font-serif text-2xl text-teal-deep">{s.t}</h3><p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p></div>
</div>
<div className="text-right min-w-[140px]"><p className="text-gold font-medium">{times[i]}</p><p className="text-sm text-teal mt-2">{t.stepLabel(i+1,t.steps.length)}</p></div>
</div>
</div>
</div>)})}
</div>
<div className="mt-16 rounded-2xl bg-secondary border border-border p-10 text-center">
<div className="flex justify-center gap-10 mb-6 flex-wrap">
<div className="flex items-center gap-2"><Users className="text-gold"/><span>Más de 20 años de experiencia</span></div>
<div className="flex items-center gap-2"><ShieldCheck className="text-gold"/><span>Operaciones con garantías reales</span></div>
</div>
<h2 className="font-serif text-4xl text-teal-deep">¿Empezamos?</h2>
<p className="mt-4 text-muted-foreground">Solicita un estudio gratuito y recibe una respuesta en un plazo de 48 a 72 horas.</p>
<a href="/contacto" className="inline-flex mt-8 bg-teal-deep text-white px-8 py-4 rounded-full hover:bg-teal transition">Solicitar estudio gratuito</a>
</div>
</div>
</section>
    </SiteLayout>
  );
}


Test123