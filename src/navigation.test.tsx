// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactSection from "./components/portfolio/ContactSection";
import SiteNavigation from "./components/layout/SiteNavigation";
import JourneySection from "./components/portfolio/JourneySection";
import ProjectCard from "./components/portfolio/ProjectCard";
import { projects } from "./data/portfolio";
import { usePortfolioEffects } from "./hooks/usePortfolioEffects";
import { LanguageProvider } from "./language-context";
import { useReveal } from "./useReveal";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("portfolio interactions", () => {
  it("opens the mobile navigation and closes it after selecting a destination", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <SiteNavigation variant="portfolio" />
      </LanguageProvider>,
    );

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    await user.click(menuButton);
    expect(menuButton.getAttribute("aria-expanded")).toBe("true");
    expect(
      screen
        .getByRole("link", { name: "About" })
        .closest(".nav-links")
        ?.classList.contains("open"),
    ).toBe(true);

    await user.click(screen.getByRole("link", { name: "About" }));
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");
    expect(
      screen
        .getByRole("link", { name: "About" })
        .closest(".nav-links")
        ?.classList.contains("open"),
    ).toBe(false);
  });

  it("marks the active Skills page and provides its Home shortcut", () => {
    render(
      <LanguageProvider>
        <SiteNavigation variant="skills" />
      </LanguageProvider>,
    );

    expect(
      screen.getByRole("link", { name: "Skills" }).getAttribute("aria-current"),
    ).toBe("page");
    expect(
      screen.getByRole("link", { name: /Home/ }).getAttribute("href"),
    ).toBe("/");
  });

  it("changes the journey detail when a milestone is selected", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <JourneySection />
      </LanguageProvider>,
    );

    await user.click(screen.getByRole("button", { name: "01: Curiosity" }));

    expect(screen.getByRole("heading", { name: "Curiosity" })).toBeTruthy();
    expect(
      screen.getByText(/simple curiosity about how technology works/),
    ).toBeTruthy();
  });

  it("updates the hero orb and card spotlight from pointer movement", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: false })),
    );

    function EffectsProbe() {
      usePortfolioEffects();
      return (
        <div className="hero">
          <article className="project-card" />
        </div>
      );
    }

    const { container } = render(
      <LanguageProvider>
        <EffectsProbe />
      </LanguageProvider>,
    );
    const hero = container.querySelector<HTMLElement>(".hero")!;
    const card = container.querySelector<HTMLElement>(".project-card")!;
    vi.spyOn(hero, "getBoundingClientRect").mockReturnValue({
      x: 10,
      y: 20,
      left: 10,
      top: 20,
      right: 210,
      bottom: 120,
      width: 200,
      height: 100,
      toJSON: () => ({}),
    });
    vi.spyOn(card, "getBoundingClientRect").mockReturnValue({
      x: 30,
      y: 40,
      left: 30,
      top: 40,
      right: 130,
      bottom: 140,
      width: 100,
      height: 100,
      toJSON: () => ({}),
    });

    fireEvent.pointerMove(hero, { clientX: 110, clientY: 70 });
    expect(hero.style.getPropertyValue("--pointer-x")).toBe("0");
    expect(hero.style.getPropertyValue("--pointer-y")).toBe("0");

    fireEvent.pointerMove(card, { clientX: 55, clientY: 75 });

    expect(card.style.getPropertyValue("--spot-x")).toBe("25px");
    expect(card.style.getPropertyValue("--spot-y")).toBe("35px");
  });

  it("keeps the contact action linked to the known GitHub profile", () => {
    render(
      <LanguageProvider>
        <ContactSection />
      </LanguageProvider>,
    );

    expect(
      screen
        .getByRole("link", { name: /Message me on GitHub/ })
        .getAttribute("href"),
    ).toBe("https://github.com/Nedamir1-projects");
  });

  it("renders project cards with their repository destination and stack details", () => {
    render(
      <LanguageProvider>
        <ProjectCard project={projects[0]} index={0} />
      </LanguageProvider>,
    );

    const projectLink = screen.getByRole("link", { name: /discord_event/ });
    expect(projectLink.getAttribute("href")).toBe(projects[0].href);
    expect(projectLink.getAttribute("target")).toBe("_blank");
    expect(screen.getByText("TypeScript")).toBeTruthy();
    expect(screen.getByText(/A pair of Discord bots/)).toBeTruthy();
  });

  it("reveals content immediately when IntersectionObserver is unavailable", () => {
    function RevealProbe() {
      useReveal();
      return <p className="reveal">Visible content</p>;
    }

    render(<RevealProbe />);
    expect(
      screen.getByText("Visible content").classList.contains("is-visible"),
    ).toBe(true);
  });
});
