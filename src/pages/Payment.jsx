import React, { useState } from "react";
import "../style/Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const isValidExpiryDate = (date) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(date)) return false;
    const [month, year] = date.split("/").map(Number);
    const now = new Date();
    const currentYear = Number(String(now.getFullYear()).slice(-2));
    const currentMonth = now.getMonth() + 1;
    return year > currentYear || (year === currentYear && month >= currentMonth);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError("");

    setTimeout(() => {
      if (cardNumber.length !== 16 || cvv.length !== 3 || !isValidExpiryDate(expiryDate)) {
        setError("Invalid card details. Please check your information.");
        setIsProcessing(false);
        return;
      }

      alert("Payment Successful! Thank you for your purchase.");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Secure Payment</h1>
      <form className="payment-form" onSubmit={handlePayment}>
        <label>Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9123 4567"
          maxLength="16"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
          required
        />

        <label>Card Holder</label>
        <input
          type="text"
          placeholder="Full Name"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          required
        />

        <div className="payment-details">
          <div>
            <label>Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              maxLength="5"
              value={expiryDate}
              onChange={(e) =>
                setExpiryDate(
                  e.target.value
                    .replace(/[^\d/]/g, "")
                    .replace(/(\d{2})(\d{1,2})/, "$1/$2")
                    .slice(0, 5)
                )
              }
              required
            />
          </div>

          <div>
            <label>CVV</label>
            <input
              type="text"
              placeholder="123"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              required
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="pay-btn" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
