// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import AlmatyClock from "./AlmatyClock";
import { LanguageSwitch } from "./LanguageSwitch";
import { LanguageProvider, useLanguage } from "./language-context";

function LanguageProbe() {
  const { language } = useLanguage();
  return <output aria-label="Selected language">{language}</output>;
}

function ConnectedLanguageFeatures() {
  const { language, chooseLanguage } = useLanguage();
  return (
    <>
      <LanguageSwitch language={language} onChange={chooseLanguage} />
      <LanguageProbe />
      <AlmatyClock />
    </>
  );
}

describe("shared language context", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    cleanup();
    document.documentElement.lang = "en";
  });

  it("loads a saved language and synchronizes the document language", () => {
    localStorage.setItem("portfolio-language", "kk");

    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    );

    expect(screen.getByLabelText("Selected language").textContent).toBe("kk");
    expect(document.documentElement.lang).toBe("kk");
  });

  it("updates every consumer, persists the selection, and updates AlmatyClock labels", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <ConnectedLanguageFeatures />
      </LanguageProvider>,
    );

    await user.click(screen.getByRole("button", { name: "ҚАЗ" }));

    expect(screen.getByLabelText("Selected language").textContent).toBe("kk");
    expect(localStorage.getItem("portfolio-language")).toBe("kk");
    expect(document.documentElement.lang).toBe("kk");
    expect(
      screen.getByRole("group", { name: "Алматыдағы ағымдағы уақыт" }),
    ).toBeTruthy();
  });
});
