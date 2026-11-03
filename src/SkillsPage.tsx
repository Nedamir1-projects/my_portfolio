import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Braces, Code2, Database, GitBranch, Menu, Server, Sparkles, X } from 'lucide-react'
import { LanguageSwitch, tx, useLanguage } from './i18n'

const groups = [
  { title: 'Frontend', icon: <Code2 />, items: ['React', 'TypeScript'] },
  { title: 'Backend', icon: <Server />, items: ['Node.js'] },
  { title: 'Programming languages', icon: <Braces />, items: ['Python', 'Java'] },
  { title: 'Data & collaboration', icon: <Database />, items: ['PostgreSQL', 'GitHub'] },
]

const learning = [
  { number: '01', title: 'Application architecture', description: 'Organizing larger applications into clear, maintainable parts.' },
  { number: '02', title: 'APIs & integration', description: 'Connecting frontend applications with backend services and external APIs.' },
  { number: '03', title: 'Testing & quality', description: 'Building confidence in code through useful, focused testing.' },
  { number: '04', title: 'Deployment & operations', description: 'Learning how applications are shipped, monitored, and improved.' },
]

export default function SkillsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, chooseLanguage } = useLanguage()
  useEffect(() => {
    document.title = tx(language, 'Skills & Learning — Damir', 'Навыки и обучение — Дамир', 'Дағдылар және оқу — Дамир')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [language])

  return <>
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="Main navigation">
        <a className="wordmark" href="/" aria-label="Damir home">D<span>.</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="/#about">{tx(language, 'About', 'Обо мне', 'Мен туралы')}</a><a href="/skills" aria-current="page">{tx(language, 'Skills', 'Навыки', 'Дағдылар')}</a><a href="/#work">{tx(language, 'Work', 'Работы', 'Жұмыстар')}</a><a className="nav-contact" href="/#contact">{tx(language, 'Contact', 'Контакты', 'Байланыс')} <ArrowUpRight size={14} /></a><LanguageSwitch language={language} onChange={chooseLanguage} /></div>
        <a className="back-home" href="/"><ArrowLeft size={16} /><span>{tx(language, 'Home', 'Главная', 'Басты бет')}</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
    </header>

    <main className="skills-page">
      <section className="skills-hero">
        <div className="hero-grain" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" />
        <div className="skills-hero-inner">
          <div className="eyebrow hero-eyebrow"><span className="live-dot" /> {tx(language, 'SKILLS · LEARNING IN PUBLIC', 'НАВЫКИ · УЧУСЬ И ДЕЛЮСЬ', 'ДАҒДЫЛАР · ҮЙРЕНУ ЖОЛЫ')}</div>
          <h1>{tx(language, 'WHAT I', 'ЧТО Я', 'МЕН НЕ')}<br /><span>{tx(language, 'CAN BUILD.', 'УМЕЮ СОЗДАВАТЬ.', 'ЖАСАЙ АЛАМЫН.')}</span></h1>
          <p>{tx(language, 'A growing toolkit, built through study, practice, and curiosity. Here’s what I work with today—and where I’m headed next.', 'Мой набор инструментов растёт благодаря учёбе, практике и любознательности. Вот с чем я работаю сейчас и куда планирую двигаться дальше.', 'Оқу, тәжірибе және ізденіс арқылы құралдар қоржынымды дамытып келемін. Қазір қолданатыным және келесі үйренетінім осында.')}</p>
          <a className="skills-scroll" href="#toolkit">{tx(language, 'EXPLORE THE TOOLKIT', 'МОИ ИНСТРУМЕНТЫ', 'ҚҰРАЛДАРМЕН ТАНЫСУ')} <ArrowUpRight size={14} /></a>
        </div>
        <div className="skills-planet orb-stage" aria-hidden="true">
          <div className="orb-halo" />
          <div className="orb"><div className="orb-core" /><div className="orb-sheen" /><div className="orb-line orb-line-one" /><div className="orb-line orb-line-two" /></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orb-label"><span>{tx(language, 'BUILDING', 'СОЗДАЮ', 'ЖАСАЙМЫН')}</span><b>{tx(language, 'WHAT’S NEXT', 'БУДУЩЕЕ', 'БОЛАШАҚТЫ')}</b></div>
        </div>
      </section>

      <section className="toolkit-section section-pad" id="toolkit">
        <div className="section-kicker reveal"><span>01</span> / {tx(language, 'MY TOOLKIT', 'МОЙ СТЕК', 'ҚҰРАЛДАРЫМ')}</div>
        <div className="section-heading reveal"><h2>{tx(language, 'Tools I use.', 'Инструменты, с которыми работаю.', 'Қолданатын құралдарым.')}<br /><em>{tx(language, 'Foundations I grow.', 'База, которую развиваю.', 'Дамытып жүрген негіздерім.')}</em></h2><p>{tx(language, 'Technologies I’m familiar with, organized by the kind of work they support.', 'Технологии, с которыми я работаю, сгруппированы по задачам.', 'Қолданып жүрген технологияларым жұмыс бағытына қарай топтастырылды.')}</p></div>
        <div className="toolkit-grid">{groups.map((group, i) => <article className="toolkit-card glass reveal" key={group.title} style={{ transitionDelay: `${i * 90}ms` }}><div className="toolkit-card-head"><span>0{i + 1}</span>{group.icon}</div><h3>{tx(language, group.title, ['Фронтенд', 'Бэкенд', 'Языки программирования', 'Данные и совместная работа'][i], ['Фронтенд', 'Бэкенд', 'Бағдарламалау тілдері', 'Деректер және бірлескен жұмыс'][i])}</h3><div className="toolkit-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        <p className="toolkit-foot reveal">{tx(language, 'A practical skill set in progress—not a measure of mastery.', 'Практический набор навыков, который продолжает развиваться.', 'Бұл — әлі де дамып келе жатқан тәжірибелік дағдылар жиынтығы.')}</p>
      </section>

      <section className="learning-section section-pad">
        <div className="section-kicker reveal"><span>02</span> / {tx(language, 'NEXT IN THE PROCESS', 'СЛЕДУЮЩИЕ ШАГИ', 'КЕЛЕСІ ҚАДАМДАР')}</div>
        <div className="learning-intro reveal"><div><h2>{tx(language, 'What I’m', 'Что я буду', 'Алда нені')}<br /><em>{tx(language, 'learning next.', 'изучать дальше.', 'үйренемін.')}</em></h2></div><p>{tx(language, 'As my projects grow, I want to understand more of the systems behind them. These are the areas I’m working toward.', 'По мере роста проектов хочу лучше понимать системы, которые за ними стоят. Вот направления, которые планирую изучать дальше.', 'Жобаларым күрделенген сайын олардың артындағы жүйелерді тереңірек түсінгім келеді. Келесі үйренетін бағыттарым:')}</p></div>
        <div className="learning-list">{learning.map((item, i) => <article className="learning-row reveal" key={item.number} style={{ transitionDelay: `${i * 70}ms` }}><span className="learning-number">{item.number}</span><h3>{tx(language, item.title, ['Архитектура приложений', 'API и интеграции', 'Тестирование и качество', 'Развёртывание и эксплуатация'][i], ['Қолданба архитектурасы', 'API және интеграция', 'Тестілеу және сапа', 'Орналастыру және пайдалану'][i])}</h3><p>{tx(language, item.description, ['Структура крупных приложений: понятные и удобные для поддержки части.', 'Связь интерфейсов с серверными сервисами и внешними API.', 'Как повышать надёжность кода с помощью полезных и точечных тестов.', 'Как выпускать, отслеживать и улучшать приложения.'][i], ['Ірі қолданбаларды түсінікті әрі қолдауға ыңғайлы бөліктерге бөлу.', 'Интерфейстерді серверлік қызметтермен және сыртқы API-мен байланыстыру.', 'Пайдалы әрі нақты тестілер арқылы кодқа сенімділікті арттыру.', 'Қолданбаларды жариялау, бақылау және жетілдіру.'][i])}</p><ArrowUpRight className="learning-arrow" size={16} /></article>)}</div>
      </section>

        <section className="skills-end section-pad"><div className="section-kicker reveal"><span>03</span> / {tx(language, 'KEEP MOVING', 'ДВИГАЮСЬ ДАЛЬШЕ', 'АЛҒА ҚАДАМ')}</div><div className="skills-end-main reveal"><Sparkles /><h2>{tx(language, 'Progress over', 'Важен путь,', 'Үдеріс маңызды,')}<br /><em>{tx(language, 'perfection.', 'а не идеал.', 'мінсіздік емес.')}</em></h2><p>{tx(language, 'Every new concept is another tool for making something useful. I’m here to keep learning and put it into practice.', 'Каждая новая идея — ещё один инструмент для создания полезных вещей. Продолжаю учиться и применять знания на практике.', 'Әрбір жаңа ұғым пайдалы нәрсе жасауға арналған тағы бір құрал. Үйреніп, білімімді тәжірибеде қолдануды жалғастырамын.')}</p><a className="contact-button" href="/#work">{tx(language, 'See selected work', 'Посмотреть работы', 'Жұмыстарды көру')} <ArrowUpRight size={17} /></a></div><div className="skills-footer"><span>© {new Date().getFullYear()} DAMIR</span><span>{tx(language, 'IITU · ALMATY, KAZAKHSTAN', 'IITU · АЛМАТЫ, КАЗАХСТАН', 'IITU · АЛМАТЫ, ҚАЗАҚСТАН')}</span><a href="/" aria-label={tx(language, 'Back to portfolio home', 'На главную', 'Басты бетке оралу')}><GitBranch size={15} /></a></div></section>
    </main>
  </>
}
