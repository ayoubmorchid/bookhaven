import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../style/contactus.css';

const ContactUs = () => {
    return (
        <section id="contact" className="contact-container">
            {/* Introductory Text */}
            <div className="intro-text">
                <h2>We'd Love to Hear From You!</h2>
                <p>
                Whether you're looking for your next great read, need help finding a specific book, or just want to explore our collection, our team at BookHaven is here to assist you. Connect with us today, and let's dive into the world of stories together!


                </p>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
                {/* Contact Form */}
                <div className="contact-form">
                    <h3>Get In Touch</h3>
                    <p>
                        Have questions about our eco-friendly products or want to partner with us? Our team is ready to help!
                    </p>

                    <form action="https://formspree.io/f/xovqzgbv" method="POST">
                        <div className="form-group">
                            <input type="text" name="full_name" placeholder="Full Name" required />
                            <input type="email" name="email" placeholder="Email" required />
                            <textarea name="message" placeholder="Write Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            <FontAwesomeIcon icon={faEnvelope} /> Send Message
                        </button>
                    </form>

                    <ul className="contact-info">
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="mailto:contact@greenbag.com">contact@epicreads.com</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:+212636960514">+212 601-100-826 </a>
                        </li>
                    </ul>
                </div>

                {/* Map */}
                <div className="contact-map">
                    <iframe
                        src="https://maps.google.com/maps?q=Agadir,%20Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        allowFullScreen
                        title="Agadir Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
