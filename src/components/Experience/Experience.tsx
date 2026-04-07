import "./experience.scss";
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Full-Stack Developer & Fundador",
        company: "LocalZoom",
        link: "https://localzoom.com.br",
        period: "Abr 2024 — Presente",
        current: true,
        items: [
            "Arquitetei plataforma SaaS freemium do zero (Node.js + Express + MongoDB) — em produção com listagens ativas e receita recorrente.",
            "API RESTful completa com autenticação JWT, controle de permissões multi-nível e upload de arquivos — zero incidentes de segurança.",
            "UI responsiva pixel-perfect a partir de protótipos Figma com CSS vanilla e otimização SEO on-page.",
            "Agente autônomo de vendas via WhatsApp (Evolution API + n8n + Claude API) que gerencia fluxos B2B/B2C e envia links de pagamento PIX.",
            "Deploy contínuo via Vercel + Git — novas features entregues em menos de 24h.",
        ],
        tags: ["Node.js", "Express", "MongoDB", "React.js", "Claude API", "n8n", "Vercel"]
    },
    {
        role: "Full-Stack Developer",
        company: "AGEDES Web Solutions",
        link: "https://www.agedes.com.br",
        period: "Nov 2022 — Mai 2023 | Mai 2024 — Fev 2025",
        current: false,
        items: [
            "Entregou 8+ sistemas web end-to-end (imobiliário, gestão de estoque) com PHP, MySQL e Bootstrap 5.",
            "Reduziu tempo de entrega de landing pages em ~40% com biblioteca de componentes reutilizáveis.",
            "Traduziu layouts Figma em HTML/CSS/JS pixel-perfect em todos os projetos.",
        ],
        tags: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "Figma"]
    },
    {
        role: "Full-Stack Developer",
        company: "SLS TEM → LocalZoom",
        period: "Nov 2023 — Mar 2024",
        current: false,
        items: [
            "Lançou SPA funcional com React.js + Nullstack.js em 4 meses — prototipado no Figma, validando o conceito que evoluiu para o LocalZoom.",
        ],
        tags: ["React.js", "Nullstack.js", "Figma"]
    },
    {
        role: "Developer & Open Source Contributor",
        company: "Freelancer / Nullstack.js",
        link: "https://nullstack.app",
        period: "Fev 2023 — Nov 2023",
        current: false,
        items: [
            "Contribuiu com testes, otimizações e a tradução oficial em português da documentação do Nullstack.js.",
        ],
        tags: ["Nullstack.js", "Open Source", "Testes"]
    },
];

export const Experience = () => {
    return (
        <section className="experience" id="experiencia">
            <motion.div
                className="experience-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">Experiência</span>
                <h2>Trajetória Profissional</h2>
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
                                {exp.items.map((item, i) => (
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
