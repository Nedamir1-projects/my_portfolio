import { ArrowDown } from "lucide-react";
import AlmatyClock from "../../AlmatyClock";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";

export default function HeroSection() {
  const { language } = useLanguage();
  return (
    <section className="hero" id="home">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="eyebrow hero-eyebrow">
          <span className="live-dot" />{" "}
          {tx(
            language,
            "COMPUTER SCIENCE · ALMATY, KZ",
            "КОМПЬЮТЕРНЫЕ НАУКИ · АЛМАТЫ, KZ",
            "КОМПЬЮТЕРЛІК ҒЫЛЫМ · АЛМАТЫ, KZ",
          )}
        </div>
        <h1>
          {tx(language, "SOFTWARE", "SOFTWARE", "SOFTWARE")}
          <br />
          <span>{tx(language, "ENGINEER", "ИНЖЕНЕР", "ИНЖЕНЕР")}</span>
          <sup>®</sup>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            {tx(
              language,
              "A Computer Science student at",
              "Изучаю компьютерные науки в",
              "Компьютерлік ғылымдар мамандығы бойынша оқимын:",
            )}{" "}
            <strong>IITU</strong>
            {tx(
              language,
              ", exploring the craft of building thoughtful software.",
              ", и осваиваю искусство создания продуманного ПО.",
              " университетінде, ойластырылған бағдарламалық өнім жасауды үйреніп жүрмін.",
            )}
          </p>
          <a
            href="#work"
            className="round-cta"
            aria-label={tx(
              language,
              "Explore selected work",
              "Посмотреть работы",
              "Жұмыстарды көру",
            )}
          >
            <ArrowDown size={19} />
          </a>
        </div>
      </div>
      <AlmatyClock />
      <div className="hero-index">
        <span>01 / 04</span>
        <span>
          {tx(
            language,
            "SCROLL TO EXPLORE",
            "ЛИСТАЙТЕ ДАЛЬШЕ",
            "ӘРІ ҚАРАЙ ЖЫЛЖЫҢЫЗ",
          )}
        </span>
      </div>
    </section>
  );
}
