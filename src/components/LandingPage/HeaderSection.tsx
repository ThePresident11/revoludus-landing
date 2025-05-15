"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { smoothScrollTo } from "@/utils/scrollToId";
import { useActiveSection } from "@/hooks/useActiveSection";
import { languages } from "@/lib/i18n/languageData";
import { Language } from "@/lib/i18n/translations";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeaderSection() {
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation(lang);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = t<string[]>("header", "nav");
  const navLinks = [
    { name: navItems[0], id: "pocetna" },
    { name: navItems[1], id: "prednosti" },
    { name: navItems[2], id: "moduli" },
    { name: navItems[3], id: "sportovi" },
    { name: navItems[4], id: "korisnici" },
    { name: navItems[5], id: "paketi" },
    { name: navItems[6], id: "kontakt" },
  ];

  const activeId = useActiveSection(navLinks.map((link) => link.id));

  return (
    <header className="sticky top-0 z-50 bg-rev-blue shadow-md w-full">
      <div className="flex flex-wrap items-center justify-between gap-y-4 px-2 md:px-4 lg:px-6 py-3 mx-auto">
        {/* BLOK 1: LOGO + NASLOVI */}
        <a
          href="#pocetna"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("pocetna", 1000);
          }}
          className="flex items-center gap-3 min-w-0"
        >
          <img
            src="/images/Logo.svg"
            alt="Revoludus logo"
            className="h-10 md:h-12 w-auto drop-shadow-strong"
          />
          <div className="flex flex-col justify-center translate-y-[1px] md:translate-y-[2px] leading-tight">
            <span className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold font-raleway text-white drop-shadow-black tracking-wider whitespace-nowrap truncate leading-tight">
              REVOLUDUS
            </span>
            <p className="text-xs md:text-sm xl:text-base font-raleway font-medium text-rev-orange drop-shadow-white tracking-wider whitespace-nowrap truncate leading-tight">
              {t("header", "subtitle")}
            </p>
          </div>
        </a>

        {/* BLOK 2: NAVIGACIJA - DESKTOP */}
        <nav className="blok-navigacija">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.id, 1000);
                }}
                className={`${isActive ? "active" : "inactive"}`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("downloads", 1000);
            }}
            className="inactive"
          >
            {t("header", "downloads")}
          </a>
        </nav>

        {/* BLOK 3: LOGIN + JEZIK */}
        <div className="blok-auth-lang">
          <button className="btn-accent text-xs xl:text-sm 2xl:text-base whitespace-nowrap truncate">
            {t("header", "login")}
          </button>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            className="selector-lang"
          >
            {languages.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* HAMBURGER MENU IKONA */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="nav-group">
            <div className="nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.id, 1000);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("downloads", 1000);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t("header", "downloads")}
              </a>
            </div>
            <div className="auth-lang">
              <button className="btn-accent">{t("header", "login")}</button>
              <select
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value as Language);
                  setIsMobileMenuOpen(false);
                }}
                className="selector-lang w-full max-w-[140px]"
              >
                {languages.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
