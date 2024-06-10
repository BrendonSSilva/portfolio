import "./main.scss";
import React from 'react';

const services = [
    {
        img: '/imgs/www.png',
        imgAlt: 'Websites, sistemas, landing pages',
        service: 'Sites',
        description: 'Criação de sites completos, responsivos e otimizados para SEO. Proporcionando uma presença online profissional e acessível em todos os dispositivos. Garantimos um design atrativo e funcional, aumentando a visibilidade e engajamento do seu negócio.'
    }, {
        img: '/imgs/designgrafico.png',
        imgAlt: 'Photoshop, Figma, Canva',
        service: 'Design Gráfico, UX/UI',
        description: 'Desenvolvemos identidades visuais impactantes e interfaces intuitivas, melhorando a experiência do usuário e fortalecendo a sua marca. Nosso foco é criar designs esteticamente agradáveis que também sejam fáceis de usar.'
    }, {
        img: '/imgs/socialmedia.png',
        imgAlt: 'Instagram, Facebook, Tiktok',
        service: 'Social Media',
        description: 'Gestão completa de redes sociais, incluindo criação de conteúdo, planejamento estratégico e análise de desempenho. Aumente seu alcance e engajamento com postagens relevantes e campanhas eficazes que convertem seguidores em clientes.'
    }, {
        img: '/imgs/capcut.png',
        imgAlt: 'Capcut',
        service: 'Editor de Vídeos',
        description: 'Edição profissional de vídeos para promover sua marca, produtos ou serviços. Transformamos suas ideias em vídeos atraentes e de alta qualidade, perfeitos para redes sociais, websites e campanhas de marketing.'
    },
]

export const Services = () => {

    return (
        <>
            <section className="services">
                <div>
                    <h1>Serviços</h1>
                    <p>Conheça mais sobre meus serviços</p>
                </div>
                <div className="services-items">
                    {services.map((item) => (
                        <div>
                            <img src={item.img} alt={item.imgAlt} />
                            <h4>{item.service}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
