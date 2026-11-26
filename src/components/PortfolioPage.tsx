import AboutSection from "./portfolio/AboutSection";
import ContactSection from "./portfolio/ContactSection";
import FocusNowSection from "./portfolio/FocusNowSection";
import HeroSection from "./portfolio/HeroSection";
import JourneySection from "./portfolio/JourneySection";
import ProjectsSection from "./portfolio/ProjectsSection";
import SiteNavigation from "./layout/SiteNavigation";
import { usePortfolioEffects } from "../hooks/usePortfolioEffects";
import { useReveal } from "../useReveal";

export default function PortfolioPage() {
  useReveal();
  usePortfolioEffects();

  return (
    <>
      <SiteNavigation variant="portfolio" />
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <FocusNowSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
