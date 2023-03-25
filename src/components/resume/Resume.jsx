import React from 'react';
import './resume.css';
import { IoBookOutline } from 'react-icons/io5';

const Resume = () => {
    return (
        <article className="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline className="ion-icon" />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">SD NEGERI 11 SAPARAN</h4>
                        <span>2010 - 2016</span>
                        <p className="timeline-text">Bengkayang, Kalimantan Barat, Indonesia</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">SMP NEGERI 1 BENGKAYANG</h4>
                        <span>2016 - 2019</span>
                        <p className="timeline-text">Bengkayang, Kalimantan Barat, Indonesia</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">SMA NEGERI 1 BENGKAYANG</h4>
                        <span>2019 - 2022</span>
                        <p className="timeline-text">Bengkayang, Kalimantan Barat, Indonesia</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">UNIVERSITAS TERBUKA (SISTEM INFORMASI)</h4>
                        <span>2023 - sekarang</span>
                        <p className="timeline-text">Pontianak, Kalimantan Barat, Indonesia</p>
                    </li>
                </ol>
            </section>
        </article>
    );
};

export default Resume;
