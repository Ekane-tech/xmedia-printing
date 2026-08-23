"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "./data/services";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Paperclip,
  Phone,
  Printer,
  Sparkles,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type Language = "en" | "fr";

const copy = {
  en: {
    promo: "Free artwork check on every confirmed order",
    navServices: "Services",
    navWork: "Why Xmedia",
    navAbout: "About",
    navContact: "Contact",
    quote: "Get a quote",
    heroKicker: "Print, technology & visual impact",
    heroTitleA: "MAKE YOUR",
    heroTitleB: "BRAND",
    heroTitleC: "UNMISSABLE.",
    heroBody:
      "From one bold idea to a complete visual rollout, we print the pieces that put your business in front of the right people.",
    explore: "Explore our work",
    talk: "Talk to our team",
    scroll: "Scroll to discover",
    heroCardLabel: "Made in Douala",
    heroCardTitle: "Colour that works harder.",
    heroCardText: "Sharp detail. Durable finishes. Fast, human service.",
    statOne: "Print solutions",
    statTwo: "Quality control",
    statThree: "Local support",
    statFour: "From file to finish",
    servicesKicker: "Our products & services",
    servicesTitle: "The same trusted products, presented more clearly.",
    servicesBody:
      "Explore Xmedia’s original product range. Open any service to see details, production options and more examples.",
    serviceCta: "View service",
    advertKicker: "Xmedia in colour",
    advertTitle: "Ideas made visible.",
    advertBody: "Explore a selection of the products and finishes available from our Douala studio.",
    advertCta: "Discover this service",
    whyKicker: "Why Xmedia",
    whyTitle: "Good print is more than ink on a page.",
    whyBody:
      "It is the texture people remember, the colour they recognise and the finish that earns a second look. We combine practical guidance with dependable production—right here in Douala.",
    pointOne: "Clear advice before we print",
    pointTwo: "Careful colour and finish checks",
    pointThree: "Solutions for one-offs or volume runs",
    visit: "Visit our studio",
    address: "Optic Laser Building, Boulevard de la République, Douala",
    processKicker: "Simple by design",
    processTitle: "From idea to ready, in three clear steps.",
    process1: "Tell us what you need",
    process1Body: "Share your size, quantity, deadline and artwork—or just your idea.",
    process2: "We refine the details",
    process2Body: "Our team checks your file, recommends materials and confirms a quote.",
    process3: "We print & finish",
    process3Body: "Production starts after approval, with quality checks before collection.",
    formKicker: "Let’s make something visible",
    formTitle: "Tell us about your next print.",
    formBody:
      "Send a few project details and our Douala team will help you choose the right format and finish.",
    callUs: "Call us",
    officeLine: "Office line",
    emailUs: "Email us",
    hours: "Working hours",
    hoursValue: "Mon–Sat · 8:00–18:00",
    name: "Full name",
    company: "Company / organisation",
    phone: "Phone number",
    email: "Email address",
    service: "What would you like to print?",
    choose: "Choose a service",
    quantity: "Estimated quantity",
    date: "Ideal delivery date",
    details: "Project details",
    detailsPlaceholder: "Tell us about the size, finish, colours or idea you have in mind...",
    attach: "Attach your artwork",
    attachHint: "PDF, AI, PSD, PNG or JPG · max. 10 MB",
    consent: "I agree to be contacted about this quote request.",
    send: "Request my quote",
    sending: "Sending request...",
    successTitle: "Your request is ready!",
    successBody: "Thanks—our team will review the details and contact you shortly.",
    another: "Send another request",
    footerLine: "Print boldly. Show up brilliantly.",
    footerExplore: "Explore",
    footerContact: "Contact",
    rights: "Xmedia Print & Technologies. All rights reserved.",
  },
  fr: {
    promo: "Vérification gratuite de vos fichiers pour toute commande confirmée",
    navServices: "Services",
    navWork: "Pourquoi Xmedia",
    navAbout: "À propos",
    navContact: "Contact",
    quote: "Demander un devis",
    heroKicker: "Impression, technologie & impact visuel",
    heroTitleA: "RENDEZ VOTRE",
    heroTitleB: "MARQUE",
    heroTitleC: "REMARQUABLE.",
    heroBody:
      "D’une idée audacieuse à une campagne complète, nous imprimons les supports qui placent votre entreprise sous les bons regards.",
    explore: "Découvrir nos réalisations",
    talk: "Parler à notre équipe",
    scroll: "Défiler pour découvrir",
    heroCardLabel: "Fabriqué à Douala",
    heroCardTitle: "Des couleurs qui travaillent plus fort.",
    heroCardText: "Détails nets. Finitions durables. Service rapide et humain.",
    statOne: "Solutions d’impression",
    statTwo: "Contrôle qualité",
    statThree: "Accompagnement local",
    statFour: "Du fichier à la finition",
    servicesKicker: "Nos produits & services",
    servicesTitle: "Les mêmes produits de confiance, présentés plus clairement.",
    servicesBody:
      "Découvrez la gamme originale de Xmedia. Ouvrez chaque service pour consulter les détails, options et exemples.",
    serviceCta: "Voir le service",
    advertKicker: "Xmedia en couleur",
    advertTitle: "Des idées rendues visibles.",
    advertBody: "Découvrez une sélection de produits et finitions disponibles dans notre atelier de Douala.",
    advertCta: "Découvrir ce service",
    whyKicker: "Pourquoi Xmedia",
    whyTitle: "Une belle impression, c’est bien plus que de l’encre.",
    whyBody:
      "C’est la texture dont on se souvient, la couleur que l’on reconnaît et la finition qui attire un second regard. Nous combinons conseils pratiques et production fiable, ici même à Douala.",
    pointOne: "Des conseils clairs avant impression",
    pointTwo: "Un contrôle attentif des couleurs et finitions",
    pointThree: "Des solutions à l’unité ou en grande série",
    visit: "Visiter notre atelier",
    address: "Immeuble Optic Laser, Boulevard de la République, Douala",
    processKicker: "Simple par nature",
    processTitle: "De l’idée au produit fini, en trois étapes.",
    process1: "Expliquez-nous votre besoin",
    process1Body: "Partagez format, quantité, délai et fichier—ou simplement votre idée.",
    process2: "Nous affinons les détails",
    process2Body: "Notre équipe vérifie le fichier, conseille les supports et confirme le devis.",
    process3: "Nous imprimons & finissons",
    process3Body: "Après validation, la production démarre avec un contrôle avant livraison.",
    formKicker: "Créons quelque chose de visible",
    formTitle: "Parlez-nous de votre prochain projet.",
    formBody:
      "Envoyez quelques détails et notre équipe de Douala vous aidera à choisir le bon format et la bonne finition.",
    callUs: "Appelez-nous",
    officeLine: "Ligne fixe",
    emailUs: "Écrivez-nous",
    hours: "Horaires",
    hoursValue: "Lun–Sam · 8h00–18h00",
    name: "Nom complet",
    company: "Entreprise / organisation",
    phone: "Numéro de téléphone",
    email: "Adresse e-mail",
    service: "Que souhaitez-vous imprimer ?",
    choose: "Choisir un service",
    quantity: "Quantité estimée",
    date: "Date de livraison souhaitée",
    details: "Détails du projet",
    detailsPlaceholder: "Parlez-nous du format, de la finition, des couleurs ou de votre idée...",
    attach: "Joindre votre fichier",
    attachHint: "PDF, AI, PSD, PNG ou JPG · 10 Mo max.",
    consent: "J’accepte d’être contacté(e) au sujet de cette demande.",
    send: "Demander mon devis",
    sending: "Envoi en cours...",
    successTitle: "Votre demande est prête !",
    successBody: "Merci—notre équipe étudiera les détails et vous contactera rapidement.",
    another: "Envoyer une autre demande",
    footerLine: "Imprimez avec audace. Brillez partout.",
    footerExplore: "Explorer",
    footerContact: "Contact",
    rights: "Xmedia Print & Technologies. Tous droits réservés.",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

const advertServices = services;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [fileName, setFileName] = useState("");
  const [activeAdvert, setActiveAdvert] = useState(0);
  const t = copy[language];
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveAdvert((current) => (current + 1) % advertServices.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("sending");
    window.setTimeout(() => setFormState("sent"), 850);
  };

  const closeMenu = () => setMenuOpen(false);
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

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Xmedia home" onClick={closeMenu}>
          <Image
            src="/images/xmedia-logo.png"
            alt="Xmedia Print and Technologies"
            width={1120}
            height={344}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">{t.navServices}</a>
          <a href="#why">{t.navWork}</a>
          <a href="#about">{t.navAbout}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language selection">
            <button
              className={language === "en" ? "active" : ""}
              type="button"
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              className={language === "fr" ? "active" : ""}
              type="button"
              onClick={() => changeLanguage("fr")}
              aria-pressed={language === "fr"}
            >
              FR
            </button>
          </div>
          <a className="header-quote" href="#contact">
            {t.quote}
            <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              aria-label="Mobile navigation"
            >
              <a href="#services" onClick={closeMenu}>{t.navServices}</a>
              <a href="#why" onClick={closeMenu}>{t.navWork}</a>
              <a href="#about" onClick={closeMenu}>{t.navAbout}</a>
              <a href="#contact" onClick={closeMenu}>{t.navContact}</a>
              <a className="mobile-quote" href="#contact" onClick={closeMenu}>{t.quote}</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

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
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.62, delay: (index % 3) * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
              >
                <div className="service-image">
                  <Image
                    src={service.images[0]}
                    alt={service.title[language]}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 40vw"
                  />
                  <span className="service-number">{service.number}</span>
                </div>
                <div className="service-content">
                  <h3>{service.title[language]}</h3>
                  <p>{service.shortDescription[language]}</p>
                  <Link href={`/services/${service.slug}`} aria-label={`${t.serviceCta}: ${service.title[language]}`}>
                    {t.serviceCta}<ArrowUpRight size={17} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="advert-section section" aria-label={t.advertKicker}>
        <div className="page-width">
          <motion.div
            className="advert-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <div>
              <motion.div className="eyebrow" variants={fadeUp}><span />{t.advertKicker}</motion.div>
              <motion.h2 variants={fadeUp}>{t.advertTitle}</motion.h2>
            </div>
            <motion.p variants={fadeUp}>{t.advertBody}</motion.p>
          </motion.div>

          <div className="advert-slider">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                className="advert-slide"
                key={advertServices[activeAdvert].slug}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -70 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="advert-image">
                  <Image
                    className="advert-image-backdrop"
                    src={advertServices[activeAdvert].images[0]}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 62vw"
                  />
                  <div className="advert-image-product">
                    <Image
                      src={advertServices[activeAdvert].images[0]}
                      alt={advertServices[activeAdvert].title[language]}
                      fill
                      sizes="(max-width: 800px) 90vw, 54vw"
                    />
                  </div>
                </div>
                <div className="advert-copy">
                  <span>{advertServices[activeAdvert].number} / 06</span>
                  <h3>{advertServices[activeAdvert].title[language]}</h3>
                  <p>{advertServices[activeAdvert].shortDescription[language]}</p>
                  <Link href={`/services/${advertServices[activeAdvert].slug}`}>
                    {t.advertCta}<ArrowRight size={18} />
                  </Link>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="advert-controls">
              <div className="advert-dots" aria-label="Select advert">
                {advertServices.map((service, index) => (
                  <button
                    type="button"
                    className={activeAdvert === index ? "active" : ""}
                    onClick={() => setActiveAdvert(index)}
                    aria-label={`${language === "en" ? "Show" : "Afficher"} ${service.title[language]}`}
                    aria-pressed={activeAdvert === index}
                    key={service.slug}
                  />
                ))}
              </div>
              <div className="advert-arrows">
                <button
                  type="button"
                  onClick={() => setActiveAdvert((activeAdvert - 1 + advertServices.length) % advertServices.length)}
                  aria-label={language === "en" ? "Previous advert" : "Annonce précédente"}
                ><ChevronLeft /></button>
                <button
                  type="button"
                  onClick={() => setActiveAdvert((activeAdvert + 1) % advertServices.length)}
                  aria-label={language === "en" ? "Next advert" : "Annonce suivante"}
                ><ChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="contact section" id="contact">
        <div className="page-width contact-grid">
          <motion.div
            className="contact-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="eyebrow" variants={fadeUp}><span />{t.formKicker}</motion.div>
            <motion.h2 variants={fadeUp}>{t.formTitle}</motion.h2>
            <motion.p variants={fadeUp}>{t.formBody}</motion.p>
            <motion.div className="contact-list" variants={fadeUp}>
              <a href="tel:+237699893120">
                <span><Phone size={19} /></span>
                <div><small>{t.callUs}</small><strong>+237 699 893 120</strong></div>
              </a>
              <a href="tel:+237233242403">
                <span><Phone size={19} /></span>
                <div><small>{t.officeLine}</small><strong>+237 233 242 403</strong></div>
              </a>
              <a href="mailto:info@xmediaprinting.com">
                <span><Mail size={19} /></span>
                <div><small>{t.emailUs}</small><strong>info@xmediaprinting.com</strong></div>
              </a>
              <div>
                <span><Clock3 size={19} /></span>
                <div><small>{t.hours}</small><strong>{t.hoursValue}</strong></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="form-wrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <AnimatePresence mode="wait">
              {formState === "sent" ? (
                <motion.div
                  className="form-success"
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span><Check /></span>
                  <h3>{t.successTitle}</h3>
                  <p>{t.successBody}</p>
                  <button type="button" onClick={() => setFormState("idle")}>{t.another}</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0 }}>
                  <div className="form-grid">
                    <label className="field">
                      <span>{t.name} *</span>
                      <input name="name" type="text" required placeholder={language === "en" ? "Your name" : "Votre nom"} />
                    </label>
                    <label className="field">
                      <span>{t.company}</span>
                      <input name="company" type="text" placeholder={language === "en" ? "Business name" : "Nom de l’entreprise"} />
                    </label>
                    <label className="field">
                      <span>{t.phone} *</span>
                      <input name="phone" type="tel" required placeholder="+237 6XX XXX XXX" />
                    </label>
                    <label className="field">
                      <span>{t.email} *</span>
                      <input name="email" type="email" required placeholder="hello@company.com" />
                    </label>
                    <label className="field field--full">
                      <span>{t.service} *</span>
                      <div className="select-wrap">
                        <select name="service" required defaultValue="">
                          <option value="" disabled>{t.choose}</option>
                          {services.map((service) => (
                            <option value={service.title.en} key={service.number}>{service.title[language]}</option>
                          ))}
                        </select>
                        <ChevronDown size={18} aria-hidden="true" />
                      </div>
                    </label>
                    <label className="field">
                      <span>{t.quantity}</span>
                      <input name="quantity" type="number" min="1" placeholder="500" />
                    </label>
                    <label className="field">
                      <span>{t.date}</span>
                      <input name="date" type="date" />
                    </label>
                    <label className="field field--full">
                      <span>{t.details} *</span>
                      <textarea name="details" required rows={5} placeholder={t.detailsPlaceholder} />
                    </label>
                    <div className="field field--full upload-field">
                      <span>{t.attach}</span>
                      <label className="upload-control">
                        <input
                          type="file"
                          name="artwork"
                          accept=".pdf,.ai,.psd,.png,.jpg,.jpeg"
                          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
                        />
                        <Paperclip size={19} />
                        <span>{fileName || t.attachHint}</span>
                      </label>
                    </div>
                    <label className="consent field--full">
                      <input type="checkbox" name="consent" required />
                      <span className="custom-check"><Check size={14} /></span>
                      <span>{t.consent}</span>
                    </label>
                  </div>
                  <button className="form-submit" type="submit" disabled={formState === "sending"}>
                    <span>{formState === "sending" ? t.sending : t.send}</span>
                    <ArrowUpRight size={20} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <a className="whatsapp" href="https://wa.me/237699893120" target="_blank" rel="noreferrer" aria-label="Chat with Xmedia on WhatsApp">
        <MessageCircle size={22} />
      </a>

      <footer className="footer">
        <div className="page-width footer-main">
          <div className="footer-brand">
            <Image src="/images/xmedia-logo.png" alt="Xmedia" width={1120} height={344} />
            <p>{t.footerLine}</p>
          </div>
          <div className="footer-nav">
            <span>{t.footerExplore}</span>
            <a href="#services">{t.navServices}</a>
            <a href="#why">{t.navWork}</a>
            <a href="#about">{t.navAbout}</a>
          </div>
          <div className="footer-nav">
            <span>{t.footerContact}</span>
            <a href="tel:+237699893120">+237 699 893 120</a>
            <a href="tel:+237233242403">+237 233 242 403</a>
            <a href="mailto:info@xmediaprinting.com">info@xmediaprinting.com</a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} {t.rights}</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
