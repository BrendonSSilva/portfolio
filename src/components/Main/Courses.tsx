import "./main.scss";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

export const Education = () => {
    const { t } = useLanguage();

    return (
        <section className="education" id="formacao">
            <motion.div
                className="education-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">{t.education.label}</span>
                <h2>{t.education.heading}</h2>
            </motion.div>

            <div className="education-content">
                <motion.div
                    className="degree-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="degree-icon">🎓</div>
                    <div className="degree-info">
                        <h3>{t.education.degree}</h3>
                        <p className="degree-institution">{t.education.institution}</p>
                        <span className="degree-status">{t.education.status}</span>
                    </div>
                </motion.div>

                <div className="certifications">
                    <h3 className="cert-title">{t.education.certTitle}</h3>
                    <div className="cert-grid">
                        <motion.div
                            className="cert-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="cert-provider">
                                <img src="/imgs/obc.webp" alt="OneBitCode" />
                                <span>OneBitCode</span>
                            </div>
                            <div className="cert-list">
                                <div className="cert-item">
                                    <span className="cert-name">{t.education.certNodejs}</span>
                                </div>
                                <div className="cert-item">
                                    <span className="cert-name">{t.education.certMongodb}</span>
                                </div>
                                <div className="cert-item">
                                    <span className="cert-name">{t.education.certReact}</span>
                                </div>
                                <div className="cert-item">
                                    <span className="cert-name">{t.education.certNext}</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="cert-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="cert-provider">
                                <img src="/imgs/b7web.webp" alt="B7Web" />
                                <span>B7Web</span>
                            </div>
                            <div className="cert-list">
                                <div className="cert-item">
                                    <span className="cert-name">{t.education.certJs}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
