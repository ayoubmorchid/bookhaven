import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";

const fallbackCategories = [
  { id: 1, nom: "Roman" },
  { id: 2, nom: "Science-fiction" },
  { id: 3, nom: "Fantasy" },
  { id: 4, nom: "Policier" },
  { id: 5, nom: "Thriller" },
  { id: 6, nom: "Historique" },
  { id: 7, nom: "Philosophie" },
  { id: 8, nom: "Technologie" },
];

export default function Categorie() {
  const [isLoadingCate, setLoadingCat] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryError, setCategoryError] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        setLoadingCat(true);
        setCategoryError("");

        const res = await api.get("/categories");
        const list = res.data?.data || res.data || [];

        setCategories(Array.isArray(list) && list.length > 0 ? list : fallbackCategories);
      } catch (err) {
        console.error("Error loading categories:", err);
        setCategories(fallbackCategories);
        setCategoryError("");
      } finally {
        setLoadingCat(false);
      }
    };

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
      case "historique":
        return "📜";
      case "philosophie":
        return "🧠";
      case "technologie":
        return "💻";
      default:
        return "📘";
    }
  };

  return (
    <aside className="sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Search books..." />
        <button type="button">🔍</button>
      </div>

      <h2>Popular Categories</h2>

      {isLoadingCate && (
        <p className="loading-message">Loading categories...</p>
      )}

      {categoryError && (
        <p className="error-message">{categoryError}</p>
      )}

      {!isLoadingCate && categories.length === 0 && (
        <div className="category-empty-state">
          <p>No categories available.</p>
        </div>
      )}

      {!isLoadingCate && categories.length > 0 && (
        <>
          <ul className="category-list">
            {displayedCategories.map((cat, index) => {
              const categoryName = cat?.nom || cat?.name || "Unknown category";
              const categoryKey = cat?.id || `${categoryName}-${index}`;

              return (
                <li key={categoryKey} className="category-item">
                  <span className="category-icon">
                    {getCategoryIcon(categoryName)}
                  </span>

                  <Link
                    to={`/categories/${encodeURIComponent(categoryName)}`}
                    className="category-name"
                  >
                    {categoryName}
                  </Link>
                </li>
              );
            })}
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
    </aside>
  );
}