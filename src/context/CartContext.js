import React, { createContext, useState, useEffect } from "react";

// إنشاء سياق السلة
export const CartContext = createContext();

// مزود السلة لتوفير الحالة والوظائف
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // تحميل السلة من localStorage عند التهيئة
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // حفظ السلة إلى localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // إزالة عنصر من السلة
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  // استيراد الكتاب المعلق من localStorage
  const importPendingBook = () => {
    const pendingBook = localStorage.getItem("pendingBook");
    if (pendingBook) {
      addToCart(JSON.parse(pendingBook)); // إضافة الكتاب إلى السلة
      localStorage.removeItem("pendingBook"); // إزالة الكتاب من التخزين
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        importPendingBook,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};