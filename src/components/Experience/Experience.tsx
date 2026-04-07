import "./experience.scss";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

const experienceStructure = [
    { link: "https://localzoom.com.br", current: true, tags: ["Node.js", "Express", "MongoDB", "React.js", "Claude API", "n8n", "Vercel"] },
    { link: "https://www.agedes.com.br", current: false, tags: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "Figma"] },
    { link: undefined, current: false, tags: ["React.js", "Nullstack.js", "Figma"] },
    { link: "https://nullstack.app", current: false, tags: ["Nullstack.js", "Open Source", "Testes"] },
];

export const Experience = () => {
    const { t } = useLanguage();

    const experiences = t.experience.items.map((item, i) => ({
        ...item,
        ...experienceStructure[i],
    }));

    return (
        <section className="experience" id="experiencia">
            <motion.div
                className="experience-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">{t.experience.label}</span>
                <h2>{t.experience.heading}</h2>
            </motion.div>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        className={`timeline-item ${exp.current ? 'current' : ''}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="timeline-marker">
                            <div className="marker-dot" />
                            {index < experiences.length - 1 && <div className="marker-line" />}
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-top">
                                <div>
                                    <h3>{exp.role}</h3>
                                    <p className="company">
                                        {exp.link ? (
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                                        ) : (
                                            exp.company
                                        )}
                                    </p>
                                </div>
                                <span className={`period ${exp.current ? 'active' : ''}`}>
                                    {exp.current && <span className="active-dot" />}
                                    {exp.period}
                                </span>
                            </div>
                            <ul>
                                {exp.bullets.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className="exp-tags">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
