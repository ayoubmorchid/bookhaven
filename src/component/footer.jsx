import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="app-container">
      
      <div className="subscribe-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest news and promotions!</p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="email-input"
          />
          <button className="subscribe-button">Subscribe Now</button>
        </div>
        <div className="circle-top-right"></div>
      </div>

      <footer className="footer-section">
        <p>&copy; 2023 Bucca di Beppo. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookies Settings</Link>
        </div>
        <div className="circle-bottom-left"></div>
        <div className="social-icons">
          <Link to="/">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-linkedin"></i>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
