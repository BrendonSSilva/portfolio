import "./styles.scss";
import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <h3>Brendon <span>Silva</span></h3>
                        <p>{t.footer.tagline}</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>{t.footer.linksTitle}</h4>
                            <a href="#sobre">{t.footer.linkAbout}</a>
                            <a href="#experiencia">{t.footer.linkExperience}</a>
                            <a href="#projetos">{t.footer.linkProjects}</a>
                            <a href="#formacao">{t.footer.linkEducation}</a>
                        </div>
                        <div className="footer-col">
                            <h4>{t.footer.languagesTitle}</h4>
                            <p><strong>{t.footer.english}</strong> — {t.footer.englishLevel}</p>
                            <p><strong>{t.footer.portuguese}</strong> — {t.footer.portugueseLevel}</p>
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
                    <p>{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
};
