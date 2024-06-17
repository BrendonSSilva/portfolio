import React from 'react';

import "./styles.scss";
import "../Card1/styles.scss";
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

const cards = [
    {
        name: "Local Zoom",
        img: '/imgs/localzoom1.svg',
        description: [{ item: "Desenvolvimento Web" }, { item: "Designer" }, { item: "Social Media" }, { item: "12/23 - 04/24" }],
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
        description: [{ item: "Desenvolvimento de Sites" }, { item: "Criação de Artes Visuais" },{ item: "08/22 - 02/23" }],
        cargos: [{ cargo: "Dev Front-End" }, { cargo: "Designer" }],
        type: 0,
        link: 'https://www.agedes.com.br'
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
export const Jobs = () => {

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <section className="page card-1-page">
            <div className={`cards-link`}>
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
            <Link to='/trabalhos' onClick={scrollToTop} className='btn-link'>Ver Mais!</Link>
        </section>
    );
};

