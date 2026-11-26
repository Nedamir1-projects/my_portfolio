import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "../../data/portfolio";
import { translate } from "../../language";
import { useLanguage } from "../../language-context";
import ProjectPreviews from "./ProjectPreviews";

export default function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const { language } = useLanguage();

  return (
    <a
      className={`project-card glass reveal ${project.visual}`}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="project-card-top">
        <span>
          {project.number} / {translate(language, project.kind)}
        </span>
        <span className="project-open">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <ProjectPreviews visual={project.visual} />
      <div className="project-card-copy">
        <h3>{project.name}</h3>
        <p>{translate(language, project.description)}</p>
      </div>
      <div className="project-tags">
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}
