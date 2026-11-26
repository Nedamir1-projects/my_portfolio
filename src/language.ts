export type Language = "en" | "ru" | "kk";
export type TranslatedCopy = readonly [
  english: string,
  russian: string,
  kazakh: string,
];

export function tx(language: Language, en: string, ru: string, kk: string) {
  return language === "ru" ? ru : language === "kk" ? kk : en;
}

export function translate(language: Language, [en, ru, kk]: TranslatedCopy) {
  return tx(language, en, ru, kk);
}
