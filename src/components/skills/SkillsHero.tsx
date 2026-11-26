import { ArrowUpRight } from "lucide-react";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";

export default function SkillsHero() {
  const { language } = useLanguage();

  return (
    <section className="skills-hero">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="skills-hero-inner">
        <div className="eyebrow hero-eyebrow">
          <span className="live-dot" />{" "}
          {tx(
            language,
            "SKILLS · LEARNING IN PUBLIC",
            "НАВЫКИ · УЧУСЬ И ДЕЛЮСЬ",
            "ДАҒДЫЛАР · ҮЙРЕНУ ЖОЛЫ",
          )}
        </div>
        <h1>
          {tx(language, "WHAT I", "ЧТО Я", "МЕН НЕ")}
          <br />
          <span>
            {tx(language, "CAN BUILD.", "УМЕЮ СОЗДАВАТЬ.", "ЖАСАЙ АЛАМЫН.")}
          </span>
        </h1>
        <p>
          {tx(
            language,
            "A growing toolkit, built through study, practice, and curiosity. Here’s what I work with today—and where I’m headed next.",
            "Мой набор инструментов растёт благодаря учёбе, практике и любознательности. Вот с чем я работаю сейчас и куда планирую двигаться дальше.",
            "Оқу, тәжірибе және ізденіс арқылы құралдар қоржынымды дамытып келемін. Қазір қолданатыным және келесі үйренетінім осында.",
          )}
        </p>
        <a className="skills-scroll" href="#toolkit">
          {tx(
            language,
            "EXPLORE THE TOOLKIT",
            "МОИ ИНСТРУМЕНТЫ",
            "ҚҰРАЛДАРМЕН ТАНЫСУ",
          )}{" "}
          <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="skills-planet orb-stage" aria-hidden="true">
        <div className="orb-halo" />
        <div className="orb">
          <div className="orb-core" />
          <div className="orb-sheen" />
          <div className="orb-line orb-line-one" />
          <div className="orb-line orb-line-two" />
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orb-label">
          <span>{tx(language, "BUILDING", "СОЗДАЮ", "ЖАСАЙМЫН")}</span>
          <b>{tx(language, "WHAT’S NEXT", "БУДУЩЕЕ", "БОЛАШАҚТЫ")}</b>
        </div>
      </div>
    </section>
  );
}
