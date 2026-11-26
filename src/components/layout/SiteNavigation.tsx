import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { LanguageSwitch } from "../../LanguageSwitch";
import { tx } from "../../language";
import { useLanguage } from "../../language-context";

type NavigationVariant = "portfolio" | "skills";
type NavigationLink = {
  href: string;
  label: string;
  contact?: boolean;
  current?: boolean;
};

export default function SiteNavigation({
  variant,
}: {
  variant: NavigationVariant;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, chooseLanguage } = useLanguage();
  const closeMenu = () => setMenuOpen(false);
  const links: NavigationLink[] =
    variant === "portfolio"
      ? [
          {
            href: "/#about",
            label: tx(language, "About", "Обо мне", "Мен туралы"),
          },
          { href: "/#focus", label: tx(language, "Focus", "Фокус", "Бағыт") },
          {
            href: "/skills",
            label: tx(language, "Skills", "Навыки", "Дағдылар"),
          },
          { href: "/#work", label: tx(language, "Work", "Работы", "Жұмыстар") },
          {
            href: "/#contact",
            label: tx(language, "Get in touch", "Связаться", "Байланысу"),
            contact: true,
          },
        ]
      : [
          {
            href: "/#about",
            label: tx(language, "About", "Обо мне", "Мен туралы"),
          },
          {
            href: "/skills",
            label: tx(language, "Skills", "Навыки", "Дағдылар"),
            current: true,
          },
          { href: "/#work", label: tx(language, "Work", "Работы", "Жұмыстар") },
          {
            href: "/#contact",
            label: tx(language, "Contact", "Контакты", "Байланыс"),
            contact: true,
          },
        ];

  return (
    <header className="nav-wrap">
      {variant === "portfolio" && (
        <div className="reading-progress" aria-hidden="true" />
      )}
      <nav
        className="nav glass"
        aria-label={tx(
          language,
          "Main navigation",
          "Главная навигация",
          "Басты навигация",
        )}
      >
        <a
          className="wordmark"
          href="/"
          onClick={closeMenu}
          aria-label={tx(language, "Damir home", "На главную", "Басты бет")}
        >
          D<span>.</span>
        </a>
        <div
          className={`nav-links ${menuOpen ? "open" : ""}`}
          id="site-navigation-links"
        >
          {links.map((link) => (
            <a
              className={link.contact ? "nav-contact" : undefined}
              href={link.href}
              aria-current={link.current ? "page" : undefined}
              key={link.href}
              onClick={closeMenu}
            >
              {link.label}
              {link.contact && (
                <>
                  {" "}
                  <ArrowUpRight size={14} />
                </>
              )}
            </a>
          ))}
          <LanguageSwitch language={language} onChange={chooseLanguage} />
        </div>
        {variant === "skills" && (
          <a className="back-home" href="/" onClick={closeMenu}>
            <ArrowLeft size={16} />
            <span>{tx(language, "Home", "Главная", "Басты бет")}</span>
          </a>
        )}
        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen
              ? tx(language, "Close menu", "Закрыть меню", "Мәзірді жабу")
              : tx(language, "Open menu", "Открыть меню", "Мәзірді ашу")
          }
          aria-expanded={menuOpen}
          aria-controls="site-navigation-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
