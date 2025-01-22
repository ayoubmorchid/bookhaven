import React from "react";

const OrderSummary = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="order-summary">
      <h2>ملخص الطلب</h2>
      {cartItems.map((item, index) => (
        <div className="order-item" key={index}>
          <img src={item.image} alt={item.title} className="order-image" />
          <div className="order-details">
            <p>اسم الكتاب: <strong>{item.title}</strong></p>
            <p>الكمية: {item.quantity}</p>
            <p>السعر: ${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
      <hr />
      <div className="order-total">
        <p><strong>الإجمالي:</strong> ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
