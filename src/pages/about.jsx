import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import hsina from '../assets/img/team/hsina.jpg';
import med from '../assets/img/team/med.jpg';
import brahim from '../assets/img/team/brahim.jpg';
import ayoub from '../assets/img/team/ayoub.jpg';
import { Link } from 'react-router-dom';
import '../style/aboutus.css';

<h2>About EpicReads</h2>
<p className="last-update">Last update: {new Date().toLocaleDateString()}</p>


const teamData = [
  {
    id: 1,
    name: 'Lhcen Boussedra',
    role: 'Manufacturing and design',
    img: hsina,
    color: '#8cbed6',
    fb: 'https://www.facebook.com/profile.php?id=100071638552830',
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
    role: 'Marketing',
    img: brahim,
    color: '#8cbed6',
    fb: 'https://www.facebook.com/brahim.elallam.18',
  },
  {
    id: 4,
    name: 'Zakaria Nasri',
    role: 'Contact Service',
    img: ayoub,
    color: '#8cbed6',
    fb: 'https://www.facebook.com/zakaria.hakim.798',
  },
  {
    id: 5,
    name: 'Abdelhadi',
    role: 'Delivery Service',
    img: med,
    color: '#8cbed6',
  },
  {
    id: 1,
    name: 'Lhcen Boussedra',
    role: 'Manufacturing and design',
    img: hsina,
    color: '#8cbed6',
    fb: 'https://www.facebook.com/profile.php?id=100071638552830',
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
    role: 'Marketing',
    img: brahim,
    color: '#8cbed6',
    fb: 'https://www.facebook.com/brahim.elallam.18',
  },
];

const AboutUs = () => {
  return (


    
    <>
      <Navbar />
      <div className="about-container">
        <section className="about-section">
          <div className="about-content">
            <div className="about-image">
              <img src={ayoub} alt="About BookHaven" className="image" />
            </div>
            <div className="about-text">
              <h2>About EpicReads</h2>
              <p>
                Welcome to EpicReads, your ultimate destination for discovering inspiring stories, educational resources, and timeless classics. We aim to ignite a love for reading and provide access to books for every reader.
              </p>
              <p>
                Join us in our mission to build a world where knowledge and imagination are accessible to everyone, one book at a time.
              </p>
              <Link
                to="https://www.facebook.com/green.bag.206066"
                className="learn-more-btn"
              >
                <FontAwesomeIcon icon={faFacebook} /> Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet our Team</h2>
          <div className="team-grid">
            {teamData.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-header" style={{ backgroundColor: member.color }}></div>
                <img src={member.img} alt={member.name} className="team-image" />
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  {member.fb && (
                    <a href={member.fb} className="social-link" title="Facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};



export default AboutUs;
