import React from 'react';

import "./styles.scss";
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const cardsStructure = [
    { key: "localzoom" as const, name: "LocalZoom", img: '/imgs/localzoom1.svg', type: 1, link: 'https://localzoom.com.br', github: 'https://github.com/BrendonSSilva/Local-Zoom' },
    { key: "agedes" as const, name: "AGEDES", img: '/imgs/agedes.png', type: 0, link: 'https://www.agedes.com.br' },
    { key: "slstem" as const, name: "SLS TEM", img: '/imgs/slstem.png', type: 0, github: 'https://github.com/BrendonSSilva/sls-tem', link: 'https://www.slstem.com.br' },
    { key: "nullstack" as const, name: "Nullstack.js", img: '/imgs/nullstack.png', type: 1, github: 'https://github.com/nullstack', link: 'https://nullstack.app' },
    { key: "sulled" as const, name: "SulLed", img: '/imgs/sulled.png', type: 0, link: 'https://www.instagram.com/suledsls/' },
    { key: "oficinadabarba" as const, name: "Oficina da Barba", img: '/imgs/oficinadabarba.png', type: 0, link: 'https://www.instagram.com/oficinadabarbaa/' },
    { key: "kael" as const, name: "Kael Barber", img: '/imgs/kael.png', type: 0, link: 'https://www.instagram.com/kaelbarberstudio/' },
    { key: "dexter" as const, name: "Dexter Barbearia", img: '/imgs/dexter.png', type: 0, link: 'https://www.instagram.com/dexterbarbeiro/' },
    { key: "raquel" as const, name: "Raquel Despachante", img: '/imgs/raquel.svg', type: 0, link: '' },
    { key: "convcentral" as const, name: "Conveniência Central", img: '/imgs/convcentral.png', type: 0, link: 'https://www.instagram.com/p/C4bcBLSrHHy/' },
    { key: "radmann" as const, name: "Fabrício Radmann Eventos", img: '/imgs/radmanneventos.jpg', type: 0, link: 'https://www.instagram.com/buffetfabricioradmann/' },
    { key: "estancia" as const, name: "Restaurante Estância 21", img: '/imgs/estancia.png', type: 0, link: 'https://www.instagram.com/restauranteestancia21/' },
    { key: "klar" as const, name: "Klar Odontologia", img: '/imgs/klar.png', type: 0, link: 'https://www.instagram.com/klarodontologia/' },
    { key: "salsabor" as const, name: "Sal, Sabor & Brasa", img: '/imgs/salsabor.png', type: 0, link: '' },
    { key: "lindaluz" as const, name: "Linda Luz", img: '/imgs/lindaluz.png', type: 0, link: '' },
    { key: "clasberg" as const, name: "Clasberg", img: '/imgs/clasberg.png', type: 0, link: '' },
    { key: "workouts" as const, name: "Workouts", img: '/imgs/gym.svg', type: 1, github: 'https://github.com/BrendonSSilva/gym-workouts', link: '' },
    { key: "consumoapi" as const, name: "Consumo de API", img: '/imgs/rickapi.svg', type: 1, github: 'https://github.com/BrendonSSilva/API-RickAndMorty', link: 'https://api-rick-and-morty-brendon.vercel.app/' },
    { key: "portfolio" as const, name: "Meu Portfolio", img: '/imgs/meuportfolio.png', type: 1, github: 'https://github.com/BrendonSSilva/portfolio' },
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
    const { t } = useLanguage();

    return (
        <section className="page card-1-page">
            <Link to='/' className='btn-link'>{t.card1.back}</Link>
            <h1>{t.card1.pageTitle}</h1>
            <div className={`cards`}>
                {cardsStructure.map((card) => {
                    const cardTranslation = t.cards[card.key];
                    return (
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
                                            <h4>{t.jobs.details}</h4>
                                        </div>
                                        <div className="back">
                                            <header>
                                                <h2>{card.name}</h2>
                                                <div>
                                                    {cardTranslation.cargos.map((cargo, index) => (
                                                        <p key={index}>{cargo}<br /></p>
                                                    ))}
                                                </div>
                                            </header>
                                            <ul>
                                                {cardTranslation.description.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                            <div className="links">
                                                {card.type === 0 ? '' :
                                                    <a href={card.github} target="_blank" rel="noopener noreferrer">
                                                        <img src="/icons/github.svg" alt={t.jobs.githubAlt} />
                                                    </a>}
                                                {card.link &&
                                                    <a href={card.link} target="_blank" rel="noopener noreferrer">
                                                        <img src="/icons/link.svg" alt={t.jobs.linkAlt} />
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
            <div className="btns">
                <button className='button-default' style={{ marginTop: '50px' }}><a href="https://www.linkedin.com/in/brendon-silva/"><img src="/icons/cta-icon.svg" alt={t.card1.contact} />{t.card1.contact}</a></button>
                <Link to='/' className='btn-link'>{t.card1.back}</Link>
            </div>
        </section>
    );
};
