import React from 'react';
import { IoCalendarOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import Social from './Social';

const Info = () => {
    return (
        <div className="sidebar-info_more">
            <div className="separator"></div>
            <ul className="contacts-list">
                <li className="contact-item">
                    <div className="icon-box">
                        <IoMailOutline className='ion-icon' />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Email</p>
                        <a href="mailto:ridhoalfianzxc@gmail.com" className="contact-link">
                            ridhoalfianzxc@gmail.com
                        </a>
                    </div>
                </li>

                <li className="contact-item">
                    <div className="icon-box">
                        <HiOutlineDevicePhoneMobile className='ion-icon' />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Phone</p>
                        <a href="https://api.whatsapp.com/send?phone=6281247057283&text=Hello, informasi lebih lanjut!" target="_blank" className="contact-link">
                            +6281247057283
                        </a>
                    </div>
                </li>

                <li className="contact-item">
                    <div className="icon-box">
                        <IoCalendarOutline className='ion-icon' />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Age</p>
                        <time dateTime="1982-06-23">19</time>
                    </div>
                </li>

                <li className="contact-item">
                    <div className="icon-box">
                        <IoLocationOutline className='ion-icon' />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Location</p>
                        <address>Pontianak, IND</address>
                    </div>
                </li>
            </ul>
            <div className="separator"></div>
            <Social />
        </div>
    );
};

export default Info;
