import React, { createContext, useState } from "react";

// إنشاء سياق السلة
export const CartContext = createContext();

// مزود السلة لتوفير الحالة والوظائف
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // إضافة عنصر إلى السلة
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // إذا كان العنصر موجودًا بالفعل، قم بزيادة الكمية
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // إذا لم يكن موجودًا، أضفه مع كمية أولية 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // تحديث كمية العنصر
  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
