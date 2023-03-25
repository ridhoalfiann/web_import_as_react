import React from 'react';
import HTML from '../../images/html-5-svgrepo-com.svg';
import CSS from '../../images/css-3-svgrepo-com.svg';
import JS from '../../images/javascript-logo-svgrepo-com.svg';
import NODE from '../../images/nodejs-icon-svgrepo-com.svg';
import REACT from '../../images/react-svgrepo-com.svg';

const Data = [
    {
        id: 1,
        img: HTML,
        ket: 'html',
        desc: 'Advanced',
    },

    {
        id: 2,
        img: CSS,
        ket: 'css',
        desc: 'Advanced',
    },

    {
        id: 3,
        img: JS,
        ket: 'js',
        desc: 'Intermediate',
    },

    {
        id: 4,
        img: NODE,
        ket: 'node',
        desc: 'Beginner',
    },

    {
        id: 5,
        img: REACT,
        ket: 'react',
        desc: 'Intermediate',
    },
];

const Skills = () => {
    return (
        <section className="clients">
            <h3 className="h3 clients-title">Skills</h3>
            <ul className="clients-list has-scrollbar">
                {Data.map(({ id, img, ket, desc }) => {
                    return (
                        <li className="clients-item" key={id}>
                            <center>
                                <img src={img} alt={ket} />
                                <br />
                                <h3 style={{ color: 'white' }}>{desc}</h3>
                            </center>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Skills;
