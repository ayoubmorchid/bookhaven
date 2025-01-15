
import React from "react";
import { Link } from "react-router-dom";
import '../style/login.css';

const Login = () => {
  return (
    <div className="login-page">
      <fieldset>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Type your username or Email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Type your password" />
            </div>
            <button type="submit" className="login-btn">Log In</button>
          </form>
          <div className="or">Or Log in</div>
          <div className="social-login">
            <Link><img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" /></Link>
            <Link><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" /></Link>
            <Link><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" /></Link>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Login;