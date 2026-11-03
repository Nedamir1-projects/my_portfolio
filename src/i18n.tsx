import { useState } from 'react'

export type Language = 'en' | 'ru' | 'kk'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('portfolio-language')
    return saved === 'ru' || saved === 'kk' ? saved : 'en'
  })

  const chooseLanguage = (next: Language) => {
    window.localStorage.setItem('portfolio-language', next)
    setLanguage(next)
  }

  return { language, chooseLanguage }
}

export function LanguageSwitch({ language, onChange }: { language: Language; onChange: (language: Language) => void }) {
  return <div className="language-switch" role="group" aria-label={tx(language, 'Choose language', 'Выбрать язык', 'Тілді таңдау')}>
    {(['en', 'ru', 'kk'] as const).map((code) => <button type="button" key={code} aria-pressed={language === code} onClick={() => onChange(code)}>{code === 'kk' ? 'ҚАЗ' : code.toUpperCase()}</button>)}
  </div>
}

export function tx(language: Language, en: string, ru: string, kk: string) {
  return language === 'ru' ? ru : language === 'kk' ? kk : en
}
