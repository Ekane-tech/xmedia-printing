"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const advertImages = [
  "/images/promo.png",
  "/images/modern-embroidered-apparel.jpg",
  "/images/modern-keyrings.jpg",
  "/images/modern-personalized-pens.jpg",
  "/images/modern-usb-drives.jpg",
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeAdvert, setActiveAdvert] = useState(0);
  const t = translations[language];
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveAdvert((current) => (current + 1) % advertImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Header language={language} setLanguage={changeLanguage} />
      <Hero language={language} />
      <Stats language={language} />
      <Services language={language} />
      <Studio language={language} />
      <Process language={language} />

      <Contact language={language} />

      <section className="advert-section section" aria-label={t.advertKicker}>
        <div className="page-width">
          <div className="eyebrow"><span />{t.advertKicker}</div>
          <div className="advert-slider">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                className="advert-slide"
                key={advertImages[activeAdvert]}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -70 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {advertImages[activeAdvert] === "/images/promo.png" && (
                  <div className="promo-badge">
                    {language === "en" ? "PROMO" : "PROMO"}
                  </div>
                )}
                <div className="advert-image">
                  <Image
                    className="advert-image-backdrop"
                    src={advertImages[activeAdvert]}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 62vw"
                  />
                  <div className="advert-image-product">
                    <Image
                      src={advertImages[activeAdvert]}
                      alt={`${t.advertKicker} ${activeAdvert + 1}`}
                      fill
                      sizes="(max-width: 800px) 90vw, 54vw"
                    />
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="advert-controls">
              <div className="advert-dots" aria-label={language === "en" ? "Select advert" : "Choisir une annonce"}>
                {advertImages.map((image, index) => (
                  <button
                    type="button"
                    className={activeAdvert === index ? "active" : ""}
                    onClick={() => setActiveAdvert(index)}
                    aria-label={`${language === "en" ? "Show" : "Afficher"} image ${index + 1}`}
                    aria-pressed={activeAdvert === index}
                    key={image}
                  />
                ))}
              </div>
              <div className="advert-arrows">
                <button
                  type="button"
                  onClick={() => setActiveAdvert((activeAdvert - 1 + advertImages.length) % advertImages.length)}
                  aria-label={language === "en" ? "Previous advert" : "Annonce précédente"}
                ><ChevronLeft /></button>
                <button
                  type="button"
                  onClick={() => setActiveAdvert((activeAdvert + 1) % advertImages.length)}
                  aria-label={language === "en" ? "Next advert" : "Annonce suivante"}
                ><ChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
