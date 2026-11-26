import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";

export default function SkillsClosingSection() {
  const { language } = useLanguage();

  return (
    <section className="skills-end section-pad">
      <div className="section-kicker reveal">
        <span>03</span> /{" "}
        {tx(language, "KEEP MOVING", "ДВИГАЮСЬ ДАЛЬШЕ", "АЛҒА ҚАДАМ")}
      </div>
      <div className="skills-end-main reveal">
        <Sparkles />
        <h2>
          {tx(language, "Progress over", "Важен путь,", "Үдеріс маңызды,")}
          <br />
          <em>
            {tx(language, "perfection.", "а не идеал.", "мінсіздік емес.")}
          </em>
        </h2>
        <p>
          {tx(
            language,
            "Every new concept is another tool for making something useful. I’m here to keep learning and put it into practice.",
            "Каждая новая идея — ещё один инструмент для создания полезных вещей. Продолжаю учиться и применять знания на практике.",
            "Әрбір жаңа ұғым пайдалы нәрсе жасауға арналған тағы бір құрал. Үйреніп, білімімді тәжірибеде қолдануды жалғастырамын.",
          )}
        </p>
        <a className="contact-button" href="/#work">
          {tx(
            language,
            "See selected work",
            "Посмотреть работы",
            "Жұмыстарды көру",
          )}{" "}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="skills-footer">
        <span>© {new Date().getFullYear()} DAMIR</span>
        <span>
          {tx(
            language,
            "IITU · ALMATY, KAZAKHSTAN",
            "IITU · АЛМАТЫ, КАЗАХСТАН",
            "IITU · АЛМАТЫ, ҚАЗАҚСТАН",
          )}
        </span>
        <a
          href="/"
          aria-label={tx(
            language,
            "Back to portfolio home",
            "На главную",
            "Басты бетке оралу",
          )}
        >
          <GitBranch size={15} />
        </a>
      </div>
    </section>
  );
}
