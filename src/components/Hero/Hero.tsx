import "./hero.scss";
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="hero">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="hero-badge">
                    <span className="badge-icon">&#9670;</span>
                    <span>Estudante de Engenharia de Software</span>
                </div>
                <h1>
                    Brendon <span className="accent">Silva</span>
                </h1>
                <p className="hero-subtitle">
                    Full-Stack Developer &middot; React.js &middot; Node.js &middot; MongoDB &middot; AI-Powered Development
                </p>
                <p className="hero-description">
                    +3 anos construindo plataformas web escaláveis, APIs RESTful e interfaces responsivas —
                    do wireframe no Figma ao deploy em produção. Fundador do <a href="https://localzoom.com.br" target="_blank" rel="noopener noreferrer">LocalZoom</a>,
                    plataforma SaaS com receita recorrente.
                </p>
                <div className="hero-ctas">
                    <a href="https://www.linkedin.com/in/brendon-silva/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                        <img src="/icons/cta-icon.svg" alt="" width="18" height="18" loading="lazy" />
                        Contato
                    </a>
                    <a href="https://github.com/BrendonSSilva" target="_blank" rel="noopener noreferrer" className="cta-secondary">
                        <img src="/icons/github.svg" alt="" width="18" height="18" loading="lazy" />
                        GitHub
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">Anos de Experiência</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-number">2</span>
                        <span className="stat-label">Plataformas Próprias</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-number">8+</span>
                        <span className="stat-label">Sistemas Entregues</span>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="code-window">
                    <div className="code-header">
                        <div className="code-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <span className="code-title">brendon.ts</span>
                    </div>
                    <pre className="code-body">
<code><span className="code-keyword">const</span> <span className="code-var">brendon</span> = {'{'}{'\n'}  <span className="code-prop">role</span>: <span className="code-string">"Full-Stack Developer"</span>,{'\n'}  <span className="code-prop">education</span>: <span className="code-string">"Eng. de Software"</span>,{'\n'}  <span className="code-prop">stack</span>: [<span className="code-string">"JS"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Node"</span>, <span className="code-string">"MongoDB"</span>],{'\n'}  <span className="code-prop">ai</span>: [<span className="code-string">"Claude API"</span>, <span className="code-string">"GPT-4"</span>],{'\n'}  <span className="code-prop">founder</span>: <span className="code-bool">true</span>,{'\n'}  <span className="code-prop">openToWork</span>: <span className="code-bool">true</span>{'\n'}{'}'}</code>
                    </pre>
                </div>
            </motion.div>
        </section>
    );
};
