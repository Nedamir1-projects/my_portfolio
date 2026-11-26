import { ArrowDownRight } from "lucide-react";
import { projects } from "../../data/portfolio";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { language } = useLanguage();

  return (
    <section className="work section-pad" id="work">
      <div className="section-kicker reveal">
        <span>04</span> /{" "}
        {tx(
          language,
          "SELECTED WORK",
          "ИЗБРАННЫЕ РАБОТЫ",
          "ТАҢДАЛҒАН ЖҰМЫСТАР",
        )}
      </div>
      <div className="work-heading reveal">
        <h2>
          {tx(language, "Things I", "Проекты, которые", "Жобаларым")}
          <br />
          <em>{tx(language, "built.", "я создал.", "жасадым.")}</em>
        </h2>
        <span className="work-count">
          {projects.length.toString().padStart(2, "0")}{" "}
          {tx(
            language,
            "PROJECTS · OPEN SOURCE",
            "ПРОЕКТОВ · OPEN SOURCE",
            "ЖОБА · OPEN SOURCE",
          )}{" "}
          <ArrowDownRight size={16} />
        </span>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
      <div className="work-note reveal">
        <span>
          {tx(
            language,
            "BUILT TO LEARN. MADE TO BE USED.",
            "СОЗДАЮ, ЧТОБЫ УЧИТЬСЯ. ДЕЛАЮ, ЧТОБЫ РАБОТАЛО.",
            "ҮЙРЕНУ ҮШІН ЖАСАЙМЫН.",
          )}
        </span>
        <span>
          {tx(
            language,
            "EXPLORE THE CODE ON GITHUB ↗",
            "СМОТРИТЕ КОД НА GITHUB ↗",
            "КОДТЫ GITHUB-ТАН КӨРІҢІЗ ↗",
          )}
        </span>
      </div>
    </section>
  );
}
