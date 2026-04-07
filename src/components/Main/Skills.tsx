import "./main.scss";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

const skillCategories = [
    {
        titleKey: "categoryFrontend" as const,
        skills: [
            { path: '/icons/reactjs.svg', name: 'React.js' },
            { path: '/icons/js.svg', name: 'JavaScript' },
            { path: '/icons/ts.svg', name: 'TypeScript' },
            { path: '/icons/html.svg', name: 'HTML5' },
            { path: '/icons/css.svg', name: 'CSS3' },
            { path: '/icons/sass.svg', name: 'SCSS/Sass' },
            { path: '/icons/scomponents.svg', name: 'Styled Components' },
        ]
    },
    {
        titleKey: "categoryBackend" as const,
        skills: [
            { path: '/icons/nodejs.svg', name: 'Node.js' },
            { path: '/icons/mongodb.svg', name: 'MongoDB' },
            { path: '/icons/mysql.svg', name: 'MySQL' },
            { path: '/icons/php.svg', name: 'PHP' },
            { path: '/icons/python.svg', name: 'Python' },
        ]
    },
    {
        titleKey: "categoryTools" as const,
        skills: [
            { path: '/icons/git.svg', name: 'Git/GitHub' },
            { path: '/icons/vscode.svg', name: 'VS Code' },
            { path: '/icons/vercel.svg', name: 'Vercel' },
        ]
    },
];

const aiTags = ["Claude API", "Claude Code", "GPT-4", "Gemini", "DeepSeek", "n8n", "Evolution API"];

export const Skills = () => {
    const { t } = useLanguage();

    return (
        <section className="skills-section" id="skills">
            <motion.div
                className="skills-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">{t.skills.label}</span>
                <h2>{t.skills.heading}</h2>
            </motion.div>
            <div className="skills-categories">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={category.titleKey}
                        className="skill-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    >
                        <h3>{t.skills[category.titleKey]}</h3>
                        <div className="skill-grid">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="skill-item">
                                    <img src={skill.path} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="ai-banner"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="ai-banner-content">
                    <h3>{t.skills.aiBannerTitle}</h3>
                    <p>{t.skills.aiBannerDesc}</p>
                    <div className="ai-tags">
                        {aiTags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
