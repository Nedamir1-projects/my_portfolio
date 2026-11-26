import { ArrowUpRight } from "lucide-react";
import { learningTopics } from "../../data/skills";
import { translate, tx } from "../../language";
import { useLanguage } from "../../language-context";

export default function LearningSection() {
  const { language } = useLanguage();

  return (
    <section className="learning-section section-pad">
      <div className="section-kicker reveal">
        <span>02</span> /{" "}
        {tx(
          language,
          "NEXT IN THE PROCESS",
          "СЛЕДУЮЩИЕ ШАГИ",
          "КЕЛЕСІ ҚАДАМДАР",
        )}
      </div>
      <div className="learning-intro reveal">
        <div>
          <h2>
            {tx(language, "What I’m", "Что я буду", "Алда нені")}
            <br />
            <em>
              {tx(language, "learning next.", "изучать дальше.", "үйренемін.")}
            </em>
          </h2>
        </div>
        <p>
          {tx(
            language,
            "As my projects grow, I want to understand more of the systems behind them. These are the areas I’m working toward.",
            "По мере роста проектов хочу лучше понимать системы, которые за ними стоят. Вот направления, которые планирую изучать дальше.",
            "Жобаларым күрделенген сайын олардың артындағы жүйелерді тереңірек түсінгім келеді. Келесі үйренетін бағыттарым:",
          )}
        </p>
      </div>
      <div className="learning-list">
        {learningTopics.map((topic, index) => (
          <article
            className="learning-row reveal"
            key={topic.number}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span className="learning-number">{topic.number}</span>
            <h3>{translate(language, topic.title)}</h3>
            <p>{translate(language, topic.description)}</p>
            <ArrowUpRight className="learning-arrow" size={16} />
          </article>
        ))}
      </div>
    </section>
  );
}
