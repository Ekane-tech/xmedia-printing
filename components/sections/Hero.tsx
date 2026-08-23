"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface HeroProps {
  language: Language;
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export function Hero({ language }: HeroProps) {
  const t = translations[language];
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true">
        <motion.div
          className="hero-image-inner"
          initial={reduceMotion ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/large-format-printing.jpg"
            alt="Professional large-format printer producing colourful campaign materials"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </motion.div>
      </div>
      <div className="hero-wash" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="hero-content page-width">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }}
        >
          <motion.div className="eyebrow eyebrow--light" variants={fadeUp}>
            <span /> {t.heroKicker}
          </motion.div>
          <h1>
            <motion.span variants={fadeUp}>{t.heroTitleA}</motion.span>
            <motion.span className="hero-word" variants={fadeUp}>{t.heroTitleB}</motion.span>
            <motion.span variants={fadeUp}>{t.heroTitleC}</motion.span>
          </h1>
          <motion.p variants={fadeUp}>{t.heroBody}</motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="button button--pink" href="#services">
              {t.explore}<ArrowDown size={18} />
            </a>
            <a className="text-link text-link--light" href="#contact">
              {t.talk}<ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.aside
        className="hero-note"
        initial={reduceMotion ? false : { opacity: 0, x: 36, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
      >
        <span className="hero-note-label">{t.heroCardLabel}</span>
        <strong>{t.heroCardTitle}</strong>
        <p>{t.heroCardText}</p>
        <div className="print-bars" aria-hidden="true"><span /><span /><span /></div>
      </motion.aside>

      <div className="scroll-cue">
        <span>{t.scroll}</span><ArrowDown size={16} />
      </div>
    </section>
  );
}
