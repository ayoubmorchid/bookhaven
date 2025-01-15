// pages/resetPassword.jsx
import React from "react";
import "../style/resetPassword.css";

const ResetPassword = () => {
  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <button type="submit" className="reset-btn">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
