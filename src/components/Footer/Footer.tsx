import "./styles.scss";
import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <h3>Brendon <span>Silva</span></h3>
                        <p>Full-Stack Developer & Estudante de Engenharia de Software</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Links</h4>
                            <a href="#sobre">Sobre</a>
                            <a href="#experiencia">Experiência</a>
                            <a href="#projetos">Projetos</a>
                            <a href="#formacao">Formação</a>
                        </div>
                        <div className="footer-col">
                            <h4>Idiomas</h4>
                            <p><strong>Inglês</strong> — Fluente (técnico & conversação)</p>
                            <p><strong>Português</strong> — Nativo</p>
                        </div>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/brendon-silva/" target="_blank" rel="noopener noreferrer"><img src='/icons/linkedin.svg' alt='LinkedIn' /></a>
                    <a href="https://github.com/BrendonSSilva" target="_blank" rel="noopener noreferrer"><img src='/icons/github.svg' alt='GitHub' /></a>
                    <a href="mailto:brendon.dasilva03@gmail.com"><img src='/icons/Gmail.svg' alt='Gmail' /></a>
                    <a href="https://wa.me/5553991336621" target="_blank" rel="noopener noreferrer"><img src='/icons/wpp.svg' alt='WhatsApp' /></a>
                    <a href="https://www.instagram.com/brendonsilva03" target="_blank" rel="noopener noreferrer"><img src='/icons/Instagram.svg' alt='Instagram' /></a>
                </div>
                <div className="footer-bottom">
                    <p>Brendon Silva &copy; 2026 — Feito com React.js</p>
                </div>
            </div>
        </footer>
    );
};
