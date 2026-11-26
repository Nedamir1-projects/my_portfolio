import { ArrowDownRight } from "lucide-react";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";

export default function AboutSection() {
  const { language } = useLanguage();
  return (
    <section className="intro section-pad" id="about">
      <div className="section-kicker reveal">
        <span>01</span> /{" "}
        {tx(language, "A LITTLE ABOUT ME", "НЕМНОГО ОБО МНЕ", "ӨЗІМ ТУРАЛЫ")}
      </div>
      <div className="intro-layout">
        <h2 className="reveal">
          {tx(
            language,
            "Curious by nature.",
            "Любопытство — в характере.",
            "Ізденіс — табиғатымда.",
          )}
          <br />
          <em>
            {tx(
              language,
              "Engineer by intent.",
              "Инженер — мой осознанный выбор.",
              "Инженер болу — саналы таңдауым.",
            )}
          </em>
        </h2>
        <div className="intro-copy reveal">
          <p>
            {tx(
              language,
              "I’m Damir, a Computer Science student at IITU in Almaty. I’m drawn to the space where good design meets good engineering: interfaces that feel effortless, backed by systems that make sense.",
              "Я Дамир, студент направления «Компьютерные науки» в IITU, Алматы. Мне интересно, как хороший дизайн сочетается с инженерным подходом: простые в использовании интерфейсы и продуманные системы.",
              "Мен Дамирмін, Алматыдағы IITU-дың компьютерлік ғылымдар мамандығының студентімін. Жақсы дизайн мен инженерлік ойлау ұштасатын тұс қызықтырады: қолдануға жеңіл интерфейстер мен жүйелі шешімдер.",
            )}
          </p>
          <p>
            {tx(
              language,
              "Right now, I’m learning, building, and steadily broadening my view of software. The goal is simple: become the kind of engineer who can turn a considered idea into something real.",
              "Сейчас я учусь, создаю проекты и постепенно расширяю понимание разработки. Моя цель — стать инженером, который умеет превращать продуманные идеи в работающие продукты.",
              "Қазір үйреніп, жобалар жасап, бағдарламалық қамту туралы түсінігімді кеңейтіп жүрмін. Мақсатым — ойластырылған идеяны нақты өнімге айналдыра алатын инженер болу.",
            )}
          </p>
          <a className="text-link" href="#contact">
            {tx(
              language,
              "A little more about my journey",
              "Продолжим знакомство",
              "Жолым туралы толығырақ",
            )}{" "}
            <ArrowDownRight size={17} />
          </a>
        </div>
      </div>
      <div className="about-foot reveal">
        <span>
          {tx(
            language,
            "BASED IN ALMATY, KAZAKHSTAN",
            "ЖИВУ В АЛМАТЫ, КАЗАХСТАН",
            "АЛМАТЫ, ҚАЗАҚСТАН",
          )}
        </span>
        <span className="about-line" />
        <span>
          {tx(
            language,
            "STUDENT · BUILDER · IN PROGRESS",
            "СТУДЕНТ · СОЗДАЮ · РАСТУ",
            "СТУДЕНТ · ЖАСАУШЫ · ДАМУ ҮСТІНДЕ",
          )}
        </span>
      </div>
    </section>
  );
}
