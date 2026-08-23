"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import type { Language } from "@/lib/translations";

const promotionCopy = {
  en: {
    kicker: "Latest Facebook offer",
    title: "Quality T-shirts from 1,500 FCFA.",
    body: "TH Clothes × Xmedia brings you comfortable everyday T-shirts in every colour and size—ready to wear or personalise.",
    features: ["100% cotton", "All colours available", "All sizes available", "Comfort, quality and style"],
    locationLabel: "Available at",
    location: "IPPB Street, Bonamoussadi",
    order: "Order on WhatsApp",
    secondLine: "Alternative WhatsApp",
    facebook: "View Xmedia on Facebook",
  },
  fr: {
    kicker: "Dernière offre Facebook",
    title: "T-shirts de qualité dès 1 500 FCFA.",
    body: "TH Clothes × Xmedia vous propose des T-shirts confortables dans toutes les couleurs et toutes les tailles—à porter ou à personnaliser.",
    features: ["100 % coton", "Toutes les couleurs disponibles", "Toutes les tailles disponibles", "Confort, qualité et style"],
    locationLabel: "Disponible à",
    location: "IPPB Street, Bonamoussadi",
    order: "Commander sur WhatsApp",
    secondLine: "Deuxième ligne WhatsApp",
    facebook: "Voir Xmedia sur Facebook",
  },
};

export function TshirtPromotion({ language }: { language: Language }) {
  const t = promotionCopy[language];
  const reduceMotion = useReducedMotion();

  return (
    <section className="tshirt-promotion section" aria-labelledby="tshirt-promotion-title">
      <div className="page-width tshirt-promotion-grid">
        <motion.div
          className="tshirt-promotion-poster"
          initial={reduceMotion ? false : { opacity: 0, x: -45, rotate: -1.5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/tshirt-promotion.svg"
            alt={language === "en" ? "T-shirt promotion from 1,500 FCFA" : "Promotion T-shirts à partir de 1 500 FCFA"}
            fill
            sizes="(max-width: 820px) 100vw, 44vw"
          />
        </motion.div>

        <motion.div
          className="tshirt-promotion-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="eyebrow eyebrow--light"><span />{t.kicker}</div>
          <div className="tshirt-promotion-brands">TH CLOTHES <i>×</i> XMEDIA</div>
          <h2 id="tshirt-promotion-title">{t.title}</h2>
          <p>{t.body}</p>

          <ul>
            {t.features.map((feature) => (
              <li key={feature}><span><Check size={14} /></span>{feature}</li>
            ))}
          </ul>

          <div className="tshirt-promotion-location">
            <MapPin size={21} />
            <div><small>{t.locationLabel}</small><strong>{t.location}</strong></div>
          </div>

          <div className="tshirt-promotion-actions">
            <a href="https://wa.me/237682435366" target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              <span><small>{t.order}</small><strong>682 435 366</strong></span>
            </a>
            <a href="https://wa.me/237651843671" target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              <span><small>{t.secondLine}</small><strong>651 843 671</strong></span>
            </a>
          </div>

          <a className="tshirt-promotion-facebook" href="https://www.facebook.com/xmediaprinting" target="_blank" rel="noreferrer">
            {t.facebook}<ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
