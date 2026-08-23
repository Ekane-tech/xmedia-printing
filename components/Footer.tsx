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
          <Image src="/images/logo.png" alt="Xmedia" width={1120} height={344} />
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
          <a href="tel:+237682435366">+237 682 435 366</a>
          <a href="tel:+237651843671">+237 651 843 671</a>
          <a href="mailto:commercial@xmediaprinting.com">commercial@xmediaprinting.com</a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} {t.rights}</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  );
}
