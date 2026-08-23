import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
          <a href="tel:+237699893120">+237 699 893 120</a>
          <a href="tel:+237233242403">+237 233 242 403</a>
          <a href="mailto:info@xmediaprinting.com">info@xmediaprinting.com</a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} {t.rights}</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  );
}
