"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  const closeMenu = () => setMenuOpen(false);
  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <>
      <header className="site-header">
      <a className="brand" href="#top" aria-label="Xmedia home" onClick={closeMenu}>
        <Image
          src="/images/logo.png"
          alt="Xmedia Print and Technologies"
          width={1120}
          height={344}
          priority
        />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#services">{t.navServices}</a>
        <a href="#why">{t.navWork}</a>
        <a href="#about">{t.navAbout}</a>
        <a href="#contact">{t.navContact}</a>
      </nav>

      <div className="header-actions">
        <div className="language-switch" aria-label="Language selection">
          <button
            className={language === "en" ? "active" : ""}
            type="button"
            onClick={() => changeLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button
            className={language === "fr" ? "active" : ""}
            type="button"
            onClick={() => changeLanguage("fr")}
            aria-pressed={language === "fr"}
          >
            FR
          </button>
        </div>
        <a className="header-quote" href="#contact">
          {t.quote}
          <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            aria-label="Mobile navigation"
          >
            <a href="#services" onClick={closeMenu}>{t.navServices}</a>
            <a href="#why" onClick={closeMenu}>{t.navWork}</a>
            <a href="#about" onClick={closeMenu}>{t.navAbout}</a>
            <a href="#contact" onClick={closeMenu}>{t.navContact}</a>
            <a className="mobile-quote" href="#contact" onClick={closeMenu}>{t.quote}</a>
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
