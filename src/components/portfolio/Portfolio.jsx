import * as React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import './portfolio.css';
import Project from './Project';

const Portfolio = () => {
    return (
        <article className="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    <li className="filter-item">
                        <button className="active">
                            All
                        </button>
                    </li>

                    <li className="filter-item">
                        <button>Web development</button>
                    </li>

                    <li className="filter-item">
                        <button>Applications</button>
                    </li>
                </ul>
                <div className="filter-select-box">
                    <button className="filter-select">
                        <div className="select-value">
                            Select category
                        </div>
                        <div className="select-icon">
                            <BiChevronDown className='ion-icon' />
                        </div>
                    </button>
                    <ul className="select-list">
                        <li className="select-item">
                            <button>All</button>
                        </li>

                        <li className="select-item">
                            <button>Web development</button>
                        </li>

                        <li className="select-item">
                            <button>Applications</button>
                        </li>
                    </ul>
                </div>
                <Project />
            </section>
        </article>
    );
};

export default Portfolio;
