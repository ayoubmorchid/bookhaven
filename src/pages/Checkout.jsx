import React, { useState } from "react";
import "../style/Checkout.css";

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

  const cartItems = [
    {
      title: "Livre L'enfer de Dante",
      price: 210,
      quantity: 1,
      image: process.env.PUBLIC_URL + "/images/BINDING.jpg",
    },
    {
      title: "Another Book",
      price: 150,
      quantity: 2,
      image: process.env.PUBLIC_URL + "/images/BOOK2.jpg",
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Order Summary</h1>

      <div className="checkout-items">
        {cartItems.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{item.price} MAD</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="order-total">
          <h3>Total: {calculateTotal()} MAD</h3>
        </div>
      </div>

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
