import React, { useContext, useState } from "react";
import "../style/Checkout.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);


  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
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
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="order-total">
          <h3>Total: {calculateTotal()} MAD</h3>
        </div>
      </div>

      <div className="checkout-actions">
        <button
          onClick={() => navigate("/books")}
          className="back-btn"
        >
          Back to Books
        </button>
        <button onClick={handleOpenPopup} className="confirm-btn">
          Proceed to Shipping Information
        </button>
      </div>

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
              <button onClick={handleClosePopup} className="continue-btn">
                Back to Cart
              </button>
              <button onClick={() => navigate("/payment")} className="confirm-btn">
                Pay with MasterCard
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
