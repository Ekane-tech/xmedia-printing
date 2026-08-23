"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Printer } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface WhyProps {
  language: Language;
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export function Why({ language }: WhyProps) {
  const t = translations[language];

  return (
    <section className="why section" id="why">
      <div className="page-width why-grid">
        <motion.div
          className="why-visual"
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/embroidery-shop.webp"
            alt="Xmedia-style custom apparel and embroidery production"
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
          />
          <div className="why-badge"><Printer size={22} /><span>PRINTED<br />WITH CARE</span></div>
        </motion.div>
        <motion.div
          className="why-copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="eyebrow" variants={fadeUp}><span />{t.whyKicker}</motion.div>
          <motion.h2 variants={fadeUp}>{t.whyTitle}</motion.h2>
          <motion.p variants={fadeUp}>{t.whyBody}</motion.p>
          <motion.ul variants={fadeUp}>
            {[t.pointOne, t.pointTwo, t.pointThree].map((point) => (
              <li key={point}><span><Check size={15} /></span>{point}</li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
