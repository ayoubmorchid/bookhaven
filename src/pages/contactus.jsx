import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../style/contactus.css';
import Navbar from '../component/navbar'; // Import the Navbar component

const ContactUs = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({ email: "", message: "" });

    const handleValidation = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: !emailRegex.test(value) ? "Invalid email address" : "",
            }));
        }

        if (name === "message") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                message: value.length < 10 ? "Message must be at least 10 characters" : "",
            }));
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || errors.email) {
            alert("Please provide a valid email.");
            return;
        }
        if (!formData.message || errors.message) {
            alert("Please provide a valid message.");
            return;
        }
        alert("Form submitted successfully!");
    };

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Contact Section */}
            <section id="contact" className="contact-container">
                <div className="intro-text">
                    <h2>We'd Love to Hear From You!</h2>
                    <p>
                        Whether you're looking for your next great read, need help finding a specific book, or just want to explore our collection, our team at <strong>BookHaven</strong> is here to assist you. Connect with us today, and let's dive into the world of stories together!
                    </p>
                </div>

                <div className="contact-section">
                    <div className="contact-form">
                        <h3>Get In Touch</h3>
                        <p>
                            Have questions or need help? We're ready to assist you!
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={formData.email}
                                    onChange={handleValidation}
                                    className={`input ${errors.email ? "error" : ""}`}
                                />
                                {errors.email && <p className="error-text">{errors.email}</p>}

                                <textarea
                                    name="message"
                                    placeholder="Write your message here"
                                    required
                                    value={formData.message}
                                    onChange={handleValidation}
                                    className={`textarea ${errors.message ? "error" : ""}`}
                                ></textarea>
                                {errors.message && <p className="error-text">{errors.message}</p>}
                            </div>
                            <button type="submit" className="submit-button">
                                <FontAwesomeIcon icon={faEnvelope} /> Send Message
                            </button>
                        </form>

                        <ul className="contact-info">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:contact@bookhaven.com">contact@bookhaven.com</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <a href="tel:+212601100826">+212 601-100-826</a>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://maps.google.com/maps?q=Agadir,%20Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            allowFullScreen
                            title="BookHaven Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
