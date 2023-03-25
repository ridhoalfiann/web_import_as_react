import React, { useRef } from 'react';
import './sidebar.css';
import ME from '../../images/ME-RE.png';
import { BiChevronDown } from 'react-icons/bi';
import Info from './Info';

const Sidebar = () => {

    const navRef = useRef();
    const show = () => {
        navRef.current.classList.toggle('active');
    };

    return (
        <aside className='sidebar' ref={navRef}>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={ME} alt="Ridho" width={80} />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Ridho">
                        Ridho Alfian
                    </h1>
                    <p className="title">Backend Engineer</p>
                </div>
                <button className="info_more-btn" onClick={show}>
                    <span>Show Contacts</span>
                    <BiChevronDown className="ion-icon" />
                </button>
            </div>
            <Info />
        </aside>
    );
};

export default Sidebar;
