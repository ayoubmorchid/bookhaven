import React from "react";
import girl from "../images/girl.png";
import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";
import book4 from "../images/book4.png";
import book5 from "../images/book5.png";

const popularBooks = [
  { image: book1, title: "Atomic Habits", author: "James Clear" },
  { image: book2, title: "The Alchemist", author: "Paulo Coelho" },
  { image: book3, title: "1984", author: "George Orwell" },
  { image: book4, title: "Harry Potter", author: "J.K. Rowling" },
  { image: book5, title: "Clean Code", author: "Robert C. Martin" },
];

const bestSellingBooks = [
  { image: book4, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { image: book1, title: "Deep Work", author: "Cal Newport" },
  { image: book2, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { image: book3, title: "Start With Why", author: "Simon Sinek" },
  { image: book5, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

export default function Section() {
  const renderBooks = (books) =>
    books.map((book, index) => (
      <div className="home-book-card" key={`${book.title}-${index}`}>
        <img src={book.image} alt={book.title} />
        <p>
          {book.title} <br />
          <span>by {book.author}</span>
        </p>
      </div>
    ));

  return (
    <section className="section">
      <div className="welcome-container">
        <div className="welcome-text">
          <h1>Welcome To EpicReads</h1>
          <p>We're so glad you're here</p>
          <h5>
            Discover thousands of books in different genres. Read more, learn
            more, and find your next favorite story.
          </h5>
          <button className="welcome-button">Find Your Book</button>
        </div>

        <div className="welcome-image">
          <img src={girl} alt="Girl reading illustration" />
        </div>
      </div>

      <div className="description">
        <h1>
          Find your next great <br />
          read at our online <br />
          book store
        </h1>

        <h2>Best Authors Books</h2>
        <div className="popularbook">{renderBooks(popularBooks)}</div>
        <button>See All →</button>

        <h2>Best Selling Books</h2>
        <div className="sellingbook">{renderBooks(bestSellingBooks)}</div>
        <button>See All →</button>
      </div>
    </section>
  );
}