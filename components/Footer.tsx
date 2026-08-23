import Image from "next/image";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="page-width footer-main">
        <div className="footer-brand">
          <Image src="/images/xmedia-logo.png" alt="Xmedia" width={1120} height={344} />
          <p>{t.footerLine}</p>
        </div>
        <div className="footer-nav">
          <span>{t.footerExplore}</span>
          <a href="#services">{t.navServices}</a>
          <a href="#why">{t.navWork}</a>
          <a href="#about">{t.navAbout}</a>
        </div>
        <div className="footer-nav">
          <span>{t.footerContact}</span>
          <a href="#contact">{t.navContact}</a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <p>{t.rights}</p>
      </div>
    </footer>
  );
}
