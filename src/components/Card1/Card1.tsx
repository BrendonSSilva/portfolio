import React from 'react';

import "./styles.scss";
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom';

const cards = [
    {
        name: "LocalZoom",
        img: '/imgs/localzoom1.svg',
        description: [{ item: "Plataforma SaaS Freemium" }, { item: "Node.js + Express + MongoDB" }, { item: "Agente IA WhatsApp" }, { item: "Abr 2024 — Presente" }],
        cargos: [{ cargo: "Fundador" }, { cargo: "Dev Full-Stack" }],
        type: 1,
        link: 'https://localzoom.com.br',
        github: 'https://github.com/BrendonSSilva/Local-Zoom',
    },
    {
        name: "AGEDES",
        img: '/imgs/agedes.png',
        description: [{ item: "8+ Sistemas Web End-to-End" }, { item: "PHP + MySQL + Bootstrap 5" }, { item: "Nov 2022 — Fev 2025" }],
        cargos: [{ cargo: "Dev Full-Stack" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.agedes.com.br'
    },
    {
        name: "SLS TEM",
        img: '/imgs/slstem.png',
        description: [{ item: "SPA React.js + Nullstack.js" }, { item: "Protótipo que evoluiu ao LocalZoom" }, { item: "Nov 2023 — Mar 2024" }],
        cargos: [{ cargo: "Dev Full-Stack" }, { cargo: "Designer" }],
        type: 0,
        github: 'https://github.com/BrendonSSilva/sls-tem',
        link: 'https://www.slstem.com.br'
    },
    {
        name: "Nullstack.js",
        img: '/imgs/nullstack.png',
        description: [{ item: "Contribuidor Open Source" }, { item: "Testes & Otimizações" }, { item: "Tradução PT-BR Oficial" }, { item: "Fev — Nov 2023" }],
        cargos: [{ cargo: "Developer" }, { cargo: "Contributor" }],
        type: 1,
        github: 'https://github.com/nullstack',
        link: 'https://nullstack.app'
    },
    {
        name: "Rei Arthur Esquadrias de Alumínio",
        img: '/imgs/rei-arthur-logo.png',
        description: [{ item: "Artes Visuais & Vídeos" }, { item: "Social Media" }, { item: "Novembro — Presente" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/reiarthuresquadriasdealuminio/'
    },
    ,
    {
        name: "SulLed",
        img: '/imgs/sulled.png',
        description: [{ item: "Social Media & Design" }, { item: "Cronogramas de Publicações" }, { item: "Ago — Nov 2023" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/suledsls/'
    },
    {
        name: "Oficina da Barba",
        img: '/imgs/oficinadabarba.png',
        description: [{ item: "Artes Visuais & Vídeos" }, { item: "Social Media" }, { item: "2023/24" }],
        cargos: [{ cargo: "Designer" }, { cargo: "Editor de Vídeos" }],
        type: 0,
        link: 'https://www.instagram.com/oficinadabarbaa/'
    },
    {
        name: "Kael Barber",
        img: '/imgs/kael.png',
        description: [{ item: "Artes Visuais & Vídeos" }, { item: "Social Media" }, { item: "2022" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/kaelbarberstudio/'
    },
    {
        name: "Dexter Barbearia",
        img: '/imgs/dexter.png',
        description: [{ item: "Artes Visuais & Vídeos" }, { item: "Social Media" }, { item: "2022" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/dexterbarbeiro/'
    },
    {
        name: "Raquel Despachante",
        img: '/imgs/raquel.svg',
        description: [{ item: "Criação de Logomarca" }, { item: "2024" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: ''
    },
    {
        name: "Conveniência Central",
        img: '/imgs/convcentral.png',
        description: [{ item: "Artes Visuais" }, { item: "2024" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/p/C4bcBLSrHHy/'
    },
    {
        name: "Fabrício Radmann Eventos",
        img: '/imgs/radmanneventos.jpg',
        description: [{ item: "Artes Visuais" }, { item: "2024" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/buffetfabricioradmann/'
    },
    {
        name: "Restaurante Estância 21",
        img: '/imgs/estancia.png',
        description: [{ item: "Artes Visuais" }, { item: "2024" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/restauranteestancia21/'
    },
    {
        name: "Klar Odontologia",
        img: '/imgs/klar.png',
        description: [{ item: "Artes Visuais" }, { item: "2024" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/klarodontologia/'
    },
    {
        name: "Sal, Sabor & Brasa",
        img: '/imgs/salsabor.png',
        description: [{ item: "Artes Visuais & Vídeos" }, { item: "Social Media" }, { item: "2022" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: ''
    },
    {
        name: "Linda Luz",
        img: '/imgs/lindaluz.png',
        description: [{ item: "Criação de Logomarca" }, { item: "2022" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: ''
    },
    {
        name: "Clasberg",
        img: '/imgs/clasberg.png',
        description: [{ item: "Artes Visuais" }, { item: "2022" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: ''
    },
    {
        name: "Workouts",
        img: '/imgs/gym.svg',
        cargos: [{ cargo: "Projeto de Estudo" }],
        description: [{ item: "NodeJs + MongoDB" }, { item: "ReactJs + Vite" }, { item: "TypeScript" }],
        type: 1,
        github: 'https://github.com/BrendonSSilva/gym-workouts',
        link: ''
    },
    {
        name: "Consumo de API",
        img: '/imgs/rickapi.svg',
        description: [{ item: "ReactJs + TypeScript" }, { item: "Styled-Components" }, { item: "Rick & Morty API" }],
        cargos: [{ cargo: "Projeto de Estudo" }],
        type: 1,
        github: 'https://github.com/BrendonSSilva/API-RickAndMorty',
        link: 'https://api-rick-and-morty-brendon.vercel.app/'
    },
    {
        name: "Meu Portfolio",
        img: '/imgs/meuportfolio.png',
        description: [{ item: "React.js + TypeScript" }, { item: "Sass + Framer Motion" }, { item: "2024" }],
        cargos: [{ cargo: "Portfolio" }],
        type: 1,
        github: 'https://github.com/BrendonSSilva/portfolio'
    }
];

const cardVariants: Variants = {
    offscreen: {
        y: 50,
        rotate: -10,
    },
    onscreen: {
        y: -10,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: .4,
            duration: 0.8
        }
    }
};

export const Card1 = () => {
    return (
        <section className="page card-1-page">
            <Link to='/' className='btn-link'>Voltar</Link>
            <h1>Trabalhos e Estudos</h1>
            <div className={`cards`}>
                {cards.map((card) => (
                    <motion.div
                        key={card.name}
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                    >
                        <div className="splash" />
                        <motion.div variants={cardVariants} className="card-wrapper">
                            <label id={card.name}>
                                <input type="checkbox" />
                                <div className="card">
                                    <div className="front">
                                        <img src={card.img} alt={card.name} />
                                        <h3>{card.name}</h3>
                                        <h4>Detalhes</h4>
                                    </div>
                                    <div className="back">
                                        <header>
                                            <h2>{card.name}</h2>
                                            <div>
                                                {card.cargos.map((c, index) => (
                                                    <p key={index}>{c.cargo}<br /></p>
                                                ))}
                                            </div>
                                        </header>
                                        <ul>
                                            {card.description.map((c, index) => (
                                                <li key={index}>{c.item}</li>
                                            ))}
                                        </ul>
                                        <div className="links">
                                            {card.type === 0 ? '' :
                                                <a href={card.github} target="_blank" rel="noopener noreferrer">
                                                    <img src="/icons/github.svg" alt="Código no Github" />
                                                </a>}
                                            {card.link &&
                                                <a href={card.link} target="_blank" rel="noopener noreferrer">
                                                    <img src="/icons/link.svg" alt="Ver Mais" />
                                                </a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <div className="btns">
                <button className='button-default' style={{ marginTop: '50px' }}><a href="https://www.linkedin.com/in/brendon-silva/"><img src="/icons/cta-icon.svg" alt='Contato' />Contato</a></button>
                <Link to='/' className='btn-link'>Voltar</Link>
            </div>
        </section>
    );
};
