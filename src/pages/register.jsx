import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      general: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const result = registerUser({
        username: formData.username.trim(),
        password: formData.password,
      });

      setIsLoading(false);

      if (!result.success) {
        setErrors({
          general: result.message,
        });
        return;
      }

      alert("Registered successfully!");
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="register-page">
      <div className="circle1"></div>
      <div className="circle2"></div>

      <fieldset>
        <div className="register-container">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {errors.general && <p className="error-text">{errors.general}</p>}

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Type your username or Email"
                value={formData.username}
                onChange={handleChange}
                className={`input ${errors.username ? "error" : ""}`}
              />
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Type your password"
                value={formData.password}
                onChange={handleChange}
                className={`input ${errors.password ? "error" : ""}`}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`input ${errors.confirmPassword ? "error" : ""}`}
              />
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>

            <button type="submit" className="signup-btn" disabled={isLoading}>
              {isLoading ? <div className="loading-spinner"></div> : "Sign Up"}
            </button>
          </form>

          <div className="or">Or Sign up with</div>

          <div className="social-login">
            <Link to="#" aria-label="Sign up with Facebook">
              <img
                src="https://img.icons8.com/color/48/000000/facebook.png"
                alt="Facebook"
              />
            </Link>

            <Link to="#" aria-label="Sign up with Google">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
              />
            </Link>

            <Link to="#" aria-label="Sign up with Twitter">
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