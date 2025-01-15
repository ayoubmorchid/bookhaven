import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../style/login.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Logged in successfully!");
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <fieldset>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Type your username or Email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Type your password"
                required
              />
            </div>
            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? <div className="loading-spinner"></div> : "Log In"}
            </button>
          </form>
          <div className="forgot-password">
            <Link to="/forget-password" className="forgot-link">
              Forgot your password?
            </Link>
          </div>
          <div className="or">Or Log in with</div>
          <div className="social-login">
            <Link aria-label="Log in with Facebook">
              <img
                src="https://img.icons8.com/color/48/000000/facebook.png"
                alt="Facebook"
              />
            </Link>
            <Link aria-label="Log in with Google">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
              />
            </Link>
            <Link aria-label="Log in with Twitter">
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="Twitter"
              />
            </Link>
          </div>
          <div className="signup-redirect">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="signup-link">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Login;
