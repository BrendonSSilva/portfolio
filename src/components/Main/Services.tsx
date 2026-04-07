import "./main.scss";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: '{ }',
        service: 'Desenvolvimento Web',
        description: 'Plataformas web escaláveis, SPAs e sistemas completos com React.js, Node.js e MongoDB. Do wireframe ao deploy em produção.'
    },
    {
        icon: '⚡',
        service: 'APIs & Back-end',
        description: 'APIs RESTful robustas com autenticação JWT, controle de permissões e integração com serviços externos. Node.js + Express.'
    },
    {
        icon: '🎨',
        service: 'Design & UI/UX',
        description: 'Interfaces pixel-perfect a partir de protótipos Figma. Design responsivo mobile-first com foco em experiência do usuário.'
    },
    {
        icon: '🤖',
        service: 'IA & Automação',
        description: 'Agentes autônomos, chatbots inteligentes e automações com Claude API, GPT-4, n8n e Evolution API para WhatsApp.'
    },
];

export const Services = () => {
    return (
        <section className="services" id="servicos">
            <motion.div
                className="services-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">Serviços</span>
                <h2>O que eu faço</h2>
            </motion.div>
            <div className="services-grid">
                {services.map((item, index) => (
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
