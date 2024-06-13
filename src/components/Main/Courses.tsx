import "./main.scss";
import React from 'react';

export const Courses = () => {

    return (
        <>
            <hr />
            <section className="courses">
                <div className="courses-left">
                    <div className="course-item obc">
                        <img src="/imgs/obc.webp" alt="OneBitCode" />
                        <div>
                            <h3>OneBitCode</h3>
                            <p>Desenvolvimento Back-End | 11/23 - 01/24 - <a href="https://cursos.onebitcode.com/cert/99J0SGRB5rHw8qc" target="_blank">Exibir Credencial</a></p>
                            <h3>OneBitCode</h3>
                            <p>Banco de Dados | 12/23 - 01/24 - <a href="https://cursos.onebitcode.com/cert/NlXmaT6w3bjf3n3" target="_blank">Exibir Credencial</a></p>
                            <h3>OneBitCode</h3>
                            <p>ReactJs | 12/23 - 01/24 - <a href="https://cursos.onebitcode.com/cert/A5e0phA0aZxTzzg" target="_blank">Exibir Credencial</a></p>
                            <h3>OneBitCode</h3>
                            <p>NextJs | 12/23 - 01/24 - <a href="https://cursos.onebitcode.com/cert/ekbRuDjy8YUDDli" target="_blank">Exibir Credencial</a></p>
                        </div>
                    </div>
                    <div className="course-item b7web">
                        <img src="/imgs/b7web.webp" alt="B7Web" />
                        <div>
                            <h3>B7Web</h3>
                            <p>JavaScript | 01/22 - 05/22 - <a href="https://alunos.b7web.com.br/media/certificates/certificado_4512946.jpg" target="_blank">Exibir Credencial</a></p>
                        </div>
                    </div>
                </div>
                <div className="courses-right">
                    <h1>Formação e Cursos</h1>
                    <p>Optei por cursos profissionalizantes e projetos próprios, seguindo conselhos valiosos de profissionais experientes e grandes empresas. Essa abordagem prática e focada me permitiu adquirir habilidades relevantes e aplicáveis no mercado, aprimorando continuamente meu conhecimento e competências.</p>
                    <img src="/imgs/joaofrango.webp" alt="Formação" />
                </div>
            </section>
            <hr />
        </>
    );
};
