"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import type { Language } from "@/lib/translations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Offer } from "@/components/sections/Offer";
import { Why } from "@/components/sections/Why";
import { Studio } from "@/components/sections/Studio";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { translations } from "@/lib/translations";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="announcement">
        <Sparkles size={14} aria-hidden="true" />
        <span>{t.promo}</span>
      </div>

      <Header language={language} setLanguage={changeLanguage} />
      <Hero language={language} />
      <Stats language={language} />
      <Services language={language} />
      <Offer language={language} />
      <Why language={language} />
      <Studio language={language} />
      <Process language={language} />
      <Contact language={language} />
      <WhatsAppButton />
      <Footer language={language} />
    </main>
  );
}
