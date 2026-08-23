"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface StatsProps {
  language: Language;
}

export function Stats({ language }: StatsProps) {
  const t = translations[language];

  return (
    <section className="stats-strip" aria-label="Company highlights">
      <div className="page-width stats-grid">
        {[
          ["12+", t.statOne],
          ["100%", t.statTwo],
          ["Douala", t.statThree],
          ["A–Z", t.statFour],
        ].map(([value, label], index) => (
          <motion.div
            className="stat"
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: index * 0.08 }}
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
