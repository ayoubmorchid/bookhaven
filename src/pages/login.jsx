import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { login } from "../utils/auth";
import "../style/login.css";

const Login = () => {
  const { importPendingBook } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleValidation = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "username") {
      setErrors((prev) => ({
        ...prev,
        username: value.trim() === "" ? "Username is required" : "",
      }));
    }

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password:
          value.length < 6 ? "Password must be at least 6 characters" : "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      if (formData.username === "admin" && formData.password === "123456") {
        login();
        importPendingBook();

        const redirectPath = localStorage.getItem("redirectPath") || "/";
        localStorage.removeItem("redirectPath");

        setIsLoading(false);
        navigate(redirectPath);
        return;
      }

      setIsLoading(false);
      setErrors({
        general: "Invalid username or password.",
      });
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="circle1"></div>
      <div className="circle2"></div>

      <fieldset>
        <div className="login-container">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            {errors.general && (
              <p className="error-text">{errors.general}</p>
            )}

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Type your username or Email"
                value={formData.username}
                onChange={handleValidation}
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
                onChange={handleValidation}
                className={`input ${errors.password ? "error" : ""}`}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
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
            <Link to="#" aria-label="Log in with Facebook">
              <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" />
            </Link>
            <Link to="#" aria-label="Log in with Google">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
            </Link>
            <Link to="#" aria-label="Log in with Twitter">
              <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
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