/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FeedbackForm = ({ bookId }) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  const handleRating = (stars) => {
    setRating(stars);
  };

  const handleReviewSubmit = () => {
    setReviews(reviews + 1);
    alert(`Thanks for reviewing!`);
  };

  return (
    <div className="feedback-form">
      <h4>Rate & Review</h4>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => handleRating(star)}>
            {'★'.repeat(star)}
          </button>
        ))}
      </div>
      <p>Rating: {rating} stars</p>
      <button className="review-submit" onClick={handleReviewSubmit}>Submit Review</button>
      <p>{reviews} Reviews</p>
    </div>
  );
};

export default FeedbackForm;
