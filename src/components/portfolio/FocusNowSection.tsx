import { ArrowUpRight } from "lucide-react";
import { focusGoals, type FocusGoal } from "../../data/focus";
import { translate, tx, type Language } from "../../language";
import { useLanguage } from "../../language-context";

function FocusGoalCard({
  goal,
  index,
  language,
}: {
  goal: FocusGoal;
  index: number;
  language: Language;
}) {
  return (
    <article
      className="now-row reveal"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="now-row-top">
        <span>
          {goal.number} / {translate(language, goal.category)}
        </span>
        <span className={`now-state${goal.open ? " now-state-open" : ""}`}>
          <i />
          {translate(language, goal.state)}
        </span>
      </div>
      <h3>{translate(language, goal.title)}</h3>
      <p>{translate(language, goal.description)}</p>
      {goal.tags.length > 0 && (
        <div className="now-tags">
          {goal.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
      {goal.open && (
        <a className="now-contact" href="#contact">
          {tx(language, "LET’S TALK", "БУДУ РАД ОБСУДИТЬ", "ТАЛҚЫЛАЙЫҚ")}{" "}
          <ArrowUpRight size={13} />
        </a>
      )}
    </article>
  );
}

export default function FocusNowSection() {
  const { language } = useLanguage();

  return (
    <section className="focus-now section-pad">
      <div className="section-kicker reveal">
        <span>03</span> /{" "}
        {tx(language, "CURRENT FOCUS", "СЕЙЧАС В ФОКУСЕ", "ҚАЗІРГІ БАҒЫТ")}
      </div>
      <div className="focus-now-layout">
        <div className="focus-now-intro reveal">
          <div className="focus-now-live">
            <i />
            {tx(language, "IN PROGRESS", "В ПРОЦЕССЕ", "ҮЙРЕНУ ҮСТІНДЕ")}
          </div>
          <h2>
            {tx(
              language,
              "Learning deeper.",
              "Углубляюсь.",
              "Тереңірек үйренемін.",
            )}
            <br />
            <em>
              {tx(
                language,
                "Looking forward.",
                "Ищу свой путь дальше.",
                "Келесі қадамға дайынмын.",
              )}
            </em>
          </h2>
          <p>
            {tx(
              language,
              "Right now I’m growing my knowledge of databases and Java, while looking for an opportunity to start my professional journey.",
              "Сейчас я углубляюсь в базы данных и Java, а параллельно ищу возможность начать профессиональный путь.",
              "Қазір дерекқорлар мен Java бойынша білімімді тереңдетіп, кәсіби жолымды бастауға мүмкіндік іздеп жүрмін.",
            )}
          </p>
          <a className="focus-opportunity" href="#contact">
            {tx(
              language,
              "OPEN TO OPPORTUNITIES",
              "ОТКРЫТ К ПРЕДЛОЖЕНИЯМ",
              "ҰСЫНЫСТАРҒА АШЫҚ",
            )}{" "}
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="focus-now-list">
          {focusGoals.map((goal, index) => (
            <FocusGoalCard
              key={goal.number}
              goal={goal}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
