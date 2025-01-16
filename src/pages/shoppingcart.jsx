import React from 'react';
import RecommendedBooks from '../component/RecommendedBooks';

import NavbarAffter from '../component/navbaraffter';

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-page">
      <nav className="navbar">
      <NavbarAffter />    
      </nav>
      {/* Shopping Cart Content */}
      <div className="cart-container">
        <div className="cart-icon">
          <div className="icon"></div>
        </div>
        <div className="buttons">
          <button className="login-btn">Login</button>
          <button className="explore-btn">Explore items</button>
        </div>
      </div>

      {/* Recommended Books Section */}
      <section className="recommended-books">
        <h2>More To Love :</h2>
        <RecommendedBooks />
      </section>
    </div>
  );
};

export default ShoppingCart;
