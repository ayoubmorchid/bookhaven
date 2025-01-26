import React from 'react';
import girl from "../images/girl.png";
import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";
import book4 from "../images/book4.png";
import book5 from "../images/book5.png";
import photo1 from '../images/photo1.jpg';
import '../style/section.css';

export default function Section() {
  return (
    <div className="section">
      {/* Welcome Section */}
      <div className="welcome-container">
        <div className="welcome-text">
          <h1>Welcome To EpicReads</h1>
          <p>We're so glad you're here</p>
          <h5>73,530 books with audio in different languages. Read for free, listen for $4/month</h5>
          <button className="welcome-button">Find Your Book</button>
        </div>
        <div className="welcome-image">
          <img src={girl} alt="Girl illustration" />
        </div>
      </div>

      {/* Keep Popular Books As Is */}
      <div className="description">
        <h1>
          Find your next great <br />
          read at our online <br />
          book store
        </h1>
        <h2 style={{ width: '1130px' }}>Best Authors Books</h2>
        <div className="popularbook">
          {[book1, book2, book3, book4, book5].map((book, index) => (
            <div key={index}>
              <img src={book} alt={`Book ${index + 1}`} />
              <p>
                Book Title <br /> by Author Name
              </p>
            </div>
          ))}
        </div>
        <button>See All →</button>
        <h2>Best Selling Book</h2>
        <div className="sellingbook">
          {[book4, book1, book2, book3, book5].map((book, index) => (
            <div key={index}>
              <img src={book} alt={`Book ${index + 1}`} />
              <p>
                Book Title <br /> by Author Name
              </p>
            </div>
          ))}
        </div>
        <button>See All →</button>
      </div>
    </div>
  );
}
