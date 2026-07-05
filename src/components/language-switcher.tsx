import { useLang, type Lang } from "@/lib/lang";

const flags: { code: Lang; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "es" },
  { code: "en", label: "English", flag: "gb" },
  { code: "fr", label: "Français", flag: "fr" },
];

function FlagIcon({ code }: { code: string }) {
  const common = "w-6 h-4 rounded-sm shadow-sm object-cover";
  switch (code) {
    case "es":
      return (
        <svg viewBox="0 0 60 40" className={common} aria-hidden>
          <rect width="60" height="10" fill="#AA151B" />
          <rect y="10" width="60" height="20" fill="#F1BF00" />
          <rect y="30" width="60" height="10" fill="#AA151B" />
        </svg>
      );
    case "gb":
      return (
        <svg viewBox="0 0 60 40" className={common} aria-hidden>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="6" />
          <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      );
    case "fr":
      return (
        <svg viewBox="0 0 60 40" className={common} aria-hidden>
          <rect width="20" height="40" fill="#0055A4" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#EF4135" />
        </svg>
      );
    default:
      return null;
  }
}

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
          className={`px-1.5 py-1 rounded transition ${
            lang === f.code
              ? "opacity-100 ring-1 ring-gold"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          <FlagIcon code={f.flag} />
        </button>
      ))}
    </div>
  );
}

