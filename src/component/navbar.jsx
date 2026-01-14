import React, { useState } from "react";
import "../style/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const auth = isAuthenticated();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link
          to="/"
          className="logo-link"
          onClick={() => handleTabClick("home")}
        >
          EpicReads
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li
          className={`nav-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => handleTabClick("home")}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          className={`nav-item ${activeTab === "books" ? "active" : ""}`}
          onClick={() => handleTabClick("books")}
        >
          <Link to="/books">Books</Link>
        </li>

        <li
          className={`nav-item ${activeTab === "about" ? "active" : ""}`}
          onClick={() => handleTabClick("about")}
        >
          <Link to="/about">About</Link>
        </li>

        <li
          className={`nav-item ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => handleTabClick("contact")}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="auth-links">
        {auth ? (
          <button className="auth-link logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="auth-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="auth-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;