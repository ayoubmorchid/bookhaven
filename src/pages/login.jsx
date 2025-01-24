import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/login.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleValidation = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password:a
          value.length < 6 ? "Password must be at least 6 characters" : "",
      }));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Final validation before submission
    if (!formData.username || errors.username) {
      alert("Please provide a valid username.");
      setIsLoading(false);
      return;
    }
    if (!formData.password || errors.password) {
      alert("Please provide a valid password.");
      setIsLoading(false);
      return;
    }

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
                name="username"
                placeholder="Type your username or Email"
                required
                onChange={handleValidation}
                className={`input ${errors.username ? "error" : ""}`}
              />
              {errors.username && <p className="error-text">{errors.username}</p>}
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Type your password"
                required
                onChange={handleValidation}
                className={`input ${errors.password ? "error" : ""}`}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
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
