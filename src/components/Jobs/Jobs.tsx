import React from 'react';

import "./styles.scss";
import "../Card1/styles.scss";
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext';

const cardsStructure = [
    {
        key: "localzoom" as const,
        name: "LocalZoom",
        img: '/imgs/localzoom1.svg',
        type: 1,
        link: 'https://localzoom.com.br',
        github: 'https://github.com/BrendonSSilva/Local-Zoom',
    },
    {
        key: "agedes" as const,
        name: "AGEDES",
        img: '/imgs/agedes.png',
        type: 0,
        link: 'https://www.agedes.com.br'
    },
    {
        key: "nullstack" as const,
        name: "Nullstack.js",
        img: '/imgs/nullstack.png',
        type: 1,
        github: 'https://github.com/nullstack',
        link: 'https://nullstack.app'
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

export const Jobs = () => {
    const { t } = useLanguage();

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <section className="page card-1-page" id="projetos">
            <div className="jobs-header">
                <span className="section-label">{t.jobs.label}</span>
                <h2>{t.jobs.heading}</h2>
            </div>
            <div className={`cards-link`}>
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
            <Link to='/trabalhos' onClick={scrollToTop} className='btn-link'>{t.jobs.viewAll}</Link>
        </section>
    );
};
