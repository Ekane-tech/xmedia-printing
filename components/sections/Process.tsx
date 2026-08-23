"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface ProcessProps {
  language: Language;
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export function Process({ language }: ProcessProps) {
  const t = translations[language];

  return (
    <section className="process section">
      <div className="page-width">
        <motion.div
          className="section-heading process-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="eyebrow eyebrow--light" variants={fadeUp}><span />{t.processKicker}</motion.div>
          <motion.h2 variants={fadeUp}>{t.processTitle}</motion.h2>
        </motion.div>
        <div className="process-grid">
          {[
            [t.process1, t.process1Body],
            [t.process2, t.process2Body],
            [t.process3, t.process3Body],
          ].map(([title, body], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.12 }}
            >
              <span>0{index + 1}</span>
              <div className="process-line"><i /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
