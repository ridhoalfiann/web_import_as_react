import React from 'react';
import './contact.css';
import { IoPaperPlane } from 'react-icons/io5';

const Contact = () => {
    return (
        <article className="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox">
                <figure>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127674.16188929553!2d109.26150980009372!3d-0.03539482355365475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d58f604b0799b%3A0x511ef9501fc9ffe3!2sPontianak%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat!5e0!3m2!1sid!2sid!4v1679387772777!5m2!1sid!2sid"
                        width="400"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form action="#" className="form" data-form>
                    <div className="input-wrapper">
                        <input type="text" name="fullname" placeholder="Full name" className="form-input" required data-form-input />
                        <input type="email" name="email" placeholder="Email address" className="form-input" required data-form-input />
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <IoPaperPlane className="ion-icon" />
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;
