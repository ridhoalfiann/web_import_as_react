import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Project1 from '../../images/project-1.jpg'
import Project2 from '../../images/project-2.png'

const Project = () => {
    return (
        <ul className="project-list">
            <li className="project-item active">
                <a href="#">
                    <figure className='project-img'>
                        <div className="project-item-icon-box">
                            <AiOutlineEye className='ion-icon' />
                        </div>
                        <img src={Project1} alt="" />
                    </figure>
                    <h3 className="project-title">Finance</h3>
                    <p className="project-category">Web development</p>
                </a>
            </li>

            <li className="project-item active">
                <a href="#">
                    <figure className='project-img'>
                        <div className="project-item-icon-box">
                            <AiOutlineEye className='ion-icon' />
                        </div>
                        <img src={Project2} alt="" />
                    </figure>
                    <h3 className="project-title">Orizon</h3>
                    <p className="project-category">Web development</p>
                </a>
            </li>
        </ul>
    );
};

export default Project;
