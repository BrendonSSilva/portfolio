import "./main.scss";
import React from 'react';

const skill = [
    { path: '/icons/nodejs.svg', name: 'NodeJs' },
    { path: '/icons/mongodb.svg', name: 'MondoDB' },
    { path: '/icons/mysql.svg', name: 'MySQL' },
    { path: '/icons/reactjs.svg', name: 'ReactJs' },
    { path: '/icons/js.svg', name: 'JavaScript' },
    { path: '/icons/ts.svg', name: 'TypeScript' },
    { path: '/icons/sass.svg', name: 'Sass' },
    { path: '/icons/scomponents.svg', name: 'Styled-Components' },
    { path: '/icons/git.svg', name: 'Git/Github' },
    { path: '/icons/css.svg', name: 'CSS' },
    { path: '/icons/html.svg', name: 'Html' },
    { path: '/icons/vscode.svg', name: 'Visual Studio Code' },
]

export const Skills = () => {

    return (
        <>
            <hr />
            <section className="skills">
                <div>
                    {skill.map((item) => (
                        <img src={item.path} alt={item.name} />
                    ))}
                </div>
            </section>
            <hr />
        </>
    );
};
