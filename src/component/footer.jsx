import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="footer-container">
      <div className="subscribe-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest news and promotions!</p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="email-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <div className="circle-top-right"></div>
      </div>

      <footer className="footer-section">
        <div className="footer-content">
          <p>&copy; 2023 EpicReads. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookies Settings</Link>
          </div>
          <div className="social-icons">
            <Link to="/" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="/" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link to="/" aria-label="Twitter">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="/" aria-label="LinkedIn">
              <i className="fa fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
