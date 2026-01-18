import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";

export default function Categorie() {
  const [isLoadingCate, setLoadingCat] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryError, setCategoryError] = useState("");
  const [showAll, setShowAll] = useState(false);

  const getAllCategories = async () => {
    try {
      setLoadingCat(true);
      setCategoryError("");

      const res = await api.get("/categories");
      const list = res.data?.data || res.data || [];

      setCategories(Array.isArray(list) ? list : []);
    } catch (err) {
      console.error("Error loading categories:", err);
      setCategoryError("Unable to load categories.");
      setCategories([]);
    } finally {
      setLoadingCat(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const displayedCategories = showAll ? categories : categories.slice(0, 5);

  const getCategoryIcon = (name = "") => {
    switch (name.toLowerCase()) {
      case "roman":
        return "📖";
      case "science-fiction":
        return "👽";
      case "fantasy":
        return "🧙‍♂️";
      case "policier":
        return "🕵️‍♂️";
      case "thriller":
        return "😱";
      case "horreur":
        return "👻";
      case "historique":
        return "📜";
      case "philosophie":
        return "🧠";
      case "psychologie":
        return "🧘";
      case "développement personnel":
        return "🚀";
      case "économie":
        return "💰";
      case "science":
        return "🔬";
      case "technologie":
        return "💻";
      case "cuisine":
        return "🍳";
      case "voyage":
        return "🌍";
      case "poésie":
        return "✍️";
      case "manga":
        return "📚";
      default:
        return "📘";
    }
  };

  return (
    <div className="content-container">
      <div className="sidebar">
        <div className="search-bar">
          <input type="text" placeholder="Search books..." />
          <button type="button">🔍</button>
        </div>

        <h2>Popular Categories</h2>

        {isLoadingCate && <p>Loading categories...</p>}

        {categoryError && <p className="error-message">{categoryError}</p>}

        {!isLoadingCate && !categoryError && categories.length === 0 && (
          <p className="empty-message">No categories available.</p>
        )}

        {!isLoadingCate && !categoryError && categories.length > 0 && (
          <>
            <ul className="category-list">
              {displayedCategories.map((cat) => (
                <li key={cat.id || cat.nom} className="category-item">
                  <span className="category-icon">
                    {getCategoryIcon(cat.nom)}
                  </span>

                  <Link
                    to={`/categories/${cat.nom}`}
                    className="category-name"
                  >
                    {cat.nom}
                  </Link>
                </li>
              ))}
            </ul>

            {categories.length > 5 && (
              <button
                type="button"
                className="show-more-categories-btn"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Voir moins ▲" : "Voir plus ▼"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}