/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';

const booksData = [
  // (book data remains unchanged)
  { 
        id: 1, 
        title: 'Book One', 
        image: 'https://marketplace.canva.com/EAFf0E5urqk/1/0/1003w/canva-blue-and-green-surreal-fiction-book-cover-53S3IzrNxvY.jpg', 
        content: 'Book One takes readers on a breathtaking journey through unknown lands filled with mythical creatures and uncharted territories. Our protagonist, an unlikely hero, is thrust into a world of adventure after discovering a mysterious artifact. As he embarks on a quest to uncover the secrets of this ancient relic, he learns the true meaning of courage and sacrifice. Each chapter reveals deeper layers of intrigue, as the stakes grow higher and the fate of the world hangs in the balance. This is a tale of bravery, friendship, and the timeless struggle between good and evil.'
    },
    { 
        id: 2, 
        title: 'Book Two', 
        image: 'https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg', 
        content: 'In Book Two, readers are transported into the eerie and enchanting dark woods, where every shadow holds a secret. Our heroine, a young witch-in-training, must navigate a world where magic is as dangerous as it is powerful. As she journeys deeper into the forest, she encounters mystical creatures and uncovers hidden truths about her family’s past. Along the way, she learns the importance of trust and the power of resilience. Book Two masterfully weaves a narrative full of suspense, magic, and mystery, keeping readers on the edge of their seats until the very last page.'
    },
    { 
        id: 3, 
        title: 'Book Three', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEva3xcmk9IWN85gG7GRM2XC8UbNty2nUK7g&s', 
        content: 'Book Three offers a thrilling mystery that grips you from the first page. Set in a small coastal town, the story follows a group of friends who stumble upon a centuries-old treasure map. As they work to uncover the secrets of the map, they are drawn into a world of danger, deceit, and betrayal. With every clue they unravel, the stakes grow higher, and the group soon realizes that they are not the only ones searching for the treasure. This story of adventure is packed with twists and turns, leaving readers guessing until the very end.'
    },
    { 
        id: 4, 
        title: 'Book Four', 
        image: 'https://ew.com/thmb/MaxHBP4uhvg9_3eNeWgx_SOSku0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855669-6cfb2099b6e84a4899ce368d6facc242.jpg', 
        content: 'Dive deep into the enchanted world of Book Four, where the line between magic and reality is blurred. Set in a kingdom plagued by dark forces, the story centers around a young prince who must uncover the secrets of his family’s past in order to save his people. With the help of a ragtag group of allies, he ventures into a mystical land where nothing is as it seems. Book Four combines elements of fantasy, intrigue, and epic battles, painting a vivid picture of a world teetering on the brink of destruction, where hope is a rare and precious commodity.'
    },
    { 
        id: 5, 
        title: 'Book Five', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocyLSCWpKl8K1I7CnTRwexWn2iCHn-I3PuA&s', 
        content: 'Book Five tells the captivating story of a young detective trying to make a name for herself in a city filled with corruption and crime. When a string of seemingly unrelated murders leads her to uncover a web of lies that stretches to the highest levels of power, she must race against time to expose the truth before she becomes the next target. Set against the backdrop of a gritty urban landscape, this crime thriller delves into themes of justice, morality, and the human condition, with every chapter bringing new twists and shocks.'
    },
    { 
        id: 6, 
        title: 'Book Six', 
        image: 'https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg', 
        content: 'Book Six is a poignant exploration of loneliness and the human spirit. The story follows an aging artist who has withdrawn from the world after a personal tragedy. As he grapples with his loss, he finds solace in painting, channeling his emotions into his work. One day, he meets a young woman who is struggling with her own demons, and together, they embark on a journey of healing and self-discovery. This deeply emotional novel explores themes of grief, love, and redemption, offering a moving portrayal of the power of human connection.'
    },
    { 
        id: 7, 
        title: 'Book Seven', 
        image: 'https://marketplace.canva.com/EAFwJNp8JNU/1/0/1003w/canva-purple-and-green-romance-novel-book-cover-uxus8p_qP8o.jpg', 
        content: 'In Book Seven, readers are swept away into a whirlwind romance set against the backdrop of a vibrant, bustling city. The story follows two individuals from very different worlds who are brought together by a chance encounter. As their relationship deepens, they must navigate the challenges of their contrasting lives, each forced to confront their fears and vulnerabilities. Filled with passion, heartbreak, and joy, this romance novel is a celebration of love in all its forms, exploring the complexities of human emotions and the transformative power of relationships.'
    },
    { 
        id: 8, 
        title: 'Book Eight', 
        image: 'https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg', 
        content: 'Book Eight unravels a gripping mystery in a small, sleepy town where nothing is as it seems. A series of unexplained events begins to shake the community, and it’s up to a retired detective to piece together the clues. As he digs deeper into the case, long-buried secrets come to light, threatening to tear the town apart. With its intricate plot, well-developed characters, and a setting that comes alive on the page, this novel will keep readers on the edge of their seats, eager to solve the puzzle before the final reveal.'
    },
    { 
        id: 9, 
        title: 'Book Nine', 
        image: 'https://i.pinimg.com/236x/b3/99/2e/b3992eab75311a326c66a0ece2b558df.jpg', 
        content: 'Book Nine is an inspiring tale of perseverance and hope, following the life of a young athlete who dreams of making it big. Battling against the odds, including injury and personal challenges, the protagonist’s journey is one of self-discovery and triumph. Set against the high-stakes world of competitive sports, this novel explores themes of dedication, resilience, and the importance of never giving up on your dreams. It’s a story that will resonate with anyone who has ever faced adversity and fought to achieve their goals.'
    },
    { 
        id: 10, 
        title: 'Book Ten', 
        image: 'https://ilovetypography.com/img/2016/02/missarum-title1.jpg', 
        content: 'In Book Ten, readers are taken on a historical journey through time, exploring the rise and fall of an ancient empire. Through the eyes of a young historian, the book brings to life the battles, political intrigue, and cultural achievements of this once-great civilization. With meticulous attention to detail and a richly immersive narrative, this novel paints a vivid picture of a bygone era, offering a glimpse into the lives of the people who shaped history. It’s a must-read for fans of historical fiction and anyone interested in the complexities of human civilization.'
    },
    { 
        id: 11, 
        title: 'Book Eleven', 
        image: 'https://ew.com/thmb/OqbZc9hel5uz1R2YcQmCTmW5RPI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hpnc6-f0cb6882c7dd4367b0fde80b9a9939f9.jpg', 
        content: 'Book Eleven is a thrilling sci-fi adventure set in a distant future where humanity has colonized the stars. The protagonist, a spaceship captain, is tasked with a mission that could change the course of history. As he and his crew navigate through uncharted space, they encounter alien civilizations, hostile environments, and ethical dilemmas that challenge their understanding of the universe. Fast-paced and thought-provoking, this novel explores the themes of exploration, survival, and the moral complexities of space travel.'
    },
    { 
        id: 12, 
        title: 'Book Twelve', 
        image: 'https://edit.org/img/blog/d3s-design-book-covers.webp', 
        content: 'Book Twelve is a heartfelt coming-of-age story that follows a group of friends through the ups and downs of adolescence. Set in a small town, the novel captures the essence of youth, with all its triumphs and tribulations. As the characters navigate school, family, and first love, they come to understand the complexities of growing up and the importance of friendship. This nostalgic, beautifully written novel will resonate with readers of all ages, reminding them of the joys and challenges of their own journey to adulthood.'
    }
];

const usersData = [
  // (users data remains unchanged)
];

const App = () => {
  const [page, setPage] = useState(1);
  const [bookReviews, setBookReviews] = useState({});
  const [bookLikes, setBookLikes] = useState({});
  const [bookHearts, setBookHearts] = useState({});
  const [bookRatings, setBookRatings] = useState({});
  const [activeBook, setActiveBook] = useState(null); // New state for active book content

  const handleLike = (id) => {
    setBookLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleHeart = (id) => {
    setBookHearts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRating = (id, rating) => {
    setBookRatings((prev) => ({
      ...prev,
      [id]: rating,
    }));
  };

  const handleReviewSubmit = (id, review) => {
    setBookReviews((prev) => ({
      ...prev,
      [id]: review,
    }));
  };

  // Handle when user clicks on the image
  const handleImageClick = (id) => {
    setActiveBook(id === activeBook ? null : id); // Toggle the content display
  };

  return (
    <div className="app-container">
      <nav>
        <button onClick={() => setPage(1)}>Books Page</button>
        <button onClick={() => setPage(2)}>User Details</button>
      </nav>

      {page === 1 && (
        <div className="book-list">
          {booksData.map((book) => (
            <div className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <img
                src={book.image}
                alt={book.title}
                onClick={() => handleImageClick(book.id)}
                className="book-image"
              />
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${bookRatings[book.id] >= star ? 'filled' : ''}`}
                    onClick={() => handleRating(book.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="button-group">
                <button className="heart-button" onClick={() => handleHeart(book.id)}>
                  ❤️ {bookHearts[book.id] || 0}
                </button>
                <button className="like-button" onClick={() => handleLike(book.id)}>
                  👍 {bookLikes[book.id] || 0}
                </button>
                <button className="download-button">Download</button>
              </div>

              {/* Display the content when the image is clicked */}
              {activeBook === book.id && (
                <div className="book-content highlighted">
                  <p className="sparkle-effect">
                    {book.content}
                  </p>
                </div>
              )}

              {/* Review form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const review = e.target.review.value;
                  handleReviewSubmit(book.id, review);
                }}
              >
                <textarea
                  name="review"
                  placeholder="Write your review here"
                ></textarea>
                <button type="submit">Submit Review</button>
              </form>
              <p>Review: {bookReviews[book.id]}</p>
            </div>
          ))}
        </div>
      )}

      {page === 2 && (
        <div className="user-details">
          <div className="top-section">
            <div className="top-books">
              <h3>Top Books</h3>
              <ul>
                {Object.entries(bookLikes)
                  .sort((a, b) => b[1] - a[1])
                  .map(([id, likes]) => (
                    <li key={id}>
                      {booksData.find((book) => book.id === parseInt(id)).title} - {likes} Likes
                    </li>
                  ))}
              </ul>
            </div>

            <div className="top-reviews">
              <h3>Top Reviews</h3>
              <ul>
                {Object.entries(bookReviews).map(([id, review]) => (
                  <li key={id}>
                    {booksData.find((book) => book.id === parseInt(id)).title} - Review: {review}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="comments-section">
            <h3>Comments & User Reads</h3>
            {usersData.map((user) => (
              <div key={user.id} className="user-read-books">
                <h4>{user.name}</h4>
                <p>Books Read:</p>
                <ul>
                  {user.booksRead.map((bookId) => (
                    <li key={bookId}>
                      {booksData.find((book) => book.id === bookId).title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
