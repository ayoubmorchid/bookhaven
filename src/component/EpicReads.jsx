import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/EpicReads.css";
import { CartContext } from "../context/CartContext";
import Favorites from "../component/Favorites";
import api from "../config/api";
import Categorie from "./Categorie";

// Random book images
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
  "https://i.pinimg.com/236x/33/eb/8f/33eb8f57d177a6525ab7b0077ea9fc62.jpg",
  "https://i.pinimg.com/236x/80/4d/c9/804dc93e5bba117398c0d61ebc22b623.jpg",
  "https://i.pinimg.com/236x/13/ad/62/13ad62f07a215db38786b87178a0f36b.jpg",
  "https://i.pinimg.com/236x/21/ab/fa/21abfa59fd7cd6aba9f5dc0c97c274b2.jpg",
  "https://i.pinimg.com/236x/f7/6e/31/f76e319b882f9ba3d3f82bb168f22329.jpg",
  "https://i.pinimg.com/236x/1c/4e/f2/1c4ef29cd22c5fec1210b97df9449e05.jpg",
  "https://i.pinimg.com/236x/20/01/f6/2001f640f8b80016921341524ed07d5d.jpg",
  "https://i.pinimg.com/236x/a0/fa/97/a0fa9784ce6985cfbcec3e66d02d6899.jpg",
  "https://i.pinimg.com/236x/ef/6e/6e/ef6e6eedd719d3015036843e0de647e0.jpg",
  "https://i.pinimg.com/236x/ef/aa/70/efaa70b713d7c5eabac1c1cd0930ec87.jpg",
  "https://i.pinimg.com/236x/f5/92/80/f5928045d533b080e789a2f3fb562d8c.jpg",
  "https://i.pinimg.com/236x/d3/77/5d/d3775dd662bf240c140085f8d2c53aca.jpg",
  "https://i.pinimg.com/474x/c2/ee/df/c2eedf90ad1229513f51e862d8bf9f7b.jpg",
  "https://i.pinimg.com/236x/40/7d/c9/407dc94f9773166970a29588e92417ed.jpg",
  "https://i.pinimg.com/236x/51/6d/d2/516dd29eaa714222e8b62fc735080c8e.jpg",
  "https://i.pinimg.com/236x/ce/18/cc/ce18cc3bfe2615da0675baf1380d8de2.jpg"
];

const EpicReads = () => {
  const [books, setBooks] = useState([]);
  const [isLoadingBooks, setLoadingBooks] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const isLoggedIn = () => localStorage.getItem("token") === "logged_in";

  const getBooks = async () => {
    setLoadingBooks(true);
    try {
      const res = await api.get("/livres");
      console.log(res.data);
      const booksWithImages = res.data.map((book) => ({
        ...book,
        image: RandomLinks[Math.floor(Math.random() * RandomLinks.length)],
      }));
      setBooks(booksWithImages);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
    setLoadingBooks(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

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

  const toggleFavorite = (book) => {
    setFavorites((prevFavorites) =>
      prevFavorites.find((fav) => fav.id === book.id)
        ? prevFavorites.filter((fav) => fav.id !== book.id)
        : [...prevFavorites, book]
    );
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
        <Categorie/>

        <div className="books-grid">
          {isLoadingBooks ? (
            <p>Loading books...</p>
          ) : (
            <CategorySection
              title="All Books"
              books={books}
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

const CategorySection = ({ title, books, onBuyClick, onReadClick, toggleFavorite, favorites }) => (
  <div className="category-section" data-title={title}>
    <h3>{title}</h3>
    <div className="book-grid">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.nom} />
          <p>{book.nom}</p>
          <p>Price: {book.prix} MAD</p>
          <div className="actions">
            <button onClick={() => onReadClick(book)}>📖 Read</button>
            <button
              onClick={() => toggleFavorite(book)}
              className={favorites.find((fav) => fav.id === book.id) ? "like-btn liked" : "like-btn"}
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
