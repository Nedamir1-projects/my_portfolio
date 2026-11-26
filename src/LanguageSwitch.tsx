import { tx, type Language } from "./language";

export function LanguageSwitch({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={tx(
        language,
        "Choose language",
        "Выбрать язык",
        "Тілді таңдау",
      )}
    >
      {(["en", "ru", "kk"] as const).map((code) => (
        <button
          type="button"
          key={code}
          aria-pressed={language === code}
          onClick={() => onChange(code)}
        >
          {code === "kk" ? "ҚАЗ" : code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
