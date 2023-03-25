import React from 'react';
import './about.css';
import frontend from '../../images/icon-dev.svg';
import backend from '../../images/backend-dev.svg';
import Skills from './Skills';

const About = () => {
    return (
        <article className="about active">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                <p>
                    Saya Ridho Alfian berdomisili di Pontianak, dan saya sangat bersemangat dan berdedikasi pada pekerjaan saya. Saya sangat tertarik dalam bekerja di bidang pengembang website.
                    Disiplin dan mampu bekerja dengan baik dalam tim maupun individu. Memiliki ketelitian dan kemampuan komunikasi yang baik. Senang mempelajari hal baru, dan siap mengerjakan projek
                    sesuai permintaan.
                </p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src={frontend} alt="frontend" width={40} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Frontend</h4>
                            <p className="service-item-text">Membangun website menggunakan bahasa JavaScript dan library React.</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src={backend} alt="backend" width={40} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Backend</h4>
                            <p className="service-item-text">Membangun restfull API menggunakan framework Express.</p>
                        </div>
                    </li>
                </ul>
            </section>
            <Skills />
        </article>
    );
};

export default About;
