import { useEffect } from "react";
import SiteNavigation from "./components/layout/SiteNavigation";
import LearningSection from "./components/skills/LearningSection";
import SkillsClosingSection from "./components/skills/SkillsClosingSection";
import SkillsHero from "./components/skills/SkillsHero";
import ToolkitSection from "./components/skills/ToolkitSection";
import { tx } from "./language";
import { useLanguage } from "./language-context";
import { useReveal } from "./useReveal";

export default function SkillsPage() {
  const { language } = useLanguage();
  useReveal();

  useEffect(() => {
    document.title = tx(
      language,
      "Skills & Learning — Damir",
      "Навыки и обучение — Дамир",
      "Дағдылар және оқу — Дамир",
    );
  }, [language]);

  return (
    <>
      <SiteNavigation variant="skills" />
      <main className="skills-page">
        <SkillsHero />
        <ToolkitSection />
        <LearningSection />
        <SkillsClosingSection />
      </main>
    </>
  );
}
