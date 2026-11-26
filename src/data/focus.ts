import type { TranslatedCopy } from "../language";

export type FocusGoal = {
  number: string;
  category: TranslatedCopy;
  state: TranslatedCopy;
  title: TranslatedCopy;
  description: TranslatedCopy;
  tags: readonly string[];
  open?: boolean;
};

export const focusGoals: readonly FocusGoal[] = [
  {
    number: "01",
    category: ["DATABASES", "БАЗЫ ДАННЫХ", "ДЕРЕКҚОРЛАР"],
    state: ["EXPLORING", "ИЗУЧАЮ", "ЗЕРТТЕУДЕМІН"],
    title: ["Working with data", "Работа с данными", "Деректермен жұмыс"],
    description: [
      "Learning more about relational and document databases.",
      "Изучаю реляционные и документоориентированные базы данных.",
      "Реляциялық және құжаттық дерекқорларды тереңірек үйреніп жүрмін.",
    ],
    tags: ["MongoDB", "PostgreSQL"],
  },
  {
    number: "02",
    category: ["LANGUAGE", "ЯЗЫК", "ТІЛ"],
    state: ["GOING DEEPER", "УГЛУБЛЯЮ ЗНАНИЯ", "БІЛІМДІ ТЕРЕҢДЕТУ"],
    title: ["Java", "Java", "Java"],
    description: [
      "Strengthening my understanding of Java and its core concepts.",
      "Углубляю понимание Java и ключевых концепций языка.",
      "Java тілі мен оның негізгі тұжырымдамаларын тереңірек меңгеріп жүрмін.",
    ],
    tags: ["Java"],
  },
  {
    number: "03",
    category: ["NEXT STEP", "СЛЕДУЮЩИЙ ШАГ", "КЕЛЕСІ ҚАДАМ"],
    state: ["OPEN", "В ПОИСКЕ", "ІЗДЕУДЕМІН"],
    title: [
      "Professional opportunity",
      "Официальное трудоустройство",
      "Кәсіби жұмыс мүмкіндігі",
    ],
    description: [
      "Looking for a role where I can contribute, learn, and grow with a team.",
      "Ищу работу, где смогу приносить пользу, учиться и развиваться в команде.",
      "Командамен бірге жұмыс істеп, үлес қосып, дамуға мүмкіндік беретін жұмыс іздеп жүрмін.",
    ],
    tags: [],
    open: true,
  },
];
