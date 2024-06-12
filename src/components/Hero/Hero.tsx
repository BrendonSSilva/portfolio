import "./hero.scss";
import React from 'react';
export const Hero = () => {

    return (
        <>
            <section className="hero">
                <div className='hero-left'>
                    <p style={{marginTop: '50px'}}><span>Projeto em Desenvolvimento**</span></p>
                    <h1>Brendon S. da Silva</h1>
                    <p><span>Desenvolvedor</span>: Crio soluções inovadoras com diversas linguagens e frameworks modernos.</p>
                    <p><span>Designer</span>: Transformo ideias em interfaces visuais atraentes e funcionais.</p>
                    <p><span>Social Media</span>: Aumento presença online e engajamento com estratégias criativas</p>
                    <p><span>Edição de Vídeos</span>: Produzo e edito vídeos envolventes com um serviço rápido e de qualidade.</p>
                    <button className="button-default"><a href="https://www.linkedin.com/in/brendon-silva/"><img src="/icons/cta-icon.svg" alt='Contato' />Contato</a></button>
                </div>
                <div className='hero-right'>
                    <img src='/imgs/code-hero.png' alt='Brendon Silva Informações' />
                </div>
            </section>
        </>
    );
};
