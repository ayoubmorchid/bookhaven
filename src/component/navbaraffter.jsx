import React from 'react';
import { Link } from 'react-router-dom';
const NavbarAffter = () => {
  return (
    <div className="bar-container">
    <nav className="bar-moukhtasar">
      <h1 className="logo-title">EpicReads</h1>
      <ul className="links-akhbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="icons-akhir">
        <Link to="/favorites" aria-label="Favoris">❤️</Link>
        <Link to="/cart" aria-label="Panier">🛒</Link>
      </div>
    </nav>
  </div>


  );
};

export default NavbarAffter;