import React from 'react';

const RecommendedBooks = () => {
  const books = [
    {
      id: 1,
      title: 'India After Gandhi',
      author: 'Ramachandra Guha',
      image: 'https://via.placeholder.com/150', 
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Silent Scream',
      author: 'Angela Marsons',
      image: 'https://via.placeholder.com/150',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'The Kite Runner',
      author: 'Khaled Hosseini',
      image: 'https://via.placeholder.com/150',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Malcolm X',
      author: 'Alex Haley',
      image: 'https://via.placeholder.com/150',
      rating: 4.7,
    },
    {
      id: 5,
      title: 'Man on Earth',
      author: 'John Reader',
      image: 'https://via.placeholder.com/150',
      rating: 4.6,
    },
    {
      id: 6,
      title: 'Father of the Rain',
      author: 'Lily King',
      image: 'https://via.placeholder.com/150',
      rating: 4.4,
    },
  ];

  return (
    <div className="books-grid">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.image} alt={book.title} className="book-image" />
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <div className="rating">{'⭐'.repeat(Math.round(book.rating))}</div>
          <button className="add-to-cart-btn">🛒</button>
        </div>
      ))}
    </div>
  );
};

export default RecommendedBooks;
