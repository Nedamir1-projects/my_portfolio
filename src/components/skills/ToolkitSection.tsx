import { Braces, Code2, Database, Server } from "lucide-react";
import { skillGroups } from "../../data/skills";
import { translate, tx } from "../../language";
import { useLanguage } from "../../language-context";

const skillIcons = {
  frontend: Code2,
  backend: Server,
  languages: Braces,
  data: Database,
};

export default function ToolkitSection() {
  const { language } = useLanguage();

  return (
    <section className="toolkit-section section-pad" id="toolkit">
      <div className="section-kicker reveal">
        <span>01</span> / {tx(language, "MY TOOLKIT", "МОЙ СТЕК", "ҚҰРАЛДАРЫМ")}
      </div>
      <div className="section-heading reveal">
        <h2>
          {tx(
            language,
            "Tools I use.",
            "Инструменты, с которыми работаю.",
            "Қолданатын құралдарым.",
          )}
          <br />
          <em>
            {tx(
              language,
              "Foundations I grow.",
              "База, которую развиваю.",
              "Дамытып жүрген негіздерім.",
            )}
          </em>
        </h2>
        <p>
          {tx(
            language,
            "Technologies I’m familiar with, organized by the kind of work they support.",
            "Технологии, с которыми я работаю, сгруппированы по задачам.",
            "Қолданып жүрген технологияларым жұмыс бағытына қарай топтастырылды.",
          )}
        </p>
      </div>
      <div className="toolkit-grid">
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[group.icon];
          return (
            <article
              className="toolkit-card glass reveal"
              key={group.title[0]}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="toolkit-card-head">
                <span>0{index + 1}</span>
                <Icon />
              </div>
              <h3>{translate(language, group.title)}</h3>
              <div className="toolkit-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <p className="toolkit-foot reveal">
        {tx(
          language,
          "A practical skill set in progress—not a measure of mastery.",
          "Практический набор навыков, который продолжает развиваться.",
          "Бұл — әлі де дамып келе жатқан тәжірибелік дағдылар жиынтығы.",
        )}
      </p>
    </section>
  );
}
