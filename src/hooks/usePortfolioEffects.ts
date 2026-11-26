import { useEffect } from "react";
import { tx } from "../language";
import { useLanguage } from "../language-context";

export function usePortfolioEffects() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = tx(
      language,
      "Damir — Software Engineer",
      "Дамир — Software инженер",
      "Дамир — Software инженер",
    );
  }, [language]);

  useEffect(() => {
    let animationFrame = 0;
    const updateProgress = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const scrollRange =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollRange > 0 ? (window.scrollY / scrollRange) * 100 : 0;
        document.documentElement.style.setProperty(
          "--scroll-progress",
          `${progress}%`,
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const moveOrb = (event: PointerEvent) => {
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) return;
      const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty("--pointer-x", `${pointerX}`);
      hero.style.setProperty("--pointer-y", `${pointerY}`);
    };

    const moveSpotlight = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const card = event.target.closest<HTMLElement>(
        ".focus-card, .journey-card, .work-feature, .project-card",
      );
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
    };

    hero?.addEventListener("pointermove", moveOrb);
    document.addEventListener("pointermove", moveSpotlight, { passive: true });
    return () => {
      hero?.removeEventListener("pointermove", moveOrb);
      document.removeEventListener("pointermove", moveSpotlight);
    };
  }, []);
}
