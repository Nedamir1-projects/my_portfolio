import type { TranslatedCopy } from "../language";

export type JourneyStep = {
  number: string;
  title: TranslatedCopy;
  text: TranslatedCopy;
  tags: readonly string[];
};

export type PortfolioProject = {
  number: string;
  name: string;
  kind: TranslatedCopy;
  description: TranslatedCopy;
  stack: readonly string[];
  href: string;
  visual:
    | "project-terminal"
    | "project-wordly"
    | "project-timer"
    | "project-course"
    | "project-library";
};

export const journey = [
  {
    number: "01",
    title: ["Curiosity", "Интерес", "Қызығушылық"],
    text: [
      "It started with a simple curiosity about how technology works and how things are made.",
      "Всё началось с простого интереса к тому, как работают технологии и как создаются цифровые продукты.",
      "Барлығы технологияның қалай жұмыс істейтініне және цифрлық өнімдердің қалай жасалатынына деген қызығушылықтан басталды.",
    ],
    tags: [],
  },
  {
    number: "02",
    title: ["Algoritmika", "Алгоритмика", "Алгоритмика"],
    text: [
      "At programming school Algoritmika, I learned design, HTML, CSS, JavaScript, and Python.",
      "В школе программирования Algoritmika я изучил дизайн, HTML, CSS, JavaScript и Python.",
      "Algoritmika бағдарламалау мектебінде дизайн, HTML, CSS, JavaScript және Python тілдерін үйрендім.",
    ],
    tags: ["Design", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    number: "03",
    title: ["IITU", "IITU", "IITU"],
    text: [
      "At IITU, I continued my studies with Java and Power BI.",
      "В IITU продолжил обучение и изучил Java и Power BI.",
      "IITU-де оқуымды жалғастырып, Java және Power BI үйрендім.",
    ],
    tags: ["Java", "Power BI"],
  },
] as const satisfies readonly JourneyStep[];

export const projects = [
  {
    number: "01",
    name: "discord_event",
    kind: [
      "DISCORD BOT SYSTEM",
      "СИСТЕМА DISCORD-БОТОВ",
      "DISCORD БОТТАР ЖҮЙЕСІ",
    ],
    description: [
      "A pair of Discord bots for server economy and event management, backed by shared business logic and persistent data.",
      "Два Discord-бота для игровой экономики и управления событиями. Общая бизнес-логика, PostgreSQL и админ-инструменты.",
      "Сервер экономикасы мен іс-шараларын басқаруға арналған екі Discord-бот. Ортақ логика және PostgreSQL дерекқоры.",
    ],
    stack: ["TypeScript", "Node.js", "Discord.js", "Prisma", "PostgreSQL"],
    href: "https://github.com/Nedamir1-projects/discord_event",
    visual: "project-terminal",
  },
  {
    number: "02",
    name: "Wordly",
    kind: ["WORD GUESSING GAME", "ИГРА В СЛОВА", "СӨЗ ОЙЫНЫ"],
    description: [
      "A Wordle-inspired desktop game with keyboard input, colored letter hints, and a built-in word dictionary.",
      "Настольная игра в духе Wordle: ввод с клавиатуры, цветовые подсказки и встроенный словарь слов.",
      "Wordle стиліндегі үстел ойыны: пернетақтадан енгізу, түсті ишаралар және сөздік.",
    ],
    stack: ["Python", "Pygame", "JSON"],
    href: "https://github.com/Nedamir1-projects/Wordly",
    visual: "project-wordly",
  },
  {
    number: "03",
    name: "JavaTimer",
    kind: [
      "STUDY PRODUCTIVITY APP",
      "ПРИЛОЖЕНИЕ ДЛЯ УЧЁБЫ",
      "ОҚУҒА АРНАЛҒАН ҚОСЫМША",
    ],
    description: [
      "A student dashboard combining a Pomodoro timer, task list, completed-session log, and daily study stats.",
      "Учебный дашборд с Pomodoro-таймером, списком задач, журналом сессий и дневной статистикой.",
      "Pomodoro таймері, тапсырмалар тізімі, оқу сессияларының журналы және күндік статистикасы бар студенттік дашборд.",
    ],
    stack: ["Java", "JavaFX", "Maven", "JSON"],
    href: "https://github.com/Nedamir1-projects/JavaTimer",
    visual: "project-timer",
  },
  {
    number: "04",
    name: "CoursePlatform",
    kind: [
      "ONLINE LEARNING PLATFORM",
      "ПЛАТФОРМА ОНЛАЙН-ОБУЧЕНИЯ",
      "ОНЛАЙН ОҚУ ПЛАТФОРМАСЫ",
    ],
    description: [
      "A course discovery frontend with category browsing, individual course pages, and a personal study area.",
      "Фронтенд-платформа для поиска и просмотра курсов: категории, страницы курсов и личный раздел обучения.",
      "Курстарды іздеуге және көруге арналған фронтенд: санаттар, курс беттері және жеке оқу бөлімі.",
    ],
    stack: ["React", "React Router", "JavaScript", "CSS", "Create React App"],
    href: "https://github.com/Nedamir1-projects/CoursePlatform",
    visual: "project-course",
  },
  {
    number: "05",
    name: "Django_books",
    kind: [
      "ONLINE LIBRARY · DJANGO",
      "ОНЛАЙН-БИБЛИОТЕКА · DJANGO",
      "ОНЛАЙН КІТАПХАНА · DJANGO",
    ],
    description: [
      "A Django-powered library with book search and genre filters, reading lists, bookmarks for signed-in users, and a REST API.",
      "Онлайн-библиотека на Django: поиск и фильтрация книг по жанрам, список «Читаю», закладки для авторизованных пользователей и REST API.",
      "Django негізіндегі онлайн кітапхана: кітап іздеу және жанр бойынша сүзу, оқу тізімі, тіркелген пайдаланушыларға бетбелгілер және REST API.",
    ],
    stack: ["Python", "Django", "Django REST Framework", "SQLite", "Requests"],
    href: "https://github.com/Nedamir1-projects/Django_books",
    visual: "project-library",
  },
] as const satisfies readonly PortfolioProject[];
