"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface OfferProps {
  language: Language;
}

export function Offer({ language }: OfferProps) {
  const t = translations[language];
  const reduceMotion = useReducedMotion();

  return (
    <section className="offer-section page-width" aria-label="Special offer">
      <motion.div
        className="offer-banner"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="offer-art" aria-hidden="true">
          <motion.div
            className="offer-art-image"
            whileInView={reduceMotion ? undefined : { rotate: [-5, -2], y: [16, 0] }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/images/flyers-original.png" alt="" fill sizes="360px" />
          </motion.div>
          <span className="offer-dot dot-one" /><span className="offer-dot dot-two" />
        </div>
        <div className="offer-copy">
          <span className="offer-kicker">{t.bannerKicker}</span>
          <h2>{t.bannerTitle}</h2>
          <p>{t.bannerBody}</p>
          <a className="button button--white" href="#contact">
            {t.claimOffer}<ArrowRight size={18} />
          </a>
          <small>{t.terms}</small>
        </div>
        <motion.span
          className="offer-figure"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, type: "spring", stiffness: 160 }}
        >
          15<sup>%</sup>
        </motion.span>
      </motion.div>
    </section>
  );
}
