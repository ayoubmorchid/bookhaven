import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Favorites from "../component/Favorites";
import Categorie from "./Categorie";

export const RandomLinks = [
  "https://i.pinimg.com/236x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg",
  "https://i.pinimg.com/236x/2e/3b/83/2e3b83a578b82e931ddc636db9f0cf27.jpg",
  "https://i.pinimg.com/236x/73/53/bc/7353bc704c70b6e33b5d1edb81ccfd01.jpg",
  "https://i.pinimg.com/474x/ce/42/f9/ce42f9ef20ed794e058f579f7d6c761b.jpg",
  "https://i.pinimg.com/236x/1f/13/1a/1f131af5e89af18bf835f2a5c4f609f4.jpg",
  "https://i.pinimg.com/236x/f0/66/0c/f0660ce0569d12be9082ac15dd23799f.jpg",
  "https://i.pinimg.com/236x/97/54/7b/97547b5abc1b6ee5ba5d362bbc4de38c.jpg",
  "https://i.pinimg.com/474x/22/73/ec/2273ec14d270c83777abbf93ed8975bd.jpg",
  "https://i.pinimg.com/236x/63/c3/44/63c344b8eaba0eb78a87106b856375a3.jpg",
  "https://i.pinimg.com/236x/c0/31/35/c031351c98bf72da7281b884ada14f31.jpg",
  "https://i.pinimg.com/236x/5a/a5/7a/5aa57a926a649f6a93d8435de9d567bd.jpg",
  "https://i.pinimg.com/236x/d2/b6/e4/d2b6e461c99cf9eead02f461a8b1b900.jpg",
];

const booksData = [
  {
    id: 1,
    nom: "The Great Gatsby",
    prix: 120,
    category: "roman",
    summary: "A classic novel about wealth, love, ambition, and the American dream.",
    rating: "4.5",
    image: RandomLinks[0],
  },
  {
    id: 2,
    nom: "Atomic Habits",
    prix: 150,
    category: "développement personnel",
    summary: "A practical guide to building good habits and breaking bad ones.",
    rating: "4.8",
    image: RandomLinks[1],
  },
  {
    id: 3,
    nom: "Harry Potter",
    prix: 180,
    category: "fantasy",
    summary: "A fantasy story about magic, friendship, courage, and adventure.",
    rating: "4.9",
    image: RandomLinks[2],
  },
  {
    id: 4,
    nom: "Rich Dad Poor Dad",
    prix: 130,
    category: "économie",
    summary: "A book about money, investing, financial education, and mindset.",
    rating: "4.6",
    image: RandomLinks[3],
  },
  {
    id: 5,
    nom: "The Alchemist",
    prix: 110,
    category: "philosophie",
    summary: "A philosophical story about dreams, destiny, and personal journey.",
    rating: "4.7",
    image: RandomLinks[4],
  },
  {
    id: 6,
    nom: "Clean Code",
    prix: 220,
    category: "technologie",
    summary: "A programming book about writing readable, maintainable, and clean code.",
    rating: "4.8",
    image: RandomLinks[5],
  },
  {
    id: 7,
    nom: "Think and Grow Rich",
    prix: 140,
    category: "développement personnel",
    summary: "A personal development book about success, goals, and mindset.",
    rating: "4.4",
    image: RandomLinks[6],
  },
  {
    id: 8,
    nom: "The Psychology of Money",
    prix: 160,
    category: "psychologie",
    summary: "A book about financial behavior, money decisions, and long-term thinking.",
    rating: "4.7",
    image: RandomLinks[7],
  },
  {
    id: 9,
    nom: "Deep Work",
    prix: 135,
    category: "développement personnel",
    summary: "A productivity book about focus, discipline, and meaningful work.",
    rating: "4.6",
    image: RandomLinks[8],
  },
  {
    id: 10,
    nom: "1984",
    prix: 100,
    category: "science-fiction",
    summary: "A dystopian novel about surveillance, power, control, and freedom.",
    rating: "4.6",
    image: RandomLinks[9],
  },
  {
    id: 11,
    nom: "The Hobbit",
    prix: 170,
    category: "fantasy",
    summary: "A fantasy adventure about Bilbo Baggins and his unexpected journey.",
    rating: "4.8",
    image: RandomLinks[10],
  },
  {
    id: 12,
    nom: "Start With Why",
    prix: 145,
    category: "économie",
    summary: "A business and leadership book about purpose and inspiration.",
    rating: "4.5",
    image: RandomLinks[11],
  },
];

const EpicReads = () => {
  const [books] = useState(booksData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const isLoggedIn = () => localStorage.getItem("token") === "logged_in";

  const filteredBooks =
    selectedCategory === "all"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const handleBuyClick = (book) => {
    if (!isLoggedIn()) {
      localStorage.setItem("pendingBook", JSON.stringify(book));
      localStorage.setItem("redirectPath", "/checkout");
      navigate("/login");
      return;
    }

    addToCart(book);
    navigate("/checkout");
  };

  const handleReadClick = (book) => {
    setCurrentBook(book);
    setIsPopupOpen(true);
  };

  const toggleFavorite = (book) => {
    setFavorites((prev) =>
      prev.find((fav) => fav.id === book.id)
        ? prev.filter((fav) => fav.id !== book.id)
        : [...prev, book]
    );
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const toggleFavorites = () => {
    setIsFavoritesOpen((prev) => !prev);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCurrentBook(null);
  };

  return (
    <div className="books-container">
      <div className="title">
        <h1>Explore Our Books</h1>
        <p>Find your next favorite read from our diverse collection.</p>
      </div>

      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
        isFavoritesOpen={isFavoritesOpen}
        toggleFavorites={toggleFavorites}
      />

      <div className="content-container">
        <Categorie
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="books-grid">
          {filteredBooks.length === 0 ? (
            <p className="empty-message">No books available in this category.</p>
          ) : (
            <CategorySection
              title={
                selectedCategory === "all"
                  ? "All Books"
                  : selectedCategory
              }
              books={filteredBooks}
              onBuyClick={handleBuyClick}
              onReadClick={handleReadClick}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          )}
        </div>
      </div>

      {isPopupOpen && currentBook && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClosePopup}>
              ✖
            </button>

            <h2>{currentBook.nom}</h2>
            <p>{currentBook.summary || "No description available."}</p>
            <p>
              <strong>Category:</strong> {currentBook.category}
            </p>
            <p>
              <strong>Rating:</strong> {currentBook.rating || "N/A"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const CategorySection = ({
  title,
  books,
  onBuyClick,
  onReadClick,
  toggleFavorite,
  favorites,
}) => (
  <div className="category-section" data-title={title}>
    <h3>{title}</h3>

    <div className="book-grid">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.nom} />

          <p>{book.nom}</p>
          <p>{book.prix} MAD</p>

          <div className="actions">
            <button onClick={() => onReadClick(book)}>📖 Read</button>

            <button
              onClick={() => toggleFavorite(book)}
              className={
                favorites.find((fav) => fav.id === book.id)
                  ? "like-btn liked"
                  : "like-btn"
              }
            >
              ❤ Like
            </button>

            <button onClick={() => onBuyClick(book)}>🛒 Buy</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EpicReads;