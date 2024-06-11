import React, { useState } from 'react';

import "./styles.scss";
import { motion, Variants } from 'framer-motion'

const cards = [
    {
        name: "Local Zoom",
        img: '/imgs/localzoom1.svg',
        description: [{ item: "Desenvolvimento Web" }, { item: "Designer" }, { item: "Social Medias" }],
        cargos: [{ cargo: "Dev Full-Stack" }, { cargo: "Social Media" }, { cargo: "Designer" }, { cargo: "Editor de Vídeos" }],
        type: 0,
        link: 'https://localzoom.com.br'
    },
    {
        name: "Workouts",
        img: '/imgs/gym.svg',
        cargos: [{ cargo: "Dev Full-Stack" }],
        description: [{ item: "NodeJs" }, { item: "MongoDB" }, { item: "ReactJs + Vite" }, { item: "TypeScript" }],
        type: 1,
        github: 'https://github.com/BrendonSSilva/gym-workouts',
        link: ''
    },
    {
        name: "Consumo de API",
        img: '/imgs/rickapi.svg',
        description: [{ item: "ReactJs" }, { item: "TypeScript" }, { item: "Styled-Components" }],
        cargos: [{ cargo: "Dev Full-Stack" }],
        type: 0,
        link: 'https://api-rick-and-morty-brendon.vercel.app/'
    }, {
        name: "Consumo de API",
        img: '/imgs/rickapi.svg',
        description: [{ item: "ReactJs" }, { item: "TypeScript" }, { item: "Styled-Components" }],
        cargos: [{ cargo: "Dev Full-Stack" }],
        type: 0,
        link: 'https://api-rick-and-morty-brendon.vercel.app/'
    }, {
        name: "Consumo de API",
        img: '/imgs/rickapi.svg',
        description: [{ item: "ReactJs" }, { item: "TypeScript" }, { item: "Styled-Components" }],
        cargos: [{ cargo: "Dev Full-Stack" }],
        type: 0,
        link: 'https://api-rick-and-morty-brendon.vercel.app/'
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

    const [show, setShow] = useState('hidden')

    function handleCards() {
        if (show == 'hidden') { setShow('') } else { setShow('hidden') }
    }
    return (
        <section className="page card-1-page">
            <button className="button-default buttonHandle" onClick={handleCards}>{show !== '' ? 'Ver Trabalhos' : 'Fechar'}</button>
            <div className={`cards ${show}`}>
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
            {show !== 'hidden' ? <button className="button-default buttonHandle" onClick={handleCards}>Fechar</button> : ''}
            <button className='button-default' style={{ marginTop: '50px' }}><a href="https://www.linkedin.com/in/brendon-silva/"><img src="/icons/cta-icon.svg" alt='Contato' />Contato</a></button>
        </section>
    );
};
