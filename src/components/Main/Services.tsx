import "./main.scss";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="services" id="servicos">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">{t.services.label}</span>
        <h2>{t.services.heading}</h2>
      </motion.div>
      <div className="services-grid">
        {t.services.items.map((item, index) => (
          <motion.div
            key={item.service}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="service-icon">{item.icon}</span>
            <h4>{item.service}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
