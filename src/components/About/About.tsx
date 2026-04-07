import "./about.scss";
import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
    { icon: "🎓", title: "Engenharia de Software", desc: "Bacharelado em andamento — UNINTER" },
    { icon: "🚀", title: "Fundador do LocalZoom", desc: "SaaS em produção com receita recorrente" },
    { icon: "🤖", title: "IA em Produção", desc: "Claude API, GPT-4, agentes autônomos" },
    { icon: "🌍", title: "Open Source", desc: "Contribuidor ativo — Nullstack.js" },
];

export const About = () => {
    return (
        <section className="about" id="sobre">
            <motion.div
                className="about-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">Sobre Mim</span>
                <h2>Engenheiro de Software <span className="accent">&</span> Desenvolvedor Full-Stack</h2>
                <p className="about-text">
                    Desenvolvedor Full-Stack com mais de 3 anos construindo plataformas web escaláveis,
                    APIs RESTful e interfaces responsivas. Atualmente cursando <strong>Engenharia de Software na UNINTER</strong>,
                    combinando fundamentos acadêmicos com experiência prática em produção.
                </p>
                <p className="about-text">
                    Integro IA (Claude API, GPT-4, Gemini, DeepSeek) em fluxos reais de produto —
                    entregando agentes autônomos, não apenas usando IA como ferramenta de texto.
                    Ownership completo: do Figma ao deploy.
                </p>
            </motion.div>
            <div className="about-highlights">
                {highlights.map((item, index) => (
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
