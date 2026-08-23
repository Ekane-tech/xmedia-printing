"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Language, PrintService } from "../../data/services";
import { services } from "../../data/services";

const detailCopy = {
  en: {
    back: "Back to home",
    products: "Products & services",
    intro: "Xmedia print service",
    gallery: "Product gallery",
    previous: "Previous image",
    next: "Next image",
    overview: "Service overview",
    available: "What is available",
    discuss: "Discuss this service",
    other: "Explore more Xmedia products",
    seeProduct: "View product",
    ctaKicker: "Have a project in mind?",
    ctaTitle: "Let’s turn it into something people can see.",
    quote: "Request a quote",
    call: "Call +237 699 893 120",
    rights: "Xmedia Print & Technologies. All rights reserved.",
  },
  fr: {
    back: "Retour à l’accueil",
    products: "Produits & services",
    intro: "Service d’impression Xmedia",
    gallery: "Galerie du produit",
    previous: "Image précédente",
    next: "Image suivante",
    overview: "Présentation du service",
    available: "Options disponibles",
    discuss: "Discuter de ce service",
    other: "Découvrir les autres produits Xmedia",
    seeProduct: "Voir le produit",
    ctaKicker: "Vous avez un projet ?",
    ctaTitle: "Transformons-le en un support que tout le monde verra.",
    quote: "Demander un devis",
    call: "Appeler le +237 699 893 120",
    rights: "Xmedia Print & Technologies. Tous droits réservés.",
  },
};

export default function ServiceDetails({ service }: { service: PrintService }) {
  const [language, setLanguage] = useState<Language>("en");
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const t = detailCopy[language];
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveImage((current) => (current + 1) % service.images.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [service.images.length]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const showImage = (nextImage: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveImage((nextImage + service.images.length) % service.images.length);
  };

  return (
    <main className="service-page">
      <div className="service-topline">
        <span>{service.title[language]}</span>
        <div>
          <a href="tel:+237699893120">+237 699 893 120</a>
          <i aria-hidden="true" />
          <a href="tel:+237233242403">+237 233 242 403</a>
        </div>
      </div>

      <header className="service-header page-width">
        <Link className="service-brand" href="/" aria-label="Xmedia home">
          <Image src="/images/xmedia-logo.png" alt="Xmedia Print and Technologies" width={1120} height={344} priority />
        </Link>
        <nav>
          <Link href="/#services"><ArrowLeft size={17} />{t.back}</Link>
          <span>{t.products}</span>
        </nav>
        <div className="service-language" aria-label="Language selection">
          <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} type="button">EN</button>
          <span>/</span>
          <button className={language === "fr" ? "active" : ""} onClick={() => changeLanguage("fr")} type="button">FR</button>
        </div>
      </header>

      <section className="service-hero">
        <div className="page-width service-hero-grid">
          <motion.div
            className="service-hero-copy"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="eyebrow eyebrow--light"><span />{t.intro}</div>
            <span className="service-index">{service.number} / 06</span>
            <h1>{service.title[language]}</h1>
            <p>{service.shortDescription[language]}</p>
            <Link className="button button--pink" href="/#contact">
              {t.discuss}<ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="service-gallery"
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <div className="service-gallery-label">{t.gallery}</div>
            <div className="service-gallery-stage">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  className="service-gallery-image"
                  key={`${service.slug}-${activeImage}`}
                  custom={direction}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 90 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -90 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    className="service-gallery-blur"
                    src={service.images[activeImage]}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                  />
                  <div className="service-gallery-product">
                    <Image
                      src={service.images[activeImage]}
                      alt={`${service.title[language]} ${activeImage + 1}`}
                      fill
                      priority={activeImage === 0}
                      sizes="(max-width: 900px) 90vw, 48vw"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="service-gallery-controls">
              <span>{String(activeImage + 1).padStart(2, "0")} / {String(service.images.length).padStart(2, "0")}</span>
              <div>
                <button type="button" onClick={() => showImage(activeImage - 1, -1)} aria-label={t.previous}><ChevronLeft /></button>
                <button type="button" onClick={() => showImage(activeImage + 1, 1)} aria-label={t.next}><ChevronRight /></button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="service-overview section">
        <div className="page-width service-overview-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="eyebrow"><span />{t.overview}</div>
            <h2>{service.title[language]}</h2>
          </motion.div>
          <motion.div
            className="service-overview-content"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1 }}
          >
            <p>{service.description[language]}</p>
            <h3>{t.available}</h3>
            <ul>
              {service.features[language].map((feature) => (
                <li key={feature}><span><Check size={15} /></span>{feature}</li>
              ))}
            </ul>
            <Link href="/#contact">{t.discuss}<ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      <section className="related-products section">
        <div className="page-width">
          <div className="related-heading">
            <div className="eyebrow eyebrow--light"><span />{t.products}</div>
            <h2>{t.other}</h2>
          </div>
          <div className="related-grid">
            {relatedServices.map((related, index) => (
              <motion.article
                key={related.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={`/services/${related.slug}`}>
                  <div className="related-image">
                    <Image src={related.images[0]} alt={related.title[language]} fill sizes="(max-width: 700px) 100vw, 33vw" />
                    <span>{related.number}</span>
                  </div>
                  <div className="related-copy">
                    <h3>{related.title[language]}</h3>
                    <span>{t.seeProduct}<ArrowUpRight size={16} /></span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="page-width">
          <div>
            <span>{t.ctaKicker}</span>
            <h2>{t.ctaTitle}</h2>
          </div>
          <div>
            <Link className="button button--pink" href="/#contact">{t.quote}<ArrowRight size={18} /></Link>
            <a className="service-call" href="tel:+237699893120"><Phone size={17} />{t.call}</a>
          </div>
        </div>
      </section>

      <a className="whatsapp" href="https://wa.me/237699893120" target="_blank" rel="noreferrer" aria-label="Chat with Xmedia on WhatsApp">
        <MessageCircle size={22} />
      </a>

      <footer className="service-footer">
        <div className="page-width">
          <Image src="/images/xmedia-logo.png" alt="Xmedia" width={1120} height={344} />
          <span>© {new Date().getFullYear()} {t.rights}</span>
          <a href="mailto:info@xmediaprinting.com"><Mail size={16} />info@xmediaprinting.com</a>
        </div>
      </footer>
    </main>
  );
}
