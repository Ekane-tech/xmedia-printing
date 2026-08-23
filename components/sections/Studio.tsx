"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface StudioProps {
  language: Language;
}

export function Studio({ language }: StudioProps) {
  const t = translations[language];

  return (
    <section className="studio" id="about">
      <div className="studio-image">
        <Image
          src="/images/xmedia-location.jpg"
          alt="Xmedia studio location at Optic Laser Building in Douala"
          fill
          sizes="100vw"
        />
      </div>
      <motion.div
        className="studio-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <MapPin size={25} />
        <div>
          <span>{t.visit}</span>
          <strong>{t.address}</strong>
        </div>
        <a
          href="https://maps.google.com/?q=Boulevard+de+la+République+Douala+Cameroon"
          target="_blank"
          rel="noreferrer"
          aria-label="Open location in Google Maps"
        >
          <ArrowUpRight />
        </a>
      </motion.div>
    </section>
  );
}
