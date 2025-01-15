import React from "react";
import "../style/ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="forget-password-page">
      <div className="container">
        <h2>Problèmes de connexion ?</h2>
        <p>Enter your email address, and username, and we'll send you a code to recover your account.</p>
        <form>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input type="text" id="username" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">
              <i className="fa fa-envelope"></i>
            </label>
            <input type="email" id="email" placeholder="johndoe@gmail.com" required />
          </div>
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
