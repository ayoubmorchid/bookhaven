// App.jsx
import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";

const  FooterSection = () => {
  return (
    <div className="app-container">


      {/* Subscribe Section */}
      <div className="subscribe-section">
        <h2>Subscribe Newsletter</h2>
        <p>I will update good news and promotion service, not spam</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email address..." className="email-input" />
          <button className="subscribe-button">Contact Now</button>
        </div>
        <div className="circle-top-right"></div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>&copy; 2023 Bucca di Beppo. All rights reserved.</p>
        <div className="footer-links">
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Cookies Settings</Link>
        </div>
        <div className="circle-bottom-left"></div>
        <div className="social-icons">
          <Link>
            <i className="fa fa-facebook"></i>
          </Link>
          <Link>
            <i className="fa fa-instagram"></i>
          </Link>
          <Link>
            <i className="fa fa-twitter"></i>
          </Link>
          <Link>
            <i className="fa fa-linkedin"></i>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
