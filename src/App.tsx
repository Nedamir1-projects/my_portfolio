import { useEffect, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import SkillsPage from './SkillsPage'
import { LanguageSwitch, tx, useLanguage } from './i18n'

const journey = [
  {
    number: '01', title: ['Curiosity', 'Интерес', 'Қызығушылық'],
    text: ['It started with a simple curiosity about how technology works and how things are made.', 'Всё началось с простого интереса к тому, как работают технологии и как создаются цифровые продукты.', 'Барлығы технологияның қалай жұмыс істейтініне және цифрлық өнімдердің қалай жасалатынына деген қызығушылықтан басталды.'],
    tags: [],
  },
  {
    number: '02', title: ['Algoritmika', 'Алгоритмика', 'Алгоритмика'],
    text: ['At programming school Algoritmika, I learned design, HTML, CSS, JavaScript, and Python.', 'В школе программирования Algoritmika я изучил дизайн, HTML, CSS, JavaScript и Python.', 'Algoritmika бағдарламалау мектебінде дизайн, HTML, CSS, JavaScript және Python тілдерін үйрендім.'],
    tags: ['Design', 'HTML', 'CSS', 'JavaScript', 'Python'],
  },
  {
    number: '03', title: ['IITU', 'IITU', 'IITU'],
    text: ['At IITU, I continued my studies with Java and Power BI.', 'В IITU продолжил обучение и изучил Java и Power BI.', 'IITU-де оқуымды жалғастырып, Java және Power BI үйрендім.'],
    tags: ['Java', 'Power BI'],
  },
]

const projects = [
  {
    number: '01', name: 'discord_event', kind: ['DISCORD BOT SYSTEM', 'СИСТЕМА DISCORD-БОТОВ', 'DISCORD БОТТАР ЖҮЙЕСІ'],
    description: ['A pair of Discord bots for server economy and event management, backed by shared business logic and persistent data.', 'Два Discord-бота для игровой экономики и управления событиями. Общая бизнес-логика, PostgreSQL и админ-инструменты.', 'Сервер экономикасы мен іс-шараларын басқаруға арналған екі Discord-бот. Ортақ логика және PostgreSQL дерекқоры.'],
    stack: ['TypeScript', 'Node.js', 'Discord.js', 'Prisma', 'PostgreSQL'], href: 'https://github.com/Nedamir1-projects/discord_event', visual: 'project-terminal',
  },
  {
    number: '02', name: 'Wordly', kind: ['WORD GUESSING GAME', 'ИГРА В СЛОВА', 'СӨЗ ОЙЫНЫ'],
    description: ['A Wordle-inspired desktop game with keyboard input, colored letter hints, and a built-in word dictionary.', 'Настольная игра в духе Wordle: ввод с клавиатуры, цветовые подсказки и встроенный словарь слов.', 'Wordle стиліндегі үстел ойыны: пернетақтадан енгізу, түсті ишаралар және сөздік.'],
    stack: ['Python', 'Pygame', 'JSON'], href: 'https://github.com/Nedamir1-projects/Wordly', visual: 'project-wordly',
  },
  {
    number: '03', name: 'JavaTimer', kind: ['STUDY PRODUCTIVITY APP', 'ПРИЛОЖЕНИЕ ДЛЯ УЧЁБЫ', 'ОҚУҒА АРНАЛҒАН ҚОСЫМША'],
    description: ['A student dashboard combining a Pomodoro timer, task list, completed-session log, and daily study stats.', 'Учебный дашборд с Pomodoro-таймером, списком задач, журналом сессий и дневной статистикой.', 'Pomodoro таймері, тапсырмалар тізімі, оқу сессияларының журналы және күндік статистикасы бар студенттік дашборд.'],
    stack: ['Java', 'JavaFX', 'Maven', 'JSON'], href: 'https://github.com/Nedamir1-projects/JavaTimer', visual: 'project-timer',
  },
  {
    number: '04', name: 'CoursePlatform', kind: ['ONLINE LEARNING PLATFORM', 'ПЛАТФОРМА ОНЛАЙН-ОБУЧЕНИЯ', 'ОНЛАЙН ОҚУ ПЛАТФОРМАСЫ'],
    description: ['A course discovery frontend with category browsing, individual course pages, and a personal study area.', 'Фронтенд-платформа для поиска и просмотра курсов: категории, страницы курсов и личный раздел обучения.', 'Курстарды іздеуге және көруге арналған фронтенд: санаттар, курс беттері және жеке оқу бөлімі.'],
    stack: ['React', 'React Router', 'JavaScript', 'CSS', 'Create React App'], href: 'https://github.com/Nedamir1-projects/CoursePlatform', visual: 'project-course',
  },
  {
    number: '05', name: 'Django_books', kind: ['ONLINE LIBRARY · DJANGO', 'ОНЛАЙН-БИБЛИОТЕКА · DJANGO', 'ОНЛАЙН КІТАПХАНА · DJANGO'],
    description: ['A Django-powered library with book search and genre filters, reading lists, bookmarks for signed-in users, and a REST API.', 'Онлайн-библиотека на Django: поиск и фильтрация книг по жанрам, список «Читаю», закладки для авторизованных пользователей и REST API.', 'Django негізіндегі онлайн кітапхана: кітап іздеу және жанр бойынша сүзу, оқу тізімі, тіркелген пайдаланушыларға бетбелгілер және REST API.'],
    stack: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'Requests'], href: 'https://github.com/Nedamir1-projects/Django_books', visual: 'project-library',
  },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function App() {
  const isSkillsPage = window.location.pathname.replace(/\/+$/, '') === '/skills'
  return isSkillsPage ? <SkillsPage /> : <PortfolioPage />
}

function AlmatyClock() {
  const { language } = useLanguage()
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const formatter = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Almaty', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23', timeZoneName: 'shortOffset' })
  const parts = Object.fromEntries(formatter.formatToParts(now).map((part) => [part.type, part.value]))
  const hour = Number(parts.hour)
  const minute = Number(parts.minute)
  const second = Number(parts.second)
  const date = new Intl.DateTimeFormat(language === 'ru' ? 'ru-RU' : language === 'kk' ? 'kk-KZ' : 'en-GB', { timeZone: 'Asia/Almaty', weekday: 'short', day: '2-digit', month: 'short' }).format(now)
  const dayProgress = ((hour * 3600 + minute * 60 + second) / 86400) * 100

  return <div className="hero-clock" role="group" aria-label={tx(language, 'Live local time in Almaty', 'Текущее время в Алматы', 'Алматыдағы ағымдағы уақыт')}>
    <div className="clock-heading"><span><i /> {tx(language, 'LIVE FROM ALMATY', 'НА СВЯЗИ ИЗ АЛМАТЫ', 'АЛМАТЫДАН ТІКЕЛЕЙ')}</span><span>{parts.timeZoneName}</span></div>
    <div className="clock-main"><span className="clock-hours">{parts.hour}:{parts.minute}</span><span className="clock-seconds" key={parts.second}>{parts.second}</span></div>
    <div className="clock-details"><span>{tx(language, 'LOCAL TIME', 'МЕСТНОЕ ВРЕМЯ', 'ЖЕРГІЛІКТІ УАҚЫТ')}</span><span>{date.toUpperCase()}</span></div>
    <div className="clock-day"><div className="clock-day-label"><span>{tx(language, 'A DAY IN PROGRESS', 'ДЕНЬ В ПРОЦЕССЕ', 'КҮН ЖАЛҒАСУДА')}</span><span>{String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}</span></div><div className="clock-day-track"><i style={{ width: `${dayProgress}%` }} /></div><div className="clock-day-scale"><span>00:00</span><span>24:00</span></div></div>
    <div className="clock-focus"><span>{tx(language, 'CURRENT RHYTHM', 'МОЙ РИТМ СЕЙЧАС', 'ҚАЗІРГІ ЫРҒАҒЫМ')}</span><b>{tx(language, 'LEARNING · BUILDING · REFINING', 'УЧУСЬ · СОЗДАЮ · СОВЕРШЕНСТВУЮ', 'ҮЙРЕНУ · ЖАСАУ · ЖЕТІЛДІРУ')}</b></div>
  </div>
}

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeJourney, setActiveJourney] = useState(1)
  const { language, chooseLanguage } = useLanguage()
  useReveal()

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const range = document.documentElement.scrollHeight - window.innerHeight
        document.documentElement.style.setProperty('--scroll-progress', `${range > 0 ? window.scrollY / range * 100 : 0}%`)
      })
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.hero')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const moveOrb = (event: PointerEvent) => {
      if (!hero) return
      const bounds = hero.getBoundingClientRect()
      hero.style.setProperty('--pointer-x', `${(event.clientX - bounds.left) / bounds.width - .5}`)
      hero.style.setProperty('--pointer-y', `${(event.clientY - bounds.top) / bounds.height - .5}`)
    }
    const moveSpotlight = (event: PointerEvent) => {
      const card = (event.target as HTMLElement).closest<HTMLElement>('.focus-card, .journey-card, .work-feature, .project-card')
      if (!card) return
      const bounds = card.getBoundingClientRect()
      card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`)
      card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`)
    }
    hero?.addEventListener('pointermove', moveOrb)
    document.addEventListener('pointermove', moveSpotlight)
    return () => {
      hero?.removeEventListener('pointermove', moveOrb)
      document.removeEventListener('pointermove', moveSpotlight)
    }
  }, [])

  useEffect(() => { document.title = tx(language, 'Damir — Software Engineer', 'Дамир — Software инженер', 'Дамир — Software инженер') }, [language])

  const closeMenu = () => setMenuOpen(false)
  return <>
    <header className="nav-wrap">
      <div className="reading-progress" aria-hidden="true" />
      <nav className="nav glass" aria-label="Main navigation">
        <a className="wordmark" href="/" onClick={closeMenu} aria-label="Damir home">D<span>.</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="/#about" onClick={closeMenu}>{tx(language, 'About', 'Обо мне', 'Мен туралы')}</a><a href="/#focus" onClick={closeMenu}>{tx(language, 'Focus', 'Фокус', 'Бағыт')}</a><a href="/skills" onClick={closeMenu}>{tx(language, 'Skills', 'Навыки', 'Дағдылар')}</a><a href="/#work" onClick={closeMenu}>{tx(language, 'Work', 'Работы', 'Жұмыстар')}</a>
          <a className="nav-contact" href="/#contact" onClick={closeMenu}>{tx(language, 'Get in touch', 'Связаться', 'Байланысу')} <ArrowUpRight size={14} /></a><LanguageSwitch language={language} onChange={chooseLanguage} />
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow"><span className="live-dot" /> {tx(language, 'COMPUTER SCIENCE · ALMATY, KZ', 'КОМПЬЮТЕРНЫЕ НАУКИ · АЛМАТЫ, KZ', 'КОМПЬЮТЕРЛІК ҒЫЛЫМ · АЛМАТЫ, KZ')}</div>
          <h1>{tx(language, 'SOFTWARE', 'SOFTWARE', 'SOFTWARE')}<br /><span>{tx(language, 'ENGINEER', 'ИНЖЕНЕР', 'ИНЖЕНЕР')}</span><sup>®</sup></h1>
          <div className="hero-bottom">
            <p className="hero-intro">{tx(language, 'A Computer Science student at', 'Изучаю компьютерные науки в', 'Компьютерлік ғылымдар мамандығы бойынша оқимын:')} <strong>IITU</strong>{tx(language, ', exploring the craft of building thoughtful software.', ', и осваиваю искусство создания продуманного ПО.', ' университетінде, ойластырылған бағдарламалық өнім жасауды үйреніп жүрмін.')}</p>
            <a href="#work" className="round-cta" aria-label={tx(language, 'Explore selected work', 'Посмотреть работы', 'Жұмыстарды көру')}><ArrowDown size={19} /></a>
          </div>
        </div>
        <AlmatyClock />
        <div className="hero-index"><span>01 / 04</span><span>{tx(language, 'SCROLL TO EXPLORE', 'ЛИСТАЙТЕ ДАЛЬШЕ', 'ӘРІ ҚАРАЙ ЖЫЛЖЫҢЫЗ')}</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker reveal"><span>01</span> / {tx(language, 'A LITTLE ABOUT ME', 'НЕМНОГО ОБО МНЕ', 'ӨЗІМ ТУРАЛЫ')}</div>
        <div className="intro-layout">
          <h2 className="reveal">{tx(language, 'Curious by nature.', 'Любопытство — в характере.', 'Ізденіс — табиғатымда.')}<br /><em>{tx(language, 'Engineer by intent.', 'Инженер — мой осознанный выбор.', 'Инженер болу — саналы таңдауым.')}</em></h2>
          <div className="intro-copy reveal"><p>{tx(language, 'I’m Damir, a Computer Science student at IITU in Almaty. I’m drawn to the space where good design meets good engineering: interfaces that feel effortless, backed by systems that make sense.', 'Я Дамир, студент направления «Компьютерные науки» в IITU, Алматы. Мне интересно, как хороший дизайн сочетается с инженерным подходом: простые в использовании интерфейсы и продуманные системы.', 'Мен Дамирмін, Алматыдағы IITU-дың компьютерлік ғылымдар мамандығының студентімін. Жақсы дизайн мен инженерлік ойлау ұштасатын тұс қызықтырады: қолдануға жеңіл интерфейстер мен жүйелі шешімдер.')}</p><p>{tx(language, 'Right now, I’m learning, building, and steadily broadening my view of software. The goal is simple: become the kind of engineer who can turn a considered idea into something real.', 'Сейчас я учусь, создаю проекты и постепенно расширяю понимание разработки. Моя цель — стать инженером, который умеет превращать продуманные идеи в работающие продукты.', 'Қазір үйреніп, жобалар жасап, бағдарламалық қамту туралы түсінігімді кеңейтіп жүрмін. Мақсатым — ойластырылған идеяны нақты өнімге айналдыра алатын инженер болу.')}</p><a className="text-link" href="#contact">{tx(language, 'A little more about my journey', 'Продолжим знакомство', 'Жолым туралы толығырақ')} <ArrowDownRight size={17} /></a></div>
        </div>
        <div className="about-foot reveal"><span>{tx(language, 'BASED IN ALMATY, KAZAKHSTAN', 'ЖИВУ В АЛМАТЫ, КАЗАХСТАН', 'АЛМАТЫ, ҚАЗАҚСТАН')}</span><span className="about-line" /><span>{tx(language, 'STUDENT · BUILDER · IN PROGRESS', 'СТУДЕНТ · СОЗДАЮ · РАСТУ', 'СТУДЕНТ · ЖАСАУШЫ · ДАМУ ҮСТІНДЕ')}</span></div>
      </section>

      <section className="focus section-pad" id="focus">
        <div className="section-kicker reveal"><span>02</span> / {tx(language, 'MY PATH', 'МОЙ ПУТЬ', 'МЕНІҢ ЖОЛЫМ')}</div>
        <div className="section-heading reveal"><h2>{tx(language, 'From curiosity', 'От интереса', 'Қызығушылықтан')}<br /><em>{tx(language, 'to code.', 'к коду.', 'кодқа.')}</em></h2><p>{tx(language, 'Each step introduced me to new ways of turning ideas into something real.', 'Каждый этап открывал мне новые способы превращать идеи в реальные проекты.', 'Әр кезең идеяларды нақты жобаға айналдырудың жаңа жолдарын ашты.')}</p></div>
        <div className="journey-experience reveal">
          <div className="journey-track" role="group" aria-label={tx(language, 'Milestones in my learning journey', 'Этапы моего пути в обучении', 'Оқу жолымның кезеңдері')}>
            <svg className="journey-route" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true"><path className="journey-route-glow" d="M70 165 C220 165 260 55 500 55 C740 55 780 165 930 165"/><path className="journey-route-line" d="M70 165 C220 165 260 55 500 55 C740 55 780 165 930 165"/></svg>
            {journey.map((step, i) => <button className={`journey-stop journey-stop-${i + 1} ${activeJourney === i ? 'active' : ''}`} key={step.number} style={{ left: `${[7, 50, 93][i]}%`, top: `${[75, 25, 75][i]}%` }} onMouseEnter={() => setActiveJourney(i)} onFocus={() => setActiveJourney(i)} onClick={() => setActiveJourney(i)} aria-pressed={activeJourney === i} aria-label={`${step.number}: ${tx(language, step.title[0], step.title[1], step.title[2])}`}>
              <span className="journey-stop-dot"/><span className="journey-stop-label"><small>{step.number} / 03</small><b>{tx(language, step.title[0], step.title[1], step.title[2])}</b></span>
            </button>)}
          </div>
          <div className="journey-detail" key={`${language}-${activeJourney}`}>
            <div className="journey-detail-copy"><span>{tx(language, 'WHAT I PICKED UP', 'ЧЕМУ Я НАУЧИЛСЯ', 'НЕНІ ҮЙРЕНДІМ')}</span><h3>{tx(language, journey[activeJourney].title[0], journey[activeJourney].title[1], journey[activeJourney].title[2])}</h3><p>{tx(language, journey[activeJourney].text[0], journey[activeJourney].text[1], journey[activeJourney].text[2])}</p></div>
            {journey[activeJourney].tags.length > 0 && <div className="journey-detail-tags">{journey[activeJourney].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
          </div>
        </div>
      </section>

      <section className="focus-now section-pad">
        <div className="section-kicker reveal"><span>03</span> / {tx(language, 'CURRENT FOCUS', 'СЕЙЧАС В ФОКУСЕ', 'ҚАЗІРГІ БАҒЫТ')}</div>
        <div className="focus-now-layout">
          <div className="focus-now-intro reveal"><div className="focus-now-live"><i />{tx(language, 'IN PROGRESS', 'В ПРОЦЕССЕ', 'ҮЙРЕНУ ҮСТІНДЕ')}</div><h2>{tx(language, 'Learning deeper.', 'Углубляюсь.', 'Тереңірек үйренемін.')}<br /><em>{tx(language, 'Looking forward.', 'Ищу свой путь дальше.', 'Келесі қадамға дайынмын.')}</em></h2><p>{tx(language, 'Right now I’m growing my knowledge of databases and Java, while looking for an opportunity to start my professional journey.', 'Сейчас я углубляюсь в базы данных и Java, а параллельно ищу возможность начать профессиональный путь.', 'Қазір дерекқорлар мен Java бойынша білімімді тереңдетіп, кәсіби жолымды бастауға мүмкіндік іздеп жүрмін.')}</p><a className="focus-opportunity" href="#contact">{tx(language, 'OPEN TO OPPORTUNITIES', 'ОТКРЫТ К ПРЕДЛОЖЕНИЯМ', 'ҰСЫНЫСТАРҒА АШЫҚ')} <ArrowUpRight size={15} /></a></div>
          <div className="focus-now-list">
            <article className="now-row reveal"><div className="now-row-top"><span>01 / {tx(language, 'DATABASES', 'БАЗЫ ДАННЫХ', 'ДЕРЕКҚОРЛАР')}</span><span className="now-state"><i />{tx(language, 'EXPLORING', 'ИЗУЧАЮ', 'ЗЕРТТЕУДЕМІН')}</span></div><h3>{tx(language, 'Working with data', 'Работа с данными', 'Деректермен жұмыс')}</h3><p>{tx(language, 'Learning more about relational and document databases.', 'Изучаю реляционные и документоориентированные базы данных.', 'Реляциялық және құжаттық дерекқорларды тереңірек үйреніп жүрмін.')}</p><div className="now-tags"><span>MongoDB</span><span>PostgreSQL</span></div></article>
            <article className="now-row reveal" style={{ transitionDelay: '90ms' }}><div className="now-row-top"><span>02 / {tx(language, 'LANGUAGE', 'ЯЗЫК', 'ТІЛ')}</span><span className="now-state"><i />{tx(language, 'GOING DEEPER', 'УГЛУБЛЯЮ ЗНАНИЯ', 'БІЛІМДІ ТЕРЕҢДЕТУ')}</span></div><h3>{tx(language, 'Java', 'Java', 'Java')}</h3><p>{tx(language, 'Strengthening my understanding of Java and its core concepts.', 'Углубляю понимание Java и ключевых концепций языка.', 'Java тілі мен оның негізгі тұжырымдамаларын тереңірек меңгеріп жүрмін.')}</p><div className="now-tags"><span>Java</span></div></article>
            <article className="now-row reveal" style={{ transitionDelay: '180ms' }}><div className="now-row-top"><span>03 / {tx(language, 'NEXT STEP', 'СЛЕДУЮЩИЙ ШАГ', 'КЕЛЕСІ ҚАДАМ')}</span><span className="now-state now-state-open"><i />{tx(language, 'OPEN', 'В ПОИСКЕ', 'ІЗДЕУДЕМІН')}</span></div><h3>{tx(language, 'Professional opportunity', 'Официальное трудоустройство', 'Кәсіби жұмыс мүмкіндігі')}</h3><p>{tx(language, 'Looking for a role where I can contribute, learn, and grow with a team.', 'Ищу работу, где смогу приносить пользу, учиться и развиваться в команде.', 'Командамен бірге жұмыс істеп, үлес қосып, дамуға мүмкіндік беретін жұмыс іздеп жүрмін.')}</p><a className="now-contact" href="#contact">{tx(language, 'LET’S TALK', 'БУДУ РАД ОБСУДИТЬ', 'ТАЛҚЫЛАЙЫҚ')} <ArrowUpRight size={13} /></a></article>
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-kicker reveal"><span>04</span> / {tx(language, 'SELECTED WORK', 'ИЗБРАННЫЕ РАБОТЫ', 'ТАҢДАЛҒАН ЖҰМЫСТАР')}</div>
        <div className="work-heading reveal"><h2>{tx(language, 'Things I', 'Проекты, которые', 'Жобаларым')}<br /><em>{tx(language, 'built.', 'я создал.', 'жасадым.')}</em></h2><span className="work-count">{projects.length.toString().padStart(2, '0')} {tx(language, 'PROJECTS · OPEN SOURCE', 'ПРОЕКТОВ · OPEN SOURCE', 'ЖОБА · OPEN SOURCE')} <ArrowDownRight size={16} /></span></div>
        <div className="project-grid">{projects.map((project, i) => <a className={`project-card glass reveal ${project.visual}`} href={project.href} target="_blank" rel="noreferrer" key={project.name} style={{ transitionDelay: `${i * 90}ms` }}>
          <div className="project-card-top"><span>{project.number} / {tx(language, project.kind[0], project.kind[1], project.kind[2])}</span><span className="project-open"><ArrowUpRight size={16} /></span></div>
          <div className="project-visual" aria-hidden="true">{project.visual === 'project-terminal' ? <><div className="terminal-top"><i/><i/><i/><span>event-master.ts</span></div><div className="terminal-code"><span><b>01</b> <em>const</em> event = <i>new</i> Event();</span><span><b>02</b> event.<strong>schedule</strong>("community");</span><span><b>03</b> <em>await</em> bot.<strong>notify</strong>(members);</span><span><b>04</b> <small>// ready for the next one</small></span></div><div className="terminal-pulse"/></> : project.visual === 'project-wordly' ? <div className="wordle-board"><div className="wordle-row"><i>W</i><i>O</i><i>R</i><i>D</i><i>Y</i></div><div className="wordle-row"><i className="hit">P</i><i className="near">L</i><i className="miss">A</i><i className="hit">Y</i><i className="miss">S</i></div><div className="wordle-row"><i/><i/><i/><i/><i/></div></div> : project.visual === 'project-timer' ? <div className="timer-ui"><div className="timer-ring"><span>25<small>:00</small></span><i/></div><div className="timer-lines"><b>FOCUS SESSION</b><i/><i/><span>01 / 04 TASKS</span></div></div> : project.visual === 'project-course' ? <div className="course-ui"><div className="course-ui-nav"><b>learn<span>.</span></b><i>Explore&nbsp;&nbsp; My study</i><em>↗</em></div><div className="course-ui-title"><small>LEARN SOMETHING NEW</small><b>Find your<br/>next skill.</b></div><div className="course-ui-categories"><span>All</span><span>Design</span><span>Development</span><span>Business</span></div><div className="course-ui-cards"><i><b>01</b><small>DESIGN</small><strong>Visual<br/>thinking</strong></i><i><b>02</b><small>CODE</small><strong>Web<br/>foundations</strong></i><i><b>03</b><small>DATA</small><strong>Data<br/>stories</strong></i></div></div> : <div className="library-ui"><div className="library-ui-top"><b>BOOKS / CATALOG</b><span>⌕ &nbsp; SEARCH THE LIBRARY</span></div><div className="library-ui-body"><div className="library-ui-heading"><small>READ · DISCOVER · SAVE</small><strong>Find your<br/>next story.</strong><i>ALL GENRES &nbsp; / &nbsp; BOOKS</i></div><div className="library-books"><i><small>FICTION</small><b>01</b><strong>Quiet<br/>worlds</strong></i><i><small>CLASSIC</small><b>02</b><strong>Long<br/>journey</strong></i><i><small>ESSAY</small><b>03</b><strong>Ways<br/>of seeing</strong></i></div></div></div>}</div>
          <div className="project-card-copy"><h3>{project.name}</h3><p>{tx(language, project.description[0], project.description[1], project.description[2])}</p></div>
          <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </a>)}</div>
        <div className="work-note reveal"><span>{tx(language, 'BUILT TO LEARN. MADE TO BE USED.', 'СОЗДАЮ, ЧТОБЫ УЧИТЬСЯ. ДЕЛАЮ, ЧТОБЫ РАБОТАЛО.', 'ҮЙРЕНУ ҮШІН ЖАСАЙМЫН.')}</span><span>{tx(language, 'EXPLORE THE CODE ON GITHUB ↗', 'СМОТРИТЕ КОД НА GITHUB ↗', 'КОДТЫ GITHUB-ТАН КӨРІҢІЗ ↗')}</span></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="section-kicker reveal"><span>05</span> / {tx(language, 'OPEN CHANNEL', 'НА СВЯЗИ', 'БАЙЛАНЫС АРНАСЫ')}</div>
        <div className="contact-main reveal"><p className="eyebrow">{tx(language, 'GOOD THINGS START WITH A HELLO', 'ХОРОШЕЕ НАЧИНАЕТСЯ С «ПРИВЕТ»', 'ЖАҚСЫ ІСТЕР «СӘЛЕМНЕН» БАСТАЛАДЫ')}</p><h2>{tx(language, 'Let’s build', 'Давайте создадим', 'Бірге жасайық')}<br /><em>{tx(language, 'what’s next.', 'то, что дальше.', 'келесі қадамды.')}</em></h2><p className="contact-sub">{tx(language, 'Have an idea, an opportunity, or just want to talk about software? I’d be glad to hear from you.', 'Есть идея, предложение или просто хотите поговорить о разработке? Буду рад знакомству.', 'Идеяңыз не ұсынысыңыз бар ма, әлде бағдарламалық қамту жайлы сөйлескіңіз келе ме? Хабарласқаныңызға қуаныштымын.')}</p>
          <a className="contact-button" href="#about">{tx(language, 'Explore my journey', 'Узнать обо мне', 'Мен туралы білу')} <ArrowUpRight size={17} /></a>
        </div>
        <div className="contact-bottom"><span>© {new Date().getFullYear()} DAMIR</span><span>{tx(language, 'MADE WITH INTENTION IN ALMATY', 'СОЗДАНО В АЛМАТЫ', 'АЛМАТЫДА ЖАСАЛДЫ')}</span><span className="contact-location">{tx(language, 'ALMATY, KAZAKHSTAN', 'АЛМАТЫ, КАЗАХСТАН', 'АЛМАТЫ, ҚАЗАҚСТАН')}</span></div>
      </section>
    </main>
  </>
}

export default App
