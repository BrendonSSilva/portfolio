import "./main.scss";
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Front-end",
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
        title: "Back-end & Database",
        skills: [
            { path: '/icons/nodejs.svg', name: 'Node.js' },
            { path: '/icons/mongodb.svg', name: 'MongoDB' },
            { path: '/icons/mysql.svg', name: 'MySQL' },
            { path: '/icons/php.svg', name: 'PHP' },
            { path: '/icons/python.svg', name: 'Python' },
        ]
    },
    {
        title: "Ferramentas & Deploy",
        skills: [
            { path: '/icons/git.svg', name: 'Git/GitHub' },
            { path: '/icons/vscode.svg', name: 'VS Code' },
            { path: '/icons/vercel.svg', name: 'Vercel' },
        ]
    },
];

export const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <motion.div
                className="skills-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">Skills</span>
                <h2>Tecnologias & Ferramentas</h2>
            </motion.div>
            <div className="skills-categories">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={category.title}
                        className="skill-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    >
                        <h3>{category.title}</h3>
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
                    <h3>IA & Automação em Produção</h3>
                    <p>Claude API, ChatGPT/GPT-4, Gemini, DeepSeek — integração em produção, não apenas como ferramenta de produtividade.</p>
                    <div className="ai-tags">
                        <span>Claude API</span>
                        <span>Claude Code</span>
                        <span>GPT-4</span>
                        <span>Gemini</span>
                        <span>DeepSeek</span>
                        <span>n8n</span>
                        <span>Evolution API</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
