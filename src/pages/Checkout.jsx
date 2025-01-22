import React, { useState } from "react";
import "../style/Checkout.css";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirmPurchase = () => {
    alert("Thank you for your purchase! Your order has been confirmed.");
    setIsPopupOpen(false);
  };

  // Sample cart items
  const cartItems = [
    {
      title: "Livre L'enfer de Dante",
      price: 210,
      quantity: 1,
      image: "../images/BINDING.jpg",
    },
    {
      title: "Another Book",
      price: 150,
      quantity: 2,
      image: "../images/BOOK2.jpg",
    },
  ];

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Order Summary</h1>

      {/* Include OrderSummary component */}
      <OrderSummary cartItems={cartItems} />

      <button onClick={handleOpenPopup} className="confirm-btn">
        Proceed to Shipping Information
      </button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Shipping Information</h2>
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
            </form>
            <div className="popup-actions">
              <button onClick={handleConfirmPurchase} className="confirm-btn">
                Confirm Purchase
              </button>
              <button onClick={handleClosePopup} className="continue-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;