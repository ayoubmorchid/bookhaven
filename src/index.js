import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext'; // استيراد CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* تغليف التطبيق بـ CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
