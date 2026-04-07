import "./main.scss";
import React from 'react';
import { motion } from 'framer-motion';

export const Education = () => {
    return (
        <section className="education" id="formacao">
            <motion.div
                className="education-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">Formação</span>
                <h2>Educação & Certificações</h2>
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
                        <h3>Bacharelado em Engenharia de Software</h3>
                        <p className="degree-institution">UNINTER — Centro Universitário Internacional</p>
                        <span className="degree-status">Em andamento</span>
                    </div>
                </motion.div>

                <div className="certifications">
                    <h3 className="cert-title">Certificações</h3>
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
                                    <span className="cert-name">Node.js Avançado & Back-End com Express</span>
                                </div>
                                <div className="cert-item">
                                    <span className="cert-name">MongoDB & Banco de Dados</span>
                                </div>
                                <div className="cert-item">
                                    <span className="cert-name">React.js</span>
                                </div>
                                <div className="cert-item">
                                    <span className="cert-name">Next.js</span>
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
                                    <span className="cert-name">JavaScript, HTML5, CSS3, Bootstrap</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
