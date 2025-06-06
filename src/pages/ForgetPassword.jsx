import React, { useState, useEffect } from "react";
import "../style/ForgetPassword.css";

const ForgetPassword = () => {
  const [method, setMethod] = useState("email"); 
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState(""); 
  const [generatedCode, setGeneratedCode] = useState(""); 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0); 
  const [canResend, setCanResend] = useState(true); 
  const [showBubble, setShowBubble] = useState(false);

  const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString(); 
    setGeneratedCode(code);
    setShowBubble(true); 
    setTimeout(() => setShowBubble(false), 5000); 
    return code;
  };


  const handleSendCode = (e) => {
    e.preventDefault();

    if (method === "email") {
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      setMessage(`Verification code sent to your email.`);
    } else if (method === "phone") {
      if (!phone || !/^\+\d{10,15}$/.test(phone)) {
        setError("Please enter a valid phone number (e.g., +1234567890).");
        return;
      }
      setMessage(`Verification code sent to your phone.`);
    }

    const code = generateCode(); 
    setError("");
    setCanResend(false);
    setTimer(5); 
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

  const handleVerifyCode = (e) => {
    e.preventDefault();

    if (verificationCode === generatedCode) {
      setMessage(
        `Your ${method === "email" ? "email" : "phone number"} has been verified successfully!`
      );
      setError("");
    } else {
      setError("Invalid verification code. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="forget-password-page">
      <div className="container">
        <h2>Forgot Your Password?</h2>
        <p>Choose how you want to recover your account:</p>

    
        <div className="method-selection">
          <button
            className={`method-button ${method === "email" ? "active" : ""}`}
            onClick={() => setMethod("email")}
          >
            Email
          </button>
          <button
            className={`method-button ${method === "phone" ? "active" : ""}`}
            onClick={() => setMethod("phone")}
          >
            Phone
          </button>
        </div>

        <form onSubmit={handleSendCode}>
          {method === "email" && (
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
          )}
          {method === "phone" && (
            <div className="input-group">
              <label htmlFor="phone">
                <i className="fa fa-phone"></i>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit" className="reset-button" disabled={!canResend}>
            {canResend ? "Send Verification Code" : `Resend in ${timer}s`}
          </button>
        </form>

        {generatedCode && (
          <form onSubmit={handleVerifyCode}>
            <div className="input-group">
              <label htmlFor="code">
                <i className="fa fa-key"></i>
              </label>
              <input
                type="text"
                id="code"
                placeholder="Enter the verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="reset-button">
              Verify Code
            </button>
          </form>
        )}

        {showBubble && (
          <div className="code-bubble">
            Verification Code: <strong>{generatedCode}</strong>
          </div>
        )}

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ForgetPassword;
