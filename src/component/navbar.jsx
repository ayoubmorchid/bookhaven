import React, { useState } from 'react';
import '../style/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link
          to="/shopping"
          className="logo-link"
          onClick={() => handleTabClick('home')}
        >
          EpicReads
        </Link>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`nav-item ${activeTab === 'books' ? 'active' : ''}`}
          onClick={() => handleTabClick('books')}
        >
          <Link to="/books">Books</Link>
        </li>
        <li
          className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          <Link to="/contact">Contact</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li
              className={`nav-item ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => handleTabClick('login')}
            >
              <Link to="/login">Login</Link>
            </li>
            <li
              className={`nav-item ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => handleTabClick('signup')}
            >
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
      {isAuthenticated && (
        <div className="auth-links">
          <button className="auth-link logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
