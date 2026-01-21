import React, { useContext, useState, useEffect } from "react";

import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      navigate("/books");
    }
  }, [cartItems, navigate]);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.prix || item.price || 0);
      const quantity = Number(item.quantity || 1);
      return total + price * quantity;
    }, 0);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Order Summary</h1>

      <div className="checkout-items">
        {cartItems.length === 0 ? (
          <p className="empty-message">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="item" key={item.id}>
              <img
                src={item.image}
                alt={item.nom || "Book image"}
                className="item-image"
              />

              <div className="item-details">
                <p className="item-title">{item.nom}</p>
                <p className="item-price">{item.prix} MAD</p>

                <div className="quantity-controls">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    -
                  </button>

                  <span className="quantity">{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-btn"
                title="Remove item"
                onClick={() => removeFromCart(item.id)}
              >
                ✖
              </button>
            </div>
          ))
        )}

        <div className="order-total">
          <h3>Total: {calculateTotal()} MAD</h3>
        </div>
      </div>

      <div className="checkout-actions">
        <button onClick={() => navigate("/books")} className="back-btn">
          Back to Books
        </button>

        <button onClick={handleOpenPopup} className="confirm-btn">
          Proceed to Shipping Information
        </button>
      </div>

      {isPopupOpen && (
        <div className="checkout-popup-overlay">
          <div className="checkout-popup">
            <h2>Shipping Information</h2>

            <form className="checkout-shipping-form">
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

              <div className="checkout-terms">
                <input type="checkbox" id="accept-terms" />
                <label htmlFor="accept-terms">
                  I accept the terms and conditions
                </label>
              </div>
            </form>

            <div className="checkout-popup-actions">
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