import React, { useState } from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <div className="logo-link">
        EpicReads
      </div>
      <ul className="nav-links">
        <li
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={`nav-item ${activeTab === 'books' ? 'active' : ''}`}
          onClick={() => handleTabClick('books')}
        >
          <Link to='books'>Books</Link>
        </li>
        <li
          className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          <a href="#">About</a>
        </li>
        <li
          className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="auth-links">
        <Link to="login" className="auth-link">Login</Link>
        <Link to="signup" className="auth-link">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
