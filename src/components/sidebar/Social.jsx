import React from 'react';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import CV from '../../images/sampel.txt';
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io5';

const Social = () => {
    return (
        <ul className="social-list">
            <li className="social-item">
                <a href={CV} download className="social-link">
                    <HiOutlineDocumentArrowDown className='ion-icon' />
                </a>
            </li>

            <li className="social-item">
                <a href="https://github.com/ridhoalfiann" target="_blank" className="social-link">
                    <AiOutlineGithub className='ion-icon' />
                </a>
            </li>

            <li className="social-item">
                <a href="https://www.instagram.com/ridho_alfian_" target="_blank" className="social-link">
                    <AiOutlineInstagram className='ion-icon' />
                </a>
            </li>

            <li className="social-item">
                <a href="https://www.linkedin.com/in/ridho-alfian/" target="_blank" className="social-link">
                    <IoLogoLinkedin className='ion-icon' />
                </a>
            </li>
        </ul>
    );
};

export default Social;
