import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/EpicReads.css";
import { CartContext } from "../context/CartContext";




import bindingImage from "../images/BINDING.jpg";
import classyImage from "../images/CLASSY.jpg";
import dragonTattooImage from "../images/Detective Investigation Book Cover Template.jpg";
import harryImage from "../images/HARRY.jpg";
import hollowImage from "../images/HOLLOW.jpg";
import hooverImage from "../images/HOOVER.jpg";
import kingdomImage from "../images/KINGDOM.jpg";
import robertsImage from "../images/ROBERTS.jpg";
import ruinsImage from "../images/RUINS.jpg";
import turanoImage from "../images/TURANO.jpg";
import universeImage from "../images/UNIVERSE.jpg";
import xoxoImage from "../images/XOXO.jpg";
import Favorites from "../component/Favorites";

const EpicReads = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const isLoggedIn = () => localStorage.getItem("token") === "logged_in";

  const handleBuyClick = (book) => {
    if (!isLoggedIn()) {
      localStorage.setItem("redirectPath", "/checkout");
      navigate("/login");
    } else {
      addToCart(book);
      navigate("/checkout");
    }
  };

  const handleReadClick = (book) => {
    setCurrentBook(book);
    setIsPopupOpen(true);
  };

  const addToFavorites = (book) => {
    if (!favorites.find((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const toggleFavorites = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCurrentBook(null);
  };

  return (
    <div className="books-container">
      <div className="title">
        <h1 >Explore Our Books</h1>
        <p>Find your next favorite read from our diverse collection.</p>
      </div>

      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
        isFavoritesOpen={isFavoritesOpen}
        toggleFavorites={toggleFavorites}
      />

      <div className="content-container">
        <div className="sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search books..." />
            <button>🔍</button>
          </div>
          <h2>Popular Categories</h2>
          <ul>
            <li><Link to="#">📘 Memory books</Link></li>
            <li><Link to="#">📖 Novels</Link></li>
            <li><Link to="#">🌍 Travel books</Link></li>
            <li><Link to="#">✒️ Poetry books</Link></li>
            <li><Link to="#">👤 Biography books</Link></li>
            <li><Link to="#">📚 Religious books</Link></li>
            <li><Link to="#">💡 Knowledge books</Link></li>
            <li><Link to="#">👶 Children's books</Link></li>
          </ul>
        </div>

        <div className="books-grid">
          <CategorySection
            title="Detective"
            books={[
              { id: 1, image: classyImage, title: "Jaya: The Mahabharata", price: 120, summary: "Summary here...", rating: "4.5/5" },
              { id: 2, image: harryImage, title: "1984 by George Orwell", price: 150, summary: "Summary here...", rating: "4.8/5" },
              { id: 3, image: robertsImage, title: "Sherlock Holmes", price: 200, summary: "Summary here...", rating: "4.7/5" },
              { id: 4, image: dragonTattooImage, title: "The Girl with the Dragon Tattoo", price: 180, summary: "Summary here...", rating: "4.6/5" },
            ]}
            onBuyClick={handleBuyClick}
            onReadClick={handleReadClick}
            addToFavorites={addToFavorites}
          />
          <CategorySection
            title="Love"
            books={[
              { id: 5, image: hooverImage, title: "Pride and Prejudice", price: 140, summary: "Summary here...", rating: "4.9/5" },
              { id: 6, image: xoxoImage, title: "The Notebook", price: 160, summary: "Summary here...", rating: "4.7/5" },
              { id: 7, image: turanoImage, title: "Me Before You", price: 130, summary: "Summary here...", rating: "4.6/5" },
              { id: 8, image: hollowImage, title: "The Time Traveler's Wife", price: 170, summary: "Summary here...", rating: "4.8/5" },
            ]}
            onBuyClick={handleBuyClick}
            onReadClick={handleReadClick}
            addToFavorites={addToFavorites}
          />

          <CategorySection
            title="Science Fiction"
            books={[
              { id: 9, image: bindingImage, title: "Dune by Frank Herbert", price: 200, summary: "Summary here...", rating: "4.9/5" },
              { id: 10, image: universeImage, title: "Ender's Game", price: 180, summary: "Summary here...", rating: "4.8/5" },
              { id: 11, image: kingdomImage, title: "Neuromancer", price: 150, summary: "Summary here...", rating: "4.7/5" },
              { id: 12, image: ruinsImage, title: "The Hitchhiker's Guide to the Galaxy", price: 220, summary: "Summary here...", rating: "4.8/5" },
            ]}
            onBuyClick={handleBuyClick}
            onReadClick={handleReadClick}
            addToFavorites={addToFavorites}
          />
        </div>
      </div>

      {isPopupOpen && currentBook && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClosePopup}>✖</button>
            <h2>{currentBook.title}</h2>
            <p>{currentBook.summary}</p>
            <p><strong>Rating:</strong> {currentBook.rating}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const CategorySection = ({ title, books, onBuyClick, onReadClick, addToFavorites }) => (
  <div className="category-section" data-title={title}>
    <h3>{title}</h3>
    <div className="book-grid">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.title} />
          <p>{book.title}</p>
          <p>Price: {book.price} MAD</p>
          <div className="actions">
            <button onClick={() => onReadClick(book)}>📖 Read</button>
            <button onClick={() => addToFavorites(book)}>❤ Like</button>
            <button onClick={() => onBuyClick(book)}>🛒 Buy</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EpicReads;
