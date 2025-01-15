// pages/books.jsx
import React from "react";
import "../style/books.css";
import Navbar from "../component/navbar";
import FooterSection from "../component/footer";

const Books = () => {
  return (
    <>
      <Navbar />
      <div className="books-container">
        <h1>Books Collection</h1>
        <div className="books-grid">
          {/* Map through books data */}
          {["book1.png", "book2.png", "book3.png", "book4.png", "book5.png"].map(
            (book, index) => (
              <div className="book-item" key={index}>
                <img src={require(`../images/${book}`)} alt={`Book ${index + 1}`} />
                <p>Book Title {index + 1}</p>
              </div>
            )
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Books;
