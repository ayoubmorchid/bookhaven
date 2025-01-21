import React from "react";
import "../style/books.css";
import Navbar from "../component/navbar";
import EpicReads from "../component/EpicReads";

const Books = () => {
  return (
    <>
      <Navbar />
      <div className="books-page">
        {/* قسم الكتب */}
        <EpicReads />

        {/* قسم المفضلات */}
        <aside className="favorites-sidebar">
          <h2>Favorite Book Lists</h2>
          <div className="favorite-book">
            <img src="book1.jpg" alt="Book Cover" />
            <div className="book-info">
              <h3>Viking Book</h3>
              <p>A thrilling Viking adventure.</p>
              <button>View More</button>
            </div>
          </div>
          <div className="favorite-book">
            <img src="book2.jpg" alt="Book Cover" />
            <div className="book-info">
              <h3>Sherlock Holmes</h3>
              <p>The classic detective story.</p>
              <button>View More</button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Books;
