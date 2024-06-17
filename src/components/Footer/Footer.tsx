import "./styles.scss";
import React from 'react';

export const Footer = () => {

    return (
        <>
            <footer>
                <button className='button-default' style={{ marginBottom: '30px' }}><a href="https://www.linkedin.com/in/brendon-silva/"><img src="/icons/cta-icon.svg" alt='Contato' />Contato</a></button>
                <div className='languages'>
                    <h2>Idiomas</h2>
                    <p><span>Inglês</span> - Intermediário para conversação, escrita e leitura.</p>
                    <p><span>Portugês</span> - Nativo.</p>
                </div>
                <div className='social'>
                    <h2>Contato e Redes Sociais</h2>
                    <a href="https://www.linkedin.com/in/brendon-silva/"><img src='/icons/linkedin.svg' alt='LinkedIn' /></a>
                    <a href="https://github.com/BrendonSSilva"><img src='/icons/github.svg' alt='GitHub' /></a>
                    <a href="https://www.instagram.com/brendonsilva03"><img src='/icons/Instagram.svg' alt='Instagram' /></a>
                    <a href="https://wa.me/5553984070032"><img src='/icons/wpp.svg' alt='WhatsApp' /></a>
                    <a href="mailto:brendon.dasilva03@gmail.com"><img src='/icons/Gmail.svg' alt='Gmail' /></a>
                </div>
                <hr />
                <p>Brendon © 2024</p>
            </footer>
        </>
    );
};
