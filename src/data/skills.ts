import type { TranslatedCopy } from "../language";

export const skillGroups = [
  {
    title: ["Frontend", "Фронтенд", "Фронтенд"],
    icon: "frontend",
    items: ["React", "TypeScript"],
  },
  {
    title: ["Backend", "Бэкенд", "Бэкенд"],
    icon: "backend",
    items: ["Node.js"],
  },
  {
    title: [
      "Programming languages",
      "Языки программирования",
      "Бағдарламалау тілдері",
    ],
    icon: "languages",
    items: ["Python", "Java"],
  },
  {
    title: [
      "Data & collaboration",
      "Данные и совместная работа",
      "Деректер және бірлескен жұмыс",
    ],
    icon: "data",
    items: ["PostgreSQL", "GitHub"],
  },
] as const satisfies readonly {
  title: TranslatedCopy;
  icon: "frontend" | "backend" | "languages" | "data";
  items: readonly string[];
}[];

export const learningTopics = [
  {
    number: "01",
    title: [
      "Application architecture",
      "Архитектура приложений",
      "Қолданба архитектурасы",
    ],
    description: [
      "Organizing larger applications into clear, maintainable parts.",
      "Структура крупных приложений: понятные и удобные для поддержки части.",
      "Ірі қолданбаларды түсінікті әрі қолдауға ыңғайлы бөліктерге бөлу.",
    ],
  },
  {
    number: "02",
    title: ["APIs & integration", "API и интеграции", "API және интеграция"],
    description: [
      "Connecting frontend applications with backend services and external APIs.",
      "Связь интерфейсов с серверными сервисами и внешними API.",
      "Интерфейстерді серверлік қызметтермен және сыртқы API-мен байланыстыру.",
    ],
  },
  {
    number: "03",
    title: [
      "Testing & quality",
      "Тестирование и качество",
      "Тестілеу және сапа",
    ],
    description: [
      "Building confidence in code through useful, focused testing.",
      "Как повышать надёжность кода с помощью полезных и точечных тестов.",
      "Пайдалы әрі нақты тестілер арқылы кодқа сенімділікті арттыру.",
    ],
  },
  {
    number: "04",
    title: [
      "Deployment & operations",
      "Развёртывание и эксплуатация",
      "Орналастыру және пайдалану",
    ],
    description: [
      "Learning how applications are shipped, monitored, and improved.",
      "Как выпускать, отслеживать и улучшать приложения.",
      "Қолданбаларды жариялау, бақылау және жетілдіру.",
    ],
  },
] as const;
