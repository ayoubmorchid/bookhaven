import React, { useState, useEffect } from "react";
import "../style/ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0); // عداد بالثواني
  const [canResend, setCanResend] = useState(true); // حالة الزر

  const handleSendCode = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    setMessage("Verification code sent to your email.");
    setError("");
    setCanResend(false);
    setTimer(60); 
  };

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true); 
    }

    return () => clearInterval(interval); 
  }, [timer]);

  return (
    <div className="forget-password-page">
      <div className="container">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email to receive a verification code.</p>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSendCode}>
          <div className="input-group">
            <label htmlFor="email">
              <i className="fa fa-envelope"></i>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-button" disabled={!canResend}>
            {canResend ? "Send Verification Code" : `Resend in ${timer}s`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
