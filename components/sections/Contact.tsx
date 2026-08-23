"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Clock3, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { ArrowDown, ChevronDown, Paperclip } from "lucide-react";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";
import { services } from "@/lib/data";

interface ContactProps {
  language: Language;
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export function Contact({ language }: ContactProps) {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [fileName, setFileName] = useState("");
  const t = translations[language];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const quantity = formData.get("quantity") as string;
    const date = formData.get("date") as string;
    const details = formData.get("details") as string;
    
    const subject = encodeURIComponent(`Print Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Company: ${company || "N/A"}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n` +
      `Quantity: ${quantity || "N/A"}\n` +
      `Delivery Date: ${date || "N/A"}\n\n` +
      `Project Details:\n${details}`
    );
    
    window.location.href = `mailto:commercial@xmediaprinting.com?subject=${subject}&body=${body}`;
  };

  return (
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
            <a href="tel:+237682435366">
              <span><Phone size={19} /></span>
              <div><small>{t.callUs}</small><strong>+237 682 435 366</strong></div>
            </a>
            <a href="mailto:commercial@xmediaprinting.com">
              <span><Mail size={19} /></span>
              <div><small>{t.emailUs}</small><strong>commercial@xmediaprinting.com</strong></div>
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
                    <input name="company" type="text" placeholder={language === "en" ? "Business name" : "Nom de l'entreprise"} />
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
                          <option value={service.title.en} key={service.title.en}>{service.title[language]}</option>
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
  );
}
