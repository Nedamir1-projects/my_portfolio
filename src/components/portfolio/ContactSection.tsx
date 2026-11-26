import { ArrowUpRight } from "lucide-react";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";

export default function ContactSection() {
  const { language } = useLanguage();
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="section-kicker reveal">
        <span>05</span> /{" "}
        {tx(language, "OPEN CHANNEL", "НА СВЯЗИ", "БАЙЛАНЫС АРНАСЫ")}
      </div>
      <div className="contact-main reveal">
        <p className="eyebrow">
          {tx(
            language,
            "GOOD THINGS START WITH A HELLO",
            "ХОРОШЕЕ НАЧИНАЕТСЯ С «ПРИВЕТ»",
            "ЖАҚСЫ ІСТЕР «СӘЛЕМНЕН» БАСТАЛАДЫ",
          )}
        </p>
        <h2>
          {tx(language, "Let’s build", "Давайте создадим", "Бірге жасайық")}
          <br />
          <em>
            {tx(language, "what’s next.", "то, что дальше.", "келесі қадамды.")}
          </em>
        </h2>
        <p className="contact-sub">
          {tx(
            language,
            "Have an idea, an opportunity, or just want to talk about software? I’d be glad to hear from you.",
            "Есть идея, предложение или просто хотите поговорить о разработке? Буду рад знакомству.",
            "Идеяңыз не ұсынысыңыз бар ма, әлде бағдарламалық қамту жайлы сөйлескіңіз келе ме? Хабарласқаныңызға қуаныштымын.",
          )}
        </p>
        <a
          className="contact-button"
          href="https://github.com/Nedamir1-projects"
          target="_blank"
          rel="noreferrer"
        >
          {tx(
            language,
            "Message me on GitHub",
            "Написать в GitHub",
            "GitHub-та хабарласу",
          )}{" "}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="contact-bottom">
        <span>© {new Date().getFullYear()} DAMIR</span>
        <span>
          {tx(
            language,
            "MADE WITH INTENTION IN ALMATY",
            "СОЗДАНО В АЛМАТЫ",
            "АЛМАТЫДА ЖАСАЛДЫ",
          )}
        </span>
        <span className="contact-location">
          {tx(
            language,
            "ALMATY, KAZAKHSTAN",
            "АЛМАТЫ, КАЗАХСТАН",
            "АЛМАТЫ, ҚАЗАҚСТАН",
          )}
        </span>
      </div>
    </section>
  );
}
