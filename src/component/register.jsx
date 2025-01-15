import '../style/register.css';
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="register-page">
      <fieldset>
        <div className="register-container">
          <h2>Sign Up</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Type your username or Email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Type your password" />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Type your password" />
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
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

export default SignUpForm;
