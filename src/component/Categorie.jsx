import React from "react";

const categories = [
  { id: "all", nom: "All", value: "all" },
  { id: 1, nom: "Roman", value: "roman" },
  { id: 2, nom: "Science-fiction", value: "science-fiction" },
  { id: 3, nom: "Fantasy", value: "fantasy" },
  { id: 4, nom: "Économie", value: "économie" },
  { id: 5, nom: "Philosophie", value: "philosophie" },
  { id: 6, nom: "Technologie", value: "technologie" },
  {
    id: 7,
    nom: "Développement personnel",
    value: "développement personnel",
  },
  { id: 8, nom: "Psychologie", value: "psychologie" },
];

export default function Categorie({ selectedCategory, setSelectedCategory }) {
  const getCategoryIcon = (name = "") => {
    switch (name.toLowerCase()) {
      case "all":
        return "📚";
      case "roman":
        return "📖";
      case "science-fiction":
        return "👽";
      case "fantasy":
        return "🧙‍♂️";
      case "économie":
        return "💰";
      case "philosophie":
        return "🧠";
      case "technologie":
        return "💻";
      case "développement personnel":
        return "🚀";
      case "psychologie":
        return "🧘";
      default:
        return "📘";
    }
  };

  return (
    <aside className="sidebar">
      <h2>Categories</h2>

      <ul className="category-list">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`category-item ${
              selectedCategory === cat.value ? "active-category" : ""
            }`}
            onClick={() => setSelectedCategory(cat.value)}
          >
            <span className="category-icon">{getCategoryIcon(cat.value)}</span>
            <span className="category-name">{cat.nom}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}