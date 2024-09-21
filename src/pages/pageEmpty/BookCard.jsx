/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';

const BookCard = ({ book }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h2>{book.title}</h2>
      <p>Readers: {book.readers}</p>
      <div className="actions">
        <button className="like-button" onClick={handleLike}>👍 {likes}</button>
        <FeedbackForm bookId={book.id} />
      </div>
    </div>
  );
};

export default BookCard;
