import React, { useState } from "react";
import "../style/BookDetails.css";

const BookDetails = ({ book, isOpen, toggleDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="book-details-overlay">
      <div className="book-details-popup">
        <button className="close-btn" onClick={toggleDetails}>
          ×
        </button>
        <div className="book-details-content">
          <img src={book.image} alt={book.nom} className="book-cover" />
          <div className="book-info">
            <h2>{book.nom}</h2>
            <p><strong>Résumé:</strong> {book.description}</p>
            <p>
              <strong>Reviews:</strong> {book.reviews} Reviews | {book.likes} Likes
            </p>
            <div className="rating">
              {Array.from({ length: book.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
