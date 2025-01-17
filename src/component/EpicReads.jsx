import React from "react";
import { Link } from "react-router-dom";
import "../style/EpicReads.css";

// Import images
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


const EpicReads = () => {
  return (
    <div className="books-container">
      {/* عنوان الصفحة */}
      <h1>Explore Our Books</h1>
      <p>Find your next favorite read from our diverse collection.</p>

      <div className="content-container">
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

        {/* الأقسام */}
        <div className="books-grid">
          <CategorySection
            title="Detective"
            books={[
              { image: classyImage, title: "Jaya: The Mahabharata" },
              { image: harryImage, title: "1984 by George Orwell" },
              { image: robertsImage, title: "Sherlock Holmes" },
              { image: dragonTattooImage, title: "The Girl with the Dragon Tattoo" },
            ]}
          />

          <CategorySection
            title="Love"
            books={[
              { image: hooverImage, title: "Pride and Prejudice" },
              { image: xoxoImage, title: "The Notebook" },
              { image: turanoImage, title: "Me Before You" },
              { image: hollowImage, title: "The Time Traveler's Wife" },
            ]}
          />

          <CategorySection
            title="Science Fiction"
            books={[
              { image: bindingImage, title: "Dune by Frank Herbert" },
              { image: universeImage, title: "Ender's Game" },
              { image: kingdomImage, title: "Neuromancer" },
              { image: ruinsImage, title: "The Hitchhiker's Guide to the Galaxy" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

// Component for a single category
const CategorySection = ({ title, books }) => (
  <div className="category-section">
    <h3>{title}</h3>
    <div className="book-grid">
      {books.map((book, index) => (
        <div className="book" key={index}>
          <img src={book.image} alt={book.title} />
          <p>{book.title}</p>
          <div className="actions">
            <button>📖 Read</button>
            <button>❤ Like</button>
            <button>🛒 Buy</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EpicReads;
