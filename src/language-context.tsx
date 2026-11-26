/* eslint react-refresh/only-export-components: off -- provider and its context hook share one module. */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Language } from "./language";

type LanguageContextValue = {
  language: Language;
  chooseLanguage: (language: Language) => void;
};
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    return saved === "ru" || saved === "kk" ? saved : "en";
  });

  const chooseLanguage = (next: Language) => {
    window.localStorage.setItem("portfolio-language", next);
    setLanguage(next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo(() => ({ language, chooseLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
