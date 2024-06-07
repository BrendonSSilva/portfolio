import React from 'react';

import "./styles.css";
import { motion, Variants } from 'framer-motion'

const cards = [
    {
        name: "Local Zoom",
        img: '/imgs/localzoom1.svg',
        description: "Due Tasks",
        footer: "Completed: 13",
        more: "More Information",
        project: ['Banco de Dados', 'Gerenciador']
    },
    {
        name: "Workouts",
        img: '/imgs/gym.svg',
        description: "Projects",
        footer: "Yesterday: 9",
        more: "More Information",
        project: ['Banco de Dados', 'Gerenciador']
    },
    {
        name: "features",
        img: '/imgs/rickapi.svg',
        description: "Proposals",
        footer: "Implemented: 6",
        more: "More Information",
        project: ['Banco de Dados', 'Gerenciador']
    },
];

const cardVariants: Variants = {
    offscreen: {
        y: 300,
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
            <div className="cards">
                {cards.map((card) => (
                    <motion.div
                        key={card.name}
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                    >
                        <div className="splash" />
                        <motion.div variants={cardVariants}>
                            <label id={card.name}>
                                <input type="checkbox" />
                                <div className="card">
                                    <div className="front">
                                        <img src={card.img} ></img>
                                        <h3>{card.name}</h3>
                                        <h4>Detalhes</h4>
                                    </div>
                                    <div className="back">
                                        <a href='https://twitter.com/home' target="_blank">Ver projeto</a>
                                        <header>
                                            <h2>{card.name}</h2>
                                            <span className="material-symbols-outlined"> close </span>
                                        </header>
                                        <ul>
                                            <p>Site completo com:</p>
                                            <li>{card.project.join(', ')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </label>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
