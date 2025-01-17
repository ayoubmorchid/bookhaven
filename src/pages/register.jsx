import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/register.css";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Registered successfully!");
    }, 2000);
  };

  return (
    <div className="register-page">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <fieldset>
        <div className="register-container">
          <h2>Sign Up</h2>
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
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Type your password"
                required
              />
            </div>
            <button type="submit" className="signup-btn" disabled={isLoading}>
              {isLoading ? <div className="loading-spinner"></div> : "Sign Up"}
            </button>
          </form>
          <div className="or">Or Sign up with</div>
          <div className="social-login">
            <Link aria-label="Sign up with Facebook">
              <img
                src="https://img.icons8.com/color/48/000000/facebook.png"
                alt="Facebook"
              />
            </Link>
            <Link aria-label="Sign up with Google">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
              />
            </Link>
            <Link aria-label="Sign up with Twitter">
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="Twitter"
              />
            </Link>
          </div>
          <div className="login-redirect">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </fieldset>
    </div>



  );
};

export default SignUpForm;
