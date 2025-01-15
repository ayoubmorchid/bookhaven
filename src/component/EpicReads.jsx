import React from "react";
import { Link } from "react-router-dom";
import "../style/page1.css";



const EpicReads = () => {
  return (
    <div>


      {/* Sidebar */}
      <div className="sidebar">
        <div className="search-bar">
          <input type="text" placeholder="Search books..." />
          <button>🔍</button>
        </div>
        <h2>Popular Categories</h2>
        <ul>
          <li>
            <Link to="#">📘 Memory books</Link>
          </li>
          <li>
            <Link to="#">📖 Novels</Link>
          </li>
          <li>
            <Link to="#">🌍 Travel books</Link>
          </li>
          <li>
            <Link to="#">✒️ Poetry books</Link>
          </li>
          <li>
            <Link to="#">👤 Biography books</Link>
          </li>
          <li>
            <Link to="#">📚 Religious books</Link>
          </li>
          <li>
            <Link to="#">💡 Knowledge books</Link>
          </li>
          <li>
            <Link to="#">👶 Children's books</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Category: Detective */}
        <CategorySection
          title="Detective"
          books={[
            { image : "CLASSY.jpg", title: "Jaya: The Mahabharata" },
            { image: "HARRY.jpg", title: "1984 by George Orwell" },
            { image: "ROBERTS.jpg", title: "Sherlock Holmes" },
            {
              image: "Detective Investigation Book Cover Template.jpg",
              title: "The Girl with the Dragon Tattoo",
            },
          ]}
        />

        {/* Category: Love */}
        <CategorySection
          title="Love"
          books={[
            { image: "HOOVER.jpg", title: "Pride and Prejudice" },
            { image: "XOXO.jpg", title: "The Notebook" },
            { image: "TURANO.jpg", title: "Me Before You" },
            { image: "HOLLOW.jpg", title: "The Time Traveler's Wife" },
          ]}
        />

        {/* Category: Science Fiction */}
        <CategorySection
          title="Science Fiction"
          books={[
            { image: "BINDING.jpg", title: "Dune by Frank Herbert" },
            { image: "UNIVERSE.jpg", title: "Ender's Game" },
            { image: "KINGDOM.jpg", title: "Neuromancer" },
            { image: "RUINS.jpg", title: "The Hitchhiker's Guide to the Galaxy" },
          ]}
        />
      </div>
    </div>
  );
};

// Category Section Component
const CategorySection = ({ title, books }) => (
  <div className="category-section">
    <h3>{title}</h3>
    <div className="book-grid">
      {books.map((book, index) => (
        <div className="book" key={index}>
          <img src={book.image} alt={book.title} />
          <p>{book.title}</p>
          <div className="actions">
            <button>📖</button>
            <button>❤</button>
            <button>🛒</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EpicReads;
