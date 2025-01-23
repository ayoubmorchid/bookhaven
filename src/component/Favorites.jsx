import React from "react";
import "../style/Favorites.css";

const Favorites = ({ favorites, removeFromFavorites, isFavoritesOpen, toggleFavorites }) => {
  return (
    <>
      <button className="favorites-toggle-btn" onClick={toggleFavorites}>
        {isFavoritesOpen ? "Close Favorites" : "Open Favorites"}
      </button>

      {isFavoritesOpen && (
        <div className="favorites-popup">
          {/* Close button */}
          <button className="close-btn" onClick={toggleFavorites}>
            &times;
          </button>
          <h2>Your Favorites</h2>
          {favorites.length === 0 ? (
            <p>No favorites added yet.</p>
          ) : (
            <ul>
              {favorites.map((fav) => (
                <li key={fav.id}>
                  <img src={fav.image} alt={fav.title} />
                  <span>{fav.title}</span>
                  <button onClick={() => removeFromFavorites(fav.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Favorites;
