import React from 'react';

import "./styles.scss";
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom';

const cards = [
    {
        name: "Local Zoom",
        img: '/imgs/localzoom1.svg',
        description: [{ item: "Desenvolvimento Web" }, { item: "Designer" }, { item: "Social Medias" }, { item: "12/23 - 04/24" }],
        cargos: [{ cargo: "Dev Full-Stack" }, { cargo: "Social Media" }, { cargo: "Designer" }, { cargo: "Editor de Vídeos" }],
        type: 1,
        link: 'https://localzoom.com.br',
        github: 'https://github.com/BrendonSSilva/Local-Zoom',
    },
    {
        name: "Nullstack",
        img: '/imgs/nullstack.png',
        description: [{ item: "Testes do Framework" }, { item: "Editor de Vídeos" }, { item: "Cria;áo de Artes Visuais" }, { item: "Social Media" },{ item: "03/23 - 10/23" }],
        cargos: [{ cargo: "Dev Front-End" }, { cargo: "Designer" }, { cargo: "Social Media" }, { cargo: "Editor de Vídeos" }],
        type: 1,
        github: 'https://github.com/nullstack',
        link: 'https://nullstack.app'
    },
    {
        name: "AGEDES",
        img: '/imgs/agedes.png',
        description: [{ item: "Desenvolvimento de Sites" }, { item: "Criação de Artes Visuais" },{ item: "03/23 - 10/23 | 06/24 - Atualmente" }],
        cargos: [{ cargo: "Dev Front-End" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.agedes.com.br'
    },
    {
        name: "Workouts",
        img: '/imgs/gym.svg',
        cargos: [{ cargo: "Dev Full-Stack" }],
        description: [{ item: "NodeJs" }, { item: "MongoDB" }, { item: "ReactJs + Vite" }, { item: "TypeScript" }, { item: "12/23 - 01/23" }],
        type: 1,
        github: 'https://github.com/BrendonSSilva/gym-workouts',
        link: ''
    },
    {
        name: "Consumo de API",
        img: '/imgs/rickapi.svg',
        description: [{ item: "ReactJs" }, { item: "TypeScript" }, { item: "Styled-Components" }, { item: "01/24 - 01/24" }],
        cargos: [{ cargo: "Dev Full-Stack" }],
        type: 1,
        github: 'https://github.com/BrendonSSilva/API-RickAndMorty',
        link: 'https://api-rick-and-morty-brendon.vercel.app/'
    }, {
        name: "Sal, Sabor & Brasa",
        img: '/imgs/salsabor.png',
        description: [{ item: "Criação de Artes Visuais" }, { item: "Editor de Vídeos" }, { item: "Social Media" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: ''
    }, {
        name: "Conveniência Central",
        img: '/imgs/convcentral.png',
        description: [{ item: "Criação de Artes Visuais" }, { item: "2024" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/p/C4bcBLSrHHy/'
    }, {
        name: "Kael Barber",
        img: '/imgs/kael.png',
        description: [{ item: "Criação de Artes Visuais" }, { item: "Editor de Vídeos" }, { item: "Social Media" }, { item: "2022" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/kaelbarberstudio/'
    },
    {
        name: "Dexter Barbearia",
        img: '/imgs/dexter.png',
        description: [{ item: "Criação de Artes Visuais" }, { item: "Editor de Vídeos" }, { item: "Social Media" }, { item: "2022" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/dexterbarbeiro/'
    },
    {
        name: "Oficina da Barba",
        img: '/imgs/oficinadabarba.png',
        description: [{ item: "Criação de Artes Visuais" }, { item: "Editor de Vídeos" }, { item: "Social Media" }, { item: "2023/24" }],
        cargos: [{ cargo: "Editor de Vídeos" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/oficinadabarbaa/'
    },
    {
        name: "Meu Portfolio",
        img: '/imgs/meuportfolio.png',
        description: [{ item: "ReactJs" }, { item: "TypeScript" }, { item: "Design" }, { item: "Sass" }, { item: "Framer Motion" }, { item: "2024" }],
        cargos: [{ cargo: "Projeto de Estudo" }],
        type: 1,
        github: 'https://github.com/BrendonSSilva/portfolio'
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
        name: "SulLed",
        img: '/imgs/sulled.png',
        description: [{ item: "Criação deCronogramas/Temas de publicações" }, { item: "Editor de Vídeos" }, { item: "Social Media" }, { item: "Designer" }, { item: "08/23 - 11/23" }],
        cargos: [{ cargo: "Social Media" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.instagram.com/suledsls/'
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
        name: "SLS TEM",
        img: '/imgs/slstem.png',
        description: [{ item: "Desenvolvedor Front-End" }, { item: "Designer" }, { item: "Editor de Vídeos" }, { item: "Social Media" }, { item: "09/23 - 12/23" }],
        cargos: [{ cargo: "Dev Front-End" }, { cargo: "Designer" }, { cargo: "Editor de Vídeos" }, { cargo: "Social Media" }],
        type: 0,
        github: 'https://github.com/BrendonSSilva/sls-tem',
        link: 'https://www.slstem.com.br'
    },
    {
        name: "Clasberg",
        img: '/imgs/clasberg.png',
        description: [{ item: "Criação de Artes Visuais" }, { item: "2022" }],
        cargos: [{ cargo: "Designer" }],
        type: 0,
        link: ''
    },
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
