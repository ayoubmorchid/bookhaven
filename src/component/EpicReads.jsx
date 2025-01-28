import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/EpicReads.css";
import { CartContext } from "../context/CartContext";

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
import Favorites from "../component/Favorites";

const EpicReads = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const isLoggedIn = () => {
    return localStorage.getItem("token") === "logged_in";
  };

  const handleBuyClick = (book) => {
    if (!isLoggedIn()) {
      localStorage.setItem("redirectPath", "/checkout");
      navigate("/login");
    } else {
      addToCart(book);
      navigate("/checkout");
    }
  };

  const handleReadClick = (book) => {
    setCurrentBook(book);
    setIsPopupOpen(true);
  };

  const addToFavorites = (book) => {
    if (!favorites.find((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const toggleFavorites = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCurrentBook(null);
  };

  return (
    <div className="books-container">
      <div className="title">
      <h1 style={{color:"black"}}>Explore Our Books</h1>
      <p>Find your next favorite read from our diverse collection.</p>
      </div>
      

      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
        isFavoritesOpen={isFavoritesOpen}
        toggleFavorites={toggleFavorites}
      />

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

        <div className="books-grid">
          <CategorySection
            title="Detective"
            books={[
              { id: 1, image: classyImage, title: "Jaya: The Mahabharata", price: 120,
                 summary: "The introduction of Jaya sets the tone for the retelling of India's great epic, the Mahabharata. Devdutt Pattanaik emphasizes that the Mahabharata is more than a story of war; it is a deep exploration of human nature, ethics, and spirituality. He discusses the origin of the epic, attributed to Sage Vyasa, and how it has been transmitted through generations. The title Jaya ('Victory') signifies the ultimate triumph of dharma (righteousness) over adharma (unrighteousness), contrasting with the word Vijaya, which refers to a materialistic or worldly victory. Pattanaik highlights how this retelling focuses not only on the grand narrative but also on the lesser-known tales and characters from regional and folk traditions, making the Mahabharata a rich tapestry of lessons about life and humanity." , rating: "4.5/5" },
              { id: 2, image: harryImage, title: "1984 by George Orwell", price: 150,
                 summary: "1984 by George Orwell is a dystopian novel set in a totalitarian society controlled by the Party and its leader, Big Brother. The story follows Winston Smith, a man who secretly rebels against the Party’s oppressive rule by questioning its propaganda, pursuing forbidden love, and seeking truth. However, his defiance leads to his capture and brutal reeducation, breaking his spirit and forcing his submission. The novel explores themes of surveillance, censorship, control, and the destruction of individuality, offering a stark warning about authoritarian regimes.", rating: "4.8/5" },
              { id: 3, image: robertsImage, title: "Sherlock Holmes", price: 200,
                 summary: "Sherlock Holmes, created by Sir Arthur Conan Doyle, is a brilliant and eccentric detective known for his keen powers of observation and deductive reasoning. He solves complex cases, often with the help of his friend Dr. John Watson. Holmes's adventures, including famous stories like The Hound of the Baskervilles and A Study in Scarlet, feature him tackling mysteries involving murder, theft, and deception. His intellectual prowess and memorable personality have made him one of the most famous fictional detectives in literature.", rating: "4.7/5" },
              { id: 4, image: dragonTattooImage, title: "The Girl with the Dragon Tattoo", price: 180,
                 summary: "The Girl with the Dragon Tattoo by Stieg Larsson is a crime thriller that follows investigative journalist Mikael Blomkvist and brilliant hacker Lisbeth Salander as they investigate the decades-old disappearance of Harriet Vanger, a young woman from a powerful Swedish family. As they uncover shocking secrets about the Vanger family and corruption, they also face personal challenges. The novel explores themes of justice, revenge, and abuse, with complex characters and a gripping plot that has made it a worldwide bestseller.", rating: "4.6/5" },
            ]}
            onBuyClick={handleBuyClick}
            onReadClick={handleReadClick}
            addToFavorites={addToFavorites}
          />

          <CategorySection
            title="Love"
            books={[
              { id: 5, image: hooverImage, title: "Pride and Prejudice", price: 140, summary: "Pride and Prejudice by Jane Austen is a novel about love, marriage, and social expectations in 19th-century England. The story centers on Elizabeth Bennet, a smart and independent young woman, and her evolving relationship with the wealthy, aloof Mr. Darcy. Initially, Elizabeth’s prejudice against Darcy is shaped by misunderstandings, but as she gets to know him better, she discovers his true character. The novel critiques societal norms while highlighting themes of personal growth, mutual respect, and the importance of true love.", rating: "4.9/5" },
              { id: 6, image: xoxoImage, title: "The Notebook", price: 160, summary: "The Notebook by Nicholas Sparks is a romantic novel about the enduring love between Noah and Allie. The story follows their deep connection during their youth, despite social and familial obstacles, leading to a heartbreaking separation. Years later, Noah reads their love story to Allie, who suffers from Alzheimer's disease. The novel explores themes of memory, commitment, and the power of love to overcome time and challenges, highlighting the lasting bond between soulmates.", rating: "4.7/5" },
              { id: 7, image: turanoImage, title: "Me Before You", price: 130, summary: "Me Before You by Jojo Moyes is a romantic drama about Louisa Clark, an optimistic young woman, and Will Traynor, a wealthy man left paralyzed after an accident. Louisa becomes Will’s caregiver, and they form an unlikely bond despite their differences. As Louisa helps Will find joy in life again, she learns that he is considering assisted suicide, leading to difficult decisions about love, dignity, and the meaning of life. The novel explores themes of love, personal growth, and the impact of life-changing events.", rating: "4.6/5" },
              { id: 8, image: hollowImage, title: "The Time Traveler's Wife", price: 170, summary: "The Time Traveler's Wife by Audrey Niffenegger is a science fiction romance about Henry, a man who involuntarily time-travels, and Clare, his wife, who experiences life in a linear way. The novel alternates between their perspectives, highlighting the challenges of their relationship as they navigate time travel and its emotional toll. It explores themes of love, fate, memory, and the passage of time, as Henry and Clare's bond endures despite the unpredictable nature of their lives. The story reflects on the complexities of love and how it transcends time.", rating: "4.8/5" },
            ]}
            onBuyClick={handleBuyClick}
            onReadClick={handleReadClick}
            addToFavorites={addToFavorites}
          />

          <CategorySection
            title="Science Fiction"
            books={[
              { id: 9, image: bindingImage, title: "Dune by Frank Herbert", price: 200, summary: "Dune by Frank Herbert is a science fiction epic set on the desert planet of Arrakis, where powerful noble houses vie for control of the spice, a substance vital for space travel. The story follows Paul Atreides, heir to House Atreides, whose family is betrayed and overthrown. As Paul navigates political intrigue, religious prophecy, and survival in the harsh desert, he discovers his potential to lead and change the future. The novel explores themes of power, ecology, religion, and human evolution, offering a complex narrative with rich world-building and deep philosophical insights.", rating: "4.9/5" },
              { id: 10, image: universeImage, title: "Ender's Game", price: 180, summary: "Ender's Game by Orson Scott Card is a science fiction novel about Ender Wiggin, a young boy recruited into a military academy to train for an impending alien invasion by the 'Buggers.' Ender excels in the academy, using his intelligence and strategic skills to rise through the ranks. As he faces increasingly difficult battle simulations, he begins to question the morality of the war and the psychological toll of his training. The novel explores themes of leadership, the ethics of warfare, and the cost of conflict, offering a deep look into human nature and the consequences of manipulation.", rating: "4.8/5" },
              { id: 11, image: kingdomImage, title: "Neuromancer", price: 150, summary: "Neuromancer by William Gibson is a cyberpunk science fiction novel set in a dystopian future where technology and corporate power dominate society. The story follows Case, a washed-up hacker hired by a mysterious employer, Armitage, to perform a complex hack. Joined by a street samurai named Molly and a virtual intelligence called Wintermute, Case navigates cyberspace and the real world. The novel explores themes of artificial intelligence, identity, and the merging of human consciousness with technology, influencing the cyberpunk genre and concepts of virtual reality and cyberspace.", rating: "4.7/5" },
              { id: 12, image: ruinsImage, title: "The Hitchhiker's Guide to the Galaxy", price: 220, summary: "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction novel that follows Arthur Dent, an ordinary man who is saved from Earth’s destruction by an alien named Ford Prefect. Ford, a researcher for a quirky travel guide, takes Arthur on an absurd journey through space. Along the way, they meet eccentric characters like the two-headed Zaphod Beeblebrox, the depressed robot Marvin, and Trillian, the only other human survivor. The novel humorously explores themes of life, the universe, and existence, filled with witty dialogue and satirical commentary on bureaucracy and human nature.", rating: "4.8/5" },
            ]}
            onBuyClick={handleBuyClick}
            onReadClick={handleReadClick}
            addToFavorites={addToFavorites}
          />
        </div>
      </div>

      {/* نافذة القراءة */}
      {isPopupOpen && currentBook && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClosePopup}>✖</button>
            <h2>{currentBook.title}</h2>
            <p>{currentBook.summary}</p>
            <p><strong>Rating:</strong> {currentBook.rating}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const CategorySection = ({ title, books, onBuyClick, onReadClick, addToFavorites }) => (
  <div className="category-section">
    <h3>{title}</h3>
    <div className="book-grid">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.title} />
          <p>{book.title}</p>
          <p>Price: {book.price} MAD</p>
          <div className="actions">
            <button onClick={() => onReadClick(book)}>📖 Read</button>
            <button onClick={() => addToFavorites(book)}>❤ Like</button>
            <button onClick={() => onBuyClick(book)}>🛒 Buy</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default EpicReads;
