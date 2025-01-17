import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/books"); // توجيه المستخدم إلى صفحة الكتب
  };

  const handleConfirmPurchase = () => {
    alert("Thank you for your purchase! Your order has been confirmed.");
    navigate("/books"); // إعادة المستخدم إلى صفحة الكتب بعد الشراء
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p>Review your items and confirm your purchase.</p>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <ul>
          <li>Book 1: $19.99</li>
          <li>Book 2: $24.99</li>
          <li>Book 3: $15.99</li>
        </ul>
        <p className="total">Total: $60.97</p>
      </div>

      <div className="checkout-actions">
        <button onClick={handleConfirmPurchase} className="confirm-btn">
          Confirm Purchase
        </button>
        <button onClick={handleContinueShopping} className="continue-btn">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Checkout;
