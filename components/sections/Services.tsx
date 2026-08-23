"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";
import { services } from "@/lib/data";

interface ServicesProps {
  language: Language;
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export function Services({ language }: ServicesProps) {
  const t = translations[language];
  const reduceMotion = useReducedMotion();

  return (
    <section className="services section" id="services">
      <div className="page-width">
        <motion.div
          className="section-heading section-heading--split"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <div>
            <motion.div className="eyebrow" variants={fadeUp}><span />{t.servicesKicker}</motion.div>
            <motion.h2 variants={fadeUp}>{t.servicesTitle}</motion.h2>
          </div>
          <motion.p variants={fadeUp}>{t.servicesBody}</motion.p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className={`service-card ${service.className}`}
              key={service.number}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.62, delay: (index % 3) * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={service.title[language]}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 40vw"
                />
                <span className="service-number">{service.number}</span>
              </div>
              <div className="service-content">
                <h3>{service.title[language]}</h3>
                <p>{service.description[language]}</p>
                <a href="#contact" aria-label={`${t.serviceCta}: ${service.title[language]}`}>
                  {t.serviceCta}<ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
