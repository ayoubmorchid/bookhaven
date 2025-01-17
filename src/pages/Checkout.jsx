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
      <h1 className="checkout-title">Shopping Cart</h1>

      <div className="checkout-card">
        <div className="product-info">
          <img
            src="../images/book-placeholder.jpg"
            alt="Book Cover"
            className="product-image"
          />
          <div className="product-details">
            <h2 className="product-title">
              Livre L'enfer de Dante illustré par Gustave Dore vers 1890 édition
              Altemus
            </h2>
            <p className="product-price">210 MAD</p>
            <p className="product-reviews">★ 871 Reviews | 5,000+ sold</p>
            <div className="payment-options">
              <span>Pay with:</span>
              <img src="../images/visa.png" alt="Visa" />
              <img src="../images/paypal.png" alt="PayPal" />
              <img src="../images/sepa.png" alt="SEPA" />
            </div>
            <div className="buyer-protection">
              <input type="checkbox" id="buyer-protection" />
              <label htmlFor="buyer-protection">
                Get full refund if the item is not as described or if it is not
                delivered
              </label>
            </div>
          </div>
        </div>

        <div className="checkout-actions">
          <div className="seller-info">
            <h3>Sold By</h3>
            <p className="seller-name">Family Store (Trader)</p>
            <p className="free-shipping">Free Shipping</p>
          </div>

          <form className="shipping-form">
            <label>
              Full Name:
              <input type="text" placeholder="Enter your full name" />
            </label>
            <label>
              Location:
              <input type="text" placeholder="Enter your location" />
            </label>
            <label>
              Delivery Note:
              <input type="text" placeholder="Optional note" />
            </label>
            <div className="terms">
              <input type="checkbox" id="accept-terms" />
              <label htmlFor="accept-terms">I accept the terms and conditions</label>
            </div>
            <button type="submit" className="save-shipping-btn">
              Save shipping information
            </button>
          </form>
        </div>
      </div>

      <div className="checkout-footer">
        <button onClick={handleConfirmPurchase} className="confirm-btn">
          Go To Checkout
        </button>
        <button onClick={handleContinueShopping} className="continue-btn">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Checkout;
