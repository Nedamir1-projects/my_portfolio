import { useState } from "react";
import { journey } from "../../data/portfolio";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";

export default function JourneySection() {
  const [activeJourney, setActiveJourney] = useState(1);
  const { language } = useLanguage();
  return (
    <section className="focus section-pad" id="focus">
      <div className="section-kicker reveal">
        <span>02</span> / {tx(language, "MY PATH", "МОЙ ПУТЬ", "МЕНІҢ ЖОЛЫМ")}
      </div>
      <div className="section-heading reveal">
        <h2>
          {tx(language, "From curiosity", "От интереса", "Қызығушылықтан")}
          <br />
          <em>{tx(language, "to code.", "к коду.", "кодқа.")}</em>
        </h2>
        <p>
          {tx(
            language,
            "Each step introduced me to new ways of turning ideas into something real.",
            "Каждый этап открывал мне новые способы превращать идеи в реальные проекты.",
            "Әр кезең идеяларды нақты жобаға айналдырудың жаңа жолдарын ашты.",
          )}
        </p>
      </div>
      <div className="journey-experience reveal">
        <div
          className="journey-track"
          role="group"
          aria-label={tx(
            language,
            "Milestones in my learning journey",
            "Этапы моего пути в обучении",
            "Оқу жолымның кезеңдері",
          )}
        >
          <svg
            className="journey-route"
            viewBox="0 0 1000 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="journey-route-glow"
              d="M70 165 C220 165 260 55 500 55 C740 55 780 165 930 165"
            />
            <path
              className="journey-route-line"
              d="M70 165 C220 165 260 55 500 55 C740 55 780 165 930 165"
            />
          </svg>
          {journey.map((step, i) => (
            <button
              className={`journey-stop journey-stop-${i + 1} ${activeJourney === i ? "active" : ""}`}
              key={step.number}
              style={{ left: `${[7, 50, 93][i]}%`, top: `${[75, 25, 75][i]}%` }}
              onMouseEnter={() => setActiveJourney(i)}
              onFocus={() => setActiveJourney(i)}
              onClick={() => setActiveJourney(i)}
              aria-pressed={activeJourney === i}
              aria-label={`${step.number}: ${tx(language, step.title[0], step.title[1], step.title[2])}`}
            >
              <span className="journey-stop-dot" />
              <span className="journey-stop-label">
                <small>{step.number} / 03</small>
                <b>
                  {tx(language, step.title[0], step.title[1], step.title[2])}
                </b>
              </span>
            </button>
          ))}
        </div>
        <div className="journey-detail" key={`${language}-${activeJourney}`}>
          <div className="journey-detail-copy">
            <span>
              {tx(
                language,
                "WHAT I PICKED UP",
                "ЧЕМУ Я НАУЧИЛСЯ",
                "НЕНІ ҮЙРЕНДІМ",
              )}
            </span>
            <h3>
              {tx(
                language,
                journey[activeJourney].title[0],
                journey[activeJourney].title[1],
                journey[activeJourney].title[2],
              )}
            </h3>
            <p>
              {tx(
                language,
                journey[activeJourney].text[0],
                journey[activeJourney].text[1],
                journey[activeJourney].text[2],
              )}
            </p>
          </div>
          {journey[activeJourney].tags.length > 0 && (
            <div className="journey-detail-tags">
              {journey[activeJourney].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
