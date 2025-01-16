import React from 'react';
import img from '../assets/img/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import hsina from '../assets/img/team/hsina.jpg';
import med from '../assets/img/team/med.jpg';
import brahim from '../assets/img/team/brahim.jpg';
import inco from '../assets/img/team/inco.jpg';
import { Link } from 'react-router-dom';

const teamData = [
  {
    id: 1,
    name: 'Lhcen Boussedra',
    role: 'Manufacturing and design',
    img: hsina,
    color: '#8cbed6',
    fb:'https://www.facebook.com/profile.php?id=100071638552830'
  },
  {
    id: 2,
    name: 'Mohamed Fakir',
    role: 'Manufacturing and design',
    img: med,
    color: '#8cbed6',
    fb: 'https://www.facebook.com/Mohamed.PNX.01',
  },
  {
    id: 3,
    name: 'Brahim Elallam',
    role: 'marketing',
    img: brahim,
    color: '#8cbed6',
    fb:'https://www.facebook.com/brahim.elallam.18'
  },
  {
    id: 3,
    name: 'Zakaria Nasri',
    role: 'Contact Service',
    img: inco,
    color: '#8cbed6',
    fb:'https://www.facebook.com/zakaria.hakim.798'
  },
  {
    id: 3,
    name: 'abdelhadi',
    role: 'Delivery service',
    img: inco,
    color: '#8cbed6',
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      {/* About Section */}
      <section id="about" className="pt-16 bg-white">
        <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="flex-1">
            <img
              src={img}
              alt="About GreenBag"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-start lg:text-left">
            <p className="text-green-600 relative before:absolute before:w-20 before:h-1 before:bg-green-600 before:top-[50%] before:left-0 pl-24 text-4xl font-semibold before:translate-y-[-50%] max-sm:before:w-16 max-sm:pl-20">
              About GreenBag
            </p>
            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Welcome to GreenBag, your go-to solution for eco-friendly and sustainable bags. We are committed to reducing plastic waste and promoting a greener future through stylish, reusable alternatives.
            </p>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Join us on this mission to make a positive impact on the environment, one bag at a time.
            </p>

            <Link to='https://www.facebook.com/green.bag.206066'
              className=" mt-8 px-6 py-3 flex items-center justify-center gap-2 bg-green-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition duration-300 "
            >
              <FontAwesomeIcon icon={faFacebook} className="text-lg" />
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="mt-16">
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="text-gray-800 text-4xl font-extrabold mb-10">Meet our Team</h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 px-6">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all "
          >
            <div style={{ backgroundColor: member.color }} className="h-32"></div>
            <img
              src={member.img}
              alt={member.name}
              className="w-36 h-36 border-4 border-white rounded-full -mt-16 shadow-lg mx-auto"
            />
            <div className="p-6">
              <h4 className="text-gray-800 text-lg font-bold">{member.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{member.role}</p>

              <div className="space-x-4 mt-6 flex justify-center">
              {member.fb && (
    <a
      href={member.fb}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200"
      title="Facebook"
    >
      {/* You can add an icon or text here */}
      <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
      </a>
  )}
                  
                {/* <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200"
                  title="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200"
                  title="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    </div>
  );
};

export default AboutUs;
