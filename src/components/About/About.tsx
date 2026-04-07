import "./about.scss";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

export const About = () => {
    const { t } = useLanguage();

    return (
        <section className="about" id="sobre">
            <motion.div
                className="about-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">{t.about.label}</span>
                <h2>{t.about.headingPrefix} <span className="accent">&</span> {t.about.headingSuffix}</h2>
                <p className="about-text">
                    {t.about.text1Prefix}{' '}
                    <strong>{t.about.text1Highlight}</strong>
                    {t.about.text1Suffix}
                </p>
                <p className="about-text">
                    {t.about.text2}
                </p>
            </motion.div>
            <div className="about-highlights">
                {t.about.highlights.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="highlight-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="highlight-icon">{item.icon}</span>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
