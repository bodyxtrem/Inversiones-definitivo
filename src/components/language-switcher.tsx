import { useLang, type Lang } from "@/lib/lang";

const flags: { code: Lang; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {flags.map((f) => (
        <button
          key={f.code}
          onClick={() => setLang(f.code)}
          aria-label={f.label}
          title={f.label}
          className={`text-xl leading-none px-1.5 py-1 rounded transition ${
            lang === f.code
              ? "opacity-100 ring-1 ring-gold"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          <span aria-hidden>{f.flag}</span>
        </button>
      ))}
    </div>
  );
}
