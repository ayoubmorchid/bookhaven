import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../config/api';

export default function Categorie() {
  const { c } = useParams();
  const [isLoadingCate, setLoadingCat] = useState(true);
  const [catFounds, setCatFounds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const listBooks = useRef(null);

  const getCateBooks = async () => {
    try {
      setLoadingCat(true);
      const res = await api.get(`/categories`);
      setCatFounds(res.data.data);
      setLoadingCat(false);
      listBooks.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      console.error("Error loading category books:", err);
      setLoadingCat(false);
    }
  };

  const getAllCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data.data);
    } catch (err) {
      console.error("Error loading categories list", err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, [c]);

  const displayedCategories = showAll ? categories : categories.slice(0, 5);

  const getCategoryIcon = (name) => {
    switch (name.toLowerCase()) {
      case "roman": return "📖";
      case "science-fiction": return "👽";
      case "fantasy": return "🧙‍♂️";
      case "policier": return "🕵️‍♂️";
      case "thriller": return "😱";
      case "horreur": return "👻";
      case "historique": return "📜";
      case "philosophie": return "🧠";
      case "psychologie": return "🧘";
      case "développement personnel": return "🚀";
      case "économie": return "💰";
      case "science": return "🔬";
      case "technologie": return "💻";
      case "cuisine": return "🍳";
      case "voyage": return "🌍";
      case "poésie": return "✍️";
      case "manga": return "📚";
      default: return "📘";
    }
  };

  return (
    <div className="content-container" ref={listBooks}>
      <div className="sidebar">
        <div className="search-bar">
          <input type="text" placeholder="Search books..." />
          <button>🔍</button>
        </div>
        <h2>Popular Categories</h2>
        <ul className="category-list">
          {displayedCategories.map((cat, index) => (
            <li key={index} className="category-item">
              <span className="category-icon">{getCategoryIcon(cat.nom)}</span>
              <Link to={`/categories/${cat.nom}`} className="category-name">{cat.nom}</Link>
            </li>
          ))}
        </ul>
        {categories.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "15px"
            }}
          >
            {showAll ? "Voir moins ▲" : "Voir plus ▼"}
          </button>
        )}
      </div>
    </div>
  );
}
