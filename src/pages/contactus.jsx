import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
            {/* Introductory Text */}
            <div className="text-center max-w-3xl mb-10">
                <h2 className="text-4xl font-extrabold text-red-800">
                    We'd Love to Hear From You!
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Whether you have questions, need assistance, or just want to say hi, our team is here to help. Reach out today!
                </p>
            </div>

            {/* Contact Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center p-8 shadow-lg rounded-3xl max-w-6xl bg-white">
                {/* Contact Form */}
                <div>
                    <h3 className="text-2xl font-semibold text-red-800 mb-4">
                        Get In Touch
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                        Have questions or want to partner with us? We're ready to assist!
                    </p>

                    <form action="https://formspree.io/f/xovqzgbv" method="POST" className="space-y-4">
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Full Name"
                            className="px-3 py-3 w-full text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="px-3 py-3 w-full text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                        />
                        <textarea
                            name="message"
                            placeholder="Write Message"
                            className="px-3 py-3 w-full text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-6 w-full py-3 bg-red-800 text-white text-sm rounded-md hover:bg-red-700 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Send Message
                        </button>
                    </form>

                    <ul className="mt-6 space-y-4">
                        <li className="flex items-center text-red-800">
                            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                            <a href="mailto:contact@greenbag.com" className="ml-4 text-sm">
                                <strong>contact@greenbag.com</strong>
                            </a>
                        </li>
                        <li className="flex items-center text-red-800">
                            <FontAwesomeIcon icon={faPhone} className="text-lg" />
                            <a href="tel:+212636960514" className="ml-4 text-sm">
                                <strong>+212 6 369 605 14</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Map */}
                <div className="relative h-[350px] w-full rounded-lg shadow-md overflow-hidden">
                    <iframe
                        src="https://maps.google.com/maps?q=Agadir,%20Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        allowFullScreen
                        title="Agadir Location"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
