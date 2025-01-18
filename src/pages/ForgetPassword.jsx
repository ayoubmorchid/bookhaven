import React, { useState } from "react";
import "../style/ForgetPassword.css";

const ForgetPassword = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email) {
      setError("Both fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setMessage("A recovery link has been sent to your email.");
  };

  return (
    <div className="forget-password-page">
      <div className="container">
        <h2>Forgot Your Password?</h2>
        <p>
          Enter your username and email address, and we'll send you a recovery
          link.
        </p>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">
              <i className="fa fa-envelope"></i>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
